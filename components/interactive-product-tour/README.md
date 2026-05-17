# InteractiveProductTour

**Implements pattern**: [`patterns/interactive-tooling/09-interactive-product-tour.md`](../../patterns/interactive-tooling/09-interactive-product-tour.md)
**Category**: Interactive Tooling
**Stability**: v2.6

## What it is

A floating tooltip tour that pins a card to target DOM elements one step at a time. Each step anchors to a CSS selector, shows a title and body copy, and provides next/back navigation with an optional spotlight overlay. Use it for onboarding flows and feature introductions where you want to draw attention to specific UI elements without leaving the page.

## Basic implementation notice

This component provides the structural foundation for a product tour: positioning logic, spotlight overlay, step navigation, keyboard handling, and focus management. It is intentionally kept dependency-free so it can be understood and modified directly.

For production use cases that require sub-pixel intelligent placement (avoiding viewport edges, flipping sides when clipped), entrance/exit animation sequencing, and mobile-responsive fallback behavior, layer a dedicated library on top of this structure. Good options: [react-joyride](https://react-joyride.com/) and [driver.js](https://driverjs.com/). This component is designed to show you the pattern so you can either extend it yourself or hand it off to one of those libraries with a clear understanding of what each part does.

## React usage

```tsx
import { InteractiveProductTour } from "claude-skills-widgets/interactive-product-tour";

const steps = [
  {
    target: "#dashboard-header",
    title: "Your command center",
    content: "Everything you need is pinned here. The header shows your active project and quick-access actions.",
    position: "bottom",
    highlight: true,
  },
  {
    target: ".sidebar-nav",
    title: "Navigate by section",
    content: "Switch between Projects, Analytics, and Settings from the sidebar. Your last-visited section is remembered.",
    position: "right",
    highlight: true,
  },
  {
    target: "#create-btn",
    title: "Start something new",
    content: "Hit this to open the creation panel. You can also press C anywhere on the keyboard.",
    position: "bottom",
    highlight: false,
  },
];

function App() {
  const [tourOpen, setTourOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setTourOpen(true)}>Take the tour</button>
      <InteractiveProductTour
        isOpen={tourOpen}
        steps={steps}
        onClose={() => setTourOpen(false)}
        onComplete={() => {
          setTourOpen(false);
          // fire your conversion event here
        }}
        showProgress
        showSkip
      />
    </>
  );
}
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/primary-button-cta/styles.css">
<link rel="stylesheet" href="path/to/interactive-product-tour/styles.css">

<!-- Target elements the tour will pin to -->
<div id="feature-a">Feature A</div>
<div id="feature-b">Feature B</div>

<!-- Tour overlay is injected by the IIFE script -->
<button id="start-tour">Start tour</button>

<script src="path/to/interactive-product-tour/html/index.html"></script>
```

(See `html/index.html` for the complete self-contained demo with inline vanilla JS IIFE.)

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| isOpen | boolean | required | Whether the tour is visible |
| steps | TourStep[] | required | Ordered list of tour steps |
| onClose | () => void | required | Called when the user closes or skips the tour |
| onComplete | () => void | undefined | Called when the user finishes the last step |
| startStep | number | 0 | Index of the step to begin on |
| showSkip | boolean | true | Show a skip link in the tooltip footer |
| showProgress | boolean | true | Show "Step N of N" progress text |
| nextLabel | string | "Next" | Label for the forward action button |
| backLabel | string | "Back" | Label for the back button |
| finishLabel | string | "Done" | Label for the action button on the last step |
| skipLabel | string | "Skip tour" | Label for the skip link |
| className | string | undefined | Extra class applied to the overlay root |

Where `TourStep`:

```typescript
type TourStep = {
  target: string;       // CSS selector for the element to anchor the tooltip to
  title: string;        // Step heading shown in the tooltip card
  content: string;      // Body copy for the step
  position?: "top" | "bottom" | "left" | "right";  // Preferred tooltip side (default "bottom")
  highlight?: boolean;  // Whether to render a spotlight cutout over the target element
};
```

## Positioning and spotlight implementation

**Positioning:** On each step change and on window resize, the component calls `document.querySelector(step.target)` and `getBoundingClientRect()`. The resulting `DOMRect` is used to compute `position: fixed` coordinates for the tooltip card. The offset from the target edge is controlled by `--ipt-tooltip-offset`. If the selector matches nothing, the tooltip falls back to a centered position (50% from left, 40% from top) so the tour remains functional even when target elements are absent.

**Spotlight cutout:** When `highlight: true`, a fixed-position `div` (`.ipt__spotlight`) is placed exactly over the target element using the same `getBoundingClientRect()` values, expanded outward by `--ipt-spotlight-padding` on all sides. A large `box-shadow` (inset spread using `0 0 0 9999px`) with `rgba(0,0,0,0.55)` creates the dimming ring around the spotlight box without a second element. The spotlight box itself has `background: transparent` and `border-radius` matching the target shape, so the target shows through clearly. The overlay `div` (`.ipt__overlay`) behind everything is set to `pointer-events: none` so clicks pass through to the target element when highlighting is active.

## Customization (CSS variables)

```css
.ipt__overlay {
  --ipt-overlay-bg: rgba(0, 0, 0, 0.5);
  --ipt-z-index: 9999;
  --ipt-spotlight-padding: 6px;
  --ipt-tooltip-bg: var(--brand-surface, #ffffff);
  --ipt-tooltip-shadow: 0 8px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.1);
  --ipt-tooltip-padding: 1.5rem;
  --ipt-tooltip-radius: 0.75rem;
  --ipt-tooltip-width: 320px;
  --ipt-tooltip-offset: 12px;
  --ipt-text-color: var(--brand-ink, #102542);
  --ipt-muted-color: rgba(16, 37, 66, 0.6);
  --ipt-accent: var(--brand-accent, #1e5fcf);
  --ipt-progress-color: rgba(16, 37, 66, 0.45);
  --ipt-title-size: 1rem;
  --ipt-content-size: 0.9375rem;
}
```

Override in your own stylesheet:

```css
:root {
  --ipt-accent: #7c3aed;
  --ipt-tooltip-width: 360px;
}
```

## Accessibility

- The tooltip card has `role="dialog"` with `aria-modal="true"` and `aria-labelledby` pointing to the step title element
- The dimming overlay is `aria-hidden="true"` so screen readers focus only on the dialog content
- Focus moves to the tooltip card automatically on each step change via `element.focus()`
- ESC key closes the tour via a `keydown` listener added when `isOpen` is true and removed on cleanup
- A visually hidden `role="status"` element announces tour completion with `aria-live="polite"`
- Progress text ("Step 2 of 4") is rendered as visible text, not only as visual dots
- Back and skip buttons are native `<button>` elements with meaningful labels

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses `getBoundingClientRect()` and `position: fixed`, both universally supported. No IE support.

## Migration history

- v2.6: initial implementation of `patterns/interactive-tooling/09-interactive-product-tour.md`
