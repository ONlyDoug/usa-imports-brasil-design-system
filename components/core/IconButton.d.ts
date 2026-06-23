import * as React from "react";
import { IconName, IconState } from "../icons/Icon";

/**
 * @startingPoint section="Core" subtitle="Square icon-only control with glow states" viewport="700x100"
 */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  /** Glyph name. */
  icon: IconName;
  /** Accessible label (also used as tooltip). Required. */
  label: string;
  /** @default "ghost" */
  variant?: "ghost" | "outline";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Accent state for the glyph + glow ring. @default "default" */
  state?: IconState;
  /** Shortcut for state="active" (toggled on). */
  active?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/**
 * IconButton — square icon-only control. Glow ring appears when active (blue) or alert (red).
 */
export declare function IconButton(props: IconButtonProps): React.JSX.Element;
