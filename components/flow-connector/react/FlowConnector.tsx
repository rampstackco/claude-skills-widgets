import "./../styles.css";

export type FlowConnectorProps = {
  /** Controls which SVG variant to render */
  orientation?: "horizontal" | "vertical";
  /** Optional extra class name appended to the root element */
  className?: string;
};

export function FlowConnector({
  orientation = "horizontal",
  className,
}: FlowConnectorProps) {
  const modifier = orientation === "vertical" ? "fc--vertical" : "fc--horizontal";
  const rootClassName = ["fc", modifier, className].filter(Boolean).join(" ");

  if (orientation === "vertical") {
    return (
      <div className={rootClassName} aria-hidden="true">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
          <line
            x1="10" y1="4" x2="10" y2="22"
            stroke="var(--fc-line-color)"
            strokeWidth="var(--fc-stroke-width)"
            strokeDasharray="2 3"
          />
          <circle cx="10" cy="4" r="2" fill="var(--fc-accent-color)" />
          <path
            d="M 6 22 L 10 28 L 14 22"
            stroke="var(--fc-accent-color)"
            strokeWidth="var(--fc-stroke-width)"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={rootClassName} aria-hidden="true">
      <svg width="48" height="20" viewBox="0 0 48 20" fill="none">
        <line
          x1="4" y1="10" x2="38" y2="10"
          stroke="var(--fc-line-color)"
          strokeWidth="var(--fc-stroke-width)"
          strokeDasharray="2 3"
        />
        <circle cx="4" cy="10" r="2" fill="var(--fc-accent-color)" />
        <path
          d="M 38 6 L 44 10 L 38 14"
          stroke="var(--fc-accent-color)"
          strokeWidth="var(--fc-stroke-width)"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
