# Fund Your Deal — brand brief (read first)

**Fund Your Deal** (fundyourdeal.org) gets US real estate investors' deals funded fast:
business-purpose loans on investment (non-owner-occupied) property. It's a sister site of
Gable Funding (`/Users/hf/Documents/gable-funding`), built on the same funnel and admin
portal, but it is **its own brand with its own words**. Where this brief and
`docs/content-style.md` differ, this brief wins.

## Positioning: deal-first
- **Gable Funding** reads as a calm, all-round investor lender.
- **Fund Your Deal** is for the investor with a deal in hand — under contract, at auction, mid-rehab, or about to miss a closing — who needs to know *what this deal needs to get funded, and how fast*.
- **Lead products:** fix and flip, hard money, bridge, BRRRR, ground-up construction.
- **Rental loans** (DSCR, short-term rental, cash-out refinance, portfolio) are presented as the hold or exit side of a deal: "refinance out", "keep it as a rental", "pull your cash back out".

## Voice
- **Deal-desk direct:** numbers first, verdict first. "Here's what your deal needs." "This is the number that decides it."
- **Writing style:** second person, short sentences, active verbs. Headlines carry a point. Worked examples use real-looking deals, with different numbers from Gable's.
- **Not hype:** no exclamation marks, no emoji, no "unlock", "seamless", "game-changer", "in today's market", "navigate".
- **Signature phrases (use naturally, don't overdo):** "fund your deal", "get your deal funded", "deal-ready", "close on time", "the number that decides it".
- **CTA:** "Fund My Deal" (`SITE.cta`). Variants are fine: "Fund my flip", "Fund my bridge loan", "Get my BRRRR funded", "Fund my build", "Get rental funding".

## One company, compliance (same rules as Gable)
- **The footer says "Fund Your Deal is an associate of a licensed lender."** Never name the partner, an entity or an NMLS number.
- **One company, not a marketplace:** never "compare offers", "matched lenders", "our network", "marketplace", "see which lenders".
- **No promises:** no "guaranteed approval", "no credit check", "best/lowest rates".
- **Business purpose only:** for a home the borrower or family will live in, point them to a residential mortgage lender. No tax or legal advice.
- **Sourced facts only:** every rate, LTV/LTC/ARV limit, score, term, fee or timeline comes from `docs/research/loan-terms-2026-10.md` (or `compliance-2026-10.md`) or a source you fetch and list. Check every worked example's arithmetic.
- **Define DSCR in plain words at its first mention on every page,** in your own words. For example: "DSCR (debt service coverage ratio) — what the property rents for each month, divided by its full monthly loan payment". Don't use Gable's phrasing "the property's monthly rent divided by its monthly payment". Link `/glossary#dscr` where links are possible.

## Must not copy Gable Funding
Gable's site covers the same products. Duplicate text across the two domains would sink both in search, so:
- **Don't reuse Gable's text:** its sentences, headings, FAQs, worked examples (pick different deals and numbers) or section order where you can avoid it. Facts can be the same; the words can't.
- **Before you finish, run** `node scripts/check-overlap.mjs <your files>` from the repo root. It prints any 9-word run that also appears in Gable's source. Rewrite everything it flags, except:
  - the associate line;
  - the consent texts in `src/lib/consent.ts`;
  - one standard business-purpose sentence.

## Page and URL plan (only link to these)
| Page | URL |
|---|---|
| Lead form | `/get-funding?loan=fix-and-flip` (also `hard-money`, `bridge`, `brrrr`, `construction`, `dscr`, `short-term-rental`, `cash-out-refinance`, `portfolio`) |
| Programs | `/fix-and-flip-loans`, `/hard-money-loans`, `/bridge-loans`, `/brrrr-loans`, `/ground-up-construction-loans`, `/dscr-loans`, `/short-term-rental-loans`, `/investment-property-cash-out-refinance`, `/rental-portfolio-loans` |
| State pages | `/fix-and-flip-loans/georgia`, `/fix-and-flip-loans/ohio`, `/dscr-loans/georgia`, `/dscr-loans/north-carolina` |
| Calculators | `/calculators`, `/calculators/fix-and-flip`, `/calculators/brrrr`, `/calculators/dscr`, `/calculators/rental-cash-flow` |
| Other | `/`, `/loans`, `/rates`, `/guides`, `/glossary` (anchors like `#dscr`, `#arv`, `#ltc`, `#ltv`, `#pitia`, `#points`, `#draws`, `#exit-strategy`), `/how-it-works`, `/about`, `/contact`, `/disclosures`, `/privacy`, `/terms` |

Program slugs (for `related`): `fix-and-flip`, `hard-money`, `bridge`, `brrrr`, `construction`, `dscr`, `short-term-rental`, `cash-out-refinance`, `portfolio`.

### Guides (all at `/guides/<slug>`; different topics from Gable's)
| Slug | Category | Topic |
|---|---|---|
| `how-to-calculate-arv` | Fix & flip | ARV: comps, adjustments, what lenders do with it |
| `rehab-budget-for-lenders` | Fix & flip | A scope of work and rehab budget a lender will fund |
| `cash-needed-to-flip-a-house` | Fix & flip | Cash to close on a flip: down payment, rehab gap, closing, carry |
| `how-hard-money-loans-work` | Financing basics | Points, rates, terms, interest-only, balloons, exits |
| `closing-an-investor-loan-fast` | Financing basics | What sets the closing timeline and how to be deal-ready |
| `bridge-loan-exit-strategies` | Financing basics | Sale, refinance, lease-up — and what happens when the exit slips |
| `brrrr-method-step-by-step` | BRRRR | The BRRRR method with one deal worked all the way through |
| `refinance-after-rehab` | BRRRR | Refinancing out of a rehab loan: appraisal, seasoning, cash back |
| `rental-cash-flow-before-you-buy` | DSCR | Running rental cash flow and DSCR before you make an offer |
| `construction-draw-schedule` | Construction | How a construction draw schedule and inspections work |
| `ltv-vs-ltc-vs-arv` | Financing basics | The three ways investor loans are sized, side by side |
| `investor-loan-points-and-fees` | Financing basics | Points, origination, lender fees, extensions and exit fees |

## Lead form and admin portal
- **Lead form:** the same v3 lead form as Gable (`docs/lead-form.md`): name and phone first, then quick taps.
- **Leads:** stored in the shared Airobase tables with `site = 'fundyourdeal'` and worked in the shared admin portal (`/Users/hf/Documents/gablefunding-adminportal`), which gets a site switcher.
