import Link from "next/link";
import { SITE } from "@/lib/site";

// Fund Your Deal mark: an "F" whose stem is an arrow heading up, on a signal-orange disc.
// Kept to three strokes so it still reads at 24px and in a 16px browser tab.
export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
      <circle cx="14" cy="14" r="13" className="fill-brand" />
      <path d="M9.1 10.9 12.6 7.4l3.5 3.5M12.6 7.4v14.2M12.6 14.6h7.4M12.6 18.7h4.9" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Wordmark: the last word of the name ("Deal") takes the accent colour.
export function Logo({ tone = "ink" }: { tone?: "ink" | "white" }) {
  const cut = SITE.name.lastIndexOf(" ");
  const lead = cut > 0 ? SITE.name.slice(0, cut + 1) : "";
  const last = SITE.name.slice(cut + 1);
  return (
    <Link href="/" className={`flex items-center gap-2 ${tone === "white" ? "text-white focus-visible:outline-lime" : "text-ink"}`} aria-label={`${SITE.name} home`}>
      <LogoMark />
      <span className="whitespace-nowrap text-[19px] font-extrabold leading-none tracking-[-0.035em]">
        {lead}
        <span className={tone === "white" ? "text-lime" : "text-brand"}>{last}</span>
      </span>
    </Link>
  );
}
