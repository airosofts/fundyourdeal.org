"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

/** Rate-alert sign-up → /api/rate-alerts (AiroBase gf_rate_alerts). */
export function RateAlert() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const pathname = usePathname();

  if (state === "done") {
    return (
      <p role="status" className="rounded-xl border border-night-line p-5 text-[15px] text-mist">
        You&apos;re on the list. We&apos;ll email you when investor loan rates move. Unsubscribe any time.
      </p>
    );
  }
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setState("sending");
        try {
          const res = await fetch("/api/rate-alerts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, sourcePage: pathname, website: honeypot }),
          });
          setState(res.ok ? "done" : "error");
        } catch {
          setState("error");
        }
      }}
      className="flex flex-col gap-3"
    >
      <label htmlFor="alert-email" className="text-sm font-medium text-mist">
        Email address
      </label>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>
      <div className="flex flex-wrap gap-2">
        <input
          id="alert-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[52px] min-w-0 flex-[1_1_240px] rounded-[10px] border border-night-line bg-night px-3.5 text-base text-white placeholder:text-mist-2"
          placeholder="you@example.com"
        />
        <button type="submit" disabled={state === "sending"} className="min-h-[52px] flex-[0_0_auto] rounded-xl bg-lime px-6 font-semibold text-ink hover:brightness-95 disabled:opacity-60">
          {state === "sending" ? "Saving…" : "Send me alerts"}
        </button>
      </div>
      {state === "error" && (
        <p role="alert" className="text-sm text-[#F1B7A6]">
          That didn&apos;t go through. Check the email address and try again.
        </p>
      )}
      <p className="font-mono text-xs text-mist-2">One email when investor rates move. Unsubscribe any time.</p>
    </form>
  );
}
