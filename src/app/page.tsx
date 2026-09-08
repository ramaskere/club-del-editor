import Image from "next/image";

/** Cambiá estos datos por los tuyos */
const BRAND = "Club del Editor";
const WHATSAPP = "5491112345678"; // sin + ni espacios
const INSTAGRAM = "clubdeleditor"; // sin @

const courses = [
  {
    name: "Edición de video",
    copy: "Del timeline al corte final: ritmo, audio y exportación lista para publicar.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Contenido para redes",
    copy: "Formatos verticales, ganchos y piezas que se ven profesionales sin rodeos.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Flujo creativo",
    copy: "Organización, revisiones y criterio editorial para trabajar más rápido.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
  },
];

const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  `Hola ${BRAND}, quiero info sobre los cursos.`
)}`;

export default function Home() {
  return (
    <main className="flex-1">
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#inicio"
          className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.18em] text-white uppercase"
        >
          {BRAND}
        </a>
        <nav className="flex items-center gap-6 text-sm text-white/85">
          <a href="#cursos" className="transition hover:text-white">
            Cursos
          </a>
          <a href="#metodo" className="hidden transition hover:text-white sm:inline">
            Método
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="border border-white/40 px-4 py-2 transition hover:border-white hover:bg-white/10"
          >
            Inscribirme
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=2400&q=80"
            alt="Estación de edición de video"
            fill
            priority
            className="hero-media object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        </div>

        <div className="relative w-full px-6 pb-16 pt-36 md:px-10 md:pb-20">
          <p className="animate-rise font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.32em] text-signal uppercase">
            {BRAND}
          </p>
          <h1 className="animate-rise-delay-1 mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] font-extrabold tracking-tight text-white md:text-7xl">
            Editá con
            <br />
            criterio, no a ciegas.
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-md text-base leading-relaxed font-light text-white/80 md:text-lg">
            Cursos prácticos para aprender edición de video y contenido, con
            método claro y resultados publicables.
          </p>
          <div className="animate-rise-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="bg-signal px-7 py-3.5 text-sm font-medium tracking-wide text-white transition hover:bg-signal-deep"
            >
              Quiero info por WhatsApp
            </a>
            <a
              href="#cursos"
              className="group relative px-2 py-3.5 text-sm font-medium text-white"
            >
              Ver cursos
              <span className="underline-draw absolute inset-x-2 bottom-2 h-px bg-white/80" />
            </a>
          </div>
        </div>
      </section>

      <section id="cursos" className="bg-paper px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <p className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.28em] text-signal uppercase">
              Cursos
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Aprendé lo que usás todos los días.
            </h2>
            <p className="mt-4 text-muted">
              Programas pensados para creadores y editores que quieren subir el
              nivel sin perder tiempo.
            </p>
          </div>

          <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {courses.map((course) => (
              <li key={course.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
                  {course.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {course.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="metodo"
        className="relative overflow-hidden bg-ink px-6 py-24 text-white md:px-10 md:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-signal/20 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.28em] text-signal uppercase">
              Método
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
              Menos teoría suelta. Más práctica guiada.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              Cada módulo se apoya en proyectos reales: armás, cortás, revisás y
              publicás. Salís con piezas en tu portafolio, no solo con apuntes.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80"
              alt="Proceso creativo de edición"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.28em] text-signal uppercase">
              Inscripción
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Empezá cuando quieras.
            </h2>
            <p className="mt-4 text-muted">
              Escribime y te paso fechas, precios y el curso que mejor encaja
              con tu nivel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="bg-ink px-7 py-3.5 text-sm font-medium text-white transition hover:bg-signal"
            >
              WhatsApp
            </a>
            <a
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank"
              rel="noreferrer"
              className="border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition hover:border-ink"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-paper px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-display)] tracking-[0.16em] text-ink uppercase">
            {BRAND}
          </p>
          <p>© {new Date().getFullYear()} · Cursos de edición</p>
        </div>
      </footer>
    </main>
  );
}
