import { sobreProduto } from "@/data/timeline";

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

        <div className="mt-8 max-w-3xl">
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

        </div>
      </div>
    </section>
  );
}
