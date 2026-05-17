# ROI / Cost Calculator

**Category**: Interactive Tooling
**Subcategory**: Calculator
**Conversion intent**: Quantify the business case for adopting the product before a sales conversation begins

## What it is

An interactive calculator where the user enters business inputs (headcount, current spend, usage volume, time lost) and receives a computed return-on-investment or total cost figure attributed to the product. The output personalizes the value proposition to the user's own numbers rather than presenting generic claims.

## Why it works

Self-generated numbers carry more persuasive weight than vendor-supplied claims. When a prospect computes the ROI using their own inputs, they have committed to the logic of the model: Cialdini's commitment principle means they are more likely to defend the conclusion internally. Confirmation bias reinforces this; the number feels like a discovery rather than a sales pitch. Research from CXL and Forrester consistently shows that interactive tools with personalized output outperform static landing pages for mid-funnel conversion, where the prospect already understands the category but has not yet justified the purchase internally.

## When to use

- The product has a quantifiable business benefit (time saved, spend reduced, headcount freed)
- The sales cycle involves budget approval where internal champions need a number to present
- The category is crowded and a specific economic claim differentiates more than feature comparisons
- The audience (CFOs, finance teams, operations leads) thinks in ROI terms by default

## When NOT to use

- The product is early-stage and the ROI model is speculative or unverified (it damages credibility faster than it builds it)
- The primary conversion is a free trial with no budget discussion yet
- The inputs required are too complex or too sensitive for users to share in an anonymous web tool
- The brand archetype favors restraint and the calculator would feel transactional against that register

## Variations

### Simple single-output calculator
One or two inputs, one output number. Prioritizes completion rate over depth. Best for top-of-funnel placements and broad audiences who will not spend more than 30 seconds on the tool. The output should be a single striking number with a clear label.

### Multi-input with breakdown
Five to ten inputs across multiple categories; output is a table or chart breaking down where savings come from. Better suited to mid-funnel placements where the user is evaluating seriously. The breakdown builds credibility by showing the work.

### Calculator gated behind email
Inputs are collected freely; the full output report (or PDF version) requires an email address. Converts calculation intent directly into a lead. Works best when the output has clear standalone value (a shareable report, a benchmark comparison, a board-ready one-pager). Composes with `claude-skills/skills/lead-magnet-design` for the gating mechanism design.

## Real-world examples

- **Slack**: ROI calculator at slack.com/roi-calculator takes inputs including number of employees, average salary, and current meeting load, and outputs time saved and equivalent dollar value per year attributed to Slack adoption.
- **HubSpot**: ROI calculator at hubspot.com/roi-calculator asks for revenue, deal volume, and close rate, then projects pipeline improvement and revenue lift from switching to HubSpot.
- **AWS Pricing Calculator**: calculator.aws lets users configure any combination of AWS services and compute a monthly cost estimate. Technically a cost calculator rather than ROI, but uses the same pattern of personalized inputs producing a trusted number.
- **Salesforce Agentforce**: salesforce.com/agentforce/ai-agents-roi-calculator delivers customized ROI estimates segmented by industry and business size, targeting enterprise deal justification.
- **Ramp**: ramp.com/savings-calculator calculates projected savings from switching spend to Ramp, combining cashback, yield from Ramp Treasury, and expense compliance improvement against user-entered spend volume.

## Implementation notes

- **Mobile behavior**: Multi-input calculators collapse poorly on narrow screens. For mobile, use a single scrolling column with large touch targets on number inputs. Consider a simplified mobile variant with fewer fields rather than forcing the full desktop experience.
- **Accessibility**: Number inputs require visible labels (not placeholder-only). Use `<input type="number">` with appropriate `min`, `max`, and `step` attributes. Output updates should be announced to screen readers via `aria-live="polite"` on the result region.
- **Performance**: Calculations should run client-side with no server round-trip. Debounce input events at 200-300ms to prevent jarring result flicker on keystroke. Heavy chart libraries add meaningful page weight; consider a lightweight SVG bar chart over Chart.js for simple output.
- **Common pitfalls**: Presenting ROI figures that are obviously inflated destroys trust faster than no calculator at all. Use conservative assumptions and show them. Input defaults that pre-fill unrealistically high numbers make the output unbelievable. Omitting any explanation of the calculation model invites skepticism. Forgetting to let the user export or share the output removes the main conversion pathway for internal champions.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: The archetype's comfort with data density and numeric specificity aligns directly with a detailed ROI breakdown. Monospace output typography reinforces precision. Stripe, Vercel, and infrastructure brands use this well.
- **Clinical Trustworthy**: Financial and healthcare platforms where the purchase requires internal justification depend on credible numbers. The calculator format matches the archetype's authority-and-evidence register.
- **Bold Confident**: A single striking output number ("Save $240,000 per year") fits the archetype's preference for direct claims at display scale.

Less natural with:

- **Editorial Restrained**: The archetype's restraint sometimes reads against the transactional energy of a calculator. If used, the calculator should be understated in form: no animated counters, no confetti, clean numeric output only.
- **Luxe Considered**: Luxury brands rarely lead with ROI framing; the value proposition is quality and experience rather than financial return. A cost calculator would undercut the positioning.
- **Retro Nostalgic**: The pattern is inherently forward-looking and numeric; it conflicts with the archetype's emotional, memory-driven register.

## Related patterns

- `02-savings-calculator.md` for the switching-cost variant of this pattern
- `06-pricing-tier-configurator.md` for the pricing side of the same calculator intent
- Lead capture patterns for the email-gated output variation

## Component implementation

This pattern is implemented by the [`savings-calculator`](../../components/savings-calculator/) component, which provides a generic config-driven calculator API. The same component covers both savings calculations and ROI calculations via different compute functions. See the savings-calculator README for the SaaS migration example (savings) and the ROI calculator example (cost analysis).

## Sources

- Cialdini, Robert: "Influence" (commitment-consistency principle)
- CXL Institute: interactive content conversion rate benchmarks
- Forrester Research: B2B self-service buying behavior studies
- Outgrow 2025 Interactive Content Benchmark Report (interactive forms at 47.3% vs. static at 2.8%)
