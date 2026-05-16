# CountdownTimer

**Implements pattern**: [`patterns/urgency/01-countdown-timer.md`](../../patterns/urgency/01-countdown-timer.md)
**Category**: Urgency
**Stability**: v2.1

## What it is

A live countdown display showing days, hours, minutes, and seconds remaining until a fixed target deadline. Use it to surface a genuine, server-defined expiry (a sale end date, a registration close, a launch window) so visitors understand exactly how much time remains before an offer or opportunity closes.

## React usage

```tsx
import { CountdownTimer } from "claude-skills-widgets/countdown-timer";

// Full format (default)
<CountdownTimer
  deadline="2026-06-01T00:00:00Z"
  label="Sale ends in"
/>

// Compact format
<CountdownTimer
  deadline="2026-06-01T00:00:00Z"
  label="Offer closes"
  format="compact"
  onExpire={() => console.log("deadline passed")}
/>

// Passing a Date object
<CountdownTimer
  deadline={new Date("2026-06-01T00:00:00Z")}
  label="Registration closes"
  expiredLabel="Registration is closed"
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/countdown-timer/styles.css">

<section
  class="cdt"
  data-deadline="2026-06-01T00:00:00Z"
  data-expired-label="Deal ended"
>
  <p class="cdt__label">Sale ends in</p>
  <p class="cdt__display" aria-live="off"></p>
</section>

<script src="path/to/countdown-timer/html/countdown.js"></script>
```

The vanilla JS reads `data-deadline` and `data-expired-label` from the root `.cdt` element and drives the update loop. See `html/index.html` for the self-contained version with an inline script.

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| deadline | `Date \| string` | required | The target datetime. ISO 8601 strings are parsed automatically. Must be a fixed, real deadline. |
| label | string | `"Ends in"` | Context copy shown above the countdown display |
| expiredLabel | string | `"Deal ended"` | Text shown in place of the timer once the deadline has passed |
| format | `"full" \| "compact"` | `"full"` | `"full"` renders "2 days 3 hours 45 minutes 12 seconds"; `"compact"` renders "02d 03h 45m 12s" |
| onExpire | `() => void` | undefined | Callback fired once when the timer transitions to the expired state |
| className | string | undefined | Extra class applied to the root `.cdt` element |

## Customization (CSS variables)

Every customizable visual property is exposed as a CSS custom property on the `.cdt` root class:

```css
.cdt {
  --cdt-display-font: ui-monospace, "Cascadia Code", "Source Code Pro",
    Menlo, Consolas, "DejaVu Sans Mono", monospace;
  --cdt-display-font-size: 1.75rem;
  --cdt-display-color: var(--brand-ink, #102542);
  --cdt-display-font-weight: 600;
  --cdt-label-color: var(--brand-muted, #5a6a7a);
  --cdt-label-font-size: 0.875rem;
  --cdt-gap: 0.375rem;
}
```

Override these in your own stylesheet to match your brand:

```css
.cdt {
  --cdt-display-font-size: 2.5rem;
  --cdt-display-color: #b91c1c;
  --cdt-label-color: #374151;
}
```

A monospace font stack is used by default so digits do not shift width as they tick, avoiding layout jank.

## Accessibility

- The countdown region uses `aria-live="off"` so screen readers are not interrupted every second; the label above provides static context about what is counting down.
- Wrap the component in or alongside a `<time>` element with a `datetime` attribute set to the ISO deadline when the exact date is user-visible (for example: "Sale ends November 29 at 11:59 PM ET"). The pattern documentation covers this requirement in full.
- The expired state replaces the timer text with the `expiredLabel` string, which is readable by all assistive technology without additional aria annotations.
- Color contrast on default tokens meets WCAG AA (4.5:1 minimum) against a white background.
- No interactive elements are inside the timer itself; surrounding CTA buttons should carry their own accessible labels.

## Honesty

Only use this component with genuine, fixed deadlines. Fabricated urgency (timers that reset on page reload, evergreen "24 hours remaining" counters, per-visit durations) damages trust. When users notice the reset across devices or return visits, they lose confidence in everything else on the page. The deadline value must come from real server-side or business logic tied to an actual event, sale window, or registration cutoff, not a client-side calculation from page load time.

For the threshold test from the pattern file: if a user asked "when exactly does this end, and will it reset if I reload?", you must be able to answer honestly. If you cannot, do not show a timer.

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses `setInterval` and `Date` arithmetic, which are universally supported. No IE support.

## Migration history

- v2.1: initial implementation of `patterns/urgency/01-countdown-timer.md`
