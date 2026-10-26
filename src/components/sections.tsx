import Link from "next/link";
import type { ReactNode } from "react";
import { Scale } from "./DscrCalculator";
import { Faq } from "./Faq";
import { LeadForm } from "./LeadForm";
import { Check, Container, Eyebrow, H2 } from "./ui";
import { PROGRAMS, SITE, programBySlug } from "@/lib/site";
import type { Source } from "@/content/types";

// Building blocks for the program, state, guide and calculator pages.
// Fund Your Deal look: a deal sheet in the hero, deal tickets for worked
// examples, numbered ledgers for terms, and a dark deal-desk band around the form.

type Fact = { label: string; value: string };
type Example = { title: string; rows: [string, string][]; result: { label: string; value: string }; note: string; dscr?: number };

/** Deal-first wording per program: the button label, what the deal is called mid-sentence, and the form headline. */
const DEAL_COPY: Record<string, { cta: string; deal: string; apply: string }> = {
  dscr: { cta: "Get rental funding", deal: "rental", apply: "A rental to buy or refinance? Get it funded on the rent." },
  "short-term-rental": { cta: "Get rental funding", deal: "short-term rental", apply: "Buying a vacation rental, or refinancing one? Send it over." },
  "fix-and-flip": { cta: "Fund my flip", deal: "flip", apply: "Flip under contract? Let’s get it funded." },
  "hard-money": { cta: SITE.cta, deal: "deal", apply: "A deal on a deadline? Send it to us." },
  bridge: { cta: "Fund my bridge loan", deal: "bridge deal", apply: "Closing before the long-term money is ready? Bridge it." },
  brrrr: { cta: "Get my BRRRR funded", deal: "BRRRR deal", apply: "Buying to rehab, rent and refinance out? Start here." },
  construction: { cta: "Fund my build", deal: "build", apply: "Lot, plans and budget ready? Fund the build." },
  portfolio: { cta: "Get rental funding", deal: "portfolio", apply: "Several rentals, one loan. Send us the portfolio." },
  "cash-out-refinance": { cta: "Get rental funding", deal: "cash-out refinance", apply: "Equity stuck in a rental? Pull your cash back out." },
};

/** Button label, deal noun and form headline for a program slug (falls back to SITE.cta). */
export function dealCopy(slug?: string) {
  return (slug && DEAL_COPY[slug]) || { cta: SITE.cta, deal: "deal", apply: "Have a deal in hand? Get it funded." };
}

/** Headline figures as a row of stat blocks with an accent rule. */
export function FactsGrid({ facts, note }: { facts: Fact[]; note?: ReactNode }) {
  return (
    <Container className="pb-14 pt-4">
      <dl className="grid gap-x-8 gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))]">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col-reverse gap-1 border-l-2 border-brand pl-4">
            <dt className="text-sm text-muted">{f.label}</dt>
            <dd className="font-mono text-[28px] leading-tight tracking-[-0.02em] text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>
      {note && <p className="mt-4 max-w-[760px] text-xs leading-relaxed text-muted">{note}</p>}
    </Container>
  );
}

/** Hero-side term sheet with the four headline figures. Pass it as PageIntro's aside. */
export function DealSheet({ facts, title = "At a glance", note }: { facts: Fact[]; title?: string; note?: ReactNode }) {
  return (
    <aside aria-label={title} className="w-full overflow-hidden rounded-2xl border border-ink bg-white xl:w-[320px] xl:shrink-0">
      <div className="flex items-center gap-2 bg-ink px-5 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-lime">
        <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-lime" />
        {title}
      </div>
      <dl className="grid gap-px bg-line-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-1">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col gap-0.5 bg-white px-5 py-3.5">
            <dt className="text-[13px] text-muted">{f.label}</dt>
            <dd className="font-mono text-[22px] leading-snug tracking-[-0.02em]">{f.value}</dd>
          </div>
        ))}
      </dl>
      {note && <p className="border-t border-line-2 bg-paper px-5 py-3 text-xs leading-relaxed text-muted">{note}</p>}
    </aside>
  );
}

