"use client";

// Fund Your Deal's funding request, form v3 (Roland, Oct 23): the contact
// details come first, then the deal, one question to a screen. The admin
// portal reads what this saves, so docs/lead-form.md is binding.
//   1 contact + call/text consent; "Fund My Deal" creates the lead
//   2 occupancy; an owner-occupant carries on as normal (the portal flags the row, the form says nothing)
//   3 loan type → purpose → property → amount → credit → [experience] → 9 ZIP
// Screens 1 and 9 wait on the server. The taps in between save quietly in the background.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { captureAttribution, getAttribution, getSessionId, startNewSession } from "@/lib/attribution";
import { OCCUPANCY_ANSWERS, OCCUPANCY_QUESTION, SHARE_CONSENT_TEXT, SUBMIT_LABEL, TCPA_CONSENT_TEXT } from "@/lib/consent";
import { SITE } from "@/lib/site";
import {
  CREDIT,
  EMPTY_ANSWERS,
  EXPERIENCE,
  LOAN_RANGES,
  LOAN_TYPES,
  OCCUPANCIES,
  propertyTypesFor,
  purposesFor,
  screensFor,
  stepOf,
  validateScreen,
  type Answers,
  type LoanType,
  type Purpose,
  type Screen,
} from "@/lib/leadSpec";

type Preset = { loanType: LoanType; purpose?: Purpose; propertyType?: string };
/** The tap-to-answer screens; contact and ZIP are the two typed ones. */
type TapScreen = Exclude<Screen, "contact" | "zip">;

const phoneMask = (v: string) => {
  const d = v.replace(/\D/g, "").replace(/^1(?=\d{10})/, "").slice(0, 10);
  if (d.length > 6) return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  if (d.length > 3) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return d ? `(${d}` : "";
};

function track(event: string, params: Record<string, unknown> = {}) {
  try {
    (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event, ...params });
  } catch {
    /* a tag manager error is never allowed to stop a lead */
  }
}

async function save(sessionId: string, step: number, answers: Answers, sourcePage: string, honeypot: string) {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, step, answers, sourcePage, attribution: getAttribution(), website: honeypot }),
  });
  if (!res.ok) throw new Error(`save failed: ${res.status}`);
}

const QUESTION: Record<TapScreen, string> = {
  occupancy: OCCUPANCY_QUESTION,
  loanType: "What kind of deal is it?",
  purpose: "Is this a purchase or a refinance?",
  propertyType: "What type of property is it?",
  loanRange: "How much funding does the deal need?",
  credit: "Where's your credit score, roughly?",
  experience: "How many investment deals have you completed in the past 3 years?",
};

function optionsFor(screen: TapScreen, a: Answers): { value: string; label: string; hint?: string }[] {
  switch (screen) {
    case "occupancy":
      return OCCUPANCIES.map((o) => ({ value: o, label: OCCUPANCY_ANSWERS[o] }));
    case "loanType":
      return LOAN_TYPES.map((t) => ({ value: t.id, label: t.label, hint: t.hint }));
    case "purpose":
      return purposesFor(a.loanType).map((p) => ({ value: p.id, label: p.label }));
    case "propertyType":
      return propertyTypesFor(a.loanType).map((p) => ({ value: p.id, label: p.label }));
    case "loanRange":
      return LOAN_RANGES.map((r) => ({ value: r.id, label: r.label }));
    case "credit":
      return [...CREDIT.map((c) => ({ value: c, label: c }))];
    case "experience":
      return EXPERIENCE.map((x) => ({ value: x.id, label: x.label }));
  }
}

const FIELD: Record<TapScreen, keyof Answers> = {
  occupancy: "occupancy",
  loanType: "loanType",
  purpose: "purpose",
  propertyType: "propertyType",
  loanRange: "loanRange",
  credit: "credit",
  experience: "experience",
};

