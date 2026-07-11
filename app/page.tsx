import Hero from "@/components/Hero";
import YearNav from "@/components/YearNav";
import Contexto from "@/components/Contexto";
import Timeline from "@/components/Timeline";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <YearNav />
      <Contexto />
      <Timeline />
      <Sobre />
      <footer className="py-8 text-center">
        <p className="font-mono text-xs text-texto-suave/70 px-5">
          CVT Olavo Bilac · Jardim Olavo Bilac, Duque de Caxias/RJ · Rede
          FAETEC — Linha do Tempo 2008–2019
        </p>
      </footer>
    </main>
  );
}
