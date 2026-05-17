# MultiStepRecommendationWizard

**Implements pattern**: [`patterns/interactive-tooling/05-multi-step-recommendation-wizard.md`](../../patterns/interactive-tooling/05-multi-step-recommendation-wizard.md)
**Category**: Interactive Tooling
**Stability**: v2.4

## What it is

A guided multi-step flow that asks three to five targeted questions about the user's needs and situation, then outputs a specific recommendation card (a plan, product, or tier). Unlike a scored assessment, the wizard matches answers directly to curated recommendation objects, so every user gets a named result that feels tailored rather than a number they must interpret.

## React usage

```tsx
import { MultiStepRecommendationWizard } from "claude-skills-widgets/multi-step-recommendation-wizard";

<MultiStepRecommendationWizard
  title="Find your plan"
  description="Answer three questions and we will point you to the right starting point."
  questions={[
    {
      id: "team-size",
      text: "How large is your team?",
      options: [
        { value: "solo", label: "Just me" },
        { value: "small", label: "2-10 people" },
        { value: "large", label: "11+ people", nextQuestion: "use-case-enterprise" },
      ],
    },
    {
      id: "use-case",
      text: "What is your primary goal?",
      options: [
        { value: "ship", label: "Ship product faster" },
        { value: "collaborate", label: "Improve team collaboration" },
      ],
    },
    {
      id: "use-case-enterprise",
      text: "Which department leads the rollout?",
      options: [
        { value: "eng", label: "Engineering" },
        { value: "ops", label: "Operations" },
      ],
    },
  ]}
  recommendations={[
    {
      id: "starter",
      title: "Starter Plan",
      description: "Built for solo builders who need to move fast without the overhead.",
      ctaLabel: "Get started free",
      ctaHref: "/signup?plan=starter",
      matchAnswers: { "team-size": "solo", "use-case": "ship" },
    },
    {
      id: "team",
      title: "Team Plan",
      description: "Collaboration tools and shared workspaces for small teams.",
      ctaLabel: "Start a team trial",
      ctaHref: "/signup?plan=team",
      matchAnswers: { "team-size": "small" },
    },
    {
      id: "enterprise",
      title: "Enterprise Plan",
      description: "Advanced controls and dedicated support for larger organizations.",
      ctaLabel: "Talk to sales",
      ctaHref: "/contact/sales",
      matchAnswers: { "team-size": "large" },
    },
  ]}
  defaultRecommendation={{
    id: "default",
    title: "Not sure yet?",
    description: "Book a short call and we will walk through the options together.",
    ctaLabel: "Schedule a call",
    ctaHref: "/contact",
    matchAnswers: {},
  }}
/>
```

## HTML usage

Static structure driven by a vanilla JS IIFE with no globals. Replace the `config` object at the top of the script block with your own questions and recommendations.

```html
<link rel="stylesheet" href="path/to/multi-step-recommendation-wizard/styles.css">

<section class="mrw" id="wizard">
  <!-- Populated by the IIFE script -->
</section>

<script src="path/to/multi-step-recommendation-wizard/html/index.html"></script>
```

Full self-contained example in `html/index.html`.

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| title | string | undefined | Heading shown on the landing screen |
| description | string | undefined | Supporting copy on the landing screen |
| questions | WizardQuestion[] | required | Ordered array of questions; branching is controlled via option-level `nextQuestion` |
| recommendations | Recommendation[] | required | Ordered list of recommendation objects; first full match wins |
| defaultRecommendation | Recommendation | undefined | Shown when no `recommendations` entry matches the collected answers |
| className | string | undefined | Extra class appended to the root `.mrw` element |

### WizardQuestion

```typescript
type WizardQuestion = {
  id: string;
  text: string;
  description?: string;
  options: {
    value: string;
    label: string;
    nextQuestion?: string; // id of the question to show after this option is selected
  }[];
};
```

### Recommendation

```typescript
type Recommendation = {
  id: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  matchAnswers: Record<string, string>; // every key must match collected answers
};
```

## Branching logic

Each option in a question may carry an optional `nextQuestion` field. When the user confirms an option that has `nextQuestion` set, the wizard advances to the question whose `id` matches that value rather than to the next question in array order. When `nextQuestion` is absent, the wizard steps to the next entry in the `questions` array. When there is no further question to advance to, the wizard computes the recommendation and shows the result screen.

This means you can mix linear and branching flows in the same wizard: most options advance linearly while specific options branch to dedicated sub-flows. The Back button rewinds through the actual visit history (a stack of visited question ids), not through array order, so users who took a branch always back up correctly.

## Recommendation matching

When the wizard reaches the result screen it iterates `recommendations` in the order they appear in the array and returns the **first** entry whose `matchAnswers` map is satisfied. An entry is satisfied when every key in its `matchAnswers` object equals the answer the user gave for that question id. An empty `matchAnswers` map (`{}`) matches any answer set, so a catch-all recommendation should be placed at the end of the array (or supplied as `defaultRecommendation` instead).

If no entry in `recommendations` satisfies the collected answers, `defaultRecommendation` is shown. If `defaultRecommendation` is also absent, a neutral "no specific match" message is displayed.

Example: given answers `{ "team-size": "small", "use-case": "collaborate" }`, a recommendation with `matchAnswers: { "team-size": "small" }` will match because the single required key is satisfied. A recommendation with `matchAnswers: { "team-size": "small", "use-case": "ship" }` will not match because `use-case` differs.

## Customization (CSS variables)

Every customizable visual property is exposed as a CSS custom property on the `.mrw` root:

```css
.mrw {
  --mrw-bg: var(--brand-surface, white);
  --mrw-text-color: var(--brand-ink, #102542);
  --mrw-muted-color: rgba(16, 37, 66, 0.6);
  --mrw-accent: var(--brand-accent, #1e5fcf);
  --mrw-progress-bg: rgba(0, 0, 0, 0.06);
  --mrw-progress-fill: var(--mrw-accent);
  --mrw-option-border: rgba(0, 0, 0, 0.12);
  --mrw-option-bg: white;
  --mrw-option-bg-hover: rgba(30, 95, 207, 0.04);
  --mrw-option-bg-selected: rgba(30, 95, 207, 0.08);
  --mrw-option-border-selected: var(--mrw-accent);
  --mrw-button-bg: var(--mrw-accent);
  --mrw-button-text: white;
  --mrw-button-bg-hover: color-mix(in srgb, var(--mrw-accent) 90%, black);
  --mrw-radius: 1rem;
  --mrw-section-padding: 2rem;
  --mrw-gap: 1rem;
}
```

Override these in your own stylesheet to match your brand:

```css
:root {
  --mrw-accent: #7c3aed;
  --mrw-radius: 0.5rem;
}
```

## Accessibility

- Landing screen title uses `<h2>` for document hierarchy; question text also uses `<h2>` within each step
- Options are rendered as `<button>` elements so they receive native keyboard focus and activation via Enter/Space
- The Back button appears only when the history stack is non-empty, preventing an impossible navigation state
- Progress indicator uses `aria-live="polite"` so screen readers announce step changes without interrupting the user
- The result region carries `role="region"` and `aria-label="Your recommendation"` for landmark navigation
- The CTA on the result card is an `<a>` element when `ctaHref` is provided, preserving right-click and open-in-new-tab behavior

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). No IE support.

## Migration history

- v2.4: initial implementation of `patterns/interactive-tooling/05-multi-step-recommendation-wizard.md`
