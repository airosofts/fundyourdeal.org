# Lead form v3 — contact first (Roland, Oct 23 2026)

Roland's rule: **capture the name and phone first, then qualify.** The first thing a
visitor sees is a fillable form, not a confirmation gate. Owner-occupants are no
longer turned away: they're saved as leads and tagged as disqualified in the admin
portal.

This file is the contract between the site (`src/lib/leadSpec.ts`,
`src/components/LeadForm.tsx`, `src/app/api/leads/route.ts`) and the admin portal
(`~/Documents/gablefunding-adminportal`, shared with Gable Funding). Change both together.

## Screens (step = 1-based position; the server re-validates every earlier screen)

| Step | Screen | Asks | Values |
|---|---|---|---|
| 1 | `contact` | First name, last name, email (optional), mobile phone, call/text consent checkbox (required). Button "Fund My Deal" (`SUBMIT_LABEL`; Gable's says "Get Funding"). | — |
| 2 | `occupancy` | "Will you or a family member live in the property?" | `investment` (no, it's an investment property) · `owner` (yes) |
| 3 | `loanType` | What are you financing? | dscr · str · flip · rehab_rental · bridge · construction · portfolio |
| 4 | `purpose` | Buying or refinancing? | purchase · refinance · cashout (rental loans only) |
| 5 | `propertyType` | What kind of property? | sfr · 2_4 · condo · mf5 · land (construction only; no condo there) |
| 6 | `loanRange` | How much do you need? | lt100 · 100_250 · 250_500 · 500_1m · 1m_plus (Oct 28; earlier rows may hold lt150 · 150_300 · 300_500) |
| 7 | `credit` | Credit score, roughly | Under 620 · 620–675 · 675–720 · 720+ |
| 8 | `experience` | Deals in the last 3 years (project loans only: flip, rehab_rental, bridge, construction) | 0 · 1_3 · 4_plus |
| 9 | `zip` | Property ZIP code (5 digits) | → `completed = true` |

`FINAL_STEP = 9`. Program pages may preset loan type / purpose / property type;
preset screens are skipped but still saved.

## What the server writes (`gf_leads`)

- **Step 1 (the lead):** `first_name`, `last_name`, `email` (null if blank), `phone`,
  `phone_e164`, share consent (`share_consent_*`, clicking the button), call/text
  consent (`tcpa_consent*`), visitor + attribution columns, `answers.formVersion = 3`,
  and `contact_captured_at`. Analytics event: `gf_lead_submitted` (the conversion).
- **Step 2:** `occupancy`.
  - `investment` → `business_purpose_confirmed = true` + version + time.
  - `owner` → `business_purpose_confirmed = false`, `status = 'disqualified'`,
    `lost_reason = 'Owner-occupied'` (only while status is `new`). Switching back to
    `investment` undoes this if the status is still `disqualified` / `Owner-occupied`.
- **Steps 3–8:** `loan_type`, `purpose`, `property_type`, `loan_amount_range`,
  `credit_band`, `experience`.
- **Step 9:** `property_zip`, `property_state`, `completed = true`, `completed_at`.
  Analytics event: `gf_lead_completed`.

Columns added by `airobase/004_contact_first.sql` (`occupancy`, `contact_captured_at`)
are written in a separate best-effort update, so a lead is never lost if that
migration hasn't run; the same values are always in `answers`. Fund Your Deal writes
`site = 'fundyourdeal'` in the main save instead: 004 is already applied to the shared
database, and the column defaults to `'gablefunding'`, so a failed follow-up would
otherwise file the lead under the wrong site.

## Older rows

Rows saved by form v2 (Oct 21–23) used different step numbers (1 loan type … 7
contact) and have no `answers.formVersion`. Before v2 there was a 4-step v1 form.
The portal labels steps by version.
