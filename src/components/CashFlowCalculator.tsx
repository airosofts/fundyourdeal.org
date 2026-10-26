"use client";

import { useState } from "react";
import { num, pctFmt, rentalDeal, usd } from "@/lib/finance";
import { Breakdown, CalcCta, CalcGrid, Group, InputsCard, Num, ResultCard, Segmented, Stats } from "./calc/parts";

export function CashFlowCalculator() {
  const [v, setV] = useState({
    price: "320000",
    downPct: "25",
    closingPct: "3",
    rate: "7.25",
    rent: "2600",
    otherIncome: "0",
    vacancyPct: "5",
    taxes: "4200",
    insurance: "1800",
    hoa: "0",
    mgmtPct: "8",
    upkeepPct: "5",
    capexPct: "5",
  });
  const [term, setTerm] = useState<30 | 40>(30);
  const on = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) => setV((x) => ({ ...x, [k]: e.target.value }));
  const d = rentalDeal({
    price: num(v.price),
    downPct: Math.min(num(v.downPct), 100),
    closingPct: num(v.closingPct),
    rate: num(v.rate),
    term,
    rent: num(v.rent),
    otherIncome: num(v.otherIncome),
    vacancyPct: num(v.vacancyPct),
    taxes: num(v.taxes),
    insurance: num(v.insurance),
    hoa: num(v.hoa),
    mgmtPct: num(v.mgmtPct),
    upkeepPct: num(v.upkeepPct),
    capexPct: num(v.capexPct),
  });
  const badge = d.cashFlow <= 0 ? { label: "Negative cash flow", tone: "low" as const } : d.coc >= 0.08 ? { label: "Strong cash-on-cash", tone: "strong" as const } : { label: "Positive, modest return", tone: "ok" as const };

  return (
    <CalcGrid>
      <InputsCard label="Rental cash flow inputs">
        <Group legend="Purchase & loan">
          <div className="grid grid-cols-2 gap-3">
            <Num id="price" label="Purchase price" prefix="$" value={v.price} onChange={on("price")} />
            <Num id="downPct" label="Down payment" suffix="%" value={v.downPct} onChange={on("downPct")} />
            <Num id="rate" label="Interest rate" suffix="%" step="0.125" value={v.rate} onChange={on("rate")} />
            <Num id="closingPct" label="Closing costs" suffix="%" value={v.closingPct} onChange={on("closingPct")} />
          </div>
          <Segmented label="Term" value={term} options={[{ v: 30, l: "30 yr" }, { v: 40, l: "40 yr" }]} onChange={(x) => setTerm(x as 30 | 40)} mono />
        </Group>
        <Group legend="Income">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="rent" label="Monthly rent" prefix="$" value={v.rent} onChange={on("rent")} />
            <Num id="otherIncome" label="Other income / mo" prefix="$" value={v.otherIncome} onChange={on("otherIncome")} />
            <Num id="vacancyPct" label="Vacancy" suffix="%" value={v.vacancyPct} onChange={on("vacancyPct")} />
          </div>
        </Group>
        <Group legend="Expenses">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="taxes" label="Taxes / yr" prefix="$" value={v.taxes} onChange={on("taxes")} />
            <Num id="insurance" label="Insurance / yr" prefix="$" value={v.insurance} onChange={on("insurance")} />
            <Num id="hoa" label="HOA / mo" prefix="$" value={v.hoa} onChange={on("hoa")} />
            <Num id="mgmtPct" label="Management" suffix="%" value={v.mgmtPct} onChange={on("mgmtPct")} />
            <Num id="upkeepPct" label="Repairs" suffix="%" value={v.upkeepPct} onChange={on("upkeepPct")} />
            <Num id="capexPct" label="Capex reserve" suffix="%" value={v.capexPct} onChange={on("capexPct")} />
          </div>
        </Group>
      </InputsCard>

      <div className="flex flex-col gap-4">
        <ResultCard eyebrow="MONTHLY CASH FLOW" value={usd(d.cashFlow)} badge={badge}>
          <Stats
            items={[
              ["Cash-on-cash", pctFmt(d.coc)],
              ["Cap rate", pctFmt(d.capRate)],
              ["DSCR (lender view)", d.dscrLender.toFixed(2)],
              ["Cash invested", usd(d.cashInvested)],
            ]}
          />
        </ResultCard>
        <Breakdown
          title="MONTHLY"
          rows={[
            ["Gross income", usd(d.gross)],
            ["Vacancy", usd(-d.vacancy)],
            ["Operating expenses", usd(-d.opex)],
            ["Net operating income", usd(d.noi)],
            ["Loan payment (P&I)", usd(-d.pi)],
          ]}
          total={["Cash flow", usd(d.cashFlow)]}
        />
        <CalcCta href="/get-funding?loan=dscr">Get rental property funding</CalcCta>
      </div>
    </CalcGrid>
  );
}
