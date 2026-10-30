import type { StateContent } from "../types";

const fixAndFlipNorthCarolina: StateContent = {
  program: "fix-and-flip",
  slug: "north-carolina",
  state: "North Carolina",
  abbr: "NC",
  metaTitle: "North Carolina Fix and Flip Loans: $40K Rule, Liens, Math",
  metaDescription:
    "North Carolina fix and flip loans: October 2026 terms, the $40,000 contractor-license line, lien agents, metro price spreads and a worked Durham flip.",
  h1: "North Carolina fix and flip loans: once the rehab hits $40,000, the license and lien rules decide your timeline.",
  intro:
    "North Carolina fix and flip loans typically cover 85% to 100% of what you pay for the house plus the entire renovation budget, provided the loan total doesn’t exceed 70–80% of what the finished house will appraise for, its after-repair value (ARV). The money side is light: the seller owes the state’s deed excise tax when you buy, and the register of deeds records your deed of trust for $64 if it runs 35 pages or fewer. The rules that slow flippers down are on the job site. When a project costs $40,000 or more, the permit needs a licensed general contractor and the name of a lien agent, and the owner’s exemption doesn’t stretch to a house you plan to sell.",
  facts: [
    { label: "Purchase money, Oct 2026 programs", value: "85–100%" },
    { label: "Cap on the total loan", value: "70–80% of ARV" },
    { label: "Project cost that needs a licensed GC", value: "$40,000" },
    { label: "Excise tax on your resale deed", value: "$1 per $500" },
  ],
  costs: {
    heading: "What a North Carolina flip costs between the contract and the payoff.",
    intro:
      "Interest and points come from the loan. North Carolina adds a flat fee to record it, a deed tax when you sell and county plus city property tax for every month you own the house. Rates, points and leverage below are the ranges lenders advertised in October 2026, and tax rates are the latest the Department of Revenue has posted, checked October 30, 2026.",
    rows: [
      [
        "Interest: plan on 10%",
        "Half of 2025’s short-term investor loans in HMDA filings priced above 10% and half below, and the middle half of non-bank loans fell between 9.75% and 11%. Most were 12-month, interest-only balloon notes. Advertised floors in October 2026 started at 7.75% (Lima One) and went to 9.24% (RCN). Rehab draws usually start costing interest only once they’re paid out.",
      ],
      [
        "Points and lender fees",
        "Budget zero to 2 points. New Silver shows 1–1.75%; Easy Street charges up to 2 points and a $1,995 document fee. Lima One will take its points out of the payoff instead of your closing cash.",
      ],
      [
        "Recording the deed of trust: $64",
        "The register of deeds charges $64 for a deed of trust or mortgage of up to 35 pages, $4 for each page after that and $10 for each separate instrument recorded with it. A deed or other ordinary instrument is $26 for the first 15 pages.",
      ],
      [
        "Excise tax: nothing going in, yours coming out",
        "The deed tax is $1 for every $500 of price, with any part of $500 counted as a whole one, and the statute makes the transferor pay it to the register of deeds before recording. You don’t owe it on the purchase. On the resale you do: $770 on a $385,000 sale.",
      ],
      [
        "Property tax: full value, county plus city",
        "North Carolina assesses property at 100% of appraised value. Inside the City of Durham that means Durham County’s 2026–27 rate of $0.5792 per $100 plus the city’s $0.4371, its 2025–26 rate and the latest the Department of Revenue has published. Together that’s $1.0163 per $100, about $186 a month on a $220,000 purchase.",
      ],
      [
        "Ownership is fixed on January 1",
        "Counties set each year’s ownership and value as of January 1, so the bill follows whoever owned the house that day. Split the months you actually hold it in the closing prorations, once when you buy and again when you sell.",
      ],
      [
        "Insurance for a house nobody lives in",
        "The NAIC’s July 2026 report puts North Carolina’s 2023 average HO-3 premium at $1,852, but HO-3 is cover for an owner living in the home. A vacant house under renovation needs a vacant-dwelling or builder’s-risk policy, and we found no published average for either. The example assumes $1,000 for six months.",
      ],
      [
        "Permits at $40,000: a license, workers’ comp and a lien agent",
        "For any permit on work costing $40,000 or more, the inspector needs proof that a licensed general contractor will run the job (or that you’re exempt), proof of any workers’ compensation coverage the law requires and, unless it’s a single-family home you live in, the lien agent’s name, addresses, phone and email. A $48,000 rehab crosses every one of those lines.",
      ],
    ],
  },
  metros: {
    heading: "Typical values slipped in four big North Carolina metros; the low-to-middle spread still runs $92,000 to $147,000.",
    intro:
      "A flip usually starts near the bottom of a market and resells near the middle, so the gap between Zillow’s lower-third and middle-third values is a rough budget for rehab, carrying costs and profit. Where typical values are falling, as in Asheville, Durham and Raleigh, price your ARV from the newest closed sales, not from last spring’s.",
    columns: ["Metro", "Lower-third value", "Typical value", "Spread", "Typical value, 12-mo change"],
    rows: [
      ["Wilmington", "$296,000", "$443,000", "$147,000", "+0.7%"],
      ["Durham–Chapel Hill", "$260,000", "$402,000", "$142,000", "−2.5%"],
      ["Asheville", "$276,000", "$416,000", "$140,000", "−3.3%"],
      ["Charlotte", "$249,000", "$381,000", "$132,000", "−0.8%"],
      ["Raleigh", "$298,000", "$428,000", "$130,000", "−1.7%"],
      ["Greensboro–High Point", "$156,000", "$261,000", "$105,000", "+0.8%"],
      ["Winston-Salem", "$177,000", "$278,000", "$101,000", "+1.7%"],
      ["Fayetteville", "$162,000", "$254,000", "$92,000", "+0.3%"],
    ],
    note:
      "Lower-third value is Zillow’s bottom-tier ZHVI (0–33rd percentile) and typical value its middle tier (33rd–67th), both for all homes, houses and condos together, smoothed and seasonally adjusted. Metro readings for September 2026 against September 2025, downloaded October 30, 2026. Spread is the typical value minus the lower-third value, from the rounded figures shown.",
  },
  example: {
    title: "WORKED EXAMPLE · CITY OF DURHAM FLIP, 6-MONTH HOLD",
    rows: [
      ["After-repair value (ARV)", "$385,000"],
      ["Purchase / rehab budget", "$220,000 / $48,000"],
      ["Loan: 90% of purchase + 100% of rehab", "$198,000 + $48,000 = $246,000"],
      ["Ceiling at 75% of ARV", "$288,750, so the full $246,000 funds"],
      ["Interest at an assumed 10%, 6 months", "$11,100"],
      ["1.5 points (assumed)", "$3,690"],
      ["Closing costs on the purchase (assumed)", "$3,000"],
      ["Recording the deed of trust", "$64"],
      ["Property tax, 6 months at $1.0163 per $100", "$1,118"],
      ["Vacant-property insurance (assumed)", "$1,000"],
      ["Excise tax on the resale deed", "$770"],
      ["Selling costs (assumed 6% of ARV)", "$23,100"],
      ["Costs beyond price and rehab", "$43,842"],
      ["Your cash in until the sale", "$41,972"],
    ],
    result: { label: "Profit before income tax", value: "$73,158" },
    note:
      "$385,000 − $220,000 − $48,000 − $43,842 = $73,158. Interest accrues on $198,000 for six months and on the $48,000 of draws for an average of three; 10% matches the 2025 HMDA median for short-term investor loans. Cash in = $22,000 down + $3,690 points + $3,000 closing + $64 recording + $11,100 interest + $1,118 tax + $1,000 insurance. The seller covered the excise tax on your purchase. The price passes the 70% rule (70% of $385,000 − $48,000 = $221,500), and the ARV is below the Durham–Chapel Hill metro’s $402,000 typical value, which fell 2.5% over the year. At $48,000, this job needs a licensed general contractor on the permit and a lien agent named before the first contract. Tax assumes the county values the house at its price. A sketch of the math, not a rate quote.",
  },
  rules: {
    heading: "North Carolina rules that decide who can do the work, who can lien it and what you owe the buyer.",
    items: [
      {
        title: "Foreclosure buys: a deposit on the spot, then 10-day upset windows",
        text: "A North Carolina power-of-sale foreclosure is run by a trustee after a hearing before the clerk of superior court. At the sale the trustee can demand an immediate cash deposit of up to 5% of your bid or $750, whichever is more. For 10 days after the sale is reported, anyone can top you by at least 5% (minimum $750) with a 5% deposit at the clerk’s office, and each new bid opens another 10 days. Win and then fail to close, and you owe any shortfall on the resale plus its costs. Filings rose 46.72% in the first half of 2026, one of the five biggest jumps among states with at least 500 filings.",
      },
      {
        title: "The owner exemption doesn’t cover a flip",
        text: "You can skip the general contractor license as an owner only if the building is meant solely for your own occupancy, and if you don’t live there for at least 12 months after completion, the law presumes you never meant to. The licensing board enforces this: in an October 2025 consent order, an owner who filed an owner-exemption affidavit for a renovation over $40,000, then advertised a new roof, HVAC, floors and kitchen and sold the house without living in it, agreed to a permanent injunction.",
      },
      {
        title: "Electrical work needs a licensed contractor",
        text: "North Carolina’s owner exception for electrical work covers your own property only when it isn’t intended at the time for rent, lease or sale. A flip is intended for sale from day one, so wiring belongs to a licensed electrical contractor under its own permit.",
      },
      {
        title: "Name a lien agent before you sign the first contract",
        text: "For improvements costing $40,000 or more, the owner must designate a lien agent no later than the first contract for the work, unless the job is on an existing single-family home the owner lives in. Contractors and suppliers send the lien law’s notices to that agent, which gives you one record of who has been on the job. The permit application has to list the agent too.",
      },
      {
        title: "120 days to file a lien, 180 to sue on it",
        text: "A contractor or supplier can file a claim of lien up to 120 days after it last furnished labor or materials, and has 180 days from that same date to sue to enforce it. North Carolina voids any waiver of lien rights demanded as a condition of awarding the contract, so collect releases as each draw is paid, and line up your listing date with the last furnishing dates on the job.",
      },
      {
        title: "Your resale needs the disclosure statement",
        text: "The state’s residential property disclosure law exempts court-ordered, foreclosure, fiduciary, family, tax-default and government transfers, among a few others; none covers an investor selling a renovated house. Give the buyer the disclosure statement before they make an offer. If it arrives later, they can cancel within three calendar days of receiving it or of the contract date, whichever comes first, up to settlement or occupancy. The mineral and oil and gas rights disclosure applies even when the main form is waived, and a pre-1978 house needs the federal lead-paint disclosure.",
      },
      {
        title: "Paying someone to find your loan",
        text: "Under North Carolina’s loan broker law, anyone who takes a fee from you in return for promising to arrange a loan must hand you a written disclosure, covering its business history, finances, services and a bond or trust account, at least seven days before you sign its contract. When you apply here, the loan comes from our licensed lending partner.",
      },
      {
        title: "Closing in an LLC",
        text: "If the house might end up as a rental, keep in mind that Lima One, Roc and Civic won’t write their DSCR loans (rental loans sized on whether the rent covers the full payment) to an individual, which is one reason many investors take title to a flip in an LLC from the start. Form it before you sign the purchase contract so the entity that buys is the one that borrows. A CPA or attorney should pick the structure; a lender can’t.",
      },
      {
        title: "For investment property only",
        text: "These loans are for houses bought to sell or to lease out. A home that you or your family will occupy needs a residential mortgage.",
      },
    ],
  },
  faqs: [
    {
      q: "How much will a lender fund on a North Carolina flip?",
      a: "October 2026 program pages showed 85% to 100% of the price, more for experienced flippers, plus up to all of the rehab, with the total held to 70–80% of ARV; RCN’s tiers run as low as 60%. On a $385,000 ARV at 75%, the ceiling is $288,750. If 90% of a $220,000 price plus a $48,000 rehab comes to $246,000, the whole amount funds.",
    },
    {
      q: "Do I need a licensed general contractor to flip a house in North Carolina?",
      a: "Yes, if the project costs $40,000 or more. The inspector won’t issue the permit without proof that a licensed general contractor will run the work. The owner exemption only covers a building meant for your own occupancy, and the law presumes otherwise if you don’t live there 12 months after completion. Wiring needs a licensed electrical contractor no matter how small the job.",
    },
    {
      q: "What is a lien agent in North Carolina?",
      a: "The party you designate to receive the notices that subcontractors and suppliers send under the lien law. It’s required for improvements costing $40,000 or more, except on an existing single-family home the owner lives in, and you must designate it no later than your first contract for the work. The building permit application lists its contact details.",
    },
    {
      q: "Who pays the excise tax on a North Carolina flip?",
      a: "The seller on each deed. North Carolina charges $1 per $500 of price, rounding any part of $500 up, and the statute puts it on the transferor. So the seller pays it when you buy, and you pay it when you resell: $770 on a $385,000 sale. Recording your deed of trust is a separate $64 for up to 35 pages.",
    },
    {
      q: "Do I have to give a disclosure statement when I sell a North Carolina flip?",
      a: "Yes. Investor sellers aren’t on the exemption list, which covers court-ordered, foreclosure, fiduciary, family and similar transfers. Hand over the residential property disclosure statement before the buyer’s offer, or the buyer can cancel within three calendar days of getting it or of the contract, whichever comes first, until settlement or occupancy. The mineral and oil and gas rights form is required either way.",
    },
    {
      q: "How long can a contractor file a lien on my North Carolina flip?",
      a: "Up to 120 days after its last day of labor or materials on the site, and it then has until 180 days after that last furnishing to sue on the lien. An advance waiver demanded as a condition of getting the job is unenforceable, so take a release with each payment and keep the lien agent’s notices in your closing file for the buyer’s title company.",
    },
  ],
  sources: [
    { label: "N.C. Licensing Board for General Contractors — 2026 Laws and Regulations book (G.S. 87-1, 87-14; Dec 3, 2025)", url: "https://www.nclbgc.org/wp-content/uploads/2025/12/2026-Laws-And-Regulations-Book-DEC-3-2025_final-1.pdf" },
    { label: "N.C. Licensing Board for General Contractors — Injunctions by consent, Winter 2026", url: "https://nclbgc.org/wp-content/uploads/2026/01/Injunctions-By-Consent_Winter2026.pdf" },
    { label: "N.C. Gen. Stat. § 87-43.1 — Exceptions to electrical contractor licensing", url: "https://codes.findlaw.com/nc/chapter-87-contractors/nc-gen-st-sect-87-43-1.html" },
    { label: "N.C. Gen. Stat. § 44A-11.1 — Lien agent designation", url: "https://codes.findlaw.com/nc/chapter-44a-statutory-liens-and-charges/nc-gen-st-sect-44a-11-1.html" },
    { label: "N.C. Gen. Stat. § 44A-12 — Filing a claim of lien; advance waivers", url: "https://codes.findlaw.com/nc/chapter-44a-statutory-liens-and-charges/nc-gen-st-sect-44a-12.html" },
    { label: "N.C. Gen. Stat. § 44A-13 — Action to enforce a lien", url: "https://codes.findlaw.com/nc/chapter-44a-statutory-liens-and-charges/nc-gen-st-sect-44a-13.html" },
    { label: "N.C. Gen. Stat. § 47E-2 — Disclosure act exemptions", url: "https://codes.findlaw.com/nc/chapter-47e-residential-property-disclosure-act/nc-gen-st-sect-47e-2.html" },
    { label: "N.C. Gen. Stat. § 47E-5 — Buyer's right to cancel", url: "https://codes.findlaw.com/nc/chapter-47e-residential-property-disclosure-act/nc-gen-st-sect-47e-5.html" },
    { label: "US EPA — Real estate disclosures about lead-based paint", url: "https://www.epa.gov/lead/real-estate-disclosure" },
    { label: "N.C. Gen. Stat. § 45-21.10 — Cash deposit at a foreclosure sale", url: "https://codes.findlaw.com/nc/chapter-45-mortgages-and-deeds-of-trust/nc-gen-st-sect-45-21-10.html" },
    { label: "N.C. Gen. Stat. § 45-21.27 — Upset bids", url: "https://codes.findlaw.com/nc/chapter-45-mortgages-and-deeds-of-trust/nc-gen-st-sect-45-21-27.html" },
    { label: "N.C. Gen. Stat. § 45-21.30 — Defaulting bidders", url: "https://codes.findlaw.com/nc/chapter-45-mortgages-and-deeds-of-trust/nc-gen-st-sect-45-21-30.html" },
    { label: "N.C. Gen. Stat. § 45-21.16 — Notice and hearing before the clerk", url: "https://codes.findlaw.com/nc/chapter-45-mortgages-and-deeds-of-trust/nc-gen-st-sect-45-21-16.html" },
    { label: "ATTOM — U.S. foreclosure activity, first half of 2026 (released July 16, 2026)", url: "https://www.attomdata.com/news/market-trends/foreclosures/2026-mid-year-foreclosure-market-report/" },
    { label: "N.C. Gen. Stat. § 161-10 — Register of deeds recording fees", url: "https://codes.findlaw.com/nc/chapter-161-register-of-deeds/nc-gen-st-sect-161-10.html" },
    { label: "N.C. Gen. Stat. § 105-228.30 — Excise tax on conveyances", url: "https://codes.findlaw.com/nc/chapter-105-taxation/nc-gen-st-sect-105-228-30.html" },
    { label: "N.C. Gen. Stat. § 105-285 — Valuation and ownership as of January 1", url: "https://codes.findlaw.com/nc/chapter-105-taxation/nc-gen-st-sect-105-285.html" },
    { label: "N.C. Department of Revenue — County property tax rates and reappraisal schedules, FY 2026–2027", url: "https://www.ncdor.gov/taxes-forms/property-tax/property-tax-rates/county-property-tax-rates-and-reappraisal-schedules/fiscal-year-2026-2027" },
    { label: "N.C. Department of Revenue — 2025–2026 county and municipal tax rates and effective tax rates", url: "https://www.ncdor.gov/2025-2026-county-and-municipal-tax-rates-and-effective-tax-rates" },
    { label: "NAIC — Dwelling Fire, Homeowners Owner-Occupied, and Homeowners Tenant and Condominium/Cooperative Unit Owner's Insurance Report: Data for 2023 (July 2026)", url: "https://content.naic.org/sites/default/files/publication-hmr-zu-homeowners-report.pdf" },
    { label: "N.C. Gen. Stat. § 66-106 — Loan broker definitions", url: "https://codes.findlaw.com/nc/chapter-66-commerce-and-business/nc-gen-st-sect-66-106.html" },
    { label: "N.C. Gen. Stat. § 66-107 — Loan broker disclosure statement", url: "https://codes.findlaw.com/nc/chapter-66-commerce-and-business/nc-gen-st-sect-66-107.html" },
    { label: "Zillow Research — ZHVI middle tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv" },
    { label: "Zillow Research — ZHVI bottom tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.0_0.33_sm_sa_month.csv" },
    { label: "Kiavi — Fix and flip", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Lima One — Fix and flip", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "Lima One — Rental loans (entity borrowers)", url: "https://www.limaone.com/rental/" },
    { label: "RCN Capital — Programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "LendingOne — Fix and flip", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
    { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
    { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
    { label: "Civic — Fix and flip", url: "https://www.civicfs.com/fix-and-flip/" },
    { label: "Civic — Rental loans", url: "https://www.civicfs.com/rental/" },
    { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "New Silver — Fix and flip", url: "https://newsilver.com/fix-and-flip-loans/" },
    { label: "Crowdfunded Wealth — 2025 HMDA rate medians for short-term investor loans (corrected Oct 26, 2026)", url: "https://crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
  updated: "2026-10-30",
};

export default fixAndFlipNorthCarolina;
