// js/sistema-padrao.js
// Fonte única de verdades oficiais e conteúdos padrão do sistema PANTHEON

export const REGRAS_PADRAO = {
  pontosAtributoIniciais: 5,
  estagioInicial: 1,
  estagioMaturidadeVocacao: 2,
  tetosPorEstagio: { 1: 2, 2: 3, 3: 4, 4: 5 },
  pontosEvolucaoIniciais: 0,
  slotsRaizExtraCriacao: 0,
  passatemposFocados: 1,
  passatemposMistos: 1,
  travaAscendenteCarga: true,
  estigmasVisiveisJogadores: false,
  permitirEstigmaCriacao: false,
  pontosEstigmaSeparados: false
};

export const CONDICOES_FAMILIARES_PADRAO = {
  comum: {
    id: 'comum',
    nome: 'Raiz Comum',
    subtitulo: 'Pais com ofícios diferentes (2 Raízes)',
    descricao: 'Origem mista tradicional: concede acesso às 2 Árvores de Raiz básicas dos pais, sem ramos secretos.'
  },
  legado: {
    id: 'legado',
    nome: 'Legado Familiar',
    subtitulo: 'Negócio de família (1 Raiz + Ramo de Legado)',
    descricao: 'Ambos os pais compartilham o mesmo ofício: libera 1 Árvore de Raiz e desbloqueia seu Ramo Exclusivo de Legado Familiar.'
  },
  unico: {
    id: 'unico',
    nome: 'Ensinamento Único',
    subtitulo: 'Tutela isolada / Mestre (1 Raiz + Ramo Secreto)',
    descricao: 'Criado por apenas um dos pais ou por um tutor isolado: libera 1 Árvore de Raiz e seu Ramo Exclusivo de Truques & Segredos.'
  },
  orfao: {
    id: 'orfao',
    nome: 'Órfão / Autodidata',
    subtitulo: 'Sem ofício familiar (+2 Passatempos & Árvore Própria)',
    descricao: 'Aprendeu a sobreviver na marra: concede +1 Ponto de Atributo inicial, +2 Passatempos livres e acesso à Árvore do Órfão.'
  }
};

export const CATEGORIAS_ARVORE = {
  padrao: 'Padrão (Sobrevivente)',
  raiz: 'Raiz (Infância / Origem)',
  vocacao: 'Vocação (Profissão Adulta)',
  estigma: 'Estigma (Poder Único / Paranormal)'
};

export const PERICIAS_LIVRO = [
  'Sobrevivência', 'Furtividade', 'Encontrar', 'Atletismo', 'Tenacidade',
  'Luta', 'Pontaria', 'Defesa', 'Reflexo',
  'Investigação', 'Erudição', 'Doutrina', 'Sigilos',
  'Ferramentas', 'Medicina', 'Culinária', 'Improviso',
  'Persuasão', 'Enganação', 'Intimidação', 'Intuição', 'Vontade'
];

export const RAIZES_PADRAO = {
  "Órfão": [2, -2, 2, 2],
  "Lenhador": [6, 0, 2, 0],
  "Ferreiro": [4, 0, 2, 2],
  "Guarda / Vigia": [4, 2, 2, 0],
  "Caçador": [2, 0, 4, 2],
  "Carpinteiro": [2, 0, 4, 2],
  "Cozinheiro / Padeiro": [2, 2, 2, 2],
  "Pastor / Criador": [2, 4, 2, 0],
  "Mercador": [0, 2, 2, 4],
  "Curandeiro": [0, 4, 0, 4],
  "Escriba / Devoto": [0, 6, 0, 2]
};

export const PROFISSOES_LIVRO = {
  "Caçador":              { main: ["Sobrevivência", "Pontaria"],   world: "Encontrar",    sec: ["Furtividade", "Reflexo"] },
  "Lenhador":             { main: ["Atletismo", "Tenacidade"],     world: "Luta",         sec: ["Ferramentas", "Defesa"] },
  "Ferreiro":             { main: ["Ferramentas", "Tenacidade"],   world: "Erudição",     sec: ["Luta", "Improviso"] },
  "Carpinteiro":          { main: ["Ferramentas", "Improviso"],    world: "Encontrar",    sec: ["Atletismo", "Erudição"] },
  "Curandeiro":           { main: ["Medicina", "Erudição"],        world: "Intuição",     sec: ["Culinária", "Sigilos"] },
  "Cozinheiro / Padeiro": { main: ["Culinária", "Tenacidade"],     world: "Persuasão",    sec: ["Encontrar", "Medicina"] },
  "Pastor / Criador":     { main: ["Sobrevivência", "Tenacidade"], world: "Intuição",     sec: ["Encontrar", "Atletismo"] },
  "Mercador":             { main: ["Persuasão", "Enganação"],      world: "Erudição",     sec: ["Intuição", "Investigação"] },
  "Escriba / Devoto":     { main: ["Doutrina", "Erudição"],        world: "Investigação", sec: ["Persuasão", "Sigilos"] },
  "Guarda / Vigia":       { main: ["Defesa", "Encontrar"],         world: "Intimidação",  sec: ["Luta", "Tenacidade"] }
};

