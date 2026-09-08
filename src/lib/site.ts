/** Datos de oferta — editá acá para conversión */
export const site = {
  brand: "Club del Editor",
  price: 47,
  priceWas: 497,
  currency: "USD",
  /** Fecha límite de la oferta (ISO). Usada por el countdown. */
  deadlineISO: "2026-09-15T23:59:59-03:00",
  deadlineLabel: "15 de septiembre",
  whatsapp: "5491112345678",
  instagram: "clubdeleditor",
  /** Pegá acá tu link de Hotmart / Stripe / Mercado Pago */
  checkoutUrl: "#comprar",
  students: "2.400",
  resources: "800+",
  lessons: "40+",
  hours: "18 h",
  guaranteeDays: 7,
  /** Valor percibido del stack (para anclar el precio) */
  valueStack: [
    { label: "Academia completa (4 programas)", value: 297 },
    { label: "Pack de presets y recursos", value: 97 },
    { label: "Comunidad + soporte", value: 67 },
    { label: "Agente de IA + certificado", value: 36 },
  ],
};

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
