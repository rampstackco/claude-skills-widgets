# WaitlistPositionDisplay

**Implements pattern**: [`patterns/urgency/06-waitlist-position-display.md`](../../patterns/urgency/06-waitlist-position-display.md)
**Category**: Urgency
**Stability**: v2.3

## What it is

A post-signup confirmation card that shows the user their numbered position in a waitlist queue. The position number functions as both social-proof of demand and a concrete asset the user is motivated to protect or improve. An optional skip-the-line referral mechanic extends the component into an active engagement loop.

## React usage

```tsx
import { WaitlistPositionDisplay } from "claude-skills-widgets/waitlist-position-display";

{/* Expanded with referral mechanic */}
<WaitlistPositionDisplay
  position={847}
  total={12400}
  userEmail="you@example.com"
  referralLink={{
    url: "https://yourapp.com/ref/abc123",
    copyButtonLabel: "Copy your link",
  }}
  onReferralCopy={() => console.log("link copied")}
/>

{/* Compact, no referral */}
<WaitlistPositionDisplay
  position={312}
  style="compact"
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/waitlist-position-display/styles.css">

<section class="wpd wpd--expanded" aria-label="You are number 847 in the waitlist">
  <p class="wpd__welcome">Welcome, you@example.com</p>
  <h2 class="wpd__headline">You are in line</h2>
  <p class="wpd__position">
    <span aria-hidden="true">#</span>847
  </p>
  <p class="wpd__total">of 12,400 people on the waitlist</p>
  <div class="wpd__referral">
    <span class="wpd__referral-url">https://yourapp.com/ref/abc123</span>
    <button class="wpd__copy-button" type="button" aria-label="Copy referral link">
      Copy your link
    </button>
    <span class="wpd__copy-status" aria-live="polite"></span>
  </div>
</section>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| position | number | required | The user's current position in the queue |
| total | number | undefined | Total number of people in the queue; shown as context below the position |
| userEmail | string | undefined | Displayed as a personalized welcome line above the headline |
| referralLink | `{ url: string; copyButtonLabel?: string }` | undefined | When provided, renders the referral URL and a copy-to-clipboard button |
| onReferralCopy | `() => void` | undefined | Called once after a successful clipboard write |
| style | `"compact"` \| `"expanded"` | `"expanded"` | Controls layout density; compact omits the welcome line and reduces padding |
| headline | string | undefined | Overrides the default headline derived from position; default is "You are in line" |
| className | string | undefined | Extra class appended to the root element |

## Customization (CSS variables)

Every customizable visual property is exposed as a CSS custom property on the component root class:

```css
.wpd {
  --wpd-bg: var(--brand-surface, #ffffff);
  --wpd-radius: 0.75rem;
  --wpd-padding: 2rem;
  --wpd-gap: 1rem;
  --wpd-text-color: var(--brand-ink, #111111);
  --wpd-muted-color: var(--brand-ink-muted, #555555);
  --wpd-position-color: var(--brand-accent, #1e5fcf);
  --wpd-position-size: 4rem;
  --wpd-referral-bg: var(--brand-surface-alt, #f4f4f4);
  --wpd-referral-radius: 0.5rem;
  --wpd-copy-bg: var(--brand-accent, #1e5fcf);
  --wpd-copy-color: #ffffff;
  --wpd-copy-radius: 0.375rem;
}
```

Override in your own stylesheet to integrate into your brand:

```css
:root {
  --wpd-position-color: #7c3aed;
  --wpd-position-size: 5rem;
  --wpd-copy-bg: #7c3aed;
}
```

## Accessibility

- The root element carries `aria-label="You are number N in the waitlist"` so screen readers announce the summary without requiring the user to navigate through all child elements
- The position number uses `font-variant-numeric: tabular-nums` and is paired with visible prose (the headline) so the number is never orphaned from context
- The copy button uses `aria-label="Copy referral link"` (or the label derived from `copyButtonLabel`)
- Copied feedback is delivered via a sibling `<span aria-live="polite">` so assistive technology announces the confirmation without a focus change
- All interactive elements are keyboard reachable; the copy button has a visible `:focus-visible` ring

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). `navigator.clipboard.writeText` requires a secure context (HTTPS or localhost); the component falls back gracefully when the API is unavailable. No IE support.

## Migration history

- v2.3: initial implementation of `patterns/urgency/06-waitlist-position-display.md`
