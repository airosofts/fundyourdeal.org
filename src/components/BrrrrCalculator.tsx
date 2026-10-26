"use client";

import { useState } from "react";
import { brrrrDeal, dscrVerdict, num, pctFmt, usd } from "@/lib/finance";
import { Scale } from "./DscrCalculator";
import { Breakdown, CalcCta, CalcGrid, Group, InputsCard, Num, ResultCard, Stats } from "./calc/parts";

// Phase 1: short-term rehab loan. Phase 2: DSCR cash-out refinance on the
// after-repair value (typically ~75% of ARV, Oct 2026).
export function BrrrrCalculator() {
  const [v, setV] = useState({
    price: "180000",
    rehab: "45000",
    buyClosingPct: "2",
    months: "6",
    ltcPct: "90",
    stRate: "10.5",
    stPoints: "2",
    arv: "300000",
    refiLtvPct: "75",
    refiRate: "7.25",
    refiCostPct: "3",
    rent: "2400",
    taxes: "3300",
    insurance: "1500",
    hoa: "0",
    vacancyPct: "5",
    upkeepPct: "8",
    mgmtPct: "8",
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
      <InputsCard label="BRRRR inputs">
        <Group legend="Buy & rehab">
          <div className="grid grid-cols-2 gap-3">
            <Num id="price" label="Purchase price" prefix="$" value={v.price} onChange={on("price")} />
            <Num id="rehab" label="Rehab budget" prefix="$" value={v.rehab} onChange={on("rehab")} />
            <Num id="ltcPct" label="Rehab loan (% of cost)" suffix="%" value={v.ltcPct} onChange={on("ltcPct")} />
            <Num id="stRate" label="Rehab loan rate" suffix="%" step="0.125" value={v.stRate} onChange={on("stRate")} />
            <Num id="stPoints" label="Points" suffix="%" step="0.25" value={v.stPoints} onChange={on("stPoints")} />
            <Num id="months" label="Months until refinance" value={v.months} onChange={on("months")} />
            <Num id="buyClosingPct" label="Buying costs" suffix="%" value={v.buyClosingPct} onChange={on("buyClosingPct")} />
          </div>
        </Group>
        <Group legend="Refinance">
          <div className="grid grid-cols-2 gap-3">
            <Num id="arv" label="After-repair value" prefix="$" value={v.arv} onChange={on("arv")} />
            <Num id="refiLtvPct" label="Cash-out LTV" suffix="%" value={v.refiLtvPct} onChange={on("refiLtvPct")} />
            <Num id="refiRate" label="DSCR loan rate" suffix="%" step="0.125" value={v.refiRate} onChange={on("refiRate")} />
            <Num id="refiCostPct" label="Refinance costs" suffix="%" value={v.refiCostPct} onChange={on("refiCostPct")} />
          </div>
        </Group>
        <Group legend="Rent">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="rent" label="Monthly rent" prefix="$" value={v.rent} onChange={on("rent")} />
            <Num id="taxes" label="Taxes / yr" prefix="$" value={v.taxes} onChange={on("taxes")} />
            <Num id="insurance" label="Insurance / yr" prefix="$" value={v.insurance} onChange={on("insurance")} />
            <Num id="hoa" label="HOA / mo" prefix="$" value={v.hoa} onChange={on("hoa")} />
            <Num id="vacancyPct" label="Vacancy" suffix="%" value={v.vacancyPct} onChange={on("vacancyPct")} />
            <Num id="upkeepPct" label="Repairs & capex" suffix="%" value={v.upkeepPct} onChange={on("upkeepPct")} />
            <Num id="mgmtPct" label="Management" suffix="%" value={v.mgmtPct} onChange={on("mgmtPct")} />
          </div>
        </Group>
      </InputsCard>

      <div className="flex flex-col gap-4">
        <ResultCard
          eyebrow={allBack ? "CASH PULLED OUT BEYOND YOUR INVESTMENT" : "CASH LEFT IN THE DEAL"}
          value={usd(Math.abs(d.cashLeft))}
          badge={allBack ? { label: "Full BRRRR — all cash back", tone: "strong" } : d.cashLeft < d.cashIn * 0.25 ? { label: "Most cash recovered", tone: "ok" } : { label: "Much cash stays in", tone: "low" }}
        >
          <Stats
            items={[
              ["Cash in at purchase", usd(d.cashIn)],
              ["Cash back at refinance", usd(d.cashBack)],
              ["Cash flow / mo", usd(d.cashFlow)],
              ["Cash-on-cash", d.coc === null ? "∞" : pctFmt(d.coc)],
            ]}
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between text-sm text-mist">
              <span>DSCR after refinance</span>
              <span className="font-mono text-lg text-white">{d.dscr.toFixed(2)}</span>
            </div>
            <Scale dscr={d.dscr} dark />
            <p className="text-sm text-mist">{dscrVerdict(d.dscr).label}</p>
          </div>
        </ResultCard>
        <Breakdown
          title="THE REFINANCE"
          rows={[
            ["New DSCR loan", usd(d.refiLoan)],
            ["Pays off rehab loan", usd(-d.shortLoan)],
            ["Refinance costs", usd(-d.refiCosts)],
          ]}
          total={["Cash back to you", usd(d.cashBack)]}
        />
        <CalcCta href="/get-funding?loan=brrrr">Get BRRRR funding</CalcCta>
      </div>
    </CalcGrid>
  );
}
