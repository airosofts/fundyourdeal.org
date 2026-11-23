import "server-only";

// Sends each saved lead to the Fund Your Deal portal (portal.fundyourdeal.org),
// which keeps its own copy and lists it with the live leads (its /api/ingest).
// Contract: POST PORTAL_INGEST_URL with "Authorization: Bearer
// PORTAL_INGEST_SECRET" and { lead, events }: lead is the whole gf_leads row
// as stored, events the PortalEvents this save raised (often none). Sent after
// every save, so the portal always holds the latest answers. Call it from
// after(): it does nothing without the secret, gives up after 4 seconds and
// never throws, so the portal can't slow or break the form.
//
// The site's own visit counts (app/api/t) go the same way, with the same
// secret, to the portal's /api/ingest/visits: sendVisitsToPortal below.

import type { PortalEvent } from "@/lib/server/notify";

const DEFAULT_URL = "https://portal.fundyourdeal.org/api/ingest";
const DEFAULT_VISITS_URL = "https://portal.fundyourdeal.org/api/ingest/visits";
const TIMEOUT_MS = 4000;

export async function sendToLivePortal(lead: Record<string, unknown>, events: PortalEvent[]): Promise<void> {
  const secret = process.env.PORTAL_INGEST_SECRET;
  if (!secret) return;
  const url = process.env.PORTAL_INGEST_URL || DEFAULT_URL;
  const id = typeof lead.id === "string" ? lead.id : "?";
  await post(url, "PORTAL_INGEST_URL", secret, { lead, events }, `lead ${id}`);
}

/** One event as the portal's /api/ingest/visits takes it. app/api/t builds these from the browser's beacon. */
export type VisitEvent = {
  type: "pageview" | "calculator" | "form_start";
  at: string;
  visitor_id: string;
  session_id: string;
  lead_session: string | null;
  path: string;
  detail: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  click: string | null;
  device: "mobile" | "tablet" | "desktop";
  country: string | null;
};

/** PORTAL_VISITS_URL, else PORTAL_INGEST_URL's …/api/ingest plus /visits, else the live portal. */
function visitsUrl(): string {
  if (process.env.PORTAL_VISITS_URL) return process.env.PORTAL_VISITS_URL;
  const ingest = process.env.PORTAL_INGEST_URL;
  return ingest ? `${ingest.replace(/\/+$/, "").replace(/\/api\/ingest$/, "")}/api/ingest/visits` : DEFAULT_VISITS_URL;
}

/** Up to 25 visit events in one call. Same rules as a lead: call it from after(); no secret, no send; never throws. */
export async function sendVisitsToPortal(events: VisitEvent[]): Promise<void> {
  const secret = process.env.PORTAL_INGEST_SECRET;
  if (!secret || events.length === 0) return;
  await post(visitsUrl(), "PORTAL_VISITS_URL", secret, { events }, `${events.length} visit event${events.length === 1 ? "" : "s"}`);
}

/** Logs a failure under `label`, with the URL shown as `urlName` and never the secret. */
async function post(url: string, urlName: string, secret: string, body: unknown, label: string): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
      signal: controller.signal,
    });
    if (!res.ok) console.error(`[live portal] ${label}: portal answered ${res.status}`);
    await res.body?.cancel().catch(() => {});
  } catch (e) {
    let reason = "unknown error";
    if (controller.signal.aborted) reason = `no answer within ${TIMEOUT_MS / 1000}s`;
    else if (e instanceof Error) reason = `${e.name}: ${e.message.split(url).join(urlName)}`;
    console.error(`[live portal] ${label}: ${reason}`);
  } finally {
    clearTimeout(timer);
  }
}
