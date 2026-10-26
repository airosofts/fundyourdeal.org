import Link from "next/link";
import { SITE } from "@/lib/site";

// Gable mark: a roofline over a level base.
export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
      <rect x="1" y="1" width="26" height="26" rx="7" fill="#0D1411" />
      <path d="M7 15.5 14 9l7 6.5" fill="none" stroke="#CDEB6E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 19.5h9" fill="none" stroke="#CDEB6E" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tone = "ink" }: { tone?: "ink" | "white" }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${tone === "white" ? "text-white" : "text-ink"}`} aria-label={`${SITE.name} home`}>
      <LogoMark />
      <span className="whitespace-nowrap text-lg font-semibold tracking-[-0.02em]">{SITE.name}</span>
    </Link>
  );
}
