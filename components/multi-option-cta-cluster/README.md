# MultiOptionCTACluster

**Implements pattern**: [`patterns/cta/13-multi-option-cta-cluster.md`](../../patterns/cta/13-multi-option-cta-cluster.md)
**Category**: CTA
**Stability**: v2.3

## What it is

A section that presents 2 to 4 equal-weight action options side by side, each targeting a distinct visitor segment or conversion path. Use it when your product genuinely serves different audiences whose onboarding or destination differs substantially (for example: developer vs. business, free tier vs. paid trial vs. sales demo). Each option composes a `PrimaryButtonCTA` for its action button.

## React usage

```tsx
import { MultiOptionCTACluster } from "claude-skills-widgets/multi-option-cta-cluster";

// Two-path segment split
<MultiOptionCTACluster
  eyebrow="Choose your path"
  headline="Where do you want to start?"
  options={[
    { label: "Start building", href: "/docs/quickstart", description: "API access, SDKs, and a sandbox environment." },
    { label: "Talk to sales", href: "/contact", description: "Custom pricing, SLAs, and onboarding support." },
  ]}
/>

// Three options, horizontal layout (default)
<MultiOptionCTACluster
  options={[
    { label: "Start free", href: "/signup/free" },
    { label: "Start trial", href: "/signup/trial" },
    { label: "Book a demo", href: "/demo" },
  ]}
/>

// Stacked layout
<MultiOptionCTACluster
  layout="stacked"
  options={[
    { label: "For developers", href: "/docs", icon: "arrow-right" },
    { label: "For teams", href: "/teams", icon: "arrow-right" },
  ]}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/primary-button-cta/styles.css">
<link rel="stylesheet" href="path/to/multi-option-cta-cluster/styles.css">

<section class="moc moc--horizontal">
  <p class="moc__eyebrow">Choose your path</p>
  <h2 class="moc__headline">Where do you want to start?</h2>
  <div class="moc__options">
    <div class="moc__option">
      <a class="pbc pbc--solid pbc--rounded" href="/docs/quickstart">Start building</a>
      <p class="moc__option-description">API access, SDKs, and a sandbox environment.</p>
    </div>
    <div class="moc__option">
      <a class="pbc pbc--solid pbc--rounded" href="/contact">Talk to sales</a>
      <p class="moc__option-description">Custom pricing, SLAs, and onboarding support.</p>
    </div>
  </div>
</section>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| options | `Option[]` | required | 2 to 4 options; more than 4 becomes a navigation problem rather than a CTA pattern |
| layout | `"horizontal"` \| `"stacked"` | `"horizontal"` | Horizontal arranges options in a row (stacks on narrow screens); stacked arranges them in a column at all viewports |
| eyebrow | string | undefined | Short label rendered above the headline, useful for segment framing |
| headline | string | undefined | Section heading rendered above the option row |
| className | string | undefined | Extra class appended to the root `<section>` |

### Option shape

| Field | Type | Default | Description |
|---|---|---|---|
| label | string | required | Button text passed to `PrimaryButtonCTA` |
| href | string | required | Destination URL passed to `PrimaryButtonCTA` |
| description | string | undefined | Optional short sentence rendered below the button to clarify the path |
| variant | `"solid"` \| `"outlined"` | `"solid"` | Passed to `PrimaryButtonCTA`. See equal-weight note below. |
| icon | `"arrow-right"` \| `"chevron-right"` | undefined | Trailing icon passed to `PrimaryButtonCTA` |

### Equal-weight note

The defining purpose of this pattern is equal visual weight across all options. All options default to `variant: "solid"` so no option is visually dominant. Giving different options different `variant` values (one solid, one outlined) introduces hierarchy and converts the cluster into a primary-plus-secondary pattern. Do this only when you intentionally want one path to feel more prominent than another; at that point, consider using `06-hero-stack-primary-plus-secondary.md` instead.

## Customization (HTML/CSS variables)

```css
.moc {
  --moc-gap: 1rem;
  --moc-option-min-width: 10rem;
  --moc-eyebrow-color: var(--brand-accent, #1e5fcf);
  --moc-eyebrow-size: 0.8125rem;
  --moc-headline-color: var(--brand-ink, #102542);
  --moc-headline-size: 1.75rem;
  --moc-description-color: var(--brand-muted, #4b5563);
  --moc-description-size: 0.9375rem;
}
```

Override these in your own stylesheet to integrate the component into your brand:

```css
:root {
  --moc-gap: 1.5rem;
  --moc-headline-color: #0a0a0a;
  --moc-description-color: #6b7280;
}
```

## Accessibility

- Root is a `<section>` element; supply an `eyebrow` or `headline` to give it a meaningful heading for landmark navigation
- Each option's button label must be unique and descriptive so screen readers can distinguish options when navigating by button list
- If the segment name alone is not self-evident (for example a tier code rather than a plain name), pass a more descriptive label string to the option rather than relying on visual context
- Keyboard users navigate between options in source order; place the most important option first so it is reached first
- `PrimaryButtonCTA` preserves focus rings on all buttons; do not override `outline` without a replacement
- On mobile the option row stacks vertically; the topmost stacked option receives focus first, so order options from highest to lowest priority in the `options` array

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). No IE support. Uses CSS `gap` and `flex-wrap` for layout; supported in all modern browsers.

## Migration history

- v2.3: initial implementation
