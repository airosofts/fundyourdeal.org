import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import { airobaseConfigured, getAirobase } from "./airobase";
import { clientIp, readJson, requestMeta } from "./request";

// The small single-POST forms (contact, rate alerts) all run through here:
// read the JSON, drop bots that fill the trap field, validate, write one row.

export const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/**
 * Columns written in a second update once the row is safely stored, for a
 * migration that may not have run yet (`sql` names it in the log). If the
 * update fails, the error is logged and the visitor still gets a success.
 */
type FollowUp = { columns: Record<string, unknown>; sql: string };

export async function handleInsert(
  req: NextRequest,
  table: string,
  build: (body: Record<string, unknown>) => { row: Record<string, unknown> } | { errors: Record<string, string> },
  opts: { onConflict?: string; followUp?: FollowUp } = {}
) {
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return NextResponse.json({ success: false, error: "bad_json" }, { status: 400 });
  if (body.website) return NextResponse.json({ success: true }); // trap field filled: a bot

  const built = build(body);
  if ("errors" in built) return NextResponse.json({ success: false, error: "invalid", errors: built.errors }, { status: 422 });

  if (!airobaseConfigured()) {
    console.error(`[${table}] AiroBase is not configured — not saved`);
    return NextResponse.json({ success: false, error: "not_configured" }, { status: 503 });
  }
  const meta = requestMeta(req);
  // A follow-up needs to find this exact row again, so give it its id up front (the tables use uuid keys).
  const id = opts.followUp ? crypto.randomUUID() : null;
  const row = { ...(id ? { id } : {}), ...built.row, ip_address: clientIp(req), user_agent: meta.user_agent };
  const q = getAirobase().from(table);
  const { error } = opts.onConflict ? await q.upsert(row, { onConflict: opts.onConflict, ignoreDuplicates: true }) : await q.insert(row);
  if (error) {
    console.error(`[${table}] write failed`, error);
    return NextResponse.json({ success: false, error: "db_error" }, { status: 500 });
  }
  if (id && opts.followUp) await followUp(table, id, opts.followUp);
  return NextResponse.json({ success: true });
}

/** Best effort. When an upsert skipped a duplicate, no row has this id and nothing changes. */
async function followUp(table: string, id: string, { columns, sql }: FollowUp) {
  try {
    const { error } = await getAirobase().from(table).update(columns).eq("id", id);
    if (error) console.error(`[${table}] ${Object.keys(columns).join(", ")} not saved (run ${sql})`, error.message);
  } catch (e) {
    console.error(`[${table}] ${Object.keys(columns).join(", ")} not saved`, e);
  }
}
