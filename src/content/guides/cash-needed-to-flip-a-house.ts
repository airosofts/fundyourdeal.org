import type { Guide } from "../types";

const cashNeededToFlipAHouse: Guide = {
  slug: "cash-needed-to-flip-a-house",
  metaTitle: "Cash Needed to Flip a House: Down Payment, Draws, Carry",
  metaDescription:
    "How much cash you need to flip a house with a loan: down payment, points, closing costs, rehab float, carry and reserves, worked at two experience tiers.",
  category: "Fix & flip",
  title: "Cash needed to flip a house: what a first flip takes, and what it takes after five",
  dek: "On a $190,000 flip with a $64,000 rehab, a first-time flipper needs about $82,200 lined up and an investor with five flips about $61,600. Here's where each dollar goes: down payment, points and closing costs, the rehab you pay for before each draw, six months of carry, and the reserves lenders check.",
  readMinutes: 10,
  published: "2026-10-26",
  updated: "2026-10-26",
  keyTakeaways: [
    "Cash to flip a house with a loan has four parts: the down payment, points and closing costs, the rehab phase you pay for before each draw repays it, and monthly interest and carry until the sale.",
    "Experience moves the down payment most. On RCN Capital's October 2026 grid for light rehab, a borrower with no flips gets 85% of the purchase financed and one with five or more gets 95%: $28,500 down against $9,500 on our example.",
    "Closing costs aren't financed. Budget points (0–2 in published programs), a lender fee near $2,000, and third-party costs that Ridge Street Capital puts at 2–4% of the loan.",
    "Lenders check liquidity, not income. OfferMarket, for one, wants the closing cash plus a quarter of the rehab budget sitting in liquid accounts. Plan above any lender's minimum, with room for two slow months.",
  ],
  body: [
    {
      type: "p",
      text: "The cash needed to flip a house with a fix-and-flip loan is far less than the price, but it's a lot more than the down payment. At closing you bring the part of the purchase the lender doesn't finance, plus points and closing costs. After that you pay for each rehab phase before the draw that repays it, and you pay interest, taxes, insurance and utilities every month until the house sells. On the deal below, that's about $82,200 for a first-time flipper and $61,600 for a borrower with five flips.",
    },
    { type: "formula", text: "Cash to line up = (price − purchase advance) + any ARV-cap shortfall + points and lender fees + closing costs + largest rehab phase + carry until the sale" },
    { type: "h2", text: "One deal, two borrowers", id: "the-deal" },
    {
      type: "p",
      text: "The house is under contract at $190,000, the approved rehab budget is $64,000, and the lender values the finished house at $335,000. The plan is four months of work and a sale that closes at the end of month six. Terms come from RCN Capital's published grid for light rehab, which sizes [fix and flip loans](/fix-and-flip-loans) by flips completed in the last three years:",
    },
    {
      type: "table",
      caption: "Example terms. Rates are RCN's published starting rates for each tier; points are assumptions inside published ranges. Your quote will differ.",
      head: ["", "New investor (no flips)", "Experienced (5 flips in 3 years)"],
      rows: [
        ["Purchase financed", "85% = $161,500", "95% = $180,500"],
        ["Rehab financed", "100% = $64,000", "100% = $64,000"],
        ["Loan requested", "$225,500", "$244,500"],
        ["ARV cap", "70% of $335,000 = $234,500", "75% of $335,000 = $251,250"],
        ["Loan", "$225,500, under the cap", "$244,500, under the cap"],
        ["Starting rate", "10.74%", "10.24%"],
        ["Points", "2%", "1%"],
      ],
    },
    { type: "h2", text: "At closing: the down payment, points and closing costs", id: "at-closing" },
    {
      type: "p",
      text: "The down payment is the purchase price minus the purchase advance. Lenders published advances of 85–100% of the price in October 2026, and your tier decides most of this number: $28,500 for the new investor, $9,500 for the experienced one.",
    },
    {
      type: "p",
      text: "[Points](/glossary#points) come next, and they're charged on the whole loan, rehab holdback included. Ridge Street Capital defines its origination fee as a percentage of the acquisition and rehab loan combined, so the new investor's 2% is $4,510, part of it on $64,000 that hasn't been advanced yet. Published programs ran 0–2 points at Easy Street, 1–1.75% at New Silver, and 1.5 to 2 points, never less than $2,000, at OfferMarket. Add a lender document or underwriting fee: $1,995 at Easy Street, and $1,250–$1,995 at Ridge Street.",
    },
    {
      type: "p",
      text: "Then come the third-party costs: title insurance, escrow, recording, state fees and the builder's risk policy. Ridge Street puts these at 2–4% of the loan, and its requirements page says closing costs are paid at closing rather than financed. Transfer taxes depend on the state; Ridge Street's calculator says they commonly run 0.1% to 2%. The example uses $6,400 for both borrowers, about 2.6–2.8% of their loans.",
    },
    {
      type: "table",
      caption: "Due at closing",
      head: ["Item", "New investor", "Experienced"],
      rows: [
        ["Down payment", "$28,500", "$9,500"],
        ["Points", "$4,510 (2%)", "$2,445 (1%)"],
        ["Lender document fee", "$1,995", "$1,995"],
        ["Title, escrow, recording, state fees, builder's risk", "$6,400", "$6,400"],
        ["Cash at closing", "$41,405", "$20,340"],
      ],
    },
    {
      type: "p",
      text: "If the lender's ARV comes in low, add the shortfall. At a $310,000 valuation, the new investor's 70% cap is $217,000, so the loan falls $8,500; the experienced borrower's 75% cap is $232,500, a $12,000 cut. That money is due at closing too. [Our ARV guide](/guides/how-to-calculate-arv) covers building a number that holds up.",
    },
    { type: "h2", text: "The rehab gap: you pay for each phase before its draw", id: "rehab-gap" },
    {
      type: "p",
      text: "Financing 100% of the rehab doesn't put the money in your account when the contractor wants paying. Draws reimburse finished work: Kiavi's draw guide says that, as a rule, work has to be finished, installed and paid for before any money is released, and an inspection, on site or by photo, comes first. Lenders published turnarounds of 24–48 hours in October 2026 once a request is complete.",
    },
    {
      type: "p",
      text: "The example budget draws in four phases: $22,000 at the end of month one for demolition and rough-ins, then $18,000, $16,000 and a final $8,000 at the ends of months two to four. Each draw refills the cash you spend on the next phase, so the float you need is the biggest phase, $22,000, and it stays tied up until the final draw. Two details add to it. Most lenders hold back 10% of the budget until the end (here the first three draws total $56,000, inside a $57,600 cap). And each draw has a fee, $270 on OfferMarket's published schedule.",
    },
    {
      type: "p",
      text: "You can shrink the float through your contractor rather than your lender: a small deposit, progress payments tied to the same milestones as the draws, and retainage that matches the lender's. The [rehab budget guide](/guides/rehab-budget-for-lenders) shows how to group the lines into draws.",
    },
    { type: "h2", text: "Carry: interest and holding costs every month until it sells", id: "carry" },
    {
      type: "p",
      text: "Fix-and-flip loans are interest-only, and at Lima One, LendingOne and RCN interest runs only on funds drawn. The purchase advance accrues from day one, and each draw adds to the balance when it funds. For context, federal HMDA data put the 2025 median at non-bank lenders' short-term investor loans at 10.45%; the example uses RCN's tier rates.",
    },
    {
      type: "table",
      caption: "Interest on drawn funds, draws funded at the end of months 1–4. Totals are computed before rounding.",
      head: ["Month", "New: balance", "New: interest at 10.74%", "Experienced: balance", "Experienced: interest at 10.24%"],
      rows: [
        ["1", "$161,500", "$1,445", "$180,500", "$1,540"],
        ["2", "$183,500", "$1,642", "$202,500", "$1,728"],
        ["3", "$201,500", "$1,803", "$220,500", "$1,882"],
        ["4", "$217,500", "$1,947", "$236,500", "$2,018"],
        ["5", "$225,500", "$2,018", "$244,500", "$2,086"],
        ["6", "$225,500", "$2,018", "$244,500", "$2,086"],
        ["Total", "", "$10,874", "", "$11,341"],
      ],
    },
    {
      type: "p",
      text: "The experienced borrower pays $467 more interest, because the bigger loan outweighs the lower rate. Had the lender charged interest on the full loan from day one, the new investor would have paid $12,109, so the drawn-funds method is worth $1,235 here. Ask which method your lender uses.",
    },
    {
      type: "p",
      text: "Holding costs sit on top: property taxes, insurance on a vacant house, utilities, and HOA dues where they apply. The example assumes $640 a month, $3,840 over six months. Budget staging as well. Rehab lenders don't fund it (Kiavi lists it as not reimbursable), and Ridge Street's calculator suggests $2,500–$4,000 for a typical house; the example uses $3,000. Agent commissions and seller closing costs come out of the sale proceeds, not your pocket, unless the price falls short.",
    },
    { type: "h2", text: "When each dollar leaves your account", id: "timeline" },
    {
      type: "ol",
      items: [
        "**Under contract:** the earnest money deposit, which is credited back toward your down payment at closing.",
        "**Closing day:** the down payment, points, the lender fee and third-party costs, plus any amount the ARV cap trims from the loan.",
        "**Month one:** the first rehab phase, paid to your contractor before draw 1 repays it, and the first interest payment.",
        "**Months two to four:** each draw refills the cash for the next phase, while interest rises with every draw that funds.",
        "**Months five and six:** full-balance interest, taxes, insurance and utilities, and staging when you list.",
        "**Sale:** the loan payoff, commissions and seller costs come out of the proceeds, and the cash you put in comes back, along with any profit.",
      ],
    },
    { type: "h2", text: "The total: about $82,200 for a first flip, $61,600 after five", id: "total" },
    {
      type: "table",
      caption: "Cash to have available for the whole project",
      head: ["Item", "New investor", "Experienced"],
      rows: [
        ["Cash at closing", "$41,405", "$20,340"],
        ["Largest rehab phase, floated until its draw", "$22,000", "$22,000"],
        ["Interest, months 1–6", "$10,874", "$11,341"],
        ["Taxes, insurance, utilities ($640 × 6)", "$3,840", "$3,840"],
        ["Draw fees (4 × $270)", "$1,080", "$1,080"],
        ["Staging before listing", "$3,000", "$3,000"],
        ["Total to have available", "$82,199", "$61,601"],
        ["Still in the deal at the sale, once the float comes back", "$60,199", "$39,601"],
        ["Add if the sale slips two months", "$5,316", "$5,453"],
      ],
    },
    {
      type: "p",
      text: "The $20,598 gap between the two borrowers is the $21,065 difference in closing cash, less the $467 of extra interest the bigger loan costs. The float and the carry barely change. The quickest way to need less cash on your next flip is a track record, because each completed exit moves you up the grid.",
    },
    {
      type: "p",
      text: "Scope moves the number as much as experience does. If the lender classed this rehab as heavy, RCN's grid would drop the new investor to 70% of the purchase and a 60% ARV cap. The loan becomes $197,000, under a $201,000 cap, and the down payment doubles to $57,000. Run your own version in [our flip calculator](/calculators/fix-and-flip).",
    },
    {
      type: "cta",
      text: "Know your number? Tell us the deal and how many flips you've closed, and get your terms fast.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund my flip",
    },
    { type: "h2", text: "Reserves: lenders read your bank statements, not your tax returns", id: "reserves" },
    {
      type: "p",
      text: "Flip lenders don't qualify you on income: LendingOne requires no W-2s or tax returns, and Kiavi advertises no income verification. What they check is whether the cash exists. Published rules differ:",
    },
    {
      type: "ul",
      items: [
        "OfferMarket wants liquid assets equal to the closing cash plus a quarter of the rehab budget. On the example, that's $57,405 for the new investor and $36,340 for the experienced one.",
        "Ridge Street Capital looks for the down payment plus three to six months of interest payments: $34,555 to $40,609 for the new investor at the full-balance payment. It also suggests 5–10% of the project cost in liquid reserves beyond the down payment, verified with two months of bank statements.",
      ],
    },
    {
      type: "p",
      text: "Both are approval minimums, and both sit well below the $82,200 the new investor's plan actually uses. Fund the plan, not the minimum. A liquidity check is a snapshot on closing day; the float and the carry run for months.",
    },
    { type: "h2", text: "Six ways to bring less cash", id: "bring-less" },
    {
      type: "ol",
      items: [
        "Buy lower. Every $10,000 off the price cuts the new investor's down payment by $1,500 at an 85% advance, and keeps the loan further from the ARV cap.",
        "Keep the scope light where the comps allow it. Light rehab earns more leverage than heavy on tiered grids, and Lima One's Quick Flip offers up to 95% of cost on cosmetic work when the budget is under 50% of the price.",
        "Defer the points. Lima One will hold its origination fee until you exit, which takes it out of closing cash. It's still due when you sell or refinance.",
        "Ask for interest on drawn funds only. On this deal it's worth $1,235.",
        "Match contractor payments to the draws, so the float never grows beyond one phase.",
        "Build the record. Going from no flips to five cut this deal's closing cash by $21,065.",
      ],
    },
    {
      type: "p",
      text: "These loans are business-purpose credit for investment property only. If you plan to live in the house, a residential mortgage lender is the right call.",
    },
    {
      type: "cta",
      text: "Cash lined up and the house under contract? Send us the deal in about a minute and get funded on time.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund my flip",
    },
  ],
  faqs: [
    {
      q: "How much cash do you need to flip a house?",
      a: "With a fix-and-flip loan, plan for the down payment, points, lender and closing costs, the largest rehab phase you'll pay for before its draw, and interest and holding costs until the sale. On a $190,000 purchase with a $64,000 rehab, that came to about $82,200 for a first-time flipper and $61,600 for an investor with five flips. Buying with cash takes the full price plus the rehab.",
    },
    {
      q: "Can you flip a house with no money down?",
      a: "Rarely. A few programs advertise financing the full price and the full rehab, but RCN reserves that tier for borrowers with 10 or more flips, five in-state, a 720+ score and loans of $800,000 or less. Even then, points, closing costs, the rehab float and carry still need cash, because closing costs aren't financed and draws repay work after it's done.",
    },
    {
      q: "Do fix and flip loans cover closing costs?",
      a: "Generally no. Ridge Street Capital says closing costs are paid at closing and not financed, and it puts third-party costs such as title insurance, builder's risk, state fees and escrow at 2–4% of the loan. Points come on top. Some lenders ease the timing: at Lima One, the origination fee can wait until you sell or refinance.",
    },
    {
      q: "How much in reserves do hard money lenders require?",
      a: "It depends on the lender. OfferMarket publishes a liquidity rule: closing cash plus 25% of the rehab, held in liquid accounts. Ridge Street Capital looks for the down payment plus three to six months of interest payments, and suggests 5–10% of the project cost in reserves beyond the down payment. Expect the lender to verify it with recent bank statements.",
    },
    {
      q: "Are points charged on the rehab money too?",
      a: "Usually, yes. Points are a percentage of the total loan, and Ridge Street Capital defines its origination fee on the acquisition and rehab loan combined. On a $225,500 loan with a $64,000 holdback, 2 points is $4,510, and $1,280 of that is charged on rehab money you won't draw until the work is done.",
    },
    {
      q: "Does the lender pay my contractor before the work is done?",
      a: "Not usually. Rehab money is held back at closing and released as reimbursement after each phase is finished and inspected; Kiavi's rule is finished, installed and paid for before release. Some lenders advance part of the cost of materials delivered to the site, and OfferMarket funds 50%. Plan to float your largest phase from your own cash.",
    },
  ],
  related: {
    programs: ["fix-and-flip", "hard-money", "bridge"],
    guides: ["investor-loan-points-and-fees", "rehab-budget-for-lenders", "closing-an-investor-loan-fast"],
  },
  sources: [
    { label: "RCN Capital — Loan programs (leverage and starting rates by experience)", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Kiavi — Draws on fix and flip loans", url: "https://www.kiavi.com/blog/how-fix-and-flip-draw-process-works" },
    { label: "Kiavi — How to submit a scope of work (staging)", url: "https://kiavi.com/guides/submitting-an-sow" },
    { label: "Lima One — Fix and flip loans", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "LendingOne — Fix and flip loans", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
    { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "New Silver — Fix and flip loans", url: "https://www.newsilver.com/fix-and-flip-loans/" },
    { label: "OfferMarket — Fix and flip loan terms, Florida (liquidity, points, draw fees)", url: "https://www.offermarket.us/fix-and-flip-loan/florida" },
    { label: "Ridge Street Capital — Fix and flip loans for beginners", url: "https://www.ridgestreetcap.com/blog/fix-and-flip-loans-for-beginners" },
    { label: "Ridge Street Capital — Hard money loan requirements", url: "https://www.ridgestreetcap.com/blog/hard-money-loan-requirements" },
    { label: "Ridge Street Capital — Fix and flip calculator", url: "https://www.ridgestreetcap.com/blog/fix-and-flip-calculator" },
    { label: "Crowdfunded Wealth — 2026 hard money rates, from HMDA (updated October 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
};

export default cashNeededToFlipAHouse;
