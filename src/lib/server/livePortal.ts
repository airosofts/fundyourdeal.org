import "server-only";

// Sends each saved lead to the Fund Your Deal portal (portal.fundyourdeal.org),
// which keeps its own copy and lists it with the live leads (its /api/ingest).
// Contract: POST PORTAL_INGEST_URL with "Authorization: Bearer
// PORTAL_INGEST_SECRET" and { lead, events }: lead is the whole gf_leads row
// as stored, events the PortalEvents this save raised (often none). Sent after
// every save, so the portal always holds the latest answers. Call it from
// after(): it does nothing without the secret, gives up after 4 seconds and
// never throws, so the portal can't slow or break the form.

import type { PortalEvent } from "@/lib/server/notify";

const DEFAULT_URL = "https://portal.fundyourdeal.org/api/ingest";
const TIMEOUT_MS = 4000;

export async function sendToLivePortal(lead: Record<string, unknown>, events: PortalEvent[]): Promise<void> {
  const secret = process.env.PORTAL_INGEST_SECRET;
  if (!secret) return;
  const url = process.env.PORTAL_INGEST_URL || DEFAULT_URL;
  const id = typeof lead.id === "string" ? lead.id : "?";

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
      body: JSON.stringify({ lead, events }),
      cache: "no-store",
      signal: controller.signal,
    });
    if (!res.ok) console.error(`[live portal] lead ${id}: portal answered ${res.status}`);
    await res.body?.cancel().catch(() => {});
  } catch (e) {
    let reason = "unknown error";
    if (controller.signal.aborted) reason = `no answer within ${TIMEOUT_MS / 1000}s`;
    else if (e instanceof Error) reason = `${e.name}: ${e.message.split(url).join("PORTAL_INGEST_URL")}`;
    console.error(`[live portal] lead ${id}: ${reason}`);
  } finally {
    clearTimeout(timer);
  }
}
