import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { guidePath } from "@/components/templates/GuidePage";
import { ButtonLink, Container } from "@/components/ui";
import { GUIDES } from "@/content/guides";
import type { Guide } from "@/content/types";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Deal Guides for Flips, BRRRR and Rentals | Fund Your Deal" },
  description: "Deal-by-deal guides for investors: ARV, rehab budgets, cash to close, hard money, bridge exits, BRRRR refinances, rental cash flow and build draws.",
  alternates: { canonical: "/guides" },
};

// Grouped the way a deal moves: find and fund the project, understand the money, then hold or refinance.
const STAGES: { category: Guide["category"]; label: string; blurb: string }[] = [
  { category: "Fix & flip", label: "Flipping, from offer to resale", blurb: "Value the finished house, budget the work and know the cash you need before you sign." },
  { category: "Financing basics", label: "How the money works", blurb: "Points, sizing rules, closing timelines and what happens when a short-term loan comes due." },
  { category: "BRRRR", label: "Buy, fix, rent, refinance", blurb: "One deal worked end to end, and the refinance that decides how much cash comes back." },
  { category: "DSCR", label: "Holding it as a rental", blurb: "Run the rent against the full payment before you make the offer." },
  { category: "Construction", label: "Building from the dirt up", blurb: "How build money is released, inspected and charged interest." },
  { category: "Short-term rental", label: "Short-term rentals", blurb: "Financing homes that earn by the night." },
  { category: "Portfolio", label: "Several rentals, one loan", blurb: "Rolling doors into a single loan." },
];

export default function Page() {
  const groups = STAGES.map((s) => ({ ...s, items: GUIDES.filter((g) => g.category === s.category) })).filter((g) => g.items.length);
  return (
    <>
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Guides" }]} eyebrow="Deal guides" title="Know what your deal needs before you call.">
        <p>
          Every guide works through a real-looking deal with the numbers shown, so you can check each step against your own. The lender figures are sourced and dated, and each guide
          says where the numbers come from.
        </p>
      </PageIntro>
      <Container className="flex flex-col gap-14 pb-[88px] pt-6">
        {groups.map(({ category, label, blurb, items }) => (
          <section key={category} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-[24px] font-bold leading-tight tracking-[-0.02em]">{label}</h2>
              <p className="text-[15px] text-ink-2">{blurb}</p>
            </div>
            <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
              {items.map((g) => (
                <Link key={g.slug} href={guidePath(g)} className="group flex flex-col gap-2.5 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand">
                  <span className="text-[19px] font-bold leading-snug tracking-[-0.01em] group-hover:text-brand">{g.title}</span>
                  <span className="text-[15px] leading-relaxed text-ink-2">{g.dek}</span>
                  <span className="mt-auto font-mono text-xs text-muted">{g.readMinutes}-minute read →</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-ink p-[clamp(28px,4vw,48px)] text-paper">
          <p className="max-w-[560px] text-[22px] font-bold leading-snug">Already have the contract? Skip the reading and send us the deal.</p>
          <ButtonLink href="/get-funding">{SITE.cta}</ButtonLink>
        </div>
      </Container>
    </>
  );
}
