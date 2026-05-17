# Multi-Option CTA Cluster

**Category**: CTA
**Subcategory**: Choice Architecture CTA
**Conversion intent**: Route distinct visitor segments to their appropriate conversion path without requiring a single generic CTA to serve all audiences

## What it is

A group of 2 to 4 equal- or near-equal-weight CTAs presented together, each targeting a distinct visitor type or use case. Unlike the primary-plus-secondary pattern (which has a clear hierarchy), the multi-option cluster is explicitly choice-based: it presents options side by side and trusts the visitor to self-select. Common examples include "developer" versus "business" paths, "start free" versus "book a demo" versus "contact sales," or tier-based choices where the visitor must identify their own context before proceeding.

## Why it works

When a product genuinely serves multiple audiences with meaningfully different conversion paths, forcing a single CTA serves none of them optimally. Self-selection is more accurate than demographic targeting: visitors who choose the "developer" path self-identify as developers and arrive at the developer experience with correctly set expectations. Stripe's documentation of their own choice-architecture pages reflects this thinking: the pricing and signup flows separate developer-path and business-path visitors because the onboarding for each is different enough that conflating them reduces activation. Choice architecture (Thaler and Sunstein) works when the options are genuinely differentiated and the choice cost is low.

## When to use

- The product has 2 to 4 distinct audience segments with meaningfully different conversion experiences
- The onboarding or product experience differs substantially between segments (developer API setup vs admin-console setup)
- Analytics show that a single CTA is producing high drop-off because visitors are reaching the wrong destination
- The pricing model has 3 or more tiers that require the user to identify themselves before proceeding

## When NOT to use

- A single CTA serves all audiences adequately (adding choices increases decision friction)
- The differences between options are cosmetic rather than substantive
- More than 4 options are needed; at 5 or more, the cluster becomes a navigation problem, not a CTA pattern
- The audience is transactional and speed matters; choice architecture slows decision velocity

## Variations

### Two-path segment split
Two equal-weight options for distinct audience types. Example: "I'm a developer" and "I'm a business" with separate signup flows. Used when the product has a technical API layer and a commercial/admin layer that genuinely require separate onboarding.

### Free versus paid versus demo
Three-option cluster: free tier CTA, paid trial CTA, and sales demo CTA. Each option addresses a different level of purchase readiness. Common in B2B SaaS with a freemium tier, a paid self-serve tier, and an enterprise sales tier.

### Tier-labeled choice
Pricing-page variant where each tier has its own CTA button in its own column, all visible simultaneously. The user reads tier features, identifies their tier, and clicks the appropriate CTA. Covered more specifically in `14-single-cta-pricing-card.md`; when all tiers are visible together as a group, this is the multi-option cluster.

## Real-world examples

- **Stripe**: The stripe.com homepage and developer documentation present different entry points for developers (API documentation, quickstart) versus businesses (account creation, custom pricing). The separation is architectural, not just cosmetic: the paths lead to different destinations.
- **Vercel**: Pricing page presents Free, Pro, and Enterprise tier CTAs simultaneously ("Deploy," "Get started," "Contact us"), each with a different CTA label reflecting the different action required for that tier.
- **Linear**: Pricing page shows tier-level CTAs across Free, Basic, Business, and Enterprise columns. Each CTA is contextually labeled for its tier.
- **Notion**: On some entry points, Notion presents "For personal use" and "For teams" paths, reflecting that the onboarding and recommended templates differ substantially.
- **HubSpot**: CRM and Marketing Hub entry pages present role-based or use-case-based choice clusters, routing salespeople, marketers, and support agents to different product experiences.

## Implementation notes

- **Mobile behavior**: Side-by-side CTA clusters must stack vertically on mobile. On narrow screens, a two-column cluster becomes two full-width stacked buttons. Three or four options stack entirely; verify that the most important option is visually first (topmost) after stacking.
- **Accessibility**: Each button in the cluster must have a unique, descriptive label. Screen readers navigating via button list should be able to distinguish every option. If options are labeled with tier names, include the tier name in the `aria-label`. Keyboard users must be able to navigate between options in a logical order.
- **Performance**: No considerations beyond standard button rendering.
- **Common pitfalls**: Offering choices that are not genuinely different paths (fake segmentation adds friction without benefit). Failing to verify that downstream pages actually deliver the segment-appropriate experience (routing a "developer" visitor to a generic signup form defeats the purpose). Using more than 4 options, which crosses into navigation UI and away from CTA pattern. Omitting labels or explanations for each option when the segment names are not self-evident.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: Developer-versus-business splits are common in this archetype's commercial structure. Stripe, Vercel, and Linear use multi-option clusters on pricing and entry pages.
- **Clinical Trustworthy**: Transparency about tiers and paths matches the archetype's evidence-first voice. Showing all options respects the user's capacity to choose.
- **Bold Confident**: When each option is a strong action statement (not hedged copy), the cluster reads as confident acknowledgment of audience diversity.

Less natural with:

- **Luxe Considered**: Premium brands typically guide the user; presenting explicit choices can feel transactional and category-generic.
- **Warm Conversational**: This archetype often uses a single inviting CTA rather than a segmented cluster, preferring to meet all users with the same open door.
- **Minimal Essentialist**: Multiple equal-weight CTAs are the opposite of the archetype's commitment to single-focus surfaces.

## Related patterns

- `14-single-cta-pricing-card.md` for the per-tier pricing card variant
- `06-hero-stack-primary-plus-secondary.md` for the hierarchical primary-plus-secondary alternative
- `20-asymmetric-cta-primary-de-emphasized-secondary.md` for when one option should be clearly dominant

## Component implementation

A v2 implementation of this pattern is available in [`components/multi-option-cta-cluster/`](../../components/multi-option-cta-cluster/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Thaler, R.H. and Sunstein, C.R.: "Nudge: Improving Decisions About Health, Wealth, and Happiness" (choice architecture)
- Stripe: stripe.com/customers/linear (developer vs business architecture documented)
- Spaced Digital: "Primary and secondary call-to-actions" (spaced.digital)
- CostBench: "Linear Pricing 2026: 4 Plans from Free to $16/user/month" (costbench.com)
