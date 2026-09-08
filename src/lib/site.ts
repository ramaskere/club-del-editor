/** Datos de oferta — editá acá */
export const site = {
  brand: "Club del Editor",
  price: 47,
  priceWas: 497,
  currency: "USD",
  deadline: "15 de septiembre",
  whatsapp: "5491112345678",
  instagram: "clubdeleditor",
  checkoutUrl: "#precio", // reemplazá por Stripe / Hotmart / etc.
  students: "2.400+",
  resources: "800+",
  lessons: "40+",
  hours: "18 h",
};

export const checkoutLabel = `Acceder por ${site.price} ${site.currency}`;

export function waLink(message?: string) {
  const text =
    message ??
    `Hola ${site.brand}, quiero info para entrar a la academia.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
