"use client";

import { useState } from "react";
import { num, pctFmt, rentalDeal, usd } from "@/lib/finance";
import { SITE } from "@/lib/site";
import { Breakdown, CalcCta, CalcGrid, Group, InputsCard, Num, ResultCard, Segmented, Stats } from "./calc/parts";

export function CashFlowCalculator() {
  const [v, setV] = useState({
    price: "285000",
    downPct: "25",
    closingPct: "3",
    rate: "7.75",
    rent: "3075",
    otherIncome: "60",
    vacancyPct: "7",
    taxes: "4560",
    insurance: "2640",
    hoa: "0",
    mgmtPct: "8",
    upkeepPct: "6",
    capexPct: "6",
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
  const badge = d.cashFlow <= 0 ? { label: "No cash flow as entered", tone: "low" as const } : d.coc >= 0.08 ? { label: "Pays: 8%+ cash-on-cash", tone: "strong" as const } : { label: "Pays, under 8% cash-on-cash", tone: "ok" as const };

  return (
    <CalcGrid>
      <InputsCard label="Your rental hold numbers">
        <Group legend="Buy and finance">
          <div className="grid grid-cols-2 gap-3">
            <Num id="price" label="Contract price" prefix="$" value={v.price} onChange={on("price")} />
            <Num id="downPct" label="Cash down" suffix="%" value={v.downPct} onChange={on("downPct")} />
            <Num id="rate" label="Note rate" suffix="%" step="0.125" value={v.rate} onChange={on("rate")} />
            <Num id="closingPct" label="Closing to buy" suffix="%" value={v.closingPct} onChange={on("closingPct")} />
          </div>
          <Segmented label="Loan term" value={term} options={[{ v: 30, l: "30-year" }, { v: 40, l: "40-year" }]} onChange={(x) => setTerm(x as 30 | 40)} mono />
        </Group>
        <Group legend="Money in">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="rent" label="Rent / mo" prefix="$" value={v.rent} onChange={on("rent")} />
            <Num id="otherIncome" label="Extra income / mo" prefix="$" value={v.otherIncome} onChange={on("otherIncome")} />
            <Num id="vacancyPct" label="Vacancy reserve" suffix="%" value={v.vacancyPct} onChange={on("vacancyPct")} />
          </div>
        </Group>
        <Group legend="Money out">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="taxes" label="Property tax / yr" prefix="$" value={v.taxes} onChange={on("taxes")} />
            <Num id="insurance" label="Landlord insurance / yr" prefix="$" value={v.insurance} onChange={on("insurance")} />
            <Num id="hoa" label="HOA dues / mo" prefix="$" value={v.hoa} onChange={on("hoa")} />
            <Num id="mgmtPct" label="Property manager" suffix="%" value={v.mgmtPct} onChange={on("mgmtPct")} />
            <Num id="upkeepPct" label="Repairs reserve" suffix="%" value={v.upkeepPct} onChange={on("upkeepPct")} />
            <Num id="capexPct" label="Big repairs (capex)" suffix="%" value={v.capexPct} onChange={on("capexPct")} />
          </div>
          <p className="font-mono text-xs leading-relaxed text-muted">
            Vacancy, repairs and capex are shares of rent plus extra income. The manager&apos;s share comes off what&apos;s collected after vacancy.
          </p>
        </Group>
      </InputsCard>

      <div className="flex flex-col gap-4">
        <ResultCard eyebrow="WHAT IT PAYS YOU EACH MONTH" value={usd(d.cashFlow)} badge={badge}>
          <Stats
            items={[
              ["Cash-on-cash return", pctFmt(d.coc)],
              ["Cap rate on price", pctFmt(d.capRate)],
              ["Rent ÷ full payment (DSCR)", d.dscrLender.toFixed(2)],
              ["Cash to close", usd(d.cashInvested)],
            ]}
          />
          <p className="text-sm leading-relaxed text-mist">
            DSCR is the debt service coverage ratio, the lender&apos;s test: monthly rent against principal, interest, taxes, insurance and HOA. It leaves out vacancy, the manager and repairs, so it can pass while what you keep stays thin.
          </p>
        </ResultCard>
        <Breakdown
          title="ONE MONTH, TOP TO BOTTOM"
          rows={[
            ["Rent plus extra income", usd(d.gross)],
            ["Vacancy reserve", usd(-d.vacancy)],
            ["Running costs", usd(-d.opex)],
            ["Net operating income (NOI)", usd(d.noi)],
            ["Principal and interest", usd(-d.pi)],
          ]}
          total={["What you keep", usd(d.cashFlow)]}
        />
        <CalcCta href="/get-funding?loan=dscr">{SITE.cta}</CalcCta>
      </div>
    </CalcGrid>
  );
}
