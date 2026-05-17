# PrimaryButtonCTA

**Implements pattern**: [`patterns/cta/01-primary-button-cta.md`](../../patterns/cta/01-primary-button-cta.md)
**Category**: CTA
**Stability**: v2.1

## What it is

A solid-fill button containing direct action copy, positioned as the visual focal point of a surface. Implements the "one clear action" pattern that drives conversion when one action is meaningfully more important than any other on the page.

## React usage

```tsx
import { PrimaryButtonCTA } from "claude-skills-widgets/primary-button-cta";

<PrimaryButtonCTA
  label="Get started"
  href="/signup"
/>

// Outlined variant with icon
<PrimaryButtonCTA
  label="View pricing"
  href="/pricing"
  variant="outlined"
  icon="arrow-right"
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/primary-button-cta/styles.css">

<!-- Default solid-fill -->
<a class="pbc pbc--solid" href="/signup">Get started</a>

<!-- Outlined variant -->
<a class="pbc pbc--outlined" href="/pricing">View pricing</a>

<!-- With trailing arrow icon -->
<a class="pbc pbc--solid pbc--with-icon" href="/signup">
  Get started
  <svg class="pbc__icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/>
  </svg>
</a>

<!-- Or as a <button> for client-side actions -->
<button class="pbc pbc--solid" type="button">Start trial</button>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| label | string | required | Button text |
| href | string | undefined | If set, renders an `<a>`; otherwise renders a `<button>` |
| variant | "solid" \| "outlined" | "solid" | Visual treatment |
| shape | "rounded" \| "pill" \| "sharp" | "rounded" | Corner radius style |
| icon | "arrow-right" \| "chevron-right" \| ReactNode | undefined | Optional trailing icon |
| onClick | () => void | undefined | Click handler (for button mode) |
| type | "button" \| "submit" | "button" | Button type (button mode only) |
| className | string | undefined | Extra class for the root |

## Customization (CSS variables)

```css
.pbc {
  --pbc-bg-color: var(--brand-accent, #1e5fcf);
  --pbc-text-color: white;
  --pbc-border-color: var(--pbc-bg-color);
  --pbc-bg-hover: color-mix(in srgb, var(--pbc-bg-color) 90%, black);
  --pbc-radius: 0.5rem;
  --pbc-padding-y: 0.75rem;
  --pbc-padding-x: 1.5rem;
  --pbc-font-size: 1rem;
  --pbc-font-weight: 600;
  --pbc-transition: 150ms ease;
}
```

Override these in your stylesheet to match your brand.

## Accessibility

- Renders semantic `<a>` for navigation or `<button>` for client-side actions
- Visible focus ring preserved (do not override with `outline: none` without replacement)
- Minimum touch target 44x44pt on mobile (padding ensures this at default sizing)
- Icon marked `aria-hidden="true"`; button label provides accessible name
- Sufficient color contrast on default tokens (4.5:1 minimum)

## Browser support

Modern browsers. Uses `color-mix()` for hover state (Chrome 111+, Safari 16.2+, Firefox 113+); falls back to manual hover color override for older browsers via the variable.

## Migration history

- v2.1: initial implementation of `patterns/cta/01-primary-button-cta.md`
