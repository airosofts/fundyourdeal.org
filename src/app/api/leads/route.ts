// Fund Your Deal funding requests → gf_leads (form v3; the shared admin portal
// reads these rows, so docs/lead-form.md is binding). Each form session is one
// row, keyed on session_id, filled in screen by screen:
//   1 contact + terms and call/text consent: the row, and the lead, start here
//   2 occupancy. "owner" is kept; while the lead is still 'new' it gets status
//     'disqualified' and lost_reason 'Owner-occupied'
//   3 loan type  4 purpose  5 property type  6 loan amount  7 credit
//   8 experience (project loans only)  9 property ZIP → completed
// The server re-checks every earlier screen on each save, so no step can be
// skipped. last_step only rises, and a completed row ignores later saves.
// Columns that later SQL files added go in a second, best-effort update, so
// a missing migration can never cost us the lead itself.

import { NextResponse, type NextRequest } from "next/server";
import { ATTRIBUTION_KEYS, type Attribution } from "@/lib/attribution";
import { BUSINESS_PURPOSE_TEXT, SHARE_CONSENT_TEXT, TCPA_CONSENT_TEXT } from "@/lib/consent";
import {
  BUSINESS_PURPOSE_VERSION,
  EMPTY_ANSWERS,
  FINAL_STEP,
  FORM_VERSION,
  SHARE_CONSENT_VERSION,
  SITE_KEY,
  TCPA_CONSENT_VERSION,
  isProject,
  stateForZip,
  stepOf,
  validateUpTo,
  type Answers,
} from "@/lib/leadSpec";
import { TABLES, airobaseConfigured, getAirobase } from "@/lib/server/airobase";
import { clientIp, readJson, requestGeo, requestMeta, toE164 } from "@/lib/server/request";

type Payload = {
  sessionId?: string;
  step?: number;
  answers?: Partial<Answers>;
  sourcePage?: string;
  attribution?: Attribution;
  website?: string; // hidden trap field; only bots type into it
};

/** The row as stored. select("*") means a column from an unrun migration just comes back absent. */
type Existing = {
  last_step: number;
  completed: boolean;
  status: string;
  business_purpose_at: string | null;
  share_consent_at: string | null;
  answers: { formVersion?: number; contactCapturedAt?: string } | null;
  lost_reason?: string | null; // admin portal sql/002
  contact_captured_at?: string | null; // airobase/004
};

// SITE_KEY ("fundyourdeal", from leadSpec) goes in answers.site and, via the 004 extras below, the site column.
const OWNER_OCCUPIED = "Owner-occupied";
const SQL_004 = "airobase/004_contact_first.sql";

const fail = (error: string, status = 400) => NextResponse.json({ success: false, error }, { status });

function cleanAnswers(raw: Partial<Answers> | undefined): Answers {
  const out = { ...EMPTY_ANSWERS };
  for (const k of Object.keys(EMPTY_ANSWERS) as (keyof Answers)[]) {
    const v = raw?.[k];
    if (typeof EMPTY_ANSWERS[k] === "boolean") (out[k] as boolean) = v === true;
    else if (typeof v === "string") (out[k] as string) = v.trim().slice(0, 200);
  }
  return out;
}

function cleanAttribution(a: Attribution | undefined) {
  const out: Record<string, string> = {};
  for (const k of ATTRIBUTION_KEYS) {
    const v = typeof a?.[k] === "string" ? a[k]!.trim() : "";
    if (v) out[k === "channel" ? "traffic_channel" : k] = v.slice(0, 1000);
  }
  return out;
}

