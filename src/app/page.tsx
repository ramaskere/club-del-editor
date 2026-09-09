import Image from "next/image";
import type { ReactNode } from "react";
import { Countdown } from "@/components/Countdown";
import { FaqList } from "@/components/FaqList";
import { TrustBadges, TrustLine } from "@/components/TrustLine";
import { checkoutLabel, curriculum, site, stackTotal, waLink } from "@/lib/site";

const brands = [
  "Creadores",
  "Agencias",
  "YouTubers",
  "TikTok",
  "Reels",
  "Shorts",
  "Marcas",
  "Freelancers",
];

const showcaseCards = [
  {
    title: "Ediciones virales",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hemos reunido todo",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Antes → Después",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Comunidad",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
];

const reels = [
  { views: "1.5M", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80" },
  { views: "890K", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80" },
  { views: "2.1M", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80" },
  { views: "640K", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80" },
  { views: "3.2M", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80" },
  { views: "510K", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80" },
  { views: "1.1M", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80" },
  { views: "720K", image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=600&q=80" },
  { views: "980K", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80" },
  { views: "430K", image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=600&q=80" },
];

const steps = [
  {
    n: "01",
    title: "Aprendé",
    copy: "Seguí las clases desde fundamentos hasta técnicas avanzadas de edición viral.",
  },
  {
    n: "02",
    title: "Aplicá",
    copy: "Usá recursos de edición y las técnicas del curso en tus propios proyectos.",
  },
  {
    n: "03",
    title: "Creá y monetizá",
    copy: "Mejorá tus videos, crecé tu contenido o cobrá por editar a clientes.",
  },
];

const resourceTypes = [
  "Organización de proyecto",
  "Cortes y ritmo",
  "Colorización",
  "Subtítulos automáticos",
  "Zoom y efectos",
  "SFX y música",
  "Máscaras",
  "B-roll profesional",
];

const softwares = [
  { name: "Adobe Premiere Pro", meta: "Curso completo de 0 a 100" },
  { name: "Espacio de trabajo", meta: "Layout y flujo profesional" },
  { name: "Atajos esenciales", meta: "Editá más rápido" },
  { name: "Extras + plugins", meta: "Máscaras, B-roll y tools" },
];

const includes = [
  "Curso completo de Adobe Premiere Pro",
  "Módulo Empieza por aquí (mentalidad + recursos)",
  "Instalación y configuración paso a paso",
  "De 0 a 100: cortes, color, subtítulos, zoom, SFX y export",
  "Extras: máscaras, B-roll y mejores plugins",
  "Recursos de edición incluidos",
  "Certificado de finalización",
  "Nuevas clases incluidas al sumarse",
  "Acceso inmediato y de por vida",
];

const guarantees = [
  "Tu tarjeta no queda suscrita a nada",
  "Recibís el acceso inmediato por email",
  "Aprendés a tu ritmo, sin horarios",
  "Acceso de por vida",
  "Actualizaciones futuras incluidas",
  "Podés empezar sin experiencia",
  "Trabajás en Adobe Premiere Pro",
];

const testimonials = [
  {
    name: "Lucía M.",
    role: "Creadora de contenido",
    quote:
      "Pasé de pelearme con Premiere a terminar videos con ritmo, color y subtítulos sin trabarme.",
  },
  {
    name: "Martín R.",
    role: "Editor freelance",
    quote:
      "Los atajos + el flujo de cortes me hicieron cobrar más. Ahora entrego más rápido a clientes.",
  },
  {
    name: "Sofía A.",
    role: "Agencia",
    quote:
      "Ordenamos cómo armamos cada proyecto. Mismo estándar en todos los clientes, más limpio.",
  },
];

function Cta({
  href = site.checkoutUrl,
  children = checkoutLabel,
  className = "",
  showTrust = false,
}: {
  href?: string;
  children?: ReactNode;
  className?: string;
  showTrust?: boolean;
}) {
  return (
    <div className={showTrust ? "inline-flex flex-col items-center gap-2" : "contents"}>
      <a href={href} className={`btn-primary px-6 py-3.5 text-sm ${className}`}>
        {children}
      </a>
      {showTrust ? <TrustLine /> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Top urgency bar */}
      <div className="border-b border-accent/30 bg-accent/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-4 py-2.5 md:flex-row md:gap-4">
          <p className="text-center text-xs text-white/90 md:text-sm">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle dot-live" />
            Actualizaciones de por vida · Solo hasta el {site.deadlineLabel}
          </p>
          <Countdown className="scale-90" />
          <a
            href={site.checkoutUrl}
            className="text-xs font-semibold text-accent underline-offset-2 hover:underline md:text-sm"
          >
            Entrar hoy →
          </a>
        </div>
      </div>

      {/* 1. HERO */}
      <section id="inicio" className="relative hero-glow overflow-hidden">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pt-10 pb-6 text-center md:px-6 md:pt-16">
          <div className="animate-rise chip inline-flex items-center gap-2 border-accent/50 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent dot-live" />
            Master Nº1 en edición viral
          </div>

          <h1 className="animate-rise-1 mt-7 max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-tight text-white md:text-6xl">
            Aprendé edición viral y empezá a cobrar más por tus videos{" "}
            <span className="text-gradient">en solo 7 días</span>
          </h1>

          <p className="animate-rise-2 mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Curso completo de {site.software}: de 0 a 100, con mentalidad,
            recursos, atajos, color, subtítulos, SFX y extras para editar
            profesionalmente sin empezar cada video desde cero.
          </p>

          <div className="animate-rise-3 mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              `+${site.students} alumnos`,
              "1 solo pago",
              "Acceso de por vida",
            ].map((label) => (
              <span
                key={label}
                className="chip px-4 py-2 text-[11px] font-semibold tracking-wide text-white/90 uppercase"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="animate-rise-3 mt-5 inline-flex items-center gap-2 rounded-xl border border-gold/50 bg-gold/5 px-4 py-2.5 text-sm text-white/90">
            <span aria-hidden>📈</span>
            Unite a la academia de mayor crecimiento en español.
          </div>

          <div className="mt-8 w-full max-w-md">
            <Countdown />
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <Cta className="px-8 py-4 text-base" showTrust>
              Quiero entrar a {site.brand} — {site.price} {site.currency}
            </Cta>
            <TrustBadges />
            <a
              href={waLink("Hola, tengo dudas antes de entrar a la academia")}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted underline-offset-2 hover:text-white hover:underline"
            >
              ¿Dudas? Escribime por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. VIDEO HERO */}
      <section className="mx-auto max-w-4xl px-4 pb-16 md:px-6 md:pb-24">
        <p className="mb-3 text-center text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Dale al play para comenzar
        </p>
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
          Vas a editar a este nivel
        </h2>
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-bg-soft shadow-[0_0_80px_rgba(245,197,24,0.25)]">
          <Image
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=80"
            alt="Preview de la academia"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Reproducir video"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-ink shadow-[0_0_40px_rgba(245,197,24,0.7)] md:h-20 md:w-20">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current md:h-8 md:w-8">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-muted">
          Reemplazá este video por tu VSL / demo real
        </p>
      </section>

      {/* 3. FOUR SHOWCASE CARDS */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {showcaseCards.map((card) => (
            <article
              key={card.title}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold md:p-4 md:text-base">
                {card.title}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. BIG COUNTER */}
      <section className="px-4 py-10 text-center md:py-14">
        <p className="text-6xl font-extrabold tracking-tight text-accent md:text-8xl">
          +{site.students}
        </p>
        <p className="mt-3 text-lg text-white md:text-xl">
          alumnos ya están en {site.brand}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
          Unite a una de las academias de edición en español de mayor
          crecimiento. Nuestros alumnos han editado para creadores de más de
          500.000 seguidores.
        </p>
      </section>

      {/* 5. BRAND LOGOS */}
      <section className="border-y border-white/10 bg-bg-elevated py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4">
          {brands.map((b) => (
            <span
              key={b}
              className="text-sm font-semibold tracking-wide text-white/30 uppercase"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* 6. WALL OF REELS */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="mb-2 text-center text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Resultados reales
        </p>
        <h2 className="mb-8 text-center text-2xl font-extrabold md:text-4xl">
          Vas a editar a este nivel
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
          {reels.map((reel, i) => (
            <article
              key={`${reel.views}-${i}`}
              className="group relative aspect-[9/16] overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={reel.image}
                alt={`Ejemplo de edición ${i + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <p className="absolute bottom-2 left-2 text-xs font-semibold text-white">
                ▶ {reel.views}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 7. STORY */}
      <section id="academia" className="mx-auto max-w-3xl px-4 py-16 text-center md:px-6 md:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Todo lo que me habría gustado tener cuando empecé a crear contenido
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
          Aprender edición suele ser un caos: tutoriales sueltos, recursos en
          páginas que te cuestan mínimo 30€ al mes y horas intentando descubrir
          cómo se ha creado cada efecto.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          Por eso reunimos en un mismo lugar todo lo que necesitás: clases paso
          a paso, presets de subtítulos, animaciones, transiciones, B-roll,
          efectos, música viral, sonidos, LUTs y una comunidad donde resolver
          dudas.
        </p>
        <p className="mt-6 text-lg font-semibold text-white">
          Sin pagar suscripciones. Sin empezar cada proyecto desde cero.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["Aprendé", "Descargá", "Aplicá con 1 clic"].map((label) => (
            <span
              key={label}
              className="chip px-4 py-2 text-sm font-medium text-white"
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* 8. 3 STEPS */}
      <section className="bg-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold tracking-tight md:text-5xl">
            De cero a una edición profesional, paso a paso
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.n}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg p-6"
              >
                <span className="absolute top-4 right-4 text-sm font-bold text-accent">
                  {step.n}
                </span>
                <div className="mb-5 h-28 rounded-xl bg-gradient-to-br from-accent/35 to-gold-deep/15" />
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Podés empezar desde cero o entrar directo en el nivel que necesites.
          </p>
        </div>
      </section>

      {/* 9. STOP STARTING FROM ZERO */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Dejá de empezar cada video desde cero
          </h2>
          <p className="mt-5 text-muted">
            Aprendés cómo se construye una edición profesional y tenés los
            recursos para aplicar cada técnica mucho más rápido.
          </p>
          <p className="mt-4 text-lg font-semibold text-white">
            Lo que antes te llevaba 3 horas, ahora lo resolvés en 10 minutos.
          </p>
          <ol className="mt-8 space-y-4">
            {[
              ["Aplicás el preset", "Arrastrás el recurso sobre tu clip."],
              ["Personalizás", "Ajustás color, ritmo y estilo a tu video."],
              ["Resultado final", "Acabado profesional en minutos."],
            ].map(([t, c], i) => (
              <li key={t} className="flex gap-4 border-l-2 border-accent/50 pl-4">
                <span className="font-semibold text-accent">0{i + 1}</span>
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
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80"
            alt="Timeline de edición"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* 10. RESOURCES */}
      <section id="recursos" className="bg-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Todo esto también lo vas a poder crear vos
            </h2>
            <p className="mt-4 text-muted">
              Aprendés cómo se arman estas ediciones y usás nuestros recursos
              como punto de partida.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {resourceTypes.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-bg px-4 py-6 text-center text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-accent/40 bg-accent-soft p-8 text-center md:p-12">
            <p className="text-5xl font-extrabold text-accent md:text-7xl">
              {site.software}
            </p>
            <p className="mt-2 text-white">de 0 a 100 + extras incluidos</p>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
              Instalación, atajos, cortes, color, subtítulos, zoom, SFX, música,
              máscaras, B-roll, plugins y certificado.
            </p>
            <Cta className="mt-6">Quiero dominar Premiere Pro</Cta>
          </div>
        </div>
      </section>

      {/* 11. MORE THAN PRESETS + SOFTWARE */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6 md:py-24">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
          Un solo programa. Un flujo completo.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted md:text-lg">
          {site.brand} te lleva de la mentalidad del editor hasta exportar como
          pro en {site.software}.
        </p>
        <h3 className="mt-14 text-2xl font-bold">
          Lo que vas a dominar dentro
        </h3>
        <div className="mt-6 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {softwares.map((sw) => (
            <div key={sw.name} className="rounded-2xl border border-white/10 bg-bg-elevated p-5">
              <p className="text-lg font-semibold">{sw.name}</p>
              <p className="mt-1 text-sm text-muted">{sw.meta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. WHAT YOU GET INSIDE */}
      <section className="bg-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold tracking-tight md:text-5xl">
            Esto es exactamente lo que encontrás al entrar
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ["Empieza por aquí", "Mentalidad, recursos y primeros pasos"],
              ["Premiere listo para editar", "Instalación, workspace y atajos"],
              ["De 0 a 100", "Cortes, color, subtítulos, zoom, SFX y export"],
              ["Extras + certificado", "Máscaras, B-roll, plugins y credential"],
            ].map(([t, c]) => (
              <div
                key={t}
                className="relative min-h-48 overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1000&q=80"
                  alt=""
                  fill
                  className="object-cover opacity-40"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xl font-semibold">{t}</p>
                  <p className="text-sm text-muted">{c}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Cta>Quiero entrar en la academia</Cta>
          </div>
        </div>
      </section>

      {/* 13. COMMUNITY + TESTIMONIALS */}
      <section id="alumnos" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
          No vas a aprender solo
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Comunidad privada para dudas, feedback e inspiración. Academia viva:
          nuevas clases sin volver a pagar.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-white/10 bg-bg-elevated p-6"
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
        <div className="mt-10 rounded-2xl border border-gold/40 bg-gold/10 p-6 text-center md:p-8">
          <p className="text-sm text-gold">
            Solo hasta el {site.deadlineLabel}
          </p>
          <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">
            Entrá ahora y las actualizaciones son tuyas de por vida
          </h3>
          <div className="mt-4">
            <Countdown className="!justify-center" />
          </div>
          <div className="mt-6 flex justify-center">
            <Cta showTrust>Quiero mi acceso con updates</Cta>
          </div>
        </div>
      </section>

      {/* 14. PRICING — bloque de compra */}
      <section id="precio" className="bg-bg-elevated py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.05fr] lg:items-start md:px-6">
          <div>
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
              Un solo pago · Acceso de por vida
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              Todo lo que necesitás para convertirte en editor, en un solo lugar
            </h2>
            <p className="mt-4 text-muted">
              Si compraras cada parte por separado, el valor supera los{" "}
              <span className="font-semibold text-white">
                {stackTotal()} {site.currency}
              </span>
              . Hoy lo tenés todo por {site.price} {site.currency}.
            </p>
            <ul className="mt-8 space-y-3">
              {site.valueStack.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm"
                >
                  <span className="text-white/85">{item.label}</span>
                  <span className="font-medium text-muted line-through">
                    {item.value} {site.currency}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3">
              {guarantees.map((g) => (
                <li key={g} className="flex gap-3 text-sm text-muted">
                  <span className="text-accent">✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div
            id="comprar"
            className="glow-box scroll-mt-28 rounded-3xl border border-accent/50 bg-bg p-6 md:p-8"
          >
            <div className="mb-4 rounded-xl border border-gold/40 bg-gold/10 px-3 py-2 text-center text-xs font-medium text-gold">
              Oferta limitada · Cierra el {site.deadlineLabel}
            </div>
            <Countdown className="mb-5 !justify-center" />
            <div className="flex items-end gap-3">
              <span className="text-lg text-muted line-through">
                {site.priceWas} {site.currency}
              </span>
              <span className="text-5xl font-extrabold">
                {site.price} {site.currency}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Pago único · Sin suscripción · Acceso inmediato por email
            </p>
            <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/90">
                  <span className="text-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={site.checkoutUrl}
              className="btn-primary mt-8 flex w-full px-6 py-4 text-base"
            >
              Acceder ahora por {site.price} {site.currency}
            </a>
            <TrustBadges className="mt-4" />
            <div className="mt-6 rounded-xl border border-white/10 bg-bg-elevated p-4 text-center">
              <p className="text-sm font-semibold text-white">
                Garantía de {site.guaranteeDays} días
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                Entrá, mirá las clases y si no es para vos, pedís el reembolso.
                Sin vueltas. El riesgo es nuestro.
              </p>
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-center text-sm text-muted underline-offset-2 hover:text-white hover:underline"
            >
              Prefiero consultar por WhatsApp antes
            </a>
          </div>
        </div>
      </section>

      {/* 15. CURRICULUM */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold tracking-tight md:text-5xl">
          Temario real de {site.brand}
        </h2>
        <p className="mt-4 text-center text-muted">
          {site.lessons} lecciones en {site.software} · certificado incluido ·
          más módulos en camino
        </p>
        <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
          {curriculum.map((m) => (
            <article
              key={m.title}
              className="grid gap-3 bg-bg-elevated px-5 py-5 md:grid-cols-[1.2fr_1.4fr_auto] md:items-start"
            >
              <div>
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="mt-1 text-sm text-muted">{m.copy}</p>
              </div>
              <ul className="space-y-1 text-sm text-white/75">
                {m.lessons.map((lesson) => (
                  <li key={lesson} className="flex gap-2">
                    <span className="text-accent">•</span>
                    {lesson}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold tracking-wide text-accent uppercase md:text-right">
                {m.meta}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Cta>Quiero entrar a {site.brand}</Cta>
        </div>
      </section>

      {/* 16. FAQ */}
      <section id="faq" className="bg-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-10">
            <FaqList />
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-bg p-6 text-center">
            <p className="font-medium text-white">¿Tenés más preguntas?</p>
            <p className="mt-2 text-sm text-muted">
              Escribinos por WhatsApp antes de decidir.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 17. FOUNDER */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-center md:px-6 md:py-20">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
            alt="Fundador"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">
            Quién está detrás
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            El equipo de {site.brand}
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Editamos y enseñamos con el mismo criterio: menos caos, más método,
            resultados que se publican y se cobran.
          </p>
          <p className="mt-4 text-sm text-white/70">
            Reemplazá esta foto y bio por la tuya.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-extrabold tracking-[0.16em] uppercase">
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
    </main>
  );
}
