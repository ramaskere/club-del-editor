"use client";

const items = [
  "Cortes limpios",
  "Colorización",
  "Subtítulos auto",
  "Zoom & efectos",
  "SFX & música",
  "Máscaras",
  "B-roll pro",
  "Atajos Premiere",
  "Export listo",
  "Plugins",
];

export function SkillMarquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-accent/20 bg-bg-elevated py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-elevated to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-elevated to-transparent" />
      <div className="marquee-track gap-8 px-4">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-sm font-semibold tracking-[0.18em] text-accent/80 uppercase"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(245,197,24,0.8)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
