import type { StateContent } from "../types";

const dscrOhio: StateContent = {
  program: "dscr",
  slug: "ohio",
  state: "Ohio",
  abbr: "OH",
  metaTitle: "Ohio DSCR Loans: Tax Rates, Rent Yields & a Youngstown Hold",
  metaDescription:
    "Ohio DSCR loans: October 2026 lender terms, main-city tax rates and rent yields in 8 metros, the rental credit phase-out and a worked Youngstown rental.",
  h1: "Ohio DSCR loans: the rent usually clears the bar. The school district’s tax rate decides by how much.",
  intro:
    "Ohio DSCR loans move a finished flip or a bought rental onto a 30-year note that’s sized to the house, not to your W-2. DSCR, or debt service coverage ratio, asks one question: how many times does the monthly market rent cover the whole payment once tax, insurance and any association dues are folded in? Lenders’ published floors in October 2026 ran from 0.75 to 1.05. In Ohio the swing factor is property tax. For tax year 2025, main-city rates ran from about 1.66% of value in Youngstown to 2.52% in Cleveland before credits, and the one credit a rental still gets shrinks every year until it’s gone in 2029.",
  facts: [
    { label: "Most lenders’ purchase LTV cap, Oct 2026", value: "80%, or 85% with 720–740+ FICO" },
    { label: "Youngstown tax before credits, TY2025", value: "1.66% of value a year" },
    { label: "Rental credit on older levies, TY2026", value: "7.5%, falling to 0% by 2029" },
    { label: "State limit on security deposits", value: "None" },
  ],
  costs: {
    heading: "In Ohio, the tax line is where a rental’s ratio is won or lost.",
    intro:
      "The lender sets the rate and the leverage. Ohio’s counties, cities and school districts set most of the rest of PITIA, the principal, interest, tax, insurance and association dues the ratio is measured against. Tax figures are for tax year 2025, collected in 2026, from the Department of Taxation’s March 25, 2026 file. Checked October 30, 2026.",
    rows: [
      [
        "The formula: 35% of value times the effective rate",
        "Ohio taxes a parcel on 35% of its true value. Each taxing district also publishes an effective rate for homes (Class I) that sits well below its total voted millage, and that lower figure is the one to use. Yearly tax = value × 0.35 × effective mills ÷ 1,000, minus credits. A rental’s only remaining credit is the non-business credit, and it applies only to the district’s qualifying levies.",
      ],
      [
        "Youngstown: 47.32 effective mills",
        "In the Youngstown City School District the 2025 effective residential rate was 47.32 mills, against 73.48 mills voted, and 43.66 of those mills qualify for the credit. A $173,000 house valued at its price would owe $2,601 for tax year 2025 after the full 10% credit, or $217 a month.",
      ],
      [
        "The rental credit shrinks every year",
        "House Bill 186, signed December 19, 2025, takes a quarter of the original 10% credit away each year for homes that aren’t owner-occupied, so it’s 7.5% in tax year 2026, then 5%, then 2.5%, and zero from 2029. The Youngstown bill climbs from $2,601 to $2,667, $2,733, $2,799 and finally $2,865, about $22 a month more. Underwrite the 2029 figure, not the seller’s.",
      ],
      [
        "Cincinnati, Cleveland and Akron cost more to hold",
        "Before credits, the 2025 effective rate inside each city’s own school district worked out to about 2.42% of value in Cincinnati, 2.52% in Cleveland and 2.41% in Akron, against 1.74% in Columbus and 1.66% in Youngstown. On a $200,000 rental that difference is worth more than $100 a month of PITIA.",
      ],
      [
        "Recording the mortgage is a per-page fee",
        "County recorders charge $34 for an instrument’s first two pages and $8 for each page after that, half of each amount going to the state housing trust fund, plus a preservation surcharge of up to $5. A 15-page mortgage runs about $138. We found no separate Ohio tax on recording a mortgage.",
      ],
      [
        "The transfer tax lands on the seller",
        "Ohio levies the county real property transfer tax, up to $3 per $1,000, on the grantor named in the deed, and the county auditor collects it alongside the state’s mandatory fee of 10¢ per $100 of value. On a purchase the transfer tax is the seller’s cost, and a refinance moves no deed at all. You meet it again when you sell.",
      ],
      [
        "Insurance: quote the address first",
        "The NAIC’s July 2026 report puts Ohio’s 2023 average HO-3 homeowners premium at $1,116, but HO-3 is owner-occupied cover, and the report’s dwelling-fire data are owner-occupied as well. No public benchmark exists for a landlord policy, so get a quote before you set your offer. The worked example assumes $1,250 a year.",
      ],
    ],
  },
  metros: {
    heading: "Youngstown grosses 8.8% of value in rent a year; Columbus, Akron and Canton about 7%.",
    intro:
      "Both rent and value come from one provider using one method in every metro, which keeps the comparison fair. Gross yield here means a year’s rent divided by the home’s value, before a dollar of expenses. The last column is what the main city’s 2025 effective rate costs as a share of market value before credits, the line that decides how much of the yield survives.",
    columns: ["Metro", "Single-family rent", "Single-family value", "Value, 12-mo change", "Gross yield", "Main-city tax before credits"],
    rows: [
      ["Columbus", "$2,108", "$351,000", "+1.5%", "7.2%", "1.74%"],
      ["Cincinnati", "$2,046", "$317,000", "+2.4%", "7.8%", "2.42%"],
      ["Akron", "$1,457", "$242,000", "+4.2%", "7.2%", "2.41%"],
      ["Canton", "$1,280", "$217,000", "+4.7%", "7.1%", "1.70%"],
      ["Toledo", "$1,348", "$201,000", "+3.4%", "8.0%", "2.17%"],
      ["Cleveland", "$1,742", "$257,000", "+4.0%", "8.1%", "2.52%"],
      ["Springfield", "$1,353", "$200,000", "+3.6%", "8.1%", "1.71%"],
      ["Youngstown", "$1,269", "$173,000", "+4.9%", "8.8%", "1.66%"],
    ],
    note:
      "Rent is Zillow’s smoothed single-family ZORI; value is its single-family ZHVI for the 33rd–67th percentile tier, smoothed and seasonally adjusted. Both are metro readings for September 2026, compared with September 2025, and were downloaded October 30, 2026. Yield = 12 × rent ÷ value, before rounding. ZORI follows asking rents on listed homes and ZHVI the whole housing stock, so use the yield to choose where to look, then price the actual house. Zillow publishes a Dayton rent series but no Dayton value series, so Dayton is left out. Tax: Ohio Department of Taxation, tax year 2025 effective Class I rate × 35%, for the district covering the main city and its city school district.",
  },
  example: {
    title: "WORKED EXAMPLE · YOUNGSTOWN SINGLE-FAMILY RENTAL AT 75% LTV",
    rows: [
      ["Price (Youngstown metro typical single-family value)", "$173,000"],
      ["Loan: 75% LTV, 30-year fixed at 7.375%", "$129,750"],
      ["Market rent (metro single-family)", "$1,269"],
      ["Principal and interest", "$896"],
      ["Property tax, TY2026: 35% of price × 44.04 mills ÷ 12", "$222"],
      ["Insurance (assumption: $1,250 a year)", "$104"],
      ["HOA dues", "$0"],
      ["PITIA", "$1,222"],
    ],
    result: { label: "DSCR", value: "1.04" },
    note:
      "$1,269 ÷ $1,222 = 1.04. The $173,000 and $1,269 are Zillow’s September 2026 single-family readings for the Youngstown metro, and the 7.375% rate is where half of 2025’s 30-year investor loans in HMDA data priced above and half below. The tax uses the Youngstown City School District’s 2025 effective rate less the 7.5% credit allowed for tax year 2026 (47.32 − 0.075 × 43.66 = 44.04 mills), on the assumption that the county auditor’s value matches the purchase price. With the credit gone in 2029, tax is $239 and the ratio 1.02. Run a typical Toledo house the same way ($201,000, $1,348 rent, 62.12 mills in Toledo City Schools) and you get 0.91; reaching 1.00 there takes a loan of about $130,300, or 65% LTV. The transfer tax is the seller’s. For illustration; not a quote or an offer of credit.",
    dscr: 1.04,
  },
  rules: {
    heading: "Ohio rules that change what a rental earns and how fast you can end a bad tenancy.",
    items: [
      {
        title: "Buying at a sheriff sale: the tenant’s lease comes with the house",
        text: "An Ohio foreclosure is a court case, and most end in a sheriff’s auction, where the winning bidder posts a fixed deposit ($5,000 on a house appraised between $10,000 and $200,000) on the schedule the sale ad sets. If a tenant is in place, federal law decides what happens next: under the Protecting Tenants at Foreclosure Act, restored permanently in 2018, the buyer takes the house subject to a bona fide lease until it ends and must give at least 90 days’ notice to vacate. Buy with cash or a short-term loan, then refinance once your deed records.",
      },
      {
        title: "Security deposits: no ceiling, but interest after six months",
        text: "Ohio law sets no maximum deposit. Any part above $50 or one month’s rent, whichever is greater, earns 5% a year, paid annually, once the tenant has stayed six months or more. Within 30 days after the lease ends and you get possession back, return the deposit or send an itemized written list of deductions. Withhold money wrongly and the tenant can recover it, an equal amount in damages and reasonable attorney’s fees.",
      },
      {
        title: "Eviction starts with a three-day notice in the statute’s words",
        text: "Before filing an eviction, serve written notice at least three days ahead by certified mail, by hand, or by leaving it at the tenant’s home or the property. For residential premises it must say, conspicuously, “You are being asked to leave the premises. If you do not leave, an eviction action may be initiated against you,” and advise the tenant to get legal help if unsure of their rights.",
      },
      {
        title: "No rent control in any Ohio city",
        text: "State law bars every political subdivision from enacting or enforcing rent control or rent stabilization on private residential property. Local housing, building, health and safety codes still apply, as do rent rules on property a city owns and voluntary incentive programs such as tax abatements.",
      },
      {
        title: "Columbus and Cincinnati: permits for nightly rentals",
        text: "Columbus requires a short-term rental permit, with separate permits for a host’s primary residence and for other homes, a state BCI background check, and the permit number on every listing. Cincinnati requires registration with the city, renewed every three years, and charges its own excise tax on short stays. Short-term rental lenders typically size a purchase on projected income and a refinance on the last 12 months of bookings.",
      },
      {
        title: "Cheap Ohio houses can fall below DSCR loan minimums",
        text: "Published DSCR minimums in October 2026 started at $70,000 (RCN) and ran up to $100,000 at Easy Street, Griffin and Angel Oak. Zillow’s lower-tier value for the Youngstown metro was about $88,000 in September 2026; lend 75% on that and the loan is $66,000, short of every one. Several houses together may fit a portfolio loan instead; ask about the per-property minimum before you offer.",
      },
      {
        title: "Ohio’s mortgage licensing act is written for consumer loans",
        text: "The Residential Mortgage Lending Act defines a residential mortgage loan as one made primarily for personal, family or household use. A loan on a rental you hold for income is a business-purpose loan, made by our licensed lending partner. You don’t need any license to borrow, and this is not legal advice.",
      },
      {
        title: "Closing in an LLC",
        text: "Every DSCR program in our October 2026 lender review accepts an LLC borrower; Lima One, Roc and Civic insist on one, and Griffin pairs the LLC with a personal guarantee. If you’ll hold several Ohio rentals, ask a CPA or attorney whether one LLC or several fits your liability and tax picture. A lender can’t advise you on that.",
      },
      {
        title: "Investment property only",
        text: "This loan finances a rental held as a business, a house neither you nor your family will live in. For a home you’ll occupy, talk to a residential mortgage lender.",
      },
    ],
  },
  faqs: [
    {
      q: "What DSCR do Ohio rental lenders require?",
      a: "In October 2026 the stricter programs published minimums of 1.00 (Lima One, RCN) or 1.05 (Roc, Civic), while Kiavi went to 0.80 and LendingOne and Defy to 0.75. Easy Street listed no minimum, and Griffin offered a no-ratio option at up to 75% LTV with 700+ scores. A typical Youngstown house scores about 1.04 at 75% LTV and fits most programs; a Toledo house scores about 0.91.",
    },
    {
      q: "How much property tax will an Ohio rental cost?",
      a: "Take 35% of the value, multiply by the district’s effective residential millage, divide by 1,000, then subtract the shrinking non-business credit. In the Youngstown City School District that’s about $2,667 for tax year 2026 on a $173,000 house, or $222 a month. Inside Cincinnati, Cleveland or Akron schools, the rate before credits is roughly 2.4% to 2.5% of value.",
    },
    {
      q: "Is Ohio’s property tax credit for rentals going away?",
      a: "Yes. House Bill 186, signed December 19, 2025, phases out the 10% non-business credit for homes that aren’t owner-occupied. It drops to 7.5% in tax year 2026, falls 2.5 points a year after that and is gone in 2029. It only ever applied to qualifying levies. On a $173,000 Youngstown rental the yearly bill rises about $264 between tax years 2025 and 2029.",
    },
    {
      q: "Can I get a DSCR loan on a cheap Ohio house?",
      a: "Only if the loan clears the lender’s minimum. Published floors in October 2026 ran from $70,000 at RCN through $75,000 at Roc, Civic and Defy and $85,000 at Lima One and LendingOne to $100,000 at Easy Street, Griffin and Angel Oak. At 75% LTV, a house needs to be worth at least about $93,000 to reach the lowest of those.",
    },
    {
      q: "How much security deposit can an Ohio landlord charge?",
      a: "State law sets no cap. If the deposit is more than $50 or one month’s rent, whichever is greater, the excess earns 5% interest a year once the tenant has stayed six months. Once the lease is over and the unit is back in your hands, you have 30 days to refund it or list each deduction in writing, and wrongful withholding can cost you double plus attorney’s fees.",
    },
    {
      q: "Can I run an Airbnb rental in Columbus or Cincinnati?",
      a: "Yes, with the city’s paperwork. Columbus issues short-term rental permits, with a different permit for homes that aren’t the host’s primary residence, and the permit number has to appear on each listing. Cincinnati requires city registration, renewed every three years, plus its short-stay excise tax. Short-term rental lenders typically underwrite a purchase on AirDNA-style projections and a refinance on 12 months of bookings.",
    },
  ],
  sources: [
    { label: "Ohio Department of Taxation — Tax year 2025 aggregate property tax rates by taxing district (March 25, 2026)", url: "https://dam.assets.ohio.gov/raw/upload/tax.ohio.gov/tax_analysis/tax_data_series/abstracts/tdrates25.xlsx" },
    { label: "Ohio Adm. Code 5703-25-05 — Taxable value at 35% of true value", url: "https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-5703-25-05" },
    { label: "ORC 319.302 — Non-business credit and its phase-down for residential property", url: "https://codes.findlaw.com/oh/title-iii-counties/oh-rev-code-sect-319-302/" },
    { label: "Vorys — HB 186 phases out the nonbusiness credit for non-owner-occupied residential property (Dec 23, 2025)", url: "https://www.vorys.com/publication-credit-benefitting-ohio-multifamily-condominium-properties-being-phased-out" },
    { label: "ORC 317.32 — County recorder fees", url: "https://codes.findlaw.com/oh/title-iii-counties/oh-rev-code-sect-317-32/" },
    { label: "ORC 322.02 — County real property transfer tax, levied on the grantor", url: "https://codes.findlaw.com/oh/title-iii-counties/oh-rev-code-sect-322-02/" },
    { label: "ORC 319.54 — Mandatory real property conveyance fee", url: "https://codes.findlaw.com/oh/title-iii-counties/oh-rev-code-sect-319-54/" },
    { label: "NAIC — Dwelling Fire, Homeowners Owner-Occupied, and Homeowners Tenant and Condominium/Cooperative Unit Owner's Insurance Report: Data for 2023 (July 2026)", url: "https://content.naic.org/sites/default/files/publication-hmr-zu-homeowners-report.pdf" },
    { label: "ORC 2329.211 — Purchaser's deposit at a judicial sale", url: "https://codes.findlaw.com/oh/title-xxiii-courts-common-pleas/oh-rev-code-sect-2329-211/" },
    { label: "Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note (restored by Pub. L. 115-174, § 304)", url: "https://www.law.cornell.edu/uscode/text/12/5220" },
    { label: "ORC 5321.16 — Security deposits", url: "https://codes.findlaw.com/oh/title-liii-real-property/oh-rev-code-sect-5321-16/" },
    { label: "ORC 1923.04 — Notice before an eviction action", url: "https://codes.findlaw.com/oh/title-xix-courts-municipal-mayors-county/oh-rev-code-sect-1923-04/" },
    { label: "ORC 5321.19 — Local rent control preempted", url: "https://codes.findlaw.com/oh/title-liii-real-property/oh-rev-code-sect-5321-19/" },
    { label: "Steadily — Columbus short-term rental laws (updated Aug 17, 2026)", url: "https://www.steadily.com/blog/airbnb-short-term-rental-laws-regulations-columbus" },
    { label: "Steadily — Cincinnati short-term rental laws (updated Oct 2, 2026)", url: "https://www.steadily.com/blog/airbnb-short-term-rental-laws-regulations-cincinnati" },
    { label: "ORC 1322.01 — Residential Mortgage Lending Act definitions", url: "https://codes.findlaw.com/oh/title-xiii-commercial-transactions/oh-rev-code-sect-1322-01/" },
    { label: "Zillow Research — ZORI single-family rent, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zori/Metro_zori_uc_sfr_sm_month.csv" },
    { label: "Zillow Research — ZHVI single-family homes, middle tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfr_tier_0.33_0.67_sm_sa_month.csv" },
    { label: "Zillow Research — ZHVI bottom tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.0_0.33_sm_sa_month.csv" },
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
  updated: "2026-10-30",
};

export default dscrOhio;
