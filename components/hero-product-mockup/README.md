# HeroProductMockup

**Implements pattern**: Utility component (no pattern mapping)
**Category**: Utility
**Stability**: v2.0 (initial)

## What it is

A self-contained decorative illustration of a SaaS product dashboard. It renders a browser-chrome frame containing a URL bar, a left sidebar with a brand mark and nav items, and a main panel with a page header, three KPI tiles, an activation funnel bar chart, and a recent-cohorts list. All data is prop-driven with sensible generic defaults, so the component renders correctly with zero configuration. Its primary use is as filler product imagery inside marketing heroes, feature-highlight sections, or onboarding flows where showing a realistic-looking product dashboard increases context without requiring real screenshots.

## React usage

```tsx
import { HeroProductMockup } from "claude-skills-widgets/hero-product-mockup";

// Zero-config: renders the generic northwind dashboard
<HeroProductMockup />

// With custom brand and data
<HeroProductMockup
  url="app.meridian.io/retention"
  brandName="meridian"
  eyebrow="Analytics"
  title="Retention"
  badge="H1 2026"
  kpis={[
    { label: "D30 Retention", value: "38.7%", delta: "+2.4" },
    { label: "Median session", value: "6.1m", delta: "+0.9" },
    { label: "Expansion MRR", value: "21%", delta: "+0.6" },
  ]}
  funnelSteps={[
    { stage: "Day 1", value: 100, count: "2,310" },
    { stage: "Day 7", value: 58, count: "1,340" },
    { stage: "Day 30", value: 39, count: "901" },
  ]}
  cohorts={[
    { label: "May 2026", value: 38.7, trend: "up" },
    { label: "Apr 2026", value: 36.2, trend: "up" },
    { label: "Mar 2026", value: 35.8, trend: "flat" },
  ]}
  maxCohortValue={45}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/hero-product-mockup/styles.css">

<div class="hpm" role="img" aria-label="Decorative product dashboard mockup">
  <div class="hpm__frame">

    <!-- Browser chrome -->
    <div class="hpm__chrome">
      <span class="hpm__dot" aria-hidden="true"></span>
      <span class="hpm__dot" aria-hidden="true"></span>
      <span class="hpm__dot" aria-hidden="true"></span>
      <div class="hpm__url">app.example.com/activation</div>
    </div>

    <!-- App body -->
    <div class="hpm__body">

      <!-- Sidebar -->
      <aside class="hpm__sidebar">
        <div class="hpm__brand">
          <svg class="hpm__brand-mark" width="10" height="14" viewBox="0 0 16 20" fill="none" aria-hidden="true">
            <line x1="8" y1="2" x2="8" y2="13" stroke="var(--hpm-accent, #5b8b85)" stroke-width="2" stroke-linecap="round" />
            <circle cx="8" cy="16" r="3" fill="var(--hpm-accent, #5b8b85)" />
          </svg>
          <span>northwind</span>
        </div>
        <ul class="hpm__nav" aria-label="Mockup sidebar navigation">
          <li class="hpm__nav-item hpm__nav-item--active">Activation</li>
          <li class="hpm__nav-item">Funnels</li>
          <li class="hpm__nav-item">Cohorts</li>
          <li class="hpm__nav-item">Events</li>
          <li class="hpm__nav-item">Settings</li>
        </ul>
      </aside>

      <!-- Main panel -->
      <div class="hpm__main">

        <!-- Page header -->
        <div class="hpm__header">
          <div class="hpm__header-left">
            <p class="hpm__eyebrow">Dashboard</p>
            <h3 class="hpm__page-title">Activation</h3>
          </div>
          <span class="hpm__badge">Q1 2026</span>
        </div>

        <!-- KPI tiles -->
        <div class="hpm__kpis">
          <div class="hpm__kpi">
            <p class="hpm__kpi-label">Activation</p>
            <p class="hpm__kpi-value">47.3%</p>
            <p class="hpm__kpi-delta">+3.2</p>
          </div>
          <!-- repeat for each KPI -->
        </div>

        <!-- Funnel chart -->
        <div class="hpm__section">
          <p class="hpm__section-label">Activation funnel</p>
          <div class="hpm__funnel">
            <div class="hpm__funnel-row">
              <span class="hpm__funnel-stage">Sign-up</span>
              <div class="hpm__funnel-track">
                <div class="hpm__funnel-bar" style="width: 100%;"></div>
              </div>
              <span class="hpm__funnel-value">100%</span>
              <span class="hpm__funnel-count">1,847</span>
            </div>
            <!-- repeat for each funnel step -->
          </div>
        </div>

        <!-- Cohort list -->
        <div class="hpm__section">
          <div class="hpm__cohorts-header">
            <p class="hpm__section-label">Recent cohorts</p>
            <span class="hpm__cohorts-link" aria-hidden="true">view all</span>
          </div>
          <div class="hpm__cohorts">
            <div class="hpm__cohort-row hpm__cohort-row--lead">
              <span class="hpm__cohort-label">Q1 2026</span>
              <div class="hpm__cohort-track">
                <div class="hpm__cohort-bar" style="width: 94.6%;"></div>
              </div>
              <span class="hpm__cohort-value hpm__cohort-value--up">47.3%</span>
              <span class="hpm__cohort-trend hpm__cohort-trend--up" aria-hidden="true">...</span>
            </div>
            <!-- repeat for each cohort row -->
          </div>
        </div>

      </div><!-- /.hpm__main -->
    </div><!-- /.hpm__body -->
  </div><!-- /.hpm__frame -->
</div><!-- /.hpm -->
```

