# Single CTA Pricing Card

**Category**: CTA
**Subcategory**: Pricing CTA
**Conversion intent**: Convert a visitor who has self-selected a pricing tier into the appropriate signup, trial, or sales-contact action for that tier

## What it is

A CTA button placed within a pricing tier card, one per card, with copy and destination specific to that tier's conversion action. The button is not the same across all cards: the free tier might say "Start free," the paid tier might say "Start your trial" or "Get started," and the enterprise tier might say "Contact sales" or "Talk to us." Each card's CTA reflects the actual next step for a visitor at that price point.

## Why it works

By the time a user is reading pricing cards, they are among the highest-intent visitors on the site. Baymard Institute research on pricing page UX shows that decision friction at this stage is highly consequential: a confusing or mismatched CTA label (e.g., "Contact us" on a self-serve tier) introduces doubt and causes drop-off. Matching the CTA label to the actual action (self-serve signup vs sales contact) reduces friction by confirming to the user that the next step is what they expected. The card-level specificity also communicates product confidence: the brand knows who each tier is for and says so directly.

## When to use

- The product has 2 or more distinct pricing tiers with meaningfully different conversion actions
- At least one tier requires a sales conversation (enterprise/custom) and at least one is self-serve (the distinction matters for CTA labeling)
- The pricing page is the primary conversion surface for bottom-of-funnel visitors
- The product's trial or freemium model differs by tier (some tiers start immediately; others require approval)

## When NOT to use

- All tiers have identical conversion actions; use a single page-level CTA instead
- The pricing model is entirely custom and no self-serve option exists; pricing cards with CTAs are not the right surface for fully custom pricing
- The product is not transactional at the pricing page (some enterprise products use pricing pages as awareness surfaces, not conversion surfaces)

## Variations

### "Start free" vs "Start trial" vs "Contact sales"
The most common three-tier pattern in B2B SaaS. Free tier: "Start free" (no friction, immediate account creation). Paid tier: "Start trial" or "Start your trial" (communicates the trial period explicitly, sets expectations). Enterprise tier: "Contact sales" or "Talk to us" (signals that a human will be involved).

### "Get started" by tier with qualifier microcopy below
The button label is the same across tiers ("Get started") but sub-button microcopy differentiates: "Free, no credit card" under the free tier button; "14-day trial, cancel anytime" under the paid button; "Custom pricing, response in 24 hours" under enterprise. The visual consistency simplifies scanning while the microcopy provides necessary distinction.

### "Upgrade" or "Switch" for existing users in-product
When pricing cards appear inside the product (billing settings, upgrade prompts), the CTA reflects the user's current state. Existing free users see "Upgrade to Pro." Existing paid users see "Switch to Business." This variant is in-product rather than marketing-site; copy accuracy is even more important because the user is making a real financial decision.

## Real-world examples

- **Linear pricing page**: Tier cards for Free, Basic, Business, and Enterprise each have CTAs appropriate to the tier. Enterprise uses "Contact us" while self-serve tiers use "Get started" with tier-appropriate qualifier copy.
- **Vercel pricing page**: Three-tier layout with "Deploy" or "Get started" for self-serve tiers and "Contact us" for Enterprise, with supporting microcopy differentiating trial conditions.
- **Notion pricing page**: Free tier "Get Notion free," Plus and Business tiers "Get started," Enterprise tier "Request a demo" or "Contact sales." The shift in verb from "get" to "request" signals the change in process.
- **Stripe pricing page**: Revenue Recognition and other add-on product cards have tier-specific CTAs with varying labels based on whether the action is self-serve or sales-assisted.
- **HubSpot pricing page**: Free CRM tier "Get started free," paid tiers "Get started" with price context, Enterprise tiers "Contact sales."

## Implementation notes

- **Mobile behavior**: Pricing cards stack to single column on mobile. Each card occupies full viewport width. The CTA button goes full-width within the card. If a "recommended" or "most popular" card is highlighted, ensure it appears in a prominent visual position after stacking (often, the recommended card moves to the top of the stack on mobile via CSS order).
- **Accessibility**: Each pricing card CTA must be uniquely labeled. "Get started" repeated four times across four cards is ambiguous for screen readers. Use `aria-label` to add tier context: `aria-label="Get started with the Business plan"`. The pricing card structure should use semantic markup (headings for tier names, lists for features) so screen readers can navigate by heading to find the tier of interest.
- **Performance**: Pricing pages with annual/monthly toggle (common in SaaS) should update CTA microcopy and prices in response to the toggle without a page reload. Use state management carefully; failing to update the CTA qualifier copy when the billing period changes is a common oversight.
- **Common pitfalls**: Using "Learn more" as the CTA on a pricing tier card (provides no actionable direction). Labeling the enterprise tier with the same CTA as self-serve tiers when the process is different. Omitting microcopy that explains trial conditions or commitment level, leaving users uncertain about what they are agreeing to. Using a "Contact us" button that opens a generic contact form rather than a context-aware sales form with the tier pre-selected.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: Developer-audience SaaS products use this pattern extensively; precise CTA labeling matches the archetype's preference for exact language. Linear, Vercel, Stripe.
- **Clinical Trustworthy**: Transparent, accurate CTA labels per tier match the archetype's evidence-first, no-ambiguity commitment.
- **Bold Confident**: High-contrast pricing cards with direct CTA copy ("Start free. Right now.") fit the archetype's assertive register.
- **Editorial Restrained**: When card design is restrained and CTA copy is precise, this pattern fits naturally within the archetype's typographic discipline.

Less natural with:

- **Luxe Considered**: Luxury brands rarely present pricing in a tiered card format; the transactional structure conflicts with the archetype's premium register.
- **Playful Energetic**: This archetype can use pricing cards but benefits from more expressive copy and color differentiation across tiers than a standard card treatment provides.

## Related patterns

- `13-multi-option-cta-cluster.md` for the collective view of all tier CTAs as a group
- `15-reverse-trial-cta.md` for the trial-first variant of the paid-tier CTA
- `18-disabled-then-enabled-cta.md` for cases where the CTA is gated until a selection is made

## Sources

- Baymard Institute: Pricing page UX research (baymard.com)
- CostBench: "Linear Pricing 2026" (costbench.com)
- Webstacks: "20 Best SaaS Pricing Page Examples in 2025" (webstacks.com)
- Nielsen Norman Group: "Microcopy: Tiny Words With a Huge UX Impact" (nngroup.com)
