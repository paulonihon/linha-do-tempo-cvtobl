export type Foto = {
  src: string;
  legenda: string;
  fonte: string;
};

export type Marco = {
  ano: string;
  slug: string;
  titulo: string;
  resumo: string;
  paragrafos: string[];
  fotos: Foto[];
};

export type CartaoContexto = {
  periodo: string;
  titulo: string;
  texto: string;
  foto?: Foto;
};

export const contexto: CartaoContexto[] = [
  {
    periodo: "1943",
    titulo: "Duque de Caxias, polo industrial",
    texto:
      "Emancipado de Nova Iguaçu em 1943, o município se transforma em polo industrial com a Fábrica Nacional de Motores, em Xerém, e a Refinaria Duque de Caxias (REDUC), concluída em 1961. O crescimento econômico, porém, convive com desigualdade social e com a carência de serviços públicos.",
    foto: {
      src: "/images/fnm-xerem.jpg",
      legenda: "Fábrica Nacional de Motores em Xerém",
      fonte: "www.cariridasantigas.com.br (2020)",
    },
  },
  {
    periodo: "Década de 1940",
    titulo: "Nasce o Jardim Olavo Bilac",
    texto:
      "A antiga Fazenda Covanca é loteada pela Companhia Imobiliária Gramacho em mais de 5.500 terrenos, sem água, luz ou esgoto. Migrantes de Minas, Pernambuco, Paraíba e Alagoas ocupam o bairro a partir de 1942 e conquistam a urbanização por meio da organização comunitária.",
    foto: {
      src: "/images/abairramento-olavo-bilac.jpg",
      legenda: "Proposta de abairramento do Jardim Olavo Bilac",
      fonte: "Acervo do IHCMDC",
    },
  },
  {
    periodo: "1995–1997",
    titulo: "Do CEI à FAETEC",
    texto:
      "O Complexo de Quintino deixa de ser espaço de internação de crianças e jovens e vira centro de formação educacional com o CEI (1995). Em 1997, a Lei estadual n.º 2.735 cria a Fundação de Apoio à Escola Técnica (FAETEC), responsável pela educação profissional pública e gratuita no Estado do Rio de Janeiro.",
    foto: {
      src: "/images/cei-slogan-1996.jpg",
      legenda: "Slogan do CEI utilizado em 1996",
      fonte: "Acervo pessoal da Prof.ª Márcia Queiroz",
    },
  },
  {
    periodo: "2003–2007",
    titulo: "A era dos CVTs",
    texto:
      "Em 2003, o Ministério da Ciência e Tecnologia institui o programa nacional dos Centros Vocacionais Tecnológicos. Em 2007, o governo Sérgio Cabral Filho leva os CVTs ao Rio de Janeiro sob o slogan “Uma nova geração de Escola Técnica”: entre 2007 e 2014, 42 CVTs são criados no território fluminense.",
    foto: {
      src: "/images/cvt-slogan-2007.jpg",
      legenda: "Slogan utilizado pela FAETEC na implantação dos CVTs em 2007",
      fonte: "Acervo documental do CVTOBL, 2008",
    },
  },
];

