"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { contexto } from "@/data/timeline";

export default function Contexto() {
  const trilhoRef = useRef<HTMLDivElement>(null);
  const [cardAtivo, setCardAtivo] = useState(0);

  const aoRolarTrilho = () => {
    const el = trilhoRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    if (!card) return;
    const passo = card.clientWidth + 20;
    setCardAtivo(
      Math.min(contexto.length - 1, Math.round(el.scrollLeft / passo))
    );
  };

  const irParaCard = (i: number) => {
    const el = trilhoRef.current;
    if (!el) return;
    const card = el.querySelectorAll("article")[i] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="titulo-contexto" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <p className="font-mono text-linha text-xs tracking-[0.25em] uppercase mb-3">
          Antes de 2008
        </p>
        <h2
          id="titulo-contexto"
          className="font-display text-3xl sm:text-4xl font-bold max-w-xl"
        >
          O território que preparou o terreno
        </h2>
        <p className="text-texto-suave mt-4 max-w-2xl leading-relaxed">
          O CVT Olavo Bilac não nasceu do nada: é herdeiro da industrialização
          de Duque de Caxias, da luta do bairro Jardim Olavo Bilac e das
          políticas estaduais de educação profissional.
        </p>
      </div>

      <div
        ref={trilhoRef}
        onScroll={aoRolarTrilho}
        className="mt-10 flex gap-5 overflow-x-auto px-5 pb-4 snap-x snap-mandatory [scrollbar-width:none] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 md:max-w-6xl md:mx-auto"
      >
        {contexto.map((c, i) => (
          <motion.article
            key={c.titulo}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="snap-start shrink-0 w-[82vw] sm:w-[380px] md:w-auto md:shrink bg-carta rounded-2xl overflow-hidden border border-white/5"
          >
            {c.foto && (
              <div className="relative aspect-[16/9]">
                <Image
                  src={c.foto.src}
                  alt={c.foto.legenda}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 82vw, 380px"
                />
              </div>
            )}
            <div className="p-5">
              <p className="font-mono text-linha text-xs tracking-widest uppercase">
                {c.periodo}
              </p>
              <h3 className="font-display text-xl font-bold mt-2">
                {c.titulo}
              </h3>
              <p className="text-texto-suave text-sm leading-relaxed mt-3">
                {c.texto}
              </p>
              {c.foto && (
                <p className="font-mono text-[11px] text-texto-suave/70 mt-4">
                  {c.foto.legenda} — {c.foto.fonte}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <div
        className="flex justify-center gap-2 mt-2 md:hidden"
        role="tablist"
        aria-label="Cards de contexto"
      >
        {contexto.map((c, i) => (
          <button
            key={c.titulo}
            onClick={() => irParaCard(i)}
            aria-label={`Ir para: ${c.titulo}`}
            aria-selected={cardAtivo === i}
            role="tab"
            className={`h-2.5 rounded-full transition-all ${
              cardAtivo === i ? "w-6 bg-linha" : "w-2.5 bg-texto-suave/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
