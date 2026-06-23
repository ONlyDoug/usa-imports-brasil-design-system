# 06 · COMPONENTS

Componentes consomem **só tokens** — nunca hex/px cru. Estética: Dark Mode, cantos Bouba, all-caps Next Sphere em labels (peso 500), acento cirúrgico para primary/danger, glow em estados ativos, motion sem bounce.

## Já existem (reaproveitar — em `components/`)
- **Button** — 4 variantes (primary/secondary/ghost/danger), 3 tamanhos. Label all-caps Next Sphere **500**, tracking 0.08em.
- **IconButton** — quadrado, icon-only, estados glow.
- **Badge** — pill all-caps, 3 tons (neutro/ativo-azul/alerta-vermelho).
- **Icon** — set outline 24px (ver docs/05).

## A construir (biblioteca completa)
Para cada um: variantes, estados (default/hover/active/focus/disabled), tamanhos, e mapeamento a tokens.

**Formulário & entrada:** Input/Field (label+hint+erro), Textarea, Select/Dropdown, Checkbox, Radio, Toggle/Switch, Slider, Search field.
**Contêineres:** Card, Panel/Surface, Modal/Dialog, Drawer, Tooltip/Popover, Accordion.
**Navegação:** Header/Topbar (com symboltipo), Sidebar/Nav, Tabs, Breadcrumb, Pagination, Menu.
**Feedback:** Alert/Toast, Inline message, Progress bar, Spinner/Loader, Skeleton, Empty state.
**Dados:** Table (com header all-caps), List row, Stat/KPI block (big-number 900 + mono), Tag/Chip, Avatar.

## Regras transversais
- Labels de ação/UI → Next Sphere **500** all-caps. Texto de apoio/corpo → Inter.
- Foco visível sempre (`--focus-ring`). Estados ativos = glow, não cor de fundo chapada.
- Alvos de toque ≥ 40px de altura. Espaçamentos múltiplos de 8.
- IDs de pedido/rastreio e telemetria → JetBrains Mono.