export const marcos: Marco[] = [
  {
    ano: "2008",
    slug: "ano-2008",
    titulo: "Expansão dos CVTs e a inauguração do CVT Olavo Bilac",
    resumo:
      "Criado pelo Decreto n.º 41.289 e inaugurado em 28 de outubro de 2008, o CVTOBL nasce como o terceiro CVT de Duque de Caxias e o oitavo do Estado do Rio.",
    paragrafos: [
      "O CVTOBL foi criado no governo estadual de Sérgio Cabral Filho pelo Decreto n.º 41.289, de 6 de maio de 2008, e instalado no antigo prédio reformado do Centro Comunitário de Defesa da Cidadania, no bairro Jardim Olavo Bilac. A unidade foi concebida para ofertar cursos na área de Modelagem do Vestuário, além de qualificação profissional, gestão e empreendedorismo.",
      "A inauguração, em 28 de outubro de 2008, reuniu o vice-governador Luiz Fernando Pezão, o secretário de Ciência e Tecnologia Alexandre Cardoso e o prefeito Washington Reis. No discurso oficial, a vocação produtiva da Baixada Fluminense na moda justificava a escolha: “atualmente temos 100% de oferta de emprego para as pessoas que vierem se formar no CVT Olavo Bilac”, afirmou Cardoso.",
      "A unidade abriu 225 vagas nos cursos de Modelagem, Corte e Costura; Corte Enfesto e Industrial; e Bordado e Customização. A repercussão em diferentes meios — JusBrasil, Diário Oficial do Estado e o jornal O Municipal — apresentou o CVTOBL como política de valorização da Baixada e de expansão do acesso à educação profissional.",
    ],
    fotos: [
      {
        src: "/images/cvtobl-2008-a.jpg",
        legenda: "CVTOBL em 2008, ano de sua inauguração",
        fonte: "Acervo pessoal de Isabel Cristina Barbosa de Sá, 2008",
      },
      {
        src: "/images/cvtobl-2008-b.jpg",
        legenda: "CVTOBL em 2008, ano de sua inauguração",
        fonte: "Acervo pessoal de Isabel Cristina Barbosa de Sá, 2008",
      },
      {
        src: "/images/placa-inauguracao.jpg",
        legenda: "Placa de inauguração do CVTOBL",
        fonte: "Acervo pessoal da pesquisadora, 2023",
      },
      {
        src: "/images/reportagem-do-2008.jpg",
        legenda: "Reportagem da inauguração no Diário Oficial do Estado do RJ",
        fonte: "Acervo da Biblioteca da Assembleia Legislativa do RJ",
      },
      {
        src: "/images/reportagem-municipal-2008.jpg",
        legenda: "Reportagem da inauguração no jornal O Municipal",
        fonte: "Acervo do IHCMDC",
      },
      {
        src: "/images/inauguracao-autoridades-a.jpg",
        legenda: "Inauguração do CVTOBL em 28 de outubro de 2008",
        fonte: "Acervo pessoal de Isabel Cristina Barbosa de Sá, 2008",
      },
      {
        src: "/images/inauguracao-autoridades-b.jpg",
        legenda: "Presença de autoridades na inauguração do CVTOBL",
        fonte: "Acervo pessoal de Isabel Cristina Barbosa de Sá, 2008",
      },
    ],
  },
  {
    ano: "2009",
    slug: "ano-2009",
    titulo: "CVTOBL e suas parcerias",
    resumo:
      "O Centro entra no circuito cultural da Baixada: participa do Caxias Fashion na quadra da Grande Rio e projeta seus cursos para além dos muros da unidade.",
    paragrafos: [
      "A presença do CVTOBL no Caxias Fashion remonta, no plano documental, a 2009: o encarte de notícias do Diário Oficial do Estado, de 2 de julho, registra a fala da então coordenadora Isabel Cristina Barbosa de Sá anunciando a participação do Centro na edição do evento, realizada nos espaços da Escola de Samba Acadêmicos do Grande Rio.",
      "A passarela instalada na quadra da escola de samba aproxima os saberes técnicos da moda ensinados no CVTOBL das práticas culturais consolidadas no município — figurinos, alegorias, adereços e narrativas visuais do carnaval.",
      "Em 2011, essa circulação se amplia: o Fórum Cultural realizado no Colégio Estadual Guadalajara mostra que os projetos do Curso Técnico extrapolavam os limites físicos da unidade, mobilizando a produção discente em outros espaços educacionais da rede pública.",
    ],
    fotos: [
      {
        src: "/images/caxias-fashion-2009.jpg",
        legenda: "O CVTOBL no Caxias Fashion",
        fonte: "Encarte de notícias do DOERJ de 2/07/2009",
      },
      {
        src: "/images/forum-cultural-2011.jpg",
        legenda: "Folder do Fórum Cultural no Colégio Estadual Guadalajara, 2011",
        fonte: "Acervo Pedagógico da instituição",
      },
    ],
  },
  {
    ano: "2012",
    slug: "ano-2012",
    titulo: "1ª turma do Curso Técnico em Modelagem do Vestuário",
    resumo:
      "O CVTOBL passa a formar técnicos: um curso de 1.800 horas no eixo Produção Cultural e Design, com capacidade para 243 alunos em três turnos.",
    paragrafos: [
      "O Curso Técnico em Modelagem do Vestuário consolida o CVTOBL como uma das poucas unidades do tipo CVT da rede FAETEC a ofertar curso técnico de nível médio, nas formas concomitante e subsequente. A matriz curricular aprovada na Rede FAETEC organiza a formação em três etapas semestrais, totalizando 1.800 horas, acrescidas de 240 horas de estágio supervisionado não obrigatório.",
      "Inserido no eixo tecnológico de Produção Cultural e Design do Catálogo Nacional de Cursos Técnicos, o curso prevê certificações parciais: Assistente em Design de Moda ao fim da primeira etapa e Assistente de Costura ao fim da segunda, até o diploma de Técnico em Modelagem do Vestuário.",
      "Mais do que formar mão de obra para o setor têxtil, o curso materializa uma política pública de inclusão social e valorização do trabalho criativo em uma região — a Baixada Fluminense — responsável por grande parte da produção de vestuário do Estado do Rio.",
    ],
    fotos: [
      {
        src: "/images/laboratorio-modelagem.jpg",
        legenda: "Laboratório de Modelagem e Costura do CVTOBL",
        fonte: "Acervo pessoal de Grace Soares, 2024",
      },
    ],
  },
  {
    ano: "2013",
    slug: "ano-2013",
    titulo: "CVTOBL e o Caxias Shopping",
    resumo:
      "Ano de consolidação: 9ª edição do Caxias Fashion, I Semana de Moda no próprio Centro, oficinas de customização e o evento Raio-X na Moda.",
    paragrafos: [
      "Em setembro de 2013, a 9ª edição do Caxias Fashion evidencia a consolidação do evento como espaço de articulação entre moda, cultura e formação profissional na Baixada — e o CVTOBL já ocupava lugar reconhecido nesse circuito.",
      "Em outubro, a I Semana de Moda do CVTOBL marca um movimento de autonomia pedagógica: o Centro passa a produzir seus próprios espaços de socialização do conhecimento, com desfile, oficinas de customização e exposição de peças confeccionadas pelos estudantes. As oficinas articulam reaproveitamento de materiais, criação autoral e sustentabilidade.",
      "Em dezembro, o evento “Raio-X na Moda”, com material gráfico próprio, demonstra o grau de organização das atividades pedagógicas e a busca por uma reflexão crítica sobre o universo da moda, para além da dimensão estritamente técnica.",
    ],
    fotos: [
      {
        src: "/images/caxias-fashion-2013.jpg",
        legenda: "9ª edição do Caxias Fashion com a presença do CVTOBL",
        fonte: "Blog de Alberto Marques, set. 2013",
      },
      {
        src: "/images/semana-moda-2013.jpg",
        legenda: "I Semana de Moda do CVTOBL, 2013",
        fonte: "Acervo Pedagógico da unidade",
      },
      {
        src: "/images/desfile-semana-moda-2013.jpg",
        legenda: "Desfile da I Semana de Moda no espaço do CVTOBL",
        fonte: "Blog do Alberto Marques, out. 2013",
      },
      {
        src: "/images/oficina-customizacao-a.jpg",
        legenda: "Oficina de customização na I Semana de Moda",
        fonte: "Acervo Pedagógico da unidade, 2013",
      },
      {
        src: "/images/oficina-customizacao-b.jpg",
        legenda: "Oficina de customização na I Semana de Moda",
        fonte: "Acervo Pedagógico da unidade, 2013",
      },
      {
        src: "/images/exposicao-pecas-2013.jpg",
        legenda: "Exposição de peças confeccionadas por alunos do CVTOBL",
        fonte: "Acervo Pedagógico da unidade, 2013",
      },
      {
        src: "/images/raio-x-moda-2013.jpg",
        legenda: "Folder do evento Raio-X na Moda",
        fonte: "Acervo Pedagógico da instituição, dez. 2013",
      },
      {
        src: "/images/expansao-faetec-2013.jpg",
        legenda: "Expansão da FAETEC na Baixada Fluminense, 2013",
        fonte: "Jornal EXTRA, Rio de Janeiro, ed. 18 nov. 2013",
      },
    ],
  },
  {
    ano: "2014",
    slug: "ano-2014",
    titulo: "CVTOBL no Carnaval e na Copa do Mundo",
    resumo:
      "A produção discente ganha a mídia de grande circulação: moda sustentável na folia e a torcida vestida pelo CVTOBL na Copa do Brasil.",
    paragrafos: [
      "A reportagem “Moda sustentável na folia”, publicada no Jornal EXTRA em 27 de fevereiro de 2014, destaca a produção dos estudantes associada à sustentabilidade: fantasias e adereços criados com material reciclável para o carnaval.",
      "No mesmo período, o Jornal Capital registra a atuação da então coordenadora Adriana Bessa, reforçando o reconhecimento institucional da unidade e o papel da gestão pedagógica na interlocução com a imprensa.",
      "No ano da Copa do Mundo no Brasil, alunos de bordado e customização produziram roupas para a torcida, deslocando a formação técnica para os debates contemporâneos de consumo consciente e ampliando a projeção do Centro para além da Baixada Fluminense.",
    ],
    fotos: [
      {
        src: "/images/reportagem-extra-2014.jpg",
        legenda: "Reportagem do Jornal EXTRA, 2014",
        fonte: "Jornal EXTRA, Rio de Janeiro, ed. 27 fev. 2014, p. 3",
      },
      {
        src: "/images/reportagem-capital-2014.jpg",
        legenda: "Reportagem do Jornal Capital, 2014",
        fonte: "Jornal Capital, Mercado & Negócios, Duque de Caxias-RJ, ed. 24 fev. 2014",
      },
    ],
  },
  {
    ano: "2015",
    slug: "ano-2015",
    titulo: "O CVTOBL e o PRONATEC",
    resumo:
      "Adesão ao programa federal, oficialização do Curso Técnico pela Portaria n.º 642/2015 e um desfile histórico no Caxias Fashion, marcado pela inclusão.",
    paragrafos: [
      "Em 2015, o CVTOBL adere ao PRONATEC — Programa Nacional de Acesso ao Ensino Técnico e Emprego, instituído pela Lei n.º 12.513/2011 —, tendo como principal arranjo o Curso Técnico em Modelagem do Vestuário, destinado prioritariamente a jovens e adultos de baixa renda, estudantes da rede pública e trabalhadores.",
      "No mesmo ano, a Portaria SEEDUC/SUGEN/AUT n.º 642, de 22 de maio de 2015, oficializa o curso. Os convites de Culminância de Projeto Final e de Desfile de Encerramento evidenciam a institucionalização do desfile como rito formativo público e solene.",
      "No Caxias Fashion 2015, o Centro apresentou coleção inspirada na poesia de Cecília Meireles e na arquitetura de Oscar Niemeyer, em homenagem aos 450 anos do Rio de Janeiro — com modelo com Síndrome de Down e peças plus size na passarela, afirmando a diversidade e a representatividade como princípios pedagógicos.",
    ],
    fotos: [
      {
        src: "/images/convite-culminancia-2015.jpg",
        legenda: "Convite de Culminância de Projeto Final, 2015/1º semestre",
        fonte: "Acervo Pedagógico da instituição",
      },
      {
        src: "/images/convite-desfile-2015.jpg",
        legenda: "Convite do Desfile de Encerramento de Curso, 2015/2º semestre",
        fonte: "Acervo Pedagógico da instituição",
      },
      {
        src: "/images/caxias-fashion-2015.jpg",
        legenda: "Desfile de Moda do CVTOBL no Caxias Fashion, 2015",
        fonte: "Site da Rede FAETEC",
      },
      {
        src: "/images/claudia-de-paula.jpg",
        legenda: "Claudia de Paula, produtora cultural do Caxias Fashion",
        fonte: "caxiascriativa.org, 2025",
      },
      {
        src: "/images/vestido-sustentavel-a.jpg",
        legenda: "Vestido confeccionado com material reaproveitado por alunos",
        fonte: "Acervo Pedagógico da unidade",
      },
      {
        src: "/images/vestido-sustentavel-b.jpg",
        legenda: "Produção discente do Curso Técnico em Modelagem do Vestuário",
        fonte: "Acervo Pedagógico da unidade",
      },
    ],
  },
  {
    ano: "2019",
    slug: "ano-2019",
    titulo: "Mudança na gestão do CVTOBL",
    resumo:
      "O fim do recorte temporal encontra o Centro atravessado pela rotatividade de gestores e pelos efeitos da crise fiscal fluminense sobre a FAETEC.",
    paragrafos: [
      "Ao longo de seus 17 anos de funcionamento, o CVTOBL contou com nove gestores escolares, nomeados por ato direto da Presidência da FAETEC, sem processos consultivos. Essa rotatividade compromete a continuidade de projetos e a construção de uma identidade institucional compartilhada.",
      "A partir de 2016, a crise fiscal do Estado do Rio de Janeiro — agravada pelo endividamento público e pelos investimentos nos megaeventos — impôs à FAETEC sucessivas reduções orçamentárias, diminuição da oferta de vagas e precarização das condições de funcionamento, efeitos sentidos no cotidiano do CVTOBL.",
      "Em 2019, nova mudança na gestão encerra o recorte desta pesquisa. As lacunas documentais do período não significam interrupção das atividades: revelam a fragilidade das políticas de preservação da memória institucional — e é exatamente contra esse esquecimento que esta Linha do Tempo se constitui.",
    ],
    fotos: [
      {
        src: "/images/cvtobl-fachada.jpg",
        legenda: "Entrada do Centro Vocacional Tecnológico Olavo Bilac",
        fonte: "Acervo da pesquisa",
      },
    ],
  },
];

export const sobreProduto = {
  autora: "Fátima Rebelo Aragão",
  orientador: "Prof. Dr. Adjovanes Thadeu Silva de Almeida",
  programa:
    "Mestrado Profissional em Educação Profissional e Tecnológica (ProfEPT) — Colégio Pedro II",
  linhaPesquisa:
    "Linha de Pesquisa 2: Organização e Memória de Espaços Pedagógicos na EPT — Macroprojeto 4: História e Memórias no contexto da EPT",
  produto:
    "Entre linhas, máquinas e memórias: a moda na história da EPT no CVT Olavo Bilac, Duque de Caxias/RJ",
  dissertacao:
    "Identidade, história e memória da Educação Profissional Técnica no município de Duque de Caxias/RJ: um estudo sobre o Centro Vocacional Tecnológico Olavo Bilac",
  ano: "2026",
};
