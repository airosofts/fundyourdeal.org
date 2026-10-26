import type { ProgramContent } from "../types";

export const cashOutRefinance: ProgramContent = {
  slug: "cash-out-refinance",
  metaTitle: "Cash-Out Refinance on Investment Property: LTV & Seasoning",
  metaDescription:
    "Cash-out refinance an investment property on its rent: 2026 max LTV by lender, 90-day seasoning, LLC rules, a worked example and DSCR cash-out vs. HELOC.",
  eyebrow: "Rental cash-out · DSCR",
  h1: "Cash-out refinance on an investment property: up to 75% of value, qualified on the rent.",
  intro:
    "A cash-out refinance on an investment property replaces your current loan with a larger one and pays you the difference. With a DSCR lender, the new loan is sized on appraised value and on the DSCR (debt service coverage ratio) — the property's monthly rent divided by its new monthly payment — not your tax returns, and it can close in your LLC.",
  facts: [
    { label: "Max cash-out LTV", value: "70–80%" },
    { label: "Seasoning", value: "90 days typical" },
    { label: "Minimum credit", value: "620–680" },
    { label: "Loan amounts", value: "$70K–$4.5M" },
  ],
  overview: {
    heading: "How much cash you can take out: two limits, and the lower one wins.",
    paragraphs: [
      "The first limit is leverage. Lenders cap a cash-out refinance at a share of appraised value — 75% at most lenders in October 2026, 80% at a few. Your cash is that loan amount minus the payoff on your current mortgage, minus closing costs and any prepayment penalty on the loan you're leaving.",
      "The second limit is the rent. A bigger loan means a bigger payment, and the property still has to clear the lender's DSCR minimum on it. Where rent is modest relative to value, or the lender wants 1.20 rather than 1.00, the DSCR — not the LTV cap — can decide how much cash comes out. Run both before you pay for an appraisal.",
      "How the DSCR test works on a bigger loan. The lender divides monthly rent by the new PITIA: principal, interest, property taxes, insurance and HOA dues on the larger loan. At 1.00 the rent exactly covers that payment; at 1.25 it is 25% more than the payment. Published minimums ran from 0.75 at a few lenders to 1.00 at most and 1.05 at Roc and Civic in October 2026, and Defy requires at least 1.00 on a cash-out. Rent doesn't rise when you refinance, so every dollar of new debt pushes the ratio down.",
      "Rent needed for a cash-out = the lender's minimum DSCR × the new PITIA. For the example's $2,573 payment, that's $2,573 at 1.00, $2,701 at 1.05, $3,087 at 1.20 and $3,216 at 1.25. The $2,950 rent clears the first two and fails the last two — the same house, the same loan, approved or declined by the lender's choice of minimum.",
      "What new cash really costs when your old rate is low: compare payments, not headline rates. Say the $160,000 you owe is at 3.5% with 25 years left. Principal and interest is about $801 a month and the DSCR is 2.31. The new $300,000 loan at 7.5% costs $2,098, so your payment rises $1,297 for $131,000 in hand — the payment on a 30-year loan of $131,000 at about 11.5%. When the old rate is close to today's, that gap mostly disappears; when it's far below, a second lien that leaves the old loan alone is worth pricing.",
      "When rate-and-term beats cash-out. If you only need to retire a maturing bridge or rehab loan, a rate-and-term refinance can carry more leverage: 80% at Easy Street, Roc, Civic and LendingOne's single-property programs, against 75% on a cash-out. Say you owe $295,000 on the example house. A 75% cash-out loan of $300,000 leaves you about $4,000 short after $9,000 of costs; a rate-and-term loan of about $304,100 — 76% of value — covers the payoff and 3% costs at a 1.13 DSCR. At Easy Street, taking home more than $2,000 turns the loan back into a cash-out.",
    ],
    formula: "Cash to you = (appraised value × max LTV) − current payoff − closing costs",
    bullets: [
      "In the example, the rent supports a loan of about $354,000 at a 1.00 DSCR, so the 75% cap of $300,000 binds. At a 1.20 minimum, the rent supports only about $283,700 — roughly $16,000 less cash.",
      "Check the penalty on the old loan. In year 2 of a 5-4-3-2-1 step-down, paying off a $160,000 balance costs 4%, or $6,400, and it comes out of your proceeds.",
      "Seasoning decides which value counts. Roc and Civic size the loan on your cost basis — price plus documented improvements — until you've owned the property 90 days, then on the appraisal.",
      "Vacancy shrinks the rent the lender counts. Roc and Civic count a vacant unit at 90% of market rent — $2,655 instead of $2,950 in the example, a 1.03 DSCR instead of 1.15. Sign the lease before the appraiser visits.",
    ],
  },
  example: {
    title: "WORKED EXAMPLE",
    rows: [
      ["Appraised value", "$400,000"],
      ["New loan (75% LTV)", "$300,000"],
      ["Current loan payoff", "−$160,000"],
      ["Closing costs (assumed 3%)", "−$9,000"],
      ["Cash to you", "$131,000"],
      ["New principal & interest", "$2,098"],
      ["Taxes + insurance", "$475"],
      ["New PITIA", "$2,573"],
      ["Monthly rent", "$2,950"],
    ],
    result: { label: "DSCR", value: "1.15" },
    note: "New loan at 7.5% over 30 years; taxes $350 and insurance $125 a month, no HOA, no prepayment penalty on the old loan. Illustrative only — not a rate quote.",
    dscr: 1.15,
  },
  audience: {
    heading: "Who cashes out a rental, and what the money funds.",
    items: [
      { title: "Buyers of the next rental", text: "$131,000 from one property covers 25% down on a $500,000 rental. Closing costs and reserves come on top." },
      { title: "BRRRR investors", text: "Move a renovated rental from a short-term rehab loan into a 30-year loan. Some lenders waive seasoning when they made the rehab loan." },
      { title: "Owners carrying short-term debt", text: "Short-term investor loans had a 9.99% median rate on 2025 originations. A 30-year rental loan lowers the rate and ends the maturity clock." },
      { title: "Free-and-clear owners", text: "A rental you own outright, or bought with cash, can be refinanced sooner at some lenders — Kiavi allows cash-out on free-and-clear properties before 90 days." },
      { title: "Owners of 2–4 unit buildings", text: "Every unit's rent counts toward one DSCR. Some lenders cap 2–4 units 5 points lower — Defy at 75% on a cash-out, against 80% on a single-family rental." },
    ],
  },
  requirements: {
    heading: "Investment property cash-out refinance requirements in 2026.",
    intro: "Each lender sets its own limits. These are the ranges lenders published in October 2026 for 1–4 unit rentals.",
    rows: [
      ["Max loan-to-value", "75% at Lima One, LendingOne, Easy Street, Roc and Civic; 80% at Griffin and Defy. RCN steps down by credit: 75% at 700+, 70% at 680–699, 60% at 660–679."],
      ["2–4 units", "Often 5 points less leverage: Defy caps cash-out at 80% on a single-family rental and 75% on 2–4 units, and Fannie Mae's conventional limits are 75% and 70%. One wholesale rate sheet also priced 2–4 units 0.75 points worse at 70–80% LTV."],
      ["Seasoning", "90 days of ownership is the norm at Kiavi, LendingOne and Lima One. Griffin and Defy advertise no-seasoning options. Lima One waives seasoning when it holds your fix-and-flip, bridge or construction loan."],
      ["Inside 90 days", "Roc and Civic size the loan on cost basis until 90 days. Kiavi allows cash-out on free-and-clear properties before 90 days, and Angel Oak lists delayed financing as an eligible transaction."],
      ["DSCR", "Measured on the new, larger payment. 1.00 at most lenders and as low as 0.75 at a few; Defy requires 1.00 or higher on a cash-out."],
      ["Qualifying rent", "Most lenders take whichever is lower, the signed lease or the appraiser's market-rent estimate. Kiavi counts a lease above market only up to 110% of market rent; Roc and Civic count a vacant unit at 90% of market rent."],
      ["Credit score", "620–680 minimum depending on the lender. A lower score usually costs leverage before it costs approval, as RCN's grid shows."],
      ["Property", "1–4 unit homes, condos and townhomes. Rural properties top out at 65% at Easy Street; short-term rentals at 70% at Lima One."],
      ["Loan size", "From about $70,000 to $4.5 million: RCN's rental loans start at $70,000, Defy's at $75,000, and Griffin's run $100,000–$4.5 million."],
      ["Vesting", "LLC allowed at every lender we checked and required at Lima One, Roc and Civic, typically with a personal guarantee."],
      ["Reserves", "From none to 9 months of PITIA, depending on lender and loan size. Kiavi lists no minimum liquidity, Defy asks for at least 3 months and Easy Street 3–9 months — $7,719 to $23,157 on the example's $2,573 payment."],
      ["Documents", "Payoff statement on the current loan, leases, insurance, entity documents and bank statements. No tax returns, W-2s or pay stubs."],
    ],
  },
  costs: {
    heading: "Cash-out refinance rates and costs on a rental in 2026.",
    intro: "Rates move daily and depend on credit, leverage, DSCR and the prepayment term you pick. Figures below were published by lenders in September–October 2026.",
    rows: [
      ["30-year fixed rate", "Defy's grid ran 6.25%–7.875% (September 2026). Total Quality Lending showed 7.00%–7.375% for an 800 score at 75% LTV, a 1.00 DSCR and a 5-year prepayment penalty (October 19, 2026). The median rate on 2025 30-year investor loans was 7.375%."],
      ["Cash-out pricing", "Cash-out usually costs more than a purchase or rate-and-term refinance at the same LTV. On one wholesale DSCR rate sheet dated October 23, 2026, it cost 1.000 point at 70–75% LTV with a 700+ score and 1.875 points below 700 — $3,000 or $5,625 on a $300,000 loan, paid up front or built into the rate."],
      ["Penalty on the old loan", "Often the largest hidden cost. A 5-4-3-2-1 step-down charges 4% of the balance in year 2 and 3% in year 3. Ask your servicer for the exact figure before you apply."],
      ["Penalty on the new loan", "A 5-4-3-2-1 step-down is the default; 3-2-1, 2-1 or none cost more in rate, and Kiavi lists no penalty after year 3. Refinancing the example loan again in year 2 would cost 4% of about $297,200, or $11,900."],
      ["Points and closing costs", "Origination, points, appraisal, title and recording vary by lender and state. The example assumes 3% of the loan; get every fee in writing before you sign."],
      ["Closing time", "About 2–5 weeks. The appraisal and the payoff letter on your current loan usually set the pace."],
    ],
  },
  compare: {
    id: "compare",
    heading: "DSCR cash-out vs. HELOC on a rental vs. portfolio loan",
    intro: "Each of these turns rental equity into cash or retires debt. They differ on what they replace, how they qualify and what they cost you later.",
    columns: ["", "How it works", "Best when — and the catch"],
    rows: [
      [
        "DSCR cash-out refinance",
        "Replaces your first mortgage with a larger one at 70–80% of appraised value, qualified on rent against the new PITIA. Fixed rates for up to 30 years; can close in an LLC.",
        "Best when your current rate is close to today's market or the property is free and clear. Catch: the new rate applies to the whole balance, and a step-down prepayment penalty is typical.",
      ],
      [
        "Rate-and-term DSCR refinance",
        "Replaces your loan with one about the same size plus closing costs, up to 80% LTV at several lenders. At Easy Street, more than $2,000 back makes it a cash-out.",
        "Best when you need to retire a maturing bridge or rehab loan rather than raise cash. Catch: little or no money comes back to you.",
      ],
      [
        "HELOC on a rental",
        "A second lien that leaves your first mortgage in place. Credit unions we checked capped combined loan-to-value at 70–75% on non-owner-occupied homes, priced at Prime plus a margin set by your credit.",
        "Best when your first mortgage carries a low rate worth keeping, or you need cash in stages. Catch: a variable rate, lower leverage and few lenders — Sacramento Credit Union's line, for one, is limited to California property.",
      ],
      [
        "Portfolio (blanket) cash-out",
        "One new loan across several rentals at 55–75% LTV, with 680 minimum credit and a 1.00–1.05 DSCR on the combined numbers. Programs start at 2–5 properties.",
        "Best when equity is spread across several smaller rentals. Catch: every property secures the whole loan, so selling one later takes a release payment.",
      ],
      [
        "Conventional cash-out (Fannie Mae)",
        "Qualifies on your income and debt-to-income ratio. Fannie Mae's August 5, 2026 matrix caps an investment cash-out at 75% for one unit and 70% for 2–4 units, after six months on title, and the first mortgage being paid off must be at least 12 months old.",
        "Best when your documented income qualifies easily. Catch: you borrow in your own name — an LLC's ownership time can count toward the six months, but title moves to you to close — and Fannie caps you at 10 financed properties.",
      ],
    ],
  },
  steps: {
    heading: "Four steps to cash out a rental.",
    items: [
      { title: "Size both limits", text: "Multiply value by 75% and subtract your payoff. Then check the DSCR on the new payment with our calculator — the lower answer is your loan." },
      { title: "Get your payoff", text: "Ask your current servicer for a payoff letter and the prepayment penalty, if any, before you pick a new loan." },
      { title: "Get your terms fast", text: "A 60-second form, then a loan specialist calls you back with your cash-out amount, the seasoning rules and the new DSCR." },
      { title: "Appraise and close", text: "The appraisal sets value and market rent. Your old loan is paid off at closing and the balance goes to you or your LLC." },
    ],
  },
  faqs: [
    {
      q: "How much cash can I take out of an investment property?",
      a: "Multiply the appraised value by the lender's maximum cash-out LTV — 75% at most lenders in October 2026, 80% at a few — then subtract your current payoff and closing costs. On a $400,000 rental with a $160,000 balance, 75% is $300,000, which leaves about $131,000 after $9,000 of costs. The rent must also cover the new, larger payment.",
    },
    {
      q: "How long do I have to own a rental before a cash-out refinance?",
      a: "Usually 90 days. Before then, lenders such as Roc and Civic size the loan on what you paid plus documented improvements rather than the new appraised value. There are exceptions: Griffin and Defy advertise no-seasoning options, Kiavi allows cash-out sooner on free-and-clear properties, and Lima One waives seasoning when it holds your rehab or bridge loan.",
    },
    {
      q: "What DSCR do I need for a cash-out refinance on a rental?",
      a: "Usually 1.00, measured on the new, larger payment: rent at least equal to principal, interest, taxes, insurance and HOA dues on the new loan. At 1.25, rent is 25% more than that payment. Published minimums run from 0.75 to 1.05 across programs, and Defy requires 1.00 or higher on a cash-out. On a $2,573 payment, 1.00 takes $2,573 of rent and 1.25 takes $3,216.",
    },
    {
      q: "What is the difference between a cash-out and a rate-and-term refinance?",
      a: "A rate-and-term refinance pays off your existing loan and closing costs and returns little or nothing; a cash-out refinance puts money in your pocket. Easy Street draws the line at $2,000: more than that back is a cash-out. The label matters because leverage differs — 80% for rate-and-term against 75% for cash-out at Easy Street, Roc, Civic and LendingOne — and cash-out usually prices higher.",
    },
    {
      q: "Can I do a cash-out refi in an LLC?",
      a: "Yes. DSCR lenders lend to LLCs, and Lima One, Roc and Civic require an entity. Expect to sign a personal guarantee and provide the LLC's formation documents. If the property is titled in your own name today, moving it into an LLC is a legal and tax step that can affect your existing loan, so talk to an attorney and a CPA before you sign a deed.",
    },
    {
      q: "What is a DSCR cash-out refinance?",
      a: "A cash-out refinance on a rental that qualifies on the property's rent instead of your income. The lender divides monthly rent by the new loan's full payment — principal, interest, taxes, insurance and HOA dues. If the ratio clears its minimum, usually 1.00, and the loan fits under its LTV cap, you can close without tax returns or pay stubs.",
    },
    {
      q: "Can I cash out a rental I bought with cash?",
      a: "Yes. This is often called delayed financing. Kiavi allows cash-out on free-and-clear properties before the usual 90 days, and Angel Oak lists delayed financing as an eligible transaction. Inside the seasoning window, expect the loan to be limited by what you paid rather than the appraised value, so keep your closing statement and rehab receipts.",
    },
    {
      q: "Is a cash-out refinance worth it if my current rate is low?",
      a: "Run the payment difference, not the headline rate. Replacing a $160,000 balance at 3.5% with a $300,000 loan at 7.5% raises principal and interest from about $801 to $2,098 a month. That $1,297 increase buys $131,000 of cash — the same payment as a 30-year loan of $131,000 at about 11.5%. If the cash won't earn more than that, price a second lien instead.",
    },
    {
      q: "Can I do a cash-out refinance on a duplex or fourplex?",
      a: "Yes. DSCR lenders refinance 2–4 unit rentals and count the rent from every unit against one payment. Leverage is often lower: Defy caps cash-out at 80% on a single-family rental and 75% on 2–4 units, and Fannie Mae's conventional limits are 75% and 70%. Price can be higher too — one wholesale rate sheet charged 0.75 points more for 2–4 units at 70–80% LTV.",
    },
    {
      q: "Can I cash out a rental that's vacant?",
      a: "Usually, but the rent counts for less. Roc and Civic count a vacant unit at 90% of the appraiser's market rent, so a house that would rent for $2,950 qualifies on $2,655 — a 1.03 DSCR on a $2,573 payment instead of 1.15. Signing a lease before the appraisal is the simplest fix. A lease above market won't help much at Kiavi, which caps it at 110% of market rent.",
    },
    {
      q: "Is a HELOC or a cash-out refinance better for a rental?",
      a: "Mostly, it depends on your current rate. A HELOC leaves a low-rate first mortgage untouched, but the credit unions we checked capped combined borrowing at 70–75% of value at a variable rate, and fewer lenders offer one on investment property. A cash-out refinance reaches 75–80% at a fixed rate but reprices your whole loan at today's rates.",
    },
    {
      q: "How much does a cash-out refinance on an investment property cost?",
      a: "Budget for closing costs, a cash-out price adjustment and any penalty on the old loan. The example on this page assumes 3% of the new loan, or $9,000 on $300,000. One wholesale rate sheet charged 1.000 point for cash-out at 70–75% LTV with a 700+ score — another $3,000 if paid up front. A step-down penalty on the old loan can add 3%–4% of its balance.",
    },
    {
      q: "How soon can I refinance again after a cash-out?",
      a: "DSCR lenders rarely publish a loan-age rule — Fannie Mae's conventional cash-out is the exception, requiring the first mortgage being paid off to be at least 12 months old — so the main cost is the prepayment penalty on the loan you just took. On a 5-4-3-2-1 step-down, refinancing a $300,000 loan in year 2 costs about $11,900. Kiavi lists no penalty after year 3.",
    },
    {
      q: "Can I use a DSCR cash-out refinance on my primary residence?",
      a: "No. DSCR cash-out refinances are business-purpose loans for investment property that neither you nor a family member lives in. If you live in the home, or a relative does, you need a residential refinance or home equity loan instead, with its own income and occupancy rules. A rental you've moved out of and lease to a tenant can qualify as an investment property.",
    },
    {
      q: "Is cash from a refinance taxable?",
      a: "Generally, loan proceeds are borrowed money, not income. How the interest is treated for tax purposes depends on what you use the cash for — another rental, repairs or something personal — and that is a question for your CPA. Keep a clear record of where the proceeds go from the day they arrive.",
    },
  ],
  related: ["dscr", "portfolio", "brrrr", "short-term-rental"],
  calculator: { href: "/calculators/dscr", label: "Check DSCR on the new loan" },
  sources: [
    { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
    { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
    { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
    { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
    { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
    { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
    { label: "Civic Financial Services — Rental loans", url: "https://www.civicfs.com/rental/" },
    { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
    { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
    { label: "Defy Mortgage — DSCR loan rates", url: "https://defymortgage.com/dscr-loan-rates/" },
    { label: "Angel Oak — Investor cash flow program", url: "https://angeloakms.com/programs/investor-cash-flow-mortgage-program/" },
    { label: "Total Quality Lending — DSCR rates", url: "https://totalqualitylending.com/loans/dscr/rates" },
    { label: "Spring EQ — DSCR wholesale rate sheet (October 23, 2026)", url: "https://wholesale.springeq.com/hubfs/Wholesale%20File%20Transfer/2022_website_rates_fees_guidelines_matrices/Active%20DSCR%20Rate%20Sheet.pdf" },
    { label: "CrowdfundedWealth — Hard money loan rates 2026 (HMDA 2025 medians)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
    { label: "LendingOne — SFR portfolio loans", url: "https://lendingone.com/loan-types/sfr-portfolio-loans/" },
    { label: "Sacramento Credit Union — Home equity financing", url: "https://www.sactocu.org/home-equity-financing/" },
    { label: "The Police Credit Union — HELOCs", url: "https://homeloans.thepolicecu.org/HELOCs.html" },
    { label: "Fannie Mae — Eligibility Matrix (August 5, 2026)", url: "https://singlefamily.fanniemae.com/media/20786/display" },
    { label: "Fannie Mae Selling Guide — Cash-out refinance transactions (B2-1.3-03)", url: "https://selling-guide.fanniemae.com/sel/b2-1.3-03/cash-out-refinance-transactions" },
    { label: "Fannie Mae Selling Guide — Multiple financed properties (B2-2-03)", url: "https://selling-guide.fanniemae.com/sel/b2-2-03/multiple-financed-properties-same-borrower" },
  ],
  updated: "2026-10-23",
};