export const PASSATEMPOS_PADRAO = [
  // 12 Focados (+2)
  { nome: "Pique-Pega",         tipo: "focado", pericias: ["Atletismo"],                  desc: "+2 Atletismo" },
  { nome: "Rezar até Passar",   tipo: "focado", pericias: ["Vontade"],                    desc: "+2 Vontade" },
  { nome: "Briga de Rua",       tipo: "focado", pericias: ["Luta"],                       desc: "+2 Luta" },
  { nome: "Tiro ao Alvo",       tipo: "focado", pericias: ["Pontaria"],                   desc: "+2 Pontaria" },
  { nome: "Ficar de Vigia",     tipo: "focado", pericias: ["Encontrar"],                  desc: "+2 Encontrar" },
  { nome: "Caça ao Tesouro",    tipo: "focado", pericias: ["Investigação"],               desc: "+2 Investigação" },
  { nome: "Ler Livros",         tipo: "focado", pericias: ["Erudição"],                   desc: "+2 Erudição" },
  { nome: "Ajudar na Cozinha",  tipo: "focado", pericias: ["Culinária"],                  desc: "+2 Culinária" },
  { nome: "Trabalhar Duro",     tipo: "focado", pericias: ["Tenacidade"],                 desc: "+2 Tenacidade" },
  { nome: "Contar Histórias",   tipo: "focado", pericias: ["Persuasão"],                  desc: "+2 Persuasão" },
  { nome: "Desviar de Pedras",  tipo: "focado", pericias: ["Reflexo"],                    desc: "+2 Reflexo" },
  { nome: "Mentir",             tipo: "focado", pericias: ["Enganação"],                  desc: "+2 Enganação" },
  // 12 Mistos (+1 / +1)
  { nome: "Explorar o Mato",    tipo: "misto",  pericias: ["Sobrevivência", "Encontrar"], desc: "+1 Sobrevivência, +1 Encontrar" },
  { nome: "Subir em Telhados",  tipo: "misto",  pericias: ["Atletismo", "Reflexo"],       desc: "+1 Atletismo, +1 Reflexo" },
  { nome: "Brincar de Guarda",  tipo: "misto",  pericias: ["Defesa", "Intimidação"],      desc: "+1 Defesa, +1 Intimidação" },
  { nome: "Ouvir os Velhos",    tipo: "misto",  pericias: ["Doutrina", "Intuição"],       desc: "+1 Doutrina, +1 Intuição" },
  { nome: "Fazer Gambiarras",   tipo: "misto",  pericias: ["Improviso", "Ferramentas"],   desc: "+1 Improviso, +1 Ferramentas" },
  { nome: "Primeiros Socorros", tipo: "misto",  pericias: ["Medicina", "Vontade"],        desc: "+1 Medicina, +1 Vontade" },
  { nome: "Pique-Esconde",      tipo: "misto",  pericias: ["Furtividade", "Encontrar"],   desc: "+1 Furtividade, +1 Encontrar" },
  { nome: "Jogo de Queimado",   tipo: "misto",  pericias: ["Reflexo", "Pontaria"],        desc: "+1 Reflexo, +1 Pontaria" },
  { nome: "Estudo Dirigido",    tipo: "misto",  pericias: ["Erudição", "ESCOLHA"],        desc: "+1 Erudição, +1 à Escolha" },
  { nome: "Ajudar no Templo",   tipo: "misto",  pericias: ["Doutrina", "Vontade"],        desc: "+1 Doutrina, +1 Vontade" },
  { nome: "Lidar com Bichos",   tipo: "misto",  pericias: ["Sobrevivência", "Intuição"],  desc: "+1 Sobrevivência, +1 Intuição" },
  { nome: "Malandragem",        tipo: "misto",  pericias: ["Enganação", "Intuição"],      desc: "+1 Enganação, +1 Intuição" }
];

