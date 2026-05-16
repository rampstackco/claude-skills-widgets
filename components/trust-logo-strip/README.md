# TrustLogoStrip

**Implements pattern**: [`patterns/social-proof/01-customer-logo-strip.md`](../../patterns/social-proof/01-customer-logo-strip.md)
**Category**: Social Proof
**Stability**: v2.0 (initial)

## What it is

A horizontal strip of customer or partner logos with an optional eyebrow label. Used to convey credibility through recognizable brand associations. Logos render in grayscale by default to maintain visual cohesion with the surrounding page.

## React usage

```tsx
import { TrustLogoStrip } from "claude-skills-widgets/trust-logo-strip";

<TrustLogoStrip
  eyebrow="Trusted by teams at"
  logos={[
    { name: "Acme Corp", src: "/logos/acme.svg" },
    { name: "Globex", src: "/logos/globex.svg", href: "https://globex.com" },
  ]}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/trust-logo-strip/styles.css">

<section class="tls">
  <p class="tls__eyebrow">Trusted by teams at</p>
  <ul class="tls__list">
    <li class="tls__item">
      <img class="tls__logo" src="/logos/acme.svg" alt="Acme Corp">
    </li>
    <li class="tls__item">
      <a class="tls__item-link" href="https://globex.com">
        <img class="tls__logo" src="/logos/globex.svg" alt="Globex">
      </a>
    </li>
  </ul>
</section>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| eyebrow | string | "Trusted by teams at" | Label text above the logo row |
| logos | Logo[] | required | Array of logo objects |
| className | string | undefined | Optional extra class for the root element |

Where `Logo` is:

```typescript
type Logo = {
  name: string;     // for alt text
  src: string;      // logo image source
  href?: string;    // optional link wrapping the logo
};
```

## Customization (CSS variables)

```css
.tls {
  --tls-eyebrow-color: var(--brand-muted, #6b7280);
  --tls-eyebrow-size: 0.75rem;
  --tls-eyebrow-tracking: 0.1em;
  --tls-logo-height: 32px;
  --tls-logo-opacity: 0.65;
  --tls-logo-opacity-hover: 1;
  --tls-logo-filter: grayscale(100%);
  --tls-gap: 2.5rem;
  --tls-padding-block: 2rem;
}
```

Override these in your own stylesheet to integrate into your brand system.

## Accessibility

- Logos use `<img>` with descriptive `alt` text (the brand name)
- Linked logos use `<a>` with the logo image inside; the link inherits its accessible name from the alt text
- Eyebrow label uses `<p>` (decorative); if it should be a heading, wrap the section in proper heading hierarchy at the page level
- No keyboard traps; standard tab order

## Browser support

Modern browsers. CSS Grid, Flexbox, and custom properties.

## Migration history

- v2.0: initial migration from rampstackco-app's `TrustLogoStrip` component in the Threshold reference build. The source rendered a hardcoded list of fictional company wordmarks; the migration generalizes that to a `logos` prop accepting image sources and exposes visual properties as CSS variables.
