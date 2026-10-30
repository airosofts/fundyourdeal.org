import type { Guide } from "../types";

const bridgeLoanRequirements: Guide = {
  slug: "bridge-loan-requirements",
  metaTitle: "Bridge Loan Requirements: Credit, Cash, Property and Exit",
  metaDescription:
    "Bridge loan requirements for investment property: LTV and LTC caps, credit floors, liquidity, property condition, exit tests and extension fees, by lender.",
  category: "Financing basics",
  title: "Bridge loan requirements: the house must be ready, the cash verified and the exit already working",
  dek: "What a bridge underwriter checks on a 1–4 unit investment property, from the condition grade to the extension fee. Published rules from Roc, Civic, Lima One, Kiavi, LendingOne and OfferMarket as of October 2026, then one rent-ready purchase sized under three of them.",
  readMinutes: 12,
  published: "2026-10-30",
  updated: "2026-10-30",
  keyTakeaways: [
    "Stabilized bridge loans are sized on today's value, not on ARV: 70% at Roc and Civic, 70–75% on OfferMarket's stabilized bridge depending on experience, and Lima One lists up to 85% (its FAQ says 80%).",
    "Published credit floors in October 2026: Roc and Civic 660, OfferMarket 680 with exceptions down to 660, Lima One's Bridge Plus 700. Kiavi and LendingOne don't publish one.",
    "Cash gets tested more than income. OfferMarket wants cash to close plus 25% of any rehab budget in liquid assets, guarantor net worth of at least half the loan, and 1–6 months of interest reserve set by credit.",
    "The property has to be close to done: Roc's DSCR-exit bridge takes C4 condition or better with no deferred maintenance, and Lima One's Bridge Plus funds no rehab and no lots.",
    "Terms run 12–24 months. OfferMarket prices extensions at 1% for the first three months, then 1.5% for the next three, or 2.5% for six at once, with total extensions limited to half the original term.",
  ],
  body: [
    {
      type: "p",
      text: "Bridge loan requirements for an investment property come down to five checks: the property's condition and value today, your credit, the cash on your statements, your track record, and an exit that already works on paper. A stabilized bridge is sized on what the property is worth now, not after a renovation, so condition and liquidity carry more weight than they do on a rehab loan. In October 2026, published leverage ran 70–85% of value, credit floors 660–700 and terms 12–24 months. Below is each requirement with the rule each lender publishes, then one rent-ready purchase sized under three programs so you can see which rule decides the deal.",
    },
    { type: "h2", text: "The published rules at a glance", id: "at-a-glance" },
    {
      type: "table",
      caption: "Bridge loan requirements on lender pages, October 2026 (1–4 unit investment property)",
      head: ["Requirement", "Roc and Civic stabilized bridge", "Lima One Bridge Plus", "OfferMarket stabilized bridge", "Kiavi bridge"],
      rows: [
        ["Leverage on value", "70% LTV", "Up to 85% LTV (80% in its FAQ)", "70% at tiers 1–2, 75% at tiers 3–5", "Up to 80% of ARV"],
        ["Leverage on cost", "85% of price, plus verified completed capex if owned under 6 months", "Not published", "80% at tiers 1–2, 90% at tiers 3–5", "Up to 100% of price (95% in its FAQ)"],
        ["Credit floor", "660", "700", "680; 660–679 by exception", "Not published"],
        ["Experience", "Not published at Roc; none required at Civic", "Not published", "Not required; tiers set by verified projects", "Exits feed into leverage"],
        ["Condition", "C4+ with no deferred maintenance (rental exit); C2+ (sale exit)", "No rehab; no lots", "C1–C4, no deferred maintenance", "Rehab can be financed at 100%"],
        ["Valuation", "As-is appraisal, no ARV (Civic)", "Exterior-only case by case", "Interior appraisal; in-house only at tier 4+ with 720+", "In-house, no third-party appraisal"],
        ["Term", "12 months (Civic: 18 case by case)", "13 or 19 months", "12 months maximum", "12, 18 or 24 months"],
        ["Loan size", "$50,000–$3,000,000", "$100,000–$5,000,000", "$25,000–$2,000,000", "$75,000–$5,000,000"],
        ["Starting rate", "8.25% Roc; 8.49% Civic", "Not published", "Not published", "8.25%"],
      ],
    },
    { type: "h2", text: "Leverage: the value cap usually decides your down payment", id: "leverage" },
    {
      type: "p",
      text: "A stabilized bridge lends against the house as it stands. Roc and Civic hold the loan to 70% of value and 85% of cost, and the lower figure governs. If you've owned the property for under 6 months, cost means your price plus completed capital work you can document, so keep every receipt. OfferMarket's stabilized bridge lends 70% of value to its two lower experience tiers and 75% to the top three, with cost caps of 80% and 90%. Lima One lists up to 85% on Bridge Plus, while its FAQ says 80% and warns that not every property or loan purpose gets the maximum.",
    },
    {
      type: "p",
      text: "On a purchase at market price, value and cost are the same number, so the [LTV](/glossary#ltv) cap binds and your down payment is simply the rest: 30% of the price at 70%, 25% at 75%. That's far more cash than a rehab loan that lends 85–90% of a discounted price. Some programs called bridge loans are really rehab loans. Kiavi's can cover the whole price (95% per its FAQ), all of the rehab, and up to 80% of ARV, and LendingOne lists up to 100% of cost or 80% of ARV. If the house needs work, look at those; if it doesn't, expect value-based leverage. [LTV vs LTC vs ARV](/guides/ltv-vs-ltc-vs-arv) shows how the caps trade places.",
    },
    { type: "h2", text: "Credit: the floor gets you in, and the score sets the reserve", id: "credit" },
    {
      type: "p",
      text: "The published floors: 660 at Roc and Civic, 680 at OfferMarket with 660–679 considered by exception, and 700 on Lima One's Bridge Plus. Kiavi checks your score on a soft pull when you pre-qualify but doesn't publish its minimum. Credit is pulled on the guarantors, the people who sign personally for the entity's loan.",
    },
    {
      type: "p",
      text: "OfferMarket publishes the fullest credit rulebook for its bridge loans. It strongly prefers a guarantor at 720 or above, uses a tri-merge report no older than 120 days (taking the middle score when there are three and the lower when there are two), and wants any bankruptcy discharged and any foreclosure completed more than 4 years before closing. Past-due accounts, involuntary liens and judgments are paid off before funding, and mortgage lates in the past year need a written explanation.",
    },
    {
      type: "p",
      text: "Score also sets how much interest is held back at closing. OfferMarket's interest reserve is 1 month of interest for a guarantor at 700 or higher and 3 months at 660–699. It rises to 6 months for a 660–699 score with a concerning item, or for a thin file with fewer than 5 tradelines or no mortgage history. A bankruptcy or foreclosure 4–7 years old also triggers a 3-month reserve.",
    },
    { type: "h2", text: "Liquidity: the statements matter more than the tax returns", id: "liquidity" },
    {
      type: "p",
      text: "Bridge lenders size the loan on the property, and Kiavi and LendingOne both advertise no income verification. What they read instead is your bank and brokerage statements. OfferMarket's rule is the clearest one published:",
    },
    {
      type: "ul",
      items: [
        "**Liquid assets** equal to your cash to close plus 25% of any rehab budget, held across the guarantors.",
        "**Proof:** each guarantor's two most recent statements. Retirement accounts count at 50% of their balance.",
        "**Net worth:** the guarantors together must be worth at least half the loan amount.",
        "**Guaranty:** owners of at least 51% of the borrowing entity sign on a purchase; 100% on a cash-out refinance. Loans are full recourse.",
      ],
    },
    {
      type: "p",
      text: "Rehab Financial, for its rehab loans, asks for three consecutive months of statements, personal and business. Whatever the lender's rule, count everything that goes into cash to close: the down payment, [points](/glossary#points) (1.5–2 at OfferMarket, $2,000 minimum), title, insurance, the appraisal and any reserve you fund from your own account. Then keep enough to carry the property while it's empty. Interest, taxes and insurance don't wait for a tenant.",
    },
    { type: "h2", text: "Experience: optional at some lenders, priced at all of them", id: "experience" },
    {
      type: "p",
      text: "Civic says its 1–4 unit bridge needs no experience, and OfferMarket's base program doesn't require any. Experience still moves the terms. OfferMarket sorts borrowers by verifiable completed projects: none is tier 1, one or two is tier 2, three or four is tier 3, five to nine is tier 4 and ten or more is tier 5. On its stabilized bridge, leverage on value steps from 70% to 75% at tier 3, and wholesale deals don't count toward a tier. Kiavi names your record of property exits, alongside credit and ARV, as one of the factors in how much it lends.",
    },
    {
      type: "p",
      text: "Make your record easy to verify: the address, the dates you bought and sold or refinanced, and the settlement statement for each deal. A recorded deed and a closing statement can be checked. A deal you describe from memory can't.",
    },
    { type: "h2", text: "The property: finished, conventional and easy to value", id: "property" },
    {
      type: "p",
      text: "A bridge underwriter wants a property that a buyer or a long-term lender could take on now, or very soon. Condition is graded on the C1–C6 scale from Fannie Mae's guide: C2 means no deferred maintenance and no repairs needed, and C4 allows some minor deferred maintenance from normal wear. Roc's DSCR-exit bridge takes C4 or better, but with no deferred maintenance at all, so a C4 house needs its punch list finished before closing. Roc's version for houses being sold needs C2 or better, and a value inside the 90th percentile of the local market. OfferMarket's stabilized bridge takes C1–C4 with no deferred maintenance, and Lima One says Bridge Plus isn't designed for properties needing rehab.",
    },
    {
      type: "ul",
      items: [
        "**Eligible types:** at Roc and Civic, houses, buildings of 2–4 units, townhomes, PUDs and warrantable condos; Kiavi also lists manufactured homes, which OfferMarket excludes.",
        "**Common exclusions:** lots (Lima One), rural, exotic or unique properties (Roc, Civic), and at OfferMarket mixed use, 5+ units, condotels, co-ops, log homes and vacation rentals.",
        "**Size limits:** OfferMarket wants at least 700 square feet for a single-family house, 500 per unit for condos and 2–4 units, and no more than 5 acres.",
        "**Occupancy:** investment property only. Kiavi lends on non-owner-occupied property, and Lima One finances no owner-occupied homes.",
      ],
    },
    { type: "h2", text: "Valuation: who sets the value sets the speed", id: "valuation" },
    {
      type: "p",
      text: "Kiavi's own team values bridge properties; there's no third-party appraisal. LendingOne may value in-house or skip the appraisal, and Lima One will consider an exterior-only valuation case by case. Civic uses an as-is appraisal with no after-repair value. OfferMarket orders an interior appraisal (a 1004 plus a 1007 rent schedule on a single-family house; a 1025 plus a 216 on 2–4 units), takes an exterior appraisal on REO, foreclosure and auction purchases, and allows in-house valuation only for tier 4 and up, with 720+ credit and leverage of 70% of ARV or less. Its appraisals must be no more than 120 days old at closing, or recertified at 120–179 days; a transferred report must be under 180 days old.",
    },
    { type: "h2", text: "The exit: a test you pass at application, not at maturity", id: "exit" },
    {
      type: "p",
      text: "Two lenders publish the test. Roc's DSCR-exit bridge needs a 1.10 [DSCR](/glossary#dscr). That's the debt service coverage ratio: dollars of rent for each dollar of the full monthly payment, so 1.10 means $1.10 of rent per $1 of payment. Roc measures it on whichever is lower, the lease or market rent. OfferMarket needs a projected 1.1 DSCR after repairs for a refinance exit. For a sale exit, it needs a projected gross margin of at least 30% and at least $15,000 of profit.",
    },
    {
      type: "p",
      text: "Bring the evidence with the application: rent comps or a signed lease for a refinance, closed sales near your price for a sale, and the timeline in months. How each exit works, and what a late one costs, is in [bridge loan exit strategies](/guides/bridge-loan-exit-strategies).",
    },
    { type: "h2", text: "Term and extension fees, by lender", id: "term" },
    {
      type: "table",
      caption: "Published bridge terms and extension pricing, October 2026",
      head: ["Lender", "Term", "Extensions"],
      rows: [
        ["Roc Capital, stabilized bridge", "12 months", "Not published"],
        ["Civic, 1–4 unit bridge", "12 months; 18 case by case", "Not published"],
        ["Lima One, Bridge Plus", "13 or 19 months", "Not published"],
        ["Kiavi, bridge", "12, 18 or 24 months", "Not published for bridge; its construction loans list 3- or 6-month options"],
        ["OfferMarket", "12 months standard, 18–24 for specific projects; 12 maximum on the stabilized bridge", "Up to half the original term, in 3- or 6-month steps. Fees: 1% (first 3 months), 1.5% (second 3 months), 2.5% (a first 6-month extension). Builder's risk cover must run through the extension."],
        ["Rehab Financial, 9-month rehab loan", "9 months", "An automatic 3-month extension for 1%"],
      ],
    },
    {
      type: "p",
      text: "Twelve months is the default for a reason: in 2025 HMDA data on short-term investor loans, 70.9% had 12-month terms, 91% charged interest only and 95.1% were structured with a balloon at maturity. Pick the term from your exit, not the lender's default. Lease-up, about 90 days of seasoning and a 30-day refinance fit inside 12 months with room to spare; a sale in a slow market might not. On OfferMarket's schedule, 3 extra months on a $210,000 loan cost $2,100 before interest. The full fee picture is in [investor loan points and fees](/guides/investor-loan-points-and-fees).",
    },
    {
      type: "cta",
      text: "Rent-ready property under contract? Send the deal and get bridge terms sized to your exit.",
      href: "/get-funding?loan=bridge",
      label: "Fund my bridge loan",
    },
    { type: "h2", text: "Worked file: a $280,000 rent-ready house, sized three ways", id: "worked-file" },
    {
      type: "p",
      text: "The deal: a vacant, rent-ready single-family house under contract at $280,000, appraised at the same figure, in C3 condition. Market rent is $2,350 a month and taxes and insurance are assumed at $430 a month. The borrower has a 690 middle score, three completed flips in the last three years with settlement statements, $95,000 across checking and brokerage accounts, and $260,000 of net worth. The plan is to lease the house, then refinance into a 30-year rental loan after 90 days. We assume 10% interest (the midpoint rate in 2025 federal HMDA records of short-term investor lending), 1.5 points and $5,000 of closing costs. Illustrative, not a quote.",
    },
    {
      type: "table",
      caption: "One borrower, three published bridge programs (illustrative)",
      head: ["", "Roc or Civic, DSCR-exit bridge", "Lima One, Bridge Plus", "OfferMarket, stabilized bridge"],
      rows: [
        ["Credit floor vs. a 690 score", "660: passes", "700: fails", "680: passes"],
        ["Leverage rule that binds", "70% of value", "—", "75% of value (tier 3)"],
        ["Loan", "$196,000", "—", "$210,000"],
        ["Down payment", "$84,000", "—", "$70,000"],
        ["Points at 1.5%", "$2,940", "—", "$3,150"],
        ["Interest reserve", "Not published; none assumed", "—", "3 months at 660–699: $5,250"],
        ["Cash at closing, with $5,000 of costs", "$91,940", "—", "$83,400"],
        ["Left of the $95,000", "$3,060", "—", "$11,600"],
        ["Monthly carry while vacant: interest plus $430", "$2,063.33", "—", "$2,180.00"],
        ["Our exit check: the bridge balance refinanced at 7.375% over 30 years", "DSCR 1.32 against 1.10 required", "—", "DSCR 1.25 against 1.1 required"],
        ["Other published tests", "C4 or better, no deferred maintenance", "—", "Net worth of at least $105,000; liquidity of at least cash to close"],
      ],
    },
    {
      type: "p",
      text: "Three things decide this file. First, the 700 floor ends the Lima One conversation before leverage comes up, so a 10-point gap in the score costs a whole program. Second, the lower-leverage loan is the harder one to carry. At Roc's 70%, closing leaves $3,060, less than two months of vacant carry ($4,126.67). Roc doesn't publish a liquidity rule, but any underwriter reading those statements will see the gap. Third, more leverage now leaves less room at the exit. A 30-year loan at 75% of a $280,000 value is $210,000. That repays Roc's $196,000 with $14,000 to spare before refinance costs, but only just repays OfferMarket's $210,000, so the refinance closing costs come from your pocket.",
    },
    {
      type: "p",
      text: "And Kiavi? Its bridge lends up to 80% of ARV, and on a house that needs no work, ARV is today's value: up to $224,000 here, if your score and exits earn the top of its range. Kiavi doesn't publish the score that takes. The exit math at a higher rate, and what a three-month slip costs, are worked through in [bridge loan exit strategies](/guides/bridge-loan-exit-strategies).",
    },
    { type: "h2", text: "The bridge file: send it with the application", id: "file" },
    {
      type: "ul",
      items: [
        "**The deal:** the signed purchase contract. For a refinance, the settlement statement from your purchase and receipts for completed work, since Roc credits verified capex on properties owned under 6 months.",
        "**The entity:** articles, operating agreement or bylaws, certificate of good standing and a W-9. OfferMarket lends only to an LLC or a corporation.",
        "**Each guarantor:** photo ID and authorization for a credit and background check.",
        "**Cash:** the two most recent statements for every account you're counting, with any large or unusual deposit explained.",
        "**Track record:** address, dates, prices and settlement statement for each past project.",
        "**Exit evidence:** rent comps or a signed lease and the DSCR at today's rental-loan rates, or closed sales comps for a sale.",
        "**Insurance:** a quote naming the lender as mortgagee; [closing an investor loan fast](/guides/closing-an-investor-loan-fast) covers what lenders ask for.",
      ],
    },
    {
      type: "p",
      text: "Every loan described here is a business-purpose loan on investment property. Planning to live there yourself, or to house a relative, while your current home sells? That's a residential lender's job.",
    },
    {
      type: "cta",
      text: "Know your exit and your closing date? Tell us about the property and get your bridge loan funded fast.",
      href: "/get-funding?loan=bridge",
      label: "Fund My Deal",
    },
  ],
  faqs: [
    {
      q: "What are the requirements for a bridge loan on an investment property?",
      a: "Expect five checks: a property in rent-ready or saleable condition, a credit score above the lender's floor (660–700 where published in October 2026), liquid assets that cover cash to close and some carrying costs, a track record that sets your leverage tier, and an exit that already works, such as a projected 1.10 DSCR or a sale with margin. Leverage runs 70–85% of today's value.",
    },
    {
      q: "What's the minimum credit score for a bridge loan?",
      a: "Where lenders publish one, it ran from 660 to 700 in October 2026: 660 at Roc and Civic, 680 at OfferMarket with case-by-case exceptions from 660, and 700 on Lima One's Bridge Plus. Kiavi and LendingOne don't publish a floor. Above the minimum, your score changes the cost: at OfferMarket a 660–699 score means a 3-month interest reserve, against 1 month at 700 or higher.",
    },
    {
      q: "How much down payment does a bridge loan need?",
      a: "On a stabilized bridge, roughly the price minus the value cap: 30% at Roc's and Civic's 70% LTV, 25% at OfferMarket's 75% for borrowers with three or more projects, and 15–20% where Lima One's 80–85% applies. Add points, closing costs and any interest reserve. On a $280,000 house in our example, cash at closing came to $83,400–$91,940.",
    },
    {
      q: "Do I need experience to get a bridge loan?",
      a: "Not always. Civic says its 1–4 unit bridge requires no experience, and OfferMarket's base program doesn't require any. Experience still changes the terms: OfferMarket lends 70% of value with zero to two verified projects and 75% with three or more, and Kiavi counts your property exits when it sizes a loan. OfferMarket doesn't count wholesale deals.",
    },
    {
      q: "How much does it cost to extend a bridge loan?",
      a: "Where lenders publish it, about 1% of the loan per 3 months. OfferMarket's fee is 1% of the loan for the first three extra months and 1.5% for the next three; a single six-month extension is 2.5%. Total extensions can't exceed half the original term, and builder's risk cover has to stay in force. Rehab Financial's 9-month rehab loan extends 3 months for 1%. Interest keeps accruing the whole time.",
    },
    {
      q: "Does a bridge loan require an appraisal?",
      a: "It depends on the lender. Kiavi's in-house team sets the value with no outside appraiser, LendingOne may value in-house or skip the appraisal, and Lima One will consider an exterior-only valuation case by case. Civic uses an as-is appraisal with no after-repair value, and OfferMarket orders an interior appraisal that must be no more than 120 days old at closing. Ask before you set the contract's closing date.",
    },
  ],
  related: {
    programs: ["bridge", "dscr", "hard-money", "fix-and-flip"],
    guides: ["bridge-loan-exit-strategies", "ltv-vs-ltc-vs-arv", "investor-loan-points-and-fees", "closing-an-investor-loan-fast"],
  },
  sources: [
    { label: "Roc Capital — Stabilized Bridge program (October 2026)", url: "https://roccapital.com/stabilized-bridge" },
    { label: "Civic — 1–4 unit bridge loans (October 2026)", url: "https://civicfs.com/bridge-loans/" },
    { label: "Civic — Product overview, starting rates (October 2026)", url: "https://www.civicfs.com/product-overview/" },
    { label: "Lima One — Bridge Plus (October 2026)", url: "https://www.limaone.com/bridge-loans/" },
    { label: "Kiavi — Bridge loans (October 2026)", url: "https://www.kiavi.com/loans/bridge-loans" },
    { label: "Kiavi — How the bridge loan process works (soft-pull pre-qualification)", url: "https://www.kiavi.com/how-it-works/" },
    { label: "Kiavi — New construction loans (extension options)", url: "https://www.kiavi.com/loans/new-construction-infill" },
    { label: "LendingOne — Bridge loans (October 2026)", url: "https://lendingone.com/loan-types/bridge-loans/" },
    { label: "OfferMarket — Bridge loan terms: credit, liquidity, reserves, tiers, valuation, extensions (October 2026)", url: "https://www.offermarket.us/bridge-loan" },
    { label: "Rehab Financial Group — How rehab loans work", url: "https://rehabfinancial.com/how-rehab-loans-work" },
    { label: "Fannie Mae Selling Guide B4-1.3-06 — Property condition ratings C1–C6 (June 4, 2025)", url: "https://selling-guide.fanniemae.com/sel/b4-1.3-06/property-condition-and-quality-construction-improvements" },
    { label: "Crowdfunded Wealth — 2025 HMDA data on short-term investor loans: terms and rates (updated October 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
};

export default bridgeLoanRequirements;
