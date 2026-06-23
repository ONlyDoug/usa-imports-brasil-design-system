# BRAND CONTEXT — U.S.A IMPORTS BRASIL
### Documento-mestre · ler antes de qualquer geração

> Este documento contextualiza a marca para que qualquer agente (Claude Design ou de código) gere o sistema de forma coerente. As regras aqui são a **fonte de verdade**. Em caso de conflito com qualquer arquivo, este documento e os `tokens/*.css` vencem.

---

## 1 · A marca

**U.S.A IMPORTS BRASIL** — importação premium de eletrônicos e produtos de alto valor dos EUA para o Brasil. Opera num mercado dominado pelo **medo do golpe**: o ativo mais valioso da marca não é preço nem velocidade, é **confiança e procedência**. O cliente paga caro para ter certeza de que o produto é autêntico, original e vai chegar.

**Estética:** Tech-Premium cibernético-aeroespacial — linguagem NASA / SpaceX. Precisão, autoridade, instrumentação. **Dark Mode obrigatório.**

---

## 2 · A tese central (o coração de tudo)

> **"A Águia não mergulha — ela VÊ."**

A autoridade da marca vem de **ver mais longe e selecionar** — não de chegar mais rápido. O olhar da Águia:
- **vê e seleciona** (curadoria implacável),
- **autentica** (selo anti-fraude — "Visão de Águia"),
- **guarda** (segurança ponta a ponta).

Tudo no sistema visual deve reforçar **visão / vigília / curadoria / guarda**. A narrativa antiga de velocidade/ataque ("voo picado", "Strike Eagle", "a Águia mergulha") está **morta** e não deve reaparecer em nenhum lugar.

**Tagline oficial:** *Visão de Águia.*

---

## 3 · O símbolo (definitivo — usar verbatim)

O símbolo é uma **cabeça de águia em vigília**, vista lateral, voltada à direita, bico em gancho, olhar fixo. Geometria **Bouba-dominante** (curvas fluidas) com **acentos Kiki** apenas nas pontas das penas. O grande **vazio circular central** forma o olhar — é o elemento de leitura.

**Arquivos:** `assets/brand/simbolo-aguia-{positivo,negativo}.svg`

**Regras absolutas do símbolo:**
- Usar **verbatim**. Nunca redesenhar, simplificar, vetorizar de novo, fundir penas ou **fechar/remover o olho**.
- O olho é uma contraforma ativa (fill-rule). Posicionar **somente** por transform de grupo (scale/translate). Zero edição de geometria.
- Monocromático: off-white `#F5F7FA` (positivo, sobre Navy) ou Deep Navy `#0A1628` (negativo, sobre claro). **Power Red e Electric Blue nunca tocam a Águia.**
- A Águia **não** é ícone de UI. Não usar como pictograma genérico. Ela aparece como marca e no selo "Visão de Águia".

---

## 4 · Symboltipo (símbolo + wordmark)

- **Wordmark:** "U.S.A" em Next Sphere **Medium (500)** + "IMPORTS BRASIL" em Next Sphere **Regular (400)**, **ALL-CAPS**, duas linhas, flush-left.
- **Lockup primário:** símbolo à **esquerda**, wordmark à direita (o símbolo olha para a direita → o olhar "entra" no nome).
- **Lockup secundário:** empilhado (símbolo acima) para avatar/uso quadrado.
- **Grid:** unidade base **8px**. Símbolo e bloco de texto co-altura = 12U (96px); gap 2U; clear space mín. 3U / recomendado 4,5U.
- **Arquivos:** `assets/brand/symboltipo-{horizontal,empilhado}-{positivo,negativo}.svg`
- Nunca exibir o wordmark **sozinho** sem o símbolo (a Next Sphere não sustenta a identidade isolada).

---

## 5 · Arquétipo e vozes

**Águia = Soberano-Guardião + Sábio.** Autoridade que vê, seleciona, autentica e protege. Imponência por **vigilância**, não por agressividade. Tom: definitivo, decreto.

**U.B.I. = Cara Comum / técnico-acessível.** O executor que acompanha o que o olhar aprovou. Próximo, claro, nunca meme. *(O mascote U.B.I. está fora do escopo deste repo — será desenhado em rodada própria. Mas a dualidade de vozes já governa a tipografia.)*

### Régua de diferenciação Águia ↔ U.B.I. (CRÍTICO)
O eixo antigo "Águia = Kiki (angular) × U.B.I. = Bouba (arredondado)" **colapsou** — o novo símbolo também é Bouba. A diferenciação **não** é mais geométrica. Ela é expressa por:
- **Peso × leveza:** Águia = massa cheia, contorno fechado, alto contraste, decreto. U.B.I. = leve, próximo, acessível.
- **Vigília × companhia:** Águia = olhar fixo, frontal, distante. U.B.I. = expressivo, próximo.
- **Tipografia:** Águia fala em Next Sphere all-caps (autoridade); U.B.I. fala em Inter sentence-case (clareza).

---

## 6 · Sistema cromático (filosofia)

Valores canônicos em `tokens/colors.css`. Princípios:
- **Deep Navy `#0A1628`** é o fundo padrão de ~80% de toda superfície. Há uma rampa de elevação (900→500) para cards/hover/bordas — Dark Mode com profundidade por **glow**, nunca drop-shadow cinza.
- **Off-white `#F5F7FA`** é o traço/texto padrão (~10%), com rampa de opacidade (Ink 100→06) para hierarquia.
- **Electric Blue `#3B9EFF`** = ativo / informação / autenticado. **Power Red `#E63946`** = alerta / bloqueio / negado. Os dois são **acento cirúrgico de estado (~10% somados), nunca cor base.**
- Proporção-guia: **80 / 10 / 10**.

---

## 7 · Tipografia (resumo — detalhe em docs/02)

- **Next Sphere** (display, **unicase/all-caps**) — voz da Águia. Disciplina: estilos usam só **900 (decreto/H1/big-numbers) · 500 (H2/H3/labels interativos) · 400 (eyebrow/overline)**. Nunca em texto corrido.
- **Inter** (body/UI, bicameral) — voz do U.B.I., leitura longa, interface.
- **JetBrains Mono** — códigos de rastreio, telemetria, IDs (reforça o tom aeroespacial/instrumental).

---

## 8 · Princípios de movimento e forma

- **Motion aeroespacial:** medido, preciso, **sem bounce**. Durações 120/180/280ms, easing `cubic-bezier(0.2,0,0.1,1)`.
- **Cantos suaves-mas-estruturais** (Bouba): raios pequenos (2–16px), nunca cantos vivos agressivos nem totalmente arredondados sem função.
- **Espaçamento:** tudo múltiplo de **8px**.

---

## 9 · O que NÃO fazer (negativos globais)

- Fundo branco como padrão (é exceção sinalizada).
- Gradientes fora da paleta; cores fora dos tokens.
- Águia redesenhada, simplificada, com olho fechado, ou colorida.
- Texto corrido em Next Sphere; qualquer uso da Next Sphere fora de all-caps.
- Electric Blue / Power Red como cor de fundo ou base.
- Pesos 100/200/300/600/700/800 da Next Sphere em estilos de marca.
- Decoração sem função. Drop-shadow cinza suave (usar glow/inset).
- Mascote infantilizado na Águia; tom meme.
