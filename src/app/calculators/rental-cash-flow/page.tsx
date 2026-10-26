import type { Metadata } from "next";
import { CashFlowCalculator } from "@/components/CashFlowCalculator";
import { CalculatorPage } from "@/components/templates/CalculatorPage";

export const metadata: Metadata = {
  title: { absolute: "Rental Property Cash Flow Calculator | Fund Your Deal" },
  description: "Free rental property cash flow calculator: cash flow after vacancy, management, repairs and capex, plus NOI, cap rate, cash-on-cash and the lender's DSCR.",
  alternates: { canonical: "/calculators/rental-cash-flow" },
};

export default function Page() {
  return (
    <CalculatorPage
      path="/calculators/rental-cash-flow"
      crumb="Rental cash flow"
      title="Rental cash flow calculator"
      intro="This rental property cash flow calculator shows what a rental actually puts in your pocket each month, after vacancy, management, repairs and a capital reserve. It also shows the cap rate, your cash-on-cash return and the DSCR a lender will see: the [debt service coverage ratio](/glossary#dscr), monthly rent divided by the full payment of principal, interest, taxes, insurance and HOA dues (PITIA)."
      calculator={<CashFlowCalculator />}
      inputs={{
        heading: "Fourteen inputs: the loan, the income and the expenses.",
        intro: "The calculator opens on a $320,000 rental; the worked example below walks through those defaults. Replace them with your numbers.",
        rows: [
          ["Purchase price", "The contract price. The cap rate is measured against it."],
          ["Down payment", "Your equity as a percent of the price; the loan is the rest. Most DSCR lenders published an 80% maximum loan-to-value on purchases in October 2026, so 20–25% down is typical."],
          ["Interest rate and term", "The rate on a 30- or 40-year fixed loan. The median on 2025 30-year investor mortgages was 7.375%. A 40-year term, offered by some DSCR lenders, lowers the payment."],
          ["Closing costs", "Buying costs and loan fees as a percent of the price. They count as cash invested, so they lower cash-on-cash."],
          ["Monthly rent", "The scheduled rent with the property fully leased: the lease, or market rent from comparable rentals and the appraiser's rent schedule."],
          ["Other income / mo", "Parking, laundry, storage or pet fees. It counts in your NOI and cash flow; the lender's DSCR here uses rent only."],
          ["Vacancy", "The share of income lost to empty months and turnover. The U.S. rental vacancy rate was 7.3% in the second quarter of 2026 (Census Bureau), a national figure across all rentals; check your submarket and property type."],
          ["Taxes / yr and insurance / yr", "The tax bill as it will be after your purchase, and a quote for a landlord policy on this property."],
          ["HOA / mo", "Association dues, if any."],
          ["Management", "The manager's fee as a percent of collected rent (after vacancy). Use the fee in your management agreement, and remember leasing fees are often charged on top."],
          ["Repairs", "Routine maintenance as a percent of gross rent: turnovers, appliance repairs, plumbing calls."],
          ["Capex reserve", "Savings for big replacements as a percent of gross rent: roof, HVAC, water heater, flooring. The reserve method below builds it from the property."],
        ],
      }}
      howHeading="From rent to cash flow: every result, explained."
      formula="Cash flow = rent − vacancy − operating expenses − loan payment"
      how={[
        ["Net operating income (NOI)", "Rent and other income, minus vacancy and operating expenses: taxes, insurance, HOA, management, repairs and a capital reserve. It excludes the loan payment."],
        ["Cash flow", "NOI minus the loan's principal and interest."],
        ["Cap rate", "Annual NOI divided by the purchase price — the property's yield before financing."],
        ["Cash-on-cash", "Annual cash flow divided by the cash you invested: down payment plus closing costs."],
        ["DSCR (lender view)", "Gross rent divided by PITIA, the way most DSCR lenders size a loan. It can look healthy even when cash flow after repairs and management is thin."],
        ["The verdict", "Negative cash flow below $0; positive, modest return under 8% cash-on-cash; strong at 8% or more. The 8% line is the calculator's rule of thumb, not a market standard."],
      ]}
      sections={[
        {
          id: "worked-example",
          eyebrow: "Worked example",
          heading: "The default rental: 1.22 to a lender, −$125 a month to you.",
          intro: "These are the numbers the calculator opens with, so you can check every line against it.",
          example: {
            title: "WORKED EXAMPLE · $320,000 RENTAL",
            rows: [
              ["Gross rent", "$2,600"],
              ["Vacancy (5%)", "−$130"],
              ["Operating expenses", "−$958"],
              ["Net operating income", "$1,512"],
              ["Loan payment (P&I)", "−$1,637"],
            ],
            result: { label: "Monthly cash flow", value: "−$125" },
            note: "$320,000 purchase, 25% down, $240,000 loan at 7.25% over 30 years. Taxes $4,200 and insurance $1,800 a year; management 8% of collected rent; repairs 5% and capex 5% of gross rent. Illustrative only — not a rate quote.",
          },
          blocks: [
            { type: "p", text: "The property: $320,000 with 25% down and 3% closing costs, financed at 7.25% over 30 years. It rents for $2,600 a month. Taxes are $4,200 a year and insurance $1,800, with no HOA." },
            {
              type: "ol",
              items: [
                "**Collected rent: $2,470.** $2,600 minus 5% vacancy ($130).",
                "**Operating expenses: $957.60.** Taxes $350 + insurance $150 + management $197.60 (8% of $2,470) + repairs $130 (5% of $2,600) + capex $130 (5% of $2,600).",
                "**NOI: $1,512.40 a month,** or $18,149 a year.",
                "**Loan payment: $1,637.22.** $240,000 at 7.25% over 30 years.",
                "**Cash flow: −$124.82 a month,** or −$1,498 a year.",
                "**Cash-on-cash: −1.7%.** −$1,498 ÷ $89,600 invested ($80,000 down plus $9,600 of closing costs).",
                "**Cap rate: 5.67%.** $18,149 ÷ $320,000.",
                "**Lender DSCR: 1.22.** $2,600 ÷ $2,137.22 of PITIA ($1,637.22 + $350 + $150).",
              ],
            },
            { type: "p", text: "A DSCR lender sees 1.22: above every published 1–4 unit minimum and inside Lima One's 1.20-and-up best-pricing tier. You'd see a property that costs $125 a month to own once vacancy, management and reserves are paid. Measured on NOI, the ratio is 0.92 ($1,512 ÷ $1,637): the property doesn't cover its own loan." },
          ],
        },
        {
          id: "leverage",
          eyebrow: "Leverage",
          heading: "Cap rate vs. loan constant: when borrowing helps and when it hurts.",
          intro: "Compare what the property yields with what the loan costs per dollar borrowed. When the loan costs more, every borrowed dollar pulls your return down.",
          blocks: [
            { type: "formula", text: "Loan constant = annual principal and interest ÷ loan amount" },
            { type: "p", text: "The example's loan constant is $19,647 ÷ $240,000 = 8.19%: each borrowed dollar costs 8.19 cents a year in payments. The property yields 5.67% before financing. Borrowing at 8.19% to buy a 5.67% yield is negative leverage, which is why cash-on-cash (−1.7%) lands below the cap rate. Part of the 8.19% is principal, about $2,323 in the first year, so it builds equity rather than vanishing, but it still comes out of your monthly cash." },
            {
              type: "table",
              caption: "The default rental, one change at a time (illustrative)",
              head: ["Change from the example", "Cash flow / mo", "Cash-on-cash", "Lender DSCR"],
              rows: [
                ["None", "−$125", "−1.7%", "1.22"],
                ["40-year term", "−$23", "−0.3%", "1.28"],
                ["Price $290,000 instead of $320,000", "$29", "0.4%", "1.31"],
                ["Rent $2,800 instead of $2,600", "$30", "0.4%", "1.31"],
                ["40% down instead of 25%", "$203", "1.8%", "1.44"],
              ],
            },
            { type: "p", text: "Cash flow breaks even at a rent of about $2,761, or a down payment of about 30.7% ($98,300). More cash fixes the monthly number but not the return: with a 5.67% cap rate and a loan that costs 8.19%, cash-on-cash can't beat the all-cash figure, about 5.5% after closing costs, however you finance it. Only a lower price, higher rent or cheaper loan changes that." },
          ],
        },
        {
          id: "read-the-result",
          eyebrow: "Read the result",
          heading: "What's a good result? Four checks instead of one number.",
          intro: "There's no universal target for cash flow or cash-on-cash. These checks work in any market.",
          blocks: [
            {
              type: "ol",
              items: [
                "**Positive cash flow after reserves.** Not after PITIA alone, but after vacancy, management, repairs and capex. A property that needs a monthly top-up is a bet on rent growth or appreciation.",
                "**A cap rate above the loan constant,** or a clear, documented reason it will get there, such as a below-market lease that's about to renew.",
                "**A lender DSCR with room above the minimum.** Most lenders published 1.00, Roc Capital and Civic 1.05, and Lima One's best pricing starts at 1.20. A $1,500 rise in the annual tax bill takes the example from 1.22 to 1.15.",
                "**Cash-on-cash against your alternatives.** Compare it with what the same cash would earn elsewhere at similar risk.",
              ],
            },
            { type: "p", text: "The calculator measures first-year cash. Total return also includes principal the rent pays down, appreciation and tax effects such as depreciation, and those can make a thin cash flow worthwhile, or not. A CPA can tell you how depreciation and rental losses apply to you." },
            { type: "cta", text: "Numbers work? Apply in about 60 seconds and get rental property funding fast.", href: "/get-funding?loan=dscr", label: "Get DSCR funding" },
          ],
        },
        {
          id: "vacancy-and-reserves",
          eyebrow: "Estimates",
          heading: "Vacancy, capex and management: build them from the property.",
          blocks: [
            { type: "p", text: "**Vacancy.** The Census Bureau's national rental vacancy rate was 7.3% in the second quarter of 2026, up from 7.0% a year earlier. It covers every kind of rental, apartments included, so treat it as a sanity check rather than your number. Ask local managers about days on market and turnover for your property type. One vacant month is 8.3% of a year's rent." },
            { type: "p", text: "**Capex.** Build the reserve from the property instead of a flat percentage. List each big component, estimate its replacement cost and remaining life, and divide. If a roof would cost $15,000 and has 10 years left, it needs $125 a month; an HVAC system at $9,000 with 6 years left needs another $125. On $2,600 of rent, those two alone are 9.6%, nearly double the 5% default. Use your inspector's estimates, not these placeholders." },
            { type: "p", text: "**Management.** Include a fee even if you self-manage. A DSCR lender's gross-rent ratio ignores it, but you'll pay it in time or money, and the numbers still work if you hire a manager later." },
            { type: "callout", title: "Rentals only", text: "This calculator is for investment property. DSCR and other business-purpose rental loans can't finance a home you or your family will live in; that needs a residential mortgage." },
          ],
        },
      ]}
      tips={{
        heading: "Make the estimate honest.",
        items: [
          "Use a real vacancy rate for the submarket; the 5% default is a placeholder, not a law.",
          "Budget management even if you self-manage; your time has a cost, and NOI-based lenders count the fee.",
          "Reserve for capital items — roof, HVAC, water heater — separately from routine repairs.",
          "Pull the actual tax bill and get an insurance quote; both often reset higher after a sale.",
          "Compare the lender's DSCR with your own NOI-based numbers before you decide how much to borrow.",
        ],
      }}
      mistakes={{
        heading: "Where rental estimates go wrong.",
        items: [
          "Taking the seller's rent roll on faith. Check it against the leases and against market rents.",
          "Leaving out vacancy because the property is leased today. Leases end, and turnovers take time.",
          "Using the seller's tax bill and a homeowner's insurance quote. Both change when an investor buys.",
          "Lumping capex into repairs. One roof or HVAC replacement can erase years of thin cash flow.",
          "Reading lender DSCR as profit. In the example, 1.22 on gross rent is −$125 a month after expenses.",
          "Comparing cash-on-cash across deals with different down payments. Leverage moves the return; compare cap rates first.",
        ],
      }}
      faqs={[
        { q: "What is a good cash-on-cash return on a rental property?", a: "There's no standard figure. Start by requiring positive cash flow after vacancy, management, repairs and capital reserves, then compare the return with what the same cash could earn elsewhere at similar risk. The calculator flags 8% or more as strong, a rule of thumb rather than a market benchmark. Loan paydown, appreciation and tax effects add to total return but aren't in cash-on-cash." },
        { q: "What's the difference between cap rate and cash-on-cash?", a: "Cap rate measures a property's annual net operating income against its price, ignoring financing, so it compares properties. Cash-on-cash measures your annual cash flow after the loan payment against the cash you put in, so it shows what the financing does to your return. When the cap rate is below the loan constant, cash-on-cash comes in lower than the cap rate." },
        { q: "Why is my DSCR fine but my cash flow low?", a: "Lenders usually calculate DSCR on gross rent against PITIA, which leaves out vacancy, repairs, management and capital reserves. Your cash flow includes them. In the calculator's default example, the lender's ratio is 1.22 while the property loses $125 a month. Use the DSCR to judge the loan and the cash flow to judge the investment." },
        { q: "How much should I budget for repairs and capex?", a: "Separate the two. Repairs are routine fixes and turnovers; capex is replacing big components. For capex, list the roof, HVAC, water heater, flooring and appliances, estimate each one's replacement cost and remaining life, and divide to get a monthly reserve. Older properties need more. The calculator starts each at 5% of gross rent as a placeholder." },
        { q: "What vacancy rate should I use for a rental?", a: "Your submarket's figure for your property type. Nationally, the Census Bureau put rental vacancy at 7.3% in the second quarter of 2026, across all rentals including apartments. Local rates can sit well above or below that. One empty month a year is 8.3% of rent, so a 5% assumption means less than a month of downtime each year." },
        { q: "What is NOI in real estate?", a: "Net operating income is a property's income after vacancy and operating expenses (taxes, insurance, HOA, management, repairs and reserves) but before the loan payment. Because it ignores financing, it's the basis for the cap rate and for commercial-style DSCR. In the default example, $2,600 of monthly rent becomes $1,512 of NOI, or $18,149 a year." },
        { q: "Does the calculator include appreciation or tax benefits?", a: "No. It measures first-year cash flow, cap rate and cash-on-cash. Principal paydown, appreciation and tax effects such as depreciation are left out, and they can change whether a thin cash flow is worth it. A CPA can tell you how depreciation and rental losses would apply to you; the calculator sticks to the cash." },
        { q: "Can I buy this rental with a DSCR loan?", a: "Yes, if it's an investment property and the rent covers the payment. DSCR lenders qualify the loan on rent against PITIA instead of your income, and most published a 1.00 minimum ratio and an 80% maximum loan-to-value on purchases in October 2026. Neither you nor your family can live in the property. The DSCR calculator sizes the loan." },
      ]}
      sources={[
        { label: "U.S. Census Bureau — Residential vacancies and homeownership, Q2 2026 (July 28, 2026)", url: "https://www.census.gov/housing/hvs/files/currenthvspress.pdf" },
        { label: "Crowdfunded Wealth — Hard money loan rates 2026 (2025 HMDA data)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
        { label: "Lima One — Rental loans (DSCR tiers)", url: "https://www.limaone.com/rental/" },
        { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
        { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
        { label: "Civic Financial Services — Rental loans", url: "https://www.civicfs.com/rental/" },
        { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
        { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
        { label: "OfferMarket — 40-year DSCR loans", url: "https://offermarket.us/blog/40-year-dscr-loan" },
      ]}
      updated="2026-10-23"
      related={["dscr", "portfolio", "cash-out-refinance"]}
    />
  );
}
