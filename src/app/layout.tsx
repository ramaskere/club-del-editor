import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Club del Editor — Aprendé edición viral y cobrá más por tus videos",
  description:
    "Academia de edición con clases paso a paso, recursos descargables, comunidad y acceso de por vida. Un solo pago.",
  openGraph: {
    title: "Club del Editor",
    description:
      "Aprendé edición viral, descargá recursos y editá más rápido. Acceso de por vida.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
