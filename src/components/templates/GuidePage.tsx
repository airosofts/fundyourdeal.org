import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { Breadcrumbs, Container, JsonLd } from "../ui";
import { ApplySection, CompareTable, FaqSection, Formula, RelatedPrograms, Sources, dealCopy, formatDate } from "../sections";
import { SITE, programBySlug } from "@/lib/site";
import type { Guide, GuideBlock } from "@/content/types";

export const guidePath = (g: Pick<Guide, "slug" | "path">) => g.path ?? `/guides/${g.slug}`;

export function guideMetadata(g: Guide): Metadata {
  return {
    title: { absolute: g.metaTitle },
    description: g.metaDescription,
    alternates: { canonical: guidePath(g) },
    openGraph: { title: g.metaTitle, description: g.metaDescription, url: guidePath(g), type: "article", publishedTime: g.published, modifiedTime: g.updated },
  };
}

/** Inline formatting inside guide text: **bold** and [label](/href). */
function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<strong key={m.index}>{m[1]}</strong>);
    else {
      const href = m[3];
      parts.push(
        href.startsWith("/") ? (
          <Link key={m.index} href={href}>
            {m[2]}
          </Link>
        ) : (
          <a key={m.index} href={href} target="_blank" rel="noopener noreferrer nofollow">
            {m[2]}
          </a>
        )
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

const pad = (n: number) => String(n).padStart(2, "0");
const anchor = (h: Extract<GuideBlock, { type: "h2" }>) => h.id ?? slugify(h.text);

/** One body block. `n` is the section number shown above an h2. */
function Block({ b, n }: { b: GuideBlock; n?: number }) {
  switch (b.type) {
    case "p":
      return (
        <p>
          <Inline text={b.text} />
        </p>
      );
    case "h2":
      return (
        <h2 id={anchor(b)} className="scroll-mt-24">
          {n !== undefined && (
            <span aria-hidden="true" className="mb-1.5 block font-mono text-[13px] font-normal tracking-[0.1em] text-brand">
              {pad(n)}
            </span>
          )}
          {b.text}
        </h2>
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
        <figure className="not-prose my-8 flex flex-col gap-2.5">
          <CompareTable columns={b.head} rows={b.rows} highlight={-1} />
          {b.caption && <figcaption className="text-xs leading-relaxed text-muted">{b.caption}</figcaption>}
        </figure>
      );
    case "callout":
      return (
        <aside className="my-8 rounded-xl border-2 border-dashed border-line bg-white px-6 py-5 text-[16px] text-ink">
          {b.title && <div className="mb-1.5 text-[17px] font-semibold">{b.title}</div>}
          <Inline text={b.text} />
        </aside>
      );
    case "formula":
      return (
        <div className="my-7">
          <Formula>{b.text}</Formula>
        </div>
      );
    case "cta":
      return (
        <div className="my-9 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-ink bg-white px-6 py-5">
          <span className="max-w-[460px] text-[16px] font-medium leading-snug text-ink">{b.text}</span>
          <Link
            href={b.href}
            className="inline-flex min-h-11 shrink-0 items-center rounded-[10px] bg-brand px-5 text-[15px] font-semibold text-white! no-underline! hover:bg-brand-deep"
          >
            {b.label} →
          </Link>
        </div>
      );
  }
}

/**
 * Guide: chips and byline over the H1, a left-hand section index (a collapsible
 * one on phones), the short version in a dark box, numbered sections, then the
 * form, FAQs, what to read next, related loans and sources.
 */
export function GuidePage({ g, crumbs, related }: { g: Guide; crumbs: { href?: string; label: string }[]; related: Guide[] }) {
  const toc = g.body.filter((b): b is Extract<GuideBlock, { type: "h2" }> => b.type === "h2");
  const hasToc = toc.length > 2;
  const sectionNo = new Map<number, number>();
  g.body.forEach((b, i) => {
    if (b.type === "h2") sectionNo.set(i, sectionNo.size + 1);
  });
  const firstProgram = g.related.programs.map(programBySlug).find(Boolean);
  const d = dealCopy(firstProgram?.slug);
  const url = SITE.url + guidePath(g);

  const sectionLinks = (
    <ol className="flex flex-col gap-2.5">
      {toc.map((h, i) => (
        <li key={h.text} className="grid grid-cols-[1.75rem_1fr] text-sm leading-snug">
          <span className="font-mono text-xs leading-5 text-muted">{pad(i + 1)}</span>
          <a href={`#${anchor(h)}`} className="text-ink-2 hover:text-brand hover:underline">
            {h.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.title,
          description: g.metaDescription,
          datePublished: g.published,
          dateModified: g.updated,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: `${SITE.name} lending team`, url: `${SITE.url}/about` },
          publisher: { "@id": `${SITE.url}/#org` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, ...(c.href ? { item: SITE.url + c.href } : {}) })),
        }}
      />

      <header className="border-b border-line">
        <Container className="flex flex-col gap-5 pb-10 pt-12">
          <Breadcrumbs items={crumbs} />
          <div className="flex flex-wrap items-center gap-2 text-[13px]">
            <span className="rounded-full bg-brand-tint px-3 py-1 font-semibold text-brand-deep">{g.category}</span>
            <span className="rounded-full border border-line bg-white px-3 py-1 text-ink-2">{g.readMinutes}-minute read</span>
            <span className="rounded-full border border-line bg-white px-3 py-1 text-ink-2">Updated {formatDate(g.updated)}</span>
          </div>
          <h1 className="max-w-[920px] text-[clamp(36px,4.4vw,56px)] font-semibold leading-[1.05] tracking-[-0.035em]">{g.title}</h1>
          <p className="max-w-[780px] text-[19px] leading-relaxed text-ink-2">{g.dek}</p>
          <p className="text-sm text-muted">Written by the {SITE.name} lending team</p>
        </Container>
      </header>

      <Container className={`grid gap-12 pb-[72px] pt-10 ${hasToc ? "lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14" : ""}`}>
        {hasToc && (
          <nav aria-label="In this guide" className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-4">
              <div className="text-xs font-semibold uppercase tracking-[0.08em] text-ink">In this guide</div>
              {sectionLinks}
            </div>
          </nav>
        )}
        <div className="min-w-0 max-w-[760px]">
          {hasToc && (
            <details className="mb-8 rounded-xl border border-line bg-white px-5 py-4 lg:hidden">
              <summary className="flex items-center justify-between gap-4 text-[15px] font-semibold">
                In this guide: {toc.length} sections
                <span aria-hidden="true" className="faq-plus font-mono font-normal transition-transform">
                  +
                </span>
              </summary>
              <div className="mt-4">{sectionLinks}</div>
            </details>
          )}
          <article className="text-[17px] leading-[1.75] text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-[3px] [&_h2]:mb-3 [&_h2]:mt-14 [&_h2]:text-[28px] [&_h2]:font-semibold [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.025em] [&_h2]:text-ink [&_h3]:mb-2 [&_h3]:mt-9 [&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:text-ink [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-6">
            <section aria-label="The short version" className="rounded-2xl bg-ink px-6 py-6 text-mist [&_a]:text-lime! [&_a]:focus-visible:outline-lime [&_strong]:text-white!">
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-lime">The short version</div>
              <ul className="mt-3! marker:text-lime">
                {g.keyTakeaways.map((k) => (
                  <li key={k}>
                    <Inline text={k} />
                  </li>
                ))}
              </ul>
            </section>
            {g.body.map((b, i) => (
              <Fragment key={i}>
                <Block b={b} n={sectionNo.get(i)} />
              </Fragment>
            ))}
          </article>
        </div>
      </Container>

      <ApplySection
        eyebrow="Put it to work"
        heading={`Working on a ${d.deal}? Get it funded.`}
        text="Done reading? Send the deal itself. Name and phone first, then a few taps covering the property, the loan size and its ZIP. Nothing touches your credit, and a loan specialist phones to talk it through."
        preset={firstProgram?.preset}
      />

      {g.faqs && g.faqs.length > 0 && <FaqSection heading="Questions readers ask next" items={g.faqs} eyebrow="Before you go" />}

      {related.length > 0 && (
        <section className="border-t border-line">
          <Container className="flex flex-col gap-6 py-[72px]">
            <h2 className="text-[26px] font-semibold tracking-[-0.025em]">Read next</h2>
            <ol className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={guidePath(r)} className="group flex h-full flex-col gap-3 rounded-xl border border-line bg-white p-6 transition-colors hover:border-ink">
                    <span className="text-xs font-semibold uppercase tracking-[0.06em] text-brand">
                      {r.category} · {r.readMinutes} min
                    </span>
                    <span className="text-[19px] font-semibold leading-snug tracking-[-0.02em] group-hover:text-brand">{r.title}</span>
                    <span aria-hidden="true" className="mt-auto pt-1 text-sm font-semibold">
                      Read the guide →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <RelatedPrograms slugs={g.related.programs} heading="Loans for the deal in this guide" />
      <Sources sources={g.sources} updated={g.updated} />
    </>
  );
}
