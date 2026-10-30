import type { Metadata } from "next";
import { FlipCalculator } from "@/components/FlipCalculator";
import { CalculatorPage } from "@/components/templates/CalculatorPage";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Fix and Flip Calculator With Loan Sizing | Fund Your Deal" },
  description: "Run a flip before you offer: the loan a lender sizes on price, rehab and ARV, the cash you bring, profit after every cost, and a stress test on value.",
  alternates: alternatesFor("/calculators/fix-and-flip"),
};

export default function Page() {
  return (
    <CalculatorPage
      path="/calculators/fix-and-flip"
      crumb="Fix and flip"
      title="Fix and flip calculator: profit, loan size and cash to close"
      intro="Enter the contract price, the rehab cost and the resale value (ARV). This fix and flip calculator sizes the loan the way a hard money lender does, runs every cost through to the sale, and tells you the profit, the cash you need to close and finish, and whether the lender's ARV cap cuts the loan."
      question="Does this flip still make money after every cost, and how much of your own cash does it take to get it funded?"
      calculator={<FlipCalculator />}
      inputs={{
        heading: "Twelve numbers. Three of them decide the deal.",
        intro: "Resale value (ARV), rehab cost and months to resale move the result most, so get those right first. Then match the loan terms to your quote.",
        rows: [
          ["Contract price", "What you're paying under contract, or your top bid at auction. Buying an assignment? Add the wholesaler's fee to the price, since you pay it at closing either way."],
          ["Rehab cost", "Your scope of work in dollars, the same figure you'll submit for draws. Lenders release it in stages after each phase is inspected ([how draws work](/glossary#draws)). Spending beyond this number isn't in the loan, so treat overruns separately (see the stress test)."],
          ["Resale value (ARV)", "The price the finished house sells for, built from closed sales of renovated homes nearby ([ARV](/glossary#arv)). It does two jobs here: it's your sale price, and the lender's cap is a percentage of it. Use a figure an appraiser would sign, not the one you hope for."],
          ["Months to resale", "From the day you close the purchase to the day the sale funds: permits, work, listing and the buyer's escrow. ATTOM clocked the typical Q2 2026 flip at 161 days from purchase to resale, roughly 5.3 months. Interest and carry grow with every month."],
          ["Funded % of price", "How much of the price the lender advances at closing. Published caps ran 85–100% in October 2026, rising with experience: 90% at Roc Capital, Civic, New Silver and Easy Street, 92.5% at LendingOne, 95% at Lima One."],
          ["Funded % of rehab", "The share of the rehab cost inside the loan. Kiavi, Lima One, RCN Capital, LendingOne, Roc Capital, Civic and Easy Street all publish 100%."],
          ["Cap, % of ARV", "The ceiling on the whole loan, purchase plus rehab. Kiavi publishes 80%; Roc Capital, Civic, Easy Street and New Silver 75%; RCN Capital 60–75% by experience. New investors and heavy rehabs sit at the low end. When the cap bites, the result card says so and the gap is yours."],
          ["Note rate", "Annual, interest-only. Short-term investor loans carried a 10% median rate in 2025 HMDA data. Non-bank lenders came in at 10.45%, and half their loans priced between 9.75% and 11%. The lowest advertised floor is 7.75% (Lima One), so plan on a quote, not a floor."],
          ["Lender points", "Origination as a percent of the loan ([points](/glossary#points)). Easy Street publishes 0–2 points, New Silver 1–1.75, and Lima One lets you defer them to the exit. Flat charges such as Easy Street's $1,995 doc fee go in closing to buy."],
          ["Closing to buy", "Title, escrow, recording and lender fees at the purchase, as a percent of the price. Your title company's estimate beats any default, because transfer taxes vary by state."],
          ["Cost to sell", "Agent commission and your own closing costs on the sale, entered as a share of ARV. Leaving agent pay aside, Redfin estimates sellers spend 1–3% of the sale price to close, and commissions are negotiable. Selling to an investor or without a listing agent? Lower it."],
          ["Carry / mo", "What the house costs to own each month: taxes, insurance on a property under renovation, utilities, HOA dues and lawn care. Loan interest is calculated separately, so leave it out here."],
        ],
      }}
      howHeading="From loan to profit, line by line."
      howIntro="The loan comes first, because it sets how much cash you bring. Then every cost is stacked against the sale."
      formula="Profit = ARV − contract price − rehab cost − closing to buy − lender points − interest − carry − cost to sell"
      how={[
        ["Lender's loan", "Two limits, and the lower one wins. Cost limit: funded % of price × contract price, plus funded % of rehab × rehab cost. Value limit: cap, % of ARV × ARV. When the value limit is lower, the result card flags the cap."],
        ["Purchase and rehab advances", "The purchase advance funds at closing; the rest of the loan is rehab money paid out in draws. When the cap trims the loan, the cut comes off the rehab side and you pay for that share of the work."],
        ["Interest", "Purchase advance × note rate ÷ 12 × months to resale, plus the same charge on half the rehab advance. Half, because draws go out as work is finished, so on average about half the rehab money is outstanding."],
        ["Lender points", "Lender points % × the lender's loan, paid at closing."],
        ["Cash out of pocket", "Contract price + rehab cost + closing to buy + lender points + interest + carry − lender's loan. Cost to sell isn't in it; it comes out of the sale proceeds."],
        ["Profit", "ARV minus all seven costs above."],
        ["Profit on your cash", "Profit ÷ cash out of pocket. The per-year figure (same pace, per year) multiplies by 12 ÷ months to resale, so a four-month flip and an eleven-month flip can be compared fairly."],
        ["The badge", "“In the red as entered” at $0 profit or less, “Tight: under 25% on your cash” when profit is under 25% of your cash, and “Works: 25%+ on your cash” at 25% or more. It's the calculator's flag, not a lender rule."],
        ["70% rule", "70% × ARV − rehab: the old rule-of-thumb ceiling on your offer, shown for reference. The full cost model is the real test."],
      ]}
      sections={[
        {
          id: "worked-deal",
          eyebrow: "Worked deal",
          heading: "A first flip where the ARV cap sets the cash.",
          intro: "A $148,000 house, an $82,000 rehab and a lender that caps a newer investor at 70% of ARV. The calculator opens on this deal, so each line below matches what you see above.",
          example: {
            title: "WORKED DEAL · SEVEN-MONTH FLIP",
            rows: [
              ["Cost limit: 90% of price + 100% of rehab", "$215,200"],
              ["Value limit: 70% of $295,000", "$206,500"],
              ["Loan (the lower limit)", "$206,500"],
              ["Interest, 7 months at 9.99%", "$9,898"],
              ["Lender points (1.75%)", "$3,614"],
              ["Closing to buy, carry and cost to sell", "$26,655"],
              ["Cash out of pocket", "$44,492"],
            ],
            result: { label: "Profit", value: "$24,833" },
            note: "9.99% is our assumed rate, a hair under the 10% median that 2025 HMDA filings showed for short-term investor loans; 1.75 points is the top of New Silver's published range. Closing to buy (2.5%), cost to sell (6.5%) and carry ($540 a month) are our assumptions. Illustrative, not a quote.",
          },
          blocks: [
            { type: "p", text: "The deal: a dated three-bed that needs a roof, kitchen, baths and mechanicals. Contract price $148,000, rehab $82,000, and an ARV of $295,000 from renovated sales nearby. You expect the sale to fund seven months after you buy." },
            { type: "p", text: "The loan: the lender advances 90% of the price and funds the whole rehab, but holds a first-time flipper to 70% of ARV. Terms are 9.99% interest-only and 1.75 points." },
            {
              type: "ol",
              items: [
                "**Cost limit: $215,200.** 90% × $148,000 = $133,200 for the purchase, plus the full $82,000 rehab.",
                "**Value limit: $206,500.** 70% × $295,000. It's the lower figure, so it sets the loan. The $8,700 difference comes off the rehab side: draws cover $73,300 of the $82,000 budget and you pay for the remaining $8,700 of work.",
                "**Interest: $9,898.** The $133,200 purchase advance accrues for all seven months. On the $73,300 of draws, the calculator charges half, $36,650, as the average balance: ($133,200 + $36,650) × 9.99% ÷ 12 × 7 = $9,898.",
                "**Lender points: $3,614.** 1.75% × $206,500.",
                "**Closing to buy, carry and cost to sell: $26,655.** Closing to buy $3,700 (2.5% of the price), carry $3,780 ($540 × 7) and cost to sell $19,175 (6.5% of ARV).",
                "**Total cost: $270,167.** $148,000 + $82,000 + $9,898 + $3,614 + $26,655.",
                "**Profit: $24,833.** $295,000 − $270,167, or 8.4% of the sale price.",
                "**Cash out of pocket: $44,492.** Everything you pay before the sale, $250,992, less the $206,500 loan.",
                "**Profit on your cash: 55.8%.** $24,833 ÷ $44,492, or 95.7% at the same pace per year.",
              ],
            },
            { type: "p", text: "The 70% rule puts the ceiling offer at $124,500: 70% × $295,000 − $82,000. This contract is $23,500 over it. That alone doesn't kill the deal, but it tells you the margin for error is thin, which the stress test below confirms." },
            { type: "callout", title: "Why the rule and the cap line up", text: "A lender that caps at 70% of ARV and the 70% rule draw the same line. At the rule's $124,500 price, purchase plus rehab is $206,500, exactly the cap. Buy there and the cap stops binding: the loan is $194,050, your cash falls to $31,657 and profit roughly doubles to $50,118." },
          ],
        },
        {
          id: "stress-test",
          eyebrow: "Stress test",
          heading: "The number that decides it: a $15,000 miss on ARV.",
          intro: "On this deal the loan is a percentage of value, so profit and cash move together. Change one input at a time and watch both.",
          blocks: [
            {
              type: "table",
              caption: "The worked deal with one change per row. Every figure is the calculator's own output (illustrative).",
              head: ["What changes", "Profit", "Cash out of pocket", "Profit on your cash"],
              rows: [
                ["Nothing (as planned)", "$24,833", "$44,492", "55.8%"],
                ["ARV $280,000 ($15,000 lower)", "$11,298", "$54,502", "20.7%"],
                ["ARV $265,500 (10% lower)", "−$1,786", "$64,179", "Loss"],
                ["Sale funds in month 10, not month 7", "$18,971", "$50,354", "37.7%"],
                ["Rate 11% instead of 9.99%", "$23,833", "$45,492", "52.4%"],
                ["Lender caps at 75% of ARV, not 70%", "$24,427", "$36,198", "67.5%"],
                ["Price at the 70% rule ($124,500)", "$50,118", "$31,657", "158.3%"],
              ],
            },
            { type: "p", text: "**Value is the number that decides it.** Take $15,000 off the ARV and profit drops by more than half, from $24,833 to $11,298. Your cash climbs $10,010 at the same moment, because 70% of a lower value is a smaller loan. If the lender's valuation lands below yours, you find out before the first draw, not at the sale." },
            { type: "p", text: "**Break-even ARV is about $267,500,** 9.3% under plan. If honest comps could plausibly land there, renegotiate the price or walk." },
            { type: "p", text: "**Time costs $1,954 a month.** That's $1,414 of interest on the drawn balance plus $540 of holding. Three extra months take $5,862 off profit. Published flip loan terms run 6–24 months, so pick one with slack beyond your plan." },
            { type: "p", text: "**The cap moves your cash, not your profit.** At a 75% cap the loan covers the full $215,200 and your cash falls by $8,294, while profit dips slightly because the bigger loan carries more interest and points. Experience is what usually earns the higher cap: RCN Capital publishes 60–75% of ARV by tier." },
            { type: "p", text: "**Overruns are cash.** Don't model one by raising the rehab cost input, because that grows the loan too and lenders fund the approved scope. Instead, take the overrun off profit and stack it on top of your cash yourself. A $9,000 overrun here leaves $15,833 of profit and needs $53,492 of cash." },
            { type: "p", text: "For scale, ATTOM's Q2 2026 report put the typical flip's gross profit at $60,526, a 21.5% margin. That figure is resale price minus purchase price, nothing more: no rehab, financing, holding or selling costs. Don't hold your all-in profit up against it." },
          ],
        },
        {
          id: "fundable",
          eyebrow: "Fundable?",
          heading: "What a lender checks before it funds the flip.",
          intro: "Lenders don't publish a minimum profit. They publish limits. A fundable flip fits inside all of them, with time to spare.",
          blocks: [
            {
              type: "table",
              caption: "Ranges from the lender program pages in the sources below, October 2026. Each lender sets its own mix.",
              head: ["Limit", "What lenders published", "Worked deal"],
              rows: [
                ["Purchase advance", "85–100% of price, rising with experience", "90%: $133,200"],
                ["Rehab advance", "100% of the approved budget, in draws", "$73,300 after the cap"],
                ["ARV cap", "70–80%; 60–70% for new investors or heavy rehabs", "70%: binds by $8,700"],
                ["Loan size", "From $50,000 (Roc Capital, Civic) up to $5 million", "$206,500"],
                ["Term", "6–24 months, interest-only", "7 months planned, so take 12"],
                ["Credit score", "Minimums from 600 (Easy Street) to 660 (Lima One)", "Check yours before you offer"],
                ["Points and fees", "0–2 points, plus flat fees such as a $1,995 doc fee", "1.75 points: $3,614"],
              ],
            },
            { type: "p", text: "Read the result card the way a lender reads your file. **If the ARV cap note shows,** the loan is smaller than the percentages you entered and the difference is yours to fund. **If months to resale sits close to the term,** an extension fee or a rushed sale is the risk. **If cash out of pocket is more than you have,** the deal isn't deal-ready yet: renegotiate, bring in a partner, or ask about a higher-leverage tier." },
            { type: "p", text: "A “Works” badge isn't the same as fundable. The badge reads profit on your cash; the lender reads loan-to-cost, the ARV cap and your exit. On this deal the two agree: the loan sits at the 70% cap, and the flip stays profitable until value falls 9.3%." },
            { type: "p", text: "Need to close on time? RCN Capital quotes 10 business days for a flip, LendingOne 7–10 business days, and Kiavi as few as 7 days. A clean scope and a defensible ARV keep you on that clock; see [closing an investor loan fast](/guides/closing-an-investor-loan-fast) and [how much cash a flip really takes](/guides/cash-needed-to-flip-a-house)." },
            { type: "cta", text: "Deal survives the stress test? Get your flip funded. Applying takes about 60 seconds.", href: "/get-funding?loan=fix-and-flip", label: "Fund my flip" },
          ],
        },
        {
          id: "exit-plan",
          eyebrow: "Exit plan",
          heading: "If the sale math is thin, price the keep.",
          blocks: [
            { type: "p", text: "The same house has two exits: sell it, or rent it and refinance out of the rehab loan. Put the purchase and rehab into the [BRRRR calculator](/calculators/brrrr) to see how much of your cash a refinance would hand back." },
            { type: "p", text: "That refinance is usually a rental loan underwritten on the [debt service coverage ratio](/glossary#dscr) (DSCR): what the house rents for each month, divided by the monthly payment on the new loan. LendingOne's fix-to-rent program refinances at about 75% of ARV, which on this house is $221,250 against a $206,500 rehab loan to pay off." },
            { type: "p", text: "Check the timing before the flip term runs short. Most DSCR lenders make you own the house for roughly 90 days before they'll lend against the after-repair appraisal. Lima One skips its three-month wait if it made your rehab loan. More in [refinancing after a rehab](/guides/refinance-after-rehab)." },
            { type: "callout", title: "Investment property only", text: "Fix and flip loans are business-purpose loans. If you or your family plan to live in the house once it's finished, you need a residential mortgage instead." },
          ],
        },
      ]}
      tips={{
        heading: "Five ways to make a flip pencil.",
        items: [
          "**Negotiate the price first.** While the ARV cap binds, every $1,000 off the contract adds about $1,050 to profit and takes the same off your cash.",
          "**Build the comps before the lender does.** Closed, renovated sales matched on beds, baths, size and finish; list prices aren't comps. See [how to calculate ARV](/guides/how-to-calculate-arv).",
          "**Write a scope a lender will fund.** Line items, quantities and a contingency speed up draws and protect the budget. See [a rehab budget for lenders](/guides/rehab-budget-for-lenders).",
          "**Line up the work before you close.** Each month on this deal costs $1,954 in interest and holding, so permits, crews and materials should be ready on day one.",
          "**Price points and rate together.** On a seven-month hold, one point on $206,500 is $2,065, while a full percentage point of rate is about $990 of interest.",
        ],
      }}
      mistakes={{
        heading: "Where flip numbers mislead.",
        items: [
          "**Comps pulled from listings, or from the street's one top sale.** The appraiser works from closed sales, and the lender caps the loan against that value.",
          "**Starting the clock when the rehab ends.** Interest and holding run from the purchase closing until the sale funds.",
          "**Planning on an advertised floor.** Floors start at 7.75%; the 2025 HMDA median was 10%, and 10.45% at non-bank lenders.",
          "**Modeling an overrun as a bigger budget.** It inflates the loan. The lender funds the approved scope; the overrun is your cash.",
          "**Forgetting the cap shrinks with value.** A lower appraisal cuts the sale price and the loan at once.",
          "**Leaving flat fees out.** Doc, draw inspection and extension fees aren't in the rate. See [investor loan points and fees](/guides/investor-loan-points-and-fees).",
          "**Calling profit take-home.** The calculator is pre-tax. Ask a CPA how flip income is taxed in your situation.",
        ],
      }}
      faqHeading="Fix and flip questions"
      faqs={[
        { q: "How much will a lender lend on a fix and flip?", a: "The lower of two limits. The cost limit is a share of the price, 85–100% in programs published in October 2026, plus 100% of the rehab. The value limit is 70–80% of the after-repair value, or 60–70% for new investors and heavy rehabs. On a $148,000 house with an $82,000 rehab and a $295,000 ARV, a 70% cap sets the loan at $206,500." },
        { q: "How much cash do I need to flip a house with a hard money loan?", a: "Everything you pay before the sale, minus the loan: the down payment, any rehab the loan doesn't cover, buying costs, points, interest and holding costs. On the worked deal that comes to $44,492 for a $148,000 purchase, about 30% of the price, because the 70% ARV cap left $8,700 of the rehab unfunded. Selling costs come out of the sale." },
        { q: "What rate do fix and flip loans charge?", a: "Plan on roughly 9.75–11% from a non-bank lender: that's where half of their 2025 short-term investor loans priced in HMDA data, around a 10.45% median (10% across all lenders). Advertised floors start at 7.75%. Use your quote if you have one. On the worked deal, each full percentage point of rate adds about $990 of interest over a seven-month hold." },
        { q: "Should I still use the 70% rule for flips?", a: "As a filter, yes; as a verdict, no. The rule sets your maximum offer at ARV × 70%, less the rehab, which matches a lender that caps loans at 70% of ARV. But it ignores your rate, points, hold time and selling costs. The worked deal pays $23,500 over the rule's price and still clears $24,833, with a thin cushion." },
        { q: "What makes a fix and flip deal fundable?", a: "A loan that fits under the lender's limits and a timeline that fits inside its term. In practice: a cost-based loan at or under the ARV cap, or the cash to cover the gap; a loan size in the lender's range; a credit score above the 600–660 minimums lenders published; and months to resale well inside a 6–24 month term. Then the profit has to survive a realistic drop in value." },
        { q: "Why does my cash needed rise when ARV falls?", a: "Because the loan is capped at a percentage of ARV. While the cap binds, every $1,000 of lost value cuts the loan by $700 at a 70% cap, and you replace it with cash. On the worked deal a $15,000 lower ARV raises the cash you bring by $10,010 and cuts profit by more than half, from $24,833 to $11,298." },
        { q: "How long should my flip loan term be?", a: "Longer than your plan. In ATTOM's Q2 2026 data the typical flip ran 161 days from buying to reselling, a little over five months, and published flip terms run 6–24 months. If you plan seven months, a 12-month term leaves five months for permit delays, a slow sale or a buyer's financing falling through before an extension fee applies." },
        { q: "Does the profit figure include income tax?", a: "No. It's pre-tax profit: the sale price minus purchase, rehab, financing, holding and selling costs. Property taxes during the hold do count, as part of the monthly holding cost. Income tax on the profit turns on your entity and your circumstances, so get a CPA's view before you rely on an after-tax figure." },
      ]}
      sources={[
        { label: "Kiavi — Fix and flip loans (leverage, closing time)", url: "https://www.kiavi.com/loans/fix-and-flip" },
        { label: "Lima One — Fix and flip loans (rates from 7.75%, October 26, 2026)", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
        { label: "Lima One — Rental loans (seasoning)", url: "https://www.limaone.com/rental/" },
        { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
        { label: "LendingOne — Fix and flip loans", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
        { label: "LendingOne — Fix to rent loans (refinance at about 75% of ARV)", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
        { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
        { label: "Civic Financial Services — Fix and flip", url: "https://www.civicfs.com/fix-and-flip/" },
        { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
        { label: "New Silver — Fix and flip loans", url: "https://newsilver.com/fix-and-flip-loans/" },
        { label: "2025 HMDA rates on short-term investor loans, summarized by Crowdfunded Wealth (updated October 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
        { label: "ATTOM home flipping report, second quarter 2026 (released Oct. 1, 2026)", url: "https://www.attomdata.com/news/market-trends/flipping/home-flipping-profits-continue-gradual-two-year-decline/" },
        { label: "Redfin — Closing costs for sellers (May 26, 2026)", url: "https://www.redfin.com/blog/closing-costs-for-sellers/" },
      ]}
      updated="2026-10-26"
      related={["fix-and-flip", "hard-money", "brrrr"]}
    />
  );
}
