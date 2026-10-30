import type { StateContent } from "../types";

const dscrPennsylvania: StateContent = {
  program: "dscr",
  slug: "pennsylvania",
  state: "Pennsylvania",
  abbr: "PA",
  metaTitle: "Pennsylvania DSCR Loans: Millage, Transfer Tax, Pittsburgh",
  metaDescription:
    "Pennsylvania DSCR loans: October 2026 lender terms, assessment ratios and rent yields in 8 metros, Philly rental rules and a worked Pittsburgh rental.",
  h1: "Pennsylvania DSCR loans: your price isn’t your assessment, and the gap between them sets the ratio.",
  intro:
    "Pennsylvania DSCR loans finance a rental on what the house earns rather than on your personal income. DSCR (debt service coverage ratio) is one division: the monthly market rent over the full monthly cost of carrying the loan, with principal, interest, property tax, insurance and any HOA dues all underneath. The minimum ratios lenders advertised in October 2026 sat between 0.75 and 1.05. The Pennsylvania twist is the assessment. Many counties haven’t reassessed in years, so a Pittsburgh house pays 27.307 mills in 2026 on an assessment that averages about half its market value, while a 4.578% to 5% transfer tax in the two big cities lands on the deed at full price.",
  facts: [
    { label: "Purchase LTV cap at most lenders, Oct 2026", value: "80%; 85% at 720–740+ FICO" },
    { label: "City of Pittsburgh, all 2026 levies", value: "27.307 mills on assessed value" },
    { label: "Allegheny assessments vs. market", value: "About 49% (factor 2.03)" },
    { label: "Security deposit cap", value: "2 months’ rent in year one, then 1" },
  ],
  costs: {
    heading: "Pennsylvania’s tax bill runs on old assessments. Its deed tax runs on your price.",
    intro:
      "The lender prices the loan. Pennsylvania’s counties, municipalities and school districts write most of the rest of the monthly bill, the PITIA a DSCR lender divides into the rent, and state and local governments both tax the deed. Checked October 30, 2026.",
    rows: [
      [
        "Tax = assessed value × millage",
        "The county assesses each parcel, and the county, the municipality and the school district each levy mills on that assessment; a mill is $1 per $1,000. Where a county hasn’t reassessed in a long time, assessments can sit far below sale prices, and the state publishes a common level ratio factor for every county that shows the average gap.",
      ],
      [
        "Pittsburgh 2026: 27.307 mills",
        "Inside the city, 2026 rates are 6.43 mills to Allegheny County, 9.67 to the city, 10.457 to Pittsburgh Public Schools, and the voter-approved 0.50-mill parks tax and 0.25-mill Carnegie Library tax. The city’s rate rose 20% from 8.06 mills this year, after the county’s went from 4.73 to 6.43 in 2025.",
      ],
      [
        "Allegheny assessments average about 49% of value",
        "The Department of Revenue’s factor for Allegheny County, in use from July 1, 2026 through June 30, 2027 and built from 2024 sales, is 2.03, so the average assessment is about 1 ÷ 2.03, or 49%, of market value. At that ratio Pittsburgh’s millage costs about 1.35% of value a year. Assessment appeals for tax year 2026 used a 50.14% ratio, and school districts are active appellants: 40 of them had filed 2,761 appeals by early September 2025.",
      ],
      [
        "Philadelphia: 1.3998% of the city’s value",
        "The City and School District of Philadelphia levy a combined 1.3998% of the value set by the Office of Property Assessment, the rate the Revenue Department lists for 2025 and still shows. Philadelphia’s factor is 1.06, so assessments run close to market there. The bill is due March 31, and unpaid tax picks up 1.5% a month from April 1.",
      ],
      [
        "Transfer tax: 1% to the state, more to the city",
        "Pennsylvania taxes real estate transferred by deed at 1% of its value, and local governments add their own share. Philadelphia’s total is 4.578% (3.578% city), Pittsburgh’s 5% (3% city, 1% school district). Grantor and grantee are jointly and severally liable; in Philadelphia the two sides usually split it, but the city can collect all of it from either. Split evenly on a $226,000 Pittsburgh purchase, your half is $5,650.",
      ],
      [
        "A deed to your LLC can owe it again",
        "The state’s list of excluded transfers has no general exclusion for deeding a house from you to an LLC you own, so moving a rental into an entity after closing can trigger the tax a second time. If your lender wants an LLC borrower, buy in the LLC’s name from the start. A financing transaction, on the other hand, is on the excluded list, so the refinance itself doesn’t owe it.",
      ],
      [
        "Insurance: price the landlord policy",
        "Pennsylvania’s 2023 average HO-3 homeowners premium was $1,217, according to the NAIC’s July 2026 report, and the report’s dwelling-fire numbers also describe owner-occupied houses. There’s no published benchmark for a landlord policy, so quote the address. The worked example assumes $1,400 a year.",
      ],
      [
        "Philadelphia taxes the rent as business income",
        "A unit you rent out and don’t live in needs a Commercial Activity License, and the income goes on a Business Income & Receipts Tax return: 1.410 mills on gross receipts plus 5.71% of net income for tax year 2025, with no exemption for the first $100,000 of receipts from 2025 on. Net profits also owe the Net Profits Tax, 3.74% for residents and 3.43% for non-residents, possibly offset in part by a credit for BIRT paid on net income.",
      ],
      [
        "Short stays carry 15.5% in Philadelphia",
        "Guests pay the city’s 8.5% hotel tax plus the Commonwealth’s 7%, and the city applies it to rooms in private homes reserved for stays. The guest pays it, so leave it out of the income you underwrite.",
      ],
    ],
  },
  metros: {
    heading: "Pittsburgh and Scranton gross 8.3–8.8% of value in rent; Philadelphia and Lancaster, under 7%.",
    intro:
      "Rent and value come from one data source and one method in all eight metros. Gross yield is a year of rent over the home’s value, before any expense. The last column turns each main county’s 2026–27 common level ratio factor into the share of market value an average assessment represents: multiply your price by it for a first estimate of the assessed value your tax will run on.",
    columns: ["Metro", "Single-family rent", "Single-family value", "Gross yield", "Main county", "Average assessment, % of market"],
    rows: [
      ["Philadelphia", "$2,292", "$396,000", "6.9%", "Philadelphia", "94%"],
      ["Lancaster", "$1,874", "$389,000", "5.8%", "Lancaster", "50%"],
      ["Allentown", "$2,243", "$365,000", "7.4%", "Lehigh", "47%"],
      ["Reading", "$1,846", "$315,000", "7.0%", "Berks", "32%"],
      ["Harrisburg", "$1,848", "$309,000", "7.2%", "Dauphin", "38%"],
      ["Scranton", "$1,614", "$234,000", "8.3%", "Lackawanna", "About 100%"],
      ["Pittsburgh", "$1,659", "$226,000", "8.8%", "Allegheny", "49%"],
      ["Erie", "$1,385", "$220,000", "7.5%", "Erie", "50%"],
    ],
    note:
      "Sources: Zillow’s single-family rent index (ZORI, smoothed) and its middle-third single-family home value index (ZHVI, smoothed and seasonally adjusted), metro level, September 2026, pulled October 30, 2026. Gross yield is computed from unrounded figures. Zillow’s Philadelphia metro also takes in South Jersey and northern Delaware. The rent index tracks listings and the value index every home, so the yield is a screen, not an appraisal. Assessment share = 1 ÷ the Department of Revenue’s common level ratio factor for July 1, 2026 to June 30, 2027, from 2024 sales; a factor of 1.00 means assessments average at or near market value. Each metro spans several counties, and each parcel’s ratio differs.",
  },
  example: {
    title: "WORKED EXAMPLE · CITY OF PITTSBURGH SINGLE-FAMILY RENTAL AT 75% LTV",
    rows: [
      ["Price (Pittsburgh metro typical single-family value)", "$226,000"],
      ["Loan: 75% LTV, 30-year fixed at 7.375%", "$169,500"],
      ["Market rent (metro single-family)", "$1,659"],
      ["Principal and interest", "$1,171"],
      ["Assessment at Allegheny’s average ratio ($226,000 ÷ 2.03)", "$111,330"],
      ["Property tax: 27.307 mills on the assessment ÷ 12", "$253"],
      ["Insurance (assumption: $1,400 a year)", "$117"],
      ["HOA dues", "$0"],
      ["PITIA", "$1,541"],
    ],
    result: { label: "DSCR", value: "1.08" },
    note:
      "$1,659 ÷ $1,541 = 1.08. The $226,000 and $1,659 are Zillow’s September 2026 single-family figures for the Pittsburgh metro, and 7.375% sits at the middle of 2025’s HMDA filings for 30-year investor loans. The tax applies all five 2026 City of Pittsburgh levies to an assessment at the county’s average ratio, and a real parcel can be far off that average: assessed at 70% of the price, tax is $360 a month and the ratio 1.01; at the full price, $514 and 0.92. Pull the parcel’s actual assessment before you offer. Closing adds your share of the 5% transfer tax, $5,650 if split evenly. A typical Philadelphia-metro house run the same way ($396,000, $2,292 rent, 1.3998% on an assessment at 94% of price, $1,600 insurance) scores 0.87, and getting it to 1.00 takes a loan of about $249,400, or 63% LTV. Numbers for illustration, not a rate quote.",
    dscr: 1.08,
  },
  rules: {
    heading: "Pennsylvania rules that shape a rental’s income and how you get a unit back.",
    items: [
      {
        title: "Foreclosure runs through the court, then a sheriff’s sale",
        text: "A residential mortgage lender must mail a notice of intention to foreclose at least 30 days before it accelerates the debt or sues, spelling out the default, the cure and the deadline. Then it needs a court judgment before the house goes to a sheriff’s sale. Between January and June 2026, ATTOM found filings on 8,399 Pennsylvania properties, 1 in every 691 housing units and 19.63% more than a year before, and 1,893 bank repossessions, one of the five highest state totals.",
      },
      {
        title: "Security deposits: two months, then one",
        text: "In a lease’s first year you can hold no more than two months’ rent; from the second year on, no more than one. Deposits over $100 go in escrow at a regulated institution, and once two years have passed the tenant earns the interest, less 1% you may keep. Within 30 days after the lease ends, send a written list of damages with any balance; miss it and you lose the right to keep any of the deposit, and fail to refund the excess and you owe double.",
      },
      {
        title: "Notice to quit: 10 days for unpaid rent",
        text: "For nonpayment the notice must give the tenant ten days from service to leave. For other grounds it’s 15 days on a lease of a year or less and 30 days on a longer one. A lease can shorten or waive the notice if it says so in writing, so check your lease form before you buy a tenanted house.",
      },
      {
        title: "Philadelphia: a rental license per building, and it doesn’t transfer",
        text: "Renting any unit takes a Rental License from Licenses and Inspections, $69 per unit a year, and a new owner must close the seller’s license and apply for a new one. L&I won’t take a sheriff’s sale receipt as proof of ownership, owners outside the city must name a managing agent with a Philadelphia address, and renewal requires current city taxes, no open L&I violations and compliance with lead-safety rules. Before each new tenant or lease renewal, give the tenant a free Certificate of Rental Suitability.",
      },
      {
        title: "Pittsburgh’s rental registry is voluntary, for now",
        text: "The city launched its Residential Housing Rental Permit Program on December 19, 2024, at $16 per unit to register plus inspection fees, but compliance stays voluntary until further notice and the city says it isn’t seeking penalties. It promises at least 30 days’ notice, with revised rules, before full enforcement starts.",
      },
      {
        title: "Short-term rentals: Philadelphia’s license is for the home you live in",
        text: "Renting for 30 consecutive days or less in Philadelphia takes a Limited Lodging Operator License ($150 a year), and only an owner or tenant whose primary residence it is can hold one. The property also needs zoning for limited lodging and a lead-free or lead-safe certification. An investor’s whole house doesn’t fit that license, so confirm the zoning route with L&I before you count a single night of short-stay income.",
      },
      {
        title: "Pennsylvania’s consumer-loan rules don’t reach a rental loan",
        text: "The Mortgage Licensing Act defines first and secondary mortgage loans as loans made primarily for personal, family or household use, and the state’s residential interest-rate ceiling doesn’t apply to business loans of any principal amount. A loan on a rental is a business-purpose loan from our licensed lending partner. That’s general information, not legal advice.",
      },
      {
        title: "Closing in an LLC",
        text: "All the DSCR lenders we checked in October 2026 will close with an LLC as borrower, three of them (Lima One, Roc, Civic) only with one, and Griffin also wants your personal guarantee. In Pennsylvania, decide before closing, since a later deed into the LLC can owe transfer tax. A CPA or attorney should weigh the structure; that’s not a lender’s call.",
      },
      {
        title: "For investment property only",
        text: "This financing is for rentals run as a business. Buying a place for yourself or family to live in? Go to a residential mortgage lender.",
      },
    ],
  },
  faqs: [
    {
      q: "What DSCR do Pennsylvania rental lenders require?",
      a: "Published minimums in October 2026 were 1.00 to 1.05 at the stricter lenders (Lima One, RCN, Roc, Civic) and 0.75 to 0.80 at others (Kiavi, LendingOne, Defy), with Easy Street listing none. A typical Pittsburgh-metro house at its county’s average assessment scores about 1.08 at 75% LTV. A typical Philadelphia-metro house scores about 0.87, which narrows you to the looser programs or a smaller loan.",
    },
    {
      q: "How much property tax will a Pittsburgh rental cost?",
      a: "Multiply the parcel’s assessed value by 27.307 mills, the 2026 total of the county, city, school, parks and library rates. Allegheny assessments average about 49% of market value, so that works out to roughly 1.35% of value a year: about $253 a month on a $226,000 house. A parcel assessed closer to its price can pay twice that, so look it up before you offer.",
    },
    {
      q: "Who pays Pennsylvania’s realty transfer tax on a rental purchase?",
      a: "Both sides are on the hook. The state’s 1% plus the local share is owed jointly and severally by grantor and grantee, so the contract decides the split. In Philadelphia, where the total is 4.578%, the Revenue Department says the parties usually share it but the city can collect 100% from either one. Pittsburgh’s total is 5%: $11,300 on a $226,000 purchase.",
    },
    {
      q: "Should I buy a Pennsylvania rental in an LLC?",
      a: "If you’ll want one, buy in it. Pennsylvania’s excluded-transfer list has no general exclusion for a deed from you to your own LLC, so moving the house after closing can bring a second round of transfer tax. Lima One, Roc and Civic lend on DSCR rentals only to entities anyway. Whether an LLC suits your liability and tax picture is a question for a CPA or attorney.",
    },
    {
      q: "How much security deposit can a Pennsylvania landlord charge?",
      a: "Up to two months’ rent in the first year of a lease and one month’s rent after that. Money over $100 goes into escrow, and after two years the tenant earns the interest less a 1% fee. Within 30 days after the tenancy ends, send an itemized list of damages and any refund, or you lose the right to withhold and can owe double the excess.",
    },
    {
      q: "Do I need a rental license in Philadelphia?",
      a: "Yes, for any unit you rent out: $69 per unit a year from Licenses and Inspections, and it doesn’t carry over from the seller. If you don’t live in the unit, you also need a Commercial Activity License and must file the Business Income & Receipts Tax. Give each new or renewing tenant a Certificate of Rental Suitability, which is free.",
    },
  ],
  sources: [
    { label: "Allegheny County — City of Pittsburgh community profile (2024–2026 millage rates)", url: "https://apps.alleghenycounty.us/website/MuniProfile.asp?muni=89" },
    { label: "WESA — Pittsburgh 2026 property tax rates and calculator (Dec 23, 2025)", url: "https://www.wesanews.org/politics-government/2025-12-23/pittsburgh-property-taxes-calculator" },
    { label: "City of Pittsburgh — Tax FAQs (parks and Carnegie Library levies, due dates)", url: "https://www.pittsburghpa.gov/City-Government/Finances-Budget/Taxes/Tax-FAQs" },
    { label: "City of Pittsburgh — Property tax worksheet (9.67-mill city rate)", url: "https://www.pittsburghpa.gov/City-Government/Finance-Budget/Taxes/Property-Tax-Worksheet" },
    { label: "Pa. Department of Revenue — Common level ratio real estate valuation factors, July 1, 2026 to June 30, 2027 (posted by Wyoming County)", url: "https://wyomingcountypa.gov/wp-content/uploads/Common-Level-Ratio-CLR-Real-Estate-Valuation-Factors-2026-2027-.pdf" },
    { label: "Allegheny Institute — Reassessment inaction on display with 2026 appeals (Sept 8, 2025)", url: "https://www.alleghenyinstitute.org/reassessment-inaction-on-display-with-2026-appeals/" },
    { label: "City of Philadelphia — Real Estate Tax", url: "https://www.phila.gov/services/payments-assistance-taxes/taxes/property-and-real-estate-taxes/real-estate-tax/" },
    { label: "Pa. Department of Revenue — Realty Transfer Tax", url: "https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" },
    { label: "City of Philadelphia — Realty Transfer Tax (4.578% combined rate)", url: "https://www.phila.gov/services/payments-assistance-taxes/taxes/property-and-real-estate-taxes/realty-transfer-tax/" },
    { label: "Allegheny County — Realty transfer tax municipality rates (Pittsburgh 5%)", url: "https://alleghenycounty.us/real-estate/realty-transfer-tax-municipality-rates.aspx" },
    { label: "61 Pa. Code § 91.193 — Realty transfer tax excluded transactions", url: "https://www.law.cornell.edu/regulations/pennsylvania/61-Pa-Code-SS-91-193" },
    { label: "NAIC — Dwelling Fire, Homeowners Owner-Occupied, and Homeowners Tenant and Condominium/Cooperative Unit Owner's Insurance Report: Data for 2023 (July 2026)", url: "https://content.naic.org/sites/default/files/publication-hmr-zu-homeowners-report.pdf" },
    { label: "City of Philadelphia — Business Income & Receipts Tax (BIRT)", url: "https://www.phila.gov/services/payments-assistance-taxes/taxes/business-taxes/business-taxes-by-type/business-income-receipts-tax-birt/" },
    { label: "City of Philadelphia — Net Profits Tax", url: "https://www.phila.gov/services/payments-assistance-taxes/taxes/business-taxes/business-taxes-by-type/net-profits-tax/" },
    { label: "City of Philadelphia — Hotel Tax", url: "https://www.phila.gov/services/payments-assistance-taxes/taxes/business-taxes/business-taxes-by-type/hotel-tax/" },
    { label: "41 P.S. § 403 — Notice of intention to foreclose", url: "https://codes.findlaw.com/pa/title-41-ps-interest/pa-st-sect-41-403.html" },
    { label: "ATTOM — U.S. foreclosure activity, first half of 2026 (released July 16, 2026)", url: "https://www.attomdata.com/news/market-trends/foreclosures/2026-mid-year-foreclosure-market-report/" },
    { label: "68 P.S. § 250.511a — Security deposit limits", url: "https://codes.findlaw.com/pa/title-68-ps-real-and-personal-property/pa-st-sect-68-250-511a.html" },
    { label: "68 P.S. § 250.511b — Escrow and interest on deposits", url: "https://codes.findlaw.com/pa/title-68-ps-real-and-personal-property/pa-st-sect-68-250-511b.html" },
    { label: "68 P.S. § 250.512 — Return of deposits; penalty", url: "https://codes.findlaw.com/pa/title-68-ps-real-and-personal-property/pa-st-sect-68-250-512.html" },
    { label: "68 P.S. § 250.501 — Notice to quit", url: "https://codes.findlaw.com/pa/title-68-ps-real-and-personal-property/pa-st-sect-68-250-501.html" },
    { label: "City of Philadelphia — Get a Rental License", url: "https://www.phila.gov/services/permits-violations-licenses/get-a-license/business-licenses/rental-and-property/get-a-rental-license/" },
    { label: "City of Philadelphia — Get a Certificate of Rental Suitability", url: "https://www.phila.gov/services/permits-violations-licenses/get-a-certificate/get-a-certificate-of-rental-suitability/" },
    { label: "City of Philadelphia — Get a Limited Lodging Operator License", url: "https://www.phila.gov/services/permits-violations-licenses/get-a-license/business-licenses/rental-and-property/get-a-limited-lodging-operator-license/" },
    { label: "City of Pittsburgh PLI — Registrations (Residential Housing Rental Permit Program)", url: "https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/Licensing/Registrations" },
    { label: "7 Pa.C.S. § 6102 — Mortgage Licensing Act definitions", url: "https://codes.findlaw.com/pa/title-7-pacsa-banks-and-banking/pa-csa-sect-7-6102.html" },
    { label: "41 P.S. § 301 — Maximum lawful interest rate; business-loan exception", url: "https://codes.findlaw.com/pa/title-41-ps-interest/pa-st-sect-41-301.html" },
    { label: "Zillow Research — ZORI single-family rent, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zori/Metro_zori_uc_sfr_sm_month.csv" },
    { label: "Zillow Research — ZHVI single-family homes, middle tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfr_tier_0.33_0.67_sm_sa_month.csv" },
    { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
    { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
    { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
    { label: "RCN Capital — Programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
    { label: "Civic — Rental loans", url: "https://www.civicfs.com/rental/" },
    { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
    { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
    { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
    { label: "Angel Oak — Investor cash flow program", url: "https://angeloakms.com/programs/investor-cash-flow-mortgage-program/" },
    { label: "HMDA 2025 investor-loan rate medians, compiled by Crowdfunded Wealth", url: "https://crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
  updated: "2026-10-30",
};

export default dscrPennsylvania;
