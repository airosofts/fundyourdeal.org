import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { PageIntro } from "../PageIntro";
import { Bullets, CompareTable, DefinitionSection, ExampleCard, FaqSection, Formula, RelatedPrograms, Sources } from "../sections";
import { Container, Eyebrow, H2, JsonLd } from "../ui";
import { SITE } from "@/lib/site";
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

/** A titled section rendered between "How it's calculated" and the tips. */
export type CalcSection = { id: string; eyebrow: string; heading: string; intro?: string; example?: CalcExample; blocks: CalcBlock[] };

const LINK = "[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2";
const PROSE = `text-[17px] leading-[1.7] text-ink-2 ${LINK} [&_h3]:mt-4 [&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:text-ink [&_li]:mt-1.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-6`;

/** Inline formatting: **bold** and [label](/href). External links open in a new tab. */
export function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
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

function ContentSection({ s, white }: { s: CalcSection; white: boolean }) {
  return (
    <section id={s.id} className={`scroll-mt-20 border-t border-line ${white ? "bg-white" : ""}`}>
      <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="flex flex-col gap-3.5">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <H2>{s.heading}</H2>
          {s.intro && (
            <p className={`text-[17px] leading-relaxed text-ink-2 ${LINK}`}>
              <Inline text={s.intro} />
            </p>
          )}
          {s.example && (
            <div className="mt-3">
              <ExampleCard example={s.example} />
            </div>
          )}
        </div>
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

function BulletSection({ eyebrow, heading, items }: { eyebrow: string; heading: string; items: string[] }) {
  return (
    <section className="border-t border-line">
      <Container className="grid gap-10 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="flex flex-col gap-3">
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2>{heading}</H2>
        </div>
        <Bullets items={items} />
      </Container>
    </section>
  );
}

export function CalculatorPage({
  path,
  crumb,
  title,
  intro,
  calculator,
  inputs,
  formula,
  how,
  howHeading = "Every number, explained.",
  howIntro = "The same arithmetic lenders use. Here's what each result means.",
  sections = [],
  tips,
  mistakes,
  faqs,
  faqHeading = "Calculator questions",
  sources = [],
  updated,
  related,
}: {
  path: string;
  crumb: string;
  title: string;
  /** One or two sentences under the H1. Supports **bold** and [label](/href). */
  intro: string;
  calculator: ReactNode;
  /** "How to use it": each input, what it means and where to find the number. */
  inputs?: { heading: string; intro?: string; rows: [string, string][] };
  formula?: string;
  how: [string, string][];
  howHeading?: string;
  howIntro?: string;
  /** Long-form sections (worked example, reading the result, lender rules), in order. */
  sections?: CalcSection[];
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
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          publisher: { "@id": `${SITE.url}/#org` },
        }}
      />
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { href: "/calculators", label: "Calculators" }, { label: crumb }]} title={title}>
        <p className={LINK}>
          <Inline text={intro} />
        </p>
      </PageIntro>
      <Container className="pb-[72px] pt-4">{calculator}</Container>

      {inputs && <DefinitionSection id="how-to-use" eyebrow="How to use it" heading={inputs.heading} intro={inputs.intro} rows={inputs.rows} />}

      <DefinitionSection
        id="how-its-calculated"
        eyebrow="How it's calculated"
        heading={howHeading}
        intro={howIntro}
        rows={how}
        tone={inputs ? "paper" : "white"}
        extra={formula && <Formula>{formula}</Formula>}
      />

      {sections.map((s, i) => (
        <ContentSection key={s.id} s={s} white={(i % 2 === 0) === Boolean(inputs)} />
      ))}

      <BulletSection eyebrow="Improve the result" heading={tips.heading} items={tips.items} />
      {mistakes && <BulletSection eyebrow="Common mistakes" heading={mistakes.heading} items={mistakes.items} />}

      <FaqSection heading={faqHeading} items={faqs}>
        <p className="font-mono text-xs leading-relaxed text-muted">Results are estimates for planning only and are not a loan offer. Lenders size loans with their own assumptions.</p>
      </FaqSection>
      {sources.length > 0 && updated && <Sources sources={sources} updated={updated} />}
      <RelatedPrograms slugs={related} heading="Loans for this kind of deal" />
    </>
  );
}
