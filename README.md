<p align="center">
  <img src="assets/illustrations/hero.png" alt="Visual representation of the 5 pattern categories in the catalog: CTAs, lead capture, social proof, urgency, and interactive tooling" width="100%">
</p>

# claude-skills-widgets

A research-backed pattern catalog of lead-gen, CTA, social proof, urgency, and interactive tooling patterns used by top-converting B2B SaaS, fintech, DTC, and consumer brands.

Documentation, not code. Each pattern includes description, variations, real-world examples with attribution, implementation notes, and brand archetype compatibility.

Companion to [rampstackco/claude-skills](https://github.com/rampstackco/claude-skills) for users building landing pages, marketing surfaces, or product onboarding with Claude.

## Why a pattern catalog and not a component library

Most component libraries (Tailwind UI, shadcn/ui, Catalyst) ship code. They solve the "how do I implement this" problem.

This catalog solves a different problem: "which pattern should I use, and why."

Code without pattern understanding produces generic implementations. Pattern documentation without code can be implemented in any stack, framework, or design system. For users building with Claude or other AI tools, pattern documentation is often more valuable than pre-built components because the AI handles the implementation.

Components may follow in a future companion repo. For now, this catalog is documentation.

## What's in the catalog

Five categories, ~65 patterns at v1 launch:

- **CTA patterns** (~20): primary buttons, secondary CTAs, sticky bars, exit-intent, in-content, contextual prompts
- **Lead capture patterns** (~15): inline forms, multi-step, content gates, modals, progressive profiling, social login
- **Social proof patterns** (~12): logo strips, testimonials, customer counts, activity feeds, reviews, case studies
- **Urgency patterns** (~8): countdowns, scarcity indicators, deadline framing, real-time activity
- **Interactive tooling patterns** (~10): calculators, quizzes, configurators, wizards, comparison tools

<table>
  <tr>
    <td align="center" width="20%">
      <a href="patterns/cta/README.md"><img src="assets/illustrations/category-cta.png" alt="CTA patterns category illustration" width="100%"></a>
      <p><strong>CTA</strong></p>
    </td>
    <td align="center" width="20%">
      <a href="patterns/lead-capture/README.md"><img src="assets/illustrations/category-lead-capture.png" alt="Lead capture patterns category illustration" width="100%"></a>
      <p><strong>Lead Capture</strong></p>
    </td>
    <td align="center" width="20%">
      <a href="patterns/social-proof/README.md"><img src="assets/illustrations/category-social-proof.png" alt="Social proof patterns category illustration" width="100%"></a>
      <p><strong>Social Proof</strong></p>
    </td>
    <td align="center" width="20%">
      <a href="patterns/urgency/README.md"><img src="assets/illustrations/category-urgency.png" alt="Urgency patterns category illustration" width="100%"></a>
      <p><strong>Urgency</strong></p>
    </td>
    <td align="center" width="20%">
      <a href="patterns/interactive-tooling/README.md"><img src="assets/illustrations/category-interactive-tooling.png" alt="Interactive tooling patterns category illustration" width="100%"></a>
      <p><strong>Interactive Tooling</strong></p>
    </td>
  </tr>
</table>

Browse `patterns/{category}/README.md` for the full pattern list per category.

## Component implementations (v2.0)

The catalog now ships with React and HTML/CSS implementations for a starter set of components, migrated from the Threshold reference build at rampstack.co/demo/threshold:

- **TrustLogoStrip**: implements `patterns/social-proof/01-customer-logo-strip.md`
- **HeroProductMockup**: dashboard mockup illustration utility (pattern not yet documented)
- **ActivationFunnelInline**: funnel and step-progress visualization utility
- **TimeToValueSparkline**: inline data visualization utility
- **FlowConnector**: SVG flow-diagram layout utility

Browse `components/` for the full v2.0 catalog. Each component ships with shared CSS, a React variant, an HTML variant, and example usage.

## v2.1: 6 pattern-mapped components

v2.1 builds on the Threshold seed migration by adding components that map directly to documented patterns:

- **PrimaryButtonCTA**: implements `patterns/cta/01-primary-button-cta.md`
- **HeroStackCTA**: implements `patterns/cta/06-hero-stack-primary-plus-secondary.md`
- **InlineSingleFieldForm**: implements `patterns/lead-capture/01-inline-single-field-form.md`
- **SingleQuoteTestimonial**: implements `patterns/social-proof/03-single-quote-testimonial.md`
- **CustomerCount**: implements `patterns/social-proof/07-customer-count-display.md`
- **CountdownTimer**: implements `patterns/urgency/01-countdown-timer.md`

Each component pairs React (TypeScript) with HTML/CSS for portability across stacks. The form and countdown components include vanilla JS in the HTML variant so the static files demonstrate working behavior.

## v2.2: 6 more pattern-mapped components

v2.2 extends the catalog with:

- **SecondaryTextCTA**: companion to PrimaryButtonCTA for less-prominent text-link actions
- **StickyBarCTA**: persistent bottom-of-viewport CTA with dismiss persistence
- **InlineMultiFieldForm**: sales lead form with 3 to 5 fields
- **NewsletterSignupInline**: email signup with optional headline and supporting copy
- **TestimonialGrid**: 3 to 6 testimonials in a responsive grid
- **ReviewAggregate**: star rating and review count from third-party sources

Total v2.x: 17 component implementations across CTA, lead capture, social proof, urgency, and utility categories.

## v2.3: 6 components opening interactive-tooling

v2.3 introduces the interactive-tooling category and deepens CTA, lead-capture, and urgency coverage:

- **SavingsCalculator**: config-driven calculator for ROI, savings, and payback calculations (interactive-tooling)
- **FooterCTASection**: section-sized last-chance CTA with optional social proof
- **MultiOptionCTACluster**: equal-weight choice architecture (2 to 4 options)
- **SocialLoginButtons**: OAuth provider buttons (Google, GitHub, Apple, and others)
- **LimitedTimeOfferBanner**: deadline-driven banner composing CountdownTimer
- **WaitlistPositionDisplay**: position display with optional referral mechanic

Total v2.x: 23 component implementations across CTA, lead capture, social proof, urgency, interactive tooling, and utility categories.

## v2.4: 3 quiz and wizard components

v2.4 advances interactive-tooling with the quiz and wizard family:

- **DiagnosticQuizAssessment**: generic scored quiz framework (single-select, multi-select, scale, text)
- **ProductMarketFitQuiz**: Sean Ellis PMF assessment (composes DiagnosticQuizAssessment)
- **MultiStepRecommendationWizard**: branching-logic flow that recommends a specific path

The ROI cost calculator pattern is covered by the existing SavingsCalculator (generic compute API) and is cross-linked rather than reimplemented.

Total v2.x: 26 component implementations.

## v2.5: 3 configurator components

v2.5 advances interactive-tooling with the configurator family:

- **PricingTierConfigurator**: real-time tier recommendation from user inputs
- **ProductFeatureConfigurator**: Tesla-style product builder with a running price total
- **ComparisonToolVsCompetitors**: feature comparison table with optional category toggles

Total v2.x: 29 component implementations. Interactive-tooling at 7/10.

## v2.6: 3 specialized components

v2.6 closes interactive-tooling and extends social-proof:

- **SchedulingTool**: Calendly-style date/time picker with form completion
- **InteractiveProductTour**: step-by-step tooltip tour pinning to DOM elements
- **FeaturedInPressStrip**: press-mentions variant composing TrustLogoStrip

Total v2.x: 32 component implementations. Interactive-tooling complete (9/10 explicit plus the ROI calculator cross-link). Browse `components/` for the full catalog and `components/README.md` for the roadmap.

## How patterns are documented

Every pattern follows a consistent schema (see `patterns/SCHEMA.md`):

- What it is and why it works
- When to use and when to avoid
- Variations within the family
- 3-7 real-world examples with attribution
- Implementation and accessibility notes
- Which brand archetypes it pairs with

Patterns reference [`claude-skills/skills/brand-archetype-system`](https://github.com/rampstackco/claude-skills/tree/main/skills/brand-archetype-system) for archetype compatibility. A Bold Confident brand uses different CTA patterns than an Editorial Restrained brand; the documentation captures these fit relationships.

## Using the catalog

For people working with Claude or other AI tools: paste the relevant pattern file into context, then ask the AI to implement using your stack. The pattern provides the reasoning; the AI handles the code.

For people building by hand: each pattern is a complete reference for that pattern family. Read the description, pick a variation, follow the implementation notes.

For agencies and consultants: the catalog is a shared vocabulary for client conversations. Pointing at a documented pattern is faster than describing one.

## Companion repos

This repo provides two surfaces: pattern documentation in `patterns/` and component implementations in `components/`. The documentation explains the design space; the components are portable React and HTML/CSS code.

- [rampstackco/claude-skills](https://github.com/rampstackco/claude-skills): the parent catalog of methodology skills covering brand, design, engineering, audit, and growth work (99 skills)
- `rampstackco/claude-skills-starter` (planned): curated 12-15 skill subset for users who want a focused starter pack rather than the full catalog

## Contributing

See CONTRIBUTING.md. Pattern submissions welcome with real-world attribution.

## License

MIT. See LICENSE.
