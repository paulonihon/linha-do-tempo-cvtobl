"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Foto } from "@/data/timeline";

type Props = {
  fotos: Foto[];
  indice: number | null;
  onFechar: () => void;
  onNavegar: (novoIndice: number) => void;
};

const ZOOM_MAX = 4;

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

  // zoom: escala + deslocamento (pan)
  const [zoom, setZoom] = useState({ s: 1, x: 0, y: 0 });
  const ampliado = zoom.s > 1.02;

  useEffect(() => {
    setZoom({ s: 1, x: 0, y: 0 });
  }, [indice]);

  const toqueInicial = useRef<{ x: number; y: number } | null>(null);
  const arrastou = useRef(false);
  const pinca = useRef<{ dist: number; s: number } | null>(null);
  const panInicial = useRef<{ x: number; y: number; zx: number; zy: number } | null>(
    null
  );

  if (indice === null) return null;
  const foto = fotos[indice];

  const limitarPan = (v: number, s: number) => {
    const limite = (s - 1) * 300;
    return Math.max(-limite, Math.min(limite, v));
  };

  const aoTocar = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinca.current = { dist: Math.hypot(dx, dy), s: zoom.s };
      arrastou.current = true;
      return;
    }
    arrastou.current = false;
    toqueInicial.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    if (ampliado) {
      panInicial.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        zx: zoom.x,
        zy: zoom.y,
      };
    }
  };

  const aoMoverToque = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinca.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const novaEscala = Math.max(
        1,
        Math.min(ZOOM_MAX, (pinca.current.s * Math.hypot(dx, dy)) / pinca.current.dist)
      );
      setZoom((z) => ({
        s: novaEscala,
        x: novaEscala === 1 ? 0 : limitarPan(z.x, novaEscala),
        y: novaEscala === 1 ? 0 : limitarPan(z.y, novaEscala),
      }));
      return;
    }
    if (e.touches.length === 1 && ampliado && panInicial.current) {
      arrastou.current = true;
      const p = panInicial.current;
      setZoom((z) => ({
        s: z.s,
        x: limitarPan(p.zx + e.touches[0].clientX - p.x, z.s),
        y: limitarPan(p.zy + e.touches[0].clientY - p.y, z.s),
      }));
    }
  };

  const aoSoltar = (e: React.TouchEvent) => {
    if (e.touches.length === 0) {
      pinca.current = null;
      panInicial.current = null;
    }
    if (!toqueInicial.current || ampliado) {
      toqueInicial.current = null;
      return;
    }
    const dx = e.changedTouches[0].clientX - toqueInicial.current.x;
    const dy = e.changedTouches[0].clientY - toqueInicial.current.y;
    toqueInicial.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      arrastou.current = true;
      if (dx < 0) proxima();
      else anterior();
    }
  };

  const aoDuploClique = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((z) => (z.s > 1.02 ? { s: 1, x: 0, y: 0 } : { s: 2.5, x: 0, y: 0 }));
  };

  const aoRodar = (e: React.WheelEvent) => {
    const novaEscala = Math.max(
      1,
      Math.min(ZOOM_MAX, zoom.s * (e.deltaY < 0 ? 1.15 : 0.87))
    );
    setZoom((z) => ({
      s: novaEscala,
      x: novaEscala === 1 ? 0 : limitarPan(z.x, novaEscala),
      y: novaEscala === 1 ? 0 : limitarPan(z.y, novaEscala),
    }));
  };

  const aoClicarFundo = () => {
    // swipe ou pan não devem fechar; clique em área vazia sim
    if (arrastou.current) {
      arrastou.current = false;
      return;
    }
    if (ampliado) return;
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
          {ampliado && (
            <span className="ml-3 text-linha">{zoom.s.toFixed(1)}x</span>
          )}
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
        className="relative flex-1 my-3 sm:my-4 min-h-0 overflow-hidden"
        style={{ touchAction: ampliado ? "none" : "pan-y" }}
        onTouchStart={aoTocar}
        onTouchMove={aoMoverToque}
        onTouchEnd={aoSoltar}
        onDoubleClick={aoDuploClique}
        onWheel={aoRodar}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.s})`,
            transition: pinca.current || panInicial.current ? "none" : "transform 0.2s ease-out",
            cursor: ampliado ? "grab" : "zoom-in",
          }}
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
        <div className="text-center min-w-0" onClick={(e) => e.stopPropagation()}>
          <p className="font-mono text-[11px] sm:text-xs text-texto-suave truncate">
            Fonte: {foto.fonte}
          </p>
          <p className="font-mono text-[10px] text-texto-suave/60 mt-0.5">
            duplo toque ou pinça para ampliar
          </p>
        </div>
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
