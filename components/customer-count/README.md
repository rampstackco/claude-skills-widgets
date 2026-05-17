# CustomerCount

**Implements pattern**: [`patterns/social-proof/07-customer-count-display.md`](../../patterns/social-proof/07-customer-count-display.md)
**Category**: Social Proof
**Stability**: v2.1

## What it is

A prominent number paired with a context label that communicates adoption scale at a glance. Use it in hero sections, KPI strips, or alongside primary CTAs to reduce perceived adoption risk through quantitative social proof. Optionally pairs with a supporting subtitle and an inline growth indicator.

## React usage

```tsx
import { CustomerCount } from "claude-skills-widgets/customer-count";

{/* Pre-formatted string count with growth indicator */}
<CustomerCount
  count="70 million"
  label="members worldwide"
  growth={{ value: "+2M this month", direction: "up" }}
/>

{/* Numeric count (auto-formatted with thousands separators) */}
<CustomerCount
  count={10247}
  label="teams using the platform"
  subtitle="across 80+ countries"
/>

{/* Left-aligned */}
<CustomerCount
  count="25,000+"
  label="businesses served"
  align="left"
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/customer-count/styles.css">

<!-- Center-aligned with growth indicator -->
<div class="cc cc--center">
  <span class="cc__count" aria-label="70 million">70 million</span>
  <span class="cc__label">members worldwide</span>
  <span class="cc__growth cc__growth--up">
    <svg class="cc__growth-icon" viewBox="0 0 10 8" aria-hidden="true">
      <polygon points="5,0 10,8 0,8"/>
    </svg>
    +2M this month
  </span>
</div>

<!-- Center-aligned with subtitle -->
<div class="cc cc--center">
  <span class="cc__count">10,247</span>
  <span class="cc__label">teams using the platform</span>
  <span class="cc__subtitle">across 80+ countries</span>
</div>

<!-- Left-aligned -->
<div class="cc cc--left">
  <span class="cc__count">25,000+</span>
  <span class="cc__label">businesses served</span>
</div>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| count | `string \| number` | required | The displayed figure. Strings are used verbatim (supporting pre-formatted values like "70 million" or "10K+"). Numbers are auto-formatted with locale thousands separators. |
| label | string | required | Short context label displayed below the count |
| subtitle | string | undefined | Optional supporting text displayed below the label |
| growth | `{ value: string; direction: "up" \| "down" }` | undefined | Optional growth indicator. Renders a small inline SVG triangle beside the value string. |
| align | `"left" \| "center"` | `"center"` | Horizontal alignment of all content within the component |
| className | string | undefined | Extra class name appended to the root element |

## Customization (CSS variables)

Every customizable visual property is exposed as a CSS custom property on the component root class:

```css
.cc {
  --cc-count-font-size: var(--brand-display, 4rem);
  --cc-count-font-weight: var(--brand-weight-bold, 700);
  --cc-count-color: var(--brand-ink, #0f172a);
  --cc-label-color: var(--brand-muted, #475569);
  --cc-label-font-size: var(--brand-text-sm, 1rem);
  --cc-subtitle-color: var(--brand-subtle, #94a3b8);
  --cc-growth-up-color: var(--brand-success, #16a34a);
  --cc-growth-down-color: var(--brand-danger, #dc2626);
  --cc-gap: 0.375rem;
}
```

Override these in your own stylesheet to integrate the component into your brand:

```css
:root {
  --cc-count-color: #1e5fcf;
  --cc-count-font-size: 3rem;
  --cc-growth-up-color: #059669;
}
```

## Accessibility

- The count element is a `<span>` with `aria-label` applied when the displayed string would read ambiguously to screen readers (for numeric auto-formatted values, the `aria-label` matches the plain number)
- Growth icons are `aria-hidden="true"` because the text value already communicates the change
- Color is not the only indicator of growth direction: the triangle glyph (up or down) provides a shape-based signal alongside color
- The root element uses `role="group"` with an `aria-label` combining count and label to give assistive technology a single coherent announcement

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses `Intl.NumberFormat` for numeric formatting (available in all modern browsers). No IE support.

## Migration history

- v2.1: initial implementation of `patterns/social-proof/07-customer-count-display.md`
