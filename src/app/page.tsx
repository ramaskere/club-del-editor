import Image from "next/image";

/** Cambiá estos datos por los tuyos */
const BRAND = "Cuero Studio";
const WHATSAPP = "5491112345678"; // sin + ni espacios, ej: 54911...
const INSTAGRAM = "cuerostudio"; // sin @

const products = [
  {
    name: "Billeteras",
    copy: "Perfiles limpios, costura firme y cuero que se pone mejor con el uso.",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Cinturones",
    copy: "Hebillas sólidas y cueros seleccionados para el día a día.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Accesorios",
    copy: "Porta documentos, llaveros y piezas a medida según tu pedido.",
    image:
      "https://images.unsplash.com/photo-1473187983305-f615310a4e6f?auto=format&fit=crop&w=1200&q=80",
  },
];

const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  `Hola ${BRAND}, quiero consultar por una pieza de cuero.`
)}`;

export default function Home() {
  return (
    <main className="flex-1">
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#inicio"
          className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.22em] text-white uppercase"
        >
          {BRAND}
        </a>
        <nav className="flex items-center gap-6 text-sm text-white/85">
          <a href="#piezas" className="transition hover:text-white">
            Piezas
          </a>
          <a href="#oficio" className="hidden transition hover:text-white sm:inline">
            Oficio
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="border border-white/40 px-4 py-2 transition hover:border-white hover:bg-white/10"
          >
            Pedir
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&w=2400&q=80"
            alt="Piezas de cuero artesanal"
            fill
            priority
            className="hero-media object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_20%,rgba(20,17,15,0.35)_70%)]" />
        </div>

        <div className="relative w-full px-6 pb-16 pt-36 md:px-10 md:pb-20">
          <p className="animate-rise font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.35em] text-brass uppercase">
            {BRAND}
          </p>
          <h1 className="animate-rise-delay-1 mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] font-bold tracking-tight text-white md:text-7xl">
            Cuero que se usa,
            <br />
            no que se guarda.
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-md text-base leading-relaxed font-light text-white/80 md:text-lg">
            Piezas hechas a mano en cuero genuino. Pedís, elegís el acabado y te
            llega listo para el día a día.
          </p>
          <div className="animate-rise-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="bg-brass px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition hover:bg-brass-deep hover:text-white"
            >
              Pedir por WhatsApp
            </a>
            <a
              href="#piezas"
              className="group relative px-2 py-3.5 text-sm font-medium text-white"
            >
              Ver piezas
              <span className="underline-draw absolute inset-x-2 bottom-2 h-px bg-white/80" />
            </a>
          </div>
        </div>
      </section>

      <section id="piezas" className="bg-paper px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <p className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.3em] text-brass-deep uppercase">
              Catálogo
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Tres líneas. Una misma materia.
            </h2>
            <p className="mt-4 text-muted">
              Trabajamos cuero seleccionado, corte a medida y costura a mano o
              máquina según la pieza.
            </p>
          </div>

          <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {products.map((product) => (
              <li key={product.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {product.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="oficio"
        className="relative overflow-hidden bg-ink px-6 py-24 text-white md:px-10 md:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-brass/15 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.3em] text-brass uppercase">
              Oficio
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
              Hecho a mano, sin atajos.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              Cada pedido se arma desde el corte. Elegís tono, tamaño y detalles;
              nosotros cortamos, cosemos y terminamos la pieza para que acompañe
              años de uso.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1400&q=80"
              alt="Trabajo artesanal en cuero"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-stone px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.3em] text-brass-deep uppercase">
              Encargos
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Contame qué necesitás.
            </h2>
            <p className="mt-4 text-muted">
              Escribime por WhatsApp con la pieza, el color y el uso. Te paso
              tiempos y precio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="bg-ink px-7 py-3.5 text-sm font-medium text-white transition hover:bg-oxblood"
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
          <p className="font-[family-name:var(--font-display)] tracking-[0.2em] text-ink uppercase">
            {BRAND}
          </p>
          <p>© {new Date().getFullYear()} · Cuero genuino · Hecho a mano</p>
        </div>
      </footer>
    </main>
  );
}
