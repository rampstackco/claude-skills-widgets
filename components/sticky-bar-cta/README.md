# StickyBarCTA

**Implements pattern**: [`patterns/cta/03-sticky-bottom-bar-cta.md`](../../patterns/cta/03-sticky-bottom-bar-cta.md)
**Category**: CTA
**Stability**: v2.2

## What it is

A persistent horizontal bar fixed to the top or bottom of the viewport, containing a short message and a primary CTA button. It stays visible as the user scrolls long-form pages, ensuring the conversion action is always reachable. Supports a dismissible state persisted in localStorage so the bar stays hidden after the user closes it.

## React usage

```tsx
import { StickyBarCTA } from "claude-skills-widgets/sticky-bar-cta";

// Default: bottom, solid, dismissible
<StickyBarCTA
  message="Start your free trial. No credit card required."
  cta={{ label: "Get started", href: "/signup" }}
/>

// Top position, minimal variant
<StickyBarCTA
  message="New: annual plans now available."
  cta={{ label: "View plans", href: "/pricing" }}
  position="top"
  variant="minimal"
  dismissKey="annual-plan-bar-dismissed"
/>

// Non-dismissible
<StickyBarCTA
  message="Limited spots remaining."
  cta={{ label: "Reserve yours", href: "/reserve" }}
  dismissible={false}
/>
```

## HTML usage

```html
<!-- Link both stylesheets: primary-button-cta first, then sticky-bar-cta -->
<link rel="stylesheet" href="path/to/primary-button-cta/styles.css">
<link rel="stylesheet" href="path/to/sticky-bar-cta/styles.css">

<!-- Bottom solid (default) -->
<div
  class="sbc sbc--bottom sbc--solid"
  role="complementary"
  aria-label="Site banner"
  data-dismiss-key="sticky-bar-dismissed"
>
  <p class="sbc__message">Start your free trial. No credit card required.</p>
  <div class="sbc__action">
    <a class="pbc pbc--solid pbc--rounded" href="/signup">Get started</a>
  </div>
  <button class="sbc__close" type="button" aria-label="Dismiss">
    <svg viewBox="0 0 16 16" aria-hidden="true" width="16" height="16">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>
  </button>
</div>
```

Include the vanilla JS snippet from `html/index.html` to wire up dismiss behavior without a framework.

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| message | string | required | Main copy shown in the bar |
| cta | `{ label: string; href: string }` | required | Label and destination for the action button |
| dismissible | boolean | `true` | When true, renders a close button |
| dismissKey | string | `"sticky-bar-dismissed"` | localStorage key used to persist the dismissed state |
| position | `"bottom"` \| `"top"` | `"bottom"` | Viewport edge the bar is pinned to |
| variant | `"solid"` \| `"minimal"` | `"solid"` | Visual treatment: solid uses `--sbc-bg`; minimal uses a transparent background with a border |
| className | string | undefined | Extra class appended to the root element |

## localStorage dismiss behavior

When the user clicks the close button, the component writes `"1"` to `localStorage` under the `dismissKey`. On the next mount, `useEffect` reads that key; if the value is `"1"` the component returns `null` immediately, so the bar never flashes before hiding. In the HTML variant a vanilla JS IIFE at the end of `html/index.html` performs the same read on `DOMContentLoaded` and sets `display: none` if the key is present.

To reset the dismissed state during development, run `localStorage.removeItem("sticky-bar-dismissed")` (or whichever key you configured) in the browser console.

## Customization (CSS variables)

Every customizable visual property is exposed as a CSS custom property on `.sbc`:

```css
.sbc {
  --sbc-bg: var(--brand-accent, #1e5fcf);
  --sbc-text-color: #ffffff;
  --sbc-border-color: var(--brand-accent, #1e5fcf);
  --sbc-padding: 0.75rem 1.25rem;
  --sbc-shadow: 0 -2px 12px rgba(0, 0, 0, 0.12);
  --sbc-z-index: 1000;
  --sbc-close-size: 2rem;
  --sbc-close-color: currentColor;
  --sbc-close-opacity: 0.7;
  --sbc-close-opacity-hover: 1;
  --sbc-gap: 1rem;
}
```

Override these in your own stylesheet to match your brand:

```css
:root {
  --sbc-bg: #ff6b00;
  --sbc-text-color: #ffffff;
  --sbc-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
}
```

The action button inside the bar inherits PrimaryButtonCTA variables (`--pbc-*`). Override them scoped to `.sbc` to style the button independently from other instances on the page:

```css
.sbc {
  --pbc-bg-color: #ffffff;
  --pbc-text-color: #1e5fcf;
}
```

## Accessibility

- The bar uses `role="complementary"` and `aria-label="Site banner"` so screen readers identify it as a distinct region
- The close button is a native `<button>` element with `aria-label="Dismiss"` and a visible focus ring
- `position: fixed` with adequate `z-index` keeps the bar above page content without trapping keyboard focus; tab order continues naturally past the bar
- iOS safe-area padding is applied via `env(safe-area-inset-bottom)` / `env(safe-area-inset-top)` so the bar does not hide behind Safari's home indicator or status bar
- `will-change: transform` on the root promotes the bar to its own compositing layer, preventing scroll-triggered repaints

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses `color-mix()` for the minimal variant border fallback (Chrome 111+, Safari 16.2+, Firefox 113+). The `env(safe-area-inset-*)` values require iOS 11+ / Safari 11+; older browsers receive standard fixed positioning with no loss of functionality.

## Migration history

- v2.2: initial implementation of `patterns/cta/03-sticky-bottom-bar-cta.md`
