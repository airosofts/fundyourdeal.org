import type { StateContent } from "../types";

const fixAndFlipGeorgia: StateContent = {
  program: "fix-and-flip",
  slug: "georgia",
  state: "Georgia",
  abbr: "GA",
  metaTitle: "Georgia Fix and Flip Loans: Leverage, Taxes & a DeKalb Flip",
  metaDescription:
    "Georgia fix and flip loans: October 2026 terms, why a 12-month loan skips Georgia's intangible tax, metro price spreads and a worked DeKalb County flip.",
  h1: "Georgia fix and flip loans: short-term money, no intangible tax, and a carry you can price to the mill.",
  intro:
    "Georgia fix and flip loans typically cover between 85% and 100% of the price plus up to the full renovation budget, held to 70–80% of the after-repair value (ARV). Georgia's closing costs are light for a flipper: the transfer tax runs about $1 per $1,000 of price, and since July 1, 2025 a loan with all principal due within 62 months owes no intangible recording tax. The cost to watch is the carry. In unincorporated DeKalb County, 44.09 mills on 40% of value comes to about 1.76% of the house's value a year.",
  facts: [
    { label: "Purchase financed (published)", value: "85–100%" },
    { label: "Rehab financed", value: "Up to 100%" },
    { label: "Loan cap, % of ARV", value: "70–80%" },
    { label: "Intangible tax on a 12-month loan", value: "$0" },
  ],
  costs: {
    heading: "What a Georgia flip costs between the purchase and the payoff.",
    intro:
      "The lender's terms set your interest and points. Georgia sets the recording taxes on the way in and out and the property tax while you hold. Lender figures are ranges published in October 2026.",
    rows: [
      [
        "Interest",
        "Short-term investor loans had a 2025 HMDA median rate of 10%, and 10.45% at non-bank lenders; advertised floors in October 2026 ran from 7.75% to 9.24%. Most programs charge interest only on rehab money once it's drawn, so the holdback costs nothing while it sits.",
      ],
      [
        "Points and lender fees",
        "Points run from zero to 2, and most lenders add a document fee ($1,995 at Easy Street). Lima One will defer its points until the loan pays off rather than collect them at closing.",
      ],
      [
        "Intangible recording tax: none on a flip loan",
        "Georgia taxes long-term notes secured by real estate at $1.50 per $500, capped at $25,000. Since July 1, 2025 a note counts as long-term only when part of the principal falls due more than 62 months after its date, up from three years. A 6- to 24-month flip loan sits well inside that line, so it records without the tax.",
      ],
      [
        "The tax comes back on a rental refinance",
        "If the flip turns into a rental, a 30-year refinance is a long-term note: $765 on a $255,000 loan. The tax is collected from the holder of the security deed before it's recorded, and the statute lets the lender pass it on to you.",
      ],
      [
        "Transfer tax on each deed",
        "$1.00 for the first $1,000 of price and 10¢ for each additional $100: $340 on a $340,000 resale. It's paid to the clerk of superior court before the deed can be recorded, and the deed goes in with a PT-61 form, which is filed online at no charge.",
      ],
      [
        "Property tax while you hold",
        "Georgia assesses property at 40% of fair market value and applies the local millage. Unincorporated DeKalb's 2026 total is 44.090 mills: 21.310 county and 22.780 school. That's about 1.76% of value a year, or $265 a month on a $180,000 purchase.",
      ],
      [
        "Who gets the bill",
        "DeKalb mails tax bills to the owner of record on January 1, with installments due September 30 and November 15 (November 16 in 2026) and a 5% late penalty. Settle each year's share in the closing proration when you buy and again when you sell, so a bill doesn't land on the wrong side.",
      ],
      [
        "The seller's homestead doesn't carry over",
        "DeKalb's tax commissioner puts it plainly: only private residences get a homestead exemption, not rentals, vacant land or commercial owners. Georgia's 2024 floating homestead law caps yearly assessment increases on homesteaded property at inflation, but the base resets when the home sells. A long-held seller's bill can be far below what you'll owe.",
      ],
      [
        "Permits on the rehab",
        "DeKalb requires a building permit for every project, renovations included, and its owner-builder affidavit requires that you have no intent to sell or lease, so a flip needs a licensed contractor to pull permits. Mechanical, electrical, plumbing and gas permits go to state-licensed trade contractors. DeKalb moved to the 2024 ICC codes on January 1, 2026.",
      ],
    ],
  },
  metros: {
    heading: "In every big Georgia metro, a lower-third house sits $93,000–$125,000 below a typical one.",
    intro:
      "A distressed purchase usually starts near the lower third of local values, and a finished flip usually resells near the middle. The gap between the two is a rough ceiling on rehab plus profit; your appraiser's comps set the real ARV.",
    columns: ["Metro", "Lower-third value", "Typical value", "Spread", "Typical value, 12-mo change"],
    rows: [
      ["Atlanta", "$251,000", "$376,000", "$125,000", "−1.5%"],
      ["Athens", "$250,000", "$367,000", "$117,000", "+1.8%"],
      ["Savannah", "$237,000", "$340,000", "$103,000", "−2.7%"],
      ["Augusta", "$130,000", "$250,000", "$120,000", "+2.9%"],
      ["Warner Robins", "$156,000", "$254,000", "$98,000", "+2.9%"],
      ["Columbus", "$103,000", "$210,000", "$107,000", "+3.8%"],
      ["Macon", "$82,000", "$197,000", "$115,000", "+3.1%"],
      ["Albany", "$75,000", "$168,000", "$93,000", "+3.9%"],
    ],
    note:
      "Zillow ZHVI for all homes (single-family and condo), smoothed and seasonally adjusted: bottom tier (0–33rd percentile) as the lower-third value and middle tier (33rd–67th) as the typical value. Metro level, September 2026 readings against September 2025, pulled October 26, 2026. Spread = typical value − lower-third value, from the rounded figures.",
  },
  example: {
    title: "WORKED EXAMPLE · UNINCORPORATED DEKALB COUNTY FLIP, 5-MONTH HOLD",
    rows: [
      ["After-repair value (ARV)", "$340,000"],
      ["Purchase price / rehab budget", "$180,000 / $58,000"],
      ["Loan: 90% of purchase + all of the rehab", "$162,000 + $58,000 = $220,000"],
      ["Check against 75% of ARV", "$255,000 cap, so the full $220,000 funds"],
      ["Interest at an assumed 10.25%, 5 months", "$8,157"],
      ["1 point + $1,995 document fee", "$4,195"],
      ["Intangible recording tax (loan under 62 months)", "$0"],
      ["Property tax, 5 months at 44.090 mills on 40%", "$1,323"],
      ["Builder's risk / vacant insurance (assumed)", "$1,000"],
      ["Buying closing costs (assumed)", "$3,500"],
      ["Transfer tax on the resale deed", "$340"],
      ["Selling costs (assumed 6% of ARV)", "$20,400"],
      ["Total costs on top of price and rehab", "$38,915"],
      ["Cash you carry until the sale", "$36,175"],
    ],
    result: { label: "Profit before income tax", value: "$63,085" },
    note:
      "$340,000 − $180,000 − $58,000 − $38,915 = $63,085. Interest: $162,000 outstanding for 5 months plus $58,000 of rehab draws averaging 2.5 months. Cash carried = $18,000 down + $4,195 points and fees + $3,500 closing + $8,157 interest + $1,323 tax + $1,000 insurance. The price passes the 70% rule (70% of $340,000 − $58,000 = $180,000) and the ARV sits under the Atlanta metro's $376,000 typical value. Tax assumes DeKalb's assessor values the house at its purchase price. An illustration, not a rate quote.",
  },
  rules: {
    heading: "Georgia rules that decide whether a flip closes on time and sells clean.",
    items: [
      {
        title: "Foreclosure auctions: first Tuesday, courthouse steps",
        text: "Georgia lenders foreclose out of court under a power of sale, run like a sheriff's sale: on the first Tuesday of the month, between 10 a.m. and 4 p.m., at the county courthouse, moving to Wednesday when that Tuesday is New Year's Day or Independence Day. The sale is advertised weekly for four weeks in the county's legal organ, and the borrower must get written notice at least 30 days ahead. That four-week ad run is your research window.",
      },
      {
        title: "More Georgia houses are heading to auction",
        text: "ATTOM counted 8,164 Georgia foreclosure starts in the first half of 2026, fourth among the states, and filings on 1 in every 539 housing units, up 52.41% on a year earlier. August 2026 added 1,189 starts. The Macon metro's 0.36% filing rate was nearly double the state's 0.19%.",
      },
      {
        title: "Tax-sale houses can be redeemed",
        text: "After a tax sale, the owner or anyone with an interest can redeem for 12 months, and after that until the buyer cuts the right off with the statutory notice. Redemption pays the buyer the sale price plus a premium of 20% for the first year and 10% for each year after. Don't put rehab money into a tax-deed house until the redemption right is foreclosed.",
      },
      {
        title: "You can't act as your own unlicensed contractor",
        text: "Residential work worth more than $2,500 needs a state-licensed residential or general contractor, and a contract with an unlicensed one can't be enforced by that contractor. The owner exemption covers only a building for your own family's use that isn't offered for sale or lease, so it doesn't cover a flip. Electricians, plumbers and conditioned-air contractors each need their own state license.",
      },
      {
        title: "Lien deadlines and Georgia's statutory waivers",
        text: "A contractor or supplier has 90 days after finishing its work to file a claim of lien, must mail you a copy within two business days, and has 365 days to sue on it. Use Georgia's statutory interim and final waiver forms with each draw: a waiver becomes effective when the money is received, or 90 days after signing unless the claimant files an affidavit of nonpayment first. Once a notice of commencement is filed, within 15 days after work starts, subs and suppliers you didn't hire directly must send a notice to contractor within 30 days to protect their lien rights.",
      },
      {
        title: "Know what you must say when you resell",
        text: "Georgia law protects a seller who doesn't volunteer that a home was the site of a death or felony, but any direct question has to be answered truthfully. A listing broker must disclose adverse physical facts it actually knows about that a reasonably diligent inspection wouldn't reveal. Keep permits, inspections and invoices in one file so your answers are easy to back up.",
      },
      {
        title: "Cheap houses can fall under loan minimums",
        text: "Published minimum loan amounts in October 2026 started at $50,000 to $100,000. A lower-third house in Macon ($82,000) or Albany ($75,000) bought at a discount, plus a light rehab, can come in under several lenders' floors. Ask about the minimum before you sign the contract, not after.",
      },
      {
        title: "Business purpose only",
        text: "Fix and flip loans finance houses you'll resell or rent out. A home that you or a relative will live in needs a residential mortgage, not a flip loan.",
      },
    ],
  },
  faqs: [
    {
      q: "How much will a lender fund on a Georgia flip?",
      a: "Programs published in October 2026 advanced 85–100% of the purchase price, depending on how many flips you've completed, plus up to 100% of the rehab budget. The total is then held to 70–80% of the after-repair value, or 60–70% at some lenders for a first project or heavy rehab. The lower figure is your loan; you bring the difference.",
    },
    {
      q: "Do I pay Georgia's intangible recording tax on a flip loan?",
      a: "Not on a typical one. Since July 1, 2025 the tax applies only when part of a note's principal is due more than 62 months after its date. A 12- to 24-month flip loan is far inside that, so its security deed records without the $1.50-per-$500 tax. A 30-year rental refinance afterward is long-term and does owe it, capped at $25,000.",
    },
    {
      q: "What interest rate should I budget for a Georgia flip?",
      a: "Plan on about 10%. HMDA data for 2025 put the median short-term investor loan at 10%, and 10.45% at non-bank lenders, while advertised floors in October 2026 started between 7.75% and 9.24%. Add 0–2 points and any document fee. Interest usually runs only on the rehab money that has been drawn.",
    },
    {
      q: "Can I run my own Georgia rehab without a contractor's license?",
      a: "Not without a license. Residential work over $2,500 needs a state-licensed residential or general contractor, and the owner exemption applies only to a building for your own family's use that isn't offered for sale or lease. DeKalb's owner-builder affidavit asks you to confirm you have no intent to sell. Trade work needs licensed electricians, plumbers and HVAC contractors.",
    },
    {
      q: "How do Georgia foreclosure auctions work?",
      a: "Under the power of sale in a security deed, the lender sells without a lawsuit. Sales take place at the county courthouse from 10 a.m. to 4 p.m. on the month's first Tuesday, after the notice runs weekly for four weeks in the county's legal organ. The borrower gets written notice at least 30 days ahead. Use the four-week ad run to check title, liens and occupancy before you bid.",
    },
    {
      q: "How long can a Georgia subcontractor file a lien on my flip?",
      a: "Up to 90 days after it finishes its work, and it then has 365 days to sue on the lien. That window can stay open after your listing goes live, so an unpaid sub can cloud the sale. Collect Georgia's statutory interim waiver with every draw and a final waiver at the end; a waiver turns final 90 days after signing unless an affidavit of nonpayment is filed.",
    },
    {
      q: "Can I flip a Georgia tax-deed house right away?",
      a: "Usually not. The former owner and others with an interest can redeem for 12 months after a tax sale, and after that until the buyer forecloses the right with statutory notice. Redemption returns the price plus a 20% premium for the first year. Don't fund a rehab on a tax deed until that right is gone.",
    },
    {
      q: "How much property tax should I budget on a Georgia flip?",
      a: "Multiply 40% of the value by the local millage. In unincorporated DeKalb County the 2026 total is 44.090 mills, about 1.76% of value a year: $265 a month on a $180,000 house. Don't use the seller's bill; a homestead exemption or capped base won't carry over to an investor.",
    },
    {
      q: "How fast can a Georgia flip loan close?",
      a: "Count on one to three weeks. Lenders' published timelines: Kiavi 7 days, RCN 10 business days, LendingOne 7 to 10 business days. Title work, the appraisal and your rehab budget set the pace, so have the scope of work, contractor bid and entity documents ready the day you go under contract.",
    },
    {
      q: "What if my Georgia flip doesn't sell?",
      a: "Keep it as a rental and move it onto a DSCR (debt service coverage ratio) loan, sized on the rent the house earns against its monthly payment rather than on your income. Cash-out at most DSCR lenders tops out around 75% of value, usually after roughly 90 days of ownership. Budget the intangible recording tax, since a 30-year note is long-term: $765 on a $255,000 loan.",
    },
  ],
  sources: [
    { label: "O.C.G.A. § 48-6-1 — Real estate transfer tax rate", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-6-1/" },
    { label: "O.C.G.A. § 48-6-4 — Transfer tax paid to the clerk before recording", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-6-4/" },
    { label: "GSCCCA — PT-61 e-filing FAQ", url: "https://apps.gsccca.org/pt61efiling/faq.asp" },
    { label: "Ga. Comp. R. & Regs. 560-11-2-.16 — PT-61 required with a conveying deed", url: "https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-560-11-2-.16" },
    { label: "O.C.G.A. § 48-6-61 — Intangible recording tax rate and maximum", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-6-61.html" },
    { label: "Chatham County Superior Court Clerk — HB 586 notice (62-month long-term note, effective July 1, 2025)", url: "https://cdn.chathamcountyga.gov/Files/Courts/SCC/HB586-JULY2025.pdf" },
    { label: "Muscogee County Superior Court Clerk — Real estate recording (HB 586)", url: "https://muscogeecourts.columbusga.gov/Real-Estate-Recording-and-Records" },
    { label: "O.C.G.A. § 48-5-7 — Assessment at 40% of fair market value", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-5-7/" },
    { label: "DeKalb County Tax Commissioner — 2026 millage rates", url: "https://dekalbtaxga.gov/form-doc/millage-rates-2025/" },
    { label: "DeKalb County Tax Commissioner — Tax bill information", url: "https://dekalbtaxga.gov/property-tax/tax-bill-information/" },
    { label: "DeKalb County Tax Commissioner — Exemptions", url: "https://dekalbtaxga.gov/property-tax/exemptions/" },
    { label: "Georgia House Budget & Research Office — HB 581 property tax reform flyer", url: "https://agenda.savannahga.gov/content/files/hb-581-property-tax-reform_flyer.pdf" },
    { label: "DeKalb County Planning & Sustainability — Building permits", url: "https://www.dekalbcountyga.gov/planning-and-sustainability/issued-building-permits" },
    { label: "DeKalb County — Owner-occupant affidavit", url: "https://www.dekalbcountyga.gov/sites/default/files/2026-01/Owner-Occupant%20Affidavit%209-8-2025.pdf" },
    { label: "O.C.G.A. § 44-14-162 — Power-of-sale foreclosure advertisement and conduct", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-14-162/" },
    { label: "O.C.G.A. § 44-14-162.2 — Notice to debtor 30 days before sale", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-14-162-2/" },
    { label: "O.C.G.A. § 9-13-161 — Time and place of sheriff's sales", url: "https://codes.findlaw.com/ga/title-9-civil-practice/ga-code-sect-9-13-161/" },
    { label: "O.C.G.A. § 9-13-140 — Advertisement of sheriff's sales", url: "https://codes.findlaw.com/ga/title-9-civil-practice/ga-code-sect-9-13-140/" },
    { label: "O.C.G.A. § 48-4-40 — Redemption after tax sale", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-4-40/" },
    { label: "O.C.G.A. § 48-4-42 — Redemption price and premium", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-4-42/" },
    { label: "O.C.G.A. § 43-41-17 — Contractor license required; owner exemption", url: "https://codes.findlaw.com/ga/title-43-professions-and-businesses/ga-code-sect-43-41-17/" },
    { label: "O.C.G.A. § 43-41-2 — Definitions ($2,500 residential threshold)", url: "https://codes.findlaw.com/ga/title-43-professions-and-businesses/ga-code-sect-43-41-2/" },
    { label: "O.C.G.A. § 43-14-8 — Electrical, plumbing and conditioned air licenses", url: "https://codes.findlaw.com/ga/title-43-professions-and-businesses/ga-code-sect-43-14-8/" },
    { label: "O.C.G.A. § 44-14-361.1 — Claim of lien deadlines", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-14-361-1/" },
    { label: "O.C.G.A. § 44-14-361.5 — Notice of commencement", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-14-361-5/" },
    { label: "O.C.G.A. § 44-14-366 — Statutory lien waivers", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-14-366/" },
    { label: "O.C.G.A. § 44-1-16 — Disclosure of deaths and crimes", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-1-16/" },
    { label: "O.C.G.A. § 10-6A-5 — Seller's broker duties", url: "https://codes.findlaw.com/ga/title-10-commerce-and-trade/ga-code-sect-10-6a-5/" },
    { label: "ATTOM — Mid-Year 2026 U.S. Foreclosure Market Report", url: "https://www.attomdata.com/news/market-trends/foreclosures/2026-mid-year-foreclosure-market-report/" },
    { label: "ATTOM — August 2026 U.S. Foreclosure Market Report", url: "https://www.attomdata.com/news/market-trends/foreclosures/august-2026-foreclosure-market-report/" },
    { label: "Zillow Research — ZHVI middle tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv" },
    { label: "Zillow Research — ZHVI bottom tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.0_0.33_sm_sa_month.csv" },
    { label: "Kiavi — Fix and flip", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Lima One — Fix and flip", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "RCN Capital — Programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "LendingOne — Fix and flip", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
    { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
    { label: "Civic — Fix and flip", url: "https://www.civicfs.com/fix-and-flip/" },
    { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "New Silver — Fix and flip", url: "https://newsilver.com/fix-and-flip-loans/" },
    { label: "HMDA 2025 investor-loan rate medians, compiled by Crowdfunded Wealth (updated Oct 26, 2026)", url: "https://crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
  updated: "2026-10-26",
};

export default fixAndFlipGeorgia;
