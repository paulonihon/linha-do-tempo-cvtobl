"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
    __vlibrasIniciado?: boolean;
  }
}

export default function VLibras() {
  useEffect(() => {
    if (window.__vlibrasIniciado) return;

    const iniciar = () => {
      if (window.VLibras && !window.__vlibrasIniciado) {
        window.__vlibrasIniciado = true;
        new window.VLibras.Widget("https://vlibras.gov.br/app");
        // o plugin monta o widget no window.onload; como o script chega
        // depois da página carregada, disparamos o handler manualmente
        if (document.readyState === "complete" && typeof window.onload === "function") {
          window.onload(new Event("load"));
        }
      }
    };

    if (window.VLibras) {
      iniciar();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = iniciar;
    document.body.appendChild(script);
  }, []);

  return (
    <div {...{ vw: "" }} className="enabled">
      <div {...{ "vw-access-button": "" }} className="active" />
      <div {...{ "vw-plugin-wrapper": "" }}>
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}
