import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { CompareTable, FaqSection } from "@/components/sections";
import { Inline } from "@/components/templates/CalculatorPage";
import { ButtonLink, Container, Eyebrow, H2, JsonLd } from "@/components/ui";
import { CALCULATORS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Real Estate Investment Calculators | Fund Your Deal" },
  description: "Free real estate investment calculators for DSCR, fix and flip profit, BRRRR cash-out and rental cash flow. Lender-style math, no email required.",
  alternates: { canonical: "/calculators" },
};

const INTRO =
  "Four free real estate investment calculators for rental and rehab deals, built on the arithmetic lenders use to size business-purpose loans. No email required. Most start from DSCR, the [debt service coverage ratio](/glossary#dscr): a rental's monthly rent divided by its monthly payment of principal, interest, taxes, insurance and HOA dues (PITIA).";

/** What each calculator answers, keyed by CALCULATORS[].href. */
const ANSWERS: Record<string, { question: string; bestFor: string }> = {
  "/calculators/dscr": { question: "Will the rent cover the loan payment?", bestFor: "Buying or refinancing a rental with a DSCR loan." },
  "/calculators/fix-and-flip": { question: "What will I make when I sell?", bestFor: "Buying, renovating and selling on a short-term rehab loan." },
  "/calculators/brrrr": { question: "How much cash comes back at the refinance?", bestFor: "Renovating a house to keep, then refinancing into a rental loan." },
  "/calculators/rental-cash-flow": { question: "What does the rental put in my pocket?", bestFor: "Deciding whether a rental is worth owning after every expense." },
};

const WHICH = [
  ["Buy a rental with a DSCR loan", "DSCR", "Does the rent cover the payment, and how big a loan does it support?", "DSCR, cash flow before expenses, largest loan at 1.00 and 1.25"],
  ["Cash-out refinance a rental you own", "DSCR", "Can the rent carry the new, larger loan?", "Enter the expected appraised value as the price and 25 as the down payment to model a 75% cash-out"],
  ["Buy a short-term rental", "DSCR", "Does the income the lender counts cover the payment?", "Enter the projected or trailing-12-month income the lender will use as the rent"],
  ["Judge a rental as an investment", "Rental cash flow", "What's left after vacancy, management, repairs and reserves?", "Cash flow, NOI, cap rate, cash-on-cash and the lender's DSCR"],
  ["Flip a house", "Fix and flip", "What's the profit, and how much cash do I need?", "Loan size, cash you bring, profit, return on cash and the 70% rule offer"],
  ["Renovate and keep it", "BRRRR", "How much of my cash comes back at the refinance?", "Cash in, cash back, cash left in, DSCR and cash flow"],
  ["Not sure whether to sell or keep", "Fix and flip, then BRRRR", "Which exit leaves you better off?", "Run the same purchase and rehab in both; compare the flip profit with cash left in and cash flow"],
];

const FIT = [
  "A renovation deal usually passes through three of these. Screen the flip first. If the margin is thin, run the same purchase and rehab through the [BRRRR calculator](/calculators/brrrr) to price the rental exit, then check the refinance in the [DSCR calculator](/calculators/dscr) and the long-term numbers in the [rental cash flow calculator](/calculators/rental-cash-flow).",
  "The DSCR and rental cash flow calculators look at the same property from two sides. The DSCR calculator is the lender's view: gross rent against PITIA, which is how most 1–4 unit DSCR lenders size a loan. The cash flow calculator is the owner's view: rent after vacancy, management, repairs and capital reserves, minus the loan payment. A property can pass the first and fail the second. On the cash flow calculator's default rental, a lender sees a 1.22 ratio while the owner loses $125 a month.",
  "The rental calculators use the standard payment formula, P&I = L × r ÷ (1 − (1 + r)^−n), where L is the loan, r the annual rate ÷ 12 and n the number of monthly payments. The fix and flip and BRRRR rehab loans are interest-only, with interest on about half the rehab money on average, because it's paid out in draws as the work is done.",
];

const LEFT_OUT = [
  "**Lender-specific terms.** Results are estimates, not loan offers. A lender sizes the loan on its own appraisal, rent schedule, credit tiers and fees.",
  "**Prepayment penalties and reserves.** DSCR loans commonly carry a 5-4-3-2-1 step-down prepayment penalty, and lenders published reserve requirements from none to 9 months of payments or more in October 2026.",
  "**Income taxes, depreciation and entity questions.** The calculators are pre-tax. Ask a CPA or attorney how a deal and its structure affect you.",
  "**Appreciation and principal paydown.** Both add to total return; the calculators measure cash.",
  "**Homes you'll live in.** Every calculator assumes an investment property that neither you nor your family will occupy. A home you'll live in needs a residential mortgage.",
];

