"use client";

import { useEffect, useState } from "react";
import { checkoutLabel, site } from "@/lib/site";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-bg/95 backdrop-blur-md transition ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-white">
            {site.brand} · {site.price} {site.currency}
          </p>
          <p className="text-xs text-muted">
            Pago único · Acceso de por vida
          </p>
        </div>
        <a
          href={site.checkoutUrl}
          className="ml-auto inline-flex w-full items-center justify-center bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110 sm:w-auto"
        >
          {checkoutLabel}
        </a>
      </div>
    </div>
  );
}
