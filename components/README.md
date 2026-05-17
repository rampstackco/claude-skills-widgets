# Components

Component implementations of the patterns documented in `/patterns/`. Each component ships as both React (TypeScript) and plain HTML/CSS so it works in any frontend stack.

## Catalog

| Component | Implements pattern | React | HTML/CSS |
|---|---|---|---|
| hero-product-mockup | Utility (dashboard mockup illustration) | yes | yes |
| trust-logo-strip | `patterns/social-proof/01-customer-logo-strip.md` | yes | yes |
| activation-funnel-inline | Utility (funnel / step visualization) | yes | yes |
| time-to-value-sparkline | Utility (inline data visualization) | yes | yes |
| flow-connector | Utility (layout connector) | yes | yes |
| primary-button-cta | `patterns/cta/01-primary-button-cta.md` | yes | yes |
| hero-stack-cta | `patterns/cta/06-hero-stack-primary-plus-secondary.md` | yes | yes |
| inline-single-field-form | `patterns/lead-capture/01-inline-single-field-form.md` | yes | yes |
| single-quote-testimonial | `patterns/social-proof/03-single-quote-testimonial.md` | yes | yes |
| customer-count | `patterns/social-proof/07-customer-count-display.md` | yes | yes |
| countdown-timer | `patterns/urgency/01-countdown-timer.md` | yes | yes |
| secondary-text-cta | `patterns/cta/02-secondary-text-cta.md` | yes | yes |
| sticky-bar-cta | `patterns/cta/03-sticky-bottom-bar-cta.md` | yes | yes |
| inline-multi-field-form | `patterns/lead-capture/02-inline-multi-field-form.md` | yes | yes |
| newsletter-signup-inline | `patterns/lead-capture/08-newsletter-signup-inline.md` | yes | yes |
| testimonial-grid | `patterns/social-proof/05-testimonial-grid.md` | yes | yes |
| review-aggregate | `patterns/social-proof/09-review-aggregate.md` | yes | yes |
| savings-calculator | `patterns/interactive-tooling/02-savings-calculator.md` | yes | yes |
| footer-cta-section | `patterns/cta/09-footer-cta-section.md` | yes | yes |
| multi-option-cta-cluster | `patterns/cta/13-multi-option-cta-cluster.md` | yes | yes |
| social-login-buttons | `patterns/lead-capture/11-social-login-buttons.md` | yes | yes |
| limited-time-offer-banner | `patterns/urgency/04-limited-time-offer-banner.md` | yes | yes |
| waitlist-position-display | `patterns/urgency/06-waitlist-position-display.md` | yes | yes |

Components that do not map cleanly to a documented pattern are utilities. The four v2.0 utilities are flagged as candidates for future pattern documentation; the eighteen v2.1, v2.2, and v2.3 components each map directly to a documented pattern.

## Architecture

Each component lives in its own folder:

```
components/{component-slug}/
  README.md           Component documentation, props API, usage examples
  styles.css          Shared CSS, used by both implementations
  react/
    {ComponentName}.tsx
    example.tsx       Usage example with default and customized props
  html/
    index.html        Static HTML using shared styles.css
```

Both implementations render the same DOM structure with the same class names. The shared CSS file means visual output stays consistent and styling is maintained in one place.

## Customization

All visual properties are exposed via CSS custom properties (CSS variables). Override them in your own stylesheet to integrate the component into your brand system. See each component's README for the full list of customization variables.

## License

MIT, same as the catalog. Use freely in commercial and non-commercial projects. Attribution appreciated but not required.

## Status

v2.0: 5 Threshold seed components (utility-leaning).

v2.1: 6 foundational pattern-mapped components.

v2.2: 6 more pattern-mapped components extending CTA, lead capture, and social proof.

v2.3 (current): 6 more components opening the interactive-tooling category and expanding urgency. Highlights:
- savings-calculator (first interactive-tooling component)
- footer-cta-section (last-chance conversion section)
- multi-option-cta-cluster (choice architecture for B2B and developer-vs-business splits)
- social-login-buttons (OAuth provider UI)
- limited-time-offer-banner (deadline-driven banner with countdown integration)
- waitlist-position-display (position and referral mechanic)

Total: 23 component implementations across 6 categories.

v2.4+ planned: showcase pages on rampstack.co for the rest of the v2.x components, Storybook integration, additional interactive-tooling (quizzes, configurators).

## Cross-references

- Pattern documentation: `/patterns/`
- Pattern catalog overview: project root README
- Reference build (live components in production use): rampstack.co/demo/threshold
