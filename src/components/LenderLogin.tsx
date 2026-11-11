"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SITE } from "@/lib/site";

// "Lender Login": opens the demo portal's sign-in as a pop-up over the page. The pop-up is
// the portal's own /login?embed=1 in a full-screen frame; it tells this page when to close
// (its X, Esc, a click outside) and where to go once signed in. ?login=1 on any page opens it.
export function LenderLogin({ className = "", autoOpen = false }: { className?: string; autoOpen?: boolean }) {
  const [open, setOpen] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  const portalOrigin = new URL(SITE.portal).origin;

  useEffect(() => {
    if (autoOpen && new URLSearchParams(window.location.search).get("login") === "1") setOpen(true);
  }, [autoOpen]);

  useEffect(() => {
    if (!open) return;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== portalOrigin || e.data?.type !== "fmd-login") return;
      if (e.data.action === "close") setOpen(false);
      if (e.data.action === "success" && typeof e.data.url === "string" && e.data.url.startsWith(portalOrigin)) window.location.href = e.data.url;
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const scroll = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("message", onMessage);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = scroll;
      window.removeEventListener("message", onMessage);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, portalOrigin]);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)} aria-haspopup="dialog">
        Lender Login
      </button>
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[100] bg-ink/60">
            <iframe
              ref={frame}
              src={`${SITE.portal}/login?embed=1`}
              title="Lender login"
              className="h-full w-full border-0 bg-transparent"
              onLoad={() => frame.current?.focus()}
              allow="clipboard-write"
            />
          </div>,
          document.body
        )}
    </>
  );
}
