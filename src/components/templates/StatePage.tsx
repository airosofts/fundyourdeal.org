import type { Metadata } from "next";
import { PageIntro } from "../PageIntro";
import { ApplySection, AudienceGrid, CompareTable, DealSheet, DefinitionList, ExampleCard, FaqSection, RelatedPrograms, Sources, SpeedLine, dealCopy, formatDate } from "../sections";
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

/** Loans to suggest next from a state page: the parent program plus its hold or exit options. */
const NEXT_LOANS: Record<StateContent["program"], string[]> = {
  "fix-and-flip": ["fix-and-flip", "bridge", "brrrr"],
  dscr: ["dscr", "brrrr", "cash-out-refinance"],
};

/** "a" or "an" before a state name ("an Ohio flip"). */
const article = (word: string) => (/^[aeiou]/i.test(word) ? "an" : "a");

/**
 * State page: hero with the state's deal sheet, then metro numbers, a worked
 * local deal beside the state's cost line items, local rules as cards, the
 * form, FAQs, related loans and sources.
 */
export function StatePage({ s }: { s: StateContent }) {
  const p = programBySlug(s.program)!;
  const d = dealCopy(s.program);
  const ruleCards = s.rules.items;
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
      <PageIntro
        crumbs={[
          { href: "/", label: "Home" },
          { href: p.href, label: p.short },
          { label: s.state },
        ]}
        eyebrow={`${p.short} · ${s.abbr}`}
        title={s.h1}
        aside={
          <DealSheet
            facts={s.facts}
            title={`${s.state} at a glance`}
            note={`${s.state} figures checked ${formatDate(s.updated)}, with every source listed at the foot of the page. Market data, not a quote.`}
          />
        }
      >
        <p>{s.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="#apply" size="lg">
            {d.cta}
          </ButtonLink>
          <ButtonLink href={p.href} variant="outline" size="lg">
            {p.short} nationwide
          </ButtonLink>
        </div>
        <SpeedLine />
      </PageIntro>

      <section id="metros" className="mt-10 scroll-mt-20 border-t border-line bg-white">
        <Container className="flex flex-col gap-8 py-[88px]">
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-3">
              <Eyebrow>Metro by metro</Eyebrow>
              <H2>{s.metros.heading}</H2>
            </div>
            <p className="text-[17px] leading-relaxed text-ink-2">{s.metros.intro}</p>
          </div>
          <CompareTable columns={s.metros.columns} rows={s.metros.rows} highlight={-1} />
          <p className="max-w-[900px] text-xs leading-relaxed text-muted">{s.metros.note}</p>
        </Container>
      </section>

      <section id="costs" className="scroll-mt-20 border-t border-line">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[780px] flex-col gap-3.5">
            <Eyebrow>{s.state} deal math</Eyebrow>
            <H2>{s.costs.heading}</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">{s.costs.intro}</p>
          </div>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div className="lg:sticky lg:top-24">
              <ExampleCard example={s.example} />
            </div>
            <DefinitionList rows={s.costs.rows} />
          </div>
        </Container>
      </section>

      <AudienceGrid id="rules" eyebrow={`Before you close in ${s.state}`} heading={s.rules.heading} items={ruleCards} tone="white" />

      <ApplySection
        eyebrow={`${s.state} deals`}
        heading={`Have ${article(s.state)} ${s.state} ${d.deal} lined up? Get it funded.`}
        text={`The form is the same for every ${s.state} ZIP code: your name and phone first, then a handful of taps on the property, the amount and your credit band. A loan specialist follows up by phone to talk through the ${d.deal}.`}
        preset={p.preset}
      />
      <FaqSection heading={`Funding a ${d.deal} in ${s.state}: your questions`} items={s.faqs} />
      <RelatedPrograms slugs={NEXT_LOANS[s.program]} heading={`Other ways to fund ${article(s.state)} ${s.state} deal`} />
      <Sources sources={s.sources} updated={s.updated} />
    </>
  );
}
