import type { StateContent } from "../types";

const dscrNorthCarolina: StateContent = {
  program: "dscr",
  slug: "north-carolina",
  state: "North Carolina",
  abbr: "NC",
  metaTitle: "North Carolina DSCR Loans: Terms, Tax Rates & Rent Math",
  metaDescription:
    "North Carolina DSCR loans: October 2026 lender terms, effective tax rates in 8 metros, the 2026 landlord insurance hikes and a worked Fayetteville rental.",
  h1: "North Carolina DSCR loans: the rent qualifies you, the county tax rate sets your margin.",
  intro:
    "North Carolina DSCR (debt service coverage ratio) loans are approved on the house, not your W-2. The ratio is what the home rents for each month, divided by its full monthly payment. Lenders' published floors in October 2026 sat at 1.00–1.05 for the stricter programs and 0.75–0.80 for the looser ones. What moves that ratio here is local: effective property tax rates in the main cities of the eight metros below ran from about 0.59% of value in Wilmington to about 1.1% in Winston-Salem, and landlord insurance rates rise an average 5% on October 1, 2026.",
  facts: [
    { label: "Max purchase LTV (published)", value: "80%; 85% at 720–740+ FICO" },
    { label: "Fayetteville tax, county + city", value: "$0.9485 per $100" },
    { label: "Deed excise tax", value: "$1 per $500, seller pays" },
    { label: "Landlord policy rate changes", value: "+5% Oct 2026, +5% Oct 2027" },
  ],
  costs: {
    heading: "County tax and the dwelling policy are where a North Carolina rental wins or loses the ratio.",
    intro:
      "A DSCR lender divides the rent by PITIA: principal, interest, property tax, insurance and any association dues. The rate sheet is the same in Charlotte and Fayetteville. The tax and insurance lines aren't, and these are the North Carolina rules behind them.",
    rows: [
      [
        "How the tax bill is built",
        "North Carolina taxes real property at 100% of its appraised value. The bill is the county rate plus the city rate, each per $100 of value. For 2025–26 that was $0.4927 + $0.2741 = $0.7668 in Charlotte and $0.4990 + $0.4495 = $0.9485 in Fayetteville. Fire, service and other special district taxes are extra and aren't in those numbers.",
      ],
      [
        "Old assessments, new prices",
        "Counties must reappraise at least every 8 years, and new values take effect countywide on January 1 of the reappraisal year. In 2025 assessed values averaged about 68% of sale prices in Guilford and 62% in Buncombe, both on older reappraisals, but about 100% in Durham, Forsyth and New Hanover, which reappraised in 2025. A seller's bill on an old value can understate yours, so run the tax on your price at the full rate.",
      ],
      [
        "Four big counties reappraise in 2027",
        "The Department of Revenue's schedule shows Mecklenburg, Wake, Guilford and Buncombe reappraising next in 2027. A rental you buy there now gets a fresh assessed value on January 1, 2027. If your ratio only clears 1.00 on today's assessment, it isn't a deal-ready number.",
      ],
      [
        "County rates for 2026–27",
        "Several counties raised their rate for 2026–27: Wake from $0.5171 to $0.5371 per $100, Durham from $0.5542 to $0.5792, Guilford from $0.7305 to $0.7895, Forsyth from $0.5352 to $0.5540 and Buncombe from $0.5466 to $0.6154. Mecklenburg, New Hanover and Cumberland held theirs. City rates sit on top.",
      ],
      [
        "When the tax is due",
        "Property tax is due September 1 and can be paid at face value through January 5. Interest starts January 6 at 2%, then runs at 0.75% a month from February 1. The DSCR math counts one-twelfth of the yearly bill each month, whenever you pay it.",
      ],
      [
        "Excise tax on the deed",
        "$1 for every $500 of price, paid by the transferor to the register of deeds. As the buyer you don't pay it; as the seller you do. On a $255,000 house it comes to $510.",
      ],
      [
        "Landlord insurance is a dwelling policy",
        "Rentals are insured on dwelling policies, which typically cover non-owner-occupied homes of up to four units. The N.C. Rate Bureau asked for 68.3% over two years; the Insurance Commissioner's April 2026 settlement allows an average 5% on October 1, 2026 and another 5% on October 1, 2027. Those are statewide averages and vary by territory, so quote your address before you set your offer.",
      ],
      [
        "Coastal wind cover",
        "In the state's 18 eligible coastal counties, the Coastal Property Insurance Pool, run by the N.C. Insurance Underwriting Association, writes dwelling windstorm coverage. Its fire coverage is limited to the beach area south and east of the inland waterway, including the Outer Banks. Pool wind cover adds to the insurance line in PITIA, so price it before you run the ratio.",
      ],
      [
        "Sales tax on short stays",
        "Rentals of an accommodation to the same guest for under 90 continuous days are taxed at the general sales tax rate, 4.75% for the state, plus local rates. Mecklenburg added a 1% local sales and use tax effective July 1, 2026. A private home rented fewer than 15 days in a year is exempt unless an accommodation facilitator makes the rental.",
      ],
    ],
  },
  metros: {
    heading: "Greensboro and Fayetteville rent for 8% of value a year. Raleigh and Wilmington, under 6%.",
    intro:
      "Rent and value for each metro come from one data provider, which keeps the yields comparable. Gross yield means a year's rent over the home's value, before tax, insurance, vacancy and repairs. The last column is the main city's 2025–26 county-plus-city rate, adjusted by the Department of Revenue to market value.",
    columns: ["Metro", "Single-family rent", "Single-family value", "Gross yield", "Main city effective tax rate"],
    rows: [
      ["Charlotte", "$2,189", "$385,000", "6.8%", "0.68% (Charlotte)"],
      ["Raleigh", "$2,114", "$433,000", "5.9%", "0.83% (Raleigh)"],
      ["Durham–Chapel Hill", "$2,123", "$406,000", "6.3%", "0.99% (Durham)"],
      ["Greensboro–High Point", "$1,787", "$266,000", "8.1%", "0.96% (Greensboro)"],
      ["Winston-Salem", "$1,809", "$281,000", "7.7%", "1.12% (Winston-Salem)"],
      ["Asheville", "$2,231", "$420,000", "6.4%", "0.61% (Asheville)"],
      ["Wilmington", "$2,165", "$449,000", "5.8%", "0.59% (Wilmington)"],
      ["Fayetteville", "$1,707", "$255,000", "8.0%", "0.96% (Fayetteville)"],
    ],
    note:
      "Rent: Zillow ZORI for single-family houses (smoothed). Value: Zillow ZHVI for single-family houses, 33rd–67th percentile tier (smoothed, seasonally adjusted). Metro level, September 2026 readings, pulled October 26, 2026. Gross yield = 12 × rent ÷ value. ZORI tracks asking rents on listed rentals while ZHVI covers the whole housing stock, so read the yield as a screen for where to look, not as your deal's number. Effective tax rate: N.C. Department of Revenue, 2025–26 county and municipal rates multiplied by the 2025 sales assessment ratio; special districts excluded.",
  },
  example: {
    title: "WORKED EXAMPLE · FAYETTEVILLE SINGLE-FAMILY RENTAL",
    rows: [
      ["Purchase price", "$255,000"],
      ["Loan: 75% LTV, 30-year fixed at 7.375%", "$191,250"],
      ["Market rent", "$1,700"],
      ["Principal and interest", "$1,321"],
      ["Property tax: $0.9485 per $100 ÷ 12", "$202"],
      ["Dwelling insurance (assumed $1,500 a year)", "$125"],
      ["HOA dues", "$0"],
      ["PITIA", "$1,648"],
    ],
    result: { label: "DSCR", value: "1.03" },
    note:
      "$1,700 ÷ $1,648 = 1.03. Price and rent sit at the Fayetteville metro's September 2026 single-family value and rent; 7.375% is the 2025 HMDA median for 30-year investor loans; tax uses the 2025–26 Cumberland County plus City of Fayetteville rate, and Cumberland kept its rate for 2026–27. After both 5% dwelling-rate steps the insurance line is about $138 and the ratio 1.02. Run a typical Charlotte house the same way ($385,000 price, $2,190 rent, $0.7668 tax rate, $1,800 insurance) and you get 0.92; a loan of about $259,700, or 67% LTV, gets it to 1.00. The seller pays the $510 excise tax. Illustrative only — not a rate quote.",
    dscr: 1.03,
  },
  rules: {
    heading: "North Carolina rules that change a rental deal.",
    items: [
      {
        title: "Foreclosure runs through the clerk, then waits 10 days for upset bids",
        text: "A power-of-sale foreclosure starts with a hearing before the clerk of superior court, with notice served at least 10 days ahead; the clerk must find a valid debt, a default, a right to foreclose and proper notice. The sale notice is posted for 20 days and published once a week for two weeks. After the sale, anyone can raise the bid by at least 5% (minimum $750), and each new bid reopens a 10-day window. If you buy at a sale, your price isn't final until the window closes.",
      },
      {
        title: "Foreclosure filings are climbing",
        text: "ATTOM counted 8,429 North Carolina properties with a foreclosure filing in the first half of 2026, one in every 581 housing units and 46.72% more than a year earlier. The Fayetteville metro ran at 0.36% of housing units, about twice the 0.17% statewide rate. More filings mean more distressed inventory; plan the refinance before you bid.",
      },
      {
        title: "Security deposits are capped by lease length",
        text: "You can hold no more than two weeks' rent on a week-to-week tenancy, one and a half months' on month-to-month, and two months' on anything longer. Return the deposit or an itemized list of deductions within 30 days after the tenancy ends and you get possession back. If you can't price the damage yet, send an interim accounting within 30 days and a final one within 60.",
      },
      {
        title: "Late fees have a ceiling",
        text: "On monthly rent, a late fee can't exceed $15 or 5% of the rent, whichever is greater, and it can only be charged once the rent is five calendar days late. On a $1,700 rent the cap is $85. Don't count late fees in the rent you underwrite.",
      },
      {
        title: "Nonpayment: demand, then 10 days",
        text: "Where the lease sets a rent due date, the tenant forfeits the term if rent stays unpaid 10 days after the landlord demands it. Plan reserves for at least a month of lost rent whenever a tenancy ends badly.",
      },
      {
        title: "Habitability is the landlord's job",
        text: "State law requires you to keep the home fit and habitable, keep electrical, plumbing, sanitary and heating systems in safe working order, and provide working smoke alarms and, where there's a fossil-fuel appliance, fireplace or attached garage, carbon monoxide alarms. Unsafe wiring, no drinkable water, no working toilet, or heat that can't hold 65°F when it's 20°F outside between November 1 and March 31 must be fixed within a reasonable time for the severity.",
      },
      {
        title: "No rent control, and limits on rental registration",
        text: "Counties and cities can't regulate the rent charged on private residential property. They also can't make you get a permit or register a rental, except for individual properties with repeated verified code violations or among the top 10% for crime or disorder problems, and, with narrow exceptions, they can't charge rentals a special fee or tax that other property doesn't pay.",
      },
      {
        title: "Asheville: whole-home short-term rentals only in the Resort District",
        text: "Asheville calls renting an entire house or apartment for less than a month a short-term vacation rental and allows it only in the Resort Zoning District. A homestay, renting one or two bedrooms for stays under 30 days, requires you to live in the home full-time. Check zoning before you underwrite nightly income anywhere in the state.",
      },
      {
        title: "Business purpose only",
        text: "A DSCR loan is a business-purpose loan on a rental. It can't finance a home that you or a relative will occupy; for that, talk to a residential mortgage lender.",
      },
    ],
  },
  faqs: [
    {
      q: "What DSCR do North Carolina rental lenders require?",
      a: "Published minimums in October 2026 ranged from 1.00–1.05 at conservative lenders to 0.75–0.80 at others, and a few offer no-ratio programs at lower leverage. A ratio under 1.00 means the rent doesn't cover the payment, and fewer programs will take it. The ratio is the rent divided by principal, interest, tax, insurance and dues.",
    },
    {
      q: "How do North Carolina property taxes change my DSCR?",
      a: "Directly: one-twelfth of the yearly bill goes into the monthly payment. At Fayetteville's $0.9485 per $100, a $255,000 rental carries about $202 a month in tax. At Charlotte's $0.7668 it would be about $163 on the same price. Special district taxes are extra, and a county reappraisal can reset the value under the rate.",
    },
    {
      q: "Who pays the North Carolina excise tax on a rental purchase?",
      a: "The seller. North Carolina levies an excise tax of $1 per $500 of the price on each deed, and the statute puts it on the transferor, who pays the register of deeds. You don't pay it when you buy, but you will when you sell: on a $300,000 sale it would be $600.",
    },
    {
      q: "Will my North Carolina rental's tax bill jump after I buy?",
      a: "It can at the next reappraisal. Values change countywide on January 1 of a reappraisal year, and Mecklenburg, Wake, Guilford and Buncombe are scheduled for 2027. In counties with older reappraisals, assessed values averaged well below 2025 sale prices, about 68% in Guilford. Underwrite the tax on your price at the current full rate.",
    },
    {
      q: "How much is landlord insurance going up in North Carolina?",
      a: "Dwelling policies, the coverage for rentals and other homes the owner doesn't live in, rise an average 5% on October 1, 2026 and another 5% on October 1, 2027 under the Insurance Commissioner's April 2026 settlement. The Rate Bureau had asked for 68.3%. Increases vary by territory, so get a quote for the address before you set your offer.",
    },
    {
      q: "Can I use a DSCR loan for a short-term rental in Asheville?",
      a: "Only if the zoning allows it. Asheville permits whole-home rentals of under a month only in its Resort Zoning District; elsewhere you'd be limited to a homestay in the home you live in, which a DSCR loan won't fund. Where nightly rentals are allowed, lenders use projected or actual booking income, and stays under 90 days owe sales tax.",
    },
    {
      q: "How much security deposit can I collect in North Carolina?",
      a: "Up to two weeks' rent for a week-to-week tenancy, one and a half months' rent for month-to-month, and two months' rent for longer terms. You must return it, or account for deductions, within 30 days after the tenant leaves and you get the keys back, with up to 60 days for a final accounting if you send an interim one first.",
    },
    {
      q: "Can a North Carolina city make me register my rental?",
      a: "Generally no. State law bars cities and counties from requiring a permit or registration for rental property, with narrow exceptions for individual properties with repeated verified code violations or high crime and disorder. They also can't regulate the rent you charge or levy a special fee on rentals that other property doesn't pay.",
    },
    {
      q: "What is an upset bid in a North Carolina foreclosure?",
      a: "After a foreclosure sale, anyone can file a higher bid within 10 days. It must beat the last bid by at least 5%, with a $750 minimum, and each upset bid restarts the 10-day clock. If you're buying a rental at a foreclosure sale, keep your financing flexible on timing until the last window closes.",
    },
    {
      q: "Can I close a North Carolina DSCR loan in an LLC?",
      a: "Yes. Every program in the October 2026 lender terms we reviewed allowed LLC vesting, and Lima One, Roc and Civic required it. Some, such as Griffin, also want a personal guarantee. Ask a CPA or attorney whether the LLC suits your tax and liability picture; that's outside a lender's lane.",
    },
  ],
  sources: [
    { label: "N.C. Department of Revenue — County property tax rates and reappraisal schedules, FY 2026–2027", url: "https://www.ncdor.gov/taxes-forms/property-tax/property-tax-rates/county-property-tax-rates-and-reappraisal-schedules/fiscal-year-2026-2027" },
    { label: "N.C. Department of Revenue — 2025–2026 county and municipal tax rates and effective tax rates", url: "https://www.ncdor.gov/2025-2026-county-and-municipal-tax-rates-and-effective-tax-rates" },
    { label: "N.C. Department of Revenue — Sales and use tax rates (Mecklenburg 1% local tax, July 1, 2026)", url: "https://www.ncdor.gov/taxes-forms/sales-and-use-tax/sales-and-use-tax-rates-other-information" },
    { label: "N.C. Department of Insurance — Dwelling rate settlement, April 22, 2026", url: "https://www.ncdoi.gov/news/press-releases/2026/04/22/commissioner-causey-negotiates-dwelling-rate-settlement-insurance-companies" },
    { label: "NCJUA/NCIUA — Coastal Property Insurance Pool coverages", url: "https://www.ncjua-nciua.org/html/svcs_cov.htm" },
    { label: "N.C. Gen. Stat. § 105-228.30 — Excise tax on conveyances", url: "https://codes.findlaw.com/nc/chapter-105-taxation/nc-gen-st-sect-105-228-30.html" },
    { label: "N.C. Gen. Stat. § 105-360 — Due date; interest for nonpayment of taxes", url: "https://codes.findlaw.com/nc/chapter-105-taxation/nc-gen-st-sect-105-360.html" },
    { label: "N.C. Gen. Stat. § 105-164.4F — Accommodation rentals", url: "https://codes.findlaw.com/nc/chapter-105-taxation/nc-gen-st-sect-105-164-4f.html" },
    { label: "N.C. Gen. Stat. § 45-21.16 — Notice and hearing before the clerk", url: "https://codes.findlaw.com/nc/chapter-45-mortgages-and-deeds-of-trust/nc-gen-st-sect-45-21-16.html" },
    { label: "N.C. Gen. Stat. § 45-21.17 — Notice of sale", url: "https://codes.findlaw.com/nc/chapter-45-mortgages-and-deeds-of-trust/nc-gen-st-sect-45-21-17.html" },
    { label: "N.C. Gen. Stat. § 45-21.27 — Upset bid on real property", url: "https://codes.findlaw.com/nc/chapter-45-mortgages-and-deeds-of-trust/nc-gen-st-sect-45-21-27.html" },
    { label: "N.C. Gen. Stat. § 42-51 — Permitted uses and limits of security deposits", url: "https://codes.findlaw.com/nc/chapter-42-landlord-and-tenant/nc-gen-st-sect-42-51.html" },
    { label: "N.C. Gen. Stat. § 42-52 — Landlord's obligations on termination", url: "https://codes.findlaw.com/nc/chapter-42-landlord-and-tenant/nc-gen-st-sect-42-52.html" },
    { label: "N.C. Gen. Stat. § 42-46 — Late fees", url: "https://codes.findlaw.com/nc/chapter-42-landlord-and-tenant/nc-gen-st-sect-42-46.html" },
    { label: "N.C. Gen. Stat. § 42-3 — Term forfeited for nonpayment of rent", url: "https://codes.findlaw.com/nc/chapter-42-landlord-and-tenant/nc-gen-st-sect-42-3.html" },
    { label: "N.C. Gen. Stat. § 42-42 — Landlord to provide fit premises", url: "https://codes.findlaw.com/nc/chapter-42-landlord-and-tenant/nc-gen-st-sect-42-42.html" },
    { label: "N.C. Gen. Stat. § 42-14.1 — Rent control prohibited", url: "https://codes.findlaw.com/nc/chapter-42-landlord-and-tenant/nc-gen-st-sect-42-14-1.html" },
    { label: "N.C. Gen. Stat. § 160D-1207 — Limits on rental registration and permits", url: "https://codes.findlaw.com/nc/chapter-160d-local-planning-and-development-regulation/nc-gen-st-sect-160d-1207.html" },
    { label: "City of Asheville — Homestays and short-term rental violations", url: "https://www.ashevillenc.gov/department/development-services/compliance-division/homestays-and-short-term-rental-violations/" },
    { label: "ATTOM — Mid-Year 2026 U.S. Foreclosure Market Report", url: "https://www.attomdata.com/news/market-trends/foreclosures/2026-mid-year-foreclosure-market-report/" },
    { label: "Zillow Research — ZORI single-family rent, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zori/Metro_zori_uc_sfr_sm_month.csv" },
    { label: "Zillow Research — ZHVI single-family homes, middle tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfr_tier_0.33_0.67_sm_sa_month.csv" },
    { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
    { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
    { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
    { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
    { label: "Civic — Rental loans", url: "https://www.civicfs.com/rental/" },
    { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
    { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
    { label: "Angel Oak — Investor cash flow program", url: "https://angeloakms.com/programs/investor-cash-flow-mortgage-program/" },
    { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
    { label: "HMDA 2025 investor-loan rate medians, compiled by Crowdfunded Wealth", url: "https://crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
  updated: "2026-10-26",
};

export default dscrNorthCarolina;
