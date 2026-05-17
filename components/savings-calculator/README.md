# SavingsCalculator

**Implements pattern**: [`patterns/interactive-tooling/02-savings-calculator.md`](../../patterns/interactive-tooling/02-savings-calculator.md)
**Category**: Interactive Tooling
**Stability**: v2.3

## What it is

A config-driven calculator that takes user inputs, computes a result via a provided function, and displays formatted output. Used to quantify the value of switching to a product, choosing a plan, or making a financial decision. The generic API supports any savings or ROI calculation by passing inputs definitions and a compute function.

## React usage

```tsx
import { SavingsCalculator } from "claude-skills-widgets/savings-calculator";

<SavingsCalculator
  title="Calculate your annual savings"
  inputs={[
    { name: "currentSpend", label: "Current monthly spend", type: "number", prefix: "$", defaultValue: 5000 },
    { name: "teamSize", label: "Team size", type: "number", defaultValue: 10 },
  ]}
  compute={(values) => {
    const monthlySavings = values.currentSpend * 0.3;
    const annualSavings = monthlySavings * 12;
    return [
      { label: "Monthly savings", value: monthlySavings, format: "currency" },
      { label: "Annual savings", value: annualSavings, format: "currency", emphasized: true },
      { label: "Payback period", value: 2, format: "months" },
    ];
  }}
/>
```

## HTML usage

The HTML variant is a static structural example; the calculation logic uses inline vanilla JS. Users replace the compute function with their own.

```html
<link rel="stylesheet" href="path/to/savings-calculator/styles.css">

<section class="sc">
  <h2 class="sc__title">Calculate your annual savings</h2>
  <form class="sc__inputs" id="my-calc">
    <label class="sc__field">
      <span class="sc__label">Current monthly spend</span>
      <div class="sc__input-group">
        <span class="sc__prefix">$</span>
        <input class="sc__input" type="number" name="currentSpend" value="5000">
      </div>
    </label>
    <label class="sc__field">
      <span class="sc__label">Team size</span>
      <input class="sc__input" type="number" name="teamSize" value="10">
    </label>
  </form>
  <div class="sc__results" data-results>
    <!-- Populated by script -->
  </div>
</section>

<script>
  (function() {
    const form = document.getElementById('my-calc');
    const results = document.querySelector('[data-results]');

    function compute(values) {
      const monthlySavings = Number(values.currentSpend) * 0.3;
      const annualSavings = monthlySavings * 12;
      return [
        { label: 'Monthly savings', value: monthlySavings, format: 'currency' },
        { label: 'Annual savings', value: annualSavings, format: 'currency', emphasized: true },
        { label: 'Payback period', value: 2, format: 'months' },
      ];
    }

    function format(value, type) {
      if (type === 'currency') return '$' + Number(value).toLocaleString('en-US', { maximumFractionDigits: 0 });
      if (type === 'months') return value + ' months';
      if (type === 'percent') return value + '%';
      return String(value);
    }

    function render() {
      const formData = new FormData(form);
      const values = Object.fromEntries(formData);
      const computed = compute(values);
      results.innerHTML = computed.map(r =>
        `<div class="sc__result${r.emphasized ? ' sc__result--emphasized' : ''}">
          <span class="sc__result-label">${r.label}</span>
          <span class="sc__result-value">${format(r.value, r.format)}</span>
        </div>`
      ).join('');
    }

    form.addEventListener('input', render);
    render();
  })();
</script>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| title | string | optional | Calculator heading |
| description | string | optional | Supporting text below the heading |
| inputs | InputDef[] | required | Array of input field configs |
| compute | (values) => Result[] | required | Computation function called on every input change |
| layout | "stacked" | "side-by-side" | "stacked" | Inputs and results layout |
| className | string | undefined | Extra class for root |

Where `InputDef` is:

```typescript
type InputDef = {
  name: string;                          // form field name
  label: string;                         // visible label
  type: "number" | "text" | "select";
  defaultValue?: number | string;
  prefix?: string;                       // e.g. "$"
  suffix?: string;                       // e.g. "%"
  options?: { value: string; label: string }[];  // for select
  min?: number;
  max?: number;
  step?: number;
};
```

And `Result` is:

```typescript
type Result = {
  label: string;
  value: number | string;
  format?: "currency" | "percent" | "number" | "months" | "raw";
  emphasized?: boolean;                  // visually highlight (typically the headline value)
  prefix?: string;
  suffix?: string;
};
```

## Customization (CSS variables)

```css
.sc {
  --sc-bg: var(--brand-surface, white);
  --sc-text-color: var(--brand-ink, #102542);
  --sc-input-border: rgba(0, 0, 0, 0.12);
  --sc-input-focus-ring: var(--brand-accent, #1e5fcf);
  --sc-input-padding: 0.75rem;
  --sc-result-bg: rgba(0, 0, 0, 0.025);
  --sc-result-emphasized-bg: var(--brand-accent, #1e5fcf);
  --sc-result-emphasized-text: white;
  --sc-gap: 1rem;
  --sc-section-padding: 2rem;
  --sc-radius: 1rem;
}
```

## Accessibility

- Inputs use semantic `<label>` with htmlFor matching input id
- Number inputs respect min/max/step
- Results region has `aria-live="polite"` so screen readers announce updates
- Form has `noValidate` to allow continuous computation as user types without browser validation interrupting

## Honesty note

The pattern documentation emphasizes that calculator results must be honest. Inflated savings projections damage trust. The compute function should reflect realistic, defensible math. Document the calculation methodology near the calculator if users may ask.

## Browser support

Modern browsers. Uses `Intl.NumberFormat` for currency formatting and form-data iteration. No IE support.

## Migration history

- v2.3: initial implementation of `patterns/interactive-tooling/02-savings-calculator.md`
