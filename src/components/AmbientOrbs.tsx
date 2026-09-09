"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function AmbientOrbs() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 40, damping: 20 });
  const y = useSpring(my, { stiffness: 40, damping: 20 });
  const xSlow = useSpring(mx, { stiffness: 25, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 40);
      my.set((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ x, y }}
        className="absolute top-[-10%] left-[20%] h-[42vw] w-[42vw] rounded-full bg-accent/10 blur-[100px]"
      />
      <motion.div
        style={{ x: xSlow, y }}
        className="absolute right-[-5%] bottom-[10%] h-[36vw] w-[36vw] rounded-full bg-gold-deep/10 blur-[110px]"
      />
      <div className="absolute top-1/2 left-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/5" />
    </div>
  );
}
