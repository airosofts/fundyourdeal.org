import type { Metadata } from "next";
import { PageIntro } from "../PageIntro";
import {
  ApplySection,
  AudienceGrid,
  Bullets,
  CompareSection,
  DefinitionSection,
  ExampleCard,
  FactsGrid,
  FaqSection,
  Formula,
  RelatedPrograms,
  Sources,
  SpeedLine,
  StepsBand,
  formatDate,
} from "../sections";
import { ButtonLink, Container, Eyebrow, H2, JsonLd } from "../ui";
import { SITE, programBySlug } from "@/lib/site";
import type { ProgramContent } from "@/content/types";

export function programMetadata(c: ProgramContent): Metadata {
  const p = programBySlug(c.slug)!;
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: p.href },
    openGraph: { title: c.metaTitle, description: c.metaDescription, url: p.href, type: "article" },
  };
}

export function ProgramPage({ c, children }: { c: ProgramContent; children?: React.ReactNode }) {
  const p = programBySlug(c.slug)!;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: c.metaTitle,
          description: c.metaDescription,
          url: SITE.url + p.href,
          dateModified: c.updated,
          isPartOf: { "@id": `${SITE.url}/#website` },
          about: { "@type": "Service", serviceType: p.title, provider: { "@id": `${SITE.url}/#org` }, areaServed: "US" },
        }}
      />
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { href: "/loans", label: "Loans" }, { label: p.short }]} eyebrow={c.eyebrow} title={c.h1}>
        <p>{c.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="#apply" size="lg">
            {SITE.cta}
          </ButtonLink>
          {c.calculator && (
            <ButtonLink href={c.calculator.href} variant="outline" size="lg">
              {c.calculator.label}
            </ButtonLink>
          )}
        </div>
        <SpeedLine />
      </PageIntro>

      <FactsGrid facts={c.facts} note={`Typical market ranges, ${formatDate(c.updated).replace(/ \d+,/, "")}. Not an offer — your terms depend on the deal.`} />

      <section className="border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[88px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))]">
          <div className="flex flex-col gap-4">
            <Eyebrow>How it works</Eyebrow>
            <H2>{c.overview.heading}</H2>
            {c.overview.paragraphs.map((t) => (
              <p key={t.slice(0, 40)} className="text-[17px] leading-relaxed text-ink-2">
                {t}
              </p>
            ))}
            {c.overview.formula && <Formula>{c.overview.formula}</Formula>}
            {c.overview.bullets && <Bullets items={c.overview.bullets} />}
          </div>
          {c.example && <ExampleCard example={c.example} />}
        </Container>
      </section>

      <AudienceGrid eyebrow="Who it's for" heading={c.audience.heading} items={c.audience.items} />
      <DefinitionSection eyebrow="Requirements" heading={c.requirements.heading} intro={c.requirements.intro} rows={c.requirements.rows} />
      {c.costs && <DefinitionSection id="costs" eyebrow="Costs" heading={c.costs.heading} intro={c.costs.intro} rows={c.costs.rows} tone="paper" />}
      {c.compare && <CompareSection compare={c.compare} />}
      {children}
      <StepsBand eyebrow="From application to closing" heading={c.steps.heading} items={c.steps.items} />
      <FaqSection heading={`Common ${p.noun} loan questions`} items={c.faqs} />
      <ApplySection eyebrow="Fast funding" heading={`Get your ${p.noun} loan funded fast.`} text="Your name and number first, then a few quick taps — about 60 seconds. A loan specialist calls you back to lock in your terms." preset={p.preset} />
      <RelatedPrograms slugs={c.related} />
      <Sources sources={c.sources} updated={c.updated} />
    </>
  );
}
