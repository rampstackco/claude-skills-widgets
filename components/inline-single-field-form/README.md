# InlineSingleFieldForm

**Implements pattern**: [`patterns/lead-capture/01-inline-single-field-form.md`](../../patterns/lead-capture/01-inline-single-field-form.md)
**Category**: Lead Capture
**Stability**: v2.1

## What it is

A single input field paired with a submit button, arranged side by side on desktop and stacked vertically on narrow screens. It is the lowest-friction lead-capture form in the library: one field, one action, no interruption to the surrounding page content. Use it for newsletter signups, waitlist captures, or any flow where the only data needed at this stage is one value (most commonly an email address).

## React usage

```tsx
import { InlineSingleFieldForm } from "claude-skills-widgets/inline-single-field-form";

// Minimal email capture
<InlineSingleFieldForm
  onSubmit={async (value) => {
    await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: value }),
    });
  }}
/>

// With a visible label, custom button copy, and disclaimer
<InlineSingleFieldForm
  fieldType="email"
  label="Work email"
  buttonLabel="Get the newsletter"
  successText="You're on the list!"
  disclaimerText="No spam, ever. Unsubscribe at any time."
  onSubmit={handleSubmit}
/>

// Text field variant
<InlineSingleFieldForm
  fieldType="text"
  placeholder="Your company name"
  buttonLabel="Request access"
  label="Company"
  onSubmit={handleSubmit}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/inline-single-field-form/styles.css">

<form class="isff" novalidate>
  <div class="isff__row">
    <div class="isff__field">
      <label for="my-input">Email address</label>
      <input
        id="my-input"
        class="isff__input"
        type="email"
        placeholder="you@company.com"
        autocomplete="email"
        required
      >
    </div>
    <button class="isff__button" type="submit">Subscribe</button>
  </div>

  <!-- Error: hidden until submission fails -->
  <p class="isff__error" id="my-error" hidden role="alert"></p>

  <!-- Success: hidden until submission succeeds -->
  <p class="isff__success" id="my-success" hidden aria-live="polite">
    Thanks!
  </p>

  <!-- Optional fine print -->
  <p class="isff__disclaimer">No spam. Unsubscribe anytime.</p>
</form>
```

The HTML variant ships with a vanilla JS `<script>` block inside `html/index.html`. The script handles `preventDefault`, reads the trimmed input value, disables both the input and button during the pending fetch, reveals `.isff__success` on completion, and restores the form on error so the user can retry. A clearly marked comment block shows exactly where to place your `fetch()` call and how to shape the request body for common services (Mailchimp proxy, Resend, custom backends). The script uses no external dependencies and wraps everything in an IIFE so it does not pollute the global scope.

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| fieldType | "email" \| "text" \| "tel" | "email" | Input type |
| placeholder | string | Depends on fieldType | Placeholder text ("you@company.com" for email) |
| buttonLabel | string | "Subscribe" | Submit button text |
| onSubmit | (value: string) => void \| Promise\<void\> | required | Called with the trimmed input value; may be async |
| disclaimerText | string | undefined | Optional fine print rendered below the form row |
| successText | string | "Thanks!" | Text shown after a successful submit |
| label | string | undefined | Visible label text for the input; if omitted, an aria-label is applied automatically |
| className | string | undefined | Extra class applied to the root form element |

## Customization (CSS variables)

Every visual property is exposed as a CSS custom property on the `.isff` root class:

```css
.isff {
  --isff-input-border-color: var(--brand-border, #d1d5db);
  --isff-input-border-radius: 0.375rem;
  --isff-input-padding-y: 0.625rem;
  --isff-input-padding-x: 0.875rem;
  --isff-focus-ring-color: var(--brand-accent, #1e5fcf);
  --isff-button-bg: var(--brand-accent, #1e5fcf);
  --isff-button-bg-hover: color-mix(in srgb, var(--isff-button-bg) 88%, black);
  --isff-button-text: #ffffff;
  --isff-disclaimer-color: var(--brand-muted, #6b7280);
  --isff-success-color: var(--brand-success, #16a34a);
  --isff-error-color: var(--brand-error, #dc2626);
  --isff-gap: 0.5rem;
  --isff-font-size: 1rem;
  --isff-font-weight-button: 600;
  --isff-disclaimer-font-size: 0.8125rem;
}
```

Override any of these in your own stylesheet:

```css
/* Example: brand color and pill-shaped inputs */
.my-page .isff {
  --isff-button-bg: #7c3aed;
  --isff-focus-ring-color: #7c3aed;
  --isff-input-border-radius: 9999px;
}
```

The stacking behavior is hardcoded to trigger at `max-width: 480px`. If you need a different breakpoint, override the media query in your own stylesheet by targeting `.isff__row` directly.

## Accessibility

- Uses a real `<form>` element with a `type="submit"` button; works with Enter-to-submit and all standard form interactions.
- When the `label` prop is provided, a visible `<label>` element is rendered and associated to the input via `for`/`id`. When omitted, the input receives an `aria-label` automatically.
- The input carries `autocomplete="email"` (or `"tel"`) where applicable, enabling browser autofill and the correct software keyboard on iOS and Android.
- On error, the input receives `aria-invalid="true"` and `aria-describedby` pointing to the error paragraph. The error paragraph carries `role="alert"` so assistive technology announces it without requiring focus movement.
- The success message carries `aria-live="polite"` so screen readers announce the confirmation without disrupting active reading.
- Both the input and button meet 44px minimum touch target height at default sizing.
- Focus rings are preserved on all interactive elements; do not override with `outline: none` without a replacement.

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses `color-mix()` for button hover state (Chrome 111+, Safari 16.2+, Firefox 113+); for older browsers, set `--isff-button-bg-hover` to an explicit hex value to bypass the `color-mix()` call.

## Migration history

- v2.1: initial implementation of `patterns/lead-capture/01-inline-single-field-form.md`
