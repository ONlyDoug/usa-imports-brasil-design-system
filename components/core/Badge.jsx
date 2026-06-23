import React from "react";
import { Icon } from "../icons/Icon";

/* Badge — compact status token. Outline-on-tint, surgical accent for state. */

const TONES = {
  neutral: { fg: "var(--text-secondary)", bg: "var(--ink-06)", bd: "var(--border-hairline)" },
  active: { fg: "var(--electric-blue)", bg: "var(--blue-tint)", bd: "rgba(59,158,255,.4)" },
  alert: { fg: "var(--power-red)", bg: "var(--red-tint)", bd: "rgba(230,57,70,.4)" },
};

export function Badge({ children, tone = "neutral", icon, style = {}, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 24,
        padding: icon ? "0 10px 0 8px" : "0 10px",
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 11,
        letterSpacing: "0.1em",
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
      {icon ? <Icon name={icon} size={14} color={t.fg} /> : null}
      {children}
    </span>
  );
}
