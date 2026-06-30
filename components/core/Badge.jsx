import React from "react";
import { Icon } from "../icons/Icon";

/* Badge — compact status token. Outline-on-tint, surgical accent for state. */

const TONES = {
  neutral: { fg: "var(--text-secondary)", bg: "var(--ink-06)", bd: "var(--border-hairline)" },
  active: { fg: "var(--electric-blue)", bg: "var(--blue-tint)", bd: "var(--blue-border)" },
  alert: { fg: "var(--power-red)", bg: "var(--red-tint)", bd: "var(--red-border)" },
};

export function Badge({ children, tone = "neutral", icon, style = {}, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        height: "var(--space-6)",
        padding: icon ? "0 var(--space-3) 0 var(--space-2)" : "0 var(--space-3)",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-subhead)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: t.fg,
        background: t.bg,
        border: `1px solid ${t.bd}`,
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={16} color={t.fg} /> : null}
      {children}
    </span>
  );
}
