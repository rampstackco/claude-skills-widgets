# Hero Stack: Primary Plus Secondary

**Category**: CTA
**Subcategory**: Composite CTA
**Conversion intent**: Simultaneously address two distinct visitor intents (ready-to-start vs needs-more-information) from the hero surface

## What it is

A composite CTA unit that pairs a primary solid-fill button with a secondary option, typically a lower-weight button or text link, presented side-by-side or stacked. The pattern is the de-facto standard for B2B SaaS hero sections because most products serve two audiences simultaneously: visitors ready to sign up and visitors who need to understand the product before committing. The two CTAs give each group a path without forcing a single decision.

## Why it works

Hick's Law suggests that more choices slow decisions, but this is qualified by the nature of the alternatives. When choices are genuinely different in intent (start immediately vs learn more), offering both actually increases total conversion relative to a single CTA: visitors who needed more context take the secondary path and convert later rather than bouncing. Secondary CTAs that add 34% total clicks while reducing target conversions by only 12% have been documented in B2B SaaS contexts, producing a net positive effect on qualified pipeline. The key is that the two options must be visually unequal; when both buttons appear equal-weight, the decision is genuinely harder.

## When to use

- The hero serves two meaningfully different audiences with different readiness levels
- One path is self-serve and one is sales-assisted (common in B2B with free trial plus enterprise)
- The product has a video or demo that removes a significant information barrier before signup
- The page needs to serve both individual users and team buyers from the same hero

## When NOT to use

- A single conversion path is clearly dominant and a second path would only dilute it
- The two CTAs lead to the same destination
- The brand archetype uses a single-CTA hero as a design principle (some Minimal Essentialist and Luxe Considered brands do)
- The secondary CTA is not genuinely useful, just added because "two buttons feels safer"

## Variations

### Equal-weight pairing
Two buttons of similar visual treatment: one solid-fill and one outlined. Creates a genuine choice moment. Used when both audiences are large and the brand wants to signal both paths equally. Appropriate for products with meaningful free-tier and paid-tier distinctions.

### Asymmetric (solid primary, text link secondary)
The strongest hierarchy differentiation. Solid-fill button for the primary action; text link (often with arrow) for the secondary. The visual gap is immediate. Common among Editorial Restrained and Technical Precise brands.

### Primary button plus "watch demo" secondary
Primary action is the signup; secondary is a video demo trigger (modal or navigation). The secondary provides information rather than an alternate conversion path. Used when a product video significantly closes the understanding gap before signup.

### Stacked layout
Buttons stack vertically rather than sitting side-by-side. Common on mobile viewports and some desktop hero layouts where horizontal space is constrained or where the headline is long. Stacked layouts require careful sizing to avoid the secondary looking like an afterthought.

## Real-world examples

- **Linear**: Hero section uses "Get started" (solid ink primary) alongside "View pricing" as a text link secondary. Canonical example of the asymmetric variant.
- **Vercel**: "Deploy" or "Get started" as the solid primary alongside "Read documentation" or "Contact sales" as secondary. Pattern consistent across marketing and product pages.
- **Stripe**: "Start now" (solid violet primary) with "Contact sales" as a text link. The secondary exists specifically for enterprise and high-volume prospects.
- **Notion**: "Get Notion free" (solid black primary) paired with "Request a demo" as an outlined secondary. Serves the individual-vs-team audience split cleanly.
- **Mercury**: "Open an account" (primary) alongside "See how it works" or "Book a call" secondary. Serves the business founder who wants to act now against the CFO who needs a sales conversation.

## Implementation notes

- **Mobile behavior**: Side-by-side CTAs collapse to a stacked column on narrow viewports. Primary button goes full-width on mobile. Secondary button either goes full-width beneath or reverts to a centered text link. Test both layouts; full-width secondary can look over-weighted on mobile.
- **Accessibility**: Both buttons must be separately identifiable via screen reader. Use distinct, descriptive labels. Do not rely on visual position alone to communicate hierarchy; the primary should be labeled accordingly if screen readers encounter them in a non-visual sequence.
- **Performance**: No special considerations. Avoid JavaScript-heavy hover effects on both buttons simultaneously, as competing animations distract from hierarchy.
- **Common pitfalls**: Making both buttons the same visual weight, eliminating hierarchy. Adding a secondary CTA without a genuine audience for it. Choosing secondary copy that is too vague ("Learn more") when specific copy ("See a 2-minute demo") converts better. Failing to test both paths in analytics; the secondary CTA's downstream conversion rate determines whether keeping it is worthwhile.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: The structured two-path approach mirrors the archetype's respect for user decision-making. Stripe, Vercel, Linear all use it.
- **Editorial Restrained**: With the asymmetric variant (solid + text link), the pattern reads as considered rather than commercial.
- **Bold Confident**: Equal-weight pairing works in this archetype when both options are assertive in copy and visual weight.
- **Warm Conversational**: The dual-path setup matches the archetype's readiness to meet users where they are.

Less natural with:

- **Luxe Considered**: This archetype typically uses a single CTA or text-only links; a paired button layout introduces too much commercial structure.
- **Minimal Essentialist**: Single-CTA hero is a design principle for many brands in this archetype; the pattern introduces hierarchy complexity against the aesthetic.

## Related patterns

- `01-primary-button-cta.md` for the primary button component in this composite
- `02-secondary-text-cta.md` for the secondary link component
- `20-asymmetric-cta-primary-de-emphasized-secondary.md` for the explicitly asymmetric variant

## Sources

- Hick's Law: "Hick's Law: Making the choice easier for users" (nngroup.com)
- HomepageDream (Vercel deployment): "Secondary CTA Strategy: How to Add a Second Button Without Killing Conversions" (homepagedream.vercel.app)
- Spaced Digital: "Primary and secondary call-to-actions" (spaced.digital)
