# 03 · COLOR

Valores em `tokens/colors.css`. Filosofia em `brand-context.md §6`.

## Regra 80 / 10 / 10
- **80%** Deep Navy (`--bg-base` e rampa de superfície).
- **10%** Off-white (traço/texto — rampa Ink 100→06 para hierarquia).
- **10%** Acento cirúrgico de estado (Blue + Red somados).

## Acentos = estado, NUNCA base
- **Electric Blue `#3B9EFF`** → ativo, informação, **autenticado**, foco, link.
- **Power Red `#E63946`** → alerta, bloqueio, **negado**, erro.
- Use tints/halos (`--blue-tint`, `--red-halo`…) para fills suaves e auras de estado.
- Nunca pintar fundo, card ou texto longo de azul/vermelho.

## Aliases semânticos (use estes nos componentes)
`--bg-base`, `--surface-card`, `--surface-raised`, `--text-primary/secondary/muted/disabled`, `--stroke-icon`, `--border-hairline/strong`, `--divider`, `--state-active/alert`, `--focus-ring`.
