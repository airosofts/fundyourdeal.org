"use client";

import { useState } from "react";
import { flipDeal, num, pctFmt, usd } from "@/lib/finance";
import { Breakdown, CalcCta, CalcGrid, Group, InputsCard, Num, ResultCard, Stats } from "./calc/parts";

// Defaults follow typical published fix-and-flip terms (Oct 2026): 90% of
// purchase and 100% of rehab financed, capped at 75% of ARV, ~10% interest.
export function FlipCalculator() {
  const [v, setV] = useState({
    price: "250000",
    rehab: "60000",
    arv: "400000",
    months: "6",
    purchasePct: "90",
    rehabPct: "100",
    arvCapPct: "75",
    rate: "10.5",
    points: "2",
    buyClosingPct: "2",
    sellCostPct: "7",
    holding: "650",
  });
  const on = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) => setV((x) => ({ ...x, [k]: e.target.value }));

  const d = flipDeal({
    price: num(v.price),
    rehab: num(v.rehab),
    arv: num(v.arv),
    months: Math.max(1, num(v.months)),
    purchasePct: Math.min(num(v.purchasePct), 100),
    rehabPct: Math.min(num(v.rehabPct), 100),
    arvCapPct: Math.min(num(v.arvCapPct), 100),
    rate: num(v.rate),
    points: num(v.points),
    buyClosingPct: num(v.buyClosingPct),
    sellCostPct: num(v.sellCostPct),
    holdingMonthly: num(v.holding),
  });
  const tone = d.profit <= 0 ? "low" : d.roi >= 0.25 ? "strong" : "ok";
  const badge = { label: d.profit <= 0 ? "Loses money" : d.roi >= 0.25 ? "Healthy margin" : "Thin margin", tone } as const;

  return (
    <CalcGrid>
      <InputsCard label="Fix and flip inputs">
        <Group legend="The deal">
          <div className="grid grid-cols-2 gap-3">
            <Num id="price" label="Purchase price" prefix="$" value={v.price} onChange={on("price")} />
            <Num id="rehab" label="Rehab budget" prefix="$" value={v.rehab} onChange={on("rehab")} />
            <Num id="arv" label="After-repair value" prefix="$" value={v.arv} onChange={on("arv")} />
            <Num id="months" label="Months to sell" value={v.months} onChange={on("months")} />
          </div>
        </Group>
        <Group legend="The loan">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="purchasePct" label="% of purchase" suffix="%" value={v.purchasePct} onChange={on("purchasePct")} />
            <Num id="rehabPct" label="% of rehab" suffix="%" value={v.rehabPct} onChange={on("rehabPct")} />
            <Num id="arvCapPct" label="Max % of ARV" suffix="%" value={v.arvCapPct} onChange={on("arvCapPct")} />
            <Num id="rate" label="Interest rate" suffix="%" step="0.125" value={v.rate} onChange={on("rate")} />
            <Num id="points" label="Points" suffix="%" step="0.25" value={v.points} onChange={on("points")} />
          </div>
        </Group>
        <Group legend="Costs">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="buyClosingPct" label="Buying costs" suffix="%" value={v.buyClosingPct} onChange={on("buyClosingPct")} />
            <Num id="sellCostPct" label="Selling costs" suffix="%" value={v.sellCostPct} onChange={on("sellCostPct")} />
            <Num id="holding" label="Holding / mo" prefix="$" value={v.holding} onChange={on("holding")} />
          </div>
          <p className="font-mono text-xs leading-relaxed text-muted">Selling costs: agent commission plus closing, as % of ARV. Holding: taxes, insurance and utilities.</p>
        </Group>
      </InputsCard>

      <div className="flex flex-col gap-4">
        <ResultCard eyebrow="ESTIMATED PROFIT" value={usd(d.profit)} badge={badge}>
          <Stats
            items={[
              ["Return on cash", d.cashNeeded > 0 ? pctFmt(d.roi) : "—"],
              ["Annualized", d.cashNeeded > 0 ? pctFmt(d.annualRoi) : "—"],
              ["Cash you bring", usd(d.cashNeeded)],
              ["Loan amount", usd(d.loan)],
            ]}
          />
          <p className="text-sm leading-relaxed text-mist">
            70% rule: offer no more than <span className="font-mono text-white">{usd(d.maxOffer70)}</span> (70% of ARV minus rehab).
            {d.capped && " The ARV cap limits this loan — lenders won't lend the full purchase and rehab percentages."}
          </p>
        </ResultCard>
        <Breakdown
          title="WHERE THE MONEY GOES"
          rows={[
            ["Purchase price", usd(num(v.price))],
            ["Rehab", usd(num(v.rehab))],
            ["Buying costs", usd(d.buyClosing)],
            ["Points", usd(d.pointsCost)],
            ["Interest", usd(d.interest)],
            ["Holding costs", usd(d.holding)],
            ["Selling costs", usd(d.sellCosts)],
          ]}
          total={["Total cost", usd(d.totalCost)]}
        />
        <CalcCta href="/get-funding?loan=fix-and-flip">Get fix and flip funding</CalcCta>
      </div>
    </CalcGrid>
  );
}
