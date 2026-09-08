import Image from "next/image";
import type { ReactNode } from "react";
import { FaqList } from "@/components/FaqList";
import { StickyCta } from "@/components/StickyCta";
import { checkoutLabel, site, waLink } from "@/lib/site";

const logos = [
  "Creadores",
  "Agencias",
  "Marcas",
  "YouTubers",
  "TikTok",
  "Reels",
  "Shorts",
  "Podcasts",
];

const steps = [
  {
    n: "01",
    title: "Aprendé",
    copy: "Clases ordenadas desde fundamentos hasta técnicas de edición viral.",
  },
  {
    n: "02",
    title: "Aplicá",
    copy: "Descargá presets y recursos e insertalos en tus proyectos: arrastrar y soltar.",
  },
  {
    n: "03",
    title: "Creá y monetizá",
    copy: "Subí el nivel de tus videos, crecé tu contenido o cobrá por editar a clientes.",
  },
];

const resourceTypes = [
  "Subtítulos dinámicos",
  "Color y LUTs",
  "Objetos 3D",
  "Transiciones",
  "B-roll cinematográfico",
  "Lens flares",
  "Efectos de sonido",
  "Música viral",
];

const softwares = [
  { name: "CapCut", meta: "PC y móvil" },
  { name: "Premiere Pro", meta: "Adobe" },
  { name: "After Effects", meta: "Adobe" },
  { name: "DaVinci Resolve", meta: "Blackmagic" },
];

const includes = [
  "Academia completa de cero a avanzado",
  "Formación en CapCut, Premiere, After Effects y DaVinci",
  `${site.resources} presets y recursos descargables`,
  "Presets de subtítulos para cada programa",
  "Comunidad privada y soporte",
  "Agente de IA para guiones",
  "Certificado de finalización",
  "Nuevas clases y recursos incluidos",
  "Acceso inmediato y de por vida",
];

const modules = [
  {
    title: "Primeros pasos y comunidad",
    copy: "Conocé la academia, la comunidad y el recorrido según tu nivel.",
    meta: "1 lección · ~10 min",
  },
  {
    title: "Premiere Pro + After Effects",
    copy: "De cero a motion: keyframes, zooms, glow, máscaras y gráficos con look premium.",
    meta: "24 lecciones · ~10 h",
  },
  {
    title: "CapCut para PC",
    copy: "Cortes, ritmo, subtítulos, efectos, sonido y motion graphics avanzados.",
    meta: "22 lecciones · ~9 h",
  },
  {
    title: "CapCut para móvil",
    copy: "Editá desde el teléfono aunque empieces de cero y no tengas PC.",
    meta: "6 lecciones · ~3 h",
  },
  {
    title: "DaVinci Resolve",
    copy: "Montaje, color, efectos, motion y tipografía animada.",
    meta: "9 lecciones · ~3 h 30",
  },
  {
    title: "Branding e identidad visual",
    copy: "Un estilo reconocible para que tus videos no parezcan uno más.",
    meta: "1 lección · ~25 min",
  },
];

const guarantees = [
  "Tu tarjeta no queda suscrita a nada",
  "Recibís el acceso inmediato por email",
  "Aprendés a tu ritmo, sin horarios",
  "Acceso de por vida",
  "Actualizaciones futuras incluidas",
  "Podés empezar sin experiencia",
  "Editás desde móvil u ordenador",
];

const testimonials = [
  {
    name: "Lucía M.",
    role: "Creadora de contenido",
    quote:
      "Pasé de editar 4 horas por video a terminar en menos de una. Los presets + las clases cambian el juego.",
  },
  {
    name: "Martín R.",
    role: "Editor freelance",
    quote:
      "Entré para CapCut y terminé cobrando más con Premiere. La comunidad me ayudó a cerrar clientes.",
  },
  {
    name: "Sofía A.",
    role: "Agencia",
    quote:
      "Ordenamos el flujo del equipo con lo que aprendimos. Mismo look en todos los clientes, más rápido.",
  },
];

