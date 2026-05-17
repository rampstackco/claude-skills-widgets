# Savings Calculator

**Category**: Interactive Tooling
**Subcategory**: Calculator
**Conversion intent**: Surface the financial cost of staying with the current solution and make the switching decision feel economically obvious

## What it is

An interactive calculator where the user enters current vendor cost and usage volume, and receives a projection of dollar savings, percentage savings, and payback period from switching to the product. Distinct from the ROI calculator in that the frame is subtraction (what you stop paying) rather than addition (what you gain).

## Why it works

Loss aversion is the sharpest motivator in economics: people feel the pain of paying too much more acutely than the pleasure of gaining equivalent value. A savings calculator reframes the switching decision from "should we adopt this?" to "how long are we willing to keep overpaying?" The prospect's own vendor cost becomes the villain in the narrative, and the tool quantifies exactly how much the inaction costs. Cialdini's scarcity principle applies in an indirect form: every month without switching is a measurable, named loss.

## When to use

- The product is cheaper than the incumbent and the savings are substantial enough to clear switching costs
- The competitor landscape is well-known and users can confidently enter what they currently pay
- The audience controls or influences budget decisions (founders, CFOs, operations leads)
- The category has a dominant incumbent with known pricing that the product undercuts

## When NOT to use

- The product is premium-priced and the savings framing would undercut its positioning
- Switching costs (data migration, retraining, integration work) would visibly exceed projected savings for most inputs
- Current vendor pricing is opaque enough that users cannot enter a credible number (the output will be meaningless)
- The target audience does not think about the product in budget terms (individual contributors, end users without spend authority)

## Variations

### Dollar savings output
The primary output is a total dollar amount saved per year, with a secondary line showing payback period. Clean, direct. Best when the savings figure is large enough to be the headline number.

### Percentage savings output
The primary output is a percentage reduction, with dollar amount secondary. Works better when the absolute dollar figure varies widely across customer sizes and a single example number would feel out of range for many visitors.

### Time-plus-money output
Outputs both financial savings and time saved (hours per month, employee-days per year). Effective when the product replaces manual work as well as vendor cost. Requires two categories of inputs, which increases form complexity but broadens the value framing.

## Real-world examples

- **Ramp**: ramp.com/savings-calculator asks for current monthly spend volume and outputs projected savings from cashback, yield on idle cash via Ramp Treasury, and compliance improvement. The calculator uses conservative, documented assumptions and shows them.
- **Brex**: brex.com presents spend-management savings claims on its homepage with input-driven personalization for teams switching from legacy corporate card programs or expense management tools.
- **Mercury**: Mercury's comparison pages (mercury.com/compare) quantify the cost differential between Mercury's fee structure and traditional business banking, framing the gap as direct savings for early-stage companies.
- **Notion**: notion.so/pricing includes a seat-count slider that shows the savings versus per-seat pricing at competing tools, making the savings concrete as team size changes.
- **Loom**: loom.com has used meeting-cost calculators that compute meeting time cost from headcount and average salary, presenting async video as a savings mechanism on wasted synchronous time.

## Implementation notes

- **Mobile behavior**: Keep inputs to three or fewer fields for mobile variants. A slider for "current monthly spend" with a numeric input fallback is more tap-friendly than a pure text input on small screens.
- **Accessibility**: Sliders require keyboard operability (arrow keys) and visible current-value display. Do not rely on slider position alone to communicate value; always show the numeric label adjacent to the slider.
- **Performance**: Savings calculations are simple arithmetic. No network request should be required. If assumptions are complex, precompute the lookup table and embed it as JSON rather than hitting an API on each input change.
- **Common pitfalls**: Inflating savings projections to produce impressive numbers; users who know their actual costs will distrust obviously optimistic models. Not surfacing the assumptions behind the calculation leaves the number undefended. Omitting the payback period ignores the single most common objection to switching: "what about the migration cost?" Designing inputs that only accept one currency or one billing cadence locks out international visitors.

## Archetype compatibility

This pattern fits naturally with:

- **Clinical Trustworthy**: Fintech and financial-services brands use this pattern extensively because their audience is numeric and cost-oriented. Mercury, Brex, and Ramp all operate in this register. The savings calculator is essentially a trust surface: it says "we are willing to show you the math."
- **Technical Precise**: Developer-tools and infrastructure brands whose pricing undercuts the incumbent (e.g., a cloud provider replacing a more expensive alternative) use the savings frame naturally. The audience reads the model assumptions and trusts specificity.
- **Warm Conversational**: Works when the copy around the calculator is honest and low-pressure. "Here is what you might save. No commitment needed." Avoids the aggressive sales tone that would feel off-register.

Less natural with:

- **Luxe Considered**: Premium brands do not lead with savings; the value proposition is quality, not price efficiency. A savings calculator reads as a race-to-the-bottom signal in this register.
- **Playful Energetic**: The savings frame is inherently serious and budget-oriented; forced playfulness around dollar amounts feels incongruous.
- **Editorial Restrained**: Can work, but requires significant tonal restraint in the surrounding copy. The calculator itself should be formally plain: no animated number tickers, no celebratory output states.

## Related patterns

- `01-roi-cost-calculator.md` for the additive value framing rather than subtraction framing
- `06-pricing-tier-configurator.md` for the seat/volume configuration that often precedes a savings output
- Lead capture patterns for savings report gating

## Component implementation

A v2 implementation of this pattern is available in [`components/savings-calculator/`](../../components/savings-calculator/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Kahneman, Daniel: "Thinking, Fast and Slow" (loss aversion research)
- Cialdini, Robert: "Influence" (scarcity principle)
- Ramp savings calculator methodology: ramp.com/savings-calculator
