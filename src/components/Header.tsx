import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { MenuCloser } from "./MenuCloser";
import { ButtonLink } from "./ui";

// A navy bar with an orange CTA. The inline nav needs about 1,000px, so below xl it folds into
// a menu: a native <details>, closed after each navigation by MenuCloser.
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-night-line bg-ink text-paper">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-3">
        <Logo tone="white" />
        <nav aria-label="Main" className="hidden items-center gap-1 text-[15px] font-semibold xl:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap rounded-full px-3.5 py-2 transition-colors hover:bg-night hover:text-lime focus-visible:outline-lime">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="/get-funding" className="whitespace-nowrap focus-visible:outline-lime">
              {SITE.cta}
            </ButtonLink>
          </div>
          <details className="relative xl:hidden">
            <MenuCloser />
            <summary aria-label="Menu" className="flex size-11 items-center justify-center rounded-full border border-night-line hover:bg-night focus-visible:outline-lime">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M3 6h14M3 10h10M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-3 flex w-64 max-w-[calc(100vw-3rem)] flex-col rounded-2xl border border-line bg-white p-2 text-ink shadow-2xl">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="rounded-xl px-4 py-3 text-[15px] font-semibold hover:bg-brand-tint hover:text-brand">
                  {n.label}
                </Link>
              ))}
              <Link href="/get-funding" className="mt-1.5 rounded-full bg-brand px-4 py-3 text-center text-[15px] font-bold text-white hover:bg-brand-deep">
                {SITE.cta}
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
