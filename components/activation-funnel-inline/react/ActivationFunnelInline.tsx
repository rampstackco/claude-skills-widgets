import "./../styles.css";

export type FunnelStep = {
  /** Step label text */
  label: string;
  /** Fill percentage, 0 to 100 */
  value: number;
  /** Optional drop-off count from the previous step */
  dropoff?: number;
};

export type ActivationFunnelInlineProps = {
  /** Small uppercase title rendered above the rows */
  title?: string;
  /** Ordered array of funnel steps */
  steps: FunnelStep[];
  /** Accessible label for the chart region. When omitted, a description is built from the steps array. */
  ariaLabel?: string;
  /** Optional extra class name for the root element */
  className?: string;
};

function buildAriaLabel(steps: FunnelStep[]): string {
  const summary = steps
    .map((s, i) => `step ${i + 1} ${s.label} at ${s.value}%`)
    .join(", ");
  return `Activation funnel with ${steps.length} stages: ${summary}.`;
}

export function ActivationFunnelInline({
  title = "Sample funnel",
  steps,
  ariaLabel,
  className,
}: ActivationFunnelInlineProps) {
  const rootClass = className ? `afi ${className}` : "afi";
  const label = ariaLabel ?? buildAriaLabel(steps);

  return (
    <div className={rootClass} role="img" aria-label={label}>
      <p className="afi__title">{title}</p>
      <div className="afi__rows">
        {steps.map((step, i) => (
          <div key={step.label} className="afi__row">
            <span className="afi__index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="afi__label">{step.label}</span>
            <div className="afi__track">
              <div
                className="afi__bar"
                style={{ width: `${step.value}%` }}
              />
            </div>
            <span className="afi__value">{step.value}%</span>
            {step.dropoff !== undefined && step.dropoff > 0 && (
              <span className="afi__dropoff">-{step.dropoff}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
