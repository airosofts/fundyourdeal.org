import Link from "next/link";
import { RATES_AS_OF, RATE_ROWS } from "@/lib/rates";

// Published investor loan rate ranges (lender pricing and HMDA data), business-purpose loans only.
// Server component. `compact` shows the first three loans and drops the lowest-advertised column.
// Column names match the "how to read the table" rows on /rates.
export function RatesTable({ compact }: { compact?: boolean }) {
  const rows = compact ? RATE_ROWS.slice(0, 3) : RATE_ROWS;
  const stamp = `Published investor rates · ${RATES_AS_OF}`;
  return (
    <div className="overflow-hidden rounded-2xl border border-ink bg-white">
      {/* Phones: a card per loan */}
      <div className="sm:hidden">
        <div className="bg-ink px-5 py-3 text-[13px] font-semibold text-lime">{stamp}</div>
        <ul>
          {rows.map((r) => (
            <li key={r.program} className="border-t border-line-2 px-5 py-4 first:border-t-0">
              <Link href={r.href} className="flex items-center justify-between gap-3 font-semibold underline-offset-4 hover:underline">
                {r.program} <span aria-hidden="true">→</span>
              </Link>
              <dl className="mt-2.5 grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-xs text-muted">Typical rate</dt>
                  <dd className="font-mono text-[15px] text-brand-deep">{r.typical}</dd>
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

      {/* Wider screens: a table */}
      <table className="hidden w-full border-collapse text-base sm:table">
        <caption className="bg-ink px-6 py-3 text-left text-[13px] font-semibold text-lime">{stamp}</caption>
        <thead>
          <tr className="border-b border-line bg-paper text-left text-[13px] text-ink-2">
            <th scope="col" className="px-6 py-3 font-semibold">
              Loan
            </th>
            <th scope="col" className="px-6 py-3 font-semibold">
              Typical rate
            </th>
            {!compact && (
              <th scope="col" className="px-6 py-3 font-semibold">
                Lowest advertised
              </th>
            )}
            <th scope="col" className="px-6 py-3 font-semibold">
              Leverage
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.program} className="border-t border-line-2 align-top first:border-t-0">
              <th scope="row" className="px-6 py-4 text-left font-semibold">
                <Link href={r.href} className="underline-offset-4 hover:underline">
                  {r.program}
                </Link>
              </th>
              <td className="whitespace-nowrap px-6 py-4 font-mono text-brand-deep">{r.typical}</td>
              {!compact && <td className="px-6 py-4 font-mono text-ink-2">{r.lowest}</td>}
              <td className="px-6 py-4 text-[15px] text-ink-2">{r.leverage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-line bg-paper px-5 py-3.5 text-xs leading-relaxed text-muted sm:px-6">
        Ranges come from lender rate sheets and public loan data, {RATES_AS_OF}. This is not a quote. Your own rate moves with your credit, the leverage, the loan&apos;s terms and,
        on a rental, its{" "}
        <Link href="/glossary#dscr" className="underline underline-offset-2 hover:text-ink">
          DSCR
        </Link>{" "}
        (debt service coverage ratio: the monthly rent divided by the monthly payment).
      </p>
    </div>
  );
}
