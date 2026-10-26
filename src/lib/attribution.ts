// Ad-click attribution: Google/Meta click IDs + UTM params from the landing URL.
//
// Captured on every page load and kept in localStorage for 90 days (Google's
// click-ID lookback window). A new landing that carries any of these params
// replaces the stored set (last touch). Sent with the form so each lead carries
// its GCLID into AiroBase for offline conversion imports.
// Same model as honestofferhome's lib/attribution.ts.

export type Attribution = {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  msclkid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  captured_at?: string;
  channel?: string; // google_ads | microsoft_ads | meta_ads | paid | organic_search | social | referral | email | direct
  traffic_source?: string;
  referrer_host?: string;
};

export const ATTRIBUTION_KEYS = [
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "landing_page",
  "channel",
  "traffic_source",
  "referrer_host",
] as const;

const SEARCH = /(^|\.)(google|bing|yahoo|duckduckgo|ecosia|baidu|yandex|aol|ask)\./;
const SOCIAL = /(^|\.)(facebook|fb|instagram|messenger|t|twitter|x|linkedin|pinterest|reddit|nextdoor|tiktok|youtube|threads)\.(com|co|net)$/;
const PAID_MEDIUM = /^(cpc|ppc|paid|paidsearch|paid_search|paid-social|paidsocial|paid_social|display|cpm|ads?)$/i;

export function classifyTraffic(p: {
  gclid?: string | null;
  gbraid?: string | null;
  wbraid?: string | null;
  fbclid?: string | null;
  msclkid?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  referrer?: string | null;
  ownHost?: string;
}): { channel: string; traffic_source: string; referrer_host?: string } {
  let host = "";
  try {
    host = p.referrer ? new URL(p.referrer).hostname.replace(/^www\./, "").toLowerCase() : "";
  } catch {
    host = "";
  }
  if (host && p.ownHost && host === p.ownHost.replace(/^www\./, "")) host = "";
  const ref = host ? { referrer_host: host } : {};
  const src = (p.utm_source ?? "").trim();
  const med = (p.utm_medium ?? "").trim();

  if (p.gclid || p.gbraid || p.wbraid) return { channel: "google_ads", traffic_source: "Google Ads", ...ref };
  if (p.msclkid) return { channel: "microsoft_ads", traffic_source: "Microsoft Ads", ...ref };
  if (src && PAID_MEDIUM.test(med) && /facebook|fb|instagram|meta|ig/i.test(src)) return { channel: "meta_ads", traffic_source: "Facebook / Instagram ads", ...ref };
  if (src && PAID_MEDIUM.test(med) && /google|adwords/i.test(src)) return { channel: "google_ads", traffic_source: "Google Ads", ...ref };
  if (src) {
    const label = [src, med].filter(Boolean).join(" / ");
    if (PAID_MEDIUM.test(med)) return { channel: "paid", traffic_source: `Paid: ${label}`, ...ref };
    if (/email|newsletter/i.test(med)) return { channel: "email", traffic_source: `Email: ${label}`, ...ref };
    return { channel: SOCIAL.test(`${src}.com`) ? "social" : "referral", traffic_source: label, ...ref };
  }
  if (p.fbclid) return { channel: "social", traffic_source: "Facebook / Instagram", ...ref };
  if (host && SEARCH.test(host)) return { channel: "organic_search", traffic_source: `${host.split(".")[0].replace(/^./, (c) => c.toUpperCase())} search`, ...ref };
  if (host && SOCIAL.test(host)) return { channel: "social", traffic_source: `Social: ${host}`, ...ref };
  if (host) return { channel: "referral", traffic_source: `Referral: ${host}`, ...ref };
  return { channel: "direct", traffic_source: "Direct", ...ref };
}

const STORAGE_KEY = "gf_attribution";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const PARAMS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

/** Ad clicks and UTM links always win (last touch); an untagged visit never replaces a still-valid earlier source. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    for (const p of PARAMS) {
      const v = params.get(p)?.trim();
      if (v) found[p] = v.slice(0, 500);
    }
    const tagged = Object.keys(found).length > 0;
    if (!tagged && getAttribution().captured_at) return;
    Object.assign(found, classifyTraffic({ ...found, referrer: document.referrer, ownHost: window.location.hostname }), {
      landing_page: (window.location.pathname + window.location.search).slice(0, 1000),
      captured_at: new Date().toISOString(),
    });
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    /* private mode — attribution for this lead is lost, never block the form */
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Attribution;
    const at = parsed.captured_at ? Date.parse(parsed.captured_at) : 0;
    return at && Date.now() - at <= MAX_AGE_MS ? parsed : {};
  } catch {
    return {};
  }
}

const SESSION_KEY = "gf_session_id";
const newId = () => (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `gf_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`);

/** Stable per-browser id: one lead row per form, upserted step by step. */
export function getSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    const existing = window.localStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const id = newId();
    window.localStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    return newId();
  }
}

/** After a finished lead, the next form becomes a new lead instead of overwriting it. */
export function startNewSession(): string {
  const id = newId();
  try {
    window.localStorage.setItem(SESSION_KEY, id);
  } catch {
    /* private mode */
  }
  return id;
}
