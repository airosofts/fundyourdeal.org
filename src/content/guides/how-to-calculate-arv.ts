import type { Guide } from "../types";

const howToCalculateArv: Guide = {
  slug: "how-to-calculate-arv",
  metaTitle: "How to Calculate ARV: Comps, Adjustments and Loan Caps",
  metaDescription:
    "How to calculate ARV from closed comps: adjust each sale, reconcile to one value, and see how appraisals, BPOs and 70–80% lender caps size your flip loan.",
  category: "Fix & flip",
  title: "How to calculate ARV: the number that decides your flip loan",
  dek: "After-repair value is what the finished house will sell for, proved with closed sales of renovated homes. Pick the comps, adjust each one to your house, land on a single figure, then see what the lender's valuation and its 70–80% cap do to the loan.",
  readMinutes: 12,
  published: "2026-10-26",
  updated: "2026-10-26",
  keyTakeaways: [
    "ARV comes from closed sales of homes already renovated to your finish level, close by and recent. Fannie Mae's appraisal rules want at least three closed sales, normally from the past 12 months; listings only back them up.",
    "Adjust the comp toward your house: subtract for what the comp has that yours won't, add for what it lacks. Each dollar amount should come from how local buyers pay, such as paired sales, not a rule of thumb.",
    "Reconcile instead of averaging: weight the comps that needed the fewest adjustments. Price per square foot is a sanity check, and it runs high once listings or a better neighborhood slip in.",
    "Lenders apply the cap to their own valuation. In October 2026 the published caps were 70–80% of ARV, falling to 60–70% for first-time flippers or big renovations. If their value is lower and the cap binds, you cover the gap.",
  ],
  body: [
    {
      type: "p",
      text: "To calculate ARV, the [after-repair value](/glossary#arv) of a flip, you find recent closed sales of homes like yours as it will look after the work, adjust each sale for the ways it differs, and reconcile the adjusted prices into one figure. It is the number that decides your fix-and-flip loan. Lenders' published caps in October 2026 sat at 70–80% of ARV, and the ARV they apply that cap to is their own. Below, one 1,520 sq ft ranch goes from comp search to loan size.",
    },
    { type: "formula", text: "ARV = reconciled value of the adjusted comps, where each adjusted comp = its sale price ± the value of every difference from your finished house" },
    { type: "h2", text: "Describe the finished house before you pull a single comp", id: "define-the-subject" },
    {
      type: "p",
      text: "Comps are matched to the house you will sell, so write that house down first: above-grade square footage, bedrooms and bathrooms after the work, garage, lot and finish level. The scope of work fixes those facts. If the plan turns a one-bath ranch into a two-bath, your comps are two-bath ranches, and the lender will expect to see the bathroom in the budget before it accepts a two-bath value.",
    },
    {
      type: "p",
      text: "Lenders test that link. Kiavi has borrowers state the target finish quality on the scope of work, and its guide says lenders use the budget to judge whether the work supports the projected ARV. A designer-grade value on a paint-and-carpet budget invites a lower number; see our guide to a [rehab budget lenders will fund](/guides/rehab-budget-for-lenders).",
    },
    {
      type: "ul",
      items: [
        "**Size:** 1,520 sq ft above grade, unchanged by the work.",
        "**Rooms after rehab:** 3 bedrooms and 2 bathrooms. The plan adds the second bath.",
        "**Garage:** one car.",
        "**Finish:** mid-grade, in line with the renovated sales nearby.",
        "**The deal:** a $150,000 purchase and a $52,000 rehab, $202,000 all-in.",
      ],
    },
    { type: "h2", text: "Use closed sales of renovated homes, and only those", id: "find-comps" },
    {
      type: "p",
      text: "Fannie Mae's Selling Guide, the rulebook for appraisals on loans Fannie Mae buys, requires at least three closed comparable sales, normally from the last 12 months; older ones need an explanation. Listings and contracts count only as supporting data. Flip lenders set their own bar on top: New Silver's standard policy calls for six comparable sales within a 5-mile radius sold in the last 12 months, and Ridge Street Capital's calculator tells borrowers to use renovated sales in the same submarket from the last three to six months.",
    },
    { type: "p", text: "Search tight and widen only when sales run out. Filter for:" },
    {
      type: "ul",
      items: [
        "Closed sales, not active or pending listings.",
        "Renovated condition. A dated house that sold as-is shows the as-is value, not the ARV.",
        "The same market area: the subdivision first, then neighborhoods buyers treat as substitutes. Fannie Mae tells appraisers not to stretch a neighborhood's boundaries just to take in the comps they want.",
        "Similar size, age, style, rooms, lot and garage. Each mismatch becomes an adjustment, and adjustments are where values drift.",
        "Arm's-length sales. Fannie Mae allows foreclosures and short sales only when they're the best data available.",
      ],
    },
    {
      type: "p",
      text: "In the example, a six-month search within a mile turned up seven candidates. Three didn't make the set:",
    },
    {
      type: "table",
      caption: "Candidates rejected from the ARV comp set (illustrative)",
      head: ["Candidate", "What it is", "Verdict"],
      rows: [
        ["E: 1,540 sq ft, 3 bed / 2 bath", "Active listing at $289,900", "Support only. It hasn't sold."],
        ["F: 1,580 sq ft, 3 bed / 2 bath", "Closed at $301,000 across the highway, in a different school district", "Out. Buyers don't shop it as the same market."],
        ["G: 1,510 sq ft, 3 bed / 1 bath", "Closed at $171,000, unrenovated", "Out for ARV. Good evidence for the as-is value."],
      ],
    },
    { type: "h2", text: "Adjust the comp to your house, never your house to the comp", id: "adjustments" },
    {
      type: "p",
      text: "Every adjustment answers one question: what would this comp have sold for if it were your finished house? If the comp has something yours won't, such as a second garage bay, subtract its value. If it lacks something yours will have, add. The subject stays fixed.",
    },
    {
      type: "p",
      text: "The amounts have to come from what buyers in that market actually pay. Fannie Mae requires adjustments to reflect the market's reaction to each difference and sets no net or gross percentage limits; heavy adjustments only prompt the underwriter to confirm the value is supported. Paired sales are the classic evidence. In the example, two renovated ranches of the same size on one street sold $9,000 apart, and the only difference was a second bathroom. That's the bath adjustment.",
    },
    {
      type: "ul",
      items: [
        "**Living area:** a dollar rate per square foot of difference, not the comps' average price per foot, which carries the lot, kitchen and baths that 40 extra feet don't add.",
        "**Rooms, garage, basement, lot and view:** each priced on its own line, from paired sales where you can find them.",
        "**Finish level:** a flip with quartz, custom tile and new hardwood is a different product from a mid-grade one.",
        "**Market conditions:** Fannie Mae has appraisers check for price change since each comp's contract date and back any time adjustment with evidence, such as a home price index.",
        "**Seller concessions:** a seller who paid the buyer's closing costs may have inflated the price. Fannie Mae allows only negative adjustments for concessions.",
      ],
    },
    { type: "h3", text: "The worked example: four comps, adjusted" },
    {
      type: "p",
      text: "The rates here stand in for paired-sales evidence from the example neighborhood: $80 per square foot of living-area difference, $9,000 for a full bathroom, $7,500 for a second garage bay, and $12,000 between designer-grade and mid-grade finishes. They are illustrative. Yours have to come from your market.",
    },
    {
      type: "table",
      caption: "Comp grid for a 1,520 sq ft, 3 bed / 2 bath ranch after rehab (illustrative). Gross adjustment is the sum of all adjustments ignoring sign, as a share of the sale price.",
      head: ["Comp", "Sale price", "Differences from the subject", "Net", "Adjusted price", "Gross"],
      rows: [
        ["A: 1,560 sq ft, 3/2, 1-car, mid-grade; 0.4 mi, sold 2 months ago", "$262,000", "40 sq ft larger: −$3,200", "−$3,200", "$258,800", "1.2%"],
        ["B: 1,450 sq ft, 3/2, 2-car, mid-grade; 0.6 mi, 4 months", "$259,000", "70 sq ft smaller: +$5,600. Extra garage bay: −$7,500", "−$1,900", "$257,100", "5.1%"],
        ["C: 1,600 sq ft, 3/2, 1-car, designer-grade; 0.9 mi, 3 months", "$284,000", "80 sq ft larger: −$6,400. Better finishes: −$12,000", "−$18,400", "$265,600", "6.5%"],
        ["D: 1,500 sq ft, 3/1, 1-car, mid-grade; 0.5 mi, 5 months", "$246,000", "20 sq ft smaller: +$1,600. One bath fewer: +$9,000", "+$10,600", "$256,600", "4.3%"],
      ],
    },
    { type: "h2", text: "Reconcile to one figure by trusting the cleanest comps most", id: "reconcile" },
    {
      type: "p",
      text: "Four adjusted prices between $256,600 and $265,600 aren't an ARV yet. A plain average treats a comp adjusted by $18,400 the same as one adjusted by $3,200. Every adjustment is an estimate that can be wrong, so the comps that needed the least deserve the most weight.",
    },
    {
      type: "table",
      caption: "Reconciliation, weighted by how little each comp was adjusted",
      head: ["Comp", "Adjusted price", "Gross adjustment", "Weight", "Contribution"],
      rows: [
        ["A", "$258,800", "1.2%", "35%", "$90,580"],
        ["D", "$256,600", "4.3%", "25%", "$64,150"],
        ["B", "$257,100", "5.1%", "25%", "$64,275"],
        ["C", "$265,600", "6.5%", "15%", "$39,840"],
        ["Reconciled value", "", "", "100%", "$258,845"],
      ],
    },
    {
      type: "p",
      text: "Rounded, the ARV is $259,000. Three of the four comps sit within $2,200 of each other, and the outlier is the designer flip whose finishes this budget doesn't match. If your number leans on the outlier, expect the valuer to lean the other way.",
    },
    { type: "h3", text: "Price per square foot is a check, not a method" },
    {
      type: "p",
      text: "Raw price per square foot on comps A to D runs from $164 to $179, which puts a 1,520 sq ft house anywhere from $249,280 to $271,503. The average, about $172, gives $261,466, roughly $2,500 above the reconciled value, because it ignores B's garage and C's finishes. Let the listing (E) and the sale across the highway (F) in and it climbs to about $178 a foot, or $270,262: $11,262 above the defensible number.",
    },
    { type: "h2", text: "Appraisal, desktop, BPO or in-house model: who sets the lender's ARV", id: "valuation-types" },
    {
      type: "p",
      text: "Your comp grid is an argument. The lender's valuation is the ruling, and lenders reach it in four ways.",
    },
    {
      type: "table",
      caption: "How investor lenders value a flip, with what they published in October 2026",
      head: ["Method", "Who does it, and how", "What lenders published"],
      rows: [
        ["Appraisal with interior access", "A licensed appraiser inspects the house and reports its as-is and after-repair values", "Required at New Silver. Ridge Street Capital lists 2–7 days; Lima One advertises self-directed appraisals, valued in 5 days or less."],
        ["Desktop appraisal", "An appraiser works from records, listing data, photos and a floor plan, with no visit to the house or the comps (Fannie Mae Form 1004 Desktop)", "Offered by LendingOne for faster funding."],
        ["Broker price opinion (BPO)", "A real estate broker or agent estimates the probable selling price from condition, market and comparable sales", "Barred by federal law as the main basis of value on a mortgage for a home the buyer will live in. Business-purpose lenders set their own policy."],
        ["In-house valuation", "The lender's own team or model values the house; no third-party appraisal", "Kiavi advertises an ARV model weighing more than 20 factors per property; Easy Street sizes leverage from an in-house valuation."],
      ],
    },
    {
      type: "p",
      text: "Each method has a blind spot. A desktop appraiser or a model can't see that a comp has new windows and your house won't, so the scope and photos you send matter more. A full appraisal is slower but walks the house. Ask which method your lender uses, then send the scope, your closed comps and a way in.",
    },
    {
      type: "cta",
      text: "Have a deal with an ARV you can defend? Send the price, rehab budget and comps, and get your fix and flip terms fast.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund my flip",
    },
    { type: "h2", text: "How the lender turns ARV into a loan ceiling", id: "loan-caps" },
    {
      type: "p",
      text: "Fix-and-flip lenders size the loan two ways and lend the lower. The first is the request: a share of the purchase price plus a share of the rehab, with 85–100% of purchase and 100% of rehab published in October 2026. The second is the ceiling: a share of ARV. Published ceilings were 80% at Kiavi, 75% at Civic, Roc, New Silver and Easy Street, and 60–75% at RCN Capital depending on experience and scope. For how the three limits interact, see [our side-by-side of the three loan limits](/guides/ltv-vs-ltc-vs-arv).",
    },
    { type: "formula", text: "Loan = min(purchase price × advance rate + rehab budget × rehab rate, lender's ARV × cap)" },
    {
      type: "p",
      text: "RCN's October 2026 grid shows how far the cap moves with a track record. On light rehab, a borrower with no flips in three years is offered 85% of the price with a 70% ARV ceiling, and one to four flips earns 90% and 75%. Heavy rehab for a first-timer drops to 70% and 60%. Here is the example deal at the first two tiers and three lender valuations:",
    },
    {
      type: "table",
      caption: "Same deal, three valuations. Requests: 90% × $150,000 + $52,000 = $187,000, and 85% × $150,000 + $52,000 = $179,500. Caps: 75% or 70% of the lender's ARV. Cash shown is for purchase and rehab only, before points, closing costs and carry.",
      head: ["Lender's ARV", "1–4 flips: loan", "1–4 flips: your cash", "No flips: loan", "No flips: your cash"],
      rows: [
        ["$259,000 (matches yours)", "$187,000", "$15,000", "$179,500", "$22,500"],
        ["$245,000", "$183,750 (capped)", "$18,250", "$171,500 (capped)", "$30,500"],
        ["$235,000", "$176,250 (capped)", "$25,750", "$164,500 (capped)", "$37,500"],
      ],
    },
    {
      type: "p",
      text: "At your number, neither loan touches the cap. The new investor's cap starts to bind if the lender values the house below about $256,400, only $2,600 under your ARV; the borrower with one to four flips has room down to about $249,300. Past those lines, each $1,000 of lost value takes $700 or $750 off the loan, and the house will likely sell for less as well. A padded ARV doesn't buy you a bigger loan. It buys you a surprise at closing. The full closing-day math is in [our guide to the cash a flip takes](/guides/cash-needed-to-flip-a-house).",
    },
    {
      type: "p",
      text: "Floors apply too: a minimum ARV of $100,000 for a single-family house at RCN and $150,000 at New Silver, and at Lima One the house must cost, or be worth as-is, at least $100,000.",
    },
    { type: "h2", text: "When the lender's ARV comes in low, answer it before you accept it", id: "low-valuation" },
    {
      type: "ol",
      items: [
        "Ask which comps the valuer used. A low figure usually traces to an unrenovated sale or a different market area in their set.",
        "Send what's missing: renovated closed sales they skipped, the scope with its finish level, and photos of comparable finishes. Listings won't move it.",
        "If the value stands, rework the deal: a lower price, less scope the comps don't reward, or the extra cash from the table above.",
        "Recheck the exit. A low valuation often signals a lower sale price, so rerun the profit with [the flip calculator](/calculators/fix-and-flip).",
      ],
    },
    { type: "h2", text: "Send a comp package a valuer can't wave away", id: "comp-package" },
    {
      type: "ul",
      items: [
        "The finished house in one line: size, rooms, garage, lot and finish level.",
        "Three to six closed, renovated comps from the past 12 months, with sale date, price, distance and photos of the finishes.",
        "Your adjustment grid, the source of each rate, and the reconciled value with its weights.",
        "The sales and listings you excluded, and why.",
        "The scope of work, so the valuer prices the house you're building.",
      ],
    },
    {
      type: "p",
      text: "Fix-and-flip loans are business-purpose loans on investment property. A house that you or your relatives will occupy needs a residential mortgage instead.",
    },
    {
      type: "cta",
      text: "Comps done and the house under contract? Send us the numbers in about a minute and get your deal funded.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund my flip",
    },
  ],
  faqs: [
    {
      q: "How do you calculate ARV on a house flip?",
      a: "Find at least three closed sales of renovated homes like yours as it will be after the work, ideally from the past 12 months and the same market area. Adjust each sale price for the differences: subtract for features the comp has that your house won't, add for features it lacks. Then reconcile the adjusted prices into one figure, giving the most weight to the comps that needed the fewest adjustments.",
    },
    {
      q: "How many comps do you need to calculate ARV?",
      a: "Fannie Mae's appraisal rules require at least three closed comparable sales, and some flip lenders ask for more: New Silver's standard policy is six comparable sales inside a 5-mile radius that closed during the last 12 months. Three strong comps beat six weak ones, but four to six closed, renovated sales give a valuer fewer reasons to go looking for their own.",
    },
    {
      q: "Can you use active listings to calculate ARV?",
      a: "Only as support. Fannie Mae counts closed sales toward the minimum and treats listings and contracts as supporting data, and Ridge Street Capital's guidance says appraisers don't use active listings for value. An asking price shows what a seller hopes to get. Use listings to confirm the direction of the market, not to set the number.",
    },
    {
      q: "Does a fix and flip lender use my ARV or its own?",
      a: "Its own. The lender orders an appraisal, a desktop appraisal or another valuation, or runs an in-house model, and applies its cap to that figure. Your comp package can shape the result, especially for desktop and model valuations that never see the house, but the loan is sized on the lender's number, not yours.",
    },
    {
      q: "What percentage of ARV will a fix and flip lender lend?",
      a: "Published caps ran 70–80% of ARV in October 2026: Kiavi at 80%, with Civic, Roc, New Silver and Easy Street at 75%. Newer investors and heavy rehabs get less; RCN's grid drops to 70% for borrowers with no flips and 60% on heavy rehab. The loan is the lower of that cap and the purchase-plus-rehab request.",
    },
    {
      q: "What is the difference between a BPO and an appraisal?",
      a: "A broker price opinion is an estimate of the probable selling price prepared by a real estate broker or agent. An appraisal is prepared by a licensed appraiser and, unless it's a desktop report, includes an inspection of the house. Federal law bars a BPO as the main basis of value on a mortgage for a home the buyer will occupy; business-purpose lenders set their own rules.",
    },
  ],
  related: {
    programs: ["fix-and-flip", "hard-money", "brrrr"],
    guides: ["rehab-budget-for-lenders", "cash-needed-to-flip-a-house", "ltv-vs-ltc-vs-arv"],
  },
  sources: [
    { label: "Fannie Mae Selling Guide — B4-1.3-08, Comparable sales", url: "https://selling-guide.fanniemae.com/sel/b4-1.3-08/comparable-sales" },
    { label: "Fannie Mae Selling Guide — B4-1.3-09, Adjustments to comparable sales", url: "https://selling-guide.fanniemae.com/sel/b4-1.3-09/adjustments-comparable-sales" },
    { label: "Fannie Mae Selling Guide — B4-1.2-02, Desktop appraisals", url: "https://selling-guide.fanniemae.com/sel/b4-1.2-02/desktop-appraisals" },
    { label: "12 U.S.C. § 3355 — Broker price opinions (Cornell LII)", url: "https://www.law.cornell.edu/uscode/text/12/3355" },
    { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Kiavi — How to submit a scope of work", url: "https://kiavi.com/guides/submitting-an-sow" },
    { label: "Kiavi — How to write a fix and flip scope of work", url: "https://www.kiavi.com/blog/how-to-write-fix-and-flip-scope-of-work" },
    { label: "New Silver — Fix and flip loans", url: "https://www.newsilver.com/fix-and-flip-loans/" },
    { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Lima One — Fix and flip loans", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "LendingOne — Fix and flip loans", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
    { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
    { label: "Civic — Fix and flip loans", url: "https://www.civicfs.com/fix-and-flip/" },
    { label: "Ridge Street Capital — Fix and flip calculator (ARV comps)", url: "https://www.ridgestreetcap.com/blog/fix-and-flip-calculator" },
    { label: "Ridge Street Capital — Hard money loan requirements", url: "https://www.ridgestreetcap.com/blog/hard-money-loan-requirements" },
    { label: "Ridge Street Capital — Fix and flip loans for beginners", url: "https://www.ridgestreetcap.com/blog/fix-and-flip-loans-for-beginners" },
  ],
};

export default howToCalculateArv;
