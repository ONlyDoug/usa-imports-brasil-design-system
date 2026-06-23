import * as React from "react";
import { IconName } from "../icons/Icon";

/**
 * @startingPoint section="Core" subtitle="All-caps action button, 4 variants" viewport="700x120"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  /** Visual weight. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Icon glyph before the label. */
  leadingIcon?: IconName;
  /** Icon glyph after the label. */
  trailingIcon?: IconName;
  /** Full-width. @default false */
  block?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Button — Next Sphere all-caps action. Primary uses Electric Blue (active),
 * danger uses Power Red (alert); secondary/ghost stay neutral off-white on navy.
 */
export declare function Button(props: ButtonProps): React.JSX.Element;
