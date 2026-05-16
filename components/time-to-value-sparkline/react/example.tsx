import { TimeToValueSparkline } from "./TimeToValueSparkline";

/** Default example: 12-week descending TTFV series with auto-generated summary label */
export function DefaultExample() {
  return (
    <TimeToValueSparkline
      data={[6.8, 6.5, 6.2, 6.0, 5.7, 5.5, 5.2, 4.9, 4.7, 4.5, 4.4, 4.2]}
      title="Median TTFV by week"
      startLabel="12 weeks ago"
      summaryLabel="6.8d to 4.2d"
    />
  );
}

/**
 * Customized example: a weekly activation rate series over 8 weeks
 * with different labels and a custom CSS-variable override applied inline.
 * CSS custom properties are passed through the `style` prop and override
 * the defaults declared in styles.css.
 */
export function ActivationRateExample() {
  const overrides = {
    "--ttvs-line-color": "#2563eb",
    "--ttvs-area-color": "#2563eb",
    "--ttvs-point-color": "#2563eb",
    "--ttvs-endpoint-color": "#1d4ed8",
    "--ttvs-summary-color": "#1d4ed8",
  } as React.CSSProperties;

  return (
    <TimeToValueSparkline
      data={[41, 45, 48, 52, 57, 61, 66, 71]}
      title="Activation rate % by week"
      startLabel="8 weeks ago"
      summaryLabel="41% to 71%"
      ariaLabel="Activation rate sparkline trending upward from 41 percent to 71 percent over 8 weeks"
      style={overrides}
    />
  );
}
