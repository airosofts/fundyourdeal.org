// The site's own visit counts (there's no Google Analytics on fundyourdeal.org).
// The browser beacons small events to /api/t, which drops bots, adds device and
// country and forwards them to the portal's Analytics page. Contract: the
// portal's docs/site-analytics.md, "Site → portal". No cookies and no IP:
//   visitor_id    localStorage fyd_vid, one random id per browser
//   session_id    localStorage fyd_sid, a new one after 30 minutes idle
//   lead_session  the lead form's gf_session_id (getSessionId), which is how
//                 the portal ties a lead to the visits before it
// Referrer, UTM tags and the click-id name go on a visit's first page view only.
// Nothing is sent on other hosts (localhost, previews), from automated browsers,
// or from a browser that opened any page with ?notrack=1 (?notrack=0 undoes it).
// Tracking must never break a page or the form, so every entry point swallows errors.

import { getSessionId } from "./attribution";
import { SITE } from "./site";

type TrackType = "pageview" | "calculator" | "form_start";
type TrackEvent = {
  type: TrackType;
  visitor_id: string;
  session_id: string;
  lead_session?: string;
  path: string;
  detail?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  click?: string;
};

const VISITOR_KEY = "fyd_vid";
const SESSION_KEY = "fyd_sid";
const OPT_OUT_KEY = "fyd_notrack";
const IDLE_MS = 30 * 60 * 1000;
const UTM = ["utm_source", "utm_medium", "utm_campaign"] as const;
const CLICK_IDS = ["gclid", "gbraid", "wbraid", "msclkid", "fbclid"] as const;

const newId = () => (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `fyd_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`);

// Where the browser blocks storage, ids live in memory: they still hold across in-site navigation.
const memory = new Map<string, string>();
function load(key: string): string | null {
  try {
    return window.localStorage.getItem(key) ?? memory.get(key) ?? null;
  } catch {
    return memory.get(key) ?? null;
  }
}
function store(key: string, value: string | null) {
  if (value === null) memory.delete(key);
  else memory.set(key, value);
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch {
    /* private mode: the memory copy serves this page */
  }
}

let tracking = false; // whether the current page view was counted; events follow it
let path = "/";
let views = 0; // page views counted in this document
const sentThisView = new Set<string>();

/** Our own host, the opt-out switch, and not a robot driving the browser. */
function allowed(): boolean {
  const flag = new URLSearchParams(window.location.search).get("notrack");
  if (flag === "1") store(OPT_OUT_KEY, "1");
  else if (flag === "0") store(OPT_OUT_KEY, null);
  const host = window.location.hostname;
  return (host === SITE.domain || host === `www.${SITE.domain}`) && !navigator.webdriver && load(OPT_OUT_KEY) !== "1";
}

function visitorId(): string {
  let id = load(VISITOR_KEY);
  if (!id) store(VISITOR_KEY, (id = newId()));
  return id;
}

/** The visit's id, renewed after 30 minutes without an event. `fresh` = this event starts a visit. */
function session(): { id: string; fresh: boolean } {
  const now = Date.now();
  let saved: { id?: unknown; at?: unknown } = {};
  try {
    saved = JSON.parse(load(SESSION_KEY) || "{}") ?? {};
  } catch {
    /* unreadable: start a new visit */
  }
  const fresh = typeof saved.id !== "string" || typeof saved.at !== "number" || now - saved.at > IDLE_MS;
  const id = fresh ? newId() : (saved.id as string);
  store(SESSION_KEY, JSON.stringify({ id, at: now }));
  return { id, fresh };
}

/** document.referrer from another site, without its query string (it can carry a search or an email address). */
function externalReferrer(): string | undefined {
  try {
    if (!document.referrer) return undefined;
    const u = new URL(document.referrer);
    const host = u.hostname.toLowerCase();
    if (host === SITE.domain || host.endsWith(`.${SITE.domain}`)) return undefined;
    return `${u.protocol}//${u.host}${u.pathname}`.slice(0, 200);
  } catch {
    return undefined;
  }
}

function event(type: TrackType, sessionId: string): TrackEvent {
  return { type, visitor_id: visitorId(), session_id: sessionId, lead_session: getSessionId() || undefined, path };
}

// Everything queued in the same tick goes out in one beacon.
let queue: TrackEvent[] = [];
function enqueue(e: TrackEvent) {
  queue.push(e);
  if (queue.length === 1) queueMicrotask(flush);
}
function flush() {
  const events = queue;
  queue = [];
  try {
    // text/plain keeps it a simple request: no CORS preflight, nothing for the page to wait on.
    const body = JSON.stringify({ events });
    if (navigator.sendBeacon?.("/api/t", new Blob([body], { type: "text/plain" }))) return;
    fetch("/api/t", { method: "POST", body, keepalive: true }).catch(() => {});
  } catch {
    /* a lost count, never a broken page */
  }
}

/** A page view: the first load and every client-side navigation (components/VisitTracker). Path only, no query string. */
export function trackPageview(pathname: string): void {
  try {
    sentThisView.clear();
    tracking = allowed();
    if (!tracking) return;
    path = pathname.slice(0, 300) || "/";
    const s = session();
    const e = event("pageview", s.id);
    if (s.fresh) {
      const q = new URLSearchParams(window.location.search);
      // document.referrer stays the landing's referrer through in-site navigation, so it only counts on the document's first view.
      if (views === 0) e.referrer = externalReferrer();
      for (const k of UTM) {
        const v = q.get(k)?.trim();
        if (v) e[k] = v.slice(0, 200);
      }
      e.click = CLICK_IDS.find((k) => q.get(k)); // which click id was on the link, never its value
    }
    views++;
    enqueue(e);
  } catch {
    /* never break the page */
  }
}

/** A calculator's first input change, or the lead form's first tap or keystroke. Sent once per page view, however often it's called. */
export function trackEvent(type: "calculator" | "form_start", detail?: string): void {
  try {
    const key = `${type}:${detail ?? ""}`;
    if (sentThisView.has(key)) return;
    sentThisView.add(key);
    // The same moment for Google Analytics, through Tag Manager (src/components/Analytics.tsx).
    (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push(type === "calculator" ? { event: "gf_calculator_used", calculator: detail } : { event: "gf_form_start" });
    if (!tracking) return;
    const e = event(type, session().id);
    if (detail) e.detail = detail;
    enqueue(e);
  } catch {
    /* never break the page or the form */
  }
}
