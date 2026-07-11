@AGENTS.md

# Linha do Tempo do CVT Olavo Bilac

Site mobile-first da linha do tempo (2008-2019) do Centro Vocacional Tecnológico Olavo Bilac, em Duque de Caxias/RJ. É a versão web do Produto Educacional da dissertação de Fátima Rebelo Aragão (ProfEPT, Colégio Pedro II, 2026). Conteúdo 100% estático, sem banco de dados.

- Produção: https://linha-do-tempo-cvtobl.vercel.app
- Repositório: https://github.com/paulonihon/linha-do-tempo-cvtobl

## Stack

Next.js (App Router, SSG) + TypeScript + Tailwind CSS 4 + Framer Motion. Fontes: Bricolage Grotesque (display), Manrope (texto), IBM Plex Mono (etiquetas). Deploy pela CLI da Vercel (`vercel --prod`) — o projeto Vercel NÃO está conectado ao GitHub; push não dispara deploy.

## Estrutura

- `data/timeline.ts` — todo o conteúdo: marcos (2008-2019), cards de contexto pré-2008 e dados da autora. Textos resumidos da dissertação; legendas e fontes das figuras preservadas. Editar conteúdo = editar este arquivo.
- `components/Timeline.tsx` — espinha de costura, anos em SVG com animação de stroke, galerias com foto destaque + miniaturas, "continuar lendo".
- `components/Lightbox.tsx` — tela cheia com título acima, navegação por setas/teclado/swipe; clique em área vazia fecha.
- `components/YearNav.tsx` — barra fixa de anos com scrollspy por posição de scroll (não usar IntersectionObserver: falha em seções longas).
- `components/VLibras.tsx` — widget de Libras do gov.br. O plugin monta no `window.onload`; como o script chega depois, o handler é disparado manualmente. Posição forçada para o canto inferior direito em `globals.css` (o plugin usa `top:50%` + transform inline).
- `app/globals.css` — tokens de cor (noite/carta/linha/azul), classes `.costura-v`/`.costura-h`/`.ano-vazado`, e escala do font-size raiz por breakpoint (18px em 1536+, 20px em 1920+, 24px em 2560+). Todo o layout usa rem — px só onde não deve escalar.
- `public/images/` — 33 imagens da dissertação, otimizadas (máx. 1600px, JPEG q82). Fonte original: `G:\Meu Drive\Suporte do Mestrado Memorável\fatima_aragao\imagens_extraidas\`.
- `app/opengraph-image.png` — gerada por script Python (PIL); regenerar se o título mudar.

## Decisões de design (não reverter sem pedir)

- Assinatura visual: linha de costura tracejada dourada + alfinetes + anos vazados que se desenham no scroll (referência à Modelagem do Vestuário). Duração da costura: 3.2s.
- Imagens grandes têm prioridade sobre densidade de layout: contexto sempre em 2 colunas (nunca 4), foto destaque grande com legenda visível, clique abre em tela cheia.
- Em desktop, o ano fica sempre no lado oposto ao card (alternância esquerda/direita).
- Palavras a evitar em qualquer texto do site: crucial, sólido, robusto, oferecer, fornecer, insights, em suma, profundas desigualdades, formação integral (lista completa no CLAUDE.md global do Paulo).

## Comandos

Dev: `npm run dev` | Build: `npm run build` | Deploy: `vercel --prod --yes`

Antes de declarar mudança de UI pronta: verificar com Playwright em 390px e 1920px, e rodar o build.

## Melhorias mapeadas (backlog)

1. Marcador de hiato na espinha (2010-2011, 2016-2018) com nota "período com lacuna documental" — transforma o "silêncio dos arquivos" (tese da autora) em elemento visual.
2. Linha de costura como barra de progresso do scroll.
3. Botão "voltar ao topo" após o marco 2019.
4. Respeitar `prefers-reduced-motion` nas animações do Framer Motion (hoje só o CSS respeita).
5. Skip link para navegação por teclado.
6. Pinch-zoom nas fotos em tela cheia.
7. Hero mobile: foto da fachada mais visível (opacity baixa demais sobre fundo escuro).
8. Dots/contador no carrossel de contexto no mobile.
9. Miniaturas de jornais verticais cortam a manchete (avaliar `object-top` ou proporção 3/4).
10. Conectar o projeto Vercel ao repositório GitHub para deploy automático no push.
