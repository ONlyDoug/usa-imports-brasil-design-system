# 05 · ICONOGRAPHY

54 ícones em `assets/icons/*.svg`. Régua única em `tokens/spacing.css` (`--icon-*`).

## Régua (uma só, derivada do símbolo)
Grid **24px**, live area **20px**, keepout **2px**. Stroke **2px** @24px, outline-first. Cantos: externo 2px, junção interna 1px (Bouba-dominante, vértices Kiki só com intenção). Cap/join arredondados. Traço off-white.

## OBRIGATÓRIO EXIBIR (guideline) — não pular
1. **Card de construção:** um ícone-exemplo ampliado sobre o grid de 24px com live area 20px e keepout 2px demarcados (réguas visíveis), mostrando stroke e raios. Padrão de manual de marca.
2. **Catálogo completo:** TODOS os 54 ícones renderizados em grade, agrupados por família do léxico — vigília (eye, scope, scan…), guarda (shield, lock, key…), autenticação (fingerprint, seal, check…), importação/comércio (truck, package, globe…), interface (chevrons, menu, search…). Fundo Deep Navy, traço off-white.
*(Esta exibição existia no primeiro handoff e é referência de qualidade. Reproduzir.)*

## Tamanhos e cor
16/20/24(canônico)/32/40px. Acento só para estado (azul=ativo/ok, vermelho=alerta). **A Águia nunca vira ícone** — `eye`/`scope` resolvem "visão/curadoria" de forma abstrata.

## Construção SVG
viewBox limpo (sem metadados de editor), ids kebab-case por função, tinta por token herdado, sem grupos órfãos nem transforms acumulados.
