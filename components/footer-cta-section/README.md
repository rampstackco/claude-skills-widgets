# FooterCTASection

**Implements pattern**: [patterns/cta/09-footer-cta-section.md](../../patterns/cta/09-footer-cta-section.md)
**Category**: CTA
**Stability**: v2.3

## What it is

A section-sized conversion surface placed immediately above the site footer, giving visitors who have read the full page a clear, explicit invitation to act. It composes PrimaryButtonCTA for the main action, and conditionally renders TrustLogoStrip (when `proofLogos` is supplied) and SingleQuoteTestimonial (when `proofQuote` is supplied) to add social proof below the CTA group.

## React usage

```tsx
import { FooterCTASection } from "claude-skills-widgets/footer-cta-section";

// Minimal centered version
<FooterCTASection
  headline="Ready to ship with confidence?"
  description="Join thousands of teams already moving faster."
  primaryCta={{ label: "Get started", href: "/signup", icon: "arrow-right" }}
/>

// Bold variant with a secondary CTA
<FooterCTASection
  headline="Start building today."
  primaryCta={{ label: "Start free trial", href: "/signup" }}
  secondaryCta={{ label: "Talk to sales", href: "/contact", type: "text-link" }}
  variant="bold"
  alignment="center"
/>

// With social proof: logos and a quote
<FooterCTASection
  headline="Trusted by engineering teams worldwide."
  primaryCta={{ label: "Get started", href: "/signup" }}
  proofLogos={{
    eyebrow: "Used at companies like",
    logos: [
      { name: "Acme Corp", src: "/logos/acme.svg" },
      { name: "Globex", src: "/logos/globex.svg" },
    ],
  }}
  proofQuote={{
    quote: "Switching was the easiest infrastructure decision we made all year.",
    attribution: { name: "Jordan Lee", title: "VP Engineering", company: "Northwind" },
  }}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/primary-button-cta/styles.css">
<link rel="stylesheet" href="path/to/footer-cta-section/styles.css">

<!-- Subtle centered (default) -->
<section class="fcs fcs--subtle fcs--center" aria-label="Get started">
  <div class="fcs__inner">
    <h2 class="fcs__headline">Ready to ship with confidence?</h2>
    <p class="fcs__description">Join thousands of teams already moving faster.</p>
    <div class="fcs__actions">
      <a class="pbc pbc--solid pbc--rounded pbc--with-icon" href="/signup">
        Get started
        <svg class="pbc__icon" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/>
        </svg>
      </a>
    </div>
  </div>
</section>
```

When rendering `proofLogos`, also link `../../trust-logo-strip/styles.css` and include the `.tls` structure inside `.fcs__proof`. When rendering `proofQuote`, also link `../../single-quote-testimonial/styles.css` and include the `.sqt` structure inside `.fcs__proof`.

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| headline | string | required | Large heading text at the top of the section |
| description | string | undefined | Supporting paragraph beneath the headline |
| primaryCta | `{ label: string; href?: string; variant?: "solid" \| "outlined"; icon?: "arrow-right" \| "chevron-right" }` | required | Primary action; rendered via PrimaryButtonCTA |
| secondaryCta | `{ label: string; href?: string; type?: "outlined" \| "text-link" }` | undefined | Optional secondary action below the primary button |
| proofLogos | `{ eyebrow?: string; logos: { name: string; src: string; href?: string }[] }` | undefined | When provided, renders a TrustLogoStrip below the action group |
| proofQuote | `{ quote: string; attribution: { name: string; title?: string; company?: string } }` | undefined | When provided, renders a SingleQuoteTestimonial as an anchor quote |
| alignment | `"center" \| "left"` | `"center"` | Text and action alignment |
| variant | `"subtle" \| "bold"` | `"subtle"` | Subtle uses the default surface background; bold applies a brand-accent background |
| className | string | undefined | Extra class appended to the root element |

## Conditional composition

- `proofLogos` renders only when the prop is defined and `logos` contains at least one entry. The TrustLogoStrip `eyebrow` defaults to `"Trusted by teams at"` when `proofLogos.eyebrow` is not supplied.
- `proofQuote` renders only when the prop is defined. It uses SingleQuoteTestimonial in `"minimal"` style so it inherits the section alignment naturally.
- Both `proofLogos` and `proofQuote` can appear together; logos render first, quote second, both wrapped in `.fcs__proof`.

## Customization (HTML/CSS variables)

Every customizable visual property is exposed as a CSS custom property on the component root class:

```css
.fcs {
  --fcs-bg: var(--brand-surface, #ffffff);
  --fcs-bold-bg: var(--brand-accent, #1e5fcf);
  --fcs-text-color: var(--brand-ink, #111827);
  --fcs-bold-text-color: #ffffff;
  --fcs-padding: 5rem 1.5rem;
  --fcs-heading-size: 2.5rem;
  --fcs-max-width: 56rem;
}
```

Override these in your own stylesheet to integrate the component into your brand:

```css
:root {
  --fcs-bold-bg: #0f172a;
  --fcs-heading-size: 3rem;
}
```

## Accessibility

- The root element is a `<section>` with `aria-label` equal to the headline text, making it a distinct landmark for screen readers.
- The headline is an `<h2>` by default; adjust heading level in context to preserve document outline.
- The primary and secondary CTAs carry descriptive text. If the same label ("Get started") appears elsewhere on the page, use `aria-label` on the anchor to disambiguate (e.g., `aria-label="Get started with the free plan"`).
- Bold variant color combinations are checked for a minimum 4.5:1 contrast ratio on default tokens.
- Logo images in TrustLogoStrip include `alt` text from the `name` field.

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). No IE support.

## Migration history

- v2.3: initial implementation of `patterns/cta/09-footer-cta-section.md`
