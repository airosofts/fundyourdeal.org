import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { ButtonLink } from "./ui";

// No client JS: the phone menu is a native <details>.
export function Header() {
  return (
    <header className="border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75 sticky top-0 z-40">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-medium lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="/get-funding">{SITE.cta}</ButtonLink>
          </div>
          <details className="relative lg:hidden">
            <summary aria-label="Menu" className="flex size-11 items-center justify-center rounded-[10px] border border-line">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 flex w-60 flex-col rounded-xl border border-line bg-white p-2 shadow-xl">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-paper">
                  {n.label}
                </Link>
              ))}
              <Link href="/get-funding" className="mt-1 rounded-lg bg-brand px-3 py-3 text-[15px] font-semibold text-white">
                {SITE.cta}
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
