"use client";

import { useState } from "react";
import { flipDeal, num, pctFmt, usd } from "@/lib/finance";
import { Breakdown, CalcCta, CalcGrid, Group, InputsCard, Num, ResultCard, Stats } from "./calc/parts";

// Defaults are the worked deal on /calculators/fix-and-flip (Oct 2026 terms):
// 90% of purchase and 100% of rehab, capped at 70% of ARV, 9.99% interest.
export function FlipCalculator() {
  const [v, setV] = useState({
    price: "148000",
    rehab: "82000",
    arv: "295000",
    months: "7",
    purchasePct: "90",
    rehabPct: "100",
    arvCapPct: "70",
    rate: "9.99",
    points: "1.75",
    buyClosingPct: "2.5",
    sellCostPct: "6.5",
    holding: "540",
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
  const badge = { label: d.profit <= 0 ? "In the red as entered" : d.roi >= 0.25 ? "Works: 25%+ on your cash" : "Tight: under 25% on your cash", tone } as const;

  return (
    <CalcGrid>
      <InputsCard label="Your flip's numbers">
        <Group legend="Buy, fix and sell">
          <div className="grid grid-cols-2 gap-3">
            <Num id="price" label="Contract price" prefix="$" value={v.price} onChange={on("price")} />
            <Num id="rehab" label="Rehab cost" prefix="$" value={v.rehab} onChange={on("rehab")} />
            <Num id="arv" label="Resale value (ARV)" prefix="$" value={v.arv} onChange={on("arv")} />
            <Num id="months" label="Months to resale" value={v.months} onChange={on("months")} />
          </div>
        </Group>
        <Group legend="The rehab loan">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="purchasePct" label="Funded % of price" suffix="%" value={v.purchasePct} onChange={on("purchasePct")} />
            <Num id="rehabPct" label="Funded % of rehab" suffix="%" value={v.rehabPct} onChange={on("rehabPct")} />
            <Num id="arvCapPct" label="Cap, % of ARV" suffix="%" value={v.arvCapPct} onChange={on("arvCapPct")} />
            <Num id="rate" label="Note rate" suffix="%" step="0.125" value={v.rate} onChange={on("rate")} />
            <Num id="points" label="Lender points" suffix="%" step="0.25" value={v.points} onChange={on("points")} />
          </div>
        </Group>
        <Group legend="Closing, carry and sale">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="buyClosingPct" label="Closing to buy" suffix="%" value={v.buyClosingPct} onChange={on("buyClosingPct")} />
            <Num id="sellCostPct" label="Cost to sell" suffix="%" value={v.sellCostPct} onChange={on("sellCostPct")} />
            <Num id="holding" label="Carry / mo" prefix="$" value={v.holding} onChange={on("holding")} />
          </div>
          <p className="font-mono text-xs leading-relaxed text-muted">
            Closing to buy is a share of the contract price. Cost to sell is a share of ARV: commissions and the seller&apos;s closing costs. Carry is each month&apos;s taxes, insurance and utilities while you own it.
          </p>
        </Group>
      </InputsCard>

      <div className="flex flex-col gap-4">
        <ResultCard eyebrow="PROFIT AFTER EVERY COST" value={usd(d.profit)} badge={badge}>
          <Stats
            items={[
              ["Profit on your cash", d.cashNeeded > 0 ? pctFmt(d.roi) : "—"],
              ["Same pace, per year", d.cashNeeded > 0 ? pctFmt(d.annualRoi) : "—"],
              ["Cash out of pocket", usd(d.cashNeeded)],
              ["Lender's loan", usd(d.loan)],
            ]}
          />
          <p className="text-sm leading-relaxed text-mist">
            The 70% rule puts your ceiling offer at <span className="font-mono text-white">{usd(d.maxOffer70)}</span>: 70% of ARV, less the rehab.
            {d.capped && " Here the ARV cap is the number that decides the loan: it lends less than your price and rehab percentages ask for, and your cash covers the gap."}
          </p>
        </ResultCard>
        <Breakdown
          title="EVERY DOLLAR, BUY TO SALE"
          rows={[
            ["Contract price", usd(num(v.price))],
            ["Rehab work", usd(num(v.rehab))],
            ["Closing to buy", usd(d.buyClosing)],
            ["Lender points", usd(d.pointsCost)],
            ["Interest while you hold", usd(d.interest)],
            ["Carry", usd(d.holding)],
            ["Cost to sell", usd(d.sellCosts)],
          ]}
          total={["All-in cost", usd(d.totalCost)]}
        />
        <CalcCta href="/get-funding?loan=fix-and-flip">Fund my flip</CalcCta>
      </div>
    </CalcGrid>
  );
}
