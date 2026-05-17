# LimitedTimeOfferBanner

**Implements pattern**: [`patterns/urgency/04-limited-time-offer-banner.md`](../../patterns/urgency/04-limited-time-offer-banner.md)
**Category**: Urgency
**Stability**: v2.3

## What it is

A fixed, full-width horizontal strip positioned at the top or bottom of the viewport that displays offer copy alongside a live countdown composed from the `CountdownTimer` component. Use it during a genuine promotional window with a fixed business deadline, when every visitor regardless of entry point needs to see the deadline context.

## React usage

```tsx
import { LimitedTimeOfferBanner } from "claude-skills-widgets/limited-time-offer-banner";

// Warning variant (default): orange-toned, no CTA button
<LimitedTimeOfferBanner
  message="Sale ends Friday at midnight. 20% off all annual plans."
  deadline="2026-05-22T23:59:59Z"
/>

// Celebratory variant with a CTA button
<LimitedTimeOfferBanner
  message="Launch week pricing is live."
  deadline={new Date("2026-05-23T23:59:59Z")}
  variant="celebratory"
  cta={{ label: "See pricing", href: "/pricing" }}
  dismissKey="launch-week-2026"
/>

// Minimal, bottom-positioned, shows expired message instead of hiding
<LimitedTimeOfferBanner
  message="Early-bird rate applies until Sunday."
  deadline="2026-05-18T23:59:59Z"
  variant="minimal"
  position="bottom"
  expiredAction="show-expired-message"
  expiredMessage="Early-bird pricing has closed."
/>
```

## HTML usage

```html
<!-- Order matters: countdown-timer/styles.css first, then limited-time-offer-banner/styles.css -->
<link rel="stylesheet" href="path/to/countdown-timer/styles.css">
<link rel="stylesheet" href="path/to/limited-time-offer-banner/styles.css">

<div
  class="ltob ltob--top ltob--warning"
  role="complementary"
  aria-label="Promotional offer"
  data-dismiss-key="ltob-dismissed"
>
  <p class="ltob__message">Sale ends Friday at midnight. 20% off all annual plans.</p>

  <div class="ltob__countdown cdt" data-deadline="2026-05-22T23:59:59Z">
    <p class="cdt__label">Ends in</p>
    <p class="cdt__display" aria-live="off">Loading...</p>
  </div>

  <a class="ltob__cta" href="/pricing">See pricing</a>

  <button class="ltob__close" type="button" aria-label="Dismiss promotional offer">
    <svg viewBox="0 0 16 16" aria-hidden="true" width="16" height="16">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>
  </button>
</div>
```

Reference the HTML variant (`html/index.html`) for the vanilla JS countdown and dismiss implementation.

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| message | string | required | The offer copy shown in the banner |
| deadline | `Date \| string` | required | Passed directly to `CountdownTimer`. Must be a real, fixed business deadline |
| cta | `{ label: string; href: string }` | undefined | Optional CTA button rendered after the countdown |
| position | `"top" \| "bottom"` | `"top"` | Viewport edge to pin the banner to |
| dismissible | boolean | `true` | When true, renders a close button that persists the dismissed state to localStorage |
| dismissKey | string | `"ltob-dismissed"` | localStorage key scoping the dismissed state. Change per campaign to avoid cross-campaign conflicts |
| variant | `"warning" \| "celebratory" \| "minimal"` | `"warning"` | Visual treatment; controls background and text color tokens |
| expiredAction | `"hide" \| "show-expired-message"` | `"hide"` | Behavior when the countdown reaches zero: hide the banner entirely, or replace its content with `expiredMessage` |
| expiredMessage | string | `"This offer has ended"` | Text shown when `expiredAction` is `"show-expired-message"` and the deadline has passed |
| className | string | undefined | Extra class appended to the root element |

## Customization (HTML/CSS variables)

Every visual token is exposed as a CSS custom property on `.ltob`. Override them after linking the stylesheet:

```css
.ltob {
  --ltob-bg: var(--brand-accent, #b45309);
  --ltob-text-color: #ffffff;
  --ltob-cta-bg: #ffffff;
  --ltob-cta-text-color: #b45309;
  --ltob-padding: 0.625rem 1.25rem;
  --ltob-z-index: 1000;
  --ltob-gap: 1rem;
  --ltob-font-size: 0.9375rem;
  --ltob-close-size: 2rem;
}
```

Variant-specific backgrounds:

```css
.ltob--warning     { --ltob-bg: var(--brand-warning-bg, #b45309); }
.ltob--celebratory { --ltob-bg: var(--brand-celebratory-bg, #166534); }
.ltob--minimal     {
  --ltob-bg: var(--brand-surface, #ffffff);
  --ltob-text-color: var(--brand-ink, #102542);
  --ltob-cta-bg: var(--brand-accent, #1e5fcf);
  --ltob-cta-text-color: #ffffff;
}
```

Per-brand override example:

```css
:root {
  --brand-warning-bg: #92400e;
}
```

## Accessibility

- Renders with `role="complementary"` and `aria-label="Promotional offer"` so screen readers encounter the banner as a distinct landmark
- The dismiss button carries `aria-label="Dismiss promotional offer"` (descriptive, not just "Close")
- The countdown's `aria-live="off"` is inherited from `CountdownTimer`; this prevents per-second announcements that would interrupt the user while reading page content
- When `expiredAction="show-expired-message"`, the expired state uses `role="status"` on the replacement element so the transition is announced once
- The banner is placed early in DOM order so keyboard users encounter it before page body content; do not reorder it below the main content in the DOM
- Minimum touch target on the close button: 2rem x 2rem (matches `--ltob-close-size`); increase the variable if your touch target requirement is larger
- Color contrast: the default warning token `#b45309` on white passes 4.5:1; verify contrast after any custom token override

## Honesty

The deadline passed to this component must be a real, fixed business deadline set in your application or CMS, not a date computed per-visit or per-session. Common dishonest implementations to avoid:

- A deadline that is `Date.now() + 48 hours` computed fresh on every page load, giving every visitor their own "personal" 48-hour window
- A countdown that resets when the user opens a new tab or clears cookies
- A banner that stays visible after the real deadline has passed because no one updated or removed it

If you cannot guarantee the banner disappears once the real deadline passes, set `expiredAction="show-expired-message"` to at least replace the countdown with a truthful "offer has ended" notice rather than showing a frozen timer.

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses `env(safe-area-inset-*)` for notch/home-indicator clearance on iOS Safari (supported since iOS 11.2). No IE support.

## Migration history

- v2.3: initial implementation of `patterns/urgency/04-limited-time-offer-banner.md`
