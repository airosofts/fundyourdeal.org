import type { ProgramContent } from "../types";

export const fixAndFlip: ProgramContent = {
  slug: "fix-and-flip",
  metaTitle: "Fix and Flip Loans: What Your Deal Needs to Get Funded",
  metaDescription:
    "Fix and flip loans for a deal in hand: 85–100% of price, up to 100% of rehab, 70–80% of ARV. Costs, draws, closing speed and a fully worked flip.",
  eyebrow: "Purchase + rehab · 6–24 months",
  h1: "Fix and flip loans: what your flip needs to get funded, and how fast.",
  intro:
    "A fix and flip loan covers the bulk of the purchase price and as much as the entire renovation budget on an investment house, interest-only for 6 to 24 months, and you repay it when you sell or refinance. Three deal numbers set the loan, namely the price, the renovation budget and the resale value once the work is done; your flip count, credit and cash set the terms.",
  facts: [
    { label: "Of the purchase price", value: "85–100%" },
    { label: "Of the rehab budget", value: "Up to 100%" },
    { label: "Cap on after-repair value", value: "70–80%" },
    { label: "Typical time to close", value: "1–3 weeks" },
  ],
  overview: {
    heading: "Two limits size the loan. The smaller one is the number that decides it.",
    paragraphs: [
      "Every fix and flip lender runs a two-sided test. On the cost side, it advances a share of the purchase price, from 85% to 100% depending on your track record, plus up to 100% of an approved rehab budget. On the value side, it won't let the total exceed 70–80% of the after-repair value (ARV): what the house should sell for once the work is done. You get whichever figure is smaller, and the gap between that loan and your total cost is the cash you bring.",
      "Run the deal in the example through it. A $184,000 house, a $46,000 rehab and a $310,000 ARV, bought by an investor with two finished flips. Ninety percent of $184,000 plus the full $46,000 rehab puts the cost side at $211,600. The value side allows 75% of $310,000, or $232,500. The cost side is smaller, so the loan is $211,600. Know your cushion: the valuation can land as low as $282,133 before the cap starts trimming the loan. Below that, every $10,000 off the ARV takes $7,500 off what you can borrow.",
      "Cash to close is bigger than the down payment. On this deal you wire $18,400 toward the price, $3,174 for 1.5 points, a $1,995 document fee and about $3,900 for title, appraisal and recording: $27,469 on closing day. After that the house costs money every month in interest, taxes, insurance and utilities, and some lenders check that you can carry it. One published rule wants your closing funds plus a reserve worth a quarter of the renovation, which here means showing $38,969 in the bank.",
      "The rehab money stays with the lender until the work is in place. You finish a phase and request a draw, and an inspector or your own app photos and video confirm it. Published turnarounds are 24 to 48 hours, and one lender offers same-day virtual draws. Draws reimburse finished work, so you or your contractor pay for each phase first. The trade-off runs in your favor on interest: you pay only on what has been released, which saves $820 on this deal compared with carrying the full balance from day one.",
      "Published closing times run from about one to three weeks: one lender advertises as few as 7 days, another 7–10 business days, and a third says repeat borrowers close within 3 weeks. Underwriting is rarely what holds a closing up. The appraiser needs a key, title has to come back clean, the insurance binder has to name the lender, and the LLC on the purchase contract has to match the borrower on the loan. Send those on the day you apply and the closing date stays yours to keep.",
      "Every flip loan ends in a balloon, so the lender wants your exit before it funds. Plan A is the sale. Plan B is to keep the house and refinance into a 30-year DSCR (debt service coverage ratio) loan. The ratio is what the house rents for each month, divided by its monthly payment. Rental lenders size that loan on the house, not your paycheck. Cash-out loans reach about 75% of the appraisal, conservative lenders want a ratio of 1.0 or better, and an outside lender will generally make you own the house for roughly 90 days before it uses the higher value.",
    ],
    formula: "DSCR = monthly rent ÷ (principal + interest + taxes + insurance + any HOA dues)",
    bullets: [
      "Plan B on this deal, refinance amount: 75% of a $310,000 appraisal is $232,500. That pays off the $211,600 flip loan and leaves $20,900 for the new loan's closing costs, with the rest back in your account.",
      "New payment: $1,606 of principal and interest at 7.375% over 30 years, the 2025 median for 30-year investor loans in federal HMDA data, plus an assumed $440 of taxes and insurance. Total: $2,046 a month.",
      "Rent test: $2,250 a month gives a DSCR of 1.10, clear of the 1.0–1.05 floors at conservative lenders. At $1,950 the ratio drops to 0.95. Several lenders accept 0.75–0.8, but one keeps its strongest pricing and leverage for ratios of 1.2 and up.",
      "Credit test: flip loans start at 600–660, while DSCR lenders mostly want 640–660 or more. A 600 score can buy the house and still miss the refinance, so check the exit before you sign.",
      "Timing test: refinancing with the lender that made your rehab loan can skip the 90-day wait. One lender waives all seasoning when it refinances its own fix and flip loans.",
    ],
  },
  example: {
    title: "WORKED DEAL · 3 DRAWS, SOLD IN MONTH 6",
    rows: [
      ["Purchase price", "$184,000"],
      ["Rehab budget (light)", "$46,000"],
      ["After-repair value", "$310,000"],
      ["Cost side: 90% of price + 100% of rehab", "$165,600 + $46,000 = $211,600"],
      ["Value side: 75% of ARV", "$232,500"],
      ["Loan: the smaller figure", "$211,600"],
      ["Cash to close: $18,400 down, 1.5 points, doc fee, title", "$27,469"],
      ["Interest at 10.75%, rehab drawn over 3 months", "$10,554"],
      ["Draw fees: 3 × $270", "$810"],
      ["Taxes, insurance, utilities: $520 × 6", "$3,120"],
      ["Selling costs: 6.5% of $310,000", "$20,150"],
      ["Total cash you put in before the sale", "$41,953"],
    ],
    result: { label: "Profit at a $310,000 sale", value: "$36,297" },
    note: "All-in cost $273,703. Draws of $15,500, $15,500 and $15,000 at the end of months 1–3; carrying the full $211,600 for six months would cost $11,374 in interest. The sale repays the loan and returns $78,250 after selling costs: about 87% on your cash in six months. Leverage tier from one lender's October 2026 grid. Closing, holding and selling costs are assumptions. Illustrative, not a quote.",
  },
  audience: {
    heading: "Who a flip loan suits, and who should use something else.",
    items: [
      {
        title: "Suits: a contract with room in it",
        text: "You have a house under contract, a line-item scope of work and comps that support the ARV, and your all-in cost sits well under the lender's ARV cap. That's when the cost side decides the loan and the deal funds at whatever leverage your tier allows.",
      },
      {
        title: "Suits: your first or second flip",
        text: "Several national lenders publish no experience requirement. You'll get less leverage and a higher rate than a repeat flipper; one grid starts new investors at 10.74%. The loan still keeps most of your cash free for the down payment, the gap between draws and the surprises behind the drywall.",
      },
      {
        title: "Suits: repeat flippers running several jobs",
        text: "Each finished flip moves you up a tier. On one published grid, starting rates fall from 10.74% to 10.24% at three to five flips and bottom out at 9.24% for veterans with 720+ credit, while purchase leverage climbs to 95% at five flips. The same cash covers more houses.",
      },
      {
        title: "Suits: cash buyers at auction",
        text: "Win the house with cash, then refinance within about six months to pull most of it back out and fund the renovation. One lender advertises returning up to 90% of your money this way. It's the same flip loan, closed after you already own the property.",
      },
      {
        title: "Doesn't suit: a thin spread",
        text: "If the cost side asks for more than the ARV cap allows, the lender is telling you the margin is thin. A loan request above three-quarters of the finished value leaves little room for 6–7% selling costs and a slow month. Renegotiate the price, trim the scope or walk.",
      },
      {
        title: "Doesn't suit: a house you'll live in",
        text: "This is business-purpose money for a house you hold as an investment. If you or a relative plan to move in, it's the wrong loan: a home you'll renovate and live in needs a residential mortgage, such as a renovation mortgage, from a consumer lender.",
      },
      {
        title: "Doesn't suit: new builds and big buildings",
        text: "Building from the dirt up, or adding most of a house to a lot, belongs on a ground-up construction loan with its own draw schedule. Most flip programs stop at 1–4 units; one lender's ARV program reaches 5+ units and mixed-use at $250,000 to $3 million.",
      },
      {
        title: "Doesn't suit: no cash at all",
        text: "Even a 100% program leaves you paying points, fees, title, insurance and monthly interest; on the worked deal that's about $9,300 at closing before any carry. If you can't cover that and a few months of payments, bring a partner before you bring a contract.",
      },
    ],
  },
  requirements: {
    heading: "What your flip needs to get funded.",
    intro:
      "Each lender sets its own floors and grids. Figures are from lender program pages published in October 2026; the experience rows apply one lender's light-rehab grid to the worked deal.",
    rows: [
      ["Credit score", "600–660 minimum depending on the lender, with several at 650–660. One lender's top tier needs 720+. Your score moves rate and leverage more than it decides whether you qualify."],
      ["No finished flips", "Eligible at several lenders with no experience requirement. One grid gives 85% of the price and a 70% ARV cap on light rehab, 70% and 60% on heavy. Worked deal: a $202,400 loan and $27,600 down."],
      ["1–4 flips", "90% of the price, 100% of rehab and a 75% ARV cap on light rehab; 80% and 65% on heavy. Worked deal: $211,600 and $18,400 down. Lenders count flips over a 24- to 36-month lookback and ask for closing statements as proof."],
      ["5–9 flips", "95% of the price for light work, 92.5% for moderate, 85% for heavy, with ARV caps of 70–75%. Worked deal: $220,800 and $9,200 down."],
      ["10+ flips", "Up to 100% of price and rehab at 75% of ARV with a 720+ score. The moderate-rehab version also needs 5+ in-state flips and a loan of $800,000 or less ($1 million in California). Worked deal: $230,000, nothing down toward price or rehab."],
      ["Rehab funding", "Up to 100% of an approved, line-item budget, held back at closing and released in draws as each phase is verified."],
      ["ARV cap", "70–80% of after-repair value on standard programs; 60–70% for new investors and heavy rehabs."],
      ["Scope of work", "A line-item budget the lender reviews before closing. The size of the job changes your tier: one lender offers its 95% loan-to-cost only when the rehab is under 50% of the purchase price."],
      ["Cash to close", "Down payment, points, lender fees, title, appraisal and insurance: $27,469 on the worked deal. Some lenders also check reserves; one wants your closing funds plus 25% of the renovation sitting in the account."],
      ["Loan amount", "$50,000 to $5,000,000 across published programs, with most starting at $75,000–$100,000."],
      ["Term", "6–24 months, interest-only, with the balance due at the end. Twelve months is the most common term; 18 and 24 are widely offered."],
      ["Property", "1–4 unit houses, townhomes and warrantable condos that no borrower or family member will live in. A $100,000 floor on as-is value or ARV is common for a single-family house."],
      ["Valuation", "An appraisal with interior access that reports as-is value and ARV, or an in-house valuation at some lenders. One lender wants 6 closed comps, each sold in the past 12 months inside a 5-mile radius."],
      ["Borrower", "An LLC or corporation at many lenders, almost always with a personal guarantee. Formation documents, recent bank statements and the signed purchase contract go in the file."],
      ["Exit", "A resale price your comps support, or a rental refinance the rent can carry. Lenders ask up front because the whole balance comes due at maturity."],
    ],
  },
  costs: {
    heading: "What the flip costs to carry, and what a slow month costs.",
    intro:
      "You pay points and fees at closing and interest every month on the drawn balance. Figures come from October 2026 lender pages and 2025 federal HMDA filings; the dollar amounts run them through the worked deal.",
    rows: [
      ["Interest rate", "About 10%: HMDA filings put the 2025 median for short-term investor loans there, with non-bank lenders a little higher. Interest-only, charged on what has been drawn."],
      ["Advertised floors", "7.75% to about 9.5% on lender pages in October 2026. Floors go to experienced borrowers at lower leverage; one grid starts new investors at 10.74%."],
      ["Points", "0–2 points at closing, one point being 1% of the loan. Published: 1–1.75% at one lender, 1.5–2 points with a $2,000 minimum at another, and the option to defer origination until you exit at a third. Worked deal: 1.5 points is $3,174."],
      ["Lender fees", "Expect a doc or processing charge as well as points: $1,995 at one lender. Get the full fee sheet before you sign the purchase contract, not at the closing table."],
      ["Draw fees", "Some lenders charge per draw. One published schedule is $270 a draw, so a five-draw budget costs $1,350. Fewer, larger phases cost less."],
      ["Monthly carry, fully drawn", "$2,416 on the worked deal: $1,896 of interest on $211,600 at 10.75%, plus $520 for taxes, insurance and utilities. Let the sale slip two months and you lose $4,832, about 13% of the profit."],
      ["Extensions", "Request one before maturity. One lender's fee sheet lists three extra months at 1% of the balance and six at 2.5%, with interest still running, and caps extensions at half the original term. On $211,600 that's $2,116 or $5,290 before carry."],
      ["Prepayment", "None on the published fix and flip programs reviewed for this page. Sell in month five and you pay five months of interest."],
      ["Third-party costs", "The appraiser, the title company, the county recorder and your insurer all bill separately from the lender. Some lenders value the house in-house and charge no application fee."],
      ["Points or a lower rate?", "On a six-month hold, fewer points beat a lower rate. Half a percent off this loan's rate saves about $491 over the hold; one extra point costs $2,116. The rate cut would take about two years to pay for itself."],
    ],
  },
  compare: {
    id: "compare",
    heading: "Flip loan, cash, home equity or a bank: which money fits the flip?",
    intro:
      "The right money depends on how many deals you want running and whether you might keep the house. Here's how each option handles the same $184,000 purchase.",
    columns: ["", "What it pays for", "What it costs you"],
    rows: [
      ["Fix and flip loan", "Most of the price (85–100%) and the whole rehab, limited to 70–80% of ARV, closed in about 1–3 weeks.", "About 10% interest, a term of 6–24 months, 0–2 points, and draws that pace the job. Worked deal: $16,533 of financing costs for $36,297 of profit on $41,953 of your cash."],
      ["All cash", "Everything, with no appraisal, draws or lender calendar: the strongest offer a seller can get.", "All your capital sits in one house. Worked deal: $237,020 of your cash for $52,830 of profit, a 22% return against about 87% with the loan."],
      ["Home equity line (HELOC)", "Cash for the down payment or the whole job, drawn and repaid as you go.", "The home you live in secures it, the rate usually floats, and it's a consumer loan qualified on your income."],
      ["Bank or credit union", "Cheaper money: banks priced short-term investor loans at a 7.5% median in 2025 HMDA filings.", "Qualified on income and tax returns and usually slower. Only about 1 in 7 of these loans came from banks and credit unions."],
      ["Bridge loan", "70–85% of value on a house that needs little or no work, for 12–24 months, closed in about 7–14 business days.", "Built around today's value, so a cosmetic refresh or quick resale fits better than a gut job."],
      ["Keep it: rehab loan into a rental loan", "Funds the purchase and rehab the same way, then a 30-year DSCR loan (debt service coverage ratio: rent over payment) pays it off once a tenant moves in.", "Closing costs twice, roughly 90 days of seasoning at most outside lenders, a cash-out near 75% of the appraisal, and rent that has to cover the new payment."],
    ],
  },
  steps: {
    heading: "From application to funded: six steps, and most of the speed is yours.",
    items: [
      { title: "Run the numbers before you offer", text: "Put the price, rehab and ARV into the fix and flip calculator. If the value side comes in under the cost side, lower the offer or plan the extra cash now, not the week of closing." },
      { title: "Apply in about 60 seconds", text: "Your name and number first, then a few taps about the deal. A loan specialist calls back with leverage and pricing for your experience tier and credit." },
      { title: "Send the deal package on day one", text: "The signed contract, a line-item scope of work, your LLC documents, recent bank statements and closing statements from past flips. A complete file is the fastest file." },
      { title: "Valuation and budget review", text: "The lender sets as-is value and ARV by appraisal or in-house valuation and checks the budget line by line. One lender turns valuations around in 5 days or less." },
      { title: "Clear title and insurance, then close", text: "Title comes back clean, the insurance binder names the lender, and you wire your cash to close. Published timelines run from about 7 days to 3 weeks." },
      { title: "Start work and draw", text: "Finish a phase, send photos or schedule the inspector, and expect the money in 24–48 hours once the work is approved." },
    ],
  },
  faqs: [
    {
      q: "How much down payment does a fix and flip loan need?",
      a: "Usually 0–15% of the purchase price, set by your experience, plus closing costs. Lenders fund 85–100% of what you pay for the house and as much as the full renovation, so your down payment is the unfunded share of the price plus anything the ARV cap trims. On a $184,000 house, 90% financing means $18,400 down. Points, fees, title and monthly carry come on top, which is why even 100% programs need cash.",
    },
    {
      q: "What credit score is needed for a fix and flip loan?",
      a: "Lender floors sat between 600 and 660 on October 2026 program pages, with several at 650–660. Your score moves price and leverage more than eligibility: one lender keeps its 100%-of-price tier for borrowers with 720 or higher and 10 or more flips. If you might keep the house as a rental, check that exit too, because most rental refinance lenders want 640–660 or more.",
    },
    {
      q: "Will a lender fund my flip if I've never done one?",
      a: "Yes. Several national lenders publish no experience requirement for flips. What changes is leverage: one lender's grid gives a first-time flipper 85% of the price and a 70% ARV cap on light rehab, dropping to 70% and 60% on heavy rehab, against 90% and 75% after one finished flip. Others ask for one investment property you've already exited, by sale or refinance, within 36 months.",
    },
    {
      q: "How fast can a fix and flip loan close?",
      a: "Published timelines run from about one to three weeks. One lender advertises closings in as few as 7 days, another 7–10 business days, and another says repeat borrowers close within 3 weeks. Lender speed only counts if your file is ready: the valuation, title, insurance binder and entity documents usually set the real date. Send them the day you apply.",
    },
    {
      q: "What delays a fix and flip loan closing?",
      a: "Mostly things outside underwriting. An appraiser who can't get inside the house, a title search that turns up an old lien or an estate problem, an insurance binder that doesn't name the lender, an LLC whose name doesn't match the purchase contract, or a rehab budget sent back for revisions. Each is fixable, but each can cost days. Line them up before you sign a contract with a short closing date.",
    },
    {
      q: "How do rehab draws work on a flip loan?",
      a: "The renovation money is held back at closing and paid out as the work gets done. You finish a phase, request a draw, and the lender verifies it by site visit or by photos and video. Published turnarounds run 24–48 hours, and one lender offers same-day virtual draws. Draws reimburse finished work, so you or your contractor pay for each phase first. Some lenders charge per draw, such as $270.",
    },
    {
      q: "Do you pay interest on the full flip loan amount?",
      a: "Not on most programs. Interest is charged on what has been funded, so the undrawn rehab holdback costs nothing until it's released. On a $211,600 loan at 10.75% with $46,000 of rehab drawn over three months, six months of interest comes to $10,554, against $11,374 on the full balance. Points work differently: they're figured on the total loan amount at closing.",
    },
    {
      q: "How do lenders decide the ARV on a flip?",
      a: "ARV, or after-repair value, is what the house should sell for once your scope of work is done, and the lender sets it, not you. Most order an appraisal with interior access that reports as-is value and ARV; some value the house in-house with no outside appraisal. One lender wants 6 closed comps from the past 12 months inside a 5-mile radius. Bring comps of finished, similar houses to back your number.",
    },
    {
      q: "What if the ARV appraisal comes in under your number?",
      a: "The loan can shrink, and you cover the gap. With a 75% ARV cap, each $10,000 cut from the value removes $7,500 of loan. On a deal sized at $211,600 against a $310,000 ARV, the cap doesn't bite until the value falls below about $282,000. At $270,000 the cap is $202,500, so you'd bring $9,100 more at closing, and the resale math needs rerunning at the lower price.",
    },
    {
      q: "Can you get 100% financing on a fix and flip?",
      a: "On paper, with a long track record. One lender's grid funds 100% of the price and 100% of the rehab only for investors with 10 or more flips and a 720+ score, still capped at 75% of ARV. Even then you bring cash: on a $184,000 house with $46,000 of work, 1.5 points, a document fee and closing costs come to about $9,300 before the first month of interest.",
    },
    {
      q: "How many points do fix and flip lenders charge?",
      a: "Usually 0 to 2 points at closing, where one point is 1% of the loan. Published examples in October 2026: 1–1.75% at one lender, 1.5–2 points with a $2,000 minimum at another, and zero-point options at a third that also charges a $1,995 document fee. One lender lets you defer origination until you sell. Compare points and fees together, not the rate alone.",
    },
    {
      q: "How long is a typical fix and flip loan term?",
      a: "Six to 24 months, interest-only, and 12 months is the norm: 70.9% of 2025 short-term investor loans in federal HMDA data ran exactly 12 months. Lenders publish 12-, 18- and 24-month options, and one offers 13, 19 and 24. Match the term to your plan plus slack. A four-month rehab and a two-month sale fit a 12-month term with room for a slow buyer.",
    },
    {
      q: "What happens if a flip runs past the loan term?",
      a: "Ask for an extension before maturity. One lender's fee sheet lists 1% of the balance for three extra months and 2.5% for six, with interest still running, and caps extensions at half the original term. On a $211,600 loan, three months cost a $2,116 fee plus about $2,416 a month in interest and holding costs. Reaching maturity without one can put the loan in default.",
    },
    {
      q: "Can you refinance a fix and flip loan into a rental loan?",
      a: "Yes, if the house rents for enough. The usual route is a DSCR (debt service coverage ratio) loan: the lender divides the monthly rent by the monthly payment and sizes a 30-year loan on that, not on your income. Expect cash-out leverage near 75% of the new appraisal and, from an outside lender, roughly 90 days of seasoning. One lender skips the wait when it made the original rehab loan.",
    },
    {
      q: "What DSCR do you need to keep a flip as a rental?",
      a: "DSCR (debt service coverage ratio) compares rent with the bill: monthly rent divided by the full monthly payment, taxes and insurance included. Conservative lenders want 1.0–1.05; several accept 0.75–0.8. On a $232,500 refinance at 7.375% over 30 years, principal and interest are $1,606, or $2,046 with $440 of taxes and insurance. Rent of $2,250 gives a 1.10 ratio; $1,950 gives 0.95.",
    },
    {
      q: "Should I borrow through an LLC for a flip?",
      a: "Some lenders won't fund an individual at all, only an LLC or corporation, and most others prefer an entity. Either way you'll usually sign a personal guarantee, so the entity doesn't keep your own assets out of the deal. Expect to send the formation documents and proof of good standing, and make sure the entity on the purchase contract matches the borrower. Ask a CPA or attorney how to set it up.",
    },
    {
      q: "Do fix and flip lenders look at your income?",
      a: "Usually not through W-2s or tax returns. Flip loans are sized on the deal: price, rehab budget, after-repair value and your track record. What lenders do check is credit, cash and experience, through bank statements and closing statements from past flips. One lender's liquidity test adds a quarter of the renovation budget to your closing funds, so a $46,000 rehab means showing $11,500 more.",
    },
    {
      q: "Can you get a rehab loan after buying a house with cash?",
      a: "Often, if you move within about six months. Lenders call it a delayed purchase refinance: you buy at auction or off-market with cash, then borrow against the house to pull most of it back out and fund the work. One lender offers it within 6 months of purchase; another advertises returning up to 90% of your money. After six months it's treated as a seasoned refinance on current value.",
    },
    {
      q: "Is a fix and flip loan the same as a hard money loan?",
      a: "Close, but not identical. Hard money is short-term lending from private lenders, sized on the property more than the borrower. A fix and flip loan is the version built for renovation, with a rehab holdback paid out in draws and a cap tied to after-repair value. Both are usually interest-only, both end in a balloon, and both price around 10%, the 2025 median in federal HMDA data.",
    },
    {
      q: "Is there a prepayment penalty on fix and flip loans?",
      a: "Not on the published fix and flip programs reviewed for this page. Paying off early is the plan: you're expected to sell or refinance, and interest stops when the loan is repaid, so selling in month five of a 12-month term means five months of interest. Do read the exit terms, though. One lender adds a point if you refinance its rehab loan somewhere else.",
    },
    {
      q: "Can I live in a house bought with a fix and flip loan?",
      a: "No. A flip loan is business-purpose credit, so the house has to be an investment that you and your relatives stay out of. Under federal lending rules, expecting to occupy a property for over 14 days during the next year makes it owner-occupied. If the plan is to renovate a home and move in, a residential mortgage lender can walk you through renovation mortgages.",
    },
  ],
  related: ["hard-money", "brrrr", "dscr", "bridge"],
  calculator: { href: "/calculators/fix-and-flip", label: "Size my flip" },
  sources: [
    { label: "RCN Capital — loan programs (leverage grid by flips and rehab type, starting rates, minimum ARV, 5+ unit program)", url: "https://rcncapital.com/loan-programs" },
    { label: "Kiavi — fix and flip loans (closing time, in-house valuation, delayed purchase refinance)", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Lima One — fix and flip (minimum FICO, experience, 24-hour draws, origination deferral, valuations)", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "LendingOne — fix and flip loans (loan-to-cost, closing time, same-day virtual draws)", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
    { label: "Easy Street Capital — EasyFix (600 minimum score, points, document fee, 48-hour draws)", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "New Silver — fix and flip loans (origination, appraisal comps, minimum values)", url: "https://www.newsilver.com/fix-and-flip-loans/" },
    { label: "Roc Capital — fix and flip", url: "https://roccapital.com/fix-and-flip" },
    { label: "Civic — fix and flip (property types, no experience required)", url: "https://www.civicfs.com/fix-and-flip/" },
    { label: "OfferMarket — Florida fix and flip terms (extension and draw fees, reserves, points)", url: "https://www.offermarket.us/fix-and-flip-loan/florida" },
    { label: "Crowdfunded Wealth — 2026 hard money rates from 2025 HMDA data (note rates, terms, lender mix, 30-year investor median)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
    { label: "Lima One — rental loans (DSCR minimum, cash-out limit, seasoning waiver)", url: "https://www.limaone.com/rental/" },
    { label: "Kiavi — DSCR loans (minimum ratio, 90-day cash-out seasoning)", url: "https://www.kiavi.com/loans/dscr" },
    { label: "LendingOne — rental loans (DSCR minimums)", url: "https://lendingone.com/rental-loans/" },
    { label: "Kiavi — bridge loans", url: "https://www.kiavi.com/loans/bridge-loans" },
    { label: "eCFR — Regulation Z commentary on business-purpose credit and owner occupancy", url: "https://www.ecfr.gov/current/title-12/part-1026/appendix-Supplement%20I%20to%20Part%201026" },
  ],
  updated: "2026-10-26",
};
