import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";
import { RatesTable } from "@/components/RatesTable";
import { Bullets, CompareTable, ExampleCard, Formula } from "@/components/sections";
import { ButtonLink, Check, Container, Eyebrow, H2 } from "@/components/ui";
import { CALCULATORS, PROGRAMS, SITE } from "@/lib/site";

// Every figure is a published lender term from docs/research/loan-terms-2026-10.md
// (pulled 2026-10-19). Source codes in the comments (K1, L1, D1…) are listed there;
// LO7 = lendingone.com/insight/how-are-dscr-loan-interest-rates-determined/ (Sep 22, 2026).

export const metadata: Metadata = {
  title: { absolute: `Fast Funding for Real Estate Investors | ${SITE.name}` },
  description:
    "Fast funding for real estate investors: DSCR rental, fix and flip, bridge, BRRRR, construction and portfolio loans. Apply in 60 seconds, no credit pull.",
  alternates: { canonical: "/" },
};

const TERMS = [
  { k: "80%", v: "Typical max loan-to-value on a DSCR purchase — 85% for top credit" }, // K1, L1, LO1, E1, RC1, C1; D1, G1, A1
  { k: "100%", v: "Of rehab costs financed by most fix and flip lenders" }, // K3, L3, R1, LO2, RC3, C3, E2
  { k: "1.00", v: "The DSCR most rental lenders want — some go to 0.75" }, // L1, R1; LO1, D1
  { k: "7–14", v: "Business days to close a bridge loan at fast-moving lenders" }, // K4, LO6
];

/** One published fact per program card. */
const PROGRAM_FACTS: Record<string, string> = {
  dscr: "80% max loan-to-value on a purchase at most lenders; 85% at a few for 720–740+ credit.", // K1, L1, LO1, E1, RC1, C1; D1, G1, A1
  "short-term-rental": "A purchase can be sized on an AirDNA income projection; a refinance on 12 months of bookings.", // L2, A1, G1, E1; E3, STR
  "fix-and-flip": "85–100% of the purchase and 100% of the rehab, capped at 70–80% of after-repair value (ARV).", // R1, K3, L3, LO2, RC3/C3, NS, E2; K3, RC3/C3, E2, NS
  "hard-money": "The 2025 median rate on short-term investor loans was 9.99%, plus 0–2 points.", // HM; NS, E2
  bridge: "12–24 months at 70–85% of value, often with no prepayment penalty.", // RC5, L5, K4
  brrrr: "The refinance lends about 75% of ARV, after none to 90 days of seasoning.", // LO5; L1, L3, RC1/C1, K1
  construction: "82.5–90% of total cost, with 60–75% of the land financed at closing.", // K5, RC4/C4, R1, L4, LO3, NS; RC4/C4, L4
  portfolio: "Two to five properties minimum, depending on the lender, under one note.", // L1 2+, E1 3+, LO4 3–20, L7 5+
  "cash-out-refinance": "Most lenders cap cash-out at 75% of appraised value, after about 90 days of ownership.", // L1, LO1, E1, RC1, C1; K1, LO1, L1
};

const PITIA: [string, string, string][] = [
  ["P", "Principal", "The part of each payment that pays the loan down."],
  ["I", "Interest", "Set by your rate. On an interest-only loan it's the whole loan payment, which is why interest-only raises the ratio."],
  ["T", "Taxes", "The yearly property tax bill, divided by 12."],
  ["I", "Insurance", "The yearly landlord policy, plus flood cover where it's required, divided by 12."],
  ["A", "Association dues", "Monthly HOA or condo fees, if the property has them."],
];

// $250,000 purchase, 20% down: $200,000 at 7.375% (2025 HMDA median 30-year investor rate, HM)
// over 360 months. P&I = 200,000 × 0.0061458 / (1 − 1.0061458^−360) = $1,381.35.
// PITIA = 1,381 + 250 + 125 = $1,756; DSCR = 2,200 ÷ 1,756 = 1.253.
const DSCR_EXAMPLE = {
  title: "WORKED EXAMPLE · $250,000 SINGLE-FAMILY RENTAL",
  rows: [
    ["Monthly rent", "$2,200"],
    ["Principal & interest", "$1,381"],
    ["Property taxes", "$250"],
    ["Insurance", "$125"],
    ["HOA", "$0"],
    ["PITIA", "$1,756"],
  ] as [string, string][],
  result: { label: "DSCR = $2,200 ÷ $1,756", value: "1.25" },
  note: "20% down, $200,000 loan at 7.375% over 30 years — the 2025 median rate on 30-year investor loans. Illustrative only, not a rate quote.",
  dscr: 1.25,
};

