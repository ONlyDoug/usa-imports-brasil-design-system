import React from "react";
import { Icon } from "../icons/Icon";

/* ============================================================
   Button — U.S.A Imports Brasil. Next Sphere all-caps label,
   soft-but-structural corners, surgical accent for primary/danger.
   ============================================================ */

const SIZES = {
  sm: { height: 34, padding: "0 14px", font: 12, gap: 8, icon: 16 },
  md: { height: 42, padding: "0 18px", font: 13, gap: 9, icon: 18 },
  lg: { height: 50, padding: "0 24px", font: 14, gap: 10, icon: 20 },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  leadingIcon,
  trailingIcon,
  disabled = false,
  block = false,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const base = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: s.font,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    border: "1px solid transparent",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
    transform: press && !disabled ? "translateY(1px)" : "none",
    whiteSpace: "nowrap",
  };

  const variants = {
    primary: {
      background: hover ? "var(--electric-blue)" : "var(--electric-blue-dim)",
      color: "var(--offwhite)",
      boxShadow: hover ? "var(--glow-active)" : "none",
    },
    secondary: {
      background: hover ? "var(--surface-raised)" : "var(--surface-card)",
      color: "var(--text-primary)",
      borderColor: "var(--border-strong)",
    },
    ghost: {
      background: hover ? "var(--ink-06)" : "transparent",
      color: "var(--text-primary)",
    },
    danger: {
      background: hover ? "var(--power-red)" : "var(--power-red-dim)",
      color: "var(--offwhite)",
      boxShadow: hover ? "var(--glow-alert)" : "none",
    },
  };

  const iconColor =
    variant === "primary" || variant === "danger" ? "var(--offwhite)" : undefined;

  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {leadingIcon ? <Icon name={leadingIcon} size={s.icon} color={iconColor} /> : null}
      {children}
      {trailingIcon ? <Icon name={trailingIcon} size={s.icon} color={iconColor} /> : null}
    </button>
  );
}
