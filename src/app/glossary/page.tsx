import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/PageIntro";
import { ExampleCard, FaqSection, Formula, Sources } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, H2, JsonLd } from "@/components/ui";
import { SITE } from "@/lib/site";
import { alternatesFor, openGraphFor } from "@/lib/seo";

const META_TITLE = "Investor Loan Glossary: DSCR, ARV, Draws | Fund Your Deal";
const META_DESCRIPTION =
  "41 investor loan terms in deal order: comps, ARV and LTC, points and draws, then seasoning, DSCR and the refinance, with one example deal worked through.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: alternatesFor("/glossary"),
  openGraph: openGraphFor({ title: META_TITLE, description: META_DESCRIPTION, url: "/glossary", type: "article" }),
};

const UPDATED = "2026-10-26";

type Entry = {
  id: string;
  name: string;
  aka?: string[];
  /** The definition in one line. Also the DefinedTerm description in the JSON-LD. */
  short: string;
  body: string[];
  /** The term applied to the example deal that runs through the page. */
  deal?: string;
  formula?: string;
  links: { href: string; label: string }[];
};

type Stage = { id: string; step: string; label: string; heading: string; lead: string; terms: Entry[] };

/* ------------------------------------------------------------------ */
/* Stage 1: find and size the deal                                     */
/* ------------------------------------------------------------------ */

