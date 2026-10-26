# Lead form and compliance research — 2026-10-19 (not legal advice; for counsel review)

## Business purpose
- **Reg Z exemptions:**
  - 12 CFR 1026.3(a)(1) exempts credit "primarily for a business, commercial or agricultural purpose".
  - 1026.3(a)(2) exempts credit to anyone other than a natural person, whatever the purpose.
- **Supplement I, comment 3(a)-4:** credit "to acquire, improve, or maintain rental property (regardless of the number of housing units) that is not owner-occupied is deemed to be for business purposes… If the owner expects to occupy the property for more than 14 days during the coming year, the property cannot be considered non-owner-occupied."
  - Comment 3(a)-5 covers owner-occupied rentals: acquisition counts as business only above 2 units, improvement only above 4 units.
- **RESPA:** 12 CFR 1024.5(b)(2) exempts business-purpose loans as defined by 1026.3(a)(1).
- **Why owner-occupied loans are excluded:** they bring in TRID, ATR/QM, HOEPA, SAFE Act loan-originator licensing and state mortgage-broker law, plus occupancy-fraud risk.
- **How lenders verify:** entity-only lending (Lima One), a signed business-purpose and occupancy affidavit (PennyMac sample), residence and homestead checks, landlord insurance, leases.
- **Sources:**
  - https://www.ecfr.gov/current/title-12/part-1026/section-1026.3
  - https://www.ecfr.gov/current/title-12/part-1026/appendix-Supplement%20I%20to%20Part%201026
  - https://www.ecfr.gov/current/title-12/part-1024/section-1024.5
  - https://corr.pennymac.com/assets/documents/non-qm-resources/Non-Branded_Business_Purpose_and_Occupancy_Affidavit.pdf

## State licensing — biggest open risk (brokering and lead generation)
- **License needed for any business-purpose lending or brokering:** CA, AZ, NV, ND, SD, VT.
- **License needed when the collateral is 1–4 unit residential:** OR, ID, UT, MN.
- **Broker license even where lenders are exempt:** NY, NJ, MI, PA (Fortra; not verified against statute).
- **North Carolina:** registration with the Secretary of State.
- **Vermont:** 8 V.S.A. §2200(5) defines lead generation as "selling leads for loans" or referring Vermont borrowers. A loan solicitation license is required (§2201(a)(5)). Commercial loans of $1,000,000 or more are exempt (§2201(h)).
- **California:**
  - Fin. Code §22602 lets a CFL licensee pay an unlicensed referrer on commercial loans only within narrow conditions, and not for residential mortgage loans.
  - Bus. & Prof. Code §10131(d) requires a DRE broker license to solicit borrowers for real-estate-secured loans for compensation.
  - DFPI has penalized lenders that paid unlicensed lead providers.
- **Action:**
  - Counsel maps the business model and fee structure; success-based fees look more like brokering.
  - Until then, pause matching in the listed states with `NEXT_PUBLIC_PAUSED_STATES`.
- **Sources:**
  - https://privatelenderlink.com/2026/05/fortra-law-states-that-require-a-license-for-private-mortgage-lenders-and-brokers/
  - https://geracillp.com/licensing-rules-business-purpose-lending-2025/
  - https://legislature.vermont.gov/statutes/section/08/073/02200

## TCPA and CAN-SPAM
- **One-to-one consent rule:** vacated in *Insurance Marketing Coalition v. FCC* (11th Cir., Jan 24, 2025). The FCC restored the earlier text of §64.1200(f)(9) (FR Doc 2025-16641).
- **Prior express written consent** is still required for autodialed or prerecorded marketing calls and texts. It must:
  - be a signed agreement (e-sign is fine) naming the number;
  - authorize those calls;
  - say consent is "not required… as a condition of purchasing".
- **Court rulings:**
  - *McLaughlin v. McKesson* (U.S., June 20, 2025): courts are not bound by FCC interpretations.
  - *Bradford* (5th Cir., Feb 25, 2026): written consent not required, in that circuit only.
