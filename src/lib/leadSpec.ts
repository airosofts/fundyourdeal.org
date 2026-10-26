// The investor lead form (v3, Roland's Oct 23 rule: capture the name and
// phone first, then qualify). One screen at a time, quick taps after the
// contact screen. Shared by the form (client) and /api/leads (server) so both
// validate alike. The step numbers and values are a contract with the admin
// portal: docs/lead-form.md.
//
//   1 contact (+ call/text consent; clicking "Get Funding" is the terms) → the lead
//   2 occupancy: investment | owner. Owners aren't turned away: they're saved
//     and tagged disqualified in the portal.
//   3 loan type · 4 purpose · 5 property type · 6 amount · 7 credit ·
//   8 experience (project loans only) · 9 property ZIP → completed

export type LoanType = "dscr" | "str" | "flip" | "rehab_rental" | "bridge" | "construction" | "portfolio";

export const LOAN_TYPES: { id: LoanType; label: string; hint: string }[] = [
  { id: "dscr", label: "Rental property", hint: "DSCR · qualify on the rent" },
  { id: "str", label: "Short-term rental", hint: "Airbnb · VRBO" },
  { id: "flip", label: "Fix & flip", hint: "Purchase + rehab" },
  { id: "rehab_rental", label: "Buy, rehab & rent", hint: "BRRRR" },
  { id: "bridge", label: "Bridge", hint: "Close fast" },
  { id: "construction", label: "New construction", hint: "Ground-up build" },
  { id: "portfolio", label: "Several rentals", hint: "Portfolio loan" },
];

export const PURPOSES = [
  { id: "purchase", label: "Buying a property" },
  { id: "refinance", label: "Refinancing" },
  { id: "cashout", label: "Cash-out refinance" },
] as const;
export type Purpose = (typeof PURPOSES)[number]["id"];

/** Cash-out is for rental loans; project loans buy or refinance. */
export const purposesFor = (t: LoanType | "") => (t === "flip" || t === "construction" || t === "rehab_rental" ? PURPOSES.filter((p) => p.id !== "cashout") : PURPOSES);

export const PROPERTY_TYPES = [
  { id: "sfr", label: "Single-family home" },
  { id: "2_4", label: "2–4 units" },
  { id: "condo", label: "Condo / townhome" },
  { id: "mf5", label: "5+ units" },
  { id: "land", label: "Land / lot" },
] as const;
export const propertyTypesFor = (t: LoanType | "") => (t === "construction" ? PROPERTY_TYPES.filter((p) => p.id !== "condo") : PROPERTY_TYPES.filter((p) => p.id !== "land"));

// Wide ranges: one tap, no typing.
export const LOAN_RANGES = [
  { id: "lt150", label: "Under $150K", min: 0, max: 150_000 },
  { id: "150_300", label: "$150K – $300K", min: 150_000, max: 300_000 },
  { id: "300_500", label: "$300K – $500K", min: 300_000, max: 500_000 },
  { id: "500_1m", label: "$500K – $1M", min: 500_000, max: 1_000_000 },
  { id: "1m_plus", label: "$1M+", min: 1_000_000, max: null },
] as const;
export const CREDIT = ["Under 620", "620–675", "675–720", "720+"] as const;
export const EXPERIENCE = [
  { id: "0", label: "None yet — this is my first" },
  { id: "1_3", label: "1–3 deals" },
  { id: "4_plus", label: "4 or more" },
] as const;

/** Experience matters for project loans (flips, bridge, BRRRR, builds) — rental loans skip that screen. */
export const isProject = (t: LoanType | "") => t === "flip" || t === "rehab_rental" || t === "bridge" || t === "construction";

/** Step 2. "investment" is the business-purpose certification; "owner" is still saved (the portal tags it). */
export const OCCUPANCIES = ["investment", "owner"] as const;
export type Occupancy = (typeof OCCUPANCIES)[number];

/** Screens in order. Step numbers sent to the server are 1-based positions in this list. */
export const SCREENS = ["contact", "occupancy", "loanType", "purpose", "propertyType", "loanRange", "credit", "experience", "zip"] as const;
export type Screen = (typeof SCREENS)[number];
export const FINAL_STEP = SCREENS.length; // 9: zip
export const stepOf = (s: Screen) => SCREENS.indexOf(s) + 1;
export const screensFor = (t: LoanType | "") => SCREENS.filter((s) => s !== "experience" || isProject(t));

/** Stored as answers.formVersion, so the portal can tell v3 rows from v2's different step numbers. */
export const FORM_VERSION = 3;

// Consent wording is versioned and stored with each lead. Change a text → bump its version.
// Oct 23: share + call/text consent moved to step 1; the occupancy wording changed.
export const BUSINESS_PURPOSE_VERSION = "occupancy-2026-10-23";
export const SHARE_CONSENT_VERSION = "terms-2026-10-23";
export const TCPA_CONSENT_VERSION = "tcpa-2026-10-23";

