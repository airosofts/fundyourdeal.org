import type { StateContent } from "../types";

const fixAndFlipPennsylvania: StateContent = {
  program: "fix-and-flip",
  slug: "pennsylvania",
  state: "Pennsylvania",
  abbr: "PA",
  metaTitle: "Pennsylvania Fix and Flip Loans: Transfer Tax & Philly Math",
  metaDescription:
    "Pennsylvania fix and flip loans: October 2026 terms, Philadelphia’s 4.578% and Pittsburgh’s 5% transfer tax, resale inspections and a worked Philly flip.",
  h1: "Pennsylvania fix and flip loans: in Philadelphia the transfer tax hits both deeds, so price it into your offer.",
  intro:
    "Pennsylvania fix and flip loans in October 2026 programs advanced 85% to 100% of the purchase price and the full rehab budget. The ceiling on the combined loan was 70% to 80% of after-repair value (ARV), the appraiser’s estimate of the finished house. What sets Pennsylvania apart is the deed tax. The state takes 1% of the value on every deed and local governments add their own share: 3.578% more in Philadelphia, for 4.578% in all, and 4% more in Pittsburgh, for 5%. A flip pays it on the way in and again on the way out, so a $300,000 Philadelphia resale owes $13,734 before you and your buyer split it.",
  facts: [
    { label: "Purchase funded, Oct 2026 programs", value: "85–100%" },
    { label: "Total loan cap", value: "70–80% of ARV" },
    { label: "Philadelphia transfer tax, city + state", value: "4.578% per deed" },
    { label: "Pittsburgh transfer tax, all shares", value: "5% per deed" },
  ],
  costs: {
    heading: "Pennsylvania charges a flip on the way in, while it sits and on the way out.",
    intro:
      "The loan sets your interest and points. Pennsylvania and its cities add transfer tax at both closings and property tax for the months in between. Lender ranges are from programs published in October 2026; city rates were checked October 30, 2026.",
    rows: [
      [
        "Interest and points",
        "Pencil in 10%. That’s where 2025’s short-term investor loans in federal HMDA data centered; non-banks wrote 83.3% of them, at a 10.45% median. Advertised October 2026 floors started between 7.75% and 9.24%. Points run from zero to 2, sometimes with a document fee on top, $1,995 at Easy Street.",
      ],
      [
        "Transfer tax: the state’s 1% plus the local share",
        "Pennsylvania taxes the value of real estate conveyed by deed at 1%, and the municipality and school district add theirs: 4.578% in total in Philadelphia, 5% in Pittsburgh. Buyer and seller are jointly and severally liable, so the agreement of sale decides who pays what. Philadelphia’s Revenue Department says the tax is usually shared but it can collect every dollar from either party.",
      ],
      [
        "Twice on every flip",
        "Buy for $150,000 and resell for $300,000 in Philadelphia and the two deeds owe $6,867 and $13,734. Split each one evenly and your share is $10,301; agree to carry the whole tax both times and it’s $20,601. At Pittsburgh’s 5%, the even split comes to $11,250.",
      ],
      [
        "Foreclosure deeds are taxed on a computed value",
        "Philadelphia taxes foreclosure transfers on a computed value, the assessed value times the common level ratio factor (1.06 for the city from July 1, 2026), not on the price you bid. On a deep-discount buy, budget the tax on that figure.",
      ],
      [
        "Real estate tax while you hold",
        "Philadelphia’s city and school levies total 1.3998% of the Office of Property Assessment’s value, the rate the Revenue Department lists for 2025. The year’s bill is due March 31, and unpaid tax adds 1.5% a month from April 1. Six months on a house valued at $150,000 is about $1,050.",
      ],
      [
        "No vacant-property license during the rehab",
        "Philadelphia requires a $202-a-year Vacant Residential Property License for an unoccupied house but exempts a property that’s being renovated. Keep your permits open and the work visible so the house is plainly under renovation.",
      ],
      [
        "Insure the house as a job site",
        "NAIC’s July 2026 report shows Pennsylvania’s 2023 average HO-3 premium at $1,217, a number for homes with owners living in them. An empty house mid-rehab is written as a vacant dwelling or under builder’s risk, and we couldn’t find a regulator’s average for either. The worked example budgets $1,000 for the six-month hold.",
      ],
      [
        "Contractors: a state registration or a city license",
        "In Philadelphia, a business that works only on existing one- or two-family homes can pull permits with its Pennsylvania Home Improvement Contractor registration instead of the city’s $126 Contractor License. Electrical, plumbing and fire-suppression work still need their own trade licenses.",
      ],
    ],
  },
  metros: {
    heading: "Philadelphia’s low-to-middle spread is $160,000; Scranton’s cheapest homes rose 7.2% in a year.",
    intro:
      "Read the spread as the room a flip has to work with: buy among a market’s cheapest third of homes, sell at its middle, and the difference pays for the rehab, the carry, two rounds of transfer tax and your profit. Where the bottom tier is climbing fastest, as in Scranton, Erie and Reading, the discount you can buy at is shrinking. Your appraiser’s comps, not this table, set the ARV.",
    columns: ["Metro", "Lower-third value", "Typical value", "Spread", "Lower third, 12-mo change"],
    rows: [
      ["Philadelphia", "$226,000", "$386,000", "$160,000", "+1.8%"],
      ["Allentown", "$254,000", "$363,000", "$109,000", "+3.6%"],
      ["Pittsburgh", "$120,000", "$228,000", "$108,000", "−0.9%"],
      ["Harrisburg", "$203,000", "$307,000", "$104,000", "+3.5%"],
      ["Lancaster", "$283,000", "$386,000", "$103,000", "+4.6%"],
      ["Reading", "$213,000", "$311,000", "$98,000", "+4.7%"],
      ["Erie", "$134,000", "$222,000", "$88,000", "+5.5%"],
      ["Scranton", "$164,000", "$234,000", "$70,000", "+7.2%"],
    ],
    note:
      "Values are Zillow’s home value index for all homes, houses and condos combined, smoothed and seasonally adjusted: the bottom tier (0–33rd percentile) is the lower-third value and the middle tier (33rd–67th) the typical value. Readings are metro-level for September 2026, with the change measured from September 2025, and were pulled October 30, 2026; spread uses the rounded figures shown. Zillow’s Philadelphia metro includes South Jersey and northern Delaware, where the city’s transfer tax doesn’t apply.",
  },
  example: {
    title: "WORKED EXAMPLE · PHILADELPHIA ROWHOUSE FLIP, 6-MONTH HOLD",
    rows: [
      ["After-repair value (ARV)", "$300,000"],
      ["Purchase / rehab budget", "$150,000 / $55,000"],
      ["Loan: 90% of purchase + 100% of rehab", "$135,000 + $55,000 = $190,000"],
      ["Limit at 75% of ARV", "$225,000, so all $190,000 funds"],
      ["Interest at an assumed 10%, 6 months", "$8,125"],
      ["1.5 points (assumed)", "$2,850"],
      ["Purchase closing costs (assumed)", "$3,000"],
      ["Your half of the purchase transfer tax (4.578% ÷ 2)", "$3,434"],
      ["Real estate tax, 6 months at 1.3998%", "$1,050"],
      ["Vacant-property insurance (assumed)", "$1,000"],
      ["Your half of the resale transfer tax (4.578% ÷ 2)", "$6,867"],
      ["Selling costs (assumed 6% of ARV)", "$18,000"],
      ["Costs beyond price and rehab", "$44,326"],
      ["Your cash in until the sale", "$34,459"],
    ],
    result: { label: "Profit before income tax", value: "$50,674" },
    note:
      "$300,000 − $150,000 − $55,000 − $44,326 = $50,674. Interest runs on $135,000 for six months and on the $55,000 of draws for three months on average, at the 2025 HMDA median of 10%. Cash in = $15,000 down + $2,850 points + $3,000 closing + $3,434 transfer tax + $8,125 interest + $1,050 tax + $1,000 insurance. If both agreements of sale put the entire transfer tax on you, add $10,300 and the profit falls to $40,374. The price passes the 70% rule (70% of $300,000 − $55,000 = $155,000), and the ARV is below the Philadelphia metro’s $386,000 typical value. Real estate tax assumes the city’s assessment equals the price. A model to check your own numbers against, not a rate quote.",
  },
  rules: {
    heading: "Pennsylvania rules that decide how you buy, fix and resell.",
    items: [
      {
        title: "Foreclosures: a court judgment, then the sheriff",
        text: "A lender on a residential mortgage must give the borrower 30 days’ written warning by certified or registered mail before it can sue, and a house reaches the sheriff’s sale only after the court enters judgment. In the first half of 2026 Pennsylvania logged filings on 8,399 properties, up 19.63% on a year earlier, and 1,893 completed bank repossessions, which put the state in ATTOM’s top five for REOs. If you buy at a Philadelphia sheriff’s sale and plan to rent, L&I won’t accept the sale receipt as proof of ownership, so wait for the recorded deed.",
      },
      {
        title: "Resale inspections come with a 12-month fix-it window",
        text: "Where a municipality requires a resale use-and-occupancy inspection, state law gives a buyer a way through the violations it finds. If none makes the house unfit, the buyer gets a temporary use and occupancy certificate and can move in while repairing; if one does, a temporary access certificate lets the buyer in to fix it, though no new occupant can live there yet. Either way the buyer has 12 months from purchase to correct the violations or demolish, and the municipality can’t shorten that. Get the report before you price the rehab.",
      },
      {
        title: "Your resale needs the seller disclosure",
        text: "Pennsylvania’s Real Estate Seller Disclosure Law covers residential transfers generally. Its exceptions include fiduciaries settling estates and qualifying new construction, and none excuses an investor who never lived in the house. Disclose what you know, including what the rehab uncovered. Pre-1978 houses add the federal lead-based paint disclosure and pamphlet.",
      },
      {
        title: "Mechanics’ liens: six months to file, and residential waivers hold",
        text: "A contractor or subcontractor has six months after finishing its work to file a lien claim and one month after filing to serve you notice. On residential property, though, contractors and subcontractors can waive their lien rights in a signed writing, so put a waiver clause in every rehab contract and collect releases with each draw before you list.",
      },
      {
        title: "The home improvement law stops protecting you at three houses",
        text: "The Home Improvement Consumer Protection Act counts you as an owner even if you don’t live in the house, but once you own three or more private residences in Pennsylvania, you’re no longer an owner under the act for those, apart from your own home and any recreational one. From then on, your contract is your protection: scope, draw schedule, change orders and lien waivers in writing. Contractors doing $5,000 or more of home improvement work a year must register with the state.",
      },
      {
        title: "Philadelphia’s wholesaler license isn’t for rehabbers",
        text: "Philadelphia requires a $200 Residential Property Wholesaler License for businesses that buy houses solely to resell them or that get owners to sell so someone else can buy and resell, but it expressly exempts an investor who buys and makes improvements to raise the resale value, and a buyer who intends to rent. If you switch exits and rent the house, you’ll need a Rental License, a Commercial Activity License and a BIRT account instead.",
      },
      {
        title: "Lending law: a flip loan is business credit",
        text: "Pennsylvania’s interest-rate ceiling for residential mortgages carves out business loans of any principal amount, and its Mortgage Licensing Act is built around loans for personal, family or household use. A flip loan falls on the business side of both lines, and ours come from our licensed lending partner. General information only, not legal advice.",
      },
      {
        title: "Put title in the LLC on day one",
        text: "Nothing on Pennsylvania’s list of excluded transfers generally covers a deed from an individual into an LLC he or she owns, so moving a flip into an entity after closing can mean paying the tax again on top of the two deeds you already budgeted. If you’ll use an LLC, it should sign the agreement of sale and take the deed. Ask a CPA or attorney whether an LLC fits you; a lender can’t answer that.",
      },
      {
        title: "For investment property only",
        text: "Flip loans fund houses you’ll sell or lease to others. Planning to live in it yourself, or to house a relative? Talk to a residential mortgage lender instead.",
      },
    ],
  },
  faqs: [
    {
      q: "How much transfer tax will I pay on a Philadelphia flip?",
      a: "Philadelphia’s combined rate is 4.578% of each deed: 3.578% to the city and 1% to the state. Buy at $150,000 and resell at $300,000, and the two deeds owe $6,867 and $13,734, or $20,601 together. Buyers and sellers usually share it, so your half would be about $10,301, but the agreements of sale decide, and the city can collect it all from either party.",
    },
    {
      q: "Who pays realty transfer tax in Pennsylvania, the buyer or the seller?",
      a: "Legally, both. The Department of Revenue holds grantor and grantee jointly and severally liable for the state’s 1% and the local share, so the agreement of sale sets the split. In Philadelphia the Revenue Department says it’s usually shared. On a flip you’re the buyer once and the seller once, so negotiate both contracts with the tax in mind.",
    },
    {
      q: "How much can I borrow for a Pennsylvania flip?",
      a: "In October 2026, lenders’ programs funded 85% to 100% of the price, the top end for repeat flippers, and as much as the entire renovation. The combined loan then has to fit within 70–80% of ARV, or 60% at some entry tiers. On a $300,000 ARV at 75%, the ceiling is $225,000, so 90% of a $150,000 price plus a $55,000 rehab, $190,000, fits. Transfer tax and closing costs come from your cash.",
    },
    {
      q: "Do I need a wholesaler license to flip a house in Philadelphia?",
      a: "Not if you renovate. The city’s $200 Residential Property Wholesaler License applies to businesses that buy homes solely for resale or that solicit owners so someone else can buy and resell, and it specifically excludes investors who make improvements to increase resale value and buyers who plan to rent. A Commercial Activity License and BIRT account come into play if you rent the house instead.",
    },
    {
      q: "What is a temporary use and occupancy certificate in Pennsylvania?",
      a: "It’s the certificate a municipality issues after a resale inspection finds code violations, none of them serious enough to make the house unfit to live in: the buyer can use or live in the house while fixing them. With a serious violation, the buyer gets a temporary access certificate to make repairs instead. Either way the buyer has 12 months from the purchase to bring the house into compliance.",
    },
    {
      q: "What’s the deadline for a mechanics’ lien on a Pennsylvania flip?",
      a: "Six months after finishing its work, and then it must serve you notice of the filing within one month. On residential property, contractors and subcontractors can give up those rights in a signed waiver, so write a waiver into each contract and collect releases as you pay draws. Keep them in the file your buyer’s title company will ask for.",
    },
  ],
  sources: [
    { label: "Pa. Department of Revenue — Realty Transfer Tax", url: "https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" },
    { label: "City of Philadelphia — Realty Transfer Tax (4.578% combined; computed value for foreclosures)", url: "https://www.phila.gov/services/payments-assistance-taxes/taxes/property-and-real-estate-taxes/realty-transfer-tax/" },
    { label: "City of Philadelphia — Rate increase to 3.578% city transfer tax and FY26 tax changes (June 18, 2025)", url: "https://www.phila.gov/2025-06-18-philly-extends-deadline-for-relief-program-announces-tax-cuts/" },
    { label: "EY Tax News — Realty transfer tax updates in Pennsylvania and the City of Philadelphia (Aug 4, 2025)", url: "https://taxnews.ey.com/news/2025-1650-realty-transfer-tax-and-recordation-fee-updates-in-new-jersey-pennsylvania-the-city-of-philadelphia-and-rhode-island" },
    { label: "Allegheny County — Realty transfer tax municipality rates (Pittsburgh 5%)", url: "https://alleghenycounty.us/real-estate/realty-transfer-tax-municipality-rates.aspx" },
    { label: "Pa. Department of Revenue — Common level ratio real estate valuation factors, July 1, 2026 to June 30, 2027 (posted by Wyoming County)", url: "https://wyomingcountypa.gov/wp-content/uploads/Common-Level-Ratio-CLR-Real-Estate-Valuation-Factors-2026-2027-.pdf" },
    { label: "61 Pa. Code § 91.193 — Realty transfer tax excluded transactions", url: "https://www.law.cornell.edu/regulations/pennsylvania/61-Pa-Code-SS-91-193" },
    { label: "City of Philadelphia — Real Estate Tax", url: "https://www.phila.gov/services/payments-assistance-taxes/taxes/property-and-real-estate-taxes/real-estate-tax/" },
    { label: "City of Philadelphia — Get a Vacant Residential Property License", url: "https://www.phila.gov/services/permits-violations-licenses/get-a-license/business-licenses/rental-and-property/get-a-vacant-residential-property-license/" },
    { label: "City of Philadelphia — Get a Residential Property Wholesaler License", url: "https://www.phila.gov/services/permits-violations-licenses/get-a-license/business-licenses/rental-and-property/get-a-residential-property-wholesaler-license/" },
    { label: "City of Philadelphia — Get a Rental License", url: "https://www.phila.gov/services/permits-violations-licenses/get-a-license/business-licenses/rental-and-property/get-a-rental-license/" },
    { label: "City of Philadelphia — Get a Contractor License", url: "https://www.phila.gov/services/permits-violations-licenses/get-a-license/trade-licenses/get-a-contractor-license/" },
    { label: "City of Philadelphia — Submit as a PA Home Improvement Contractor to get construction permits", url: "https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/submit-as-a-pa-home-improvement-contractor-to-get-construction-permits/" },
    { label: "NAIC — Dwelling Fire, Homeowners Owner-Occupied, and Homeowners Tenant and Condominium/Cooperative Unit Owner's Insurance Report: Data for 2023 (July 2026)", url: "https://content.naic.org/sites/default/files/publication-hmr-zu-homeowners-report.pdf" },
    { label: "41 P.S. § 403 — Notice of intention to foreclose", url: "https://codes.findlaw.com/pa/title-41-ps-interest/pa-st-sect-41-403.html" },
    { label: "ATTOM — U.S. foreclosure activity, first half of 2026 (released July 16, 2026)", url: "https://www.attomdata.com/news/market-trends/foreclosures/2026-mid-year-foreclosure-market-report/" },
    { label: "68 P.S. § 1082 — Municipal Code and Ordinance Compliance Act definitions", url: "https://codes.findlaw.com/pa/title-68-ps-real-and-personal-property/pa-st-sect-68-1082.html" },
    { label: "68 P.S. § 1083 — Twelve months to correct violations after a resale inspection", url: "https://codes.findlaw.com/pa/title-68-ps-real-and-personal-property/pa-st-sect-68-1083.html" },
    { label: "68 Pa.C.S. § 7302 — Real Estate Seller Disclosure Law, applicability", url: "https://codes.findlaw.com/pa/title-68-pacsa-real-and-personal-property/pa-csa-sect-68-7302.html" },
    { label: "US EPA — Real estate disclosures about lead-based paint", url: "https://www.epa.gov/lead/real-estate-disclosure" },
    { label: "49 P.S. § 1502 — Filing and notice of a mechanics' lien claim", url: "https://codes.findlaw.com/pa/title-49-ps-mechanics-liens/pa-st-sect-49-1502.html" },
    { label: "49 P.S. § 1401 — Waiver of lien rights", url: "https://codes.findlaw.com/pa/title-49-ps-mechanics-liens/pa-st-sect-49-1401.html" },
    { label: "73 P.S. § 517.2 — Home Improvement Consumer Protection Act definitions", url: "https://codes.findlaw.com/pa/title-73-ps-trade-and-commerce/pa-st-sect-73-517-2.html" },
    { label: "73 P.S. § 517.3 — Home improvement contractor registration", url: "https://codes.findlaw.com/pa/title-73-ps-trade-and-commerce/pa-st-sect-73-517-3.html" },
    { label: "41 P.S. § 301 — Maximum lawful interest rate; business-loan exception", url: "https://codes.findlaw.com/pa/title-41-ps-interest/pa-st-sect-41-301.html" },
    { label: "7 Pa.C.S. § 6102 — Mortgage Licensing Act definitions", url: "https://codes.findlaw.com/pa/title-7-pacsa-banks-and-banking/pa-csa-sect-7-6102.html" },
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
    { label: "Crowdfunded Wealth — 2025 HMDA rate medians for short-term investor loans (corrected Oct 26, 2026)", url: "https://crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
  updated: "2026-10-30",
};

export default fixAndFlipPennsylvania;
