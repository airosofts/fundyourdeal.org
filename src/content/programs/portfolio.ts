import type { ProgramContent } from "../types";

export const portfolio: ProgramContent = {
  slug: "portfolio",
  metaTitle: "Portfolio Loan for Rental Properties: Blanket Loan Terms",
  metaDescription:
    "A portfolio loan for rental properties puts several rentals under one loan: 2026 terms, release clauses, recourse and blanket vs. separate DSCR loans.",
  eyebrow: "Blanket rental loans · 2+ properties",
  h1: "A portfolio loan for rental properties: one loan, one payment — and one lien on every house.",
  intro:
    "A portfolio loan for rental properties buys or refinances several rentals under one note, sized on their combined value and their combined DSCR (debt service coverage ratio) — total monthly rent divided by total monthly payment. You trade a stack of mortgages for one closing and one payment; in return, every property secures the whole loan.",
  facts: [
    { label: "Minimum properties", value: "2–5" },
    { label: "Minimum credit", value: "680" },
    { label: "Max LTV, cash-out", value: "55–75%" },
    { label: "Minimum DSCR", value: "1.00–1.05" },
  ],
  overview: {
    heading: "How a blanket loan works: the lender underwrites the portfolio, not the house.",
    paragraphs: [
      "A blanket portfolio loan adds up the rent across every property and compares it with the combined payment. One strong duplex can carry a single-family house that rents a little light — something a set of individual DSCR loans can't do, because each of those has to clear the minimum on its own.",
      "How the combined ratio qualifies the loan. At 1.00 the portfolio's rent exactly covers its combined payment — principal, interest, taxes, insurance and HOA dues, together called PITIA; at 1.25 the rent is 25% more than the payment. LendingOne's SFR portfolio minimum is 1.00. Roc and Civic set 1.05x but measure it as net cash flow over debt service: operating costs, taxes and insurance come off the rent first, and what's left is divided by principal and interest alone. A 2026 third-party review reported 1.20x for Easy Street's blanket loan. Ask which formula a lender uses before you judge a ratio.",
      "One weak house doesn't sink the loan. In the example, suppose one house rents for $1,100 and the other seven average $1,900. The pool still covers its payment 1.41 times. On its own, that house's share of the payment — about $1,280 — would put it at 0.86, below the 1.00 many lenders set on a single rental.",
      "The price of pooling is cross-collateralization: every property secures the whole balance. Each property gets an allocated loan amount, and to sell one you pay down a release price, usually above that allocation, before the lender lets go of its lien. Recourse, state coverage and property-type rules also apply to the package as a whole, so one ineligible property can force you to restructure the deal.",
      "Three ceilings set the loan amount, and the lowest binds. The first is LTV: 70% of the example's $1.6 million is $1.12 million, and a 75% cash-out would be $1.2 million. The second is the ratio: at Roc's 1.05x on net cash flow, the example's rent supports about $1.34 million at 7.5%. The third is the program maximum — $2 million at Roc and Civic, $3 million at LendingOne, $5 million at Easy Street. Here LTV binds; on a package worth more than about $2.86 million, Roc's and Civic's $2 million cap would bind first at 70%.",
      "Interest-only raises the ratio for a decade, then lowers it. LendingOne offers a 30-year fixed with a 10-year interest-only option, and Lima One offers shorter interest-only loans with balloon payments. On the example, interest-only at 7.5% cuts debt service from $7,831 to $7,000 a month and lifts the DSCR from 1.41 to 1.53 — 1.40 on Roc's net cash flow method. When interest-only ends and the balance amortizes over the remaining 20 years, principal and interest rises to $9,023 and the ratio drops to 1.26, or 1.09 on net cash flow, before any rent growth.",
      "The release price is only one term of the release clause. One SEC-filed single-family rental loan agreement — a $508.7 million Freddie Mac loan from 2018 — also limited releases to two per calendar year and none in the six months before maturity, required 30 days' notice and a $350 review fee, and let a property go only if the remaining rents still covered debt service 1.25 times. Small-balance lenders rarely publish these terms, so ask for each one in writing.",
      "“Portfolio loan” means two different things. Investors searching the term usually want the product on this page: one DSCR-style loan over several rentals. Banks and credit unions use “portfolio lender” for something else — a lender that keeps loans on its own books instead of selling them, and so can set its own rules. A portfolio lender may make a blanket loan, but it may just as well make single-property loans underwritten on your tax returns.",
    ],
    formula: "Portfolio DSCR = combined monthly rent ÷ combined PITIA",
    bullets: [
      "Net cash flow gives a lower ratio than rent over PITIA. In the example, deducting an assumed 15% for vacancy, management and repairs, then taxes and insurance, leaves $9,830 of net cash flow against $7,831 of debt service: 1.26 instead of 1.41. Ask each lender for its expense assumptions.",
      "Occupancy is tested by unit count. With eight houses and a 90% minimum, one vacancy puts you at 87.5% and out of bounds — refinance when every unit is leased.",
      "Release prices are rarely published. Two SEC-filed single-family rental loan agreements set them at 115% of the allocated loan amount and on a 105%–120% step-up. In the example, a 115% release on one house is $161,000 against its $140,000 allocation.",
      "Conventional financing stops at 10 financed properties per borrower under Fannie Mae's rules. Portfolio and individual DSCR loans have no such program cap.",
    ],
  },
  example: {
    title: "WORKED EXAMPLE",
    rows: [
      ["Eight rentals, combined value", "$1,600,000"],
      ["Combined monthly rent", "$14,400"],
      ["Blanket loan (70% LTV)", "$1,120,000"],
      ["Principal & interest", "$7,831"],
      ["Property taxes, all eight", "$1,650"],
      ["Insurance, all eight", "$760"],
      ["Combined PITIA", "$10,241"],
    ],
    result: { label: "Portfolio DSCR", value: "1.41" },
    note: "Eight single-family rentals averaging $200,000 and $1,800 a month; 7.5% over 30 years. Pays off $610,000 of existing loans and, after an assumed $28,000 in closing costs, returns about $482,000. Illustrative only — not a rate quote.",
    dscr: 1.41,
  },
  audience: {
    heading: "Built for investors who have outgrown one loan per house.",
    items: [
      { title: "Investors near the conventional cap", text: "Fannie Mae stops at 10 financed properties per borrower. A portfolio loan to your LLC isn't bound by that limit." },
      { title: "Owners with a pile of small loans", text: "Six servicers, six escrow accounts and six payment dates become one. Lima One cites one origination fee instead of several." },
      { title: "Package buyers", text: "Buying a tenant-occupied portfolio from another landlord? Roc, Civic and LendingOne finance purchases at up to 80% LTV." },
      { title: "Equity harvesters", text: "Pull cash from several rentals in one closing instead of refinancing each, at up to 75% of combined value." },
      { title: "BRRRR investors with seasoned rentals", text: "LendingOne lists stabilized BRRRR properties and BRRRR consolidation among its portfolio loan purposes — several refinanced rentals moved under one loan." },
    ],
  },
  requirements: {
    heading: "Portfolio loan requirements: what blanket lenders look for.",
    intro: "Portfolio terms vary more between lenders than single-rental terms do. These are the figures lenders published in October 2026.",
    rows: [
      ["Property count", "2+ at Lima One; 3+ at Easy Street and LendingOne, which caps its program at 20. Lima One's best portfolio pricing needs 5+ properties and a $500,000 loan. RCN's institutional program starts at 20 units."],
      ["Credit score", "680 minimum at Roc and Civic. RCN's leverage grid starts at 680, with its highest leverage at 720+."],
      ["DSCR", "1.00 on LendingOne's SFR portfolio loans and 1.10x–1.20x on its institutional loans, per a 2026 review. 1.05x at Roc and Civic, measured as net cash flow over debt service. The same review reported 1.20x for Easy Street's blanket loan."],
      ["Leverage", "Up to 80% LTV on a purchase and 75% on a cash-out at Roc, Civic and LendingOne. RCN runs 55%–70% depending on credit and loan purpose."],
      ["Loan size", "$225,000–$5 million at Easy Street, up to $3 million at LendingOne and up to $2 million at Roc and Civic. RCN's institutional program runs $2 million–$75 million+."],
      ["Property value", "Minimum per property: $72,000 at Roc and Civic, $75,000 at Easy Street, $100,000 at RCN for 1–4 units, and $125,000 at Lima One and for RCN's 5–9 unit buildings."],
      ["Occupancy", "90%+ leased by unit count at Roc, Civic and RCN. Roc and Civic count leased units at the lower of lease and market rent, vacant units at 90% of market rent."],
      ["Property types and states", "Single-family, 2–4 units, warrantable condos, townhomes and PUDs at Roc and Civic, with no rural, vacation or seasonal rentals. RCN adds 5–9 unit apartments and accepts multi-state portfolios; Easy Street requires every property in one state."],
      ["Excluded states", "Lima One covers 46 states plus D.C. and skips Alaska, the Dakotas and Vermont; Roc skips the Dakotas and Vermont. One house in a skipped state has to be financed outside the blanket loan."],
      ["Seasoning", "Roc needs 90 days of ownership before it sizes a refinance on appraised value rather than cost basis. Lima One describes its portfolio seasoning as flexible without publishing a period."],
      ["Underwriting", "Lima One sets a credit line for the borrower, then underwrites each property separately. LendingOne underwrites on DSCR and says it needs no tax returns or income verification."],
      ["Borrower and recourse", "Entity required at Roc and Civic, with full recourse and a pledge of the entity's equity. RCN and Lima One describe their portfolio loans as non-recourse; LendingOne offers both."],
      ["Foreign nationals", "Eligible at Roc, at up to 65% LTV."],
      ["Allocated loan amounts", "Each property carries a share of the balance, and the release price is a percentage of that share. One SEC-filed agreement set shares from each property's most recent broker price opinion; ask how your lender sets them."],
      ["Release clause", "Rarely published. Agree each property's allocated loan amount and the release price — 115% of allocation in one SEC-filed single-family rental loan — before you sign."],
    ],
  },
  costs: {
    heading: "Portfolio loan rates, fees and prepayment in 2026.",
    intro: "Few lenders publish portfolio pricing beyond an advertised floor. Your rate depends on leverage, combined DSCR, loan size and prepayment terms; figures below are as published in October 2026.",
    rows: [
      ["Advertised floors", "Roc's portfolio page starts at 5.39% and Civic's at 6.56%. Floors assume top credit and low leverage. Lima One says its portfolio loans price below its single-property loans."],
      ["Lender fees", "One origination fee instead of one per property, as Lima One notes. Each property still needs its own valuation and title work."],
      ["Terms", "30-year fixed, 5/1 and 10/1 ARMs, and 5–10 years of interest-only at Lima One and LendingOne. RCN's institutional loans run 5, 7 or 10-year terms on 30-year amortization or interest-only."],
      ["Prepayment", "Easy Street typically uses 5/4/3/2/1, with 3/2/1, 2/1, none or a flat 5% available. Larger institutional loans can use yield maintenance, which prices an early exit off the lender's lost interest; at one rental-portfolio lender it ran 54 months of a 5-year note and 114 months of a 10-year note."],
      ["Release payments", "Selling one property means paying the release price, not just its allocation. At 115% of a $140,000 allocation, $21,000 of your sale proceeds goes to paying down the rest of the loan — and in one SEC-filed agreement, the prepayment premium applied too."],
    ],
  },
  compare: {
    id: "compare",
    heading: "Blanket loan vs. individual DSCR loans vs. bank portfolio loan",
    intro: "Same rentals, different structures. The right answer depends on how often you sell, how many states you own in and whether you want your tax returns in the file.",
    columns: ["", "How it works", "Trade-off"],
    rows: [
      [
        "Blanket portfolio loan",
        "One note and one payment across 2–20+ properties, qualified on combined DSCR at up to 75–80% LTV. Most programs lend to an LLC or other entity.",
        "Strong properties carry weak ones, and one closing replaces many. But every property is cross-collateralized, each sale needs a release payment, and some lenders require one state.",
      ],
      [
        "Individual DSCR loans",
        "A separate 30-year loan on each property, each with its own appraisal, DSCR test and payment.",
        "Sell or refinance any house without touching the others. But each property must qualify on its own, and you pay closing costs on every loan.",
      ],
      [
        "Bank portfolio loan",
        "A bank keeps the loan on its own books and underwrites you as well as the properties. One community bank we checked offers 5, 7 and 10-year balloons on up to 20-year amortization and asks for personal tax returns and a financial statement.",
        "Can fit borrowers and properties that fall outside a DSCR program, because the bank sets its own rules. But a balloon or reset comes due every 5–10 years, and your tax returns drive the decision.",
      ],
      [
        "Conventional (Fannie Mae) loans",
        "Individual mortgages in your personal name, qualified on your income and debt-to-income ratio.",
        "Typically lower rates, but capped at 10 financed properties per borrower and no LLC borrower.",
      ],
    ],
  },
  steps: {
    heading: "Four steps to a portfolio closing.",
    items: [
      { title: "Build the rent roll", text: "List each property's value, rent, lease end date, loan balance, taxes and insurance. Our cash flow calculator totals the package." },
      { title: "Get your terms fast", text: "A 60-second form, then a loan specialist calls you back with terms for the whole portfolio — property count, states and property types." },
      { title: "Set the release terms", text: "Agree each property's allocated loan amount and the release price before you lock. They are hard to change after closing." },
      { title: "Close once", text: "Every property is valued, every existing loan is paid off at one closing, and one payment replaces the stack." },
    ],
  },
  faqs: [
    {
      q: "What is a portfolio loan for rental properties?",
      a: "A single loan secured by several rental properties, sized on their combined rent and value. Investors use it to buy a package of rentals, consolidate existing mortgages into one payment, or pull cash out of several properties at once. Roc, Civic and LendingOne, for example, published up to 80% loan-to-value on purchases and 75% on cash-out refinances in October 2026.",
    },
    {
      q: "What DSCR do I need for a portfolio loan?",
      a: "It depends on the formula. LendingOne's SFR portfolio program asks for 1.00 — combined rent at least equal to the combined payment of principal, interest, taxes, insurance and HOA dues. Roc and Civic ask for 1.05x on net cash flow, meaning rent after operating costs, taxes and insurance, divided by principal and interest. A 2026 review reported 1.20x for Easy Street's blanket loan. Stronger houses can carry a weaker one.",
    },
    {
      q: "What is the difference between a blanket loan and a cross-collateralized loan?",
      a: "A blanket loan is one loan with one lien covering several properties. Cross-collateralization is the broader idea that a property secures more than its own debt — which is how a blanket loan works, but it can also tie separate loans to each other. Either way, a default puts every pledged property at risk, which is why release clauses matter.",
    },
    {
      q: "How many properties do I need for a portfolio loan?",
      a: "It depends on the lender. Lima One starts at two properties, Easy Street and LendingOne at three, and Lima One's best portfolio pricing needs five properties and a $500,000 loan. LendingOne caps its program at 20 properties, while RCN's institutional program starts at 20 units. Minimum values run $72,000–$125,000 per property.",
    },
    {
      q: "What credit score do I need for a blanket loan?",
      a: "Plan on 680. Roc and Civic publish a 680 minimum for their rental portfolio loans, and RCN's leverage grid starts at 680, with its highest leverage at 720 and above. That's higher than the 620–660 floors some single-property DSCR programs publish, so a borrower in the 600s may do better financing each rental on its own until the score improves.",
    },
    {
      q: "Can I sell one property out of a blanket loan?",
      a: "Yes, if the loan has a partial release clause. You pay down a release price, usually more than the property's allocated loan amount, and the lender releases its lien on that house. SEC-filed single-family rental loan agreements show 115% and a 105%–120% step-up. Negotiate the percentage, and whether a prepayment penalty applies to it, before you sign.",
    },
    {
      q: "What conditions come with a partial release on a blanket loan?",
      a: "More than a price. Besides the release premium, one SEC-filed single-family rental loan agreement allowed at most two releases a calendar year and none in the last six months before maturity, required 30 days' notice and a $350 review fee, and required the remaining properties' rents to cover debt service at least 1.25 times. Ask for each condition in the term sheet before you lock.",
    },
    {
      q: "Can a portfolio loan cover properties in different states?",
      a: "Sometimes. RCN accepts scattered-site and multi-state portfolios, while Easy Street requires every property under its blanket loan to be in the same state. Each lender also has states it doesn't serve — Roc, for example, doesn't lend in North Dakota, South Dakota or Vermont — so one house in an excluded state can force you to finance it separately.",
    },
    {
      q: "Are portfolio loans recourse?",
      a: "It varies, so ask early. Roc and Civic publish full recourse with a pledge of the borrowing entity's equity. RCN and Lima One describe their portfolio loans as non-recourse, and LendingOne offers both. Non-recourse loans still normally carry carve-outs for acts such as fraud, so read exactly what makes you personally liable before you sign.",
    },
    {
      q: "Do portfolio loans have prepayment penalties?",
      a: "Usually. Smaller blanket loans tend to use a step-down: Easy Street's typical structure is 5/4/3/2/1, with 3/2/1, 2/1, none or a flat 5% available. Larger institutional loans often use yield maintenance, which charges for the lender's lost interest; one rental-portfolio lender's ran 54 months of a 5-year note. Releasing a property can trigger the penalty on the amount you pay down.",
    },
    {
      q: "Can I get an interest-only portfolio loan?",
      a: "Yes. LendingOne offers a 30-year fixed with 10 years of interest-only, and Lima One offers shorter interest-only loans with balloon payments. Interest-only lifts the ratio: on a $1.12 million loan at 7.5%, debt service falls from $7,831 to $7,000 a month and the example portfolio's DSCR rises from 1.41 to 1.53. When amortization starts over the remaining 20 years, principal and interest jumps to about $9,023.",
    },
    {
      q: "Can I include short-term rentals or vacant houses in a portfolio loan?",
      a: "At Roc and Civic, vacant units yes, within limits; short-term rentals no. Both exclude vacation and seasonal rentals, require 90% occupancy by unit count and count vacant units at 90% of market rent. Finance an Airbnb separately with a short-term rental loan and keep the long-term rentals in the blanket loan.",
    },
    {
      q: "Is a portfolio lender the same as a portfolio loan?",
      a: "No. A portfolio loan is one loan secured by several rentals. A portfolio lender is any lender — often a bank or credit union — that keeps its loans on its own books rather than selling them, which lets it set its own rules. A portfolio lender might offer a blanket loan, or it might make single-property loans underwritten on your tax returns with a 5-to-10-year balloon.",
    },
    {
      q: "Can a buyer take over my portfolio loan?",
      a: "Sometimes, on large loans. One rental-portfolio lender generally grants a one-time right for a buyer to assume loans over $5 million, subject to underwriting and an assumption fee, according to a 2026 review. Smaller blanket loans rarely publish an assumption right, so plan on the buyer bringing new financing and on paying any prepayment penalty when your loan is paid off.",
    },
    {
      q: "Can a portfolio loan include the home I live in?",
      a: "No. Portfolio and blanket loans are business-purpose loans for rental property that neither you nor your family lives in — Roc, for example, lists only non-owner-occupied properties. Keep your own home, and any house a relative will live in, out of the package and finance it with a residential mortgage. The remaining rentals can still go into one loan.",
    },
    {
      q: "Is a portfolio loan better than separate DSCR loans?",
      a: "It's better when you plan to hold, want one payment and have a weaker property the others can carry. Separate loans are better when you expect to sell houses one at a time, because each pays off cleanly without a release premium. You can also split the difference: long-term holds in a blanket loan, likely sales on individual loans.",
    },
  ],
  related: ["dscr", "cash-out-refinance", "short-term-rental", "brrrr"],
  calculator: { href: "/calculators/rental-cash-flow", label: "Model portfolio cash flow" },
  sources: [
    { label: "Roc Capital — Rental portfolios", url: "https://roccapital.com/rental-portfolios" },
    { label: "Civic Financial Services — Rental portfolio loans", url: "https://www.civicfs.com/rental-portfolio-loan/" },
    { label: "LendingOne — SFR portfolio loans", url: "https://lendingone.com/loan-types/sfr-portfolio-loans/" },
    { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
    { label: "Lima One — Rental portfolio loans", url: "https://www.limaone.com/rental-portfolio-loans/" },
    { label: "Lima One — Real estate portfolio loan financing", url: "https://www.limaone.com/real-estate-portfolio-loan-financing/" },
    { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
    { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "CrowdfundedWealth — Blanket loans for rental portfolios (SEC-filed release terms, lender DSCR and prepayment review)", url: "https://www.crowdfundedwealth.com/articles/blanket-loan-rental-portfolio" },
    { label: "United Bank of Michigan — Commercial real estate loans", url: "https://www.unitedbank4u.com/business/commercial-real-estate" },
    { label: "Fannie Mae Selling Guide — multiple financed properties (B2-2-03)", url: "https://selling-guide.fanniemae.com/sel/b2-2-03/multiple-financed-properties-same-borrower" },
  ],
  updated: "2026-10-23",
};
