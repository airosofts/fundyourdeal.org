// The site's own visit counts (lib/siteTrack.ts) → the portal's /api/ingest/visits.
// The browser beacons { events } here as JSON in a text/plain body. This keeps
// only the contract's fields, cut to short lengths, drops robots, adds the
// device type (from the user agent) and the country (Cloudflare's cf-ipcountry),
// stamps the time and forwards the batch after the response. It answers 204 at
// once, whatever happens, and with no PORTAL_INGEST_SECRET it does nothing else.
// No IP address is read, kept or forwarded.

import { after, type NextRequest } from "next/server";
import { sendVisitsToPortal, type VisitEvent } from "@/lib/server/livePortal";

const MAX_BYTES = 8 * 1024;
const MAX_EVENTS = 25;
const TYPES = ["pageview", "calculator", "form_start"] as const;
const CLICKS = ["gclid", "gbraid", "wbraid", "msclkid", "fbclid"];
const ID = /^[\w-]{8,100}$/;
const DETAIL = /^[a-z0-9-]{1,40}$/;
// Crawlers that run scripts (Googlebot renders pages), speed testers and headless or scripted browsers.
const BOT =
  /bot|crawl|spider|slurp|preview|headless|lighthouse|pagespeed|gtmetrix|ptst|pingdom|uptime|facebookexternalhit|inspectiontool|mediapartners|apis-google|phantomjs|selenium|puppeteer|playwright|python|curl|wget|okhttp|axios|node-fetch|go-http-client|java\//i;

const noContent = () => new Response(null, { status: 204 });

const text = (v: unknown, max: number) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null);

function deviceOf(ua: string, mobileHint: string | null): VisitEvent["device"] {
  // An iPad in its default desktop mode sends a Mac user agent, so it counts as a desktop.
  if (/ipad|tablet|kindle|silk|playbook/i.test(ua) || (/android/i.test(ua) && !/mobile/i.test(ua))) return "tablet";
  if (mobileHint === "?1" || /mobi|iphone|ipod|android|windows phone|blackberry|opera mini/i.test(ua)) return "mobile";
  return "desktop";
}

function clean(raw: unknown, extra: Pick<VisitEvent, "at" | "device" | "country">): VisitEvent | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const type = TYPES.find((t) => t === r.type);
  const visitor = text(r.visitor_id, 100);
  const session = text(r.session_id, 100);
  const path = text(r.path, 300)?.split(/[?#]/)[0];
  if (!type || !visitor || !ID.test(visitor) || !session || !ID.test(session) || !path?.startsWith("/")) return null;
  const lead = text(r.lead_session, 100);
  const detail = text(r.detail, 40);
  const click = text(r.click, 10);
  return {
    type,
    at: extra.at,
    visitor_id: visitor,
    session_id: session,
    lead_session: lead && ID.test(lead) ? lead : null,
    path,
    detail: type !== "pageview" && detail && DETAIL.test(detail) ? detail : null,
    referrer: text(r.referrer, 200),
    utm_source: text(r.utm_source, 200),
    utm_medium: text(r.utm_medium, 200),
    utm_campaign: text(r.utm_campaign, 200),
    click: click && CLICKS.includes(click) ? click : null,
    device: extra.device,
    country: extra.country,
  };
}

export async function POST(req: NextRequest) {
  if (!process.env.PORTAL_INGEST_SECRET) return noContent();
  const h = req.headers;
  const ua = h.get("user-agent") ?? "";
  if (!ua || BOT.test(ua.replace(/cubot/gi, ""))) return noContent(); // Cubot is a phone brand, not a robot
  if (h.get("sec-fetch-site") === "cross-site") return noContent(); // another site's page beaconing in
  if (Number(h.get("content-length") ?? 0) > MAX_BYTES) return noContent();

  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BYTES) return noContent();
    body = JSON.parse(raw);
  } catch {
    return noContent();
  }
  const list = (body as { events?: unknown } | null)?.events;
  if (!Array.isArray(list)) return noContent();

  const cc = h.get("cf-ipcountry")?.toUpperCase() ?? "";
  const extra = {
    at: new Date().toISOString(),
    device: deviceOf(ua, h.get("sec-ch-ua-mobile")),
    country: /^[A-Z]{2}$/.test(cc) && cc !== "XX" ? cc : null, // XX: unknown; T1 (Tor) fails the test
  };
  const events = list.slice(0, MAX_EVENTS).flatMap((e) => clean(e, extra) ?? []);
  if (events.length) after(() => sendVisitsToPortal(events));
  return noContent();
}
