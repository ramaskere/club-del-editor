"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Club del Editor es un curso o un pack de presets?",
    a: "Es una academia completa de edición, de principiante a avanzado. Los presets y recursos vienen incluidos para que apliques más rápido lo que aprendés, pero no son el único contenido.",
  },
  {
    q: "¿Es un solo pago o una suscripción?",
    a: "Es un único pago. No hay cuotas mensuales ni cobros recurrentes en tu tarjeta.",
  },
  {
    q: "¿El acceso es de por vida?",
    a: "Sí. Acceso de por vida a las clases, los recursos incluidos y la comunidad de soporte.",
  },
  {
    q: "¿Las futuras actualizaciones están incluidas?",
    a: "Sí. Cuando sumamos clases, técnicas o recursos nuevos, entran en tu acceso sin costo extra.",
  },
  {
    q: "¿Necesito saber editar antes de entrar?",
    a: "No. Podés empezar desde cero. Si ya tenés experiencia, entrás directo a los módulos avanzados o al programa que uses.",
  },
  {
    q: "¿Qué programas se enseñan?",
    a: "CapCut (PC y móvil), Premiere Pro, After Effects y DaVinci Resolve, con recursos adaptados a cada uno.",
  },
  {
    q: "¿Puedo usarlo si solo edito desde el móvil?",
    a: "Sí. Hay un módulo específico de CapCut móvil, desde nivel inicial hasta técnicas más avanzadas.",
  },
  {
    q: "¿Puedo usar los recursos en trabajos para clientes?",
    a: "Sí, en tu contenido y en proyectos para clientes. No está permitida la reventa ni redistribuirlos como pack propio.",
  },
  {
    q: "¿Cuándo recibo el acceso?",
    a: "Enseguida después del pago, por email. Revisá bien el correo al comprar.",
  },
  {
    q: "¿Hay garantía?",
    a: "Sí. Tenés 7 días para probar la formación. Si no es para vos, pedís el reembolso.",
  },
];

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-white/10 border-y border-white/10">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-base font-medium text-white md:text-lg">
                {item.q}
              </span>
              <span
                className={`mt-1 shrink-0 text-accent transition ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen ? (
              <p className="pb-5 pr-8 text-sm leading-relaxed text-muted md:text-base">
                {item.a}
              </p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
