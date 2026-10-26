import type { Guide } from "../types";

const ltvVsLtcVsArv: Guide = {
  slug: "ltv-vs-ltc-vs-arv",
  metaTitle: "LTV vs LTC vs ARV: How Investor Loans Are Sized",
  metaDescription:
    "LTV vs LTC vs ARV: what each ratio divides by, the limits published for flips, bridge, construction and rentals, and one deal run through all three.",
  category: "Financing basics",
  title: "LTV vs LTC vs ARV: three yardsticks size your loan, and the smallest result wins",
  dek: "Every investor loan is measured against today’s value, your cost, the finished value, or a mix of them. What each ratio divides by, the limits lenders published in October 2026, and one $300,000 flip run through all three so you can see which one binds.",
  readMinutes: 11,
  published: "2026-10-26",
  updated: "2026-10-26",
  keyTakeaways: [
    "LTV divides the loan by today’s value, LTC by what you’re spending, and loan-to-ARV by what the property will be worth after the work. Rehab lenders run two of them side by side and fund the smaller figure.",
    "On a $210,000 purchase with a $90,000 rehab and a $380,000 ARV, 90% of the price plus 100% of the rehab is $279,000 and 75% of ARV is $285,000. Cost binds, and you bring $21,000 before closing costs.",
    "The ARV cap takes over if the appraisal comes in under $372,000. At $340,000 the loan drops to $255,000 and your cash more than doubles, to $45,000.",
    "LTV returns at the exit. A refinance at 75% of the $380,000 value is $285,000, enough to clear the flip loan, but refinance inside 90 days at a lender that uses 80% of cost basis and you’re $39,000 short.",
  ],
  body: [
    {
      type: "p",
      text: "LTV vs LTC vs ARV comes down to one question: what does the lender divide the loan by? Loan-to-value (LTV) divides it by what the property is worth today. Loan-to-cost (LTC) divides it by what you’re spending: purchase plus rehab, or land plus construction. Loan-to-ARV divides it by the after-repair value, what the property should be worth once the work is done. Rehab and construction lenders test two of these at once and lend the smaller answer; rental lenders use LTV plus a rent test. Know which one binds on your deal and you know your cash to close before you make the offer.",
    },
    { type: "h2", text: "Same loan, three different denominators", id: "definitions" },
    { type: "formula", text: "LTV = loan ÷ current value  ·  LTC = loan ÷ total cost  ·  Loan-to-ARV = loan ÷ after-repair value" },
    {
      type: "ul",
      items: [
        "**[LTV](/glossary#ltv), loan-to-value.** The value is today’s, with the property as it stands. On a purchase, mortgage convention takes the lower of the sale price and the appraised value; Fannie Mae writes exactly that into its Selling Guide. Ground-up lenders do the same with land: Roc Capital advances against whichever is lower of a lot’s value and its price.",
        "**[LTC](/glossary#ltc), loan-to-cost.** The denominator is money you actually spend: the purchase price plus the approved rehab budget, or the lot plus hard costs on a new build. Rehab lenders often quote it in two parts, one share of the purchase and another of the rehab.",
        "**Loan-to-[ARV](/glossary#arv).** The denominator is the appraiser’s estimate of value after the planned work, also called as-repaired or as-completed value. It works as a ceiling. It stops a lender from funding a project that only pays off if the house sells above what the comps support.",
      ],
    },
    {
      type: "p",
      text: "One way to keep them apart: LTV asks what the collateral is worth now, LTC asks how much of the project is your money, and ARV asks whether the finished product covers the loan. Rental loans add a fourth test, [DSCR](/glossary#dscr), short for debt service coverage ratio. It’s the rent divided by the payment: a rental bringing in $2,400 a month against a $2,000 monthly payment has a DSCR of 1.20. It caps the loan from the income side, whatever the value says.",
    },
    { type: "h2", text: "Which yardstick each loan type uses, and the limits published", id: "limits" },
    {
      type: "table",
      caption: "Published leverage limits across national investor lenders, October 2026",
      head: ["Loan", "Tests applied", "Published limits", "Usually binds when"],
      rows: [
        ["Fix and flip, hard money", "LTC plus an ARV cap", "85–100% of purchase and 100% of rehab; 70–80% of ARV (60–70% when the investor is new or the rehab heavy)", "The rehab is large or the spread to ARV is thin"],
        ["Ground-up construction", "LTC, completed-value cap and a land advance", "82.5–90% of cost; 65–75% of completed value; 60–75% of the land", "Total cost is high compared with the finished value"],
        ["Bridge, light or no rehab", "LTV, sometimes LTC", "70–85% LTV; 85% LTC at one lender", "Nearly always LTV, since there’s little cost beyond the price"],
        ["DSCR rental purchase", "LTV plus the rent test", "80% standard; 85% at some lenders with 720–740+ credit", "Rent is thin, or credit sits below the top tier"],
        ["DSCR cash-out refinance", "LTV plus the rent test", "70–80%, most often 75%", "LTV, once the rent clears the lender’s minimum"],
        ["BRRRR refinance", "LTV on the new appraisal", "About 75% of ARV; 80% of cost basis if owned under 3 months at one lender", "You refinance before the seasoning period ends"],
      ],
    },
    {
      type: "p",
      text: "The pattern is simple. A loan on a property as it stands is sized on value. A loan that pays for work is sized on cost, then capped on finished value. If the loan funds a rehab or a build, expect at least two tests, and expect the lender to give you the lower number.",
    },
    { type: "h2", text: "One flip, run through all three", id: "worked-example" },
    {
      type: "p",
      text: "Here’s the deal. You’re under contract on a dated three-bedroom for $210,000. The as-is appraisal comes in at $215,000, the rehab budget is $90,000 and the appraiser’s ARV is $380,000, so total cost is $300,000. The lender’s terms match what Easy Street and Roc published for flips: 90% of the purchase price, 100% of the rehab, and a ceiling of 75% of ARV. For contrast, the first row sizes the same house as a light-rehab bridge loan at 70% LTV, Roc’s published bridge limit.",
    },
    {
      type: "table",
      caption: "Sizing a $300,000 flip three ways (before points, closing costs and interest)",
      head: ["Yardstick", "Calculation", "Result"],
      rows: [
        ["LTV: a bridge loan on the house as it stands", "70% × $210,000, the lower of price and as-is value", "$147,000, with nothing for the rehab"],
        ["LTC", "90% × $210,000 + 100% × $90,000", "$279,000 (93% of cost)"],
        ["Loan-to-ARV", "75% × $380,000", "$285,000"],
        ["Rehab loan: the lower of LTC and ARV", "", "$279,000"],
        ["Your cash for purchase and rehab", "$300,000 − $279,000", "$21,000"],
      ],
    },
    {
      type: "p",
      text: "LTC binds, by $6,000. The rehab loan is $279,000, or 73.4% of ARV, comfortably inside the cap. Your $21,000 is the 10% of the price the lender doesn’t fund, due at closing; the $90,000 rehab comes out in draws as work is inspected, as the [construction draw schedule guide](/guides/construction-draw-schedule) explains.",
    },
    {
      type: "p",
      text: "Now look at the LTV row. Sized on as-is value, the same house supports $147,000 and nothing for the work. That gap is why heavy rehabs go to fix-and-flip programs. An as-is lender sees a $215,000 house; a rehab lender sees a $300,000 project that ends as a $380,000 house, and sizes the loan on that.",
    },
    { type: "h2", text: "Which one binds: below a $372,000 ARV, the appraisal decides", id: "which-binds" },
    {
      type: "p",
      text: "The two rehab tests cross where 75% of ARV equals the $279,000 cost loan, at an ARV of $372,000. Above that, cost sets the loan. Below it, the appraisal does, and every $1,000 the ARV falls takes $750 off the loan and puts it on you.",
    },
    {
      type: "table",
      caption: "The same flip at three appraised ARVs",
      head: ["ARV", "75% of ARV", "Loan: lower of $279,000 and the ARV cap", "Limit that binds", "Your cash"],
      rows: [
        ["$380,000", "$285,000", "$279,000", "LTC", "$21,000"],
        ["$360,000", "$270,000", "$270,000", "ARV", "$30,000"],
        ["$340,000", "$255,000", "$255,000", "ARV", "$45,000"],
      ],
    },
    {
      type: "p",
      text: "Your tier moves the ceiling as well. Published ARV caps ran 70–80% in October 2026, with new investors and heavy rehabs held lower, at 60–70%. Hold the ARV at $380,000 and change only the cap:",
    },
    {
      type: "table",
      caption: "The same flip under four ARV caps ($380,000 ARV)",
      head: ["ARV cap", "Cap amount", "Loan", "Your cash"],
      rows: [
        ["80%", "$304,000", "$279,000", "$21,000"],
        ["75%", "$285,000", "$279,000", "$21,000"],
        ["70%", "$266,000", "$266,000", "$34,000"],
        ["65%", "$247,000", "$247,000", "$53,000"],
      ],
    },
    {
      type: "p",
      text: "A first-time flipper on a 65% cap brings $53,000 to the same house a seasoned investor buys with $21,000. Where the cut comes from depends on the lender. Some shrink the purchase advance, which raises your cash at closing; others trim the rehab holdback and leave you to pay for the last of the work. Ask which before you sign the purchase contract.",
    },
    {
      type: "cta",
      text: "Try your own deal: price, rehab and ARV in, loan and cash to close out.",
      href: "/calculators/fix-and-flip",
      label: "Size my flip",
    },
    { type: "h2", text: "A shortcut for spotting the binding limit", id: "shortcut" },
    {
      type: "p",
      text: "When a lender quotes a single LTC on total cost, the crossover is one ratio: the ARV cap divided by the LTC limit. If your total cost is a bigger share of ARV than that, the ARV cap binds.",
    },
    { type: "formula", text: "ARV cap binds when total cost ÷ ARV > ARV limit ÷ LTC limit" },
    {
      type: "ul",
      items: [
        "85% LTC with a 70% cap, Kiavi’s published new construction terms: the cap binds once cost is more than 82.4% of completed value.",
        "90% LTC with a 75% cap, Lima One’s new construction limits: it binds above 83.3%.",
        "85% LTC with a 65% cap, the bottom of the published completed-value range: above 76.5%.",
      ],
    },
    {
      type: "p",
      text: "On a split quote, such as 90% of purchase and 100% of rehab, run both numbers instead, as in the example. Either way, a deal with a wide spread between cost and ARV gets sized on cost, and a deal with a thin spread gets sized on the appraisal. That spread is the number that decides it.",
    },
    { type: "h2", text: "Moving the binding limit: what you can change before closing", id: "levers" },
    {
      type: "p",
      text: "Once you know which test binds, you know which lever to pull, and each test has a different one.",
    },
    {
      type: "ul",
      items: [
        "**If LTC binds, the price is the lever.** At 90% purchase financing, every $1,000 off the price saves you $100 of cash, and a lower price never hurts the ARV test. Because the rehab is funded at 100%, trimming scope lowers the loan but not your cash.",
        "**If the ARV cap binds, the appraisal is the lever.** Give the appraiser your scope, finish list and the sales that support your number; [how to calculate ARV](/guides/how-to-calculate-arv) covers that package. Under a binding 75% cap, $10,000 of extra scope needs about $13,333 more ARV to stay funded, so work that doesn’t raise value comes straight out of your pocket.",
        "**If as-is LTV binds, change the loan type.** A bridge loan sized on today’s value suits a house that needs little work. Once the plan includes a real rehab, a fix-and-flip structure that funds the work in draws lends more on the same house: $279,000 against $147,000 in the example.",
        "**If your tier binds, document the record.** Leverage steps up with completed exits. Lima One’s flip program, for example, asks for one exit of an investment property in the last 36 months, so keep the settlement statements from past deals ready.",
      ],
    },
    { type: "h2", text: "Ground-up adds a third test: the land advance", id: "construction" },
    {
      type: "p",
      text: "Construction loans use LTC and completed value, plus a limit on what the lender advances against the lot: 60–75% of the land in published programs, alongside up to 100% of hard costs. The tightest of the three wins here too. On a $540,000 build with a $140,000 lot, 75% of the lot plus the $400,000 budget is $505,000, but 85% of total cost is $459,000, so the land gets $59,000 at closing rather than $105,000. Land you already own counts toward cost, though at lenders that use the lower of value and price, a lot that has gone up since you bought it is still counted at what you paid.",
    },
    { type: "h2", text: "At the exit, LTV takes over again", id: "refinance" },
    {
      type: "p",
      text: "Sell the house and the ratios stop mattering. Keep it as a rental and you refinance into a loan sized on value. LendingOne says its fix-to-rent refinances typically go as high as 75% of ARV, and Roc publishes up to 80% LTV on a rate-and-term refinance and 75% on cash-out.",
    },
    {
      type: "p",
      text: "On the example, 75% of a $380,000 appraisal is $285,000. That clears the $279,000 rehab loan with $6,000 to spare before closing costs. Timing changes the denominator, though. Roc needs 90 days of seasoning before it will use value instead of cost basis; owned under three months, the loan is held to 80% of total cost basis. That’s 80% of $300,000, or $240,000, which leaves you $39,000 short of paying off the flip loan.",
    },
    {
      type: "p",
      text: "Then the rent test. Minimum DSCRs published in October 2026 ran 1.00–1.05 at conservative lenders and 0.75–0.80 at many others. At 7.375%, the 2025 median rate on 30-year investor loans in HMDA data, $285,000 is $1,968 a month in principal and interest, before taxes, insurance and any HOA dues. If the rent can’t carry that plus the rest of [PITIA](/glossary#pitia), the rent test binds before LTV does. Test it in the [DSCR calculator](/calculators/dscr), and see [refinancing after rehab](/guides/refinance-after-rehab) for the full exit.",
    },
    { type: "h2", text: "Four questions to ask before you count on a number", id: "questions" },
    {
      type: "ol",
      items: [
        "Which limits apply to this loan, and which value goes into each one: as-is, ARV or cost basis?",
        "Is the LTC quoted on total cost, or split between the purchase and the rehab?",
        "If the ARV comes in low, does the cut come out of the purchase advance or the rehab holdback?",
        "On the refinance, how long must you own the property before the lender uses the new appraisal instead of your cost?",
      ],
    },
    {
      type: "p",
      text: "These ratios size business-purpose loans on investment property, never a home that you or a relative will occupy. For that, a residential mortgage lender is the right call. To see how leverage changes with each program, start with [fix and flip loans](/fix-and-flip-loans) or the [rates page](/rates).",
    },
    {
      type: "cta",
      text: "Under contract? Send the price, rehab and ARV and we’ll tell you which number sizes your loan, fast.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund My Deal",
    },
  ],
  faqs: [
    {
      q: "What is the difference between LTV and LTC?",
      a: "LTV divides the loan by the property’s current value; LTC divides it by what you’re spending, the purchase plus rehab or the land plus construction. On a $210,000 purchase with a $90,000 rehab, a $279,000 loan is 93% of cost but about 130% of the $215,000 as-is value, which is why rehab lenders size on cost and finished value rather than today’s value.",
    },
    {
      q: "What does 75% of ARV mean on a loan?",
      a: "The loan can’t exceed 75% of the after-repair value, the appraiser’s estimate of what the property will be worth once the planned work is done. On a $380,000 ARV, that’s $285,000. Fix-and-flip caps published in October 2026 ran 70–80%, dropping to 60–70% when the borrower is new or the rehab is heavy. It’s a ceiling, so a cost-based limit can still come in lower.",
    },
    {
      q: "Do fix and flip lenders use LTC or ARV?",
      a: "Both, and they lend the lower result. Programs published in October 2026 lent 85–100% of the price plus the full rehab budget, with a ceiling of 70–80% of ARV. When the spread between cost and ARV is wide, cost binds; when it’s thin, or the appraisal comes in low, the ARV cap does. Ask which limit decides your loan before you commit to a price.",
    },
    {
      q: "Can you get 100% financing on a fix and flip?",
      a: "Of the purchase, at some lenders and tiers: RCN publishes up to 100% LTC for experienced borrowers, and Kiavi up to 100% of the purchase price (95% in its FAQ), plus 100% of rehab. The ARV cap still applies, so full cost financing only works when cost sits well under 75–80% of ARV. Points, closing costs and interest still come from your own cash.",
    },
    {
      q: "What LTV do DSCR loans allow?",
      a: "DSCR (debt service coverage ratio) loans, which qualify a rental on how well its monthly rent covers the monthly payment, published 80% LTV on purchases as standard in October 2026, with 85% at some lenders for 720–740+ credit scores. Cash-out refinances ran 70–80%, most often 75%. A refinance soon after purchase may be sized on cost instead: one lender caps it at 80% of cost basis inside three months.",
    },
    {
      q: "Why is my loan smaller than the LTC the lender quoted?",
      a: "Because another limit bound first. The usual causes are a low ARV, which pulls the after-repair cap under the cost-based figure; a lower tier for experience or credit; and, on land or a quick refinance, a value measured at the lower of price and appraisal or at cost basis. In our example, every $1,000 the ARV falls below $372,000 cuts the loan by $750.",
    },
  ],
  related: {
    programs: ["fix-and-flip", "construction", "dscr"],
    guides: ["how-to-calculate-arv", "cash-needed-to-flip-a-house", "refinance-after-rehab"],
  },
  sources: [
    { label: "Fannie Mae — Selling Guide B2-1.2-01, how value is set for LTV", url: "https://selling-guide.fanniemae.com/Selling-Guide/Origination-thru-Closing/Subpart-B2-Eligibility/Chapter-B2-1-Mortgage-Eligibility/Section-B2-1-2-LTV-CLTV-HCLTV-Subordinate-Financing/1032991461/B2-1-2-01-Loan-to-Value-LTV-Ratios-06-01-2022.htm" },
    { label: "Easy Street Capital — EasyFix fix-and-flip terms", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
    { label: "Roc Capital — Stabilized bridge", url: "https://roccapital.com/stabilized-bridge" },
    { label: "Roc Capital — Ground-up construction", url: "https://roccapital.com/ground-up" },
    { label: "Roc Capital — Single-property rentals (seasoning and cost basis)", url: "https://roccapital.com/single-property-rentals" },
    { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Kiavi — New construction loans", url: "https://www.kiavi.com/loans/new-construction-infill" },
    { label: "Lima One — New construction loans", url: "https://www.limaone.com/new-construction-loans/" },
    { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
    { label: "Lima One — Bridge loans", url: "https://www.limaone.com/bridge-loans/" },
    { label: "LendingOne — Fix-to-rent loans", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
    { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Defy Mortgage — DSCR loans", url: "https://www.defymortgage.com/non-qm-loans/dscr-loans/" },
    { label: "Angel Oak — Investor cash flow program", url: "https://angeloakms.com/programs/investor-cash-flow-mortgage-program/" },
    { label: "Crowdfunded Wealth — 2026 hard money rates, from 2025 HMDA data", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
};

export default ltvVsLtcVsArv;