export type Answers = {
  occupancy: Occupancy | "";
  loanType: LoanType | "";
  purpose: Purpose | "";
  propertyType: string;
  loanRange: string;
  credit: string;
  experience: string;
  zip: string;
  first: string;
  last: string;
  phone: string;
  email: string; // optional
  tcpa: boolean;
};

export const EMPTY_ANSWERS: Answers = {
  occupancy: "",
  loanType: "",
  purpose: "",
  propertyType: "",
  loanRange: "",
  credit: "",
  experience: "",
  zip: "",
  first: "",
  last: "",
  phone: "",
  email: "",
  tcpa: false,
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const oneOf = (list: readonly { id: string }[] | readonly string[], v: string) =>
  (list as readonly (string | { id: string })[]).some((x) => (typeof x === "string" ? x : x.id) === v);

/** Errors for one screen, keyed by field. Empty object = valid. */
export function validateScreen(screen: Screen, a: Answers): Record<string, string> {
  const e: Record<string, string> = {};
  switch (screen) {
    case "contact":
      if (!a.first.trim()) e.first = "Required.";
      if (!a.last.trim()) e.last = "Required.";
      if (a.phone.replace(/\D/g, "").length !== 10) e.phone = "Enter a 10-digit US phone number.";
      if (a.email.trim() && !EMAIL_RE.test(a.email.trim())) e.email = "Check the email — or leave it blank.";
      if (!a.tcpa) e.tcpa = "Please check the box so we can call you about your loan.";
      break;
    case "occupancy":
      if (!oneOf(OCCUPANCIES, a.occupancy)) e.occupancy = "Choose one.";
      break;
    case "loanType":
      if (!oneOf(LOAN_TYPES, a.loanType)) e.loanType = "Choose what you're financing.";
      break;
    case "purpose":
      if (!purposesFor(a.loanType).some((p) => p.id === a.purpose)) e.purpose = "Choose one.";
      break;
    case "propertyType":
      if (!propertyTypesFor(a.loanType).some((p) => p.id === a.propertyType)) e.propertyType = "Choose one.";
      break;
    case "loanRange":
      if (!oneOf(LOAN_RANGES, a.loanRange)) e.loanRange = "Choose a range.";
      break;
    case "credit":
      if (!oneOf(CREDIT, a.credit)) e.credit = "Choose a range — an estimate is fine.";
      break;
    case "experience":
      if (isProject(a.loanType) && !oneOf(EXPERIENCE, a.experience)) e.experience = "Choose one.";
      break;
    case "zip":
      if (!/^\d{5}$/.test(a.zip)) e.zip = "Enter the property's 5-digit ZIP code.";
      break;
  }
  return e;
}

/** Errors for every screen up to and including `step` (1-based), skipping screens that don't apply. */
export function validateUpTo(step: number, a: Answers): { screen: Screen; errors: Record<string, string> } | null {
  for (const s of screensFor(a.loanType)) {
    if (stepOf(s) > step) break;
    const errors = validateScreen(s, a);
    if (Object.keys(errors).length) return { screen: s, errors };
  }
  return null;
}

/** First digit-ranges of ZIP codes by state, for routing leads. */
const ZIP_STATES: [number, number, string][] = [
  [350, 369, "AL"], [995, 999, "AK"], [850, 865, "AZ"], [716, 729, "AR"], [900, 961, "CA"], [800, 816, "CO"], [60, 69, "CT"], [197, 199, "DE"],
  [200, 205, "DC"], [320, 349, "FL"], [300, 319, "GA"], [398, 399, "GA"], [967, 968, "HI"], [832, 838, "ID"], [600, 629, "IL"], [460, 479, "IN"],
  [500, 528, "IA"], [660, 679, "KS"], [400, 427, "KY"], [700, 714, "LA"], [39, 49, "ME"], [206, 219, "MD"], [10, 27, "MA"], [480, 499, "MI"],
  [550, 567, "MN"], [386, 397, "MS"], [630, 658, "MO"], [590, 599, "MT"], [680, 693, "NE"], [889, 898, "NV"], [30, 38, "NH"], [70, 89, "NJ"],
  [870, 884, "NM"], [100, 149, "NY"], [270, 289, "NC"], [580, 588, "ND"], [430, 459, "OH"], [730, 749, "OK"], [970, 979, "OR"], [150, 196, "PA"],
  [28, 29, "RI"], [290, 299, "SC"], [570, 577, "SD"], [370, 385, "TN"], [750, 799, "TX"], [885, 885, "TX"], [840, 847, "UT"], [50, 59, "VT"],
  [220, 246, "VA"], [980, 994, "WA"], [247, 268, "WV"], [530, 549, "WI"], [820, 831, "WY"], [6, 9, "PR"],
];
export function stateForZip(zip: string): string | null {
  if (!/^\d{5}$/.test(zip)) return null;
  const p = Number(zip.slice(0, 3));
  return ZIP_STATES.find(([lo, hi]) => p >= lo && p <= hi)?.[2] ?? null;
}
