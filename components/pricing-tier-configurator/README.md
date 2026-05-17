# PricingTierConfigurator

**Implements pattern**: [`patterns/interactive-tooling/06-pricing-tier-configurator.md`](../../patterns/interactive-tooling/06-pricing-tier-configurator.md)
**Category**: Interactive Tooling
**Stability**: v2.5

## What it is

Interactive pricing display where user inputs (seat count, usage volume, feature requirements) determine which of N visible tiers is recommended. The recommended tier highlights visually. Common on B2B SaaS pricing pages.

## React usage

```tsx
import { PricingTierConfigurator } from "claude-skills-widgets/pricing-tier-configurator";

<PricingTierConfigurator
  title="Find your plan"
  description="Adjust the inputs below; we will recommend the right tier."
  tiers={[
    {
      slug: "starter",
      name: "Starter",
      price: "$29/mo",
      features: ["Up to 5 users", "10GB storage", "Email support"],
      cta: { label: "Choose Starter", href: "/signup?plan=starter" },
    },
    {
      slug: "pro",
      name: "Pro",
      price: "$99/mo",
      features: ["Up to 25 users", "100GB storage", "Priority support", "Advanced analytics"],
      cta: { label: "Choose Pro", href: "/signup?plan=pro" },
      badge: "Most popular",
    },
    {
      slug: "enterprise",
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited users", "Unlimited storage", "Dedicated support", "SSO + audit logs"],
      cta: { label: "Contact sales", href: "/sales" },
    },
  ]}
  inputs={[
    {
      name: "users",
      label: "How many users do you need?",
      type: "slider",
      min: 1,
      max: 100,
      step: 1,
      defaultValue: 5,
    },
    {
      name: "needsAnalytics",
      label: "Need advanced analytics?",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "needsSso",
      label: "Need SSO?",
      type: "checkbox",
      defaultValue: false,
    },
  ]}
  recommend={(values) => {
    const users = Number(values.users) || 0;
    if (values.needsSso) return "enterprise";
    if (users > 25 || values.needsAnalytics) return "pro";
    return "starter";
  }}
/>
```

## HTML usage

(See `html/index.html` for a self-contained example. Inline vanilla JS updates the recommendation in real time as inputs change.)

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| title | string | undefined | Section heading |
| description | string | undefined | Supporting copy below the heading |
| tiers | Tier[] | required | Pricing tier definitions |
| inputs | Input[] | required | Inputs the user adjusts |
| recommend | (values) => string | required | Returns the slug of the recommended tier |
| layout | "horizontal" \| "vertical" | "horizontal" | Tier layout direction |
| onTierChange | (slug) => void | undefined | Called when recommendation changes |
| className | string | undefined | Extra class for root |

Where `Tier`:

```typescript
type Tier = {
  slug: string;
  name: string;
  description?: string;
  price: string;            // pre-formatted ("$29/mo", "Custom")
  features: string[];
  cta: { label: string; href: string };
  badge?: string;           // "Most popular", "Best value"
};
```

Where `Input`:

```typescript
type Input = {
  name: string;
  label: string;
  type: "slider" | "select" | "checkbox";
  defaultValue?: number | string | boolean;
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];  // for select
  helpText?: string;
};
```

## Customization (CSS variables)

```css
.ptc {
  --ptc-bg: var(--brand-surface, white);
  --ptc-text-color: var(--brand-ink, #102542);
  --ptc-muted-color: rgba(16, 37, 66, 0.6);
  --ptc-accent: var(--brand-accent, #1e5fcf);
  --ptc-tier-bg: white;
  --ptc-tier-border: rgba(0, 0, 0, 0.1);
  --ptc-tier-recommended-bg: rgba(30, 95, 207, 0.04);
  --ptc-tier-recommended-border: var(--ptc-accent);
  --ptc-tier-recommended-shadow: 0 8px 32px -8px rgba(30, 95, 207, 0.25);
  --ptc-input-bg: rgba(0, 0, 0, 0.025);
  --ptc-input-border: rgba(0, 0, 0, 0.12);
  --ptc-badge-bg: var(--ptc-accent);
  --ptc-badge-text: white;
  --ptc-radius: 1rem;
  --ptc-section-padding: 2rem;
  --ptc-gap: 1.5rem;
}
```

## Accessibility

- Recommendation update region uses `aria-live="polite"` so screen readers announce changes
- Slider inputs have a visible value display plus min/max labels
- Checkboxes have associated labels via useId
- Recommended tier has visually-hidden text ("Recommended based on your inputs") for screen readers
- Each tier's CTA composes PrimaryButtonCTA (inherits its accessibility)

## Honesty note

The recommendation logic should reflect actual product fit. An always-positive "Pro is right for you" response across every input combination reduces trust. Document the recommendation logic in copy near the configurator so users can verify it matches their needs.

## Browser support

Modern browsers. Uses CSS Grid for tier layout.

## Migration history

- v2.5: initial implementation of `patterns/interactive-tooling/06-pricing-tier-configurator.md`
