import Link from "next/link";
import type { ReactNode } from "react";
import { Scale } from "./DscrCalculator";
import { Faq } from "./Faq";
import { LeadForm } from "./LeadForm";
import { Check, Container, Eyebrow, H2 } from "./ui";
import { PROGRAMS, programBySlug } from "@/lib/site";
import type { Source } from "@/content/types";

// Page sections shared by the program, state and guide templates.

export function FactsGrid({ facts, note }: { facts: { label: string; value: string }[]; note?: ReactNode }) {
  return (
    <Container className="pb-16 pt-6">
      <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))]">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col gap-1.5 bg-white p-6">
            <dt className="font-mono text-xs uppercase tracking-[0.06em] text-muted">{f.label}</dt>
            <dd className="font-mono text-[26px] tracking-[-0.02em]">{f.value}</dd>
          </div>
        ))}
      </dl>
      {note && <p className="mt-3 font-mono text-xs leading-relaxed text-muted">{note}</p>}
    </Container>
  );
}

export function Formula({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border border-line bg-paper p-5 font-mono text-[17px] leading-relaxed">{children}</div>;
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-ink-2">
      {items.map((b) => (
        <li key={b} className="flex gap-2.5">
          <Check className="mt-1.5 text-brand" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export function ExampleCard({ example }: { example: { title: string; rows: [string, string][]; result: { label: string; value: string }; note: string; dscr?: number } }) {
  return (
    <div className="flex flex-col gap-5 rounded-[20px] bg-ink p-7 text-paper">
      <div className="font-mono text-xs tracking-[0.08em] text-lime">{example.title}</div>
      <dl className="flex flex-col text-[15px]">
        {example.rows.map(([k, v], i, arr) => (
          <div key={k + i} className={`flex justify-between gap-4 border-t border-night-line py-3 ${i === arr.length - 1 ? "font-semibold" : ""}`}>
            <dt className={i === arr.length - 1 ? "" : "text-mist"}>{k}</dt>
            <dd className="text-right font-mono">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-night-line pt-4">
        <span className="text-mist">{example.result.label}</span>
        <span className="font-mono text-[clamp(32px,4vw,44px)] leading-none tracking-[-0.03em] text-lime">{example.result.value}</span>
      </div>
      {example.dscr !== undefined && <Scale dscr={example.dscr} dark />}
      <p className="font-mono text-xs leading-relaxed text-mist-2">{example.note}</p>
    </div>
  );
}

export function AudienceGrid({ eyebrow, heading, items }: { eyebrow: string; heading: string; items: { title: string; text: string }[] }) {
  return (
    <section>
      <Container className="flex flex-col gap-10 py-[88px]">
        <div className="flex max-w-[680px] flex-col gap-3">
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2>{heading}</H2>
        </div>
        <div className="grid gap-x-6 gap-y-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))]">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col gap-2.5 border-t-2 border-ink pt-5">
              <span className="text-[19px] font-semibold">{it.title}</span>
              <span className="text-[15px] leading-relaxed text-ink-2">{it.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Two-column definition list: label → explanation. */
export function DefinitionSection({
  id,
  eyebrow,
  heading,
  intro,
  rows,
  tone = "white",
  extra,
}: {
  id?: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  rows: [string, string][];
  tone?: "white" | "paper";
  extra?: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line ${tone === "white" ? "bg-white" : ""}`}>
      <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="flex flex-col gap-3.5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2>{heading}</H2>
          {intro && <p className="text-[17px] leading-relaxed text-ink-2">{intro}</p>}
          {extra}
        </div>
        <dl className="flex flex-col text-[15px]">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-t border-line py-4 last:border-b sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className="font-semibold">{k}</dt>
              <dd className="leading-relaxed text-ink-2">{v}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function CompareTable({ columns, rows, highlight = 1 }: { columns: string[]; rows: string[][]; highlight?: number }) {
  return (
    <>
      <div className="overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
          <thead className="font-mono text-xs uppercase tracking-[0.06em] text-muted">
            <tr className="bg-paper">
              {columns.map((c, i) => (
                <th key={c + i} scope="col" className={`px-5 py-3.5 font-normal ${i === highlight ? "text-brand" : ""}`}>
                  {c || <span className="sr-only">Feature</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t border-line align-top">
                {r.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="px-5 py-4 font-semibold">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className={`px-5 py-4 leading-relaxed ${i === highlight ? "" : "text-ink-2"}`}>
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-mono text-xs text-muted sm:hidden">Swipe the table to see every column →</p>
    </>
  );
}

export function CompareSection({ compare }: { compare: { id: string; heading: string; intro: string; columns: string[]; rows: string[][] } }) {
  return (
    <section id={compare.id} className="scroll-mt-20">
      <Container className="flex flex-col gap-8 py-[88px]">
        <div className="flex max-w-[720px] flex-col gap-3">
          <Eyebrow>Compare</Eyebrow>
          <H2>{compare.heading}</H2>
          <p className="text-[17px] leading-relaxed text-ink-2">{compare.intro}</p>
        </div>
        <CompareTable columns={compare.columns} rows={compare.rows} />
      </Container>
    </section>
  );
}

export function StepsBand({ eyebrow, heading, items }: { eyebrow: string; heading: string; items: { title: string; text: string }[] }) {
  return (
    <section className="bg-ink text-paper">
      <Container className="flex flex-col gap-10 py-[88px]">
        <div className="flex flex-col gap-3">
          <Eyebrow tone="lime">{eyebrow}</Eyebrow>
          <H2 className="text-white">{heading}</H2>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-night-line bg-night-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
          {items.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-2.5 bg-ink p-7">
              <span className="font-mono text-[15px] text-lime">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[19px] font-semibold">{s.title}</span>
              <span className="text-[15px] leading-normal text-mist">{s.text}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function FaqSection({ heading, items, children }: { heading: string; items: { q: string; a: string }[]; children?: ReactNode }) {
  return (
    <section>
      <div className="mx-auto flex max-w-[880px] flex-col gap-7 px-6 py-[88px]">
        <H2>{heading}</H2>
        <Faq items={items} />
        {children}
      </div>
    </section>
  );
}

export function RelatedPrograms({ slugs, heading = "Related loan programs" }: { slugs: string[]; heading?: string }) {
  const items = slugs.map(programBySlug).filter((p): p is (typeof PROGRAMS)[number] => Boolean(p));
  if (!items.length) return null;
  return (
    <section className="border-t border-line bg-white">
      <Container className="flex flex-col gap-8 py-[72px]">
        <h2 className="text-[28px] font-semibold tracking-[-0.03em]">{heading}</h2>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
          {items.map((p) => (
            <Link key={p.slug} href={p.href} className="group flex flex-col gap-2.5 rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-ink">
              <span className="font-mono text-xs uppercase text-brand">{p.group === "Rental" ? "Rental loan" : "Project loan"}</span>
              <span className="text-[19px] font-semibold tracking-[-0.02em]">{p.title}</span>
              <span className="text-[15px] leading-normal text-ink-2">{p.blurb}</span>
              <span className="mt-auto pt-2 text-sm font-semibold">
                Learn more <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Sources({ sources, updated }: { sources: Source[]; updated: string }) {
  if (!sources.length) return null;
  return (
    <section>
      <div className="mx-auto max-w-[880px] px-6 pb-[72px]">
        <details className="rounded-2xl border border-line bg-white p-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-semibold">
            Sources and methodology
            <span className="font-mono text-xs font-normal text-muted">Updated {formatDate(updated)}</span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">
            Figures are market ranges from published lender terms and public data on the dates shown. They describe the market and are not an offer. Your terms depend on the
            property, your credit and your experience.
          </p>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            {sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-brand underline-offset-2 hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}

export function ApplySection({ eyebrow, heading, text, preset }: { eyebrow: string; heading: string; text: string; preset?: Parameters<typeof LeadForm>[0]["preset"] }) {
  return (
    <section id="apply" className="scroll-mt-20 border-t border-line bg-white">
      <Container className="grid items-start gap-12 py-[88px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
        <div className="flex flex-col gap-3.5 lg:pt-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2>{heading}</H2>
          <p className="text-[17px] leading-relaxed text-ink-2">{text}</p>
          <ul className="mt-2 flex flex-col gap-3 text-[15px] text-ink-2">
            <li className="flex items-center gap-2.5">
              <Check />
              Takes about 60 seconds
            </li>
            <li className="flex items-center gap-2.5">
              <Check />
              No credit pull to apply
            </li>
            <li className="flex items-center gap-2.5">
              <Check />
              A loan specialist calls you back fast
            </li>
          </ul>
        </div>
        <LeadForm variant="card" preset={preset} />
      </Container>
    </section>
  );
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

/** Speed promise under hero buttons (Roland: urgency throughout). */
export function SpeedLine() {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-ink-2">
      {["Apply in 60 seconds", "Fast closings", "No credit pull to apply"].map((t) => (
        <li key={t} className="flex items-center gap-2">
          <Check />
          {t}
        </li>
      ))}
    </ul>
  );
}
