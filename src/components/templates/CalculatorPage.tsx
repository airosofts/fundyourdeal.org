import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { PageIntro } from "../PageIntro";
import { CompareTable, ExampleCard, FaqSection, Formula, RelatedPrograms, Sources } from "../sections";
import { Check, Container, Eyebrow, H2, JsonLd } from "../ui";
import { SITE } from "@/lib/site";
import { ORG_ID } from "@/lib/seo";
import type { Source } from "@/content/types";

/** Long-form content blocks for calculator pages. Text supports **bold** and [label](/href). */
export type CalcBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "formula"; text: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "cta"; text: string; href: string; label: string };

export type CalcExample = { title: string; rows: [string, string][]; result: { label: string; value: string }; note: string; dscr?: number };

/** A titled section rendered between "The math" and the tips. */
export type CalcSection = { id: string; eyebrow: string; heading: string; intro?: string; example?: CalcExample; blocks: CalcBlock[] };

const LINK = "[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2";
const PROSE = `text-[17px] leading-[1.7] text-ink-2 ${LINK} [&_h3]:mt-4 [&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:text-ink [&_li]:mt-1.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-6`;
const GRID = "grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]";

/** Inline formatting: **bold** and [label](/href). External links open in a new tab. */
export function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    // Plain text before this match (regex matches never overlap, so index ≥ last).
    if (m.index !== last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<strong key={m.index}>{m[1]}</strong>);
    else
      parts.push(
        m[3].startsWith("/") ? (
          <Link key={m.index} href={m[3]}>
            {m[2]}
          </Link>
        ) : (
          <a key={m.index} href={m[3]} target="_blank" rel="noopener noreferrer nofollow">
            {m[2]}
          </a>
        )
      );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** Plain text of an Inline string, for structured data. */
export const plainText = (text: string) => text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");

function Block({ b }: { b: CalcBlock }) {
  switch (b.type) {
    case "p":
      return (
        <p>
          <Inline text={b.text} />
        </p>
      );
    case "h3":
      return <h3>{b.text}</h3>;
    case "ul":
    case "ol": {
      const Tag = b.type;
      return (
        <Tag>
          {b.items.map((it, i) => (
            <li key={i}>
              <Inline text={it} />
            </li>
          ))}
        </Tag>
      );
    }
    case "table":
      return (
        <figure className="flex flex-col gap-2">
          <CompareTable columns={b.head} rows={b.rows} highlight={-1} />
          {b.caption && <figcaption className="font-mono text-xs leading-relaxed text-muted">{b.caption}</figcaption>}
        </figure>
      );
    case "formula":
      return <Formula>{b.text}</Formula>;
    case "callout":
      return (
        <aside className="rounded-2xl border border-line bg-brand-tint px-6 py-5 text-[16px] text-ink">
          {b.title && <div className="mb-1 font-semibold">{b.title}</div>}
          <Inline text={b.text} />
        </aside>
      );
    case "cta":
      return (
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink px-6 py-5 text-paper">
          <span className="text-[16px] leading-snug">{b.text}</span>
          <Link href={b.href} className="inline-flex min-h-11 shrink-0 items-center rounded-[10px] bg-lime px-5 text-[15px] font-semibold text-ink no-underline hover:brightness-95">
            {b.label}
          </Link>
        </div>
      );
  }
}

/** Left column of every long-form band: eyebrow, heading, optional intro and extras. */
function SectionHead({ eyebrow, heading, intro, children }: { eyebrow: string; heading: string; intro?: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5">
      <Eyebrow>{eyebrow}</Eyebrow>
      <H2>{heading}</H2>
      {intro && (
        <p className={`text-[17px] leading-relaxed text-ink-2 ${LINK}`}>
          <Inline text={intro} />
        </p>
      )}
      {children}
    </div>
  );
}

