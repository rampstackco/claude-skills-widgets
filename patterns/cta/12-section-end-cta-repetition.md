# Section-End CTA Repetition

**Category**: CTA
**Subcategory**: Repeating CTA
**Conversion intent**: Capture conversions at multiple scroll depths by placing a CTA at the end of each major content section

## What it is

A CTA placed at the conclusion of every major section on a long landing page, allowing visitors to act the moment they are convinced without requiring them to scroll further. The CTA is typically the same across sections (same button, same destination) though copy can vary to reflect the evidence just presented. This pattern acknowledges that visitors read landing pages non-linearly and reach decision readiness at different depths.

## Why it works

Scroll depth research from Chartbeat and CXL consistently shows that conversion events distribute across page depth, not just at the hero and footer. A visitor convinced by the second section's proof should not have to scroll past two more sections to find a way to act. The commitment and consistency principle (Cialdini) also applies: each section's CTA is a small invitation; a user who considers it seriously three times is more likely to eventually click than a user who sees it once at the top. The pattern is most effective when sections are genuinely persuasive and the CTA follows naturally from the section's argument.

## When to use

- Long landing pages with 4 or more distinct content sections, each making a different argument for the product
- Self-serve products where the user can sign up immediately once convinced; no sales call required
- High-traffic pages where conversion rate optimization is worth systematic investment
- Products with multiple value propositions targeting different user motivations; each section's CTA follows its own argument

## When NOT to use

- Short pages where section-end CTAs would feel intrusive before context is established
- Pages with multiple different CTAs at different funnel stages; repetition of a single CTA would be inconsistent with the page's logic
- Brand archetypes that explicitly avoid commercial repetition (Luxe Considered, Minimal Essentialist)
- Pages for high-consideration B2B purchases where a sales conversation should precede the CTA

## Variations

### Identical CTA repeated
The same button label, color, and destination appears at the end of every section. Maximum consistency; the user knows exactly what the action is regardless of where they are on the page. Appropriate when the primary CTA is the only meaningful action on the page.

### Varying copy, same destination
The button destination is identical but the copy adapts to the section's argument. After a pricing section: "See if it fits your budget." After a features section: "Try all of these features free." After a social proof section: "Join the teams already using it." More persuasive than identical repetition; more labor-intensive to write.

### Building urgency through repetition
Each instance of the CTA adds a layer of urgency or social proof: first appearance is standard, second adds "No credit card required," third adds "Join 10,000+ teams." This variant is appropriate when the page structure intentionally builds toward a strong final CTA and the repetition reflects that arc.

## Real-world examples

- **ConvertKit (Kit)**: Long-form creator landing pages repeat the "Start for free" CTA at the end of each benefit section, with the copy adapting to the section's topic while the destination and button styling remain consistent.
- **ClickUp**: Feature-heavy landing pages repeat the primary CTA at section endings throughout, accommodating the long scroll length of their feature matrix pages.
- **Notion**: Marketing landing pages for specific use cases (project management, wiki, notes) include the primary CTA after each use-case proof section, recognizing that different user types will be convinced by different sections.
- **Webflow**: Feature and solution pages repeat the "Get started" CTA after each major feature demonstration.
- **HubSpot product pages**: Repeat the primary CTA after each feature section on long feature-detail pages, with copy that echoes the section's specific claim.

## Implementation notes

- **Mobile behavior**: Section-end CTAs on mobile should be full-width buttons. Ensure spacing above and below the button is sufficient (at least 24px of breathing room) to avoid the button feeling cramped at the base of a content-dense section.
- **Accessibility**: Each CTA button on the page must be distinguishable from its siblings via context. If every button reads "Get started," users navigating by screen reader via button list cannot differentiate them. Add `aria-label` attributes that include the section context: `aria-label="Get started after seeing our integrations"`. Alternatively, use `aria-describedby` pointing to the section heading.
- **Performance**: No considerations beyond standard button rendering. If buttons include hover animations, keep transitions below 200ms and GPU-composited.
- **Common pitfalls**: Placing the CTA too close to the top of a section rather than at the end (defeats the purpose; the user has not seen the section's argument yet). Using generic copy ("Learn more") that does not connect to the section's specific claim. Over-repeating on short pages where the pattern reads as desperation rather than service. Failing to test whether the repeating CTA pattern actually improves conversion versus single-CTA pages, since results are context-dependent.

## Archetype compatibility

This pattern fits naturally with:

- **Bold Confident**: Repetition at the end of assertive sections reinforces the archetype's unapologetic commercial register.
- **Warm Conversational**: When the varying-copy variant is used, each section-end CTA feels like a natural conclusion to a friendly argument: "Convinced? Here's where to start."
- **Technical Precise**: On feature-matrix pages common in this archetype, section-end CTAs after each feature group are expected and logical.

Less natural with:

- **Editorial Restrained**: This archetype carefully controls where CTAs appear; mechanical repetition at every section end undermines the considered placement the archetype depends on.
- **Luxe Considered**: Premium brands hold CTAs to specific moments; repetition reads as commercial pressure against the archetype's patient pacing.
- **Minimal Essentialist**: Every section-end CTA adds visual elements the archetype is committed to removing.
- **Documentary Honest**: Story-driven pages for this archetype typically end with a single, final invitation rather than commercial prompts throughout the narrative.

## Related patterns

- `09-footer-cta-section.md` for the page-end conversion surface this pattern supplements
- `06-hero-stack-primary-plus-secondary.md` for the hero-level CTA at the start of the same page
- `03-sticky-bottom-bar-cta.md` for a persistent alternative that complements section-end repetition

## Sources

- Chartbeat: Scroll depth and engagement research (chartbeat.com)
- CXL Institute: CTA placement research (cxl.com)
- Cialdini, R.B.: "Influence: The Psychology of Persuasion" (commitment principle)
- Landingi Blog: "20 Best CTA on Landing Page Examples" (landingi.com)
