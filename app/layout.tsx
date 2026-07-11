import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import VLibras from "@/components/VLibras";
import MotionProvider from "@/components/MotionProvider";

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
  metadataBase: new URL("https://linha-do-tempo-cvtobl.vercel.app"),
  title: "Linha do Tempo do CVT Olavo Bilac — 2008 a 2019",
  description:
    "Marcos históricos, políticos e pedagógicos do Centro Vocacional Tecnológico Olavo Bilac, em Duque de Caxias/RJ. Produto Educacional do ProfEPT — Colégio Pedro II.",
  openGraph: {
    title: "Linha do Tempo do CVT Olavo Bilac — 2008 a 2019",
    description:
      "Memória institucional da educação profissional em Duque de Caxias/RJ. Produto Educacional do ProfEPT — Colégio Pedro II.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
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
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-linha focus:text-noite focus:px-4 focus:py-2 focus:rounded-full font-mono text-sm"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>{children}</MotionProvider>
        <VLibras />
      </body>
    </html>
  );
}
