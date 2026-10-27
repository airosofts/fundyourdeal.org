import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { CompareTable, FaqSection } from "@/components/sections";
import { Inline } from "@/components/templates/CalculatorPage";
import { ButtonLink, Container, Eyebrow, H2, JsonLd } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Fix and Flip, BRRRR and DSCR Calculators | Fund Your Deal" },
  description: "Run the deal before you sign: free fix and flip, BRRRR, DSCR and rental cash flow calculators that size the loan the way lenders do. No email needed.",
  alternates: { canonical: "/calculators" },
};

const TITLE = "Deal calculators: run the numbers before you sign";

const INTRO =
  "Four free calculators for the deal in front of you. Start with the [fix and flip](/calculators/fix-and-flip) or [BRRRR](/calculators/brrrr) calculator to size the rehab loan and the cash you bring, then test the refinance or the hold on its [debt service coverage ratio](/glossary#dscr) (DSCR): what a rental collects in a month, divided by what its loan costs that month. No sign-up and no email.";

/** Cards, flip and BRRRR first. Hrefs are the calculator routes in docs/brand.md. */
const CARDS = [
  {
    href: "/calculators/fix-and-flip",
    sym: "Δ",
    title: "Fix and flip calculator",
    when: "Before you offer on a flip",
    question: "Will this flip make money after every cost, and how much cash do I bring?",
    text: "Sizes the loan on price, rehab and the ARV cap, then adds interest, points, holding and selling costs.",
  },
  {
    href: "/calculators/brrrr",
    sym: "↻",
    title: "BRRRR calculator",
    when: "Before you buy one to keep",
    question: "How much of my cash comes back when I refinance, and does the rent qualify?",
    text: "Runs the rehab loan and the DSCR refinance together: cash in, cash back, cash left in.",
  },
  {
    href: "/calculators/dscr",
    sym: "÷",
    title: "DSCR calculator",
    when: "Before the refinance or a rental purchase",
    question: "Will the rent carry the payment, and how big a loan will it support?",
    text: "Rent ÷ PITIA the lender's way, plus the largest loan the rent supports at a 1.00 and a 1.25 ratio.",
  },
  {
    href: "/calculators/rental-cash-flow",
    sym: "$",
    title: "Rental cash flow calculator",
    when: "Before you decide to hold",
    question: "What does the property pay me after every real expense?",
    text: "Cash flow after vacancy, management, repairs and capex, with NOI, cap rate and cash-on-cash.",
  },
];

const STAGES = [
  ["Found a flip, before you offer", "Fix and flip", "What's my ceiling price?", "Profit, cash out of pocket, the ARV cap flag and the 70% rule line"],
  ["Under contract, before the rehab loan", "Fix and flip", "Is the loan big enough, and will it close on time?", "Lender's loan against the cap; months to resale against a 6–24 month term"],
  ["Planning to keep it after the work", "BRRRR", "How much cash stays in after the refinance?", "Your cash still in after the refinance, DSCR on the new loan, cash flow each month"],
  ["Mid-rehab and the flip margin is shrinking", "BRRRR, then DSCR", "Is renting and refinancing the better exit?", "What the refinance returns, next to the flip's profit"],
  ["Rehab or bridge loan coming due", "DSCR", "Will the rent qualify for the payoff loan?", "The ratio against the lender's minimum; the largest loan against the LTV cap"],
  ["Buying a rental, or pulling cash out of one", "DSCR", "How big a loan will the rent support?", "Largest loan at 1.00 / 1.25; for a cash-out, the appraisal as Price or appraised value and 25 as Cash down"],
  ["Deciding whether to hold for the long run", "Rental cash flow", "Does it pay me after every expense?", "Cash flow after reserves, cash-on-cash, cap rate"],
];

const ONE_DEAL = [
  "**1. Screen it as a flip.** The worked flip, a $148,000 purchase with an $82,000 rehab and a $295,000 ARV, clears $24,833 on $44,492 of your cash, and the lender's 70% ARV cap is what sets that cash. [See the flip, line by line](/calculators/fix-and-flip#worked-deal).",
  "**2. Price the keep.** Feed that purchase and rehab into the [BRRRR calculator](/calculators/brrrr) instead. At 75% of the same $295,000 value, a refinance is $221,250; the calculator shows how much of your cash that returns once the rehab loan, the refinance costs and the months of interest are paid.",
  "**3. Test the refinance.** The [DSCR calculator](/calculators/dscr) tells you whether the rent carries that loan at the lender's minimum, usually 1.00, and if not, how far the loan shrinks.",
  "**4. Decide on the hold.** The [cash flow calculator](/calculators/rental-cash-flow) takes out vacancy, management, repairs and capex, the costs a lender's ratio ignores. Its worked triplex reads 1.44 to a lender and $175 a month to its owner.",
];

const CANT_SEE = [
  "**Your lender's file.** The real loan comes from the lender's appraisal, the rent it counts, your credit tier and its fees. Treat every result here as an estimate.",
  "**Prepayment penalties.** The usual DSCR schedule steps down 5-4-3-2-1 over five years; a shorter schedule, a flat penalty or none at all usually costs more in rate.",
  "**Reserves and flat fees.** Published reserve requirements ran from none to 9 months of payments, and doc, draw and extension fees never show up in a rate.",
  "**Taxes and entities.** Everything is before income tax. Your CPA or attorney can say how your entity and the deal affect you.",
  "**Appreciation and paydown.** They add to your total return; the calculators count cash.",
  "**Owner-occupied homes.** Every calculator assumes a flip or a rental, never a home for you or your family. Moving in? That takes a residential mortgage lender.",
];

