# TestimonialGrid

**Implements pattern**: [`patterns/social-proof/05-testimonial-grid.md`](../../patterns/social-proof/05-testimonial-grid.md)
**Category**: Social Proof
**Stability**: v2.2

## What it is

A responsive grid of 3 to 6 customer testimonials displayed simultaneously, with an optional section eyebrow and headline. Each item in the grid is composed from the `SingleQuoteTestimonial` component, so all card styling, quote typography, and attribution layout come from that component's established styles. Use this when you want visitors to scan a breadth of endorsements at once without requiring any interaction.

## Composition

Each grid item is a `SingleQuoteTestimonial` instance. The `TestimonialGrid` component maps every `Testimonial` object to `SingleQuoteTestimonial` props:

- `Testimonial.quote` maps to `SingleQuoteTestimonial.quote`
- `Testimonial.name`, `Testimonial.title`, `Testimonial.company`, and `Testimonial.avatar` map into `SingleQuoteTestimonial.attribution` (an object with `name`, `title`, `company`, and `avatar`)
- The grid-level `style` prop ("card" or "minimal") passes through to each `SingleQuoteTestimonial.style`; when a testimonial has an `avatar`, the style becomes "with-headshot" instead

The grid itself provides only the container, optional eyebrow, optional headline, and the CSS Grid column layout.

## React usage

```tsx
import { TestimonialGrid } from "claude-skills-widgets/testimonial-grid";

{/* 3-column card grid (default) */}
<TestimonialGrid
  testimonials={[
    { quote: "...", name: "Jordan Lee", title: "VP Engineering", company: "Northwind" },
    { quote: "...", name: "Morgan Reyes", title: "CTO", company: "Crestfield Labs" },
    { quote: "...", name: "Casey Tran", title: "Head of Platform", company: "Harborview" },
  ]}
/>

{/* 2-column minimal grid with section heading */}
<TestimonialGrid
  testimonials={testimonials}
  columns={2}
  style="minimal"
  eyebrow="What customers say"
  headline="Trusted by teams shipping fast"
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/single-quote-testimonial/styles.css">
<link rel="stylesheet" href="path/to/testimonial-grid/styles.css">

<section class="tg tg--cols-3">
  <p class="tg__eyebrow">What customers say</p>
  <h2 class="tg__headline">Trusted by teams shipping fast</h2>
  <div class="tg__grid">
    <div class="tg__item">
      <figure class="sqt sqt--card">
        <blockquote class="sqt__quote">
          <p>Quote text here.</p>
        </blockquote>
        <figcaption class="sqt__attribution">
          <span>
            <span class="sqt__name">Jordan Lee</span>
            <span class="sqt__meta">VP Engineering, Northwind</span>
          </span>
        </figcaption>
      </figure>
    </div>
    <!-- repeat .tg__item for each testimonial -->
  </div>
</section>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| testimonials | Testimonial[] | required | Array of 3 to 6 testimonial objects |
| testimonials[].quote | string | required | The testimonial text |
| testimonials[].name | string | required | Speaker full name |
| testimonials[].title | string | undefined | Speaker job title |
| testimonials[].company | string | undefined | Employer or organization name |
| testimonials[].avatar | string | undefined | URL of the speaker headshot image |
| columns | 2 \| 3 | 3 | Number of columns at desktop widths |
| style | "minimal" \| "card" | "card" | Visual treatment applied to each item |
| eyebrow | string | undefined | Small label above the headline |
| headline | string | undefined | Section heading displayed above the grid |
| className | string | undefined | Extra class appended to the root element |

## Customization (HTML/CSS variables)

Every customizable layout property is exposed as a CSS custom property on `.tg`:

```css
.tg {
  --tg-gap: 1.5rem;
  --tg-column-min-width: 18rem;
  --tg-grid-padding: 0 0 4rem;
  --tg-eyebrow-color: #6b7280;
  --tg-eyebrow-size: 0.8125rem;
  --tg-headline-color: var(--brand-ink, #111827);
  --tg-headline-size: 2rem;
}
```

Override in your own stylesheet:

```css
:root {
  --tg-gap: 2rem;
  --tg-headline-size: 2.5rem;
}
```

## Accessibility

- Root element is a `<section>` for landmark navigation
- Headline uses a `<h2>` by default; adjust heading level in context if needed
- Eyebrow uses a `<p>` with the eyebrow class, not a heading, to avoid polluting outline
- Each testimonial card is a `<figure>` with a `<blockquote>` and `<figcaption>` (inherited from SingleQuoteTestimonial)
- No interactive elements in the grid; no keyboard navigation behavior required
- If linking individual cards to case studies, use descriptive link text rather than "Read more"
- Ensure 4.5:1 contrast for quote text against the card background color

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid with `auto-fill` and `minmax()`. No IE support.

## Migration history

- v2.2: initial implementation of `patterns/social-proof/05-testimonial-grid.md`
