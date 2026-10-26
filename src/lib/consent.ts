import type { Occupancy } from "./leadSpec";
import { SITE } from "./site";

// The exact wording a lead agrees to. The form renders these strings and the
// server stores them with the lead (with the version from leadSpec.ts), so
// they can never drift apart. Changing a text means bumping its version.
// [COUNSEL TO REVIEW BEFORE LAUNCH]

export const SUBMIT_LABEL = "Fund My Deal";

/** Step 2. Answering "No" is the business-purpose certification; "Yes" is still saved and tagged in the portal. */
export const OCCUPANCY_QUESTION = "Will you or a family member live in the property?";
export const OCCUPANCY_ANSWERS: Record<Occupancy, string> = {
  investment: "No — it's an investment property",
  owner: "Yes — I live there or will",
};
export const BUSINESS_PURPOSE_TEXT = `Asked “${OCCUPANCY_QUESTION}”, I answered “${OCCUPANCY_ANSWERS.investment}”: neither I nor a family member lives in the property or will live in it.`;

/** Step 1, required: phone and text consent. */
export const TCPA_CONSENT_TEXT =
  `I agree to be contacted by ${SITE.name} and its licensed lending partner by phone and text at the number above about my loan request, ` +
  "including calls and texts made with automated technology or prerecorded messages. Consent isn't a condition of any loan. " +
  "Message and data rates may apply. Reply STOP to opt out.";

/** Step 1, under the "Get Funding" button; agreeing is clicking it. */
export const SHARE_CONSENT_TEXT = `By clicking “${SUBMIT_LABEL}”, I agree to the Terms of Use and Privacy Policy.`;
