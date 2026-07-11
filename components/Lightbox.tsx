"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Foto } from "@/data/timeline";

type Props = {
  fotos: Foto[];
  indice: number | null;
  onFechar: () => void;
  onNavegar: (novoIndice: number) => void;
};

export default function Lightbox({ fotos, indice, onFechar, onNavegar }: Props) {
  const aberto = indice !== null;

  const anterior = useCallback(() => {
    if (indice === null) return;
    onNavegar((indice - 1 + fotos.length) % fotos.length);
  }, [indice, fotos.length, onNavegar]);

  const proxima = useCallback(() => {
    if (indice === null) return;
    onNavegar((indice + 1) % fotos.length);
  }, [indice, fotos.length, onNavegar]);

  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") proxima();
    };
    document.addEventListener("keydown", aoTeclar);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = "";
    };
  }, [aberto, onFechar, anterior, proxima]);

  const toqueInicial = useRef<{ x: number; y: number } | null>(null);
  const arrastou = useRef(false);

  if (indice === null) return null;
  const foto = fotos[indice];

  const aoTocar = (e: React.TouchEvent) => {
    arrastou.current = false;
    toqueInicial.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const aoSoltar = (e: React.TouchEvent) => {
    if (!toqueInicial.current) return;
    const dx = e.changedTouches[0].clientX - toqueInicial.current.x;
    const dy = e.changedTouches[0].clientY - toqueInicial.current.y;
    toqueInicial.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      arrastou.current = true;
      if (dx < 0) proxima();
      else anterior();
    }
  };

  const aoClicarFundo = () => {
    // swipe não deve fechar; clique em área vazia sim
    if (arrastou.current) {
      arrastou.current = false;
      return;
    }
    onFechar();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={foto.legenda}
      className="fixed inset-0 z-50 bg-noite/97 backdrop-blur-sm flex flex-col p-3 sm:p-6"
      onClick={aoClicarFundo}
    >
      <div className="flex items-center justify-between shrink-0">
        <p className="font-mono text-xs sm:text-sm text-texto-suave">
          {indice + 1} / {fotos.length}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFechar();
          }}
          aria-label="Fechar imagem"
          className="font-mono text-sm text-texto-suave border border-texto-suave/40 rounded-full px-4 py-2 hover:text-linha hover:border-linha focus-visible:outline focus-visible:outline-2 focus-visible:outline-linha"
        >
          Fechar ✕
        </button>
      </div>

      <h2 className="shrink-0 font-display text-xl sm:text-3xl font-bold text-texto text-center mt-3 sm:mt-4 px-2">
        {foto.legenda}
      </h2>

      <motion.div
        key={foto.src}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative flex-1 my-3 sm:my-4 min-h-0 touch-pan-y"
        onTouchStart={aoTocar}
        onTouchEnd={aoSoltar}
      >
        <Image
          src={foto.src}
          alt={foto.legenda}
          fill
          className="object-contain"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      <div className="shrink-0 flex items-center gap-3 justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            anterior();
          }}
          aria-label="Foto anterior"
          className="shrink-0 w-11 h-11 rounded-full border border-texto-suave/40 text-texto text-lg hover:border-linha hover:text-linha focus-visible:outline focus-visible:outline-2 focus-visible:outline-linha"
        >
          ←
        </button>
        <p
          className="font-mono text-[11px] sm:text-xs text-texto-suave text-center truncate"
          onClick={(e) => e.stopPropagation()}
        >
          Fonte: {foto.fonte}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            proxima();
          }}
          aria-label="Próxima foto"
          className="shrink-0 w-11 h-11 rounded-full border border-texto-suave/40 text-texto text-lg hover:border-linha hover:text-linha focus-visible:outline focus-visible:outline-2 focus-visible:outline-linha"
        >
          →
        </button>
      </div>
    </div>
  );
}
