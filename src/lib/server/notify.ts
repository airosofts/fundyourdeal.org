import "server-only";
import { SITE_KEY } from "@/lib/leadSpec";

// Tells the admin portal that a lead or contact message came in, so it can
// email the team. Contract: POST NOTIFY_URL with "Authorization: Bearer
// NOTIFY_SECRET" and { event, site, id }, where id is the gf_leads or
// gf_contact_messages row id. Call it from after() once the row is saved:
// it does nothing when either env var is unset, gives up after 3 seconds,
// and never throws, so a slow or broken portal can't touch the form.

export type PortalEvent = "lead.started" | "lead.completed" | "message.received";

const TIMEOUT_MS = 3000;

export async function notifyPortal(event: PortalEvent, id: string): Promise<void> {
  const url = process.env.NOTIFY_URL;
  const secret = process.env.NOTIFY_SECRET;
  if (!url || !secret) return;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
      body: JSON.stringify({ event, site: SITE_KEY, id }),
      cache: "no-store",
      signal: controller.signal,
    });
    if (!res.ok) console.error(`[notify] ${event} ${id}: portal answered ${res.status}`);
    await res.body?.cancel().catch(() => {}); // the reply isn't needed; free the connection
  } catch (e) {
    // Never log the secret, and keep the URL out too (a bad URL is echoed in the error message).
    let reason = "unknown error";
    if (controller.signal.aborted) reason = `no answer within ${TIMEOUT_MS / 1000}s`;
    else if (e instanceof Error) {
      const code = (e.cause as { code?: unknown } | undefined)?.code;
      reason = `${e.name}: ${e.message.split(url).join("NOTIFY_URL")}${typeof code === "string" ? ` (${code})` : ""}`;
    }
    console.error(`[notify] ${event} ${id}: ${reason}`);
  } finally {
    clearTimeout(timer);
  }
}
