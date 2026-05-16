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

Five categories, ~50-65 patterns total at v1 launch:

- **CTA patterns** (~15-20): primary buttons, secondary CTAs, sticky bars, exit-intent, in-content, contextual prompts
- **Lead capture patterns** (~12-15): inline forms, multi-step, content gates, modals, progressive profiling, social login
- **Social proof patterns** (~10-12): logo strips, testimonials, customer counts, activity feeds, reviews, case studies
- **Urgency patterns** (~5-8): countdowns, scarcity indicators, deadline framing, real-time activity
- **Interactive tooling patterns** (~8-10): calculators, quizzes, configurators, wizards, comparison tools

Browse `patterns/{category}/README.md` for the full pattern list per category.

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

- [rampstackco/claude-skills](https://github.com/rampstackco/claude-skills): the parent catalog of methodology skills covering brand, design, engineering, audit, and growth work (99 skills)
- `rampstackco/claude-skills-starter` (planned): curated 12-15 skill subset for users who want a focused starter pack rather than the full catalog

## Contributing

See CONTRIBUTING.md. Pattern submissions welcome with real-world attribution.

## License

MIT. See LICENSE.