export function LeadForm({ variant = "card", preset }: { variant?: "card" | "page"; preset?: Preset }) {
  const [a, setA] = useState<Answers>(() => ({ ...EMPTY_ANSWERS, loanType: preset?.loanType ?? "", purpose: preset?.purpose ?? "", propertyType: preset?.propertyType ?? "" }));
  const [done, setDone] = useState(false);
  const [idx, setIdx] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const uid = useId();
  const pathname = usePathname();
  // Fetched on the first save and then held here: all nine steps update one row, even where the browser blocks storage.
  const sessionId = useRef("");

  // Focus jumps to each new heading: screen readers read it out, and on a phone it scrolls into view.
  const headingRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  useEffect(() => {
    if (moved.current) headingRef.current?.focus();
  }, [done, idx]);
  useEffect(() => captureAttribution(), []);

  const screens = screensFor(a.loanType);
  const at = Math.min(idx, screens.length - 1);
  const screen = screens[at];

  // Saves run single file. If someone taps "owner", goes Back and taps
  // "investment", the second save has to reach the server after the first.
  const queue = useRef<Promise<unknown>>(Promise.resolve());
  const send = (s: Screen, next: Answers) => {
    const p = queue.current.then(() => save((sessionId.current ||= getSessionId()), stepOf(s), next, pathname, honeypot));
    queue.current = p.catch(() => {});
    return p;
  };

  function show(i: number) {
    moved.current = true;
    setErrors({});
    setSendError("");
    setIdx(i);
  }

  /** Saves what's answered, then moves on to the next unanswered screen (a program preset skips its own). */
  function advance(from: number, next: Answers) {
    const list = screensFor(next.loanType);
    let i = from + 1;
    while (i < list.length - 1 && Object.keys(validateScreen(list[i], next)).length === 0) i++;
    const answered = list[i - 1];
    send(answered, next).catch(() => {}); // a mid-form save may fail; the lead from step 1 is already safe
    track("gf_lead_step", { step: answered, loan_type: next.loanType });
    show(i);
  }

  function pick(s: TapScreen, value: string) {
    const next = { ...a, [FIELD[s]]: value } as Answers;
    if (s === "loanType") {
      // A new deal type can rule out the purpose or property picked earlier; clear those.
      if (!purposesFor(next.loanType).some((p) => p.id === next.purpose)) next.purpose = "";
      if (!propertyTypesFor(next.loanType).some((p) => p.id === next.propertyType)) next.propertyType = "";
    }
    setA(next);
    window.setTimeout(() => advance(at, next), 160); // a short pause so the picked tile shows as selected
  }

  /** Steps 1 and 9 await the server. If the save fails, the visitor sees a retry message, not a false "done". */
  async function submit(s: "contact" | "zip") {
    const e = validateScreen(s, a);
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => document.querySelector<HTMLElement>(`[data-form="${uid}"] [aria-invalid="true"]`)?.focus());
      return;
    }
    setSending(true);
    setSendError("");
    try {
      await send(s, a);
      if (s === "contact") {
        track("gf_lead_submitted", { loan_type: a.loanType, purpose: a.purpose });
        show(screens.indexOf("occupancy")); // the session id is kept, so every answer from here fills in this lead
      } else {
        track("gf_lead_completed", { loan_type: a.loanType, purpose: a.purpose, loan_range: a.loanRange });
        startNewSession();
        moved.current = true;
        setDone(true);
      }
    } catch {
      setSendError("That didn't go through. Give it a moment and try again — your answers are still here.");
    } finally {
      setSending(false);
    }
  }

  // Step 1 is already on the server by now, so Back can't go further than the occupancy screen.
  // Going back does pass through screens a preset answered, so a preset answer can still be changed.
  const canGoBack = at > screens.indexOf("occupancy");
  const back = () => show(at - 1);

  const heading = (text: string) => (
    <h2 ref={headingRef} tabIndex={-1} className="scroll-mt-24 text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.12] tracking-[-0.03em] outline-none">
      {text}
    </h2>
  );

  const retry = sendError && (
    <p role="alert" className="rounded-lg border border-warn bg-[#FBEFEC] px-4 py-3 text-sm font-medium text-warn">
      {sendError}
    </p>
  );

  const submitClass = "min-h-[56px] rounded-full bg-brand px-8 text-[17px] font-bold text-white hover:bg-brand-deep disabled:opacity-60";
  const progress = done ? 1 : (at + 1) / (screens.length + 1);

  let body: ReactNode;
  if (done) {
    body = (
      <div className="flex flex-col gap-5" role="status">
        <div className="flex size-[52px] items-center justify-center rounded-[14px] bg-brand-tint">
          <svg width="26" height="26" viewBox="0 0 16 16" aria-hidden="true" className="text-brand">
            <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {heading(a.first.trim() ? `Your deal is in, ${a.first.trim()}.` : "Your deal is in.")}
        <p className="text-[17px] leading-relaxed text-ink-2">A {SITE.name} loan specialist will call you soon to talk it through.</p>
        <ol className="flex list-decimal flex-col gap-2.5 pl-5 text-base leading-relaxed text-ink-2">
          <li>A short call about the property, the numbers and the date you need to close.</li>
          <li>Your terms in writing — amount, rate and costs — before you commit to anything.</li>
          <li>You sign at closing, and the deal is funded.</li>
        </ol>
        <div className="flex flex-wrap gap-3">
          <Link href="/calculators" className="inline-flex min-h-12 items-center rounded-full border-2 border-ink px-5 font-bold hover:bg-ink hover:text-white">
            Check the deal in a calculator
          </Link>
          <Link href="/guides" className="inline-flex min-h-12 items-center rounded-full px-5 font-bold text-brand hover:bg-brand-tint">
            Read the deal guides
          </Link>
        </div>
      </div>
    );
  } else if (screen === "contact") {
    body = (
      <form
        noValidate
        data-form={uid}
        onSubmit={(e) => {
          e.preventDefault();
          void submit("contact");
        }}
        className="relative flex flex-col gap-5"
      >
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Website
            <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          </label>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="font-mono text-[13px] uppercase tracking-[0.06em] text-brand">Deal funding · about a minute</div>
          {heading("Who should we call about this deal?")}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField id={`${uid}-first`} label="First name" autoComplete="given-name" value={a.first} onChange={(v) => setA({ ...a, first: v })} error={errors.first} />
          <TextField id={`${uid}-last`} label="Last name" autoComplete="family-name" value={a.last} onChange={(v) => setA({ ...a, last: v })} error={errors.last} />
          <TextField id={`${uid}-email`} label="Email (optional)" type="email" inputMode="email" autoComplete="email" value={a.email} onChange={(v) => setA({ ...a, email: v })} error={errors.email} />
          <TextField id={`${uid}-phone`} label="Mobile number" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="(555) 555-0100" mono value={a.phone} onChange={(v) => setA({ ...a, phone: phoneMask(v) })} error={errors.phone} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-tcpa`} className={`grid cursor-pointer grid-cols-[24px_1fr] items-start gap-3 rounded-xl border bg-white p-4 text-sm leading-relaxed text-ink-2 ${errors.tcpa ? "border-warn" : "border-field"}`}>
            <input id={`${uid}-tcpa`} type="checkbox" checked={a.tcpa} onChange={(e) => setA({ ...a, tcpa: e.target.checked })} className="mt-0.5 size-[22px] accent-brand" aria-invalid={!!errors.tcpa} aria-describedby={errors.tcpa ? `${uid}-tcpa-err` : undefined} />
            <span>{TCPA_CONSENT_TEXT}</span>
          </label>
          {errors.tcpa && (
            <p id={`${uid}-tcpa-err`} className="text-sm font-medium text-warn">
              {errors.tcpa}
            </p>
          )}
        </div>
        {retry}
        <button type="submit" disabled={sending} className={`${submitClass} w-full`}>
          {sending ? "Sending…" : SUBMIT_LABEL}
        </button>
        <p className="-mt-1 text-[13px] leading-relaxed text-muted">
          {SHARE_CONSENT_TEXT.split("Terms of Use and Privacy Policy")[0]}
          <Link href="/terms" className="underline underline-offset-2">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </Link>
          {SHARE_CONSENT_TEXT.split("Terms of Use and Privacy Policy")[1]}
        </p>
      </form>
    );
  } else if (screen === "zip") {
    body = (
      <form
        noValidate
        data-form={uid}
        onSubmit={(e) => {
          e.preventDefault();
          void submit("zip");
        }}
        className="flex flex-col gap-5"
      >
        {heading("Final question: where's the deal?")}
        <div className="sm:max-w-[260px]">
          <TextField id={`${uid}-zip`} label="ZIP code of the property" inputMode="numeric" autoComplete="off" placeholder="30310" mono value={a.zip} onChange={(v) => setA({ ...a, zip: v.replace(/\D/g, "").slice(0, 5) })} error={errors.zip} />
        </div>
        {retry}
        <div className="flex items-center justify-between gap-3 border-t border-line pt-5">
          <BackButton onClick={back} />
          <button type="submit" disabled={sending} className={submitClass}>
            {sending ? "Sending…" : "Send my deal"}
          </button>
        </div>
      </form>
    );
  } else {
    const s = screen as TapScreen;
    const value = a[FIELD[s]] as string;
    body = (
      <div className="flex flex-col gap-5">
        {s === "occupancy" && a.first.trim() && <p className="-mb-2 text-[15px] font-medium text-brand">Got it, {a.first.trim()}. Now the deal itself, one tap per answer, so your specialist calls with the numbers in hand.</p>}
        {heading(QUESTION[s])}
        <fieldset className="grid gap-2.5 sm:grid-cols-2">
          <legend className="sr-only">{QUESTION[s]}</legend>
          {optionsFor(s, a).map((o) => (
            <label
              key={o.value}
              className="flex min-h-[60px] cursor-pointer flex-col justify-center rounded-xl border border-field bg-white px-4 py-3 transition-colors has-[:checked]:border-2 has-[:checked]:border-brand has-[:checked]:bg-brand-tint has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand hover:border-ink"
            >
              <input type="radio" name={`${uid}-${s}`} value={o.value} checked={value === o.value} onChange={() => pick(s, o.value)} className="sr-only" />
              <span className="text-[16px] font-semibold">{o.label}</span>
              {o.hint && <span className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.06em] text-muted">{o.hint}</span>}
            </label>
          ))}
        </fieldset>
        <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
          {canGoBack ? <BackButton onClick={back} /> : <span />}
          <span className="font-mono text-xs text-muted">One tap moves you on</span>
        </div>
      </div>
    );
  }

  const card = (
    <div className="flex flex-col gap-5">
      {!done && (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between font-mono text-[12px] text-ink-2">
            <span>{`STEP ${at + 1} OF ${screens.length}`}</span>
            <span>This won&apos;t pull your credit</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
            <div className="h-full rounded-full bg-brand transition-[width] duration-300" style={{ width: `${Math.round(progress * 100)}%` }} />
          </div>
        </div>
      )}
      {body}
    </div>
  );

  if (variant === "card") {
    return <div className="rounded-[20px] border border-line bg-white p-6 shadow-[0_1px_0_rgba(13,20,17,0.04),0_24px_48px_-28px_rgba(13,20,17,0.28)] sm:p-7">{card}</div>;
  }

  const rows: [string, string | undefined][] = [
    ["Deal", LOAN_TYPES.find((t) => t.id === a.loanType)?.label],
    ["Buy or refi", purposesFor(a.loanType).find((p) => p.id === a.purpose)?.label],
    ["Property", propertyTypesFor(a.loanType).find((p) => p.id === a.propertyType)?.label],
    ["Funding", LOAN_RANGES.find((r) => r.id === a.loanRange)?.label],
    ["Credit", a.credit || undefined],
  ];
  return (
    <div className="flex flex-wrap items-start gap-8">
      <div className="min-w-0 flex-[999_1_560px] rounded-[20px] border border-line bg-white p-6 sm:p-8">{card}</div>
      <aside className="flex flex-[1_1_300px] flex-col gap-4">
        <div className="flex flex-col gap-3.5 rounded-[20px] bg-ink p-6 text-paper">
          <div className="font-mono text-xs tracking-[0.08em] text-lime">YOUR DEAL SO FAR</div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 text-[15px]">
            {rows.map(([k, v]) => (
              <Row key={k} k={k} v={v} />
            ))}
          </dl>
        </div>
        <ul className="flex flex-col gap-4 rounded-[20px] border border-line bg-white p-6 text-[15px] leading-normal text-ink-2">
          <Trust title="Straight to the numbers.">Your loan specialist calls about this deal: the price, the rehab, the rent and your exit.</Trust>
          <Trust title="Your closing date comes first.">Say when you have to close, and the timeline is planned back from that date.</Trust>
          <Trust title="Your credit stays untouched.">Sending this request doesn&apos;t pull your credit.</Trust>
        </ul>
      </aside>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="min-h-11 rounded-full border border-field px-4 text-[15px] font-semibold hover:border-ink">
      ← Back
    </button>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  inputMode,
  autoComplete,
  placeholder,
  mono,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  inputMode?: "text" | "email" | "tel" | "numeric";
  autoComplete?: string;
  placeholder?: string;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`min-h-[52px] w-full rounded-[10px] border bg-white px-3.5 text-base text-ink ${error ? "border-warn" : "border-field"} ${mono ? "font-mono" : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
      />
      {error && (
        <p id={`${id}-err`} className="text-sm font-medium text-warn">
          {error}
        </p>
      )}
    </div>
  );
}

function Row({ k, v }: { k: string; v?: string }) {
  return (
    <>
      <dt className="text-mist">{k}</dt>
      <dd className="m-0 text-right">{v || "—"}</dd>
    </>
  );
}

function Trust({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className="grid grid-cols-[18px_1fr] gap-3">
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="mt-1 text-brand">
        <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>
        <b className="font-semibold text-ink">{title}</b> {children}
      </span>
    </li>
  );
}
