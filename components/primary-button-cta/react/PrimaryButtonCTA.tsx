import "../styles.css";
import type { ReactNode, MouseEventHandler } from "react";

const BUILTIN_ICONS: Record<string, ReactNode> = {
  "arrow-right": (
    <svg className="pbc__icon" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),
  "chevron-right": (
    <svg className="pbc__icon" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),
};

export type PrimaryButtonCTAProps = {
  /** Button text */
  label: string;
  /** If set, renders an anchor; otherwise renders a button */
  href?: string;
  /** Visual treatment */
  variant?: "solid" | "outlined";
  /** Corner radius style */
  shape?: "rounded" | "pill" | "sharp";
  /** Built-in icon name or custom node */
  icon?: "arrow-right" | "chevron-right" | ReactNode;
  /** Click handler (button mode only) */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Button type (button mode only) */
  type?: "button" | "submit";
  /** Extra class name */
  className?: string;
};

export function PrimaryButtonCTA({
  label,
  href,
  variant = "solid",
  shape = "rounded",
  icon,
  onClick,
  type = "button",
  className,
}: PrimaryButtonCTAProps) {
  const classNames = [
    "pbc",
    `pbc--${variant}`,
    `pbc--${shape}`,
    icon ? "pbc--with-icon" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const iconNode =
    typeof icon === "string" ? BUILTIN_ICONS[icon] : icon;

  const content = (
    <>
      {label}
      {iconNode}
    </>
  );

  if (href) {
    return (
      <a className={classNames} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button className={classNames} type={type} onClick={onClick}>
      {content}
    </button>
  );
}
