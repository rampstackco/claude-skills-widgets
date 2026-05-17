# NewsletterSignupInline

**Implements pattern**: [`patterns/lead-capture/08-newsletter-signup-inline.md`](../../patterns/lead-capture/08-newsletter-signup-inline.md)
**Category**: Lead Capture
**Stability**: v2.2

## What it is

A single-field email capture form designed for placement within or below content: at the end of an article, between content sections, or in a sidebar adjacent to a reading column. Unlike a generic lead form, this component is shorter and more casual in register, and supports an optional headline and supporting copy that sets context for the subscription offer.

## React usage

```tsx
import { NewsletterSignupInline } from "claude-skills-widgets/newsletter-signup-inline";

// Default: no headline, just the form row
<NewsletterSignupInline
  onSubmit={async (email) => {
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  }}
/>

// With headline and description
<NewsletterSignupInline
  headline="Get the weekly essay"
  description="One piece on B2B pricing, every Thursday. No filler."
  placeholder="you@company.com"
  buttonLabel="Subscribe"
  disclaimerText="Unsubscribe anytime. No spam."
  onSubmit={handleSubscribe}
/>

// Minimal style (no background, no padding, no border)
<NewsletterSignupInline
  headline="Enjoyed this article?"
  description="Get the next one in your inbox."
  style="minimal"
  onSubmit={handleSubscribe}
/>

// Card style (elevated background, padding, border)
<NewsletterSignupInline
  headline="Stay in the loop"
  description="Weekly notes on product, growth, and distribution."
  style="card"
  successText="You're on the list."
  onSubmit={handleSubscribe}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/newsletter-signup-inline/styles.css">

<!-- Default style -->
<section class="nsi nsi--default" id="my-newsletter">
  <h2 class="nsi__headline">Get the weekly essay</h2>
  <p class="nsi__description">One piece on B2B pricing, every Thursday.</p>

  <form class="nsi__form" novalidate>
    <label class="nsi__label nsi__label--visually-hidden" for="nsi-email">
      Email address
    </label>
    <input
      id="nsi-email"
      class="nsi__input"
      type="email"
      placeholder="you@company.com"
      autocomplete="email"
      required
    >
    <button class="nsi__button" type="submit">Subscribe</button>
  </form>

  <p class="nsi__disclaimer">Unsubscribe anytime. No spam.</p>
  <p class="nsi__success" hidden aria-live="polite">Thanks for subscribing.</p>
  <p class="nsi__error" hidden role="alert"></p>
</section>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| onSubmit | `(email: string) => void \| Promise<void>` | required | Called with the trimmed email on submit. Throw to trigger error state. |
| headline | string | undefined | Optional heading above the form row |
| description | string | undefined | Optional supporting copy below the headline |
| placeholder | string | `"you@company.com"` | Input placeholder text |
| buttonLabel | string | `"Subscribe"` | Submit button label |
| disclaimerText | string | `"Unsubscribe anytime. No spam."` | Fine print below the form |
| successText | string | `"Thanks for subscribing."` | Message shown after a successful submit |
| style | `"default" \| "minimal" \| "card"` | `"default"` | Visual treatment of the container |
| className | string | undefined | Extra class applied to the root element |

## Customization (HTML/CSS variables)

Every customizable visual property is exposed as a CSS custom property on the component root class:

```css
.nsi {
  --nsi-bg: transparent;
  --nsi-padding: 0;
  --nsi-border: none;
  --nsi-border-radius: 0.5rem;
  --nsi-headline-size: 1.25rem;
  --nsi-headline-weight: 700;
  --nsi-description-color: var(--brand-muted, #6b7280);
  --nsi-input-border: var(--brand-border, #d1d5db);
  --nsi-input-border-radius: 0.375rem;
  --nsi-input-bg: #ffffff;
  --nsi-focus-ring: var(--brand-accent, #1e5fcf);
  --nsi-button-bg: var(--brand-accent, #1e5fcf);
  --nsi-button-bg-hover: color-mix(in srgb, var(--nsi-button-bg) 88%, black);
  --nsi-button-text: #ffffff;
  --nsi-disclaimer-color: var(--brand-muted, #6b7280);
  --nsi-success-color: var(--brand-success, #16a34a);
  --nsi-error-color: var(--brand-error, #dc2626);
}
```

Override these in your own stylesheet to integrate the component into your brand:

```css
:root {
  --nsi-button-bg: #7c3aed;
  --nsi-headline-size: 1.5rem;
}
```

The `card` modifier adds its own defaults for `--nsi-bg`, `--nsi-padding`, and `--nsi-border` that you can override the same way.

## Accessibility

- The email input is always associated with a label via `for`/`id` (React: `useId`). When no visible label text is present, the label carries the `nsi__label--visually-hidden` class so it remains in the accessibility tree.
- `type="email"` triggers the email keyboard on mobile and enables browser autofill via `autocomplete="email"`.
- The error message uses `role="alert"` so assistive technology announces it immediately on injection.
- The success message uses `aria-live="polite"` so assistive technology reads it at the next opportunity without interrupting.
- The submit button is disabled during the async call so duplicate submissions are not possible via keyboard or pointer.
- Minimum touch target height of 44px is maintained on both the input and the button.
- Focus ring is visible at all times and uses the accent color token.

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses `color-mix()` for button hover state (Chrome 111+, Safari 16.2+, Firefox 113+). The hover color gracefully falls back to the base button color if `color-mix()` is unavailable.

## Migration history

- v2.2: initial implementation
