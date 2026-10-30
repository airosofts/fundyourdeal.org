import type { Guide } from "../types";

const hardMoneyLoanRequirements: Guide = {
  slug: "hard-money-loan-requirements",
  metaTitle: "Hard Money Loan Requirements: Lender-by-Lender Checklist",
  metaDescription:
    "Hard money loan requirements by lender, October 2026: ARV caps, 600–680 credit floors, experience tiers, liquidity rules, entity and background checks.",
  category: "Fix & flip",
  title: "Hard money loan requirements: the deal has to qualify before you do",
  dek: "Eleven lenders' published rules from October 2026, sorted the way an underwriter reads a file: the numbers on the house, the cash you can prove, your score and background, your track record and your entity. Then one deal run against four rulebooks, and the packet that gets a file to closing.",
  readMinutes: 12,
  published: "2026-10-30",
  updated: "2026-10-30",
  keyTakeaways: [
    "The house is checked first. Published programs cap the loan at 60–80% of after-repair value and lend 70–100% of the price plus up to 100% of the rehab, so the deal sets your down payment before your profile does.",
    "Published credit floors ran from 600 at Easy Street to 680 at OfferMarket in October 2026. Kiavi, Roc, Civic and LendingOne publish none.",
    "Lenders test cash, not income. OfferMarket wants the closing cash plus 25% of the rehab budget in the guarantors' accounts and counts retirement money at half its balance; Ridge Street wants the down payment plus 3–6 months of interest.",
    "Background rules are specific: at OfferMarket a bankruptcy discharge or completed foreclosure must be more than 4 years old, and open liens or judgments are paid off before funding.",
    "On the worked deal, moving from a 699 score to 700 is worth $14,450 of loan at Rehab Financial, because its ARV cap steps up from 65% to 70%.",
  ],
  body: [
    {
      type: "p",
      text: "Hard money loan requirements come in a set order. The lender sizes the deal first: what you're paying, what the rehab costs and what the house will be worth once it's finished. Only then does it ask whether you can carry that deal: cash you can prove, a score above its floor, a clean background, a record of finished projects and an LLC whose owners will sign a personal guarantee. Your income barely appears. Below: eleven lenders' published rules, one deal tested against four of them, and the packet that makes a file deal-ready. Rate, points and the balloon are covered in [how hard money loans work](/guides/how-hard-money-loans-work); this page is about approval.",
    },
    { type: "h2", text: "Seven checks, in the order an underwriter runs them", id: "seven-checks" },
    {
      type: "table",
      caption: "What hard money lenders check, with published ranges from lender program pages, October 2026",
      head: ["Check", "What gets looked at", "Published range"],
      rows: [
        ["After-repair value", "The lender's own value for the finished house, from an appraisal or an in-house model", "Loan capped at 60–80% of ARV"],
        ["Cost basis", "Purchase price plus the rehab budget", "Price advances of 70–100%; rehab funded in full at most programs"],
        ["Property", "Type, size, location and a minimum value", "Mostly 1–4 units; $100,000 value floors at Lima One and New Silver"],
        ["Cash", "Bank and brokerage statements for everyone guaranteeing the loan", "Closing cash plus 25% of the rehab (OfferMarket)"],
        ["Credit", "The guarantors' scores and credit history", "600–680 floors; several lenders publish none"],
        ["Experience", "Completed exits inside a lookback window", "None required at New Silver, Roc and Civic; one exit in 36 months at Lima One"],
        ["Borrower", "Entity, guarantee, citizenship and background", "LLC or corporation, personal guarantee, no recent bankruptcy or foreclosure"],
      ],
    },
    {
      type: "p",
      text: "The first three are about the deal. A strong borrower can't rescue a deal that breaks the ARV cap, but a strong deal can carry a thin profile.",
    },
    { type: "h2", text: "Requirements by lender, side by side", id: "by-lender" },
    {
      type: "table",
      caption: "Published fix-and-flip and hard money requirements, October 2026. Blank means the lender doesn't publish it.",
      head: ["Lender", "Minimum score", "Experience", "Price advance / ARV cap", "Other published rules"],
      rows: [
        ["Easy Street Capital (EasyFix)", "600", "Not required; terms vary with experience", "90% of price, 93% of total cost / 75%", "About 10% down at minimum in most cases; title, liability and hazard insurance"],
        ["RCN Capital", "650; 720 for its top tier", "Tiers by flips in the last 3 years", "70–100% / 60–75%", "Single-family ARV floor: $100,000"],
        ["New Silver", "650", "None", "90% of cost / 75%", "As-is value $100,000+ and ARV $150,000+; US citizen or legal resident"],
        ["Lima One", "660", "One exit in 36 months", "95% of cost", "Value or price of $100,000+; foreign nationals eligible"],
        ["Roc Capital and Civic", "", "None", "90% of cost / 75%", "Entity required; full recourse only"],
        ["OfferMarket", "680; 660–679 by exception", "Five tiers, from 0 to 10+ projects", "80–90% / 70–75%", "Guarantor net worth of at least 50% of the loan"],
        ["Ridge Street Capital", "660", "Separate beginner tier", "75–90% / 70% on a first flip", "First-time flippers funded in their home state only"],
        ["Rehab Financial Group", "650", "\"Proven experience\" lifts the cap", "100% / 65–75% by score", "Personal guarantee; first mortgage only"],
        ["Kiavi", "", "Exit history counts toward leverage", "Up to 100% of price (95% of cost in its FAQ) / 80%", "No income verification; in-house valuation"],
        ["LendingOne", "", "", "92.5% of cost", "No W-2s or tax returns; non-owner-occupied only"],
      ],
    },
    {
      type: "p",
      text: "Read it this way: \"no experience required\" gets you a loan, not the top-tier loan, and the credit floor rarely stops a file. The leverage tier tied to your score costs more.",
    },
    { type: "h2", text: "The deal: three caps, a value floor and a scope label", id: "the-deal" },
    {
      type: "p",
      text: "Every program applies the same three limits and lends the smallest result: a share of the purchase price, a share of the rehab budget and a share of the [ARV](/glossary#arv). On a house bought for $168,000 with a $49,000 rehab and a $289,000 ARV, a 70% ARV cap allows $202,300. If price-plus-rehab financing would come to more than that, you fund the difference at closing. The three measures are explained in [LTV vs LTC vs ARV](/guides/ltv-vs-ltc-vs-arv), and building an ARV that survives the lender's review is in [how to calculate ARV](/guides/how-to-calculate-arv).",
    },
    {
      type: "p",
      text: "Below the caps sit property rules that knock out whole deals:",
    },
    {
      type: "ul",
      items: [
        "**Value floors.** Lima One wants an as-is value or price of $100,000 or more. New Silver wants $100,000 as-is and $150,000 after repair. RCN sets a $100,000 ARV minimum on a single-family house, and OfferMarket a $100,000 ARV on anything it funds.",
        "**Comparable sales.** New Silver's appraisal needs interior access and six comparable sales, each within 5 miles and closed in the past year. In a thin rural market, that rule alone can end the file.",
        "**Size and location.** New Silver takes nothing over 5 acres and no rural property or raw land. OfferMarket excludes mobile homes, condotels and dirt-road addresses. Easy Street doesn't lend in Louisiana, Minnesota, North Dakota or South Dakota, or in the Baltimore, Chicago and Detroit metros.",
      ],
    },
    { type: "h3", text: "How big the rehab is changes the rules" },
    {
      type: "p",
      text: "Lenders grade the scope against the price. OfferMarket calls a rehab light below 25% of the purchase price, moderate from 25% to 49.99%, heavy from 50% to 99.99% and extensive at 100% or more. Borrowers with no completed projects can only do light rehabs there, and extensive scopes need three or more. Ridge Street caps a beginner's budget at 50% of the price. RCN's grid lowers both the price advance and the ARV cap as the work gets heavier. The scope you write sets the category, so build it line by line: see [a rehab budget a lender will fund](/guides/rehab-budget-for-lenders).",
    },
    { type: "h2", text: "Cash: lenders verify it, and they read where it came from", id: "cash" },
    {
      type: "p",
      text: "Many hard money lenders don't ask for pay stubs or tax returns. LendingOne and Kiavi both say so outright. What they ask for instead is proof that the money to close and to carry the project is already sitting in an account. Three published versions of the rule:",
    },
    {
      type: "table",
      caption: "Published liquidity rules, October 2026",
      head: ["Lender", "What you must show", "Details"],
      rows: [
        ["OfferMarket", "Enough to close, as estimated, with 25% of the rehab budget on top, counted across all guarantors", "Personal and entity bank and brokerage accounts count; retirement accounts count at 50%; two latest statements; a letter explaining any large deposit"],
        ["Ridge Street Capital", "The down payment plus 3–6 months of interest payments", "No dollar minimum published"],
        ["Rehab Financial Group", "Three consecutive months of statements, personal and business", "Part of the application package, with a driver's license"],
      ],
    },
    {
      type: "p",
      text: "The large-deposit letter matters. A lump sum that lands a week before you apply will be asked about, and borrowed money has to be disclosed as borrowed. If you're short, read [gap funding for real estate deals](/guides/gap-funding-for-real-estate-deals) before you take a second loan your first lender may not allow.",
    },
    {
      type: "p",
      text: "Down payment minimums sit alongside the liquidity test. Easy Street's FAQ puts the floor at about 10% of the price in most cases. OfferMarket sets $10,000 as the minimum down payment when the price is under $100,000. Some lenders also hold interest back at closing: OfferMarket's reserve runs from one month of interest for guarantors at 700 or above to three months at 660–699, and six months for a thin file with fewer than five tradelines. Every dollar of reserve is cash you bring. The full cash budget, down to staging, is in [cash needed to flip a house](/guides/cash-needed-to-flip-a-house).",
    },
    { type: "h2", text: "Credit: a floor, a scoring rule and a background check", id: "credit" },
    {
      type: "p",
      text: "Published floors in October 2026: 600 at Easy Street, 650 at RCN, New Silver and Rehab Financial, 660 at Lima One and Ridge Street, and 680 at OfferMarket, which will consider 660–679 by exception and says it strongly prefers 720 or higher. Credit is pulled on the people who guarantee the loan. OfferMarket uses the middle of three scores, or the lower of two.",
    },
    {
      type: "p",
      text: "Above the floor, your score buys leverage. Three published examples:",
    },
    {
      type: "ul",
      items: [
        "**Rehab Financial** caps the loan at 65% of ARV for scores of 650–699, 70% at 700 and up, and 75% at 700 and up with proven experience.",
        "**Ridge Street** funds a first-time flipper's purchase at 75% with a 660–719 score, 80% at 720–739 and up to 90% of cost at 740 or more.",
        "**OfferMarket** cuts its initial advance by 5 percentage points for any guarantor under 720.",
      ],
    },
    { type: "h3", text: "What a background check can stop" },
    {
      type: "p",
      text: "OfferMarket publishes the most complete rulebook. A bankruptcy must have been discharged more than 4 years before closing, and a foreclosure completed more than 4 years before; either one 4–7 years old adds a three-month reserve. Past-due balances, involuntary liens and judgments are paid before funding. Mortgage lates in the past 12 months and pending civil suits need a letter of explanation and go to the loan committee. Pending criminal cases, financial crimes and serious crimes make a borrower ineligible. Expect the same questions elsewhere, and have the explanation letters written before you apply.",
    },
    { type: "h2", text: "Experience: what counts as an exit, and what each one is worth", id: "experience" },
    {
      type: "p",
      text: "Lima One's one-exit minimum is the most generous definition published: a past flip counts, and so does selling or refinancing any investment property you held title to in the last 36 months. RCN counts flips in the last 3 years. OfferMarket counts verifiable completed projects and sorts borrowers into five tiers:",
    },
    {
      type: "table",
      caption: "OfferMarket's experience tiers and published adjustments, October 2026",
      head: ["Tier", "Completed projects", "Initial advance on the price"],
      rows: [
        ["1", "0", "80% (85% by exception); light rehab only"],
        ["2", "1–2", "85%"],
        ["3", "3–4", "85%"],
        ["4", "5–9", "90%"],
        ["5", "10+", "90%"],
        ["Adjustments", "", "Score under 720, −5%; full gut, −5%; new market, −5%; licensed Realtor, up to +5%; licensed general contractor or engineer, up to +10%"],
      ],
    },
    {
      type: "p",
      text: "The adjustments show what the lender is really pricing: whether you can control the job. A licensed general contractor on the borrowing side can add as much advance as ten completed flips. Because only verifiable projects count, keep the closing statements from every purchase and sale, and be ready to show which entity held title.",
    },
    { type: "h2", text: "The borrower: an entity, a guarantee and residency", id: "borrower" },
    {
      type: "ul",
      items: [
        "**An entity.** Roc and Civic require one. OfferMarket lends to an LLC or corporation, never a nonprofit, and Kiavi lists business entity documents among what it asks for. Across the 2025 federal HMDA data, 80.9% of short-term investor loans went to an LLC, corporation or trust.",
        "**A guarantee.** Rehab Financial requires a personal guarantee, Roc and Civic lend full recourse only, and Manhattan Bridge Capital's 2025 annual report says each of its loans is personally guaranteed by the borrower's principals. At OfferMarket, owners of at least 51% of the entity guarantee a purchase and 100% guarantee a cash-out refinance, and their combined net worth must be at least half the loan.",
        "**Residency.** New Silver lends to US citizens and legal residents. Lima One and OfferMarket also take qualified foreign nationals.",
      ],
    },
    {
      type: "cta",
      text: "Have a house under contract? Send the price, scope and ARV, and get your deal checked against real program rules fast.",
      href: "/get-funding?loan=hard-money",
      label: "Fund My Deal",
    },
    { type: "h2", text: "One deal, four rulebooks", id: "worked-file" },
    {
      type: "p",
      text: "A 3-bed, 2-bath under contract at $168,000, with a $49,000 rehab and a $289,000 ARV from recent sales nearby. Total cost: $217,000. The rehab is 29% of the price, a moderate scope by OfferMarket's definition. The borrower has finished two flips in the last three years, has a 701 middle score, and holds $52,000 in bank accounts and $40,000 in a 401(k).",
    },
    {
      type: "table",
      caption: "Sizing the same deal under four published rulebooks (illustrative, not quotes)",
      head: ["Rulebook", "How it sizes this file", "Loan", "Your share of the $217,000 cost"],
      rows: [
        ["RCN, new-investor tier (up to 2 flips)", "80% of price + 100% of rehab; cap 70% of ARV = $202,300", "$183,400", "$33,600"],
        ["OfferMarket, tier 2, less 5% for a score under 720", "80% of price + 100% of rehab; cap 70% of ARV", "$183,400", "$33,600"],
        ["Easy Street, program maximum", "90% of price + 100% of rehab, under its 93% cost limit; cap 75% of ARV = $216,750", "$200,200", "$16,800"],
        ["Rehab Financial, score 700+", "100% of price + 100% of rehab; cap 70% of ARV binds", "$202,300", "$14,700"],
      ],
    },
    {
      type: "p",
      text: "The spread is $18,900 of borrower cash on the same house. Easy Street's row is its published ceiling; its FAQ says final terms depend on experience, so a two-flip borrower may land lower. RCN and OfferMarket arrive at the same loan by different routes: one through its new-investor tier, the other through a 5-point haircut for the score.",
    },
    { type: "h3", text: "The liquidity test at OfferMarket" },
    {
      type: "table",
      caption: "Does the borrower show enough cash? (assumes 2 points and $5,200 of lender and third-party fees)",
      head: ["Item", "Amount"],
      rows: [
        ["Down payment, $168,000 − $134,400", "$33,600"],
        ["2 points on $183,400", "$3,668"],
        ["Lender and third-party fees, assumed", "$5,200"],
        ["Estimated cash to close", "$42,468"],
        ["Plus 25% of the $49,000 rehab", "$12,250"],
        ["Liquidity required", "$54,718"],
        ["Counted: $52,000 in the bank + 50% of the $40,000 401(k)", "$72,000"],
      ],
    },
    {
      type: "p",
      text: "The borrower passes with $17,282 to spare, but only because the 401(k) counts. On bank balances alone the file is $2,718 short.",
    },
    {
      type: "p",
      text: "The score is the number that decides it at Rehab Financial. At 701 the cap is 70% of ARV, $202,300. Drop to 699 and the cap falls to 65%, $187,850, so the borrower brings $29,150 instead of $14,700. Two points of score are worth $14,450 of loan, and at 679 the file would also fall below OfferMarket's standard 680 floor.",
    },
    { type: "h2", text: "The deal-ready packet: send it the day you apply", id: "checklist" },
    {
      type: "ol",
      items: [
        "**Signed purchase contract** in the borrowing entity's name, or assigned to it.",
        "**Scope of work and line-item budget,** with a timeline. Kiavi lists a detailed project budget and timeline; Rehab Financial wants a repair list with a cost on every item.",
        "**ARV support:** recent nearby sales of finished houses like yours. New Silver's six-sales test is a good bar.",
        "**Bank and brokerage statements** for every guarantor and the entity: the latest two months at OfferMarket, three at Rehab Financial, with a note on every large deposit.",
        "**Entity documents** for the LLC or corporation, and ID for each guarantor.",
        "**A track record list:** address, purchase and sale dates and prices, and the entity on title for each completed project, with closing statements behind it.",
        "**An insurance quote** naming the lender: builder's risk or liability prepaid for the term at Rehab Financial.",
        "**Explanation letters** for any late payment, lien, judgment or lawsuit on your reports.",
        "**The exit,** in one paragraph: the resale comps, or the rent and refinance plan if you'll keep it. See [refinance after rehab](/guides/refinance-after-rehab).",
      ],
    },
    {
      type: "p",
      text: "Files stall on paperwork more than approval; see [closing an investor loan fast](/guides/closing-an-investor-loan-fast).",
    },
    {
      type: "p",
      text: "One limit covers every program on this page: the loan is for business purposes, on property that neither you nor a relative will occupy. A home you plan to live in needs a residential mortgage from a residential lender.",
    },
    {
      type: "cta",
      text: "Packet ready? Send the deal and we'll review it with our licensed lending partner and come back with terms, fast.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund my flip",
    },
  ],
  faqs: [
    {
      q: "What are the requirements for a hard money loan?",
      a: "A deal that fits the lender's caps: typically a 70–100% advance on the price and the full rehab budget, with the total no higher than 60–80% of after-repair value, on a non-owner-occupied 1–4 unit property. Then the borrower: a credit score above the lender's floor (600–680 where published), cash in the bank for closing and carry, an LLC or corporation, a personal guarantee and a clean recent background. Experience is optional at many lenders but improves leverage.",
    },
    {
      q: "What credit score do you need for a hard money loan?",
      a: "The lowest published floor in October 2026 was Easy Street's 600. RCN, New Silver and Rehab Financial set 650, Lima One and Ridge Street 660, and OfferMarket 680. Kiavi, Roc and Civic publish no floor. Above the minimum, the score changes leverage: Rehab Financial caps loans at 65% of ARV below 700 and 70% at 700 or higher.",
    },
    {
      q: "Do hard money lenders require experience?",
      a: "Not always. New Silver, Roc and Civic published no experience requirement in October 2026, and Lima One asks for one exit in 36 months, and a refinance or resale of a rental you held counts toward it. Even where none is required, experience sets your tier. At OfferMarket, a borrower with no completed projects gets an 80% advance on light rehabs only, against 90% at five or more.",
    },
    {
      q: "How much money do you need in the bank for a hard money loan?",
      a: "Enough to close and carry the project, proven with statements. OfferMarket's published rule adds a quarter of the rehab budget to your estimated closing cash, with retirement accounts counted at half their balance. Ridge Street's version is your down payment and another 3–6 months of interest payments. Expect questions about any large deposit, and disclose borrowed funds as borrowed.",
    },
    {
      q: "Can you get a hard money loan after a bankruptcy or foreclosure?",
      a: "Often, once enough time has passed. OfferMarket requires a bankruptcy discharge or completed foreclosure more than 4 years before closing, and adds a three-month reserve when the event is 4–7 years old. Open liens and judgments must be paid before funding. Pending criminal cases and financial crimes are disqualifying there. Other lenders set their own rules, so ask before you pay for an appraisal.",
    },
  ],
  related: {
    programs: ["hard-money", "fix-and-flip", "bridge"],
    guides: ["how-hard-money-loans-work", "cash-needed-to-flip-a-house", "rehab-budget-for-lenders", "closing-an-investor-loan-fast"],
  },
  sources: [
    { label: "Easy Street Capital — EasyFix fix-and-flip terms and FAQ (October 2026)", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "RCN Capital — Loan programs: fix and flip experience grid (October 2026)", url: "https://www.rcncapital.com/loan-programs" },
    { label: "New Silver — Fix and flip loans (October 2026)", url: "https://www.newsilver.com/fix-and-flip-loans/" },
    { label: "Lima One Capital — FixNFlip (October 2026)", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "Roc Capital — Fix and flip (October 2026)", url: "https://roccapital.com/fix-and-flip" },
    { label: "Civic Financial Services — Fix and flip (October 2026)", url: "https://www.civicfs.com/fix-and-flip/" },
    { label: "OfferMarket — Fix and flip loan guidelines (October 2026)", url: "https://www.offermarket.us/fix-and-flip-loan" },
    { label: "Ridge Street Capital — Fix and flip loans for beginners (updated October 14, 2026)", url: "https://www.ridgestreetcap.com/blog/fix-and-flip-loans-for-beginners" },
    { label: "Rehab Financial Group — 100% fix and flip loan terms (October 2026)", url: "https://rehabfinancial.com/100-fix-flip-premier-loan/loan-terms" },
    { label: "Rehab Financial Group — How rehab loans work (October 2026)", url: "https://rehabfinancial.com/how-rehab-loans-work" },
    { label: "Kiavi — Fix and flip loans (October 2026)", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Kiavi — Six things to do before submitting your first fix-and-flip loan", url: "https://www.kiavi.com/blog/six-things-to-do-before-submitting-a-fix-and-flip-loan" },
    { label: "LendingOne — Fix and flip loans (October 2026)", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
    { label: "Manhattan Bridge Capital — Form 10-K for 2025 (SEC)", url: "https://www.sec.gov/Archives/edgar/data/1080340/000149315226013241/form10-k.htm" },
    { label: "Crowdfunded Wealth — analysis of 2025 HMDA short-term investor loans (updated October 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
  ],
};

export default hardMoneyLoanRequirements;
