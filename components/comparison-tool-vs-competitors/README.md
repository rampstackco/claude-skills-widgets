# ComparisonToolVsCompetitors

**Implements pattern**: [`patterns/interactive-tooling/08-comparison-tool-vs-competitors.md`](../../patterns/interactive-tooling/08-comparison-tool-vs-competitors.md)
**Category**: Interactive Tooling
**Stability**: v2.5

## What it is

A feature comparison table that places your product alongside 2 to 4 competitors. Supports boolean (yes/no), text, and rating feature values, optional category-group toggles for collapsing rows by topic, and a composed PrimaryButtonCTA at the footer. Use it on dedicated comparison pages or pricing sections where prospects are actively evaluating alternatives.

## React usage

```tsx
import { ComparisonToolVsCompetitors } from "claude-skills-widgets/comparison-tool-vs-competitors";

<ComparisonToolVsCompetitors
  title="How we compare"
  description="An honest look at how Our Product stacks up against the alternatives."
  competitors={[
    { name: "Our Product", highlighted: true },
    { name: "Competitor A" },
    { name: "Competitor B" },
  ]}
  features={[
    {
      label: "Free trial",
      values: {
        "Our Product": { type: "boolean", value: true },
        "Competitor A": { type: "boolean", value: true },
        "Competitor B": { type: "boolean", value: false },
      },
    },
    {
      label: "Support quality",
      values: {
        "Our Product": { type: "rating", value: 5, max: 5 },
        "Competitor A": { type: "rating", value: 3, max: 5 },
        "Competitor B": { type: "rating", value: 2, max: 5 },
      },
    },
    {
      label: "API access",
      values: {
        "Our Product": { type: "text", value: "Full REST + GraphQL" },
        "Competitor A": { type: "text", value: "REST only" },
        "Competitor B": { type: "text", value: "None" },
      },
    },
  ]}
  finalCta={{ label: "Get started free", href: "/signup" }}
/>
```

### With category toggles

```tsx
<ComparisonToolVsCompetitors
  title="Feature breakdown"
  competitors={[
    { name: "Our Product", highlighted: true },
    { name: "Competitor A" },
  ]}
  features={[
    {
      label: "Two-factor auth",
      category: "Security",
      values: {
        "Our Product": { type: "boolean", value: true },
        "Competitor A": { type: "boolean", value: false },
      },
    },
    {
      label: "SSO / SAML",
      category: "Security",
      values: {
        "Our Product": { type: "boolean", value: true },
        "Competitor A": { type: "boolean", value: false },
      },
    },
    {
      label: "Live chat",
      category: "Support",
      values: {
        "Our Product": { type: "boolean", value: true },
        "Competitor A": { type: "boolean", value: false },
      },
    },
  ]}
  showCategoryToggles={true}
  defaultExpandedCategories={["Security", "Support"]}
  finalCta={{ label: "Start your free trial", href: "/signup" }}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/primary-button-cta/styles.css">
<link rel="stylesheet" href="path/to/comparison-tool-vs-competitors/styles.css">

<!-- See html/index.html for the complete self-contained example with vanilla JS category toggles -->
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| title | string | undefined | Section heading |
| description | string | undefined | Supporting copy below the heading |
| competitors | Competitor[] | required | Ordered list of columns; set `highlighted: true` on your product |
| features | FeatureRow[] | required | Rows in the table; include `category` for grouping |
| showCategoryToggles | boolean | false | When true and rows have `category` values, renders collapsible category headers |
| defaultExpandedCategories | string[] | [] | Category names that start expanded when `showCategoryToggles` is true |
| finalCta | `{ label: string; href: string }` | undefined | Footer CTA composed from PrimaryButtonCTA |
| className | string | undefined | Extra class applied to the root element |

Where `Competitor`:

```typescript
type Competitor = {
  name: string;
  logoSrc?: string;   // URL to a logo image shown in the column header
  highlighted?: boolean; // true marks "your product"; gets distinct column styling
};
```

Where `FeatureValue`:

```typescript
type FeatureValue =
  | { type: "boolean"; value: boolean }
  | { type: "text"; value: string }
  | { type: "rating"; value: number; max?: number };
```

Where `FeatureRow`:

```typescript
type FeatureRow = {
  label: string;
  description?: string;   // tooltip or sub-label shown below the feature name
  category?: string;      // group label for category toggle rows
  values: Record<string, FeatureValue>; // keyed by competitor name
};
```

## Customization (CSS variables)

Every customizable visual property is exposed as a CSS custom property on the component root class:

```css
.cmp {
  --cmp-bg: var(--brand-surface, #ffffff);
  --cmp-cell-bg: var(--brand-surface, #ffffff);
  --cmp-cell-bg-highlighted: rgba(30, 95, 207, 0.05);
  --cmp-border: rgba(0, 0, 0, 0.1);
  --cmp-text-color: var(--brand-ink, #102542);
  --cmp-muted-color: rgba(16, 37, 66, 0.55);
  --cmp-icon-check: var(--brand-accent, #1e5fcf);
  --cmp-icon-x: rgba(16, 37, 66, 0.3);
  --cmp-rating-filled: var(--brand-accent, #1e5fcf);
  --cmp-rating-empty: rgba(16, 37, 66, 0.15);
  --cmp-radius: 1rem;
  --cmp-cell-padding: 0.875rem 1rem;
  --cmp-section-padding: 2rem;
}
```

Override these in your own stylesheet to match your brand:

```css
:root {
  --cmp-icon-check: #0d7a3e;
  --cmp-cell-bg-highlighted: rgba(13, 122, 62, 0.05);
}
```

## Accessibility

- Uses a real `<table>` with `<thead>` and `<tbody>` for full screen-reader navigation by row and column
- Competitor columns use `<th scope="col">`; feature row labels use `<th scope="row">`
- Boolean check icons carry `aria-label="Yes"` and x icons carry `aria-label="No"`
- Rating icons carry `aria-label` describing the numeric value (for example "4 out of 5")
- The highlighted column header includes a visually-hidden "(Our pick)" indicator for screen readers
- Category toggle buttons use `aria-expanded` (true/false) to communicate open/closed state
- The table wraps in an `overflow-x: auto` container for mobile horizontal scroll, keeping the native table semantics intact

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS custom properties and `overflow-x: auto`. No IE support.

## Migration history

- v2.5: initial implementation of `patterns/interactive-tooling/08-comparison-tool-vs-competitors.md`
