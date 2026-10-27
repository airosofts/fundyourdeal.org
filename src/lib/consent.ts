import type { Occupancy } from "./leadSpec";
import { SITE } from "./site";

// Word-for-word what a Fund Your Deal lead agrees to. The form shows these
// strings and /api/leads saves the same strings on the lead, each with its
// version tag from leadSpec.ts, so the screen and the record always match.
// Reword a text here and bump its tag there in the same change.
// [COUNSEL TO REVIEW BEFORE LAUNCH]

export const SUBMIT_LABEL = "Next"; // the first screen's button (Roland, Oct 28: just the fields, then Next)

/** Step 2. "No" is the business-purpose certification. A "Yes" is saved too, and the portal marks it disqualified. */
export const OCCUPANCY_QUESTION = "Will you, or anyone in your family, live in this property?";
export const OCCUPANCY_ANSWERS: Record<Occupancy, string> = {
  investment: "No — it's strictly an investment",
  owner: "Yes — it's a home for me or my family",
};
export const BUSINESS_PURPOSE_TEXT =
  `To the question “${OCCUPANCY_QUESTION}” I answered “${OCCUPANCY_ANSWERS.investment}”. ` +
  "I confirm this is an investment property: neither I nor any member of my family lives there now or will live there.";

/** Step 1, required checkbox: consent to calls and texts. */
export const TCPA_CONSENT_TEXT =
  `I agree that ${SITE.name} and its licensed lending partner may call and text me at the phone number I entered above about my request for a loan. ` +
  "Those calls and texts may use automated technology or prerecorded messages. My agreement is not a condition of any loan. " +
  "Message and data rates may apply. I can reply STOP at any time to opt out.";

/** Step 1, the line under the submit button; pressing the button is the agreement. The form links the two policy names. */
export const SHARE_CONSENT_TEXT = `By clicking “${SUBMIT_LABEL}”, I agree to ${SITE.name}'s Terms of Use and Privacy Policy.`;
