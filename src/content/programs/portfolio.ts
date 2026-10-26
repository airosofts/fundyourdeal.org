import type { ProgramContent } from "../types";

export const portfolio: ProgramContent = {
  slug: "portfolio",
  metaTitle: "Portfolio Loans for Rental Properties: Roll Doors Into One",
  metaDescription:
    "Roll several rentals into one portfolio loan: 2026 credit, coverage and LTV terms, release prices, recourse and a worked five-property refinance.",
  eyebrow: "Blanket loans · 2 to 20 rentals",
  h1: "Portfolio loans for rental properties: roll every door into one loan and pull cash out once.",
  intro:
    "With a portfolio loan for rental properties, several rentals share one note, whether you're buying them as a package or refinancing what you already own. The lender sizes it on pooled value and pooled DSCR (debt service coverage ratio), meaning the rent from all the houses divided by all their monthly payments. You close once and pay once a month. The trade is that each house backs the whole debt until you release it.",
  facts: [
    { label: "Properties per loan", value: "2–20" },
    { label: "Credit score floor", value: "680" },
    { label: "Purchase / cash-out LTV", value: "80% / 75%" },
    { label: "Small-balance loan size", value: "$225K–$5M" },
  ],
  overview: {
    heading: "The lender underwrites the pool, so strong doors carry weak ones.",
    paragraphs: [
      "Total the rent on every property. Then total every monthly PITIA payment the way a single-rental lender would: principal, interest, taxes, insurance and any HOA dues. Divide the first by the second, and that pooled ratio is what qualifies the loan. In the worked deal, five rentals with six doors bring in $8,675 a month against $6,316 of combined payment, a 1.37. House C, leased below market at $1,050 against a $1,078 share of the payment, scores 0.97 on its own. Inside a blanket loan it never has to pass alone.",
      "Ask which formula you're being held to. LendingOne's SFR portfolio floor is 1.00 on rent over PITIA. Roc and Civic set 1.05x but measure it the harder way. They subtract operating expenses, taxes and insurance from the rent, then divide what's left by principal and interest alone. With an assumed 20% for vacancy, management and repairs, the worked pool nets $5,340 against $4,716 of principal and interest, or 1.13. A 2026 review reported a 1.20x minimum on Easy Street's blanket loan.",
      "Three ceilings apply, and the lowest one sets your loan. Leverage: 75% of the pool's $1 million on a cash-out is $750,000, and the worked deal takes 70%, or $700,000. Coverage: at LendingOne's 1.00 the rent would carry about $1.05 million; on the net-cash-flow test, about $755,000. Program size: Easy Street goes to $5 million, LendingOne to $3 million, Roc and Civic to $2 million. Stretch to the full 75% and the net-cash-flow ratio falls to 1.06, just inside Roc's 1.05x floor.",
      "Why roll doors together? Five loans mean five servicers, five escrow accounts and five penalty schedules to track. In the worked deal, five existing loans totaling $412,000 become one $700,000 loan, and after an assumed $21,000 of costs, $267,000 comes back for the next flip or build. LendingOne lists BRRRR among its portfolio loan purposes, which fits the investor with a run of finished, rented rehabs.",
      "The catch is cross-collateralization. Each house gets an allocated share of the balance, and selling one means paying a release price, normally above that share, before the lender lifts its lien. Small-balance lenders rarely print release terms. Two SEC-filed single-family rental loan agreements used 115% of the allocated amount and a 105%–120% step-up. At 115%, releasing house B costs $169,050 on a $147,000 allocation, so $22,050 of your sale money pays down the rest of the loan.",
      "How it closes: you send a rent roll listing every property's value, rent, lease end, balance, taxes and insurance. Each house gets valued and a title search, the lender sets the allocations, and every old loan is paid off at the same closing. LendingOne says it can close in as little as a few weeks; leases, entity papers and all five payoff letters in hand on day one keep it that way.",
    ],
    formula: "Portfolio DSCR = total monthly rent ÷ total monthly PITIA",
    bullets: [
      "Occupancy is counted by door. Roc and Civic want at least 90% of units leased; with six doors, one empty unit leaves you at 83%.",
      "Geography can split a deal. Easy Street keeps every property in one state. Roc's lending map leaves out Vermont and both Dakotas; Lima One's leaves out those three and Alaska.",
      "Vacation rentals stay out at Roc and Civic. Finance an Airbnb on its own short-term rental loan.",
      "Conventional loans through Fannie Mae's automated underwriting cap you at 10 financed properties; portfolio programs keep no such tally.",
    ],
  },
  example: {
    title: "WORKED DEAL · FIVE RENTALS, ONE LOAN",
    rows: [
      ["Five rentals (six doors), combined value", "$1,000,000"],
      ["Combined monthly rent", "$8,675"],
      ["Blanket loan at 70%", "$700,000"],
      ["Five old loans paid off", "−$412,000"],
      ["Principal & interest", "$4,716"],
      ["Taxes, all five", "$1,080"],
      ["Insurance, all five", "$520"],
      ["Combined PITIA", "$6,316"],
    ],
    result: { label: "Portfolio DSCR", value: "1.37" },
    note: "7.125% over 30 years. After an assumed $21,000 of closing costs, about $267,000 comes back. House C alone: $1,050 of rent against a $1,078 share of PITIA, or 0.97. Numbers are illustrative; this isn't a rate quote.",
    dscr: 1.37,
  },
  audience: {
    heading: "Who rolls rentals into one loan.",
    items: [
      { title: "Investors juggling small loans", text: "Five payments, five escrows and five servicers collapse into one." },
      { title: "BRRRR investors with a run of finished deals", text: "Refinance the batch at one closing. LendingOne lists BRRRR among its portfolio loan purposes." },
      { title: "Buyers of a tenanted package", text: "Roc, Civic and LendingOne publish up to 80% LTV on portfolio purchases." },
      { title: "Equity harvesters", text: "Pull cash from several houses at once, up to 75% of their combined value, to fund the next flip or build." },
      { title: "Owners past ten financed homes", text: "Fannie Mae's automated underwriting stops at 10. A portfolio loan to your entity sits outside that count." },
      { title: "Owners with one weak house", text: "A below-market lease that misses 1.00 on its own can ride with the rest of the pool." },
    ],
  },
  requirements: {
    heading: "What a blanket lender wants to see.",
    intro: "Portfolio terms vary more from lender to lender than single-rental terms. These figures were published in October 2026.",
    rows: [
      ["Property count", "Lima One starts at 2. Easy Street and LendingOne start at 3, and LendingOne tops out at 20. Lima One's portfolio rental program page lists 5 or more."],
      ["Credit score", "680 at Roc and Civic; RCN's leverage grid also begins at 680."],
      ["Coverage", "LendingOne: 1.00, rent over PITIA. Roc and Civic: 1.05x, net cash flow over debt service. Easy Street: 1.20x, per a 2026 review."],
      ["Leverage", "Roc, Civic and LendingOne: up to 80% on a purchase or rate-and-term refinance, 75% on a cash-out. RCN: 60%–70% on purchases and 55%–65% on cash-outs, by credit tier."],
      ["Loan size", "Easy Street $225,000–$5 million; LendingOne up to $3 million; Roc and Civic up to $2 million. RCN's institutional program runs $2 million–$75 million and up."],
      ["Value per property", "At least $72,000 at Roc and Civic and $75,000 on Easy Street's blanket loans; other lenders set $100,000–$125,000."],
      ["Occupancy", "Roc and Civic want 90%+ of units leased. They count a leased unit at its lease or market rent, whichever is less, and an empty one at 90% of market."],
      ["Property types", "Roc and Civic take houses, 2–4 unit buildings, townhomes, PUDs and warrantable condos. Rural houses and vacation rentals are out."],
      ["Seasoning", "Roc needs 90 days of ownership before value replaces cost basis."],
      ["Recourse", "Roc and Civic: full recourse, and the owners pledge their stake in the borrowing LLC. Non-recourse at RCN and Lima One. LendingOne writes both."],
      ["Borrower", "An entity is required at Roc and Civic. Roc takes foreign nationals at up to 65% LTV."],
      ["Documents", "Rent roll, leases, insurance, entity papers and a payoff letter for each loan. LendingOne underwrites on coverage and doesn't ask for tax returns."],
    ],
  },
  costs: {
    heading: "What one loan costs.",
    intro: "Few lenders print portfolio pricing beyond a floor. Your rate turns on leverage, pooled coverage, loan size and the prepayment term. Figures as published in October 2026.",
    rows: [
      ["Advertised floors", "Roc from 5.39% and Civic from 6.56%. Floors assume top credit and low leverage."],
      ["Loan terms", "30-year fixed at LendingOne, with an optional first decade of interest-only, plus 5/1 and 10/1 ARMs. Some portfolio lenders write 5-, 7- and 10-year balloon terms instead."],
      ["Prepayment", "Easy Street usually writes 5/4/3/2/1 and offers 3/2/1, 2/1, none or 5% flat. Big institutional loans can carry yield maintenance instead; at one lender it runs through the first 54 months of a 5-year note."],
      ["Release premium", "The extra over allocation on each sale: $22,050 on house B at 115%. A prepayment premium can be charged on top."],
      ["Closing costs", "One closing, but every house still needs its own valuation and title work. The worked deal assumes $21,000."],
      ["Closing time", "LendingOne: as little as a few weeks."],
    ],
  },
  compare: {
    id: "compare",
    heading: "One blanket loan, or a separate DSCR loan on every door.",
    intro: "Same houses, two structures. Holding long and want one payment: go blanket. Planning to sell one house at a time: keep separate loans.",
    columns: ["", "Blanket portfolio loan", "Separate DSCR loans"],
    rows: [
      ["Closings", "One", "One per property"],
      ["How it qualifies", "Pooled ratio; strong doors carry weak ones", "Each property's own ratio"],
      ["House C (0.97 on its own)", "Rides with the pool at 1.37", "Misses a 1.00 floor; needs more equity or a 0.75–0.80 lender"],
      ["Selling one house", "Pay the release price, e.g. 115% of its allocation", "Pay off that house's loan; the rest stay put"],
      ["Credit floor", "680 at Roc and Civic", "620–680"],
      ["Leverage", "Up to 80% purchase, 75% cash-out", "Up to 80% purchase (85% at 720–740+), about 75% cash-out"],
      ["If one loan goes bad", "Every house in the pool is exposed", "Only that house is exposed"],
    ],
  },
  steps: {
    heading: "Four steps to one closing.",
    items: [
      { title: "Build the rent roll", text: "Value, rent, lease end, balance, taxes and insurance for every door. The rental cash flow calculator totals the pool." },
      { title: "Send the deal", text: "Press Fund My Deal and give a few details; it's roughly a minute, no credit pull. Then tell the loan specialist your property count, states and types." },
      { title: "Settle allocations", text: "Agree each house's share of the loan and its release price before you lock." },
      { title: "Close once", text: "Every house valued and title-checked, every old loan paid off, one new payment." },
    ],
  },
  faqs: [
    {
      q: "What is a portfolio loan for rental properties?",
      a: "One loan secured by several rentals and sized on their pooled value and rent. Investors use it to roll existing mortgages into one, to buy a package of tenanted houses, or to pull cash from several properties at one closing. In October 2026, Roc, Civic and LendingOne published up to 80% LTV on purchases and 75% on cash-outs.",
    },
    {
      q: "How many rentals do I need for a blanket loan?",
      a: "Two at Lima One, three at Easy Street and LendingOne, and Lima One's portfolio rental page lists five or more. LendingOne caps its SFR portfolio at 20 properties. Each house also has to clear a value floor: $72,000 at Roc and Civic, $75,000 on Easy Street's blanket loans. Easy Street also needs all of them in one state.",
    },
    {
      q: "What DSCR does a blanket loan need?",
      a: "That depends on how the lender measures it. LendingOne wants 1.00 on total rent over total PITIA. Roc and Civic want 1.05x on net cash flow: what's left of the rent after expenses, taxes and insurance, measured against principal and interest only. A 2026 review reported 1.20x at Easy Street. The worked pool shows 1.37 the first way and 1.13 the second.",
    },
    {
      q: "What credit score does a portfolio loan need?",
      a: "Plan on 680. That's the published floor on Roc's and Civic's portfolio programs and the first rung of RCN's leverage table. Single-property DSCR floors run lower, 620 to 660 at several lenders, so with a score in the 600s it can pay to keep separate loans until the score climbs, then consolidate.",
    },
    {
      q: "Can I sell one house out of a blanket loan?",
      a: "Only if the note includes a partial release clause. With one, you pay a release price, usually above the house's allocated share, and the lender lifts its lien on that property. Two SEC-filed single-family rental loan agreements used 115% and a 105%–120% step-up. At 115%, house B's $147,000 allocation means a $169,050 payoff. Negotiate the percentage before you sign.",
    },
    {
      q: "What strings come attached to a partial release?",
      a: "More than a price, at least on big loans. A 2018 Freddie Mac loan agreement filed with the SEC capped releases at two per calendar year, blocked them in the six months before maturity, wanted 30 days' notice and a $350 fee, and required 1.25 coverage on the houses left behind. Small-balance lenders rarely publish such terms, so ask for them in the term sheet.",
    },
    {
      q: "What is cross-collateralization?",
      a: "It means one house is on the hook for debt beyond its own. In a blanket loan, every house backs the full balance, so a default on the loan puts all of them at risk, not just the weakest one. It's also why you need a release clause: without one, no single house can leave the pool until the whole loan is paid off.",
    },
    {
      q: "Can the properties be in different states?",
      a: "It depends on the lender. Easy Street requires every property in its blanket loan to sit in one state. Elsewhere, check each lender's state list: Roc stays out of Vermont and both Dakotas, and Lima One out of those three plus Alaska. Any house in one of those states needs its own separate loan.",
    },
    {
      q: "Are portfolio loans recourse?",
      a: "It varies, so ask on the first call. Roc and Civic publish full recourse and take a pledge of the owners' stake in the borrowing entity. RCN and Lima One market their portfolio loans as non-recourse; LendingOne writes either kind. Even non-recourse loans normally keep carve-outs for bad acts such as fraud, so find out exactly what would put you personally on the hook.",
    },
    {
      q: "Do portfolio loans have prepayment penalties?",
      a: "Usually. Smaller blanket loans tend to step down: Easy Street typically writes 5/4/3/2/1 and offers 3/2/1, 2/1, none or 5% flat. Bigger institutional loans may use yield maintenance, which charges for the interest the lender loses; at one lender it covers the first 54 months of a 5-year note. A release can trigger the penalty on the amount you repay.",
    },
    {
      q: "Can I get an interest-only portfolio loan?",
      a: "Yes. LendingOne's 30-year fixed can start with a 10-year interest-only period. On the worked $700,000 at 7.125%, interest-only drops principal and interest of $4,716 to $4,156 of interest and lifts the pooled ratio from 1.37 to 1.51. When amortization begins over the last 20 years, the payment climbs to about $5,480 and the ratio falls to 1.23.",
    },
    {
      q: "Blanket loan or separate loans: which should I pick?",
      a: "Pick the blanket loan if you're holding for years, want a single payment and own a weak house the pool can carry. Pick separate loans if you'll sell one house at a time, since each one pays off with no release premium and no effect on the others. Plenty of investors do both: keepers in the pool, probable sales financed on their own.",
    },
    {
      q: "Can my own home go in a portfolio loan?",
      a: "No. Blanket loans are business-purpose credit for rentals that you and your family don't live in. Keep your residence, and any house a relative will occupy, out of the pool and finance it with a residential mortgage. The rentals can still go into one loan.",
    },
  ],
  related: ["dscr", "cash-out-refinance", "brrrr", "short-term-rental"],
  calculator: { href: "/calculators/rental-cash-flow", label: "Total your rent roll" },
  sources: [
    { label: "Roc Capital: rental portfolios", url: "https://roccapital.com/rental-portfolios" },
    { label: "Civic Financial Services: rental portfolio loans", url: "https://www.civicfs.com/rental-portfolio-loan/" },
    { label: "LendingOne: SFR portfolio loans", url: "https://lendingone.com/loan-types/sfr-portfolio-loans/" },
    { label: "Lima One: rental loans", url: "https://www.limaone.com/rental/" },
    { label: "Lima One: rental portfolio loans", url: "https://www.limaone.com/rental-portfolio-loans/" },
    { label: "Lima One: portfolio loan financing", url: "https://www.limaone.com/real-estate-portfolio-loan-financing/" },
    { label: "Lima One: short-term rental loans (states served)", url: "https://www.limaone.com/short-term-rental-loans/" },
    { label: "Easy Street Capital: EasyRent", url: "https://www.easystreetcap.com/easyrent" },
    { label: "RCN Capital: loan programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "CrowdfundedWealth: blanket loans, with SEC-filed release terms and lender reviews", url: "https://www.crowdfundedwealth.com/articles/blanket-loan-rental-portfolio" },
    { label: "Kiavi: DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
    { label: "Defy Mortgage: DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
    { label: "Fannie Mae, B2-2-03 (cap on financed properties)", url: "https://selling-guide.fanniemae.com/sel/b2-2-03/multiple-financed-properties-same-borrower" },
  ],
  updated: "2026-10-26",
};
