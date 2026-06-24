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
