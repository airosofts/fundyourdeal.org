import type { StateContent } from "../types";

const dscrGeorgia: StateContent = {
  program: "dscr",
  slug: "georgia",
  state: "Georgia",
  abbr: "GA",
  metaTitle: "Georgia DSCR Loans: Millage, Tenant Rules & Metro Yields",
  metaDescription:
    "Georgia DSCR loans after a flip or BRRRR: October 2026 lender terms, rent yields in 8 metros, the 30-year intangible tax and a worked Savannah rental.",
  h1: "Georgia DSCR loans: refinance out of the rehab loan once the rent covers the whole payment.",
  intro:
    "Georgia DSCR loans are the long-term exit for a finished flip or BRRRR house: a 30-year loan you qualify for on the house's rent instead of your tax returns. DSCR is short for debt service coverage ratio, the market rent divided by the total monthly bill on the loan, counting principal, interest, property tax, insurance and any HOA dues. Published floors in October 2026 sat between 0.75 and 1.05. In Georgia two local lines decide whether you clear yours: about 40.5 mills of property tax inside Savannah, and an intangible recording tax that a 30-year note owes and a rehab loan doesn't.",
  facts: [
    { label: "Purchase LTV, published Oct 2026", value: "Up to 80%; 85% at 720–740+ FICO" },
    { label: "Savannah millage, 2025", value: "40.538 mills, about 1.62% of value" },
    { label: "Intangible tax on a 30-year note", value: "$1.50 per $500, capped at $25,000" },
    { label: "Security deposit cap", value: "Two months' rent" },
  ],
  costs: {
    heading: "Millage, a recording tax and the insurance quote: the Georgia lines inside your payment.",
    intro:
      "Rate and leverage come from the lender. Georgia, its counties and its cities set the rest of PITIA (principal, interest, tax, insurance and association dues) and the cost of recording the loan. Here is how each line is built, checked October 26, 2026.",
    rows: [
      [
        "Tax is 40% of value times the millage",
        "Georgia taxes a house on an assessed value of 40% of what it's worth, and the county, the school system and the city each levy mills on that figure. A mill is $1 per $1,000 of assessed value, so every 10 mills costs 0.4% of the home's value a year. Monthly tax = value × 0.40 × mills ÷ 1,000 ÷ 12.",
      ],
      [
        "Savannah: 40.538 mills, about 1.62% of value",
        "Chatham County's tax commissioner lists 2025 rates for a parcel inside the City of Savannah of 10.518 mills county, 17.331 school, 0.940 transit and 11.749 city. The transit levy covers Chatham Area Transit's taxing district, which includes Savannah. On a $341,000 house assessed at its price, that's $5,529 a year, or $461 a month.",
      ],
      [
        "Flat rates for 2026 still raise bills",
        "Chatham advertised the same 10.518 county and 0.940 transit mills for 2026, the school board tentatively adopted 17.331 again, and Savannah's 2026 ordinance keeps 11.749. Georgia treats any rate above the rollback, the rate that would raise last year's revenue on the reassessed digest, as a tax increase: the county's 2026 rollback was 10.188 mills.",
      ],
      [
        "The seller's bill isn't yours",
        "Chatham's 2026 bills, with the second installment due November 16, apply the state's Homeowner Tax Relief Grant, up to $18,000 off assessed value, to homesteaded property only. At 40.538 mills that's worth up to about $730 a year to an owner who lives in the house and nothing to a rental, so underwrite the tax on your own price.",
      ],
      [
        "Intangible recording tax: the 30-year note owes it",
        "Georgia charges $1.50 per $500 of a long-term note, or fraction of $500, up to $25,000. Since July 1, 2025, long-term means some principal falls due more than 62 months after the note's date, so a 6- to 24-month rehab loan escapes it and a 30-year DSCR loan doesn't: 512 × $1.50 = $768 on $255,750. It's collected from the lender, who may pass it on to you.",
      ],
      [
        "Transfer tax on the purchase deed",
        "The clerk collects $1 on the first $1,000 of price plus 10¢ per further $100 before recording a deed to a buyer: $341 on a $341,000 purchase. A refinance conveys nothing to a purchaser, so it owes none.",
      ],
      [
        "Insurance: quote the address",
        "We found no regulator figure for Georgia landlord policies. The NAIC's July 2026 report puts Georgia's 2023 average HO-3 homeowners premium at $1,828, but its dwelling-fire data cover owner-occupied homes only. The worked example assumes $2,000 a year; at $1,828 the ratio would be 0.92.",
      ],
      [
        "The FAIR-plan fallback",
        "The Georgia Underwriting Association is the state's residual market for basic property and liability cover. Its DP-1 dwelling fire form is named-peril (fire, wind, hail, smoke and vandalism among others), with liability and water damage only as add-ons, and it also writes wind-and-hail-only policies. Check any such policy against your loan's insurance terms.",
      ],
      [
        "Taxes on short stays",
        "Airbnb's Georgia page lists 4% state and 2–5% local sales tax on stays of 89 nights or fewer, the $5-a-night state hotel-motel fee on the first 30 nights, and local occupancy taxes of typically 0–8%. Guests pay them on top of the rate, so keep them out of the income you underwrite.",
      ],
    ],
  },
  metros: {
    heading: "Columbus, Macon and Valdosta gross more than 8% of value in rent a year; Athens and Atlanta, about 7%.",
    intro:
      "Every row uses one provider's single-family rent and value indexes, so a yield in Macon lines up against one in Athens. Gross yield is 12 months of rent as a share of value, with no costs taken out, and rent change is the move in asking rents over the year to September 2026.",
    columns: ["Metro", "Single-family rent", "Rent, 12-month change", "Single-family value", "Gross yield"],
    rows: [
      ["Athens", "$2,144", "+2.2%", "$378,000", "6.8%"],
      ["Atlanta", "$2,275", "+2.6%", "$383,000", "7.1%"],
      ["Savannah", "$2,190", "+1.7%", "$341,000", "7.7%"],
      ["Augusta", "$1,644", "+2.2%", "$251,000", "7.9%"],
      ["Warner Robins", "$1,672", "+3.4%", "$255,000", "7.9%"],
      ["Valdosta", "$1,526", "+6.8%", "$225,000", "8.1%"],
      ["Macon", "$1,348", "+2.4%", "$197,000", "8.2%"],
      ["Columbus", "$1,486", "+5.1%", "$210,000", "8.5%"],
    ],
    note:
      "Data: Zillow ZORI single-family rent (smoothed) and ZHVI single-family value, middle tier, 33rd–67th percentile (smoothed, seasonally adjusted); metro level, September 2026 against September 2025, downloaded October 26, 2026. Yield = 12 × rent ÷ value, before rounding. ZORI measures asking rents on homes for rent and ZHVI the value of all homes, so treat the yield as a shortlist. Values fell over the year in Atlanta (−1.5%) and Savannah (−2.7%); check recent sales before you count on a refinance appraisal there.",
  },
  example: {
    title: "WORKED EXAMPLE · SAVANNAH SINGLE-FAMILY HOLD AT 75% LTV",
    rows: [
      ["Price (Savannah metro typical value)", "$341,000"],
      ["Loan: 75% LTV, 30-year fixed at 7.375%", "$255,750"],
      ["Market rent (metro single-family)", "$2,190"],
      ["Principal and interest", "$1,766"],
      ["Property tax: 40.538 mills on 40% of price ÷ 12", "$461"],
      ["Insurance (assumption: $2,000 a year)", "$167"],
      ["HOA dues", "$0"],
      ["PITIA", "$2,394"],
    ],
    result: { label: "DSCR", value: "0.91" },
    note:
      "$2,190 ÷ $2,394 = 0.91. The $341,000 and $2,190 are Zillow's September 2026 single-family readings for metro Savannah, 7.375% was the median 2025 HMDA rate on 30-year investor loans, and the tax assumes Chatham assesses the house at its price. At 0.91 only programs with 0.75–0.80 floors, or no ratio test, fit. Reaching 1.00 takes a loan of about $226,200 (66% LTV) or $2,394 of rent. Closing adds $768 of intangible tax and $341 of transfer tax. Refinance a finished BRRRR at a $341,000 appraisal and the monthly math is the same, minus the transfer tax. Illustrative only, not a rate quote.",
    dscr: 0.91,
  },
  rules: {
    heading: "Georgia rules to settle before you refinance, lease up or list nightly.",
    items: [
      {
        title: "Refinancing out of the rehab loan: seasoning sets your cash-out",
        text: "Published DSCR cash-out limits in October 2026 ran from 70% to 80% of value, most at 75%, and 90 days of ownership is the usual wait. Kiavi allows cash-out after 90 days; Roc caps a refinance at 80% of your total cost basis if you've owned the house under three months. Lenders that refinance their own rehab loans may skip the wait. Book the DSCR loan well before the rehab loan matures.",
      },
      {
        title: "Security deposits: two months' rent, back within 30 days",
        text: "For leases signed or renewed since July 1, 2024, the Safe at Home Act caps a deposit at two months' rent, $4,380 on a $2,190 rent. Within 30 days of getting the unit back, return it or mail the tenant a written statement of what you kept and why. Ordinary wear and tear isn't deductible, and wrongful withholding can cost three times the amount plus attorney's fees.",
      },
      {
        title: "Ten or fewer self-managed units: lighter deposit paperwork",
        text: "If you, your spouse and your minor children own ten or fewer rental units, the escrow account, signed damage lists and triple-damages rules (Code sections 44-7-31 to 44-7-33 and 44-7-35) don't apply, unless a paid third party manages the unit or collects its rent. The two-month cap and the 30-day return apply either way.",
      },
      {
        title: "Nonpayment: a three-business-day notice before you file",
        text: "On leases signed or renewed since July 1, 2024, first give a written notice to pay everything owed or vacate within three business days, posted in a sealed envelope on the door and sent any other way the lease names. Full payment in that window bars the filing. Then the sheriff or a constable serves the dispossessory, and the tenant has seven days from service to answer.",
      },
      {
        title: "Habitability, with cooling now a required utility",
        text: "Every Georgia residential lease now carries a warranty, which neither side can waive, that the home is fit for human habitation. Cooling joined heat, light and water as a utility you can't knowingly cut off before a dispossessory case ends, with a fine of up to $500. File, terminate or raise the rent within three months of a good-faith repair complaint and a court can award one month's rent plus $500. Put working air conditioning in the rehab scope.",
      },
      {
        title: "No rent control in any Georgia city or county",
        text: "State law bars counties and cities from enacting or enforcing any ordinance that regulates rent on private residential property, single-family or multi-unit. The only exceptions are property a local government owns and rents it sets by agreement with a private owner.",
      },
      {
        title: "Atlanta: a license, and no two-unit limit from 2027",
        text: "Atlanta short-term rental hosts need a city license. In September 2026 the council voted 9–5 to delete the 2021 rule limiting licenses to a host's primary residence plus one other unit, effective January 1, 2027, when enforcement is expected to start. A separate bill for an Office of Short-Term Rentals was still in committee. Read the final ordinance before you underwrite nightly income.",
      },
      {
        title: "Savannah: the historic wards are full",
        text: "A whole home rented for 30 consecutive days or fewer needs a city certificate. In the Downtown and Victorian historic districts, new non-owner-occupied certificates are capped at 20% of residential parcels per ward, and the city lists nearly every ward there at the cap, with a waitlist. Don't underwrite nightly income on an investor-owned house there unless its ward has room.",
      },
      {
        title: "Business purpose only",
        text: "A DSCR loan finances rental property for a business purpose. If the house will be your home or a relative's, it needs a residential mortgage instead.",
      },
    ],
  },
  faqs: [
    {
      q: "What DSCR do Georgia rental lenders want to see?",
      a: "In October 2026 the stricter lenders published floors of 1.00 or 1.05, several others went down to 0.75 or 0.80, and Griffin would skip the ratio test entirely for borrowers with 700+ scores, at no more than 75% LTV. A Savannah house at the metro's typical price and rent scores about 0.91 at 75% LTV, so only the looser programs fit.",
    },
    {
      q: "How much property tax will a Savannah rental cost?",
      a: "Multiply 40% of the value by 40.538 mills, the 2025 total of the Chatham County, school, transit and City of Savannah rates. That's about 1.62% of value a year: $5,529, or $461 a month, on a $341,000 house. A seller's bill can be lower if it carries a homestead grant, which a rental doesn't get.",
    },
    {
      q: "Does a Georgia DSCR loan owe intangible recording tax?",
      a: "Yes. Since July 1, 2025 the tax applies to notes with any principal due more than 62 months after their date, and a 30-year DSCR note qualifies. The rate is $1.50 for each $500 or part of $500, capped at $25,000: $768 on a $255,750 loan. The short rehab loan you're paying off didn't owe it. It's collected from the lender, who can pass it to you.",
    },
    {
      q: "Can I refinance my Georgia flip or BRRRR into a DSCR loan?",
      a: "Yes, once the house is rented or ready to rent. Cash-out refinances typically top out at 75% of the appraised value, and 90 days of ownership is the usual wait, though lenders refinancing their own rehab loans may waive it. Size the new loan so the rent covers the full payment, and budget Georgia's intangible tax on the new 30-year note.",
    },
    {
      q: "How much security deposit can a Georgia landlord charge?",
      a: "No more than two months' rent on leases signed or renewed since July 1, 2024. You have 30 days after getting the unit back to return it, or to send a written statement of what you kept and why along with any balance. Wear and tear can't be deducted. Keep money you aren't owed and a court can award three times that amount plus attorney's fees, unless you self-manage ten or fewer units.",
    },
    {
      q: "How does a Georgia eviction for unpaid rent start?",
      a: "With a written notice giving the tenant three business days to pay all amounts owed or move out, posted on the door in a sealed envelope and delivered any other way the lease names. If the tenant pays in full, you can't file. Otherwise you file a dispossessory affidavit with the court; once it's served, the tenant has seven days to answer. Keep cash reserves for the gap.",
    },
    {
      q: "Will a DSCR lender fund an Atlanta short-term rental?",
      a: "It can, if you hold a city short-term rental license. From January 1, 2027 Atlanta drops its limit of a primary residence plus one other unit, after a 9–5 council vote in September 2026. Short-term rental lenders usually size a purchase on projected income, such as AirDNA data, and a refinance on 12 months of actual bookings.",
    },
    {
      q: "Can I run an Airbnb in Savannah's historic district?",
      a: "As an investor, probably not. Savannah caps new non-owner-occupied short-term rental certificates at 20% of residential parcels in each ward of the Downtown and Victorian historic districts, and nearly every ward there is at the cap, with a waitlist. Outside the overlay district, B-C, B-N, B-L and A-1 zoning allow them. Confirm the ward and zoning before you price nightly income.",
    },
    {
      q: "Which Georgia metros have the highest rent-to-value ratio?",
      a: "Of the eight metros on this page, Columbus led with an 8.5% gross yield in September 2026, followed by Macon at 8.2% and Valdosta at 8.1%. Athens (6.8%) and Atlanta (7.1%) ran lowest. Higher yields come with lower prices, and DSCR loan minimums published in October 2026 started at $70,000 to $100,000, so check the floor before you offer on a cheap house.",
    },
    {
      q: "Can I close a Georgia DSCR loan in an LLC?",
      a: "Yes, and some lenders insist on it: Lima One, Roc and Civic require an entity borrower, and every program in our October 2026 review accepts an LLC. Griffin, for one, also asks you to guarantee the loan personally. Whether an LLC fits your tax and liability position is for a CPA or attorney to judge; a lender can't advise you on that.",
    },
  ],
  sources: [
    { label: "Chatham County Tax Commissioner — Millage rates, 2019–2025", url: "https://cdn.chathamcountyga.gov/Files/TaxCom/Chatham_County_Millage_Rates.pdf" },
    { label: "Chatham County — 2026 notice of property tax increase (county, special service district and transit rates)", url: "https://cms.chathamcountyga.gov/api/assets/main-website/dd72895c-745d-4bab-8b26-194554cf1122/ad-03-july-8-2026-2-hearings-to-raise-millage.pdf?version=0" },
    { label: "Savannah-Chatham County Public School System — 2026 notice of property tax increase", url: "https://haven.sccpss.com/news/news-landing-page/~board/district-news/post/notice-of-property-tax-increase" },
    { label: "City of Savannah — 2026 millage rate ordinance (11.749 mills)", url: "https://agenda.savannahga.gov/content/files/2026-millage-rate-setting-ordinance-amendment-whereas_1.pdf" },
    { label: "City of Savannah — 2025 millage rate recommendation (digest growth, rollback rate)", url: "https://agenda.savannahga.gov/content/files/2025-millage-rate-recommendation-letter.pdf" },
    { label: "Chatham Area Transit — State of the System report (Special Service District transit tax)", url: "https://www.catchacat.org/wp-content/uploads/CAT-State-of-the-System-Report-Final.pdf" },
    { label: "WTOC — Second installment of Chatham County property tax bills mailed out (Sept 16, 2026)", url: "https://www.wtoc.com/2026/09/16/second-installment-chatham-county-property-tax-bills-mailed-out/" },
    { label: "O.C.G.A. § 48-5-7 — Assessment at 40% of fair market value", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-5-7/" },
    { label: "O.C.G.A. § 48-6-61 — Intangible recording tax rate and maximum", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-6-61.html" },
    { label: "Chatham County Superior Court Clerk — HB 586 notice (long-term note: more than 62 months, effective July 1, 2025)", url: "https://cdn.chathamcountyga.gov/Files/Courts/SCC/HB586-JULY2025.pdf" },
    { label: "Muscogee County Superior Court Clerk — Real estate recording (HB 586)", url: "https://muscogeecourts.columbusga.gov/Real-Estate-Recording-and-Records" },
    { label: "O.C.G.A. § 48-6-1 — Real estate transfer tax rate", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-6-1.html" },
    { label: "O.C.G.A. § 48-6-4 — Transfer tax paid to the clerk before recording", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-6-4/" },
    { label: "NAIC — Dwelling Fire, Homeowners Owner-Occupied, and Homeowners Tenant and Condominium/Cooperative Unit Owner's Insurance Report: Data for 2023 (July 2026)", url: "https://content.naic.org/sites/default/files/publication-hmr-zu-homeowners-report.pdf" },
    { label: "Georgia Underwriting Association — Mission", url: "https://www.georgiaunderwriting.com/" },
    { label: "Georgia Underwriting Association — Comparison of coverages", url: "https://georgiaunderwriting.com/wp-content/uploads/2018/02/comparison2.pdf" },
    { label: "Airbnb — Occupancy tax collection and remittance in Georgia", url: "https://www.airbnb.com/help/article/2745" },
    { label: "O.C.G.A. § 48-13-50.3 — $5 per night hotel-motel fee", url: "https://codes.findlaw.com/ga/title-48-revenue-and-taxation/ga-code-sect-48-13-50-3/" },
    { label: "Georgia Appleseed — Safe at Home Act bench card for magistrate judges (HB 404, effective July 1, 2024)", url: "https://gaappleseed.org/wp-content/uploads/SafeAtHome_BenchCard.pdf" },
    { label: "O.C.G.A. § 44-7-34 — Return of security deposits", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-7-34/" },
    { label: "O.C.G.A. § 44-7-35 — Remedies for wrongful withholding", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-7-35/" },
    { label: "O.C.G.A. § 44-7-36 — Exemption for owners of ten or fewer units", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-7-36/" },
    { label: "O.C.G.A. § 44-7-33 — Move-in and move-out damage lists", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-7-33/" },
    { label: "O.C.G.A. § 44-7-31 — Security deposit escrow account", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-7-31/" },
    { label: "O.C.G.A. § 44-7-51 — Dispossessory summons, service and seven-day answer", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-7-51/" },
    { label: "O.C.G.A. § 44-7-19 — Local rent regulation prohibited", url: "https://codes.findlaw.com/ga/title-44-property/ga-code-sect-44-7-19/" },
    { label: "Center for Civic Innovation — Primary-residence limit on short-term rental licenses removed (Sept 27, 2026)", url: "https://civicatlanta.org/blog/2026-09-27-primary-residence-limit-on-short-term-rental-licenses-removed" },
    { label: "STRisker — Short-term rentals daily notes (Sept 28, 2026)", url: "https://writing.strisker.com/short-term-rentals-daily-notes-september-28-2026/" },
    { label: "AvantStay — Savannah short-term rental rules (updated Sept 25, 2026, citing City of Savannah STVR pages)", url: "https://avantstay.com/str-management/savannah/rules" },
    { label: "Zillow Research — ZORI single-family rent, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zori/Metro_zori_uc_sfr_sm_month.csv" },
    { label: "Zillow Research — ZHVI single-family homes, middle tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfr_tier_0.33_0.67_sm_sa_month.csv" },
    { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
    { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
    { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
    { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
    { label: "RCN Capital — Programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
    { label: "Civic — Rental loans", url: "https://www.civicfs.com/rental/" },
    { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
    { label: "Easy Street Capital — Short-term rental financing", url: "https://www.easystreetcap.com/short-term-rental-financing/" },
    { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
    { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
    { label: "Angel Oak — Investor cash flow program", url: "https://angeloakms.com/programs/investor-cash-flow-mortgage-program/" },
    { label: "HMDA 2025 investor-loan rate medians, compiled by Crowdfunded Wealth", url: "https://crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
  updated: "2026-10-26",
};

export default dscrGeorgia;
