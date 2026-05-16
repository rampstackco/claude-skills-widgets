# Scroll-Triggered Slide-In

**Category**: CTA
**Subcategory**: Triggered Panel CTA
**Conversion intent**: Capture mid-page conversions from engaged readers without interrupting the top-of-page reading experience

## What it is

A panel or card that slides into view from the corner or bottom of the screen after the user has scrolled past a defined threshold (typically 50 to 75% of page depth). Unlike the exit-intent modal, it triggers on engagement rather than abandonment: reaching a scroll depth signals genuine interest, and the slide-in presents an offer or CTA at that moment of engagement. The panel is typically smaller than a full modal: a corner card, a bottom-edge panel, or a sidebar strip.

## Why it works

Scroll depth is a behavioral proxy for interest. A user who has read 60% of a blog post or feature page has demonstrated intent that a bounce or short session has not. The commitment principle (Cialdini) applies: having invested time reading, the user is more likely to respond positively to an offer aligned with the content they just read. HubSpot's own A/B test data on slide-in CTAs on their blog (documented in their marketing blog) showed meaningfully higher clickthrough rates than sidebar banner CTAs, because the slide-in arrives after the reader is already invested rather than before context has been established.

## When to use

- Long-form content (blog posts, guides, case studies) with meaningful reading time
- The trigger threshold can be mapped to a content moment that makes the CTA relevant (after a problem statement, after proof section)
- The brand produces enough content to make the pattern systematic rather than one-off
- The offer in the slide-in is content-aligned (download related to the topic, trial invitation after a product feature is explained)

## When NOT to use

- Short pages where 50% scroll depth is reached in seconds; the trigger fires before context is established
- The page is a homepage or product hero (scroll-triggered panels disrupt the designed flow of these surfaces)
- The brand archetype is premium or editorial and the panel intrudes on a designed experience
- The panel would appear simultaneously with other triggered elements (sticky bar, chat widget) creating visual chaos

## Variations

### Corner panel
A card fixed to the bottom-right or bottom-left corner of the viewport, appearing after scroll threshold. Contains a headline, a line of description, and a CTA button. Includes a close control. The most common implementation on content marketing sites.

### Sidebar slide-in
Slides in from the left or right edge, occupying a vertical strip. More content capacity than a corner card; can include an image. Less common than corner panels; appropriate on wide-screen layouts where the sidebar does not obscure main content.

### Bottom card
A horizontal bar that appears at the bottom of the screen, less wide than a full sticky bar, typically appearing and remaining until dismissed. Closer in structure to the sticky bottom bar but triggered by scroll rather than present from page load.

## Real-world examples

- **HubSpot Blog**: Slide-in CTAs are a documented feature of HubSpot's content marketing system. HubSpot published the test results showing slide-ins on the blog outperforming sidebar CTAs on clickthrough rate. Their blog posts use slide-in panels triggered at 50% scroll depth to promote related content and lead magnets.
- **Intercom Blog**: Scroll-triggered panels on blog posts promoting related Intercom product features or resource downloads after relevant content sections.
- **Ahrefs Blog**: Slide-in content offers and tool prompts appear after readers have scrolled through tutorial content; they promote free tool access or course signups aligned with the article topic.
- **OptimizePress**: Documents and templates for sticky bar and slide-in patterns, with example implementations showing the scroll-triggered corner panel as the primary variant.
- **Unbounce**: Uses and documents scroll-triggered CTAs on long landing pages, positioning them as a less aggressive alternative to exit-intent.

## Implementation notes

- **Mobile behavior**: Corner panels can obscure significant screen real estate on mobile. Either trigger at a higher scroll depth on mobile (75%+ rather than 50%), reduce the panel size to a compact bottom strip, or suppress the panel entirely on viewports below 768px and rely on the footer CTA instead.
- **Accessibility**: The panel should have `role="complementary"` or `role="dialog"` depending on whether it captures input. Focus must not automatically move to the panel; users who are reading should not have focus hijacked. The close button requires `aria-label="Close"`. Keyboard users must be able to dismiss via Escape.
- **Performance**: Use `IntersectionObserver` to trigger the animation rather than scroll event listeners, which fire on every scroll step and can cause jank. The panel CSS should use `transform` and `opacity` for hardware-accelerated animation rather than positioning properties.
- **Common pitfalls**: Setting a scroll threshold so low that the panel appears before the user has meaningful context. Running multiple triggered elements simultaneously (slide-in plus exit-intent plus sticky bar). Not suppressing the panel after first display in a session (using localStorage). Copy in the panel that is unrelated to the page content, which undercuts the contextual relevance that makes this pattern effective.

## Archetype compatibility

This pattern fits naturally with:

- **Warm Conversational**: Content marketing brands in this archetype use slide-ins naturally as a friendly "by the way, here's something useful" moment.
- **Technical Precise**: Developer content brands (Ahrefs, Intercom) use this pattern for relevant tool and resource offers within educational content.
- **Bold Confident**: When the panel design uses the brand's high-contrast palette and direct copy, it works as a confident mid-read interruption.

Less natural with:

- **Editorial Restrained**: The slide-in panel disrupts the editorial reading rhythm this archetype protects. Section-end CTAs are preferred.
- **Luxe Considered**: Any triggered panel feels like a disruption against the paced, user-controlled experience.
- **Minimal Essentialist**: Sliding panels add motion and chrome to a surface committed to stillness and reduction.

## Related patterns

- `04-exit-intent-modal-cta.md` for the abandonment-triggered alternative
- `05-in-content-cta-card.md` for a statically placed alternative within content
- `03-sticky-bottom-bar-cta.md` for a persistent rather than triggered bottom-of-screen option

## Sources

- HubSpot Blog: "How to Add Slide-In Calls-to-Action to Your Blog Posts" (blog.hubspot.com)
- HubSpot Knowledge Base: Slide-in trigger options (knowledge.hubspot.com/ctas)
- MDN Web Docs: IntersectionObserver API (developer.mozilla.org)
- Cialdini, R.B.: "Influence: The Psychology of Persuasion" (commitment principle)
