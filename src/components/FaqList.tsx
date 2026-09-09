"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "¿Club del Editor es un curso o un pack de presets?",
    a: "Es un curso completo de edición en Adobe Premiere Pro, de principiante a avanzado. Incluye recursos de edición y certificado al finalizar.",
  },
  {
    q: "¿Es un solo pago o una suscripción?",
    a: "Es un único pago. No hay cuotas mensuales ni cobros recurrentes en tu tarjeta.",
  },
  {
    q: "¿El acceso es de por vida?",
    a: "Sí. Acceso de por vida a las clases, los recursos incluidos y las actualizaciones del curso.",
  },
  {
    q: "¿Las futuras actualizaciones están incluidas?",
    a: "Sí. Cuando sumamos clases o recursos nuevos, entran en tu acceso sin costo extra.",
  },
  {
    q: "¿Necesito saber editar antes de entrar?",
    a: "No. Empezás desde cero: instalación, espacio de trabajo, atajos y después el flujo completo de edición.",
  },
  {
    q: "¿Qué programa se enseña?",
    a: `El curso está enfocado en ${site.software}: de 0 a 100, más extras de máscaras, B-roll y plugins.`,
  },
  {
    q: "¿Necesito tener Premiere Pro instalado?",
    a: "Sí, vas a trabajar en Adobe Premiere Pro. En el módulo de instalación te guiamos para dejarlo listo.",
  },
  {
    q: "¿Puedo usar lo aprendido en trabajos para clientes?",
    a: "Sí. El objetivo es que puedas editar contenido propio y también cobrar por editar a clientes.",
  },
  {
    q: "¿Hay certificado?",
    a: "Sí. Al completar el curso recibís el Course Completion Credential.",
  },
  {
    q: "¿Cuándo recibo el acceso?",
    a: "Enseguida después del pago, por email. Revisá bien el correo al comprar.",
  },
  {
    q: "¿Hay garantía?",
    a: `Sí. Tenés ${site.guaranteeDays} días para probar la formación. Si no es para vos, pedís el reembolso.`,
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
