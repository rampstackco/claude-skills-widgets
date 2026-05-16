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

Components that do not map cleanly to a documented pattern are utilities. Four of the five v2.0 components are utilities; only `trust-logo-strip` has a direct pattern mapping. The utilities are flagged as candidates for future pattern documentation.

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

v2.0 (initial release): 5 Threshold seed components. Components currently cover utility patterns and one social-proof pattern.

v2.1 onwards: implementations of patterns from `/patterns/cta/`, `/patterns/lead-capture/`, and additional categories. Roughly batched by category.

v2.2+: tooling additions (Storybook integration, automated visual checks, NPM package publishing).

## Cross-references

- Pattern documentation: `/patterns/`
- Pattern catalog overview: project root README
- Reference build (live components in production use): rampstack.co/demo/threshold
