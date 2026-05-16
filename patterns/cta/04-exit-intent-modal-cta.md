# Exit Intent Modal CTA

**Category**: CTA
**Subcategory**: Triggered Modal CTA
**Conversion intent**: Recover abandoning visitors with a last-chance offer, content download, or email capture before they leave

## What it is

A modal overlay triggered when tracking detects that a desktop user's cursor is moving toward the browser chrome (back button, address bar, or close control). The modal interrupts departure with an offer: a discount, a gated content download, or a cart-save prompt. This pattern is desktop-only; mobile browsers do not expose cursor position, so it does not translate to mobile contexts.

## Why it works

Loss aversion is the primary mechanism. Cialdini's scarcity principle reinforces it when a time-limited offer is present. The user was already willing to leave; the modal offers a reason to reconsider at exactly the moment they are most likely to have a final opinion formed. Popupsmart's 2025 analysis of 10,000+ campaigns found an average conversion rate of 3.49% across exit-intent popups, with well-optimized implementations reaching double digits on high-traffic pages. The pattern works because it intercepts only visitors who were going to leave anyway, adding a conversion opportunity at near-zero cost to users who were not leaving.

## When to use

- The page has measurably high bounce or exit rates where no lower-friction intervention has worked
- A genuine offer exists that is meaningfully better than the existing page CTA (a discount, free resource, or trial extension)
- The audience is transactional and responds to offers (DTC ecommerce, subscription products)
- The site has enough traffic to A/B test effectiveness; the pattern without testing is a guess

## When NOT to use

- The brand or audience context is premium, considered, or professional; the interruption reads as desperation
- No genuine offer exists; a hollow "Wait, don't go!" modal with the same CTA as the page increases abandonment
- Mobile-only or mobile-heavy traffic; the pattern has no effect on mobile
- The brand archetype is Editorial Restrained, Luxe Considered, or Minimal Essentialist; all three prioritize user agency over interception

## Variations

### Discount offer
Primary pattern for DTC and subscription ecommerce. "Before you go: here's 15% off your first order." Effective when margin supports it. Risk: trains users to abandon to receive discounts.

### Content download / lead magnet
Modal offers a free PDF, guide, checklist, or report in exchange for an email address. Appropriate for B2B content marketing. Less aggressive than a discount because it frames the modal as a service.

### Save-your-cart or save-your-progress
E-commerce or SaaS trial variant: "Save your cart" or "Save your configuration" with an email field. Reframed as helpful functionality rather than an offer. Lowest friction, highest perceived legitimacy.

## Real-world examples

- **Shopify merchants / DTC brands broadly**: Exit-intent discount modals with "Get 10% off your first order" are the single most commonly documented example of this pattern, appearing across thousands of Shopify stores. Shopify's own blog published a 2025 best-practices piece documenting this pattern.
- **BarkBox**: Documented use of exit-intent offers on subscription dog box landing pages, common among DTC subscription brands targeting pet owners.
- **Omnisend customer examples**: Omnisend's case study collection documents email-capture exit-intent popups driving 5-15% list growth on DTC brand sites.
- **Picreel and WisePops user base**: Both platforms' published example libraries show consistent patterns: discount offers for ecommerce, lead magnet downloads for B2B content sites.
- **Conversion Sciences (B2B case studies)**: Research found that well-crafted exit popups recover 10 to 15% of abandoning visitors on lead-gen pages.

## Implementation notes

- **Mobile behavior**: Do not trigger. Mobile browsers do not expose cursor position for exit intent detection. Trigger on scroll-up velocity or a time threshold as a fallback if desired, but treat this as a different pattern with different copy.
- **Accessibility**: The modal must follow ARIA dialog pattern: `role="dialog"`, `aria-modal="true"`, focus trapped inside the modal while open, focus returned to the triggering element on close. Keyboard dismiss via Escape key is required.
- **Performance**: Modal assets should be pre-loaded on page load to avoid a visible flash-of-content when triggered. JavaScript trigger libraries generally handle this, but custom builds may not.
- **Common pitfalls**: Firing the modal on every visit including return visits (implement a cookie or localStorage flag to suppress after first display). Showing the modal on mobile where it cannot work as designed. Copy that is too close to the primary CTA; the modal must offer something different from the page to justify the interruption. Failing to suppress the modal when the user has already converted.

## Archetype compatibility

This pattern fits naturally with:

- **Vibrant Saturated**: High-energy color and direct copy align with the pattern's interruptive intent. Consumer brands in this archetype use it aggressively and effectively.
- **Bold Confident**: The directness of the interruption fits the archetype's no-apologies register. The brand can own the "before you go" moment without it reading as desperate.
- **Warm Conversational**: With careful copy ("We hate to see you go, but here's something that might help"), the modal reads as helpful rather than aggressive.
- **Playful Energetic**: Character-driven brands can make the modal feel like a personality moment rather than a conversion mechanism.

Less natural with:

- **Editorial Restrained**: The interruption breaks the pacing the archetype depends on. Audiences expecting a considered experience register this pattern as a violation of the implicit contract.
- **Luxe Considered**: Premium brands do not intercept. The archetype assumes a user who decides on their own schedule.
- **Minimal Essentialist**: The modal adds visual noise that contradicts the archetype's aesthetic commitment.
- **Clinical Trustworthy**: Healthcare, financial, and compliance-adjacent brands risk undermining trust with aggressive pop-ups.

## Related patterns

- `10-scroll-triggered-slide-in.md` for a less aggressive triggered alternative
- `16-free-tool-cta-lead-magnet.md` for lead-magnet strategies that avoid the interruption model
- `03-sticky-bottom-bar-cta.md` for persistent CTA visibility without interruption

## Sources

- Shopify Blog: exit-intent pop-up guidance with real-world examples (shopify.com/blog, 2025)
- Popupsmart: Exit-intent conversion rate data (2025 campaign analysis)
- Conversion Sciences: "10-15% recovery rate from exit popups" (conversionsciences.com)
- Cialdini, R.B.: "Influence: The Psychology of Persuasion" (scarcity and loss aversion)
- WAI-ARIA Authoring Practices: Dialog Pattern (w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
