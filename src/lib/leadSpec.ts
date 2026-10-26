// Fund Your Deal's funding request: lead form v3. Roland's Oct 23 rule is
// contact details before any qualifying question. Every screen after the
// contact one is a single tap. The browser form and /api/leads both import
// this file, so a rule here holds on each side. Ids, values and step numbers
// are fixed by the shared admin portal (docs/lead-form.md): reword labels
// freely, but never rename a value.
//
//   1 contact + call/text consent; pressing "Fund My Deal" accepts the terms. The lead starts here.
//   2 occupancy, investment | owner. An owner-occupant still goes through;
//     the portal marks the row disqualified.
//   3 loan type · 4 purpose · 5 property type · 6 amount · 7 credit ·
//   8 experience (project loans only) · 9 property ZIP → completed

/** Written to gf_leads.site, answers.site and the site column of the inbox tables; the portal's site switcher filters on it. */
export const SITE_KEY = "fundyourdeal";

export type LoanType = "dscr" | "str" | "flip" | "rehab_rental" | "bridge" | "construction" | "portfolio";

// Rental hints say what DSCR means in plain words: the rent has to cover the payment.
export const LOAN_TYPES: { id: LoanType; label: string; hint: string }[] = [
  { id: "flip", label: "Fix and flip", hint: "Buy it, renovate it, sell it" },
  { id: "bridge", label: "Bridge loan", hint: "Short-term · close on time" },
  { id: "rehab_rental", label: "BRRRR deal", hint: "Rehab, rent, refinance out" },
  { id: "construction", label: "Ground-up build", hint: "New construction · draws" },
  { id: "dscr", label: "Long-term rental", hint: "DSCR · rent covers the payment" },
  { id: "str", label: "Airbnb or vacation rental", hint: "DSCR · bookings cover the payment" },
  { id: "portfolio", label: "A group of rentals", hint: "One loan · rents cover the payments" },
];

export const PURPOSES = [
  { id: "purchase", label: "Buying the property" },
  { id: "refinance", label: "Refinancing one I own" },
  { id: "cashout", label: "Cash-out refi: pull equity out" },
] as const;
export type Purpose = (typeof PURPOSES)[number]["id"];

/** Project loans (flip, BRRRR, build) buy or refinance; taking cash out is a rental-loan option. */
export const purposesFor = (t: LoanType | "") => (t === "flip" || t === "construction" || t === "rehab_rental" ? PURPOSES.filter((p) => p.id !== "cashout") : PURPOSES);

export const PROPERTY_TYPES = [
  { id: "sfr", label: "Single-family house" },
  { id: "2_4", label: "2 to 4 units" },
  { id: "condo", label: "Condo or townhouse" },
  { id: "mf5", label: "5 or more units" },
  { id: "land", label: "Vacant land or a lot" },
] as const;
export const propertyTypesFor = (t: LoanType | "") => (t === "construction" ? PROPERTY_TYPES.filter((p) => p.id !== "condo") : PROPERTY_TYPES.filter((p) => p.id !== "land"));

// Broad bands, so the amount is a tap rather than a typed figure.
export const LOAN_RANGES = [
  { id: "lt150", label: "Under $150K", min: 0, max: 150_000 },
  { id: "150_300", label: "$150K to $300K", min: 150_000, max: 300_000 },
  { id: "300_500", label: "$300K to $500K", min: 300_000, max: 500_000 },
  { id: "500_1m", label: "$500K to $1M", min: 500_000, max: 1_000_000 },
  { id: "1m_plus", label: "$1M or more", min: 1_000_000, max: null },
] as const;
// These strings are the stored values (gf_leads.credit_band), so they stay exactly as they are.
export const CREDIT = ["Under 620", "620–675", "675–720", "720+"] as const;
export const EXPERIENCE = [
  { id: "0", label: "This is my first deal" },
  { id: "1_3", label: "1 to 3 deals" },
  { id: "4_plus", label: "4 deals or more" },
] as const;