/** Label → explanation rows (inputs, results). Explanations support **bold** and links. */
function DefRows({ id, eyebrow, heading, intro, rows, white, extra }: { id: string; eyebrow: string; heading: string; intro?: string; rows: [string, string][]; white: boolean; extra?: ReactNode }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line ${white ? "bg-white" : ""}`}>
      <Container className={GRID}>
        <SectionHead eyebrow={eyebrow} heading={heading} intro={intro}>
          {extra}
        </SectionHead>
        <dl className={`flex flex-col text-[15px] ${LINK}`}>
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-t border-line py-4 last:border-b sm:grid-cols-[190px_1fr] sm:gap-6">
              <dt className="font-semibold text-ink">{k}</dt>
              <dd className="leading-relaxed text-ink-2 [&_strong]:text-ink">
                <Inline text={v} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function ContentSection({ s, white }: { s: CalcSection; white: boolean }) {
  return (
    <section id={s.id} className={`scroll-mt-20 border-t border-line ${white ? "bg-white" : ""}`}>
      <Container className={GRID}>
        <SectionHead eyebrow={s.eyebrow} heading={s.heading} intro={s.intro}>
          {s.example && (
            <div className="mt-3">
              <ExampleCard example={s.example} />
            </div>
          )}
        </SectionHead>
        <div className={`flex min-w-0 flex-col gap-5 ${PROSE}`}>
          {s.blocks.map((b, i) => (
            <Fragment key={i}>
              <Block b={b} />
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Checked list with inline formatting, for tips and mistakes. */
function PointSection({ id, eyebrow, heading, items, white }: { id: string; eyebrow: string; heading: string; items: string[]; white: boolean }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line ${white ? "bg-white" : ""}`}>
      <Container className="grid gap-10 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <SectionHead eyebrow={eyebrow} heading={heading} />
        <ul className={`flex flex-col gap-3.5 text-[16px] leading-relaxed text-ink-2 ${LINK} [&_strong]:text-ink`}>
          {items.map((t) => (
            <li key={t} className="flex gap-3">
              <Check className="mt-[7px] text-brand" />
              <span>
                <Inline text={t} />
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function CalculatorPage({
  path,
  crumb,
  title,
  intro,
  question,
  calculator,
  inputs,
  formula,
  how,
  howHeading = "The math behind each result.",
  howIntro = "Lender arithmetic, one result per line, so you can check any figure by hand.",
  sections = [],
  tips,
  mistakes,
  faqs,
  faqHeading = "Deal questions, answered",
  sources = [],
  updated,
  related,
}: {
  path: string;
  crumb: string;
  title: string;
  /** One or two sentences under the H1. Supports **bold** and [label](/href). */
  intro: string;
  /** The one deal question this calculator answers, shown under the intro. */
  question?: string;
  calculator: ReactNode;
  /** "What to enter": each input, what it means and where to find the number. Supports **bold** and links. */
  inputs?: { heading: string; intro?: string; rows: [string, string][] };
  formula?: string;
  /** Each result and how it's worked out. Supports **bold** and links. */
  how: [string, string][];
  howHeading?: string;
  howIntro?: string;
  /** Long-form sections (worked deal, reading the result, lender limits), in order. */
  sections?: CalcSection[];
  /** Items support **bold** and links. */
  tips: { heading: string; items: string[] };
  mistakes?: { heading: string; items: string[] };
  /** Plain text: the same strings feed the FAQPage structured data. */
  faqs: { q: string; a: string }[];
  faqHeading?: string;
  sources?: Source[];
  /** YYYY-MM-DD, shown with the sources. */
  updated?: string;
  related: string[];
}) {
  // Bands alternate white and paper, starting white under the calculator.
  let band = 0;
  const nextWhite = () => band++ % 2 === 0;

  const toc = [
    ...(inputs ? [{ href: "#how-to-use", label: "Inputs" }] : []),
    { href: "#how-its-calculated", label: "The math" },
    ...sections.map((s) => ({ href: `#${s.id}`, label: s.eyebrow })),
    { href: "#move-the-number", label: "Move the number" },
    ...(mistakes ? [{ href: "#mistakes", label: "Mistakes" }] : []),
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: title,
          description: plainText(intro),
          url: SITE.url + path,
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          browserRequirements: "Requires JavaScript",
          isAccessibleForFree: true,
          inLanguage: "en-US",
          ...(updated ? { dateModified: updated } : {}),
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          publisher: { "@id": ORG_ID },
        }}
      />
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { href: "/calculators", label: "Calculators" }, { label: crumb }]} title={title}>
        <p className={LINK}>
          <Inline text={intro} />
        </p>
        {question && (
          <p className="mt-5 flex flex-col gap-1 border-l-2 border-brand pl-4 text-[17px] leading-snug text-ink">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">The deal question</span>
            <span className="font-semibold">{question}</span>
          </p>
        )}
      </PageIntro>
      <Container className="pb-10 pt-4">{calculator}</Container>

      <nav aria-label="On this page">
        <Container className="pb-14">
          <ul className="flex flex-wrap items-center gap-2 font-mono text-[13px]">
            <li className="mr-1 uppercase tracking-[0.08em] text-muted">On this page</li>
            {toc.map((t) => (
              <li key={t.href}>
                <a href={t.href} className="inline-flex min-h-9 items-center rounded-full border border-line bg-white px-3.5 text-ink-2 transition-colors hover:border-ink hover:text-ink">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {inputs && <DefRows id="how-to-use" eyebrow="What to enter" heading={inputs.heading} intro={inputs.intro} rows={inputs.rows} white={nextWhite()} />}

      <DefRows id="how-its-calculated" eyebrow="The math" heading={howHeading} intro={howIntro} rows={how} white={nextWhite()} extra={formula && <Formula>{formula}</Formula>} />

      {sections.map((s) => (
        <ContentSection key={s.id} s={s} white={nextWhite()} />
      ))}

      <PointSection id="move-the-number" eyebrow="Move the number" heading={tips.heading} items={tips.items} white={nextWhite()} />
      {mistakes && <PointSection id="mistakes" eyebrow="Mistakes to avoid" heading={mistakes.heading} items={mistakes.items} white={nextWhite()} />}

      <div id="faq" className="scroll-mt-20">
        <FaqSection heading={faqHeading} items={faqs}>
          <p className="font-mono text-xs leading-relaxed text-muted">
            Planning numbers only. Nothing here is a loan offer, a rate quote or an approval: a lender sizes your loan from its own appraisal, rent figures, credit tiers and fees.
          </p>
        </FaqSection>
      </div>
      {sources.length > 0 && updated && <Sources sources={sources} updated={updated} />}
      <RelatedPrograms slugs={related} heading="Funding for this kind of deal" />
    </>
  );
}
