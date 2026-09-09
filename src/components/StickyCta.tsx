"use client";

import { site, checkoutLabel } from "@/lib/site";
import { Countdown } from "@/components/Countdown";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:px-4 md:pb-4">
      <div className="glow-box mx-auto max-w-3xl overflow-hidden rounded-2xl border border-accent/40 bg-black/95 backdrop-blur-md">
        <div className="border-b border-accent/20 bg-accent/10 px-3 py-1.5">
          <Countdown className="!justify-center scale-90 origin-center" />
        </div>
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-5">
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-muted line-through">
                {site.priceWas}
              </span>
              <p className="text-lg font-bold text-accent md:text-xl">
                {site.price} {site.currency}
              </p>
            </div>
            <p className="truncate text-[11px] text-muted">
              Pago único · {site.guaranteeDays} días de garantía
            </p>
          </div>
          <a
            href={site.checkoutUrl}
            className="btn-primary shrink-0 px-4 py-2.5 text-sm md:px-6 md:py-3"
          >
            <span className="md:hidden">Entrar</span>
            <span className="hidden md:inline">{checkoutLabel}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
