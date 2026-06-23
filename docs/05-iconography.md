# 05 · ICONOGRAPHY

54 ícones em `assets/icons/*.svg`. Régua única em `tokens/spacing.css` (`--icon-*`).

## Régua (uma só, derivada do símbolo)
- Grid **24px**, live area **20px**, keepout **2px**.
- Stroke **2px** @24px. Outline-first.
- Cantos: externo 2px, junção interna 1px. **Bouba-dominante** com vértices Kiki só quando há intenção.
- Cap/join arredondados. Traço padrão off-white (`--stroke-icon`).

## Léxico (vigília/curadoria/guarda)
eye, eye-off, scope, scan, fingerprint, shield/shield-check/shield-alert, lock/unlock, key, seal, truck, package, anchor, globe, map-pin, pulse, etc. (lista completa em `assets/icons/`).

## Tamanhos
16 / 20 / 24 (canônico) / 32 / 40px. Cor de acento só para estado (azul=ativo/ok, vermelho=alerta). **A Águia nunca vira ícone** — `eye`/`scope` resolvem "visão/curadoria" de forma abstrata.

## Construção SVG
viewBox limpo (sem metadados de editor), ids kebab-case por função, tinta por token herdado, sem grupos órfãos nem transforms acumulados.
