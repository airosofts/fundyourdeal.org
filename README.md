# Fund Your Deal

**fundyourdeal.org** is for real estate investors who already have a deal in hand (under contract, at auction, mid-rehab) and need it funded. It covers business-purpose loans on investment property only: fix and flip, hard money, bridge, BRRRR and ground-up construction first, with DSCR, short-term rental, cash-out and portfolio loans as the hold-and-refinance side. Fund Your Deal is an associate of a licensed lender.

It is the sister site of **Gable Funding** (`/Users/hf/Documents/gable-funding`). Both sites share the same funnel, the same lead form, the same AiroBase tables and the same admin portal. The brand, the voice and every word of content are Fund Your Deal's own. Treat the Gable repo as read-only reference, and don't copy its text (see [Overlap check](#overlap-check)).

Stack: Next.js 16 (App Router with Cache Components), React 19, Tailwind 4, AiroBase (`@airostack/client`) for storage. This Next.js has breaking changes from older versions. Read `AGENTS.md`, and look up APIs in `node_modules/next/dist/docs/` rather than relying on memory.

## Local setup

```bash
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_AIROBASE_URL and AIROBASE_SECRET_KEY
npm run dev                  # http://localhost:3000
```

Typecheck with `node node_modules/typescript/bin/tsc --noEmit -p .` and lint with `npx eslint <files>`.

## Shared database (AiroBase)

Fund Your Deal writes to the **same AiroBase project and `gf_*` tables as Gable Funding**. A `site` column on each row says which site it came from: `fundyourdeal` here, `gablefunding` there. The admin portal (`/Users/hf/Documents/gablefunding-adminportal`) uses it for its site switcher.

**The SQL is already in place. Don't re-run it unless you have a reason.** The site's `airobase/001_gable_funding.sql`, `003_form_v2.sql` and `004_contact_first.sql` (002 is the portal's `sql/002_admin_portal.sql`) have all been run on the shared database. The files keep their Gable names because the tables are shared. They are additive and safe to re-run, but a re-run touches Gable's live tables too, so treat it as a deliberate step. The portal's `sql/003_multi_site.sql` adds `site` to `gf_contact_messages`, `gf_rate_alerts` and `gf_partner_inquiries`.

Every `site` column defaults to `gablefunding`. Fund Your Deal therefore sets `site` itself on every write:

| Table | Written by | What goes in it |
| --- | --- | --- |
| `gf_leads` | `/api/leads` | One row per form session (`session_id`). It is created at step 1 with the name, phone, consents (exact text, version, time, IP), visitor details and ad attribution (GCLID, UTM), then filled in at each later step. Owner-occupants are kept, with status `disqualified` and lost reason `Owner-occupied`. `site` is in `answers.site` and in the `site` column. The column, like `occupancy` and `contact_captured_at`, is written in a separate best-effort update, so a lead is saved even if a migration is missing. |
| `gf_contact_messages` | `/api/contact` | Contact-page messages. |
| `gf_rate_alerts` | `/api/rate-alerts` | Email sign-ups for rate updates. Email is unique across both sites: a second sign-up with the same address keeps the first row, and its site, as it was. |
| `gf_partner_inquiries` | nothing on this site | Lender and broker inquiries. Gable's form for these was removed on Oct 21, and this site doesn't have one. |

For contact messages and rate alerts, the row is saved first and `site = 'fundyourdeal'` follows in a second update (`followUp` in `src/lib/server/forms.ts`). If that update fails, the error is logged, the visitor still gets a success, and the row keeps the `gablefunding` default.

- RLS is enabled on every `gf_*` table and no public policy exists, so nothing but the server, holding the secret key, can touch them.
- Without the AiroBase settings, each API answers `503 not_configured`. The lead form then asks the visitor to try again, so a lead is never silently dropped.

### The lead form contract

The form's steps, answer values, columns and validation are fixed by the admin portal: see `docs/lead-form.md` (v3, contact first). Labels, questions and hints can be reworded freely. Ids, values and step numbers can't. Each consent text is stored with a version tag (`fyd-occupancy-2026-10-26`, `fyd-terms-2026-10-26`, `fyd-tcpa-2026-10-26`). If you change a text in `src/lib/consent.ts`, bump its tag in `src/lib/leadSpec.ts` in the same change.

## Environment variables

Listed in `.env.example`. Set them on the host. The `NEXT_PUBLIC_*` values are baked in at build time, so set them before `npm run build`.

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_AIROBASE_URL` | URL of the shared AiroBase project. |
| `AIROBASE_SECRET_KEY` | Secret key, server-only, which bypasses row-level security. Never expose it to the browser. `src/lib/server/airobase.ts` is `server-only` for that reason. |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, `https://fundyourdeal.org`. Used for canonical URLs, the sitemap and Open Graph tags. |
| `NEXT_PUBLIC_INDEXABLE` | `true` on the live domain only. Any other value makes every page `noindex` and blocks crawlers in robots.txt. |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container. Form events land in the dataLayer: `gf_lead_submitted` at step 1 (count this one as the conversion), `gf_lead_step` after each tap, and `gf_lead_completed` at step 9. |

## Deploying

- **Build:** this is a standard Next.js 16 app on Node 20.9 or later. Build with `npm run build` and serve with `npm run start`, or use any host that runs Next.js (see `node_modules/next/dist/docs/01-app/01-getting-started/17-deploying.md`).
- **Environment:** set the variables above in the host's settings before the build.
- **Going live:** set `NEXT_PUBLIC_INDEXABLE=true` on `fundyourdeal.org` only, never on a preview or staging URL.
- **Admin portal:** it finds this site through `SITE_URL_FUNDYOURDEAL` in its own settings.

## Overlap check

Gable Funding covers the same loan products, and duplicate text across the two domains would hurt both in search. Before you finish any copy change, run:

```bash
node scripts/check-overlap.mjs <file> [file…]
```

It reads the string literals and JSX text in each file and prints every run of 9 words that also appears in Gable's `src/`. It exits with code 1 when something matches. Set `GABLE_SRC` to compare against a different checkout. Rewrite whatever it flags in visible copy. The only allowed matches are:

- the associate line;
- the consent texts in `src/lib/consent.ts`, which keep their legal substance;
- one standard business-purpose sentence.

Code and comments can trip it too. Those don't reach visitors.

## Where things live

| What | Where |
| --- | --- |
| Brand, voice, page and URL plan | `docs/brand.md` (read first; it wins over the style guide) |
| Writing rules | `docs/content-style.md` |
| Sourced loan terms and compliance notes | `docs/research/` (`loan-terms-2026-10.md`, `compliance-2026-10.md`, `seo-page-plan.md`) |
| Brand name, nav, program list and form presets | `src/lib/site.ts` (`SITE`, `PROGRAMS`) |
| Program, guide and state page copy | `src/content/programs/`, `src/content/guides/`, `src/content/states/`, typed by `src/content/types.ts` and rendered by `src/components/templates/`. Add a file, list it in the folder's `index.ts`, and it appears in the routes, hubs and sitemap. |
| Rates table | `src/lib/rates.ts` (refresh monthly together with `docs/research/loan-terms-*.md`) |
| Calculators | `src/app/calculators/`, `src/components/*Calculator.tsx`, maths in `src/lib/finance.ts` |
| Glossary | `src/app/glossary/page.tsx` (anchors such as `#dscr`, `#arv`, `#ltc`) |
| Lead form | `src/components/LeadForm.tsx` (UI), `src/lib/leadSpec.ts` (screens, values, validation, shared with the server), `src/lib/consent.ts` (consent wording), `src/app/api/leads/route.ts` (saving) |
| Contact and rate-alert APIs | `src/app/api/contact/`, `src/app/api/rate-alerts/`, both through `src/lib/server/forms.ts` |
| Legal pages | `src/app/disclosures/`, `src/app/privacy/`, `src/app/terms/` |

## Before launch

- **Legal placeholders:** every `[BRACKETED]` or highlighted item on the legal pages, such as state licensing, compensation wording and response times, has to be settled by the business or by counsel. The consent texts are marked `[COUNSEL TO REVIEW BEFORE LAUNCH]`.
- **Compliance:** never name the lending partner, an entity or an NMLS number. The footer line "Fund Your Deal is an associate of a licensed lender." is the only reference.
- **Indexing:** turn it on only on the live domain.
