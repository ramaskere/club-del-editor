"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Parts = { d: number; h: number; m: number; s: number };

function calc(): Parts | null {
  const end = new Date(site.deadlineISO).getTime();
  const diff = end - Date.now();
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <div className="min-w-[3.25rem] rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-center">
      <p className="font-mono text-base font-bold tabular-nums text-white md:text-lg">
        {String(value).padStart(2, "0")}
      </p>
      <p className="text-[9px] tracking-wide text-muted uppercase">{label}</p>
    </div>
  );
}

export function Countdown({ className = "" }: { className?: string }) {
  const [parts, setParts] = useState<Parts | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setParts(calc());
    setReady(true);
    const id = setInterval(() => setParts(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!ready) {
    return (
      <div className={`h-14 animate-pulse rounded-xl bg-white/5 ${className}`} />
    );
  }

  if (!parts) {
    return (
      <p className={`text-sm font-medium text-gold ${className}`}>
        La oferta especial terminó — el precio puede subir.
      </p>
    );
  }

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      <p className="mr-1 text-xs font-medium text-muted md:text-sm">
        La oferta cierra en
      </p>
      <Cell value={parts.d} label="días" />
      <Cell value={parts.h} label="hrs" />
      <Cell value={parts.m} label="min" />
      <Cell value={parts.s} label="seg" />
    </div>
  );
}