Note: funnel bar widths and cohort bar widths are data-driven and must be set as inline `style="width: X%;"` on `.hpm__funnel-bar` and `.hpm__cohort-bar` respectively. For cohort bars, compute `(value / maxCohortValue) * 100` and clamp to 100.

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| url | string | `"app.example.com/activation"` | Text displayed in the browser URL bar |
| brandName | string | `"northwind"` | Brand name rendered beside the sidebar mark |
| navItems | NavItem[] | 5-item default list | Sidebar navigation items |
| eyebrow | string | `"Dashboard"` | Small uppercase label above the page title |
| title | string | `"Activation"` | Page heading in the main panel |
| badge | string | `"Q1 2026"` | Small monospace badge shown beside the title |
| kpis | KPI[] | 3 generic KPI tiles | Metric tiles rendered in the 3-column KPI grid |
| funnelLabel | string | `"Activation funnel"` | Section heading above the funnel chart |
| funnelSteps | FunnelStep[] | 5-step default funnel | Rows in the funnel bar chart |
| cohortsLabel | string | `"Recent cohorts"` | Section heading above the cohort list |
| cohorts | CohortRow[] | 3-row default cohort list | Rows in the cohort comparison list |
| maxCohortValue | number | `50` | The value that maps to a 100% wide cohort bar; scale this to match your data range |
| ariaLabel | string | Generic description string | Accessible label for the root `role="img"` element |
| className | string | undefined | Optional extra class applied to the root `.hpm` element |

### Type definitions

```typescript
type NavItem = {
  label: string;
  active?: boolean;
};

type KPI = {
  label: string;   // metric name shown above the value
  value: string;   // formatted value, e.g. "47.3%" or "4.2d"
  delta: string;   // formatted delta, e.g. "+3.2" or "-0.8"
};

type FunnelStep = {
  stage: string;   // label shown in the left column
  value: number;   // bar fill width as a percentage (0 to 100)
  count: string;   // formatted count label, e.g. "1,847"
};

type CohortRow = {
  label: string;              // cohort period label, e.g. "Q1 2026"
  value: number;              // rate as a decimal, e.g. 47.3 for 47.3%
  trend: "up" | "flat";      // controls color and trend indicator
};
```

## Customization (CSS variables)

Every color, font stack, and structural value is a CSS custom property on `.hpm`. Override them in your own stylesheet without touching the component source.

```css
.hpm {
  /* Font stacks */
  --hpm-serif-font: var(--brand-serif, Georgia, "Times New Roman", serif);
  --hpm-sans-font: var(--brand-sans, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif);
  --hpm-mono-font: var(--brand-mono, ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, monospace);

  /* Surfaces */
  --hpm-surface: var(--brand-surface, #faf9f6);
  --hpm-surface-main: var(--brand-surface-main, #ffffff);
  --hpm-border: var(--brand-border, #edeff2);

  /* Ink scale */
  --hpm-ink: var(--brand-ink, #0f1b2d);
  --hpm-ink-secondary: var(--brand-ink-secondary, #1f2d44);
  --hpm-muted: var(--brand-muted, #4a5568);

  /* Accent (bar fills, brand mark, eyebrow) */
  --hpm-accent: var(--brand-accent, #5b8b85);

  /* KPI value highlight */
  --hpm-value: var(--brand-value, #8e6e1a);

  /* Positive / trend-up color */
  --hpm-positive: var(--brand-positive, #3f6e55);

  /* Browser chrome traffic-light dots */
  --hpm-dot: var(--brand-dot, #c7ccd4);

  /* Frame drop shadow */
  --hpm-frame-shadow: 0 24px 48px -16px rgba(15,27,45,.18), ...;

  /* Layout */
  --hpm-sidebar-width: 120px;
  --hpm-body-min-height: 440px;
}
```

Example: adapt the component to a dark brand system:

```css
.hpm {
  --hpm-surface: #1a1f2e;
  --hpm-surface-main: #232838;
  --hpm-border: #2e3347;
  --hpm-ink: #e8ecf2;
  --hpm-ink-secondary: #c4cdd8;
  --hpm-muted: #7a8499;
  --hpm-accent: #4ea8a0;
  --hpm-value: #c9973e;
  --hpm-positive: #5aaa7a;
  --hpm-dot: #3d4459;
}
```

## Accessibility

- The root element carries `role="img"` and `aria-label` describing the mockup as a decorative illustration. Screen readers announce it as a single image and skip all internal structure, which is the correct behavior for decorative UI art.
- All purely decorative internal elements (the chrome dots, the brand mark SVG, the trend indicator SVGs, and the "view all" link) carry `aria-hidden="true"` so they do not pollute the accessible tree.
- The sidebar `<ul>` carries `aria-label="Mockup sidebar navigation"` to clarify its role in the rare case a user inspects the DOM rather than the announced label.
- Because the entire component is treated as a single `role="img"`, there is no interactive content; no keyboard traps or tab stops are present.
- Use a descriptive `ariaLabel` prop (or `aria-label` attribute in HTML) that reflects your specific content, for example: "Product dashboard showing 47.3% activation rate for Q1 2026".

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Relies on CSS Grid, CSS custom properties, Flexbox, and inline SVG. No IE support.

## Migration history

- v2.0: initial migration from rampstackco-app. The source component (in the Threshold reference build) was a hardcoded Next.js default export using framework font imports and Tailwind utility classes. The migration drops all Next.js and Tailwind dependencies, generalizes every hardcoded value to a prop with a generic default, exposes all colors and fonts as CSS custom properties, and produces both a typed React component and a framework-free HTML implementation sharing a single styles.css.
