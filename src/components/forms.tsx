"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { SITE } from "@/lib/site";

// Contact form: topic chips, a few plain fields, server-side validation, one POST to /api/contact.

type Status = "idle" | "sending" | "done" | "error";

function useSubmit(url: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  async function submit(body: Record<string, unknown>) {
    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = (await res.json().catch(() => ({}))) as { errors?: Record<string, string> };
      if (res.ok) return setStatus("done");
      if (data.errors) setErrors(data.errors);
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }
  return { status, errors, submit };
}

/** Topic values are the ones /api/contact accepts. */
const TOPICS = [
  { value: "loan", label: "Funding for a deal" },
  { value: "existing_request", label: "A deal I already sent in" },
  { value: "press", label: "Press or media" },
  { value: "other", label: "Anything else" },
];

const input = "min-h-[52px] w-full rounded-lg border border-field bg-paper px-3.5 text-base text-ink focus:bg-white";

function Field({ id, label, error, children, optional }: { id: string; label: string; error?: string; children: ReactNode; optional?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm font-medium text-warn">
          {error}
        </p>
      )}
    </div>
  );
}

function Done({ children }: { children: ReactNode }) {
  return (
    <div role="status" className="flex flex-col gap-2 rounded-2xl border border-ink bg-white p-7 text-[16px] leading-relaxed text-ink-2">
      {children}
    </div>
  );
}

const Honeypot = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
  <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
    <input tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

export function ContactForm() {
  const { status, errors, submit } = useSubmit("/api/contact");
  const [v, setV] = useState({ name: "", email: "", phone: "", topic: "loan", message: "" });
  const [hp, setHp] = useState("");
  const on = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setV((x) => ({ ...x, [k]: e.target.value }));

  if (status === "done") {
    return (
      <Done>
        <span className="text-[19px] font-semibold text-ink">Message received.</span>
        <span>
          Look for a reply at {v.email || "the email address you gave us"}. If it&apos;s a live deal with a closing date, the{" "}
          <Link href="/get-funding" className="font-semibold text-ink underline underline-offset-4">
            60-second funding form
          </Link>{" "}
          puts it in front of a loan specialist sooner.
        </span>
      </Done>
    );
  }
  return (
    <form
      className="relative flex flex-col gap-6 rounded-2xl border border-ink bg-white p-6 sm:p-8"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void submit({ ...v, website: hp });
      }}
    >
      <Honeypot value={hp} onChange={setHp} />
      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-2.5 text-sm font-semibold">What&apos;s this about?</legend>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <label
              key={t.value}
              className="cursor-pointer rounded-full border border-field px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-ink has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand"
            >
              <input type="radio" name="topic" value={t.value} checked={v.topic === t.value} onChange={on("topic")} className="sr-only" />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="c-name" label="Your name" error={errors.name}>
          <input id="c-name" className={input} autoComplete="name" value={v.name} onChange={on("name")} aria-invalid={Boolean(errors.name)} />
        </Field>
        <Field id="c-email" label="Email address" error={errors.email}>
          <input id="c-email" type="email" className={input} autoComplete="email" value={v.email} onChange={on("email")} aria-invalid={Boolean(errors.email)} />
        </Field>
        <Field id="c-phone" label="Phone number" optional>
          <input id="c-phone" type="tel" className={input} autoComplete="tel" value={v.phone} onChange={on("phone")} />
        </Field>
      </div>
      <Field id="c-msg" label="Your message" error={errors.message}>
        <textarea
          id="c-msg"
          rows={5}
          className={`${input} py-3`}
          placeholder="The property, the price, the loan you need and when you have to close."
          value={v.message}
          onChange={on("message")}
          aria-invalid={Boolean(errors.message)}
        />
      </Field>
      {status === "error" && !Object.keys(errors).length && (
        <p role="alert" className="text-sm font-medium text-warn">
          Your message didn&apos;t send. Give it another try in a moment, or email us at{" "}
          <a href={`mailto:${SITE.email}`} className="underline underline-offset-2">
            {SITE.email}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-[52px] w-full rounded-full bg-brand px-7 font-bold text-white hover:bg-brand-deep disabled:opacity-60 sm:w-auto sm:self-start"
      >
        {status === "sending" ? "Sending your message…" : "Send my message"}
      </button>
    </form>
  );
}