const DSCR_LEVELS: [string, string][] = [
  // K1 0.8; LO1, D1 0.75; G1, A1 no-ratio
  ["Below 1.00", "The rent falls short of the payment and you cover the gap each month. Published programs go as low as 0.75, and a few lend with no ratio at all, usually with more money down."],
  // L1, R1 1.00 (RC1/C1 1.05)
  ["1.00", "Break-even. Every dollar of rent goes to the payment, with nothing left for vacancy, repairs or management. It's the most common published minimum."],
  // L6, C5, WD, MFL 1.20–1.25x; LO7: lower ratios "may subject them to higher rates, fees"
  ["1.25", "$1.25 of rent for every $1.00 of payment, a 25% cushion. Small multifamily (5+ unit) lenders commonly require 1.20–1.25, and a ratio this strong steers clear of the higher rates and fees that ratios near the minimum can carry."],
];

const DSCR_USES: [string, string][] = [
  // K1 lower of lease and market rent; RC1/C1 vacant at 90% of market rent
  ["They choose the rent", "Qualifying rent is whichever is lower: the signed lease or the market rent on the appraiser's rent schedule. A vacant property can still qualify on market rent."],
  // RC1/C1 1.05; L1, R1 1.00; K1 0.8; LO1, D1 0.75; LO4 1.0, RC2/C2 1.05
  ["They set a floor", "Single-property minimums published in October 2026 ran from 0.75 to 1.05, with 1.00 the most common. Portfolio lenders asked 1.00–1.05 on the combined rent."],
  // Max PITIA at 1.25 = 2,200 ÷ 1.25 = 1,760 → P&I 1,385 → $200,528 loan; at 1.00 → P&I 1,825 → $264,234.
  ["They size the loan", "The ratio caps the payment, and the payment caps the loan. In the example, a 1.25 requirement limits PITIA to $1,760 ($2,200 ÷ 1.25), or about a $200,500 loan at 7.375%. At a 1.00 minimum the rent would carry about $264,000, but the 80% loan-to-value cap still holds the loan at $200,000."],
  // LO7
  ["They price it", "A ratio close to the minimum can mean a higher rate or extra fees. Your credit score and your equity in the property move the price too."],
];

const CLOSING: string[][] = [
  ["Bridge", "7–14 business days", "Valuation and title. Little or no rehab means no budget to review."], // K4, LO6
  ["Fix and flip and hard money", "About 1–3 weeks; 7 days at the fastest", "The valuation, title and rehab budget review. Repeat borrowers with a complete file close fastest."], // K3 7 days; LO2 7–10 business days; R1 10 business days; L3
  ["DSCR rental, purchase or refinance", "About 2–5 weeks", "The appraisal and its rent schedule. Published times: 14–21 days at one lender, 30 days at another, a 34-day average at a third."], // D1, E1, G1
  ["Short-term rental", "On the DSCR timeline", "The appraisal plus the income figure: an AirDNA projection on a purchase, 12 months of bookings on a refinance."], // L2, E3
  ["BRRRR", "1–3 weeks for the rehab loan, 2–5 weeks for the refinance", "The rehab loan closes like a flip. The refinance can follow once the work is done and the house is rented: right away with an in-house refinance, or after about 90 days of seasoning elsewhere."], // L1, L3; RC1/C1, K1
  ["Ground-up construction", "Rarely published", "Plans, permits, the budget and your build history are reviewed before closing. After it, draws fund in 1–2 days by photo or virtual inspection at the faster lenders."], // L4, LO3
];

const LOOK_AT = [
  ["Leverage", "Loan-to-value on rentals; loan-to-cost and after-repair value on flips and builds. It sets your down payment and your rate tier."],
  ["The property's cash flow", "For rental loans, rent divided by the full payment (DSCR). Your personal income usually isn't part of it."],
  ["Experience", "Flips, builds and rentals in the last two to three years. More experience means more leverage and better pricing on project loans."],
  ["Credit", "Lenders price in 20-point bands. 700+ opens most programs; 740+ gets the best leverage."],
  ["Liquidity", "Cash for the down payment, closing costs and a few months of reserves."],
  ["The exit", "How a short-term loan gets repaid — a sale or a refinance into a long-term rental loan."],
];

