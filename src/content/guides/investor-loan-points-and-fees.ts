import type { Guide } from "../types";

const investorLoanPointsAndFees: Guide = {
  slug: "investor-loan-points-and-fees",
  metaTitle: "Investor Loan Points and Fees: What a Point Really Costs",
  metaDescription:
    "Points, origination, draw, extension and exit fees on investor loans, what a point is worth vs. rate, and the all-in cost of a $320,000 flip loan.",
  category: "Financing basics",
  title: "Investor loan points and fees: a point costs more the shorter you hold the loan",
  dek: "Points, underwriting, draw, extension and exit fees all land on the same deal. What lenders published in October 2026, how to turn points into a rate you can compare, and the all-in cost of one flip loan, line by line.",
  readMinutes: 11,
  published: "2026-10-26",
  updated: "2026-10-26",
  keyTakeaways: [
    "A point is 1% of the loan, charged on the whole amount at closing, rehab money you haven’t drawn included. Over a 6-month hold, 1 point costs about as much as 2 percentage points of annual rate.",
    "Published fix-and-flip pricing in October 2026 ran 0–2 points, with a flat underwriting, processing or document fee of roughly $500–$1,995 and draw fees of about $100–$300 each.",
    "On our $320,000 flip loan, 10.8% with 1 point beat 9.6% with 2 points by $1,124 over 7 months. Past about 10½ months, the low-rate quote wins.",
    "All in, the 10.8% loan cost $24,129 over 7 months, about 13.9% a year on the money drawn. A 3-month extension with a 1% fee added $11,840.",
  ],
  body: [
    {
      type: "p",
      text: "Investor loan points and fees are the part of the price that isn’t in the rate. Each point costs 1% of what you borrow, due at closing: $3,200 on a $320,000 loan. Around the points sit flat fees for underwriting, processing or documents, a fee each time you draw rehab money, and the charges that only appear when a loan runs long or pays off: extension fees, exit fees and minimum-interest clauses. On a short-term loan, together they can add several percentage points to what you really pay. Here’s each one, what lenders published, and how to price a quote in dollars before you sign it.",
    },
    { type: "h2", text: "Points are the origination fee, quoted as a percentage", id: "points" },
    {
      type: "p",
      text: "Lenders use “points” and “origination fee” for the same charge. One [point](/glossary#points) is 1% of the loan, so 1.5 points on a $450,000 loan is $6,750. Here’s what lenders published in October 2026.",
    },
    {
      type: "table",
      caption: "Published points and origination on short-term investor loans, October 2026",
      head: ["Lender and program", "Points", "Also published"],
      rows: [
        ["Easy Street Capital, EasyFix", "0–2", "A $1,995 document fee"],
        ["New Silver, fix and flip", "1–1.75", ""],
        ["Rehab Financial, 100% fix and flip", "As low as 1.5", "9-month term; rates as low as 9.99%"],
        ["Ridge Street Capital, fix and flip", "From 1.5; 2.0 on its beginner tier", "Doesn’t price origination on experience"],
        ["Ground-up construction (New Silver, LendingOne)", "1–2", "LendingOne’s published example uses 1.5%"],
        ["Lima One, fix and flip", "Not published", "Origination can be deferred to the exit"],
      ],
    },
    {
      type: "p",
      text: "A zero-point quote isn’t automatically the cheap one. Easy Street’s 0–2 range shows that points can be a dial. Ask each lender for the rate at two settings, say 0 and 2 points, so you can see whether turning one moves the other and by how much.",
    },
    { type: "h2", text: "What a point is worth against the rate", id: "point-vs-rate" },
    {
      type: "p",
      text: "You pay points once and rate every month the money is out, so a point’s weight depends on how long you keep the loan. Over 12 months, 1 point costs about the same as 1 percentage point of rate. Over 6 months it’s about 2, and over 4 months, 3.",
    },
    { type: "formula", text: "Rate equivalent of points ≈ points × 12 ÷ months the loan is outstanding" },
    {
      type: "p",
      text: "Two refinements keep the shortcut honest. First, points are charged on the full loan at closing, while interest on most rehab loans runs only on drawn funds, so on a rehab loan a point weighs a little more than the formula says. Second, the hold you plan isn’t always the hold you get. Price the plan, then price the slip.",
    },
    { type: "h3", text: "Worked comparison: two quotes on the same $320,000 flip" },
    {
      type: "p",
      text: "You’re buying a house for $260,000 with an $86,000 rehab budget and a $440,000 ARV. The lender funds 90% of the price ($234,000) at closing and 100% of the rehab in three draws at the ends of months 1, 2 and 3, for a $320,000 loan. 75% of ARV would be $330,000, so cost sets the loan. You plan to sell at the end of month 7. Quote B's 10.8% sits inside 9.75–11%, the middle half of 2025 HMDA rates on non-bank short-term investor loans; Quote A's 9.6% falls just under it, in the cheapest quarter.",
    },
    {
      type: "table",
      caption: "Quote A vs. Quote B: interest on drawn funds over a 7-month hold",
      head: ["", "Quote A", "Quote B"],
      rows: [
        ["Rate", "9.6%", "10.8%"],
        ["Points", "2 ($6,400)", "1 ($3,200)"],
        ["Interest, 7 months", "$16,608", "$18,684"],
        ["Points plus interest", "$23,008", "$21,884"],
        ["Difference", "", "$1,124 cheaper"],
      ],
    },
    {
      type: "p",
      text: "The drawn balance is $234,000 in month 1, $264,000 in month 2, $298,000 in month 3 and $320,000 from month 4 on. Quote B saves $3,200 in points and spends $2,076 more in interest, so it comes out $1,124 ahead. Every extra month at the full balance, though, costs B $320 more than A: 1.2 percentage points of rate on $320,000, divided by 12. That lead lasts about 3½ more months, so if the loan stays out past roughly 10½ months, Quote A is cheaper. If the plan has a refinance, a permit wait or a slow resale market in it, the expected hold is the number that decides it.",
    },
    {
      type: "cta",
      text: "Have two quotes and a deal under contract? Send it over and get terms priced in dollars, not just a rate.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund My Deal",
    },
    { type: "h3", text: "On a construction loan, points land on money you won’t see for months" },
    {
      type: "p",
      text: "The draw effect is biggest on a ground-up build. In the [construction draw schedule](/guides/construction-draw-schedule) example, a $459,000 loan at 1.5 points costs $6,885 at closing, when only $59,000 of the loan is out. Over the 12-month build the average drawn balance is about $271,333, so those points cost about 2.5% a year on the money actually used, not the 1.5% the shortcut suggests. Financing them doesn’t change the math: LendSure lets origination be financed on its ground-up loans, but a financed point is borrowed money that accrues interest like the rest of the balance.",
    },
    { type: "h2", text: "Underwriting, processing and document fees: flat, and easy to miss", id: "flat-fees" },
    {
      type: "p",
      text: "Most lenders add a flat fee at closing on top of the points, under one of several names. Easy Street published a $1,995 document fee. Ridge Street Capital puts the underwriting fee, which it says is sometimes called a processing or legal fee, at $1,250–$1,995. A September 2026 survey of hard money pricing at RentalRealEstate.com listed $500–$1,500 as the typical range for processing or underwriting. Kiavi says it charges no application fee.",
    },
    {
      type: "p",
      text: "Flat fees matter most on small loans. Half a point on a $399,000 loan is $1,995, so a quote at 1.5 points plus a $1,995 fee costs more than a quote at 2 points with no fee on any loan below that size. Put every flat fee on the term sheet, by name and amount, before you compare.",
    },
    {
      type: "p",
      text: "Then separate the lender’s charges from everyone else’s. Title, insurance, escrow and state fees aren’t lender fees; Ridge Street estimates them at 2–4% of the loan amount. They’re real cash to close, but switching lenders won’t make them go away, so keep them out of the quote comparison and in the deal budget.",
    },
    { type: "h2", text: "Draw and inspection fees: multiply by the number of draws", id: "draw-fees" },
    {
      type: "p",
      text: "Rehab and construction money is paid out in [draws](/glossary#draws), and each one usually carries a fee taken out of the wire. LendSure published $150–$250 per draw on its ground-up loans, Ridge Street $200–$300 per request, and RentalRealEstate.com’s survey $100–$250 per inspection. Kiavi and Lima One charge a draw fee but don’t publish the amount.",
    },
    {
      type: "p",
      text: "Fewer, larger draws cost less in fees but leave you carrying more of each phase yourself. At $250 a draw, a four-draw flip pays $1,000 and a ten-draw build $2,500. Settle the count when you write the [rehab budget](/guides/rehab-budget-for-lenders), not after closing. While you’re at it, ask how interest works on the holdback: Lima One and LendingOne publish that undrawn rehab money carries no interest, On the $320,000 flip, charging the full loan from day one would cost $20,160 over 7 months instead of $18,684: $1,476 more, or about six $250 draw fees.",
    },
    { type: "h2", text: "Extension fees: the price of a slow exit", id: "extensions" },
    {
      type: "p",
      text: "Short-term investor loans run 6–24 months. When the work or the sale runs long, you pay off, extend or default. Most lenders offer extensions, but few publish the price. Rehab Financial lists an optional 3-month extension on its 9-month flip loan and says extension fees apply. Kiavi offers 3- or 6-month extensions on new construction, and Lima One sends borrowers who need more time to their servicing analyst. On the fee itself, Grafton Funding puts it at 1–2% of the loan balance per extension period, and RentalRealEstate.com’s survey at 0.5–2.0%.",
    },
    {
      type: "p",
      text: "Back to Quote B. Three more months at the full $320,000 balance is $8,640 of interest, and a 1% extension fee adds $3,200, so the slip costs $11,840. Before you sign, ask for the fee, whether it’s charged on the original loan or the current balance, whether the rate changes during the extension, and how many extensions you can take. [Bridge loan exit strategies](/guides/bridge-loan-exit-strategies) covers what to do when the exit starts to slide.",
    },
    { type: "h2", text: "Exit fees and prepayment: read the payoff terms too", id: "exit-fees" },
    {
      type: "p",
      text: "Some costs only show up when you pay the loan off. RentalRealEstate.com’s survey lists exit or payoff fees of 0–1%, noting that not every lender charges one, and says some lenders require a minimum number of months of interest, typically 3–6. Kiavi advertises no prepayment penalties and “no hidden exit points” on its flip loans, and Easy Street and Ridge Street say their flip loans carry no prepayment penalty.",
    },
    {
      type: "p",
      text: "Two published exit charges are really pricing tools. Lima One lets you defer your origination fee to the exit, which lowers your cash at closing without lowering the cost. LendingOne’s fix-to-rent loan, built for borrowers who plan to refinance into its rental loan, takes 50% off origination and 0.5% off the rate, and adds 1 point to the payoff if you choose not to refinance the property. On a $320,000 loan, that point is $3,200, so price the in-house rental loan before you count on the discount.",
    },
    { type: "h2", text: "On rental loans, the exit fee is the prepayment penalty", id: "rental-loans" },
    {
      type: "p",
      text: "Long-term rental loans turn the point math around. A [DSCR](/glossary#dscr) (debt service coverage ratio) loan qualifies on how many times the monthly rent covers the monthly payment: $2,100 of rent against a $1,750 payment is 1.20. It typically runs 30 years. A point paid at closing is spread over the years you keep it, not a few months. The fee to watch is the prepayment penalty. The common default in October 2026 was 5-4-3-2-1: 5% of the balance if you pay off in year one, stepping down to 1% in year five. Shorter schedules exist too, such as 3-2-1 or 2-1, along with a flat 5% and no penalty at all, which costs more in rate. If you might sell or refinance inside five years, price the shorter schedule.",
    },
    { type: "h2", text: "Worked total cost: every lender fee on one $320,000 flip loan", id: "total-cost" },
    {
      type: "table",
      caption: "All-in lender cost of Quote B: $320,000 at 10.8% and 1 point, 7-month hold (illustrative; title, insurance and other third-party costs excluded)",
      head: ["Cost", "How it’s figured", "Amount"],
      rows: [
        ["Points", "1% × $320,000", "$3,200"],
        ["Underwriting and processing", "Flat fee, inside published ranges", "$1,495"],
        ["Draw fees", "3 draws × $250", "$750"],
        ["Interest", "0.9% a month on the drawn balance", "$18,684"],
        ["Exit fee", "None on this quote", "$0"],
        ["Total lender cost", "", "$24,129"],
        ["Share of the loan", "$24,129 ÷ $320,000", "7.5%"],
        ["Annual cost on the money drawn", "$24,129 on an average $296,571 drawn, over 7 months", "13.9%"],
      ],
    },
    {
      type: "p",
      text: "The headline rate is 10.8%. The deal pays about 13.9% a year on the money it actually uses, and the difference is fees. Add the 3-month extension and the total reaches $35,969. That’s the figure for your flip budget, next to the purchase, rehab and selling costs; the [fix-and-flip calculator](/calculators/fix-and-flip) carries it through to profit, and the [rates page](/rates) shows where published pricing sits now.",
    },
    { type: "h2", text: "Six questions that expose the real price", id: "questions" },
    {
      type: "ol",
      items: [
        "What are the points, and are they charged on the total loan or only the amount funded at closing?",
        "Which flat fees will appear on the settlement statement, by name and amount?",
        "What does each draw cost, and how many draws does the budget need?",
        "Is interest charged only on drawn funds, and for the whole term?",
        "What does an extension cost, on which balance, and does the rate change?",
        "Is there an exit fee, a minimum-interest clause, or a point added if you refinance elsewhere?",
      ],
    },
    {
      type: "p",
      text: "Every loan in this guide is a business-purpose loan on investment property. A home you or a relative will move into is a job for a residential mortgage lender, not these programs. For the products themselves, see [hard money loans](/hard-money-loans) and [fix and flip loans](/fix-and-flip-loans).",
    },
    {
      type: "cta",
      text: "Want every fee in writing before you commit? Send the deal in about a minute and we’ll come back fast with terms, line by line.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund My Deal",
    },
  ],
  faqs: [
    {
      q: "What is a point on a hard money loan?",
      a: "One point is 1% of the loan amount, charged at closing, so a point on a $300,000 loan is $3,000. Points are the lender’s origination fee. Published fix-and-flip pricing ran 0–2 points in October 2026, and ground-up construction 1–2. Because you pay them once, points weigh more on a short loan: over a 6-month hold, a point costs about as much as 2 percentage points of annual rate.",
    },
    {
      q: "What fees do hard money lenders charge besides points?",
      a: "Expect a flat underwriting, processing or document fee (Easy Street published $1,995; one 2026 survey put the typical range at $500–$1,500), a fee on each rehab draw ($100–$300 in published figures), and charges that apply only sometimes: extension fees, exit or payoff fees and minimum-interest clauses. Title, insurance and escrow are third-party costs on top, which one lender estimates at 2–4% of the loan.",
    },
    {
      q: "Is it better to pay points or take a higher rate?",
      a: "It depends on how long the loan stays out. Points are paid once and rate is paid monthly, so short holds favor fewer points. On a $320,000 flip loan, 10.8% with 1 point beat 9.6% with 2 points by $1,124 over 7 months, but the lower-rate quote won once the hold passed about 10½ months. Price both quotes at your planned hold and at a three-month slip.",
    },
    {
      q: "How much does it cost to extend a hard money loan?",
      a: "Lenders rarely publish it. Grafton Funding puts typical extension fees at 1–2% of the loan balance per extension period, and a September 2026 survey found 0.5–2.0%. You also keep paying interest: on a $320,000 balance at 10.8%, three more months is $8,640, so a 1% fee makes the slip $11,840. Get the fee, the balance it’s charged on and any rate change in writing.",
    },
    {
      q: "Can points be added to the loan instead of paid at closing?",
      a: "Sometimes. LendSure says origination fees can be financed on its ground-up loans, and Lima One lets fix-and-flip borrowers defer origination to the exit. Both lower your cash at closing, but neither lowers the cost: financed points accrue interest, and deferred points come out of your sale or refinance proceeds. Count them in the deal budget either way.",
    },
    {
      q: "Do fix and flip loans have prepayment penalties?",
      a: "Usually not. Kiavi, Easy Street and Ridge Street published no prepayment penalty on flip loans in October 2026, and Kiavi says it charges no hidden exit points. Some lenders do require a minimum number of months of interest, 3–6 in one 2026 survey, or charge an exit fee of up to 1%. Long-term rental loans are different: a 5-4-3-2-1 prepayment schedule is the common default.",
    },
  ],
  related: {
    programs: ["fix-and-flip", "hard-money", "construction"],
    guides: ["how-hard-money-loans-work", "construction-draw-schedule", "cash-needed-to-flip-a-house"],
  },
  sources: [
    { label: "Easy Street Capital — EasyFix fix-and-flip terms", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "Easy Street Capital — EasyRent rental loans (prepayment options)", url: "https://www.easystreetcap.com/easyrent" },
    { label: "New Silver — Fix and flip loans", url: "https://www.newsilver.com/fix-and-flip-loans/" },
    { label: "Rehab Financial — 100% fix and flip premier loan terms", url: "https://rehabfinancial.com/100-fix-flip-premier-loan/loan-terms" },
    { label: "Ridge Street Capital — Fix and flip loans for beginners (updated October 14, 2026)", url: "https://www.ridgestreetcap.com/blog/fix-and-flip-loans-for-beginners" },
    { label: "RentalRealEstate.com — Hard money loans, typical 2026 fee ranges (updated September 2026)", url: "https://rentalrealestate.com/loans/hard-money/" },
    { label: "LendSure — Ground-up construction loans", url: "https://lendsure.com/home-loan-programs/ground-up-construction-loans/" },
    { label: "LendingOne — New construction loans", url: "https://lendingone.com/loan-types/new-construction-loans/" },
    { label: "LendingOne — Fix-to-rent loans", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
    { label: "Lima One — Fix and flip loans", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Kiavi — New construction loans", url: "https://www.kiavi.com/loans/new-construction-infill" },
    { label: "Grafton Funding — How long do fix and flip loans last", url: "https://www.graftonfunding.com/investor-resources/how-long-do-fix-and-flip-loans-last" },
    { label: "Defy Mortgage — DSCR loan rates (prepayment options, October 23, 2026)", url: "https://www.defymortgage.com/dscr-loan-rates/" },
    { label: "Crowdfunded Wealth — 2026 hard money rates, from 2025 HMDA data (updated October 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
};

export default investorLoanPointsAndFees;
