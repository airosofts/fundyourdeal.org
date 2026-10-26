// Investor lead capture (form v3, contact first; contract: docs/lead-form.md).
// One row per form (session_id), saved screen by screen:
//   1 contact + share and call/text consents → the lead exists from here
//   2 occupancy: investment, or owner (kept, but tagged status 'disqualified' /
//     lost_reason 'Owner-occupied' while the lead is still 'new')
//   3 loan type  4 purpose  5 property type  6 loan amount  7 credit
//   8 experience (project loans only)  9 property ZIP → completed
// Every save re-validates all earlier screens, so a lead can't skip ahead.
// last_step never goes down, and once a lead is completed further saves are
// no-ops. Columns from newer migrations are written in a separate best-effort
// update at the end, so a lead is never lost if one of them hasn't run yet.

import { NextResponse, type NextRequest } from "next/server";
import { ATTRIBUTION_KEYS, type Attribution } from "@/lib/attribution";
import { BUSINESS_PURPOSE_TEXT, SHARE_CONSENT_TEXT, TCPA_CONSENT_TEXT } from "@/lib/consent";
import {
  BUSINESS_PURPOSE_VERSION,
  EMPTY_ANSWERS,
  FINAL_STEP,
  FORM_VERSION,
  SHARE_CONSENT_VERSION,
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
  website?: string; // honeypot: real people never fill it
};

/** The saved row, read with select("*") so a column a migration hasn't added yet is simply missing. */
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

const SITE_KEY = "fundyourdeal";
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
  if (body.website) return NextResponse.json({ success: true }); // bot: pretend it worked

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
  // A v2 row (its session id can still be in a returning visitor's browser) numbered its steps differently.
  const sameForm = prev?.answers?.formVersion === FORM_VERSION;
  const capturedAt = prev?.contact_captured_at || prev?.answers?.contactCapturedAt || now;
  const investment = a.occupancy === "investment";

  const row: Record<string, unknown> = {
    session_id: sessionId,
    last_step: prev && sameForm ? Math.max(prev.last_step, step) : step,
    answers: { ...a, formVersion: FORM_VERSION, site: SITE_KEY, contactCapturedAt: capturedAt, ...(investment && { businessPurposeText: BUSINESS_PURPOSE_TEXT }) },
    ...cleanAttribution(body.attribution),
  };
  // Columns added after 001, keyed by the SQL file that adds them.
  const extras: Record<string, Record<string, unknown>> = { [SQL_004]: { site: SITE_KEY } };

  if (!prev) {
    const geo = await requestGeo(req, ip);
    Object.assign(row, { ip_address: ip, ...geo, ...requestMeta(req), source_page: body.sourcePage?.slice(0, 300) || null });
  }

  // Step 1 is the lead: contact details and both consents (clicking "Get Funding").
  // Later saves carry the same contact, so they only fill it in if it's missing.
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

  // Step 2: owners stay leads; the portal sees them as disqualified.
  if (step >= stepOf("occupancy")) {
    extras[SQL_004].occupancy = a.occupancy;
    if (investment) {
      Object.assign(row, { business_purpose_confirmed: true, business_purpose_version: BUSINESS_PURPOSE_VERSION });
      if (!prev?.business_purpose_at) row.business_purpose_at = now;
    } else {
      Object.assign(row, { business_purpose_confirmed: false, business_purpose_at: null, business_purpose_version: null });
    }
    const status = prev?.status ?? "new";
    let reason: string | null | undefined; // undefined: leave the status alone
    if (!investment && status === "new") reason = OWNER_OCCUPIED;
    else if (investment && status === "disqualified" && prev?.lost_reason === OWNER_OCCUPIED) reason = null; // picked "owner" by mistake
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

  // Best effort: the lead is already saved, and these values are in `answers`
  // too. One update; if it fails (a migration hasn't run), each file's columns
  // are retried on their own so the others still land.
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
