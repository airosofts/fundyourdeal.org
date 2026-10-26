import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import { airobaseConfigured, getAirobase } from "./airobase";
import { clientIp, readJson, requestMeta } from "./request";

// Shared handling for the simple one-shot forms (rate alerts, partners,
// contact): parse, honeypot, validate, insert one row.

export const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function handleInsert(
  req: NextRequest,
  table: string,
  build: (body: Record<string, unknown>) => { row: Record<string, unknown> } | { errors: Record<string, string> },
  opts: { onConflict?: string } = {}
) {
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return NextResponse.json({ success: false, error: "bad_json" }, { status: 400 });
  if (body.website) return NextResponse.json({ success: true }); // honeypot

  const built = build(body);
  if ("errors" in built) return NextResponse.json({ success: false, error: "invalid", errors: built.errors }, { status: 422 });

  if (!airobaseConfigured()) {
    console.error(`[${table}] AiroBase is not configured — not saved`);
    return NextResponse.json({ success: false, error: "not_configured" }, { status: 503 });
  }
  const meta = requestMeta(req);
  const row = { ...built.row, ip_address: clientIp(req), user_agent: meta.user_agent };
  const q = getAirobase().from(table);
  const { error } = opts.onConflict ? await q.upsert(row, { onConflict: opts.onConflict, ignoreDuplicates: true }) : await q.insert(row);
  if (error) {
    console.error(`[${table}] write failed`, error);
    return NextResponse.json({ success: false, error: "db_error" }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
