import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import VLibras from "@/components/VLibras";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Linha do Tempo do CVT Olavo Bilac — 2008 a 2019",
  description:
    "Marcos históricos, políticos e pedagógicos do Centro Vocacional Tecnológico Olavo Bilac, em Duque de Caxias/RJ. Produto Educacional do ProfEPT — Colégio Pedro II.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <VLibras />
      </body>
    </html>
  );
}
