"use client";

import { useState } from "react";
import { brrrrDeal, num, pctFmt, usd } from "@/lib/finance";
import { Scale, coverageCall } from "./DscrCalculator";
import { Breakdown, CalcCta, CalcGrid, Group, InputsCard, Num, ResultCard, Stats } from "./calc/parts";

// Phase 1: short-term rehab loan. Phase 2: DSCR cash-out refinance on the
// after-repair value (typically ~75% of ARV, Oct 2026).
export function BrrrrCalculator() {
  const [v, setV] = useState({
    price: "172000",
    rehab: "58000",
    buyClosingPct: "2",
    months: "6",
    ltcPct: "90",
    stRate: "10.5",
    stPoints: "2",
    arv: "318000",
    refiLtvPct: "75",
    refiRate: "7.5",
    refiCostPct: "2.5",
    rent: "2950",
    taxes: "3480",
    insurance: "1980",
    hoa: "0",
    vacancyPct: "6",
    upkeepPct: "8",
    mgmtPct: "7",
  });
  const on = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) => setV((x) => ({ ...x, [k]: e.target.value }));
  const d = brrrrDeal({
    price: num(v.price),
    rehab: num(v.rehab),
    buyClosingPct: num(v.buyClosingPct),
    months: Math.max(1, num(v.months)),
    ltcPct: Math.min(num(v.ltcPct), 100),
    stRate: num(v.stRate),
    stPoints: num(v.stPoints),
    arv: num(v.arv),
    refiLtvPct: Math.min(num(v.refiLtvPct), 100),
    refiRate: num(v.refiRate),
    refiCostPct: num(v.refiCostPct),
    rent: num(v.rent),
    taxes: num(v.taxes),
    insurance: num(v.insurance),
    hoa: num(v.hoa),
    vacancyPct: num(v.vacancyPct),
    upkeepPct: num(v.upkeepPct),
    mgmtPct: num(v.mgmtPct),
  });
  const allBack = d.cashLeft <= 0;

  return (
    <CalcGrid>
      <InputsCard label="Your BRRRR deal's numbers">
        <Group legend="1. Buy and rehab">
          <div className="grid grid-cols-2 gap-3">
            <Num id="price" label="Contract price" prefix="$" value={v.price} onChange={on("price")} />
            <Num id="rehab" label="Rehab cost" prefix="$" value={v.rehab} onChange={on("rehab")} />
            <Num id="ltcPct" label="Loan-to-cost" suffix="%" value={v.ltcPct} onChange={on("ltcPct")} />
            <Num id="stRate" label="Rate, rehab loan" suffix="%" step="0.125" value={v.stRate} onChange={on("stRate")} />
            <Num id="stPoints" label="Points, rehab loan" suffix="%" step="0.25" value={v.stPoints} onChange={on("stPoints")} />
            <Num id="months" label="Months on the rehab loan" value={v.months} onChange={on("months")} />
            <Num id="buyClosingPct" label="Closing to buy" suffix="%" value={v.buyClosingPct} onChange={on("buyClosingPct")} />
          </div>
        </Group>
        <Group legend="2. Refinance out">
          <div className="grid grid-cols-2 gap-3">
            <Num id="arv" label="Value after rehab (ARV)" prefix="$" value={v.arv} onChange={on("arv")} />
            <Num id="refiLtvPct" label="Refinance LTV" suffix="%" value={v.refiLtvPct} onChange={on("refiLtvPct")} />
            <Num id="refiRate" label="Rental loan rate" suffix="%" step="0.125" value={v.refiRate} onChange={on("refiRate")} />
            <Num id="refiCostPct" label="Cost to refinance" suffix="%" value={v.refiCostPct} onChange={on("refiCostPct")} />
          </div>
        </Group>
        <Group legend="3. Keep it rented">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="rent" label="Rent / mo" prefix="$" value={v.rent} onChange={on("rent")} />
            <Num id="taxes" label="Property tax / yr" prefix="$" value={v.taxes} onChange={on("taxes")} />
            <Num id="insurance" label="Landlord insurance / yr" prefix="$" value={v.insurance} onChange={on("insurance")} />
            <Num id="hoa" label="HOA dues / mo" prefix="$" value={v.hoa} onChange={on("hoa")} />
            <Num id="vacancyPct" label="Vacancy reserve" suffix="%" value={v.vacancyPct} onChange={on("vacancyPct")} />
            <Num id="upkeepPct" label="Repairs + capex" suffix="%" value={v.upkeepPct} onChange={on("upkeepPct")} />
            <Num id="mgmtPct" label="Property manager" suffix="%" value={v.mgmtPct} onChange={on("mgmtPct")} />
          </div>
          <p className="font-mono text-xs leading-relaxed text-muted">
            Loan-to-cost applies to the price and the rehab alike. Cost to refinance is a share of the new loan. Vacancy, repairs and the manager are each a share of the rent.
          </p>
        </Group>
      </InputsCard>

      <div className="flex flex-col gap-4">
        <ResultCard
          eyebrow={allBack ? "CASH OUT ABOVE EVERYTHING YOU PUT IN" : "YOUR CASH STILL IN AFTER THE REFINANCE"}
          value={usd(Math.abs(d.cashLeft))}
          badge={allBack ? { label: "Every dollar back out", tone: "strong" } : d.cashLeft < d.cashIn * 0.25 ? { label: "Under 25% of your cash stays in", tone: "ok" } : { label: "25%+ of your cash stays in", tone: "low" }}
        >
          <Stats
            items={[
              ["Your cash, buy to refinance", usd(d.cashIn)],
              ["Returned by the refinance", usd(d.cashBack)],
              ["Cash flow each month", usd(d.cashFlow)],
              ["Cash-on-cash return", d.coc === null ? "∞" : pctFmt(d.coc)],
            ]}
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-3 text-sm text-mist">
              <span>Debt service coverage (DSCR) on the new loan</span>
              <span className="font-mono text-lg text-white">{d.dscr.toFixed(2)}</span>
            </div>
            <Scale dscr={d.dscr} dark />
            <p className="text-sm leading-relaxed text-mist">Rent ÷ the new loan&apos;s full monthly payment, taxes, insurance and HOA included. {coverageCall(d.dscr).note}</p>
          </div>
        </ResultCard>
        <Breakdown
          title="WHAT THE REFINANCE PAYS OUT"
          rows={[
            ["New rental loan", usd(d.refiLoan)],
            ["Rehab loan payoff", usd(-d.shortLoan)],
            ["Cost to refinance", usd(-d.refiCosts)],
          ]}
          total={["Net to you at closing", usd(d.cashBack)]}
        />
        <CalcCta href="/get-funding?loan=brrrr">Get my BRRRR funded</CalcCta>
      </div>
    </CalcGrid>
  );
}
