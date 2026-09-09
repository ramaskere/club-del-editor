"use client";

import { motion } from "framer-motion";

const tracks = [
  { label: "V1", color: "from-accent to-gold-deep", width: "72%" },
  { label: "V2", color: "from-gold-deep to-accent/60", width: "48%" },
  { label: "A1", color: "from-accent/80 to-accent/30", width: "85%" },
  { label: "A2", color: "from-neon/70 to-accent/20", width: "55%" },
];

export function TimelineMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glow-box relative overflow-hidden rounded-2xl border border-accent/30 bg-[#080808] p-4 md:p-5"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <p className="ml-2 text-xs font-medium tracking-wide text-white/60">
            Premiere · Sequence 01
          </p>
        </div>
        <p className="font-mono text-[11px] text-accent">00:00:12:08</p>
      </div>

      <div className="relative space-y-2.5 rounded-xl border border-white/5 bg-black/60 p-3">
        <div className="absolute inset-y-3 timeline-playhead z-20 w-px bg-accent shadow-[0_0_12px_rgba(245,197,24,0.9)]">
          <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-accent" />
        </div>

        {tracks.map((track) => (
          <div key={track.label} className="flex items-center gap-3">
            <span className="w-6 text-[10px] font-bold text-muted">
              {track.label}
            </span>
            <div className="relative h-7 flex-1 overflow-hidden rounded-md bg-white/5">
              <div
                className={`clip-grow absolute inset-y-1 left-2 rounded bg-gradient-to-r ${track.color} opacity-90`}
                style={{ width: track.width }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,rgba(255,255,255,0.08)_50%,transparent_100%)] bg-size-[28px_100%]" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["Ripple Edit", "Razor", "Effects", "Export"].map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-accent/20 bg-accent/5 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-accent/90 uppercase"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
