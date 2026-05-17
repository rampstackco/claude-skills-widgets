# Pricing Tier Configurator

**Category**: Interactive Tooling
**Subcategory**: Configurator
**Conversion intent**: Help the user self-identify the correct pricing tier and reduce inbound "what plan do I need?" support volume

## What it is

An interactive pricing surface where the user adjusts inputs (seat count, usage volume, feature selections) and the interface responds with a real-time tier recommendation or total price estimate. Distinct from a static pricing table in that the output changes based on the user's stated needs rather than presenting all tiers simultaneously.

## Why it works

Interactive pricing shifts the frame from "which tier is right for me?" to "this is what I need and this is what it costs." The user drives the calculation, which applies the same commitment principle as the ROI calculator: a number the user derived feels more credible and more personal than a number the vendor states. Self-service pricing research is also the norm for PLG products; Gartner and Forrester consistently report that B2B buyers prefer to assess pricing independently before engaging a sales rep. A configurator that surfaces the right tier without requiring a sales call removes a significant friction point.

## When to use

- Pricing is seat-based, usage-based, or feature-based and a single slider meaningfully changes the tier recommendation
- The product has three or more tiers and the right choice is genuinely non-obvious from feature lists alone
- The target audience is self-service-oriented and resistant to "contact sales" as the primary pricing pathway
- Inbound sales chat is frequently asked "what plan do I need?" (a signal that static pricing is failing)

## When NOT to use

- Pricing is fully opaque or enterprise-negotiated and no public tier makes sense to display
- The product has only two tiers (free vs. paid), where a configurator adds complexity without adding clarity
- The pricing model is too complex to represent honestly in a slider or dropdown (configuring incorrectly could undermine trust)
- The PLG motion depends on users starting at free and upgrading organically; a configurator that directs to paid tiers too early disrupts that motion

## Variations

### Slider-based
A horizontal slider for the primary variable (seats, monthly events, API calls) with tier boundaries visually marked. The tier label and price update as the slider moves. Fastest interaction; works best when one variable dominates the tier decision. Vercel's pricing page and MongoDB Atlas's calculator both use slider inputs as the primary configurator control.

### Dropdown-based
A series of dropdowns for team size, primary use case, and required features. More structured than sliders; better when the variables are categorical rather than continuous. Suited to products where "how many seats" is less important than "which features" in determining the right tier.

### Feature-checkbox-based
A list of features the user checks or unchecks; the configurator responds with the lowest tier that includes all selected features. Honest and educational: it shows exactly which features unlock which tiers. Requires the feature list to be genuinely meaningful, not a list of trivial add-ons.

## Real-world examples

- **Vercel**: vercel.com/pricing uses a seat count input that updates the monthly total for the Pro plan in real time. Team size is the primary pricing variable, and the interface makes the per-seat math transparent.
- **MongoDB Atlas**: mongodb.com/pricing/calculator is a full cluster configurator where users select cloud provider, region, cluster tier, and storage. The total estimated cost updates with each selection. A detailed example of the multi-input calculator variant applied to infrastructure pricing.
- **Linear**: linear.app/pricing includes a seat slider on the paid tiers that computes the monthly total as team size changes, helping teams quickly determine whether the per-seat cost fits their budget.
- **Notion**: notion.so/pricing provides a member-count input on each paid plan that updates the total cost estimate, making team-scaled pricing immediately legible.
- **Figma**: figma.com/pricing has used seat-based interactive pricing that computes the monthly team total based on editor count, with viewer seats excluded from billing and clearly labeled.
- **Airtable**: airtable.com/pricing uses a billing cycle toggle (monthly vs. annual) that updates all tier prices simultaneously, paired with a seat count input that computes the plan total.

## Implementation notes

- **Mobile behavior**: Sliders on mobile require generous touch targets (minimum 44px hit area). Consider replacing sliders with stepper inputs (plus/minus buttons) on screens narrower than 480px; sliders are imprecise on small touchscreens. The tier recommendation should be visible without horizontal scrolling.
- **Accessibility**: Sliders require `role="slider"` with `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`. The current tier recommendation must update in an `aria-live` region so screen reader users receive the change. Keyboard users should be able to move the slider with arrow keys.
- **Performance**: All tier calculation logic should run client-side. No server round-trip between input change and displayed result. If the pricing model involves many variables, memoize the calculation function to prevent redundant computation on slider drag.
- **Common pitfalls**: Tier boundaries that are invisible to the user until they accidentally cross one: the slider should clearly mark where tier changes occur. Omitting annual vs. monthly toggle when annual pricing is significantly different. Showing only the recommended tier price without also showing what the user would get at the next tier up (misses the upsell opportunity). Configurators that produce "contact sales" for all inputs above a low threshold undermine the entire self-service premise.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: Infrastructure, developer tools, and platform products with usage-based pricing naturally express their pricing through a configurator. MongoDB Atlas, Vercel, and Linear exemplify this. The audience expects to configure rather than ask.
- **Minimal Essentialist**: Simple slider-based pricing with a single variable and clean output fits the archetype's reduction ethic. The configurator should be as simple as the pricing model it represents.
- **Bold Confident**: A pricing configurator that produces a confident, specific number ("Your team of 12 costs $240/month") aligns with the archetype's direct assertion of value.

Less natural with:

- **Luxe Considered**: Premium brands avoid making pricing feel like arithmetic. A configurator implies the product is a commodity to be priced by input, which conflicts with the archetype's "worth it" positioning.
- **Documentary Honest**: The pattern is inherently future-oriented (here is what you will pay); Documentary Honest brands anchor in present reality and evidence. The configurator frame can feel forward-projecting in a way that conflicts with the archetype's grounding.

## Related patterns

- `01-roi-cost-calculator.md` for pairing pricing with ROI justification on the same surface
- `02-savings-calculator.md` for framing the pricing in terms of savings versus current spend
- `07-product-feature-configurator.md` for when the output is a product configuration rather than a price

## Component implementation

A v2 implementation of this pattern is available in [`components/pricing-tier-configurator/`](../../components/pricing-tier-configurator/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Gartner B2B buyer research: self-service pricing preference in software purchasing
- MongoDB Atlas pricing calculator: mongodb.com/pricing/calculator
- Vercel pricing page: vercel.com/pricing
