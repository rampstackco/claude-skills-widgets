import "../styles.css";
import type { ReactNode } from "react";

const BUILTIN_ICONS: Record<string, ReactNode> = {
  "arrow-right": (
    <svg className="stc__icon" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),
  "chevron-right": (
    <svg className="stc__icon" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),
  external: (
    <svg className="stc__icon" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3M9 2h5v5M8 8l6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export type SecondaryTextCTAProps = {
  /** Link text */
  label: string;
  /** Anchor destination; always renders an anchor element */
  href: string;
  /** Built-in icon name, custom ReactNode, or "none" to suppress the icon */
  icon?: "arrow-right" | "chevron-right" | "external" | ReactNode | "none";
  /** Font and gap scale */
  size?: "default" | "small";
  /** Extra class name for the root element */
  className?: string;
};

export function SecondaryTextCTA({
  label,
  href,
  icon = "arrow-right",
  size = "default",
  className,
}: SecondaryTextCTAProps) {
  const classNames = [
    "stc",
    size === "small" ? "stc--small" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  let iconNode: ReactNode = null;
  if (icon === "none") {
    iconNode = null;
  } else if (typeof icon === "string") {
    iconNode = BUILTIN_ICONS[icon] ?? null;
  } else {
    iconNode = icon;
  }

  return (
    <a className={classNames} href={href}>
      {label}
      {iconNode}
    </a>
  );
}
