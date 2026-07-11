"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
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

  if (indice === null) return null;
  const foto = fotos[indice];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={foto.legenda}
      className="fixed inset-0 z-50 bg-noite/97 backdrop-blur-sm flex flex-col p-3 sm:p-6"
      onClick={onFechar}
    >
      <div className="flex items-center justify-between shrink-0">
        <p className="font-mono text-xs sm:text-sm text-texto-suave">
          {indice + 1} / {fotos.length}
        </p>
        <button
          onClick={onFechar}
          aria-label="Fechar imagem"
          className="font-mono text-sm text-texto-suave border border-texto-suave/40 rounded-full px-4 py-2 hover:text-linha hover:border-linha focus-visible:outline focus-visible:outline-2 focus-visible:outline-linha"
        >
          Fechar ✕
        </button>
      </div>

      <div
        className="relative flex-1 my-3 sm:my-4 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={foto.src}
          alt={foto.legenda}
          fill
          className="object-contain"
          sizes="100vw"
          quality={90}
        />
      </div>

      <div
        className="shrink-0 flex items-center gap-3 justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={anterior}
          aria-label="Foto anterior"
          className="shrink-0 w-11 h-11 rounded-full border border-texto-suave/40 text-texto text-lg hover:border-linha hover:text-linha focus-visible:outline focus-visible:outline-2 focus-visible:outline-linha"
        >
          ←
        </button>
        <div className="text-center min-w-0">
          <p className="text-sm sm:text-base text-texto truncate">
            {foto.legenda}
          </p>
          <p className="font-mono text-[11px] sm:text-xs text-texto-suave mt-0.5 truncate">
            Fonte: {foto.fonte}
          </p>
        </div>
        <button
          onClick={proxima}
          aria-label="Próxima foto"
          className="shrink-0 w-11 h-11 rounded-full border border-texto-suave/40 text-texto text-lg hover:border-linha hover:text-linha focus-visible:outline focus-visible:outline-2 focus-visible:outline-linha"
        >
          →
        </button>
      </div>
    </div>
  );
}
