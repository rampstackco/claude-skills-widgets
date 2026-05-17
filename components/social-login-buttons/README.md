# SocialLoginButtons

**Implements pattern**: [`patterns/lead-capture/11-social-login-buttons.md`](../../patterns/lead-capture/11-social-login-buttons.md)
**Category**: Lead Capture
**Stability**: v2.3

## What it is

A set of OAuth provider buttons (Google, GitHub, Apple, Microsoft, Twitter, LinkedIn, and custom providers) that render the authentication entry point UI. This component handles rendering only: the consumer is responsible for wiring their own OAuth or authentication flow. Use it wherever you need a fast, low-friction entry point alongside or above an email/password form.

## React usage

```tsx
import { SocialLoginButtons } from "claude-skills-widgets/social-login-buttons";

// Stacked layout with three providers (most common)
<SocialLoginButtons
  providers={[
    { id: "google" },
    { id: "github" },
    { id: "apple" },
  ]}
  onProviderClick={(providerId) => startOAuth(providerId)}
/>

// Row layout with a divider below, sitting above an email form
<SocialLoginButtons
  providers={[{ id: "google" }, { id: "github" }]}
  onProviderClick={(providerId) => startOAuth(providerId)}
  layout="row"
  dividerText="or"
/>

// Minimal style (no provider coloring, text-only feel)
<SocialLoginButtons
  providers={[
    { id: "google" },
    { id: "github" },
    { id: "microsoft" },
  ]}
  onProviderClick={(providerId) => startOAuth(providerId)}
  style="minimal"
  dividerText="or continue with email"
/>

// Custom provider with a custom label and icon
<SocialLoginButtons
  providers={[
    { id: "google" },
    {
      id: "discord",
      label: "Continue with Discord",
      icon: <MyDiscordIcon />,
    },
  ]}
  onProviderClick={(providerId) => startOAuth(providerId)}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/social-login-buttons/styles.css">

<!-- Stacked layout (default) -->
<div class="slb slb--stacked slb--default">
  <button class="slb__button" type="button">
    <svg class="slb__icon" aria-hidden="true"><!-- Google SVG --></svg>
    <span class="slb__label">Continue with Google</span>
  </button>
  <button class="slb__button" type="button">
    <svg class="slb__icon" aria-hidden="true"><!-- GitHub SVG --></svg>
    <span class="slb__label">Continue with GitHub</span>
  </button>
</div>

<!-- With divider -->
<div class="slb slb--stacked slb--default">
  <!-- ... buttons ... -->
  <div class="slb__divider" role="separator" aria-label="or">
    <span class="slb__divider-text">or</span>
  </div>
</div>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| providers | `Provider[]` | required | Ordered list of providers to render. Each item has `id`, optional `label`, optional `icon`. |
| onProviderClick | `(providerId: string) => void \| Promise<void>` | required | Called with the provider id when the user clicks a button. Wire your OAuth flow here. |
| dividerText | string | undefined | If set, renders a labelled separator below the buttons (for example "or"). Intended to sit between these buttons and a sibling email form. |
| layout | `"stacked" \| "row"` | `"stacked"` | Stacked renders buttons vertically, full-width. Row renders them horizontally with wrapping. |
| style | `"default" \| "minimal"` | `"default"` | Default applies neutral themed styling. Minimal is text-only with no provider-specific coloring. |
| className | string | undefined | Extra class applied to the root element. |

### Provider shape

| Field | Type | Notes |
|---|---|---|
| id | `"google" \| "github" \| "apple" \| "microsoft" \| "twitter" \| "linkedin" \| string` | Determines built-in icon and default label. |
| label | string | Overrides the default "Continue with {Provider}" label. |
| icon | ReactNode | Overrides the built-in SVG icon for this provider. Pass `null` to suppress the icon. |

## Customization (CSS variables)

Every customizable visual property is exposed as a CSS custom property on the component root class:

```css
.slb {
  --slb-button-bg: var(--brand-surface, #ffffff);
  --slb-button-border: var(--brand-border, #d1d5db);
  --slb-button-text-color: var(--brand-ink, #111827);
  --slb-button-bg-hover: var(--brand-surface-hover, #f3f4f6);
  --slb-button-padding: 0.75rem 1.25rem;
  --slb-icon-size: 1.25rem;
  --slb-gap: 0.75rem;
  --slb-button-radius: 0.5rem;
  --slb-button-font-size: 0.9375rem;
  --slb-button-font-weight: 500;
  --slb-divider-color: var(--brand-border, #d1d5db);
  --slb-divider-text-color: var(--brand-muted, #6b7280);
}
```

Override in your own stylesheet:

```css
:root {
  --slb-button-bg: #f9fafb;
  --slb-button-border: #e5e7eb;
  --slb-button-radius: 0.375rem;
}
```

### Applying brand-specific button colors

The default style is visually neutral and works with any brand. To apply brand-specific button colors (Google white with border, GitHub dark, Apple black, Microsoft multi-color) target each button with a per-button class or add a wrapping selector:

```css
/* Example: Give the Google button its branded white-with-border look */
.slb__button[data-provider="google"] {
  --slb-button-bg: #ffffff;
  --slb-button-border: #dadce0;
  --slb-button-text-color: #3c4043;
}

/* Example: Give the GitHub button a dark background */
.slb__button[data-provider="github"] {
  --slb-button-bg: #24292f;
  --slb-button-border: #24292f;
  --slb-button-text-color: #ffffff;
}

/* Example: Apple black */
.slb__button[data-provider="apple"] {
  --slb-button-bg: #000000;
  --slb-button-border: #000000;
  --slb-button-text-color: #ffffff;
}
```

The component intentionally does not hardcode brand colors as defaults. Official provider button guidelines (Google, Apple) specify exact colors and sizing; applying them is the consumer's responsibility.

## Accessibility

- Each button is a real `<button type="button">` with an accessible name from its visible label text.
- Provider icons are `aria-hidden="true"` so screen readers skip the SVG and read only the label.
- The divider uses `role="separator"` with an `aria-label` matching the visible text; it is not a heading.
- Focus ring is visible on all buttons (2px outline, offset 2px).
- Minimum touch target height is 44px at default padding.
- Tab order follows DOM order (top to bottom in stacked layout, left to right in row layout).

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). No IE support.

## Migration history

- v2.3: initial implementation of `patterns/lead-capture/11-social-login-buttons.md`
