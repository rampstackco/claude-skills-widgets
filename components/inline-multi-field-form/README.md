# InlineMultiFieldForm

**Implements pattern**: [`patterns/lead-capture/02-inline-multi-field-form.md`](../../patterns/lead-capture/02-inline-multi-field-form.md)
**Category**: Lead Capture
**Stability**: v2.2

## What it is

A 3 to 5 field form embedded directly on a page for B2B sales lead capture. Use it when an email address alone is not enough for a lead to be actionable: when routing, scoring, or personalizing follow-up requires company, role, or qualifying data collected at the point of capture.

## React usage

```tsx
import { InlineMultiFieldForm } from "claude-skills-widgets/inline-multi-field-form";

<InlineMultiFieldForm
  fields={[
    { name: "name",    label: "Full name",    type: "text",  required: true, autocomplete: "name" },
    { name: "email",   label: "Work email",   type: "email", required: true, autocomplete: "email" },
    { name: "company", label: "Company",      type: "text",  required: true, autocomplete: "organization" },
    { name: "role",    label: "Role",         type: "select", required: true,
      options: [
        { value: "", label: "Select your role" },
        { value: "engineering", label: "Engineering" },
        { value: "product", label: "Product" },
        { value: "marketing", label: "Marketing" },
        { value: "sales", label: "Sales" },
        { value: "other", label: "Other" },
      ]
    },
  ]}
  buttonLabel="Request a demo"
  onSubmit={async (values) => {
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  }}
  layout="grid"
  disclaimerText="No spam. We will reach out within one business day."
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/inline-multi-field-form/styles.css">

<form class="imff imff--grid" id="my-lead-form" novalidate>
  <div class="imff__field">
    <label class="imff__label" for="imff-name">Full name</label>
    <input class="imff__input" id="imff-name" type="text" name="name"
           placeholder="Jane Smith" autocomplete="name" required aria-required="true">
    <p class="imff__error" id="imff-name-error" role="alert" hidden></p>
  </div>

  <div class="imff__field">
    <label class="imff__label" for="imff-email">Work email</label>
    <input class="imff__input" id="imff-email" type="email" name="email"
           placeholder="jane@company.com" autocomplete="email" required aria-required="true">
    <p class="imff__error" id="imff-email-error" role="alert" hidden></p>
  </div>

  <div class="imff__actions">
    <button class="imff__button" type="submit">Request a demo</button>
  </div>

  <p class="imff__success" id="imff-success" hidden aria-live="polite">
    Thanks, we will be in touch.
  </p>
</form>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| fields | `FormField[]` | required | Ordered list of form fields to render (3 to 5 fields recommended) |
| buttonLabel | string | `"Get in touch"` | Submit button label |
| onSubmit | `(values: Record<string, string>) => void \| Promise<void>` | required | Called with all field values on valid submission; may return a Promise |
| layout | `"horizontal" \| "stacked" \| "grid"` | `"grid"` | Controls field arrangement |
| disclaimerText | string | undefined | Optional fine-print shown below the button |
| successText | string | `"Thanks, we will be in touch."` | Text shown after a successful submission |
| errorText | string | `"Something went wrong. Check your entries and try again."` | Text shown when the onSubmit handler throws |
| className | string | undefined | Extra class applied to the root form element |

### FormField type

| Property | Type | Default | Description |
|---|---|---|---|
| name | string | required | Field name, used as the key in the submitted values object |
| label | string | required | Visible label text |
| type | `"text" \| "email" \| "tel" \| "url" \| "select"` | `"text"` | Input type; use `"select"` for a dropdown |
| options | `{ value: string; label: string }[]` | undefined | Required when `type` is `"select"`; populates the dropdown |
| required | boolean | undefined | Marks the field required; triggers validation before submit |
| placeholder | string | undefined | Placeholder text for input fields |
| autocomplete | string | undefined | Value for the HTML `autocomplete` attribute |

### Layout values

| Value | Behavior |
|---|---|
| `"grid"` | Two-column CSS grid on wide viewports (configurable via `--imff-grid-cols-desktop`); collapses to one column on narrow screens |
| `"stacked"` | Single column at all widths |
| `"horizontal"` | Fields flow in a row with the button at the end; wraps on narrow viewports |

## Customization (CSS variables)

Every customizable visual property is exposed as a CSS custom property on `.imff`:

```css
.imff {
  --imff-gap: 1rem;
  --imff-label-color: var(--brand-ink, #111827);
  --imff-input-border: var(--brand-border, #d1d5db);
  --imff-input-border-radius: 0.375rem;
  --imff-input-padding-y: 0.625rem;
  --imff-input-padding-x: 0.875rem;
  --imff-input-focus-ring: var(--brand-accent, #1e5fcf);
  --imff-grid-cols-desktop: 2;
  --imff-button-bg: var(--brand-accent, #1e5fcf);
  --imff-button-bg-hover: color-mix(in srgb, var(--imff-button-bg) 88%, black);
  --imff-button-text: #ffffff;
  --imff-disclaimer-color: var(--brand-muted, #6b7280);
  --imff-success-color: var(--brand-success, #16a34a);
  --imff-error-color: var(--brand-error, #dc2626);
}
```

Override these in your own stylesheet to integrate the component into your brand:

```css
:root {
  --imff-button-bg: #0f4c9e;
  --imff-grid-cols-desktop: 3;
}
```

## Accessibility

- Each field has an associated `<label>` via `htmlFor` (React) or `for` (HTML), matching the input `id`
- Required fields carry `aria-required="true"` on the input or select element
- Per-field error messages use `role="alert"` so screen readers announce them on reveal
- The success state is announced via `aria-live="polite"` on the form element after submit
- Select elements share the same focus ring and sizing as text inputs for consistent keyboard navigation
- Minimum touch target height is 44px on all interactive controls

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). No IE support. Uses `color-mix()` for hover state (Chrome 111+, Safari 16.2+, Firefox 113+); the button hover color falls back gracefully to the base accent color on older engines.

## Migration history

- v2.2: initial implementation
