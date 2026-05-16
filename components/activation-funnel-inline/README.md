# ActivationFunnelInline

**Implements pattern**: Utility component (no pattern mapping). Candidate for a future `funnel-visualization` pattern.
**Category**: Utility
**Stability**: v2.0 (initial)

## What it is

A compact inline funnel chart that visualizes a sequence of steps as horizontal progress bars. Each row shows a two-digit index, a step label, a proportional bar, a percentage value, and an optional drop-off count from the previous step. Suited for dashboards, onboarding health panels, and analytics sidebars where space is constrained.

## React usage

```tsx
import { ActivationFunnelInline } from "claude-skills-widgets/activation-funnel-inline";

<ActivationFunnelInline
  title="Sign-up funnel"
  steps={[
    { label: "Sign-up",      value: 100 },
    { label: "Verified",     value: 68,  dropoff: 32 },
    { label: "First action", value: 53,  dropoff: 15 },
    { label: "Activated",    value: 47,  dropoff: 6  },
  ]}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/activation-funnel-inline/styles.css">

<div class="afi" role="img" aria-label="Activation funnel with 4 stages...">
  <p class="afi__title">Sign-up funnel</p>
  <div class="afi__rows">
    <div class="afi__row">
      <span class="afi__index">01</span>
      <span class="afi__label">Sign-up</span>
      <div class="afi__track">
        <div class="afi__bar" style="width: 100%;"></div>
      </div>
      <span class="afi__value">100%</span>
    </div>
    <div class="afi__row">
      <span class="afi__index">02</span>
      <span class="afi__label">Verified</span>
      <div class="afi__track">
        <div class="afi__bar" style="width: 68%;"></div>
      </div>
      <span class="afi__value">68%</span>
      <span class="afi__dropoff">-32</span>
    </div>
  </div>
</div>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| title | string | `"Sample funnel"` | Small uppercase label rendered above the rows |
| steps | FunnelStep[] | required | Ordered array of funnel steps |
| ariaLabel | string | auto-generated | Accessible label for the chart region. When omitted, a description is built from the steps array. |
| className | string | undefined | Optional extra class name for the root element |

Where `FunnelStep` is:

```typescript
type FunnelStep = {
  label: string;     // step name displayed in the row
  value: number;     // fill percentage, 0 to 100
  dropoff?: number;  // count lost from the previous step; omit or set 0 to hide
};
```

## Customization (HTML/CSS variables)

Every visual property is exposed as a CSS custom property on `.afi`:

```css
.afi {
  --afi-title-color: var(--brand-muted, #4a5568);
  --afi-label-color: var(--brand-ink, #1f2d44);
  --afi-index-color: var(--brand-muted, #4a5568);
  --afi-track-color: var(--brand-surface-alt, #edeff2);
  --afi-bar-color: var(--brand-accent, #5b8b85);
  --afi-value-color: var(--brand-ink-strong, #0f1b2d);
  --afi-dropoff-color: var(--brand-danger, #a33b3b);
  --afi-mono-font: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, monospace;
  --afi-bar-radius: 0.25rem;
  --afi-bar-height: 0.625rem;
}
```

Override these in your own stylesheet or as inline `style` attributes to match your brand:

```css
.my-dashboard .afi {
  --afi-bar-color: #3b6ea5;
  --afi-dropoff-color: #c0392b;
}
```

Note: bar fill widths (the `width` on `.afi__bar`) are set as inline styles on each row because they are data-driven, not theme values.

## Accessibility

- The root `<div>` carries `role="img"` and `aria-label` to expose the chart as a single labeled graphic to screen readers
- When `ariaLabel` is omitted, the React component builds a plain-text description listing each step and its percentage
- The HTML example requires a hand-authored `aria-label` on the root element
- Index digits and percentage values use a monospace font for consistent alignment; these are visually decorative and their meaning is conveyed through the surrounding label and value text
- No interactive elements; keyboard focus passes through naturally

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Requires CSS custom properties, Flexbox, and `overflow: hidden`. No IE support.

## Migration history

- v2.0: initial migration from rampstackco-app's inline funnel component in the Threshold reference build. The source rendered a hardcoded four-step array with Tailwind utility classes; the migration generalizes the step data to a `steps` prop, replaces utility classes with BEM class names under the `.afi` namespace, and exposes all color and sizing tokens as CSS custom properties.
