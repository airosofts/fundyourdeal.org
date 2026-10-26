import Link from "next/link";
import type { ChangeEvent, ReactNode } from "react";

// Building blocks shared by the calculators: inputs on a white card, results
// on a dark card, a breakdown table and a call to action.

export function Group({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset className="flex flex-col gap-3.5">
      <legend className="mb-3.5 font-mono text-xs uppercase tracking-[0.08em] text-muted">{legend}</legend>
      {children}
    </fieldset>
  );
}

export function Num({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  step,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={`calc-${id}`} className="text-sm font-medium">
        {label}
      </label>
      <div className="flex min-h-12 items-center rounded-[10px] border border-field bg-white focus-within:border-ink">
        {prefix && <span className="pl-3 font-mono text-muted">{prefix}</span>}
        <input id={`calc-${id}`} type="number" inputMode="decimal" min="0" step={step ?? "any"} value={value} onChange={onChange} className="w-full min-w-0 bg-transparent px-2.5 font-mono text-base outline-none" />
        {suffix && <span className="pr-3 font-mono text-muted">{suffix}</span>}
      </div>
    </div>
  );
}

export function Segmented<T extends string | number>({ label, value, options, onChange, mono }: { label: string; value: T; options: { v: T; l: string }[]; onChange: (v: T) => void; mono?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium">{label}</span>
      <div role="group" aria-label={label} className="grid gap-1.5 rounded-[10px] border border-field p-1" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
        {options.map((o) => (
          <button key={String(o.v)} type="button" aria-pressed={value === o.v} onClick={() => onChange(o.v)} className={`min-h-10 rounded-[7px] text-[15px] font-medium transition-colors ${mono ? "font-mono" : ""} ${value === o.v ? "bg-ink text-white" : "hover:bg-paper"}`}>
            {o.l}
          </button>
        ))}
      </div>
    </div>
  );
}

export function InputsCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <form className="flex flex-col gap-6 rounded-[20px] border border-line bg-white p-6 sm:p-7" aria-label={label} onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
}

export function ResultCard({ eyebrow, value, badge, children }: { eyebrow: string; value: string; badge?: { label: string; tone: "strong" | "ok" | "low" }; children?: ReactNode }) {
  const TONE = { strong: "bg-lime", ok: "bg-[#E8E2A6]", low: "bg-[#E9C2B3]" } as const;
  return (
    <div className="flex flex-col gap-6 rounded-[20px] bg-ink p-6 text-paper sm:p-7" aria-live="polite">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="font-mono text-xs tracking-[0.08em] text-mist">{eyebrow}</span>
        {badge && <span className={`rounded-full px-2.5 py-1.5 text-[13px] font-semibold text-ink ${TONE[badge.tone]}`}>{badge.label}</span>}
      </div>
      <div className="break-words font-mono text-[clamp(52px,7vw,88px)] font-medium leading-[0.95] tracking-[-0.05em] text-white">{value}</div>
      {children}
    </div>
  );
}

export function Stats({ items }: { items: [string, string][] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-night-line">
      {items.map(([k, v]) => (
        <div key={k} className="bg-night p-4">
          <div className="text-[13px] text-mist">{k}</div>
          <div className="mt-1 break-words font-mono text-[20px] text-white sm:text-[22px]">{v}</div>
        </div>
      ))}
    </div>
  );
}

export function Breakdown({ title, rows, total }: { title: string; rows: [string, string][]; total?: [string, string] }) {
  return (
    <div className="rounded-[20px] border border-line bg-white px-6 py-6 sm:px-7">
      <div className="mb-2 font-mono text-xs tracking-[0.08em] text-muted">{title}</div>
      <table className="w-full border-collapse text-[15px]">
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k} className="border-b border-line-2 last:border-0">
              <td className="py-2.5 pr-3 text-ink-2">{k}</td>
              <td className="py-2.5 text-right font-mono">{v}</td>
            </tr>
          ))}
          {total && (
            <tr className="border-t border-ink">
              <td className="pt-3 font-semibold">{total[0]}</td>
              <td className="pt-3 text-right font-mono font-medium">{total[1]}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function CalcCta({ href = "/get-funding", children }: { href?: string; children: ReactNode }) {
  return (
    <Link href={href} className="flex min-h-16 items-center justify-between gap-4 rounded-2xl bg-brand px-6 text-white hover:bg-brand-deep">
      <span className="text-[17px] font-semibold">{children}</span>
      <span className="font-mono" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export function CalcGrid({ children }: { children: ReactNode }) {
  return <div className="grid items-start gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr))]">{children}</div>;
}
