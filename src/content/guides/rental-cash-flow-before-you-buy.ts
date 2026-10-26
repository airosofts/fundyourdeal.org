import type { Guide } from "../types";

const rentalCashFlowBeforeYouBuy: Guide = {
  slug: "rental-cash-flow-before-you-buy",
  metaTitle: "Rental Cash Flow Before You Buy: Find Your Offer Price",
  metaDescription:
    "Run rent, PITIA, vacancy, repairs and DSCR before you offer on a rental, then solve for the price that cash flows. A $229,000 listing worked line by line.",
  category: "DSCR",
  title: "Rental cash flow before you buy: work back from the rent to your offer price",
  dek: "A DSCR (debt service coverage ratio) lender takes the property's monthly rent, divides it by the monthly payment, and lends if the result clears its minimum. That tells you whether you can borrow. Whether you should buy takes a second test with vacancy, repairs and management in it, and the answer to that one is a price.",
  readMinutes: 11,
  published: "2026-10-26",
  updated: "2026-10-26",
  keyTakeaways: [
    "Start from rent you can prove with signed leases on comparable homes. Lenders use the smaller of the lease or market rent, and some take only 90% of market rent on an empty house.",
    "Build the payment at your price: taxes as reassessed after the sale, a real insurance quote, HOA dues, and principal and interest at a sourced rate.",
    "The example listing at $229,000 shows a lender DSCR of 1.15, enough for every published minimum, and still loses about $230 a month after reserves.",
    "At 80% leverage and 7.375%, every $10,000 off the price lowers that house's monthly cost by about $67.",
    "Solved backward, the offer ceiling is about $194,000 at 80% leverage, $205,000 at 75%, or about $223,000 if you manage the property yourself.",
    "Run the numbers before you write the offer. Once you're under contract, the price is the one lever you've already used.",
  ],
  body: [
    { type: "h2", text: "Two tests: the lender's and yours", id: "two-tests" },
    {
      type: "p",
      text: "Rental cash flow before you buy comes down to two calculations. The first is the lender's: [DSCR](/glossary#dscr), qualifying rent divided by the full monthly payment. Published minimums in October 2026 run from 0.75 at LendingOne and Defy, through 0.80 at Kiavi and 1.00 at Lima One and RCN Capital, to 1.05 at Roc Capital and Civic. Easy Street publishes no minimum, and Griffin and Angel Oak offer programs with no ratio at all.",
    },
    { type: "formula", text: "DSCR = qualifying monthly rent ÷ PITIA" },
    {
      type: "p",
      text: "The second test is yours, and nobody else runs it. DSCR lenders qualify the loan on the property's income, not yours, so they don't ask whether the house pays you after the costs they leave out: vacancy, repairs, capital items and management. A house can pass the first test and fail the second by hundreds of dollars a month.",
    },
    { type: "formula", text: "Monthly cash flow = rent − PITIA − vacancy − repairs and capital items − management" },
    { type: "h2", text: "The listing: a move-in-ready three-bed at $229,000", id: "the-listing" },
    {
      type: "p",
      text: "The house is a 2004 single-family with three bedrooms and two baths, vacant, with no work needed. It's listed at $229,000. Leased comparables within a mile went for $1,900 to $2,000 a month, so you underwrite $1,950. The seller's tax bill is $2,150 a year, and the subdivision charges $30 a month in HOA dues.",
    },
    {
      type: "table",
      caption: "An illustrative listing. The tax rate and insurance quote are assumptions; replace them with your county's numbers and a real quote.",
      head: ["Input", "Amount", "Where to get it"],
      rows: [
        ["List price", "$229,000", "The listing"],
        ["Market rent", "$1,950 a month", "Signed leases on similar homes nearby"],
        ["Property taxes at your price", "1.4% of price a year", "County assessor: rate and reassessment practice"],
        ["Landlord insurance", "$1,560 a year ($130 a month)", "A quote on a landlord (dwelling) policy"],
        ["HOA dues", "$30 a month", "HOA budget or resale certificate"],
        ["Loan", "80% of price, 30-year fixed at 7.375%", "A DSCR rate quote at your score and leverage"],
      ],
    },
    { type: "h2", text: "Step 1: pin down the rent a lender will count", id: "rent" },
    {
      type: "p",
      text: "Use signed leases, not asking rents and not the listing's pro forma. Match the bedroom and bath count, condition and school zone, and stay close. The lender's appraiser will form an opinion of market rent the same way, and the DSCR lender then takes whichever is smaller, your lease or that opinion. Kiavi allows the lease to count up to 110% of the market figure.",
    },
    {
      type: "p",
      text: "On a vacant purchase there's no lease yet, and that matters at some lenders. Roc Capital and Civic count an unleased unit at 90% of market rent, so this house would qualify there on $1,755, not $1,950. Run both numbers. If you're buying for nightly bookings, a different set of income rules applies: lenders use projections such as AirDNA at purchase and trailing 12 months of bookings at refinance. See [short-term rental loans](/short-term-rental-loans).",
    },
    { type: "h2", text: "Step 2: build PITIA at your price, not the seller's", id: "pitia" },
    {
      type: "p",
      text: "[PITIA](/glossary#pitia) is principal, interest, taxes, insurance and association dues: everything the lender puts in the payment. Build each piece at the price you'd pay.",
    },
    {
      type: "ul",
      items: [
        "**Principal and interest.** Most DSCR lenders publish 80% loan-to-value on a purchase; a few go to 85% for scores of 720 to 740 and up. For a rate, 7.375% was the 2025 median on 30-year investor loans in a third-party analysis of HMDA data; Griffin advertised from 7.125% on October 14, 2026, Defy's best case on October 23 was 7.375% at 740+ credit and 75% LTV, and Total Quality Lending showed 6.875% to 7.25% on October 26 for 800 credit, with points. At $229,000, an 80% loan is $183,200 and P&I is $1,265.",
        "**Taxes.** The seller's bill reflects the seller's assessment. Many counties reassess at the sale price, so use the rate times your price. At an assumed 1.4%, that's $3,206 a year, or $267 a month, not the seller's $179.",
        "**Insurance.** Get a landlord policy quote before you offer. Owner-occupant premiums don't apply. This one is $130 a month.",
        "**HOA.** $30 a month. Check for special assessments and any rental caps in the covenants.",
      ],
    },
    {
      type: "p",
      text: "Total PITIA at the list price is $1,692. Divide $1,950 by it and the DSCR is 1.15, which passes every published minimum. At Roc or Civic's 90% vacant rent it's 1.04, just under their 1.05. Using the seller's tax bill instead would have shown $1,604 and a 1.22. That one shortcut overstates the house by $88 a month.",
    },
    { type: "h2", text: "Step 3: add the costs the lender leaves out", id: "reserves" },
    {
      type: "table",
      caption: "Reserves as a share of $1,950 rent. Vacancy and management follow the sources noted; the repair reserve is an assumption to adjust for the age of the roof, HVAC and water heater.",
      head: ["Reserve", "Basis", "Monthly"],
      rows: [
        ["Vacancy and unpaid rent", "7% of rent, near the 7.3% national rental vacancy rate for Q2 2026 (Census Bureau)", "$137"],
        ["Repairs and capital items", "8% of rent (assumption)", "$156"],
        ["Property management", "10% of rent, inside the 8–12% single-family managers quoted in 2026", "$195"],
        ["Total reserves", "25% of rent", "$488"],
      ],
    },
    {
      type: "p",
      text: "Now the cash flow at the list price: $1,950 of rent, minus $1,692 of PITIA, minus $488 of reserves, is about −$230 a month. The lender sees +$258. You'd be feeding the house about $2,760 a year.",
    },
    {
      type: "callout",
      title: "Your break-even DSCR",
      text: "If reserves take 25% of the rent, only 75% is left for the payment, so the house breaks even at a DSCR of 1 ÷ 0.75, about 1.33. Clearing a lender's 1.00 or 1.05 minimum says nothing about that. Work out your own break-even ratio from your reserve percentage and treat it as your real minimum.",
    },
    {
      type: "p",
      text: "Budget the one-time costs too. A manager who places the tenant typically charges 50% to 100% of the first month's rent, and the house earns nothing until a lease starts.",
    },
    {
      type: "p",
      text: "Loan structure helps the lender's ratio more than your cash flow. DSCR lenders commonly offer interest-only for the first 10 years. At the list price that cuts the payment to $1,126 and lifts the DSCR to 1.26, yet the house still runs about −$91 a month after reserves, and you build no equity from payments. A 40-year term, offered at some lenders, gets you to a $1,189 payment and about −$153.",
    },
    { type: "h2", text: "Step 4: solve for the offer price", id: "offer-price" },
    {
      type: "p",
      text: "Turn the question around: what price makes the cash flow zero after reserves? Every dollar of price adds 80 cents of loan and its share of the tax bill. At 7.375% over 30 years, each dollar borrowed costs $0.0069068 a month, so each $10,000 of price costs about $55 a month in P&I plus $12 in taxes. That's $67 a month, the number that decides your offer.",
    },
    {
      type: "formula",
      text: "Break-even price = (rent − reserves − insurance − HOA) ÷ (LTV × payment per $1 + tax rate ÷ 12) = $1,302.50 ÷ 0.0066921 ≈ $194,600",
    },
    {
      type: "table",
      caption: "30-year fixed at 7.375%, 80% LTV, taxes at 1.4% of price, insurance $130, HOA $30, reserves $488. Cash to close is 20% down plus $6,500 of assumed closing costs, before reserves.",
      head: ["Offer price", "Loan", "PITIA", "DSCR, leased", "DSCR at 90% rent", "Cash flow after reserves", "Cash to close"],
      rows: [
        ["$229,000 (list)", "$183,200", "$1,692", "1.15", "1.04", "−$230", "$52,300"],
        ["$215,000", "$172,000", "$1,599", "1.22", "1.10", "−$136", "$49,500"],
        ["$205,000", "$164,000", "$1,532", "1.27", "1.15", "−$69", "$47,500"],
        ["$194,000", "$155,200", "$1,458", "1.34", "1.20", "+$4", "$45,300"],
        ["$180,000", "$144,000", "$1,365", "1.43", "1.29", "+$98", "$42,500"],
      ],
    },
    {
      type: "p",
      text: "At 80% leverage, the offer ceiling on this house is about $194,000, 15% under list. On the rent alone, a lender with a 1.00 minimum would pass this house at $229,000 and well above it. Lender approval isn't the test that protects you.",
    },
    { type: "h3", text: "Other ways to close the gap" },
    {
      type: "ul",
      items: [
        "**Put more down.** At 75% leverage the break-even price rises to about $205,000, but cash to close rises to $57,750 at that price. More cash in, same cash flow.",
        "**Manage it yourself.** Drop the $195 management reserve and break-even moves to about $223,000. You're paying yourself in time instead.",
        "**Win on rate.** At $194,000, a 7.0% loan turns the cash flow to about +$44; 7.875% turns it to about −$49.",
        "**Find more rent.** If the rent is really $1,850, the $194,000 price runs about −$71 a month with reserves scaled to the lower rent. Rent is the input most worth checking twice.",
      ],
    },
    {
      type: "cta",
      text: "Found a rental that works at your price? Send us the address, the rent and your offer and we'll quote the DSCR loan before you sign.",
      href: "/get-funding?loan=dscr",
      label: "Get rental funding",
    },
    { type: "h2", text: "What the lender will ask for at your price", id: "lender-check" },
    {
      type: "p",
      text: "At $194,000 the loan is $155,200, well inside published DSCR loan ranges of about $70,000 to $4.5 million; Roc and Civic start at $75,000. Minimum credit scores run 620 to 680, with most lenders at 640 to 660.",
    },
    {
      type: "p",
      text: "Reserves are the line investors forget. Published requirements run from none at Kiavi to three months of PITIA at Defy and three to nine months at Easy Street. Three months here is $4,375, so plan on about $49,675 in total: $45,300 to close plus the reserves. Closing typically takes two to five weeks; Defy quotes 14 to 21 days and Griffin reports an average of 34. Expect a 5-4-3-2-1 prepayment penalty unless you pay up in rate for a shorter one.",
    },
    {
      type: "p",
      text: "What does break-even buy you? At $194,000 the cash flow after reserves is about zero, so your return comes from about $1,466 of principal paid down in year one, any appreciation, and whatever part of the reserves you don't end up spending. If you want cash-on-cash income from day one, you need a lower price: at $180,000 the house clears about $98 a month, roughly $1,175 a year or 2.8% on $42,500 of cash to close.",
    },
    { type: "h2", text: "Run it before you write the offer", id: "before-the-offer" },
    {
      type: "ol",
      items: [
        "**Pull three to five signed leases** on comparable homes and set the rent at the middle, not the top.",
        "**Call the county assessor** or check its site for the tax rate and whether a sale triggers reassessment.",
        "**Get a landlord insurance quote** on the address. Coastal, wildfire and older-roof homes can swing it a lot.",
        "**Get a DSCR rate quote** at your score and leverage, and ask whether the lender counts vacant units at 90%.",
        "**Put the inputs into** our [cash flow calculator](/calculators/rental-cash-flow) and test the ratio with the [DSCR calculator](/calculators/dscr).",
        "**Set your ceiling and offer below it,** so the inspection has room to find something.",
        "**Re-run after the inspection** with real repair numbers before your contingency expires.",
      ],
    },
    {
      type: "p",
      text: "If the house needs work, the math changes: you're buying below after-repair value and planning a refinance. The [BRRRR method step by step](/guides/brrrr-method-step-by-step) works one of those deals through, and [LTV vs. LTC vs. ARV](/guides/ltv-vs-ltc-vs-arv) explains how each kind of loan is sized.",
    },
    {
      type: "p",
      text: "A DSCR loan is business-purpose credit for a property you rent out; you and your relatives can't live in it. If you'd be moving in, that's a job for a residential mortgage lender. For tax treatment of rental income or depreciation, talk to a CPA.",
    },
    {
      type: "cta",
      text: "Know your number? Get the rental loan lined up so your offer can close on time.",
      href: "/get-funding?loan=dscr",
      label: "Get rental funding",
    },
  ],
  faqs: [
    {
      q: "How do you calculate cash flow on a rental before buying it?",
      a: "Start with market rent from signed leases on similar homes. Subtract the full payment at your price: principal and interest, taxes as reassessed after the sale, insurance and HOA dues. Then subtract reserves for vacancy, repairs and management, about 25% of rent in our example. What's left is your monthly cash flow. Run it at several prices to find the one that works.",
    },
    {
      q: "What DSCR should a rental have before you buy it?",
      a: "Lenders publish minimums from 0.75 to 1.05, and a few programs have none. Clearing the minimum gets you a loan, not a cash-flowing property. In our example, a DSCR of 1.15 still meant losing about $230 a month after vacancy, repairs and management, and the house only broke even at 1.34. With reserves at 25% of rent, the payment can use only 75% of it, so break-even takes a DSCR near 1.33.",
    },
    {
      q: "What vacancy rate should I use for rental cash flow?",
      a: "Use your local rental market if you can find it, and the national rate as a check. The Census Bureau put the national rental vacancy rate at 7.3% for the second quarter of 2026. Our example budgets 7% of rent. Turnover costs, such as cleaning, paint and a leasing fee of 50% to 100% of a month's rent if a manager places the tenant, come on top.",
    },
    {
      q: "Does a DSCR lender use projected rent or actual rent?",
      a: "Usually whichever is smaller: the signed lease or the appraiser's opinion of market rent. Kiavi lets a lease count up to 110% of market rent. On a vacant property, Roc Capital and Civic count 90% of market rent. Short-term rentals are different: lenders use projections such as AirDNA at purchase and trailing 12-month bookings at refinance.",
    },
    {
      q: "How do I work out the most I should offer on a rental?",
      a: "Solve for the price where cash flow after reserves reaches your target. Divide what's left of the rent after reserves, insurance and HOA by the monthly cost of each dollar of price, which is your leverage times the loan payment factor plus the tax rate divided by 12. In our example that gave about $194,000 on a $229,000 listing at 80% leverage and 7.375%.",
    },
    {
      q: "Can I get a DSCR loan on a property that doesn't cash flow?",
      a: "Often, yes. Lenders test the rent against the payment, not against vacancy, repairs or management, so a property can clear a 1.00 minimum and still cost you money each month. Some programs go further: Easy Street publishes no minimum DSCR, and Griffin and Angel Oak offer no-ratio options. Being able to borrow isn't a reason to buy; run your own cash flow first.",
    },
  ],
  related: {
    programs: ["dscr", "brrrr", "portfolio", "short-term-rental"],
    guides: ["brrrr-method-step-by-step", "ltv-vs-ltc-vs-arv", "refinance-after-rehab", "closing-an-investor-loan-fast"],
  },
  sources: [
    { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
    { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
    { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
    { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Roc Capital — Single-property rentals (1.05 DSCR, 90% of market rent if vacant)", url: "https://roccapital.com/single-property-rentals" },
    { label: "Civic Financial Services — Rental loans", url: "https://www.civicfs.com/rental/" },
    { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
    { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
    { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
    { label: "Defy Mortgage — DSCR loan rates (October 23, 2026)", url: "https://defymortgage.com/dscr-loan-rates/" },
    { label: "Total Quality Lending — DSCR rates (October 26, 2026)", url: "https://www.totalqualitylending.com/loans/dscr/rates" },
    { label: "Angel Oak — Investor cash flow program", url: "https://angeloakms.com/programs/investor-cash-flow-mortgage-program/" },
    { label: "OfferMarket — 40-year DSCR loans", url: "https://offermarket.us/blog/40-year-dscr-loan" },
    { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
    { label: "Easy Street Capital — Short-term rental financing", url: "https://www.easystreetcap.com/short-term-rental-financing/" },
    { label: "Crowdfunded Wealth — 2026 hard money rate report built on 2025 HMDA data", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
    { label: "U.S. Census Bureau — Housing Vacancies and Homeownership, Q2 2026 (released July 28, 2026)", url: "https://www.census.gov/housing/hvs/current/index.html" },
    { label: "Home365 — What property management costs in 2026 (updated October 18, 2026)", url: "https://www.home365.co/general-knowledge/property-management/property-management-fees-2026/" },
  ],
};

export default rentalCashFlowBeforeYouBuy;
