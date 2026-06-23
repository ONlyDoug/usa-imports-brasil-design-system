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
