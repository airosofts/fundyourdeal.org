"use client";

import { useState, type ReactNode } from "react";

// Contact form: plain fields, server-side validation, one POST.

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

const input = "min-h-[52px] w-full rounded-[10px] border border-field bg-white px-3.5 text-base text-ink";

function F({ id, label, error, children, optional }: { id: string; label: string; error?: string; children: ReactNode; optional?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {error && <p className="text-sm font-medium text-warn">{error}</p>}
    </div>
  );
}

function Done({ children }: { children: ReactNode }) {
  return (
    <div role="status" className="rounded-[20px] border border-line bg-white p-7 text-[17px] leading-relaxed">
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

  if (status === "done") return <Done>Thanks — your message is with us. We&apos;ll get back to you soon.</Done>;
  return (
    <form
      className="relative flex flex-col gap-5 rounded-[20px] border border-line bg-white p-6 sm:p-7"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void submit({ ...v, website: hp });
      }}
    >
      <Honeypot value={hp} onChange={setHp} />
      <div className="grid gap-4 sm:grid-cols-2">
        <F id="c-name" label="Name" error={errors.name}>
          <input id="c-name" className={input} autoComplete="name" value={v.name} onChange={on("name")} />
        </F>
        <F id="c-email" label="Email" error={errors.email}>
          <input id="c-email" type="email" className={input} autoComplete="email" value={v.email} onChange={on("email")} />
        </F>
        <F id="c-phone" label="Phone" optional>
          <input id="c-phone" type="tel" className={input} autoComplete="tel" value={v.phone} onChange={on("phone")} />
        </F>
        <F id="c-topic" label="Topic">
          <select id="c-topic" className={input} value={v.topic} onChange={on("topic")}>
            <option value="loan">A loan for my deal</option>
            <option value="existing_request">A request I already sent</option>
            <option value="press">Press</option>
            <option value="other">Something else</option>
          </select>
        </F>
      </div>
      <F id="c-msg" label="Message" error={errors.message}>
        <textarea id="c-msg" rows={5} className={`${input} py-3`} value={v.message} onChange={on("message")} />
      </F>
      {status === "error" && !Object.keys(errors).length && <p className="text-sm font-medium text-warn">That didn&apos;t go through. Please try again.</p>}
      <button type="submit" disabled={status === "sending"} className="min-h-[52px] self-start rounded-xl bg-brand px-7 font-semibold text-white hover:bg-brand-deep disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
