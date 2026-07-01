# CHANGELOG — curadoria deste repo vs handoff original

Este repo parte do handoff do Claude Design, **auditado e corrigido**. Mudanças:

| # | O que | De (handoff) | Para (este repo) | Motivo |
|---|---|---|---|---|
| 1 | Peso de display | amostra em 800; ramp dos 9 pesos exposta sem disciplina | estilos travados em **900/500/400** (papéis semânticos `--weight-display/subhead/label`) | Spec travada: voz da Águia = Black 900; 600/700/800 cortados |
| 2 | `base.css` headings | h1–h6 em 700; eyebrow em 600 | h1=900, h2+=500, eyebrow=400 | Aplicar a disciplina na origem |
| 3 | Componentes | Button/Badge label em 600 | label em **500** (Medium) | Mesma disciplina para labels interativos |
| 4 | JetBrains Mono | adicionado pelo handoff | **ratificado** e documentado (Tipografia v2.1) | Mono para rastreio/telemetria/ID é coerente com o tom |
| 5 | Escala tipográfica custom | presente | **ratificada** e documentada | Funcional e bem distribuída |
| 6 | Contexto de marca | ausente (handoff só tinha tokens/ícones) | adicionados `brand-context.md` + `docs/01→08` | Dar ao gerador o contexto completo (símbolo, tese, arquétipo, régua, componentes, telas) |

**Mantidos como estavam (já corretos):** `colors.css`, `spacing.css`, `fonts.css`, os 54 ícones, os 6 SVGs de marca, a estrutura de componentes.

## Adendo — inclusão do selo
| # | O que | Motivo |
|---|---|---|
| 7 | Adicionados `assets/brand/selo-visao-aguia-positivo.svg` e `…-branco-vazado.svg` | O selo estava especificado em `docs/07` mas faltava o vetor; agora o ativo está no repo (viewBox 920×920, Águia verbatim, sem Power Red) |

## Rodada de correção (pós-2º handoff) — causas-raiz tratadas na origem
| # | Problema observado no 2º handoff | Causa-raiz (no repo) | Correção |
|---|---|---|---|
| 8 | Landing page gerada (escopo errado) | `docs/08` listava "Home/landing" como tela | Removido; `docs/08` agora proíbe landing/marketing explicitamente |
| 9 | Grid/catálogo de ícones sumiu (regressão) | `docs/05` só descrevia em prosa, não mandava exibir | `docs/05` agora **obriga** card de construção + catálogo dos 54 |
| 10 | Cards de símbolo/symboltipo/selo "vazios" | repo não tinha spec de construção de marca | Novo `docs/09` exige construção+clear space+matriz de variações |
| 11 | Falta de monocromático | só havia positivo/negativo | Gerados `simbolo-aguia-mono.svg` e `selo-visao-aguia-mono.svg` (olho verificado); symboltipo mono especificado p/ derivação verificada |
| 12 | Selo sobrecarregado (anéis/glow/pulse/shadow) | `docs/07` não proibia decoração | `docs/07` agora proíbe explicitamente; princípio "sobriedade" no brand-context |
| 13 | Slogan "Portal de Inovação Global" em aberto | eu não havia inspecionado o asset | Descoberto: já vetorizado no selo; documentado como copy estabelecida |

## Rodada de auditoria (3º handoff) — resultado
| # | Verificação | Resultado |
|---|---|---|
| 14 | Landing/marketing | ✅ Removida (só telas de app: Rastreio/Produto/Dashboard) |
| 15 | Catálogo + grid de ícones | ✅ De volta (icon-catalog + icon-construction cards) |
| 16 | Cards de marca (construção/matriz/misuse) | ✅ Símbolo e selo completos |
| 17 | Peso display | ✅ Manteve 900 (sem regressão) |
| 18 | Selo sóbrio | ✅ Limpo (só 3 estados, glow sutil; "excesso" era falso alarme em comentário) |
| 19 | Drop-shadow proibido | ✅ Nenhum — usam tokens de elevação/glow |
| 20 | Symboltipo guideline | ⚠️ Subdesenvolvido (1 card vs 3) + faltava mono |
| 21 | Symboltipo mono | ✅ Gerado e verificado agora: `symboltipo-{horizontal,empilhado}-mono.svg` (olho aberto) |

