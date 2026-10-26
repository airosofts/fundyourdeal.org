import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/LeadForm";
import { ExampleCard, Formula } from "@/components/sections";
import { ButtonLink, Check, Container, Eyebrow, H2 } from "@/components/ui";
import { SITE } from "@/lib/site";

// Fund Your Deal homepage, deal-first. Every market figure is a published lender term from
// docs/research/loan-terms-2026-10.md (pulled 2026-10-19); the source codes in the comments
// (K3, L3, RC5, D1, HM…) are listed at the bottom of that file. Worked examples are
// illustrative deals: their prices, rents, taxes and the costs marked "assumed" are inputs,
// not market data. The arithmetic for both examples is written out next to each one.

export const metadata: Metadata = {
  title: { absolute: `Investor Loans for Flips, Bridge and BRRRR | ${SITE.name}` },
  description:
    "Fix and flip, bridge, BRRRR and new-build loans for real estate investors, plus the rental refinance out. See what your deal needs and how fast it closes.",
  alternates: { canonical: "/" },
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

const CALL_NUMBERS: [string, string][] = [
  ["Price", "What you're paying, or the payoff if you already own it."],
  ["Rehab", "The scope of work and what it costs, line by line if you have it."],
  ["ARV or rent", "What it sells for after the work, or what it rents for if you keep it."],
  ["Closing date", "The date on the contract or the auction terms. It sets the pace for everything else."],
];

/* ------------------------------------------------------------------ */
/* What's your deal?                                                    */
/* ------------------------------------------------------------------ */

type Deal = {
  key: string;
  label: string;
  situation: ReactNode;
  loan: string;
  href: string;
  stat: string;
  statText: string;
  cta: string;
  apply: string;
};

const DEALS: Deal[] = [
  {
    key: "flip",
    label: "Flip",
    situation: "You're buying a tired house to renovate and resell, and the purchase and the work both need funding.",
    loan: "Fix and flip loan",
    href: "/fix-and-flip-loans",
    stat: "100%",
    statText: "of the rehab budget financed at most fix and flip lenders, paid out in draws as the work gets done.", // K3, L3, R1, LO2, RC3, C3, E2
    cta: "Fund my flip",
    apply: "/get-funding?loan=fix-and-flip",
  },
  {
    key: "bridge",
    label: "Bridge",
    situation: "You have to close now and will sell, lease up or refinance later. The house needs little or no work.",
    loan: "Bridge loan",
    href: "/bridge-loans",
    stat: "12–24 mo",
    statText: "of runway on published bridge terms to reach the sale or the refinance that pays it off.", // RC5 12; L5 13/19; K4 12/18/24
    cta: "Fund my bridge loan",
    apply: "/get-funding?loan=bridge",
  },
  {
    key: "brrrr",
    label: "BRRRR",
    situation: "You're buying a rental that needs work, fixing it, renting it out and refinancing to get your cash back.",
    loan: "BRRRR loan",
    href: "/brrrr-loans",
    stat: "~75%",
    statText: "of the after-repair value is what the refinance typically lends. That figure sets how much of your cash comes back out.", // LO5
    cta: "Get my BRRRR funded",
    apply: "/get-funding?loan=brrrr",
  },
  {
    key: "build",
    label: "New build",
    situation: "You're building from a bare lot: a spec house to sell, or a new rental you plan to hold.",
    loan: "Ground-up construction loan",
    href: "/ground-up-construction-loans",
    stat: "Up to 90%",
    statText: "of total project cost at several construction lenders, with the build money released in stages.", // L4, LO3, NS 90% LTC
    cta: "Fund my build",
    apply: "/get-funding?loan=construction",
  },
  {
    key: "refi",
    label: "Rental refinance",
    situation: (
      <>
        The work is done and you&apos;d rather keep it. A{" "}
        <Link href="/glossary#dscr" className="underline underline-offset-2">
          DSCR (debt service coverage ratio)
        </Link>{" "}
        loan qualifies on one number: what the house rents for each month, divided by its monthly payment. Your income stays out of it.
      </>
    ),
    loan: "Rental cash-out refinance",
    href: "/investment-property-cash-out-refinance",
    stat: "75%",
    statText: "of appraised value: the cash-out ceiling rental lenders publish most often.", // L1, LO1, E1, RC1, C1 75%
    cta: "Get rental funding",
    apply: "/get-funding?loan=cash-out-refinance",
  },
];

/* ------------------------------------------------------------------ */
/* What each loan needs                                                 */
/* ------------------------------------------------------------------ */

type Needs = { title: string; href: string; rows: [string, string][] };

const NEEDS: Needs[] = [
  {
    title: "Fix and flip and hard money",
    href: "/fix-and-flip-loans",
    rows: [
      // E2 600; R1, NS 650; L3 660
      ["Credit", "Published minimums of 600–660, the lowest floors of any loan on this page."],
      // RC3, C3, NS none; L3 1 exit in 36 months; R1 tiers
      ["Experience", "Often not required. Tiered lenders raise leverage as completed flips pile up, and one asks for a finished exit in the past 36 months."],
      // R1 85–100%, K3 100%, L3 95%, LO2 92.5%, RC3/C3, NS, E2 90%; 100% rehab; ARV caps K3 80%, RC3/C3, E2, NS 75%, R1 60–75%
      ["Leverage", "85–100% of the price and every dollar of the rehab, as long as the total stays under 70–80% of the after-repair value (ARV). Newer investors and heavy rehabs can see 60–70%."],
      // NS 1–1.75%; E2 0–2 points + $1,995 doc fee
      ["Cash to close", "About 10% of the price at 90% leverage, 0–2 points, a lender document fee ($1,995 at one), title and insurance. Then interest-only payments until you sell."],
    ],
  },
  {
    title: "Bridge",
    href: "/bridge-loans",
    rows: [
      // RC5 660; L5 700
      ["Credit", "660–700 at the bridge lenders that publish a minimum."],
      // RC5 exit DSCR 1.10 or sale
      ["Experience", "Expect more questions about your exit than your history. One lender wants a refinance exit to show a DSCR of at least 1.10."],
      // RC5 70% LTV / 85% LTC; L5 85%
      ["Leverage", "70–85% of current value, or up to 85% of cost at one lender."],
      // L5, K4 no prepayment penalty
      ["Cash to close", "The 15–30% of value the loan doesn't cover, plus closing costs. At least two programs charge no prepayment penalty, so an early payoff costs nothing extra."],
    ],
  },
  {
    title: "BRRRR",
    href: "/brrrr-loans",
    rows: [
      // flip 600–660 (E2, R1, NS, L3); DSCR 620–680 (G1 … A1)
      ["Credit", "The flip range (600–660) for the rehab loan, then the rental range (620–680) for the refinance."],
      // L1, RC1, C1, D1 none for rental loans
      ["Experience", "Weighed like a flip on the rehab loan. The rental refinance usually asks for none."],
      // LO5 up to 95% LTC + 100% rehab; ~75% of ARV refi
      ["Leverage", "Up to 95% of the purchase plus 100% of the rehab on the first loan; about 75% of ARV on the refinance."],
      // 100% − 95% (LO5) = 5% of the price
      ["Cash to close", "Around 5% of the price at 95% leverage, plus points, fees and carry. A strong appraisal at the refinance can hand much of it back."],
    ],
  },
  {
    title: "Ground-up construction",
    href: "/ground-up-construction-loans",
    rows: [
      // R1 650
      ["Credit", "650 at the one lender that publishes a floor."],
      // LO3; RC4/C4; L4
      ["Experience", "Most want proof you've finished a ground-up build of your own within about three years."],
      // K5, RC4/C4 85% (90% experienced), R1 82.5–90%, L4, LO3, NS 90%; L4, RC4/C4 100% hard costs; RC4/C4 75% land (60% unpermitted), L4 60%; ARV K5, LO3, RC4/C4 70%, L4 75%, R1 65–75%
      ["Leverage", "82.5–90% of total cost and 100% of hard costs, with 60–75% of the lot advanced at closing and a cap of 65–75% of completed value."],
      // NS, LO3 1–2 points; RC4/C4 1-month interest reserve
      ["Cash to close", "Your 10–17.5% share of cost, front-loaded because the lot is only partly financed. Add 1–2 points; two lenders also hold back a month of interest."],
    ],
  },
  {
    title: "Rental loan (DSCR), purchase or refinance",
    href: "/dscr-loans",
    rows: [
      // G1 620; E1, D1 640; L1, R1, RC1, C1 660; A1 680
      ["Credit", "620–680, with most published minimums at 640–660."],
      // L1, RC1, C1, D1 none; E1 first-time OK
      ["Experience", "Usually none, and at least one lender says first-time investors are fine."],
      // K1, L1, LO1, E1, RC1, C1 80%; D1, G1 85% at 740+, A1 720+; cash-out L1, LO1, E1, RC1, C1 75%, G1, D1 80%
      ["Leverage", "Purchases: up to 80% of value, rising to 85% for 720–740+ scores at a handful of lenders. Cash-outs: 70–80%, most often 75%."],
      // K1 none; D1 3 months; E1 3–9 months
      ["Cash to close", "20% down on a purchase, 15% at the top credit tier, plus closing costs and anywhere from zero to 9 months of payments held in reserve."],
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Worked flip                                                          */
/* ------------------------------------------------------------------ */

// The deal: buy $164,000, rehab $61,000, ARV $292,000, five months closing to sale.
// Lender terms: 90% of price (RC3/C3, NS, E2), 100% of rehab, 75% ARV cap (RC3/C3, E2, NS),
// 9.99% interest-only (assumed; about the 2025 HMDA short-term median of 10%, HM), 2 points + $1,995 doc fee (E2).
//   Loan: 0.90 × 164,000 = 147,600; + 61,000 = 208,600. Cap: 0.75 × 292,000 = 219,000 (room 10,400).
//   Cap binds below 208,600 ÷ 0.75 = $278,133.
//   Cash at closing: 16,400 down + 4,172 points (2% × 208,600) + 1,995 + 3,800 title (assumed) = 26,367.
//   Interest: 208,600 × 0.0999 ÷ 12 = 1,736.60/mo × 5 = 8,683 (charged on the full loan: conservative).
//   Holding: 450 × 5 = 2,250 (assumed). Cash in: 26,367 + 8,683 + 2,250 = 37,300.
//   Sale: 292,000 − 17,520 (6% assumed) − 208,600 payoff = 65,880. Profit: 65,880 − 37,300 = 28,580.
//   Return on cash: 28,580 ÷ 37,300 = 76.6%. Profit ÷ sale: 9.8%.
//   Break-even sale: (263,420 − 17,520) ÷ 0.94 = 261,596 (10.4% under 292,000).
//   Appraisal at 270,000: cap 202,500, loan cut 6,100; points fall 122, so cash at closing +5,978.
const FLIP_EXAMPLE = {
  title: "WORKED FLIP · $164,000 RANCH, SOLD IN 5 MONTHS",
  rows: [
    ["Purchase price", "$164,000"],
    ["Rehab budget", "$61,000"],
    ["Loan: 90% of price + all of the rehab", "$208,600"],
    ["ARV cap: 75% of $292,000", "$219,000"],
    ["Cash at closing", "$26,367"],
    ["Interest and holding, 5 months", "$10,933"],
    ["Your total cash in the deal", "$37,300"],
  ] as [string, string][],
  result: { label: "Profit on a $292,000 sale", value: "$28,580" },
  note: "An assumed 9.99% interest-only, about the 10% median on 2025 short-term investor loans, plus 2 points and a $1,995 document fee. Title and closing ($3,800), holding ($450 a month) and selling costs (6%) are assumptions: swap in your own quotes. Illustrative, not a rate quote.",
};

const FLIP_STEPS: [string, string][] = [
  [
    "Size it two ways, keep the lower",
    "90% of $164,000 is $147,600. Add the full $61,000 rehab and the request is $208,600. The ARV cap is 75% of $292,000, or $219,000. The request fits under it with $10,400 to spare, so the loan is the full $208,600.",
  ],
  [
    "Count the cash at the closing table",
    "The 10% of the price the lender doesn't advance is $16,400. Two points on $208,600 is $4,172, the document fee is $1,995, and title, recording and the first insurance premium come to an assumed $3,800. Total: $26,367.",
  ],
  [
    "Carry it to the sale",
    "Interest at 9.99% on $208,600 is $1,737 a month, or $8,683 over five months. That's on the high side: rehab money arrives in draws, and you pay interest only on what has been drawn. Taxes, insurance and utilities at $450 a month add $2,250, for $10,933 in all.",
  ],
  [
    "Sell, pay off, keep the rest",
    "A $292,000 sale less 6% selling costs ($17,520) and the $208,600 payoff returns $65,880. Subtract the $37,300 you put in and the profit is $28,580: about 77% on your cash in five months, or 9.8% of the sale price.",
  ],
];

/* ------------------------------------------------------------------ */
/* Closing speed                                                        */
/* ------------------------------------------------------------------ */

type Speed = { loan: string; figure: string; detail: string; ready: string };

const SPEED: Speed[] = [
  {
    // K4, LO6
    loan: "Bridge",
    figure: "7–14 business days",
    detail: "With light or no rehab there's no budget to review, so the valuation and title search are most of the work.",
    ready: "Send the contract, your entity papers and proof of funds the day you apply.",
  },
  {
    // K3 7 days; LO2 7–10 business days; R1 10 business days; L3 ~3 weeks
    loan: "Fix and flip, hard money",
    figure: "7 days at the fastest",
    detail: "Other published times: 7–10 business days, 10 business days and about three weeks. The valuation and the rehab budget review set the pace.",
    ready: "A line-item scope of work sent with the contract saves more time than anything else.",
  },
  {
    // L3 24 hours; E2 48 hours; LO2 same-day virtual
    loan: "Rehab draws, once you own it",
    figure: "24–48 hours",
    detail: "From inspection to money at the lenders that publish it, and same day at one that inspects virtually. You pay interest only on what has been drawn.",
    ready: "Photograph finished work and request each draw as soon as a stage is done.",
  },
  {
    // D1 14–21 days; E1 30 days; G1 average 34 days
    loan: "Rental loan (DSCR), purchase or refinance",
    figure: "14–21 days at the fastest",
    detail: "Other lenders publish 30 days and a 34-day average. The appraisal and its rent schedule are the longest wait.",
    ready: "Have the lease signed and an insurance quote in hand before the appraiser visits.",
  },
  {
    // L1, L3 in-house seasoning waived; RC1/C1, K1 90 days
    loan: "BRRRR",
    figure: "Two closings",
    detail: "The rehab loan closes on the flip clock. The refinance follows on the rental clock, with no seasoning wait when the same lender refinances you, or after about 90 days of ownership elsewhere.",
    ready: "Line up the tenant while the last trades finish, so the refinance isn't waiting on a lease.",
  },
  {
    // L4, LO3 draws 1–2 days by photo or virtual inspection
    loan: "Ground-up construction",
    figure: "Rarely published",
    detail: "Underwriting covers the plans, permits, budget and your past builds before anything closes. Once you're building, the faster lenders fund each draw in 1–2 days off a photo or virtual inspection.",
    ready: "Bring permits issued, or a firm date for them, plus your builder's contract and schedule.",
  },
];

/* ------------------------------------------------------------------ */
/* How it works                                                         */
/* ------------------------------------------------------------------ */

const STEPS: [string, string][] = [
  [
    "Your name and number",
    "The first screen asks for your name, your mobile number, an email if you want to add one, and your OK to be called and texted. That's what lets a loan specialist reach you while the deal is still live.",
  ],
  [
    "A few quick taps",
    "Then one question per screen: whether anyone will live in the property, the loan type, buying or refinancing, the property type, the amount, your credit range and, on project loans, how many deals you've done. The ZIP code goes last. No documents, no credit pull.",
  ],
  ["A call about the deal", "A loan specialist calls you back to go through the price, the rehab, the ARV or rent, and your closing date. Keep the contract nearby if you have one."],
  ["Your terms", "You hear the leverage, the rate, the points and what you'd bring to closing, so you can check the deal still pencils before you commit to anything."],
  ["Close and fund", "Valuation, title and documents, then the closing. On rehab and construction loans, the work money follows in draws after each inspection."],
];

/* ------------------------------------------------------------------ */
/* Rental exit                                                          */
/* ------------------------------------------------------------------ */

// Same ranch, kept. Refinance at 75% of a $292,000 appraisal (LO5; L1, LO1, E1, RC1, C1) = 219,000.
// 7.5% over 360 months: r = 0.00625; P&I = 219,000 × 0.00625 ÷ (1 − 1.00625^−360) = $1,531.28.
// PITIA = 1,531 + 260 tax + 140 insurance (assumed) = 1,931. DSCR = 2,250 ÷ 1,931 = 1.165.
// Rate: inside LendingOne's 7–9% average investor rate (LO7, 2026-09-22), just above the 7.375% 2025 HMDA 30-year investor median (HM).
// Interest-only: 219,000 × 0.00625 = 1,368.75 → PITIA 1,769 → 1.272.
// Vacant at 90% of market rent (RC1/C1): 2,025 ÷ 1,931 = 1.049, under RC1/C1's 1.05 minimum.
// Seasoning: five months of ownership at the refinance is past the 90 days RC1/C1 and K1 ask for.
const RENTAL_EXAMPLE = {
  title: "SAME RANCH, KEPT AS A RENTAL",
  rows: [
    ["Appraised value after the rehab", "$292,000"],
    ["New rental loan, 75% of value", "$219,000"],
    ["Flip loan it pays off", "$208,600"],
    ["Principal and interest, 7.5%, 30 years", "$1,531"],
    ["Taxes and insurance", "$400"],
    ["Full monthly payment (PITIA)", "$1,931"],
  ] as [string, string][],
  result: { label: "DSCR = $2,250 rent ÷ $1,931", value: "1.17" },
  note: "7.5% sits inside the 7–9% average investor rate one lender reported in September 2026. Taxes ($260 a month) and insurance ($140) are assumptions. Illustrative only.",
  dscr: 1.17,
};

const RENTAL_LEVERS: [string, string][] = [
  // L1, R1 1.00; RC1/C1 1.05; K1 0.8; LO1, D1 0.75
  ["The minimum", "For one rental, October 2026 minimums spanned 0.75 to 1.05, with 1.00 the usual line. At 1.17, this house clears every one of them."],
  // K1 lower of lease and 110% of market rent; RC1/C1 90% of market rent if vacant
  [
    "Which rent counts",
    "Lenders use the lease or the appraiser's market rent, whichever is lower, and one lets a lease run up to 110% of market. Refinance it empty and two lenders count only 90% of market rent: $2,025 here, a 1.049 ratio, just under their 1.05 floor. Sign the lease first.",
  ],
  // IO usually 10 years (research table §1)
  ["Interest-only", "Where it's offered, usually for the first 10 years, interest-only cuts the loan payment to $1,369 and PITIA to $1,769. Same rent, a 1.27 ratio."],
  // L1, L3 in-house seasoning waived; RC1/C1, K1 90 days (K1 FAQ: cash-out after 90 days of ownership, checked 2026-10-26)
  [
    "Timing",
    "When the lender that made the rehab loan also does the refinance, seasoning is usually waived. Elsewhere, most lenders want the deed in your name for about 90 days before they'll do a cash-out. This ranch took five months to finish, so it would be well past that.",
  ],
];

/* ------------------------------------------------------------------ */
/* Guides                                                               */
/* ------------------------------------------------------------------ */

const GUIDE_GROUPS: { tag: string; items: [string, string][] }[] = [
  {
    tag: "Fix & flip",
    items: [
      ["how-to-calculate-arv", "Pricing the finished house: ARV from comps, and how the lender checks it"],
      ["rehab-budget-for-lenders", "The scope of work and rehab budget an underwriter will actually fund"],
      ["cash-needed-to-flip-a-house", "Cash to flip a house: down payment, rehab gap, closing and carry"],
    ],
  },
  {
    tag: "Financing basics",
    items: [
      ["how-hard-money-loans-work", "Hard money, decoded: points, rates, interest-only months and the balloon"],
      ["closing-an-investor-loan-fast", "What really sets your closing date, and how to be deal-ready early"],
      ["bridge-loan-exit-strategies", "Bridge loan exits: sale, refinance or lease-up, and what if it slips"],
      ["ltv-vs-ltc-vs-arv", "LTV, LTC and ARV side by side: three ways a loan gets its size"],
      ["investor-loan-points-and-fees", "Points, origination, extensions and exit fees on investor loans"],
    ],
  },
  {
    tag: "BRRRR",
    items: [
      ["brrrr-method-step-by-step", "One BRRRR deal, from offer to refinance, worked all the way through"],
      ["refinance-after-rehab", "Refinancing out of a rehab loan: appraisal, seasoning and cash back"],
    ],
  },
  {
    tag: "Rentals",
    items: [["rental-cash-flow-before-you-buy", "Test the rent, cash flow and coverage ratio before you make the offer"]],
  },
  {
    tag: "Construction",
    items: [["construction-draw-schedule", "How a construction draw schedule and site inspections pay your builder"]],
  },
];

/* ------------------------------------------------------------------ */
/* FAQ (the Faq component builds the FAQPage JSON-LD from this list)   */
/* ------------------------------------------------------------------ */

const FAQ = [
  {
    q: "How quickly can I get a flip loan closed?",
    // K3 7 days; LO2 7–10 business days; R1 10 business days; K4, LO6 bridge 7–14 business days
    a: "With a complete file, in about one to three weeks. In October 2026 one national lender published a 7-day close on flips, and others quoted 7–10 or 10 business days. Bridge loans with little or no rehab ran 7–14 business days. What usually holds a flip up is the valuation and the rehab budget review, so send a line-item scope of work along with your purchase contract.",
  },
  {
    q: "How much cash do I need to flip a house?",
    // 90% of price: RC3/C3, NS, E2; points E2 0–2
    a: "More than the down payment alone. At 90% of the price and 100% of the rehab, you bring the other 10% of the price, up to 2 points, lender and title fees, and the interest and holding costs until the house sells. On the $164,000 ranch worked through above, that came to about $37,300 in total, with $26,367 of it due on closing day.",
  },
  {
    q: "Can a first-time flipper get a fix and flip loan?",
    // RC3, C3, NS no experience requirement; R1 tiers; ARV cap 60–70% for new investors/heavy rehab
    a: "Yes, at many lenders. Several fix and flip programs published in October 2026 listed no experience requirement at all. What changes for a first flip is leverage: tiered lenders advance less, and caps of 60–70% of after-repair value are common for new investors and heavy rehabs. Plan to bring more cash, and pick a contractor whose finished jobs you can show the lender.",
  },
  {
    q: "What credit score do I need for a hard money loan?",
    // E2 600; R1, NS 650; L3 660; RC5 660, L5 700; G1 620 … A1 680
    a: "Published minimums for fix and flip and hard money loans ran from 600 to 660 in October 2026. Bridge lenders asked for 660–700, and long-term rental lenders 620–680. Because hard money is sized mostly on the property and your exit, your score is one input among several, not the whole decision.",
  },
  {
    q: "Bridge loan or fix and flip loan: which one fits my deal?",
    // RC5, L5 70–85%; RC5 12, L5 13/19, K4 12/18/24 months
    a: "It comes down to the renovation. A flip loan covers both the purchase and the rehab, releases the rehab money in draws, and caps the total at a share of after-repair value. Bridge money is meant for houses that need light work or none: it's sized on today's value, typically 70–85%, and gives you 12–24 months to sell or refinance. Both are short-term loans repaid by that exit.",
  },
  {
    q: "How does a BRRRR refinance work?",
    // LO5 ~75% of ARV; L1, L3 in-house waived; RC1/C1, K1 90 days
    a: "Once the rehab is finished and a tenant is in, a long-term rental loan pays off the rehab loan. Lenders size it at about 75% of the after-repair appraisal and qualify it on the rent against the new payment. If the lender that made the rehab loan also refinances it, seasoning is usually waived; elsewhere, expect about 90 days of ownership first. The appraisal decides how much cash comes back.",
  },
  {
    q: "What does DSCR mean on a rental loan?",
    // L1, R1 1.00; RC1/C1 1.05; LO1, D1 0.75
    a: "It's short for debt service coverage ratio, and it compares what a rental earns with what it costs to carry: monthly rent divided by the full monthly payment, with principal, interest, taxes, insurance and any HOA dues all counted. At 1.00 the rent covers the payment exactly. In October 2026 the most common published minimum was 1.00, a couple of lenders asked 1.05, and some went as low as 0.75. Your salary isn't part of the math.",
  },
  {
    q: "Can I use one of these loans for a home I'll live in?",
    // docs/research/compliance-2026-10.md: business-purpose and occupancy affidavit
    a: "No. Every loan on this site is business-purpose credit for investment property: flips, rentals, new builds and refinances of houses you hold to sell or rent. Planning to live there yourself, or to move a relative in, even into one side of a duplex you're buying? That calls for a residential mortgage lender instead. Before closing, expect to sign a business-purpose and occupancy statement confirming no one in the family will live there.",
  },
  {
    q: "Does applying pull my credit?",
    // published minimums 600 (E2) to 680 (A1, RC2/C2, R1)
    a: "No. The form asks for a rough credit range, not your Social Security number, and nothing touches your credit file. A range is enough to see which programs fit, since the published floors sit between roughly 600 and 680, by loan type. A full credit report is ordered later in the process, before closing, and you'll be told before it's run.",
  },
  {
    q: "How much can I borrow on a ground-up construction loan?",
    // K5, RC4/C4, R1, L4, LO3, NS 82.5–90% LTC; L4, RC4/C4 100% hard costs; RC4/C4, L4 60–75% land; 65–75% ARV; LO3, RC4/C4, L4 experience; loan sizes to $10M
    a: "Published October 2026 terms ran 82.5–90% of total project cost, with 100% of hard costs paid out in draws and 60–75% of the lot advanced at closing. The total is also capped at 65–75% of the finished value. Expect to show a ground-up project you finished within about three years, and program limits reach $10 million at several.",
  },
  {
    q: "Can I close the loan in my LLC?",
    // LLC vesting allowed everywhere; required at L1, RC1, C1; G1 LLC + personal guarantee
    a: "Usually, yes. Every rental lender in our October 2026 review allowed LLC ownership, and three required it. Expect the lender to ask the LLC's owners to sign a personal guarantee and to see the company's formation papers and EIN letter. Whether an LLC suits your taxes and liability is a question for your CPA or attorney, not for a loan specialist.",
  },
];

/* ------------------------------------------------------------------ */
/* Small page-only components                                           */
/* ------------------------------------------------------------------ */

function SectionHead({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div id={id} className="flex max-w-[740px] scroll-mt-24 flex-col gap-3">
      <Eyebrow>{eyebrow}</Eyebrow>
      <H2>{title}</H2>
      {children && <div className="flex flex-col gap-3 text-[17px] leading-relaxed text-ink-2">{children}</div>}
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[15px] font-semibold underline-offset-4 hover:underline">
      {children}
    </Link>
  );
}

function DealCard({ d }: { d: Deal }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{d.label}</h3>
        <Link href={d.href} className="font-mono text-xs text-muted hover:text-brand">
          {d.loan} →
        </Link>
      </div>
      <p className="text-[15px] leading-relaxed text-ink-2">{d.situation}</p>
      <div className="mt-auto flex flex-col gap-1 rounded-xl bg-paper p-4">
        <span className="font-mono text-[26px] leading-none tracking-[-0.02em] text-brand">{d.stat}</span>
        <span className="text-sm leading-snug text-ink-2">{d.statText}</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <ButtonLink href={d.apply}>{d.cta}</ButtonLink>
        <Link href={d.href} className="text-sm font-semibold underline-offset-4 hover:underline">
          Full terms
        </Link>
      </div>
    </article>
  );
}

function NeedsSheet({ n }: { n: Needs }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-6">
      <Link href={n.href} className="text-[19px] font-semibold tracking-[-0.02em] hover:text-brand">
        {n.title} →
      </Link>
      <dl className="flex flex-col text-[15px]">
        {n.rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 border-t border-line py-3 sm:grid-cols-[112px_1fr] sm:gap-4">
            <dt className="font-mono text-xs uppercase tracking-[0.06em] text-muted sm:pt-1">{k}</dt>
            <dd className="leading-relaxed text-ink-2">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function SpeedRow({ s }: { s: Speed }) {
  return (
    <li className="grid gap-3 border-t border-night-line py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-mist-2">{s.loan}</span>
        <span className="font-mono text-[clamp(24px,2.6vw,32px)] leading-tight tracking-[-0.02em] text-lime">{s.figure}</span>
      </div>
      <div className="flex flex-col gap-2 text-[15px] leading-relaxed">
        <p className="text-mist">{s.detail}</p>
        <p className="flex gap-2.5 text-paper">
          <Check className="mt-1.5 text-lime" />
          <span>{s.ready}</span>
        </p>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* Hero. Phones: headline, then the form, then the rest. Desktop: form on the right, above the fold. */}
      <section className="border-b border-line">
        <Container className="grid items-start gap-x-14 gap-y-7 pb-16 pt-8 sm:pt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:pt-16">
          <div className="flex flex-col gap-4 lg:col-start-1 lg:row-start-1 lg:pt-4">
            <Eyebrow>Flip · Bridge · BRRRR · New build · Rental refinance</Eyebrow>
            <h1 className="text-[clamp(38px,5vw,64px)] font-semibold leading-[1.03] tracking-[-0.04em]">Got a deal? Get it funded before your closing date.</h1>
          </div>
          <div id="start" className="scroll-mt-24 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <LeadForm variant="card" />
          </div>
          <div className="flex flex-col gap-7 lg:col-start-1 lg:row-start-2">
            <p className="max-w-[36em] text-[18px] leading-relaxed text-ink-2">
              {SITE.name} is for real estate investors with a deal in hand: fix and flip, hard money, bridge, BRRRR and ground-up construction loans, plus the rental loan you
              refinance into once the work is done. Start with your name and number, answer a few taps, and a loan specialist calls you to talk through what this deal
              needs.
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Four numbers to have ready for the call</p>
              <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {CALL_NUMBERS.map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1 bg-white p-4">
                    <dt className="text-[15px] font-semibold">{k}</dt>
                    <dd className="text-sm leading-snug text-ink-2">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="max-w-[36em] border-l-2 border-brand pl-4 text-[15px] leading-relaxed text-ink-2">
              <b className="font-semibold text-ink">Investment property only.</b> Every loan here is business-purpose credit for a property you&apos;ll sell or rent out, not a home loan. If you or your family
              will live there, a residential mortgage lender is the place to go. Applying never pulls your credit.
            </p>
          </div>
        </Container>
      </section>

      {/* What's your deal? */}
      <section>
        <Container className="flex flex-col gap-10 py-[88px]">
          <SectionHead id="deals" eyebrow="Start with the deal" title="What's your deal? Find the one that looks like yours.">
            <p>
              Each kind of deal has its own loan, and each loan is sized a different way. Pick the closest match, check the number that usually decides it, then open the program
              page for the full terms.
            </p>
          </SectionHead>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
            {DEALS.map((d) => (
              <DealCard key={d.key} d={d} />
            ))}
          </div>
          <p className="max-w-[760px] text-[15px] leading-relaxed text-ink-2">
            Something else?{" "}
            <Link href="/hard-money-loans" className="font-semibold underline underline-offset-2">
              Hard money
            </Link>{" "}
            covers fast or distressed purchases sized on the property itself,{" "}
            <Link href="/short-term-rental-loans" className="font-semibold underline underline-offset-2">
              short-term rental loans
            </Link>{" "}
            fund Airbnb and VRBO homes, and{" "}
            <Link href="/rental-portfolio-loans" className="font-semibold underline underline-offset-2">
              portfolio loans
            </Link>{" "}
            put several rentals under one note. Or{" "}
            <Link href="/loans" className="font-semibold underline underline-offset-2">
              see every program
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* What each loan needs */}
      <section className="border-t border-line bg-white">
        <Container className="flex flex-col gap-10 py-[88px]">
          <SectionHead id="what-it-needs" eyebrow="What it takes" title="What your deal needs to get funded, loan by loan.">
            <p>
              Four things decide most investor loans: your credit, your track record, how much of the deal the lender will advance, and the cash you bring to closing. Credit
              and experience mostly move your tier. Leverage and cash to close decide whether the deal works at all.
            </p>
          </SectionHead>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
            {NEEDS.map((n) => (
              <NeedsSheet key={n.title} n={n} />
            ))}
          </div>
          <p className="max-w-[760px] font-mono text-xs leading-relaxed text-muted">
            Ranges taken from lenders&apos; own program pages on October 19, 2026. They describe the market, not a quote for your deal.{" "}
            <Link href="/rates" className="underline underline-offset-2">
              Current rate ranges
            </Link>{" "}
            ·{" "}
            <Link href="/guides/ltv-vs-ltc-vs-arv" className="underline underline-offset-2">
              LTV, LTC and ARV explained
            </Link>
          </p>
        </Container>
      </section>

      {/* Worked flip */}
      <section>
        <Container className="flex flex-col gap-12 py-[88px]">
          <SectionHead id="worked-flip" eyebrow="A flip, worked through" title="One flip, every number: a $164,000 ranch with a $292,000 exit.">
            <p>
              The deal: a 1958 brick ranch bought from an estate for $164,000. The scope is a new kitchen, one bath, a furnace, flooring and paint, budgeted at $61,000. Three
              closed sales of renovated ranches nearby put the{" "}
              <Link href="/glossary#arv" className="underline underline-offset-2">
                after-repair value
              </Link>{" "}
              at $292,000, and the plan is five months from closing to sale.
            </p>
          </SectionHead>
          <div className="grid items-start gap-12 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
            <ol className="flex flex-col">
              {FLIP_STEPS.map(([t, d], i) => (
                <li key={t} className="grid grid-cols-[44px_1fr] gap-3 border-t border-line py-5 last:border-b">
                  <span className="font-mono text-[15px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[18px] font-semibold">{t}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-5">
              <ExampleCard example={FLIP_EXAMPLE} />
              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand">The number that decides it</p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                  <b className="font-semibold text-ink">The ARV.</b> This deal breaks even at a sale price of about $261,600, 10.4% under the estimate. A low appraisal bites
                  before you ever list: any figure under about $278,100 starts trimming the loan. At $270,000 the cap falls to $202,500, $6,100 below the loan you planned on,
                  and you bring roughly $6,000 more to closing.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href="/get-funding?loan=fix-and-flip" size="lg">
              Fund my flip
            </ButtonLink>
            <TextLink href="/calculators/fix-and-flip">Run your own flip →</TextLink>
            <TextLink href="/guides/how-to-calculate-arv">How to calculate ARV →</TextLink>
            <TextLink href="/guides/cash-needed-to-flip-a-house">Cash needed to flip →</TextLink>
          </div>
        </Container>
      </section>

      {/* Closing speed */}
      <section className="bg-ink text-paper">
        <Container className="flex flex-col gap-10 py-[88px]">
          <div id="closing-speed" className="flex max-w-[740px] scroll-mt-24 flex-col gap-3">
            <Eyebrow tone="lime">Closing speed</Eyebrow>
            <H2 className="text-white">How fast each loan can close, and what slows it down.</H2>
            <p className="text-[17px] leading-relaxed text-mist">
              These are the closing times lenders printed on their own program pages in October 2026. Every one assumes a complete file, so the part of the clock you control is
              how quickly the underwriter gets what they ask for.
            </p>
          </div>
          <ol className="flex flex-col border-b border-night-line">
            {SPEED.map((s) => (
              <SpeedRow key={s.loan} s={s} />
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href="/get-funding" variant="lime" size="lg">
              {SITE.cta}
            </ButtonLink>
            <Link href="/guides/closing-an-investor-loan-fast" className="text-[15px] font-semibold text-lime underline-offset-4 hover:underline">
              How to close an investor loan fast →
            </Link>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section>
        <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <SectionHead id="how-it-works" eyebrow="How it works" title="From your phone number to the closing table in five steps.">
            <p>Contact details come first, so the deal never waits on a long application. The paperwork comes once you&apos;ve talked it through.</p>
            <p>
              <TextLink href="/how-it-works">The full process →</TextLink>
            </p>
          </SectionHead>
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[52px_1fr] gap-3 bg-white p-6">
                <span className="flex size-9 items-center justify-center rounded-full bg-brand-tint font-mono text-sm text-brand">{i + 1}</span>
                <div>
                  <h3 className="text-[18px] font-semibold">{t}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Rental exit */}
      <section className="border-t border-line bg-white">
        <Container className="flex flex-col gap-12 py-[88px]">
          <div className="grid items-start gap-12 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
            <div className="flex flex-col gap-5">
              <SectionHead id="rental-exit" eyebrow="The rental exit" title="Keep it instead of selling: refinance out into a rental loan.">
                <p>
                  Not every flip has to sell. If the house rents well, a long-term rental loan can pay off the short-term one and you keep the property. On a BRRRR, that
                  refinance is the plan from day one.
                </p>
                <p>
                  The loan you refinance into is usually a DSCR loan, and DSCR, the debt service coverage ratio, is simple: the monthly rent divided by the full monthly
                  payment. That payment counts principal, interest, taxes, insurance and any HOA dues, which lenders shorten to{" "}
                  <Link href="/glossary#pitia" className="underline underline-offset-2">
                    PITIA
                  </Link>
                  . At 1.00 the rent exactly covers it. Above
                  1.00 there&apos;s money left over; below, you make up the gap. Your paycheck doesn&apos;t enter into it.
                </p>
              </SectionHead>
              <Formula>DSCR = monthly rent ÷ monthly PITIA</Formula>
            </div>
            <ExampleCard example={RENTAL_EXAMPLE} />
          </div>
          <dl className="grid gap-x-10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
            {RENTAL_LEVERS.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-t border-line py-4 sm:grid-cols-[140px_1fr] sm:gap-5">
                <dt className="font-semibold">{k}</dt>
                <dd className="text-[15px] leading-relaxed text-ink-2">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="max-w-[760px] text-[15px] leading-relaxed text-ink-2">
            In this case the new $219,000 loan clears the $208,600 flip payoff with $10,400 to spare before the refinance&apos;s own closing costs, and the rent pays the
            mortgage with $319 a month left for repairs and vacancy.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href="/get-funding?loan=dscr" size="lg">
              Get rental funding
            </ButtonLink>
            <TextLink href="/calculators/dscr">DSCR calculator →</TextLink>
            <TextLink href="/calculators/brrrr">BRRRR calculator →</TextLink>
            <TextLink href="/guides/refinance-after-rehab">Refinancing after the rehab →</TextLink>
            <TextLink href="/dscr-loans">Rental loan terms →</TextLink>
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section>
        <Container className="flex flex-col gap-10 py-[88px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead id="guides" eyebrow="Guides" title="Read up before you sign the contract." />
            <TextLink href="/guides">Every guide →</TextLink>
          </div>
          <div className="grid gap-x-8 gap-y-10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
            {GUIDE_GROUPS.map((g) => (
              <div key={g.tag} className="flex flex-col gap-1 border-t-2 border-ink pt-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">{g.tag}</h3>
                <ul className="flex flex-col">
                  {g.items.map(([slug, title]) => (
                    <li key={slug} className="border-b border-line last:border-b-0">
                      <Link href={`/guides/${slug}`} className="block py-3 text-[17px] font-semibold leading-snug tracking-[-0.01em] hover:text-brand">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ: the Faq component emits FAQPage JSON-LD from the same items */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-[880px] flex-col gap-7 px-6 py-[88px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>FAQ</Eyebrow>
            <H2>Straight answers before you apply</H2>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <Container className="py-[88px]">
          <div className="grid items-center gap-8 rounded-3xl bg-brand p-[clamp(32px,5vw,64px)] text-white md:grid-cols-[minmax(0,1.6fr)_auto]">
            <div className="flex flex-col gap-3">
              <h2 className="text-[clamp(30px,3.4vw,44px)] font-semibold leading-[1.08] tracking-[-0.035em]">Under contract? Start with the closing date.</h2>
              <p className="max-w-[560px] text-[17px] leading-normal text-white">
                Name and number first, a few taps about the deal, then a call with a loan specialist. No documents and no credit pull to get started.
              </p>
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
