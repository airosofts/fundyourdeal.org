import type { Guide } from "../types";

const specHomeConstructionLoans: Guide = {
  slug: "spec-home-construction-loans",
  metaTitle: "Spec Home Construction Loans: LTC, Land Equity, Reserves",
  metaDescription:
    "Spec home construction loans for building to sell: LTC and ARV caps, your lot as down payment, builder experience, interest reserves and a worked budget.",
  category: "Construction",
  title: "Spec home construction loans: size the loan on cost, and size the reserve on the sale",
  dek: "A spec home is built to sell before anyone has agreed to buy it. How investor construction lenders size that loan in October 2026, what a lot you already own is worth to them, who counts as an experienced builder, and a full budget showing why the months after the house is finished cost the most.",
  readMinutes: 13,
  published: "2026-10-30",
  updated: "2026-10-30",
  keyTakeaways: [
    "Spec-friendly programs published loan-to-cost limits of 85–90% in October 2026, with the loan also held to 65–75% of the appraised finished value. On the worked $360,000 build, 85% of cost ($306,000) binds, and the finished value could fall 11.7% before the value cap takes over.",
    "A lot you already own is your down payment. In the example, the $75,000 lot carries all $54,000 of required equity, and whether the lender counts its $75,000 cost or its $95,000 appraisal moves the loan by $17,000.",
    "The sale is the slow part. Finished new homes still on the market had been for sale a median 3.0 months in September 2026, per the Census Bureau, and 380,000 of that month's 676,000 annualized new-home sales were of completed homes.",
    "Interest peaks after the last draw. In the example, months 9–12, with the house finished and listed, cost $10,455 of the $19,457.92 total, and each extra month on the market costs $2,613.75.",
    "Experience rules vary: one ground-up build in 36 months at LendingOne, 1–2 builds at Roc and Civic, three completed projects at Rehab Financial and LendSure. Lima One counts GC or fix-and-flip work.",
  ],
  body: [
    {
      type: "p",
      text: "A spec home construction loan pays for a house you're building to sell, with no buyer signed when you break ground. Lenders size it like any ground-up loan, as a share of cost capped by a share of the appraised finished value. But the risk that sets your term, your reserve and your margin starts when the builders leave: finding a buyer. In September 2026, finished new homes still for sale had been on the market a median 3.0 months, per the Census Bureau. Below: how lenders read a spec build, what a lot you own counts for, who qualifies, and a budget worked from lot to sale.",
    },
    { type: "h2", text: "Spec, presold or build-to-rent: same loan, different exit", id: "spec-vs-presold" },
    {
      type: "p",
      text: "The loan program is often identical. The exit is not. A presold house has a buyer under contract before or during the build; a spec house finds one after it's listed; a build-to-rent house is refinanced, not sold. Investor lenders openly fund spec work. Lima One lists spec builds among its project types and supports build-to-sell plans, LendingOne advertises spec construction for homes sold to market, LendSure supports spec and build-to-rent projects, and Civic pitches its ground-up loan at infill lots, teardowns and spec homes in cities. None of the programs reviewed for this guide published a presale requirement.",
    },
    {
      type: "table",
      caption: "Three exits from the same construction loan",
      head: ["", "Spec", "Presold", "Build to rent"],
      rows: [
        ["What repays the loan", "A buyer found near or after completion", "The buyer already under contract", "A 30-year rental loan"],
        ["What the lender leans on", "Cost, the as-completed appraisal and your sales record", "The same, plus the contract", "The appraisal and the rent"],
        ["Risk that sets the term", "Months on the market after completion", "The buyer's financing and right to walk", "Lease-up and the refinance test"],
        ["Fallback when it slips", "Cut the price, extend, bridge or rent it", "Resell to another buyer", "Sell instead"],
      ],
    },
    {
      type: "p",
      text: "Spec buyers exist in volume. Of the 676,000 new homes sold at September 2026's seasonally adjusted annual rate, 380,000 were already finished when they sold, and 296,000 sold before completion, either not started or still under construction. The Census Bureau counts a sale when a deposit is taken or a sales agreement signed. List early and you may sell partway through the build. Plan the loan as if you won't.",
    },
    { type: "h2", text: "Sizing: the lowest of three limits is your loan", id: "sizing" },
    {
      type: "p",
      text: "Construction lenders apply a [loan-to-cost](/glossary#ltc) cap, a cap on the appraised finished value and, at some lenders, a third cap on the land plus construction. Published October 2026 limits on investor ground-up programs:",
    },
    {
      type: "ul",
      items: [
        "**Kiavi:** up to 85% of total cost (purchase plus construction) and 70% of ARV; build-to-sell and build-to-rent exits; $150,000 to $10 million.",
        "**Lima One:** up to 90% of cost and 75% of ARV on its program page. Its FAQ puts the most experienced builders at 85% of blended cost, with up to 100% of construction and up to 60% of lot cost.",
        "**LendingOne:** up to 90% of cost, where cost includes land, hard costs and soft costs, and 70% of ARV.",
        "**Roc and Civic:** 85% of total cost, or 90% on the experienced-developer tier (at Roc, with a financed interest reserve); 70% of ARV; and a land-plus-build cap of three-quarters of the lot with all of the construction.",
        "**Rehab Financial:** a 90% cost cap, and 65% of as-completed value at a 650–699 score or 70% at 700 and above.",
        "**LendSure:** up to 65% of lot cost back at closing plus 100% of construction, and typically up to 70% of the completed value.",
      ],
    },
    {
      type: "p",
      text: "The gap between the loan and total cost is your equity. [LTV vs LTC vs ARV](/guides/ltv-vs-ltc-vs-arv) shows how the binding limit shifts as the numbers move.",
    },
    { type: "h2", text: "Land equity: your lot is the down payment, at a value the lender picks", id: "land" },
    {
      type: "p",
      text: "On a spec build, the cheapest equity you have is often a lot you bought months or years earlier. Lenders count it toward your share of the cost, but they disagree on what it's worth:",
    },
    {
      type: "ul",
      items: [
        "**Lower of value or price.** Roc and Civic advance 75% of the land value or the price you paid, whichever is less. On a lot without permits the figure is 60% until plans and permits are approved, then it catches up to 75%. Appreciation since you bought adds nothing to that advance.",
        "**Lot cost.** Lima One's FAQ caps the lot advance at 60% of what the lot cost, and Lima One says owned land can be leveraged, including refinancing an acquisition-and-development loan into vertical construction.",
        "**As-is value on a refinance.** RCN's ground-up grid has a refinance column that starts from the lot's as-is value: 75% for its most experienced tier, down to 65% for builders with no projects in the last 3 years.",
        "**Cash back on the land.** Rehab Financial may refund experienced builders up to 70% of the land purchase price, and LendSure may return up to 65% of the lot's purchase price at closing.",
      ],
    },
    {
      type: "p",
      text: "Ask one question before you apply: which lot figure goes into total cost, what you paid or what it appraises for? In the example below, that one answer is worth $17,000 of loan.",
    },
    { type: "h2", text: "Builder experience: a finished house on your record", id: "experience" },
    {
      type: "p",
      text: "Lenders want proof that you've finished a house, not just started one. The published rules:",
    },
    {
      type: "ul",
      items: [
        "**LendingOne:** at least one ground-up project in the past 36 months. Without it, a licensed general contractor with a verifiable record can strengthen the file.",
        "**Roc and Civic:** 1–2 prior ground-up builds for the standard program, with no-experience guarantors considered case by case; 3+ similar builds plus heavy rehabs with expansion for the experienced tier.",
        "**Lima One:** counts new builds you held title to, builds you ran as the general contractor, and fix-and-flip projects.",
        "**Rehab Financial:** three completed projects, or three flips including at least one large rehab.",
        "**LendSure:** three completed builds, or two builds plus a renovation over $200,000. The contractor running the job needs a valid GC license.",
        "**RCN:** tiers by projects in the last 3 years, from 65% of ARV with none to 75% with five or more.",
      ],
    },
    {
      type: "p",
      text: "For a spec builder, the strongest evidence is a sale: the settlement statement, the certificate of occupancy and the original budget set against the final cost. Together they show you can build to a number and sell at one.",
    },
    { type: "h2", text: "Worked budget: a $360,000 spec build on a lot you own", id: "worked-budget" },
    {
      type: "p",
      text: "The deal: two years ago you bought a permitted infill lot for $75,000. You own it free and clear, and it appraises at $95,000 today. You'll build a three-bedroom spec home for $285,000 of hard costs, and the appraiser puts the finished house at $495,000, a little above September 2026's $472,800 average new-home sale price. Soft costs (plans, engineering, survey, permits and impact fees) total $26,000, paid from your cash. The lender uses the three limits in Roc's and Civic's standard program: 85% of cost, 70% of the finished value, and a cap equal to three-quarters of the lot plus the full build budget. We price it at 10.25%, charged only on drawn money, with 1.5 points; New Silver's published ground-up ranges are 9.75–11.25% for rate and 1–2% for origination. Illustrative, not a quote.",
    },
    {
      type: "table",
      caption: "The $285,000 hard-cost budget by stage (illustrative)",
      head: ["Budget line", "Amount", "Share"],
      rows: [
        ["Site work and utility connections", "$22,000", "7.7%"],
        ["Foundation", "$30,000", "10.5%"],
        ["Framing", "$47,000", "16.5%"],
        ["Roof, windows, exterior doors and exterior finishes", "$38,000", "13.3%"],
        ["Plumbing, electrical and HVAC rough-ins", "$55,000", "19.3%"],
        ["Insulation, drywall, cabinets, flooring, paint and trim", "$69,000", "24.2%"],
        ["Driveway, landscaping and final steps", "$18,000", "6.3%"],
        ["Other items", "$6,000", "2.1%"],
        ["Total hard costs", "$285,000", "100%"],
      ],
    },
    {
      type: "p",
      text: "Those shares track NAHB's 2024 Cost of Constructing a Home survey, which put interior finishes at 24.1% of construction cost, rough-ins at 19.2%, framing at 16.6%, exterior finishes at 13.4%, foundations at 10.5%, site work at 7.6% and final steps at 6.5%. A budget well away from those shares isn't wrong, but expect the lender's budget reviewer to ask why. Building one line by line is covered in [rehab budgets lenders fund](/guides/rehab-budget-for-lenders).",
    },
    {
      type: "table",
      caption: "Sizing the loan under Roc's and Civic's published ground-up limits (illustrative)",
      head: ["Limit", "Calculation", "Amount"],
      rows: [
        ["85% of total cost", "85% × ($75,000 lot + $285,000 build)", "$306,000"],
        ["70% of completed value", "70% × $495,000", "$346,500"],
        ["75% of the lot plus 100% of construction", "75% × $75,000 + $285,000", "$341,250"],
        ["Loan: the lowest limit", "", "$306,000"],
        ["Advanced at closing against the lot", "$306,000 − $285,000", "$21,000"],
        ["Your equity", "$360,000 − $306,000", "$54,000, all of it in the lot"],
      ],
    },
    {
      type: "p",
      text: "The lot is the down payment. Its $75,000 cost covers every dollar of the $54,000 equity the cost cap demands, so you bring no fresh cash for equity at all. Ask how the lender handles the $21,000 advanced against a lot you own outright: whether it comes to you at closing or offsets your closing costs. Now count the lot at its $95,000 appraisal instead. Total cost becomes $380,000, 85% of it is $323,000, and that's still under the other two limits: $17,000 more loan from one definition. And the value cushion is real: the finished value could drop to $437,143, 11.7% below the appraisal, before the 70% cap would cut the loan.",
    },
    { type: "h3", text: "Draws and interest, month by month" },
    {
      type: "p",
      text: "Five draws pay out the $285,000 as stages are finished and inspected; how that works is in [construction draw schedules](/guides/construction-draw-schedule). The house is done at the end of month 8 and listed. At the Census median of 3.0 months for sale after completion, a contract lands around month 11. ICE's data put the average purchase-mortgage closing at 36.8 days in March 2026, which puts the payoff at about the end of month 12.",
    },
    {
      type: "table",
      caption: "Interest on drawn funds at 10.25% (illustrative; rows rounded, total from unrounded figures)",
      head: ["Months", "Stage paid at the end of the period", "Draw", "Balance during the period", "Interest"],
      rows: [
        ["1–2", "Site work and foundation", "$52,000", "$21,000", "$358.75"],
        ["3–4", "Framing, roof, windows and exterior: dried in", "$85,000", "$73,000", "$1,247.08"],
        ["5", "Rough-ins", "$55,000", "$158,000", "$1,349.58"],
        ["6–7", "Insulation, drywall and interior finishes", "$69,000", "$213,000", "$3,638.75"],
        ["8", "Final steps; house complete", "$24,000", "$282,000", "$2,408.75"],
        ["9–12", "Listed, under contract, buyer closes", "", "$306,000", "$10,455.00"],
        ["Total", "", "$285,000", "", "$19,457.92"],
      ],
    },
    {
      type: "p",
      text: "The four months after completion cost $10,455, 54% of all the interest, while nobody is building anything. Every extra month on the market adds $2,613.75. That's the number that decides a spec loan's term and reserve.",
    },
    { type: "h2", text: "Interest reserve: size it for the sale, not the first months", id: "reserve" },
    {
      type: "p",
      text: "An interest reserve is interest you borrow up front, held back from the loan and paid to the lender each month. The published rules: Roc and Civic require at least one month, and Roc's experienced-developer tier needs a financed reserve to get to 90% of cost. LendSure finances the first four months of interest inside the loan, and allows the first payment to be deferred by as much as five months. Lima One offers reserves, and LendingOne requires none at closing.",
    },
    {
      type: "p",
      text: "Now line those up against the schedule. One month at the full balance is $2,613.75. The first four months cost $1,605.83 combined, so a reserve that runs from closing pays for the cheap months. The bill that hurts a spec builder arrives in months 9–12, after the draws stop. Keep at least that $10,455 available, in cash or in a reserve that hasn't been spent yet, plus a few months more in case the house sits. A financed reserve is borrowed money that carries interest and points too.",
    },
    { type: "h2", text: "Cash: what you bring beyond the lot", id: "cash" },
    {
      type: "table",
      caption: "Cash the example build needs, beyond the lot (illustrative)",
      head: ["Item", "Amount", "When it's paid"],
      rows: [
        ["Soft costs: plans, engineering, survey, permits, impact fees", "$26,000", "Before and at closing"],
        ["Points, 1.5% of $306,000", "$4,590", "Closing"],
        ["Closing, title and builder's risk insurance (assumed)", "$7,500", "Closing"],
        ["Interest on drawn funds, months 1–12", "$19,457.92", "Monthly"],
        ["Total beyond the lot", "$57,547.92", ""],
        ["Less the advance against the lot, if paid to you", "−$21,000", "Closing"],
      ],
    },
    {
      type: "p",
      text: "Then fund the draw gap. Draws repay finished work, so before draw 2 lands you may have paid the framers, roofer and window supplier up to $85,000, unless your contracts make them wait for the draw. Lenders check you can carry it. Rehab Financial's liquidity test is 25% of the construction budget, with a $15,000 floor, plus cash for closing: $71,250 plus closing costs on this build. Lima One sets your credit exposure at up to 10 times your verified liquidity, so a $306,000 loan implies at least $30,600 of liquidity at that ratio.",
    },
    { type: "h2", text: "The sale: what's left, and what a slow one costs", id: "sale" },
    {
      type: "table",
      caption: "Sale at the end of month 12 (illustrative)",
      head: ["", "Amount"],
      rows: [
        ["Sale price", "$495,000"],
        ["Commissions and seller closing costs at 5% (assumed)", "−$24,750"],
        ["Construction loan payoff", "−$306,000"],
        ["Cash back at closing", "$164,250"],
        ["Total project cost: lot, hard and soft costs, points, closing, interest and selling costs", "$442,297.92"],
        ["Profit before tax", "$52,702.08, or 10.6% of the price"],
      ],
    },
    {
      type: "p",
      text: "That margin sits close to the 11.0% average builder profit in NAHB's 2024 survey, and it's thin enough for time to eat. Suppose the house takes six months to go under contract instead of three, and sells for 4% less, at $475,200. Three more months at $2,613.75 cost $7,841.25, the lower price takes $19,800, and selling costs fall by $990. Profit drops to $26,050.83, about half. On an 18-month term, the month-15 payoff still fits. On a 12-month term it needs an extension, and at Rehab Financial's published 2% per 3-month ground-up extension, $6,120 here, profit falls to $19,930.83.",
    },
    { type: "h3", text: "If the house doesn't sell" },
    {
      type: "ul",
      items: [
        "**Cut the price early.** Three more months of interest plus a 2% extension would cost $13,961.25 on this build, about the same as a 2.8% price cut. Weigh one against the other in month 10, not month 14.",
        "**Move it to a bridge.** Roc's no-DSCR stabilized bridge exists for exactly this: a renovated or newly finished home that's on the market or about to list, financed at up to 70% of value if it rates C2 or better. At 70% of $475,200, that's $332,640, more than the $306,000 payoff before costs.",
        "**Rent it.** A 30-year rental loan can retire the construction loan if the rent supports it. Rental lenders test the [DSCR](/glossary#dscr) (debt service coverage ratio: the rent for each dollar of the full monthly payment), with published minimums of 0.75–1.05 in October 2026. Lima One's Build2Rent waives seasoning on its own rental refinance. Run the rent in the [DSCR calculator](/calculators/dscr).",
        "**Extend.** Kiavi's construction loans come with extension options of 3 or 6 months, and Rehab Financial allows two 3-month extensions at 2% each. Get the price in writing before you close.",
      ],
    },
    {
      type: "cta",
      text: "Own the lot and have plans priced? Send the build and get spec construction terms fast.",
      href: "/get-funding?loan=construction",
      label: "Fund my build",
    },
    { type: "h2", text: "The spec file: send it before you break ground", id: "file" },
    {
      type: "ul",
      items: [
        "**The lot:** the deed or purchase contract, the permit status, and any loan on it. Permits change the land advance at Roc and Civic.",
        "**The house:** plans, finish specifications and a line-item budget with your contractor's bid.",
        "**The builder:** your GC's license and insurance where they apply, and your track record with settlement statements and certificates of occupancy.",
        "**The sale plan:** recent sales of new homes near your price, your list date, and how long comparable homes have taken to sell.",
        "**The money:** statements showing the soft costs, closing costs and draw gap, plus your entity documents.",
      ],
    },
    {
      type: "p",
      text: "A spec home is investment property: you build it to sell, and neither you nor your family will live in it. If you're building a home to live in, a residential construction lender is the right call. The investor program is laid out on [ground-up construction loans](/ground-up-construction-loans).",
    },
    {
      type: "cta",
      text: "Ready to build to sell? Tell us about the lot, the budget and the price in about 60 seconds.",
      href: "/get-funding?loan=construction",
      label: "Fund My Deal",
    },
  ],
  faqs: [
    {
      q: "What is a spec home construction loan?",
      a: "A short-term, interest-only loan for building a house to sell before a buyer has signed. Investor lenders size it on cost and on the appraised finished value, then fund construction in draws as stages are inspected. Published October 2026 programs lent up to 85–90% of what the project costs, never more than 65–75% of the finished appraisal, over terms of 12–24 months. The buyer's closing repays it.",
    },
    {
      q: "What down payment does a spec home loan take?",
      a: "Your equity is the gap between total cost and the loan, typically 10–15% of cost at 85–90% loan-to-cost, or more where the finished-value cap is the lower limit. A lot you already own goes toward it. In our example, an owned $75,000 lot covered all $54,000 of required equity, but soft costs, points, closing costs and interest still came to about $57,500 in cash, before the draw gap.",
    },
    {
      q: "Can I use land I own as the down payment on a construction loan?",
      a: "Usually, yes. The question is the value the lender gives it. Roc and Civic use the lower of land value and purchase price, Lima One works from lot cost, and RCN's refinance grid starts from the lot's as-is value at 65–75% depending on experience. Ask which figure goes into total cost; in our example, the difference was $17,000 of loan.",
    },
    {
      q: "Do I need experience to get a spec home construction loan?",
      a: "Most programs want at least one finished build. LendingOne wants one ground-up build within the last three years, Roc and Civic 1–2, and Rehab Financial and LendSure for three completed projects or a mix of builds and large rehabs. Lima One counts GC and fix-and-flip work. RCN lends with no recent projects, capped at 65% of completed value.",
    },
    {
      q: "How long should a spec construction loan term be?",
      a: "Long enough for permits, the build, the sale and a buffer. Finished new homes had been for sale a median 3.0 months in September 2026, and a buyer's mortgage averaged 36.8 days to close in March 2026. An 8-month build therefore needs about 12 months before any slip, so an 18-month term, offered by Kiavi and at Roc's discretion, leaves room. Price extensions before you close.",
    },
    {
      q: "Do spec home lenders require a presale?",
      a: "Not on the investor programs reviewed for this guide. Lima One, LendingOne, LendSure and Civic all describe spec or build-to-sell projects without publishing a presale condition. A buyer under contract still helps: it supports the value and shortens the exit. Census data show 296,000 of September 2026's 676,000 annualized new-home sales happened before completion.",
    },
  ],
  related: {
    programs: ["construction", "bridge", "dscr"],
    guides: ["construction-draw-schedule", "ltv-vs-ltc-vs-arv", "rehab-budget-for-lenders", "investor-loan-points-and-fees"],
  },
  sources: [
    { label: "U.S. Census Bureau and HUD — New Residential Sales, September 2026 (released October 27, 2026)", url: "https://www.census.gov/construction/nrs/pdf/newressales.pdf" },
    { label: "NAHB Eye on Housing — Cost of Constructing a Home in 2024 (January 23, 2025)", url: "https://eyeonhousing.org/2025/01/cost-of-constructing-a-home-in-2024/" },
    { label: "ICE — May 2026 Mortgage Monitor (time to close)", url: "https://mortgagetech.ice.com/resources/data-reports/may-2026-mortgage-monitor" },
    { label: "Kiavi — New construction loans (October 2026)", url: "https://www.kiavi.com/loans/new-construction-infill" },
    { label: "Lima One — New construction loans (October 2026)", url: "https://www.limaone.com/new-construction-loans/" },
    { label: "LendingOne — New construction loans (October 2026)", url: "https://lendingone.com/loan-types/new-construction-loans/" },
    { label: "Roc Capital — Ground-up construction (October 2026)", url: "https://roccapital.com/ground-up" },
    { label: "Civic — Ground-up construction loans (October 2026)", url: "https://www.civicfs.com/ground-up-construction-loan/" },
    { label: "RCN Capital — Loan programs, ground-up construction grid (October 2026)", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Rehab Financial Group — Ground-up construction (October 2026)", url: "https://rehabfinancial.com/ground-up-construction" },
    { label: "Rehab Financial Group — How its rehab and ground-up loans work: extension pricing", url: "https://rehabfinancial.com/how-rehab-loans-work" },
    { label: "LendSure — Ground-up construction loans (October 2026)", url: "https://lendsure.com/home-loan-programs/ground-up-construction-loans/" },
    { label: "New Silver — Loan products, ground-up rates and origination (October 2026)", url: "https://www.newsilver.com/fix-and-flip-loans/" },
    { label: "Roc Capital — Stabilized Bridge (no-DSCR bridge for listed homes)", url: "https://roccapital.com/stabilized-bridge" },
    { label: "LendingOne — Rental loans (minimum DSCR)", url: "https://lendingone.com/rental-loans/" },
    { label: "Roc Capital — Single-property rentals (minimum DSCR)", url: "https://roccapital.com/single-property-rentals" },
  ],
};

export default specHomeConstructionLoans;
