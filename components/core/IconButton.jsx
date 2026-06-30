import React from "react";
import { Icon } from "../icons/Icon";

/* IconButton — square, icon-only control. Outline icon on a quiet navy chip. */

const SIZES = {
  sm: { box: "var(--control-h-sm)", icon: 20 },
  md: { box: "var(--control-h-md)", icon: 24 },
  lg: { box: "var(--control-h-lg)", icon: 24 },
};

export function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  state = "default",
  disabled = false,
  active = false,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);

  const variants = {
    ghost: {
      background: hover ? "var(--ink-06)" : "transparent",
      borderColor: "transparent",
    },
    outline: {
      background: hover ? "var(--surface-raised)" : "var(--surface-card)",
      borderColor: "var(--border-strong)",
    },
  };

  const isOn = active || state === "active" || state === "alert";
  const ring =
    state === "alert"
      ? "var(--glow-alert)"
      : (active || state === "active")
      ? "var(--glow-active)"
      : "none";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: s.box,
        height: s.box,
        border: "1px solid transparent",
        borderRadius: "var(--radius-sm)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        boxShadow: isOn ? ring : "none",
        transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={s.icon} state={active ? "active" : state} />
    </button>
  );
}
