"use client";

import { useState } from "react";
import { Breakdown, CalcCta, CalcGrid, Group, InputsCard, Num, ResultCard, Segmented, Stats } from "./calc/parts";
import { dscrVerdict, maxLoanForDscr, monthlyPI, num, usd } from "@/lib/finance";

/** Fund Your Deal's words for the lender bands in dscrVerdict (same thresholds: 1.00 and 1.25). */
const COVERAGE = {
  strong: { label: "Rent covers it with room", note: "At 1.25 or better, the rent clears the floor most lenders set." },
  ok: { label: "Rent just covers it", note: "From 1.00 to 1.24 the rent pays the full payment, and many programs lend there." },
  low: { label: "Rent falls short", note: "Under 1.00 the rent doesn't pay the full payment, which is below most lenders' minimum." },
} as const;

export function coverageCall(dscr: number) {
  const { tone } = dscrVerdict(dscr);
  return { tone, ...COVERAGE[tone] };
}

export function DscrCalculator() {
  const [v, setV] = useState({ rent: "2050", price: "265000", down: "25", rate: "7.75", taxes: "3060", ins: "1620", hoa: "0" });
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
  const call = coverageCall(dscr);

  return (
    <CalcGrid>
      <InputsCard label="Debt service coverage numbers">
        <Group legend="What it rents for">
          <Num id="rent" label="Rent / mo" prefix="$" value={v.rent} onChange={on("rent")} />
        </Group>
        <Group legend="The rental loan">
          <div className="grid grid-cols-2 gap-3">
            <Num id="price" label="Price or appraised value" prefix="$" value={v.price} onChange={on("price")} />
            <Num id="down" label="Cash down" suffix="%" value={v.down} onChange={on("down")} />
            <Num id="rate" label="Note rate" suffix="%" step="0.125" value={v.rate} onChange={on("rate")} />
            <Segmented label="Loan term" value={term} options={[{ v: 30, l: "30-year" }, { v: 40, l: "40-year" }]} onChange={(x) => setTerm(x as 30 | 40)} mono />
          </div>
          <Segmented label="How it pays" value={io ? "io" : "amort"} options={[{ v: "amort", l: "Principal and interest" }, { v: "io", l: "Interest only" }]} onChange={(x) => setIo(x === "io")} />
        </Group>
        <Group legend="Taxes, insurance and HOA">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Num id="taxes" label="Property tax / yr" prefix="$" value={v.taxes} onChange={on("taxes")} />
            <Num id="ins" label="Landlord insurance / yr" prefix="$" value={v.ins} onChange={on("ins")} />
            <Num id="hoa" label="HOA dues / mo" prefix="$" value={v.hoa} onChange={on("hoa")} />
          </div>
        </Group>
      </InputsCard>

      <div className="flex flex-col gap-4">
        <ResultCard eyebrow="DEBT SERVICE COVERAGE (DSCR)" value={pitia > 0 ? dscr.toFixed(2) : "—"} badge={{ label: call.label, tone: call.tone }}>
          <Scale dscr={dscr} dark />
          <p className="text-sm leading-relaxed text-mist">
            One month&apos;s rent divided by the full monthly payment: the loan payment plus taxes, insurance and HOA. At 1.00 the rent pays it exactly. {call.note}
          </p>
          <Stats
            items={[
              ["Rent left after the payment", usd(rent - pitia)],
              ["Loan size", usd(loan)],
              ["Largest loan at 1.00", usd(maxLoanForDscr(rent, fixed, rate, term, io, 1))],
              ["Largest loan at 1.25", usd(maxLoanForDscr(rent, fixed, rate, term, io, 1.25))],
            ]}
          />
        </ResultCard>
        <Breakdown
          title="THE FULL MONTHLY PAYMENT (PITIA)"
          rows={[
            [io ? "Loan payment (interest only)" : "Loan payment (principal and interest)", usd(pi)],
            ["Property tax", usd(taxesMo)],
            ["Landlord insurance", usd(insMo)],
            ["HOA dues", usd(hoaMo)],
          ]}
          total={["Full payment", usd(pitia)]}
        />
        <CalcCta href="/get-funding?loan=dscr">Get rental funding</CalcCta>
      </div>
    </CalcGrid>
  );
}

/** The 0.75–1.75 scale in three lender bands (red under 1.00, apricot 1.00–1.24, green 1.25+); 1.00 sits at 25%, 1.25 at 50%.
 *  On navy the apricot marker reads 4.6:1 / 3.2:1 / 3.7:1 against the bands; on white the ink marker reads 11.5:1 or more. */
export function Scale({ dscr, dark }: { dscr: number; dark?: boolean }) {
  const marker = Math.max(0, Math.min(100, (dscr - 0.75) * 100));
  return (
    <div>
      <div className="relative grid h-2.5 grid-cols-[25%_25%_50%] overflow-hidden rounded-full" aria-hidden="true">
        <div className={dark ? "bg-[#7d2a3f]" : "bg-[#f9d0d9]"} />
        <div className={dark ? "bg-[#80551d]" : "bg-[#fed9bd]"} />
        <div className={dark ? "bg-[#1f6048]" : "bg-[#c8ead6]"} />
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