## Rodada de alinhamento canônico (4ª) — diretrizes vigentes
| # | Problema | Causa-raiz (no repo) | Correção |
|---|---|---|---|
| 22 | Tese enunciada **pela negação** ("A Águia não mergulha — ela VÊ") | `brand-context.md §2` (headline) e `CLAUDE-DESIGN-NOTES.md` carregavam frase já descartada (`00 §6`) — contaminava todo gerado no Claude Design | Trocado por **afirmação pura: "A Águia VÊ" / Visão de Águia**. Forma negada removida de ambos os arquivos |
| 23 | Autoridade ambígua (repo se declarava "fonte de verdade") | `brand-context.md` e `README` não deferiam à grade canônica | Reescritos para **subordinar** o repo ao `00_BRAND_CANON`. Ordem: **00 > tokens > brand-context** |

## Rodada de higiene de componentes (5ª) — base-8 + tokens em toda métrica
Causa-raiz: os 4 componentes-núcleo cravavam px/cor em vez de consumir tokens (contraria `docs/06` "nunca px cru" e `docs/04` "múltiplo de 8"). Corrigido na origem para o Claude Design herdar o padrão certo ao expandir a biblioteca.

| # | O que | De | Para |
|---|---|---|---|
| 24 | Alturas de Button | 34 / 42 / 50 (fora do grid-8; `sm` < 40 de toque) | **40 / 48 / 56** via `--control-h-{sm,md,lg}` (novos tokens) |
| 25 | Fonte de Button | 12 / **13** / 14 (13 fora da escala) | `--text-xs / --text-sm / --text-sm` (12 / 14 / 14) |
| 26 | Padding / gap / weight / tracking de Button | px e `0.08em` crus, `fontWeight: 500` | `--space-*`, `--tracking-label`, `--weight-subhead` |
| 27 | Caixas de IconButton | 32 / 40 / 48 (`sm` < 40 de toque) | **40 / 48 / 56** via `--control-h-*`; ícones canônicos 20 / 24 / 24 |
| 28 | Badge: bordas de estado | `rgba(...,.4)` cru | novos tokens **`--blue-border` / `--red-border`** |
| 29 | Badge: dimensões / fonte / ícone | `gap 6`, `pad 10/8`, `font 11`, `icon 14` crus | `--space-2/3`, `--text-2xs`, `--tracking-label`, ícone 16 (mín. da régua) |

**Novos tokens:** `--control-h-sm/md/lg` (spacing.css) · `--blue-border` / `--red-border` (colors.css).
**Intactos (já corretos):** `base.css`, `styles.css`, `Icon.jsx`, `colors`/`spacing`/`typography` pré-existentes, 54 ícones, 6 SVGs de marca, selos.
**Decisão registrada:** `sm` de Button/IconButton subiu para 40px para honrar o alvo de toque ≥40 do `docs/06`. Se surgir necessidade de controle denso (32px) em desktop, abrir variante `xs` documentada — não reverter o `sm`.

## Rodada de correção de asset (6ª) — logos transparentes
Causa-raiz do "logo com caixa" nas aplicações: 6 SVGs de marca traziam um `<rect>` de fundo opaco embutido. Sobre qualquer superfície de hex diferente (ex.: card navy-700), o retângulo aparecia como uma placa. Logo de marca é transparente — o fundo é da tela.

| # | Arquivo | Removido |
|---|---|---|
| 30 | `simbolo-aguia-positivo.svg` / `-negativo.svg` | `rect fundo` (#0A1628 / #F5F7FA) |
| 31 | `symboltipo-horizontal-positivo.svg` / `-negativo.svg` | `rect fundo` |
| 32 | `symboltipo-empilhado-positivo.svg` / `-negativo.svg` | `rect fundo` |

**Regra:** `positivo` (arte off-white, transparente) → superfícies escuras; `negativo` (arte navy, transparente) → superfícies claras; `mono` (currentColor). Nenhum asset de marca carrega fundo. Se precisar de avatar com placa, é asset separado e nomeado, nunca o lockup primário.
