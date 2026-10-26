import type { Metadata } from "next";
import { BrrrrCalculator } from "@/components/BrrrrCalculator";
import { CalculatorPage } from "@/components/templates/CalculatorPage";

export const metadata: Metadata = {
  title: { absolute: "BRRRR Calculator: Cash Out at the Refinance | Fund Your Deal" },
  description: "Model both BRRRR loans: the rehab loan you buy with and the DSCR refinance that pays it off. See cash in, cash back, cash left in and if rent qualifies.",
  alternates: { canonical: "/calculators/brrrr" },
};

export default function Page() {
  return (
    <CalculatorPage
      path="/calculators/brrrr"
      crumb="BRRRR"
      title="BRRRR calculator: from rehab loan to refinance"
      intro="Buy, rehab, rent, refinance, repeat. The refinance decides whether you get to repeat. This BRRRR calculator runs both loans. First the short-term rehab loan you buy with, then the long-term rental loan that pays it off, which turns on the [debt service coverage ratio](/glossary#dscr) (DSCR): the month's rent divided by the month's payment on the new loan. You see what you put in, what the refinance hands back and what stays in the deal."
      question="Once the refinance closes, how much of your cash is still tied up in this property, and will the rent qualify for the new loan?"
      calculator={<BrrrrCalculator />}
      inputs={{
        heading: "Eighteen inputs, in the order the deal happens.",
        intro: "Buy and rehab, then refinance, then rent. Enter what the appraiser and the refinance lender will use, not the best case.",
        rows: [
          ["Contract price", "The contract price or winning bid. The rehab lender advances part of it at closing."],
          ["Rehab cost", "Your scope of work, the number you'll draw against. The calculator finances it at the same percentage as the purchase."],
          ["Loan-to-cost", "One percentage applied to price and rehab together. LendingOne's fix-to-rent program publishes up to 95% of cost with 100% of the rehab; flip lenders publish 85–100% of the price, set by experience. If your lender splits them, enter the blend: total loan ÷ (price + rehab)."],
          ["Rate, rehab loan", "Interest-only. Non-bank short-term investor loans priced at a 10.45% median in 2025 HMDA data, and half of them fell between 9.75% and 11%."],
          ["Points, rehab loan", "Origination on the rehab loan, as a percent of it. Published range: 0–2 points. Some programs reward refinancing in-house; see the fundable section below."],
          ["Months on the rehab loan", "From the purchase closing to the refinance closing: work, lease-up, the appraisal and underwriting. It also has to cover seasoning; Lima One wants three months of ownership unless it made your rehab loan."],
          ["Closing to buy", "Closing costs on the purchase (title, escrow, recording, lender fees) as a share of the price."],
          ["Value after rehab (ARV)", "The value the refinance appraisal will show once the work is done ([ARV](/glossary#arv)). The new loan is a percentage of it, so use closed sales of renovated comps and lean conservative."],
          ["Refinance LTV", "The refinance loan as a share of ARV ([LTV](/glossary#ltv)). DSCR cash-out caps ran 70–80% in October 2026, with 75% the most common; Griffin and Defy published 80%, and RCN Capital steps down to 60% at lower credit scores."],
          ["Rental loan rate", "The 30-year rate on the refinance; the calculator amortizes over 30 years. LendingOne said average investor DSCR rates ran 7–9% in September 2026, and 7.375% was the 2025 HMDA median on 30-year investor loans."],
          ["Cost to refinance", "Origination, appraisal, title and lender fees on the new loan, as a percent of it. Ask for the fee sheet early: every dollar comes straight out of your cash back."],
          ["Rent / mo", "Rent for every unit after the work. Refinance lenders count the lease or the appraisal's market rent, whichever is lower, so a signed lease at market protects the number."],
          ["Property tax / yr · Landlord insurance / yr · HOA dues / mo", "Post-renovation figures. They're part of your carrying cost during the rehab and part of the new payment ([PITIA](/glossary#pitia)) afterward."],
          ["Vacancy reserve · Repairs + capex · Property manager", "Reserves as a percent of rent. They hit your cash flow but not the lender's ratio. Rental vacancy nationally was 7.3% in Q2 2026 (Census Bureau); your street can differ a lot."],
        ],
      }}
      howHeading="Cash in, cash back, cash left: the arithmetic."
      howIntro="Two loans, one identity: what stays in the deal equals the whole project's cost less the refinance loan."
      formula="Cash left in = total project cost − refinance loan"
      how={[
        ["Rehab loan", "(Contract price + rehab cost) × loan-to-cost."],
        ["Rehab-loan interest", "Interest-only at the rehab loan's rate for the months on the rehab loan, charged on the purchase advance plus half the rehab advance: the average balance while draws go out."],
        ["Carry", "A twelfth of the yearly property tax and landlord insurance, plus HOA dues, times the months on the rehab loan."],
        ["Your cash, buy to refinance", "Contract price + rehab cost + closing to buy + points + interest + carry − rehab loan. What leaves your pocket before the refinance."],
        ["Refinance loan", "Value after rehab (ARV) × refinance LTV."],
        ["Returned by the refinance", "Refinance loan − rehab-loan payoff − cost to refinance. A negative figure means you bring cash to the refinance closing."],
        ["Your cash still in after the refinance", "Your cash, buy to refinance − what the refinance returns. At zero or below, every dollar you put in has come back, and the card shows the cash out above it."],
        ["Debt service coverage (DSCR) on the new loan", "Rent ÷ the new loan's PITIA: 30-year principal and interest, plus property tax, landlord insurance and HOA dues."],
        ["Cash flow and cash-on-cash", "Rent − PITIA − vacancy reserve, repairs + capex and property manager. Cash-on-cash is a year of that over your cash still in; it shows ∞ when nothing is left in."],
        ["The badge", "Three flags. “Every dollar back out”: nothing left in. “Under 25% of your cash stays in”: less than a quarter of your cash, buy to refinance, is still in the deal. “25%+ of your cash stays in”: a quarter or more."],
      ]}
      sections={[
        {
          id: "worked-deal",
          eyebrow: "Worked deal",
          heading: "A $172,000 duplex: $42,807 in, $25,538 back.",
          intro: "Two units, a $58,000 rehab and a refinance six months after closing. The calculator opens on this deal, so you can check every line.",
          example: {
            title: "WORKED DEAL · DUPLEX BRRRR",
            rows: [
              ["Rehab loan: 90% of $230,000", "$207,000"],
              ["Interest, points, closing to buy, carry", "$19,807"],
              ["Cash in", "$42,807"],
              ["Refinance: 75% of $318,000", "$238,500"],
              ["Cash back after payoff and 2.5% costs", "$25,538"],
              ["DSCR on $2,950 of rent", "1.39"],
              ["Cash flow after reserves", "$208 / mo"],
            ],
            result: { label: "Cash left in the deal", value: "$17,270" },
            note: "Rehab loan at 10.5% with 2 points; DSCR refinance at 7.5% over 30 years. Taxes $3,480 and insurance $1,980 a year. Reserves: 6% vacancy, 8% repairs and capex, 7% management. Illustrative only, not a quote.",
            dscr: 1.39,
          },
          blocks: [
            { type: "p", text: "The deal: a tired side-by-side duplex at $172,000. The $58,000 rehab covers kitchens, baths, flooring and a furnace on each side. After the work each unit leases for $1,475, and renovated duplexes nearby support a $318,000 appraisal." },
            { type: "h3", text: "Buy and rehab" },
            {
              type: "ol",
              items: [
                "**Rehab loan: $207,000.** 90% × ($172,000 + $58,000): $154,800 at closing and $52,200 in draws.",
                "**Interest: $9,497.** ($154,800 + half of $52,200) × 10.5% ÷ 12 × 6, or $180,900 × 0.875% × 6.",
                "**Points, closing to buy and carry: $10,310.** $4,140 of points (2% × $207,000), $3,440 to buy (2% × $172,000) and $2,730 of taxes and insurance ($455 a month × 6).",
                "**Cash in: $42,807.** $230,000 + $9,497 + $10,310 − $207,000.",
              ],
            },
            { type: "h3", text: "Refinance" },
            {
              type: "ol",
              items: [
                "**New DSCR loan: $238,500.** 75% × $318,000.",
                "**Cash back: $25,538.** $238,500 − the $207,000 payoff − $5,963 of costs (2.5%).",
                "**Cash left in: $17,270.** $42,807 − $25,538. The refinance returns about 60% of what you put in.",
              ],
            },
            { type: "h3", text: "Rent" },
            {
              type: "ol",
              items: [
                "**New payment (PITIA): $2,123.** $1,668 of principal and interest, $290 of taxes and $165 of insurance.",
                "**DSCR: 1.39.** $2,950 ÷ $2,122.63. That clears every published 1–4 unit minimum, and the 1.2 mark where Lima One's strongest rate and leverage tier begins.",
                "**Cash flow: $208 a month.** $2,950 − $2,123 − $620 of reserves (21% of rent). On the $17,270 left in, that's 14.4% cash-on-cash.",
              ],
            },
            { type: "p", text: "The calculator flags this as “25%+ of your cash stays in”: $17,270 is 40% of your cash in. The next section shows what would get it out, and what it would cost you each month." },
          ],
        },
        {
          id: "the-appraisal",
          eyebrow: "The number that decides it",
          heading: "On this duplex, the appraisal sets your cash back.",
          intro: "Rent isn't the limit here; value is. Each $1,000 of appraised value returns $731 after refinance costs.",
          blocks: [
            { type: "p", text: "The rent could carry a far bigger loan: about $356,800 at a 1.00 ratio and $272,400 at 1.25, at 7.5% over 30 years. The 75% LTV cap stops the refinance at $238,500 first. So the appraisal, not the rent, is the number that decides it." },
            {
              type: "table",
              caption: "The worked duplex with one change per row; each row is the calculator's own output (illustrative).",
              head: ["Change from the worked deal", "Your cash still in after the refinance", "DSCR", "Cash flow / mo"],
              rows: [
                ["None", "$17,270", "1.39", "$208"],
                ["Appraisal $300,000 ($18,000 low)", "$30,432", "1.45", "$302"],
                ["Appraisal $341,600", "$12", "1.31", "$84"],
                ["Lender lends 80% of value", "$1,767", "1.32", "$97"],
                ["Lender lends 70% of value", "$32,772", "1.47", "$319"],
                ["Refinance in month 9, not month 6", "$23,383", "1.39", "$208"],
                ["Rent $2,750 on the appraiser's schedule", "$17,270", "1.30", "$50"],
                ["Refinance rate 8.25%", "$17,270", "1.31", "$84"],
              ],
            },
            { type: "p", text: "**A low appraisal hits twice.** $18,000 less value leaves $13,162 more cash in the deal. Cash flow improves only because the loan got smaller, which is cold comfort when your cash is stuck." },
            { type: "p", text: "**More leverage trades cash flow for cash back.** An 80% lender, as Griffin and Defy published, returns nearly everything, but the bigger payment cuts cash flow to $97 a month. A full recovery on these terms needs an appraisal near $341,600, or a purchase price about $15,900 lower (roughly $156,100)." },
            { type: "p", text: "**Every idle month costs $2,038 here:** $1,583 of rehab-loan interest plus $455 of taxes and insurance, all paid before the refinance closes." },
            { type: "p", text: "**Rehab-loan leverage moves cash at the start, barely at the end.** Borrow 85% of cost instead of 90% and your cash in rises to $53,550, yet cash left in drops slightly, to $16,512, because a smaller rehab loan carries less interest and fewer points." },
            { type: "p", text: "If none of the levers is realistic, decide up front that about $17,000 stays in, and judge the deal on the $208 a month it pays you for that money." },
          ],
        },
        {
          id: "fundable",
          eyebrow: "Fundable?",
          heading: "The refinance has four gates. Clear them before you buy.",
          intro: "A BRRRR gets funded twice. The rehab lender looks at cost and ARV; the refinance lender looks at value, rent, credit and how long you've owned it.",
          blocks: [
            {
              type: "table",
              caption: "Published terms for 1–4 unit rentals, September–October 2026. Each lender sets its own mix.",
              head: ["Gate", "What lenders published", "Worked deal"],
              rows: [
                ["Loan-to-value", "Cash-out caps of 70–80% of appraised value, most often 75%; fix-to-rent refinances at about 75% of ARV", "75%: $238,500"],
                ["DSCR", "Roc Capital and Civic want 1.05; Lima One and RCN Capital 1.00; Kiavi 0.80; LendingOne and Defy 0.75", "1.39: clears all"],
                ["Seasoning", "Roughly 90 days of ownership; waived for in-house refinances at Lima One; some lenders cap the loan at your cost until then", "6 months planned"],
                ["Credit score", "Minimums of 620–680; 660 at Lima One, RCN Capital, Roc Capital and Civic", "Check yours before you buy"],
              ],
            },
            { type: "p", text: "**The rehab loan has limits too.** LendingOne's fix-to-rent program publishes up to 95% of cost, 100% of the rehab and a 9-month term; Lima One's rehab terms run 13–24 months. Months on the rehab loan has to fit inside that term, with room for a slow lease-up." },
            { type: "p", text: "**Staying in-house can pay.** LendingOne cuts the rate by 0.5% and origination by up to half when its rehab borrowers refinance with it, and Lima One adds a point to the rehab loan if you refinance elsewhere. Bought with cash? Kiavi publishes a delayed-purchase refinance within six months." },
            { type: "p", text: "**When the gates disagree, the tighter one wins.** If the rent can't carry the LTV-sized loan at the lender's minimum, the loan shrinks to what the rent supports and more cash stays in. Test it in the [DSCR calculator](/calculators/dscr), with the appraised value in the Price or appraised value box and 25 in the Cash down box." },
            { type: "p", text: "One deal worked from offer to refinance is in [the BRRRR method, step by step](/guides/brrrr-method-step-by-step); the refinance itself is covered in [refinancing after a rehab](/guides/refinance-after-rehab)." },
            { type: "callout", title: "Rentals only", text: "Both loans in a BRRRR are business-purpose credit for a property you rent to others. If you or your family will live there, you need a residential mortgage." },
            { type: "cta", text: "Clears all four gates? Get your BRRRR funded. Applying takes about 60 seconds.", href: "/get-funding?loan=brrrr", label: "Get my BRRRR funded" },
          ],
        },
      ]}
      tips={{
        heading: "More cash back without stretching the numbers.",
        items: [
          "**Buy the value gap.** On the worked duplex, each $1,000 off the price leaves about $1,085 less in the deal; each $1,000 of extra appraised value, $731.",
          "**Lease before the appraisal.** A signed lease at market rent backs up the rent figure the refinance lender counts.",
          "**Hand the appraiser your evidence.** Closed renovated comps and an itemized list of the work, with costs.",
          "**Pick the refinance lender before you close the purchase.** Seasoning, LTV caps and in-house incentives decide your months and your cash back.",
          "**Close the gap between finished and refinanced.** Each idle month costs $2,038 on this deal.",
        ],
      }}
      mistakes={{
        heading: "Where BRRRR plans go wrong.",
        items: [
          "**Sizing the refinance on your own ARV.** Rerun the deal with an appraisal 5–10% lower before you commit.",
          "**Setting months on the rehab loan to the rehab schedule.** Add lease-up, seasoning, the appraisal and the closing.",
          "**Counting pro forma rent.** The refinance lender takes the lease or market rent, whichever is lower.",
          "**Skipping the cost to refinance.** At 2.5% they're $5,963 here, taken straight off your cash back.",
          "**Reading the badge alone.** Getting every dollar back while losing money each month just moves the cost to your monthly statement.",
          "**Scope creep.** Upgrades outside the funded budget come out of your pocket, and they stay in the deal unless the appraiser gives you credit for them.",
        ],
      }}
      faqHeading="BRRRR questions"
      faqs={[
        { q: "How much cash can a BRRRR refinance return?", a: "Take the refinance loan, subtract what you still owe on the rehab loan, then subtract closing costs. Cash-out caps lenders published in October 2026 ran 70–80% of appraised value, most often 75%. On a $318,000 appraisal at 75%, the new loan is $238,500; after a $207,000 payoff and 2.5% costs, $25,538 comes back. Whether that's all your cash depends on what you put in." },
        { q: "When can I refinance a BRRRR property?", a: "Usually after about 90 days of ownership, once lenders will lend on the new appraised value. Lima One publishes three months and waives it when it made your rehab loan. Before then, Roc Capital caps the refinance at 80% of your total cost basis. If you bought with cash, Kiavi publishes a delayed-purchase refinance within six months. Set months on the rehab loan to cover seasoning, lease-up and the closing." },
        { q: "What DSCR does a BRRRR refinance need?", a: "Whatever the refinance lender's minimum is. For 1–4 unit rentals, Roc Capital and Civic published 1.05, Lima One and RCN Capital 1.00, and LendingOne and Defy went as low as 0.75. Lima One keeps its strongest rate and leverage tier for 1.2 and up. The worked duplex reaches 1.39, so its loan-to-value cap, not its rent, limits the refinance." },
        { q: "What happens if the BRRRR appraisal comes in low?", a: "The new loan shrinks by the cash-out percentage of the shortfall, and that money stays in the deal. At 75% LTV with 2.5% costs, each $1,000 of missing value costs about $731 of cash back. On the worked duplex, an $18,000 shortfall leaves $30,432 in instead of $17,270. Give the appraiser your comps and an itemized list of the work." },
        { q: "Is getting all my cash back realistic?", a: "Only when every cost before the refinance, interest and carry included, fits inside the new loan after its own closing costs: about 73% of ARV at 75% LTV and 2.5% costs. The worked duplex would need an appraisal near $341,600 or a price about $15,900 lower. Plenty of solid BRRRRs leave some cash in and earn it back through monthly cash flow." },
        { q: "Should the same lender do my rehab loan and my refinance?", a: "It often pays. LendingOne takes 0.5% off the rate and as much as half off origination for fix-to-rent borrowers who refinance with it, and Lima One waives its three-month seasoning for its own rehab loans but adds a point if you refinance elsewhere. The trade-off is that your long-term terms are largely set when you start, so read them before you close the purchase." },
        { q: "Why does cash left in barely move when I borrow less on the rehab?", a: "Because what stays in is total project cost less the refinance loan. The rehab loan is paid off at the refinance, so its size mostly shifts cash between the start and the end; only its interest and points change the total. On the worked duplex, 85% of cost instead of 90% adds $10,742 at purchase and trims cash left in by $758." },
      ]}
      sources={[
        { label: "LendingOne — Fix to rent loans (95% of cost, 75% of ARV refinance, in-house incentives)", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
        { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
        { label: "LendingOne — How DSCR rates are set (September 22, 2026)", url: "https://lendingone.com/insight/how-are-dscr-loan-interest-rates-determined/" },
        { label: "Lima One — Rental loans (1.0 minimum, 1.2 pricing tier, seasoning)", url: "https://www.limaone.com/rental/" },
        { label: "Lima One — Fix and flip loans (terms, in-house refinance point)", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
        { label: "Kiavi — DSCR loans", url: "https://www.kiavi.com/loans/dscr" },
        { label: "Kiavi — Fix and flip loans (delayed-purchase refinance)", url: "https://www.kiavi.com/loans/fix-and-flip" },
        { label: "Roc Capital — Single-property rentals (cost-basis cap inside the first 3 months)", url: "https://roccapital.com/single-property-rentals" },
        { label: "Civic Financial Services — Rental loans", url: "https://www.civicfs.com/rental/" },
        { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
        { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
        { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
        { label: "2025 HMDA rates on investor loans, summarized by Crowdfunded Wealth (updated October 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
        { label: "U.S. Census Bureau — Housing vacancies, second quarter 2026 (July 28, 2026)", url: "https://www.census.gov/housing/hvs/current/index.html" },
      ]}
      updated="2026-10-26"
      related={["brrrr", "fix-and-flip", "dscr"]}
    />
  );
}
