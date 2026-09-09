"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

const rows = [
  {
    bad: "Tutoriales sueltos de YouTube sin orden",
    good: "Ruta clara: de instalación a export profesional",
  },
  {
    bad: "Te enseñan botones, no a editar con criterio",
    good: "Mentalidad del editor + flujo real de trabajo",
  },
  {
    bad: "Suscripciones caras solo por recursos",
    good: "Pago único · recursos incluidos · acceso de por vida",
  },
  {
    bad: "Sin atajos: editás lento y te frustrás",
    good: "Atajos de Premiere para trabajar a otra velocidad",
  },
  {
    bad: "Color, subtítulos y SFX a prueba y error",
    good: "Clases de color, subtítulos auto, zoom, SFX y música",
  },
  {
    bad: "Terminás el curso y no sabés cobrar",
    good: "De 0 a 100 listo para clientes + certificado",
  },
];

export function VsCompare() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.08),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
            Comparación real
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Cursos random vs{" "}
            <span className="text-gradient">{site.brand}</span>
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            La diferencia no es marketing. Se nota en cómo editás el primer
            video después de entrar.
          </p>
        </motion.div>

        {/* Headers */}
        <div className="mt-12 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-0">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:rounded-r-none md:border-r-0"
          >
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Cursos random / malos
            </p>
          </motion.div>

          <div className="relative z-10 hidden items-center justify-center md:flex">
            <motion.div
              initial={reduce ? false : { scale: 0.6, opacity: 0, rotate: -12 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/50 bg-bg text-sm font-extrabold text-accent shadow-[0_0_30px_rgba(245,197,24,0.45)]"
            >
              VS
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glow-box rounded-2xl border border-accent/40 bg-accent/10 p-4 md:rounded-l-none"
          >
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {site.brand}
            </p>
          </motion.div>
        </div>

        {/* Rows */}
        <div className="mt-3 space-y-3">
          {rows.map((row, i) => (
            <motion.div
              key={row.good}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-0"
            >
              {/* Bad */}
              <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f0f] p-4 md:rounded-r-none md:border-r-0">
                <motion.div
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 bg-white/15"
                  initial={reduce ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                />
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-sm text-white/35">
                    ✕
                  </span>
                  <p className="text-sm leading-relaxed text-white/45 line-through decoration-white/20">
                    {row.bad}
                  </p>
                </div>
              </div>

              {/* Mobile VS */}
              <div className="flex items-center justify-center md:hidden">
                <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] font-bold tracking-widest text-accent">
                  VS
                </span>
              </div>

              {/* Spacer desktop for VS column */}
              <div className="hidden w-14 md:block" />

              {/* Good */}
              <div className="card-shine relative overflow-hidden rounded-2xl border border-accent/35 bg-gradient-to-br from-accent/15 to-transparent p-4 md:rounded-l-none">
                <motion.div
                  aria-hidden
                  className="absolute inset-y-0 right-0 w-1 bg-accent"
                  initial={reduce ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
                  style={{ boxShadow: "0 0 16px rgba(245,197,24,0.7)" }}
                />
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-ink shadow-[0_0_14px_rgba(245,197,24,0.55)]">
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed font-medium text-white">
                    {row.good}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Score bar */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-2 flex items-center justify-between text-xs text-muted">
              <span>Resultado típico</span>
              <span>2/10</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-white/25"
                initial={reduce ? false : { width: 0 }}
                whileInView={{ width: "20%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="mt-3 text-sm text-white/40">
              Confusión, tiempo perdido y cero sistema.
            </p>
          </div>

          <div className="glow-box rounded-2xl border border-accent/40 bg-accent/10 p-5">
            <div className="mb-2 flex items-center justify-between text-xs text-accent">
              <span>{site.brand}</span>
              <span>10/10</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-accent/20">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-neon"
                initial={reduce ? false : { width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ boxShadow: "0 0 18px rgba(245,197,24,0.6)" }}
              />
            </div>
            <p className="mt-3 text-sm text-white/85">
              Método, práctica y Premiere listo para cobrar.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 text-center"
        >
          <a href={site.checkoutUrl} className="btn-primary px-8 py-4 text-base">
            Quiero el lado bueno — {site.price} {site.currency}
          </a>
          <p className="mt-3 text-xs text-muted">
            Pago único · Acceso inmediato · {site.guaranteeDays} días de garantía
          </p>
        </motion.div>
      </div>
    </section>
  );
}
