import type { Metadata } from "next";
import { FlipCalculator } from "@/components/FlipCalculator";
import { CalculatorPage } from "@/components/templates/CalculatorPage";

export const metadata: Metadata = {
  title: { absolute: "Fix and Flip Calculator: Profit and ROI | Fund Your Deal" },
  description: "Free fix and flip calculator with lender-style loan sizing: purchase and rehab advances, ARV cap, points, interest on draws. Profit, cash needed and ROI.",
  alternates: { canonical: "/calculators/fix-and-flip" },
};

export default function Page() {
  return (
    <CalculatorPage
      path="/calculators/fix-and-flip"
      crumb="Fix and flip"
      title="Fix and flip calculator"
      intro="This fix and flip calculator models a flip the way a lender sizes it: a share of the purchase price, most or all of the rehab, capped at a share of the after-repair value (ARV). Then it adds every cost through the sale to show your profit, the cash you bring and your return."
      calculator={<FlipCalculator />}
      inputs={{
        heading: "Twelve inputs: the deal, the loan and the costs.",
        intro: "The calculator opens on a $250,000 purchase. Replace each default with your numbers, starting with the three that decide most flips: ARV, rehab and months.",
        rows: [
          ["Purchase price", "The contract price. If you're paying a wholesaler's assignment fee, add it here."],
          ["Rehab budget", "The scope of work you'll submit to the lender, line by line. The calculator finances this figure at the % of rehab below, so an overrun you'd pay yourself has to be handled by hand (see common mistakes)."],
          ["After-repair value", "What the finished house will sell for, from closed sales of similar renovated homes nearby. The calculator uses it twice: as the sale price and as the base for the lender's ARV cap. Lenders apply the cap to their own valuation, not yours."],
          ["Months to sell", "From the purchase closing to the sale closing: permits, rehab, listing and the buyer's escrow. ATTOM's typical flip took 161 days, about 5.3 months, in the second quarter of 2026. Interest and holding costs scale with this number."],
          ["% of purchase", "The share of the price the lender advances. Lenders published 85–100% in October 2026, rising with experience; Roc Capital, Civic, New Silver and Easy Street published 90%."],
          ["% of rehab", "The share of the rehab budget financed. Most lenders published 100%, released in draws as each phase passes inspection."],
          ["Max % of ARV", "The lender's cap on the total loan. Published caps ran 70–80% of ARV, and 60–70% for new investors or heavy rehabs. When the cap binds, you bring the difference."],
          ["Interest rate", "Annual, interest-only. The median rate on 2025 non-bank short-term investor loans in HMDA data was 10.25%, with the middle half between 9.5% and 11%. Advertised floors started around 7.5%."],
          ["Points", "The origination fee as a percent of the loan. Lenders published 0–2 points; add flat fees, such as the $1,995 doc fee one lender lists, to buying costs."],
          ["Buying costs", "Title, escrow, recording and lender fees at purchase, as a percent of the price. The 2% default is a placeholder; use your title company's estimate."],
          ["Selling costs", "Agent commissions plus the seller's closing costs, as a percent of ARV. Redfin puts seller closing costs at 1–3% of the price before commissions. The default is 7% in total."],
          ["Holding / mo", "Property taxes, insurance, utilities, HOA dues and yard care for each month you own the house."],
        ],
      }}
      howHeading="From loan to profit: every result, explained."
      formula="Profit = ARV − (purchase + rehab + buying + points + interest + holding + selling)"
      how={[
        ["Loan amount", "The lower of what the lender funds against cost (a share of the purchase plus a share of the rehab) and its cap on the after-repair value. When the cap binds, you bring the difference."],
        ["Interest", "Interest-only on the purchase portion for the whole hold, and on about half the rehab money on average, because rehab funds are paid out in draws as work is finished."],
        ["Cash you bring", "Purchase, rehab, buying costs, points, interest and holding costs, minus the loan. Selling costs come out of the sale proceeds."],
        ["Profit", "After-repair value minus every cost: purchase, rehab, buying and selling costs, points, interest and holding."],
        ["Return on cash", "Profit divided by the cash you brought. Annualized scales it to 12 months so a 4-month flip and a 10-month flip compare fairly."],
        ["The verdict", "Loses money at zero profit or below; thin margin when return on cash is under 25%; healthy margin at 25% or more. A quick flag, not a lender test."],
        ["70% rule", "A quick screen: offer no more than 70% of ARV minus the rehab. Fine for a first look; the full cost model above is what lenders and experienced flippers use."],
      ]}
      sections={[
        {
          id: "worked-example",
          eyebrow: "Worked example",
          heading: "A $205,000 flip with a $27,133 profit, step by step.",
          intro: "Enter these figures in the calculator to follow along. Illustrative numbers, not a rate quote.",
          example: {
            title: "WORKED EXAMPLE · SIX-MONTH FLIP",
            rows: [
              ["Loan: 90% of price + 100% of rehab", "$254,500"],
              ["ARV cap: 75% of $350,000", "$262,500"],
              ["Points (1.5%)", "$3,818"],
              ["Interest, 6 months at 10.25%", "$11,249"],
              ["Buying (2%) + holding ($700/mo)", "$8,300"],
              ["Selling costs (7% of ARV)", "$24,500"],
              ["Cash you bring", "$43,867"],
            ],
            result: { label: "Profit", value: "$27,133" },
            note: "10.25% is the 2025 median for non-bank short-term investor loans in HMDA data; 1.5 points is inside the 0–2 point range lenders published. The costs to buy, hold and sell are our assumptions. Illustrative only — not a rate quote.",
          },
          blocks: [
            { type: "p", text: "The deal: buy at $205,000, spend $70,000 on the rehab and sell for $350,000 six months after closing. The loan advances 90% of the purchase and 100% of the rehab, capped at 75% of ARV, at 10.25% interest-only with 1.5 points. Buying costs are 2% of the price, selling costs 7% of ARV, and taxes, insurance and utilities $700 a month." },
            {
              type: "ol",
              items: [
                "**Loan: $254,500.** 90% × $205,000 = $184,500, plus 100% of the $70,000 rehab. The cap is 75% × $350,000 = $262,500, so it doesn't bind.",
                "**Interest: $11,249.** The $184,500 purchase advance accrues for all six months. Rehab money arrives in draws, so the calculator charges interest on half of it, $35,000, on average: ($184,500 + $35,000) × 10.25% ÷ 12 × 6 = $11,249.",
                "**Points: $3,818.** 1.5% × $254,500.",
                "**Buying, holding and selling: $32,800.** $4,100 (2% of the price) + $4,200 ($700 × 6) + $24,500 (7% of ARV).",
                "**Total cost: $322,867.** $205,000 + $70,000 + $3,818 + $11,249 + $32,800.",
                "**Profit: $27,133.** $350,000 − $322,867.",
                "**Cash you bring: $43,867.** Every cost before the sale, $298,367, minus the $254,500 loan. Selling costs come out of the sale proceeds.",
                "**Return on cash: 61.9%,** or 123.7% annualized. $27,133 ÷ $43,867, then × 12 ÷ 6.",
              ],
            },
            { type: "p", text: "The 70% rule would cap the offer at $175,000: 70% × $350,000 − $70,000. This deal pays $30,000 more than that, and the next section shows what that does to the margin for error." },
          ],
        },
        {
          id: "read-the-result",
          eyebrow: "Read the result",
          heading: "A 62% return on cash can still be a thin deal.",
          intro: "Return on cash measures leverage as much as the deal. Read it next to the profit margin and the break-even sale price.",
          blocks: [
            { type: "p", text: "The example's 61.9% return looks strong, and the calculator flags it as a healthy margin. But the profit is 7.8% of the sale price. Most of that return comes from borrowing 85% of the cost: when you bring $43,867 to a $298,367 project, any profit is a large percentage of your cash." },
            { type: "h3", text: "Three numbers to read together" },
            {
              type: "ul",
              items: [
                "**Profit as a share of ARV.** $27,133 ÷ $350,000 = 7.8%. This is your cushion against a lower sale price.",
                "**Break-even ARV.** The sale price where profit reaches zero: about $320,200 here, 8.5% below the $350,000 estimate. If closed comps could plausibly land that low, the deal has no room for error.",
                "**Annualized return.** Useful for comparing a 4-month flip with a 10-month one, but it assumes you could put the cash straight back to work at the same return.",
              ],
            },
            { type: "h3", text: "Stress-test it in the calculator" },
            {
              type: "table",
              caption: "Same deal, one change at a time (illustrative)",
              head: ["Scenario", "Profit", "Cash you bring", "Return on cash"],
              rows: [
                ["As modeled", "$27,133", "$43,867", "61.9%"],
                ["ARV 5% lower ($332,500)", "$11,066", "$48,784", "22.7%"],
                ["ARV 10% lower ($315,000)", "−$4,675", "$61,375", "Loss"],
                ["Sale takes 9 months, not 6", "$19,408", "$51,592", "37.6%"],
                ["Rehab runs 15% over ($10,500, paid in cash)", "$16,633", "$54,367", "30.6%"],
              ],
            },
            { type: "p", text: "A lower ARV hurts twice. The sale brings in less, and because the lender's cap is a percentage of ARV, the loan shrinks too: at $332,500 the 75% cap is $249,375, below the $254,500 the deal needs, so your cash rises by about $4,900 before the house is even listed. A 5% miss on value cuts the profit by 59%." },
            { type: "p", text: "To test an overrun, don't raise the rehab budget in the calculator; that raises the loan too, and a lender won't fund unbudgeted work. Subtract the overrun from profit and add it to your cash by hand, as in the last row." },
            { type: "h3", text: "How it compares with market data" },
            { type: "p", text: "ATTOM put the typical gross profit on flips sold in the second quarter of 2026 at $60,526, a 21.5% margin, and the typical flip took 161 days. ATTOM's gross profit is the resale price minus the purchase price. It leaves out rehab, financing, holding and selling costs, so a full-cost profit from this calculator will be well below it on the same house." },
          ],
        },
        {
          id: "rental-exit",
          eyebrow: "Plan B",
          heading: "If the flip doesn't pencil, price the rental exit.",
          blocks: [
            { type: "p", text: "Run the same purchase and rehab through the [BRRRR calculator](/calculators/brrrr). Instead of selling, you refinance into a long-term rental loan, usually a DSCR loan: one sized on the [debt service coverage ratio](/glossary#dscr), the property's monthly rent divided by its monthly payment of principal, interest, taxes, insurance and HOA dues (PITIA)." },
            { type: "p", text: "The refinance is sized on the appraised after-repair value, commonly at about 75% of it on fix-to-rent programs (LendingOne, October 2026), and the rent has to carry the new 30-year payment. Most lenders want about 90 days of ownership before they lend on the new value; some waive it when they made the rehab loan. Short-term fix and flip terms run 6–24 months, so decide on the exit before the term runs out." },
            { type: "callout", title: "Investment property only", text: "Fix and flip loans are business-purpose loans for property that neither you nor your family will live in. If you plan to move in after the renovation, you need a residential mortgage." },
            { type: "cta", text: "Deal survives the stress test? Apply in about 60 seconds for fast fix and flip funding.", href: "/get-funding?loan=fix-and-flip", label: "Get fix and flip funding" },
          ],
        },
      ]}
      tips={{
        heading: "Where flips win or lose money.",
        items: [
          "Get the ARV right: use sold comps within the last six months, not list prices. A 5% miss on ARV can erase most of the profit.",
          "Price the rehab with a line-item scope and a 10–15% contingency.",
          "Every extra month costs interest, taxes, insurance and utilities — schedule the work before you close.",
          "Watch the ARV cap: if the loan is capped, the extra cash comes from you, which lowers your return.",
          "Compare points and rate together: two points on a short hold can cost more than a higher rate.",
        ],
      }}
      mistakes={{
        heading: "Where flip estimates go wrong.",
        items: [
          "Pricing the ARV from list prices or the best sale on the street. Use closed sales of renovated homes matched on size, age and finish.",
          "Counting months from the end of the rehab. Interest and holding run from the purchase closing to the sale closing, listing time included.",
          "Using an advertised floor. Floors start around 7.5%, but the 2025 median on non-bank short-term investor loans was 10.25%.",
          "Raising the rehab input to model an overrun. The calculator finances it; your lender won't.",
          "Forgetting flat fees. Doc fees, draw inspection fees and extension fees don't show up in the rate.",
          "Reading return on cash without the margin. High leverage turns a small profit into a big percentage.",
          "Treating profit as take-home. The calculator is pre-tax; ask a CPA how flip profits are taxed in your situation.",
        ],
      }}
      faqs={[
        { q: "How much do fix and flip lenders lend?", a: "Lenders published 85–100% of the purchase price and 100% of the rehab budget in October 2026, capped at 70–80% of the after-repair value. New investors and heavy rehabs usually get the low end, and some lenders cap them at 60–70% of ARV. Your loan is the lower of the cost-based amount and the ARV cap." },
        { q: "What interest rate should I use in a flip calculator?", a: "Use a quote if you have one. In 2025 public loan data, the median rate on short-term investor loans was about 10%, with most non-bank loans between 9.5% and 11%; advertised floors start around 7.5% for the strongest deals. On a fully drawn $250,000 loan held six months, each percentage point adds about $1,250 of interest." },
        { q: "What selling costs should I assume?", a: "Agent commissions plus the seller's closing costs. Redfin puts seller closing costs at 1–3% of the price before commissions, and commissions vary by market and agreement. The calculator defaults to 7% of ARV in total. Lower it if you'll sell without a listing agent, and include transfer taxes where your state charges them." },
        { q: "Is the 70% rule still useful?", a: "As a first screen, yes: it caps your offer at 70% of ARV minus the rehab. In low-priced markets it can be too loose, because fixed costs and the dollar profit you need are a bigger share of a small deal. In high-priced markets it can be too strict. Run the full cost model before you make an offer." },
        { q: "What is a good profit on a fix and flip?", a: "There's no single standard, so set your floor before you fall for a house: a dollar minimum on small deals and a share of ARV on large ones. Then check the break-even sale price. If a realistic drop in value wipes out the profit, the margin is too thin. ATTOM's 21.5% typical margin excludes rehab and costs, so it isn't a like-for-like target." },
        { q: "How is ROI calculated on a fix and flip?", a: "Return on cash is profit divided by the cash you put in: every cost before the sale minus the loan. Annualized ROI multiplies it by 12 and divides by the months held. A $27,133 profit on $43,867 of cash over six months is 61.9%, or 123.7% annualized. Leverage inflates it, so read it alongside profit as a share of ARV." },
        { q: "How long does a typical house flip take?", a: "ATTOM's typical flip in the second quarter of 2026 took 161 days, a little over five months, from purchase to resale. Yours depends on permits, the scope of work, contractor availability and how fast the house sells. Published fix and flip loan terms run 6–24 months; choose one with room for delays, because each extra month adds interest and holding costs." },
        { q: "Does the calculator include taxes on my profit?", a: "No. Profit is before income tax. How a flip is taxed depends on your entity, how long you hold the property and how the IRS views your activity, so ask a CPA before you count on an after-tax number. Property taxes you pay while you own the house belong in the holding cost input." },
      ]}
      sources={[
        { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
        { label: "Lima One — Fix and flip loans", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
        { label: "Lima One — Rental loans (seasoning)", url: "https://www.limaone.com/rental/" },
        { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
        { label: "LendingOne — Fix and flip loans", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
        { label: "LendingOne — Fix to rent loans", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
        { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
        { label: "Civic Financial Services — Fix and flip", url: "https://www.civicfs.com/fix-and-flip/" },
        { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
        { label: "New Silver — Fix and flip loans", url: "https://newsilver.com/fix-and-flip-loans/" },
        { label: "Crowdfunded Wealth — Hard money loan rates 2026 (2025 HMDA data)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
        { label: "ATTOM — Q2 2026 U.S. Home Flipping Report (October 1, 2026)", url: "https://www.attomdata.com/news/market-trends/flipping/home-flipping-profits-continue-gradual-two-year-decline/" },
        { label: "Redfin — Closing costs for sellers", url: "https://www.redfin.com/blog/closing-costs-for-sellers/" },
      ]}
      updated="2026-10-23"
      related={["fix-and-flip", "hard-money", "brrrr"]}
    />
  );
}
