import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Club del Editor — Aprendé edición viral y cobrá más por tus videos",
  description:
    "Academia de edición con clases paso a paso, recursos descargables, comunidad y acceso de por vida. Un solo pago.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body
        className="min-h-full antialiased"
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