const BY_LOAN: string[][] = [
  // G1 620 … A1 680; K1, L1, LO1, E1, RC1, C1 80%; D1, G1, A1 85%; K1 none, D1 3 mo, E1 3–9 mo
  ["DSCR rental", "620–680", "Up to 80% of value on a purchase; 85% at a few lenders for 720–740+ credit", "Rent ÷ PITIA, usually 1.00 or more, and reserves of none to 9 months of payments"],
  // L2 700, 75/70%; E1 80/75%; E3 0% haircut for professional hosts, 25% for newer
  ["Short-term rental", "700 at the lender that publishes one", "75–80% of value on a purchase; 70–75% on a cash-out", "Projected or actual nightly income, cut by up to 25% for newer hosts at one lender"],
  // E2 600; R1, NS 650; L3 660; R1 experience tiers
  ["Fix and flip and hard money", "600–660", "85–100% of the purchase plus 100% of the rehab, capped at 70–80% of ARV", "Your track record: more completed flips move you to higher leverage and lower rates"],
  // RC5 660, 70% LTV; L5 700, 85%; RC5 exit DSCR 1.10
  ["Bridge", "660–700", "70–85% of value", "The exit — a sale, or a refinance that one lender wants to show a 1.10 DSCR"],
  // LO5 95% LTC rehab, ~75% of ARV refi
  ["BRRRR", "As for a flip, then a DSCR loan", "Up to 95% of cost on the rehab loan; about 75% of ARV on the refinance", "The after-repair appraisal, and the lease once the property is rented"],
  // R1 650; K5, RC4/C4, R1, L4, LO3, NS LTC; K5, LO3, RC4/C4, L4, R1 ARV; LO3, RC4/C4, L4 experience
  ["Ground-up construction", "650 at the lender that publishes one", "82.5–90% of cost, capped at 65–75% of completed value", "Usually at least one ground-up project completed in about the last 3 years"],
  // RC2/C2, R1 680; RC2/C2, LO4 80/75%, R1 60–70/55–65%; LO4 1.0, RC2/C2 1.05; RC2/C2 90%+ leased
  ["Rental portfolio", "680", "Up to 80% of value on a purchase; 55–75% on a cash-out", "Combined rent at a 1.00–1.05 DSCR, and 90%+ of units leased at some lenders"],
  // DSCR minimums; L1, LO1, E1, RC1, C1 75%, G1, D1 80%; K1, LO1, L1 90 days
  ["Cash-out refinance", "620–680", "70–80% of appraised value, most often 75%", "Seasoning — usually 90 days of ownership — and rent that covers the new, larger payment"],
];

const DOCS: { title: string; items: string[] }[] = [
  {
    title: "Every loan",
    items: [
      "Photo ID for each borrower and guarantor",
      "The purchase contract, or the current mortgage statement on a refinance",
      "Recent bank statements showing the down payment, closing costs and any reserves",
      "An insurance quote for the property",
      "If you're closing in an LLC: articles of organization, operating agreement, EIN letter and certificate of good standing",
    ],
  },
  {
    title: "Rental and cash-out (DSCR) loans",
    items: [
      "The lease, if the property is rented; a vacant property can qualify on market rent", // RC1/C1
      "Reserves of none to 9 months of payments, depending on the lender and loan size", // K1, D1, E1
      "For a portfolio loan, a rent roll and the lease for each property",
      "No tax returns, W-2s or pay stubs",
    ],
  },
  {
    title: "Short-term rental loans",
    items: [
      "On a purchase, an income projection — lenders commonly use AirDNA", // L2, A1, G1, E1
      "On a refinance, 12 months of booking statements from Airbnb or VRBO", // E3, STR
      "Any short-term rental permit or registration the city requires",
    ],
  },
  {
    title: "Fix and flip, bridge and BRRRR loans",
    items: [
      "A line-item rehab budget and scope of work",
      "A list of past flips, builds and rentals with addresses and dates",
      "Cash for your share of the purchase plus a few months of interest",
      "Your exit: the sale price you expect, or the rent and refinance plan",
    ],
  },
  {
    title: "Ground-up construction loans",
    items: [
      "Plans, the permit or its status, and the construction budget and schedule",
      "Who's building it, and the builds you and they have completed",
      "The land contract, or proof you own the lot",
    ],
  },
];

