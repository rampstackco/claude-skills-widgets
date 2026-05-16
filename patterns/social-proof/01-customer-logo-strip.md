# Customer Logo Strip

**Category**: Social Proof
**Subcategory**: Logo
**Conversion intent**: Reduce skepticism about vendor legitimacy; signal that recognized organizations trust the product

## What it is

A horizontal row of recognizable customer brand logos, typically positioned just below the hero section. Usually presented without copy other than a short label such as "Trusted by" or "Used by teams at." The logos themselves carry the message.

## Why it works

Cialdini's social proof principle states that people look to the behavior of others, particularly high-status others, to guide their own decisions. A logo strip where the viewer recognizes one or more brands activates this shortcut immediately. The recognition does not require reading; it is pre-verbal. Nielsen Norman Group research on visual scanning shows that logo rows below heroes receive predictable fixation because they sit at the natural reading-pause point after the headline. The pattern is especially effective when the recognized logos carry authority in the viewer's own domain (a developer seeing Airbnb and GitHub trusts differently than a developer seeing generic company names).

## When to use

- The product is B2B or prosumer and has recognizable customer organizations
- The hero introduces a large category claim and the logo strip grounds it immediately
- The page needs to reduce first-session skepticism without adding copy
- At least 4-6 logos can be shown that visitors in the target segment will recognize

## When NOT to use

- The product has no recognizable customers yet (empty or no-name logos harm trust)
- The target audience is highly niche and the logos on offer are from unrelated industries
- The brand archetype is Minimal Essentialist and the page relies on whitespace as a signal; a logo strip adds visual density that competes with the archetype

## Variations

### Monochrome logo row
All logos rendered in a single muted tone (typically the text color at 20-40% opacity, or a mid-gray). The most common variant. Reduces color competition with the hero and signals confidence without distraction. Use this as the default.

### Logos with "Trusted by" label
A short uppercase label precedes the row. Adds explicit framing for visitors who scan past implied context. Use when the page does not have a hero subhead that already implies the relationship.

### Animated scrolling marquee
Logos scroll horizontally in an infinite loop, allowing more logos to display without requiring more vertical space. Common on products with large customer bases. Trade-off: motion can distract from the hero CTA if positioned too close.

### Logos with customer counts
Combines a quantitative stat ("Trusted by 10,000+ teams") with the logo strip. Adds a second proof vector. Use when the customer list is large enough that the number is itself impressive.

## Real-world examples

- **Vercel**: Homepage, directly below the hero. Monochrome logos of recognizable enterprise and developer-facing customers including Washington Post and Under Armour. The strip is unlabeled; the logos speak without a header.
- **Linear**: Homepage below the hero section. Logos of high-signal startups and scale-ups that their target audience (high-performance software teams) will recognize. Rendered in muted tones against the dark surface.
- **Stripe**: Marketing homepage and product sub-pages. Logo strips appear below primary hero sections; monochrome rendering on off-white backgrounds. Stripe deploys them on vertical product pages (Payments, Billing) as much as the main homepage.
- **Notion**: Homepage and team-facing landing pages. Logo strip of enterprise customers. The strip carries a "Trusted by teams everywhere" label.
- **Figma**: Enterprise landing page. Logos of large organizations rendered in a single muted color, combined with a customer count callout above the strip.
- **Intercom**: Homepage. Monochrome logo row with brief label. Positioned after the hero to validate the "25,000+ businesses" count claim made in the hero.

## Implementation notes

- **Mobile behavior**: On narrow viewports, switch to a 2-3 column grid or a single-row horizontal scroll. A marquee animation built with CSS `translate` avoids layout shift and performs better than JavaScript-driven alternatives. Minimum logo height 24px; many logos become unrecognizable below that.
- **Accessibility**: Each logo `<img>` requires a meaningful `alt` attribute (the company name). If logos are decorative SVGs embedded inline, apply `aria-label` on the container. Do not rely on color alone to distinguish logos.
- **Performance**: Serve logos as SVG where possible. For PNG logos, use `loading="lazy"` on below-fold placements. Marquee animations should use `prefers-reduced-motion` to pause or remove the loop for users who have requested reduced motion.
- **Common pitfalls**: Including logos of companies the target audience will not recognize (fills space but adds no signal). Using full-color logos that fight with the hero palette. Letting permission expire and showing logos of churned customers.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: Developer-facing products (Vercel, Stripe, Linear) use this pattern constantly. The restraint of monochrome logos fits the archetype's visual discipline.
- **Clinical Trustworthy**: Medical, fintech, and compliance-heavy products use logo strips as a trust-strip sub-pattern. Recognized enterprise or institutional logos reduce purchase anxiety.
- **Bold Confident**: High-contrast brands often deploy a logo strip to ground a large claim. The strip reads as evidence, not as decoration.
- **Editorial Restrained**: Works well when logos are rendered in a single muted tone that matches the archetype's low-saturation palette.

Less natural with:

- **Minimal Essentialist**: The archetype's extreme whitespace aesthetic and preference for removing visual elements conflicts with a row of logos. Brands in this register typically rely on quantitative claims or omit social proof from the hero zone.
- **Playful Energetic**: The pattern reads as too institutional for brands whose primary signal is energy and character. Playful brands use looser social proof forms (UGC, social embeds) more than formal logo strips.

## Related patterns

- `07-customer-count-display.md` for quantitative proof that often pairs with this pattern
- `03-single-quote-testimonial.md` for the next tier of specificity after logos establish baseline trust
- `10-detailed-case-study-card.md` for the deeper version of logo-level proof

## Sources

- Cialdini, Robert. "Influence: The Psychology of Persuasion." Social proof principle.
- Nielsen Norman Group: "F-Shaped Pattern of Reading on the Web" and visual scanning research.
- Vercel homepage: vercel.com
- Linear homepage: linear.app
- Stripe homepage: stripe.com
