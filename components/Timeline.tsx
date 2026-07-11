"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { marcos, type Foto } from "@/data/timeline";
import Lightbox from "./Lightbox";

export default function Timeline() {
  const [galeria, setGaleria] = useState<{ fotos: Foto[]; indice: number } | null>(
    null
  );
  const [expandidos, setExpandidos] = useState<Record<string, boolean>>({});

  return (
    <section aria-label="Linha do tempo 2008 a 2019" className="relative pb-24">
      <div className="max-w-6xl mx-auto px-5 relative">
        {/* espinha de costura */}
        <div
          aria-hidden
          className="costura-v absolute left-[30px] sm:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
        />

        {marcos.map((m, i) => (
          <article
            key={m.ano}
            id={m.slug}
            className="relative scroll-mt-24 pt-16 sm:pt-24"
          >
            {/* alfinete no ano */}
            <div
              aria-hidden
              className="absolute left-[30px] sm:left-1/2 -translate-x-1/2 mt-3 w-4 h-4 rounded-full bg-linha ring-4 ring-noite border-2 border-noite-2"
            />

            <div className="pl-16 sm:pl-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`font-display ano-vazado text-6xl sm:text-8xl font-extrabold leading-none select-none ${
                  i % 2 ? "sm:pl-[54%] sm:text-left" : "sm:pr-[54%] sm:text-right"
                }`}
              >
                {m.ano}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className={`mt-4 sm:w-[46%] ${i % 2 ? "" : "sm:ml-auto"}`}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-texto">
                  {m.titulo}
                </h2>
                <p className="text-linha/90 text-sm font-medium mt-2">
                  {m.resumo}
                </p>
                <div className="mt-4 space-y-4">
                  <p className="text-texto-suave leading-relaxed text-[15px]">
                    {m.paragrafos[0]}
                  </p>
                  {m.paragrafos.length > 1 &&
                    (expandidos[m.slug] ? (
                      <>
                        {m.paragrafos.slice(1).map((p, idx) => (
                          <p
                            key={idx}
                            className="text-texto-suave leading-relaxed text-[15px]"
                          >
                            {p}
                          </p>
                        ))}
                        <button
                          onClick={() =>
                            setExpandidos((e) => ({ ...e, [m.slug]: false }))
                          }
                          className="font-mono text-sm text-linha hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-linha rounded"
                        >
                          Recolher ↑
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() =>
                          setExpandidos((e) => ({ ...e, [m.slug]: true }))
                        }
                        className="font-mono text-sm text-linha hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-linha rounded"
                      >
                        Continuar lendo ↓
                      </button>
                    ))}
                </div>

                {m.fotos.length > 0 && (
                  <figure className="mt-6">
                    <button
                      onClick={() => setGaleria({ fotos: m.fotos, indice: 0 })}
                      className="relative w-full overflow-hidden rounded-xl group cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-linha bg-noite-2"
                      aria-label={`Ampliar: ${m.fotos[0].legenda}`}
                    >
                      <Image
                        src={m.fotos[0].src}
                        alt={m.fotos[0].legenda}
                        width={1600}
                        height={1200}
                        className="w-full h-auto max-h-[30rem] object-contain transition duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 92vw, 520px"
                      />
                      <span
                        aria-hidden
                        className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center text-sm text-texto bg-noite/70 rounded-full opacity-80 group-hover:opacity-100 transition"
                      >
                        ⤢
                      </span>
                    </button>
                    <figcaption className="mt-2">
                      <span className="text-sm text-texto">
                        {m.fotos[0].legenda}
                      </span>
                      <span className="font-mono text-[11px] text-texto-suave/80 block">
                        Fonte: {m.fotos[0].fonte}
                      </span>
                    </figcaption>

                    {m.fotos.length > 1 && (
                      <ul className="grid grid-cols-3 gap-2 mt-4 list-none">
                        {m.fotos.slice(1).map((f, fi) => (
                          <li key={f.src}>
                            <button
                              onClick={() =>
                                setGaleria({ fotos: m.fotos, indice: fi + 1 })
                              }
                              className="relative aspect-square w-full overflow-hidden rounded-lg group cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-linha"
                              aria-label={`Ampliar: ${f.legenda}`}
                            >
                              <Image
                                src={f.src}
                                alt={f.legenda}
                                fill
                                className="object-cover transition duration-300 group-hover:scale-105"
                                sizes="(max-width: 640px) 30vw, 170px"
                              />
                              <span className="absolute inset-0 bg-noite/0 group-hover:bg-noite/25 transition" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </figure>
                )}
              </motion.div>
            </div>
          </article>
        ))}
      </div>

      <Lightbox
        fotos={galeria?.fotos ?? []}
        indice={galeria ? galeria.indice : null}
        onFechar={() => setGaleria(null)}
        onNavegar={(i) => setGaleria((g) => (g ? { ...g, indice: i } : g))}
      />
    </section>
  );
}
