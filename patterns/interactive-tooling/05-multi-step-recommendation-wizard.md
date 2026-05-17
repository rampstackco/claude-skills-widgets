# Multi-Step Recommendation Wizard

**Category**: Interactive Tooling
**Subcategory**: Wizard
**Conversion intent**: Route the user to the specific product, tier, or path most relevant to their stated situation, reducing decision paralysis and increasing purchase confidence

## What it is

A guided, multi-step interface that asks three to five targeted questions about the user's needs, context, or preferences, then recommends a specific product, pricing tier, or next action. The wizard replaces browsing with a directed conversation, producing a single confident recommendation rather than a list of options.

## Why it works

Choice paralysis is well documented: when a product catalog or pricing page presents too many options, conversion drops as cognitive load rises. The wizard narrows the option space progressively, so the final recommendation feels earned rather than arbitrary. This activates commitment consistency: users who have answered questions and arrived at a recommendation are more likely to follow through because they have invested in the process. The format also reduces the buyer's perception of risk because the recommendation was generated from their own answers, not pushed by a vendor.

## When to use

- The product has two or more meaningfully different tiers or variants and the right choice depends on the user's situation
- The homepage or pricing page is converting poorly because prospects feel uncertain which option applies to them
- The audience includes first-time buyers in the category who need guidance rather than a comparison table
- The product range is broad enough that a catalog browser would require significant self-navigation effort

## When NOT to use

- The product has one tier or variant (the wizard creates false complexity)
- The decision criteria are simple enough to be handled by a comparison table or pricing FAQ
- The user's situation is too complex to be adequately captured in five questions or fewer
- The audience is technically sophisticated and finds guided wizards patronizing rather than helpful

## Variations

### Linear wizard
Three to five sequential questions with no branching. Every user answers the same questions in the same order. Simplest to design, test, and maintain. Works best when the question set applies universally and the recommendation logic is straightforward.

### Branching wizard
Questions change based on prior answers. Early answers determine which subsequent questions appear, so the wizard feels like a conversation tailored to the user rather than a fixed form. Higher design and maintenance complexity. Best for product ranges with meaningfully different sub-audiences.

### With skip-ahead
Offers an explicit "I know what I need, skip to the recommendation" option after the first question. Reduces friction for users who find guided flows patronizing. The skip path can go directly to a comparison table or pricing page, honoring the user's preference rather than forcing compliance with the wizard's pacing.

## Real-world examples

- **Wealthfront**: wealthfront.com/risk-questionnaire presents a multi-step risk questionnaire that asks about investment timeline, loss tolerance, and financial goals, then recommends a specific portfolio allocation. The wizard is the primary onboarding mechanism; every user passes through it before seeing a portfolio.
- **Casper**: casper.com/pages/mattress-quiz is a four-step mattress quiz asking sleep position, firmness preference, sharing situation, and budget. Output is a specific Casper model recommendation with a direct purchase path.
- **Apple (Build to Order)**: apple.com/shop/buy-mac presents a wizard-style configurator for Mac purchases that starts by asking the primary use case, then recommends a model before entering the configurator. The recommendation step reduces the catalog to a single starting point.
- **Typeform**: typeform.com's own onboarding wizard routes new users by stated use case (lead generation, research, quizzes, payments) to a relevant template and feature tour. The wizard serves as navigation for a complex product surface.
- **Intercom**: intercom.com's product recommendation flow routes visitors by team size and primary use case (support, marketing, sales) to a specific product tier and relevant case studies, reducing the burden of navigating a multi-product platform.
- **Notion**: notion.so's onboarding experience asks role, team size, and primary goal, then pre-configures the workspace with relevant templates. The wizard produces a personalized first experience rather than a blank canvas.

## Implementation notes

- **Mobile behavior**: Wizards are well-suited to mobile because the single-question-per-screen format matches small-screen conventions. Ensure the "Next" button is always visible without scrolling. The step indicator should communicate progress without consuming excessive vertical space.
- **Accessibility**: Each wizard step requires a clearly labeled form group. Focus should advance automatically to the first interactive element of each new step. Step transitions must not auto-advance without explicit user action; keyboard and screen reader users need to control pacing.
- **Performance**: Wizard state managed client-side. Final recommendation page should be pre-rendered for the most common result paths to eliminate loading delays at the moment of highest user investment.
- **Common pitfalls**: Asking more than five questions before delivering a recommendation; every additional question costs completion rate. Designing the recommendation logic to always output the same top-tier product regardless of answers (users notice and trust drops immediately). Omitting a "start over" option; users who feel locked into a recommendation they distrust will leave rather than re-engage. Recommendation pages that are identical to the standard pricing page give the user no sense that the wizard produced something specific to their situation.

## Archetype compatibility

This pattern fits naturally with:

- **Warm Conversational**: The guided conversation format is the native interaction idiom of this archetype. Mailchimp, Webflow, Intercom, and Slack all use multi-step wizard patterns in their onboarding. The tone of each question should read as a knowledgeable colleague asking, not a form demanding.
- **Playful Energetic**: Wizards with personality, progress animations, and warm completion moments work well in this register. Consumer-facing wizards (mattress quizzes, sleep quizzes, style quizzes) are characteristic Playful Energetic use cases.
- **Clinical Trustworthy**: Investment and health wizards depend on this archetype. Wealthfront's risk questionnaire is the canonical example: the wizard communicates that the recommendation is responsible and evidence-based, not arbitrary.

Less natural with:

- **Technical Precise**: Developer audiences often prefer to self-configure rather than answer guided questions. Wizards in this archetype should be presented as optional efficiency rather than required onboarding.
- **Editorial Restrained**: The guided-wizard format implies that the user needs direction, which can conflict with the peer-relationship dynamic of the Editorial Restrained archetype. If used, the wizard should be opt-in and unobtrusive.

## Related patterns

- `04-diagnostic-quiz-assessment.md` for when the output is a diagnostic score rather than a product recommendation
- `06-pricing-tier-configurator.md` for when the recommendation output connects directly to a pricing decision
- `claude-skills/skills/funnel-flow-architecture` for placing the wizard at the right funnel stage

## Component implementation

A v2 implementation of this pattern is available in [`components/multi-step-recommendation-wizard/`](../../components/multi-step-recommendation-wizard/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Iyengar, Sheena and Lepper, Mark: "When Choice is Demotivating" (choice paralysis research)
- Cialdini, Robert: "Influence" (commitment-consistency principle)
- Baymard Institute: multi-step form completion research
- Casper mattress quiz: casper.com/pages/mattress-quiz
- Wealthfront risk questionnaire: wealthfront.com/risk-questionnaire
