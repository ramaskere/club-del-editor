"use client";

import { site } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 md:px-4 md:pb-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0c0816]/95 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-md md:px-5">
        <div>
          <p className="text-lg font-bold text-white md:text-xl">
            {site.price} {site.currency}
          </p>
          <p className="text-xs text-muted">Pago único · Acceso de por vida</p>
        </div>
        <a
          href={site.checkoutUrl}
          className="btn-primary shrink-0 px-5 py-2.5 text-sm md:px-6 md:py-3"
        >
          Acceder ahora
        </a>
      </div>
    </div>
  );
}
