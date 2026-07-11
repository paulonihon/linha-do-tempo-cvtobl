"use client";

import { useEffect, useRef, useState } from "react";
import { marcos } from "@/data/timeline";

export default function YearNav() {
  const [ativo, setAtivo] = useState<string>("");
  const barraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let quadro = 0;
    const aoRolar = () => {
      cancelAnimationFrame(quadro);
      quadro = requestAnimationFrame(() => {
        // marco ativo = último cujo topo já passou de 40% da viewport
        const alvo = window.innerHeight * 0.4;
        let atual = "";
        for (const m of marcos) {
          const el = document.getElementById(m.slug);
          if (el && el.getBoundingClientRect().top <= alvo) atual = m.slug;
        }
        setAtivo(atual);
      });
    };
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => {
      cancelAnimationFrame(quadro);
      window.removeEventListener("scroll", aoRolar);
    };
  }, []);

  useEffect(() => {
    if (!ativo || !barraRef.current) return;
    const chip = barraRef.current.querySelector<HTMLElement>(
      `[data-slug="${ativo}"]`
    );
    if (chip) {
      barraRef.current.scrollTo({
        left:
          chip.offsetLeft -
          barraRef.current.clientWidth / 2 +
          chip.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [ativo]);

  return (
    <nav
      aria-label="Navegação por ano"
      className="sticky top-0 z-40 bg-noite/85 backdrop-blur border-b border-carta relative"
    >
      <div
        ref={barraRef}
        className="max-w-6xl mx-auto flex gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none]"
      >
        {marcos.map((m) => (
          <a
            key={m.ano}
            href={`#${m.slug}`}
            data-slug={m.slug}
            className={`font-mono text-sm px-4 py-1.5 rounded-full whitespace-nowrap border transition ${
              ativo === m.slug
                ? "bg-linha text-noite border-linha font-medium"
                : "border-texto-suave/30 text-texto-suave hover:border-linha hover:text-linha"
            }`}
          >
            {m.ano}
          </a>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-noite to-transparent"
      />
    </nav>
  );
}
