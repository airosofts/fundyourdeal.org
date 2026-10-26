import type { ProgramContent } from "../types";

export const shortTermRental: ProgramContent = {
  slug: "short-term-rental",
  metaTitle: "Short-Term Rental Loans: Airbnb & VRBO DSCR Terms (2026)",
  metaDescription:
    "Short-term rental loans for Airbnb and VRBO homes: how lenders count nightly income, 2026 LTV and rate ranges, permits, condotels and a DSCR example.",
  eyebrow: "Airbnb & VRBO loans · 1–4 units",
  h1: "Short-term rental loans: sized on nightly income, after the lender's haircut.",
  intro:
    "Short-term rental loans are DSCR (debt service coverage ratio) loans for Airbnb and VRBO properties: the lender divides what the booking calendar earns each month by the monthly payment, and sizes the loan on that ratio instead of your tax returns. What decides the deal is which income the lender counts — a year of bookings, a projection or a long-term rent — and how much it trims first.",
  facts: [
    { label: "Max LTV, purchase", value: "75–80%" },
    { label: "Max LTV, cash-out", value: "70–75%" },
    { label: "Income haircut", value: "0–25%" },
    { label: "STR rate range", value: "7–10%" },
  ],
  overview: {
    heading: "Airbnb loans: three ways to count the income, and the lender picks.",
    paragraphs: [
      "A long-term rental has a lease and an appraiser's rent schedule. A short-term rental has a calendar that swings with the season, so lenders choose among three income sources: 12 months of actual bookings, a third-party projection such as AirDNA, or the appraiser's long-term market rent. The ratio is the same as on any rental — monthly income divided by PITIA — but the income figure can roughly double depending on the method. Easy Street says long-term rent is generally about half of what a short-term rental can earn.",
      "What the ratio means on an STR. PITIA is the full monthly payment: principal, interest, property taxes, insurance and any HOA dues. A DSCR of 1.00 means the counted income exactly covers it; 1.25 means the income is 25% more than the payment. Most long-term rental programs accept 1.00 and a few go to 0.75, but the STR minimums we found published sat higher — 1.20 at RCN, per a third-party listing, and 1.25 in HomeBridge's 2023 guidelines — because a booking calendar is less predictable than a lease. Your loan is the smaller of two amounts: the LTV cap, or the largest loan whose payment the counted income covers at the minimum.",
      "Which method you get depends on the property and on you. A seasoned STR refinances on what it actually booked. A purchase usually runs on a projection, and lenders discount projections more for hosts without a track record. A lender that won't use short-term data underwrites the house as an ordinary 12-month rental — which is why the same property can clear one lender easily and fail at another.",
      "Break-even occupancy is the number to check before you offer. Work backward from the payment: multiply PITIA by the lender's minimum DSCR, gross it up for the haircut and divide by your nightly rate to get the nights you must book. In the example, PITIA is $3,013. With a 25% haircut, a 1.00 minimum takes $48,206 of bookings a year — about 182 nights at $265, or 50% occupancy. A 1.20 minimum takes $57,848, about 218 nights or 60%, which is where the example lands. Each 10 points of occupancy moves the ratio by about 0.20; each $10 of nightly rate at 60% occupancy, by about 0.05.",
      "How much you can borrow on an Airbnb comes from the same math run the other way. Divide qualifying income by the minimum DSCR, subtract taxes and insurance, and turn what's left into a loan amount at the quoted rate. In the example, $3,627 ÷ 1.20 allows $3,023 of PITIA; less $595 of taxes and insurance, that leaves $2,428 of principal and interest, enough to carry about $338,900 at 7.75% over 30 years — just above the $337,500 that 75% LTV allows. Counted in full, with no haircut, the same bookings support about $479,500, so for an experienced host the LTV cap, not the income, sets the loan.",
      "Interest-only buys ratio now and gives it back later. Lima One lists fixed, adjustable, interest-only and balloon structures on its STR loans. On the example, interest-only at 7.75% cuts the payment on $337,500 from $2,418 to $2,180, PITIA to $2,775, and lifts the DSCR from 1.20 to 1.31. If the interest-only period runs 10 years and the loan then amortizes over the last 20 — the structure on Easy Street's rental program — principal and interest rises to $2,771 in year 11 and the ratio falls to 1.08 on the same income.",
    ],
    formula: "STR DSCR = (annual gross revenue × (1 − haircut) ÷ 12) ÷ PITIA",
    bullets: [
      "DSCR runs on gross revenue. Cleaning, platform fees, utilities, supplies and management come out of the same dollars, so a 1.20 on an STR leaves less real cash flow than a 1.20 on a long-term lease.",
      "Platform fees are a cost the ratio doesn't see. Airbnb's host-only fee is 15.5% for most hosts (the older split fee charged hosts 3%). On the example's $58,035 of bookings that's $8,995 a year, or $750 a month; gross income of $4,836, less that fee and the $3,013 payment, leaves about $1,074 a month for cleaning, supplies, utilities, repairs and management.",
      "Rate moves a thin STR ratio quickly. On the example, 7.25% gives 1.25, 8.25% gives 1.16 and 8.75% gives 1.12 — roughly 0.05 of DSCR for every half point — so a deal that clears by a hair at one rate can fail at the next.",
      "Trailing-12-month underwriting captures your slow season. With less than a year of bookings, expect a projection or market rent instead — Easy Street's 2023 guidelines cut the projection by 25% in that case.",
      "Insurance sits inside PITIA. A policy written for short-term rental use, with higher liability limits, raises the payment side of the ratio.",
    ],
  },
  example: {
    title: "WORKED EXAMPLE",
    rows: [
      ["Average nightly rate", "$265"],
      ["Occupancy", "60% · 219 nights"],
      ["Annual gross ($265 × 219)", "$58,035"],
      ["Monthly gross (÷ 12)", "$4,836"],
      ["Qualifying income (25% haircut)", "$3,627"],
      ["Principal & interest", "$2,418"],
      ["Property taxes", "$375"],
      ["Insurance (STR policy)", "$220"],
      ["PITIA", "$3,013"],
    ],
    result: { label: "DSCR", value: "1.20" },
    note: "$450,000 purchase, 25% down, $337,500 loan at 7.75% over 30 years, no HOA. Projection-based purchase by a newer host; with no haircut the same house shows about 1.6. Illustrative only — not a rate quote.",
    dscr: 1.2,
  },
  audience: {
    heading: "Who uses short-term rental loans: investors who rent by the night.",
    items: [
      { title: "Hosts adding listings", text: "Each property qualifies on its own income, so your second or fifth STR doesn't hinge on your debt-to-income ratio." },
      { title: "Buyers in vacation markets", text: "Buy on a revenue projection instead of a lease. Experienced hosts can get the projection counted in full at some lenders." },
      { title: "Owners of a seasoned STR", text: "Twelve months of booking statements let you refinance or cash out on what the property actually earned." },
      { title: "Self-employed operators", text: "A paper loss on Schedule E doesn't matter. The loan is underwritten on the property's revenue, not your taxable income." },
      { title: "Owners of two or more STRs", text: "Vacation rentals can close together. Lima One's case study shows a $799,000 loan on a $1.12 million purchase of a duplex and a mountain cabin in Asheville. Roc's and Civic's long-term portfolio programs exclude vacation rentals." },
      { title: "Mid-term and seasonal operators", text: "Some rental programs underwrite more than one occupancy type. Easy Street's rental program lists long-term, mid-term and short-term rentals and allows vacancy at purchase." },
    ],
  },
  requirements: {
    heading: "Short-term rental loan requirements: what lenders check before they count a booking.",
    intro: "An STR file gets the usual DSCR checklist plus a legality review. Fewer lenders publish STR terms than long-term terms, so several rows rest on one or two lenders' published figures as of October 2026.",
    rows: [
      ["Property types", "1–4 unit homes, townhomes and condos used as vacation rentals. Condotels and non-warrantable condos are eligible at fewer lenders; Defy and Angel Oak list them. Some portfolio programs, such as Roc's and Civic's, exclude vacation rentals entirely."],
      ["Credit score", "Expect a higher floor than on a long-term rental. Lima One's STR program lists 700, against 620–680 for most long-term DSCR programs. Easy Street's rental program, which covers short-term occupancy, starts at 640."],
      ["DSCR", "Rarely published. Minimums we found ran 1.20 (RCN, per a third-party listing) to 1.25 (HomeBridge's 2023 guidelines). Easy Street publishes no minimum."],
      ["Leverage", "Lima One: up to 75% loan-to-value on a purchase and 70% on a cash-out. Easy Street's general limits are 80% and 75%. Plan on 20–25% down."],
      ["Loan size", "$75,000–$2.5 million at Lima One. Easy Street's rental program runs $100,000–$3.5 million+ and wants an appraised value of at least $100,000."],
      ["Loan structure", "Lima One lists fixed, adjustable, fully amortizing, interest-only and balloon options. Easy Street's interest-only option runs 10 years, then amortizes over 20."],
      ["Income evidence", "Purchase: an AirDNA-style revenue report or the appraiser's market rent. Refinance: 12 months of platform or property-manager statements."],
      ["Experience", "Not required at Easy Street, but it changes the math: hosts with a successful STR in the same market, or three or more nationally, get 100% of the AirDNA projection."],
      ["Reserves", "Rarely published for STRs. Easy Street asks for 3–9 months of PITIA in liquid funds and counts retirement accounts, stocks and bonds at 10%–20% below their value — $9,039 to $27,117 on the example's $3,013 payment."],
      ["Permits and local law", "The use must be legal where the property sits. Fannie Mae requires STRs to be legally permitted, including local registration and licensing, and Griffin requires a market that allows STR use. Arizona cities can require a permit but can't ban STRs; New York City requires registration for stays under 30 days."],
      ["HOA and condo rules", "Covenants can ban rentals shorter than a set term or cap rental units. Read the CC&Rs before you sign a contract — a minimum-lease rule ends the STR plan regardless of the projection."],
      ["Insurance", "A policy written for short-term rental use, with liability coverage. Arizona requires at least $500,000 in aggregate liability, or equal coverage through the booking platform."],
      ["Excluded states", "Lima One lends in 46 states and D.C., but not in Alaska, North Dakota, South Dakota or Vermont."],
      ["Not needed", "Tax returns, W-2s, pay stubs or a long-term lease."],
    ],
  },
  costs: {
    heading: "Short-term rental loan rates and costs in 2026.",
    intro: "STR loans usually price above long-term DSCR loans; LendingOne's published ranges show the gap. Figures below are as lenders published them in September–October 2026.",
    rows: [
      ["Rate range", "LendingOne published 7%–10% for short-term rental loans against 7%–9% for its average investor loan (September 2026)."],
      ["Advertised floors", "Lenders' advertised DSCR floors ran 5.39%–6.56% in October 2026. Those are best-case prices for top credit and low leverage; budget above them for an STR."],
      ["Interest-only pricing", "On one wholesale DSCR rate sheet dated October 23, 2026, interest-only cost 0.25–0.75 points depending on LTV — 0.5 points at 70–75% LTV, or $1,688 on the example's $337,500."],
      ["Prepayment penalty", "A 5-4-3-2-1 step-down is the default; 3-2-1, 2-1 or none are available for more rate. Worth paying for if a change in local rules could push you to sell early."],
      ["Points and fees", "Origination and points vary by lender. The appraisal may carry a rent schedule and the file a third-party income report; ask who pays for each."],
      ["Startup costs", "Furniture, linens, supplies and listing photos come out of your cash, not loan proceeds — and lenders can still require reserves after closing."],
      ["Closing time", "About 2–5 weeks, as with other DSCR loans. Permit and HOA review can add time in regulated markets."],
    ],
  },
  compare: {
    id: "compare",
    heading: "How lenders count Airbnb income: three methods, three answers.",
    intro: "The income method decides the loan. Purchases usually run on a projection, refinances on trailing bookings, and lenders that won't underwrite STR data fall back to long-term rent. Fannie Mae's rule is shown for contrast.",
    columns: ["Income source", "How lenders use it", "Haircut and fine print"],
    rows: [
      [
        "12-month booking history",
        "The standard for a refinance or the purchase of an operating STR. The lender averages 12 months of actual revenue from platform or property-manager statements; HomeBridge's 2023 guidelines asked for 12 months of third-party manager payment history.",
        "Some lenders count it in full. A 2023 summary of AD Mortgage guidelines used 75% of the 12-month average. A full year includes your off-season, so a strong summer alone won't carry the file.",
      ],
      [
        "AirDNA-style projection",
        "Used on purchases with no history: a third-party report estimates annual revenue from comparable listings nearby. Lima One, Angel Oak and Easy Street name AirDNA.",
        "Easy Street counts 100% for professional hosts — a successful STR in the same market or three or more nationally. Its 2023 guidelines took 25% off for hosts with under 12 months of history.",
      ],
      [
        "Appraiser's long-term market rent",
        "The fallback when a lender won't use short-term data: the appraiser's rent schedule for a 12-month lease, as on any DSCR loan. Griffin qualifies some STRs this way.",
        "No haircut, but a lower number to start with. Easy Street says long-term rent is generally about half of potential STR earnings, so the house is underwritten as an ordinary rental.",
      ],
      [
        "Conventional (Fannie Mae), for contrast",
        "One-unit investment properties that are legally permitted as STRs. Purchase: 50% of monthly gross STR rent, minus PITIA. Refinance: 12-month Schedule E cash flow, minus PITIA.",
        "The 50% covers vacancy and maintenance. A positive result can only offset the property's own payment; a negative one counts against your debt-to-income ratio.",
      ],
    ],
  },
  steps: {
    heading: "How to get a short-term rental loan in four steps.",
    items: [
      { title: "Check the rules first", text: "Confirm the city or county allows STRs, what permit it requires and what the HOA covenants say. No legal path, no STR loan." },
      { title: "Run haircut numbers", text: "Take a revenue projection, cut it 25% and check the DSCR with our calculator. At 1.25 or higher you clear every STR minimum we found published." },
      { title: "Get your terms fast", text: "A 60-second form, then a loan specialist calls you back to agree how your nightly income is counted — projection, booking history or long-term rent." },
      { title: "Appraise and close", text: "The appraisal and income report set the numbers. Close in your name or your LLC, typically in two to five weeks." },
    ],
  },
  faqs: [
    {
      q: "Can I get a DSCR loan for an Airbnb?",
      a: "Yes. Many DSCR lenders finance Airbnb and VRBO properties and qualify them on short-term rental income instead of your personal income. On a purchase they usually rely on a projection such as AirDNA; on a refinance, 12 months of actual bookings. Terms are tighter than on a long-term rental — Lima One, for example, caps STR purchases at 75% loan-to-value with a 700 minimum credit score.",
    },
    {
      q: "What is DSCR on a short-term rental loan?",
      a: "DSCR stands for debt service coverage ratio: the property's monthly income divided by its monthly payment of principal, interest, taxes, insurance and HOA dues. On a short-term rental, the income is booking revenue or a projection, often after a haircut. At 1.00 the income exactly covers the payment; at 1.25 it's 25% more. The STR minimums we found published ran 1.20–1.25, above the 1.00 most long-term programs accept.",
    },
    {
      q: "How do lenders calculate Airbnb income for a DSCR loan?",
      a: "They take annual gross revenue from booking history or a projection, may apply a haircut, divide by 12 and compare the result with the full monthly payment, including taxes, insurance and HOA dues. Haircuts we found ranged from none for professional hosts to 25% for newer hosts at Easy Street. Some lenders skip short-term data and use the appraiser's long-term market rent instead.",
    },
    {
      q: "What credit score do I need for an Airbnb loan?",
      a: "Plan on 700 for the widest choice. Lima One's short-term rental program lists a 700 minimum, while long-term DSCR programs mostly start at 620–680, and Easy Street's rental program, which also covers short-term occupancy, starts at 640. Below 700, expect fewer programs and, at many lenders, lower leverage, so ask how your score changes the maximum loan-to-value before you write an offer.",
    },
    {
      q: "How much can I borrow on an Airbnb property?",
      a: "The smaller of two numbers: the lender's LTV cap — 75% of value on a purchase at Lima One — and the largest loan the counted income covers at the minimum DSCR. On a $450,000 house grossing $58,035 a year, a 25% haircut and a 1.20 minimum support about $338,900 at 7.75% over 30 years, almost exactly the $337,500 cap. Without the haircut, income stops being the limit.",
    },
    {
      q: "What occupancy rate does an Airbnb need to qualify for a loan?",
      a: "Work it backward from the payment. Multiply the monthly payment by the minimum DSCR, divide by the share of income the lender counts, multiply by 12 and divide by your nightly rate. On a $3,013 payment, a 25% haircut and $265 a night, a 1.00 minimum needs about 182 booked nights (50% occupancy) and 1.20 about 218 nights (60%). Use the projection's nightly rate, not your best weekend.",
    },
    {
      q: "Do I need hosting experience to get a short-term rental loan?",
      a: "Not always. Easy Street, for example, lists no STR history requirement. Experience changes how your income is counted, though. Easy Street counts 100% of the AirDNA projection for professional hosts — a successful STR in the same market or three or more nationally — while newer hosts can see the projection discounted or be underwritten on long-term market rent.",
    },
    {
      q: "Is it harder to get a loan for an Airbnb than for a long-term rental?",
      a: "Somewhat. Published terms are tighter line by line: Lima One wants 700 credit and caps leverage at 75% on a purchase and 70% on a cash-out, against the 80% and 75% common on long-term rental programs. The STR DSCR minimums we found ran 1.20–1.25 instead of 1.00, and LendingOne's STR rate range was 7%–10% against 7%–9% for its average investor loan.",
    },
    {
      q: "Can I get an interest-only loan on a short-term rental?",
      a: "Yes, at some lenders. Lima One lists interest-only and balloon structures on its STR loans. Interest-only lowers the payment, which raises the DSCR — from 1.20 to 1.31 on a $337,500 loan at 7.75% with $595 of monthly taxes and insurance. You pay down no principal, though, and when a 10-year interest-only period ends and the loan amortizes over 20 years, the payment rises by about $590 a month.",
    },
    {
      q: "Can I use a second-home mortgage for a vacation rental?",
      a: "Not for a full-time rental. Second-home loans carry occupancy rules. Under Fannie Mae's guidelines you must occupy the home for part of the year, keep exclusive control of it and not place it under a management agreement that controls who stays there, and rental income can't be used to qualify. A property you rent out full-time is an investment property and needs an investment loan.",
    },
    {
      q: "How much do I need to put down on an Airbnb property?",
      a: "Usually 20–25%. Lima One lends up to 75% of value on STR purchases, so 25% down; Easy Street's general purchase limit is 80%. If the DSCR comes in thin after the lender's haircut, the usual fix is a larger down payment, which lowers the monthly payment and raises the ratio on the same projected income.",
    },
    {
      q: "Can I use a DSCR loan for a mid-term rental?",
      a: "Often, yes. Furnished stays of 30 days or more sit between a lease and nightly bookings, and some programs cover them: Easy Street's rental program lists long-term, mid-term and short-term occupancy. Ask which income the lender will count — 30-plus-day leases, booking history or market rent. Mid-term stays can also fall outside city STR rules; New York City's registration law, for example, covers stays under 30 days.",
    },
    {
      q: "Can I finance a condotel as a short-term rental?",
      a: "Yes, but at fewer lenders. A condotel is a condo unit in a building run like a hotel, usually with an on-site rental program. Because condotels are non-warrantable, they fall outside standard condo lending. Defy and Angel Oak list condotels as eligible on their DSCR programs. Before you apply, read the rental-program agreement to see what share of gross revenue the operator keeps.",
    },
    {
      q: "Will a lender check whether short-term rentals are legal in my city?",
      a: "Expect it. Fannie Mae requires a short-term rental to be legally permitted, including local registration and licensing, and DSCR lenders such as Griffin require a market that allows STR use. Local rules differ sharply: Arizona cities can require a permit but cannot ban STRs, while New York City requires registration for stays under 30 days and bars platforms from processing unregistered bookings.",
    },
    {
      q: "What happens to my loan if my city restricts short-term rentals?",
      a: "The loan stays the same; your income doesn't. You still owe the full payment, and if the house can only rent on a 12-month lease the numbers can turn negative. Easy Street says long-term rent is generally about half of STR earnings — $2,418 a month on a house grossing $4,836, a 0.80 DSCR on a $3,013 payment. Check long-term rent before you buy, and weigh a shorter prepayment penalty.",
    },
    {
      q: "Can I cash-out refinance an Airbnb?",
      a: "Yes. Lenders typically underwrite a short-term rental refinance on 12 months of actual booking revenue. Leverage is lower than on a long-term rental: Lima One caps STR cash-out at 70% of value, against 75% on its long-term rental loans. Have a full year of platform or manager statements ready, and check the seasoning rules on our cash-out refinance page.",
    },
  ],
  related: ["dscr", "cash-out-refinance", "brrrr"],
  calculator: { href: "/calculators/dscr", label: "Calculate your STR DSCR" },
  sources: [
    { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
    { label: "Easy Street Capital — Short-term rental financing", url: "https://www.easystreetcap.com/short-term-rental-financing/" },
    { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
    { label: "LendingOne — How DSCR loan interest rates are determined", url: "https://lendingone.com/insight/how-are-dscr-loan-interest-rates-determined/" },
    { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
    { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
    { label: "Angel Oak — Investor cash flow program", url: "https://angeloakms.com/programs/investor-cash-flow-mortgage-program/" },
    { label: "FlipperForce — RCN Capital lender profile", url: "https://flipperforce.com/lenders/rcn-capital" },
    { label: "CrowdfundedWealth — Short-term rental loans and Airbnb DSCR (2026)", url: "https://www.crowdfundedwealth.com/articles/short-term-rental-loans-airbnb-dscr-2026" },
    { label: "Spring EQ — DSCR wholesale rate sheet (October 23, 2026)", url: "https://wholesale.springeq.com/hubfs/Wholesale%20File%20Transfer/2022_website_rates_fees_guidelines_matrices/Active%20DSCR%20Rate%20Sheet.pdf" },
    { label: "Airbnb Help Center — Airbnb service fees", url: "https://www.airbnb.com/help/article/1857" },
    { label: "Fannie Mae Selling Guide — Occupancy types (B2-1.1-01)", url: "https://selling-guide.fanniemae.com/sel/b2-1.1-01/occupancy-types" },
    { label: "Fannie Mae Selling Guide — Short-term rental income (B3-3.8-03)", url: "https://selling-guide.fanniemae.com/sel/b3-3.8-03/rental-income-subject-property-short-term-rental" },
    { label: "Arizona Revised Statutes § 9-500.39 — Vacation and short-term rentals", url: "https://www.azleg.gov/ars/9/00500-39.htm" },
    { label: "NYC Office of Special Enforcement — Short-term rental registration", url: "https://www.nyc.gov/site/specialenforcement/registration-law/registration.page" },
    { label: "Roc Capital — Rental portfolios", url: "https://roccapital.com/rental-portfolios" },
    { label: "Civic Financial Services — Rental portfolio loans", url: "https://www.civicfs.com/rental-portfolio-loan/" },
  ],
  updated: "2026-10-23",
};
