import * as React from "react";
import { IconName } from "../icons/Icon";

/**
 * @startingPoint section="Core" subtitle="All-caps status pill, 3 tones" viewport="700x90"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Status tone. `active` → Electric Blue, `alert` → Power Red. @default "neutral" */
  tone?: "neutral" | "active" | "alert";
  /** Optional leading glyph. */
  icon?: IconName;
  children?: React.ReactNode;
}

/**
 * Badge — compact all-caps status pill. Outline-on-tint; accent tones are surgical, for state only.
 */
export declare function Badge(props: BadgeProps): React.JSX.Element;
