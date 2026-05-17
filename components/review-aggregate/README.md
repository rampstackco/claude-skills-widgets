# ReviewAggregate

**Implements pattern**: [09-review-aggregate](../../patterns/social-proof/09-review-aggregate.md)
**Category**: Social Proof
**Stability**: v2.2

## What it is

A star rating display paired with a review count and an optional source attribution (such as "on G2" or "on Capterra"). It renders stars as inline SVG, supports fractional ratings (half-star precision), and ships in two layout styles: a compact inline row for hero sections and an expanded badge block for standalone trust callouts.

## React usage

```tsx
import { ReviewAggregate } from "claude-skills-widgets/review-aggregate";

<ReviewAggregate
  rating={4.5}
  reviewCount={12847}
  source="on G2"
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/review-aggregate/styles.css">

<!-- Compact (inline row) -->
<div class="rav rav--compact" aria-label="Rated 4.5 out of 5 stars based on 12,847 reviews on G2">
  <div class="rav__stars" aria-hidden="true">
    <!-- star SVGs here -->
  </div>
  <span class="rav__rating-value">4.5</span>
  <span class="rav__count">(12,847)</span>
  <span class="rav__source">on G2</span>
</div>

<!-- Expanded (badge block) -->
<div class="rav rav--expanded" aria-label="Rated 4.5 out of 5 stars based on 12,847 reviews on G2">
  <div class="rav__stars" aria-hidden="true">
    <!-- star SVGs here -->
  </div>
  <div class="rav__rating-value">4.5</div>
  <div class="rav__count">12,847 reviews</div>
  <div class="rav__source">on G2</div>
</div>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| rating | number | required | Numeric rating from 0 to maxRating. Fractional values (e.g. 4.5) render a half star. |
| maxRating | number | 5 | The scale ceiling. Controls how many total stars are drawn. |
| reviewCount | number \| string | required | Number of reviews. Numeric values are auto-formatted with thousands separators. Strings are used verbatim. |
| source | string | undefined | Short attribution label rendered after the count (e.g. "on G2"). |
| sourceLogo | string | undefined | Image src for a third-party platform logo displayed beside the source label. |
| style | "compact" \| "expanded" | "compact" | Layout variant. Compact renders an inline row; expanded renders a stacked badge block. |
| className | string | undefined | Additional class name appended to the root element. |

## Customization (HTML/CSS variables)

Every customizable visual property is exposed as a CSS custom property on the component root class:

```css
.rav {
  --rav-star-color-filled: #f59e0b;
  --rav-star-color-empty: #d1d5db;
  --rav-star-size: 1.125rem;
  --rav-text-color: #111827;
  --rav-source-spacing: 0.375rem;
  --rav-gap: 0.25rem;
}
```

Override these in your own stylesheet to integrate the component into your brand:

```css
:root {
  --rav-star-color-filled: #f97316;
  --rav-star-size: 1.25rem;
}
```

## Accessibility

- The root element carries a descriptive `aria-label` expressing the full rating in natural language, for example: "Rated 4.5 out of 5 stars based on 12,847 reviews on G2".
- All individual star SVGs are `aria-hidden="true"` so screen readers skip them in favor of the root label.
- The source logo `<img>` uses `alt=""` (decorative) because the source name is already conveyed in the text label.
- No interactive elements are present; the component is display-only and requires no keyboard handling.

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). No IE support.

## Migration history

- v2.2: initial implementation
