import type { Metadata } from "next";
import { DscrCalculator } from "@/components/DscrCalculator";
import { CalculatorPage } from "@/components/templates/CalculatorPage";

export const metadata: Metadata = {
  title: { absolute: "DSCR Calculator: Debt Service Coverage Ratio | Fund Your Deal" },
  description: "Free DSCR calculator: rent ÷ PITIA the way rental lenders figure it, with cash flow and the largest loan your rent supports at a 1.00 or 1.25 ratio.",
  alternates: { canonical: "/calculators/dscr" },
};

export default function Page() {
  return (
    <CalculatorPage
      path="/calculators/dscr"
      crumb="DSCR"
      title="DSCR calculator"
      intro="DSCR, the [debt service coverage ratio](/glossary#dscr), is a rental property's monthly rent divided by its monthly payment: principal, interest, taxes, insurance and HOA dues, together called PITIA. This DSCR calculator works it out the way most rental lenders do, then shows your cash flow and the largest loan your rent supports."
      calculator={<DscrCalculator />}
      inputs={{
        heading: "Nine inputs, and where to find each number.",
        intro: "Enter the figures a lender will use, not your best case. The calculator opens on a $300,000 example; replace each number with yours.",
        rows: [
          ["Monthly rent", "The rent a lender will count. Most use the lower of the signed lease and the market rent on the appraiser's rent schedule (Form 1007). Kiavi published the lower of the lease and 110% of market rent; Roc Capital and Civic count a vacant property at 90% of market rent."],
          ["Purchase price", "The contract price on a purchase. On a refinance, enter the value you expect the appraisal to show. The calculator sizes the loan from this number."],
          ["Down payment", "Your equity as a percent of the price; the loan is the rest. 20% down is 80% loan-to-value, the maximum most lenders published on purchases in October 2026 (85% at a few for 720–740+ credit). To model a 75% cash-out refinance, enter 25."],
          ["Interest rate", "A quoted rate, not an advertised floor. Defy Mortgage's published 30-year pricing grid ran 6.25%–7.875% in September 2026, and the median rate on 2025 30-year investor mortgages in public HMDA data was 7.375%."],
          ["Term", "30 or 40 years of amortization. Some DSCR lenders offer a 40-year term; the longer schedule lowers the payment and raises the ratio."],
          ["Payment type", "Principal and interest, or interest-only. Interest-only periods usually run up to 10 years. Ask which payment the lender uses to qualify an interest-only loan before you count on the higher ratio."],
          ["Taxes / yr", "The annual property tax bill as it will be after you buy. A sale can trigger a reassessment, and exemptions tied to the seller's own home won't carry over to a rental."],
          ["Insurance / yr", "A quote for a landlord (dwelling) policy on this property, plus flood insurance if the lender requires it. A homeowner's policy quote won't match what a rental costs to insure."],
          ["HOA / mo", "Monthly association dues for a condo, townhome or planned community. Enter 0 if there are none."],
        ],
      }}
      howHeading="Rent over payment: every result, explained."
      formula="DSCR = monthly rent ÷ (principal + interest + taxes + insurance + HOA)"
      how={[
        ["DSCR", "Monthly rent divided by PITIA. A 1.00 means rent and payment match; 1.25 means the rent is a quarter more than the payment; 0.90 means it covers only 90% of it."],
        ["PITIA", "Principal and interest on the loan, plus one-twelfth of annual property taxes and insurance, plus monthly HOA dues."],
        ["Principal and interest", "Loan × r ÷ (1 − (1 + r)^−n), where r is the annual rate ÷ 12 and n is the number of monthly payments: 360 on a 30-year term, 480 on a 40-year term. Interest-only is simply loan × r."],
        ["Monthly cash flow", "Rent minus PITIA. It ignores vacancy, repairs, management and reserves; the rental cash flow calculator adds them."],
        ["Max loan at 1.00 / 1.25", "The payment formula run backward. Rent ÷ target ratio, minus taxes, insurance and HOA, is the most the principal and interest can be; the calculator converts that payment into a loan at your rate, term and payment type."],
        ["The verdict", "Below 1.00 the badge reads below most lenders' minimum; 1.00–1.24 meets many programs; 1.25 and above is strong. The bar runs from 0.75 to 1.75."],
        ["Gross rent vs. NOI", "Most residential DSCR lenders use gross rent ÷ PITIA. Some commercial and portfolio lenders use net operating income ÷ debt service, which gives a lower ratio."],
      ]}
      sections={[
        {
          id: "worked-example",
          eyebrow: "Worked example",
          heading: "A $340,000 townhome at 1.08, step by step.",
          intro: "Type these figures into the calculator to follow along. Illustrative numbers, not a rate quote.",
          example: {
            title: "WORKED EXAMPLE · TOWNHOME",
            rows: [
              ["Rent counted", "$2,700"],
              ["Principal & interest", "$1,879"],
              ["Taxes ($4,080 a year)", "$340"],
              ["Insurance ($1,560 a year)", "$130"],
              ["HOA", "$150"],
              ["PITIA", "$2,499"],
            ],
            result: { label: "DSCR", value: "1.08" },
            note: "$340,000 purchase, 20% down, $272,000 loan at 7.375% over 30 years — the 2025 median rate on 30-year investor mortgages in HMDA data. Illustrative only — not a rate quote.",
            dscr: 1.08,
          },
          blocks: [
            { type: "p", text: "The property: a townhome bought for $340,000 with 20% down, so the loan is $272,000 at 7.375% fixed for 30 years. It's leased at $2,750 a month, and the appraiser's rent schedule puts market rent at $2,700. Taxes are $4,080 a year, insurance $1,560 a year and HOA dues $150 a month." },
            {
              type: "ol",
              items: [
                "**Rent counted: $2,700.** The lender takes the lower of the lease and the market rent, so the extra $50 on the lease doesn't count.",
                "**Rate and number of payments.** r = 7.375% ÷ 12 = 0.6146% a month; n = 30 × 12 = 360 payments.",
                "**Principal and interest: $1,878.64.** $272,000 × 0.006146 = $1,671.67 of first-month interest, divided by (1 − 1.006146^−360) = 0.88983.",
                "**Taxes, insurance and HOA: $620.** $4,080 ÷ 12 = $340, plus $1,560 ÷ 12 = $130, plus $150 of dues.",
                "**PITIA: $2,498.64.** $1,878.64 + $620.",
                "**DSCR: 1.08.** $2,700 ÷ $2,498.64 = 1.081. The rent covers the payment with about 8% to spare: $201 a month before vacancy, repairs or management.",
              ],
            },
            { type: "h3", text: "The largest loan this rent supports" },
            { type: "p", text: "Run the formula backward. At a 1.00 minimum, principal and interest can reach $2,700 − $620 = $2,080, which carries a loan of about $301,155 at 7.375% over 30 years. That's more than the $272,000 an 80% loan-to-value cap allows, so on this property leverage, not rent, sets the loan. A lender that wants 1.25 leaves $2,700 ÷ 1.25 − $620 = $1,540 for principal and interest, or a loan of about $222,970: 65.6% of the price, and $117,030 down instead of $68,000." },
            { type: "formula", text: "Max loan = max P&I × (1 − (1 + r)^−n) ÷ r, where max P&I = rent ÷ target DSCR − taxes − insurance − HOA" },
            { type: "p", text: "Lease rules matter at the margin. Kiavi's published rule counts the lower of the lease and 110% of market rent; 110% of $2,700 is $2,970, so the full $2,750 lease would count and the ratio would be 1.10." },
          ],
        },
        {
          id: "what-moves-dscr",
          eyebrow: "Sensitivity",
          heading: "What moves the ratio, in dollars.",
          intro: "The same townhome, one change at a time. Every line is the calculator's own arithmetic.",
          blocks: [
            {
              type: "table",
              caption: "$340,000 townhome, $2,700 rent counted, $620 a month of taxes, insurance and HOA (illustrative)",
              head: ["Change from the example", "PITIA", "DSCR"],
              rows: [
                ["None: 20% down, 30-year, 7.375%", "$2,499", "1.08"],
                ["25% down instead of 20% ($17,000 more cash)", "$2,381", "1.13"],
                ["40-year term", "$2,385", "1.13"],
                ["Interest-only payments", "$2,292", "1.18"],
                ["Insurance at $2,400 a year instead of $1,560", "$2,569", "1.05"],
                ["Rate at 8.00% instead of 7.375%", "$2,616", "1.03"],
              ],
            },
            { type: "p", text: "Two results stand out. A 40-year term lifts the ratio almost exactly as much as an extra $17,000 of down payment, without the cash, though you pay principal down more slowly. And every cost in the denominator counts dollar for dollar: an $840-a-year insurance increase takes the ratio from 1.08 to 1.05, right on the minimum Roc Capital and Civic publish." },
            { type: "p", text: "Working the other way, reaching 1.25 on these terms takes rent of $3,123 (1.25 × $2,498.64). When a deal is that far from a target, change the loan structure rather than stretching the rent estimate; the appraiser's rent schedule will check it." },
          ],
        },
        {
          id: "what-lenders-look-for",
          eyebrow: "Read the result",
          heading: "What lenders look for: 1.00 to qualify, 1.20–1.25 for the best terms.",
          intro: "Each lender sets its own bar. These are the thresholds lenders published for 1–4 unit rentals in September–October 2026.",
          blocks: [
            {
              type: "table",
              caption: "Published DSCR thresholds, September–October 2026. Terms change; your file decides your pricing.",
              head: ["Your DSCR", "What it means", "What lenders published"],
              rows: [
                ["1.25 and up", "Rent covers the payment with 25% or more to spare", "LendingOne says ratios above 1.25 are “often viewed favorably.” Lenders on 5+ unit multifamily typically want 1.20–1.25."],
                ["1.20–1.24", "Comfortable coverage", "Lima One's top tier for pricing and leverage starts at 1.20."],
                ["1.05–1.19", "Covers the payment with a small cushion", "Clears every published 1–4 unit minimum, including Roc Capital and Civic at 1.05."],
                ["1.00–1.04", "Rent just covers the payment", "Meets the 1.00 minimum at Lima One and RCN Capital; under Roc and Civic's 1.05."],
                ["0.75–0.99", "Rent falls short and you cover the gap", "Kiavi lends to 0.80; LendingOne and Defy to 0.75 (Defy wants 1.00 on a cash-out). LendingOne's September 2026 table puts lower-DSCR borrowers at 8–10%+."],
                ["Below 0.75, or no ratio", "Rent isn't the qualifying test", "Easy Street publishes no minimum; Griffin offers no-ratio loans up to 75% LTV with 700+ credit; Angel Oak lists below-1.0 and no-DSCR options. Expect lower leverage."],
              ],
            },
            { type: "p", text: "Pricing moves in steps, not on a smooth curve. Lifting a ratio from 1.18 to 1.21 can be worth more than lifting it from 1.35 to 1.50, because 1.20 is a published tier break at one lender. If you're just under a break, the sensitivity table above shows which lever gets you over it most cheaply." },
            { type: "p", text: "Other loan types set different bars. Roc Capital uses a 1.10 DSCR as the exit test on some stabilized bridge loans, and Roc and Civic measure rental portfolio loans at 1.05 on net cash flow rather than gross rent. Credit and leverage still matter alongside the ratio; see [DSCR loan requirements](/dscr-loans/requirements) for the full checklist." },
            { type: "cta", text: "Rent covers the payment? Apply in about 60 seconds and get your DSCR terms fast.", href: "/get-funding?loan=dscr", label: "Get DSCR funding" },
          ],
        },
        {
          id: "gross-rent-vs-noi",
          eyebrow: "Two definitions",
          heading: "Gross-rent DSCR vs. NOI DSCR: one property, two answers.",
          intro: "Most residential DSCR lenders use the formula in this calculator. Commercial lenders, and some portfolio programs, start from net operating income instead.",
          blocks: [
            { type: "p", text: "The residential version divides gross monthly rent by PITIA. Taxes, insurance and HOA dues sit in the payment; vacancy, repairs and management never enter the ratio. The commercial version starts from net operating income (NOI): rent after vacancy and every operating expense, taxes and insurance included. It then divides by principal and interest alone." },
            { type: "formula", text: "NOI DSCR = (rent − vacancy − operating expenses) ÷ principal and interest" },
            { type: "p", text: "Run the townhome both ways. Assume 5% vacancy ($135), management at 8% of collected rent ($205) and 10% of rent ($270) for repairs and capital reserves. With $620 of taxes, insurance and HOA, operating expenses come to $1,095 and NOI to $1,470. Divided by $1,879 of principal and interest, that's 0.78, against 1.08 on gross rent." },
            { type: "p", text: "Neither number is wrong; they answer different questions. The gross-rent ratio is how most 1–4 unit lenders size the loan. The NOI ratio is closer to what the property pays you. The [rental cash flow calculator](/calculators/rental-cash-flow) shows the lender's ratio next to your cash flow." },
          ],
        },
        {
          id: "other-deals",
          eyebrow: "Other deals",
          heading: "Short-term rentals, cash-out refinances and 2–4 units.",
          blocks: [
            { type: "h3", text: "Short-term rentals" },
            { type: "p", text: "Enter the monthly income the lender will count, not your best month. On a purchase, short-term rental lenders such as Lima One and Easy Street start from an AirDNA projection; on a refinance, from the trailing 12 months of bookings. Ask whether the lender discounts that figure, and enter the discounted number as rent. Leverage runs a step lower: Lima One published 75% on short-term rental purchases and 70% on cash-out. More in [how lenders count Airbnb income](/guides/dscr-loan-airbnb-income)." },
            { type: "h3", text: "Cash-out refinance" },
            { type: "p", text: "Enter the expected appraised value as the purchase price and 100 minus the lender's loan-to-value as the down payment: 25 for a 75% cash-out, the most common maximum lenders published in October 2026. The loan amount shown is the new loan; your cash out is that figure minus the payoff and closing costs. Many lenders want about 90 days of ownership first. See [rental cash-out refinance](/investment-property-cash-out-refinance)." },
            { type: "h3", text: "Duplexes to fourplexes" },
            { type: "p", text: "Add the rent from every unit, counting each at the lower of its lease and its market rent, and enter the whole property's taxes, insurance and dues. The ratio works the same way; the appraiser reports the rents for all units in one appraisal." },
            { type: "callout", title: "Rentals only", text: "This calculator, like every DSCR loan, assumes a rental. If you or a family member plan to live in the property, you need a residential mortgage, not a business-purpose loan." },
          ],
        },
      ]}
      tips={{
        heading: "Five ways to raise a DSCR.",
        items: [
          "Put more down: a smaller loan means a smaller payment on the same rent.",
          "Choose interest-only or a 40-year term: both lower the monthly payment.",
          "Shop insurance — it's in the denominator at full cost.",
          "Support a higher rent with a signed lease; lenders often use the lower of the lease and the appraiser's market rent.",
          "Buy the rate down with points if you'll hold long enough to recover the cost.",
        ],
      }}
      mistakes={{
        heading: "Where DSCR estimates go wrong.",
        items: [
          "Using the asking rent or a listing's pro forma. The lender counts the lower of the lease and the appraiser's market rent, and some count a vacant unit at 90% of market.",
          "Using the seller's tax bill. Estimate the bill after your purchase, without exemptions that only applied to the seller.",
          "Leaving out HOA dues or flood insurance. Both belong in PITIA.",
          "Plugging in an advertised floor. Floors as low as 5.39% were published in October 2026, but the 2025 median on 30-year investor mortgages was 7.375%.",
          "Reading the ratio as profit. A property at 1.10 can still lose money once vacancy, repairs and management are paid.",
          "Forgetting the leverage cap. The loan is the lower of the DSCR limit and the loan-to-value limit, typically 80% on a purchase and 75% on a cash-out.",
        ],
      }}
      faqs={[
        { q: "What is DSCR in real estate?", a: "DSCR stands for debt service coverage ratio. For a rental property it's the monthly rent divided by the monthly payment: principal, interest, taxes, insurance and HOA dues (PITIA). At 1.00 the rent exactly covers the payment; at 1.25 it covers it with 25% to spare. DSCR lenders use the ratio in place of your personal income to decide whether, and how much, to lend." },
        { q: "What numbers do I need to calculate DSCR?", a: "Five: the monthly rent a lender will count, the loan amount, the interest rate and term, the annual property taxes and insurance, and any monthly HOA dues. The calculator turns the loan, rate and term into principal and interest, adds one-twelfth of the taxes and insurance plus the dues to get PITIA, and divides the rent by that total." },
        { q: "What DSCR do lenders require?", a: "Most published a 1.00 minimum for 1–4 unit rentals in September–October 2026. Roc Capital and Civic want 1.05; Kiavi goes to 0.80, LendingOne and Defy to 0.75, and a few lenders offer no-ratio loans. Better terms start higher: Lima One's top pricing tier begins at 1.20, and LendingOne says ratios above 1.25 are often viewed favorably." },
        { q: "Can I get a DSCR loan with a ratio below 1.00?", a: "Yes, at some lenders, but it costs more. LendingOne's September 2026 rate table put lower-DSCR borrowers at 8–10%+, against 6–7% for strong ratios and high credit, and you should expect a larger down payment. Below 1.00 the rent doesn't cover the payment, so you fund the gap every month: at 0.90 on a $2,500 payment, that's $250." },
        { q: "How is rent counted for a vacant property?", a: "Lenders use the market rent from the appraiser's rent schedule, and some discount it when there's no lease: Roc Capital and Civic published 90% of market rent for vacant properties. On $2,700 of market rent that's $2,430, which takes the example townhome's ratio from 1.08 to 0.97. Signing a lease before closing can protect the ratio." },
        { q: "Does a 40-year term raise my DSCR?", a: "Yes. Spreading the same loan over 480 payments instead of 360 lowers principal and interest, so the same rent covers more of the payment. On a $272,000 loan at 7.375%, P&I drops from $1,879 to $1,765 and the example townhome's ratio rises from 1.08 to 1.13. Interest-only lifts it to 1.18. The trade-off is slower equity build-up." },
        { q: "How much can I borrow based on DSCR?", a: "Work the ratio backward. Divide the rent by the lender's minimum DSCR and subtract monthly taxes, insurance and HOA; what's left is the most your principal and interest can be. Convert that payment into a loan at your rate and term, which the calculator does at 1.00 and 1.25. Your loan is the lower of that figure and the lender's loan-to-value cap." },
        { q: "Why is my DSCR different from my lender's?", a: "Usually because the inputs differ. The lender uses its own rent figure, normally the lower of the lease and the appraiser's market rent, its own tax and insurance estimates, the rate on your quote and, for some products, net operating income instead of gross rent. Match those inputs in the calculator and the ratios should line up; if not, ask for the lender's worksheet." },
      ]}
      sources={[
        { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
        { label: "Lima One — Rental loans (DSCR tiers, seasoning)", url: "https://www.limaone.com/rental/" },
        { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
        { label: "Lima One — Multifamily loans", url: "https://www.limaone.com/multifamily/" },
        { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
        { label: "Roc Capital — Rental portfolios", url: "https://roccapital.com/rental-portfolios" },
        { label: "Roc Capital — Stabilized bridge", url: "https://roccapital.com/stabilized-bridge" },
        { label: "Civic Financial Services — Rental loans", url: "https://www.civicfs.com/rental/" },
        { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
        { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
        { label: "LendingOne — How DSCR loan interest rates are determined (September 22, 2026)", url: "https://lendingone.com/insight/how-are-dscr-loan-interest-rates-determined/" },
        { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
        { label: "Defy Mortgage — DSCR loan rates (September 21, 2026)", url: "https://defymortgage.com/dscr-loan-rates/" },
        { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
        { label: "Easy Street Capital — Short-term rental financing", url: "https://www.easystreetcap.com/short-term-rental-financing/" },
        { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
        { label: "Angel Oak — Investor cash flow program", url: "https://angeloakms.com/programs/investor-cash-flow-mortgage-program/" },
        { label: "OfferMarket — 40-year DSCR loans", url: "https://offermarket.us/blog/40-year-dscr-loan" },
        { label: "Crowdfunded Wealth — Hard money loan rates 2026 (2025 HMDA data)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
      ]}
      updated="2026-10-23"
      related={["dscr", "short-term-rental", "cash-out-refinance"]}
    />
  );
}
