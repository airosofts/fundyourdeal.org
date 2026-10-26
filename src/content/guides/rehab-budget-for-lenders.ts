import type { Guide } from "../types";

const rehabBudgetForLenders: Guide = {
  slug: "rehab-budget-for-lenders",
  metaTitle: "Rehab Budget for Lenders: Scope of Work, Bids and Draws",
  metaDescription:
    "Build a rehab budget lenders will fund: scope of work line items, 5–10% contingency, contractor bids, what reviewers cut, and how it sets your draws.",
  category: "Fix & flip",
  title: "Rehab budget for lenders: the scope of work that gets funded, and the lines that get cut",
  dek: "Lenders finance up to 100% of the rehab, but only the budget they approve, and only after the work is done. How to write the scope of work, what reviewers strip out, and how a $125,280 budget becomes five draws.",
  readMinutes: 11,
  published: "2026-10-26",
  updated: "2026-10-26",
  keyTakeaways: [
    "Seven flip lenders published 100% rehab financing in October 2026, but only on the approved scope of work (SOW), paid in draws after each phase is finished and checked.",
    "Price the budget by trade division, with labor and materials in each line and contractor bids behind the big numbers. Kiavi describes a complete scope as 20 or more divisions with a declared finish level.",
    "Reviewers strip out staging, miscellaneous lines, materials you already own, your own labor and anything listed twice. The common contingency rule is 5% (or $1,000) up to a 10% ceiling.",
    "The approved lines become the draw schedule. Group them into phases an inspector can verify, and keep cash for the biggest phase, because each draw repays work you've already paid for.",
  ],
  body: [
    {
      type: "p",
      text: "A rehab budget for lenders is a priced scope of work (SOW): every repair, by trade, with labor and materials, which the lender reviews before closing and then pays out against as the work gets done. Kiavi, Lima One, RCN Capital, LendingOne, Roc, Civic and Easy Street all published 100% rehab financing in October 2026. Your budget decides how much of that you actually receive, how the project is classed, and when each dollar arrives. Below is one that survives review: a $262,000 two-story with a $125,280 budget.",
    },
    { type: "h2", text: "Your budget does three jobs before anyone swings a hammer", id: "what-it-decides" },
    {
      type: "ul",
      items: [
        "**It sizes the holdback.** The approved total is the rehab money in the loan, held back at closing and released in draws. A line the reviewer cuts is a line you pay for.",
        "**It sets your leverage tier.** Lenders class scopes as light, moderate or heavy and lend less on heavy ones. RCN Capital's grid gives a borrower with no flips 85% of the price and 70% of ARV on light rehab, but 70% and 60% on heavy. Lima One's Quick Flip, for light cosmetic work, offers up to 95% of cost when the budget is under 50% of the purchase price, and Ridge Street Capital's beginner tier caps the budget at 50% of the price.",
        "**It supports the ARV.** Kiavi's scope-of-work guide says lenders use the budget to test whether the renovation supports the projected after-repair value. A finished value that assumes a new kitchen needs a kitchen in the budget; see [our ARV walkthrough](/guides/how-to-calculate-arv).",
      ],
    },
    {
      type: "p",
      text: "Big scopes get extra scrutiny. Kiavi treats a project as extensive when it adds square footage, involves significant structural foundation work or costs a lot relative to the purchase price. For borrowers at its standard level, an extensive project must be run by a licensed general contractor, and a feasibility analyst verifies the license. At Lima One, a construction analyst confirms each budget is enough for the plan before closing.",
    },
    { type: "h2", text: "Price it by trade division, with labor and materials in every line", id: "line-items" },
    {
      type: "p",
      text: "Write the budget the way contractors bill and inspectors check: by trade, not by room. Kiavi's guide describes a complete scope as 20 or more divisions, from plans and permits through landscaping, cleanup and contingency, and warns that one lump such as “kitchen remodel” may draw questions. Its submission rules add four more:",
    },
    {
      type: "ul",
      items: [
        "Declare a finish level (low, mid or high-range) so the reviewer can test your prices against it.",
        "Cover standard labor and materials in every division. A line that prices only one of them comes back for revision.",
        "List each item once. Appliances belong in the appliance division and nowhere else.",
        "Spread a general contractor's fee across the other divisions instead of showing it as its own line.",
      ],
    },
    {
      type: "p",
      text: "Describe each line so an inspector can tell when it's done. “Tear off and reshingle, new drip edge and vents” beats “Roof.” Give quantities and specs, and keep the project summary in step with the line items: Kiavi requires every update described in the summary to appear in the itemized scope.",
    },
    { type: "h3", text: "The example budget, as approved" },
    {
      type: "p",
      text: "The deal: a 1,840 sq ft four-bedroom two-story bought for $262,000, with a lender ARV of $490,000. The borrower has three completed flips and terms of 90% of the purchase, 100% of the rehab and a 75% ARV cap, the published maximums at Roc and Civic. The plan opens the kitchen, replaces the roof, windows and mechanicals, and finishes to mid-grade.",
    },
    {
      type: "table",
      caption: "Approved rehab budget for a 1,840 sq ft two-story (illustrative prices; get bids in your own market)",
      head: ["Division", "What's included", "Approved"],
      rows: [
        ["Plans and permits", "Building, electrical and plumbing permits; beam drawing", "$2,600"],
        ["Demolition", "Kitchen wall, flooring, two bathrooms; two dumpsters", "$5,400"],
        ["Framing", "Engineered beam for the opened wall; subfloor repair", "$6,800"],
        ["Roofing", "Tear-off and reshingle, new drip edge and vents", "$12,400"],
        ["Windows and exterior doors", "14 vinyl windows, front and rear doors", "$9,600"],
        ["Electrical", "200-amp panel, kitchen and bath circuits, fixtures", "$8,200"],
        ["Plumbing", "New supply lines, two bathroom rough-ins, fixtures", "$7,400"],
        ["HVAC", "Furnace, condenser and coil", "$8,900"],
        ["Insulation and drywall", "Attic insulation; drywall where walls were opened", "$6,300"],
        ["Kitchen", "Cabinets, quartz counters, backsplash, sink", "$12,800"],
        ["Appliances", "Range, dishwasher, microwave, refrigerator", "$4,600"],
        ["Bathrooms", "Two baths: tile, vanities, tub surround", "$9,800"],
        ["Flooring", "Luxury vinyl plank throughout, 1,840 sq ft", "$7,700"],
        ["Interior paint and trim", "Walls, ceilings, trim and doors", "$5,900"],
        ["Exterior paint and siding", "Siding repair, paint, gutters", "$4,700"],
        ["Landscaping and cleanup", "Grading, mulch, front sod, final clean", "$2,900"],
        ["Subtotal", "", "$116,000"],
        ["Contingency", "8% of the subtotal, on its own line", "$9,280"],
        ["Total rehab budget", "47.8% of the purchase price", "$125,280"],
      ],
    },
    { type: "h2", text: "What the reviewer cut from the first draft, and why", id: "what-gets-cut" },
    {
      type: "p",
      text: "The borrower's first draft came to $144,325. Review took it to $125,280. Nothing about the house changed; the lines did.",
    },
    {
      type: "table",
      caption: "First draft vs. approved budget",
      head: ["Draft line", "Draft", "Approved", "Why"],
      rows: [
        ["Staging and furniture", "$4,500", "$0", "Kiavi doesn't reimburse staging. Pay for it in cash when you list."],
        ["Miscellaneous / TBD", "$3,000", "$0", "Miscellaneous costs aren't reimbursable either. Unknowns go in the contingency."],
        ["Tile already bought", "$1,800", "$0", "Materials you've already purchased come out of the budget."],
        ["Kitchen, with appliances", "$17,400", "$12,800", "The $4,600 of appliances was also in the appliance line. One item, one line."],
        ["Electrical", "$3,800", "$8,200", "Too low for a panel and new circuits. Raised to the licensed electrician's bid."],
        ["Contingency", "$18,825 (15%)", "$9,280 (8%)", "Over the common 10% ceiling. Cut to 8%; hold the rest as your own cushion."],
        ["Total", "$144,325", "$125,280", ""],
      ],
    },
    {
      type: "p",
      text: "The draft's size was a problem on its own. The cap is 75% of the $490,000 ARV, or $367,500, and the purchase advance at 90% is $235,800, which leaves $131,700 of room for rehab. The draft overshot that by $12,625, so even if every line had been accepted, the cap would have handed $12,625 back to the borrower. The approved budget fits with $6,420 to spare. At 55% of the price, the draft would also have missed the 50%-of-price lines some lenders draw for beginners and light-rehab pricing.",
    },
    {
      type: "p",
      text: "Two things never belong in it: your own labor, and work that doesn't add permanent value to the structure. Kiavi tells borrowers to leave out free labor from themselves, friends and family, and won't reimburse work that is unclear or adds no permanent value. If you'll paint it yourself, the budget carries the paint, not your weekends.",
    },
    { type: "h2", text: "Contingency: 5% to 10%, on a line of its own", id: "contingency" },
    {
      type: "p",
      text: "Kiavi's scope-of-work guide says most lenders commonly require a contingency of 5% of the renovation budget, or at least $1,000, generally up to a 10% ceiling. Keep it separate rather than padding the trades; it pays for what turns up once the walls are open. On the $116,000 subtotal, 5% is $5,800 and 10% is $11,600. The example uses 8%.",
    },
    {
      type: "p",
      text: "Funded contingency still has rules. Spending it normally takes a change order the lender approves before the work starts, and Kiavi's guide warns that work added without approval may see its draws delayed or denied. Hold a cash cushion of your own too, sized to the house: original wiring and plumbing deserve more slack than a cosmetic refresh.",
    },
    { type: "h2", text: "Contractor bids are the evidence behind every number", id: "bids" },
    {
      type: "p",
      text: "Kiavi's guide says estimates built on current contractor bids tend to hold up better in underwriting than ones taken from general cost guides. A bid that actually helps your file, rather than a total on letterhead, has:",
    },
    {
      type: "ul",
      items: [
        "The same line structure as your scope, so the reviewer can match bid to budget line by line.",
        "Labor and materials shown separately where the trade allows.",
        "Quantities and specs: roofing squares, window count, fixture models, flooring square footage.",
        "Exclusions in writing. Whatever a bid leaves out, from permits to haul-off to drywall patching after the electrician, has to appear somewhere else in your budget.",
        "A payment schedule tied to finished milestones rather than dates, with a small deposit.",
        "The contractor's license and proof of insurance. Kiavi verifies the license on extensive projects.",
      ],
    },
    {
      type: "p",
      text: "Get competing bids on the big trades (roof, mechanicals, kitchen) and budget the one you'll actually sign. A low bid you don't plan to use makes the budget look cheap and leaves you short when the real contract arrives.",
    },
    {
      type: "cta",
      text: "Scope priced and bids in hand? Send the budget with your deal and get your fix and flip terms fast.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund my flip",
    },
    { type: "h2", text: "The approved lines become your draw schedule", id: "draws" },
    {
      type: "p",
      text: "After closing, the lender releases the holdback against those same lines. At Lima One you mark which approved budget lines are complete, and funds follow specific milestones. Kiavi's draw guide says work generally must be completed, installed and paid for before money goes out, and that most lenders cap draws before the final one at 90% of the holdback. Published [draw](/glossary#draws) times in October 2026 ran 24–48 hours; LendingOne offers same-day virtual draws, and Lima One's FastTrack photo draws can take as little as one business day.",
    },
    { type: "p", text: "So group the approved lines into phases an inspector can see finished, and plan your cash around the biggest one:" },
    {
      type: "table",
      caption: "Five draws from the approved $116,000 subtotal. The $9,280 contingency is drawn only through approved change orders.",
      head: ["Draw", "Lines completed", "Amount", "Drawn to date"],
      rows: [
        ["1", "Permits, demolition, framing, roof", "$27,200", "$27,200"],
        ["2", "Electrical, plumbing, HVAC", "$24,500", "$51,700"],
        ["3", "Windows and doors, insulation and drywall, exterior", "$20,600", "$72,300"],
        ["4", "Kitchen, bathrooms, appliances", "$27,200", "$99,500"],
        ["5 (final)", "Flooring, paint, landscaping, punch list", "$16,500", "$116,000"],
      ],
    },
    {
      type: "p",
      text: "Three checks on this schedule. Before the final draw, $99,500 has gone out, 79% of the $125,280 holdback and inside a 90% cap of $112,752. The largest phases, draws 1 and 4 at $27,200 each, are the cash you or your contractor carry until the inspection clears. And each draw has a fee: OfferMarket publishes $270 a draw and Ridge Street Capital $200–$300, so these five cost roughly $1,000–$1,500, taken out of the wires.",
    },
    {
      type: "p",
      text: "Kiavi's guide notes that a maximum of 20 draws is common, and OfferMarket funds materials delivered but not yet installed at 50%. That helps with long-lead items: if $8,000 of the kitchen line is cabinets sitting on site, a 50% rule would release $4,000 before they go in. Because Lima One, LendingOne and RCN charge interest only on drawn funds, a schedule that tracks the real pace of the job also keeps the interest bill down.",
    },
    { type: "h2", text: "Change orders: approval first, then the work", id: "change-orders" },
    {
      type: "p",
      text: "Scopes move once the walls are open. Kiavi's process is a written change order with updated costs, submitted before the work begins and approved in writing before you spend. Its guide adds that removing lines may not automatically shrink the loan, and that for early-phase work (plans, permits, demolition, foundation) some lenders cap reimbursement at roughly 10% over or under what was reported.",
    },
    {
      type: "p",
      text: "In the example, demolition exposes a rotten subfloor in the hall bath, and the framer prices the repair at $3,100. File a change order moving $3,100 from contingency to framing, wait for approval, then do the work. Framing becomes $9,900, contingency drops to $6,180, and the holdback stays at $125,280. Do the repair first and that $3,100 may never come back.",
    },
    {
      type: "p",
      text: "Keep a running ledger for every line: approved amount, approved changes, drawn to date and what's left. It's the document that settles any argument about the balance.",
    },
    { type: "h2", text: "Before you submit: seven checks", id: "checklist" },
    {
      type: "ol",
      items: [
        "Every line is a trade division with labor and materials, priced to a declared finish level.",
        "Every update in the project summary appears in the line items, and nothing appears twice.",
        "Staging, furniture, miscellaneous, materials you own and your own labor are out.",
        "Contingency sits on its own line at 5–10%.",
        "The big trades are backed by bids you intend to sign.",
        "The total fits under the ARV cap after the purchase advance, and you know whether it crosses a light-to-heavy or 50%-of-price line.",
        "The lines group into draw phases, and you have cash for the largest one. Model the carry with the [flip calculator](/calculators/fix-and-flip), and see [the cash a flip really needs](/guides/cash-needed-to-flip-a-house).",
      ],
    },
    {
      type: "p",
      text: "Rehab loans with draws are made on investment property only. A home for yourself or your family calls for a residential renovation mortgage.",
    },
    {
      type: "cta",
      text: "Budget ready and the house under contract? It takes about a minute to send us the deal and get your flip funded.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund my flip",
    },
  ],
  faqs: [
    {
      q: "What is a scope of work for a fix and flip loan?",
      a: "A scope of work, or SOW, is the itemized list of repairs with a cost for each, usually organized by trade division with labor and materials. The lender reviews it before closing to size the rehab holdback, to check that the work supports the after-repair value, and to set the line items every draw is measured against.",
    },
    {
      q: "How much contingency should a rehab budget include?",
      a: "Kiavi's scope-of-work guide says most lenders commonly require 5% of the renovation budget, or at least $1,000, generally up to a 10% ceiling. Put it on its own line rather than padding the trades. A bigger cushion makes sense on older houses, but anything above the lender's ceiling usually has to come from your own cash.",
    },
    {
      q: "Will a hard money lender pay for staging or furniture?",
      a: "Usually not. Kiavi lists staging and miscellaneous expenses as not reimbursable, and it also excludes work that doesn't add permanent value to the structure. Plan staging as a cash cost when you list; Ridge Street Capital's calculator puts it at typically $2,500–$4,000 for a standard home.",
    },
    {
      q: "Can I do the rehab work myself on a fix and flip loan?",
      a: "You can, but keep your own time out of the budget. Kiavi tells borrowers to exclude free labor from themselves, friends and family, so the budget carries materials and paid trades only. Bigger jobs may need a licensed general contractor: Kiavi requires one on extensive projects for its standard-level borrowers.",
    },
    {
      q: "What happens if my rehab goes over budget?",
      a: "Overruns are usually your cash. If the extra work replaces something in the scope, file a change order that moves money between lines or out of contingency, and get approval before the work starts. Kiavi's guide warns that unapproved overages may not be reimbursed, and a loan already at its ARV cap can't grow to cover them.",
    },
    {
      q: "How do contractor bids affect rehab loan approval?",
      a: "They're the evidence for your numbers. Kiavi's guide says estimates built on current contractor bids tend to hold up better in underwriting than estimates from general cost guides. Bids that follow your scope's line structure, split labor from materials and list their exclusions speed up the review, and they give you a payment schedule that lines up with the draws.",
    },
  ],
  related: {
    programs: ["fix-and-flip", "hard-money", "construction"],
    guides: ["construction-draw-schedule", "how-to-calculate-arv", "cash-needed-to-flip-a-house"],
  },
  sources: [
    { label: "Kiavi — How to write a fix and flip scope of work", url: "https://www.kiavi.com/blog/how-to-write-fix-and-flip-scope-of-work" },
    { label: "Kiavi — How to submit a scope of work", url: "https://kiavi.com/guides/submitting-an-sow" },
    { label: "Kiavi — Draws on fix and flip loans", url: "https://www.kiavi.com/blog/how-fix-and-flip-draw-process-works" },
    { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Lima One — Fix and flip loans", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "Lima One — Construction draw process explained", url: "https://www.limaone.com/construction-draw-process-explained/" },
    { label: "LendingOne — Fix and flip loans", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
    { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
    { label: "Civic — Fix and flip loans", url: "https://www.civicfs.com/fix-and-flip/" },
    { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
    { label: "OfferMarket — Fix and flip loan terms, Florida (draw fees, materials)", url: "https://www.offermarket.us/fix-and-flip-loan/florida" },
    { label: "Ridge Street Capital — Fix and flip loans for beginners", url: "https://www.ridgestreetcap.com/blog/fix-and-flip-loans-for-beginners" },
    { label: "Ridge Street Capital — Fix and flip calculator (staging)", url: "https://www.ridgestreetcap.com/blog/fix-and-flip-calculator" },
  ],
};

export default rehabBudgetForLenders;
