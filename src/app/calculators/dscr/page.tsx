import type { Metadata } from "next";
import { DscrCalculator } from "@/components/DscrCalculator";
import { CalculatorPage } from "@/components/templates/CalculatorPage";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "DSCR Calculator: Rent, Payment and Max Loan | Fund Your Deal" },
  description: "DSCR (debt service coverage ratio) calculator: rent ÷ PITIA the way lenders run it, the largest loan your rent supports, and how to lift a thin ratio.",
  alternates: alternatesFor("/calculators/dscr"),
};

export default function Page() {
  return (
    <CalculatorPage
      path="/calculators/dscr"
      crumb="DSCR"
      title="DSCR calculator: does the rent carry the loan?"
      intro="DSCR, short for [debt service coverage ratio](/glossary#dscr), weighs rent against the loan: a rental's rent for the month divided by that month's loan payment, counting principal and interest, the tax bill, insurance and any HOA dues ([PITIA](/glossary#pitia)). It's the test a rental lender runs on your exit, whether you're refinancing out of a rehab loan or buying a property to hold. This DSCR calculator runs it the lender's way, then shows the biggest loan the rent will carry."
      question="Will the rent qualify for the loan you need, whether that's a refinance that pays off your rehab loan or a rental purchase, and if not, how big a loan will it support?"
      calculator={<DscrCalculator />}
      inputs={{
        heading: "Nine inputs. Use the lender's numbers, not yours.",
        intro: "On a refinance, the Price or appraised value box takes the appraisal, and the Cash down box takes the equity you'll leave in.",
        rows: [
          ["Rent / mo", "The rent the lender will count, which is generally the lease or the appraisal's market rent, whichever is less. Kiavi allows the lease up to 110% of market rent. Roc Capital and Civic take only 90% of market rent when the property is vacant. For 2–4 units, add up every unit."],
          ["Price or appraised value", "Buying: the contract price. Refinancing: the value you expect the appraiser to report."],
          ["Cash down", "100 minus the loan-to-value ([LTV](/glossary#ltv)). Enter 20 for an 80% purchase loan, the usual cap lenders published in October 2026, or 25 for a 75% cash-out refinance, the most common cash-out cap. A few lenders went to 85% on purchases with 720–740+ credit."],
          ["Note rate", "Your quoted rate. LendingOne said average investor DSCR rates ran 7–9% in September 2026. In late October, Defy's best case was 7.375% (740+ credit, 75% LTV), and Total Quality Lending showed 6.875%–7.25% for 800 credit at 75% LTV, with 1.75 points on the lowest rate. Rates such as Roc Capital's 5.39% are advertised floors, not typical pricing."],
          ["Loan term", "Amortization: 30-year, or 40-year where the lender offers it. Spreading the loan over 480 payments shrinks principal and interest and lifts the ratio."],
          ["How it pays", "Principal and interest (fully amortizing), or interest only, which DSCR lenders typically allow for up to 10 years. Confirm which payment your lender qualifies you on before you bank on the better ratio."],
          ["Property tax / yr", "The bill after you buy or refinance, not the seller's. A homestead exemption on someone's own home doesn't follow the property into a rental."],
          ["Landlord insurance / yr", "A landlord policy quote for this address, plus flood cover if the lender asks for it."],
          ["HOA dues / mo", "Association dues, or 0 if there are none."],
        ],
      }}
      howHeading="Rent over PITIA, and the loan it supports."
      howIntro="Every result on the card, and how to reproduce it with a calculator and a pencil."
      formula="DSCR = monthly rent ÷ (principal and interest + taxes + insurance + HOA)"
      how={[
        ["DSCR", "Rent ÷ PITIA. At 1.00 the rent pays the payment exactly. At 1.20 it pays it with 20% left over. At 0.85 you're covering 15% of the payment yourself."],
        ["Loan size", "Price or appraised value × (1 − cash down %)."],
        ["Principal and interest", "Loan × r ÷ (1 − (1 + r)^−n), with r = annual rate ÷ 12 and n = 360 or 480 payments. Interest-only is simply loan × r."],
        ["PITIA", "Principal and interest + taxes ÷ 12 + insurance ÷ 12 + HOA."],
        ["Rent left after the payment", "Rent − PITIA. It's before vacancy, repairs and management; for those, open the [cash flow calculator](/calculators/rental-cash-flow)."],
        ["Largest loan at 1.00 / 1.25", "The ratio solved for the loan. Rent ÷ target, less taxes, insurance and HOA, is the most principal and interest can be. That payment is converted to a loan amount using the note rate, loan term and how-it-pays choice you entered."],
        ["The badge", "Under 1.00, “Rent falls short”: below most lenders' minimum. 1.00–1.24, “Rent just covers it”: meets many programs. 1.25 or higher, “Rent covers it with room”. The bar spans 0.75 to 1.75."],
      ]}
      sections={[
        {
          id: "worked-deal",
          eyebrow: "Worked deal",
          heading: "Refinancing out of a rehab: $265,000 value, 1.13 DSCR.",
          intro: "A finished single-family rehab you've decided to keep. The rehab loan is coming due, and a 75% cash-out refinance has to pay it off. The calculator opens on these numbers.",
          example: {
            title: "WORKED DEAL · REFINANCE OUT",
            rows: [
              ["Rent counted (lease vs. market, lower)", "$2,050"],
              ["Loan: 75% of $265,000", "$198,750"],
              ["Principal & interest at 7.75%", "$1,424"],
              ["Taxes ($3,060 a year)", "$255"],
              ["Insurance ($1,620 a year)", "$135"],
              ["PITIA", "$1,814"],
            ],
            result: { label: "DSCR", value: "1.13" },
            note: "30-year fixed at 7.75%, inside the 7–9% average LendingOne gave for investor DSCR loans in September 2026. Illustrative only, not a quote.",
            dscr: 1.13,
          },
          blocks: [
            { type: "p", text: "The house: a three-bed you renovated, now appraised at $265,000. The tenant signed at $2,100 a month; the appraiser's market rent is $2,050. Taxes run $3,060 a year and insurance $1,620, with no HOA. In the calculator, put $265,000 in the Price or appraised value box and 25 in the Cash down box; that's the 75% cash-out." },
            {
              type: "ol",
              items: [
                "**Rent counted: $2,050.** The $2,100 lease and the $2,050 market rent, whichever is lower.",
                "**Loan: $198,750.** $265,000 × 75%.",
                "**Principal and interest: $1,423.87.** r = 7.75% ÷ 12 = 0.6458% a month, so the first month's interest is $1,283.59; divide by (1 − 1.006458^−360) = 0.90148.",
                "**Taxes and insurance: $390 a month.** $255 + $135.",
                "**PITIA: $1,813.87.**",
                "**DSCR: 1.13.** $2,050 ÷ $1,813.87 = 1.130, with $236 a month of cash flow before reserves.",
              ],
            },
            { type: "h3", text: "Which limit sets the loan?" },
            { type: "p", text: "Work the ratio backward. At a 1.00 minimum the rent can carry principal and interest of $1,660 ($2,050 − $390), which is a loan of about $231,700. At the 1.05 that Roc Capital and Civic require, about $218,100. Both are above the $198,750 the 75% cap allows, so on this house **loan-to-value is the number that decides it**, as long as the house is leased." },
            { type: "formula", text: "Max P&I = rent ÷ minimum DSCR − monthly taxes, insurance and HOA. Max loan = max P&I ÷ r × [1 − (1 + r)^−n]" },
            { type: "p", text: "Now let the tenant move out before the appraisal. Counted at 90% of market, rent drops to $1,845 and the ratio to 1.02, under Roc and Civic's 1.05. At 1.05, $1,845 of rent supports only about $190,800, so the refinance shrinks by roughly $7,900 and that cash stays in the house. A signed lease before the appraisal is worth real money." },
          ],
        },
        {
          id: "sensitivity",
          eyebrow: "Sensitivity",
          heading: "Seven changes, priced in DSCR points.",
          intro: "The same refinance, one input at a time. Each row is the calculator's own arithmetic.",
          blocks: [
            {
              type: "table",
              caption: "$265,000 value, $198,750 loan unless noted, $390 a month of taxes and insurance (illustrative)",
              head: ["Change from the worked deal", "PITIA", "DSCR", "Largest loan at 1.00"],
              rows: [
                ["None: 75% LTV, 30-year, 7.75%", "$1,814", "1.13", "$231,710"],
                ["Vacant: rent at 90% of market ($1,845)", "$1,814", "1.02", "$203,095"],
                ["Lease counted under a 110%-of-market rule ($2,100)", "$1,814", "1.16", "$238,689"],
                ["Interest-only payments", "$1,674", "1.22", "$257,032"],
                ["40-year term", "$1,735", "1.18", "$245,337"],
                ["Rate 8.5% instead of 7.75%", "$1,918", "1.07", "$215,889"],
                ["70% LTV instead of 75% ($185,500 loan)", "$1,719", "1.19", "$231,710"],
                ["Insurance $2,400 a year instead of $1,620", "$1,879", "1.09", "$222,637"],
              ],
            },
            { type: "p", text: "**The rent figure matters most.** Leased versus vacant is a 0.11 swing, bigger than any change to the loan structure in the table. **Interest-only is the strongest structural lever,** lifting the ratio to 1.22, but only if the lender qualifies you on the interest-only payment. **Leaving 5% more equity in** gets you to 1.19 and costs $13,250 of cash-out." },
            { type: "p", text: "Reaching 1.25 on these terms takes $2,267 of rent, $217 above the appraiser's market figure. A rent the appraisal won't back doesn't survive underwriting, so change the structure instead of the estimate." },
          ],
        },
        {
          id: "fundable",
          eyebrow: "Fundable?",
          heading: "What gets funded: 1.00 at most lenders, 1.2 for the best pricing.",
          intro: "There's no single bar. Here's what lenders put in writing for 1–4 unit rentals over September and October 2026.",
          blocks: [
            {
              type: "table",
              caption: "Published DSCR thresholds. Credit, leverage and the property still decide your final terms.",
              head: ["Your DSCR", "What it means", "Published examples"],
              rows: [
                ["1.25 and up", "Clears every published 1–4 unit minimum with room for a rate or tax surprise", "Lenders on 5+ unit multifamily want 1.20–1.25"],
                ["1.20–1.24", "Top pricing tier at some lenders", "Lima One: strongest rate and leverage tier from 1.2"],
                ["1.05–1.19", "Clears every published 1–4 unit minimum", "Roc Capital and Civic: 1.05 minimum"],
                ["1.00–1.04", "Meets the most common minimum", "Lima One and RCN Capital: 1.00 minimum"],
                ["0.75–0.99", "Rent falls short of the payment; fewer programs", "Floor of 0.80 at Kiavi, 0.75 at LendingOne and Defy"],
                ["Under 0.75", "Rent isn't the qualifying test", "Easy Street: no minimum. Griffin: no-ratio to 75% LTV with 700+ credit. Angel Oak: below-1.0 and no-DSCR options"],
              ],
            },
            { type: "p", text: "The ratio is one gate of several. A fundable DSCR loan also fits the leverage cap (80% on most purchases, 75% on most cash-outs), the credit minimum (620–680 at the lenders above) and the loan size range, roughly $70,000 to $4.5 million. Plan for reserves as well: none at Kiavi, 3 months of PITIA at Defy, 3–9 months at Easy Street." },
            { type: "p", text: "Other loans set other bars. Roc Capital's stabilized bridge loans use a 1.10 DSCR as the exit test, and Roc and Civic test rental portfolios on net cash flow, at 1.05, instead of gross rent. Bridging into a rental loan? Run this calculator on the exit before you take the bridge; see [bridge loan exit strategies](/guides/bridge-loan-exit-strategies)." },
            { type: "cta", text: "Rent clears the bar? Get rental funding. Applying takes about 60 seconds.", href: "/get-funding?loan=dscr", label: "Get rental funding" },
          ],
        },
        {
          id: "other-deals",
          eyebrow: "Other deals",
          heading: "Purchases, short-term rentals and 2–4 units.",
          blocks: [
            { type: "h3", text: "Buying a rental" },
            { type: "p", text: "Enter the contract price as the price and your down payment as cash down. Most lenders cap purchases at 80% loan-to-value, so enter 20; a few go to 85% with 720–740+ credit. Your loan is whichever is smaller: the leverage cap or the largest loan your rent supports." },
            { type: "h3", text: "Short-term rentals" },
            { type: "p", text: "Enter the monthly income the lender will use as rent / mo. On a purchase that's usually an AirDNA projection; on a refinance, the last 12 months of bookings. Easy Street discounts projections by 25% for newer hosts and not at all for professional operators. Leverage runs lower: Lima One publishes 75% on purchases and 70% on cash-outs, with a 700 minimum score. More on [short-term rental loans](/short-term-rental-loans)." },
            { type: "h3", text: "Duplex to fourplex" },
            { type: "p", text: "Add each unit's counted rent, then enter the whole building's property tax, landlord insurance and HOA dues. DSCR lenders commonly take 2–4 units, and some go to 9 or 10." },
            { type: "callout", title: "Rentals only", text: "DSCR loans finance property you rent out. If you or your family will live in it, you need a residential mortgage instead." },
          ],
        },
      ]}
      tips={{
        heading: "Five ways to lift a thin ratio.",
        items: [
          "**Sign the lease before the appraisal.** Vacant on appraisal day, a house can be counted at just 90% of market.",
          "**Ask for interest-only or a 40-year term.** On the worked refinance, 1.22 and 1.18, up from 1.13.",
          "**Leave more equity in.** Here each 5 points of LTV is worth about 0.06 of DSCR.",
          "**Shop the insurance.** It sits in the payment at full cost: $780 a year more takes this ratio from 1.13 to 1.09.",
          "**Buy the rate down if you'll hold.** At 7.0% instead of 7.75%, the worked refinance reaches 1.20.",
        ],
      }}
      mistakes={{
        heading: "Where DSCR math goes wrong.",
        items: [
          "**Using the lease when market rent is lower.** The lender counts whichever is less.",
          "**Copying the seller's tax bill.** Your bill after the sale or refinance is the one in PITIA.",
          "**Forgetting HOA dues or flood cover.** Both belong in the payment.",
          "**Assuming the loan is whatever the rent supports.** It's the smaller of the DSCR limit and the LTV cap.",
          "**Treating the ratio as profit.** 1.13 here is $236 a month before vacancy, repairs and management.",
          "**Planning on an advertised floor.** Floors are for the strongest files. Price the deal on a quote.",
        ],
      }}
      faqHeading="DSCR questions"
      faqs={[
        { q: "How do you calculate DSCR for a rental property?", a: "Divide the monthly rent the lender counts by the monthly payment: principal and interest, plus a twelfth of the annual taxes and insurance, plus HOA dues. On a $198,750 loan at 7.75% over 30 years with $390 a month of taxes and insurance, PITIA is $1,814. With $2,050 of rent, DSCR is 1.13. Most 1–4 unit lenders use this gross-rent version." },
        { q: "What is a good DSCR for a refinance?", a: "1.00 meets the most common published minimum, and 1.05 clears Roc Capital and Civic. Lima One saves its strongest rate and leverage tier for 1.2 and up. Aim for room above your lender's line: on the worked refinance, a vacant appraisal, a higher rate or a pricier insurance policy each took 0.04 to 0.11 off the ratio." },
        { q: "Will a lender fund a DSCR under 1.00?", a: "Yes, at some lenders. Kiavi published a 0.80 minimum, LendingOne and Defy 0.75, and a few lenders offer no-ratio programs, such as Griffin up to 75% LTV with 700+ credit. Under 1.00 you top up the payment from your own pocket every month; at 0.90 on an $1,800 payment, that's $180." },
        { q: "How much can I borrow on a DSCR loan?", a: "The smaller of two numbers. One is the leverage cap: usually 80% of the price when you buy and 75% of value when you cash out. The other is what the rent supports: rent ÷ the minimum DSCR, minus taxes, insurance and HOA, turned into a loan at your rate and term. On the worked refinance the rent supports $231,700 at 1.00, so the 75% cap of $198,750 decides it." },
        { q: "Does a vacant property lower my DSCR?", a: "It can. Without a lease the lender uses the appraiser's market rent, and Roc Capital and Civic count only 90% of it. On the worked refinance that takes counted rent from $2,050 to $1,845 and the ratio from 1.13 to 1.02, below those lenders' 1.05 minimum. A lease signed at market rent before the appraisal avoids the discount." },
        { q: "Do lenders use the interest-only payment to calculate DSCR?", a: "It depends on the lender and the product, so ask before you count on it. Interest-only periods on DSCR loans usually run up to 10 years. On the interest-only payment the worked refinance rises from 1.13 to 1.22; once principal payments start, the ratio falls back to the amortizing figure. The how-it-pays switch in the calculator shows both." },
        { q: "Is DSCR the same as cash flow?", a: "No. Lenders divide gross rent by PITIA, and vacancy, repairs, management and capital reserves never enter it. The worked refinance's 1.13 is $236 a month before those costs, and they can eat all of it. The ratio tells you whether the loan qualifies; the rental cash flow calculator tells you what the property actually pays you." },
        { q: "What DSCR do I need to refinance out of a bridge or rehab loan?", a: "Your exit lender's minimum: usually 1.00 for 1–4 units, and 1.05 at Roc Capital and Civic. Some bridge programs build the test in; Roc's stabilized bridge loans use a 1.10 DSCR exit. Run the exit before you close the short-term loan, with the rent an appraiser will support and a refinance rate from a current quote." },
      ]}
      sources={[
        { label: "Kiavi — DSCR loans (0.80 minimum, rent rule, reserves)", url: "https://www.kiavi.com/loans/dscr" },
        { label: "Lima One — Rental loans (1.0 minimum, 1.2 pricing tier, LTV caps)", url: "https://www.limaone.com/rental/" },
        { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
        { label: "Lima One — Multifamily loans", url: "https://www.limaone.com/multifamily/" },
        { label: "Roc Capital — Single-property rentals (vacant rent at 90%)", url: "https://roccapital.com/single-property-rentals" },
        { label: "Roc Capital — Rental portfolios", url: "https://roccapital.com/rental-portfolios" },
        { label: "Roc Capital — Stabilized bridge (1.10 exit DSCR)", url: "https://roccapital.com/stabilized-bridge" },
        { label: "Civic Financial Services — Rental loans", url: "https://www.civicfs.com/rental/" },
        { label: "Civic Financial Services — Multifamily bridge", url: "https://www.civicfs.com/multifamily-bridge-loan/" },
        { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
        { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
        { label: "LendingOne — How DSCR rates are set (September 22, 2026)", url: "https://lendingone.com/insight/how-are-dscr-loan-interest-rates-determined/" },
        { label: "Defy Mortgage — DSCR loans (0.75 minimum, reserves)", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
        { label: "Defy Mortgage — DSCR loan rates (October 23, 2026)", url: "https://defymortgage.com/dscr-loan-rates/" },
        { label: "Total Quality Lending — DSCR rates (October 26, 2026)", url: "https://www.totalqualitylending.com/loans/dscr/rates" },
        { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
        { label: "Easy Street Capital — Short-term rental financing", url: "https://www.easystreetcap.com/short-term-rental-financing/" },
        { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
        { label: "Angel Oak — Investor cash flow program", url: "https://angeloakms.com/programs/investor-cash-flow-mortgage-program/" },
        { label: "OfferMarket — 40-year DSCR loans", url: "https://offermarket.us/blog/40-year-dscr-loan" },
      ]}
      updated="2026-10-26"
      related={["dscr", "cash-out-refinance", "brrrr"]}
    />
  );
}
