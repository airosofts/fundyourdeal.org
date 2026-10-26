import type { Guide } from "../types";

const constructionDrawSchedule: Guide = {
  slug: "construction-draw-schedule",
  metaTitle: "Construction Draw Schedule: Milestones, Retainage, Interest",
  metaDescription:
    "How a construction draw schedule works: budget lines, milestones, inspections, retainage and interest on drawn funds, with a worked $400,000 spec build.",
  category: "Construction",
  title: "Construction draw schedule: the build is paid in arrears, one inspected milestone at a time",
  dek: "Your construction loan closes with most of its money held back. How the budget becomes a draw schedule, what each draw has to prove, how retainage and timing shape your cash, and what interest on drawn funds is worth on a real-looking spec build.",
  readMinutes: 11,
  published: "2026-10-26",
  updated: "2026-10-26",
  keyTakeaways: [
    "At closing, only the land advance funds. On our $540,000 spec build, that’s $59,000 of a $459,000 loan; the $400,000 construction budget waits in a holdback and pays out in six inspected draws.",
    "Draws reimburse work in place. Your peak cash need is your equity plus the biggest phase you pay for before its draw lands: $112,000 for framing and dry-in in the example.",
    "Interest on drawn funds only cut the example’s 12-month interest bill to $28,490, against $48,195 if the full loan accrued from day one. Read the clause: one lender limits interest-as-drawn to the first six months.",
    "Retainage moves cash to the end of the job. Withholding 10% from every draw parks $37,600 until the final draw; a 90% cumulative cap holds back $16,000, and only at the finish stage.",
  ],
  body: [
    {
      type: "p",
      text: "A construction draw schedule is the plan that turns your build budget into payments. Each budget line belongs to a milestone, each milestone gets inspected, and the lender wires the money for it once the work is in place. On a ground-up loan, the land advance funds at closing and up to 100% of hard costs is held back for [draws](/glossary#draws). Published draw turnaround in October 2026 ran from the same day to about two days, and several national lenders charge interest only on money you’ve drawn. The schedule you write before closing decides how much cash you carry during the build, and when you carry it.",
    },
    { type: "h2", text: "Closing funds the dirt. The house is paid for in arrears.", id: "closing" },
    {
      type: "p",
      text: "Ground-up lenders size the loan first, then split it into a land piece and a construction piece. Roc Capital’s standard ground-up program is a typical structure. It advances up to 75% of the land, measured at whichever is lower of its value and the price you paid (60% for an unpermitted lot), plus 100% of construction, all inside a cap of 85% of total project cost. Whatever room that cap leaves for the land is what funds at closing. The construction budget goes into a holdback and stays there until work is verified.",
    },
    {
      type: "p",
      text: "Here’s the deal this guide follows. You buy a permitted infill lot for $140,000 and build a single-family spec home on a $400,000 hard-cost budget, for a total cost of $540,000. The appraiser puts the finished home at $720,000. Run the lender’s three limits and the lowest one is your loan.",
    },
    {
      type: "table",
      caption: "Sizing the example build under Roc Capital’s published ground-up limits (illustrative)",
      head: ["Limit", "Calculation", "Amount"],
      rows: [
        ["85% of total cost", "85% × $540,000", "$459,000"],
        ["70% of as-completed value", "70% × $720,000", "$504,000"],
        ["75% of the lot plus 100% of construction", "$105,000 + $400,000", "$505,000"],
        ["Loan: the lowest limit", "", "$459,000"],
        ["Funded at closing toward the lot", "$459,000 − $400,000", "$59,000"],
        ["Your cash in the lot", "$140,000 − $59,000", "$81,000"],
      ],
    },
    {
      type: "p",
      text: "So $59,000 funds on day one and $400,000 sits in the holdback. The cost limit binds here; [LTV vs LTC vs ARV](/guides/ltv-vs-ltc-vs-arv) shows how the three tests trade places. Permits don’t change this closing number: even the unpermitted 60% advance, $84,000, is more than the cost cap leaves for land. They can change when draws start, though. LendSure releases no construction money until the local authority has issued approved permits.",
    },
    { type: "h2", text: "Write the budget in the order the house goes up", id: "budget" },
    {
      type: "p",
      text: "The lender reviews a line-item budget before closing and measures every draw against it. At Lima One, a construction analyst reviews the budget while underwriting checks the plans and the general contractor’s experience. Build the lines so an inspector can see each one finished. Keep soft costs such as plans, engineering, permits and impact fees off the hard-cost lines, and carry your contingency in your own account, not inside the holdback.",
    },
    {
      type: "table",
      caption: "Example hard-cost budget for a $400,000 single-family spec home (illustrative)",
      head: ["Budget line", "Amount", "Share"],
      rows: [
        ["Site work and utility connections", "$28,000", "7%"],
        ["Foundation", "$44,000", "11%"],
        ["Framing and sheathing", "$72,000", "18%"],
        ["Roofing", "$18,000", "4.5%"],
        ["Windows and exterior doors", "$22,000", "5.5%"],
        ["Plumbing, electrical and HVAC rough-ins", "$50,000", "12.5%"],
        ["Siding and exterior trim", "$30,000", "7.5%"],
        ["Insulation and drywall", "$34,000", "8.5%"],
        ["Cabinets, counters, interior doors and trim", "$48,000", "12%"],
        ["Flooring, tile and paint", "$30,000", "7.5%"],
        ["Fixtures, appliances and mechanical trim-out", "$14,000", "3.5%"],
        ["Driveway, final grading and landscaping", "$10,000", "2.5%"],
        ["Total hard costs", "$400,000", "100%"],
      ],
    },
    { type: "h2", text: "Six draws, each tied to a stage someone can sign off", id: "milestones" },
    {
      type: "p",
      text: "Lima One names four ground-up milestones: foundation, framing, mechanical systems and interior completion. Most builders split those further so no single phase is too large to carry out of pocket. Group the twelve budget lines above into six draws and the schedule looks like this.",
    },
    {
      type: "table",
      caption: "Worked draw schedule for the $400,000 construction holdback (illustrative)",
      head: ["Draw", "Work in place", "Amount", "Drawn to date", "Paid at end of month"],
      rows: [
        ["1", "Site work and foundation", "$72,000", "$72,000 (18%)", "2"],
        ["2", "Framing, roof, windows and doors: the house is dried in", "$112,000", "$184,000 (46%)", "4"],
        ["3", "Mechanical rough-ins and siding", "$80,000", "$264,000 (66%)", "6"],
        ["4", "Insulation and drywall", "$34,000", "$298,000 (74.5%)", "7"],
        ["5", "Cabinets, trim, flooring, tile and paint", "$78,000", "$376,000 (94%)", "9"],
        ["6 (final)", "Fixtures, appliances, driveway and landscaping; final sign-off", "$24,000", "$400,000 (100%)", "10"],
      ],
    },
    {
      type: "p",
      text: "Three rules shaped it. Each draw closes out whole budget lines, so nobody has to estimate a percentage complete. The stages line up with the points where the building department inspects anyway, so the lender’s check and the city’s can happen the same week. And no phase is bigger than you can carry until the wire arrives: the largest, framing and dry-in, is $112,000.",
    },
    { type: "h2", text: "Every draw clears two inspections and a paperwork check", id: "inspections" },
    {
      type: "p",
      text: "The lender’s draw inspection and the building department’s inspections are separate events. The city decides whether the work meets code. The lender’s inspector, or your photos, confirm that the work you’re claiming is installed and matches the budget. A lender can want both before it pays a stage, and LendSure also runs title checks before funds go out.",
    },
    { type: "p", text: "Draw methods and speeds lenders published in October 2026:" },
    {
      type: "ul",
      items: [
        "**Photo app.** Lima One’s FastTrack has you upload photos of finished work from your phone, with draws in as little as one business day on many projects. Kiavi says a mobile inspection could be completed the same day you request the draw.",
        "**Virtual draw.** LendingOne’s ground-up borrowers photograph each milestone in its mobile app and receive funds in as little as 2 days.",
        "**Site visit.** A third-party inspector walks the job. The date the inspector can get there, not the date you asked, starts the clock.",
      ],
    },
    {
      type: "p",
      text: "The paperwork matters as much as the photos. On Kiavi’s standard draws, paid invoices must total at least the amount requested and lien waivers must match those invoices. Photos for a virtual inspection have to cover the whole property, not just the rooms you finished, and the monthly interest payment has to be current. A fee usually comes out of each wire: LendSure published $150–$250 per draw, so six draws cost $900–$1,500.",
    },
    {
      type: "cta",
      text: "Lot, plans and a line-item budget in hand? Send the build and get a draw schedule your lender will fund.",
      href: "/get-funding?loan=construction",
      label: "Fund my build",
    },
    { type: "h2", text: "Retainage shifts part of every draw to the end of the job", id: "retainage" },
    {
      type: "p",
      text: "Retainage is money held back until the work is finished. On a construction loan it can show up twice: in the loan, where the lender limits what you can draw before the final draw, and in your contract, where you hold back part of each payment to the general contractor. Kiavi’s June 2026 draw guide calls a 90% cap on pre-final draws standard across most bridge loan programs, with the last 10% released when the project is complete.",
    },
    { type: "p", text: "How a lender applies that 10% changes when the cash reaches you. Two versions on the same $400,000 holdback:" },
    {
      type: "table",
      caption: "Two ways to hold back 10% on the example schedule",
      head: ["Draw", "Work in place", "Paid with 10% off every draw", "Paid under a 90% cumulative cap"],
      rows: [
        ["1", "$72,000", "$64,800", "$72,000"],
        ["2", "$112,000", "$100,800", "$112,000"],
        ["3", "$80,000", "$72,000", "$80,000"],
        ["4", "$34,000", "$30,600", "$34,000"],
        ["5", "$78,000", "$70,200", "$62,000"],
        ["6 (final)", "$24,000", "$61,600", "$40,000"],
        ["Total", "$400,000", "$400,000", "$400,000"],
      ],
    },
    {
      type: "p",
      text: "Take 10% off every draw and $37,600 is parked by the time the finishes are in. Under a cumulative cap, nothing is held until draw 5 pushes the total past $360,000, and then $16,000 waits. Either way the squeeze lands at the finish stage, when cabinets, flooring and the punch list all want paying before you can list. Ask which method your lender uses and mirror it in the contract: if the lender keeps 10%, keep 10% from your builder.",
    },
    {
      type: "p",
      text: "Don’t assume a state law sets the contract figure for you. California’s 5% retention cap (Civil Code §8811, for contracts entered on or after January 1, 2026) doesn’t apply to a purely residential project of four stories or fewer that isn’t mixed-use. Colorado’s 5% cap on private contracts over $150,000 exempts single-family homes and buildings of up to four units. On a typical investor spec home, retainage is whatever you and your builder sign, so put it in writing and collect a lien waiver every time money changes hands. A construction attorney in your state can tell you what applies.",
    },
    { type: "h2", text: "Interest follows the draws, so the bill is back-loaded", id: "interest" },
    {
      type: "p",
      text: "Investor construction loans are interest-only, and many charge interest only on what’s been disbursed. Lima One says neither flippers nor builders pay interest on undrawn funds, and LendingOne advertises no interest on undrawn rehab funds. The alternative, usually called Dutch interest, charges the whole loan from closing day.",
    },
    {
      type: "p",
      text: "Back to the example. Assume 10.5%, which is above the 8.99–9.84% starting rates ground-up lenders advertised in October 2026, since few projects price at the floor. The balance climbs with each draw in the schedule above, and the house sells at the end of month 12.",
    },
    {
      type: "table",
      caption: "Interest on drawn funds: $459,000 loan at 10.5% (0.875% a month), sale at the end of month 12",
      head: ["Months", "Balance outstanding", "Monthly interest", "Interest for the period"],
      rows: [
        ["1–2", "$59,000 (land only)", "$516.25", "$1,032.50"],
        ["3–4", "$131,000", "$1,146.25", "$2,292.50"],
        ["5–6", "$243,000", "$2,126.25", "$4,252.50"],
        ["7", "$323,000", "$2,826.25", "$2,826.25"],
        ["8–9", "$357,000", "$3,123.75", "$6,247.50"],
        ["10", "$435,000", "$3,806.25", "$3,806.25"],
        ["11–12", "$459,000 (fully drawn)", "$4,016.25", "$8,032.50"],
        ["Total", "", "", "$28,490.00"],
      ],
    },
    {
      type: "p",
      text: "Interest on drawn funds comes to $28,490. Charged on the full $459,000 from day one, the same 12 months would cost $48,195, or $19,705 more. The average drawn balance is about $271,333, so full-loan interest at 10.5% costs the same as roughly 17.8% on the money you actually use.",
    },
    {
      type: "p",
      text: "Read the clause, not the brochure. Rehab Financial’s ground-up page says interest-as-drawn applies for the first six months of the loan. If a clause like that moved this loan to full-balance interest from month 7, the bill would be $31,675, which is $3,185 more. Ridge Street Capital, writing in October 2026, adds two warnings: some lenders quote a higher rate for as-drawn interest, which can wipe out the saving, and as-drawn loans often fund draws 2–5 days slower. Compare total interest in dollars, on your own schedule.",
    },
    { type: "h2", text: "Your schedule is a cash-flow plan. Fund the gaps before you break ground.", id: "timing" },
    {
      type: "p",
      text: "Draws repay finished work. Kiavi’s guide says work must be completed and paid for before you ask for the money. So your peak cash need isn’t the $81,000 in the lot; it’s that $81,000 plus whichever phase you’re paying for ahead of its draw, plus the monthly interest. Pay framers, roofers and the window supplier as they finish, and draw 2 means carrying up to $112,000 for several weeks. Sign a contract that pays the builder only when the lender pays you, and the builder carries it instead. Decide which before you sign.",
    },
    {
      type: "p",
      text: "Interest is the other gap. The first four months on this schedule cost $3,325, because only the land and the foundation money are out. Months 10 to 12 cost $11,838.75. LendSure folds four months of interest into the loan amount at closing, and Roc requires an interest reserve of at least one month. A financed reserve is borrowed money that adds to the balance you pay interest on, so size it from the draw schedule rather than the loan amount.",
    },
    {
      type: "p",
      text: "Then price the slip. Once the house is fully drawn, every month costs $4,016.25. A three-month delay in the sale is $12,048.75 of interest before any extension fee. Grafton Funding puts typical extension fees at 1–2% of the loan balance per extension period, so a 1% fee here adds $4,590. Kiavi offers 3- or 6-month extension options on new construction, and Roc’s standard ground-up loan runs a 12-month term that Roc may lengthen to 18 months. Pick a term that covers permits, the build, the sale and a buffer. [Investor loan points and fees](/guides/investor-loan-points-and-fees) covers extension pricing in full.",
    },
    { type: "h2", text: "Change the budget before you change the work", id: "change-orders" },
    {
      type: "p",
      text: "Ground-up plans move. The soil report calls for deeper footings, or the window package goes up mid-build. Kiavi wants a formal change order request cleared by its feasibility department before anyone starts the extra work. Skip that step and, Kiavi says, you could lose access to holdback money even for work that’s finished and paid for. The easiest change to get approved moves money between lines: a $6,000 foundation overrun covered by cutting $6,000 from the flooring allowance keeps the holdback at $400,000. An increase in the total is usually yours to fund.",
    },
    { type: "h2", text: "Five things that hold up a ground-up draw", id: "delays" },
    {
      type: "ol",
      items: [
        "**A failed or missing city inspection.** If the lender wants the stage signed off, the draw waits for the re-inspection.",
        "**Permits that haven’t been issued.** At lenders like LendSure, no permits means no construction money, however far along the site work is.",
        "**Claiming a line before it’s done.** The inspector pays for what’s installed. The rest waits for the next draw, and so does your contractor.",
        "**Paperwork that doesn’t add up.** Invoices short of the request, or lien waivers that don’t match the invoices, stop a standard draw.",
        "**A missed interest payment or a new lien on title.** Either one can freeze the holdback until it’s cleared.",
      ],
    },
    {
      type: "p",
      text: "These are business-purpose loans: the finished home is for sale or rent, not for you or your family to live in. Building a home of your own calls for a residential construction lender. For the program itself, see [ground-up construction loans](/ground-up-construction-loans).",
    },
    {
      type: "cta",
      text: "Ready to break ground? Tell us about the lot, the plans and the budget in about 60 seconds and get your build funded fast.",
      href: "/get-funding?loan=construction",
      label: "Fund my build",
    },
  ],
  faqs: [
    {
      q: "How many draws are in a construction draw schedule?",
      a: "As many as the lender allows and the job needs. Kiavi says a 20-draw maximum is common across bridge loan programs. Our $400,000 example uses six, built around Lima One’s four ground-up milestones: foundation, framing, mechanical systems and interior completion. Each draw carries an inspection and usually a fee, published at $150–$250 per draw by LendSure, so more draws mean more cost.",
    },
    {
      q: "How long does a construction loan draw take to fund?",
      a: "Lenders published fast targets in October 2026: Lima One’s photo-based FastTrack draws in as little as one business day, LendingOne’s virtual ground-up draws in as little as 2 days, and Kiavi says a mobile inspection can happen the same day as the request. Each clock runs from a complete request and a passed inspection, not from your first email. Ridge Street Capital notes as-drawn interest loans often fund 2–5 days slower.",
    },
    {
      q: "What is retainage on a construction loan?",
      a: "Money held back until the job is finished. A lender may withhold part of each draw or cap pre-final draws; Kiavi calls a 90% cap standard on bridge programs. Your contract can also hold back part of each payment to your builder. State caps exist, such as 5% in California and Colorado, but both exempt most homes of one to four units, so your contract usually sets it.",
    },
    {
      q: "Do you pay interest on undrawn construction loan funds?",
      a: "Not at lenders that charge interest only on disbursed money, as Lima One and LendingOne publish. Under full-loan (Dutch) interest, you pay on the whole loan from closing. On our $459,000 example at 10.5%, as-drawn interest was $28,490 over 12 months against $48,195 on the full loan. Check for limits: one lender applies interest-as-drawn only for the first six months.",
    },
    {
      q: "Can a construction loan pay my builder’s deposit?",
      a: "Usually not. Draws reimburse work in place: Kiavi’s draw guide says work must be completed and paid for before you request disbursement, and LendSure releases nothing until permits are issued. Deposits, early material orders and the first phase come from your own cash. Keep contractor deposits small and tie progress payments to the lender’s milestones so each payment comes back in the next draw.",
    },
    {
      q: "What happens if the draw inspection finds unfinished work?",
      a: "The lender pays for what’s in place and holds the rest. Claim a line before it’s done and expect it cut from the draw or the request sent back. With photo inspections, unclear or missing photos also mean resubmitting, and Kiavi asks for photos of the whole property. Every resubmission adds days, so claim only completed lines and photograph each one clearly.",
    },
  ],
  related: {
    programs: ["construction", "fix-and-flip", "dscr"],
    guides: ["ltv-vs-ltc-vs-arv", "investor-loan-points-and-fees", "rehab-budget-for-lenders"],
  },
  sources: [
    { label: "Lima One — Construction draw process explained", url: "https://www.limaone.com/construction-draw-process-explained/" },
    { label: "Lima One — New construction loans", url: "https://www.limaone.com/new-construction-loans/" },
    { label: "Kiavi blog — the fix-and-flip draw process, holdback caps and draw limits (June 15, 2026)", url: "https://www.kiavi.com/blog/how-fix-and-flip-draw-process-works" },
    { label: "Kiavi — New construction loans", url: "https://www.kiavi.com/loans/new-construction-infill" },
    { label: "Roc Capital — Ground-up construction", url: "https://roccapital.com/ground-up" },
    { label: "Civic — Ground-up construction loans", url: "https://www.civicfs.com/ground-up-construction-loan/" },
    { label: "Civic — Product overview (starting rates)", url: "https://www.civicfs.com/product-overview/" },
    { label: "LendingOne — New construction loans", url: "https://lendingone.com/loan-types/new-construction-loans/" },
    { label: "LendSure — Ground-up construction loans", url: "https://lendsure.com/home-loan-programs/ground-up-construction-loans/" },
    { label: "Rehab Financial — Ground-up construction", url: "https://rehabfinancial.com/ground-up-construction" },
    { label: "Ridge Street Capital — Dutch vs. non-Dutch interest (October 14, 2026)", url: "https://www.ridgestreetcap.com/blog/non-dutch-interest" },
    { label: "Grafton Funding — How long do fix and flip loans last", url: "https://www.graftonfunding.com/investor-resources/how-long-do-fix-and-flip-loans-last" },
    { label: "Foley & Lardner — California caps private-project retention at 5% (November 2025)", url: "https://www.foley.com/p/102luoj/no-more-10-retainage-california-mandates-5-retention-cap-on-private-constructi" },
    { label: "Brownstein Hyatt Farber Schreck — Colorado’s retainage law for private projects (November 2021)", url: "https://www.bhfs.com/insight/practical-implications-of-colorado-s-new-retainage-law-for-private-construction-projects/" },
  ],
};

export default constructionDrawSchedule;
