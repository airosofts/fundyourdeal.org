"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackPageview } from "@/lib/siteTrack";

// The root layout persists across pages, so this counts the first load and
// then every navigation. The query string is read inside siteTrack, from
// window.location, so no useSearchParams (and no Suspense) is needed.
export function VisitTracker() {
  const pathname = usePathname();
  useEffect(() => trackPageview(pathname), [pathname]);
  return null;
}
