import type { Guide } from "../types";

const gapFundingForRealEstateDeals: Guide = {
  slug: "gap-funding-for-real-estate-deals",
  metaTitle: "Gap Funding for Real Estate: Costs, Risks and Alternatives",
  metaDescription:
    "Gap funding for real estate deals: who lends second-position money, what it costs, why many first-lien lenders bar it, the risks, and safer ways to close.",
  category: "Financing basics",
  title: "Gap funding for real estate deals: the second loan your first lender may not allow",
  dek: "Gap money covers what your rehab loan doesn't: the down payment, closing costs, the first phase of work. Here's who provides it, what funders published in 2026, why so many first-lien lenders refuse to share the house, what can go wrong, and the ways to close the gap with one loan.",
  readMinutes: 11,
  published: "2026-10-30",
  updated: "2026-10-30",
  keyTakeaways: [
    "Gap funding is a second loan, usually behind the first lender on the same house, that covers the cash the first loan leaves to you. New Silver describes gap loans as junior-lien, interest-only and sized up to about 65% of the property's value.",
    "No federal data set prices it. Funders' own 2026 figures: 12–18% interest plus origination from 2%, 2–5 points on gator money, and some lenders taking 30–50% of net profit.",
    "Many first lenders lend only in first position. Rehab Financial says first mortgage only, and a licensed California broker says many hard money first lenders don't allow junior liens and some accelerate the loan when one is recorded.",
    "The federal rule that limits calling a loan over a junior lien applies to a home the borrower occupies. On investment property, your loan documents decide.",
    "On the worked $246,000 flip, a $40,000 gap loan at 14% for 7 months costs $4,067; a 30% profit split would cost $16,459. Sell 10% under the ARV and profit falls from $50,798 to $11,788.",
  ],
  body: [
    {
      type: "p",
      text: "Gap funding in real estate is short-term money that fills the space between what your main lender advances and what the deal costs you in cash. It usually pays for some mix of the down payment, the closing costs and the rehab work you fund before your first draw. Most of it is secured by a second lien on the same property, behind the first lender, and that is where the trouble starts: plenty of first-lien lenders don't allow a second loan on their collateral at all. Below, the math that creates the gap, who fills it and at what price, why first lenders object, the risks, and the cheaper, cleaner ways to get the same deal funded.",
    },
    { type: "h2", text: "Where the gap comes from: one deal, worked", id: "the-gap" },
    {
      type: "p",
      text: "A 4-bed split-level under contract at $246,000, with a $58,000 rehab and a $415,000 ARV. The rehab is 23.6% of the price, a light scope under OfferMarket's definition, and the borrower has no completed flips: tier 1 on OfferMarket's grid, which lends 80% of the price and 100% of the rehab with a 70% ARV cap. OfferMarket quotes rates per deal, so the example uses 10.45%, the 2025 non-bank median for short-term investor loans in federal HMDA data. The rehab money is released after months 1, 2 and 3 ($22,000, $20,000 and $16,000), interest runs only on drawn funds, carry is an assumed $610 a month, and the sale closes at the end of month 7.",
    },
    {
      type: "table",
      caption: "What the first loan leaves you to fund (illustrative; third-party costs are assumptions)",
      head: ["Item", "Math", "Amount"],
      rows: [
        ["First loan", "80% × $246,000 + $58,000 rehab", "$254,800"],
        ["ARV check", "70% × $415,000 = $290,500 cap", "Not binding; 61.4% of ARV"],
        ["Down payment", "$246,000 − $196,800", "$49,200"],
        ["Points, 2%", "2% × $254,800", "$5,096"],
        ["Lender fee", "Assumed, inside published ranges", "$1,995"],
        ["Title, insurance, recording", "Assumed", "$4,400"],
        ["Cash at closing", "", "$60,691"],
        ["First rehab phase, paid before draw 1", "", "$22,000"],
        ["Cash needed in month 1", "", "$82,691"],
        ["Cash the borrower has", "", "$46,000"],
        ["The gap", "", "$36,691"],
      ],
    },
    {
      type: "p",
      text: "There's a second gap hiding here. Before it funds, OfferMarket wants the guarantors to show enough to close with 25% of the rehab budget on top: $60,691 + $14,500 = $75,191. With $46,000, this borrower fails the liquidity test before the gap loan even comes up. The full cash picture for a flip is in [cash needed to flip a house](/guides/cash-needed-to-flip-a-house).",
    },
    { type: "h2", text: "Who provides gap funding", id: "providers" },
    {
      type: "ul",
      items: [
        "**Private lenders in second position.** Individuals and small funds that record a junior lien behind the rehab lender. New Silver's guide describes gap loans as typically junior-lien, sometimes subordinate to a bridge loan, interest-only, and repaid from the sale, and suggests them for borrowers who can repay within about six months.",
        "**Gap-funding companies.** Firms that market to flippers. Some lend in second position; others take a lien on a different property you own instead. One, writing on BiggerPockets in 2026, describes cross-collateral at about 150% of the loan amount and a credit score around 680.",
        "**Gator lenders.** A wholesaling term for very short money that covers an earnest money deposit or the purchase in a same-day double close. New Silver's July 2026 guide says the fee is commonly 2–5 points on the funded amount and the money arrives in hours to a day.",
        "**Transactional funders.** One-day loans for a double close, repaid at the resale. Rehab Financial offers transactional funding case by case. It isn't gap money for a flip you'll renovate and hold for months.",
        "**Second-mortgage brokers.** Licensed brokers arrange business-purpose second mortgages, usually on property with real equity. First Capital Trust Deeds, licensed in California, Oregon and Idaho, says it reads the first note to confirm a junior lien is allowed before it lends.",
        "**Unsecured business credit.** Term loans and credit lines with no lien, sometimes called capital stacking. They avoid the first lender's collateral, but you and your business carry the debt whatever happens to the house.",
      ],
    },
    { type: "h2", text: "What gap money costs", id: "cost" },
    {
      type: "table",
      caption: "Gap and gator pricing as published by funders, 2025–2026. These are funders' own figures, not market surveys.",
      head: ["Product", "Published terms", "Published by"],
      rows: [
        ["Second-position gap loan", "12–18% interest; origination from 2%; connector fees of 2–5%; 6–12 weeks to fund", "Gap Funded, a gap funder, on BiggerPockets (2026)"],
        ["Profit-share gap money", "Some gator lenders take 30–50% of net profit", "Gap Funded (2026)"],
        ["Gator money for deposits and double closes", "Commonly 2–5 points on the funded amount", "New Silver (July 2026)"],
        ["Typical sizing", "Up to about 65% of the property's value; interest-only; junior lien", "New Silver (November 2025)"],
      ],
    },
    {
      type: "p",
      text: "Treat these as asking prices from the people selling the product. The federal HMDA analysis used across this site counts first-lien loans only, and we found no survey that prices second-position flip money. What the published figures do agree on: gap money costs more than the first loan, and some of it is priced as a share of your profit rather than a rate.",
    },
    {
      type: "table",
      caption: "Two ways to pay for $40,000 of gap money on the worked deal, 7-month hold",
      head: ["", "Interest-only gap loan", "Profit split"],
      rows: [
        ["Terms", "14% a year, inside the published 12–18%, plus 2% origination", "30–50% of net profit, the published range"],
        ["Cost", "$3,267 interest + $800 origination = $4,067", "$16,459–$27,432 of a $54,865 profit"],
        ["As a yearly rate", "17.4% on the $40,000", "Depends entirely on the sale"],
        ["If the deal loses money", "You still owe $43,267", "Depends on the agreement; read it"],
      ],
    },
    {
      type: "p",
      text: "On a deal that works, the profit split costs four to seven times what the interest-only loan does. The $54,865 profit is what the deal earns before any gap cost: a $390,100 sale after 6% selling costs, less the $254,800 payoff and $80,435 of cash in, which covers closing, $14,574 of interest on drawn funds, $4,270 of carry and $900 of draw fees.",
    },
    { type: "h2", text: "Why many first-lien lenders say no", id: "why-lenders-say-no" },
    { type: "h3", text: "Their whole book is first liens" },
    {
      type: "p",
      text: "Rehab Financial lists \"first mortgage only.\" Sachem Capital's 2025 annual report says its loans are secured by first mortgage liens on real property. Manhattan Bridge Capital's says every loan but one, with a balance of about $22,000, is secured by a first mortgage lien. New Silver's help center says it doesn't offer gap funding. Lenders built on first position don't want to share it.",
    },
    { type: "h3", text: "Their documents can forbid a second" },
    {
      type: "p",
      text: "First Capital Trust Deeds, a licensed broker of business-purpose second mortgages, says many hard money first lenders don't allow junior liens, and that some first notes carry an acceleration clause triggered when a voluntary second mortgage is recorded. Gap Funded says that where a second lien is allowed, it usually takes the first lender's written consent and an intercreditor agreement setting out who gets paid first. Policies do vary: Hard Money Bankers, a Maryland lender, says it usually allows secondary liens, though not always. The only answer that counts is the one in your loan documents, in writing.",
    },
    { type: "h3", text: "Your cash is their cushion" },
    {
      type: "p",
      text: "The first lender sized the loan expecting your own money to absorb the first loss. In the worked deal, the first loan is 61.4% of ARV; add a $40,000 second and combined debt reaches 71.0%. For scale only: in the 2025 HMDA file, half of all short-term investor loans carried combined debt of 64.35% to 74.98% of the value their lender relied on, and the median sat at 70%. A second loan doesn't change the first lender's claim, but it removes the equity that was meant to protect it.",
    },
    { type: "h3", text: "The loan may be sold" },
    {
      type: "p",
      text: "In 2025, 42% of short-term investor loans were sold to a private securitizer the same year they were made. Loans built to be sold have to fit the buyer's rules, and Gap Funded says note buyers won't take a loan with an undisclosed junior lien attached.",
    },
    { type: "h3", text: "Federal law doesn't override the contract here" },
    {
      type: "p",
      text: "The Garn–St Germain Act stops lenders from calling a loan on 1–4 unit residential property just because a junior lien is recorded. But the federal regulation that carries it out, 12 CFR 191.5(b), applies that protection to loans on a home the borrower occupies or will occupy. A flip or rental you don't live in falls outside it, so the clause in your note governs. This is general information, not legal advice: have a real estate attorney read the documents before you sign a second.",
    },
    {
      type: "cta",
      text: "Short on cash to close? Send the deal and we'll look for a structure that funds it with one loan, fast.",
      href: "/get-funding?loan=fix-and-flip",
      label: "Fund My Deal",
    },
    { type: "h2", text: "The risks you take on with a second loan", id: "risks" },
    {
      type: "ul",
      items: [
        "**The first loan can be called.** If the first note forbids junior liens and you record one anyway, you've handed the first lender a default.",
        "**Two lenders are paid before you.** Both payoffs come out of the sale before any of your cash comes back, so a soft price hits your equity twice as fast. The table below shows how quickly.",
        "**Hiding it is a misrepresentation.** Lenders read your bank statements: OfferMarket asks for an explanation of any large deposit, and Rehab Financial wants three months of statements. Borrowed money presented as your own is a false statement on a loan application. Federal law, 18 U.S.C. § 1014, makes a knowingly false statement to a mortgage lending business a crime punishable by up to $1,000,000 and 30 years.",
        "**The terms may not line up.** New Silver frames gap loans as six-month money; rehab loans commonly run 12 months or longer. A gap loan that matures before your sale forces a refinance at the worst moment.",
        "**More than one property at risk.** Cross-collateral gap loans put a lien on a house you already own. Lose the flip and you can lose that equity too.",
        "**Personal guarantees on both.** First Capital Trust Deeds says its private money loans are 99% recourse. Expect the gap lender and the first lender to come after you personally if the deal fails.",
      ],
    },
    {
      type: "table",
      caption: "The worked deal with a $40,000 gap loan: what's left after both lenders are paid",
      head: ["Sale price", "After 6% selling costs", "Owed to both lenders", "Back to you", "Profit or loss on your $41,235"],
      rows: [
        ["$415,000, at ARV", "$390,100", "$298,067", "$92,033", "+$50,798"],
        ["$373,500, 10% under", "$351,090", "$298,067", "$53,023", "+$11,788"],
        ["$340,000, 18% under", "$319,600", "$298,067", "$21,533", "−$19,702"],
      ],
    },
    {
      type: "p",
      text: "Owed to both lenders is the $254,800 first loan plus the $40,000 gap loan and its $3,267 of interest. Your $41,235 is the $80,435 the project needs in cash, plus the $800 gap fee, less the $40,000 borrowed. A 10% miss on the sale price leaves almost nothing; an 18% miss costs you nearly half your stake.",
    },
    { type: "h2", text: "Safer ways to close the gap", id: "alternatives" },
    {
      type: "ol",
      items: [
        "**One loan with more leverage.** Rehab Financial lends 100% of the price and the rehab, capped at 65–75% of ARV by score; Kiavi advertises up to 100% of the price; RCN funds 100% of the price for borrowers with 10 or more flips. On the worked deal, Rehab Financial's 70% cap at a 700+ score allows $290,500, cutting your share of the $304,000 cost from $49,200 to $13,500. Its loans run 9 months, in 18 states, with rates from 9.99%.",
        "**Move up a tier.** OfferMarket adds up to 10 points of purchase advance when a licensed general contractor or engineer is on the borrowing side, and up to 5 for a licensed Realtor. On a $246,000 price, each 5 points is $12,300 less down.",
        "**An equity partner instead of a lender.** A partner who joins the LLC and signs the guarantee adds cash without adding a lien. OfferMarket counts liquidity across all guarantors and requires owners of at least 51% of the entity to guarantee a purchase. The partner shares the profit and the risk; have an attorney write the operating agreement.",
        "**More collateral with the same lender.** Sachem says a loan may be further secured by additional property the borrower owns. Pledging a free-and-clear rental to your first lender keeps one lender and one set of documents.",
        "**Less cash at closing, no second loan.** Lima One lets you defer origination fees to your exit, and OfferMarket says financed interest payments may be eligible, added to the payoff. If you can buy with cash, Kiavi's delayed purchase refinance restores your cash within 6 months of purchase.",
        "**Change the deal.** A lower price or a smaller scope shrinks the gap directly, and keeping a first flip under 25% of the price in rehab keeps it light at OfferMarket, the only scope its tier 1 accepts.",
      ],
    },
    {
      type: "p",
      text: "Which lenders will size the deal higher, and what they check first, is in [hard money loan requirements](/guides/hard-money-loan-requirements). How the price, rehab and ARV caps interact is in [LTV vs LTC vs ARV](/guides/ltv-vs-ltc-vs-arv).",
    },
    { type: "h3", text: "If you still take second-position money" },
    {
      type: "ol",
      items: [
        "Get the first lender's written consent before you sign anything with the second.",
        "Ask whether an intercreditor or subordination agreement is required, and who drafts it.",
        "Disclose the loan and its source on the application.",
        "Make the second loan's term run longer than the first's, with the same exit.",
        "Price it in dollars at your planned hold and three months past it, including any profit share.",
        "Have an attorney read both sets of documents.",
      ],
    },
    {
      type: "p",
      text: "Everything here concerns business-purpose loans on investment property. If you or a relative will live in the house, it needs a residential mortgage from a residential lender, under different rules.",
    },
    {
      type: "cta",
      text: "Have a deal that's a little short? Send it over and we'll work the numbers with our licensed lending partner and come back fast.",
      href: "/get-funding?loan=hard-money",
      label: "Fund My Deal",
    },
  ],
  faqs: [
    {
      q: "What is gap funding in real estate?",
      a: "Gap funding is short-term money that covers the part of a deal your main loan doesn't: often the down payment, closing costs or rehab work you pay for before the first draw. It is usually secured by a second lien behind the first lender, though some funders lend against another property you own or lend unsecured. It's repaid when you sell or refinance.",
    },
    {
      q: "How much does gap funding cost?",
      a: "There's no market survey, so the figures come from funders themselves. One gap funder published 12–18% interest plus origination from 2% in 2026, and said some gator lenders take 30–50% of net profit. New Silver puts gator fees at 2–5 points. On a $40,000 gap at 14% for 7 months with 2% origination, the cost is $4,067; a 30% profit share on a $54,865 profit would be $16,459.",
    },
    {
      q: "Do hard money lenders allow gap funding?",
      a: "Many don't. Rehab Financial lends on first mortgages only, and a licensed California broker says many hard money first lenders don't allow junior liens, with some notes letting the lender call the loan if a voluntary second is recorded. Others allow it with written consent and an intercreditor agreement. Check your loan documents and get any approval in writing before you sign a second loan.",
    },
    {
      q: "Do I have to tell my lender about gap funding?",
      a: "Yes. Lenders ask where your down payment came from and question large deposits; OfferMarket requires a letter explaining them. Presenting borrowed money as your own is a false statement on a loan application, and 18 U.S.C. § 1014 makes knowingly false statements to a mortgage lending business a federal crime. Disclose the loan and get the first lender's consent.",
    },
    {
      q: "What's the difference between gap funding and transactional funding?",
      a: "Transactional funding is a one-day loan for a double close: it buys the property and is repaid from the resale the same day, so no renovation happens. Gap funding stays in the deal for months alongside a rehab or bridge loan, covering the down payment, closing costs or rehab float until you sell or refinance. Gator money for earnest deposits sits closer to the transactional end.",
    },
    {
      q: "What are the alternatives to gap funding?",
      a: "Start with one loan that lends more: Rehab Financial funds 100% of price and rehab up to 65–75% of ARV, and Kiavi advertises up to 100% of the price. You can also add an equity partner who guarantees the loan, pledge another property to the same lender, defer origination to exit where offered, or renegotiate the price or scope so the gap shrinks.",
    },
  ],
  related: {
    programs: ["fix-and-flip", "hard-money", "bridge"],
    guides: ["cash-needed-to-flip-a-house", "how-hard-money-loans-work", "ltv-vs-ltc-vs-arv", "investor-loan-points-and-fees"],
  },
  sources: [
    { label: "New Silver — Gap funding for real estate investors (updated November 24, 2025)", url: "https://newsilver.com/the-lender/gap-funding-for-real-estate-investors/" },
    { label: "New Silver — Do you offer gap funding? (help center)", url: "https://help.newsilver.com/en/articles/9629933-do-you-offer-gap-funding" },
    { label: "New Silver — The gator method (July 17, 2026)", url: "https://newsilver.com/the-lender/the-gator-method-real-estate/" },
    { label: "Gap Funded on BiggerPockets — Down payment gap funding: capital stacking vs gator loans (2026)", url: "https://www.biggerpockets.com/member-blogs/16427/106893-down-payment-gap-funding-capital-stacking-vs-gator-loans" },
    { label: "Gap Funded on BiggerPockets — Second-position gap funding explained (2026)", url: "https://www.biggerpockets.com/member-blogs/16427/106531-second-position-gap-funding-explained-why-it-s-rare" },
    { label: "First Capital Trust Deeds — Guide to business-purpose hard money second mortgages", url: "https://www.fctd.com/guide-to-business-purpose-hard-money-second-mortgages" },
    { label: "Hard Money Bankers — Fix and flip loans FAQ (secondary financing)", url: "https://www.hardmoneybankers.com/fix-and-flip-loans/" },
    { label: "Rehab Financial Group — How rehab loans work (first mortgage only)", url: "https://rehabfinancial.com/how-rehab-loans-work" },
    { label: "Rehab Financial Group — 100% fix and flip loan terms (October 2026)", url: "https://rehabfinancial.com/100-fix-flip-premier-loan/loan-terms" },
    { label: "Sachem Capital — Form 10-K for 2025 (SEC)", url: "https://www.sec.gov/Archives/edgar/data/1682220/000168222026000014/sach-20251231.htm" },
    { label: "Manhattan Bridge Capital — Form 10-K for 2025 (SEC)", url: "https://www.sec.gov/Archives/edgar/data/1080340/000149315226013241/form10-k.htm" },
    { label: "OfferMarket — Fix and flip loan guidelines (October 2026)", url: "https://www.offermarket.us/fix-and-flip-loan" },
    { label: "Kiavi — Fix and flip loans (delayed purchase refinance, October 2026)", url: "https://www.kiavi.com/loans/fix-and-flip" },
    { label: "Lima One Capital — FixNFlip (deferred origination, October 2026)", url: "https://www.limaone.com/hard-money-fix-n-flip/" },
    { label: "RCN Capital — Loan programs (October 2026)", url: "https://www.rcncapital.com/loan-programs" },
    { label: "Crowdfunded Wealth — analysis of 2025 HMDA short-term investor loans (updated October 26, 2026)", url: "https://www.crowdfundedwealth.com/articles/hard-money-loan-rates-2026" },
    { label: "12 CFR 191.5 — Limitation on exercise of due-on-sale clauses (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/12/191.5" },
    { label: "12 U.S.C. § 1701j-3 — Garn–St Germain preemption of due-on-sale prohibitions (Cornell LII)", url: "https://www.law.cornell.edu/uscode/text/12/1701j-3" },
    { label: "18 U.S.C. § 1014 — False statements in loan applications (Cornell LII)", url: "https://www.law.cornell.edu/uscode/text/18/1014" },
    { label: "18 U.S.C. § 27 — Definition of mortgage lending business (Cornell LII)", url: "https://www.law.cornell.edu/uscode/text/18/27" },
  ],
};

export default gapFundingForRealEstateDeals;
