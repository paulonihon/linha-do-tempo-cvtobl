import { sobreProduto } from "@/data/timeline";

const liberdades = [
  { nome: "Reusar", desc: "usar o material em qualquer contexto educativo" },
  { nome: "Revisar", desc: "adaptar, modificar e traduzir" },
  { nome: "Remixar", desc: "combinar com outros materiais" },
  { nome: "Redistribuir", desc: "compartilhar com outras pessoas" },
  { nome: "Reter", desc: "guardar a própria cópia" },
];

export default function Sobre() {
  return (
    <section
      aria-labelledby="titulo-sobre"
      className="bg-noite-2 border-t border-carta py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-5">
        <p className="font-mono text-linha text-xs tracking-[0.25em] uppercase mb-3">
          Produto Educacional
        </p>
        <h2
          id="titulo-sobre"
          className="font-display text-3xl sm:text-4xl font-bold max-w-2xl"
        >
          Sobre esta Linha do Tempo
        </h2>

        <div className="grid sm:grid-cols-2 gap-10 mt-8">
          <div className="space-y-4 text-texto-suave leading-relaxed text-[15px]">
            <p>
              Esta Linha do Tempo é o Produto Educacional vinculado à
              dissertação <em className="text-texto">“{sobreProduto.dissertacao}”</em>,
              desenvolvida por <strong className="text-texto">{sobreProduto.autora}</strong> no{" "}
              {sobreProduto.programa}, sob orientação do{" "}
              {sobreProduto.orientador} ({sobreProduto.ano}).
            </p>
            <p>{sobreProduto.linhaPesquisa}.</p>
            <p>
              O material atende à Portaria CAPES n.º 60/2019 e documenta os
              marcos históricos, políticos e pedagógicos do CVTOBL entre 2008 e
              2019, contribuindo para a preservação da memória institucional e
              servindo como recurso didático para professores, estudantes,
              gestores e pesquisadores.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-4">
              Licença aberta, 5 liberdades
            </h3>
            <ul className="space-y-3">
              {liberdades.map((l) => (
                <li key={l.nome} className="flex gap-3 items-baseline">
                  <span className="font-mono text-linha text-sm shrink-0">
                    {l.nome}
                  </span>
                  <span className="text-texto-suave text-sm">{l.desc}</span>
                </li>
              ))}
            </ul>
            <p className="font-mono text-xs text-texto-suave/70 mt-6">
              Licença Creative Commons — o produto pode ser adaptado às
              necessidades de diferentes turmas, devolvendo à sociedade novos
              produtos educacionais num continuum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
