import type { Guide } from "../types";

const bridgeLoanExitStrategies: Guide = {
  slug: "bridge-loan-exit-strategies",
  metaTitle: "Bridge Loan Exit Strategies: Sale, Refinance, Lease-Up",
  metaDescription:
    "Bridge loan exit strategies: sale, refinance or lease-up, what lenders check for each, what extensions and default interest cost, and a worked deal.",
  category: "Financing basics",
  title: "Bridge loan exit strategies: choose the way out before you take the loan, and price the delay",
  dek: "Every bridge loan is underwritten on how it ends. Here are the three exits — sell, refinance into a loan sized on DSCR (debt service coverage ratio: how many times the monthly rent covers the monthly payment), or lease up first — what a lender looks for in each, and what a late exit costs.",
  readMinutes: 11,
  published: "2026-10-26",
  updated: "2026-10-26",
  keyTakeaways: [
    "A bridge loan has three workable exits: a sale, a refinance into a long-term rental loan, or a lease-up that leads to that refinance. Name one at application; the lender sizes the loan around it.",
    "A sale takes longer than it looks. Realtor.com's national median was 61 days on market in September 2026, and a buyer's purchase mortgage averaged 36.8 days to close in March.",
    "A refinance has to pass three tests on the same day: value (about 75% loan-to-value on most cash-outs), rent (DSCR minimums of 0.75–1.05, and 1.10 on one bridge lender's exit test) and time (about 90 days of seasoning).",
    "When the exit slips, an extension is the cheap fix if you ask early: 1% for 3 months on one published schedule. Default interest is the expensive one: up to 24% a year at one listed lender.",
    "In the worked example, a 7-month delay and a $20,000-lower appraisal cost $30,950, about 2.7 times the interest the bridge was planned to cost.",
  ],
  body: [
    {
      type: "p",
      text: "Bridge loan exit strategies are the reason the loan exists. A bridge lender lends for 12–24 months, interest-only, against a property that isn't ready for permanent financing, and expects its money back in one payment from one of three places: a buyer, a refinance lender, or a refinance lender after you've signed leases. The exit is the number that decides it. Roc Capital writes the test straight into one program: its DSCR-exit bridge requires a 1.10 exit [DSCR](/glossary#dscr), measured on whichever is lower, in-place rent or market rent. Below: each exit, a worked deal, and your options when the date slips.",
    },
    { type: "h2", text: "Three exits, side by side", id: "three-exits" },
    {
      type: "table",
      caption: "Bridge loan exits: what each needs and where each slips (lender terms as of October 2026)",
      head: ["", "Sale", "Refinance", "Lease-up, then refinance"],
      rows: [
        ["Who repays the bridge", "A buyer", "A long-term rental or portfolio lender", "A rental lender, once leases are signed"],
        ["What the lender wants", "Comps that back your list price; a house ready to show", "A value that supports about 75% leverage; rent that covers the new payment", "A rent-ready unit, market rent evidence and a leasing plan"],
        ["Time it needs", "Market time (61-day national median, Sept 2026) plus the buyer's closing", "About 90 days of seasoning, then 2–5 weeks to close", "Make-ready and leasing, then the refinance"],
        ["Where it slips", "Price cuts; the buyer's financing falls through", "Low appraisal; higher rates; a seasoning rule", "Vacancy; rent below plan; deferred maintenance"],
        ["Early payoff", "No prepayment penalty at Kiavi or Lima One", "Same; the new loan may carry its own penalty", "Same"],
      ],
    },
    { type: "h2", text: "Exit 1: sell the property", id: "sale" },
    {
      type: "p",
      text: "On paper, a sale is the simplest exit: the buyer's funds pay off the bridge, and with no prepayment penalty at Kiavi or Lima One, selling early saves the rest of the interest. The risk is the calendar. Realtor.com's national median was 61 days on market in September 2026, counted from listing to pending, closing or off-market depending on the data. If your buyer finances, ICE's data put the average purchase loan at 36.8 days to close in March 2026. Put those together and list three to four months before maturity, not one.",
    },
    { type: "h3", text: "What a lender wants to see behind a sale exit" },
    {
      type: "ul",
      items: [
        "**Comps** that support your target price for the house as it will be when listed, not as it is today.",
        "**Condition.** Roc's no-DSCR bridge, built for renovated or new homes that are listed or about to be, requires C2 condition or better, and won't lend on a house valued above the 90th percentile for its market.",
        "**A track record.** Kiavi says your record of property exits, along with your credit score and the after-repair value, plays a key role in how much it lends.",
        "**Margin.** The payoff, selling costs and months of carry have to fit under a realistic price, not the single best comp.",
      ],
    },
    { type: "h3", text: "When a bridge is the exit from a flip loan" },
    {
      type: "p",
      text: "A finished flip that needs more market time than its rehab loan allows can move onto a bridge. Price that against extending the loan you have. A new bridge brings new points and closing costs; an extension at 1% for 3 months, on one published schedule, may cost less if a quarter is all you need.",
    },
    { type: "h2", text: "Exit 2: refinance into a long-term loan", id: "refinance" },
    {
      type: "p",
      text: "If you're keeping the property, the refinance lender is your exit, and its rules govern, not the bridge lender's. Three tests have to pass at the same time.",
    },
    {
      type: "ul",
      items: [
        "**Value.** DSCR lenders published 75–80% loan-to-value on rate-and-term refinances and about 75% on most cash-outs in October 2026. At that leverage, the new loan has to cover the bridge payoff and its own closing costs.",
        "**Rent.** Published DSCR minimums ran from 0.75 to 1.05: 1.00 at Lima One and RCN, 1.05 at Roc and Civic. Most qualify on whichever is less, the signed lease or the appraiser's market rent; Kiavi allows market rent up to 110% in that comparison, and Roc and Civic credit a vacant unit with 90% of market rent.",
        "**Time.** About 90 days of ownership is the usual wait before a lender will lend on a new appraised value; Kiavi and Roc both set 90 days. Some lenders, Lima One among them, waive it when they made the short-term loan. Roc will refinance sooner, but caps the loan at 80% of your total cost basis if you've owned the property under 3 months.",
      ],
    },
    {
      type: "p",
      text: "Then allow for the refinance's own closing: Defy published 14–21 days, Easy Street 30 and Griffin an average of 34. Apply around day 60 if you want to be out soon after day 90. The full sequence, from appraisal to cash back, is in [refinance after rehab](/guides/refinance-after-rehab).",
    },
    { type: "h3", text: "Stress the rate, not just the rent" },
    {
      type: "p",
      text: "The refinance rate isn't set until you lock it, months after the bridge closes. Griffin advertised 30-year DSCR loans from 7.125% in October 2026, Defy put its best case at 7.375% for 740+ credit at 75% LTV, and 30-year DSCR-type loans in the 2025 HMDA file had a 7.375% median. Those are prices for strong files, so run your ratio at the rate you expect and again half a point higher; the worked example shows how that half point can tip a passing file under a 1.10 test.",
    },
    { type: "h3", text: "Staying with one lender can pay" },
    {
      type: "p",
      text: "Some lenders reward an in-house refinance. LendingOne's fix-to-rent program cuts the rate by 0.5% and origination by as much as half; Lima One adds a point to the payoff on its rehab loans if you refinance elsewhere. Find out which applies before the bridge closes, while you can still choose.",
    },
    { type: "h2", text: "Exit 3: lease up, then refinance", id: "lease-up" },
    {
      type: "p",
      text: "A vacant or partly leased property can't pass a rent test, so the bridge carries it while you finish make-ready and sign leases. This exit has the most moving parts because it stacks two timelines, leasing and then the refinance, and either can run long.",
    },
    {
      type: "ul",
      items: [
        "**Condition.** Roc's DSCR-exit bridge takes properties in C4 condition or better with no deferred maintenance.",
        "**Rent evidence.** Market rent comps for the unit and the rent you'll ask. Because the refinance counts the lower of lease and market rent, asking above market doesn't help the ratio.",
        "**The exit math at a higher rate.** Show the DSCR at the rate you expect and at a higher one.",
        "**Cash to carry the vacancy.** Interest, taxes and insurance continue while the unit is empty. Some loans hold back an interest reserve for this; Roc and Civic require one month of interest reserve on their ground-up construction loans.",
      ],
    },
    {
      type: "p",
      text: "Model the rent first in the [DSCR calculator](/calculators/dscr), or work through [rental cash flow before you buy](/guides/rental-cash-flow-before-you-buy).",
    },
    {
      type: "cta",
      text: "Buying a property that needs a lease-up before it can refinance? Get bridge terms built around your exit.",
      href: "/get-funding?loan=bridge",
      label: "Fund my bridge loan",
    },
    { type: "h2", text: "Worked example: one bridge, on plan and late", id: "worked-example" },
    {
      type: "p",
      text: "A vacant 3-bed bought for $318,000, needing $22,000 of paint, flooring and fixtures paid in cash. Bridge loan at 75% of price and 9.75% interest-only, the low end of the 2025 non-bank middle half (9.75–11%); 1 point; a 12-month term; no prepayment penalty. The plan: lease in month 3, appraise at $365,000, and refinance in month 6 into a 30-year DSCR loan at 75% of value and 7.375%. Rent is $2,700; taxes and insurance are assumed at $490 a month, which with principal and interest makes up [PITIA](/glossary#pitia) (there's no HOA).",
    },
    {
      type: "table",
      caption: "Bridge to DSCR refinance: on plan vs. late (illustrative, not a quote)",
      head: ["", "On plan", "Late"],
      rows: [
        ["Bridge loan, 75% of $318,000", "$238,500", "$238,500"],
        ["Down payment and 1 point at closing", "$81,885", "$81,885"],
        ["Monthly interest at 9.75%", "$1,937.81", "$1,937.81"],
        ["Lease signed", "Month 3", "Month 8"],
        ["Refinance closes", "Month 6", "Month 13"],
        ["Bridge interest paid", "$11,626.88 (6 months)", "$25,191.56 (13 months)"],
        ["Extension fee, 1% for 3 months", "None", "$2,385"],
        ["Appraised value", "$365,000", "$345,000"],
        ["DSCR loan, 75% of value", "$273,750", "$258,750"],
        ["Principal and interest, 30 years at 7.375%", "$1,890.72", "$1,787.12"],
        ["PITIA, with $490 taxes and insurance", "$2,380.72", "$2,277.12"],
        ["DSCR on $2,700 rent", "1.13", "1.19"],
        ["Cash back, before refinance closing costs", "$35,250", "$20,250"],
        ["Cash in: down payment, point, work, interest, extension", "$115,511.88", "$131,461.56"],
        ["Cash left in the deal", "$80,261.88", "$111,211.56"],
      ],
    },
    {
      type: "p",
      text: "The late case leaves $30,949.68 more of your money in the deal: $13,564.69 of extra interest, a $2,385 extension fee and $15,000 less from the refinance. That's about 2.7 times the $11,626.88 the whole bridge was meant to cost in interest. Rent collected after each lease date, closing costs and holding costs are left out of both columns. Notice what didn't break: the ratio. The smaller loan actually improved it. Delay damages a bridge deal through cost and cash back, long before it threatens the rent test.",
    },
    { type: "h3", text: "The rate risk inside the plan" },
    {
      type: "p",
      text: "Now keep everything on plan but let DSCR rates rise half a point, to 7.875%, before you lock. Principal and interest on $273,750 climb to $1,984.88, PITIA to $2,474.88, and the ratio falls to 1.09. That still clears a 1.00 minimum, but it fails a 1.10 exit test like Roc's. Passing at 1.10 would take $2,722.37 of rent, or a smaller loan. At the plan's 7.375%, the rent needed is $2,380.72 for 1.00 and $2,618.79 for 1.10. Know both numbers before you sign the bridge.",
    },
    { type: "h2", text: "When the exit slips: extend, refinance, sell or default", id: "slips" },
    {
      type: "p",
      text: "Most slips show up months ahead: a lease-up running long, an appraisal that comes in light, a buyer who walks. What you do with that warning decides the cost.",
    },
    { type: "h3", text: "Ask for an extension while you're current" },
    {
      type: "p",
      text: "Extensions are the standard fix, and they're cheapest when requested before maturity with every payment made. Anchor Loans tells borrowers that's the moment to ask, and that the lender will want to know why you need the time and how you'll pay off at the end of it. Terms vary. OfferMarket's schedule: 1% buys 3 months, 2.5% buys 6, and the total can't exceed half the original term. Rehab Financial's 9-month rehab loan carries an automatic 3-month extension for 1%. Kiavi's construction loans come with 3- or 6-month extension options. Sachem Capital extends only when the borrower has complied with every covenant and the loan still fits its current underwriting, and it charges additional points. A property that has lost value or rent may not qualify, which is why you ask while the numbers still work.",
    },
    { type: "h3", text: "Replace the bridge with another short-term loan" },
    {
      type: "p",
      text: "If the lender won't extend, a new short-term loan on today's value can take out the old one. It means new points and closing costs, and the new lender sizes it on current value. In the late case, Roc's 70% stabilized-bridge leverage on $345,000 is $241,500, just $3,000 over the $238,500 payoff before any costs, which is too thin to work.",
    },
    { type: "h3", text: "Sell before maturity, even for less" },
    {
      type: "p",
      text: "When neither works, a price cut that sells the house before maturity usually costs less than the default terms below.",
    },
    { type: "h3", text: "What default actually costs" },
    {
      type: "p",
      text: "Reach maturity with no payoff and no extension and the loan is in default. A higher default rate replaces the note rate: up to 24% a year at Sachem Capital, against its typical 10–13%, and the greater of the note rate and prime plus 3% on most of Manhattan Bridge Capital's loans. On the example's $238,500, 24% is $4,770 a month, $2,832.19 more than at 9.75%. Late fees come on top; Anchor Loans gives the example of 10% of a missed payment after a 10-day grace period. A notice of default then starts the road to foreclosure, and with a personal guarantee, any shortfall can follow you personally.",
    },
    {
      type: "p",
      text: "This isn't a rare event. Sachem reported $80.3 million of its $337.6 million loan book 90 or more days past due at June 30, 2026, about 24%.",
    },
    {
      type: "callout",
      title: "Choose the term for the late case",
      text: "In the example, a 13-month exit on a 12-month loan needed an extension; an 18-month term at Kiavi or a 19-month term at Lima One would not have. Bridge programs publish 12–24 months, and with no prepayment penalty at Kiavi or Lima One you pay interest only for the months you use. Ask whether the longer term changes the rate or points.",
    },
    { type: "h2", text: "The exit file to hand a lender at application", id: "exit-file" },
    {
      type: "ul",
      items: [
        "The exit in one line: sale, refinance, or lease-up then refinance, and the month you expect it.",
        "For a sale: closed comps near your target price and your planned list date.",
        "For a refinance: the as-repaired value, market rent comps, and the DSCR at today's rate and at a higher one.",
        "The budget and timeline for any work, with a contingency line.",
        "A fallback: what you'll do if the first exit misses by three months, and the cash to carry it.",
        "Past exits, with dates and prices.",
      ],
    },
    {
      type: "p",
      text: "The bridge loans described here are business-purpose loans on investment property. If you're buying a home to live in before selling your current one, that's a job for a residential lender.",
    },
    {
      type: "cta",
      text: "Have the deal and the exit date? Get bridge funding fast and close on time.",
      href: "/get-funding?loan=bridge",
      label: "Fund My Deal",
    },
  ],
  faqs: [
    {
      q: "What is an exit strategy on a bridge loan?",
      a: "It's how the loan gets repaid when its 12–24 month term ends: a sale, a refinance into a long-term loan, or a lease-up followed by that refinance. Bridge loans are interest-only with the balance due at maturity, so the lender underwrites the exit as closely as the property. Expect to state yours at application and support it with comps, rent data and a timeline.",
    },
    {
      q: "When should I start the refinance out of a bridge loan?",
      a: "About a month before you'll meet the new lender's seasoning rule. Most DSCR lenders wait about 90 days before lending on a new appraised value, and published DSCR closings take 14–34 days, so applying around day 60 lets you close soon after day 90. If the lender that made your bridge loan will refinance it in-house, ask whether it waives seasoning.",
    },
    {
      q: "How much does a bridge loan extension cost?",
      a: "It depends on the note or the negotiation. OfferMarket charges 1% of the balance for a 3-month extension and 2.5% for a 6-month one, up to half the original term. Rehab Financial extends its 9-month loan by 3 months for 1%. Sachem Capital charges additional points and extends only if the loan still meets its underwriting. Interest keeps running the whole time, so add it to the fee.",
    },
    {
      q: "What is default interest on a bridge loan?",
      a: "A higher rate that replaces the note rate once the loan is in default, including when maturity passes unpaid. Sachem Capital discloses default rates of up to 24% a year against typical rates of 10–13%; Manhattan Bridge Capital uses the greater of the note rate and prime plus 3% on most loans. On $238,500, 24% is $4,770 a month. Read the triggers and grace period before you sign.",
    },
    {
      q: "What DSCR do I need to refinance out of a bridge loan?",
      a: "Published minimums ran 0.75 to 1.05 in October 2026, with Lima One and RCN at 1.00 and Roc and Civic at 1.05, usually measured on the lower of lease and market rent. Roc's DSCR-exit bridge tests 1.10. Run the ratio at a higher rate than today's: a half-point rise moved the worked example in this guide from 1.13 to 1.09.",
    },
    {
      q: "Is a sale or a refinance the safer bridge exit?",
      a: "Neither is safe alone; they fail in different ways. A sale depends on market time, a 61-day national median in September 2026, and on the buyer's financing. A refinance depends on the appraisal, the rent and the rate on a future date. The strongest plans name one exit and keep the other as a fallback: a rental that would sell, or a flip that would rent.",
    },
  ],
  related: {
    programs: ["bridge", "dscr", "hard-money", "brrrr"],
    guides: ["refinance-after-rehab", "rental-cash-flow-before-you-buy", "how-hard-money-loans-work", "investor-loan-points-and-fees"],
  },
  sources: [
    { label: "Roc Capital — Stabilized Bridge program page", url: "https://roccapital.com/stabilized-bridge" },
    { label: "Kiavi — Bridge loans", url: "https://www.kiavi.com/loans/bridge-loans" },
    { label: "Lima One — Bridge Plus", url: "https://www.limaone.com/bridge-loans/" },
    { label: "Kiavi — DSCR loans (qualifying rent, seasoning)", url: "https://www.kiavi.com/loans/dscr" },
    { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
    { label: "Lima One — FixNFlip (in-house refinance terms)", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "Roc Capital — Single-property rentals (seasoning, cost-basis cap, vacant-unit rent)", url: "https://roccapital.com/single-property-rentals" },
    { label: "Civic — Rental loans", url: "https://www.civicfs.com/rental/" },
    { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
    { label: "LendingOne — Fix to rent loans", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
    { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
    { label: "Defy Mortgage — DSCR loan rates (October 23, 2026)", url: "https://defymortgage.com/dscr-loan-rates/" },
    { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
    { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
    { label: "Roc Capital — Ground-up construction (interest reserve)", url: "https://roccapital.com/ground-up" },
    { label: "Civic — Ground-up construction loans", url: "https://www.civicfs.com/ground-up-construction-loan/" },
    { label: "Kiavi — New construction (infill) loans", url: "https://www.kiavi.com/loans/new-construction-infill" },
    { label: "FRED / Realtor.com — Median days on market, United States", url: "https://fred.stlouisfed.org/series/MEDDAYONMARUS" },
    { label: "ICE — May 2026 Mortgage Monitor (time to close)", url: "https://mortgagetech.ice.com/resources/data-reports/may-2026-mortgage-monitor" },
    { label: "Crowdfunded Wealth — analysis of 2025 HMDA short-term investor loans (updated October 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
    { label: "OfferMarket — Florida fix-and-flip terms: extension schedule", url: "https://www.offermarket.us/fix-and-flip-loan/florida" },
    { label: "Rehab Financial Group — How rehab loans work", url: "https://rehabfinancial.com/how-rehab-loans-work" },
    { label: "Sachem Capital — Form 10-K for 2025 (SEC)", url: "https://www.sec.gov/Archives/edgar/data/1682220/000168222026000014/sach-20251231.htm" },
    { label: "Crowdfunded Wealth — Hard money extension, points and default interest in SEC filings", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-extension-default-interest-points-2026" },
    { label: "Anchor Loans — Hard money loan default: what to do if you fall behind", url: "https://anchorloans.com/blog/hard-money-loan-default-what-to-do-if-you-fall-behind-on-your-fix-and-flip-loan" },
  ],
};

export default bridgeLoanExitStrategies;
