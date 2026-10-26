import type { Metadata } from "next";
import { PageIntro } from "../PageIntro";
import { ApplySection, CompareTable, DefinitionSection, ExampleCard, FactsGrid, FaqSection, RelatedPrograms, Sources, SpeedLine, formatDate } from "../sections";
import { ButtonLink, Container, Eyebrow, H2, JsonLd } from "../ui";
import { SITE, programBySlug } from "@/lib/site";
import type { StateContent } from "@/content/types";

export const statePath = (s: Pick<StateContent, "program" | "slug">) => `${programBySlug(s.program)!.href}/${s.slug}`;

export function stateMetadata(s: StateContent): Metadata {
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: statePath(s) },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: statePath(s), type: "article" },
  };
}

export function StatePage({ s }: { s: StateContent }) {
  const p = programBySlug(s.program)!;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: s.metaTitle,
          description: s.metaDescription,
          url: SITE.url + statePath(s),
          dateModified: s.updated,
          about: { "@type": "Service", serviceType: p.title, provider: { "@id": `${SITE.url}/#org` }, areaServed: { "@type": "State", name: s.state } },
        }}
      />
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { href: p.href, label: p.short }, { label: s.state }]} eyebrow={`${s.state} · ${p.title}`} title={s.h1}>
        <p>{s.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="#apply" size="lg">
            {SITE.cta}
          </ButtonLink>
          <ButtonLink href={p.href} variant="outline" size="lg">
            How {p.noun} loans work
          </ButtonLink>
        </div>
        <SpeedLine />
      </PageIntro>

      <FactsGrid facts={s.facts} note={`${s.state} figures from the sources below, updated ${formatDate(s.updated)}. Not an offer.`} />

      <DefinitionSection eyebrow={`${s.state} costs`} heading={s.costs.heading} intro={s.costs.intro} rows={s.costs.rows} extra={<div className="mt-4"><ExampleCard example={s.example} /></div>} />

      <section className="border-t border-line">
        <Container className="flex flex-col gap-6 py-[88px]">
          <div className="flex max-w-[760px] flex-col gap-3">
            <Eyebrow>Markets</Eyebrow>
            <H2>{s.metros.heading}</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">{s.metros.intro}</p>
          </div>
          <CompareTable columns={s.metros.columns} rows={s.metros.rows} highlight={-1} />
          <p className="max-w-[900px] font-mono text-xs leading-relaxed text-muted">{s.metros.note}</p>
        </Container>
      </section>

      <DefinitionSection eyebrow={`${s.state} rules`} heading={s.rules.heading} rows={s.rules.items.map((r) => [r.title, r.text] as [string, string])} />

      <FaqSection heading={`${s.state} ${p.noun} loan questions`} items={s.faqs} />
      <ApplySection eyebrow={`${s.state} funding`} heading={`Fast ${p.noun} funding in ${s.state}.`} text="Your name and number first, then a few quick taps — about 60 seconds. A loan specialist calls you back to lock in your terms." preset={p.preset} />
      <RelatedPrograms slugs={[s.program, ...(s.program === "dscr" ? ["short-term-rental", "cash-out-refinance"] : ["hard-money", "brrrr"])]} />
      <Sources sources={s.sources} updated={s.updated} />
    </>
  );
}
