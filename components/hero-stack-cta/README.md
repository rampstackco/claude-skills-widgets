# HeroStackCTA

**Implements pattern**: [`patterns/cta/06-hero-stack-primary-plus-secondary.md`](../../patterns/cta/06-hero-stack-primary-plus-secondary.md)
**Category**: CTA
**Stability**: v2.1

## What it is

A composite hero CTA that pairs a solid-fill primary button with an optional secondary action (outlined button or text link). It addresses two visitor intents simultaneously: visitors ready to act now and visitors who need more context before committing. The component composes `PrimaryButtonCTA` for both button variants and exposes an alignment prop to control horizontal or stacked layout.

## Component implementation

This component directly implements the "Hero Stack: Primary Plus Secondary" pattern. The primary prop maps to the solid-fill (or outlined) `PrimaryButtonCTA`. The secondary prop maps to either the equal-weight variant (outlined `PrimaryButtonCTA`) or the asymmetric variant (`.hsc__text-link` anchor). The `alignment` prop controls the stacked vs. horizontal desktop layout; the CSS media query collapses horizontal to a column below 480px regardless of the prop value.

## React usage

```tsx
import { HeroStackCTA } from "claude-skills-widgets/hero-stack-cta";

// Asymmetric: solid primary + text-link secondary (default)
<HeroStackCTA
  primary={{ label: "Get started", href: "/signup", icon: "arrow-right" }}
  secondary={{ label: "See how it works", href: "/demo", type: "text-link" }}
/>

// Equal-weight: solid primary + outlined secondary
<HeroStackCTA
  primary={{ label: "Start free trial", href: "/signup" }}
  secondary={{ label: "Contact sales", href: "/contact", type: "outlined" }}
/>

// Stacked layout
<HeroStackCTA
  primary={{ label: "Deploy now", href: "/deploy" }}
  secondary={{ label: "Read the docs", href: "/docs", type: "text-link" }}
  alignment="stacked"
/>
```

## HTML usage

```html
<!-- Both stylesheets are required -->
<link rel="stylesheet" href="path/to/primary-button-cta/styles.css">
<link rel="stylesheet" href="path/to/hero-stack-cta/styles.css">

<!-- Horizontal: solid primary + text-link secondary -->
<div class="hsc hsc--horizontal">
  <a class="pbc pbc--solid pbc--rounded" href="/signup">Get started</a>
  <a class="hsc__text-link" href="/demo">See how it works</a>
</div>

<!-- Horizontal: solid primary + outlined secondary -->
<div class="hsc hsc--horizontal">
  <a class="pbc pbc--solid pbc--rounded" href="/signup">Start free trial</a>
  <a class="pbc pbc--outlined pbc--rounded" href="/contact">Contact sales</a>
</div>

<!-- Stacked layout -->
<div class="hsc hsc--stacked">
  <a class="pbc pbc--solid pbc--rounded" href="/deploy">Deploy now</a>
  <a class="hsc__text-link" href="/docs">Read the docs</a>
</div>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| primary | `{ label: string; href?: string; variant?: "solid" \| "outlined"; icon?: "arrow-right" \| "chevron-right" }` | required | Passed through to PrimaryButtonCTA as the main action |
| secondary | `{ label: string; href?: string; type?: "outlined" \| "text-link" }` | undefined | Optional secondary action. "outlined" renders a PrimaryButtonCTA with variant="outlined"; "text-link" (default) renders a styled anchor |
| alignment | `"horizontal" \| "stacked"` | "horizontal" | Desktop layout direction. Both collapse to a column below 480px |
| className | string | undefined | Extra class applied to the root `.hsc` element |

## Customization (CSS variables)

The `.hsc` root exposes layout and text-link variables. Primary button colors come from PrimaryButtonCTA's own `.pbc` variables and are not redefined here.

```css
.hsc {
  --hsc-gap: 1rem;
  --hsc-text-link-color: var(--brand-accent, #1e5fcf);
  --hsc-text-link-color-hover: color-mix(in srgb, var(--hsc-text-link-color) 80%, black);
  --hsc-text-link-font-size: 1rem;
  --hsc-text-link-font-weight: 500;
}
```

Override these in your own stylesheet:

```css
:root {
  --hsc-gap: 1.25rem;
  --hsc-text-link-color: #0f172a;
}
```

## Accessibility

- Both actions must carry distinct, descriptive labels so screen reader users understand each path without relying on visual position
- The `.hsc__text-link` anchor includes an underline on focus to satisfy focus-visible requirements
- Render order in the DOM matches visual order; primary action appears first
- Icon inside the primary button is `aria-hidden="true"` (handled by PrimaryButtonCTA)
- Touch targets: the primary button meets 44px minimum via PrimaryButtonCTA padding; the text link meets minimum height via inline-flex and min-height on `.hsc__text-link`

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). `color-mix()` used for hover state (Chrome 111+, Safari 16.2+, Firefox 113+); set `--hsc-text-link-color-hover` manually as a fallback for older targets.

## Migration history

- v2.1: initial implementation of `patterns/cta/06-hero-stack-primary-plus-secondary.md`