export function Formula({ children }: { children: ReactNode }) {
  return <div className="rounded-r-xl border-l-4 border-brand bg-brand-tint px-5 py-4 font-mono text-[16px] leading-relaxed text-ink">{children}</div>;
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col divide-y divide-line-2 text-[15px] leading-relaxed text-ink-2">
      {items.map((b) => (
        <li key={b} className="flex gap-3 py-3 first:pt-0 last:pb-0">
          <span aria-hidden="true" className="mt-[9px] size-[7px] shrink-0 rotate-45 bg-brand" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

/** Worked example as a deal ticket: the inputs, then the number that decides it. */
export function ExampleCard({ example }: { example: Example }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-ink bg-white">
      <div className="bg-ink px-6 py-3.5 font-mono text-xs tracking-[0.08em] text-lime">{example.title}</div>
      <dl className="flex flex-col px-6 pt-2 text-[15px]">
        {example.rows.map(([k, v], i, arr) => {
          const last = i === arr.length - 1;
          return (
            <div key={k + i} className={`flex justify-between gap-4 py-2.5 ${last ? "border-t-2 border-ink font-semibold text-ink" : "border-b border-dashed border-line"}`}>
              <dt className={last ? "" : "text-ink-2"}>{k}</dt>
              <dd className="text-right font-mono">{v}</dd>
            </div>
          );
        })}
      </dl>
      <div className="mx-6 mt-4 flex flex-wrap items-baseline justify-between gap-3 rounded-xl bg-brand-tint px-5 py-4">
        <span className="text-[15px] font-medium text-brand-deep">{example.result.label}</span>
        <span className="font-mono text-[clamp(30px,3.6vw,40px)] leading-none tracking-[-0.03em] text-brand-deep">{example.result.value}</span>
      </div>
      {example.dscr !== undefined && (
        <div className="mx-6 mt-5">
          <Scale dscr={example.dscr} />
        </div>
      )}
      <p className="px-6 pb-6 pt-4 text-xs leading-relaxed text-muted">{example.note}</p>
    </div>
  );
}

/** Cards with a left accent: who a loan suits, state rules, deal profiles. */
export function AudienceGrid({
  eyebrow,
  heading,
  items,
  id,
  tone = "paper",
}: {
  eyebrow: string;
  heading: string;
  items: { title: string; text: string }[];
  id?: string;
  tone?: "white" | "paper";
}) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line ${tone === "white" ? "bg-white" : ""}`}>
      <Container className="flex flex-col gap-10 py-[88px]">
        <div className="flex max-w-[720px] flex-col gap-3">
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2>{heading}</H2>
        </div>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {items.map((it) => (
            <div key={it.title} className={`flex flex-col gap-2 rounded-xl border-l-4 border-brand p-6 ${tone === "white" ? "bg-paper" : "bg-white"}`}>
              <span className="text-[18px] font-semibold leading-snug tracking-[-0.01em]">{it.title}</span>
              <span className="text-[15px] leading-relaxed text-ink-2">{it.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Numbered ledger of label → explanation rows. */
export function DefinitionList({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="flex flex-col text-[15px]">
      {rows.map(([k, v], i) => (
        <div key={k + i} className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-b border-dashed border-line py-5 first:pt-0 last:border-b-0">
          <span aria-hidden="true" className="pt-0.5 font-mono text-[13px] text-brand">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-1.5">
            <dt className="font-semibold text-ink">{k}</dt>
            <dd className="leading-relaxed text-ink-2">{v}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

/** Heading column (sticky on wide screens) beside a numbered ledger. */
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
      <Container className="grid items-start gap-10 py-[88px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col gap-3.5 lg:sticky lg:top-24">
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2>{heading}</H2>
          {intro && <p className="text-[17px] leading-relaxed text-ink-2">{intro}</p>}
          {extra}
        </div>
        <DefinitionList rows={rows} />
      </Container>
    </section>
  );
}

export function CompareTable({ columns, rows, highlight = 1 }: { columns: string[]; rows: string[][]; highlight?: number }) {
  return (
    <>
      <div className="overflow-x-auto rounded-xl border border-ink bg-white">
        <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
          <thead className="bg-ink text-[13px] font-semibold text-mist">
            <tr>
              {columns.map((c, i) => (
                <th key={c + i} scope="col" className={`px-5 py-3 ${i === highlight ? "text-lime" : ""}`}>
                  {c || <span className="sr-only">Item</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={r[0] + ri} className="border-t border-line align-top">
                {r.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="px-5 py-4 font-semibold text-ink">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className={`px-5 py-4 leading-relaxed ${i === highlight ? "bg-brand-tint/60 text-ink" : "text-ink-2"}`}>
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted sm:hidden">Scroll sideways for the other columns →</p>
    </>
  );
}

export function CompareSection({ compare }: { compare: { id: string; heading: string; intro: string; columns: string[]; rows: string[][] } }) {
  return (
    <section id={compare.id} className="scroll-mt-20 border-t border-line">
      <Container className="flex flex-col gap-8 py-[88px]">
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-3">
            <Eyebrow>Side by side</Eyebrow>
            <H2>{compare.heading}</H2>
          </div>
          <p className="text-[17px] leading-relaxed text-ink-2">{compare.intro}</p>
        </div>
        <CompareTable columns={compare.columns} rows={compare.rows} />
      </Container>
    </section>
  );
}

/** Dark band: heading on one side, a numbered timeline on the other. */
export function StepsBand({ eyebrow, heading, items }: { eyebrow: string; heading: string; items: { title: string; text: string }[] }) {
  return (
    <section className="bg-ink text-paper">
      <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col gap-3 lg:sticky lg:top-24">
          <Eyebrow tone="lime">{eyebrow}</Eyebrow>
          <H2 className="text-white">{heading}</H2>
        </div>
        <ol className="ml-4 flex flex-col border-l border-night-line">
          {items.map((s, i) => (
            <li key={s.title} className="relative flex flex-col gap-2 pb-10 pl-9 last:pb-0">
              <span aria-hidden="true" className="absolute -left-4 top-0 flex size-8 items-center justify-center rounded-full bg-lime font-mono text-[13px] font-semibold text-ink">
                {i + 1}
              </span>
              <span className="pt-1 text-[19px] font-semibold leading-snug text-white">{s.title}</span>
              <span className="text-[15px] leading-relaxed text-mist">{s.text}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** FAQ: heading on the left, accordion (with FAQPage schema) on the right. */
export function FaqSection({
  heading,
  items,
  children,
  eyebrow = "Straight answers",
}: {
  heading: string;
  items: { q: string; a: string }[];
  children?: ReactNode;
  eyebrow?: string;
}) {
  return (
    <section className="border-t border-line">
      <Container className="grid items-start gap-10 py-[88px] lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <div className="flex flex-col gap-3 lg:sticky lg:top-24">
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2>{heading}</H2>
        </div>
        <div className="flex min-w-0 flex-col gap-6">
          <Faq items={items} />
          {children}
        </div>
      </Container>
    </section>
  );
}

export function RelatedPrograms({ slugs, heading = "Other ways to fund the deal" }: { slugs: string[]; heading?: string }) {
  const items = slugs.map(programBySlug).filter((p): p is (typeof PROGRAMS)[number] => Boolean(p));
  if (!items.length) return null;
  return (
    <section className="border-t border-line bg-white">
      <Container className="flex flex-col gap-6 py-[72px]">
        <h2 className="text-[26px] font-semibold tracking-[-0.025em]">{heading}</h2>
        <ul className="grid gap-x-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {items.map((p) => (
            <li key={p.slug} className="border-t border-ink">
              <Link href={p.href} className="group flex items-start justify-between gap-5 py-5">
                <span className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.06em] text-brand">{p.group === "Rental" ? "Hold and refinance" : "Deal funding"}</span>
                  <span className="text-[19px] font-semibold tracking-[-0.02em] group-hover:text-brand">{p.title}</span>
                  <span className="text-[15px] leading-normal text-ink-2">{p.blurb}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="mt-6 flex size-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Sources({ sources, updated }: { sources: Source[]; updated: string }) {
  if (!sources.length) return null;
  return (
    <section>
      <Container className="pb-[72px] pt-10">
        <details className="rounded-xl border border-dashed border-field px-5 py-4">
          <summary className="flex cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[15px] font-semibold">
            <span>Where these numbers come from ({sources.length})</span>
            <span className="text-xs font-normal text-muted">Checked {formatDate(updated)}</span>
          </summary>
          <p className="mt-3 max-w-[820px] text-sm leading-relaxed text-ink-2">
            Each rate, limit, fee and timeline on this page is a range we took from lender rate sheets, published program terms and public lending data, dated as listed. Read
            them as a picture of the market rather than a quote. What a lender offers on your deal turns on the house itself, your credit score and how many projects you have
            finished.
          </p>
          <ol className="mt-3 flex list-decimal flex-col gap-1.5 pl-5 text-sm marker:font-mono marker:text-muted">
            {sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-brand underline underline-offset-2 hover:text-brand-deep">
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </details>
      </Container>
    </section>
  );
}

const APPLY_POINTS = [
  "About a minute from first tap to sent",
  "Applying doesn’t pull your credit",
  "A loan specialist phones to go over it",
  "Investment property only, never your own home",
];

/** Dark deal-desk band: the lead form beside the pitch. Anchored at #apply. */
export function ApplySection({
  eyebrow,
  heading,
  text,
  preset,
  points = APPLY_POINTS,
}: {
  eyebrow: string;
  heading: string;
  text: string;
  preset?: Parameters<typeof LeadForm>[0]["preset"];
  /** Short reassurance lines under the text. */
  points?: string[];
}) {
  return (
    <section id="apply" className="scroll-mt-20 bg-ink text-paper">
      <Container className="grid items-center gap-12 py-[88px] lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
        <div className="flex flex-col gap-4 lg:order-last">
          <Eyebrow tone="lime">{eyebrow}</Eyebrow>
          <H2 className="text-white">{heading}</H2>
          <p className="text-[17px] leading-relaxed text-mist">{text}</p>
          <ul className="mt-2 grid gap-3 text-[15px] text-paper sm:grid-cols-2">
            {points.map((t) => (
              <li key={t} className="flex gap-2.5 rounded-lg border border-night-line px-3.5 py-3">
                <Check className="mt-0.5 text-lime" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 text-ink">
          <LeadForm variant="card" preset={preset} />
        </div>
      </Container>
    </section>
  );
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

const SPEED_POINTS = ["60 seconds to send the deal", "No hit to your credit to apply", "A real loan specialist calls back"];

/** Speed and reassurance chips under the hero buttons (Roland: urgency throughout). */
export function SpeedLine({ items = SPEED_POINTS }: { items?: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2 text-[13px] text-ink-2">
      {items.map((t) => (
        <li key={t} className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
          {t}
        </li>
      ))}
    </ul>
  );
}
