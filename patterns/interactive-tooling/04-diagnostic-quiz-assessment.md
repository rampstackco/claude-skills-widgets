# Diagnostic Quiz / Assessment

**Category**: Interactive Tooling
**Subcategory**: Quiz
**Conversion intent**: Qualify the user's situation and route them to the most relevant next step, product tier, or content path

## What it is

A quiz or assessment that asks about the user's current situation, goals, or maturity level, then produces a personalized diagnosis with a recommended next step. Unlike the PMF quiz, the subject of the assessment is the user's context rather than a product's fit with its market. Output is a recommendation, a score, or a categorized result that maps naturally to the host's product or service.

## Why it works

Personalization at scale is the mechanical advantage here. A prospect who self-selects into a quiz is already signaling engagement; a quiz that returns a result that accurately reflects their situation deepens the engagement through reciprocity (the tool gave them something useful) and social proof (the result positions them relative to a benchmark or peer group). Cialdini's liking principle applies when the quiz output communicates "we understand your situation" before pitching anything. Baymard Institute research on form completion shows that progressive disclosure (one step at a time) dramatically increases completion rates versus single-page forms.

## When to use

- The product serves multiple distinct personas or use cases and the right recommendation depends on the user's situation
- The audience benefits from a benchmark or maturity assessment relative to peers
- The brand wants to qualify leads by sophistication, company size, or readiness before routing them into different sales tracks
- The quiz output can honestly map to the product's feature set or pricing tiers

## When NOT to use

- The product has a single use case and everyone gets the same recommendation (the quiz adds friction without personalization payoff)
- The questions required to produce a meaningful diagnosis are too sensitive for an anonymous web context
- The brand cannot produce genuinely differentiated result pages (every result says "try our product" with slightly different copy)
- Completion rates are critical and the quiz adds more than five steps without a commensurate payoff for the user

## Variations

### Maturity assessment
Asks about current practices, tooling sophistication, and team scale to categorize the user into a maturity tier (beginner, intermediate, advanced). Output is a tier label with commentary on what separates this tier from the next. Used by platforms that want to segment their funnel by sophistication. Composes with `claude-skills/skills/funnel-flow-architecture` for post-assessment routing.

### Fit-for-product quiz
Directly assesses whether the prospect's situation matches the product's ideal customer profile. Questions probe for deal-qualifying signals (team size, current tool, budget range, use case). Output is a candid "this is / is not a good fit" with a specific recommendation. Honest outputs build trust; soft-pedaling every result undermines credibility.

### Persona-based recommendation
Asks role, goal, and context questions, then routes the user to a persona-specific landing page or product view. Less about scoring and more about navigation: the quiz replaces a segmentation homepage with a conversational interface. Works well for multi-product platforms where the homepage cannot serve all segments equally.

## Real-world examples

- **HubSpot Website Grader** (website.grader.com): takes a URL and email, scores the site across performance, mobile, SEO, and security, and returns a personalized report. The assessment output is a specific score with category breakdowns and improvement recommendations, mapping naturally to HubSpot's product features.
- **HubSpot Marketing Grader**: extends the Website Grader with marketing maturity dimensions, segmenting output by the user's digital marketing sophistication and linking each finding to a relevant HubSpot capability.
- **Typeform**: typeform.com's own homepage quiz routes visitors by use case (forms, surveys, quizzes) to persona-specific templates. The quiz replaces a taxonomy-heavy content browser with a conversational sorting mechanism.
- **Outgrow**: outgrow.co's platform is itself built on diagnostic quizzes as lead generation assets. Their own onboarding assessment asks about the visitor's marketing goals and routes them to relevant interactive content templates.
- **Gong**: gong.io has used revenue intelligence maturity assessments that score sales teams on their data capture and analysis practices, routing low-maturity respondents to educational content and high-maturity respondents toward product demos.
- **Loom**: loom.com's onboarding assessment routes new users by role (individual, team lead, company-wide) to different feature introduction paths, functioning as a persona-based recommendation inside the product.

## Implementation notes

- **Mobile behavior**: One question per screen is the correct default for mobile. Progress indicators should be visible at all times. Back navigation is expected; destroying answers on back-navigation causes significant drop-off.
- **Accessibility**: Each question needs a visible heading and form group label. Radio and checkbox options require keyboard selection via arrow keys. Do not auto-advance to the next question on radio selection without confirmation; keyboard and screen reader users need to confirm deliberately.
- **Performance**: Quiz state managed client-side. Results computation should be instant. If results pages are server-rendered, pre-fetch the likely result pages based on early answer patterns to eliminate perceived load time on the final step.
- **Common pitfalls**: Questions that are clearly screening for sales qualification rather than genuinely diagnosing the user's situation; users abandon when they feel interrogated. Result pages that all recommend the same action (regardless of answers) telegraph that the quiz output is predetermined. No branching logic: linear quizzes that ignore earlier answers to ask the same follow-ups feel generic. Omitting a shareable or downloadable result removes a significant distribution mechanism.

## Archetype compatibility

This pattern fits naturally with:

- **Warm Conversational**: The conversational single-question-at-a-time format is native to this archetype. HubSpot, Intercom, and Typeform are all Warm Conversational exemplars that use assessment patterns extensively.
- **Clinical Trustworthy**: Maturity assessments and graders in fintech, health, and compliance categories carry the archetype's authority-and-evidence register well. The scored output with specific findings feels credible rather than promotional.
- **Technical Precise**: Developer platform assessments (readiness checks, integration compatibility quizzes) fit the archetype's specificity expectations. Results should include concrete technical detail, not just tier labels.

Less natural with:

- **Luxe Considered**: Luxury brands do not run their audience through diagnostic funnels; the experience implies the product is the diagnostic. If used, the quiz must be exquisitely produced and the output must feel editorial rather than graded.
- **Bold Confident**: Assertion-first brands sometimes find the diagnostic format at odds with their "this product is the answer" positioning. The quiz implies uncertainty about fit, which conflicts with the archetype's confident directness.

## Related patterns

- `03-product-market-fit-quiz.md` for the PMF-specific variant
- `05-multi-step-recommendation-wizard.md` for when the output is a product recommendation rather than a diagnostic score
- `claude-skills/skills/quiz-and-assessment-design` for scoring logic and result page architecture

## Sources

- Cialdini, Robert: "Influence" (liking and reciprocity principles)
- Baymard Institute: form completion and progressive disclosure research
- Outgrow 2025 Interactive Content Benchmark Report
- HubSpot Website Grader methodology: website.grader.com
