# Exit-Intent Modal Form

**Category**: Lead Capture
**Subcategory**: Modal + trigger
**Conversion intent**: Recover an abandoning visitor by presenting a lead capture form or offer at the moment they signal intent to leave

## What it is

A modal overlay triggered when the browser detects an exit signal: the mouse cursor moving toward the browser chrome on desktop, or a rapid back-gesture on mobile. The modal presents a lead capture form, typically paired with an offer (discount, content download, or access to a resource) to give the abandoning user a reason to stay and submit. It is the last lead capture opportunity before the user leaves.

## Why it works

Exit-intent detection catches users at the highest-intent abandonment moment: they have read enough to have an opinion but have not converted. Scarcity and reciprocity (Cialdini) are the most commonly deployed mechanisms in the offer. A discount or a free resource presented at exit reduces the cost of converting without reducing the value delivered. Research from Shopify and Omnisend consistently shows that well-configured exit-intent modals recover 10 to 15% of abandoning visitors. The critical distinction from a page-load popup is that the user has had time to see the offer context; the modal is not the first thing they encountered.

## When to use

- E-commerce and DTC brands where cart or page abandonment is frequent and a discount or shipping offer has measurable ROI
- Content sites where a content download or newsletter offer provides enough value to interrupt the exit
- SaaS pricing pages where an abandoning visitor represents a qualified prospect worth a direct offer
- Pages with meaningful average time-on-page (at least 30 seconds); showing exit intent to a user who bounced in 5 seconds wastes the pattern

## When NOT to use

- Mobile visitors, where exit intent detection is unreliable (no cursor movement signal); use a scroll-depth or time-on-page trigger instead, or suppress the modal on mobile entirely
- Pages that are early in a funnel (homepage, blog index) where the user has not had enough exposure to make the offer relevant
- B2B products with a long sales cycle where an exit discount would undermine pricing credibility
- Sites that already show multiple modal overlays per session; stacking triggers causes pattern blindness and annoys users

## Variations

### Discount offer plus email
The modal presents a percentage discount or free shipping offer in exchange for an email address. Standard for DTC e-commerce. The offer headline leads with the discount value; the email field is secondary. Button copy confirms the offer ("Get 15% off").

### Content download plus email
The modal offers a relevant piece of content (a guide, a checklist, a template) in exchange for an email address. Common for content marketing sites and SaaS blogs. The offer must be relevant to the page being exited; a generic offer performs significantly worse than a contextual one.

### Survey or intent capture
Instead of an immediate email capture, the modal asks why the user is leaving (a radio button question) and routes to an appropriate offer based on the answer. More complex to implement but produces better routing: "Not ready to buy" leads to a content offer; "Prices too high" leads to a discount; "Need to compare" leads to a comparison guide.

## Real-world examples

- **BarkBox**: BarkBox (barkbox.com) uses an exit-intent modal on its subscription flow that offers a free toy box as a last-chance incentive before the visitor exits the page, capturing email alongside the discount claim.
- **Puma**: Puma uses a sticky bar and exit modal combination that offers 20% off for an email address on product pages. The exit modal appears when cursor movement signals tab close or address bar focus.
- **Roadskin**: The UK biker brand Roadskin uses an exit-triggered bar on product pages offering newsletter discounts, achieving a reported 2.9% conversion rate on abandoning visitors.
- **OptimizePress**: OptimizePress documentation (optimizepress.com/sticky-bar-examples/) shows exit-intent implementations for content sites that offer lead magnets at the exit moment, characterizing the pattern for content publishers.
- **Omnisend**: Omnisend's own product blog and marketing pages use an exit-intent overlay offering a free content download in exchange for an email address, consistent with their content marketing strategy for their email-focused audience.
- **Wisepops**: Wisepops (wisepops.com) both uses and documents the exit popup pattern; their exit-intent overlay on the pricing page offers a live demo booking when a visitor signals exit from the pricing comparison table.

## Implementation notes

- **Mobile behavior**: Mouse-based exit intent detection does not work on mobile. For mobile, use a time-on-page trigger (e.g., 45 seconds without scroll activity) or a scroll-up trigger (rapid scroll toward the top of the page signals back-navigation intent). Alternatively, suppress the modal entirely on mobile and apply it only to desktop sessions. Google's mobile interstitial penalty does not apply to exit-triggered overlays, but usability research from Nielsen Norman Group finds mobile popups are rated as highly intrusive regardless.
- **Accessibility**: All modal accessibility requirements apply: `role="dialog"`, `aria-modal="true"`, focus trapping, Escape to close, and focus return to trigger or page on close. Exit-intent modals are particularly prone to missing these requirements because they are often built with third-party scripts that do not fully implement ARIA.
- **Performance**: Exit-intent scripts (Sumo, OptinMonster, Wisepops, Privy) add third-party payload. Load them asynchronously and defer execution until after the critical page content is interactive. Monitor Core Web Vitals to ensure the modal does not cause Cumulative Layout Shift on load.
- **Common pitfalls**: Showing the modal on every visit rather than once per session (or per some time window); repeat exposure causes pattern blindness and brand irritation. Irrelevant offers (a newsletter signup on a product page where the user came to buy); relevance is the single biggest driver of exit-intent conversion. Suppressing the close button or making it tiny to prevent dismissal; this violates WCAG and damages trust.

## Archetype compatibility

This pattern fits naturally with:

- **Playful Energetic**: DTC brands with energetic visual registers (BarkBox is a direct example) use exit-intent modals with playful copy and bold offer presentation. The pattern suits brands comfortable with bold interruption.
- **Vibrant Saturated**: High-energy, high-color brands use exit intent as a last-chance moment that matches their assertive visual register.
- **Bold Confident**: Direct offer, clear value, one decision. The exit-intent modal's binary structure (take the offer or leave) suits the Bold Confident archetype's preference for clear choices and direct framing.

Less natural with:

- **Luxe Considered**: Luxury and premium brands avoid pop-up interruptions entirely; they conflict with the patient, non-coercive register the archetype requires. A Luxe Considered brand that surfaces an exit-intent discount signals pricing insecurity.
- **Minimal Essentialist**: The overlay interruption conflicts with the archetype's constraint philosophy. Minimal Essentialist brands do not interrupt; they let the user decide.
- **Editorial Restrained**: The editorial archetype's peer relationship with the reader does not accommodate the coercive overtone of exit-intent capture. The pattern reads as needy against a restrained brand voice.

## Related patterns

- `04-modal-lead-form.md` for the user-triggered modal variant without the exit trigger
- `10-sticky-bottom-newsletter-bar.md` for a persistent but non-intrusive alternative to exit intent
- `06-content-gate.md` for the content-download offer that can be surfaced through an exit-intent trigger
- `claude-skills/skills/lead-magnet-design` for designing the offer that makes the exit-intent modal convert

## Sources

- Shopify Blog: exit-intent pop-up guidance with real-world examples, 2025 (shopify.com/blog/exit-intent-popup)
- Omnisend: "30 Killer Exit Intent Popup Examples You Can Steal" (omnisend.com/blog/exit-intent-popup-examples-small-online-businesses/)
- Cialdini, Robert. "Influence: The Psychology of Persuasion." Reciprocity and scarcity principles.
- Nielsen Norman Group: mobile popup usability findings (nngroup.com)
- OptimizePress: "7 Sticky Bar Examples For You to Copy in 2025" (optimizepress.com/sticky-bar-examples/)
