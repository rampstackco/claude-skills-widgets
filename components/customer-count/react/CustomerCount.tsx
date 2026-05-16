import "../styles.css";

export type CustomerCountGrowth = {
  /** The growth value string, e.g. "+2M this month" */
  value: string;
  /** Direction of movement: "up" renders an upward triangle, "down" renders a downward triangle */
  direction: "up" | "down";
};

export type CustomerCountProps = {
  /**
   * The displayed figure. Strings are used verbatim, supporting pre-formatted
   * values like "70 million" or "10K+". Numbers are auto-formatted with locale
   * thousands separators via Intl.NumberFormat.
   */
  count: string | number;
  /** Short context label displayed below the count */
  label: string;
  /** Optional supporting text displayed below the label */
  subtitle?: string;
  /** Optional growth indicator rendered as an inline triangle glyph plus value string */
  growth?: CustomerCountGrowth;
  /** Horizontal alignment of all content within the component */
  align?: "left" | "center";
  /** Extra class name appended to the root element */
  className?: string;
};

function formatCount(count: string | number): { display: string; ariaLabel?: string } {
  if (typeof count === "string") {
    return { display: count };
  }
  const formatted = new Intl.NumberFormat().format(count);
  return { display: formatted, ariaLabel: String(count) };
}

function TriangleUp() {
  return (
    <svg
      className="cc__growth-icon"
      viewBox="0 0 10 8"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="5,0 10,8 0,8" />
    </svg>
  );
}

function TriangleDown() {
  return (
    <svg
      className="cc__growth-icon"
      viewBox="0 0 10 8"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="0,0 10,0 5,8" />
    </svg>
  );
}

export function CustomerCount({
  count,
  label,
  subtitle,
  growth,
  align = "center",
  className,
}: CustomerCountProps) {
  const { display, ariaLabel } = formatCount(count);

  const rootClass = [
    "cc",
    `cc--${align}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const groupAriaLabel = `${display} ${label}`;

  return (
    <div
      className={rootClass}
      role="group"
      aria-label={groupAriaLabel}
    >
      <span
        className="cc__count"
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : undefined}
      >
        {display}
      </span>
      <span className="cc__label">{label}</span>
      {subtitle && (
        <span className="cc__subtitle">{subtitle}</span>
      )}
      {growth && (
        <span className={`cc__growth cc__growth--${growth.direction}`}>
          {growth.direction === "up" ? <TriangleUp /> : <TriangleDown />}
          {growth.value}
        </span>
      )}
    </div>
  );
}
