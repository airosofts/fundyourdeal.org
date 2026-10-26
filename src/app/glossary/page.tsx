import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/PageIntro";
import { ExampleCard, FaqSection, Formula, Sources } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, H2, JsonLd } from "@/components/ui";
import { SITE } from "@/lib/site";

const META_TITLE = "Investor Loan Glossary: DSCR, LTV, LTC, ARV | Fund Your Deal";
const META_DESCRIPTION =
  "Plain-English investor loan glossary: what DSCR means and how lenders calculate it, plus LTV, LTC, ARV, PITIA, seasoning, prepayment penalties and draws.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: "/glossary" },
  openGraph: { title: META_TITLE, description: META_DESCRIPTION, url: "/glossary", type: "article" },
};

const UPDATED = "2026-10-23";

type Term = {
  id: string;
  term: string;
  aka?: string;
  /** One plain sentence: the JSON-LD description and the lead of the entry. */
  short: string;
  body: string[];
  formula?: string;
  links: { href: string; label: string }[];
};

type Group = { id: string; eyebrow: string; heading: string; terms: Term[] };

// DSCR is the feature entry above the groups; it is also the first DefinedTerm.
const DSCR: Term = {
  id: "dscr",
  term: "DSCR (debt service coverage ratio)",
  aka: "Debt service coverage ratio",
  short: "A rental property’s monthly qualifying rent divided by its monthly payment (PITIA). Rental lenders use it in place of your personal income.",
  body: [],
  formula: "DSCR = qualifying monthly rent ÷ monthly PITIA",
  links: [
    { href: "/dscr-loans", label: "DSCR loans" },
    { href: "/calculators/dscr", label: "DSCR calculator" },
  ],
};

