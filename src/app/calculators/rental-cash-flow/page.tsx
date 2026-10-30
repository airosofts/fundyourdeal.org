import type { Metadata } from "next";
import { CashFlowCalculator } from "@/components/CashFlowCalculator";
import { CalculatorPage } from "@/components/templates/CalculatorPage";
import { alternatesFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Rental Cash Flow Calculator for Investors | Fund Your Deal" },
  description: "See what a rental pays you once vacancy, management, repairs and capex come out, with the lender's DSCR next to NOI, cap rate and cash-on-cash.",
  alternates: alternatesFor("/calculators/rental-cash-flow"),
};

export default function Page() {
  return (
    <CalculatorPage
      path="/calculators/rental-cash-flow"
      crumb="Rental cash flow"
      title="Rental cash flow calculator: what the hold really pays"
      intro="Rent minus the mortgage isn't cash flow. This rental cash flow calculator takes out vacancy, management, repairs and a capital reserve first, then shows NOI, cap rate, cash-on-cash and the [debt service coverage ratio](/glossary#dscr) (DSCR) a lender sees: the month's rent set against the month's loan payment, with taxes, insurance and HOA included ([PITIA](/glossary#pitia)). Run it before you decide to keep a property."
      question="After every real expense, does this rental pay you each month, and is that worth the cash you leave in it?"
      calculator={<CashFlowCalculator />}
      inputs={{
        heading: "Fourteen inputs: the loan, the income, the costs.",
        intro: "Use the property's own paperwork wherever you can: the leases, the tax bill, an insurance quote, the manager's fee schedule.",
        rows: [
          ["Contract price", "What you're paying. The loan is sized from it, and the cap rate is measured against it."],
          ["Cash down", "Your cash into the price, as a percent; the loan covers what's left. Most DSCR purchase loans topped out at 80% of the price in October 2026, which makes 20% the usual floor."],
          ["Note rate · Loan term", "Your quoted rate on a 30- or 40-year loan. LendingOne said average investor DSCR rates ran 7–9% in September 2026. The 40-year option lowers the monthly payment."],
          ["Closing to buy", "Title, lender fees and other costs to buy, as a share of the price. They're cash you put in, so they pull cash-on-cash down."],
          ["Rent / mo", "Rent for every unit, fully leased: the current leases, or market rent from comparable rentals nearby."],
          ["Extra income / mo", "Laundry, parking, storage and pet fees. They count toward NOI and cash flow; the lender's DSCR on this calculator uses rent alone."],
          ["Vacancy reserve", "Income lost to empty months and turnover. Nationally, rental vacancy was 7.3% in Q2 2026 (Census Bureau). A single empty month a year is 8.3%."],
          ["Property tax / yr · Landlord insurance / yr", "The tax bill as it will be after you buy, and a landlord policy quote for this property. Both can change when a property sells."],
          ["HOA dues / mo", "Association dues, or 0."],
          ["Property manager", "The manager's fee as a percent of collected income (after vacancy). Budget it even if you plan to manage yourself."],
          ["Repairs reserve", "Routine fixes and turnover work, as a percent of gross income."],
          ["Big repairs (capex)", "Money set aside for big replacements (roof, HVAC, water heaters, flooring) as a percent of gross income. Build it from the property's ages and costs; the method is below."],
        ],
      }}
      howHeading="From rent roll to cash flow."
      howIntro="The owner's view first, then the lender's, so you can see the gap between them."
      formula="Cash flow = income − vacancy − operating expenses − principal and interest"
      how={[
        ["Gross income", "Rent + extra income."],
        ["Vacancy", "Gross income × vacancy reserve %. What remains is collected income."],
        ["Operating expenses", "Property tax ÷ 12 + landlord insurance ÷ 12 + HOA dues + property manager % of collected income + repairs reserve % and big repairs (capex) % of gross income."],
        ["Net operating income (NOI)", "Collected income − operating expenses. The loan payment isn't in it."],
        ["Cash flow", "NOI − principal and interest."],
        ["Cap rate", "NOI × 12 ÷ price: what the property yields before any financing."],
        ["Cash-on-cash", "Cash flow × 12 ÷ (cash down + closing to buy)."],
        ["Rent ÷ full payment (DSCR)", "Rent ÷ PITIA, where PITIA is principal and interest + property tax + landlord insurance + HOA dues. Extra income, vacancy and reserves stay out of it."],
        ["The badge", "“No cash flow as entered” at $0 or less of cash flow. “Pays, under 8% cash-on-cash” while cash-on-cash is below 8%. “Pays: 8%+ cash-on-cash” from 8% up, a line this calculator draws for itself rather than a market benchmark."],
      ]}
      sections={[
        {
          id: "worked-deal",
          eyebrow: "Worked deal",
          heading: "A $285,000 triplex: 1.44 to the lender, $175 a month to you.",
          intro: "Three units at $1,025, a coin laundry and 25% down. The calculator opens on this deal, so you can check each line.",
          example: {
            title: "WORKED DEAL · TRIPLEX HOLD",
            rows: [
              ["Gross income (rent + laundry)", "$3,135"],
              ["Vacancy (7%)", "−$219"],
              ["Operating expenses", "−$1,209"],
              ["Net operating income", "$1,706"],
              ["Loan payment (P&I)", "−$1,531"],
            ],
            result: { label: "Monthly cash flow", value: "$175" },
            note: "$285,000 price, 25% down, 3% closing costs, $213,750 loan at 7.75% over 30 years. Taxes $4,560 and insurance $2,640 a year; management 8% of collected income; repairs 6% and capex 6% of gross. Illustrative only, not a quote.",
          },
          blocks: [
            { type: "p", text: "The property: a triplex at $285,000, each unit leased at $1,025, plus $60 a month from a coin laundry. You put 25% down ($71,250), pay 3% to close ($8,550) and borrow $213,750 at 7.75% for 30 years." },
            {
              type: "ol",
              items: [
                "**Collected income: $2,915.55.** $3,135 of gross income less 7% vacancy ($219.45), a touch under the 7.3% national rate.",
                "**Operating expenses: $1,209.44.** Taxes $380 + insurance $220 + management $233.24 (8% of $2,915.55) + repairs $188.10 + capex $188.10 (6% of $3,135 each).",
                "**NOI: $1,706.11 a month,** or $20,473 a year.",
                "**Principal and interest: $1,531.33.**",
                "**Cash flow: $174.78 a month,** or $2,097 a year.",
                "**Cash-on-cash: 2.6%.** $2,097 ÷ $79,800 invested.",
                "**Cap rate: 7.18%.** $20,473 ÷ $285,000.",
                "**Lender DSCR: 1.44.** $3,075 of rent ÷ $2,131.33 of PITIA. The laundry money doesn't count toward it.",
              ],
            },
            { type: "p", text: "The lender sees a strong file. You see $175 a month on $79,800, which is positive but only a 2.6% return on your cash. Both readings are right; they answer different questions." },
          ],
        },
        {
          id: "read-the-result",
          eyebrow: "Read the result",
          heading: "Four numbers, four different questions.",
          intro: "Don't let one figure decide the hold. Each result on the card answers its own question.",
          blocks: [
            {
              type: "table",
              caption: "The worked triplex (illustrative)",
              head: ["Result", "The question it answers", "Worked deal", "What to look for"],
              rows: [
                ["Cash flow", "Does the property pay me every month?", "$175", "Positive after reserves, with room for a vacancy or a repair"],
                ["Cash-on-cash", "Is the return worth the cash I left in?", "2.6%", "Beats your other uses for that cash at similar risk"],
                ["Cap rate", "What does the property earn before financing?", "7.18%", "Above the loan constant, and in line with similar properties"],
                ["Lender DSCR", "Will a rental lender fund it?", "1.44", "At or above the lender's minimum, usually 1.00"],
              ],
            },
            { type: "p", text: "**The leverage test.** A year of principal and interest divided by the loan is the loan constant: $18,376 ÷ $213,750 = 8.6%. The triplex yields 7.18% before financing. When the loan constant sits above the cap rate, each borrowed dollar costs more than it earns, so cash-on-cash (2.6%) lands below the all-cash return (7.0%). Some of that 8.6% is principal, which builds equity, but it still leaves your account every month." },
            { type: "p", text: "The calculator counts first-year cash. Paying down principal, rising values and tax items like depreciation all add to your total return, and they can make a thin cash flow worth holding, or not. How depreciation and rental losses apply to you is a question for a CPA." },
          ],
        },
        {
          id: "sensitivity",
          eyebrow: "What moves it",
          heading: "Price, rent, vacancy and leverage, one at a time.",
          intro: "The same triplex with one input changed per row. Each row is the calculator's own arithmetic.",
          blocks: [
            {
              type: "table",
              caption: "The worked triplex, one change at a time (illustrative)",
              head: ["Change from the worked deal", "Cash flow / mo", "Cash-on-cash", "Lender DSCR"],
              rows: [
                ["None", "$175", "2.6%", "1.44"],
                ["Price $270,000 instead of $285,000", "$255", "4.1%", "1.50"],
                ["Vacancy 10% instead of 7%", "$88", "1.3%", "1.44"],
                ["Each unit $50 lower ($2,925 of rent)", "$64", "1.0%", "1.37"],
                ["Insurance $3,600 a year", "$95", "1.4%", "1.39"],
                ["Rate 8.5% instead of 7.75%", "$63", "0.9%", "1.37"],
                ["20% down instead of 25%", "$73", "1.3%", "1.38"],
              ],
            },
            { type: "p", text: "**Price is the cleanest lever.** $15,000 off the contract adds $81 a month and lifts cash-on-cash from 2.6% to 4.1%. **A $50-per-unit rent miss erases 63% of the cash flow,** $110 of the $175, even after vacancy, management and reserves shrink with it." },
            { type: "p", text: "**Less down makes it worse here.** At 20% down, cash-on-cash falls to 1.3%, because the extra borrowing costs 8.6% a year against a 7.18% yield. A rental lender would still fund it at 1.38. Whether you should is a separate question, and this table answers it." },
          ],
        },
        {
          id: "fundable",
          eyebrow: "Fundable?",
          heading: "Fundable and worth owning are two different tests.",
          intro: "A rental lender underwrites rent against PITIA. Portfolio lenders may look at net cash flow. Check both, then add reserves.",
          blocks: [
            {
              type: "table",
              caption: "Published terms, September–October 2026. Each lender sets its own mix.",
              head: ["Test", "Published bar", "Worked triplex"],
              rows: [
                ["Gross-rent DSCR", "1.00 at most 1–4 unit lenders; 1.05 at Roc Capital and Civic; Lima One's strongest rate and leverage tier from 1.2", "1.44"],
                ["Net cash flow (portfolio loans)", "1.05 at Roc Capital and Civic, measured on net cash flow", "1.11 on NOI ÷ P&I"],
                ["Loan-to-value", "80% maximum on most purchases", "75%"],
                ["Reserves", "None at Kiavi; 3 months of PITIA at Defy; 3–9 months at Easy Street", "3 months = $6,394"],
                ["Property type", "1–4 units standard; 5–10 units at some lenders", "3 units"],
              ],
            },
            { type: "p", text: "The triplex is fundable with room to spare: 1.44 on gross rent, 75% leverage, and it still covers its loan 1.11 times after every expense. Reserves are cash you need on top of the $79,800, and the calculator leaves them out of cash to close." },
            { type: "p", text: "The weak link is the return, not the loan. To beat 2.6% cash-on-cash you need a lower price, more rent or a cheaper loan; more leverage only makes it worse on this deal. Before you offer, see [rental cash flow before you buy](/guides/rental-cash-flow-before-you-buy), and size the loan itself in the [DSCR calculator](/calculators/dscr)." },
            { type: "cta", text: "Numbers hold up? Get rental funding. Applying takes about 60 seconds.", href: "/get-funding?loan=dscr", label: "Get rental funding" },
          ],
        },
        {
          id: "build-the-estimates",
          eyebrow: "Build the estimates",
          heading: "Vacancy, capex and management, from the property up.",
          blocks: [
            { type: "p", text: "**Vacancy.** Start from local turnover and days on market, not a national figure. The Census Bureau's 7.3% for Q2 2026, up from 7.0% a year earlier, mixes every kind of rental, apartments included. Ask two local managers what a unit like yours sits empty between tenants." },
            { type: "p", text: "**Capex.** List the big components with their age, remaining life and replacement cost, then divide. Say three water heaters at $1,500 with 4 years left need $94 a month between them, and an $18,000 roof with 12 years left needs $125. That's $219 a month, or 7% of the triplex's gross income, above the 6% entered. Use your inspector's figures, not these placeholders." },
            { type: "p", text: "**Management.** A rental lender's gross-rent ratio ignores it; your cash flow shouldn't. Price it even if you manage the property yourself, so the deal still works the day you hand it off." },
            { type: "callout", title: "Investment property only", text: "Rental loans are business-purpose loans. If you or your family will live in any unit, this isn't the right financing; talk to a residential mortgage lender." },
          ],
        },
      ]}
      tips={{
        heading: "Make the estimate honest before you make the offer.",
        items: [
          "**Rebuild the rent roll from the leases.** Check every unit's rent against its lease and against market rent.",
          "**Get the real tax bill and an insurance quote.** Use the numbers that apply after you buy.",
          "**Price capex from the property.** Ages and replacement costs, not a flat percentage.",
          "**Run it at 10% vacancy too.** The worked triplex still shows $88 a month there; a deal that goes negative has no cushion.",
          "**Back-solve your offer.** Lower the price until cash-on-cash reaches your target. That's your ceiling.",
        ],
      }}
      mistakes={{
        heading: "Where hold numbers go wrong.",
        items: [
          "**Counting extra income in the lender's ratio.** Laundry and fees help your cash flow; the DSCR here uses rent alone.",
          "**Zero vacancy because it's leased today.** Leases end, and turnovers take weeks.",
          "**Folding capex into repairs.** One roof can wipe out years of thin cash flow.",
          "**Reading 1.44 as a profit margin.** The lender's ratio leaves out vacancy, management and reserves.",
          "**Comparing cash-on-cash across different down payments.** Compare cap rates first; leverage moves the rest.",
          "**Forgetting reserves in the cash you need.** Lenders can ask for months of PITIA on top of the down payment.",
        ],
      }}
      faqHeading="Rental cash flow questions"
      faqs={[
        { q: "How do you calculate cash flow on a rental property?", a: "Start with rent and extra income and take out vacancy. Then pay the running costs: property tax, insurance, any HOA, the manager, repairs and a reserve for big replacements. That leaves net operating income. Subtract the loan's principal and interest and what's left is cash flow. On the worked triplex, $3,135 of monthly income becomes $1,706 of NOI and $175 of cash flow." },
        { q: "What's the difference between NOI and cash flow?", a: "NOI is income after vacancy and operating expenses but before the loan payment, so it describes the property. Cash flow is NOI minus principal and interest, so it describes your deal with your financing. Two buyers of the same triplex share one NOI; the buyer with 20% down ends up with less monthly cash flow than the buyer with 25% down." },
        { q: "What cash-on-cash return is good for a rental?", a: "There's no single standard. Insist on positive cash flow after reserves first, then weigh the return against what else that cash could do at a similar risk. The calculator's own flag turns strong at 8%, a rule of thumb. Loan paydown, appreciation and tax items sit outside cash-on-cash; a CPA can tell you how depreciation applies to you." },
        { q: "Why does a lender's DSCR look better than my cash flow?", a: "Because the lender divides gross rent by PITIA and leaves out vacancy, management, repairs and capital reserves, while your cash flow includes all of them. The worked triplex shows 1.44 to the lender but $175 a month to its owner. The ratio tells you whether the loan qualifies; cash flow tells you whether the property is worth owning." },
        { q: "What vacancy rate should I use?", a: "Your market's rate for your type of property. The Census Bureau's national rental vacancy rate for Q2 2026 was 7.3%, and it covers every kind of rental, apartments included. Local managers can tell you typical days on market and turnover. Losing one month of rent a year is 8.3%; the worked triplex uses 7% and still cash flows at 10%." },
        { q: "How does cap rate relate to my loan?", a: "Cap rate is a year of NOI divided by the price: what the property yields if you pay cash. Compare it with the loan constant, a year of principal and interest divided by the loan. The worked triplex yields 7.18% against an 8.6% loan constant, so borrowing pulls cash-on-cash down to 2.6%, from about 7.0% all-cash." },
        { q: "Can I finance this rental with a DSCR loan?", a: "Usually, as long as nobody in your family will live there and the rent clears the lender's ratio. DSCR lenders qualify the loan on rent ÷ PITIA, not your personal income. In October 2026 most set the ratio floor at 1.00, capped purchase loans at 80% of the price and wanted credit scores of 620–680 or higher. The DSCR calculator sizes the loan the rent supports." },
      ]}
      sources={[
        { label: "U.S. Census Bureau — Housing vacancies, second quarter 2026 (July 28, 2026)", url: "https://www.census.gov/housing/hvs/current/index.html" },
        { label: "LendingOne — How DSCR rates are set (September 22, 2026)", url: "https://lendingone.com/insight/how-are-dscr-loan-interest-rates-determined/" },
        { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
        { label: "Lima One — Rental loans (1.0 minimum, 1.2 pricing tier, 1–9 units)", url: "https://www.limaone.com/rental/" },
        { label: "Kiavi — DSCR loans (reserves)", url: "https://www.kiavi.com/loans/dscr" },
        { label: "Roc Capital — Single-property rentals", url: "https://roccapital.com/single-property-rentals" },
        { label: "Roc Capital — Rental portfolios (1.05 on net cash flow)", url: "https://roccapital.com/rental-portfolios" },
        { label: "Civic Financial Services — Rental loans", url: "https://www.civicfs.com/rental/" },
        { label: "Civic Financial Services — Rental portfolio loans", url: "https://www.civicfs.com/rental-portfolio-loan/" },
        { label: "Defy Mortgage — DSCR loans (reserves)", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
        { label: "Easy Street Capital — EasyRent (reserves, 1–10 units)", url: "https://www.easystreetcap.com/easyrent" },
        { label: "OfferMarket — 40-year DSCR loans", url: "https://offermarket.us/blog/40-year-dscr-loan" },
      ]}
      updated="2026-10-26"
      related={["dscr", "portfolio", "cash-out-refinance"]}
    />
  );
}
