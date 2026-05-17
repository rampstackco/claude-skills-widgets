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

Components that do not map cleanly to a documented pattern are utilities. The four v2.0 utilities are flagged as candidates for future pattern documentation; the twelve v2.1 and v2.2 components each map directly to a documented pattern.

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

v2.1: 6 pattern-mapped components covering CTA, lead capture, social proof, and urgency.

v2.2 (current): 6 more pattern-mapped components extending CTA (sticky bar, secondary), lead capture (multi-field, newsletter), and social proof (testimonial grid, review aggregate).

Total: 17 component implementations across 5 categories.

v2.3+ planned: multi-step form, exit-intent modal, customer logo strip variations, additional urgency patterns, Storybook integration.

## Cross-references

- Pattern documentation: `/patterns/`
- Pattern catalog overview: project root README
- Reference build (live components in production use): rampstack.co/demo/threshold
