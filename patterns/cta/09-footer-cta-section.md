# Footer CTA Section

**Category**: CTA
**Subcategory**: Page-End CTA
**Conversion intent**: Capture visitors who have read through the full page and are at peak decision readiness

## What it is

A dedicated section immediately above the site footer, structured as a conversion surface: a headline, a supporting line or two, and a primary CTA button. This is the last persuasive surface before the user exits the page. It functions as a summary of the page's promise and a final invitation to act. It is not the footer itself (which contains navigation, links, and legal text), but a distinct content section placed just above it.

## Why it works

Users who scroll to the bottom of a page are self-selecting. They have read enough to form an opinion, invested time in the content, and not yet converted. This is the highest-intent, lowest-resistance moment in a page visit. The footer CTA captures that intent explicitly rather than leaving the user to hunt for a CTA or navigate back to the hero. Cialdini's commitment principle applies: a user who has read through a full page has made an implicit investment in the brand, and a clear invitation at that moment of investment completion has high conversion potential.

## When to use

- Any long-form marketing page (feature pages, about pages, pricing pages) where a full read is expected
- When the hero CTA serves a different goal than the footer CTA (e.g., the hero pushes trial sign-up; the footer offers a demo for those not ready to self-serve)
- When the brand has a clear single conversion goal and wants to repeat it confidently at the end
- On pages that precede a product purchase or signup flow

## When NOT to use

- Very short pages where the hero CTA is still visible by the time the user reaches the footer
- The page has no single clear conversion goal and the footer CTA would be forced
- The design system dedicates the footer to navigation only and a separate section would break the intended architecture

## Variations

### Simple repeat of hero CTA
Same headline and CTA as the hero, positioned at the bottom. Serves as a bookend. Appropriate when the brand is confident in the singular call and consistent repetition is intentional. Many B2B SaaS sites use this pattern because their audience benefits from seeing the same offer reinforced after reading supporting evidence.

### Contrasting design break
The footer CTA section uses a dramatically different background (full-bleed dark, accent color, or image) compared to the rest of the page. Functions as a visual reset that signals "the page has reached its conclusion; now act." Linear and Stripe use this approach with a dark background against a light-dominant page.

### Gated newsletter or resource capture
Rather than a product sign-up, the footer CTA offers something lower-commitment: a newsletter subscription, a free report, or an email course. Appropriate for awareness-stage content where product sign-up is premature for most visitors.

## Real-world examples

- **Stripe**: Footer CTA section on stripe.com uses a dark background contrasting with the light page, with "Start now" repeated from the hero. A second text link ("Contact sales") mirrors the hero CTA stack.
- **Linear**: The bottom of linear.app's marketing pages includes a design-break section with the primary "Get started" CTA in a high-contrast treatment.
- **Vercel**: Footer CTA section with "Deploy to Vercel" or "Get started" at the bottom of feature and solutions pages, using dark background contrast against the lighter page.
- **Webflow**: Footer CTA section is consistent across product and feature pages, matching the hero CTA to close the loop.
- **Notion**: Marketing pages close with a footer CTA section that mirrors the hero, "Get Notion free", with the same primary button treatment.

## Implementation notes

- **Mobile behavior**: The section stacks to a single column. The headline is often reduced in size relative to the desktop layout. The button remains full-width or centered. Do not apply the same generous padding as desktop; mobile sections can be more compact while still readable.
- **Accessibility**: The section should be a distinct landmark, typically `<section>` with an `aria-label` or a heading that identifies it as a call-to-action. The CTA button must have a unique, descriptive label; if it reads "Get started" and the hero also reads "Get started," ensure screen readers can distinguish them via context or `aria-label`.
- **Performance**: If the section uses a background image, preload it. If it uses a different color scheme, ensure the CSS does not trigger a layout shift on load.
- **Common pitfalls**: Placing the footer CTA inside the actual footer element, mixed with navigation links (reduces prominence and user clarity). Copy that is too similar to the hero with no additional evidence or context (missed opportunity to address objections that surfaced mid-page). Choosing a footer CTA that does not match the overall page goal.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: The clean, structural bookend of a page suits this archetype's grid discipline. Stripe, Vercel, and Linear all use this pattern.
- **Editorial Restrained**: When the footer CTA section uses generous whitespace and restrained copy, it reads as a natural conclusion rather than commercial pressure.
- **Bold Confident**: The contrasting-design-break variant fits this archetype perfectly; a full-bleed dark or accent section at page end is a Bold Confident signature move.
- **Warm Conversational**: A footer CTA with friendly copy ("Ready when you are.") closes the page on the same relationship register the body established.

Less natural with:

- **Luxe Considered**: Premium brands allow the page to end with their editorial content; an explicit CTA section can feel mercantile in this archetype.
- **Documentary Honest**: Photography-led brands often close with image content rather than a conversion surface; a CTA section can break the storytelling rhythm.

## Related patterns

- `06-hero-stack-primary-plus-secondary.md` for the hero CTA this section echoes
- `12-section-end-cta-repetition.md` for the repeating-throughout-page alternative
- `03-sticky-bottom-bar-cta.md` for an always-visible alternative to a static section

## Sources

- Cialdini, R.B.: "Influence: The Psychology of Persuasion" (commitment-consistency principle)
- Nielsen Norman Group: "Page Parking: When Users Return to the Page Top" (nngroup.com)
- Linear design: linear.app (footer section treatment observed)
