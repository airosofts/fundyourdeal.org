# Fund Your Deal — content guide for writers

Fund Your Deal (fundyourdeal.org) gives US real estate investors **fast funding for business-purpose loans on investment property**, and is an associate of a licensed lending partner. The borrower deals with Fund Your Deal: the site must read as one company, not a marketplace (Roland, Oct 21 2026). No owner-occupied or consumer loans — ever.

## Audience and voice
- **Readers:** US real estate investors, from a first rental or first flip to 50-door portfolios. They are numerate and short on time, and they've read a lot of lender fluff.
- **Tone:** plain, specific, confident. Write like an experienced investor-lender explaining a deal over coffee.
- **Style:**
  - Short sentences, active voice, "you".
  - Numbers as figures ($250,000, 75%, 1.25), American English.
  - No exclamation marks, no emoji, no clichés ("unlock", "seamless", "game-changer", "navigate the complexities", "in today's market").
- **Headlines carry a point.** Good: "DSCR loans: qualify on the rent, not your tax returns." Bad: "Everything You Need to Know About DSCR Loans."
- **Lead with the answer,** then the detail. Every section should teach something specific: a number, a rule, a trade-off or a worked example.

## Accuracy (non-negotiable)
- **Sourced figures only.** Every rate, LTV, credit score, term or fee range must come from `docs/research/loan-terms-2026-10.md` or a source you fetched yourself and list in `sources`.
- **Present ranges as published lender ranges with a date**, e.g. "lenders published 80% max LTV in October 2026". If you can't source a number, leave it out.
- **Check the arithmetic in worked examples** before you write them: show the inputs, compute the outputs, round sensibly.
- **Monthly P&I** = L·r / (1 − (1+r)^−n), with r = annual rate / 12 and n = months. Example: $225,000 at 7.25% over 30 years = $1,535.
- **Don't invent** statistics, quotes, testimonials, case studies, lender partner names, lender counts ("50+ lenders"), funding totals or approval rates.

## Compliance
- **One company, not a marketplace:**
  - Never write "compare offers", "see which lenders", "matched lenders", "our network" or "you choose who contacts you". Don't describe sharing the request with several lenders.
  - CTAs are "Get Funding", "Get DSCR funding" and similar. Add speed and urgency: "fast funding", "get funded fast", "apply in 60 seconds".
  - Don't name an entity or NMLS number. The footer carries "Fund Your Deal is an associate of a licensed lender." Don't name the partner.
  - Market facts about how lenders in general work ("most DSCR lenders use…") are fine.
- **No promises:** no "guaranteed approval", "no credit check", "best rates" or "lowest rates".
  - "No income verification" is acceptable only as an accurate description of how DSCR loans qualify on property income.
- **Business purpose only.** Where natural, say these loans are for investment property that neither the borrower nor their family will live in, and that a home they'll live in needs a residential mortgage.
- **No tax or legal advice.** For LLC, tax, 1031 or entity questions, explain the general mechanics and suggest a CPA or attorney.
- **Original text only.** Don't copy or closely paraphrase competitor text; cite them as sources for facts.

## SEO
- **Primary keyword placement:** in `metaTitle` (≤ 60 characters), the H1/`title`, and the first paragraph. `metaDescription` ≤ 155 characters.
- **FAQs** answer real "People also ask" questions in 40–90 words, each standing alone.
- **Originality:** every page must be different from every other page — no repeated paragraphs between programs, guides or states.
- **Internal links:**
  - Use `related` (program slugs) and, in guides, `cta` blocks.
  - Link targets below. Lead-form links take `?loan=<program slug>`.

## Link map
| Page | URL |
|---|---|
| Lead form | `/get-funding?loan=dscr` (also `short-term-rental`, `fix-and-flip`, `hard-money`, `bridge`, `brrrr`, `construction`, `portfolio`, `cash-out-refinance`) |
| DSCR loans | `/dscr-loans` (`/dscr-loans/requirements`, `/dscr-loans/rates`, `/dscr-loans/texas`, `/dscr-loans/florida`) |
| Short-term rental | `/short-term-rental-loans` |
| Fix and flip | `/fix-and-flip-loans` (`/fix-and-flip-loans/texas`, `/fix-and-flip-loans/florida`) |
| Hard money | `/hard-money-loans` |
| Bridge | `/bridge-loans` |
| BRRRR | `/brrrr-loans` |
| Construction | `/ground-up-construction-loans` |
| Portfolio | `/rental-portfolio-loans` |
| Cash-out refinance | `/investment-property-cash-out-refinance` |
| Calculators | `/calculators/dscr`, `/calculators/fix-and-flip`, `/calculators/brrrr`, `/calculators/rental-cash-flow` |
| Guides | `/guides/<slug>` |

## Program slugs (for `related`)
`dscr`, `short-term-rental`, `fix-and-flip`, `hard-money`, `bridge`, `brrrr`, `construction`, `portfolio`, `cash-out-refinance`

## Format
- **Write TypeScript content files** typed by `src/content/types.ts`: `ProgramContent`, `Guide`, `StateContent`. The exemplar is `src/content/programs/dscr.ts`; match its depth and tone.
- **Edit only the files you're assigned.**
- **Typecheck when done** with `node node_modules/typescript/bin/tsc --noEmit -p .` from the project root. Fix errors in your own files and ignore other files' errors.
- **Strings:** use plain double-quoted strings. Typographic apostrophes and quotes (’ “ ”) are fine; escape straight double quotes inside strings.