const GUIDES = [
  { tag: "DSCR", title: "DSCR loan requirements: credit, down payment, ratio and reserves", href: "/dscr-loans/requirements" },
  { tag: "DSCR", title: "DSCR loan rates: where published grids sit and what moves yours", href: "/dscr-loans/rates" },
  { tag: "DSCR", title: "DSCR loan vs conventional: pay a little more in rate, or prove your income", href: "/guides/dscr-loan-vs-conventional" },
  { tag: "FIX & FLIP", title: "The 70% rule — and the better way to set your maximum offer", href: "/guides/70-percent-rule" },
  { tag: "FIX & FLIP", title: "Fix and flip loans with no experience: what first-timers bring to closing", href: "/guides/fix-and-flip-loans-no-experience" },
  { tag: "SHORT-TERM RENTAL", title: "How lenders count Airbnb income for a DSCR loan", href: "/guides/dscr-loan-airbnb-income" },
];

const FAQ = [
  {
    q: "How fast can I get funded?",
    // K4, LO6; K3, LO2, R1; D1, E1, G1
    a: "Fast. Leave your name and number and a loan specialist calls you back to go over the deal. After that, the loan type sets the clock: lenders publish 7–14 business days for bridge loans, about one to three weeks for fix and flip loans, and two to five weeks for DSCR rental loans, where the appraisal and rent schedule take the longest.",
  },
  {
    q: "Does applying affect my credit?",
    a: "No. The application never pulls your credit; it asks only for a rough range, which is enough to talk through terms. A credit check does come before closing, and we'll tell you before it happens. Published minimums run from about 600 to 680 depending on the loan, so a rough range shows which programs fit.",
  },
  {
    q: "Can I use these loans for a home I'll live in?",
    a: "No. We only lend on non-owner-occupied properties — rentals, flips, new builds and portfolios. If you, a family member or an owner of your LLC will live in the property, even part-time, you need a residential mortgage lender. That includes living in one unit of a duplex or fourplex you're buying.",
  },
  {
    q: "Do I need an LLC to get an investment property loan?",
    // L1, RC1/C1, LO1 require or allow entities; G1 LLC + personal guarantee
    a: "Not always. Many rental and flip loans can close in your own name or in an LLC; some programs require an entity, and lenders that lend to one usually ask the owners for a personal guarantee. Whether an LLC makes sense for your taxes and liability is a question for a CPA or attorney, not a loan specialist.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Your name and mobile number, then a few quick taps: whether anyone will live in the property, what you're financing, roughly how much you need, your credit range and the property's ZIP code. That's all it takes to start. Documents — the purchase contract, bank statements, leases or a rehab budget — come later, once you've talked through the deal with a loan specialist.",
  },
  {
    q: "What is PITIA?",
    a: "PITIA is the full monthly cost of carrying a financed property: principal, interest, property taxes, insurance and association (HOA or condo) dues. DSCR lenders divide the monthly rent by PITIA, not by the loan payment alone, so a high tax bill or an expensive insurance policy lowers your ratio even when the rate is good. Taxes and insurance count as one-twelfth of the yearly bill.",
  },
  {
    q: "Can I get a DSCR loan if the rent doesn't cover the payment?",
    // K1 0.8; LO1, D1 0.75; G1 no-ratio up to 75% LTV with 700+; A1
    a: "Sometimes. A ratio below 1.00 means the rent falls short of the full payment. In October 2026, a few lenders published minimums of 0.75 or 0.80, and some offered no-ratio programs — one up to 75% loan-to-value with a 700+ credit score. Expect a bigger down payment and a higher rate than on a loan at 1.00 or above.",
  },
  {
    q: "How much down payment do I need for an investment property loan?",
    // DSCR 80% (D1, G1 85% at 740+; A1 720+); flip 85–100% LTC; construction 82.5–90% LTC
    a: "It depends on the loan. DSCR rental lenders published an 80% maximum loan-to-value on purchases in October 2026, so 20% down, or 15% at a few lenders for 720–740+ credit. Fix and flip lenders financed 85–100% of the purchase plus the rehab, within an after-repair-value cap. Construction lenders lent 82.5–90% of total cost. Closing costs come on top.",
  },
  {
    q: "What credit score do I need for an investment property loan?",
    // E2, R1, NS, L3; G1 … A1; R1; RC5, L5; RC2/C2, R1; D1, G1 740+
    a: "Published minimums in October 2026: 600–660 for fix and flip, 620–680 for DSCR rental loans, 650 for ground-up construction at the one lender that lists it, 660–700 for bridge loans and 680 for rental portfolios. Clearing the minimum gets you in; leverage and pricing improve in steps above it, with the best terms usually starting around 740.",
  },
  {
    q: "What's the difference between a DSCR loan and a hard money loan?",
    // K1, R1, LO1, L1 terms; E2, R1, K3 6–24 months; D2 grid; HM 9.99%
    a: "Time and what each qualifies on. A DSCR loan is long-term — usually a 30-year fixed rate or an ARM — and qualifies on the property's rent against its payment. A hard money loan runs 6–24 months, interest-only, and is sized on the property's value and your exit. Published DSCR grids ran about 6.25–7.875% in October 2026; the 2025 median short-term investor rate was 9.99%.",
  },
  {
    q: "Do investment property loans have prepayment penalties?",
    // E1, D2, G1, LO1, K1; L5, K4
    a: "Rental loans usually do; short-term loans often don't. On DSCR loans, a 5-4-3-2-1 step-down is the common default: 5% of the amount prepaid in year one, falling a point a year to 1% in year five. Shorter penalties, or none, cost more in rate. Several published bridge programs carry no prepayment penalty at all.",
  },
  {
    q: "What is a business-purpose loan?",
    // 12 CFR 1026.3(a)(1); Supplement I comment 3(a)-4; occupancy affidavits (docs/research/compliance-2026-10.md)
    a: "A loan for property you hold as an investment — to buy, fix, build or refinance a rental or a flip — rather than a home you live in. Federal Truth in Lending rules treat credit for a rental the owner doesn't occupy as business purpose, but not if the owner expects to live there more than 14 days in the coming year. Lenders ask you to confirm occupancy in writing.",
  },
  {
    q: "How much can I borrow?",
    // R1, L1, LO1, RC1/C1, A1, E1, G1 DSCR; RC3/C3, E2, K3, L3, NS flip; RC5, L5, K4 bridge; RC4/C4, R1, L4, K5 construction
    a: "Published program limits in October 2026 ran from about $50,000–$75,000 at the low end to $4.5–5 million at the top for a single loan: roughly $70,000–$4.5 million for DSCR rentals, $50,000–$5 million for fix and flip and bridge loans, and up to $10 million for ground-up construction. Within those limits, the property's value, rent or project cost sets your loan.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero. Phones: headline, then the form, then the copy. Wide screens: copy left, form right, above the fold. */}
      <section>
        <Container className="grid items-start gap-x-12 gap-y-6 pb-16 pt-8 sm:pt-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:pt-20">
          <div className="flex flex-col gap-5 lg:col-start-1 lg:row-start-1 lg:pt-6">
            <Eyebrow>Business-purpose loans · Investment property only</Eyebrow>
            <h1 className="text-[clamp(40px,5.2vw,70px)] font-semibold leading-[1.02] tracking-[-0.04em]">Fast funding for real estate investors.</h1>
          </div>
          <div id="start" className="scroll-mt-24 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <LeadForm variant="card" />
          </div>
          <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-2">
            <p className="max-w-[34em] text-[19px] leading-relaxed text-ink-2">
              {SITE.name} gets real estate investors funded fast on investment property: DSCR (debt service coverage ratio) rental loans, fix and flip, bridge, BRRRR, ground-up
              construction and portfolio loans. Leave your name and number and a loan specialist calls you back with your terms.
            </p>
            <ul className="mt-2 flex flex-col gap-3 text-[15px] text-ink-2">
              <li className="flex items-center gap-2.5">
                <Check />
                Apply in about 60 seconds — no credit pull
              </li>
              <li className="flex items-center gap-2.5">
                <Check />
                Rental loans that qualify on the rent, not your tax returns
              </li>
              <li className="flex items-center gap-2.5">
                <Check />
                Business-purpose loans for property you won&apos;t live in
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-[13px] text-ink-2">
              <Link href="#dscr" className="hover:text-brand">
                What is DSCR? →
              </Link>
              <Link href="/calculators/dscr" className="hover:text-brand">
                DSCR calculator →
              </Link>
              <Link href="/rates" className="hover:text-brand">
                Investor rates →
              </Link>
              <Link href="/loans" className="hover:text-brand">
                All programs →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Typical terms strip */}
      <section className="border-y border-line bg-white">
        <Container className="grid gap-px [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
          {TERMS.map((t) => (
            <div key={t.k} className="flex flex-col gap-1.5 py-7 sm:px-2">
              <span className="font-mono text-[30px] tracking-[-0.02em]">{t.k}</span>
              <span className="text-[15px] leading-snug text-ink-2">{t.v}</span>
            </div>
          ))}
        </Container>
        <Container className="pb-5">
          <p className="font-mono text-xs text-muted">
            Published lender terms, October 2026.{" "}
            <Link href="/rates" className="underline underline-offset-2">
              Sources and current ranges
            </Link>
          </p>
        </Container>
      </section>

      {/* Loan programs, one published fact each */}
      <section id="loans">
        <Container className="flex flex-col gap-12 py-[88px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[660px] flex-col gap-3">
              <Eyebrow>Loan programs</Eyebrow>
              <H2>Every stage of the investment, from the first flip to the fiftieth door.</H2>
              {/* Terms: K1, R1, LO1, L1 (30-year); E2, K3, L3 (6–24 months) */}
              <p className="text-[17px] leading-relaxed text-ink-2">
                Two families of loans cover almost every deal. Rental loans run up to 30 years and are sized on what the property earns. Project loans run 6 to 24 months, charge
                interest only, and are sized on what you pay and what the property will be worth when the work is done.
              </p>
            </div>
            <Link href="/loans" className="text-[15px] font-semibold underline-offset-4 hover:underline">
              See all loan programs →
            </Link>
          </div>
          {(["Rental", "Project"] as const).map((g) => (
            <div key={g} className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">{g === "Rental" ? "Rental loans — hold and collect rent" : "Project loans — buy, renovate, build"}</h3>
              <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))]">
                {PROGRAMS.filter((p) => p.group === g).map((p) => (
                  <Link key={p.slug} href={p.href} className="group flex min-h-[190px] flex-col gap-3 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ink">
                    <span className="text-[20px] font-semibold tracking-[-0.02em]">{p.title}</span>
                    <span className="text-[15px] leading-normal text-ink-2">{p.blurb}</span>
                    {PROGRAM_FACTS[p.slug] && <span className="border-t border-line pt-3 text-sm leading-snug">{PROGRAM_FACTS[p.slug]}</span>}
                    <span className="mt-auto font-mono text-xs text-muted">{p.term}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* How it works */}
      <section className="border-t border-line bg-white">
        <Container className="grid gap-12 py-[88px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>How it works</Eyebrow>
            <H2>Three steps to funded.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">No long application and no waiting around. Tell us about the deal, talk to a loan specialist, and close fast.</p>
            <Link href="/how-it-works" className="text-[15px] font-semibold underline-offset-4 hover:underline">
              How it works →
            </Link>
          </div>
          <ol className="flex flex-col">
            {[
              ["01", "Leave your name and number", "Your contact details first, then a few quick taps about the deal — loan type, amount, credit range. About 60 seconds, no credit pull."],
              ["02", "Get your terms", "A loan specialist calls you back fast to go over the property, the numbers and your options."],
              ["03", "Close fast", "Sign and get funded. Short-term loans can close in one to three weeks; rental loans typically in two to five."],
            ].map(([n, t, d]) => (
              <li key={n} className="grid grid-cols-[64px_1fr] gap-4 border-t border-line py-6 last:border-b">
                <span className="font-mono text-[15px] text-muted">{n}</span>
                <div>
                  <div className="text-[19px] font-semibold">{t}</div>
                  <p className="mt-1.5 text-base leading-normal text-ink-2">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What is a DSCR loan? */}
      <section id="dscr" className="scroll-mt-20">
        <Container className="flex flex-col gap-14 py-[88px]">
          <div className="grid items-start gap-12 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
            <div className="flex flex-col gap-5">
              <Eyebrow>DSCR, in plain English</Eyebrow>
              <H2>What is a DSCR loan?</H2>
              <p className="text-[19px] leading-relaxed">
                A DSCR loan is a long-term loan on a rental property that qualifies on the property&apos;s income instead of yours. DSCR stands for debt service coverage ratio: the
                property&apos;s monthly rent divided by its full monthly payment. If the rent covers the payment by the margin the lender asks for, your salary, tax returns and
                debt-to-income ratio stay out of the decision.
              </p>
              <p className="text-[17px] leading-relaxed text-ink-2">
                Lenders call the full payment PITIA. It counts the costs of owning the property, not just the loan, which is why the same rent can clear the bar in one county and
                miss it in the next.
              </p>
              <Formula>DSCR = monthly rent ÷ monthly PITIA</Formula>
              <dl className="flex flex-col text-[15px]">
                {PITIA.map(([letter, term, text]) => (
                  <div key={term} className="grid grid-cols-[32px_1fr] gap-3 border-t border-line py-3.5 last:border-b">
                    <dt className="font-mono text-[17px] text-brand" aria-hidden="true">
                      {letter}
                    </dt>
                    <dd className="leading-relaxed text-ink-2">
                      <b className="font-semibold text-ink">{term}.</b> {text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-col gap-5">
              <ExampleCard example={DSCR_EXAMPLE} />
              {/* 1,800 ÷ 1,756 = 1.025; 1,756 × 1.25 = 2,195 */}
              <p className="text-[15px] leading-relaxed text-ink-2">
                Change one input and the ratio moves. Rent the same house for $1,800 and the ratio drops to 1.03 — above a 1.00 minimum, with $44 a month to spare. To reach 1.25, the
                rent has to be at least $2,195 ($1,756 × 1.25).
              </p>
            </div>
          </div>

          <div className="grid items-start gap-12 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
            <div className="flex flex-col gap-4">
              <h3 className="text-[24px] font-semibold tracking-[-0.025em]">What 1.00 and 1.25 mean</h3>
              <dl className="flex flex-col text-[15px]">
                {DSCR_LEVELS.map(([k, v]) => (
                  <div key={k} className="grid gap-1 border-t border-line py-4 last:border-b sm:grid-cols-[110px_1fr] sm:gap-5">
                    <dt className="font-mono text-[17px]">{k}</dt>
                    <dd className="leading-relaxed text-ink-2">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[24px] font-semibold tracking-[-0.025em]">How lenders use the ratio</h3>
              <dl className="flex flex-col text-[15px]">
                {DSCR_USES.map(([k, v]) => (
                  <div key={k} className="grid gap-1 border-t border-line py-4 last:border-b sm:grid-cols-[170px_1fr] sm:gap-5">
                    <dt className="font-semibold">{k}</dt>
                    <dd className="leading-relaxed text-ink-2">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href="/get-funding?loan=dscr" size="lg">
              Get DSCR funding
            </ButtonLink>
            <Link href="/dscr-loans" className="text-[15px] font-semibold underline-offset-4 hover:underline">
              DSCR loans explained →
            </Link>
            <Link href="/calculators/dscr" className="text-[15px] font-semibold underline-offset-4 hover:underline">
              Calculate your DSCR →
            </Link>
            <Link href="/glossary#dscr" className="text-[15px] font-semibold underline-offset-4 hover:underline">
              DSCR in the glossary →
            </Link>
          </div>
        </Container>
      </section>

      {/* Closing times by loan type */}
      <section id="closing-times" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="flex flex-col gap-8 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>Closing times</Eyebrow>
            <H2>Short-term loans close in days. Rental loans take weeks.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Closing times lenders published on their own program pages in October 2026. They assume a complete file, and the valuation or appraisal is usually the longest wait.
            </p>
          </div>
          <CompareTable columns={["Loan type", "Published closing time", "What sets the pace"]} rows={CLOSING} />
          <p className="max-w-[720px] text-[15px] leading-relaxed text-ink-2">
            The fastest closings start with the paperwork ready.{" "}
            <Link href="#what-you-need" className="font-semibold underline underline-offset-4">
              See what each loan needs
            </Link>{" "}
            and gather it while the appraisal is ordered.
          </p>
        </Container>
      </section>

      {/* What lenders look at */}
      <section id="underwriting" className="scroll-mt-20">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[700px] flex-col gap-3">
            <Eyebrow>Underwriting, plainly</Eyebrow>
            <H2>What we look at to fund your deal.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">Investor loans are underwritten on the deal far more than on your paycheck. These six things decide your leverage and your rate.</p>
          </div>
          <div className="grid gap-x-8 gap-y-2 [grid-template-columns:repeat(auto-fit,minmax(min(100%,330px),1fr))]">
            {LOOK_AT.map(([t, d], i) => (
              <div key={t} className="grid grid-cols-[44px_1fr] gap-3 border-t border-line py-5">
                <span className="font-mono text-[15px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="text-[17px] font-semibold">{t}</div>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-6">
            <h3 className="text-[24px] font-semibold tracking-[-0.025em]">What decides the loan, by loan type</h3>
            <p className="max-w-[720px] text-[15px] leading-relaxed text-ink-2">
              The same six factors carry different weight on each program. Rental loans lean on the rent; project loans lean on the budget, the finished value and your track record.
            </p>
            <CompareTable columns={["Loan type", "Published credit minimums", "Leverage", "What else decides it"]} rows={BY_LOAN} highlight={-1} />
            <p className="font-mono text-xs leading-relaxed text-muted">
              Ranges lenders published on their program pages in October 2026. Each lender sets its own minimums; your terms depend on the property, your credit and your experience.
            </p>
          </div>
        </Container>
      </section>

      {/* What you need to apply and to close */}
      <section id="what-you-need" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <Eyebrow>What you need</Eyebrow>
            <H2>To apply, a name and a phone number. To close, the paperwork below.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              The application asks for your name and mobile number first, so a loan specialist can reach you, then a few quick taps about the deal: whether anyone will live in the
              property, what you&apos;re financing, roughly how much and your credit range. No documents and no credit pull. The paperwork comes once you&apos;ve talked the deal
              through.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
            {DOCS.map((d) => (
              <div key={d.title} className="flex flex-col gap-4 border-t-2 border-ink pt-5">
                <h3 className="text-[19px] font-semibold">{d.title}</h3>
                <Bullets items={d.items} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools */}
      <section className="bg-ink text-paper">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[640px] flex-col gap-3">
              <Eyebrow tone="lime">Free investor calculators</Eyebrow>
              <H2 className="text-white">Run the numbers in seconds.</H2>
            </div>
            <Link href="/calculators" className="text-[15px] font-semibold text-lime underline-offset-4 hover:underline">
              All calculators →
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-night-line bg-night-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))]">
            {CALCULATORS.map((t) => (
              <Link key={t.title} href={t.href} className="flex min-h-[170px] flex-col gap-2.5 bg-ink p-7 transition-colors hover:bg-night">
                <span className="font-mono text-[28px] text-lime" aria-hidden="true">
                  {t.sym}
                </span>
                <span className="text-[19px] font-semibold">{t.title}</span>
                <span className="text-[15px] leading-normal text-mist">{t.text}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Rates preview */}
      <section>
        <Container className="grid items-start gap-12 py-[88px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>Investor loan rates</Eyebrow>
            <H2>Where rates sit right now — with the sources.</H2>
            <p className="text-[17px] leading-relaxed text-ink-2">
              Your rate depends on credit, leverage, DSCR, experience and prepayment terms. These ranges come from published lender pricing and federal mortgage data.
            </p>
            <Link href="/rates" className="text-[15px] font-semibold underline-offset-4 hover:underline">
              Full rate table and what moves it →
            </Link>
          </div>
          <RatesTable compact />
        </Container>
      </section>

      {/* Guides */}
      <section className="border-t border-line bg-white">
        <Container className="flex flex-col gap-9 py-[88px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <H2>Investor guides</H2>
            <Link href="/guides" className="text-[15px] font-semibold underline-offset-4 hover:underline">
              All guides →
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-9 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
            {GUIDES.map((g) => (
              <Link key={g.href} href={g.href} className="flex flex-col gap-2.5 border-t-2 border-ink pt-5 hover:text-brand">
                <span className="font-mono text-xs text-muted">{g.tag}</span>
                <span className="text-[21px] font-semibold leading-tight tracking-[-0.02em]">{g.title}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ (the Faq component also emits the matching FAQPage JSON-LD) */}
      <section>
        <div className="mx-auto flex max-w-[880px] flex-col gap-7 px-6 py-[88px]">
          <H2>Questions investors ask us</H2>
          <Faq items={FAQ} />
        </div>
      </section>

      {/* CTA */}
      <section>
        <Container className="pb-[88px]">
          <div className="flex flex-wrap items-center justify-between gap-7 rounded-3xl bg-brand p-[clamp(32px,5vw,64px)] text-white">
            <div className="max-w-[620px]">
              <h2 className="text-[clamp(30px,3.4vw,44px)] font-semibold leading-[1.08] tracking-[-0.035em]">Get your deal funded fast.</h2>
              <p className="mt-3 text-[17px] leading-normal text-[#E3EEE7]">About 60 seconds, no credit pull — a loan specialist calls you back.</p>
            </div>
            <ButtonLink href="/get-funding" variant="light" size="lg">
              {SITE.cta}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
