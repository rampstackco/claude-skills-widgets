# DiagnosticQuizAssessment

**Implements pattern**: [`patterns/interactive-tooling/04-diagnostic-quiz-assessment.md`](../../patterns/interactive-tooling/04-diagnostic-quiz-assessment.md)
**Category**: Interactive Tooling
**Stability**: v2.4

## What it is

A generic quiz/assessment framework. Takes a list of questions, an optional scoring function, and result tier definitions; produces a multi-step quiz UI that computes a score and shows tiered interpretation on completion. The foundation for any scored self-assessment.

## React usage

```tsx
import { DiagnosticQuizAssessment } from "claude-skills-widgets/diagnostic-quiz-assessment";

<DiagnosticQuizAssessment
  title="How ready is your team for AI tooling?"
  questions={[
    {
      id: "team-size",
      text: "How large is your team?",
      type: "single-select",
      options: [
        { value: "solo", label: "Just me", score: 1 },
        { value: "small", label: "2-10 people", score: 3 },
        { value: "medium", label: "11-50 people", score: 5 },
        { value: "large", label: "50+ people", score: 4 },
      ],
    },
    {
      id: "current-tooling",
      text: "Which tools are you already using?",
      type: "multi-select",
      options: [
        { value: "github", label: "GitHub", score: 1 },
        { value: "linear", label: "Linear", score: 1 },
        { value: "slack", label: "Slack", score: 1 },
        { value: "notion", label: "Notion", score: 1 },
      ],
    },
    {
      id: "blocker-severity",
      text: "How much time does setup currently waste per week?",
      type: "scale",
      scaleMin: 0,
      scaleMax: 10,
      scaleLowLabel: "None",
      scaleHighLabel: "10+ hours",
    },
  ]}
  resultTiers={[
    { minScore: 0, maxScore: 5, title: "Early stage", description: "Build foundational practices first.", recommendation: "Start with /skills basics." },
    { minScore: 6, maxScore: 12, title: "Ready to scale", description: "Solid foundation in place.", recommendation: "Adopt agent workflows." },
    { minScore: 13, maxScore: 100, title: "Ready for advanced", description: "Optimize and automate.", recommendation: "Skills + custom integrations." },
  ]}
  onComplete={(result) => console.log("score:", result.score, "tier:", result.tier?.title)}
/>
```

## HTML usage

Static HTML structure with inline vanilla JS implementing the state machine. Users replace the scoring function and tier definitions with their own.

(Full HTML example in `html/index.html`.)

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| title | string | undefined | Quiz heading shown on landing screen |
| description | string | undefined | Supporting copy below the title |
| questions | Question[] | required | Quiz questions array |
| resultTiers | ResultTier[] | undefined | Tier definitions for score interpretation |
| scoring | (answers) => number | sum-of-option-scores | Custom scoring function |
| onComplete | (result) => void | undefined | Called when quiz completes |
| startButtonLabel | string | "Start" | Landing screen button text |
| nextButtonLabel | string | "Next" | Progress button text |
| submitButtonLabel | string | "Submit" | Final-question button text |
| restartButtonLabel | string | "Retake" | Restart from results screen |
| showProgress | boolean | true | Show step indicator |
| allowBack | boolean | true | Show back button between questions |
| className | string | undefined | Extra class for root |

Where `Question`:

```typescript
type Question = {
  id: string;
  text: string;
  type: "single-select" | "multi-select" | "scale" | "text";
  options?: { value: string; label: string; score?: number }[];
  scaleMin?: number;
  scaleMax?: number;
  scaleLowLabel?: string;
  scaleHighLabel?: string;
  required?: boolean;            // defaults to true
  description?: string;          // additional context below question text
};
```

Where `ResultTier`:

```typescript
type ResultTier = {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
  recommendation?: string;
};
```

## Default scoring

When no `scoring` function is provided, the default sums:
- `single-select`: the chosen option's `score` (defaults to 0 if not set)
- `multi-select`: sum of all chosen options' scores
- `scale`: the selected numeric value
- `text`: 0 (text responses do not affect score)

Override with a custom function for non-additive scoring (weighted, threshold-based, etc.).

## Customization (CSS variables)

```css
.dqa {
  --dqa-bg: var(--brand-surface, white);
  --dqa-text-color: var(--brand-ink, #102542);
  --dqa-muted-color: rgba(16, 37, 66, 0.6);
  --dqa-accent: var(--brand-accent, #1e5fcf);
  --dqa-progress-bg: rgba(0, 0, 0, 0.06);
  --dqa-progress-fill: var(--dqa-accent);
  --dqa-option-border: rgba(0, 0, 0, 0.12);
  --dqa-option-bg: white;
  --dqa-option-bg-selected: rgba(30, 95, 207, 0.08);
  --dqa-option-border-selected: var(--dqa-accent);
  --dqa-button-bg: var(--dqa-accent);
  --dqa-button-text: white;
  --dqa-radius: 1rem;
  --dqa-section-padding: 2rem;
  --dqa-gap: 1rem;
}
```

## Accessibility

- Question text uses `<h2>` for clear hierarchy within the quiz section
- Radio groups use proper `<fieldset>`/`<legend>` semantics for single-select
- Multi-select uses `<input type="checkbox">` with associated labels
- Scale uses `<input type="range">` with min/max labels
- Progress region has `aria-live="polite"` to announce step changes
- Submit and navigation buttons have explicit labels
- Result region has `role="region"` with `aria-label="Quiz results"`

## Honesty note

Quizzes are persuasive surfaces. The default scoring and tier mapping should reflect what your assessment actually measures. An always-positive result across every tier reduces credibility. Real differentiation between tiers is what makes the quiz useful.

## Browser support

Modern browsers. No external dependencies beyond React.

## Migration history

- v2.4: initial implementation of `patterns/interactive-tooling/04-diagnostic-quiz-assessment.md`
