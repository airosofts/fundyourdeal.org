import type { Metadata } from "next";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { Breadcrumbs, Container, Eyebrow, JsonLd } from "../ui";
import { ApplySection, CompareTable, FaqSection, Formula, RelatedPrograms, Sources, formatDate } from "../sections";
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

function Block({ b }: { b: GuideBlock }) {
  switch (b.type) {
    case "p":
      return (
        <p>
          <Inline text={b.text} />
        </p>
      );
    case "h2":
      return (
        <h2 id={b.id ?? slugify(b.text)} className="scroll-mt-24">
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
        <figure className="not-prose my-7 flex flex-col gap-2">
          <CompareTable columns={b.head} rows={b.rows} highlight={-1} />
          {b.caption && <figcaption className="font-mono text-xs leading-relaxed text-muted">{b.caption}</figcaption>}
        </figure>
      );
    case "callout":
      return (
        <aside className="my-7 rounded-2xl border border-line bg-brand-tint px-6 py-5 text-[16px] text-ink">
          {b.title && <div className="mb-1 font-semibold">{b.title}</div>}
          <Inline text={b.text} />
        </aside>
      );
    case "formula":
      return (
        <div className="my-6">
          <Formula>{b.text}</Formula>
        </div>
      );
    case "cta":
      return (
        <div className="my-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink px-6 py-5 text-paper">
          <span className="text-[16px] leading-snug">{b.text}</span>
          <Link href={b.href} className="inline-flex min-h-11 shrink-0 items-center rounded-[10px] bg-lime px-5 text-[15px] font-semibold text-ink no-underline hover:brightness-95">
            {b.label}
          </Link>
        </div>
      );
  }
}

export function GuidePage({ g, crumbs, related }: { g: Guide; crumbs: { href?: string; label: string }[]; related: Guide[] }) {
  const toc = g.body.filter((b): b is Extract<GuideBlock, { type: "h2" }> => b.type === "h2");
  const firstProgram = g.related.programs.map(programBySlug).find(Boolean);
  const url = SITE.url + guidePath(g);
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
          author: { "@type": "Organization", name: `${SITE.name} editorial team`, url: `${SITE.url}/about` },
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

      <header>
        <Container className="flex max-w-[1200px] flex-col gap-4 pb-8 pt-12">
          <Breadcrumbs items={crumbs} />
          <Eyebrow>{g.category}</Eyebrow>
          <h1 className="max-w-[880px] text-[clamp(36px,4.4vw,56px)] font-semibold leading-[1.05] tracking-[-0.035em]">{g.title}</h1>
          <p className="max-w-[760px] text-[19px] leading-relaxed text-ink-2">{g.dek}</p>
          <p className="font-mono text-xs text-muted">
            {g.readMinutes} min read · Updated {formatDate(g.updated)} · By the {SITE.name} editorial team
          </p>
        </Container>
      </header>

      <Container className="grid gap-12 pb-[72px] lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="min-w-0 max-w-[760px] text-[17px] leading-[1.7] text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:text-[28px] [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:tracking-[-0.025em] [&_h2]:text-ink [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:text-ink [&_li]:mt-1.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-6">
          <section className="rounded-2xl border border-line bg-white px-6 py-5">
            <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Key takeaways</div>
            <ul className="!mt-3">
              {g.keyTakeaways.map((k) => (
                <li key={k}>
                  <Inline text={k} />
                </li>
              ))}
            </ul>
          </section>
          {g.body.map((b, i) => (
            <Fragment key={i}>
              <Block b={b} />
            </Fragment>
          ))}
        </article>
        {toc.length > 2 && (
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-2 border-l border-line pl-5">
              <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">On this page</div>
              {toc.map((h) => (
                <a key={h.text} href={`#${h.id ?? slugify(h.text)}`} className="text-sm leading-snug text-ink-2 hover:text-brand">
                  {h.text}
                </a>
              ))}
            </div>
          </nav>
        )}
      </Container>

      {g.faqs && g.faqs.length > 0 && <FaqSection heading="Frequently asked questions" items={g.faqs} />}

      {related.length > 0 && (
        <section className="border-t border-line">
          <Container className="flex flex-col gap-8 py-[72px]">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em]">Keep reading</h2>
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
              {related.map((r) => (
                <Link key={r.slug} href={guidePath(r)} className="flex flex-col gap-2.5 border-t-2 border-ink pt-5 hover:text-brand">
                  <span className="font-mono text-xs uppercase text-muted">
                    {r.category} · {r.readMinutes} min
                  </span>
                  <span className="text-[20px] font-semibold leading-tight tracking-[-0.02em]">{r.title}</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ApplySection
        eyebrow="Fast funding"
        heading={firstProgram ? `Ready to fund your ${firstProgram.noun} deal?` : "Ready to fund your next deal?"}
        text="Your name and number first, then a few quick taps — about 60 seconds. A loan specialist calls you back fast."
        preset={firstProgram?.preset}
      />
      <RelatedPrograms slugs={g.related.programs} />
      <Sources sources={g.sources} updated={g.updated} />
    </>
  );
}
