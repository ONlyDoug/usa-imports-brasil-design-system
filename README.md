# U.S.A IMPORTS BRASIL — Design System (source of truth)

Repositório-fonte do sistema de design da marca **U.S.A IMPORTS BRASIL**, estética Tech-Premium cibernético-aeroespacial (NASA/SpaceX), **Dark Mode obrigatório**.

Este repo é a **fonte de verdade curada e corrigida**. Foi construído a partir de um handoff do Claude Design, auditado contra as especificações `.md` aprovadas da marca, com as divergências já resolvidas. Serve para alimentar o Claude Design (ou um agente de código) na geração do sistema final completo.

## Como usar
1. Conecte este repositório no Claude Design (campo *Código de link do GitHub*).
2. Cole o conteúdo de `CLAUDE-DESIGN-NOTES.md` no campo de observações.
3. O agente deve ler `brand-context.md` primeiro, depois `docs/` em ordem, depois `tokens/`.

## Ordem de leitura (obrigatória para qualquer agente)
1. `brand-context.md` — quem é a marca, o símbolo, a tese, os arquétipos, a régua de diferenciação.
2. `docs/01-foundations.md` … `docs/08-screens.md` — as camadas, em ordem de dependência.
3. `tokens/*.css` — os valores canônicos (a fonte de verdade numérica).
4. `assets/` e `components/` — o que já existe e deve ser reaproveitado.

## Estrutura
```
brand-context.md            # CONTEXTO-MESTRE — ler primeiro
CLAUDE-DESIGN-NOTES.md      # texto para o campo de observações do Claude Design
docs/                       # especificações por camada (01→08)
tokens/                     # CSS canônico (cores, tipografia, espaçamento, fontes, base)
assets/fonts/               # Next Sphere (9 pesos .otf)
assets/icons/               # 54 ícones SVG (ruler 24px)
assets/brand/               # símbolo + symboltipo + selo (positivo/negativo/mono)
components/                 # componentes-base React (Button, IconButton, Badge, Icon)
```

## Estado do sistema
| Camada | Status |
|---|---|
| Foundations / Tokens (cor, espaçamento, elevação, motion) | ✅ Completo |
| Tipografia v2.1 (Next Sphere + Inter + JetBrains Mono) | ✅ Completo |
| Iconografia (54 ícones, ruler 24px) | ✅ Completo |
| Componentes-base (Button, IconButton, Badge, Icon) | 🟦 Núcleo — expandir |
| Biblioteca de componentes completa | ⬜ A construir |
| Componentes proprietários "Visão de Águia" | ⬜ A construir |
| Telas / fluxos | ⬜ A construir |
| Mascote U.B.I. | ⬜ Fora deste escopo (rodada própria) |

## Travas inegociáveis (resumo — detalhe em brand-context.md)
- Dark Mode sempre. Fundo padrão **Deep Navy `#0A1628`**.
- Proporção de cor **80/10/10** (Navy / off-white / acento). Electric Blue e Power Red **nunca** são cor base — só estado.
- Símbolo da Águia é usado **verbatim** — nunca redesenhar, simplificar, fundir penas ou fechar o olho.
- Next Sphere é **unicase** → wordmark e display sempre **ALL-CAPS**. Nunca em texto corrido.
- Disciplina de pesos Next Sphere: estilos usam só **900 / 500 / 400**.
