# Microcopy-Driven Button CTA

**Category**: CTA
**Subcategory**: Copy-First CTA
**Conversion intent**: Increase click rate and conversion quality by using specific, conversational button copy that reduces hesitation and sets accurate expectations

## What it is

A button CTA where the primary design decision is copy rather than visual treatment. The button may look identical to a standard primary button, but the label is crafted to be specific, first-person, or expectation-setting rather than generic. "Start my free 14-day trial" rather than "Sign up." "See how it works" rather than "Demo." "Get my free report" rather than "Submit." The visual treatment is secondary; the words do the conversion work.

## Why it works

Generic button labels ("Submit," "Click here," "Get started") force the user to project what will happen after the click. Specific labels remove that uncertainty. NNG research on microcopy shows that clarity about the outcome of an action reduces friction at the click moment. First-person framing ("Start my trial") has been tested across multiple B2B and consumer contexts and consistently outperforms second-person ("Start your trial") by small but reliable margins, because first-person copy aligns with the user's mental model of taking action for themselves. Mailchimp documented an 18% increase in click-through rate when they changed "Submit" to "Send Campaign": a single word change with a measurable conversion effect.

## When to use

- The primary button label is currently generic ("Get started," "Submit," "Learn more") and a more specific alternative is available
- The action has a specific, describable outcome that can be communicated in 3 to 7 words
- The product has a distinct brand voice that can extend to button copy without sounding inconsistent
- Testing infrastructure is in place to measure the effect of copy changes; this pattern's value is most defensible with test data

## When NOT to use

- The button is part of a design system with strict copy standards; deviating from the system creates inconsistency
- The specific copy makes the button too long for the layout (buttons above 35 characters become unwieldy)
- The action is genuinely generic and no specific description improves on the generic (navigation buttons like "Back" or "Continue" are correctly generic)
- The brand voice is formal and first-person copy would sound off-register

## Variations

### First-person action
Button copy in first person: "Start my free trial," "Send my results," "Get my quote." Tested to outperform second-person in most contexts. Most effective when the outcome is specific (not just "Start my journey," which is vague in first-person and second-person equally).

### Action-plus-qualifier
Two-part label: the action and a qualification that addresses a likely objection. "Start free (no credit card)" in one label is too long; separate the qualifier into button sub-text or neighboring microcopy. Alternatively: "Try for free" as the button with "No credit card required. Cancel anytime." as a line directly below.

### Outcome-specific label
Names the result rather than the action. "See my website score" rather than "Submit." "Show me the price" rather than "Get quote." "Find my plan" rather than "Compare plans." This variant is most effective when the outcome is a specific artifact the user wants.

## Real-world examples

- **Basecamp**: Documented use of colloquial, specific button copy throughout their product and marketing surfaces. "Make a new project" instead of "Create project" reflects Basecamp's intentional informal voice. Their longer-form sales copy is designed to make every button feel like a personal invitation.
- **Mailchimp**: "Send Campaign" rather than "Submit" produced an 18% CTR lift, documented in Mailchimp's own microcopy guidelines and cited in third-party UX research. Their broader copy system extends conversational specificity to most action labels.
- **Ramp**: "Get a card" on the corporate card product page rather than generic fintech CTAs like "Apply now." The specificity communicates the product's output (a card) rather than a process (an application), reducing the perceived friction of the action.
- **Basecamp "Give Basecamp a Try"**: The full-page invitation to start a trial uses extended first-person copy frameworks, including button-level copy that names the specific next step.
- **Courseux documentation**: "Call to Action in UX Design: 2026 Examples" documents the first-person button copy pattern across consumer and B2B products with conversion data, including the Mailchimp finding and similar examples from Wix, Shopify, and others.

## Implementation notes

- **Mobile behavior**: Mobile buttons frequently go full-width. Longer microcopy labels (over 25 characters) may wrap on very narrow screens unless button font size is reduced slightly. Test on 320px (minimum modern mobile width) and 375px. If the label wraps, it usually means the copy is too long rather than the button being too narrow.
- **Accessibility**: Button copy must be descriptive enough to make sense as a standalone label when read by a screen reader navigating by buttons. "Start my free trial" is self-describing. "Go" is not. Avoid relying on surrounding context to make a vague button label meaningful; the button copy should stand alone.
- **Performance**: No considerations. Button copy changes have no performance implications.
- **Common pitfalls**: First-person copy that is vague rather than specific ("Start my journey," "Begin my experience") produces no conversion lift over generic labels; the specificity is what drives the effect, not the first-person framing alone. Labels too long for the button layout. Copy that does not reflect the actual next step (if "See how it works" leads to a signup form, not a demo, the label is misleading and trust is broken). Changing button labels without tracking the effect; copy changes without measurement are unverifiable.

## Archetype compatibility

This pattern fits naturally with:

- **Warm Conversational**: First-person, specific button copy matches the archetype's relationship-first voice. Basecamp is the canonical example of this archetype applying microcopy precision to every surface.
- **Playful Energetic**: Creative, specific button labels fit the archetype's personality-driven copy system.
- **Bold Confident**: Direct, outcome-specific labels ("Get the card." "Send it.") fit the archetype's no-hedging posture.
- **Technical Precise**: Precise action labels ("Deploy to production," "Generate API key") fit the archetype's technical vocabulary.

Less natural with:

- **Luxe Considered**: Luxury brands tend toward sparse, ambiguous copy ("Discover," "Begin") that maintains mystery; outcome-specific labels can feel transactional.
- **Editorial Restrained**: This archetype often uses minimal button copy ("Read more," "Begin") and lets the surrounding copy carry the weight; highly specific button labels can feel overly commercial in this register.

## Related patterns

- `01-primary-button-cta.md` for the visual treatment that this pattern's copy sits within
- `17-annotated-cta-with-social-proof.md` for combining copy specificity with adjacent proof
- `15-reverse-trial-cta.md` for specific trial-framing copy variants

## Sources

- Mailchimp: "How Microcopy Can Transform Your Business Messaging" (mailchimp.com/resources/microcopy)
- Courseux: "Microcopy: 30 Real Examples That Boost Conversions" (courseux.com)
- UXPin: "Essential Microcopy Guide: How to Write Microcopy That Converts Users" (uxpin.com/studio)
- Nielsen Norman Group: "Microcopy: Tiny Words With a Huge UX Impact" (nngroup.com)
