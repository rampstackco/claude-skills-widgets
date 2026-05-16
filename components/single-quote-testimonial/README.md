# SingleQuoteTestimonial

**Implements pattern**: [`patterns/social-proof/03-single-quote-testimonial.md`](../../patterns/social-proof/03-single-quote-testimonial.md)
**Category**: Social Proof
**Stability**: v2.1

## What it is

A single, prominently displayed customer quote with full attribution (name, optional title, optional company, optional headshot and company logo). It occupies a section of its own or a visually isolated region within a page, giving the quote full visual weight. Use it when one strong, specific quote reinforces a product claim better than a grid or carousel would.

## React usage

```tsx
import { SingleQuoteTestimonial } from "claude-skills-widgets/single-quote-testimonial";

{/* Minimal: centered quote, no background */}
<SingleQuoteTestimonial
  quote="Shipping confidence went up immediately after we switched. Our on-call rotation is genuinely calm now."
  attribution={{ name: "Jordan Lee", title: "VP Engineering", company: "Northwind" }}
/>

{/* Card: subtle background and border */}
<SingleQuoteTestimonial
  quote="The onboarding cut our setup time from days to under an hour."
  attribution={{ name: "Morgan Reyes", title: "CTO", company: "Crestfield Labs" }}
  style="card"
/>

{/* With headshot: avatar image beside attribution */}
<SingleQuoteTestimonial
  quote="The integration team was responsive and the documentation was actually accurate."
  attribution={{
    name: "Casey Tran",
    title: "Head of Platform",
    company: "Harborview",
    avatar: "https://example.com/avatars/casey.jpg",
    companyLogo: "https://example.com/logos/harborview.svg",
  }}
  style="with-headshot"
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/single-quote-testimonial/styles.css">

<!-- Minimal variant -->
<figure class="sqt sqt--minimal">
  <blockquote class="sqt__quote">
    <p>Shipping confidence went up immediately after we switched.</p>
  </blockquote>
  <figcaption class="sqt__attribution">
    <span>
      <span class="sqt__name">Jordan Lee</span>
      <span class="sqt__meta">VP Engineering, Northwind</span>
    </span>
  </figcaption>
</figure>

<!-- Card variant -->
<figure class="sqt sqt--card">
  <blockquote class="sqt__quote">
    <p>The onboarding cut our setup time from days to under an hour.</p>
  </blockquote>
  <figcaption class="sqt__attribution">
    <span>
      <span class="sqt__name">Morgan Reyes</span>
      <span class="sqt__meta">CTO, Crestfield Labs</span>
    </span>
  </figcaption>
</figure>

<!-- With headshot variant -->
<figure class="sqt sqt--with-headshot">
  <blockquote class="sqt__quote">
    <p>The integration team was responsive and the documentation was actually accurate.</p>
  </blockquote>
  <figcaption class="sqt__attribution">
    <img class="sqt__avatar" src="avatar.jpg" alt="Casey Tran" width="48" height="48">
    <span>
      <span class="sqt__name">Casey Tran</span>
      <span class="sqt__meta">Head of Platform, Harborview</span>
      <img class="sqt__logo" src="logo.svg" alt="Harborview">
    </span>
  </figcaption>
</figure>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| quote | string | required | The testimonial text displayed inside the blockquote |
| attribution | object | required | Speaker identity (see sub-props below) |
| attribution.name | string | required | Speaker full name |
| attribution.title | string | undefined | Speaker job title |
| attribution.company | string | undefined | Employer or organization name |
| attribution.avatar | string | undefined | URL of the speaker headshot image |
| attribution.companyLogo | string | undefined | URL of the company logo image |
| style | "minimal" \| "card" \| "with-headshot" | "minimal" | Visual treatment |
| className | string | undefined | Extra class appended to the root element |

## Customization (CSS variables)

```css
.sqt {
  --sqt-quote-font-size: 1.25rem;
  --sqt-quote-color: var(--brand-ink, #111827);
  --sqt-quote-line-height: 1.7;
  --sqt-name-color: var(--brand-ink, #111827);
  --sqt-meta-color: #6b7280;
  --sqt-card-bg: var(--brand-surface, #f9fafb);
  --sqt-card-border-color: #e5e7eb;
  --sqt-card-border-radius: 0.75rem;
  --sqt-card-padding: 2rem;
  --sqt-avatar-size: 3rem;
  --sqt-max-width: 42rem;
}
```

Override in your own stylesheet to match your brand:

```css
:root {
  --sqt-quote-font-size: 1.375rem;
  --sqt-card-bg: #f0f4ff;
  --sqt-card-border-color: #c7d4f0;
}
```

## Accessibility

- Root element is a semantic `<figure>`, quote is a `<blockquote>`, attribution is a `<figcaption>`. No div-faked blockquotes.
- Avatar image requires a descriptive `alt` attribute (speaker name is sufficient).
- Company logo image uses the company name as `alt` text; it is not decorative.
- The decorative opening quotation mark is generated via CSS `::before` and is therefore invisible to screen readers.
- No interactive elements; no keyboard-specific behavior needed.

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS custom properties and `object-fit: cover`; no IE support.

## Migration history

- v2.1: initial implementation of `patterns/social-proof/03-single-quote-testimonial.md`
