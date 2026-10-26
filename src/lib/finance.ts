// Loan maths shared by the calculators. Lender-style DSCR: monthly rent ÷ PITIA.

export const num = (v: string | number) => {
  const n = typeof v === "number" ? v : parseFloat(String(v).replace(/[^0-9.\-]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
};

export const usd = (n: number) => (n < 0 ? "−$" : "$") + Math.round(Math.abs(n)).toLocaleString("en-US");

/** Monthly principal + interest (or interest only). rate = annual %, termYears. */
export function monthlyPI(loan: number, rate: number, termYears: number, interestOnly = false) {
  const r = rate / 100 / 12;
  const n = termYears * 12;
  if (loan <= 0) return 0;
  if (interestOnly) return loan * r;
  if (r === 0) return loan / n;
  return (loan * r) / (1 - Math.pow(1 + r, -n));
}

/** Largest loan whose PITIA keeps DSCR at `target` for the given rent and fixed costs. */
export function maxLoanForDscr(rent: number, fixedMonthly: number, rate: number, termYears: number, interestOnly: boolean, target: number) {
  const allowedPI = rent / target - fixedMonthly;
  if (allowedPI <= 0) return 0;
  const r = rate / 100 / 12;
  const n = termYears * 12;
  if (interestOnly) return r > 0 ? allowedPI / r : 0;
  if (r === 0) return allowedPI * n;
  return (allowedPI * (1 - Math.pow(1 + r, -n))) / r;
}

/** Balance-weighted average rate across loans. */
export function blendedRate(loans: { balance: number; rate: number }[]) {
  const total = loans.reduce((s, l) => s + l.balance, 0);
  if (total <= 0) return 0;
  return loans.reduce((s, l) => s + l.balance * l.rate, 0) / total;
}

export function dscrVerdict(dscr: number) {
  if (dscr >= 1.25) return { label: "Strong — clears most lenders’ minimums", tone: "strong" as const };
  if (dscr >= 1.0) return { label: "Meets many programs", tone: "ok" as const };
  return { label: "Below most lenders’ minimum", tone: "low" as const };
}

const pct = (n: number) => n / 100;

/** Fix and flip: loan sizing (purchase %, rehab %, ARV cap), carrying costs and profit. */
export function flipDeal(i: {
  price: number; rehab: number; arv: number; months: number;
  purchasePct: number; rehabPct: number; arvCapPct: number;
  rate: number; points: number; buyClosingPct: number; sellCostPct: number; holdingMonthly: number;
}) {
  const wantedPurchase = i.price * pct(i.purchasePct);
  const wantedRehab = i.rehab * pct(i.rehabPct);
  const cap = i.arv * pct(i.arvCapPct);
  const loan = Math.max(0, Math.min(wantedPurchase + wantedRehab, cap || wantedPurchase + wantedRehab));
  const purchaseLoan = Math.min(wantedPurchase, loan);
  const rehabLoan = loan - purchaseLoan;
  // Rehab money is drawn as work is done: interest on about half of it on average.
  const interest = (purchaseLoan + rehabLoan * 0.5) * pct(i.rate) / 12 * i.months;
  const pointsCost = loan * pct(i.points);
  const buyClosing = i.price * pct(i.buyClosingPct);
  const holding = i.holdingMonthly * i.months;
  const sellCosts = i.arv * pct(i.sellCostPct);
  const totalCost = i.price + i.rehab + buyClosing + pointsCost + interest + holding + sellCosts;
  const profit = i.arv - totalCost;
  const cashNeeded = Math.max(0, i.price + i.rehab + buyClosing + pointsCost + interest + holding - loan);
  const roi = cashNeeded > 0 ? profit / cashNeeded : 0;
  return {
    loan, purchaseLoan, rehabLoan, interest, pointsCost, buyClosing, holding, sellCosts, totalCost, profit, cashNeeded, roi,
    annualRoi: i.months > 0 ? roi * (12 / i.months) : 0,
    capped: cap > 0 && wantedPurchase + wantedRehab > cap,
    maxOffer70: i.arv * 0.7 - i.rehab,
  };
}

/** BRRRR: short-term rehab loan, then a DSCR cash-out refinance on the after-repair value. */
export function brrrrDeal(i: {
  price: number; rehab: number; buyClosingPct: number; months: number;
  ltcPct: number; stRate: number; stPoints: number;
  arv: number; refiLtvPct: number; refiRate: number; refiCostPct: number;
  rent: number; taxes: number; insurance: number; hoa: number; vacancyPct: number; upkeepPct: number; mgmtPct: number;
}) {
  const purchaseLoan = i.price * pct(i.ltcPct);
  const rehabLoan = i.rehab * pct(i.ltcPct);
  const shortLoan = purchaseLoan + rehabLoan;
  const stInterest = (purchaseLoan + rehabLoan * 0.5) * pct(i.stRate) / 12 * i.months;
  const stPoints = shortLoan * pct(i.stPoints);
  const buyClosing = i.price * pct(i.buyClosingPct);
  const carry = (i.taxes / 12 + i.insurance / 12 + i.hoa) * i.months;
  const cashIn = i.price + i.rehab + buyClosing + stPoints + stInterest + carry - shortLoan;
  const refiLoan = i.arv * pct(i.refiLtvPct);
  const refiCosts = refiLoan * pct(i.refiCostPct);
  const cashBack = refiLoan - shortLoan - refiCosts;
  const cashLeft = cashIn - cashBack;
  const pi = monthlyPI(refiLoan, i.refiRate, 30);
  const pitia = pi + i.taxes / 12 + i.insurance / 12 + i.hoa;
  const opex = i.rent * pct(i.vacancyPct + i.upkeepPct + i.mgmtPct);
  const cashFlow = i.rent - pitia - opex;
  return {
    shortLoan, stInterest, stPoints, buyClosing, carry, cashIn, refiLoan, refiCosts, cashBack, cashLeft, pi, pitia, opex, cashFlow,
    dscr: pitia > 0 ? i.rent / pitia : 0,
    coc: cashLeft > 0 ? (cashFlow * 12) / cashLeft : null, // null = all cash recovered
  };
}

/** Long-term rental: NOI, cap rate, cash flow, cash-on-cash and both DSCR views. */
export function rentalDeal(i: {
  price: number; downPct: number; closingPct: number; rate: number; term: number;
  rent: number; otherIncome: number; vacancyPct: number;
  taxes: number; insurance: number; hoa: number; mgmtPct: number; upkeepPct: number; capexPct: number;
}) {
  const loan = i.price * (1 - pct(i.downPct));
  const pi = monthlyPI(loan, i.rate, i.term);
  const gross = i.rent + i.otherIncome;
  const vacancy = gross * pct(i.vacancyPct);
  const egi = gross - vacancy;
  const opex = i.taxes / 12 + i.insurance / 12 + i.hoa + egi * pct(i.mgmtPct) + gross * pct(i.upkeepPct + i.capexPct);
  const noi = egi - opex;
  const cashFlow = noi - pi;
  const cashInvested = i.price * pct(i.downPct) + i.price * pct(i.closingPct);
  const pitia = pi + i.taxes / 12 + i.insurance / 12 + i.hoa;
  return {
    loan, pi, gross, vacancy, egi, opex, noi, cashFlow, cashInvested, pitia,
    capRate: i.price > 0 ? (noi * 12) / i.price : 0,
    coc: cashInvested > 0 ? (cashFlow * 12) / cashInvested : 0,
    dscrLender: pitia > 0 ? i.rent / pitia : 0,
    dscrNoi: pi > 0 ? noi / pi : 0,
  };
}

export const pctFmt = (n: number, d = 1) => `${(n * 100).toFixed(d)}%`;