export async function POST(req: NextRequest) {
  const body = await readJson<Payload>(req);
  if (!body) return fail("bad_json");
  if (body.website) return NextResponse.json({ success: true }); // a bot filled the trap: answer "ok", save nothing

  const sessionId = typeof body.sessionId === "string" ? body.sessionId.trim() : "";
  const step = Number(body.step);
  if (!/^[\w-]{8,100}$/.test(sessionId)) return fail("bad_session");
  if (!Number.isInteger(step) || step < 1 || step > FINAL_STEP) return fail("bad_step");

  const a = cleanAnswers(body.answers);
  const invalid = validateUpTo(step, a);
  if (invalid) return NextResponse.json({ success: false, error: "invalid", screen: invalid.screen, errors: invalid.errors }, { status: 422 });

  if (!airobaseConfigured()) {
    console.error("[leads] AiroBase is not configured — lead not saved", { step });
    return fail("not_configured", 503);
  }
  const db = getAirobase();

  const { data: existing, error: readError } = await db.from(TABLES.leads).select("*").eq("session_id", sessionId).maybeSingle();
  if (readError) {
    console.error("[leads] lookup failed", readError);
    return fail("db_error", 500);
  }
  const prev = existing as Existing | null;
  if (prev?.completed) return NextResponse.json({ success: true, completed: true });

  const ip = clientIp(req);
  const now = new Date().toISOString();
  // A returning browser may still hold a session id from a form v2 row, whose step numbers meant other screens.
  const sameForm = prev?.answers?.formVersion === FORM_VERSION;
  const capturedAt = prev?.contact_captured_at || prev?.answers?.contactCapturedAt || now;
  const investment = a.occupancy === "investment";

  const row: Record<string, unknown> = {
    session_id: sessionId,
    last_step: prev && sameForm ? Math.max(prev.last_step, step) : step,
    answers: { ...a, formVersion: FORM_VERSION, site: SITE_KEY, contactCapturedAt: capturedAt, ...(investment && { businessPurposeText: BUSINESS_PURPOSE_TEXT }) },
    // In the main write, not the best-effort one: the column defaults to Gable's
    // key, so a failed follow-up would file this lead under the wrong site.
    // (gf_leads.site comes from airobase/004, already applied to the shared database.)
    site: SITE_KEY,
    ...cleanAttribution(body.attribution),
  };
  // Post-001 columns, grouped under the SQL file that creates them (named in the log if a write fails).
  const extras: Record<string, Record<string, unknown>> = { [SQL_004]: { site: SITE_KEY } };

  if (!prev) {
    const geo = await requestGeo(req, ip);
    Object.assign(row, { ip_address: ip, ...geo, ...requestMeta(req), source_page: body.sourcePage?.slice(0, 300) || null });
  }

  // Step 1 makes the lead: name, phone, email and both consents (pressing "Fund My Deal").
  // Every later save resends the contact, but it's only written when the row lacks it.
  if (step === stepOf("contact") || !prev?.share_consent_at) {
    Object.assign(row, {
      first_name: a.first,
      last_name: a.last,
      email: a.email ? a.email.toLowerCase() : null,
      phone: a.phone,
      phone_e164: toE164(a.phone),
      share_consent_at: now,
      share_consent_ip: ip,
      share_consent_version: SHARE_CONSENT_VERSION,
      share_consent_text: SHARE_CONSENT_TEXT,
      tcpa_consent: a.tcpa,
      tcpa_consent_at: a.tcpa ? now : null,
      tcpa_consent_version: a.tcpa ? TCPA_CONSENT_VERSION : null,
      tcpa_consent_text: a.tcpa ? TCPA_CONSENT_TEXT : null,
    });
  }
  if (!prev?.contact_captured_at) extras[SQL_004].contact_captured_at = capturedAt;

  // Step 2. An owner-occupant remains a lead, shown in the portal as disqualified.
  if (step >= stepOf("occupancy")) {
    extras[SQL_004].occupancy = a.occupancy;
    if (investment) {
      Object.assign(row, { business_purpose_confirmed: true, business_purpose_version: BUSINESS_PURPOSE_VERSION });
      if (!prev?.business_purpose_at) row.business_purpose_at = now;
    } else {
      Object.assign(row, { business_purpose_confirmed: false, business_purpose_at: null, business_purpose_version: null });
    }
    const status = prev?.status ?? "new";
    let reason: string | null | undefined; // stays undefined when the status shouldn't change
    if (!investment && status === "new") reason = OWNER_OCCUPIED;
    else if (investment && status === "disqualified" && prev?.lost_reason === OWNER_OCCUPIED) reason = null; // "owner" was a slip; they went back and changed it
    if (reason !== undefined) {
      row.status = reason ? "disqualified" : "new";
      extras["admin portal sql/002_admin_portal.sql"] = { lost_reason: reason, status_updated_at: now };
    }
  }

  if (step >= stepOf("loanType")) row.loan_type = a.loanType;
  if (step >= stepOf("purpose")) row.purpose = a.purpose;
  if (step >= stepOf("propertyType")) row.property_type = a.propertyType;
  if (step >= stepOf("loanRange") && a.loanRange) extras["airobase/003_form_v2.sql"] = { loan_amount_range: a.loanRange };
  if (step >= stepOf("credit")) row.credit_band = a.credit;
  if (step >= stepOf("experience")) row.experience = isProject(a.loanType) ? a.experience : null;
  if (step === FINAL_STEP) Object.assign(row, { property_zip: a.zip, property_state: stateForZip(a.zip), completed: true, completed_at: now });

  const { error } = await db.from(TABLES.leads).upsert(row, { onConflict: "session_id" });
  if (error) {
    console.error("[leads] upsert failed", error);
    return fail("db_error", 500);
  }

  // The lead is stored by now and `answers` holds these values as well, so
  // this part is best effort. All extras go in a single update first. Should
  // that fail (usually an unrun migration), each SQL file's group is sent
  // separately, and only the missing group is lost.
  const all = Object.assign({}, ...Object.values(extras)) as Record<string, unknown>;
  const { error: e2 } = await db.from(TABLES.leads).update(all).eq("session_id", sessionId);
  if (e2) {
    for (const [file, cols] of Object.entries(extras)) {
      const { error: e3 } = await db.from(TABLES.leads).update(cols).eq("session_id", sessionId);
      if (e3) console.error(`[leads] ${Object.keys(cols).join(", ")} not saved (run ${file})`, e3.message);
    }
  }
  return NextResponse.json({ success: true, completed: step === FINAL_STEP });
}