/** Only project loans (flip, BRRRR, bridge, build) ask about track record; rental loans skip the screen. */
export const isProject = (t: LoanType | "") => t === "flip" || t === "rehab_rental" || t === "bridge" || t === "construction";

/** Step 2 answers. Picking "investment" is the business-purpose certification; an "owner" answer is kept and the portal flags it. */
export const OCCUPANCIES = ["investment", "owner"] as const;
export type Occupancy = (typeof OCCUPANCIES)[number];

/** Screen order. The step number sent to the server is a screen's 1-based place in this list. */
export const SCREENS = ["contact", "occupancy", "loanType", "purpose", "propertyType", "loanRange", "credit", "experience", "zip"] as const;
export type Screen = (typeof SCREENS)[number];
export const FINAL_STEP = SCREENS.length; // 9: zip
export const stepOf = (s: Screen) => SCREENS.indexOf(s) + 1;
export const screensFor = (t: LoanType | "") => SCREENS.filter((s) => s !== "experience" || isProject(t));

/** Saved as answers.formVersion; v2 rows numbered their steps differently, and the portal reads this to tell them apart. */
export const FORM_VERSION = 3;

// Each lead stores the consent wording it saw plus a version tag. Edit a text in consent.ts, bump its tag here.
// Oct 26: Fund Your Deal's own wording for all three texts.
export const BUSINESS_PURPOSE_VERSION = "fyd-occupancy-2026-10-26";
export const SHARE_CONSENT_VERSION = "fyd-terms-2026-10-26";
export const TCPA_CONSENT_VERSION = "fyd-tcpa-2026-10-26";

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

/** Checks a single screen. Returns field → message; nothing returned means the screen passes. */
export function validateScreen(screen: Screen, a: Answers): Record<string, string> {
  const e: Record<string, string> = {};
  switch (screen) {
    case "contact":
      if (!a.first.trim()) e.first = "Add your first name.";
      if (!a.last.trim()) e.last = "Add your last name.";
      if (a.phone.replace(/\D/g, "").length !== 10) e.phone = "Use a 10-digit US number, area code first.";
      if (a.email.trim() && !EMAIL_RE.test(a.email.trim())) e.email = "That email looks off. Fix it, or clear the field.";
      if (!a.tcpa) e.tcpa = "Tick the box so your loan specialist can call or text you about this deal.";
      break;
    case "occupancy":
      if (!oneOf(OCCUPANCIES, a.occupancy)) e.occupancy = "Pick yes or no.";
      break;
    case "loanType":
      if (!oneOf(LOAN_TYPES, a.loanType)) e.loanType = "Pick the kind of deal.";
      break;
    case "purpose":
      if (!purposesFor(a.loanType).some((p) => p.id === a.purpose)) e.purpose = "Pick an answer to keep going.";
      break;
    case "propertyType":
      if (!propertyTypesFor(a.loanType).some((p) => p.id === a.propertyType)) e.propertyType = "Pick the property type.";
      break;
    case "loanRange":
      if (!oneOf(LOAN_RANGES, a.loanRange)) e.loanRange = "Pick the closest amount.";
      break;
    case "credit":
      if (!oneOf(CREDIT, a.credit)) e.credit = "Pick a band. A rough guess is fine.";
      break;
    case "experience":
      if (isProject(a.loanType) && !oneOf(EXPERIENCE, a.experience)) e.experience = "Pick an answer to keep going.";
      break;
    case "zip":
      if (!/^\d{5}$/.test(a.zip)) e.zip = "Type the 5-digit ZIP where the property sits.";
      break;
  }
  return e;
}

/** Runs every screen from step 1 through `step` (1-based) and stops at the first that fails. Screens this loan type skips aren't checked. */
export function validateUpTo(step: number, a: Answers): { screen: Screen; errors: Record<string, string> } | null {
  for (const s of screensFor(a.loanType)) {
    if (stepOf(s) > step) break;
    const errors = validateScreen(s, a);
    if (Object.keys(errors).length) return { screen: s, errors };
  }
  return null;
}

/** State for each band of 3-digit ZIP prefixes; the server fills property_state from it. */
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
