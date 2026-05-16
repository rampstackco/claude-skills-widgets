import "./../styles.css";

export type NavItem = {
  /** Display label for the nav item */
  label: string;
  /** Whether this item is the currently active page */
  active?: boolean;
};

export type KPI = {
  /** Short metric name shown above the value */
  label: string;
  /** Formatted metric value, e.g. "47.3%" or "4.2d" */
  value: string;
  /** Formatted delta string, e.g. "+3.2" or "-0.8" */
  delta: string;
};

export type FunnelStep = {
  /** Stage name shown in the label column */
  stage: string;
  /** Bar fill width as a percentage (0 to 100) */
  value: number;
  /** Formatted count label, e.g. "1,847" */
  count: string;
};

export type CohortRow = {
  /** Cohort period label, e.g. "Q1 2026" */
  label: string;
  /** Activation rate as a decimal (e.g. 47.3 for 47.3%); used for bar width relative to maxCohortValue */
  value: number;
  /** "up" renders positive color; "flat" renders muted color */
  trend: "up" | "flat";
};

export type HeroProductMockupProps = {
  /** Text shown in the browser URL bar */
  url?: string;
  /** Brand name shown in the sidebar below the mark */
  brandName?: string;
  /** Sidebar navigation items */
  navItems?: NavItem[];
  /** Page header eyebrow label */
  eyebrow?: string;
  /** Page header title */
  title?: string;
  /** Small badge beside the title, e.g. a date range */
  badge?: string;
  /** KPI tiles (exactly 3 recommended for the 3-column grid) */
  kpis?: KPI[];
  /** Label for the funnel section heading */
  funnelLabel?: string;
  /** Funnel bar chart steps */
  funnelSteps?: FunnelStep[];
  /** Label for the cohorts section heading */
  cohortsLabel?: string;
  /** Recent cohort rows */
  cohorts?: CohortRow[];
  /**
   * Denominator used to scale cohort bar widths as a percentage.
   * The cohort with this value will render a 100% wide bar.
   * Defaults to 50.
   */
  maxCohortValue?: number;
  /** Accessible label for the root element (role="img") */
  ariaLabel?: string;
  /** Optional extra class name applied to the root element */
  className?: string;
};

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Activation", active: true },
  { label: "Funnels" },
  { label: "Cohorts" },
  { label: "Events" },
  { label: "Settings" },
];

const DEFAULT_KPIS: KPI[] = [
  { label: "Activation", value: "47.3%", delta: "+3.2" },
  { label: "TTFV", value: "4.2d", delta: "-0.8" },
  { label: "Trial-to-paid", value: "63%", delta: "+1.1" },
];

const DEFAULT_FUNNEL_STEPS: FunnelStep[] = [
  { stage: "Sign-up", value: 100, count: "1,847" },
  { stage: "Verified email", value: 68, count: "1,256" },
  { stage: "First action", value: 53, count: "979" },
  { stage: "Activated", value: 47, count: "868" },
  { stage: "Day-7 retained", value: 42, count: "776" },
];

const DEFAULT_COHORTS: CohortRow[] = [
  { label: "Q1 2026", value: 47.3, trend: "up" },
  { label: "Q4 2025", value: 44.1, trend: "up" },
  { label: "Q3 2025", value: 41.8, trend: "flat" },
];

