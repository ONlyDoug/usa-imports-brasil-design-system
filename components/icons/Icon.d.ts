import * as React from "react";

export type IconState = "default" | "active" | "alert" | "muted";

export type IconName =
  | "shield" | "shield-check" | "shield-alert"
  | "eye" | "eye-off" | "scope" | "scan"
  | "lock" | "unlock" | "fingerprint" | "key" | "pulse" | "bell"
  | "alert-triangle" | "check-circle" | "x-circle"
  | "package" | "truck" | "anchor" | "globe" | "tag" | "search" | "star" | "seal" | "bookmark"
  | "home" | "grid" | "user" | "users" | "settings" | "sliders" | "filter"
  | "chevron-right" | "chevron-down" | "arrow-right" | "arrow-up-right"
  | "plus" | "minus" | "check" | "close" | "menu" | "more"
  | "info" | "clock" | "calendar" | "mail" | "map-pin"
  | "download" | "upload" | "refresh" | "trash" | "edit" | "heart" | "link";

/**
 * @startingPoint section="Icons" subtitle="Outline UI glyph set on a 24px grid" viewport="700x320"
 */
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name" | "color"> {
  /** Glyph name from the U.S.A Imports Brasil icon set. */
  name: IconName;
  /** Pixel size (square). Canonical sizes: 16, 20, 24, 32, 40. @default 24 */
  size?: number;
  /** State accent. `active` → Electric Blue, `alert` → Power Red. @default "default" */
  state?: IconState;
  /** Adds a soft accent backplate behind the glyph — use for active/alert states only. @default false */
  duo?: boolean;
  /** Explicit stroke color override (use sparingly — prefer `state`). */
  color?: string;
  /** Stroke weight. Keep 2 at 24px. @default 2 */
  strokeWidth?: number;
  /** Accessible label. Omit for decorative icons (renders aria-hidden). */
  title?: string;
}

/**
 * Icon — the U.S.A Imports Brasil UI glyph vocabulary.
 * Outline-first (2px off-white stroke, round cap/join), Bouba-dominant geometry on a 24px grid.
 * The eagle head is the brand mark, never a UI icon — this set is a separate vocabulary.
 */
export declare function Icon(props: IconProps): React.JSX.Element;

export declare const ICON_NAMES: IconName[];
export declare const ICON_PATHS: Record<IconName, string>;
