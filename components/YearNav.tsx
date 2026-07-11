"use client";

import { useEffect, useState } from "react";
import { marcos } from "@/data/timeline";

export default function YearNav() {
  const [ativo, setAtivo] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setAtivo(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const m of marcos) {
      const el = document.getElementById(m.slug);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navegação por ano"
      className="sticky top-0 z-40 bg-noite/85 backdrop-blur border-b border-carta"
    >
      <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none]">
        {marcos.map((m) => (
          <a
            key={m.ano}
            href={`#${m.slug}`}
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
    </nav>
  );
}
