"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

/** Rate-alert sign-up on a dark band → POST /api/rate-alerts (AiroBase gf_rate_alerts). */
export function RateAlert() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const pathname = usePathname();

  if (state === "done") {
    return (
      <div role="status" className="flex flex-col gap-1.5 rounded-xl border border-lime/40 bg-night p-5 text-[15px] leading-relaxed text-mist">
        <span className="font-semibold text-white">Signed up.</span>
        <span>We&apos;ll write to {email} when published investor rates shift, and only then.</span>
      </div>
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
      className="flex flex-col gap-2.5 rounded-xl border border-night-line bg-night p-5"
    >
      <label htmlFor="alert-email" className="text-sm font-semibold text-white">
        Where should we send rate news?
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
          className="min-h-[52px] min-w-0 flex-[1_1_240px] rounded-[10px] border border-night-line bg-ink px-3.5 text-base text-white placeholder:text-mist-2 focus-visible:outline-lime"
          placeholder="name@yourcompany.com"
        />
        <button type="submit" disabled={state === "sending"} className="min-h-[52px] flex-[0_0_auto] rounded-full bg-lime px-6 font-bold text-ink hover:brightness-95 focus-visible:outline-lime disabled:opacity-60">
          {state === "sending" ? "Signing you up…" : "Alert me"}
        </button>
      </div>
      {state === "error" && (
        <p role="alert" className="text-sm text-[#F1B7A6]">
          We couldn&apos;t save that address. Look it over for a typo and send it again.
        </p>
      )}
      <p className="text-xs text-mist-2">We only write when published rates change. No newsletter, and you can opt out whenever you want.</p>
    </form>
  );
}