- **Revocation:** "revoke-all" is delayed to Jan 31, 2027. The other revocation rules have been in force since Apr 11, 2025.
- **State mini-TCPA laws:**
  - Florida, Oklahoma and Maryland: written consent; calls 8am–8pm only; at most 3 calls per 24 hours.
  - Texas SB 140 (Sept 1, 2025): texts count as telephone solicitation; registration required; private right of action.
- **Carrier rules:** CTIA treats shared or sold SMS opt-ins as prohibited.
- **Recommendation:**
  - Collect one-to-one-style consent: name the matched lenders (3–5) in a separate, unchecked, optional box.
  - Keep a TrustedForm or Jornaya certificate, plus timestamp, IP and text version.
  - Keep the data-sharing authorization separate from TCPA consent.
- **CAN-SPAM:**
  - It applies to business-to-business email too.
  - Requirements: a physical postal address, no deceptive subject lines, opt-outs honored within 10 business days, never sell opted-out addresses.
  - Penalty up to $53,088 per email.

## Rate advertising
- **Reg Z and MAP:** the Reg Z ad rules (§§1026.16, 1026.24) and the MAP Rule (12 CFR 1014) cover consumer credit only.
- **Still applies:** FTC Act §5 covers business credit (RCG Advances, Yellowstone), as do state UDAP laws.
- **How to show a rate:** "from X% as of [date]" with its assumptions (FICO, LTV, DSCR, term, points). Don't label anything "APR" unless it's calculated as one.
- **Competitor disclaimers:**
  - Kiavi: "Rates are based on loan terms, borrower qualifications, LTV, and property factors and are subject to change. Non owner-occupied rental properties only."
  - RCN: "This is not an offer to lend… Not all borrowers will qualify."

## Restricted claims
- **Never:** "guaranteed approval".
- **Wording to use instead:**
  - "No credit pull to get matched" rather than "no credit check".
  - For DSCR, "No W-2s or tax returns — qualifies on rental income" rather than "no income verification".
- **Reg B:** Gable may be a "creditor" under 1002.2(l) because it regularly refers applicants. Never discourage applicants on a prohibited basis. Asking about citizenship or residency is permitted (1002.6(b)(7)).

## Form field findings (lenders' live forms)
- **Kiavi:**
  - Steps: program → owner-occupant knockout → address → experience (purchased or refinanced in 2 years: None / 1–4 / 5–9 / 10+) → entity knockout → contact.
  - No credit question up front.
- **BiggerPockets Lender Finder:** market → occupancy → loan type → property → budget → credit → contact. "Free, and never a credit pull."
- **Credit bands:** DSCR rate sheets price in 20-point bands (660–679 … 780+).
- **Experience lookbacks:** 24 months (Kiavi), 36 months (RCN; "experienced" = 3 rehabs in 3 years), 60 months for ground-up builds (Kiavi).
- **Portfolio (CoreVest):** rentals owned, years investing, portfolio value, past foreclosure or bankruptcy.
- **Recommended:**
  - Credit bands: <620 / 620–659 / 660–679 / 680–699 / 700–719 / 720–739 / 740–759 / 760+ / Not sure.
  - Borrowing as: existing LLC / will form LLC / individual.
  - Citizenship: US citizen / permanent resident / non-permanent resident / foreign national.
  - Refinances: ask the purchase date, for seasoning.
  - Construction: ask plans and permit status.

## Launch checklist
1. Owner-occupancy knockout, plus the required business-purpose attestation. ✅ built
2. Prefer entity borrowers (ask; don't require).
3. Pause matching in licensing states until counsel signs off (configurable). ✅ built (off by default — decision needed)
4. "Not a lender" footer. ✅ built
5. Named-lender TCPA box, plus a consent certificate (TrustedForm or Jornaya). Partially done: the box is built, and lender names are needed at launch.
6. Quiet hours set to the strictest state (8am–8pm, 3 calls per 24 hours). Operational.
7. CAN-SPAM footer and suppression list. Operational.
8. "As of" date and assumptions next to every rate. ✅ built
9. Banned-claims list in ad copy. See content-style.md.
10. CCPA "sale/sharing" notices in the privacy policy. Counsel.