function Cta({
  href = site.checkoutUrl,
  children = checkoutLabel,
  className = "",
}: {
  href?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-110 ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="pb-24">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-bg-elevated/95 text-center text-xs backdrop-blur md:text-sm">
        <p className="px-4 py-2.5 text-white/90">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle dot-live" />
          Actualizaciones de por vida incluidas · Solo hasta el{" "}
          {site.deadline}{" "}
          <a href={site.checkoutUrl} className="ml-1 font-semibold text-accent underline-offset-2 hover:underline">
            Entrar hoy →
          </a>
        </p>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6">
        <a
          href="#inicio"
          className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.2em] uppercase"
        >
          {site.brand}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          <a href="#academia" className="hover:text-white">
            Academia
          </a>
          <a href="#recursos" className="hover:text-white">
            Recursos
          </a>
          <a href="#alumnos" className="hover:text-white">
            Alumnos
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>
        <Cta className="!px-4 !py-2.5 text-xs md:text-sm" />
      </header>

      <section id="inicio" className="relative overflow-hidden grid-noise">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-10 pb-20 md:grid-cols-2 md:items-center md:px-6 md:pt-16 md:pb-28">
          <div>
            <p className="animate-rise inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase">
              Master Nº1 en edición viral
            </p>
            <h1 className="animate-rise-1 mt-5 font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Aprendé edición viral y empezá a cobrar más por tus videos en 7
              días
            </h1>
            <p className="animate-rise-2 mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Academia completa con clases paso a paso, comunidad privada y{" "}
              {site.resources} presets y recursos para editar profesionalmente
              sin empezar cada video desde cero.
            </p>
            <div className="animate-rise-3 mt-8 flex flex-wrap gap-6 text-sm">
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  {site.students}
                </p>
                <p className="text-muted">alumnos</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  1 solo pago
                </p>
                <p className="text-muted">sin suscripción</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  De por vida
                </p>
                <p className="text-muted">acceso incluido</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Cta>Quiero entrar a {site.brand}</Cta>
              <p className="text-xs text-muted">
                Acceso inmediato · Actualizado en 2026
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-bg-soft md:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80"
                alt="Edición de video profesional"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 border border-white/15 bg-bg/80 p-4 backdrop-blur">
                <p className="text-xs tracking-wide text-accent uppercase">
                  Dale play para comenzar
                </p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold">
                  Vas a editar a este nivel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-bg-elevated py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-center text-sm text-muted">
            Nuestros alumnos editan para creadores y marcas con audiencia real
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {logos.map((logo) => (
              <span
                key={logo}
                className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-white/35 uppercase"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="academia" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
            Todo lo que me habría gustado tener cuando empecé a crear contenido
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Aprender edición suele ser un caos: tutoriales sueltos, recursos
            caros por mes y horas para descifrar cómo se hizo cada efecto. Acá
            está todo junto: clases, presets, animaciones, transiciones, B-roll,
            LUTs, sonidos y comunidad.
          </p>
          <p className="mt-4 font-medium text-accent">
            Sin suscripciones. Sin empezar cada proyecto desde cero.
          </p>
          <p className="mt-2 text-white">Aprendé. Descargá. Aplicá con 1 clic.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.n}
              className="border border-white/10 bg-bg-elevated p-6"
            >
              <p className="font-[family-name:var(--font-display)] text-sm text-accent">
                {step.n}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-bg-elevated py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
              Dejá de empezar cada video desde cero
            </h2>
            <p className="mt-5 text-muted">
              Aprendés cómo se construye una edición profesional y tenés los
              recursos para aplicar cada técnica mucho más rápido.
            </p>
            <p className="mt-4 text-lg font-medium text-white">
              Lo que antes te llevaba 3 horas, ahora lo resolvés en 10 minutos.
            </p>
            <ol className="mt-8 space-y-4">
              {[
                ["Aplicás el preset", "Arrastrás el recurso sobre tu clip."],
                [
                  "Personalizás",
                  "Ajustás color, ritmo y estilo a tu video.",
                ],
                [
                  "Resultado final",
                  "Acabado profesional en una fracción del tiempo.",
                ],
              ].map(([t, c], i) => (
                <li key={t} className="flex gap-4 border-l border-accent/40 pl-4">
                  <span className="text-accent">0{i + 1}</span>
                  <div>
                    <p className="font-medium text-white">{t}</p>
                    <p className="text-sm text-muted">{c}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Cta>Quiero dejar de editar a mano</Cta>
              <p className="mt-3 text-xs text-muted">
                Pago único de {site.price} {site.currency} · Acceso de por vida
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80"
              alt="Timeline de edición"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section id="recursos" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
            Todo esto también lo vas a poder crear vos
          </h2>
          <p className="mt-4 text-muted">
            Aprendés cómo se arman estas ediciones y usás nuestros recursos como
            punto de partida para tus videos o los de tus clientes.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {resourceTypes.map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-bg-soft px-4 py-6 text-sm font-medium md:text-base"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-10 border border-accent/30 bg-accent/5 p-6 md:flex md:items-end md:justify-between md:p-8">
          <div>
            <p className="font-[family-name:var(--font-display)] text-5xl font-bold text-accent">
              {site.resources}
            </p>
            <p className="mt-2 text-white">recursos descargables incluidos</p>
            <p className="mt-2 max-w-lg text-sm text-muted">
              Overlays, lens flares, film burns, SFX, música, LUTs, objetos 3D y
              fuentes.
            </p>
          </div>
          <Cta className="mt-6 md:mt-0">Quiero los {site.resources} recursos</Cta>
        </div>
      </section>

      <section className="border-y border-white/10 bg-bg-elevated py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
              Mucho más que un pack de presets
            </h2>
            <p className="mt-5 text-muted md:text-lg">
              {site.brand} es una academia para aprender edición de video desde
              cero y desarrollar una habilidad profesional. Formación + recursos
              + comunidad + actualizaciones.
            </p>
          </div>

          <h3 className="mt-14 font-[family-name:var(--font-display)] text-2xl font-semibold">
            Aprendé con el programa que ya usás
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {softwares.map((sw) => (
              <div
                key={sw.name}
                className="border border-white/10 bg-bg p-5"
              >
                <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  {sw.name}
                </p>
                <p className="mt-1 text-sm text-muted">{sw.meta}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Presets y versiones adaptadas a cada software — no un único archivo
            para los cuatro.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
          Esto es exactamente lo que encontrás al entrar
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["Dashboard de la academia", "Rutas de cero a avanzado"],
            ["Módulos por programa", "Clase a clase, en orden"],
            ["Clases abiertas por dentro", "Prácticas y paso a paso"],
            ["Comunidad y soporte", "Acceso inmediato y de por vida"],
          ].map(([t, c]) => (
            <div
              key={t}
              className="relative min-h-48 overflow-hidden border border-white/10 bg-bg-soft"
            >
              <Image
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1000&q=80"
                alt=""
                fill
                className="object-cover opacity-40"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-[family-name:var(--font-display)] text-xl font-semibold">
                  {t}
                </p>
                <p className="text-sm text-muted">{c}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-white/10 bg-bg-elevated p-6">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              Agente de IA para guiones
            </h3>
            <p className="mt-2 text-sm text-muted">
              De la idea al guion en minutos, con estructura pensada para
              retención.
            </p>
          </div>
          <div className="border border-white/10 bg-bg-elevated p-6">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              Certificado de finalización
            </h3>
            <p className="mt-2 text-sm text-muted">
              Sumalo a tu portfolio, LinkedIn o propuestas para clientes.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Cta>Quiero entrar en la academia</Cta>
        </div>
      </section>

      <section id="alumnos" className="bg-bg-elevated py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
            No vas a aprender solo
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Comunidad privada para dudas, feedback, inspiración y conexión con
            otros editores. Academia viva: nuevas clases y recursos sin volver a
            pagar.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="border border-white/10 bg-bg p-6"
              >
                <p className="text-sm leading-relaxed text-white/90">
                  “{t.quote}”
                </p>
                <footer className="mt-5">
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-10 border border-warm/40 bg-warm/10 p-6 md:flex md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-sm text-warm">Solo hasta el {site.deadline}</p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold md:text-3xl">
                Entrá ahora y las actualizaciones son tuyas de por vida
              </h3>
            </div>
            <Cta className="mt-6 md:mt-0">Quiero mi acceso con updates</Cta>
          </div>
        </div>
      </section>

      <section id="precio" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm tracking-wide text-accent uppercase">
              Un solo pago · Acceso de por vida
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
              Todo lo que necesitás para convertirte en editor, en un solo lugar
            </h2>
            <ul className="mt-8 space-y-3">
              {guarantees.map((g) => (
                <li key={g} className="flex gap-3 text-sm text-muted">
                  <span className="text-accent">✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-accent/40 bg-bg-elevated p-6 md:p-8">
            <div className="flex items-end gap-3">
              <span className="text-lg text-muted line-through">
                {site.priceWas} {site.currency}
              </span>
              <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-white">
                {site.price} {site.currency}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Pago único · Sin suscripción · Acceso inmediato
            </p>
            <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/90">
                  <span className="text-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Cta className="mt-8 w-full">
              Acceder ahora por {site.price} {site.currency}
            </Cta>
            <p className="mt-3 text-center text-xs text-muted">
              7 días de garantía
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-bg-elevated py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
            No comprás un pack suelto. Entrá a toda la academia {site.brand}
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            {site.lessons} lecciones · ~{site.hours} · {site.resources} recursos
            · 4 programas · comunidad privada
          </p>
          <div className="mt-10 divide-y divide-white/10 border border-white/10">
            {modules.map((m) => (
              <article
                key={m.title}
                className="grid gap-2 bg-bg px-5 py-5 md:grid-cols-[1.4fr_1fr_auto] md:items-center"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  {m.title}
                </h3>
                <p className="text-sm text-muted">{m.copy}</p>
                <p className="text-xs tracking-wide text-accent uppercase md:text-right">
                  {m.meta}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Cta>Quiero entrar a {site.brand}</Cta>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-5xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-10">
          <FaqList />
        </div>
        <div className="mt-10 border border-white/10 bg-bg-elevated p-6 text-center">
          <p className="font-medium text-white">¿Tenés más preguntas?</p>
          <p className="mt-2 text-sm text-muted">
            Escribinos por WhatsApp antes de decidir.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex border border-white/20 px-5 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      <section className="border-t border-white/10 bg-bg-elevated py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[0.8fr_1.2fr] md:items-center md:px-6">
          <div className="relative aspect-square overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Fundador"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div>
            <p className="text-sm tracking-wide text-accent uppercase">
              Quién está detrás
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
              El equipo de {site.brand}
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Editamos y enseñamos con el mismo criterio: menos caos, más
              método, resultados que se publican y se cobran. Todo ese
              conocimiento está dentro de la academia.
            </p>
            <p className="mt-4 text-sm text-white/80">
              Reemplazá esta foto y bio por la tuya cuando quieras.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.2em] uppercase">
              {site.brand}
            </p>
            <p className="mt-2 text-xs text-muted">
              © {new Date().getFullYear()} · Pago único · Acceso de por vida
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <a href={`https://instagram.com/${site.instagram}`} className="hover:text-white">
              Instagram
            </a>
            <a href={waLink()} className="hover:text-white">
              WhatsApp
            </a>
            <a href="#precio" className="hover:text-white">
              Acceder
            </a>
          </div>
        </div>
      </footer>

      <StickyCta />
    </main>
  );
}
