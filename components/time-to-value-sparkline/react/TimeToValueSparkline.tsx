import "./../styles.css";

const SVG_WIDTH = 240;
const SVG_HEIGHT = 60;
const SVG_PADDING = 4;

export type TimeToValueSparklineProps = {
  /** Series values in chronological order (left to right) */
  data: number[];
  /** Uppercase label rendered above the chart */
  title?: string;
  /** Left-side footer text indicating the start of the series */
  startLabel?: string;
  /**
   * Right-side footer text summarizing the change.
   * When omitted, auto-generated as the first and last values joined with "to".
   */
  summaryLabel?: string;
  /**
   * Accessible label for the root element.
   * When omitted, auto-generated from the title and data range.
   */
  ariaLabel?: string;
  /** Optional extra class name for the root element */
  className?: string;
  /** Optional inline style for CSS variable overrides on the root element */
  style?: React.CSSProperties;
};

export function TimeToValueSparkline({
  data,
  title = "Median TTFV by week",
  startLabel = "12 weeks ago",
  summaryLabel,
  ariaLabel,
  className,
  style,
}: TimeToValueSparklineProps) {
  const safeData = data.length >= 2 ? data : [0, 0];
  const max = Math.max(...safeData);
  const min = Math.min(...safeData);
  const range = max - min || 1;

  const usableWidth = SVG_WIDTH - SVG_PADDING * 2;
  const usableHeight = SVG_HEIGHT - SVG_PADDING * 2;

  const points = safeData.map((value, i) => ({
    x: SVG_PADDING + (i / (safeData.length - 1)) * usableWidth,
    y: SVG_PADDING + (1 - (value - min) / range) * usableHeight,
    value,
  }));

  const linePath = points
    .map((p, i) => (i === 0 ? `M ${p.x},${p.y}` : `L ${p.x},${p.y}`))
    .join(" ");

  const last = points[points.length - 1];
  const first = points[0];
  const areaPath = `${linePath} L ${last.x},${SVG_HEIGHT} L ${first.x},${SVG_HEIGHT} Z`;

  const resolvedSummary =
    summaryLabel ?? `${safeData[0]} to ${safeData[safeData.length - 1]}`;

  const resolvedAriaLabel =
    ariaLabel ??
    `${title} sparkline from ${safeData[0]} to ${safeData[safeData.length - 1]}`;

  const rootClassName = className ? `ttvs ${className}` : "ttvs";

  return (
    <div
      className={rootClassName}
      role="img"
      aria-label={resolvedAriaLabel}
      style={style}
    >
      <p className="ttvs__title">{title}</p>

      <svg
        className="ttvs__chart"
        width={SVG_WIDTH}
        height={SVG_HEIGHT}
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        aria-hidden="true"
      >
        <path className="ttvs__area" d={areaPath} />
        <path className="ttvs__line" d={linePath} />
        {points.map((p, i) => {
          const isEnd = i === points.length - 1;
          return (
            <circle
              key={i}
              className={isEnd ? "ttvs__point ttvs__point--end" : "ttvs__point"}
              cx={p.x}
              cy={p.y}
              r={isEnd ? 3 : 1.5}
            />
          );
        })}
      </svg>

      <div className="ttvs__footer">
        <span className="ttvs__start">{startLabel}</span>
        <span className="ttvs__summary">{resolvedSummary}</span>
      </div>
    </div>
  );
}
