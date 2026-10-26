# Fund Your Deal

Fast funding for **real estate investors** (business-purpose, non-owner-occupied property only). Fund Your Deal is an associate of a licensed lending partner. Investors leave their name and phone first, then answer a few one-tap questions; a loan specialist calls them back. Next.js 16 (App Router, Cache Components), Tailwind 4, and AiroBase for storage, set up the same way as honestofferhome.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the AiroBase URL and secret key
npm run dev                  # http://localhost:3000
```

## Database (AiroBase)

1. In the AiroBase project's SQL editor, run `airobase/001_gable_funding.sql`, then `airobase/003_form_v2.sql`, then `airobase/004_contact_first.sql` (form v3: `occupancy`, `contact_captured_at`, `site`). All are safe to re-run. The site writes the newer columns in a separate best-effort update, so leads still save if a later file hasn't run yet.
2. Set `NEXT_PUBLIC_AIROBASE_URL` and `AIROBASE_SECRET_KEY` on the host.

| Table | Written by | What it holds |
| --- | --- | --- |
| `gf_leads` | `/api/leads` | One row per form, created at step 1 (name, phone and consents) and updated after every later step (partial leads are kept). Holds contact details, sharing and call/text consents (exact wording, version, time, IP), occupancy and the business-purpose certification, the deal, the investor profile, ad attribution (GCLID/UTM) and visitor location. Owner-occupants are saved with status `disqualified` / lost reason `Owner-occupied`. Steps and columns: `docs/lead-form.md`. |
| `gf_rate_alerts` | `/api/rate-alerts` | Rate-alert sign-ups. |
| `gf_partner_inquiries` | — | Lender and broker requests. The site's form for these was removed on Oct 21 (one-company positioning); the table stays for the admin portal. |
| `gf_contact_messages` | `/api/contact` | Contact form messages. |

- Row-level security is on with no public policies. Only the server, using the secret key, can read or write.
- Without the AiroBase settings the APIs return `503 not_configured`, and the form shows a retry message rather than silently dropping leads.

## Settings (`.env.example`)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain. |
| `NEXT_PUBLIC_INDEXABLE` | `true` only on the live domain. Until then every page is `noindex` and robots.txt blocks crawling. |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager. The form pushes `gf_lead_submitted` (step 1, the conversion), `gf_lead_step` and `gf_lead_completed` (step 9) to the dataLayer. |

## Pages

| Group | Pages |
| --- | --- |
| Conversion | `/` (form in the hero), `/get-funding` (form; `?loan=<program>` pre-fills it; `/get-matched` redirects here) |
| Programs | `/loans` hub, `/dscr-loans`, `/short-term-rental-loans`, `/fix-and-flip-loans`, `/hard-money-loans`, `/bridge-loans`, `/brrrr-loans`, `/ground-up-construction-loans`, `/rental-portfolio-loans`, `/investment-property-cash-out-refinance` |
| DSCR deep pages | `/dscr-loans/requirements`, `/dscr-loans/rates` |
| State pages | `/dscr-loans/texas`, `/dscr-loans/florida`, `/fix-and-flip-loans/texas`, `/fix-and-flip-loans/florida` |
| Calculators | `/calculators` hub, `/calculators/dscr`, `/calculators/fix-and-flip`, `/calculators/brrrr`, `/calculators/rental-cash-flow` |
| Guides | `/guides` hub plus long-form guides at `/guides/<slug>` |
| Rates | `/rates` (sourced, dated ranges; source data in `src/lib/rates.ts`) |
| Company | `/how-it-works`, `/about`, `/contact` |
| Legal | `/disclosures`, `/privacy`, `/terms` |

## Where things live

- **Copy** is data in `src/content/`. Programs, guides and state pages are typed objects rendered by templates in `src/components/templates/`.
  - To add a guide or state page, add a file and list it in that folder's `index.ts`.
  - It then appears in the routes, hubs and sitemap automatically.
- **Form logic** (options, validation, conditional fields) is in `src/lib/leadSpec.ts`. The client form and the server API both use it. Form v3 (Oct 23) asks for name and phone first, then occupancy, a few one-tap questions and the property ZIP. Its step numbers and values are a contract with the admin portal, written up in `docs/lead-form.md`; change both together.
- **Consent wording** is in `src/lib/consent.ts`, and the server stores the exact text with each lead. If you change a text, bump its version in `leadSpec.ts`.
- **Research** behind the copy is in `docs/research/`:
  - loan terms with sources;
  - the competitor SEO study and page plan;
  - compliance notes for counsel.
- **Writing rules** are in `docs/content-style.md`.

## Before launch

- **Placeholders:** anything in `[BRACKETS]` or highlighted yellow on the legal pages needs a business or counsel decision. That includes the legal entity, NMLS number, state licensing, compensation wording, named lenders in the call/text consent, and response times.
- **Rates:** refresh `src/lib/rates.ts` and `docs/research/loan-terms-*.md` monthly.
- **Go live:** set `NEXT_PUBLIC_INDEXABLE=true` on the production domain only.
