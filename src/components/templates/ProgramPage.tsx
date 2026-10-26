import type { Metadata } from "next";
import { PageIntro } from "../PageIntro";
import {
  ApplySection,
  AudienceGrid,
  Bullets,
  CompareSection,
  DealSheet,
  DefinitionSection,
  ExampleCard,
  FaqSection,
  Formula,
  RelatedPrograms,
  Sources,
  SpeedLine,
  StepsBand,
  dealCopy,
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

/**
 * Program page, deal-first: hero with the deal sheet beside it, then the sizing
 * math with the worked deal up front, what the deal needs, contract-to-closing
 * steps, costs, fit, comparison, the form, then FAQs, related loans and sources.
 */
export function ProgramPage({ c, children }: { c: ProgramContent; children?: React.ReactNode }) {
  const p = programBySlug(c.slug)!;
  const d = dealCopy(c.slug);
  const month = formatDate(c.updated).replace(/ \d+,/, "");
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
      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { href: "/loans", label: "Loans" }, { label: p.short }]}
        eyebrow={c.eyebrow}
        title={c.h1}
        aside={<DealSheet facts={c.facts} title="What lenders publish" note={`Market ranges as of ${month}. A starting point, not a quote: the deal itself sets your terms.`} />}
      >
        <p>{c.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="#apply" size="lg">
            {d.cta}
          </ButtonLink>
          {c.calculator && (
            <ButtonLink href={c.calculator.href} variant="outline" size="lg">
              {c.calculator.label}
            </ButtonLink>
          )}
        </div>
        <SpeedLine />
      </PageIntro>

      <section className="mt-10 border-t border-line bg-white">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[780px] flex-col gap-3">
            <Eyebrow>Loan sizing</Eyebrow>
            <H2>{c.overview.heading}</H2>
          </div>
          <div className={c.example ? "grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16" : "max-w-[780px]"}>
            {c.example && (
              <div className="lg:sticky lg:top-24">
                <ExampleCard example={c.example} />
              </div>
            )}
            <div className="flex flex-col gap-5">
              {c.overview.paragraphs.map((t) => (
                <p key={t.slice(0, 40)} className="text-[17px] leading-relaxed text-ink-2">
                  {t}
                </p>
              ))}
              {c.overview.formula && <Formula>{c.overview.formula}</Formula>}
              {c.overview.bullets && (
                <div className="mt-2 rounded-2xl border border-line bg-paper p-6">
                  <Bullets items={c.overview.bullets} />
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <DefinitionSection id="requirements" eyebrow="Deal checklist" heading={c.requirements.heading} intro={c.requirements.intro} rows={c.requirements.rows} tone="paper" />
      <StepsBand eyebrow="Contract to closing" heading={c.steps.heading} items={c.steps.items} />
      {c.costs && <DefinitionSection id="costs" eyebrow="Cost of the money" heading={c.costs.heading} intro={c.costs.intro} rows={c.costs.rows} />}
      <AudienceGrid id="fit" eyebrow="Where your deal fits" heading={c.audience.heading} items={c.audience.items} />
      {c.compare && <CompareSection compare={c.compare} />}
      {children}
      <ApplySection
        eyebrow="Send us the deal"
        heading={d.apply}
        text="Your name and phone come first. After that it’s mostly taps: what the property is, how much you need, a credit band, the ZIP. Then a loan specialist phones you to go over the numbers."
        preset={p.preset}
      />
      <FaqSection heading={`${p.short}: what investors ask before they commit.`} items={c.faqs} />
      <RelatedPrograms slugs={c.related} />
      <Sources sources={c.sources} updated={c.updated} />
    </>
  );
}
