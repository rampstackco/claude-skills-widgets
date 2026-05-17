# FeaturedInPressStrip

**Implements pattern**: [`patterns/social-proof/02-featured-in-press-strip.md`](../../patterns/social-proof/02-featured-in-press-strip.md)
**Category**: Social Proof
**Stability**: v2.6

## What it is

A thin wrapper around `TrustLogoStrip` that applies press-specific defaults: the eyebrow defaults to "Featured in", and publication logos render in color by default (unlike the base customer logo strip, which renders grayscale). Use it on landing pages and product pages where editorial coverage from recognizable publications provides third-party credibility for first-time visitors.

## React usage

```tsx
import { FeaturedInPressStrip } from "claude-skills-widgets/featured-in-press-strip";

<FeaturedInPressStrip
  logos={[
    { name: "The Daily Ledger", src: "/press/daily-ledger.svg" },
    { name: "Tech Review Weekly", src: "/press/tech-review.svg" },
    { name: "Metro Business", src: "/press/metro-biz.svg" },
  ]}
/>

// Grayscale variant
<FeaturedInPressStrip
  eyebrow="As seen in"
  showColor={false}
  logos={[
    { name: "The Daily Ledger", src: "/press/daily-ledger.svg" },
  ]}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/trust-logo-strip/styles.css">
<link rel="stylesheet" href="path/to/featured-in-press-strip/styles.css">

<!-- Color variant (default) -->
<section class="tls fips fips--color">
  <p class="tls__eyebrow">Featured in</p>
  <ul class="tls__list">
    <li class="tls__item">
      <img class="tls__logo" src="/press/daily-ledger.svg" alt="The Daily Ledger" loading="lazy">
    </li>
    <li class="tls__item">
      <img class="tls__logo" src="/press/tech-review.svg" alt="Tech Review Weekly" loading="lazy">
    </li>
  </ul>
</section>

<!-- Grayscale variant -->
<section class="tls fips">
  <p class="tls__eyebrow">As seen in</p>
  <ul class="tls__list">
    <li class="tls__item">
      <img class="tls__logo" src="/press/daily-ledger.svg" alt="The Daily Ledger" loading="lazy">
    </li>
  </ul>
</section>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| eyebrow | string | `"Featured in"` | Label text above the logo row |
| logos | Logo[] | required | Array of publication logo objects |
| showColor | boolean | `true` | When true, overrides `--tls-logo-filter` so logos render in full color. Set to false for grayscale rendering. |
| className | string | undefined | Optional extra class applied to the root element |

Where `Logo` is (re-exported from `TrustLogoStrip`):

```typescript
type Logo = {
  name: string;   // publication name, used for alt text
  src: string;    // logo image source
  href?: string;  // optional link wrapping the logo
};
```

## Customization (CSS variables)

This component inherits all CSS custom properties from `TrustLogoStrip`. When `showColor` is true (or the `.fips--color` class is present in HTML), the following properties are overridden to display logos in color:

```css
.fips--color {
  --tls-logo-filter: none;
  --tls-logo-opacity: 1;
  --tls-logo-opacity-hover: 1;
}
```

To adjust colors or sizing, override TrustLogoStrip tokens on the root element or in your own stylesheet:

```css
:root {
  --tls-logo-height: 40px;
  --tls-eyebrow-color: #374151;
}
```

## Accessibility

- Publication logos use `<img>` with the outlet name as `alt` text
- Linked logos wrap in `<a>` and inherit accessible name from the alt text
- The eyebrow label ("Featured in") is a `<p>` element; it is decorative context and does not need to be a heading
- No keyboard traps; standard tab order applies
- Color rendering (the `fips--color` variant) does not affect screen reader behavior

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Relies on CSS custom properties and `filter`; no IE support.

## Migration history

- v2.6: initial implementation
