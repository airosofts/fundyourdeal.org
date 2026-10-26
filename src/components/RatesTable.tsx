import Link from "next/link";
import { RATES_AS_OF, RATE_ROWS } from "@/lib/rates";

// Investor loan rate ranges (published lender pricing and HMDA data).
// Server component: no tabs any more — investor (business-purpose) loans only.
export function RatesTable({ compact }: { compact?: boolean }) {
  const rows = compact ? RATE_ROWS.slice(0, 3) : RATE_ROWS;
  return (
    <div className="overflow-hidden rounded-[20px] border border-line bg-white">
      {/* Phones: one block per program */}
      <div className="sm:hidden">
        <div className="px-5 pb-2 pt-5 font-mono text-[13px] text-muted">INVESTOR LOANS · {RATES_AS_OF.toUpperCase()}</div>
        <ul>
          {rows.map((r) => (
            <li key={r.program} className="border-t border-line-2 px-5 py-4">
              <Link href={r.href} className="font-semibold underline-offset-4 hover:underline">
                {r.program}
              </Link>
              <dl className="mt-2.5 grid grid-cols-2 gap-2">
                <div>
                  <dt className="text-xs text-muted">Typical rate</dt>
                  <dd className="font-mono text-[15px]">{r.typical}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Leverage</dt>
                  <dd className="text-[14px] leading-snug">{r.leverage}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>

      {/* Wider screens: table */}
      <table className="hidden w-full border-collapse text-base sm:table">
        <caption className="px-6 pb-1 pt-5 text-left font-mono text-[13px] text-muted">INVESTOR LOANS · {RATES_AS_OF.toUpperCase()}</caption>
        <thead>
          <tr className="text-left text-[13px] text-muted">
            <th scope="col" className="px-6 py-3.5 font-medium">Program</th>
            <th scope="col" className="px-6 py-3.5 font-medium">Typical rate</th>
            {!compact && <th scope="col" className="px-6 py-3.5 font-medium">Lowest advertised</th>}
            <th scope="col" className="px-6 py-3.5 font-medium">Leverage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.program} className="border-t border-line-2 align-top">
              <th scope="row" className="px-6 py-[18px] text-left font-semibold">
                <Link href={r.href} className="underline-offset-4 hover:underline">
                  {r.program}
                </Link>
              </th>
              <td className="whitespace-nowrap px-6 py-[18px] font-mono">{r.typical}</td>
              {!compact && <td className="px-6 py-[18px] font-mono text-ink-2">{r.lowest}</td>}
              <td className="px-6 py-[18px] text-[15px] text-ink-2">{r.leverage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border-t border-line-2 px-5 py-3.5 font-mono text-[12px] leading-relaxed text-muted sm:px-6">
        Published lender pricing and public loan data, {RATES_AS_OF}. Not an offer — rates change daily and depend on credit, leverage, DSCR and terms.
      </div>
    </div>
  );
}
