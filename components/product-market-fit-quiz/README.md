# ProductMarketFitQuiz

**Implements pattern**: [`patterns/interactive-tooling/03-product-market-fit-quiz.md`](../../patterns/interactive-tooling/03-product-market-fit-quiz.md)
**Category**: Interactive Tooling
**Stability**: v2.4

## What it is

A pre-configured PMF assessment built on top of `DiagnosticQuizAssessment`. It hard-codes the Sean Ellis "how disappointed would you be" question along with optional usage and open-ended follow-up questions, and maps the resulting score to three interpretation tiers. Use it any time your audience is founders, PMs, or product practitioners and you want to surface a named PMF signal with minimal configuration.

## Composition

This component is a thin wrapper, roughly 50-90 lines of TSX, around `DiagnosticQuizAssessment`. It does not implement its own quiz UI or duplicate any `.dqa` CSS rules. All layout, progress tracking, keyboard navigation, and accessibility behaviour are inherited from the composed component.

```
ProductMarketFitQuiz
  -> DiagnosticQuizAssessment (renders the quiz UI)
       -> styles.css from diagnostic-quiz-assessment/
```

## React usage

```tsx
import { ProductMarketFitQuiz } from "claude-skills-widgets/product-market-fit-quiz";

// Default: all questions, product named "this product"
<ProductMarketFitQuiz />

// Named product with callback
<ProductMarketFitQuiz
  productName="Compass"
  onComplete={(result) => console.log(result.score, result.tier?.title)}
/>

// Minimal: disappointment question only
<ProductMarketFitQuiz
  productName="Compass"
  includeUsageQuestion={false}
  includeOpenEnded={false}
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/diagnostic-quiz-assessment/styles.css">
<link rel="stylesheet" href="path/to/product-market-fit-quiz/styles.css">

<section class="dqa" id="pmf-quiz"></section>
<script src="path/to/product-market-fit-quiz/html/index.html"></script>
```

(Full example in `html/index.html`. The vanilla JS config object mirrors the React props.)

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| productName | string | `"this product"` | Interpolated into question text wherever `{productName}` appears |
| includeUsageQuestion | boolean | `true` | Include "How often do you use it?" as question 2 |
| includeOpenEnded | boolean | `true` | Include "What is the main benefit you receive?" as a text question |
| onComplete | `(result: QuizResult) => void` | undefined | Called when the quiz finishes; receives the raw `QuizResult` from `DiagnosticQuizAssessment` |
| className | string | undefined | Extra class forwarded to the root `DiagnosticQuizAssessment` element |

All other `DiagnosticQuizAssessment` props (`title`, `startButtonLabel`, `allowBack`, etc.) are not exposed because the component supplies its own defaults. Fork `DiagnosticQuizAssessment` directly if you need full control.

## Score-to-tier mapping

The disappointment question is the only scored question. Usage is unscored (informational). Text response scores 0.

| Answer | Score |
|---|---|
| Very disappointed | 3 |
| Somewhat disappointed | 1 |
| Not disappointed | 0 |
| Not applicable / I no longer use it | 0 |

| Score range | Tier |
|---|---|
| 3 and above | Strong PMF |
| 1-2 | Emerging PMF |
| 0 | No PMF yet |

## Honesty caveat: cohort vs. single user

The Sean Ellis benchmark (40% of users choosing "Very disappointed") is a **cohort measurement**. It is meaningful only when aggregated across many respondents. This component surveys one user at a time. The result tier is an approximation of what that single response suggests, not a statistically valid PMF measurement. Real PMF determination requires collecting this survey across a representative sample of active users and calculating the percentage who answer "Very disappointed." Do not present a single result to a stakeholder as a definitive PMF verdict.

## Customization (CSS variables)

All visual customization is handled through `DiagnosticQuizAssessment`'s CSS variables:

```css
.dqa {
  --dqa-accent: #ff6b00;
  --dqa-bg: #fafafa;
}
```

The optional `.pmfq` wrapper class in `styles.css` is available if you need to scope overrides to PMF quiz instances specifically:

```css
.pmfq .dqa {
  --dqa-accent: #00897b;
}
```

## Accessibility

Inherited from `DiagnosticQuizAssessment`:

- Radio groups with proper `role="radiogroup"` on the options container
- Progress region with `aria-live="polite"` for step announcements
- Result region with `role="region"` and `aria-label="Quiz results"`
- Keyboard navigation through all options and buttons
- No icon-only controls; all interactive elements have visible labels

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). No IE support.

## Migration history

- v2.4: initial implementation of `patterns/interactive-tooling/03-product-market-fit-quiz.md`
