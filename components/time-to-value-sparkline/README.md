# TimeToValueSparkline

**Implements pattern**: Utility component (no pattern mapping). Candidate for a future data-visualization pattern category.
**Category**: Utility
**Stability**: v2.0 (initial)

## What it is

A compact inline SVG sparkline that plots a numeric time series as a descending or ascending line chart with a soft filled area beneath it and a highlighted final data point. Pair it with a metric card, stat block, or onboarding funnel to show directional progress at a glance without a full charting dependency.

## React usage

```tsx
import { TimeToValueSparkline } from "claude-skills-widgets/time-to-value-sparkline";

<TimeToValueSparkline
  data={[6.8, 6.5, 6.2, 6.0, 5.7, 5.5, 5.2, 4.9, 4.7, 4.5, 4.4, 4.2]}
  title="Median TTFV by week"
  startLabel="12 weeks ago"
  summaryLabel="6.8d to 4.2d"
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/time-to-value-sparkline/styles.css">

<div class="ttvs" role="img" aria-label="Median time-to-first-value sparkline trending downward from 6.8 to 4.2">
  <p class="ttvs__title">Median TTFV by week</p>
  <svg class="ttvs__chart" width="240" height="60" viewBox="0 0 240 60" aria-hidden="true">
    <path class="ttvs__area" d="M 4,4 L ... L 236,60 L 4,60 Z" />
    <path class="ttvs__line" d="M 4,4 L ... L 236,56" />
    <circle class="ttvs__point" cx="4" cy="4" r="1.5" />
    <circle class="ttvs__point ttvs__point--end" cx="236" cy="56" r="3" />
  </svg>
  <div class="ttvs__footer">
    <span class="ttvs__start">12 weeks ago</span>
    <span class="ttvs__summary">6.8d to 4.2d</span>
  </div>
</div>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| data | number[] | required | Series values in chronological order (left to right) |
| title | string | "Median TTFV by week" | Uppercase label rendered above the chart |
| startLabel | string | "12 weeks ago" | Left-side footer text indicating the start of the series |
| summaryLabel | string | auto-generated | Right-side footer text. When omitted, generated as the first and last values joined with "to" (e.g. "6.8 to 4.2") |
| ariaLabel | string | auto-generated | Accessible label on the root element. When omitted, a sensible default is built from the title and data range |
| className | string | undefined | Optional extra class name for the root element |

## Customization (CSS variables)

Every customizable visual property is exposed as a CSS custom property on the component root class:

```css
.ttvs {
  --ttvs-title-color: var(--brand-muted, #4a5568);
  --ttvs-title-size: 0.625rem;
  --ttvs-title-tracking: 0.12em;
  --ttvs-line-color: var(--brand-accent, #5b8b85);
  --ttvs-line-width: 1.5px;
  --ttvs-area-color: var(--brand-accent, #5b8b85);
  --ttvs-area-opacity: 0.12;
  --ttvs-point-color: var(--brand-accent, #5b8b85);
  --ttvs-endpoint-color: var(--brand-highlight, #8e6e1a);
  --ttvs-start-color: var(--brand-muted, #4a5568);
  --ttvs-summary-color: var(--brand-positive, #3f6e55);
  --ttvs-mono-font: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, monospace;
  --ttvs-max-width: 280px;
}
```

Override these in your own stylesheet to integrate the component into your brand:

```css
:root {
  --ttvs-line-color: #2563eb;
  --ttvs-endpoint-color: #dc2626;
  --ttvs-summary-color: #16a34a;
}
```

## Accessibility

- The root `div` carries `role="img"` and a descriptive `aria-label` covering the trend direction and data range
- The inner `<svg>` is marked `aria-hidden="true"` so screen readers encounter a single, well-described image rather than raw SVG markup
- The title and footer labels are plain text outside the SVG and remain visible at all times (not tooltip-only)
- No interactive elements inside the component; no keyboard navigation required

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Relies on inline SVG, CSS custom properties, and CSS Flexbox. No IE support.

## Migration history

- v2.0: initial migration from rampstackco-app's `TimeToValueSparkline` component in the Threshold reference build. The source rendered a hardcoded 12-point data array with hardcoded colors and a Next.js font import; the migration generalizes the data series and all labels to props, replaces the framework font import with a CSS custom property font stack, and exposes all colors as CSS variables.