const FIND: Stage = {
  id: "find-and-size",
  step: "01",
  label: "Find and size the deal",
  heading: "Before you sign: what it’s worth, what to offer, what it will borrow.",
  lead: "These terms decide your offer and the size of the loan before a lender ever sees the file.",
  terms: [
    {
      id: "comps",
      name: "Comps (comparable sales)",
      aka: ["Comparables", "Sales comps"],
      short: "Recent closed sales of similar homes nearby, used to value a property both as it stands and after the work is done.",
      body: [
        "Every value in a deal traces back to comps: your offer, the lender’s [ARV](#arv), the appraisal on your refinance. Fannie Mae’s appraisal standard, a common benchmark, calls for at least three closed sales, preferably closed within the last 12 months, from the same market area and alike in site, room count, size, style and condition. Active listings and pending sales can support the picture, but they don’t replace closed sales.",
        "For a flip, pull two sets. As-is comps tell you what to pay; renovated comps that match your finished house tell you what it will sell for. If every high sale on the street has a second bathroom and your plan doesn’t add one, those sales don’t set your ARV.",
      ],
      deal: "Three renovated 3-bed ranches within a mile closed between $279,000 and $291,000 in the past year, which supports an ARV of $285,000.",
      links: [
        { href: "/guides/how-to-calculate-arv", label: "How to calculate ARV" },
        { href: "/calculators/fix-and-flip", label: "Flip calculator" },
      ],
    },
    {
      id: "arv",
      name: "ARV (after-repair value)",
      aka: ["After-repair value", "As-completed value"],
      short: "The value a property should have after the renovation or build you’ve planned is complete, based on sales of finished homes like it.",
      body: [
        "On a flip, ARV is the ceiling over everything else. Lenders cap the whole loan, purchase money and rehab together, at a share of it: 70% to 80% on the fix and flip programs lenders published in October 2026, and as low as 60% to 70% at some for newer investors or heavy rehabs. Ground-up lenders cap at 65% to 75% of completed value.",
        "On the way out, ARV becomes the appraised value your refinance is sized on. LendingOne’s fix-to-rent program refinances at about 75% of it.",
      ],
      deal: "At a 75% cap, $285,000 of ARV allows up to $213,750 of loan. A lender capping a first-time flipper at 60% would stop at $171,000.",
      formula: "ARV cap = ARV × the lender’s maximum loan-to-ARV",
      links: [
        { href: "/guides/how-to-calculate-arv", label: "ARV guide" },
        { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
      ],
    },
    {
      id: "70-percent-rule",
      name: "70% rule",
      aka: ["Maximum allowable offer"],
      short: "An offer screen for flips: pay no more than 70% of ARV, minus what the repairs will cost.",
      body: [
        "The 30% it holds back has to absorb everything between buying and selling: closing costs at both ends, points and interest, taxes and insurance while you own it, the agent on the sale, and your profit. It’s a way to kill a bad deal from the driveway. No lender sizes a loan on it.",
        "Use it as a first filter, not a verdict. On a cheap house, fixed costs take a larger bite of the margin; on a light cosmetic job in a pricey market, 30% can be more cushion than the deal needs. Run the full numbers before you sign.",
      ],
      deal: "$285,000 × 70% = $199,500. Subtract the $52,000 rehab and the maximum offer is $147,500. The contract at $145,000 clears it by $2,500.",
      formula: "Maximum offer = (ARV × 0.70) − rehab budget",
      links: [
        { href: "/calculators/fix-and-flip", label: "Run it in the flip calculator" },
        { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
      ],
    },
    {
      id: "emd",
      name: "EMD (earnest money deposit)",
      aka: ["Earnest money", "Escrow deposit"],
      short: "The deposit you put up once the seller accepts your offer, held by a title or escrow company and credited to you at closing.",
      body: [
        "It tells the seller you’re serious. The contract sets when it becomes non-refundable, which investors call the deposit “going hard”: walk away after that point, or miss your closing date, and the seller may keep it. Auctions and many distressed sales take a deposit with no financing contingency at all.",
        "That’s why loan timing belongs in the deal before you sign. Ask your lender how fast it can close on this property, and set the closing date in the contract to match.",
      ],
      links: [
        { href: "/guides/closing-an-investor-loan-fast", label: "Closing an investor loan fast" },
        { href: "/hard-money-loans", label: "Hard money loans" },
      ],
    },
    {
      id: "proof-of-funds",
      name: "Proof of funds",
      aka: ["POF"],
      short: "A recent bank or brokerage statement, or a letter, showing you hold the cash your side of the deal needs.",
      body: [
        "Sellers and auction houses want it with your offer. Lenders want it before closing, covering the down payment, points, closing costs and any [reserves](#reserves), in accounts in your name or your LLC’s.",
        "A lender’s term sheet isn’t proof of funds. It covers the loan, not the cash you bring. Large deposits that landed recently will need a paper trail showing where they came from.",
      ],
      links: [
        { href: "/guides/cash-needed-to-flip-a-house", label: "Cash needed to flip a house" },
        { href: "/get-funding?loan=fix-and-flip", label: "Fund my flip" },
      ],
    },
    {
      id: "track-record",
      name: "Track record (experience)",
      aka: ["Experience tier"],
      short: "The flips, builds and rentals you’ve already completed, which lenders use to set your leverage and rate.",
      body: [
        "On short-term loans, experience is priced more often than it’s required. Roc Capital, Civic and New Silver listed no minimum number of past flips when we checked in October 2026. Lima One asked for one exit in the past 36 months. RCN sorts borrowers into tiers and lends 85% to 100% of the price depending on where you land.",
        "Ground-up construction is stricter: lenders usually want at least one completed build in roughly the past three years. Have the closing statements from past projects on hand to document what you’ve done.",
      ],
      links: [
        { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
        { href: "/ground-up-construction-loans", label: "Construction loans" },
      ],
    },
    {
      id: "ltc",
      name: "LTC (loan-to-cost)",
      aka: ["Loan-to-cost ratio"],
      short: "The loan as a share of what the project costs you: purchase price plus the rehab or construction budget.",
      body: [
        "Project lenders size on cost because the house you buy isn’t the house that repays them. Limits published in October 2026: fix and flip lenders covered 85% to 100% of the price (more as your experience grows) and all of the rehab; Roc’s bridge program went to 85% LTC; ground-up lenders covered 82.5% to 90% of total cost.",
        "LTC never works alone. The same loan also has to fit under the [ARV](#arv) cap, and whichever limit is smaller is the loan you get.",
      ],
      deal: "90% of the $145,000 price is $130,500. Add the full $52,000 rehab and the loan is $182,500 against $197,000 of cost: 92.6% LTC. That’s 64% of ARV, well inside a 75% cap of $213,750.",
      formula: "LTC = loan ÷ (purchase price + rehab or build budget)",
      links: [
        { href: "/guides/ltv-vs-ltc-vs-arv", label: "LTV vs LTC vs ARV" },
        { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
      ],
    },
    {
      id: "ltv",
      name: "LTV (loan-to-value)",
      aka: ["Loan-to-value ratio"],
      short: "The loan as a share of the property’s appraised value: the leverage limit on rental, bridge and refinance loans.",
      body: [
        "LTV sizes a loan on a property that already is what it is: a rental purchase, a light bridge, a refinance. On DSCR rental loans in October 2026, lenders published 80% on purchases, with 85% at a few for scores of 720 to 740 and up; 75% to 80% on rate-and-term refinances; and 70% to 80% on cash-out, most often 75%. Bridge loans ran 70% to 85%.",
        "On a purchase, value usually means the lower of price and appraisal. On a refinance it’s the new appraisal, unless you haven’t owned the property long enough. See [seasoning](#seasoning).",
      ],
      deal: "Refinanced at 75% of a $285,000 appraisal, the new loan is $213,750.",
      formula: "LTV = loan ÷ appraised value",
      links: [
        { href: "/guides/ltv-vs-ltc-vs-arv", label: "LTV vs LTC vs ARV" },
        { href: "/dscr-loans", label: "DSCR loans" },
        { href: "/bridge-loans", label: "Bridge loans" },
      ],
    },
    {
      id: "cash-to-close",
      name: "Cash to close",
      short: "Everything you wire to the closing table: the part of the price the loan doesn’t cover, points, fees, title and escrow costs and prepaid items.",
      body: [
        "On a project loan, your down payment is the slice of the purchase price the lender doesn’t fund. The rehab money arrives later through [draws](#draws). On top go [points](#points), any flat lender fee (Easy Street published a $1,995 document fee), [title and escrow](#title-and-escrow) charges, and any [interest reserve](#interest-reserve) or [reserves](#reserves) the lender requires.",
        "Budget past the closing table as well. Draws are paid after an inspection, so you front the cost of each stage of work before the lender reimburses it.",
      ],
      deal: "$145,000 − $130,500 funded = $14,500 down. Add 1.5 points on $182,500 ($2,737.50) and you need $17,237.50 before title, escrow and lender fees.",
      links: [
        { href: "/guides/cash-needed-to-flip-a-house", label: "Cash needed to flip a house" },
        { href: "/calculators/fix-and-flip", label: "Flip calculator" },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Stage 2: the loan                                                   */
/* ------------------------------------------------------------------ */

const LOAN: Stage = {
  id: "the-loan",
  step: "02",
  label: "The loan",
  heading: "Pick the loan that fits the deal, then read what it really costs.",
  lead: "The products, the pricing and the paperwork: what’s on a term sheet and who stands behind the loan.",
  terms: [
    {
      id: "hard-money",
      name: "Hard money loan",
      aka: ["Private money", "Asset-based loan"],
      short: "Short-term, property-backed money from a private lender rather than a bank, sized mainly on the deal instead of your income.",
      body: [
        "Hard money is a style of lending more than a single product: fast, secured by the property, interest-only and due within months. Fix and flip, bridge and construction loans are usually hard money. Terms published in October 2026 ran 6 to 24 months, and closings took about one to three weeks; Kiavi advertised 7 days and RCN 10 business days.",
        "Speed is what you pay for. Short-term investor loans reported under HMDA for 2025 had a median rate of 10%: 10.45% from non-bank lenders, with the middle half between 9.75% and 11%, against 7.5% from banks. [Points](#points) come on top.",
      ],
      links: [
        { href: "/hard-money-loans", label: "Hard money loans" },
        { href: "/guides/how-hard-money-loans-work", label: "How hard money loans work" },
      ],
    },
    {
      id: "fix-and-flip",
      name: "Fix and flip loan",
      aka: ["Rehab loan"],
      short: "A short-term loan that buys a property and pays for its renovation, repaid when you sell or refinance.",
      body: [
        "The purchase money funds at closing; the rehab money waits in a holdback and comes out in [draws](#draws). Lender pages in October 2026 showed financing of 85% to 100% of the price plus the full rehab budget, under an overall cap of 70% to 80% of [ARV](#arv), for 6 to 24 months. Minimum scores ran 600 to 660, and loan sizes from $50,000 to $5 million.",
        "Payments are interest-only, and interest on the rehab portion accrues only once it’s drawn.",
      ],
      links: [
        { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
        { href: "/get-funding?loan=fix-and-flip", label: "Fund my flip" },
      ],
    },
    {
      id: "bridge-loan",
      name: "Bridge loan",
      short: "Short-term financing that carries a property from one event to the next: a fast purchase to a sale, or to a long-term refinance.",
      body: [
        "For 1–4 unit property that needs little or no work, October 2026 terms ran 70% to 85% LTV (Roc also offered 85% LTC), 12 to 24 months, credit minimums of 660 to 700 and closings in 7 to 14 business days. Lima One and Kiavi published no prepayment penalty, so paying off early costs nothing extra.",
        "What the lender studies is how you’ll pay it back. Roc’s stabilized bridge, for example, looks for an exit through a sale or a rental refinance at a DSCR of 1.10.",
      ],
      links: [
        { href: "/bridge-loans", label: "Bridge loans" },
        { href: "/guides/bridge-loan-exit-strategies", label: "Bridge loan exit strategies" },
        { href: "/get-funding?loan=bridge", label: "Fund my bridge loan" },
      ],
    },
    {
      id: "ground-up-construction",
      name: "Ground-up construction loan",
      aka: ["New construction loan"],
      short: "A loan that funds a new build from the lot to completion, releasing construction money in inspected stages.",
      body: [
        "Terms published in October 2026: 82.5% to 90% of total cost, 100% of hard construction costs, a land advance of 60% to 75% (Roc drops to 60% on an unpermitted lot) and a cap of 65% to 75% of completed value. Terms ran 12 to 24 months, Kiavi listed 3- and 6-month extensions, and points ran 1% to 2%.",
        "Expect to show permits or a clear path to them, plans, a builder’s line-item budget and, at most lenders, a completed build in the last few years.",
      ],
      links: [
        { href: "/ground-up-construction-loans", label: "Construction loans" },
        { href: "/get-funding?loan=construction", label: "Fund my build" },
      ],
    },
    {
      id: "term-sheet",
      name: "Term sheet",
      aka: ["Letter of intent", "Loan quote"],
      short: "The lender’s written outline of a proposed loan: amount, rate, points, term, leverage, fees and open conditions.",
      body: [
        "Read it as the deal’s scorecard. Check the loan against your cost and ARV; the rate and points together; whether interest accrues on the whole commitment or just the money drawn so far; the term and any [extension](#extension-fee) options; the [prepayment penalty](#prepayment-penalty); and [recourse](#recourse) and guarantees.",
        "A term sheet isn’t a promise to lend. The appraisal, title, insurance and final underwriting all come after it, so read its conditions list as your to-do list.",
      ],
      links: [
        { href: "/how-it-works", label: "How it works" },
        { href: "/guides/investor-loan-points-and-fees", label: "Points and fees guide" },
      ],
    },
    {
      id: "points",
      name: "Points (origination)",
      aka: ["Origination fee"],
      short: "An upfront lender fee priced in percent of the loan amount: 1 point equals 1%.",
      body: [
        "Points are usually paid at closing; Lima One lets flip borrowers defer them to the payoff. Ranges published in October 2026: 0 to 2 points on fix and flip loans (New Silver 1% to 1.75%; Easy Street 0 to 2, plus a $1,995 document fee) and 1 to 2 points on construction.",
        "Weigh points and rate together over the months you’ll actually hold the loan. On a loan repaid in six months, one point costs about the same as two extra percentage points of annual interest.",
      ],
      deal: "1.5 points on the $182,500 loan is $2,737.50, due at closing.",
      formula: "Points cost = loan amount × points ÷ 100",
      links: [
        { href: "/guides/investor-loan-points-and-fees", label: "Points and fees guide" },
        { href: "/hard-money-loans", label: "Hard money loans" },
      ],
    },
    {
      id: "interest-only",
      name: "Interest-only payments",
      aka: ["IO"],
      short: "Payments that cover interest and nothing else, so the balance stays put until you pay the loan off.",
      body: [
        "Flip, bridge and construction loans work this way over their 6- to 24-month terms, and on rehab money you pay interest only once it’s drawn. Many DSCR rental loans offer an interest-only period too, usually the first 10 years, which lowers the payment and lifts the [DSCR](#dscr).",
        "The trade-off arrives at the end: with no principal paid down, the whole balance is still owed at maturity. See [balloon payment](#balloon).",
      ],
      deal: "At 10.25%, the $130,500 funded at closing costs $1,114.69 a month. Fully drawn at $182,500, it’s $1,558.85.",
      formula: "Monthly interest = balance drawn × annual rate ÷ 12",
      links: [
        { href: "/guides/how-hard-money-loans-work", label: "How hard money loans work" },
        { href: "/dscr-loans", label: "DSCR loans" },
      ],
    },
    {
      id: "balloon",
      name: "Balloon payment",
      short: "The remaining loan balance, due in one lump sum on the maturity date.",
      body: [
        "Every short-term investor loan ends in one. On an interest-only flip loan, the balloon is the entire principal. Some rental portfolio loans balloon too: 5-, 7- and 10-year terms appeared on lender pages in October 2026, even though the payments are worked out over 30 years.",
        "The balloon is why your [exit strategy](#exit-strategy) matters more than your rate. If the sale or refinance isn’t done by maturity, you’ll be asking for an [extension](#extension-fee) with little leverage.",
      ],
      links: [
        { href: "/guides/how-hard-money-loans-work", label: "How hard money loans work" },
        { href: "/rental-portfolio-loans", label: "Rental portfolio loans" },
      ],
    },
    {
      id: "non-owner-occupied",
      name: "Non-owner-occupied (business purpose)",
      aka: ["Investment property", "Business-purpose loan"],
      short: "Property you buy to rent out or resell, where no one in your family will live. It’s the only kind of loan Fund Your Deal arranges.",
      body: [
        "Business-purpose loans fall outside most consumer mortgage rules. Regulation Z exempts credit made mainly for business purposes, and its official commentary treats a loan to buy, improve or maintain a rental that isn’t owner-occupied as business credit. The same commentary draws a hard line: plan to stay there more than 14 days over the next year and it can’t be treated as non-owner-occupied.",
        "Expect to sign a business-purpose and occupancy statement at closing. Buying a home that you or a relative will occupy? That calls for a residential mortgage lender, not a business-purpose loan.",
      ],
      links: [
        { href: "/loans", label: "All loan programs" },
        { href: "/disclosures", label: "Disclosures" },
      ],
    },
    {
      id: "llc",
      name: "LLC borrower",
      aka: ["Entity vesting"],
      short: "A limited liability company that takes title to the property and signs the loan as the borrower.",
      body: [
        "Every rental lender in our October 2026 research allowed LLC borrowers, and Lima One, Roc Capital and Civic required an entity on DSCR loans. Have the articles of organization, operating agreement and EIN letter ready, and expect the owners to sign a [personal guarantee](#personal-guarantee); Griffin, for one, pairs its LLC loans with one.",
        "Whether to form an LLC, in which state and how to own it are questions for your attorney or CPA. We can tell you what lenders ask for, not how to structure your business.",
      ],
      links: [
        { href: "/dscr-loans", label: "DSCR loans" },
        { href: "/rental-portfolio-loans", label: "Rental portfolio loans" },
      ],
    },
    {
      id: "personal-guarantee",
      name: "Personal guarantee",
      aka: ["Guaranty"],
      short: "Your personal promise to repay the loan if the LLC that borrowed it can’t.",
      body: [
        "A new LLC usually owns nothing but the property it’s buying, so lenders commonly ask the owners to stand behind it. After a default, the guarantee lets the lender pursue you, not just the company.",
        "A full guarantee covers the whole debt. A limited, or “bad-boy,” guarantee applies only if you commit specific acts such as fraud, transferring the property without consent or filing for bankruptcy voluntarily, and it’s the usual companion to a [non-recourse](#recourse) loan.",
      ],
      links: [
        { href: "/dscr-loans", label: "DSCR loans" },
        { href: "/rental-portfolio-loans", label: "Rental portfolio loans" },
      ],
    },
    {
      id: "recourse",
      name: "Recourse and non-recourse",
      short: "Whether the lender can collect from you personally, not only from the property, if a foreclosure sale leaves part of the debt unpaid.",
      body: [
        "With full recourse, any shortfall after foreclosure can be pursued against you or your guarantors. With non-recourse, the lender’s recovery stops at the property, apart from carve-outs for misconduct.",
        "Published terms split in October 2026. Roc Capital listed its single-property rentals as full recourse only, and Roc and Civic portfolio loans were full recourse; RCN and Lima One offered non-recourse portfolio loans. It’s printed on the [term sheet](#term-sheet), so check it before you sign.",
      ],
      links: [
        { href: "/rental-portfolio-loans", label: "Rental portfolio loans" },
        { href: "/dscr-loans", label: "DSCR loans" },
      ],
    },
    {
      id: "title-and-escrow",
      name: "Title and escrow",
      aka: ["Settlement", "Closing agent"],
      short: "The title company confirms the seller can pass clean ownership and insures it; the escrow or settlement agent holds the money and documents and closes the deal.",
      body: [
        "The title search turns up liens, unpaid taxes, judgments and breaks in the ownership chain that have to be cleared before closing. Your lender will want a lender’s title policy protecting its lien; an owner’s policy protecting you is a separate purchase.",
        "Escrow holds your [earnest money](#emd), collects the loan proceeds and your cash to close, pays off the seller’s mortgage and records the deed. A title problem found late can push a closing back, so open title the day the contract is signed.",
      ],
      links: [
        { href: "/guides/closing-an-investor-loan-fast", label: "Closing an investor loan fast" },
        { href: "/how-it-works", label: "How it works" },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Stage 3: rehab and draws                                            */
/* ------------------------------------------------------------------ */

const REHAB: Stage = {
  id: "rehab-and-draws",
  step: "03",
  label: "Rehab and draws",
  heading: "Do the work: how rehab money reaches you, and what the wait costs.",
  lead: "Once you close, the deal runs on the budget, the draw schedule and the clock.",
  terms: [
    {
      id: "scope-of-work",
      name: "Scope of work (SOW)",
      aka: ["Rehab budget", "Line-item budget"],
      short: "The line-by-line list of the work you’ll do and what each item will cost, which the rehab loan is built on.",
      body: [
        "Lenders will fund a rehab budget in full (100% at the fix and flip lenders whose terms we pulled in October 2026), but only one they believe. A fundable scope is specific: rooms, quantities, materials and a cost on every line, grouped in the order the work happens so it doubles as the [draw](#draws) schedule.",
        "The appraiser works from the same scope to set the [ARV](#arv). Leave the new bathroom off the list and the appraisal won’t give you credit for it.",
      ],
      deal: "$52,000: roof $9,500, kitchen $14,000, two baths $11,000, flooring and paint $8,500, HVAC $6,000, contingency $3,000.",
      links: [
        { href: "/guides/rehab-budget-for-lenders", label: "A rehab budget lenders will fund" },
        { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
      ],
    },
    {
      id: "contingency",
      name: "Contingency",
      aka: ["Budget contingency"],
      short: "A line in the rehab budget set aside for problems you can’t see until the walls are open.",
      body: [
        "Rot under the tub, a cracked sewer lateral, old wiring behind the plaster: older houses tend to hide something. A contingency line lets you pay for it without stopping work or rewriting the budget halfway through. Ask the lender up front whether it will fund that line or expects you to cover it in cash.",
      ],
      links: [
        { href: "/guides/rehab-budget-for-lenders", label: "Rehab budget guide" },
        { href: "/calculators/fix-and-flip", label: "Flip calculator" },
      ],
    },
    {
      id: "draws",
      name: "Draws (rehab holdback)",
      aka: ["Draw schedule", "Construction holdback"],
      short: "Rehab or construction money the lender keeps back at closing and pays out in stages, each one after the work is checked.",
      body: [
        "The cycle runs: finish a stage, request the draw, the lender inspects on site, by photo or by video, and wires the money. Turnaround published in October 2026 ranged from same-day virtual inspections at LendingOne to 24 hours at Lima One and 48 hours at Easy Street; construction lenders quoted one to two days on photo draws.",
        "Because each draw pays for finished work, you front every stage’s cost and get it back after the inspection. Keep enough cash to carry one stage at a time, and expect the interest bill to rise with each draw.",
      ],
      deal: "The $52,000 rehab comes out in four $13,000 draws. Monthly interest at 10.25% climbs from $1,114.69 at closing to $1,225.73, $1,336.77, $1,447.81 and then $1,558.85.",
      links: [
        { href: "/guides/construction-draw-schedule", label: "How a draw schedule works" },
        { href: "/fix-and-flip-loans", label: "Fix and flip loans" },
      ],
    },
    {
      id: "interest-reserve",
      name: "Interest reserve",
      short: "Money carved out of the loan at closing to make a set number of monthly interest payments for you.",
      body: [
        "A new build earns nothing while it goes up, so some lenders build the first payments into the loan. Roc Capital and Civic published a one-month interest reserve on ground-up loans in October 2026.",
        "It isn’t free money. The reserve is part of the loan balance, so it carries interest and points like the rest. If the project finishes early, confirm what happens to whatever is left in it.",
      ],
      links: [
        { href: "/ground-up-construction-loans", label: "Construction loans" },
        { href: "/guides/construction-draw-schedule", label: "Draw schedule guide" },
      ],
    },
    {
      id: "holding-costs",
      name: "Holding costs",
      aka: ["Carrying costs", "Carry"],
      short: "What it costs to own the property each month between buying it and selling or refinancing it.",
      body: [
        "Interest, property taxes, insurance (builder’s risk or vacant-property cover during the work), utilities, HOA dues and yard or snow service all run every month the project does. A two-month delay is two more months of every one of them.",
        "That’s why a slow rehab can hurt more than a pricey one. Price your carry to a realistic finish date, plus time to list and sell or to lease and refinance.",
      ],
      deal: "With draws in months two to five, six months of interest at 10.25%, our assumed rate and a little below the 10.45% non-bank median for 2025, comes to about $8,243, or roughly $1,374 a month, before taxes, insurance and utilities.",
      links: [
        { href: "/guides/cash-needed-to-flip-a-house", label: "Cash needed to flip a house" },
        { href: "/calculators/fix-and-flip", label: "Flip calculator" },
      ],
    },
    {
      id: "extension-fee",
      name: "Extension (and extension fee)",
      aka: ["Maturity extension"],
      short: "A charge for moving the loan’s maturity date back when the work or the exit runs late.",
      body: [
        "Short-term loans carry a fixed end date, 12, 18 or 24 months at most lenders in October 2026, and many spell out extension options in advance; Kiavi’s construction loans list 3- and 6-month extensions. The fee, the conditions and how many extensions you can take are written into the loan documents.",
        "Price one into the deal before you need it. If the term sheet offers no extension, ask before you sign.",
      ],
      links: [
        { href: "/guides/bridge-loan-exit-strategies", label: "When the exit slips" },
        { href: "/guides/investor-loan-points-and-fees", label: "Points and fees guide" },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Stage 4: the exit (sell or refinance), then DSCR, then holding      */
/* ------------------------------------------------------------------ */

const EXIT: Stage = {
  id: "the-exit",
  step: "04",
  label: "The exit",
  heading: "Pay off the short-term loan: sell it, or refinance and keep it.",
  lead: "The exit repays the balloon. For a sale that means comps; for a refinance it means seasoning, value and rent.",
  terms: [
    {
      id: "exit-strategy",
      name: "Exit strategy",
      aka: ["Take-out", "Repayment plan"],
      short: "How the short-term loan gets repaid: a sale, a refinance into a long-term loan, or one as the backup for the other.",
      body: [
        "Every bridge, flip and construction lender asks for it, because the [balloon](#balloon) at maturity is paid from the exit, not from your paycheck. A credible exit has numbers behind it: comps that support the sale price, or a rent and refinance that clear the next lender’s [DSCR](#dscr) and [LTV](#ltv) limits.",
        "Run both before you buy. If the market softens while you renovate, the deal that no longer works as a flip may still work as a rental.",
      ],
      deal: "Sell at $285,000, or refinance at $213,750: enough to repay the $182,500 rehab loan with $31,250 left before closing costs.",
      links: [
        { href: "/guides/bridge-loan-exit-strategies", label: "Bridge loan exit strategies" },
        { href: "/bridge-loans", label: "Bridge loans" },
      ],
    },
    {
      id: "brrrr",
      name: "BRRRR",
      aka: ["Buy, rehab, rent, refinance, repeat"],
      short: "A fix-to-rent strategy: buy and renovate with a short-term loan, lease it, then refinance to pull your cash back out for the next deal.",
      body: [
        "The refinance is usually a 30-year [DSCR](#dscr) loan sized on the new appraisal. LendingOne’s fix-to-rent program lends up to 95% LTC and the whole rehab budget for a 9-month first phase, then refinances at about 75% of ARV; Lima One’s rehab phase runs 13 to 24 months.",
        "Some lenders pay you to do both halves with them, and charge you if you don’t. LendingOne advertised an extra 0.5% off the rate and a 50% origination discount, and tacks one point onto the payoff when you refinance with someone else. Lima One offers up to 50% off origination when you refinance into its rental loan, and waives seasoning.",
      ],
      deal: "Cash in: $14,500 down, $2,737.50 in points and about $8,243 of interest, roughly $25,480. The $213,750 refinance repays the $182,500 rehab loan and returns $31,250 before refinance closing costs, taxes and insurance.",
      links: [
        { href: "/brrrr-loans", label: "BRRRR loans" },
        { href: "/guides/brrrr-method-step-by-step", label: "BRRRR step by step" },
        { href: "/calculators/brrrr", label: "BRRRR calculator" },
      ],
    },
    {
      id: "seasoning",
      name: "Seasoning",
      aka: ["Ownership period"],
      short: "The time you must hold a property before a lender sizes a refinance on today’s appraisal instead of what you paid.",
      body: [
        "Ninety days is the common line. Kiavi published cash-out refinances after 90 days of ownership. Roc Capital uses the appraised value only after 90 days; before that, it lends 80% of your total cost basis. Lima One waives seasoning when it made the rehab loan, and some non-QM lenders, Griffin and Defy among them, advertised no seasoning on cash-out.",
        "This is where refinance timelines break. Go in too early and you may be sized on what you spent, not what the house is now worth.",
      ],
      deal: "Refinance at day 60 under a rule like Roc’s and you get 80% of the $197,000 cost basis, $157,600: $24,900 short of the $182,500 payoff. After day 90, 75% of the $285,000 value is $213,750.",
      links: [
        { href: "/guides/refinance-after-rehab", label: "Refinancing after a rehab" },
        { href: "/investment-property-cash-out-refinance", label: "Cash-out refinance" },
      ],
    },
    {
      id: "delayed-financing",
      name: "Delayed financing",
      short: "A cash-out refinance taken soon after buying a property with cash, so the purchase money comes back out.",
      body: [
        "It suits investors who win deals by paying cash, at auction or against financed buyers, and then want that cash back for the next one. Kiavi’s window for this kind of refinance on a cash purchase was 6 months, and Angel Oak’s foreign national program lists delayed financing among its cash-out options.",
        "Expect the lender to ask for the settlement statement from your purchase and proof of where the cash came from.",
      ],
      links: [
        { href: "/investment-property-cash-out-refinance", label: "Cash-out refinance" },
        { href: "/guides/refinance-after-rehab", label: "Refinancing after a rehab" },
      ],
    },
    {
      id: "cash-out-refinance",
      name: "Cash-out refinance",
      short: "A new, larger loan that pays off the existing one and hands you the difference in cash.",
      body: [
        "On investment property, lenders published a maximum of 70% to 80% LTV in October 2026, 75% most often and 60% at some for lower scores. At Easy Street, a refinance becomes cash-out when you take home more than $2,000; at or below that, it’s rate-and-term.",
        "In a BRRRR, this is the step that returns your capital. The new loan has to fit under both the LTV cap and the lender’s [DSCR](#dscr) minimum, and the tighter of the two sets the amount.",
      ],
      links: [
        { href: "/investment-property-cash-out-refinance", label: "Cash-out refinance" },
        { href: "/get-funding?loan=cash-out-refinance", label: "Get my cash back out" },
      ],
    },
  ],
};

const DSCR: Entry = {
  id: "dscr",
  name: "DSCR (debt service coverage ratio)",
  aka: ["Debt service coverage ratio", "Debt coverage ratio"],
  short: "A rental’s qualifying monthly rent divided by its monthly PITIA payment. Rental lenders qualify the property on it instead of your personal income.",
  body: [],
  formula: "DSCR = qualifying monthly rent ÷ monthly PITIA",
  links: [
    { href: "/dscr-loans", label: "DSCR loans" },
    { href: "/calculators/dscr", label: "DSCR calculator" },
  ],
};

const HOLD: Stage = {
  id: "keep-it",
  step: "04",
  label: "Keep it as a rental",
  heading: "Keep it: the terms on the long-term rental loan.",
  lead: "Once the refinance closes, these are the terms you live with for years.",
  terms: [
    {
      id: "pitia",
      name: "PITIA",
      aka: ["Principal, interest, taxes, insurance, association dues"],
      short: "The full monthly cost of a rental loan: principal, interest, property taxes, insurance and HOA or association dues.",
      body: [
        "It’s the bottom of the [DSCR](#dscr) fraction. Taxes and insurance enter as one-twelfth of the annual bills; the A covers HOA or condo dues and any special assessment. Leave the A off and you have PITI.",
        "The lines that surprise investors are the tax bill after a reassessment at your new value and the insurance quote. Get both in writing while you’re still under contract. Lenders also count [reserves](#reserves) in months of PITIA.",
      ],
      deal: "$1,494.57 principal and interest + $290 taxes + $120 insurance + $0 HOA = $1,904.57.",
      formula: "PITIA = principal + interest + (annual taxes ÷ 12) + (annual insurance ÷ 12) + association dues",
      links: [
        { href: "/calculators/dscr", label: "DSCR calculator" },
        { href: "/calculators/rental-cash-flow", label: "Rental cash flow calculator" },
      ],
    },
    {
      id: "rent-schedule",
      name: "Rent schedule (Form 1007)",
      aka: ["Comparable rent schedule", "Form 1000"],
      short: "The appraiser’s estimate of a home’s market rent, set out on Fannie Mae Form 1007 (Freddie Mac Form 1000) for single-family property.",
      body: [
        "The form lines your property up against three comparable rentals, adjusts for location, condition, rooms and size, and ends with the appraiser’s monthly market rent. DSCR lenders weigh that figure against your lease and generally qualify you on the lower one.",
        "If the place is vacant at refinance, the schedule may be all the lender has to go on; Roc counts unleased units at 90% of market rent. Lease at market, not below it, because the lower number is the one that counts.",
      ],
      deal: "Lease $2,300, rent schedule $2,350: the lender qualifies the ranch on $2,300.",
      links: [
        { href: "/guides/rental-cash-flow-before-you-buy", label: "Rental cash flow before you buy" },
        { href: "/calculators/dscr", label: "DSCR calculator" },
      ],
    },
    {
      id: "str-income",
      name: "Short-term rental income",
      aka: ["Airbnb income", "STR income"],
      short: "Nightly-rental income as a lender counts it for a DSCR loan on an Airbnb or vacation rental.",
      body: [
        "On a purchase there are no bookings yet, so lenders use an AirDNA projection or market rent. On a refinance, lenders such as Easy Street use the last 12 months of actual bookings. Easy Street takes no haircut from professional operators’ income and 25% from newer hosts’.",
        "Terms run tighter than on long-term rentals: Lima One published a 700 minimum score, 75% LTV on purchases and 70% on cash-out. Few lenders publish an STR DSCR minimum; RCN’s was reported at 1.20x.",
      ],
      links: [
        { href: "/short-term-rental-loans", label: "Short-term rental loans" },
        { href: "/get-funding?loan=short-term-rental", label: "Get rental funding" },
      ],
    },
    {
      id: "reserves",
      name: "Reserves",
      aka: ["Post-closing liquidity"],
      short: "Cash or liquid assets you still hold after closing, measured in months of PITIA.",
      body: [
        "They show you can keep paying through a vacancy or a repair. Requirements published in October 2026 ran from none at Kiavi to 3 months at Defy and 3 to 9 months at Easy Street; Angel Oak’s foreign national program asked for 12. Most lenders don’t publish a figure, so ask before you plan your cash.",
      ],
      deal: "Three months of reserves on the ranch is 3 × $1,904.57 = $5,713.71.",
      links: [
        { href: "/dscr-loans", label: "DSCR loans" },
        { href: "/guides/rental-cash-flow-before-you-buy", label: "Rental cash flow before you buy" },
      ],
    },
    {
      id: "prepayment-penalty",
      name: "Prepayment penalty",
      aka: ["Prepay", "PPP", "Step-down"],
      short: "A fee for paying a loan off early, usually a percentage of the balance, that shrinks and then disappears over a set number of years.",
      body: [
        "Standard on DSCR rental loans, rare on short-term ones: Lima One and Kiavi published none on bridge loans. The usual DSCR structure in October 2026 was 5-4-3-2-1, meaning 5% of the balance repaid in year one, one point less each year after, and nothing from year six. Shorter 3-2-1 and 2-1 schedules, a flat 5% and no penalty were offered too, generally for a higher rate. Kiavi’s DSCR loans carry no penalty after year three.",
        "Match it to your plan. If an early sale or refinance is a real possibility in the first three years, buying a shorter schedule up front can cost less than the penalty itself.",
      ],
      deal: "Sell the ranch 18 months after the refinance and the 5-4-3-2-1 step is 4% of the $210,737.73 still owed: $8,429.51.",
      links: [
        { href: "/dscr-loans", label: "DSCR loans" },
        { href: "/guides/investor-loan-points-and-fees", label: "Points and fees guide" },
      ],
    },
    {
      id: "blanket-loan",
      name: "Blanket loan (portfolio loan)",
      aka: ["Portfolio loan"],
      short: "One loan secured by several rentals, with one payment, one closing and one set of documents.",
      body: [
        "It’s how investors refinance a group of rentals at once, often after a run of BRRRRs. Published minimums in October 2026 ran from 2 to 5 properties (Easy Street wants at least 3 in one state), and LendingOne capped a loan at 20. Purchases went to 60% to 80% LTV and cash-out to 55% to 75%, with DSCR floors of 1.00 to 1.05 and properties around 90% leased.",
        "Structures included 30-year fixed or adjustable loans with 5 to 10 years of interest-only, and 5-, 7- and 10-year balloons.",
      ],
      links: [
        { href: "/rental-portfolio-loans", label: "Rental portfolio loans" },
        { href: "/get-funding?loan=portfolio", label: "Get rental funding" },
      ],
    },
    {
      id: "cross-collateralization",
      name: "Cross-collateralization",
      aka: ["Cross-collateral"],
      short: "Pledging several properties together as security, so each one backs the whole debt rather than just its own share.",
      body: [
        "It’s built into every [blanket loan](#blanket-loan) and sometimes added across separate loans with one lender. You get leverage and one closing. In exchange, trouble at one property can pull the others into default, and you can’t sell one until the lender agrees to take its lien off.",
        "Before you sign, get each property’s release price, the paydown needed to free it for a sale, and ask whether you can swap in another property instead.",
      ],
      links: [
        { href: "/rental-portfolio-loans", label: "Rental portfolio loans" },
        { href: "/get-funding?loan=portfolio", label: "Fund my portfolio refinance" },
      ],
    },
  ],
};

const STAGES: Stage[] = [FIND, LOAN, REHAB, EXIT, HOLD];

// Deal order: DSCR sits between the exit terms and the hold terms.
const ALL: Entry[] = [...FIND.terms, ...LOAN.terms, ...REHAB.terms, ...EXIT.terms, DSCR, ...HOLD.terms];

const POPULAR = ["dscr", "arv", "ltc", "ltv", "pitia", "points", "draws", "exit-strategy"];

/** The illustrative deal the entries keep coming back to. */
const DEAL: { stage: string; rows: [string, string][] }[] = [
  {
    stage: "Find and size",
    rows: [
      ["ARV from comps", "$285,000"],
      ["Contract price", "$145,000"],
      ["Rehab budget", "$52,000"],
      ["70% rule ceiling", "$147,500"],
    ],
  },
  {
    stage: "The loan",
    rows: [
      ["Rehab loan (92.6% LTC)", "$182,500"],
      ["Down payment", "$14,500"],
      ["Points (1.5)", "$2,737.50"],
      ["Rate, interest-only", "10.25%"],
    ],
  },
  {
    stage: "Rehab and draws",
    rows: [
      ["Draws", "4 × $13,000"],
      ["Interest, 6 months", "≈ $8,243"],
    ],
  },
  {
    stage: "The exit",
    rows: [
      ["Refinance (75% LTV)", "$213,750"],
      ["Left after payoff", "$31,250"],
      ["Rent / PITIA", "$2,300 / $1,904.57"],
      ["DSCR", "1.21"],
    ],
  },
];

const FAQ = [
  {
    q: "What DSCR is good enough for a rental loan?",
    a: "Most lenders will approve a 1–4 unit rental at 1.00, and several published lower floors in October 2026: Kiavi 0.80, LendingOne and Defy 0.75. Approval isn’t the same as good terms, though. LendingOne says ratios of 1.25 or more tend to be viewed favorably, and its September 2026 rate ranges were lower for strong-DSCR borrowers. A ratio near 1.00 also leaves nothing for a vacancy or a tax increase.",
  },
  {
    q: "What’s the difference between as-is value and ARV?",
    a: "As-is value is what the property is worth today in its current condition; ARV is what it should be worth after your planned work. A fix and flip lender uses both: the purchase price or as-is value anchors the purchase money, and the ARV caps the total loan, at 70% to 80% on programs published in October 2026. A bridge or rental lender with no rehab in the plan sizes on as-is value alone.",
  },
  {
    q: "How much cash do I need to close a flip with a hard money loan?",
    a: "Plan for the part of the price the lender doesn’t fund, plus points, lender fees, title and escrow, and enough cash to front each rehab stage until its draw is paid. On a $145,000 purchase funded at 90%, with 1.5 points on a $182,500 loan, that’s $14,500 plus $2,737.50 before fees and closing costs. Interest during the rehab comes on top: about $8,243 over six months at 10.25%.",
  },
  {
    q: "How soon can I refinance after a rehab?",
    a: "Usually after 90 days of ownership, if you want the new loan sized on the new appraisal. Kiavi published cash-out after 90 days, and Roc lends on 80% of your cost basis before then. Lima One skips the wait when you refinance out of its own rehab loan, and some non-QM lenders advertise no seasoning at all. Plan the rehab and lease-up so the refinance lands after day 90.",
  },
  {
    q: "Is a hard money loan the same as a bridge loan?",
    a: "They overlap. Hard money describes the lender and the style: private, secured by the property, short-term and interest-only. A bridge loan is one use of it, carrying a property that needs little or no work from purchase to a sale or a long-term refinance. Fix and flip and construction loans are other hard money products. In October 2026, bridge terms ran 12 to 24 months at 70% to 85% LTV.",
  },
  {
    q: "Why do lenders ask so much about my exit strategy?",
    a: "Because a short-term loan is repaid in one lump sum at maturity, and that money comes from the exit, not your salary. The lender wants evidence the exit works: comps for a sale, or a rent estimate and DSCR for a refinance. Show both a plan A and a plan B with numbers, and an unsupported exit won’t be the thing that slows your approval.",
  },
];

const SOURCES = [
  { label: "Fannie Mae Selling Guide B4-1.3-08 — Comparable sales", url: "https://selling-guide.fanniemae.com/sel/b4-1.3-08/comparable-sales" },
  { label: "Freddie Mac Form 1000 / Fannie Mae Form 1007 — Single-Family Comparable Rent Schedule", url: "https://sf.freddiemac.com/docs/pdf/forms/1000.pdf" },
  { label: "eCFR — 12 CFR 1026.3, exempt transactions", url: "https://www.ecfr.gov/current/title-12/part-1026/section-1026.3" },
  { label: "eCFR — Regulation Z official interpretations, comment 3(a)-4", url: "https://www.ecfr.gov/current/title-12/part-1026/appendix-Supplement%20I%20to%20Part%201026" },
  { label: "Kiavi — DSCR loans (fetched Oct 26, 2026)", url: "https://www.kiavi.com/loans/dscr" },
  { label: "Kiavi — Fix and flip loans", url: "https://www.kiavi.com/loans/fix-and-flip" },
  { label: "Kiavi — Bridge loans", url: "https://www.kiavi.com/loans/bridge-loans" },
  { label: "Kiavi — New construction loans", url: "https://www.kiavi.com/loans/new-construction-infill" },
  { label: "Lima One — Rental loans", url: "https://www.limaone.com/rental/" },
  { label: "Lima One — Short-term rental loans", url: "https://www.limaone.com/short-term-rental-loans/" },
  { label: "Lima One — Fix and flip loans", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
  { label: "Lima One — New construction loans", url: "https://www.limaone.com/new-construction-loans/" },
  { label: "Lima One — Bridge loans", url: "https://www.limaone.com/bridge-loans/" },
  { label: "Lima One — Portfolio loan financing", url: "https://www.limaone.com/real-estate-portfolio-loan-financing/" },
  { label: "Lima One — Multifamily loans", url: "https://www.limaone.com/multifamily/" },
  { label: "LendingOne — Rental loans", url: "https://lendingone.com/rental-loans/" },
  { label: "LendingOne — Fix and flip loans", url: "https://lendingone.com/loan-types/fix-and-flip-loans/" },
  { label: "LendingOne — New construction loans", url: "https://lendingone.com/loan-types/new-construction-loans/" },
  { label: "LendingOne — SFR portfolio loans", url: "https://lendingone.com/loan-types/sfr-portfolio-loans/" },
  { label: "LendingOne — Fix to rent loans", url: "https://lendingone.com/loan-types/fix-to-rent-loans/" },
  { label: "LendingOne — What sets DSCR interest rates (September 2026)", url: "https://lendingone.com/insight/how-are-dscr-loan-interest-rates-determined/" },
  { label: "RCN Capital — Loan programs", url: "https://www.rcncapital.com/loan-programs" },
  { label: "FlipperForce — RCN Capital lender profile", url: "https://flipperforce.com/lenders/rcn-capital" },
  { label: "Roc Capital — Single-property rentals (fetched Oct 26, 2026)", url: "https://roccapital.com/single-property-rentals" },
  { label: "Roc Capital — Rental portfolios", url: "https://roccapital.com/rental-portfolios" },
  { label: "Roc Capital — Fix and flip", url: "https://roccapital.com/fix-and-flip" },
  { label: "Roc Capital — Ground-up construction", url: "https://roccapital.com/ground-up" },
  { label: "Roc Capital — Stabilized bridge", url: "https://roccapital.com/stabilized-bridge" },
  { label: "Civic Financial Services — Rental loans", url: "https://civicfs.com/rental/" },
  { label: "Civic Financial Services — Rental portfolio loans", url: "https://civicfs.com/rental-portfolio-loan/" },
  { label: "Civic Financial Services — Fix and flip", url: "https://civicfs.com/fix-and-flip/" },
  { label: "Civic Financial Services — Ground-up construction", url: "https://civicfs.com/ground-up-construction-loan/" },
  { label: "Easy Street Capital — EasyRent", url: "https://www.easystreetcap.com/easyrent" },
  { label: "Easy Street Capital — EasyFix", url: "https://www.easystreetcap.com/easyfix/" },
  { label: "Easy Street Capital — Short-term rental financing", url: "https://www.easystreetcap.com/short-term-rental-financing/" },
  { label: "New Silver — Fix and flip loans", url: "https://newsilver.com/fix-and-flip-loans/" },
  { label: "Griffin Funding — DSCR loans", url: "https://griffinfunding.com/non-qm-mortgages/dscr-loans/" },
  { label: "Defy Mortgage — DSCR loans", url: "https://defymortgage.com/non-qm-loans/dscr-loans/" },
  { label: "Defy Mortgage — DSCR loan rates (Oct 23, 2026)", url: "https://defymortgage.com/dscr-loan-rates/" },
  { label: "Angel Oak — Investor cash flow program", url: "https://angeloakms.com/programs/investor-cash-flow-mortgage-program/" },
  { label: "Angel Oak — Foreign national program", url: "https://angeloakms.com/programs/foreign-national-mortgage-program/" },
  { label: "Walker & Dunlop — Small balance lending", url: "https://www.walkerdunlop.com/small-balance" },
  { label: "CrowdfundedWealth — 2026 hard money rates, from 2025 HMDA filings (updated Oct 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
];

/* ------------------------------------------------------------------ */
/* Rendering                                                           */
/* ------------------------------------------------------------------ */

/** Renders **bold** and [text](href) inside entry copy; #anchors stay plain <a> tags. */
function Rich({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let cursor = 0;
  for (const m of text.matchAll(pattern)) {
    const at = m.index ?? 0;
    if (at > cursor) out.push(text.slice(cursor, at));
    if (m[3]) {
      out.push(<strong key={at}>{m[3]}</strong>);
    } else if (m[2].startsWith("#")) {
      out.push(
        <a key={at} href={m[2]}>
          {m[1]}
        </a>
      );
    } else {
      out.push(
        <Link key={at} href={m[2]}>
          {m[1]}
        </Link>
      );
    }
    cursor = at + m[0].length;
  }
  if (cursor < text.length) out.push(text.slice(cursor));
  return <>{out}</>;
}

const ARROW_LINK = "font-semibold text-brand underline underline-offset-2";
const PROSE = "[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink";
const shortName = (name: string) => name.replace(/ \(.*\)$/, "");

function TermBlock({ t }: { t: Entry }) {
  return (
    <article id={t.id} className="scroll-mt-24 border-t border-line py-8 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-[23px] font-semibold tracking-[-0.02em]">{t.name}</h3>
        <a href={`#${t.id}`} className="font-mono text-xs text-muted hover:text-ink" aria-label={`Link to ${shortName(t.name)}`}>
          #{t.id}
        </a>
      </div>
      {t.aka && <p className="mt-1 font-mono text-[13px] text-muted">Also: {t.aka.join(" · ")}</p>}
      <div className={`mt-3 flex flex-col gap-3 text-[16px] leading-relaxed text-ink-2 ${PROSE}`}>
        <p className="font-medium text-ink">{t.short}</p>
        {t.body.map((p) => (
          <p key={p.slice(0, 48)}>
            <Rich text={p} />
          </p>
        ))}
        {t.formula && <Formula>{t.formula}</Formula>}
        {t.deal && (
          <p className="rounded-xl border-l-4 border-brand bg-paper px-4 py-3 text-[15px]">
            <span className="mr-2 font-mono text-xs uppercase tracking-[0.06em] text-brand">Example deal</span>
            {t.deal}
          </p>
        )}
      </div>
      <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
        {t.links.map((l) => (
          <Link key={l.href} href={l.href} className={ARROW_LINK}>
            {l.label} →
          </Link>
        ))}
      </p>
    </article>
  );
}

function StageSection({ s, tint }: { s: Stage; tint: boolean }) {
  return (
    <section id={s.id} className={`scroll-mt-20 border-t border-line ${tint ? "bg-white" : ""}`}>
      <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="flex flex-col gap-3.5 lg:sticky lg:top-24">
          <Eyebrow>
            Stage {s.step} · {s.label}
          </Eyebrow>
          <H2>{s.heading}</H2>
          <p className="text-[16px] leading-relaxed text-ink-2">{s.lead}</p>
        </div>
        <div className="flex flex-col">
          {s.terms.map((t) => (
            <TermBlock key={t.id} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function Page() {
  const pageUrl = `${SITE.url}/glossary`;
  const byId = new Map(ALL.map((t) => [t.id, t]));
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "@id": `${pageUrl}#terms`,
          name: "Investor loan glossary, from deal to exit",
          description: META_DESCRIPTION,
          url: pageUrl,
          inLanguage: "en-US",
          dateModified: UPDATED,
          publisher: { "@id": `${SITE.url}/#org` },
          hasDefinedTerm: ALL.map((t) => ({
            "@type": "DefinedTerm",
            "@id": `${pageUrl}#${t.id}`,
            name: t.name,
            ...(t.aka ? { alternateName: t.aka } : {}),
            description: t.short,
            url: `${pageUrl}#${t.id}`,
            inDefinedTermSet: { "@id": `${pageUrl}#terms` },
          })),
        }}
      />

      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { label: "Glossary" }]}
        eyebrow={`${ALL.length} terms · in the order a deal happens`}
        title="Investor loan glossary: every term from offer to payoff."
      >
        <p>
          This investor loan glossary follows a deal the way it actually runs: you find and size it, choose the loan, do the work and draw the rehab money, then sell or
          refinance. Each term gets a plain definition, the ranges lenders published in October 2026 and, where it helps, the math on one example deal. Most rental exits turn
          on one ratio: <a href="#dscr" className="text-brand underline underline-offset-2">DSCR (debt service coverage ratio)</a>: what the property rents for each month, divided by
          the full monthly loan payment.
        </p>
      </PageIntro>

      <Container className="flex flex-col gap-6 pb-12 pt-2">
        <nav aria-label="Glossary by deal stage" className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-6">
          <div className="grid gap-2 sm:grid-cols-[220px_1fr] sm:gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.06em] text-brand sm:pt-1">Most looked up</span>
            <ul className="flex flex-wrap gap-2">
              {POPULAR.map((id) => {
                const t = byId.get(id);
                return t ? (
                  <li key={id}>
                    <a href={`#${id}`} className="inline-block rounded-full bg-ink px-3 py-1 text-sm text-white hover:bg-night">
                      {shortName(t.name)}
                    </a>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
          {STAGES.map((s) => (
            <div key={s.id} className="grid gap-2 border-t border-line pt-5 sm:grid-cols-[220px_1fr] sm:gap-6">
              <a href={`#${s.id}`} className="font-mono text-xs uppercase tracking-[0.06em] text-muted hover:text-ink sm:pt-1">
                {s.step} · {s.label}
              </a>
              <ul className="flex flex-wrap gap-2">
                {(s.id === "the-exit" ? [...s.terms, DSCR] : s.terms).map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="inline-block rounded-full border border-line px-3 py-1 text-sm hover:border-ink">
                      {shortName(t.name)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <aside aria-labelledby="example-deal" className="rounded-2xl border border-line bg-paper p-6">
          <h2 id="example-deal" className="text-[21px] font-semibold tracking-[-0.02em]">
            One deal runs through this glossary
          </h2>
          <p className="mt-2 max-w-[760px] text-[15px] leading-relaxed text-ink-2">
            A 3-bed ranch bought, renovated, rented and refinanced. Where a term has a number, the “Example deal” box shows it on this property. The house and its prices are
            illustrative. The loan limits come from published October 2026 lender terms; the rates are assumptions, set against those terms and 2025 HMDA data.
          </p>
          <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-line bg-line [grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr))]">
            {DEAL.map((d) => (
              <dl key={d.stage} className="flex flex-col gap-2 bg-white p-5">
                <dt className="font-mono text-xs uppercase tracking-[0.06em] text-brand">{d.stage}</dt>
                {d.rows.map(([k, v]) => (
                  <dd key={k} className="flex justify-between gap-3 text-[14px]">
                    <span className="text-ink-2">{k}</span>
                    <span className="text-right font-mono">{v}</span>
                  </dd>
                ))}
              </dl>
            ))}
          </div>
        </aside>
      </Container>

      {[FIND, LOAN, REHAB, EXIT].map((s, i) => (
        <StageSection key={s.id} s={s} tint={i % 2 === 0} />
      ))}

      <section id="dscr" className="scroll-mt-20 border-t border-line bg-white">
        <Container className="grid items-start gap-12 py-[88px] lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className={`flex flex-col gap-4 text-[17px] leading-relaxed text-ink-2 ${PROSE}`}>
            <Eyebrow>Stage 04 · The number that decides the refinance</Eyebrow>
            <H2>DSCR (debt service coverage ratio)</H2>
            <p>
              <strong>DSCR measures whether a rental carries its own loan: qualifying monthly rent over the full monthly payment, PITIA.</strong> That payment is{" "}
              <a href="#pitia">principal, interest, taxes, insurance and association dues</a>. A <Link href="/dscr-loans">DSCR loan</Link> qualifies on this ratio in place of
              your W-2s, tax returns and debt-to-income test, which is why it’s the standard take-out for a <a href="#brrrr">BRRRR</a> or a flip you decide to keep.
            </p>
            <p>
              The ratio does two jobs. It decides whether the property qualifies, and the lender’s minimum caps how large a payment the rent can support, which caps the loan.
            </p>
            <Formula>{DSCR.formula}</Formula>
            <ul className="flex flex-col gap-1.5 font-mono text-[14px] text-ink-2">
              <li>1.00: rent and payment are equal.</li>
              <li>1.21: every $1 of payment has $1.21 of rent behind it.</li>
              <li>0.85: the rent covers 85% of the payment; you cover the rest every month.</li>
            </ul>

            <h3 className="mt-4 text-[21px] font-semibold text-ink">The example deal, refinanced</h3>
            <p>
              The ranch is finished and leased at $2,300 a month; the appraiser’s <a href="#rent-schedule">rent schedule</a> puts market rent at $2,350, so the lender uses
              the lower $2,300. The new loan is $213,750, 75% of the $285,000 appraisal, at 7.5% over 30 years: $1,494.57 of principal and interest. Add $290 of taxes and $120
              of insurance and PITIA is $1,904.57. $2,300 ÷ $1,904.57 = <strong>1.21</strong>.
            </p>

            <h3 className="mt-4 text-[21px] font-semibold text-ink">Turn it around to find your largest loan</h3>
            <p>
              Run the formula backwards and the lender’s minimum tells you the biggest loan the rent will carry. If a lender wants 1.25 on this file, the most PITIA it will
              accept is $2,300 ÷ 1.25 = $1,840. Take off $410 of taxes and insurance and $1,430 is left for principal and interest, which at 7.5% over 30 years supports about
              $204,500, roughly $9,200 less than the 75% LTV figure. Drop the minimum to 1.00 and the same rent supports roughly $270,300, which means the <a href="#ltv">LTV</a> cap is
              what binds. Check both before you count on the cash coming back out; the <Link href="/calculators/dscr">DSCR calculator</Link> does it in one step.
            </p>

            <h3 className="mt-4 text-[21px] font-semibold text-ink">Which rent counts</h3>
            <p>
              Lenders generally take the lower of your signed lease and the appraiser’s market rent. Kiavi uses your lease unless it tops 110% of appraised market rent, so on
              the ranch, $2,300 counts either way (110% of $2,350 is $2,585). Roc counts unleased units at 90% of market rent. On a 2–4 unit building, add up every unit’s rent
              and divide by the building’s single PITIA. Airbnb and vacation rentals follow their own rules; see <a href="#str-income">short-term rental income</a>.
            </p>

            <h3 className="mt-4 text-[21px] font-semibold text-ink">What lenders look for</h3>
            <ul className="flex list-disc flex-col gap-2.5 pl-6">
              <li>
                <strong>A floor between 0.75 and 1.05 on 1–4 unit rentals.</strong> Minimums published in October 2026: Roc Capital and Civic 1.05; Lima One and RCN 1.00;
                Kiavi 0.80; LendingOne and Defy 0.75. Easy Street listed no minimum, Angel Oak offers programs below 1.00 and with no ratio, and Griffin’s no-ratio option
                stops at 75% LTV with a 700+ score.
              </li>
              <li>
                <strong>1.25 and up earns better treatment.</strong> Per LendingOne, a ratio of 1.25 or more tends to be viewed favorably, while one under 1.0 meets tougher
                underwriting and can mean higher rates and fees. Its September 2026 ranges were 6% to 7% for strong-DSCR, high-credit borrowers against 8% to 10% and up for
                lower-DSCR files.
              </li>
              <li>
                <strong>Bigger buildings, higher bars.</strong> Small-balance lenders on 5+ unit apartments published 1.20x to 1.25x. Portfolio lenders set 1.00 to 1.05, and
                Roc and Civic measure portfolios on net cash flow rather than gross rent.
              </li>
              <li>
                <strong>Short-term rentals run tighter, and publish less.</strong> RCN’s STR minimum was reported at 1.20x. Expect to qualify on projected income for a
                purchase and on 12 months of bookings for a refinance.
              </li>
              <li>
                <strong>Coverage comes with cash.</strong> Some lenders also want <a href="#reserves">reserves</a> of 3 to 9 months of PITIA, and a stronger ratio won’t
                replace them.
              </li>
            </ul>
            <p className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              <Link href="/dscr-loans" className={ARROW_LINK}>
                DSCR loans →
              </Link>
              <Link href="/calculators/dscr" className={ARROW_LINK}>
                DSCR calculator →
              </Link>
              <Link href="/guides/rental-cash-flow-before-you-buy" className={ARROW_LINK}>
                Run DSCR before you offer →
              </Link>
              <Link href="/get-funding?loan=dscr" className={ARROW_LINK}>
                Get rental funding →
              </Link>
            </p>
          </div>
          <div className="lg:sticky lg:top-24">
            <ExampleCard
              example={{
                title: "EXAMPLE DEAL · RANCH REFINANCE",
                rows: [
                  ["Signed lease", "$2,300"],
                  ["Rent schedule (market)", "$2,350"],
                  ["Qualifying rent (lower)", "$2,300"],
                  ["Loan, 75% of $285,000", "$213,750"],
                  ["Principal & interest", "$1,494.57"],
                  ["Taxes ($3,480 a year)", "$290"],
                  ["Insurance ($1,440 a year)", "$120"],
                  ["HOA", "$0"],
                  ["PITIA", "$1,904.57"],
                ],
                result: { label: "DSCR", value: "1.21" },
                note: "30-year fixed at 7.5%, inside the 7%–9% range LendingOne gave for an average investor profile in September 2026. Illustrative only, not a rate quote.",
                dscr: 1.21,
              }}
            />
          </div>
        </Container>
      </section>

      <StageSection s={HOLD} tint={false} />

      <FaqSection heading="Quick answers on investor loan terms" items={FAQ}>
        <p className="font-mono text-xs leading-relaxed text-muted">
          Lender figures are ranges published on program pages in October 2026, not an offer from {SITE.name}. The example deal is illustrative. Nothing here is legal or tax
          advice.
        </p>
      </FaqSection>

      <Container className="pb-[72px]">
        <div className="flex flex-wrap items-center justify-between gap-7 rounded-3xl bg-brand p-[clamp(32px,5vw,64px)] text-white">
          <div className="flex max-w-[600px] flex-col gap-3">
            <h2 className="text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em]">You know the terms. Now get the deal funded.</h2>
            <p className="text-[17px] leading-relaxed text-white">
              Tell us about the property in about 60 seconds, with no credit pull to apply. A loan specialist calls back with what your deal needs to close on time.
            </p>
          </div>
          <ButtonLink href="/get-funding" variant="light" size="lg">
            {SITE.cta}
          </ButtonLink>
        </div>
      </Container>

      <Sources sources={SOURCES} updated={UPDATED} />
    </>
  );
}
