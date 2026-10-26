"use client";

import { useState } from "react";
import { Breakdown, CalcCta, CalcGrid, Group, InputsCard, Num, ResultCard, Segmented, Stats } from "./calc/parts";
import { dscrVerdict, maxLoanForDscr, monthlyPI, num, usd } from "@/lib/finance";

export function DscrCalculator() {
  const [v, setV] = useState({ rent: "2400", price: "300000", down: "25", rate: "7.25", taxes: "3600", ins: "1800", hoa: "0" });
  const [term, setTerm] = useState<30 | 40>(30);
  const [io, setIo] = useState(false);
  const on = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) => setV((x) => ({ ...x, [k]: e.target.value }));

  const rent = num(v.rent), price = num(v.price), down = Math.min(num(v.down), 100), rate = num(v.rate);
  const loan = price * (1 - down / 100);
  const pi = monthlyPI(loan, rate, term, io);
  const taxesMo = num(v.taxes) / 12, insMo = num(v.ins) / 12, hoaMo = num(v.hoa);
  const fixed = taxesMo + insMo + hoaMo;
  const pitia = pi + fixed;
  const dscr = pitia > 0 ? rent / pitia : 0;
  const verdict = dscrVerdict(dscr);

  return (
    <CalcGrid>
      <InputsCard label="DSCR inputs">
        <Group legend="Income">
          <Num id="rent" label="Monthly rent" prefix="$" value={v.rent} onChange={on("rent")} />
        </Group>
        <Group legend="Loan">
          <div className="grid grid-cols-2 gap-3">
            <Num id="price" label="Purchase price" prefix="$" value={v.price} onChange={on("price")} />
            <Num id="down" label="Down payment" suffix="%" value={v.down} onChange={on("down")} />
            <Num id="rate" label="Interest rate" suffix="%" step="0.125" value={v.rate} onChange={on("rate")} />
            <Segmented label="Term" value={term} options={[{ v: 30, l: "30 yr" }, { v: 40, l: "40 yr" }]} onChange={(x) => setTerm(x as 30 | 40)} mono />
          </div>
          <Segmented label="Payment type" value={io ? "io" : "amort"} options={[{ v: "amort", l: "Principal + interest" }, { v: "io", l: "Interest-only" }]} onChange={(x) => setIo(x === "io")} />
        </Group>
        <Group legend="Expenses">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="taxes" label="Taxes / yr" prefix="$" value={v.taxes} onChange={on("taxes")} />
            <Num id="ins" label="Insurance / yr" prefix="$" value={v.ins} onChange={on("ins")} />
            <Num id="hoa" label="HOA / mo" prefix="$" value={v.hoa} onChange={on("hoa")} />
          </div>
        </Group>
      </InputsCard>

      <div className="flex flex-col gap-4">
        <ResultCard eyebrow="YOUR DSCR" value={pitia > 0 ? dscr.toFixed(2) : "—"} badge={verdict}>
          <Scale dscr={dscr} dark />
          <Stats
            items={[
              ["Monthly cash flow", usd(rent - pitia)],
              ["Loan amount", usd(loan)],
              ["Max loan at 1.00", usd(maxLoanForDscr(rent, fixed, rate, term, io, 1))],
              ["Max loan at 1.25", usd(maxLoanForDscr(rent, fixed, rate, term, io, 1.25))],
            ]}
          />
        </ResultCard>
        <Breakdown
          title="MONTHLY PAYMENT (PITIA)"
          rows={[
            ["Principal & interest", usd(pi)],
            ["Property taxes", usd(taxesMo)],
            ["Insurance", usd(insMo)],
            ["HOA", usd(hoaMo)],
          ]}
          total={["Total", usd(pitia)]}
        />
        <CalcCta href="/get-funding?loan=dscr">Get DSCR funding</CalcCta>
      </div>
    </CalcGrid>
  );
}

/** The 0.75–1.75 scale with lender bands; 1.00 at 25%, 1.25 at 50%. */
export function Scale({ dscr, dark }: { dscr: number; dark?: boolean }) {
  const marker = Math.max(0, Math.min(100, (dscr - 0.75) * 100));
  return (
    <div>
      <div className="relative grid h-2.5 grid-cols-[25%_25%_50%] overflow-hidden rounded-full" aria-hidden="true">
        <div className={dark ? "bg-[#6E4A3E]" : "bg-[#E9D9D2]"} />
        <div className={dark ? "bg-[#7A7442]" : "bg-[#EDE8C9]"} />
        <div className={dark ? "bg-[#3F6B52]" : "bg-[#D7E8DC]"} />
      </div>
      <div className="relative -mt-3.5 h-[18px]" aria-hidden="true">
        <div className={`absolute top-0 h-[18px] w-[3px] rounded-sm transition-[left] ${dark ? "bg-lime" : "bg-ink"}`} style={{ left: `calc(${marker}% - 1px)` }} />
      </div>
      <div className={`mt-1 grid grid-cols-[25%_25%_50%] font-mono text-xs ${dark ? "text-mist-2" : "text-muted"}`} aria-hidden="true">
        <span>0.75</span>
        <span>1.00</span>
        <span className="flex justify-between">
          <span>1.25</span>
          <span>1.75+</span>
        </span>
      </div>
    </div>
  );
}
