import type { Metadata } from "next";
import { BrrrrCalculator } from "@/components/BrrrrCalculator";
import { CalculatorPage } from "@/components/templates/CalculatorPage";

export const metadata: Metadata = {
  title: { absolute: "BRRRR Calculator: Cash Back and Cash Left In | Fund Your Deal" },
  description: "Free BRRRR calculator: rehab loan costs, the cash-out refinance on the after-repair value, cash back, cash left in, DSCR, cash flow and cash-on-cash.",
  alternates: { canonical: "/calculators/brrrr" },
};

export default function Page() {
  return (
    <CalculatorPage
      path="/calculators/brrrr"
      crumb="BRRRR"
      title="BRRRR calculator"
      intro="Buy, rehab, rent, refinance, repeat. This BRRRR calculator models both loans: the short-term rehab loan, then the long-term DSCR refinance, a rental loan sized on the [debt service coverage ratio](/glossary#dscr): monthly rent divided by the monthly payment of principal, interest, taxes, insurance and HOA dues (PITIA). It shows how much cash comes back and how much stays in."
      calculator={<BrrrrCalculator />}
      inputs={{
        heading: "Eighteen inputs across three stages.",
        intro: "Buy and rehab, refinance, then rent. The calculator opens on a $180,000 purchase; replace each default with your deal.",
        rows: [
          ["Purchase price and rehab budget", "The contract price and the scope of work you'll submit to the rehab lender. Both are financed at the rehab loan percentage."],
          ["Rehab loan (% of cost)", "The share of purchase plus rehab the short-term lender advances; the calculator applies one percentage to both. Fix-to-rent programs published up to 95% of cost and 100% of the rehab in October 2026, and 85–90% of the purchase is more typical for newer investors."],
          ["Rehab loan rate and points", "The interest-only rate and origination points on the short-term loan. The 2025 median on non-bank short-term investor loans was 10.25%, and lenders published 0–2 points."],
          ["Months until refinance", "From the purchase closing to the refinance closing: rehab, leasing, the appraisal and the new loan. Many DSCR lenders want about 90 days of ownership before they lend on the new value; Lima One requires three months, waived when it made the rehab loan."],
          ["Buying costs", "Title, escrow, recording and lender fees at purchase, as a percent of the price."],
          ["After-repair value", "What the appraiser will say the finished house is worth, based on closed sales of renovated comparables. The refinance is sized on this number."],
          ["Cash-out LTV", "The refinance loan as a percent of ARV. Lenders published 70–80% on DSCR cash-out refinances in October 2026, most at 75%, and less for credit scores near the minimum."],
          ["DSCR loan rate", "The 30-year rate on the refinance. The median on 2025 30-year investor mortgages was 7.375%, and Defy Mortgage's published pricing grid ran 6.25%–7.875% in September 2026. The calculator amortizes over 30 years."],
          ["Refinance costs", "Closing costs on the new loan as a percent of it: origination, appraisal, title and fees. The 3% default is a placeholder; use the lender's fee sheet."],
          ["Monthly rent", "The rent the DSCR lender will count, usually the lower of the lease and the appraiser's market rent. Lease the house before the refinance if you can."],
          ["Taxes, insurance and HOA", "Annual taxes and insurance and monthly dues after the renovation. They're part of the new payment (PITIA) and of your carrying cost during the rehab."],
          ["Vacancy", "The share of rent lost to empty months and turnover. The national rental vacancy rate was 7.3% in the second quarter of 2026 (Census Bureau); your market and property type can differ widely."],
          ["Repairs & capex", "A reserve for routine repairs and big replacements, as a percent of rent. A full renovation lowers near-term capital spending; it doesn't remove it."],
          ["Management", "A property manager's fee as a percent of rent. Include it even if you self-manage; your time has a cost."],
        ],
      }}
      howHeading="From cash in to cash back: every result, explained."
      formula="Cash left in = total project cost − new DSCR loan"
      how={[
        ["Cash in at purchase", "Purchase, rehab, buying costs, points, interest during the rehab and carrying costs, minus the rehab loan."],
        ["Refinance loan", "The after-repair value times the cash-out loan-to-value — lenders published about 75% in October 2026."],
        ["Cash back", "The new loan minus the rehab-loan payoff and refinance closing costs."],
        ["Cash left in", "Cash in minus cash back. Zero or less is a full BRRRR: you've recovered everything you put in."],
        ["Total project cost", "Purchase, rehab, buying costs, points, rehab-loan interest, carry and refinance costs. Subtract the new loan and you get cash left in directly; the rehab loan cancels out."],
        ["DSCR after refinance", "Rent divided by the new loan's full payment (PITIA). Below 1.00, many lenders will cut the loan size."],
        ["Cash-on-cash", "A year of cash flow after vacancy, repairs and management, divided by the cash left in the deal. It shows ∞ when nothing is left in."],
        ["The verdict", "Full BRRRR when cash left in is zero or less; most cash recovered when under a quarter of your cash stays in; much cash stays in above that."],
      ]}
      sections={[
        {
          id: "worked-example",
          eyebrow: "Worked example",
          heading: "A $130,000 house that returns most of the cash.",
          intro: "Enter these figures in the calculator to follow along. Illustrative numbers, not a rate quote.",
          example: {
            title: "WORKED EXAMPLE · FIVE-MONTH BRRRR",
            rows: [
              ["Rehab loan: 90% of $175,000", "$157,500"],
              ["Points, interest, buying costs, carry", "$12,524"],
              ["Cash in", "$30,024"],
              ["DSCR loan: 75% of $245,000", "$183,750"],
              ["Cash back after payoff and 3% costs", "$20,738"],
              ["DSCR on $2,050 rent", "1.27"],
              ["Cash flow after vacancy, repairs, management", "$10 / mo"],
            ],
            result: { label: "Cash left in the deal", value: "$9,287" },
            note: "Rehab loan at 10.25% with 1.5 points for five months; refinance at 7.375% over 30 years. Taxes $2,700 and insurance $1,380 a year; 5% vacancy, 8% repairs and capex, 8% management. Illustrative only — not a rate quote.",
            dscr: 1.27,
          },
          blocks: [
            { type: "p", text: "The deal: buy at $130,000 with $45,000 of work, and refinance five months later when the house appraises at $245,000 and rents for $2,050. The rehab loan covers 90% of cost at 10.25% with 1.5 points. The DSCR refinance lends 75% of ARV at 7.375% over 30 years, with 3% closing costs. Taxes are $2,700 a year and insurance $1,380." },
            { type: "h3", text: "Stage 1: buy and rehab" },
            {
              type: "ol",
              items: [
                "**Rehab loan: $157,500.** 90% × ($130,000 + $45,000).",
                "**Interest: $5,862.** Rehab money is drawn as work is done, so the calculator charges interest on the $117,000 purchase advance plus half the $40,500 rehab advance: $137,250 × 10.25% ÷ 12 × 5 = $5,861.72.",
                "**Points, buying costs and carry: $6,663.** $2,363 of points (1.5% × $157,500), $2,600 of buying costs (2% × $130,000) and $1,700 of taxes and insurance ($340 a month × 5).",
                "**Cash in: $30,024.** $175,000 + $5,862 + $6,663 − $157,500.",
              ],
            },
            { type: "h3", text: "Stage 2: refinance" },
            {
              type: "ol",
              items: [
                "**New loan: $183,750.** 75% × $245,000.",
                "**Cash back: $20,738.** $183,750 − $157,500 rehab payoff − $5,513 of refinance costs (3%).",
                "**Cash left in: $9,287.** $30,024 − $20,738. You've recovered 69% of what you put in.",
              ],
            },
            { type: "h3", text: "Stage 3: rent" },
            {
              type: "ol",
              items: [
                "**New payment (PITIA): $1,609.** $1,269 of principal and interest + $225 of taxes + $115 of insurance.",
                "**DSCR: 1.27.** $2,050 ÷ $1,609.12 = 1.274, above the 1.20 tier where Lima One publishes its best pricing.",
                "**Cash flow: $10 a month.** $2,050 − $1,609 − $431 (21% of rent for vacancy, repairs and management). That's 1.3% cash-on-cash on the $9,287 left in.",
              ],
            },
          ],
        },
        {
          id: "the-shortcut",
          eyebrow: "The shortcut",
          heading: "Cash left in = what the project cost − the new loan.",
          intro: "Write out cash in and cash back and the rehab loan cancels. That one line explains most BRRRR outcomes.",
          blocks: [
            { type: "formula", text: "Cash left in = purchase + rehab + buying costs + points + interest + carry + refinance costs − new loan" },
            { type: "p", text: "On the example: $130,000 + $45,000 + $2,600 + $2,363 + $5,862 + $1,700 + $5,513 = $193,037 of total cost. Subtract the $183,750 refinance and $9,287 stays in. Three things follow." },
            {
              type: "ul",
              items: [
                "**Rehab-loan leverage changes your cash up front, not what's left at the end.** At 85% of cost instead of 90%, cash in rises from $30,024 to $38,317, while cash left in falls slightly, from $9,287 to $8,830, because a smaller loan costs less in points and interest.",
                "**A full BRRRR needs the whole project inside the refinance.** At 75% loan-to-value that's 75% of ARV, or $183,750 here. Holding everything else equal, a purchase price of about $121,300, $8,700 less, would bring all your cash back; so would an appraisal of about $257,800.",
                "**Time is a cost line.** Each extra month before the refinance adds about $1,512 here: $1,172 of rehab-loan interest plus $340 of taxes and insurance. Refinancing in month 8 instead of month 5 leaves $13,824 in the deal instead of $9,287.",
              ],
            },
            { type: "p", text: "That's also why a flip and a BRRRR price the same house differently: a flip's ceiling comes from the sale price (see the [70% rule](/guides/70-percent-rule)), a BRRRR's from the refinance." },
          ],
        },
        {
          id: "read-the-result",
          eyebrow: "Read the result",
          heading: "More cash out means less cash flow. Pick which one the deal is for.",
          intro: "The badge tracks how much cash you recover. The DSCR and cash flow tell you whether the property can carry the refinance you chose.",
          blocks: [
            { type: "p", text: "The refinance amount trades directly against cash flow. The same example at two loan-to-values:" },
            {
              type: "table",
              caption: "Same $245,000 appraisal and $2,050 rent; refinance at 7.375% over 30 years with 3% costs (illustrative)",
              head: ["Refinance at", "New loan", "Cash left in", "DSCR", "Cash flow / mo", "Cash-on-cash"],
              rows: [
                ["75% of ARV", "$183,750", "$9,287", "1.27", "$10", "1.3%"],
                ["70% of ARV", "$171,500", "$21,169", "1.34", "$95", "5.4%"],
              ],
            },
            { type: "p", text: "Lenders underwrite the DSCR, not your cash flow. Published minimums for 1–4 unit rentals sat between 0.75 and 1.05 in September–October 2026, and Lima One's best pricing starts at 1.20 (more in [what DSCR lenders look for](/calculators/dscr#what-lenders-look-for)). A refinance that clears 1.27 can still leave you $10 a month after reserves, so decide whether this BRRRR is for recycling cash or for income, and size the refinance to match." },
            { type: "p", text: "If the ratio is tight, check the largest loan the rent supports in the [DSCR calculator](/calculators/dscr): enter the ARV as the purchase price and 25 as the down payment. Below 1.00, many lenders cut the loan to fit the rent, which leaves more of your cash in the deal." },
            { type: "p", text: "Cash-on-cash reads ∞ when nothing is left in. Any positive cash flow on zero invested is an infinite return, which says more about the formula than the deal; judge those deals on cash flow in dollars." },
          ],
        },
        {
          id: "timing",
          eyebrow: "Timing",
          heading: "Seasoning decides when the refinance can use the new value.",
          blocks: [
            { type: "p", text: "Most DSCR lenders want about 90 days of ownership before a cash-out based on the appraised value, and some cap the loan at your cost basis until then. Lima One requires three months but waives it when it made the rehab loan. Lenders also pay you to stay in-house: LendingOne published a 0.5% rate discount and 50% off origination fees when its fix-to-rent borrowers refinance with it." },
            { type: "p", text: "Set months until refinance to at least the seasoning period, plus the time it takes to lease the house and close the new loan. For the published rules and how cost-basis caps work, see [cash-out refinance seasoning](/guides/dscr-cash-out-refinance-seasoning)." },
            { type: "callout", title: "Investment property only", text: "A BRRRR property is a rental. Neither the rehab loan nor the DSCR refinance can finance a home you or your family will live in; that needs a residential mortgage." },
            { type: "cta", text: "Planning both loans? Apply in about 60 seconds and get BRRRR funding fast.", href: "/get-funding?loan=brrrr", label: "Get BRRRR funding" },
          ],
        },
      ]}
      tips={{
        heading: "What makes or breaks a BRRRR.",
        items: [
          "The appraisal decides everything: the refinance is sized on the appraiser's value, not yours.",
          "Check seasoning before you buy: many lenders want about 90 days of ownership before a cash-out on the full appraised value, or cap the loan at your cost until then.",
          "Line up the long-term lender at the start; some waive seasoning when they also made the rehab loan.",
          "Stress-test the DSCR at a higher rate: a refinance that's 0.95 instead of 1.05 can shrink the loan.",
          "Lease the property before the refinance — a signed lease supports the rent the lender uses.",
        ],
      }}
      mistakes={{
        heading: "Where BRRRR estimates go wrong.",
        items: [
          "Using your own ARV. The refinance is sized on the appraiser's value; run a lower ARV before you commit.",
          "Setting months until refinance to the rehab schedule alone. Add leasing, the seasoning period and the refinance closing.",
          "Counting a rent you haven't proven. The lender uses the lower of the lease and the appraiser's rent schedule.",
          "Leaving out refinance costs. Origination, appraisal, title and fees come out of your cash back.",
          "Judging the deal on DSCR alone. A ratio that satisfies a lender can leave little cash flow after vacancy, repairs and management.",
          "Ignoring work outside the approved budget. You pay for it in cash, and it adds to cash left in dollar for dollar unless the appraisal rises with it.",
        ],
      }}
      faqs={[
        { q: "How much can I cash out in a BRRRR refinance?", a: "Lenders published 70–80% of the appraised value on DSCR cash-out refinances in October 2026, most at 75%, with lower caps near the credit minimum. What reaches your account is that loan minus the rehab-loan payoff and refinance costs. On a $245,000 appraisal at 75%, with a $157,500 payoff and 3% costs, that's $20,738." },
        { q: "How long do I have to wait to refinance?", a: "About 90 days of ownership is typical before a lender will base a cash-out on the new appraised value; Lima One publishes three months. Inside that window some lenders cap the loan at your cost basis. Several waive seasoning when they made the rehab loan, and some rehab lenders offer a delayed purchase refinance within 6 months if you bought with cash." },
        { q: "What if the property appraises low?", a: "The refinance shrinks and more of your cash stays in the deal. At 75% loan-to-value, a $15,000 shortfall cuts the new loan by $11,250 and your cash back by about $10,900 after 3% costs. Build a cushion into your ARV, document the improvements for the appraiser and have your comparable sales ready." },
        { q: "Can I do a BRRRR with one loan?", a: "Yes. Some lenders offer single-close fix-to-rent loans that convert into a long-term rental loan once the work is done, and others pair their own rehab and rental loans. One lender published a 0.5% rate discount and 50% off origination fees for staying in-house. The catch is less choice: your long-term terms are largely set before the rehab starts." },
        { q: "What makes a good BRRRR deal?", a: "The refinance returns most or all of your cash and the rent still covers the new payment with room to spare. Check three numbers: cash left in, the DSCR after the refinance against the lender's minimum (1.00 at many lenders), and cash flow after vacancy, repairs and management. Recovering every dollar while losing money each month just moves the cost." },
        { q: "Does the rehab loan amount change my cash left in?", a: "Very little. Cash left in equals the project's total cost minus the new loan, so the rehab loan cancels out except for its own points and interest. Borrowing less up front means more cash in at purchase and slightly less left in afterward: in the example, 85% of cost instead of 90% adds $8,293 at purchase and trims cash left in by $457." },
        { q: "What DSCR do I need for the BRRRR refinance?", a: "It depends on the lender. Published minimums for 1–4 unit rentals ranged from 0.75 (LendingOne, Defy) and 0.80 (Kiavi) to 1.00 (Lima One, RCN Capital) and 1.05 (Roc Capital, Civic) in September–October 2026, and Defy wants 1.00 on a cash-out. If the rent can't carry the full loan, the lender may lend less, leaving more cash in the deal." },
      ]}
      sources={[
        { label: "LendingOne — Fix to rent loans", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
        { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
        { label: "Lima One — Rental loans (DSCR tiers, seasoning, cash-out limits)", url: "https://www.limaone.com/rental/" },
        { label: "Lima One — Fix and flip loans", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
        { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
        { label: "Kiavi — Fix and flip loans (delayed purchase refinance)", url: "https://www.kiavi.com/loans/fix-and-flip" },
        { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
        { label: "Civic Financial Services — Rental loans", url: "https://www.civicfs.com/rental/" },
        { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
        { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
        { label: "Defy Mortgage — DSCR loan rates (September 21, 2026)", url: "https://defymortgage.com/dscr-loan-rates/" },
        { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
        { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
        { label: "Crowdfunded Wealth — Hard money loan rates 2026 (2025 HMDA data)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
        { label: "U.S. Census Bureau — Residential vacancies and homeownership, Q2 2026 (July 28, 2026)", url: "https://www.census.gov/housing/hvs/files/currenthvspress.pdf" },
      ]}
      updated="2026-10-23"
      related={["brrrr", "fix-and-flip", "dscr"]}
    />
  );
}
