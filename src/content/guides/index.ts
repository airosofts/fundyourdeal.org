import type { Guide } from "../types";
import bridgeLoanExitStrategies from "./bridge-loan-exit-strategies";
import brrrrMethodStepByStep from "./brrrr-method-step-by-step";
import cashNeededToFlipAHouse from "./cash-needed-to-flip-a-house";
import closingAnInvestorLoanFast from "./closing-an-investor-loan-fast";
import constructionDrawSchedule from "./construction-draw-schedule";
import howHardMoneyLoansWork from "./how-hard-money-loans-work";
import howToCalculateArv from "./how-to-calculate-arv";
import investorLoanPointsAndFees from "./investor-loan-points-and-fees";
import ltvVsLtcVsArv from "./ltv-vs-ltc-vs-arv";
import refinanceAfterRehab from "./refinance-after-rehab";
import rehabBudgetForLenders from "./rehab-budget-for-lenders";
import rentalCashFlowBeforeYouBuy from "./rental-cash-flow-before-you-buy";
import fixAndFlipLoanRates from "./fix-and-flip-loan-rates";
import gapFundingForRealEstateDeals from "./gap-funding-for-real-estate-deals";
import bridgeLoanRequirements from "./bridge-loan-requirements";
import specHomeConstructionLoans from "./spec-home-construction-loans";
import proofOfFundsForRealEstateInvestors from "./proof-of-funds-for-real-estate-investors";
import hardMoneyLoanRequirements from "./hard-money-loan-requirements";

// In the order of docs/brand.md's guide plan: flips, financing basics, BRRRR and rentals, construction.
export const GUIDES: Guide[] = [
  howToCalculateArv,
  rehabBudgetForLenders,
  cashNeededToFlipAHouse,
  hardMoneyLoanRequirements,
  fixAndFlipLoanRates,
  howHardMoneyLoansWork,
  closingAnInvestorLoanFast,
  bridgeLoanRequirements,
  bridgeLoanExitStrategies,
  brrrrMethodStepByStep,
  refinanceAfterRehab,
  rentalCashFlowBeforeYouBuy,
  constructionDrawSchedule,
  specHomeConstructionLoans,
  ltvVsLtcVsArv,
  investorLoanPointsAndFees,
  gapFundingForRealEstateDeals,
  proofOfFundsForRealEstateInvestors,
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);

/** Related guides: the ones a guide names, then others in its category. */
export function relatedGuides(g: Guide, max = 3): Guide[] {
  const named = g.related.guides.map(guideBySlug).filter((x): x is Guide => Boolean(x) && x!.slug !== g.slug);
  const sameCategory = GUIDES.filter((x) => x.category === g.category && x.slug !== g.slug && !named.includes(x));
  return [...named, ...sameCategory].slice(0, max);
}
