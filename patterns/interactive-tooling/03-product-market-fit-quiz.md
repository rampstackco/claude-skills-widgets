# Product-Market Fit Quiz

**Category**: Interactive Tooling
**Subcategory**: Quiz
**Conversion intent**: Surface a scored PMF assessment that creates a natural next step toward the product or a follow-up conversation

## What it is

A structured quiz based on the Sean Ellis PMF methodology that asks diagnostic questions about user satisfaction, retention behavior, and substitution alternatives. Output is a quantified PMF score with interpretation and recommended next steps. Distinct from a general diagnostic quiz in that it specifically measures the product-market fit signal rather than a buyer's situation or needs.

## Why it works

The PMF quiz works because it gives founders and product teams a number where previously they had only intuition. The Sean Ellis benchmark (40% of users saying "very disappointed" if the product went away) has become a common reference point in the startup community, which means the scoring system has third-party credibility. Tools that produce a named, benchmarked score have higher perceived authority than tools that produce subjective feedback. The quiz also creates reciprocity: the tool does real analytical work for the user at no cost, which increases receptiveness to whatever next step the host recommends.

## When to use

- The product serves founders, PMs, or product-led growth practitioners as a target audience
- The host brand offers a product or service related to PMF improvement (analytics, user research, growth infrastructure)
- The brand wants to generate qualified leads from an audience that is actively thinking about product-growth problems
- The quiz output can honestly and usefully connect to the product's value proposition

## When NOT to use

- The quiz output cannot credibly connect to the product being sold (the quiz becomes a bait-and-switch)
- The target audience does not recognize PMF terminology (consumer audiences, non-product roles)
- The host brand does not have the follow-up content or expertise to support a low-PMF diagnosis
- The quiz is used as a one-size-fits-all lead generation tactic without domain specificity

## Variations

### Single-signal Ellis test
One core question: "How would you feel if you could no longer use this product?" with response options and a percentage-based PMF score. Lowest friction, highest completion rate. Best used when the audience already understands the benchmark and just wants the number.

### Multi-signal diagnostic quiz
Expands beyond the Ellis single question to include retention signals, alternative substitution, word-of-mouth behavior, and user profile characterization. Produces a richer output with subscores by dimension. Suited to audiences wanting depth over a quick number.

### Scored quiz with benchmarked output
Output compares the user's score to industry benchmarks by category (B2B SaaS, consumer, marketplace). Adds context to the raw score and surfaces where the product is above or below benchmark. Composes with `claude-skills/skills/quiz-and-assessment-design` for the scoring model and result page architecture.

## Real-world examples

- **rampstack.co/showcase/tooling**: The Compass PMF Quiz at rampstack.co/showcase/tooling/compass-pmf-quiz is a live implementation of this pattern, demonstrating a multi-signal PMF assessment with scored output and interpretation bands.
- **pmfsurvey.com**: A dedicated free tool running the Sean Ellis test. Users answer the core "very disappointed" question and related diagnostics, with output scored against the 40% benchmark.
- **pmtoolkit.ai**: Free PMF calculator at pmtoolkit.ai/calculators/pmf-score uses a multi-signal approach combining the Ellis signal with retention and engagement indicators.
- **GoPractice**: A product management learning platform that integrates PMF measurement tools into its curriculum, framing the quiz as a learning instrument rather than a lead capture tool.
- **Formbricks**: Open-source survey platform that provides a Sean Ellis PMF survey template at formbricks.com, which teams embed inside their own products to measure PMF on their own user base.

## Implementation notes

- **Mobile behavior**: Single-question-at-a-time quiz flow (as Typeform popularized) performs better on mobile than multi-question forms. PMF quizzes typically run 5-12 questions; single-question advancement reduces perceived effort per step.
- **Accessibility**: Radio button groups require a visible `<fieldset>` and `<legend>`. Do not use custom visual-only radio patterns without keyboard and screen reader parity. Progress indicators should communicate step count numerically, not only visually.
- **Performance**: Quiz state should be maintained client-side across steps; no server round-trip between questions. Results calculation is arithmetic and should happen instantly on submission. If results include a personalized email follow-up, the email send can be async.
- **Common pitfalls**: Requiring an email before showing any results signals that the tool is a lead capture mechanism rather than a genuine diagnostic; completion rates drop sharply. Producing results with no interpretation (just a raw percentage) leaves users uncertain what to do. Framing a score of 35% as "almost there" rather than "below the PMF threshold" softens the output in a way that makes the tool less useful and less credible.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: Product and engineering audiences are the primary users of PMF methodology. The scored, benchmarked output with clear methodology aligns with the archetype's appetite for data-backed frameworks.
- **Editorial Restrained**: If the tool is positioned as a product intelligence resource rather than a sales tool, the editorial register suits the quiz well. Clean typography, restrained color, thoughtful interpretation copy.
- **Warm Conversational**: PMF quizzes used by prosumer-SaaS brands benefit from conversational framing: "Here is how your product is landing with users, and here is what we see in the data." The results page copy in particular should feel like a colleague's reading of the score, not a report summary.

Less natural with:

- **Playful Energetic**: PMF is a serious measurement exercise. Wrapping it in bright color and playful copy creates tonal dissonance that signals the tool is not substantive.
- **Luxe Considered**: PMF quizzes are product-growth instruments, not brand objects. The pattern does not fit naturally into luxury or premium positioning.
- **Rugged Utilitarian**: The methodology assumes a product-led growth context that is foreign to most physical-goods or trade brands that operate in the Rugged Utilitarian register.

## Related patterns

- `04-diagnostic-quiz-assessment.md` for the general-purpose version of a scored assessment
- `05-multi-step-recommendation-wizard.md` for when the output drives a specific product recommendation rather than a score
- `claude-skills/skills/quiz-and-assessment-design` for scoring model architecture and result page design

## Sources

- Sean Ellis: original PMF benchmark research (40% "very disappointed" threshold)
- pmfsurvey.com: live Sean Ellis test implementation
- Formbricks PMF survey template documentation: formbricks.com/blog/product-market-fit-survey-questions
- pmtoolkit.ai: multi-signal PMF score methodology