const FAQS = [
  { q: "Which calculator should I use for a flip I might keep?", a: "Run both. Start with the fix and flip calculator to see the profit and the cash you bring. Then enter the same purchase and rehab in the BRRRR calculator to see how much cash a refinance would return and whether the rent qualifies. Put the flip's profit next to the rental exit's cash left in and monthly cash flow, and pick the exit." },
  { q: "Do the calculators cost anything or ask for an email?", a: "No. All four are free, run in your browser and need no sign-up; results update as you type. When you've got a deal that works, the Fund My Deal form is separate and takes about 60 seconds, and a loan specialist calls you back about that property." },
  { q: "How do I model a cash-out refinance on a rental I own?", a: "Use the DSCR calculator. Put the appraised value you expect in the purchase price box. In the down payment box, enter 100 minus the lender's loan-to-value; most lenders capped cash-out at 75% in October 2026, so that's 25. The loan amount shown is your new loan. Take off the payoff and closing costs to see the cash you'd walk away with." },
  { q: "Why do the DSCR and rental cash flow calculators disagree?", a: "They measure different things. The DSCR calculator divides gross rent by PITIA, the way most 1–4 unit lenders qualify a loan. The rental cash flow calculator also takes out vacancy, management, repairs and capital reserves before the loan payment. A rental can clear a lender's 1.00 minimum and still pay you very little each month." },
  { q: "Are the results a loan offer?", a: "No. Each result is an estimate built on your inputs and standard loan math. The real loan depends on the lender's appraisal, the rent it counts, your credit tier and its fees, and published terms change over time. Use the results to decide which deals are worth applying for, then get funding terms on the one in front of you." },
];

const PROSE = "text-[17px] leading-[1.7] text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink";

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Fund Your Deal calculators",
          itemListElement: CARDS.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.title, url: SITE.url + c.href })),
        }}
      />
      {/* Calculators first, explanations at the bottom: less to scroll past on a phone (Roland, Oct 28). */}
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Calculators" }]} title={TITLE}>
        <p>Four free calculators for the deal in front of you. No sign-up, no email.</p>
      </PageIntro>
      <Container className="pb-[88px] pt-4">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr))]">
          {CARDS.map((c) => (
            <Link key={c.href} href={c.href} className="group flex flex-col gap-3 bg-white p-6 transition-colors hover:bg-paper sm:min-h-[240px] sm:p-7">
              <span className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-[30px] text-brand" aria-hidden="true">
                  {c.sym}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.06em] text-muted">{c.when}</span>
              </span>
              <span className="text-[21px] font-semibold tracking-[-0.02em]">{c.title}</span>
              <span className="text-[16px] font-semibold leading-snug text-ink">{c.question}</span>
              <span className="hidden text-[15px] leading-relaxed text-ink-2 sm:block">{c.text}</span>
              <span className="mt-auto pt-2 text-sm font-semibold">
                Run the numbers <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>

      <section id="which-calculator" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="flex flex-col gap-8 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>Which one, when</Eyebrow>
            <H2>Match the calculator to where the deal is.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">
              <Inline text={INTRO} />
            </p>
            <p className="text-[17px] leading-relaxed text-ink-2">Most rehab deals pass through three of the four. Find the row for the stage you&apos;re at.</p>
          </div>
          <CompareTable columns={["Where the deal is", "Run", "The question", "What to look at"]} rows={STAGES} />
        </Container>
      </section>

      <section id="one-deal" className="scroll-mt-20 border-t border-line">
        <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>One deal, start to finish</Eyebrow>
            <H2>How a flip turns into a rental, in four runs.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">The lender sees one ratio. You need the profit, the cash and the monthly check. Run them in this order.</p>
          </div>
          <div className={`flex flex-col gap-5 ${PROSE}`}>
            {ONE_DEAL.map((t) => (
              <p key={t}>
                <Inline text={t} />
              </p>
            ))}
            <p>
              <Inline text="Under the hood, rental payments amortize the usual way: each month's principal and interest is loan × r ÷ [1 − (1 + r)^−n], with r as the monthly rate and n as the count of monthly payments in the term. Rehab loans in the flip and BRRRR calculators are interest-only, charged on the purchase advance plus about half the rehab money, since rehab funds go out in [draws](/glossary#draws) as work is finished." />
            </p>
          </div>
        </Container>
      </section>

      <section id="limits" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>What they can&apos;t see</Eyebrow>
            <H2>Screening tools, not a term sheet.</H2>
          </div>
          <ul className={`flex list-disc flex-col gap-3 pl-6 ${PROSE}`}>
            {CANT_SEE.map((t) => (
              <li key={t}>
                <Inline text={t} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSection heading="Questions about the calculators" items={FAQS}>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink px-6 py-5 text-paper">
          <span className="text-[16px] leading-snug">Deal pencils out? Get it funded. Applying takes about 60 seconds.</span>
          <ButtonLink href="/get-funding" variant="lime">
            {SITE.cta}
          </ButtonLink>
        </div>
      </FaqSection>
    </>
  );
}
