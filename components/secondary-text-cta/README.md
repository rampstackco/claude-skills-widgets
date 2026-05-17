# SecondaryTextCTA

**Implements pattern**: [`patterns/cta/02-secondary-text-cta.md`](../../patterns/cta/02-secondary-text-cta.md)
**Category**: CTA
**Stability**: v2.2

## What it is

A lightweight text-link CTA with an optional trailing icon, designed as the lower-priority companion to a primary button. It signals an alternate conversion path (documentation, pricing, contacting sales) without competing visually with the dominant action on the surface.

## React usage

```tsx
import { SecondaryTextCTA } from "claude-skills-widgets/secondary-text-cta";

// Default: arrow-right icon
<SecondaryTextCTA label="View pricing" href="/pricing" />

// Chevron icon
<SecondaryTextCTA label="Read the docs" href="/docs" icon="chevron-right" />

// External link icon
<SecondaryTextCTA label="Open on GitHub" href="https://github.com/example" icon="external" />

// No icon, small size
<SecondaryTextCTA label="Learn more" href="/about" icon="none" size="small" />
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/secondary-text-cta/styles.css">

<!-- Default with arrow-right icon -->
<a class="stc" href="/pricing">
  View pricing
  <svg class="stc__icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/>
  </svg>
</a>

<!-- Small size, no icon -->
<a class="stc stc--small" href="/about">Learn more</a>

<!-- External link icon -->
<a class="stc" href="https://github.com/example" target="_blank" rel="noopener noreferrer">
  Open on GitHub
  <svg class="stc__icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3M9 2h5v5M8 8l6-6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</a>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| label | string | required | Link text |
| href | string | required | Anchor destination (always renders an `<a>`) |
| icon | "arrow-right" \| "chevron-right" \| "external" \| ReactNode \| "none" | "arrow-right" | Trailing icon: built-in name, custom node, or "none" to suppress |
| size | "default" \| "small" | "default" | Font and gap scale |
| className | string | undefined | Extra class for the root |

## Customization (CSS variables)

```css
.stc {
  --stc-color: var(--brand-accent, #1e5fcf);
  --stc-color-hover: color-mix(in srgb, var(--stc-color) 80%, black);
  --stc-font-size: 1rem;
  --stc-font-weight: 500;
  --stc-gap: 0.375rem;
  --stc-underline-offset: 2px;
}
```

Override these in your stylesheet to match your brand:

```css
:root {
  --stc-color: #0f172a;
  --stc-color-hover: #475569;
}
```

## Accessibility

- Always renders a semantic `<a>` element; link text must be descriptive (not "click here")
- Icon is marked `aria-hidden="true"` so the visible label alone provides the accessible name
- Underline is visible at rest by default, satisfying WCAG 1.4.1 (Use of Color)
- Focus ring uses the link color to maintain visible keyboard indication
- Minimum tap target height of 44px is maintained via padding on the root element
- For external links, add `target="_blank" rel="noopener noreferrer"` in HTML; consider appending "(opens in new tab)" to the label for screen reader users

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses `color-mix()` for the hover color (Chrome 111+, Safari 16.2+, Firefox 113+); override `--stc-color-hover` directly for older browser targets.

## Migration history

- v2.2: initial implementation of `patterns/cta/02-secondary-text-cta.md`