export const ITENS_PADRAO = [
  // ARMAS BRANCAS LEVES (GA 1 / GD 1 · Alcance Curto)
  {
    id: 'livro_arma_soco_ingles', nome: 'Soco Inglês', categoria: 'arma', peso: 'miudeza',
    dano: '1d3', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 0, gd: 0, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Reforço metálico para os punhos. Ocultável como miudeza.'
  },
  {
    id: 'livro_arma_faca', nome: 'Faca', categoria: 'arma', peso: 'leve',
    dano: '1d4', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 1, gd: 1, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Lâmina curta utilitária e ágil para combate próximo.'
  },
  {
    id: 'livro_arma_faca_militar', nome: 'Faca Militar', categoria: 'arma', peso: 'leve',
    dano: '1d3', criticoMargem: 20, criticoMult: 3, criticoExtra: '', ga: 1, gd: 1, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Adaga tática balanceada para perfurações letais (Crítico ×3).'
  },
  {
    id: 'livro_arma_martelo', nome: 'Martelo', categoria: 'arma', peso: 'leve',
    dano: '1d4', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 1, gd: 1, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Ferramenta de impacto curto, simples e resistente.'
  },
  {
    id: 'livro_arma_pe_de_cabra', nome: 'Pé de Cabra', categoria: 'arma', peso: 'leve',
    dano: '1d5', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 1, gd: 1, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Alavanca de ferro pesada; útil tanto para arrombar quanto para golpear.'
  },
  {
    id: 'livro_arma_marreta', nome: 'Marreta Leve', categoria: 'arma', peso: 'leve',
    dano: '1d5', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 1, gd: 1, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Cabeça de impacto concentrado para quebrar defesas.'
  },
  {
    id: 'livro_arma_machado_pequeno', nome: 'Machado Pequeno', categoria: 'arma', peso: 'leve',
    dano: '1d6', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 1, gd: 1, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Machadinha de mão leve e equilibrada para cortes rápidos.'
  },

  // ARMAS BRANCAS MÉDIAS (GA 2 / GD 2)
  {
    id: 'livro_arma_taco', nome: 'Taco', categoria: 'arma', peso: 'medio',
    dano: '1d6', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 2, gd: 2, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Porrete de madeira reforçada de fácil manuseio.'
  },
  {
    id: 'livro_arma_cano_metal', nome: 'Cano de Metal', categoria: 'arma', peso: 'medio',
    dano: '1d6+1', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 2, gd: 2, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Barra cilíndrica maciça improvisada com alto impacto contundente.'
  },
  {
    id: 'livro_arma_marreta_media', nome: 'Marreta Média', categoria: 'arma', peso: 'medio',
    dano: '1d8', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 2, gd: 2, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Martelo de duas mãos ou punho longo para golpes demolidores.'
  },
  {
    id: 'livro_arma_maca', nome: 'Maça', categoria: 'arma', peso: 'medio',
    dano: '1d8+1', criticoMargem: 20, criticoMult: 3, criticoExtra: '', ga: 2, gd: 2, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Arma flanged de aço capaz de esmagar armaduras (Crítico ×3).'
  },
  {
    id: 'livro_arma_machete', nome: 'Machete', categoria: 'arma', peso: 'medio',
    dano: '1d8', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 2, gd: 2, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Lâmina larga de corte profundo, ideal para mata fechada e combate.'
  },
  {
    id: 'livro_arma_machado_medio', nome: 'Machado Médio', categoria: 'arma', peso: 'medio',
    dano: '1d8', criticoMargem: 20, criticoMult: 3, criticoExtra: '', ga: 2, gd: 2, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Machado de batalha versátil com gume pesado (Crítico ×3).'
  },
  {
    id: 'livro_arma_espada', nome: 'Espada', categoria: 'arma', peso: 'medio',
    dano: '1d10', criticoMargem: 19, criticoMult: 2, criticoExtra: '', ga: 2, gd: 3, armaDefensiva: true, alcance: 'Curto',
    descricao: 'Lâmina reta balanceada de excelente precisão e guarda defensiva (+1 GD).'
  },
  {
    id: 'livro_arma_lanca', nome: 'Lança', categoria: 'arma', peso: 'medio',
    dano: '1d8', criticoMargem: 19, criticoMult: 3, criticoExtra: '', ga: 2, gd: 2, armaDefensiva: false, alcance: 'Curto / Médio',
    descricao: 'Haste longa com ponta perfurante; ataca a curta ou média distância.'
  },

  // ARMAS BRANCAS PESADAS (GA 3 / GD 3)
  {
    id: 'livro_arma_espada_longa', nome: 'Espada Longa', categoria: 'arma', peso: 'pesado',
    dano: '1d12', criticoMargem: 18, criticoMult: 2, criticoExtra: '', ga: 3, gd: 4, armaDefensiva: true, alcance: 'Curto',
    descricao: 'Montante longo de fio mortal e ampla margem de crítico (18-20).'
  },
  {
    id: 'livro_arma_machado_combate', nome: 'Machado de Combate', categoria: 'arma', peso: 'pesado',
    dano: '2d6', criticoMargem: 20, criticoMult: 3, criticoExtra: '', ga: 3, gd: 3, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Machado pesado de lâmina dupla feito para partir escudos.'
  },
  {
    id: 'livro_arma_foice_grande', nome: 'Foice Grande', categoria: 'arma', peso: 'pesado',
    dano: '2d6', criticoMargem: 19, criticoMult: 2, criticoExtra: '', ga: 3, gd: 3, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Lâmina curva de haste longa com varredura ampla e cortes profundos.'
  },
  {
    id: 'livro_arma_maca_giratoria', nome: 'Maça Giratória', categoria: 'arma', peso: 'pesado',
    dano: '2d8+2', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 3, gd: 3, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Mangual pesado de corrente. Requer POT 3+ (com POT < 3, perde a ação de movimento ao atacar).',
    habilidade: {
      nome: 'Golpe Giratório',
      custo: '1 PE-F',
      efeito: 'Gira a corrente antes do impacto para adicionar +1d8 ao dano do ataque.'
    }
  },
  {
    id: 'livro_arma_martelao', nome: 'Martelão', categoria: 'arma', peso: 'pesado',
    dano: '2d8', criticoMargem: 20, criticoMult: 3, criticoExtra: '', ga: 3, gd: 3, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Marreta colossal de guerra (Crítico ×3). Com POT < 3, perde a ação de movimento ao atacar.'
  },
  {
    id: 'livro_arma_espadao', nome: 'Espadão', categoria: 'arma', peso: 'pesado',
    dano: '3d6', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 3, gd: 3, armaDefensiva: false, alcance: 'Curto',
    descricao: 'Lâmina colossal de duas mãos. Requisito obrigatório: Potência 3 ou maior.'
  },

  // ARMAS À DISTÂNCIA & PÓLVORA PRIMITIVA
  {
    id: 'livro_arma_estilingue', nome: 'Estilingue', categoria: 'arma', peso: 'miudeza',
    dano: '1d4', criticoMargem: 20, criticoMult: 2, criticoExtra: '', ga: 0, gd: 0, armaDefensiva: false, alcance: 'Médio',
    descricao: 'Forquilha elástica discreta para disparos rápidos com pedras ou esferas.'
  },
  {
    id: 'livro_arma_arco_curto', nome: 'Arco Curto', categoria: 'arma', peso: 'leve',
    dano: '1d6', criticoMargem: 20, criticoMult: 3, criticoExtra: '', ga: 1, gd: 0, armaDefensiva: false, alcance: 'Médio',
    descricao: 'Arco ágil de caça, ideal para emboscadas e disparos em movimento.'
  },
  {
    id: 'livro_arma_arco_longo', nome: 'Arco Longo', categoria: 'arma', peso: 'medio',
    dano: '1d8', criticoMargem: 19, criticoMult: 3, criticoExtra: '', ga: 2, gd: 0, armaDefensiva: false, alcance: 'Longo',
    descricao: 'Arco alto de grande tensão e alcance extremo.'
  },
  {
    id: 'livro_arma_besta_leve', nome: 'Besta Leve', categoria: 'arma', peso: 'medio',
    dano: '1d8', criticoMargem: 19, criticoMult: 2, criticoExtra: '', ga: 2, gd: 0, armaDefensiva: false, alcance: 'Médio',
    descricao: 'Besta mecânica de virotes rápidos; exige 1 ação de movimento para recarregar.'
  },
  {
    id: 'livro_arma_besta_pesada', nome: 'Besta Pesada', categoria: 'arma', peso: 'pesado',
    dano: '1d12', criticoMargem: 19, criticoMult: 2, criticoExtra: '', ga: 3, gd: 0, armaDefensiva: false, alcance: 'Longo',
    descricao: 'Besta de manivela de altíssima perfuração; exige 1 ação padrão para recarregar.'
  },
  {
    id: 'livro_arma_pistola_pederneira', nome: 'Pistola de Pederneira', categoria: 'arma', peso: 'leve',
    dano: '2d6', criticoMargem: 19, criticoMult: 3, criticoExtra: '', ga: 1, gd: 0, armaDefensiva: false, alcance: 'Curto / Médio',
    descricao: 'Arma de fogo primitiva de tiro único com pólvora negra. Exige 1 ação padrão para recarregar e emite estrondo alto.'
  },
  {
    id: 'livro_arma_mosquete', nome: 'Mosquete Primitivo', categoria: 'arma', peso: 'pesado',
    dano: '2d10', criticoMargem: 19, criticoMult: 3, criticoExtra: '', ga: 3, gd: 0, armaDefensiva: false, alcance: 'Longo',
    descricao: 'Cano longo de pólvora negra e pederneira com poder devastador. Exige 1 ação completa para recarregar.'
  },

  // ARMADURAS, ESCUDOS, CURA E UTILITÁRIOS DO LIVRO
  {
    id: 'livro_armadura_leve', nome: 'Armadura Leve', categoria: 'armadura', peso: 'leve',
    rd: 2, penalidadeDesl: 0,
    descricao: 'Couro acolchoado, gibões de pano grosso ou peles simples. Sem penalidades.'
  },
  {
    id: 'livro_armadura_media', nome: 'Armadura Média', categoria: 'armadura', peso: 'medio',
    rd: 4, penalidadeDesl: 0,
    descricao: 'Couro batido reforçado, brigandina ou cota de malha leve.'
  },
  {
    id: 'livro_armadura_pesada', nome: 'Armadura Pesada', categoria: 'armadura', peso: 'pesado',
    rd: 6, penalidadeDesl: -2,
    descricao: 'Cota de malha pesada ou placas de aço. Impõe -2m no Deslocamento e -2 em rolagens com Destreza.'
  },
  {
    id: 'livro_escudo_leve', nome: 'Escudo Leve (Broquel)', categoria: 'escudo', peso: 'leve',
    gd: 2,
    descricao: 'Concede GD 2 (+4 no teste de Bloqueio) e deixa a mão livre para itens leves.'
  },
  {
    id: 'livro_escudo_medio', nome: 'Escudo Médio (Gota / Redondo)', categoria: 'escudo', peso: 'medio',
    gd: 3,
    descricao: 'Concede GD 3 (+6 no teste de Bloqueio).'
  },
  {
    id: 'livro_escudo_pesado', nome: 'Escudo Pesado (Pavês / Torre)', categoria: 'escudo', peso: 'pesado',
    gd: 4,
    descricao: 'Concede GD 4 (+8 Bloqueio), Cobertura Parcial (+2 Defesa vs projéteis) e -1m Deslocamento.'
  },
  {
    id: 'livro_kit_medico', nome: 'Kit Médico', categoria: 'cura', peso: 'leve',
    curaFormula: '2d8', curaBonus: 2, usosMax: 3,
    descricao: 'Exige Habilidade Medicina. Concede +2 no teste de cura (+4 em estabilização) e cura 2d8 HP.'
  },
  {
    id: 'livro_bandagem', nome: 'Bandagem', categoria: 'cura', peso: 'miudeza',
    curaFormula: '2d4', curaBonus: 0, usosMax: 3,
    descricao: 'Não exige habilidade. Cura 2d4 HP e concede +2 no teste de estabilização.'
  },
  {
    id: 'livro_item_improvisado', nome: 'Curativo Improvisado', categoria: 'cura', peso: 'miudeza',
    curaFormula: '1d4', curaBonus: 0, usosMax: 1,
    descricao: 'Cura 1d4 HP apenas com Habilidade Medicina; leigos usam apenas para estabilizar.'
  },
  {
    id: 'livro_racao', nome: 'Ração de Viagem & Água', categoria: 'utilitario', peso: 'leve',
    descricao: 'Recupera 1d6 + Vigor (PE-F) e 1d6 + Ímpeto (PE-M) durante uma Pausa Curta.'
  },
  {
    id: 'livro_corda', nome: 'Corda de Cânhamo (15m)', categoria: 'utilitario', peso: 'medio',
    descricao: 'Corda resistente para escalada, amarração e travessias.'
  },
  {
    id: 'livro_tocha', nome: 'Tocha', categoria: 'utilitario', peso: 'leve',
    descricao: 'Ilumina uma área de 9 metros por até 1 hora.'
  }
];

export const ARVORES_PADRAO = [];