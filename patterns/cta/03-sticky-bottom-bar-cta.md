# Sticky Bottom Bar CTA

**Category**: CTA
**Subcategory**: Sticky Bar CTA
**Conversion intent**: Maintain CTA visibility throughout long-form page scroll, capturing conversions at any point in the read

## What it is

A persistent horizontal bar fixed to the bottom of the viewport. It stays visible as the user scrolls, ensuring the primary CTA is always one click away regardless of where on the page the user is reading. Common on long-form sales pages, product feature pages, and content-heavy landing pages where the hero CTA scrolls out of view early.

## Why it works

Cialdini's principle of commitment and consistency applies here: a user who has spent time reading is a user with increasing investment in the page. The sticky bar captures that investment at the exact moment a user reaches decision readiness, rather than requiring them to scroll back to the hero. Research on scroll depth and CTA placement from CXL Institute consistently shows that conversion events distribute across page depth, not just at the top. A fixed CTA captures the bottom 40% of page depth where hero CTAs do not.

## When to use

- The page is long (5+ viewport-heights) and the hero scrolls out of view quickly
- The primary conversion action is the same throughout the page (single goal pages)
- The audience is mobile-heavy; mobile thumb reach to a bottom bar is ergonomically natural
- The offer or trial is time-sensitive and constant visibility reinforces urgency

## When NOT to use

- The page is short or the hero CTA remains visible during normal scroll
- The page has multiple CTAs targeting different intents (the bar cannot accommodate nuance)
- The brand archetype is Editorial Restrained or Luxe Considered, where the bar reads as pushy intrusion against a considered reading experience
- The bar would obscure critical content or navigation on mobile

## Variations

### Full bar with copy and button
The bar includes a short headline or descriptor line alongside the CTA button. Example: "Start your free trial. No credit card required. [Get started]". Higher informational density; appropriate for audiences that need a reminder of the offer.

### Button-only bar
Minimal bar with a single CTA button and perhaps a brand logo. Low noise; appropriate when the primary button label is self-explanatory and context from scrolling is sufficient.

### Dismissible bar
Includes a close or dismiss icon. Reduces user friction and perceived aggressiveness. Appropriate when the bar would otherwise obscure scrollable content at the bottom of sections.

## Real-world examples

- **ConvertKit (Kit)**: Persistent bottom bar on creator landing pages with a primary "Start for free" button, used on both the main marketing site and specific feature pages.
- **ConvertFlow**: Sticky bar templates documented and promoted explicitly as a conversion pattern for landing pages, with examples showing full copy-plus-button layout.
- **Unbounce**: Uses and documents sticky bottom bar CTAs on its own conference and campaign landing pages, with published conversion data.
- **Thinkific**: Course creator landing pages use a persistent bottom bar with enrollment CTA, visible throughout long feature description pages.
- **Podia**: Sales page templates include a sticky bottom bar with "Enroll now" throughout multi-section product descriptions.

## Implementation notes

- **Mobile behavior**: The bottom bar sits naturally at thumb-reach distance on mobile. On iOS Safari, account for the browser chrome at the bottom of the screen; use `padding-bottom: env(safe-area-inset-bottom)` to avoid the bar being obscured. Test on physical devices.
- **Accessibility**: The bar should not trap keyboard focus or obscure content underneath. Use `position: fixed` with adequate `z-index`. Ensure the dismiss control (if present) is reachable via keyboard. Screen readers should encounter the bar in a logical document order, typically via ARIA landmark or end-of-document placement.
- **Performance**: Sticky bars use `position: fixed` and compositing-layer promotion. Avoid forcing repaints on scroll by using `transform: translateZ(0)` or `will-change: transform`. Do not animate elements inside the bar on every scroll event.
- **Common pitfalls**: Bars that obscure content sections above the browser chrome. Failing to test with active keyboard navigation (bars can trap focus). Copy inside the bar that duplicates the page hero word-for-word with no reduction; the bar should be shorter. Missing `safe-area-inset` handling on iOS, which buries the button behind Safari's home indicator.

## Archetype compatibility

This pattern fits naturally with:

- **Bold Confident**: The persistent, assertive visibility matches the archetype's direct register. High-contrast bar reinforces the brand's commercial confidence.
- **Warm Conversational**: A sticky bar with friendly copy ("Ready to get started? It's free.") reads as helpful rather than aggressive in this archetype.
- **Playful Energetic**: Color-rich bars with brief, energetic copy fit the archetype's always-on character.
- **Vibrant Saturated**: A brand-colored bar reinforces the color system and keeps conversion visible throughout a color-blocked page.

Less natural with:

- **Editorial Restrained**: The persistent intrusion disrupts the considered reading experience. This archetype often chooses contextual section CTAs instead.
- **Luxe Considered**: Luxury brands rely on the user's willingness to discover; a sticky bar communicates pressure, which contradicts the archetype's pacing.
- **Minimal Essentialist**: The bar adds UI chrome to an intentionally chrome-free experience.

## Related patterns

- `07-sticky-top-banner-cta.md` for the top-of-viewport variant
- `12-section-end-cta-repetition.md` for an alternative approach to CTA persistence across long pages
- `06-hero-stack-primary-plus-secondary.md` for the hero-level CTA this pattern supports

## Component implementation

A v2 implementation of this pattern is available in [`components/sticky-bar-cta/`](../../components/sticky-bar-cta/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- CXL Institute: Scroll depth and conversion rate research (cxl.com)
- Cialdini, R.B.: "Influence: The Psychology of Persuasion" (commitment principle)
- Apple Human Interface Guidelines: Safe area insets (developer.apple.com)
