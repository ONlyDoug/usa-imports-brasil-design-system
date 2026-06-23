# 02 · TYPOGRAPHY v2.1

Valores em `tokens/typography.css` e `tokens/fonts.css`. Três famílias, papéis estritos.

## Famílias
| Família | Papel | Caixa |
|---|---|---|
| **Next Sphere** | Display, headlines, labels — voz da Águia (autoridade) | **ALL-CAPS sempre** (é unicase: cap height = x-height = 696) |
| **Inter** | Corpo, parágrafo, interface — voz do U.B.I. (clareza) | Sentence case |
| **JetBrains Mono** | Códigos de rastreio, telemetria, IDs | conforme dado |

## Disciplina de pesos da Next Sphere (estilos usam só 3)
- **900 (`--weight-display`)** — display, H1, decreto, big-numbers.
- **500 (`--weight-subhead`)** — H2, H3, labels interativos (button, tab, nav ativo).
- **400 (`--weight-label`)** — eyebrow, overline, micro-label, caption all-caps.
- Os pesos 100/200/300/600/700/800 ficam instalados via `@font-face` mas **não entram em estilos de marca**.
- *(Inter, por ser body bicameral, usa sua faixa própria 400–700 — a disciplina acima é só da Next Sphere.)*

## Escala (custom, ratificada)
Display: 72/56/40/30/22px. Body (Inter): 20/18/16/14/12/11px (base 16). Leading sempre alinhado ao ritmo de 8px (`--leading-tight 1.05` display, `--leading-normal 1.5` corpo).

## Tracking
Display 0.04em · eyebrow 0.22em · label 0.08em · body 0 · mono 0.02em. **All-caps sempre com tracking aberto** — nunca all-caps apertado.

## Regras
- Next Sphere **nunca** em texto corrido/parágrafo (ilegível em unicase).
- Medida de linha de corpo (Inter): 60–75 caracteres.
- Big-numbers e códigos de telemetria reforçam o tom instrumental — use mono para IDs/rastreio.
