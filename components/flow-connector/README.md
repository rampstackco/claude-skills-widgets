# FlowConnector

**Implements pattern**: Utility component (no pattern mapping)
**Category**: Utility
**Stability**: v2.0 (initial)

## What it is

A small inline SVG utility that draws a dashed connector line between flow-diagram cards. It renders an origin dot at one end and an arrowhead at the other, and supports both horizontal and vertical orientations. Use it to visually link sequential steps, pipeline stages, or process cards.

## React usage

```tsx
import { FlowConnector } from "claude-skills-widgets/flow-connector";

<FlowConnector orientation="horizontal" />

<FlowConnector orientation="vertical" />
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/flow-connector/styles.css">

<!-- Horizontal (default) -->
<div class="fc fc--horizontal" aria-hidden="true">
  <svg width="48" height="20" viewBox="0 0 48 20" fill="none">
    <line x1="4" y1="10" x2="38" y2="10"
          stroke="var(--fc-line-color)" stroke-width="var(--fc-stroke-width)"
          stroke-dasharray="2 3" />
    <circle cx="4" cy="10" r="2" fill="var(--fc-accent-color)" />
    <path d="M 38 6 L 44 10 L 38 14"
          stroke="var(--fc-accent-color)" stroke-width="var(--fc-stroke-width)"
          stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</div>

<!-- Vertical -->
<div class="fc fc--vertical" aria-hidden="true">
  <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
    <line x1="10" y1="4" x2="10" y2="22"
          stroke="var(--fc-line-color)" stroke-width="var(--fc-stroke-width)"
          stroke-dasharray="2 3" />
    <circle cx="10" cy="4" r="2" fill="var(--fc-accent-color)" />
    <path d="M 6 22 L 10 28 L 14 22"
          stroke="var(--fc-accent-color)" stroke-width="var(--fc-stroke-width)"
          stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</div>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| orientation | `"horizontal"` \| `"vertical"` | `"horizontal"` | Controls which SVG variant to render |
| className | string | undefined | Optional extra class name appended to the root element |

## Customization (CSS variables)

Every customizable visual property is exposed as a CSS custom property on the component root class:

```css
.fc {
  --fc-line-color: var(--brand-muted, #c7ccd4);
  --fc-accent-color: var(--brand-accent, #5b8b85);
  --fc-stroke-width: 1.5;
}
```

Override these in your own stylesheet to integrate the component into your brand:

```css
:root {
  --fc-line-color: #d1d5db;
  --fc-accent-color: #2563eb;
  --fc-stroke-width: 2;
}
```

## Accessibility

- The root wrapper carries `aria-hidden="true"` because the connector is purely decorative; screen readers skip it entirely.
- No interactive elements are present, so there is no keyboard navigation surface.
- The SVG does not include a `<title>` or `role` attribute, consistent with its decorative role.

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Relies on CSS custom properties and inline SVG, both of which have broad support. No IE support.

## Migration history

- v2.0: initial migration from rampstackco-app's `FlowConnector` component in the Threshold reference build. Hardcoded Tailwind utility classes replaced with BEM class names (`.fc`, `.fc--horizontal`, `.fc--vertical`). Hardcoded hex color values replaced with CSS custom properties. Next.js dependencies removed; component now works in any environment.
