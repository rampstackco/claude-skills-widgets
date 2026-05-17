# Product Feature Configurator

**Category**: Interactive Tooling
**Subcategory**: Configurator
**Conversion intent**: Let the user compose their exact product variant or setup, then convert the configuration into a purchase or inquiry

## What it is

An interactive tool where the user selects options across dimensions (color, material, storage, feature modules) and receives a configured product with a live price update and a clear path to purchase or inquiry. The output is a specific configured product, not a recommendation of which tier to buy.

## Why it works

Configurators work through the endowment effect and investment escalation. As a user makes selections, they begin to feel ownership over the product they are building, even before purchasing. Each additional choice deepens this effect; by the time the configuration is complete, the user has made a series of small commitments that collectively build toward a purchase decision. This is the same psychological mechanism as IKEA's assembly effect, applied to the pre-purchase configuration experience. Research by CXL and others shows that configurator-guided shoppers complete purchases at meaningfully higher rates than catalog browsers because they arrive at the cart with a specific intent rather than a general consideration.

## When to use

- The product has meaningful variants that affect both function and price
- The audience benefits from visualizing the product before purchasing (physical goods, software feature bundles, hardware)
- Customization is a selling point: the product's differentiation includes the ability to configure to specific needs
- The product catalog is large enough that browsing is inefficient but narrow enough that configuration is tractable

## When NOT to use

- The product has no meaningful variants (configurator adds false complexity)
- The configuration space is so large that users become overwhelmed by choices before completing
- Visual preview is expected but technically infeasible to produce in real time
- The product requires a consultation or professional assessment before configuration is meaningful (configurator becomes misleading)

## Variations

### Simple multi-select
A set of independent option groups (dropdown, toggle, or radio group per dimension) with a live price update. No visual preview. Best for software feature bundles, service tiers with add-ons, or products where visualization does not add materially to the decision.

### Complex multi-step
Configuration is broken across steps, each unlocking the next based on prior selections. Reduces the visible option space at each step, lowering cognitive load at the cost of a longer flow. Best for products with dependent options (selecting one material affects which colors are available, selecting one tier affects which modules are available).

### With visual preview
A split layout: configuration controls on one side, a live visual representation updating on the other. The visual may be a rendered image, a stylized product illustration, or a live mockup. Best for physical goods (vehicles, apparel, custom hardware) or software surfaces where the UI changes based on selected features. Tesla's configurator and Apple's Build to Order are both in this category.

## Real-world examples

- **rampstack.co/showcase/tooling**: The Build Configurator at rampstack.co/showcase/tooling/build-configurator is a live implementation of this pattern, demonstrating multi-step feature selection with live pricing output.
- **Tesla**: tesla.com/modely/design is the canonical web-based product configurator with live visual rendering. Users select trim, color, interior, and wheels; the visual updates in real time and the purchase summary reflects each selection.
- **Apple (Build to Order)**: apple.com/shop/buy-mac allows users to configure any Mac model with custom CPU, memory, storage, and pre-installed software. The configured price and estimated ship date update with each selection.
- **Porsche**: porsche.com/usa/modelstart/all/ runs a full car configurator that is considered a brand experience as much as a sales tool. The visual quality and interaction detail signal the brand's craft before the product is purchased.
- **Figma**: figma.com/pricing uses feature-checkbox logic that shows which features are included per tier, allowing users to understand exactly which tier satisfies their selected requirements without a sales call.
- **Webflow**: webflow.com/pricing employs a workspace and site configuration flow where users select site plan type and workspace plan, with the combined output showing a total that reflects both selections.

## Implementation notes

- **Mobile behavior**: Side-by-side configurator-plus-preview layouts collapse to stacked on mobile. The preview should appear above the controls (not below) so the user can see the result without scrolling past all controls. Complex multi-step flows are better suited to mobile than complex single-page layouts with many simultaneous visible controls.
- **Accessibility**: Option groups require `<fieldset>` and `<legend>`. Visual preview changes must be announced via `aria-live` for screen reader users who cannot see the visual update. Ensure that every selected option is communicated textually, not only through visual state change on the product preview.
- **Performance**: Visual preview performance is the most common issue. Avoid unoptimized full-image swaps on every option change. Use CSS-composited transforms or pre-render the option combination matrix for smaller option spaces. For large visual option sets, use intersection observer to lazy-load option images before they are selected.
- **Common pitfalls**: Allowing impossible option combinations without surfacing the conflict clearly. Omitting a "reset to default" option so users who make unwanted changes cannot recover easily. Producing a configured price that does not survive to the checkout page (price mismatch between configurator and cart destroys trust immediately). Visual previews that are obviously low quality relative to the rest of the design signal that the preview was added as an afterthought.

## Archetype compatibility

This pattern fits naturally with:

- **Luxe Considered**: Premium product configurators (Porsche, Apple) are defining examples of this archetype. The visual quality of the preview, the pace of the interaction, and the considered weight given to each option signal that the product is worth configuring carefully.
- **Technical Precise**: Software feature configurators for developer platforms fit naturally. The audience expects to specify their requirements precisely, and the configurator honors that by showing exactly what is included and excluded at each configuration state.
- **Bold Confident**: A configurator that produces a big, specific total number and a confident "Order now" CTA fits the archetype's direct energy. Consumer electronics and direct-to-consumer physical goods brands in this register use configurators as a core conversion surface.

Less natural with:

- **Warm Conversational**: The configurator is a self-service instrument; Warm Conversational brands sometimes prefer guided wizards that ask questions rather than displaying a full option matrix. If used, the surrounding copy should be genuinely warm and the completion moment should feel like a celebration, not a transaction.
- **Documentary Honest**: The configurator implies that the product is a designed object worth customizing. Documentary Honest brands ground the product in raw reality and real-world evidence; a glossy configurator can feel at odds with that positioning.

## Related patterns

- `05-multi-step-recommendation-wizard.md` for guiding users who cannot configure independently
- `06-pricing-tier-configurator.md` for when the output is a pricing tier rather than a product variant
- `08-comparison-tool-vs-competitors.md` for when the user needs to compare configured options against alternatives

## Component implementation

A v2 implementation of this pattern is available in [`components/product-feature-configurator/`](../../components/product-feature-configurator/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Thaler, Richard: "Misbehaving" (endowment effect research)
- CXL Institute: product configurator conversion rate research
- Tesla Model Y design tool: tesla.com/modely/design
- Apple Build to Order: apple.com/shop/buy-mac
