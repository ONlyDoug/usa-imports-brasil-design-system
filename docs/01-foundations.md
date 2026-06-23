# 01 · FOUNDATIONS

Camada-base que tudo consome. Valores canônicos em `tokens/colors.css` e `tokens/spacing.css`.

## Superfícies (Dark Mode)
Rampa Navy de elevação — profundidade por luz, nunca por sombra cinza:
- `--navy-900 #060E1C` — overlays/scrims
- `--navy-800 #0A1628` — **fundo padrão sempre** (`--bg-base`)
- `--navy-700 #0F1E36` — card/raised (`--surface-card`)
- `--navy-600 #15294A` — elevated/hover (`--surface-raised`)
- `--navy-500 #1D375F` — bordas estruturais fortes

## Elevação
`--elev-1/2/3` = inset highlight + sombra Navy profunda. Estados ativos usam **glow** (`--glow-active` blue, `--glow-alert` red), nunca drop cinza.

## Motion
Aeroespacial, sem bounce. `--dur-fast 120ms`, `--dur-base 180ms`, `--dur-slow 280ms`; `--ease-standard cubic-bezier(0.2,0,0.1,1)`.

## Foco / acessibilidade
Anel de foco `--focus-ring` (Electric Blue), `--ring-width 2px`, offset 2px. Contrastes sobre Deep Navy: off-white 16,9:1 · ink-60 7,0:1 · blue 6,5:1 · red 4,35:1. **Power Red proibido em corpo de texto pequeno** (só estado/realce).