const GROUPS: Group[] = [
  {
    id: "qualifying",
    eyebrow: "Qualifying and sizing",
    heading: "How lenders measure the deal.",
    terms: [
      {
        id: "pitia",
        term: "PITIA",
        aka: "Principal, interest, taxes, insurance and association dues",
        short: "The full monthly payment on a property: principal, interest, property taxes, insurance and any HOA or association dues.",
        body: [
          "PITIA is the bottom half of the [DSCR](#dscr): one month of principal and interest, one-twelfth of the annual tax bill, one-twelfth of the insurance premiums (hazard, plus flood where it’s required) and any HOA or condo dues. Without association dues it’s often written PITI.",
          "Anything that raises PITIA lowers your ratio on the same rent: a tax bill reassessed at your purchase price, a coastal or wind insurance quote, a new special assessment. Get real tax and insurance figures before you rely on a DSCR estimate. Lenders also measure cash [reserves](#reserves) in months of PITIA.",
        ],
        formula: "PITIA = principal + interest + taxes + insurance + association dues (monthly)",
        links: [{ href: "/calculators/dscr", label: "DSCR calculator" }],
      },
      {
        id: "ltv",
        term: "LTV (loan-to-value)",
        aka: "Loan-to-value ratio",
        short: "The loan amount divided by the property’s value, as a percentage. The main leverage limit on rental and bridge loans.",
        body: [
          "A $240,000 loan on a $320,000 property is 75% LTV, which leaves 25% equity. On a purchase, lenders usually measure against the lower of the price and the appraisal; on a refinance, against the appraised value.",
          "DSCR lenders published 80% maximum LTV on purchases in October 2026, with 85% at a few lenders for 720–740+ credit. Rate-and-term refinances topped out at 75–80% and cash-out refinances at 70–80%, most at 75%. Lower LTV also tends to price better, because the lender has more of a cushion if values fall.",
        ],
        formula: "LTV = loan amount ÷ property value",
        links: [
          { href: "/dscr-loans", label: "DSCR loans" },
          { href: "/bridge-loans", label: "Bridge loans" },
        ],
      },
      {
        id: "ltc",
        term: "LTC (loan-to-cost)",
        aka: "Loan-to-cost ratio",
        short: "The loan divided by the project’s total cost: purchase price plus the rehab or construction budget.",
        body: [
          "Project lenders size on cost because the value before the work doesn’t reflect what you’re spending. Buy at $210,000 with a $55,000 rehab and your cost is $265,000. A lender funding 90% of the purchase ($189,000) and 100% of the rehab ($55,000) lends $244,000, about 92% LTC.",
          "Published October 2026 limits: fix and flip lenders fund 85–100% of the purchase price depending on experience and 100% of the rehab; ground-up construction lenders fund 82.5–90% of total cost. Project lenders also cap the loan at a share of the [ARV](#arv), and the lower limit wins.",
        ],
        formula: "LTC = loan amount ÷ (purchase price + rehab or build budget)",
        links: [
          { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
          { href: "/ground-up-construction-loans", label: "Construction loans" },
        ],
      },
      {
        id: "arv",
        term: "ARV (after-repair value)",
        aka: "After-repair value",
        short: "The appraiser’s estimate of what a property will be worth once the planned renovation or build is finished.",
        body: [
          "The appraiser values the finished property from sales of comparable renovated homes, using your scope of work and budget. Project lenders cap the total loan at a share of it: 70–80% of ARV at fix and flip lenders in October 2026, often 60–70% for new investors or heavy rehabs, and 65–75% of completed value on ground-up construction.",
          "Continue the [LTC](#ltc) example. If the ARV comes in at $320,000 and the lender caps at 75%, the loan stops at $240,000, $4,000 short of what LTC alone allowed, and you bring the difference at closing. ARV also sizes the refinance in a [BRRRR](#brrrr), where lenders publish about 75% of the new value.",
        ],
        formula: "Maximum loan = the lower of the LTC limit and ARV × the lender’s ARV cap",
        links: [
          { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
          { href: "/calculators/fix-and-flip", label: "Fix and flip calculator" },
        ],
      },
      {
        id: "70-percent-rule",
        term: "70% rule",
        short: "A quick screen for flips: keep your offer at or below 70% of the after-repair value, less the repair budget.",
        body: [
          "On a house with a $280,000 ARV that needs $40,000 of work, the rule caps your offer at $156,000 ($196,000 minus $40,000). The other 30% of ARV is meant to cover buying, holding and selling costs, financing and your profit.",
          "It’s an investor’s rule of thumb, not a lender requirement. Lenders apply their own ARV caps, and in expensive markets or on light rehabs the 30% margin can be more than a deal needs.",
        ],
        formula: "Maximum offer = ARV × 70% − rehab budget",
        links: [
          { href: "/guides/70-percent-rule", label: "70% rule guide" },
          { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
        ],
      },
      {
        id: "dti",
        term: "DTI (debt-to-income ratio)",
        aka: "Debt-to-income ratio",
        short: "Your total monthly debt payments divided by your gross monthly income. Conventional mortgages qualify on it; DSCR loans don’t.",
        body: [
          "A borrower with $9,000 a month of income and $3,600 of monthly payments (the new mortgage, other housing, a car loan and card minimums) has a 40% DTI. Fannie Mae’s Selling Guide sets a 36% maximum for manually underwritten loans, up to 45% with qualifying credit and reserves, and 50% for loans approved through its Desktop Underwriter system.",
          "That limit is where many self-employed investors get stuck: depreciation and write-offs shrink the income a conventional lender can count. A [DSCR loan](/dscr-loans) never calculates DTI. The property’s own ratio replaces it.",
        ],
        formula: "DTI = total monthly debt payments ÷ gross monthly income",
        links: [
          { href: "/dscr-loans", label: "DSCR loans" },
          { href: "/guides/dscr-loan-vs-conventional", label: "DSCR vs conventional" },
        ],
      },
      {
        id: "rent-schedule",
        term: "Rent schedule (Form 1007)",
        aka: "Single-Family Comparable Rent Schedule",
        short: "The appraiser’s estimate of a property’s long-term market rent, based on comparable rentals nearby. Fannie Mae’s version is Form 1007.",
        body: [
          "When a rental lender orders the appraisal, the appraiser also estimates what the property would lease for, using comparable rentals. For years that has been Form 1007, the Single-Family Comparable Rent Schedule. 2–4 unit properties go on Form 1025, the small residential income property report, which carries its own rent analysis.",
          "The forms are changing. For loans sold to Fannie Mae and Freddie Mac, the redesigned appraisal report (UAD 3.6) is mandatory for new reports submitted on or after November 2, 2026. Market rent moves into its Rental Information section, and Freddie Mac says a separate 1007 usually won’t be completed. DSCR lenders set their own appraisal rules, so you’ll still hear “the 1007.” Whatever the form, most lenders count the lower of market rent and your lease.",
        ],
        links: [
          { href: "/dscr-loans/requirements", label: "DSCR requirements" },
          { href: "/dscr-loans", label: "DSCR loans" },
        ],
      },
      {
        id: "str-income",
        term: "Short-term rental income (AirDNA, T12)",
        aka: "STR income",
        short: "How rental lenders count Airbnb and VRBO income: a third-party projection on a purchase, the last 12 months of bookings on a refinance.",
        body: [
          "On a purchase there’s no booking history, so lenders accept a projection from a data provider such as AirDNA, or fall back on long-term market rent. On a refinance they use the trailing 12 months (T12) of actual bookings. Expect a haircut: Easy Street applies none for professional short-term rental operators and 25% for newer ones.",
          "Short-term rental loans also run tighter on credit and leverage. Lima One published a 700 minimum score and 75% LTV on purchases, 70% on cash-out, in October 2026.",
        ],
        links: [
          { href: "/short-term-rental-loans", label: "Short-term rental loans" },
          { href: "/guides/dscr-loan-airbnb-income", label: "How lenders count Airbnb income" },
        ],
      },
      {
        id: "reserves",
        term: "Reserves",
        aka: "Cash reserves",
        short: "Cash or liquid assets you still have after closing, measured in months of the property’s payment (PITIA).",
        body: [
          "Published DSCR reserve rules in October 2026 ran from none (Kiavi) to 3 months (Defy) and 3–9 months (Easy Street), with 12 months in one foreign-national program (Angel Oak). On a $2,375 PITIA, 6 months is $14,250.",
          "Lenders count reserves separately from the down payment and closing costs, so budget for all three when you work out the cash a purchase needs.",
        ],
        links: [{ href: "/dscr-loans/requirements", label: "DSCR requirements" }],
      },
    ],
  },
  {
    id: "costs",
    eyebrow: "Rates, payments and fees",
    heading: "What the money costs.",
    terms: [
      {
        id: "points",
        term: "Points and origination fees",
        aka: "Origination points, discount points",
        short: "Upfront lender charges stated as a percentage of the loan. One point is 1% of the loan amount.",
        body: [
          "Origination points pay the lender for making the loan; discount points buy the rate down. On a $350,000 loan, a point is $3,500. In October 2026, fix and flip lenders published 0–2 points plus flat fees (Easy Street adds a $1,995 document fee), New Silver listed 1–1.75%, and construction lenders 1–2%. Lima One lets flip borrowers defer points to the exit.",
          "On a 6- to 12-month loan, points weigh more than the rate because they’re spread over months, not years. Add points and fees to the interest you expect to pay over the hold. On a 30-year rental loan, buying the rate down pays only if you keep the loan past the break-even month.",
        ],
        formula: "Cost of points = loan amount × points ÷ 100",
        links: [
          { href: "/hard-money-loans", label: "Hard money loans" },
          { href: "/dscr-loans/rates", label: "DSCR rates" },
        ],
      },
      {
        id: "rate-lock",
        term: "Rate lock",
        short: "A lender’s commitment to hold a quoted rate for a set number of days while the loan closes.",
        body: [
          "A quoted rate isn’t yours until it’s locked. Lock periods at DSCR lenders typically run 30 to 60 days (Defy publishes 30, 45 and 60), and some products allow 75 to 90 days for an added fee. Lock once the appraisal supports your LTV and DSCR tier, and pick a lock that covers your closing date with room for delays.",
        ],
        links: [{ href: "/rates", label: "Investor loan rates" }],
      },
      {
        id: "prepayment-penalty",
        term: "Prepayment penalty (step-down)",
        aka: "Prepay, PPP",
        short: "A charge for paying off a loan early, usually a percentage of the balance that steps down each year.",
        body: [
          "The standard DSCR structure charges 5% of the prepaid balance in year 1, 4% in year 2 and so on down to 1% in year 5, then nothing: the 5-4-3-2-1 step-down. Shorter structures (3-2-1, 2-1), a flat 5% or no penalty are available, usually for a higher rate. On a $250,000 balance, paying off in year 2 of a 5-4-3-2-1 costs $10,000; in year 4, $5,000.",
          "A sale and a refinance both count as a prepayment, so pick the structure that matches how long you’ll keep the loan, not how long you’ll own the property. Short-term bridge loans often carry no penalty (Lima One, Kiavi). Some states limit prepayment penalties.",
        ],
        links: [
          { href: "/guides/dscr-prepayment-penalty", label: "Prepayment penalty guide" },
          { href: "/dscr-loans", label: "DSCR loans" },
        ],
      },
      {
        id: "yield-maintenance",
        term: "Yield maintenance",
        short: "A prepayment charge that repays the lender the interest it loses when you pay off early. Common on larger portfolio and commercial loans.",
        body: [
          "Instead of a fixed percentage, yield maintenance charges roughly the interest the lender would have earned through the protected period, discounted to today. The charge shrinks as the end of that period approaches and grows when market rates fall below your note rate. A third-party review of CoreVest’s portfolio terms (October 2026) counted yield maintenance for 54 months of a 5-year note and 114 months of a 10-year note. Get the formula in writing before you sign.",
        ],
        links: [{ href: "/rental-portfolio-loans", label: "Portfolio loans" }],
      },
      {
        id: "amortization",
        term: "Amortization and balloon",
        short: "Amortization is the schedule that pays a loan down to zero; a balloon is a lump sum due when a loan ends before it’s fully paid.",
        body: [
          "DSCR loans usually amortize over 30 years, and some lenders offer 40. Stretching the schedule lowers the payment: $270,000 at 7.375% costs $1,865 a month in principal and interest over 30 years and $1,752 over 40, which raises the DSCR on the same rent. Some portfolio loans have 5-, 7- or 10-year balloons: payments follow a longer schedule, and the remaining balance comes due at the end of the term, so you refinance or repay.",
        ],
        links: [
          { href: "/dscr-loans", label: "DSCR loans" },
          { href: "/rental-portfolio-loans", label: "Portfolio loans" },
        ],
      },
      {
        id: "interest-only",
        term: "Interest-only (IO)",
        short: "A period when the monthly payment covers only interest, with no principal paid down.",
        body: [
          "Short-term project loans (flips, bridge, construction) are interest-only for their whole 6- to 24-month term, because a sale or refinance repays the principal. On DSCR rental loans, an interest-only period, usually up to 10 years, lowers the payment and lifts the ratio: in the duplex example above it takes the DSCR from 1.18 to 1.29.",
          "The trade-off: payments build no equity during the period, and the payment rises when amortization starts, because the full balance must be repaid over the remaining years.",
        ],
        links: [
          { href: "/dscr-loans", label: "DSCR loans" },
          { href: "/bridge-loans", label: "Bridge loans" },
        ],
      },
      {
        id: "arm",
        term: "ARM (adjustable-rate mortgage)",
        aka: "5/6, 7/6 and 10/6 ARMs",
        short: "A loan with a fixed rate for an initial period, then a rate that resets at set intervals.",
        body: [
          "DSCR lenders offer 5/1, 7/1 and 10/1 ARMs (fixed for 5, 7 or 10 years, then adjusting yearly) and 5/6, 7/6 and 10/6 ARMs, which adjust every six months after the fixed period. ARMs usually start below the 30-year fixed rate. They suit a plan to sell or refinance before the first reset; the risk is a higher payment, and a lower DSCR, if you’re still holding when it adjusts.",
        ],
        links: [{ href: "/dscr-loans/rates", label: "DSCR rates" }],
      },
    ],
  },
  {
    id: "mechanics",
    eyebrow: "Rehab, construction and refinance",
    heading: "How project money moves.",
    terms: [
      {
        id: "draws",
        term: "Draws (rehab holdback)",
        aka: "Draw schedule, construction holdback",
        short: "Rehab or construction funds the lender holds back at closing and releases in stages as work is completed and inspected.",
        body: [
          "The purchase or land portion funds at closing; the work budget sits in a holdback. You finish a stage, request a draw, the lender inspects in person, by photo or by video, and pays for that stage. Published turnaround in October 2026 ran from same-day virtual inspections (LendingOne) to 24 hours (Lima One) and 48 hours (Easy Street).",
          "Interest is usually charged only on funds drawn, so the monthly bill climbs as the project progresses. Draws generally pay for work already done, so keep enough cash to fund the first stage and to cover the gap between finishing a stage and getting paid for it.",
        ],
        links: [
          { href: "/guides/fix-and-flip-draw-process", label: "Draw process guide" },
          { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
        ],
      },
      {
        id: "interest-reserve",
        term: "Interest reserve",
        short: "Part of the loan set aside at closing to make the monthly interest payments for a set period.",
        body: [
          "Common on construction and value-add bridge loans, where the property earns nothing during the work. Roc and Civic publish a 1-month interest reserve on ground-up loans. The reserve keeps payments current without cash from your pocket, but it’s funded by the loan, so it raises the balance that accrues interest and points. Ask what happens to any unused reserve at payoff.",
        ],
        links: [
          { href: "/ground-up-construction-loans", label: "Construction loans" },
          { href: "/bridge-loans", label: "Bridge loans" },
        ],
      },
      {
        id: "exit-strategy",
        term: "Exit strategy",
        short: "How a short-term loan gets paid off: by selling the property or by replacing the loan with long-term financing.",
        body: [
          "Short-term lenders underwrite the exit almost as closely as the property. A sale exit is tested against the ARV and recent comparable sales. A refinance exit is tested against what a long-term lender would lend; Roc’s stabilized bridge program, for one, looks for an exit DSCR of 1.10 or a sale. The 12- to 24-month term is the deadline. Some construction programs offer 3- or 6-month extensions (Kiavi); ask what they cost before you need one.",
        ],
        links: [
          { href: "/bridge-loans", label: "Bridge loans" },
          { href: "/hard-money-loans", label: "Hard money loans" },
        ],
      },
      {
        id: "seasoning",
        term: "Seasoning",
        short: "How long you must have owned a property before a lender will refinance it on its new appraised value.",
        body: [
          "Seasoning decides whether a refinance uses today’s appraisal or what you paid. A typical DSCR cash-out rule in October 2026 was 90 days of ownership; refinance sooner and some lenders cap the loan at your cost basis, the purchase price plus documented rehab. A few non-QM lenders advertise no seasoning, and lenders that made your rehab loan often waive it when they refinance it themselves.",
          "Seasoning matters most in a [BRRRR](#brrrr), where the whole plan rests on borrowing against the higher value.",
        ],
        links: [
          { href: "/guides/dscr-cash-out-refinance-seasoning", label: "Seasoning guide" },
          { href: "/brrrr-loans", label: "BRRRR loans" },
        ],
      },
      {
        id: "delayed-financing",
        term: "Delayed financing",
        aka: "Delayed purchase refinance",
        short: "A refinance soon after an all-cash purchase that returns the cash you paid, without waiting out the usual seasoning period.",
        body: [
          "Paying cash can win a deal or close it in days. Delayed financing then refinances the property so the cash comes back for the next one. Kiavi publishes a delayed-purchase refinance within 6 months of buying, and Angel Oak lists delayed financing too. Ask how the lender sizes it: some tie the loan to your documented purchase cost rather than a new appraisal.",
        ],
        links: [{ href: "/investment-property-cash-out-refinance", label: "Cash-out refinance" }],
      },
      {
        id: "cash-out-refinance",
        term: "Cash-out refinance",
        aka: "vs. rate-and-term refinance",
        short: "A new loan larger than the current balance on a property you own, paying you the difference in cash.",
        body: [
          "A rate-and-term refinance replaces a loan with one of about the same balance to change the rate or term. A cash-out refinance borrows more against your equity. A rental appraised at $400,000 with $180,000 owed can support a $300,000 loan at 75% LTV, about $120,000 out before closing costs, as long as the rent still covers the bigger payment at the lender’s minimum DSCR.",
          "DSCR lenders published 70–80% maximum cash-out LTV in October 2026, most at 75%, and 60% at lower scores at one lender. Easy Street treats a refinance as cash-out once proceeds pass $2,000.",
        ],
        formula: "Cash to you ≈ new loan (value × max LTV) − existing payoff − costs",
        links: [{ href: "/investment-property-cash-out-refinance", label: "Cash-out refinance" }],
      },
    ],
  },
  {
    id: "loan-types",
    eyebrow: "Loan types and strategies",
    heading: "The programs, in a sentence or two.",
    terms: [
      {
        id: "bridge-loan",
        term: "Bridge loan",
        short: "A short-term loan that finances a purchase or refinance until you sell or move into long-term financing.",
        body: [
          "Bridge loans fit properties that need little or no rehab: a rental to lease up and refinance, or a purchase that has to close faster than a long-term lender can. Published October 2026 terms: 70–85% LTV (Roc pairs 70% LTV with 85% LTC), 12- to 24-month terms, closings in 7–14 business days, no prepayment penalty at Lima One and Kiavi, and advertised rates from 8.25%.",
        ],
        links: [{ href: "/bridge-loans", label: "Bridge loans" }],
      },
      {
        id: "hard-money",
        term: "Hard money loan",
        short: "A short-term loan from a private, non-bank lender, underwritten mainly on the property and the deal rather than your income.",
        body: [
          "Hard money is a lending style more than a product: most fix and flip, bridge and construction loans are made this way. Because the lender focuses on value, plan and exit, closings take one to three weeks; Kiavi publishes 7 days on flips. Speed costs more: 2025 federal HMDA data put non-bank lenders’ median note rate on short-term investor loans at 10.25%, against 7.5% for banks.",
        ],
        links: [
          { href: "/hard-money-loans", label: "Hard money loans" },
          { href: "/guides/hard-money-vs-bridge-vs-private-money", label: "Hard money vs bridge vs private money" },
        ],
      },
      {
        id: "fix-and-flip",
        term: "Fix and flip loan",
        short: "A short-term loan to buy a property, renovate it and sell it, with the rehab budget paid out in draws.",
        body: [
          "A fix and flip loan funds most of the purchase and all of the rehab, capped by the ARV. October 2026 published terms: 85–100% of the purchase depending on experience, 100% of rehab, a 70–80% ARV cap, 6- to 24-month interest-only terms, minimum scores of 600–660 and loans from $50,000 to $5 million. Many lenders take first-time flippers, often at lower leverage; experience tiers move the rate and the share of the purchase financed.",
        ],
        links: [
          { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
          { href: "/guides/fix-and-flip-loans-no-experience", label: "Flip loans with no experience" },
        ],
      },
      {
        id: "brrrr",
        term: "BRRRR",
        aka: "Buy, rehab, rent, refinance, repeat",
        short: "An investing strategy that funds a renovation with a short-term loan, then refinances the rented property into a long-term loan to pull cash back out.",
        body: [
          "The financing comes as two loans. First a rehab loan: LendingOne published up to 95% of cost and 100% of rehab, interest-only for 9 months; Lima One’s rehab terms run 13–24 months. Then a DSCR refinance once the property is rented, at about 75% of the new value, subject to [seasoning](#seasoning). If that refinance repays the rehab loan and returns most of your cash, you repeat with the same money.",
          "Lenders reward keeping both loans in-house, with published incentives such as a 0.5% rate discount and up to 50% off origination.",
        ],
        links: [
          { href: "/brrrr-loans", label: "BRRRR loans" },
          { href: "/calculators/brrrr", label: "BRRRR calculator" },
        ],
      },
      {
        id: "ground-up-construction",
        term: "Ground-up construction loan",
        aka: "New construction loan",
        short: "A short-term loan for a new build: part of the land cost at closing, then the construction budget released in draws.",
        body: [
          "October 2026 published terms: 82.5–90% of total cost, 100% of hard costs, land advances of 60–75% (60% on unpermitted lots at Roc and Civic), a 65–75% cap on completed value, 12- to 24-month terms, and usually at least one completed ground-up project in about the last 3 years. The only published minimum score was 650 (RCN). A finished build-to-rent home can then be refinanced into a DSCR loan.",
        ],
        links: [{ href: "/ground-up-construction-loans", label: "Construction loans" }],
      },
      {
        id: "blanket-loan",
        term: "Blanket loan (portfolio loan)",
        aka: "Portfolio loan",
        short: "One loan secured by several properties, with one payment and one closing.",
        body: [
          "Rental portfolio lenders published minimums of 2–5 properties in October 2026 (LendingOne caps its program at 20), loans of about $225,000 to $5 million for smaller investors, and 60–80% LTV on purchases. Each property gets an allocated loan amount. To sell one, you pay its release price, usually above the allocation; in two SEC-filed loan agreements reviewed by a third party, release prices ran 105–120% of the allocated amount. A house allocated $160,000 at a 110% release price needs $176,000 from the sale to come off the loan.",
        ],
        links: [{ href: "/rental-portfolio-loans", label: "Portfolio loans" }],
      },
    ],
  },
  {
    id: "borrower",
    eyebrow: "Borrower, property and liability",
    heading: "Who borrows, and who’s on the hook.",
    terms: [
      {
        id: "non-owner-occupied",
        term: "Non-owner-occupied (business-purpose) loan",
        aka: "Business-purpose loan, investment property loan",
        short: "A loan on investment property that neither the borrower nor their family will live in, made for a business purpose rather than a personal one.",
        body: [
          "Every Fund Your Deal loan is a business-purpose loan on non-owner-occupied property. Federal Truth in Lending rules (Regulation Z) treat credit to buy, improve or maintain a rental property that isn’t owner-occupied as business credit, and the official commentary says that if the owner expects to live in the property more than 14 days in the coming year, it can’t be considered non-owner-occupied.",
          "Business-purpose loans fall outside many consumer-mortgage rules, so lenders typically ask you to sign an occupancy and business-purpose statement and may check where you live. A home that you or a family member will live in needs a residential mortgage instead. This is a general description, not legal advice.",
        ],
        links: [
          { href: "/loans", label: "All investor loans" },
          { href: "/disclosures", label: "Disclosures" },
        ],
      },
      {
        id: "llc",
        term: "LLC (borrowing entity)",
        aka: "Vesting in an LLC",
        short: "Taking title and the loan in a limited liability company or corporation instead of your personal name.",
        body: [
          "Investor lenders lend to entities, and Lima One, Roc and Civic require one on their rental loans. Lenders typically want the entity’s formation papers and operating agreement, its IRS EIN confirmation and a current good-standing certificate from the state, plus a [personal guarantee](#personal-guarantee) from the owners. Whether to use an LLC, and how to set it up, is a legal and tax question for your attorney or CPA.",
        ],
        links: [{ href: "/guides/dscr-loan-llc", label: "DSCR loans in an LLC" }],
      },
      {
        id: "personal-guarantee",
        term: "Personal guarantee",
        aka: "Guaranty",
        short: "A promise by the owners of a borrowing LLC or corporation to repay the loan personally if the entity doesn’t.",
        body: [
          "Lending to an LLC rarely means lending to the LLC alone. Griffin, for example, lends to LLCs with a personal guarantee from the owners, and most investor lenders do the same. The guarantee is why your credit score and reserves still matter on an entity loan.",
        ],
        links: [{ href: "/guides/dscr-loan-llc", label: "DSCR loans in an LLC" }],
      },
      {
        id: "recourse",
        term: "Recourse vs. non-recourse",
        short: "On a recourse loan the lender can pursue the borrower or guarantor for any shortfall after a foreclosure; on a non-recourse loan it is limited to the property.",
        body: [
          "Full recourse is common on short-term investor loans. Rental portfolio loans vary: RCN and Lima One describe theirs as non-recourse, LendingOne offers both, and Roc and Civic lend full recourse. Non-recourse loans normally keep carve-outs, often called bad-boy guarantees, that restore personal liability for acts such as fraud or transferring the property without consent. The exact terms are in the guaranty, which your attorney should read.",
        ],
        links: [{ href: "/rental-portfolio-loans", label: "Portfolio loans" }],
      },
      {
        id: "cross-collateralization",
        term: "Cross-collateralization",
        short: "Pledging a property as security for more than its own loan, so several properties back the same debt.",
        body: [
          "If a cross-collateralized debt goes into default, every pledged property is at risk, and you can’t sell or refinance one without the lender releasing its lien. Lenders like it because strong properties support weaker ones; investors accept it to borrow more, or to finance several rentals in one closing. It’s built into every [blanket loan](#blanket-loan). Read the release terms before you sign.",
        ],
        links: [{ href: "/rental-portfolio-loans", label: "Portfolio loans" }],
      },
    ],
  },
];

const ALL_TERMS: Term[] = [DSCR, ...GROUPS.flatMap((g) => g.terms)];

const FAQ = [
  {
    q: "What does DSCR stand for in real estate?",
    a: "Debt service coverage ratio. For a 1–4 unit rental, it’s the monthly qualifying rent divided by the monthly payment, including principal, interest, taxes, insurance and association dues (PITIA). Lenders use it to judge whether a rental can carry its own loan, which is why DSCR loans don’t need your tax returns or pay stubs. At 1.00 the rent exactly covers the payment.",
  },
  {
    q: "How do you calculate DSCR on a duplex or fourplex?",
    a: "Add the qualifying rent for every unit, then divide by the single monthly PITIA for the whole property. Each unit’s rent is usually the lower of its lease and the appraiser’s market rent, and some lenders count vacant units at a discount; Roc and Civic use 90% of market rent. A $2,800 total on a $2,375 payment is a DSCR of 1.18.",
  },
  {
    q: "What is the difference between LTV and LTC?",
    a: "LTV divides the loan by the property’s value; LTC divides it by your total cost, purchase plus rehab or construction. Rental and bridge loans are sized on LTV. Fix and flip and construction loans use LTC, because the value before the work doesn’t reflect what you’re spending, and they add a cap based on after-repair value. The lowest limit sets the loan.",
  },
  {
    q: "What does 75% of ARV mean on a flip loan?",
    a: "It’s the lender’s ceiling on the total loan, purchase and rehab together, at 75% of the appraiser’s after-repair value. With a $320,000 ARV the loan can’t pass $240,000, however much of the purchase and rehab the lender would otherwise fund. Fix and flip lenders published caps of 70–80% of ARV in October 2026, lower for new investors and heavy rehabs.",
  },
  {
    q: "What does non-owner-occupied mean?",
    a: "It means the property is held as an investment: you and your family won’t live there. Under the federal Truth in Lending commentary, if the owner expects to occupy a property for more than 14 days in the coming year, it can’t be considered non-owner-occupied. Business-purpose lenders, including Fund Your Deal, lend only on non-owner-occupied property. A home you’ll live in needs a residential mortgage.",
  },
  {
    q: "What is a 5-4-3-2-1 prepayment penalty?",
    a: "A step-down penalty for paying a loan off early: 5% of the balance you prepay in the first year, 4% in the second, then 3%, 2% and 1%, and nothing after year five. It’s the most common structure on DSCR loans, and both a sale and a refinance trigger it. Shorter versions such as 3-2-1 are available, usually for a higher rate.",
  },
  {
    q: "What is cross-collateralization in real estate?",
    a: "Pledging more than one property to secure a debt, so each property backs more than its own share. A blanket loan on five rentals is the common example: a default puts all five at risk, and selling one requires the lender to release its lien, usually after you pay a release price above that property’s allocated loan amount.",
  },
];

const SOURCES = [
  { label: "Fannie Mae Selling Guide B3-6-02 — Debt-to-income ratios", url: "https://selling-guide.fanniemae.com/sel/b3-6-02/debt-income-ratios" },
  { label: "Freddie Mac — UAD and forms redesign FAQs", url: "https://sf.freddiemac.com/faqs/uad-and-forms-redesign" },
  { label: "eCFR — 12 CFR 1026.3, exempt transactions", url: "https://www.ecfr.gov/current/title-12/part-1026/section-1026.3" },
  { label: "eCFR — Regulation Z official interpretations (Supplement I)", url: "https://www.ecfr.gov/current/title-12/part-1026/appendix-Supplement%20I%20to%20Part%201026" },
  { label: "LendingOne — How DSCR loan rates are determined (Sept 22, 2026)", url: "https://lendingone.com/insight/how-are-dscr-loan-interest-rates-determined/" },
  { label: "LendingOne — Fix to rent loans", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
  { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
  { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
  { label: "Kiavi — New construction loans", url: "https://www.kiavi.com/loans/new-construction-infill" },
  { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
  { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
  { label: "Lima One — Fix and flip loans", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
  { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
  { label: "Roc Capital — Ground-up construction", url: "https://roccapital.com/ground-up" },
  { label: "Roc Capital — Stabilized bridge", url: "https://roccapital.com/stabilized-bridge" },
  { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
  { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
  { label: "Easy Street Capital — Short-term rental financing", url: "https://www.easystreetcap.com/short-term-rental-financing/" },
  { label: "Defy Mortgage — DSCR loan rates (Sept 21, 2026)", url: "https://defymortgage.com/dscr-loan-rates/" },
  { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
  { label: "Angel Oak — Foreign national program", url: "https://angeloakms.com/programs/foreign-national-mortgage-program/" },
  { label: "New Silver — Fix and flip loans", url: "https://newsilver.com/fix-and-flip-loans/" },
  { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
  { label: "CrowdfundedWealth — Hard money loan rates 2026 (2025 HMDA data)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  { label: "CrowdfundedWealth — Blanket loans for rental portfolios (Oct 7, 2026)", url: "https://www.crowdfundedwealth.com/articles/blanket-loan-rental-portfolio" },
];

/** Inline formatting in glossary text: **bold** and [label](/path or #anchor). */
function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<strong key={m.index}>{m[1]}</strong>);
    else
      parts.push(
        m[3].startsWith("#") ? (
          <a key={m.index} href={m[3]}>
            {m[2]}
          </a>
        ) : (
          <Link key={m.index} href={m[3]}>
            {m[2]}
          </Link>
        )
      );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

const LINK = "font-semibold text-brand underline underline-offset-2";
const TEXT = "[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink";

function TermEntry({ t }: { t: Term }) {
  return (
    <article id={t.id} className="scroll-mt-24 border-t border-line py-8 first:border-t-0 first:pt-0">
      <h3 className="text-[23px] font-semibold tracking-[-0.02em]">{t.term}</h3>
      {t.aka && <p className="mt-1 font-mono text-[13px] text-muted">{t.aka}</p>}
      <div className={`mt-3 flex flex-col gap-3 text-[16px] leading-relaxed text-ink-2 ${TEXT}`}>
        <p className="text-ink">{t.short}</p>
        {t.body.map((p) => (
          <p key={p.slice(0, 40)}>
            <Inline text={p} />
          </p>
        ))}
        {t.formula && <Formula>{t.formula}</Formula>}
      </div>
      <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
        {t.links.map((l) => (
          <Link key={l.href} href={l.href} className={LINK}>
            {l.label} →
          </Link>
        ))}
      </p>
    </article>
  );
}

export default function Page() {
  const pageUrl = `${SITE.url}/glossary`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "@id": `${pageUrl}#terms`,
          name: "Investor loan glossary",
          description: META_DESCRIPTION,
          url: pageUrl,
          inLanguage: "en-US",
          dateModified: UPDATED,
          publisher: { "@id": `${SITE.url}/#org` },
          hasDefinedTerm: ALL_TERMS.map((t) => ({
            "@type": "DefinedTerm",
            "@id": `${pageUrl}#${t.id}`,
            name: t.term,
            ...(t.aka ? { alternateName: t.aka } : {}),
            description: t.short,
            url: `${pageUrl}#${t.id}`,
            inDefinedTermSet: { "@id": `${pageUrl}#terms` },
          })),
        }}
      />
      <PageIntro crumbs={[{ href: "/", label: "Home" }, { label: "Glossary" }]} eyebrow={`${ALL_TERMS.length} terms · Investment property loans`} title="Investor loan glossary: what the terms on your term sheet mean.">
        <p>
          This investor loan glossary explains the words lenders use on business-purpose loans for rentals, flips and new builds, starting with DSCR, the ratio that decides most
          rental loans. Each entry gives the plain-English meaning, the formula where there is one, the ranges lenders published in October 2026 and a link to the loan program it
          belongs to.
        </p>
      </PageIntro>

      <Container className="pb-12 pt-2">
        <nav aria-label="Glossary terms" className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6">
          {[{ id: "start", eyebrow: "Start here", terms: [DSCR] }, ...GROUPS].map((g) => (
            <div key={g.id} className="grid gap-2 sm:grid-cols-[220px_1fr] sm:gap-6">
              <span className="font-mono text-xs uppercase tracking-[0.06em] text-muted sm:pt-1">{g.eyebrow}</span>
              <ul className="flex flex-wrap gap-2">
                {g.terms.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="inline-block rounded-full border border-line px-3 py-1 text-sm hover:border-ink">
                      {t.term.replace(/ \(.*\)$/, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      <section id="dscr" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className={`flex flex-col gap-4 text-[17px] leading-relaxed text-ink-2 ${TEXT}`}>
            <Eyebrow>Start here</Eyebrow>
            <H2>DSCR (debt service coverage ratio)</H2>
            <p>
              <strong>DSCR, the debt service coverage ratio, measures whether a rental pays for itself: the property’s monthly rent divided by its monthly payment.</strong> The payment is the full{" "}
              <a href="#pitia">PITIA</a>: principal, interest, property taxes, insurance and any HOA or association dues. At 1.00 the rent exactly covers the payment. At 1.20
              there’s 20% more rent than payment; at 0.90 the rent falls 10% short.
            </p>
            <p>
              A <Link href="/dscr-loans">DSCR loan</Link> uses this ratio in place of your personal income, so there are no tax returns, pay stubs or{" "}
              <a href="#dti">debt-to-income ratio</a> to qualify on. The ratio shapes the loan as well as the approval: a stronger one earns better pricing, and the lender’s
              minimum caps the payment the rent can carry, which caps the loan.
            </p>
            <Formula>{DSCR.formula}</Formula>

            <h3 className="mt-4 text-[21px] font-semibold text-ink">How lenders count the rent</h3>
            <p>
              Most lenders take whichever is lower: the lease you’ve signed or the market rent the appraiser estimates on the <a href="#rent-schedule">rent schedule</a>.
              Kiavi lets a higher lease count up to 110% of market rent, and Roc and Civic value a vacant property’s rent at 90% of market. On a 2–4 unit
              property, add every unit’s rent and divide by the one payment. Short-term rentals use bookings or a projection instead; see{" "}
              <a href="#str-income">short-term rental income</a>.
            </p>

            <h3 className="mt-4 text-[21px] font-semibold text-ink">Reading the duplex example</h3>
            <p>
              The leases total $2,900, but market rent comes in at $2,800, so most lenders use $2,800: $2,800 ÷ $2,375 = 1.18. Under Kiavi’s 110% rule the full $2,900 counts
              (110% of $2,800 is $3,080), and the ratio is 1.22. Change the payment instead of the rent and the ratio moves too: a 40-year term cuts principal and interest to
              $1,752 (DSCR 1.24), and a 10-year <a href="#interest-only">interest-only</a> period cuts the payment to $1,659 of interest (DSCR 1.29).
            </p>

            <h3 className="mt-4 text-[21px] font-semibold text-ink">What lenders look for</h3>
            <ul className="flex list-disc flex-col gap-2.5 pl-6">
              <li>
                <strong>1.00 or higher opens most programs.</strong> In October 2026, conservative lenders published minimums of 1.00–1.05 (Roc and Civic 1.05). Lower floors
                were common too: Kiavi 0.80, LendingOne and Defy 0.75, and a few no-ratio programs with lower leverage.
              </li>
              <li>
                <strong>Above 1.25 is where pricing improves.</strong> LendingOne says ratios above 1.25 are often viewed favorably and those below 1.0 face added underwriting
                scrutiny. Below 1.00, expect a bigger down payment, a higher rate or both.
              </li>
              <li>
                <strong>Apartments and portfolios run stricter.</strong> Published minimums on 5+ unit loans were 1.20–1.25x. Some portfolio lenders measure net cash flow after
                operating expenses rather than gross rent; Roc and Civic set 1.05 on that basis.
              </li>
              <li>
                <strong>Commercial math is annual.</strong> On 5+ unit and commercial property, DSCR is usually net operating income divided by annual debt service: the same
                idea with different inputs.
              </li>
              <li>
                <strong>It caps the loan, not just the rate.</strong> Lenders lend the lower of their <a href="#ltv">LTV</a> limit and the loan whose payment keeps the ratio
                at their minimum. The <Link href="/calculators/dscr">DSCR calculator</Link> shows the largest loan at 1.00 and 1.25.
              </li>
            </ul>
            <p className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              <Link href="/dscr-loans" className={LINK}>
                DSCR loans →
              </Link>
              <Link href="/dscr-loans/requirements" className={LINK}>
                DSCR requirements →
              </Link>
              <Link href="/calculators/dscr" className={LINK}>
                DSCR calculator →
              </Link>
            </p>
          </div>
          <div className="lg:sticky lg:top-24">
            <ExampleCard
              example={{
                title: "WORKED EXAMPLE · DUPLEX",
                rows: [
                  ["Leases, 2 units", "$2,900"],
                  ["Market rent (rent schedule)", "$2,800"],
                  ["Qualifying rent (lower)", "$2,800"],
                  ["Principal & interest", "$1,865"],
                  ["Property taxes", "$360"],
                  ["Insurance", "$150"],
                  ["HOA", "$0"],
                  ["PITIA", "$2,375"],
                ],
                result: { label: "DSCR", value: "1.18" },
                note: "$360,000 duplex bought with 25% down. Loan: $270,000, 30-year fixed at 7.375%, the 2025 HMDA median for 30-year investor loans. Illustrative, not a quote.",
                dscr: 1.18,
              }}
            />
          </div>
        </Container>
      </section>

      {GROUPS.map((g, i) => (
        <section key={g.id} id={g.id} className={`scroll-mt-20 border-t border-line ${i % 2 ? "bg-white" : ""}`}>
          <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div className="flex flex-col gap-3.5 lg:sticky lg:top-24">
              <Eyebrow>{g.eyebrow}</Eyebrow>
              <H2>{g.heading}</H2>
            </div>
            <div className="flex flex-col">
              {g.terms.map((t) => (
                <TermEntry key={t.id} t={t} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <FaqSection heading="Investor loan terms: common questions" items={FAQ}>
        <p className="font-mono text-xs leading-relaxed text-muted">
          Ranges are as lenders published them on their program pages in October 2026 and describe the market, not an offer. General information only, not legal or tax advice.
        </p>
      </FaqSection>

      <Container className="pb-[72px]">
        <div className="flex flex-wrap items-center justify-between gap-7 rounded-3xl bg-brand p-[clamp(32px,5vw,64px)] text-white">
          <div className="flex max-w-[600px] flex-col gap-3">
            <h2 className="text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em]">Know the terms. Now get the loan, fast.</h2>
            <p className="text-[17px] leading-relaxed text-white/85">About 60 seconds to apply, no credit pull. Then a loan specialist calls with your terms.</p>
          </div>
          <ButtonLink href="/get-funding" variant="light" size="lg">
            {SITE.cta}
          </ButtonLink>
        </div>
      </Container>

      <Sources sources={SOURCES} updated={UPDATED} />
    </>
  );
}
