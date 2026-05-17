# ProductFeatureConfigurator

**Implements pattern**: [`patterns/interactive-tooling/07-product-feature-configurator.md`](../../patterns/interactive-tooling/07-product-feature-configurator.md)
**Category**: Interactive Tooling
**Stability**: v2.5

## What it is

An interactive product builder where users select options across multiple dimensions (storage, color, feature modules, materials) and see a running price total update with each choice. The output is a composed product configuration with a final CTA, not a tier recommendation. Use this on product pages where customization is a core part of the value proposition.

## React usage

```tsx
import { ProductFeatureConfigurator } from "claude-skills-widgets/product-feature-configurator";

<ProductFeatureConfigurator
  title="Build your laptop"
  description="Choose your configuration and see the price update as you go."
  basePrice={999}
  currency="USD"
  groups={[
    {
      name: "processor",
      label: "Processor",
      description: "Choose the chip that fits your workload.",
      type: "radio",
      required: true,
      options: [
        { value: "base", label: "Core i5", description: "Everyday computing", price: 0 },
        { value: "pro", label: "Core i7", description: "Heavy multitasking", price: 200 },
        { value: "max", label: "Core i9", description: "Professional workloads", price: 450 },
      ],
    },
    {
      name: "storage",
      label: "Storage",
      type: "select",
      required: true,
      options: [
        { value: "256", label: "256 GB SSD", price: 0 },
        { value: "512", label: "512 GB SSD", price: 100 },
        { value: "1tb",  label: "1 TB SSD",  price: 200 },
      ],
    },
    {
      name: "addons",
      label: "Add-ons",
      description: "Optional extras you can add to any configuration.",
      type: "checkbox",
      options: [
        { value: "warranty", label: "3-year extended warranty", price: 149 },
        { value: "office",   label: "Productivity suite license", price: 99  },
      ],
    },
  ]}
  finalCta={{ label: "Order now", href: "/checkout" }}
  onConfigChange={(selections, totalPrice) => {
    console.log(selections, totalPrice);
  }}
/>
```

## HTML usage

(See `html/index.html` for a self-contained example. A vanilla JS IIFE updates the running total and summary region as the user changes each option. The final CTA uses the real `.pbc` class names from `primary-button-cta/styles.css`.)

```html
<link rel="stylesheet" href="path/to/primary-button-cta/styles.css">
<link rel="stylesheet" href="path/to/product-feature-configurator/styles.css">

<section class="pfc pfc--stacked" id="pfc">
  <!-- header, groups, summary, actions rendered by the JS IIFE -->
</section>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| title | string | undefined | Section heading |
| description | string | undefined | Supporting copy below the heading |
| basePrice | number | required | Starting price before any option deltas are applied |
| currency | string | `"USD"` | ISO 4217 currency code passed to `Intl.NumberFormat` |
| groups | OptionGroup[] | required | Option group definitions |
| finalCta | `{ label: string; href: string }` | undefined | Label and destination for the final action button |
| onConfigChange | `(selections, totalPrice) => void` | undefined | Called whenever a selection changes |
| layout | `"stacked" \| "side-by-side"` | `"stacked"` | Controls whether groups and summary sit vertically or in a two-column split |
| showPreview | boolean | `false` | When true, shows an image preview for the most recently selected option per group that carries an `imageSrc` |
| className | string | undefined | Extra class appended to the root element |

Where `OptionGroup`:

```typescript
type OptionGroup = {
  name: string;
  label: string;
  description?: string;
  type: "select" | "radio" | "checkbox";
  required?: boolean;
  options: {
    value: string;
    label: string;
    description?: string;
    price?: number;
    imageSrc?: string;
  }[];
};
```

## Customization (CSS variables)

```css
.pfc {
  --pfc-bg: var(--brand-surface, #ffffff);
  --pfc-text-color: var(--brand-ink, #102542);
  --pfc-muted-color: rgba(16, 37, 66, 0.55);
  --pfc-accent: var(--brand-accent, #1e5fcf);
  --pfc-group-bg: rgba(0, 0, 0, 0.025);
  --pfc-option-border: rgba(0, 0, 0, 0.12);
  --pfc-option-bg-selected: rgba(30, 95, 207, 0.07);
  --pfc-preview-bg: rgba(0, 0, 0, 0.03);
  --pfc-summary-bg: rgba(0, 0, 0, 0.03);
  --pfc-price-color: var(--brand-accent, #1e5fcf);
  --pfc-radius: 0.875rem;
  --pfc-padding: 2rem;
  --pfc-gap: 1.25rem;
}
```

Override in your own stylesheet to integrate with your brand:

```css
:root {
  --pfc-accent: #d4422a;
  --pfc-option-bg-selected: rgba(212, 66, 42, 0.07);
  --pfc-price-color: #d4422a;
}
```

## Accessibility

- Each option group renders as a `<fieldset>` with a `<legend>` for proper group labeling
- Radio groups use `type="radio"` inputs with shared `name` attributes; screen readers announce the group context automatically
- Checkbox groups use `type="checkbox"` inputs; each is individually labeled
- Required groups carry `aria-required="true"` on the fieldset
- The summary and total region uses `aria-live="polite"` so that price changes are announced without interrupting the user
- When `showPreview` is active, preview images use descriptive `alt` text derived from the option label
- The final CTA composes PrimaryButtonCTA, which meets the 44px minimum touch target requirement and supplies a visible focus ring

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid for the side-by-side layout. No IE support.

## Migration history

- v2.5: initial implementation of `patterns/interactive-tooling/07-product-feature-configurator.md`