export function HeroProductMockup({
  url = "app.example.com/activation",
  brandName = "northwind",
  navItems = DEFAULT_NAV_ITEMS,
  eyebrow = "Dashboard",
  title = "Activation",
  badge = "Q1 2026",
  kpis = DEFAULT_KPIS,
  funnelLabel = "Activation funnel",
  funnelSteps = DEFAULT_FUNNEL_STEPS,
  cohortsLabel = "Recent cohorts",
  cohorts = DEFAULT_COHORTS,
  maxCohortValue = 50,
  ariaLabel = "Decorative product dashboard mockup showing activation metrics, a funnel chart, and recent cohorts",
  className,
}: HeroProductMockupProps) {
  const rootClass = className ? `hpm ${className}` : "hpm";

  return (
    <div className={rootClass} role="img" aria-label={ariaLabel}>
      <div className="hpm__frame">
        {/* Browser chrome */}
        <div className="hpm__chrome">
          <span className="hpm__dot" aria-hidden="true" />
          <span className="hpm__dot" aria-hidden="true" />
          <span className="hpm__dot" aria-hidden="true" />
          <div className="hpm__url">{url}</div>
        </div>

        {/* App body */}
        <div className="hpm__body">
          {/* Sidebar */}
          <aside className="hpm__sidebar">
            <div className="hpm__brand">
              {/* Inline SVG brand mark: vertical line + circle */}
              <svg
                className="hpm__brand-mark"
                width="10"
                height="14"
                viewBox="0 0 16 20"
                fill="none"
                aria-hidden="true"
              >
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="13"
                  stroke="var(--hpm-accent, #5b8b85)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="16" r="3" fill="var(--hpm-accent, #5b8b85)" />
              </svg>
              <span>{brandName}</span>
            </div>

            <ul className="hpm__nav" aria-label="Mockup sidebar navigation">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={
                    item.active
                      ? "hpm__nav-item hpm__nav-item--active"
                      : "hpm__nav-item"
                  }
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main panel */}
          <div className="hpm__main">
            {/* Page header */}
            <div className="hpm__header">
              <div className="hpm__header-left">
                <p className="hpm__eyebrow">{eyebrow}</p>
                <h3 className="hpm__page-title">{title}</h3>
              </div>
              <span className="hpm__badge">{badge}</span>
            </div>

            {/* KPI tiles */}
            <div className="hpm__kpis">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="hpm__kpi">
                  <p className="hpm__kpi-label">{kpi.label}</p>
                  <p className="hpm__kpi-value">{kpi.value}</p>
                  <p className="hpm__kpi-delta">{kpi.delta}</p>
                </div>
              ))}
            </div>

            {/* Funnel bar chart */}
            <div className="hpm__section">
              <p className="hpm__section-label">{funnelLabel}</p>
              <div className="hpm__funnel">
                {funnelSteps.map((step) => (
                  <div key={step.stage} className="hpm__funnel-row">
                    <span className="hpm__funnel-stage">{step.stage}</span>
                    <div className="hpm__funnel-track">
                      <div
                        className="hpm__funnel-bar"
                        style={{ width: `${step.value}%` }}
                      />
                    </div>
                    <span className="hpm__funnel-value">{step.value}%</span>
                    <span className="hpm__funnel-count">{step.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cohort list */}
            <div className="hpm__section">
              <div className="hpm__cohorts-header">
                <p className="hpm__section-label">{cohortsLabel}</p>
                <span className="hpm__cohorts-link" aria-hidden="true">
                  view all
                </span>
              </div>
              <div className="hpm__cohorts">
                {cohorts.map((row, index) => (
                  <div
                    key={row.label}
                    className={
                      index === 0
                        ? "hpm__cohort-row hpm__cohort-row--lead"
                        : "hpm__cohort-row"
                    }
                  >
                    <span className="hpm__cohort-label">{row.label}</span>
                    <div className="hpm__cohort-track">
                      <div
                        className="hpm__cohort-bar"
                        style={{
                          width: `${Math.min(100, (row.value / maxCohortValue) * 100)}%`,
                        }}
                      />
                    </div>
                    <span
                      className={
                        row.trend === "up"
                          ? "hpm__cohort-value hpm__cohort-value--up"
                          : "hpm__cohort-value hpm__cohort-value--flat"
                      }
                    >
                      {row.value.toFixed(1)}%
                    </span>
                    <span
                      className={
                        row.trend === "up"
                          ? "hpm__cohort-trend hpm__cohort-trend--up"
                          : "hpm__cohort-trend hpm__cohort-trend--flat"
                      }
                      aria-hidden="true"
                    >
                      {row.trend === "up" ? (
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <polygon points="4,1 7,7 1,7" />
                        </svg>
                      ) : (
                        <span>.</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
