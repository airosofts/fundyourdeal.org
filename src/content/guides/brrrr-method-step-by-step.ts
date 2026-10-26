import type { Guide } from "../types";

const brrrrMethodStepByStep: Guide = {
  slug: "brrrr-method-step-by-step",
  metaTitle: "BRRRR Method Step by Step: One Deal, Every Dollar",
  metaDescription:
    "The BRRRR method worked through one house: rehab loan, draws, carry, lease, DSCR refinance at 75% of ARV, and the cash still left in the deal at the end.",
  category: "BRRRR",
  title: "The BRRRR method step by step: one house from offer to refinance, with every dollar counted",
  dek: "Buy, rehab, rent, refinance, repeat. Here one $132,000 house goes through all five stages: a hard money loan to buy and renovate, a lease, then a 30-year refinance sized on the new value and on DSCR (debt service coverage ratio): what you get when you divide a property's monthly rent by its monthly loan payment. You'll see what goes in, what comes back and what stays in the deal.",
  readMinutes: 12,
  published: "2026-10-26",
  updated: "2026-10-26",
  keyTakeaways: [
    "Size the refinance before you make the offer. At 75% of after-repair value, the new loan is the most you can ever pull back out, so the purchase has to fit under it.",
    "In this deal $32,383 goes in and $14,500 comes back at the refinance. That leaves $17,883 in a house carrying $61,500 of equity.",
    "Holding costs are the leak: seven months on a 10.25% rehab loan cost $8,871 of interest, plus $3,640 of taxes, insurance and utilities.",
    "A lender DSCR of 1.36 clears every published minimum, yet after vacancy, repairs and a property manager the house nets about $36 a month.",
    "Each $1,000 the appraisal misses costs $750 of cash back. At $230,000 instead of $246,000, the cash left in grows to $29,883.",
    "Getting every dollar back on this house would take a purchase near $115,200 or an appraisal near $269,800.",
  ],
  body: [
    { type: "h2", text: "BRRRR runs on two loans and one deadline", id: "two-loans" },
    {
      type: "p",
      text: "The BRRRR method means you buy a property that needs work, renovate it, put a tenant in, refinance into a long-term loan, and use the cash that comes back on the next one. In lending terms that's two loans. A short-term rehab loan (a hard money or fix-and-flip loan) pays for the purchase and the renovation. Then a 30-year rental loan, usually a [DSCR loan](/dscr-loans), pays the rehab loan off.",
    },
    {
      type: "p",
      text: "The deadline is the rehab loan's maturity date. LendingOne's fix-to-rent loan matures in 9 months. Lima One offers 13, 19 or 24 months on its fix-and-flip loan, and Kiavi offers 12, 18 or 24. The whole plan, refinance closing included, has to land before that date or you pay to extend.",
    },
    {
      type: "p",
      text: "The second loan decides whether the method works. Rental lenders size it on the post-rehab appraisal, commonly 75% on a cash-out, and LendingOne says its fix-to-rent loan typically refinances at up to 75% of after-repair value. The rent then has to cover the new payment at the lender's minimum [DSCR](/glossary#dscr), so this walk-through starts at the refinance and works back to the offer.",
    },
    { type: "h2", text: "The deal: a dated three-bed ranch for $132,000", id: "the-deal" },
    {
      type: "p",
      text: "The house is a 1960s three-bed, one-and-a-half-bath brick ranch: sound structure, original kitchen and baths, a tired roof and worn floors. Renovated houses nearby have sold recently, and similar rentals lease for about $2,200.",
    },
    {
      type: "table",
      caption: "An illustrative deal, not a quote. Swap every line for your own bids, sold comps, rent comps and insurance quotes.",
      head: ["Input", "Amount", "Where the number comes from"],
      rows: [
        ["Purchase price", "$132,000", "Negotiated with the seller"],
        ["Rehab budget", "$46,000", "Line-item contractor bids: kitchen, two baths, roof, flooring, paint"],
        ["After-repair value (ARV)", "$246,000", "Recent sales of renovated houses nearby"],
        ["Market rent after the work", "$2,200 a month", "Leased comparable rentals, not asking rents"],
        ["Property taxes", "$230 a month", "Assumed county bill at the renovated value"],
        ["Landlord insurance after rehab", "$110 a month", "Assumed quote"],
        ["Monthly carry during rehab", "$520", "Taxes $230, vacant-property insurance $150, utilities $140"],
      ],
    },
    { type: "h2", text: "Step 1, buy: price the exit before you sign", id: "buy" },
    {
      type: "p",
      text: "Start with the refinance. Seventy-five percent of a $246,000 value is $184,500. That's the ceiling on everything the refinance can hand back, so every dollar you spend has to be measured against it. If you're unsure of the value, see [how to calculate ARV](/guides/how-to-calculate-arv) and pull the comps a lender's appraiser will use, not the best sale on the street.",
    },
    {
      type: "p",
      text: "Next, size the rehab loan. Fix-and-flip lenders publish 85% to 100% of the purchase price depending on experience, fund 100% of the rehab budget at most programs, and cap the total at 70% to 80% of after-repair value. This deal borrows 90% of the purchase price and 100% of the renovation:",
    },
    { type: "formula", text: "Rehab loan = 90% × $132,000 + 100% × $46,000 = $118,800 + $46,000 = $164,800" },
    {
      type: "p",
      text: "That's 92.6% of the $178,000 total cost and 67.0% of ARV, inside every published ARV cap. Lima One asks for at least one completed investment-property exit in the past three years on its fix-and-flip loan, and other lenders move leverage and rate by experience tier, so a first deal may get less.",
    },
    {
      type: "p",
      text: "The rate is an assumed 10.25%, interest-only, just under the 10.45% median a third-party review of 2025 HMDA filings found among non-bank lenders on short-term investor loans; the middle half of those loans priced between 9.75% and 11%. Points run 0 to 2 at the lenders that publish them; this deal pays 1.5.",
    },
    {
      type: "table",
      caption: "Cash at the purchase closing. Title, escrow and recording costs are an assumption; get a settlement estimate.",
      head: ["Item", "Amount"],
      rows: [
        ["Down payment, 10% of $132,000", "$13,200"],
        ["Points, 1.5% of $164,800", "$2,472"],
        ["Title, escrow and recording", "$3,100"],
        ["Cash to close the purchase", "$18,772"],
      ],
    },
    {
      type: "callout",
      title: "The number that decides it",
      text: "Rehab-loan payoff plus refinance costs has to fit under 75% of a conservative ARV, or the deal can't refinance out without fresh cash. Here: $164,800 + $5,200 = $170,000 against $184,500. That's $14,500 of headroom, and it's also exactly the cash you'll get back.",
    },
    { type: "h2", text: "Step 2, rehab: interest runs on what's been drawn", id: "rehab" },
    {
      type: "p",
      text: "The rehab money isn't wired to you at closing. The lender holds it and releases it in [draws](/glossary#draws): your contractor finishes a phase, an inspector confirms it, and the money goes out. Lima One publishes 24 hours from inspection to funds and Easy Street 48. Most rehab lenders charge interest only on funds actually drawn, so the purchase portion costs interest from day one and the rehab portion builds up as the work does.",
    },
    {
      type: "table",
      caption: "10.25% interest-only. Rehab draws assumed even over five months, so about half the rehab budget is out on average during the work.",
      head: ["Interest line", "Math", "Amount"],
      rows: [
        ["Purchase portion, months 1–7", "$118,800 × 10.25% ÷ 12 = $1,014.75 × 7", "$7,103"],
        ["Rehab draws, months 1–5", "$23,000 average × 10.25% ÷ 12 × 5", "$982"],
        ["Rehab fully drawn, months 6–7", "$46,000 × 10.25% ÷ 12 × 2", "$786"],
        ["Total rehab-loan interest", "", "$8,871"],
      ],
    },
    {
      type: "p",
      text: "Add the carry: $520 a month for taxes, a vacant-property policy and utilities, or $3,640 over seven months. The schedule is five months of work, one month to lease and one month for the refinance appraisal and closing. On a 9-month term that leaves two months of slack. Every month past plan costs $1,928 here: $1,408 of interest on the fully drawn $164,800, plus the $520 carry.",
    },
    {
      type: "p",
      text: "Keep paid invoices, lien waivers, permits and draw records as you go. The refinance underwriter will ask for them, and a [rehab budget a lender will fund](/guides/rehab-budget-for-lenders) is easier to defend with a receipt behind every line.",
    },
    { type: "h2", text: "Step 3, rent: sign the lease before the appraiser visits", id: "rent" },
    {
      type: "p",
      text: "Rental lenders don't take your word for the rent. Most use whichever is smaller: the signed lease or the appraiser's rent estimate. Kiavi caps the lease at 110% of that estimate. Roc Capital and Civic underwrite an empty unit at 90% of its estimated rent. On this house, a signed $2,200 lease gives a DSCR of 1.36 at the refinance. Left vacant, it qualifies on $1,980 and 1.23.",
    },
    {
      type: "p",
      text: "A lease is also evidence. If the appraiser's rent opinion came in at $1,800, the DSCR would fall to 1.12: still above a 1.05 minimum, with little room to spare.",
    },
    {
      type: "p",
      text: "If a manager places the tenant, budget 50% to 100% of the first month's rent, the range single-family managers quoted in 2026. At 50% that's $1,100, counted in the cash-in total below.",
    },
    {
      type: "cta",
      text: "Fixer under contract that you plan to keep? Send the price, rehab budget and ARV, and we'll line up both loans together.",
      href: "/get-funding?loan=brrrr",
      label: "Get my BRRRR funded",
    },
    { type: "h2", text: "Step 4, refinance: the appraisal sets the loan and the rent tests it", id: "refinance" },
    {
      type: "p",
      text: "The appraisal comes back at $246,000. At 75% the new loan is $184,500. This example uses 7.375%, the 2025 median rate on 30-year investor loans in the same HMDA analysis.",
    },
    { type: "formula", text: "P&I = $184,500 × r ÷ (1 − (1 + r)^−360), r = 7.375% ÷ 12 → $1,274 a month" },
    {
      type: "p",
      text: "Add $230 of taxes and $110 of insurance and the full payment, or [PITIA](/glossary#pitia), is $1,614. Divide the $2,200 rent by it and the DSCR is 1.36. Published minimums run 1.00 at Lima One and RCN Capital, 1.05 at Roc and Civic, and 0.75 to 0.80 at LendingOne, Defy and Kiavi, so this house clears every one of them.",
    },
    {
      type: "p",
      text: "Seven months after purchase, the house is well past the 90 days of ownership most outside DSCR lenders want before they lend on appraised value. Had the work finished in ten weeks and you'd gone to Roc or Civic early, their under-three-months rule caps the loan at 80% of total cost basis: 80% of $178,000 is $142,400, which is $27,600 short of the payoff and closing costs. Lima One waives seasoning when you refinance its own fix-and-flip loan into its rental loan. The [refinance after rehab](/guides/refinance-after-rehab) guide covers every limit on the new loan.",
    },
    {
      type: "table",
      caption: "Refinance closing costs are an assumption: appraisal, title and lender fees. Interest on the rehab loan was paid monthly and is counted in cash in.",
      head: ["Refinance waterfall", "Amount"],
      rows: [
        ["New DSCR loan, 75% of $246,000", "$184,500"],
        ["Pay off the rehab loan", "−$164,800"],
        ["Refinance closing costs", "−$5,200"],
        ["Cash back to you", "$14,500"],
      ],
    },
    { type: "h2", text: "The scoreboard: $32,383 in, $14,500 back", id: "scoreboard" },
    {
      type: "table",
      caption: "Every dollar you put in from the purchase closing to the refinance, against what the refinance returns.",
      head: ["Cash in", "Amount"],
      rows: [
        ["Down payment", "$13,200"],
        ["Rehab-loan points", "$2,472"],
        ["Purchase closing costs", "$3,100"],
        ["Rehab-loan interest, 7 months", "$8,871"],
        ["Taxes, insurance and utilities, 7 months", "$3,640"],
        ["Tenant placement, 50% of one month's rent", "$1,100"],
        ["Total cash in", "$32,383"],
        ["Cash back at the refinance", "−$14,500"],
        ["Cash left in the deal", "$17,883"],
      ],
    },
    {
      type: "p",
      text: "For $17,883 you own a $246,000 house against a $184,500 loan, or $61,500 of equity. The lender sees $2,200 of rent against a $1,614 payment and $586 a month to spare. Your own math has to set money aside for what the lender ignores.",
    },
    {
      type: "ul",
      items: [
        "**Vacancy, 7% of rent ($154):** close to the 7.3% national rental vacancy rate the Census Bureau reported for the second quarter of 2026.",
        "**Repairs and capital items, 8% ($176):** an assumption for a freshly renovated house. A new roof and systems help; an old furnace you kept doesn't.",
        "**Management, 10% ($220):** inside the 8% to 12% of monthly rent that single-family managers quoted in 2026.",
      ],
    },
    {
      type: "p",
      text: "After those three, the house nets about $36 a month with a manager, or $428 a year, which is 2.4% on the $17,883 left in. Manage it yourself and it's about $256 a month, $3,068 a year and 17.2%. That's the trade inside every BRRRR refinance: you recover cash by adding debt, and the bigger payment eats the cash flow. At 7.375% over 30 years, each $10,000 you pull out adds about $69 to the monthly payment.",
    },
    { type: "h2", text: "What moves the result", id: "stress-test" },
    {
      type: "table",
      caption: "One change at a time against the base case. Cash left in = $32,383 total cash in, plus any extra cost, minus cash back.",
      head: ["What changes", "Effect", "Cash back", "Cash left in"],
      rows: [
        ["Nothing (base case)", "75% of $246,000", "$14,500", "$17,883"],
        ["Appraisal at $230,000", "Loan drops to $172,500", "$2,500", "$29,883"],
        ["$8,000 rehab overrun paid in cash", "Value and loan unchanged", "$14,500", "$25,883"],
        ["Lease-up takes two extra months", "+$3,855 of interest and carry", "$14,500", "$21,739"],
        ["Refinance at 70% instead of 75%", "Loan $172,200; payment $85 lower", "$2,200", "$30,183"],
        ["Outside lender at 10 weeks", "Capped at 80% of $178,000 cost", "Short $27,600", "Can't close without more cash"],
      ],
    },
    {
      type: "p",
      text: "The appraisal is the biggest swing: at a 75% refinance, every $1,000 of value is $750 of loan. Underwrite ARV from sales an appraiser would pick, not from a list price.",
    },
    { type: "h2", text: "What it takes to get all your cash back", id: "all-cash-back" },
    {
      type: "p",
      text: "Zero cash left in needs your all-in cost to come in at or below what the refinance nets. Here the all-in cost is $197,183, counting the purchase, rehab, points, closing costs, interest, carry and leasing fee. That's 80.2% of ARV. The refinance nets $179,300 after its own costs, or 72.9% of ARV. The gap is the cash that stays in.",
    },
    { type: "formula", text: "Cash left in = all-in cost − (refinance loan − refinance costs) = $197,183 − $179,300 = $17,883" },
    {
      type: "p",
      text: "Close the gap from either end. With the same rehab and value, a price near $115,200 gets every dollar back, since points and interest shrink with the loan. At the same price, the house would need to appraise near $269,800. Or accept some cash left in, if $17,883 earning this return beats your next-best use of it.",
    },
    {
      type: "p",
      text: "A working rule from this deal: with a 75% refinance and costs like these, keep your all-in cost under about 73% of a conservative ARV if you want your cash back. Run your own numbers in the [BRRRR calculator](/calculators/brrrr) before you offer.",
    },
    { type: "h2", text: "Step 5, repeat: what this deal leaves for the next one", id: "repeat" },
    {
      type: "p",
      text: "Not all of the $14,500 is free to spend. DSCR lenders publish reserve requirements from none at Kiavi to three months of PITIA at Defy and three to nine months at Easy Street. Three months on this house is $4,843, so about $9,700 is left for the next down payment. A second deal shaped like this one needs about $32,000 of cash in, so the first house funds roughly a third of it. At 2026 rates that's the honest pace of BRRRR unless you buy deeper.",
    },
    {
      type: "p",
      text: "Watch the prepayment terms on the new loan. Many DSCR loans default to a five-year declining penalty of 5%, 4%, 3%, 2% and 1% of the balance, so refinancing again or selling in year one would cost $9,225 here. If you expect a second cash-out once rents rise, ask for a shorter schedule such as 3-2-1 or 2-1, or none, and expect to pay for it in rate.",
    },
    {
      type: "p",
      text: "Once you hold several rentals, a [blanket loan](/rental-portfolio-loans) can refinance them together; published minimums run from 2 to 5 or more properties. For a straight rental with no rehab, run [rental cash flow before you buy](/guides/rental-cash-flow-before-you-buy) instead.",
    },
    {
      type: "p",
      text: "Both BRRRR loans are business-purpose credit for property you rent out, never a home for you or your relatives; if you plan to move in, talk to a residential mortgage lender instead. For questions about depreciation or how cash-out proceeds are taxed, talk to a CPA.",
    },
    {
      type: "cta",
      text: "Ready to run your own BRRRR? Send the price, rehab budget, ARV and rent, and we'll show you what the deal needs to get funded.",
      href: "/get-funding?loan=brrrr",
      label: "Get my BRRRR funded",
    },
  ],
  faqs: [
    {
      q: "What does BRRRR stand for in real estate?",
      a: "Buy, rehab, rent, refinance, repeat. You buy a property below its after-repair value, renovate it with a short-term rehab loan, lease it, then refinance into a 30-year rental loan sized on the new appraisal. The cash that comes back from the refinance goes toward the next purchase. The method only works if the refinance is big enough to pay off the rehab loan and return some of your cash.",
    },
    {
      q: "How much cash do you need to start a BRRRR deal?",
      a: "Plan for the down payment, points and closing costs at purchase, plus interest and carrying costs until the refinance. In our example a $132,000 house with a $46,000 rehab took $18,772 at closing and $32,383 in total before the refinance returned $14,500. Lenders funding 85% to 100% of the price and all of the rehab keep the first check small, but the holding costs add up.",
    },
    {
      q: "How long does a BRRRR take from purchase to refinance?",
      a: "Usually six to nine months for a medium rehab. Our example took seven: five of work, one to lease and one to appraise and close the refinance. Refinance lenders other than your rehab lender usually wait until you've owned the house 90 days before they'll use the new value. Published rehab-loan terms run from 9 months at LendingOne to 24 months at Lima One and Kiavi, so match the plan to the maturity date.",
    },
    {
      q: "Can you get all of your money back with the BRRRR method?",
      a: "Only if you buy deep enough. At a 75% refinance, your all-in cost, meaning purchase, rehab, points, closing costs, interest and carry, has to come in near 73% of the appraised value or lower. Our example came in at 80.2%, which left $17,883 in. Getting all of it back would have taken a purchase price of about $115,200 or an appraisal of about $269,800.",
    },
    {
      q: "What DSCR do lenders want on a BRRRR refinance?",
      a: "Published minimums run from 0.75 to 1.05. Lima One and RCN Capital publish 1.00, Roc Capital and Civic 1.05, and LendingOne and Defy 0.75. Rent counts at the smaller of the lease or the appraiser's estimate, and Roc and Civic take 90% of the estimate for an empty unit. A ratio that clears the minimum can still leave thin cash flow after vacancy and repairs.",
    },
    {
      q: "Does BRRRR still work with rates above 7%?",
      a: "It works, but the cash flow is thinner. In our example a 7.375% refinance left $586 a month by the lender's math and about $36 after vacancy, repairs and management. Each $10,000 pulled out at that rate adds about $69 to the payment. Buying deeper, refinancing at a lower percentage of value or managing the property yourself are the usual ways to widen the margin.",
    },
  ],
  related: {
    programs: ["brrrr", "fix-and-flip", "hard-money", "dscr"],
    guides: ["refinance-after-rehab", "how-to-calculate-arv", "rehab-budget-for-lenders", "rental-cash-flow-before-you-buy"],
  },
  sources: [
    { label: "LendingOne — Fix-to-rent loans (9-month term, refinance up to 75% of ARV)", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
    { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
    { label: "Lima One — Fix and flip loans (terms, experience, draws, seasoning waiver)", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
    { label: "Lima One — Rental portfolio loans", url: "https://www.limaone.com/rental-portfolio-loans/" },
    { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
    { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
    { label: "Civic Financial Services — Rental loans", url: "https://www.civicfs.com/rental/" },
    { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
    { label: "New Silver — Fix and flip loans", url: "https://newsilver.com/fix-and-flip-loans/" },
    { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
    { label: "Crowdfunded Wealth — 2026 hard money rate report built on 2025 HMDA data (updated October 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
    { label: "U.S. Census Bureau — Housing Vacancies and Homeownership, Q2 2026 (released July 28, 2026)", url: "https://www.census.gov/housing/hvs/current/index.html" },
    { label: "Home365 — What property management costs in 2026 (updated October 18, 2026)", url: "https://www.home365.co/general-knowledge/property-management/property-management-fees-2026/" },
  ],
};

export default brrrrMethodStepByStep;
