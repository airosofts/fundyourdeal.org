"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// The header's phone menu is a native <details>, and the root layout persists
// across pages, so it would stay open after a tap. Close it on every navigation.
export function MenuCloser() {
  const ref = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    ref.current?.closest("details")?.removeAttribute("open");
  }, [pathname]);
  return <span ref={ref} hidden />;
}
