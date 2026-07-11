"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden">
      <Image
        src="/images/cvtobl-fachada.jpg"
        alt="Fachada do Centro Vocacional Tecnológico Olavo Bilac"
        fill
        priority
        className="object-cover object-center opacity-60 sm:opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noite/20 via-noite/60 to-noite sm:from-noite/40 sm:via-noite/70" />

      <div className="relative px-5 pb-14 pt-24 max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-linha text-xs sm:text-sm tracking-[0.25em] uppercase mb-4"
        >
          Memória institucional · 2008–2019
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="font-display text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl font-extrabold"
        >
          Linha do Tempo do{" "}
          <span className="text-linha">CVT Olavo Bilac</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="costura-h h-[2px] w-40 sm:w-64 my-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-texto-suave max-w-2xl text-base sm:text-lg leading-relaxed"
        >
          Os marcos históricos, políticos e pedagógicos do Centro Vocacional
          Tecnológico Olavo Bilac, em Duque de Caxias/RJ — onde a educação
          profissional pública encontrou a moda, o carnaval e a luta de um
          bairro operário da Baixada Fluminense.
        </motion.p>

        <motion.a
          href="#ano-2008"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-noite bg-linha px-5 py-3 rounded-full font-medium hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-linha transition"
        >
          Percorrer a linha do tempo ↓
        </motion.a>
      </div>
    </header>
  );
}
