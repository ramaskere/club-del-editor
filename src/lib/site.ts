/** Datos de oferta — editá acá para conversión */
export const site = {
  brand: "Club del Editor",
  price: 47,
  priceWas: 497,
  currency: "USD",
  deadlineISO: "2026-09-15T23:59:59-03:00",
  deadlineLabel: "15 de septiembre",
  whatsapp: "5491112345678",
  instagram: "clubdeleditor",
  /** Pegá acá tu link de Hotmart / Stripe / Mercado Pago */
  checkoutUrl: "#comprar",
  students: "2.400",
  resources: "Pack incluido",
  lessons: "17+",
  hours: "en crecimiento",
  software: "Adobe Premiere Pro",
  guaranteeDays: 7,
  valueStack: [
    { label: "Curso completo Premiere Pro (0 a 100)", value: 197 },
    { label: "Extras: máscaras, B-roll y plugins", value: 97 },
    { label: "Recursos de edición incluidos", value: 67 },
    { label: "Certificado de finalización", value: 36 },
  ],
};

/** Temario real del curso (se completa cuando mandes el resto) */
export const curriculum = [
  {
    title: "Empieza por aquí",
    copy: "Bienvenida, mentalidad del editor, recursos de edición y primeros pasos.",
    meta: "4 lecciones",
    lessons: [
      "Bienvenida",
      "Mentalidad del editor",
      "Recursos de edición",
      "Primeros pasos",
    ],
  },
  {
    title: "Instalación y configuración de Adobe Premiere",
    copy: "Dejá Premiere listo para editar sin pelearte con la instalación.",
    meta: "1 lección",
    lessons: ["Instalación y configuración de Adobe Premiere"],
  },
  {
    title: "Configuración de espacio de trabajo",
    copy: "Armá tu layout para trabajar más rápido y cómodo.",
    meta: "1 lección",
    lessons: ["Configuración de espacio de trabajo"],
  },
  {
    title: "Cómo usar los atajos de Premiere Pro",
    copy: "Atajos esenciales para editar a otra velocidad.",
    meta: "1 lección",
    lessons: ["Cómo usar los atajos de Premiere Pro"],
  },
  {
    title: "De 0 a 100 en Premiere Pro",
    copy: "Proyecto, cortes, color, subtítulos, zoom, SFX, música y exportación.",
    meta: "7 lecciones",
    lessons: [
      "Cómo organizar un proyecto nuevo",
      "Cómo quitar silencios y realizar cortes",
      "Colorización",
      "Cómo hacer subtítulos en automático",
      "Zoom y efectos esenciales",
      "Cómo usar SFX y música",
      "Cómo exportar tus videos",
    ],
  },
  {
    title: "Extras Premiere Pro",
    copy: "Máscaras, B-roll profesional y los mejores plugins.",
    meta: "3 lecciones",
    lessons: [
      "Cómo usar máscaras",
      "Cómo utilizar B-roll como pro",
      "Los mejores plugins para Premiere Pro",
    ],
  },
  {
    title: "Certificado de finalización",
    copy: "Course Completion Credential al terminar el recorrido.",
    meta: "Incluido",
    lessons: ["Course Completion Credential"],
  },
];

export const checkoutLabel = `Acceder por ${site.price} ${site.currency}`;

export const trustLine = `Pago único · Acceso inmediato · ${site.guaranteeDays} días de garantía`;

export function waLink(message?: string) {
  const text =
    message ??
    `Hola ${site.brand}, quiero info para entrar a la academia.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function stackTotal() {
  return site.valueStack.reduce((sum, item) => sum + item.value, 0);
}
