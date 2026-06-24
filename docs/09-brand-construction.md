# 09 · BRAND CONSTRUCTION (guidelines de marca — exibir, não só listar)

Os cards de marca **não podem flutuar a arte solta**. Cada um (símbolo, symboltipo, selo) deve ser uma **página de manual** com construção visível e a **matriz completa de variações**. Foi aqui que a geração anterior falhou — reproduzir o nível dos manuais profissionais.

## Para CADA marca (símbolo, symboltipo, selo), exibir:
1. **Construção sobre grid de 8px** com clear space demarcado (réguas/linhas visíveis).
2. **Matriz de versões lado a lado:**
   - **Positivo** — off-white sobre Deep Navy `#0A1628`.
   - **Negativo** — sobre fundo claro.
   - **Monocromático 1-cor** — tinta única (`currentColor`), para carimbo/gravação/impressão 1 cor.
3. **Tamanho mínimo** (digital px + físico mm).
4. **Usos incorretos** (proibições específicas).

## Assets de variação (em `assets/brand/`)
| Marca | Positivo | Negativo | Mono 1-cor |
|---|---|---|---|
| Símbolo | `simbolo-aguia-positivo.svg` | `simbolo-aguia-negativo.svg` | `simbolo-aguia-mono.svg` ✅ |
| Symboltipo horizontal | `symboltipo-horizontal-positivo.svg` | `symboltipo-horizontal-negativo.svg` | *derivar do master preservando o olho (fill-rule) — verificar render* |
| Symboltipo empilhado | `symboltipo-empilhado-positivo.svg` | `symboltipo-empilhado-negativo.svg` | *idem* |
| Selo | `selo-visao-aguia-positivo.svg` | `selo-visao-aguia-branco-vazado.svg` | `selo-visao-aguia-mono.svg` ✅ |

## Regra crítica do símbolo (em toda variação)
A Águia é **verbatim**. O **olho é contraforma ativa (fill-rule)** — nunca preencher, fechar, simplificar ou redesenhar. O mono do símbolo/selo usa `currentColor` e o olho permanece aberto (verificado). Para o mono do symboltipo, derivar do master mantendo o olho como furo — **renderizar e conferir o olho antes de aprovar**.
