# 🏛️ PANTHEON · Sistema & Ficha Digital de RPG

Plataforma web completa para gestão de mesas, criação de personagens e evolução em árvores de habilidades para o sistema **PANTHEON**. Desenvolvida com foco em agilidade na mesa, visual temático personalizável e regras automatizadas em tempo real via Firebase.

---

## ✨ Funcionalidades Principais

* **Ficha Interativa & Automatizada (`ficha.html`):**
  * **Roda de 7 Atributos:** Cálculo automático de pool de dados, teto biológico por estágio e modo de *Deficiência* (`2d20` pegando o menor) quando o pool é zero.
  * **Raízes, Heranças e Passatempos:** Suporte completo para *Raiz Singular*, *Herança Singular* (com bônus exclusivos nos nós), *Raiz Dupla*, *Autodidata/Órfão* e seleção dinâmica de passatempos infantis.
  * **Motor de Rolagem Integrado:** Combinação de até 2 atributos, 1 perícia, 1 habilidade e equipamento (`GA×2` para ataque ou `GD×2` para bloqueio), com cálculo automático de margem de crítico e desastres, além de rolagem de dano e dado livre.
  * **Inventário em Blocos Dinâmicos:** Capacidade baseada em *Vigor* com conversão automática de blocos maiores em menores (ex.: 1 bloco Pesado $\rightarrow$ 1 Médio + 1 Leve) e suporte a arrastar e soltar (*drag & drop*).
  * **Conversão de Maestria:** Sacrifício de 5 pontos de uma perícia para obter +1 em um atributo (respeitando o teto biológico).
* **Árvores de Evolução Visuais:**
  * Visualizador interativo com *pan* e *zoom*, conexões SVG coloridas por tipo de ramificação (`Livre`, `Exclusiva` e `Restritiva` com trava de limite), escolhas ambíguas (A/B) e bônus automático de recursos (`+2` em HP/SAN/PE) para personagens de raiz única.
  * Inclui a **Árvore Padrão (Caminho do Sobrevivente)** e árvores especializadas de classe/raiz (como *Caçador*, *Lenhador*, *Guarda / Vigia* e *Cozinheiro / Padeiro*).
* **Histórico em Tempo Real & Customização:**
  * Feed lateral sincronizado com todas as rolagens, curas e descansos da mesa.
  * Alternância entre tema escuro/claro, 5 paletas de cores (*Ouro*, *Carmesim*, *Esmeralda*, *Safira*, *Violeta*) e reorganização dos blocos da ficha via *drag & drop*.

---

## 📁 Estrutura do Projeto

```text
pantheon/
├── index.html                 # Lobby principal e seleção de mesas
├── favicon.svg                # Ícone vetorial (Sigilo de 7 pontas)
├── README.md                  # Documentação do projeto
├── pages/
│   ├── mesa.html              # Painel da mesa, jogadores, catálogo e editor de árvores
│   └── ficha.html             # Ficha interativa do personagem
├── js/
│   ├── firebase-config.js     # Configuração e inicialização do Firebase (Auth & Firestore)
│   └── sistema-padrao.js      # Regras base, perícias, raízes, passatempos, itens e árvores padrão
└── data/ (opcional)
    ├── arvore-cacador.json
    ├── arvore-lenhador.json
    ├── arvore-guarda.json
    ├── arvore-cozinheiro.json
    └── arvore-padrao.json
```

---

## 🎲 Resumo das Mecânicas do Sistema

* **Atributos Fundamentais (7):**
  * **Físicos:** `POT` (Potência), `VIG` (Vigor), `DES` (Destreza)
  * **Mentais:** `PER` (Percepção), `ERU` (Erudição)
  * **Sociais / Espirituais:** `AUT` (Autoridade), `ÍMP` (Ímpeto)
* **Fórmulas de Recursos Máximos:**
  * **HP (Vida):** $10 + (\text{VIG} \times 3) + \text{Bônus de Raiz} + \text{Árvores}$
  * **SAN (Sanidade):** $10 + (\text{ÍMP} \times 3) + \text{Bônus de Raiz} + \text{Árvores}$
  * **PE-F (Energia Física):** $5 + \text{DES} + \text{VIG} + \text{Bônus de Raiz} + \text{Árvores}$
  * **PE-M (Energia Mental):** $5 + \text{ÍMP} + \text{ERU} + \text{Bônus de Raiz} + \text{Árvores}$
  * **Deslocamento:** $5 + \text{DES} - \text{Penalidades de Armadura/Escudo Pesado}$ (em metros)

---

## 🚀 Como Executar Localmente

Como o projeto utiliza **ES Modules** (`type="module"`), é necessário rodá-lo através de um servidor HTTP local (abrir o arquivo diretamente via `file://` bloqueará as importações de módulos):

1. Clone ou baixe este repositório.
2. Configure suas credenciais do Firebase no arquivo `js/firebase-config.js` (habilitando **Authentication** e **Cloud Firestore**).
3. Inicie um servidor local na pasta raiz do projeto:
   * **VS Code:** Use a extensão *Live Server* e clique em **Go Live**.
   * **Node.js:** `npx serve .`
   * **Python:** `python -m http.server 8000`
4. Acesse `http://localhost:8000` no navegador.

---

## 🛠️ Importando Árvores Customizadas (`.json`)

As árvores de evolução seguem uma estrutura JSON compatível com o editor da mesa:
* Cada nó define `id`, `titulo`, `tipoRecompensa` (`habilidade`, `pericia`, `atributo`, `ambiguo`), `tipoRamificacao` (`livre`, `exclusiva`, `restritiva`), `custoPontos`, `requisitos` e `_depth`.
* Para adicionar novas classes ou árvores à mesa, basta importar o arquivo `.json` correspondente no painel do Mestre em `mesa.html` ou registrá-lo em `ARVORES_PADRAO` dentro de `js/sistema-padrao.js`.