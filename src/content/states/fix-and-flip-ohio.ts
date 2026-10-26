import type { StateContent } from "../types";

const fixAndFlipOhio: StateContent = {
  program: "fix-and-flip",
  slug: "ohio",
  state: "Ohio",
  abbr: "OH",
  metaTitle: "Ohio Fix and Flip Loans: Sheriff Sales, Taxes, Deal Math",
  metaDescription:
    "Ohio fix and flip loans: October 2026 lender terms, sheriff-sale deposits, the rental tax credit phase-out, metro price gaps and a worked Columbus flip.",
  h1: "Ohio fix and flip loans: cheap houses, a deed fee the seller pays, and a tax bill that’s rising for investors.",
  intro:
    "Ohio fix and flip loans usually cover 85–100% of the price and the whole rehab budget, provided the total stays under 70–80% of what the house will be worth once it’s finished, its after-repair value (ARV). Getting in is cheap. A lower-third house in the Youngstown metro was worth about $88,000 in September 2026, and the county conveyance fee, $2 to $4 per $1,000, is the seller’s bill. The number that decides an Ohio flip is the hold: Columbus taxes a house at about 1.74% of its value a year before credits, and the 10% credit rental houses have had falls to zero by tax year 2029.",
  facts: [
    { label: "Share of the price lenders fund", value: "85–100%" },
    { label: "Loan ceiling, % of ARV", value: "70–80%" },
    { label: "Columbus property tax before credits", value: "1.74%/yr" },
    { label: "Ohio homes with a foreclosure filing, H1 2026", value: "1 in 495" },
  ],
  costs: {
    heading: "The Ohio carry: interest, a deed fee, and property tax that’s billed a year late.",
    intro:
      "Your loan terms set the interest and points. Ohio’s 88 counties set the rest: a conveyance fee on each deed and property tax at the local rate. Lender figures are ranges published in October 2026; tax rates are for tax year 2025, the latest the state has published.",
    rows: [
      [
        "Interest: budget about 10%",
        "Federal HMDA filings put the middle of 2025’s short-term investor loans at 10%, and at 10.45% for non-bank lenders, who made 83.3% of them. October 2026 floors ran from 7.75% (Lima One) to 9.24% (RCN). Rehab money usually costs nothing until a draw is paid out.",
      ],
      [
        "Points and lender fees",
        "Published points run from zero to 2. New Silver lists 1–1.75%. Easy Street charges up to 2 points plus $1,995 for documents. Lima One will let you pay its points at the payoff instead of the closing table.",
      ],
      [
        "Conveyance fee: the seller pays it",
        "Each deed owes the county auditor a mandatory 10¢ per $100 of the price ($1 per $1,000), plus a county add-on of up to $3 per $1,000 that the statute levies on, and collects from, the grantor. So the seller covers it when you buy, and you cover it when you resell. In 2024 data, 62 of Ohio’s 88 counties charged the full $3 add-on.",
      ],
      [
        "What the deed fee comes to, county by county",
        "Total per $1,000 in 2024: $3 in Franklin (Columbus), Hamilton (Cincinnati) and Montgomery (Dayton); $4 in Cuyahoga (Cleveland), Summit (Akron), Lucas (Toledo), Stark (Canton), Mahoning (Youngstown) and Clark (Springfield). A $325,000 Columbus resale owes $975.",
      ],
      [
        "Property tax: 35% of value, times the millage",
        "Ohio taxes a house on 35% of its market value at the district’s effective residential rate. For tax year 2025, the City of Columbus inside Columbus City Schools charged 49.78 effective mills, about 1.74% of market value a year before credits. The Cleveland Municipal School District charged 72.14 mills, about 2.52%.",
      ],
      [
        "Rental houses are losing their 10% credit",
        "Homes that aren’t owner-occupied have received a 10% non-business credit on qualifying levies, mostly the older ones. House Bill 186, signed December 19, 2025, steps it down to 7.5% for tax year 2026, 5% for 2027, 2.5% for 2028 and nothing from 2029. Over the same years the homeowner credit climbs to 15.38%, so a seller who lived in the house was billed less than you will be.",
      ],
      [
        "Tax is billed a year behind",
        "Ohio collects each tax year’s bill the following year: tax year 2026 is paid in 2027. So the closing prorations decide who pays for your hold. Get the purchase contract to credit you for tax built up but not yet billed, and expect to give your buyer the same credit.",
      ],
      [
        "If the house becomes a Cleveland rental",
        "Every non-owner-occupied home in Cleveland has to be registered with the city before a tenant moves in, at $70 per unit a year. A rental built before 1978 also needs a city Lead Safe Certificate uploaded to that registration.",
      ],
    ],
  },
  metros: {
    heading: "Ohio’s cheapest houses are climbing fastest in its cheapest metros.",
    intro:
      "Distressed houses tend to trade near the lower third of local values, and finished flips near the middle, so the gap is a rough ceiling on rehab, carry and profit. Your appraiser’s comps set the real ARV. In Toledo, Canton and Youngstown, lower-third values rose 5.0% to 6.2% in a year, faster than typical homes, which shrinks the discount you can buy at.",
    columns: ["Metro", "Lower-third value", "Typical value", "Spread", "Lower third, 12-mo change"],
    rows: [
      ["Columbus", "$199,000", "$327,000", "$128,000", "+0.6%"],
      ["Cincinnati", "$193,000", "$306,000", "$113,000", "+2.4%"],
      ["Cleveland", "$144,000", "$250,000", "$106,000", "+3.7%"],
      ["Akron", "$133,000", "$240,000", "$107,000", "+3.7%"],
      ["Canton", "$119,000", "$218,000", "$99,000", "+5.7%"],
      ["Springfield", "$116,000", "$200,000", "$84,000", "+3.2%"],
      ["Toledo", "$104,000", "$202,000", "$98,000", "+5.0%"],
      ["Youngstown", "$88,000", "$175,000", "$87,000", "+6.2%"],
    ],
    note:
      "Zillow ZHVI by metro, all homes (houses plus condos), smoothed and seasonally adjusted. Lower-third value is Zillow’s bottom tier (0–33rd percentile); typical value is its middle tier (33rd–67th). September 2026 readings against September 2025, downloaded October 26, 2026. Spread is typical value minus lower-third value, using the rounded numbers shown. Zillow’s file has no Dayton metro, so Dayton is left out.",
  },
  example: {
    title: "WORKED EXAMPLE · COLUMBUS FLIP, COLUMBUS CITY SCHOOLS, 7-MONTH HOLD",
    rows: [
      ["After-repair value (ARV)", "$325,000"],
      ["Purchase / rehab", "$180,000 / $45,000"],
      ["Loan: 90% of price + 100% of rehab", "$162,000 + $45,000 = $207,000"],
      ["75%-of-ARV ceiling", "$243,750, so all $207,000 funds"],
      ["Interest, 7 months at 9.99% (assumed)", "$10,752"],
      ["1.5 points (assumed)", "$3,105"],
      ["Purchase closing costs (assumed)", "$3,000"],
      ["Property tax, 7 months at 1.74% of $180,000", "$1,829"],
      ["Vacant-property insurance (assumed)", "$1,100"],
      ["Conveyance fee on the resale, $3 per $1,000", "$975"],
      ["Agent and selling costs (assumed 6%)", "$19,500"],
      ["Costs beyond price and rehab", "$40,261"],
      ["Your cash in until the sale", "$37,786"],
    ],
    result: { label: "Profit before income tax", value: "$59,739" },
    note:
      "$325,000 − $180,000 − $45,000 − $40,261 = $59,739. Interest runs on $162,000 for all 7 months and on $45,000 of draws for an average of 3.5 months. The 9.99% rate is an assumption, just under the 10% HMDA median for 2025 (10.45% at non-banks). Cash in = $18,000 down + $3,105 points + $3,000 closing + $10,752 interest + $1,829 tax + $1,100 insurance. Tax uses the 2025 Columbus City–Columbus City Schools rate before credits and assumes the auditor values the house at its price; the 2026 rental credit would cut it by about $105. The price clears the 70% rule (70% of $325,000 − $45,000 = $182,500), and the ARV sits under the Columbus metro’s $327,000 typical value. An illustration, not a rate quote.",
  },
  rules: {
    heading: "Ohio rules that decide how you buy the house, fix it and sell it.",
    items: [
      {
        title: "Sheriff sales: two-thirds first, no floor second",
        text: "Ohio foreclosures go through the courts and usually end in a sale run by the county sheriff. At the first sale, no bid below two-thirds of the appraised value can win. In a residential mortgage foreclosure, a house that doesn’t sell goes to a second auction 7 to 30 days later with no minimum bid. Franklin County runs its sales online every Friday at 9 a.m. and advertises each one in the Columbus Dispatch for three weeks.",
      },
      {
        title: "Deposit at the sale, balance 30 days after confirmation",
        text: "The statute ties the deposit to the appraisal: $2,000 up to $10,000, $5,000 up to $200,000 and $10,000 above that. The court confirms within 30 days of the writ’s return, and your balance is due 30 days after confirmation, which is the window your loan must close in. Franklin County sells buyer-beware and warns that some liens survive the sale.",
      },
      {
        title: "The owner can redeem until the court confirms",
        text: "Until the confirmation entry, the former owner can take the house back by depositing the judgment, the costs and 8% a year interest on your purchase money with the clerk. After confirmation, the officer has 14 days from confirmation and your payment to record the deed. Don’t order materials or book crews before then.",
      },
      {
        title: "More Ohio houses are in foreclosure",
        text: "In ATTOM’s mid-2026 count, 10,698 Ohio properties drew a default notice, an auction notice or a bank repossession between January and June: 1 in every 495 housing units, up 23.60% on a year earlier, and the eighth-highest rate among the states. The Cleveland metro’s 0.33% rate put it among the ten worst large metros. August pointed the other way there, as Cleveland’s foreclosure starts fell to 175 from 281 a year before.",
      },
      {
        title: "Your resale needs Ohio’s disclosure form",
        text: "Ohio requires its residential property disclosure form when a one- to four-unit home is sold, and being an investor doesn’t excuse you. Court-ordered and foreclosure transfers are exempt, so a sheriff-sale buy may come without one, but your resale won’t. A house built before 1978 also needs the federal lead-paint disclosure, the EPA pamphlet and a 10-day testing window for the buyer.",
      },
      {
        title: "60 days to lien a house, six years to clear it",
        text: "On a one- or two-family home, a contractor or supplier has 60 days from its last work or delivery to file a lien affidavit; most other jobs get 75. A filed lien then stays in force for six years. You can force the issue with a notice to commence suit, which gives the claimant 60 days to sue before the lien is void. Pay each draw against signed releases so your buyer’s title search comes back clean.",
      },
      {
        title: "On houses, trade licensing is local",
        text: "The state board (OCILB) licenses electrical, HVAC, plumbing, hydronics and refrigeration contractors for commercial work; local building and health departments regulate residential contractors and may demand the state license. In Cleveland, contractors rehabbing a home must be bonded, insured and registered, electricians and plumbers must be licensed, and only owner-occupants of one- or two-family homes may skip registration. Plan review there usually takes 3 to 5 working days.",
      },
      {
        title: "Business purpose only",
        text: "Flip financing is for a house you’ll sell or rent to someone else. If you or a relative plans to live in it, apply for a residential mortgage instead.",
      },
    ],
  },
  faqs: [
    {
      q: "How much can I borrow for an Ohio flip?",
      a: "Programs published in October 2026 funded 85–100% of the price, depending on your track record, plus up to all of the rehab. The total then has to fit under 70–80% of ARV, and RCN’s published caps go as low as 60%. On a $325,000 ARV, a 75% cap is $243,750. Whichever figure is lower is your loan, and you bring the rest.",
    },
    {
      q: "What interest rate should I plan for on an Ohio flip loan?",
      a: "Pencil in 10%. Half of 2025’s short-term investor loans reported under HMDA priced above that and half below, and non-bank lenders sat higher, at 10.45%. Advertised floors in October 2026 started between 7.75% and 9.24%, depending on the lender. Add zero to 2 points and any document fee; rehab money usually costs interest only once it’s drawn.",
    },
    {
      q: "Who pays the conveyance fee on an Ohio flip?",
      a: "The seller on each deed. Ohio charges a mandatory $1 per $1,000 of the price, and counties may add up to $3 more, levied on the grantor. So the seller pays when you buy, and you pay when you resell. At Franklin County’s $3 total, a $325,000 Columbus sale owes $975. Cuyahoga, Summit and Lucas counties charged $4 in 2024.",
    },
    {
      q: "How much property tax should I budget on an Ohio flip?",
      a: "Take 35% of the value and multiply it by the district’s effective residential millage. Inside Columbus City Schools, the 2025 rate works out to about 1.74% of value a year before credits, or about $261 a month on a $180,000 house. Don’t borrow the seller’s figure: homeowner credits won’t carry over, and the rental credit is phasing out by 2029.",
    },
    {
      q: "Can I use a flip loan to buy at an Ohio sheriff sale?",
      a: "Yes, if the lender can close inside the statute’s clock. The deposit is due by the sale, before any loan can fund: $5,000 on a house appraised above $10,000 and up to $200,000, or $10,000 above that. The court confirms within 30 days of the writ’s return, and the balance is due 30 days after confirmation. Talk to the lender before you bid.",
    },
    {
      q: "Do I have to give a disclosure form when I sell an Ohio flip?",
      a: "Yes. Ohio’s residential property disclosure form covers sales of homes with one to four units, and an investor seller isn’t exempt; the exemption for sellers who haven’t lived there in the past year also requires an inherited house. Give the buyer the form before they sign. If it arrives later, the buyer can rescind within 3 business days, up to 30 days after acceptance or the closing, whichever comes first.",
    },
    {
      q: "How long does an Ohio contractor have to file a lien on my flip?",
      a: "60 days after its last work or delivery on a one- or two-family home, and 75 days on most other projects. A filed lien stays in force for six years. To clear a disputed one before your resale, serve a notice to commence suit: the claimant then has 60 days to sue, or the lien is void and the property is released.",
    },
    {
      q: "Can I get an Ohio flip loan on a $90,000 house?",
      a: "Look at the lender’s loan minimum before you sign. Published floors in October 2026 were $50,000 at Roc and Civic, $75,000 at RCN and Easy Street, and $100,000 at Kiavi, Lima One, LendingOne and New Silver. Youngstown’s lower-third homes were worth about $88,000 in September 2026, so 90% of a price like that plus a light rehab can fall below half of those floors.",
    },
    {
      q: "Do I need flipping experience to get an Ohio flip loan?",
      a: "Not at every lender. Roc, Civic and New Silver would lend on a first flip in October 2026; Lima One wanted one investment exit within the last 36 months. Where lenders tier by track record, a first flip usually gets a smaller share of the price and a lower ARV cap, so plan on bringing more cash to the closing.",
    },
    {
      q: "What is a point-of-sale inspection in Ohio?",
      a: "A city inspection before a house can be sold, used by some Cuyahoga County suburbs. Cleveland Heights makes the seller get the certificate, valid for a year, before agreeing to sell, and hand the buyer a copy before the contract is signed. Major violations still open at transfer are escrowed at 125% of the city’s estimate. Get the report before you price the rehab.",
    },
    {
      q: "What if my Ohio flip doesn’t sell?",
      a: "Keep it as a rental. A DSCR (debt service coverage ratio) loan can then pay off the flip loan; it measures how many times the lease covers the full monthly payment of principal, interest, taxes and insurance. Cash-out at most of these lenders tops out near 75% of value, and Kiavi allows it after 90 days of ownership. In Cleveland, register the rental and, if it predates 1978, get a Lead Safe Certificate.",
    },
  ],
  sources: [
    { label: "ORC 319.54 — Mandatory real property conveyance fee (division G)", url: "https://codes.findlaw.com/oh/title-iii-counties/oh-rev-code-sect-319-54/" },
    { label: "ORC 322.02 — County permissive real property transfer tax, paid by the grantor", url: "https://codes.findlaw.com/oh/title-iii-counties/oh-rev-code-sect-322-02/" },
    { label: "Ohio Department of Taxation — Table PC-1, real property conveyance fees, CY 2024", url: "https://dam.assets.ohio.gov/raw/upload/tax.ohio.gov/tax_analysis/tax_data_series/real_estate_and_public_utility/pc1/PC1CY24.xlsx" },
    { label: "County Commissioners Association of Ohio — County real property conveyance fee data, CY 2024 (June 2026)", url: "https://ccao.org/aws/CCAO/asset_manager/get_file/954034" },
    { label: "Ohio Adm. Code 5703-25-05 — Taxable value at 35% of true value", url: "https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-5703-25-05" },
    { label: "Ohio Department of Taxation — Tax year 2025 aggregate property tax rates by taxing district (March 25, 2026)", url: "https://dam.assets.ohio.gov/raw/upload/tax.ohio.gov/tax_analysis/tax_data_series/abstracts/tdrates25.xlsx" },
    { label: "ORC 319.302 — Non-business credit and its phase-down for residential property", url: "https://codes.findlaw.com/oh/title-iii-counties/oh-rev-code-sect-319-302/" },
    { label: "Vorys — HB 186 phases out the nonbusiness credit for non-owner-occupied residential property (Dec 23, 2025)", url: "https://www.vorys.com/publication-credit-benefitting-ohio-multifamily-condominium-properties-being-phased-out" },
    { label: "Squire Patton Boggs — Update on Ohio real property tax reform (Feb 2026)", url: "https://www.squirepattonboggs.com/insights/publications/update-on-real-property-tax-reform-recent-legislation-and-proposed-ohio-constitutional-amendment/" },
    { label: "Lucas County Auditor — Owner Occupied Credit and Non-Business Credit changes", url: "https://www.lucascountyohioauditor.gov/ooc" },
    { label: "ORC 2329.20 — Two-thirds minimum bid at a sheriff's sale", url: "https://codes.findlaw.com/oh/title-xxiii-courts-common-pleas/oh-rev-code-sect-2329-20/" },
    { label: "ORC 2329.211 — Purchaser's deposit at a judicial sale", url: "https://codes.findlaw.com/oh/title-xxiii-courts-common-pleas/oh-rev-code-sect-2329-211/" },
    { label: "ORC 2329.31 — Confirmation of sale, balance and deed", url: "https://codes.findlaw.com/oh/title-xxiii-courts-common-pleas/oh-rev-code-sect-2329-31/" },
    { label: "ORC 2329.33 — Redemption before confirmation", url: "https://codes.findlaw.com/oh/title-xxiii-courts-common-pleas/oh-rev-code-sect-2329-33/" },
    { label: "ORC 2329.52 — Second auction with no minimum bid", url: "https://codes.findlaw.com/oh/title-xxiii-courts-common-pleas/oh-rev-code-sect-2329-52/" },
    { label: "Franklin County Sheriff — Real estate sales", url: "https://sheriff.franklincountyohio.gov/Services/Real-Estate-Sales" },
    { label: "ATTOM — Mid-Year 2026 U.S. Foreclosure Market Report", url: "https://www.attomdata.com/news/market-trends/foreclosures/2026-mid-year-foreclosure-market-report/" },
    { label: "ATTOM — August 2026 U.S. Foreclosure Market Report", url: "https://www.attomdata.com/news/market-trends/foreclosures/august-2026-foreclosure-market-report/" },
    { label: "ORC 5302.30 — Residential property disclosure form", url: "https://codes.findlaw.com/oh/title-liii-real-property/oh-rev-code-sect-5302-30/" },
    { label: "US EPA — Real estate disclosures about lead-based paint", url: "https://www.epa.gov/lead/real-estate-disclosure" },
    { label: "ORC 1311.06 — Mechanics' lien affidavit deadlines", url: "https://codes.findlaw.com/oh/title-xiii-commercial-transactions/oh-rev-code-sect-1311-06/" },
    { label: "ORC 1311.11 — Notice to commence suit on a lien", url: "https://codes.findlaw.com/oh/title-xiii-commercial-transactions/oh-rev-code-sect-1311-11/" },
    { label: "ORC 1311.13 — Six-year duration of a mechanics' lien", url: "https://codes.findlaw.com/oh/title-xiii-commercial-transactions/oh-rev-code-sect-1311-13/" },
    { label: "Ohio Construction Industry Licensing Board (OCILB)", url: "https://com.ohio.gov/divisions-and-programs/industrial-compliance/boards/ohio-construction-industry-licensing-board" },
    { label: "City of Cleveland — Contractor permits", url: "https://www.clevelandohio.gov/city-hall/departments/building-housing/divisions/permits/contractor-permits" },
    { label: "City of Cleveland — Home building, rehab and DIY permits", url: "https://www.clevelandohio.gov/city-hall/departments/building-housing/divisions/permits/home-building-rehab-and-diy-permits" },
    { label: "City of Cleveland — Rental registration", url: "https://www.clevelandohio.gov/city-hall/departments/building-housing/divisions/records-administration/rental-registration" },
    { label: "City of Cleveland Heights — Point-of-sale inspection", url: "https://clevelandheights.gov/775/Point-of-Sale-Inspection" },
    { label: "City of Cleveland Heights — Escrow requirements", url: "https://clevelandheights.gov/209/Escrow-Requirements" },
    { label: "Zillow Research — ZHVI middle tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv" },
    { label: "Zillow Research — ZHVI bottom tier, metro (Sept 2026)", url: "https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.0_0.33_sm_sa_month.csv" },
    { label: "Kiavi — Fix and flip", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Kiavi — DSCR rental loans (cash-out seasoning)", url: "https://www.kiavi.com/loans/dscr" },
    { label: "Lima One — Fix and flip", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "RCN Capital — Programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "LendingOne — Fix and flip", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
    { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
    { label: "Civic — Fix and flip", url: "https://www.civicfs.com/fix-and-flip/" },
    { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "New Silver — Fix and flip", url: "https://newsilver.com/fix-and-flip-loans/" },
    { label: "Crowdfunded Wealth — 2025 HMDA rate medians for short-term investor loans (corrected Oct 26, 2026)", url: "https://crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
  updated: "2026-10-26",
};

export default fixAndFlipOhio;
