import React from "react";

/* ============================================================
   U.S.A IMPORTS BRASIL — UI ICON SYSTEM
   ------------------------------------------------------------
   Single geometric ruler (Bouba-dominant):
   · Grid 24×24, live area 20×20, padding 2px, base-8.
   · Stroke 2px @ 24px, round cap + round join.
   · External corners soft (~2px), internal junctions ~1px.
   · Outline is the PRIMARY style (no fill).
   · Max 1–2 acute vertices per icon, only with semantic intent
     (arrow tip, checkmark angle). The mass is always curved.
   · NEVER an eagle pictogram — the eagle head is the BRAND mark,
     a separate vocabulary. These are UI glyphs only.
   ============================================================ */

export const ICON_PATHS = {
  /* ---- Vigília / Guarda / Autenticação (brand lexicon) ---- */
  shield:
    '<path d="M12 3.2 L18.4 5.6 C18.8 5.75 19 6.1 19 6.5 V11.3 C19 15.8 16 19.1 12 20.8 C8 19.1 5 15.8 5 11.3 V6.5 C5 6.1 5.2 5.75 5.6 5.6 Z"/>',
  "shield-check":
    '<path d="M12 3.2 L18.4 5.6 C18.8 5.75 19 6.1 19 6.5 V11.3 C19 15.8 16 19.1 12 20.8 C8 19.1 5 15.8 5 11.3 V6.5 C5 6.1 5.2 5.75 5.6 5.6 Z"/><path d="M9 11.7 L11.2 13.9 L15 9.7"/>',
  "shield-alert":
    '<path d="M12 3.2 L18.4 5.6 C18.8 5.75 19 6.1 19 6.5 V11.3 C19 15.8 16 19.1 12 20.8 C8 19.1 5 15.8 5 11.3 V6.5 C5 6.1 5.2 5.75 5.6 5.6 Z"/><path d="M12 8 V12.4"/><path d="M12 15.5 V15.6"/>',
  eye:
    '<path d="M2.6 12 C5.3 7.9 8.4 5.9 12 5.9 C15.6 5.9 18.7 7.9 21.4 12 C18.7 16.1 15.6 18.1 12 18.1 C8.4 18.1 5.3 16.1 2.6 12 Z"/><circle cx="12" cy="12" r="3"/>',
  "eye-off":
    '<path d="M2.6 12 C5.3 7.9 8.4 5.9 12 5.9 C13.1 5.9 14.1 6.05 15.1 6.35"/><path d="M19.4 9.1 C20.2 9.95 20.8 10.9 21.4 12 C18.7 16.1 15.6 18.1 12 18.1 C10.6 18.1 9.3 17.8 8.1 17.2"/><path d="M9.9 9.9 A3 3 0 0 0 14.1 14.1"/><path d="M4 4 L20 20"/>',
  scope:
    '<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2.3"/><path d="M12 2.6 V5.6"/><path d="M12 18.4 V21.4"/><path d="M2.6 12 H5.6"/><path d="M18.4 12 H21.4"/>',
  scan:
    '<path d="M4 8.5 V6.5 C4 5.7 4.7 5 5.5 5 H8"/><path d="M16 5 H18.5 C19.3 5 20 5.7 20 6.5 V8.5"/><path d="M20 15.5 V17.5 C20 18.3 19.3 19 18.5 19 H16"/><path d="M8 19 H5.5 C4.7 19 4 18.3 4 17.5 V15.5"/><path d="M3.5 12 H20.5"/>',
  lock:
    '<rect x="5" y="11" width="14" height="9" rx="2.4"/><path d="M8 11 V8 A4 4 0 0 1 16 8 V11"/><path d="M12 14.6 V16.6"/>',
  unlock:
    '<rect x="5" y="11" width="14" height="9" rx="2.4"/><path d="M8 11 V8 A4 4 0 0 1 15.6 6.1"/><path d="M12 14.6 V16.6"/>',
  fingerprint:
    '<path d="M4 12 A8 8 0 0 1 16.4 5.3"/><path d="M19.6 9 C19.85 9.95 20 10.95 20 12 V13.5"/><path d="M7 13 V12 A5 5 0 0 1 16.9 11"/><path d="M9.6 16.6 C9.4 15.1 9.4 13.6 9.4 12.1 A2.6 2.6 0 0 1 14.6 12"/><path d="M12.4 18 C12.1 16.5 12 14.9 12 12.4"/>',
  key:
    '<circle cx="8.4" cy="8.4" r="3.9"/><path d="M11.2 11.2 L18.6 18.6"/><path d="M15 15 L17 13"/><path d="M17.4 17.4 L19.4 15.4"/>',
  pulse:
    '<path d="M3 12 H6.5 L9 6.5 L13 17.5 L15 12 H21"/>',
  bell:
    '<path d="M6.5 16.2 V11 A5.5 5.5 0 0 1 17.5 11 V16.2 L19 18.5 H5 Z"/><path d="M9.8 18.5 A2.3 2.3 0 0 0 14.2 18.5"/>',
  "alert-triangle":
    '<path d="M12 4 C12.7 4 13.4 4.4 13.8 5.1 L21.4 18 C22.1 19.3 21.2 21 19.7 21 H4.3 C2.8 21 1.9 19.3 2.6 18 L10.2 5.1 C10.6 4.4 11.3 4 12 4 Z"/><path d="M12 9.5 V14"/><path d="M12 17 V17.1"/>',
  "check-circle":
    '<circle cx="12" cy="12" r="8.5"/><path d="M8.4 12.2 L10.9 14.7 L15.6 9.6"/>',
  "x-circle":
    '<circle cx="12" cy="12" r="8.5"/><path d="M9.2 9.2 L14.8 14.8"/><path d="M14.8 9.2 L9.2 14.8"/>',

  /* ---- Importação / Curadoria / Comércio ---- */
  package:
    '<path d="M12 3.3 L19.8 7.4 V16.6 L12 20.7 L4.2 16.6 V7.4 Z"/><path d="M4.2 7.4 L12 11.5 L19.8 7.4"/><path d="M12 11.5 V20.7"/><path d="M8.1 5.35 L15.9 9.45"/>',
  truck:
    '<rect x="2.6" y="7" width="11" height="9" rx="1.6"/><path d="M13.6 10 H17.3 L21 13.2 V16 H13.6 Z"/><circle cx="7" cy="18" r="1.9"/><circle cx="17.4" cy="18" r="1.9"/>',
  anchor:
    '<circle cx="12" cy="5.4" r="2"/><path d="M12 7.4 V20"/><path d="M7.5 11 H16.5"/><path d="M4.5 13 C4.5 17.1 7.9 20 12 20 C16.1 20 19.5 17.1 19.5 13"/><path d="M4.5 13 H7"/><path d="M19.5 13 H17"/>',
  globe:
    '<circle cx="12" cy="12" r="8.2"/><path d="M3.8 12 H20.2"/><path d="M12 3.8 C15.2 7 15.2 17 12 20.2 C8.8 17 8.8 7 12 3.8 Z"/>',
  tag:
    '<path d="M4 11.6 V5.5 C4 4.7 4.7 4 5.5 4 H11.6 C12 4 12.4 4.16 12.7 4.44 L20 11.8 C20.6 12.4 20.6 13.4 20 14 L14 20 C13.4 20.6 12.4 20.6 11.8 20 L4.44 12.7 C4.16 12.4 4 12 4 11.6 Z"/><circle cx="8.2" cy="8.2" r="1.5"/>',
  search:
    '<circle cx="11" cy="11" r="6.6"/><path d="M15.8 15.8 L20.2 20.2"/>',
  star:
    '<path d="M12 3.6 C12.3 3.6 12.6 3.78 12.75 4.08 L14.85 8.4 L19.6 9.1 C20.3 9.2 20.6 10.05 20.1 10.55 L16.65 13.95 L17.5 18.7 C17.6 19.4 16.9 19.9 16.3 19.55 L12 17.3 L7.7 19.55 C7.1 19.9 6.4 19.4 6.5 18.7 L7.35 13.95 L3.9 10.55 C3.4 10.05 3.7 9.2 4.4 9.1 L9.15 8.4 L11.25 4.08 C11.4 3.78 11.7 3.6 12 3.6 Z"/>',
  seal:
    '<circle cx="12" cy="10.5" r="6.5"/><path d="M9.2 10.7 L11.2 12.7 L14.8 8.9"/><path d="M8.6 16 L7.4 21 L12 18.7 L16.6 21 L15.4 16"/>',
  bookmark:
    '<path d="M6 5.6 C6 4.7 6.7 4 7.6 4 H16.4 C17.3 4 18 4.7 18 5.6 V20.5 L12 16.4 L6 20.5 Z"/>',

  /* ---- UI essentials ---- */
  home:
    '<path d="M4 11.2 L11.3 4.4 C11.7 4.05 12.3 4.05 12.7 4.4 L20 11.2"/><path d="M6 9.6 V19 C6 19.6 6.4 20 7 20 H17 C17.6 20 18 19.6 18 19 V9.6"/><path d="M10 20 V14.5 C10 14.2 10.2 14 10.5 14 H13.5 C13.8 14 14 14.2 14 14.5 V20"/>',
  grid:
    '<rect x="4" y="4" width="7" height="7" rx="1.8"/><rect x="13" y="4" width="7" height="7" rx="1.8"/><rect x="4" y="13" width="7" height="7" rx="1.8"/><rect x="13" y="13" width="7" height="7" rx="1.8"/>',
  user:
    '<circle cx="12" cy="8.4" r="3.8"/><path d="M5.2 19.4 C5.2 16 8.2 14 12 14 C15.8 14 18.8 16 18.8 19.4"/>',
  users:
    '<circle cx="9" cy="8.6" r="3.4"/><path d="M3.5 19 C3.5 15.9 6 14.2 9 14.2 C12 14.2 14.5 15.9 14.5 19"/><path d="M15.5 5.6 A3.4 3.4 0 0 1 15.5 11.6"/><path d="M17 14.4 C19.2 14.9 20.5 16.6 20.5 19"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="M12 3 V5.6"/><path d="M12 18.4 V21"/><path d="M3 12 H5.6"/><path d="M18.4 12 H21"/><path d="M5.65 5.65 L7.5 7.5"/><path d="M16.5 16.5 L18.35 18.35"/><path d="M18.35 5.65 L16.5 7.5"/><path d="M7.5 16.5 L5.65 18.35"/>',
  sliders:
    '<path d="M4 7 H13"/><circle cx="16" cy="7" r="2.1"/><path d="M19 7 H20"/><path d="M4 17 H8"/><circle cx="11" cy="17" r="2.1"/><path d="M14 17 H20"/>',
  filter:
    '<path d="M4 6 C4 5.4 4.4 5 5 5 H19 C19.6 5 20 5.4 20 6 L14 12.6 V18.4 C14 18.8 13.6 19.1 13.2 18.9 L10.4 17.6 C10.15 17.5 10 17.25 10 17 V12.6 Z"/>',
  "chevron-right": '<path d="M9 5 L15.5 11.3 C15.9 11.7 15.9 12.3 15.5 12.7 L9 19"/>',
  "chevron-down": '<path d="M5 9 L11.3 15.5 C11.7 15.9 12.3 15.9 12.7 15.5 L19 9"/>',
  "arrow-right":
    '<path d="M3.5 12 H20"/><path d="M13.5 6 L19.5 11.4 C19.85 11.7 19.85 12.3 19.5 12.6 L13.5 18"/>',
  "arrow-up-right": '<path d="M7 17 L17 7"/><path d="M9 6.6 H16.4 C16.7 6.6 17 6.9 17 7.2 V14.6"/>',
  plus: '<path d="M12 4.5 V19.5"/><path d="M4.5 12 H19.5"/>',
  minus: '<path d="M4.5 12 H19.5"/>',
  check: '<path d="M4.8 12.6 L9.8 17.6 L19.2 7.4"/>',
  close: '<path d="M6.2 6.2 L17.8 17.8"/><path d="M17.8 6.2 L6.2 17.8"/>',
  menu: '<path d="M4 7 H20"/><path d="M4 12 H20"/><path d="M4 17 H20"/>',
  more:
    '<circle cx="12" cy="5.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="18.5" r="1.4" fill="currentColor" stroke="none"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11 V16"/><path d="M12 7.7 V7.8"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7 V12 L15.6 14"/>',
  calendar:
    '<rect x="4" y="5.5" width="16" height="15" rx="2.6"/><path d="M4 10 H20"/><path d="M8 3.5 V7"/><path d="M16 3.5 V7"/>',
  mail:
    '<rect x="3" y="5.5" width="18" height="13" rx="2.6"/><path d="M4 7.5 L11.1 12.4 C11.65 12.78 12.35 12.78 12.9 12.4 L20 7.5"/>',
  "map-pin":
    '<path d="M12 20.8 C12 20.8 18.5 15.4 18.5 10.4 A6.5 6.5 0 0 0 5.5 10.4 C5.5 15.4 12 20.8 12 20.8 Z"/><circle cx="12" cy="10.5" r="2.4"/>',
  download:
    '<path d="M12 4 V15.2"/><path d="M7 10.6 L11.4 15 C11.7 15.3 12.3 15.3 12.6 15 L17 10.6"/><path d="M5 19.5 H19"/>',
  upload:
    '<path d="M12 15.2 V4"/><path d="M7 8.4 L11.4 4 C11.7 3.7 12.3 3.7 12.6 4 L17 8.4"/><path d="M5 19.5 H19"/>',
  refresh:
    '<path d="M20.5 12 A8.5 8.5 0 1 1 17.8 5.8"/><path d="M18 3 V6.6 C18 6.9 17.8 7.1 17.5 7.1 H13.9"/>',
  trash:
    '<path d="M5 7 H19"/><path d="M9 7 V5.5 C9 4.7 9.7 4 10.5 4 H13.5 C14.3 4 15 4.7 15 5.5 V7"/><path d="M6.6 7 L7.4 18.9 C7.45 19.5 7.95 20 8.55 20 H15.45 C16.05 20 16.55 19.5 16.6 18.9 L17.4 7"/><path d="M10 11 V16"/><path d="M14 11 V16"/>',
  edit:
    '<path d="M15.8 4.7 C16.4 4.1 17.3 4.1 17.9 4.7 L19.3 6.1 C19.9 6.7 19.9 7.6 19.3 8.2 L8.5 19 L4.5 20 L5.5 16 Z"/><path d="M14.5 6 L18 9.5"/>',
  heart:
    '<path d="M12 20 C12 20 4 15 4 9.4 C4 6.7 6 5 8.4 5 C10 5 11.4 5.9 12 7.2 C12.6 5.9 14 5 15.6 5 C18 5 20 6.7 20 9.4 C20 15 12 20 12 20 Z"/>',
  link:
    '<path d="M9.5 14.5 L14.5 9.5"/><path d="M10.5 7 L12.5 5 A3.7 3.7 0 0 1 18 10 L16 12"/><path d="M13.5 17 L11.5 19 A3.7 3.7 0 0 1 6 14 L8 12"/>',
};

