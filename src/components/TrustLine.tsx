import { trustLine } from "@/lib/site";

export function TrustLine({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs text-muted ${className}`}>{trustLine}</p>
  );
}

export function TrustBadges({ className = "" }: { className?: string }) {
  const items = [
    "Acceso inmediato",
    "Pago único",
    "Sin suscripción",
    "Garantía 7 días",
  ];
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-medium tracking-wide text-white/70 uppercase ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-1.5">
          <span className="text-accent">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