const FAQS = [
  { q: "Are these real estate calculators free?", a: "Yes. All four are free and need no sign-up or email; the results update as you type. If you want to talk about funding a deal, the Get Funding form is separate and takes about 60 seconds. A loan specialist then calls you back with terms for that property." },
  { q: "Which calculator should I use for a short-term rental?", a: "The DSCR calculator. Enter the monthly income a short-term rental lender will count instead of a long-term rent: usually a projection from data such as AirDNA on a purchase, and the last 12 months of bookings on a refinance, after any discount the lender applies. Then run your own expenses in the rental cash flow calculator." },
  { q: "Can I use the DSCR calculator for a cash-out refinance?", a: "Yes. Put the expected appraised value in the purchase price field, and in the down payment field put the share of value the lender won't lend: 25 for a 75% cash-out, the most common cap lenders published in October 2026. The loan amount shown is your new loan; subtract the payoff and closing costs to estimate your cash out." },
  { q: "Are the calculator results a loan offer?", a: "No. They're planning estimates built from the numbers you enter and standard lender arithmetic. A lender sizes the actual loan on its own appraisal, rent schedule, credit tiers, fees and rules, and terms move with the market. Use the results to screen deals and decide which ones are worth applying for." },
  { q: "What's the difference between the DSCR and rental cash flow calculators?", a: "The DSCR calculator shows the lender's view: gross rent divided by principal, interest, taxes, insurance and HOA. The rental cash flow calculator shows the owner's view: rent after vacancy, management, repairs and capital reserves, minus the loan payment, plus cap rate and cash-on-cash. A property can satisfy a lender and still cost you money each month." },
];

const PROSE = "text-[17px] leading-[1.7] text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink";

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Real estate investment calculators",
          itemListElement: CALCULATORS.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.title, url: SITE.url + c.href })),
        }}
      />
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Calculators" }]} title="Real estate investment calculators">
        <p className="[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">
          <Inline text={INTRO} />
        </p>
      </PageIntro>
      <Container className="pb-[88px] pt-4">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
          {CALCULATORS.map((c) => {
            const a = ANSWERS[c.href];
            return (
              <Link key={c.href} href={c.href} className="flex min-h-[200px] flex-col gap-3 bg-white p-7 transition-colors hover:bg-paper">
                <span className="font-mono text-[30px] text-brand" aria-hidden="true">
                  {c.sym}
                </span>
                <span className="text-[21px] font-semibold tracking-[-0.02em]">{c.title}</span>
                {a && <span className="text-[16px] font-semibold leading-snug text-ink">{a.question}</span>}
                <span className="text-[15px] leading-relaxed text-ink-2">{c.text}</span>
                {a && <span className="font-mono text-xs leading-relaxed text-muted">Best for: {a.bestFor}</span>}
                <span className="mt-auto pt-2 text-sm font-semibold">Open calculator →</span>
              </Link>
            );
          })}
        </div>
      </Container>

      <section id="which-calculator" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="flex flex-col gap-8 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>Which one to use</Eyebrow>
            <H2>Start from your plan for the property.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">Each calculator answers one question. Pick the row that matches what you intend to do with the property.</p>
          </div>
          <CompareTable columns={["Your plan", "Open the calculator", "The question it answers", "What you'll see"]} rows={WHICH} />
        </Container>
      </section>

      <section id="how-they-fit" className="scroll-mt-20 border-t border-line">
        <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>How they fit together</Eyebrow>
            <H2>{"One deal, two views: the lender's and yours."}</H2>
          </div>
          <div className={`flex flex-col gap-5 ${PROSE}`}>
            {FIT.map((t) => (
              <p key={t}>
                <Inline text={t} />
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section id="limits" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>What they leave out</Eyebrow>
            <H2>Good for screening deals. Not a loan offer.</H2>
          </div>
          <ul className={`flex list-disc flex-col gap-3 pl-6 ${PROSE}`}>
            {LEFT_OUT.map((t) => (
              <li key={t}>
                <Inline text={t} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSection heading="Calculator questions" items={FAQS}>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink px-6 py-5 text-paper">
          <span className="text-[16px] leading-snug">Found a deal that works? Apply in about 60 seconds and get funded fast.</span>
          <ButtonLink href="/get-funding" variant="lime">
            Get Funding
          </ButtonLink>
        </div>
      </FaqSection>
    </>
  );
}