const STATE_COLOR = {
  default: "var(--stroke-icon)",
  active: "var(--state-active)",
  alert: "var(--state-alert)",
  muted: "var(--text-muted)",
};

const DUO_TINT = {
  active: "var(--state-active-tint)",
  alert: "var(--state-alert-tint)",
  default: "var(--ink-06)",
  muted: "var(--ink-06)",
};

/**
 * Icon — the U.S.A Imports Brasil UI glyph.
 * Outline is primary; `duo` adds a soft accent backplate for active/alert states.
 */
export function Icon({
  name,
  size = 24,
  state = "default",
  duo = false,
  color,
  strokeWidth = 2,
  title,
  className = "",
  style = {},
  ...rest
}) {
  const inner = ICON_PATHS[name];
  const stroke = color || STATE_COLOR[state] || STATE_COLOR.default;

  if (!inner) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={className}
        style={style}
        aria-hidden={title ? undefined : "true"}
        {...rest}
      >
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="var(--ink-40)" strokeWidth={strokeWidth} strokeDasharray="2 3" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={`ubi-icon${className ? " " + className : ""}`}
      style={{ display: "inline-block", flex: "none", verticalAlign: "middle", ...style }}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {duo ? (
        <rect
          x="2.5"
          y="2.5"
          width="19"
          height="19"
          rx="6"
          fill={DUO_TINT[state] || DUO_TINT.default}
          stroke="none"
        />
      ) : null}
      <g
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        dangerouslySetInnerHTML={{ __html: inner }}
      />
    </svg>
  );
}

export const ICON_NAMES = Object.keys(ICON_PATHS);
