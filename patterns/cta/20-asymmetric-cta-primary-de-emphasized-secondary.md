# Asymmetric CTA: Primary with De-emphasized Secondary

**Category**: CTA
**Subcategory**: Asymmetric CTA
**Conversion intent**: Drive the primary conversion action while acknowledging a secondary path exists, with no ambiguity about which is preferred

## What it is

A CTA configuration where the primary action is a solid-fill button and the secondary action is significantly smaller, lighter, or less styled: a compact text link, a ghost element at reduced size, or an italicized reference line. The size and weight gap between the two is deliberate and significant, unlike the mild hierarchy in the standard primary-plus-secondary pairing. The visitor understands immediately which action the product expects them to take. The secondary option exists as an acknowledgment, not an invitation.

## Why it works

Visual hierarchy governs attention allocation. When a primary button and a much smaller or plainer secondary appear together, Gestalt principles of figure-ground separation ensure the primary dominates attention. Users who are hesitant and scan for alternatives will find the secondary; users who are ready will click the primary without registering the secondary as a competing choice. This is distinct from the standard hero stack pattern, where both options have roughly similar visual weight. The asymmetric variant is appropriate when the secondary path is genuinely rare: the customer who needs to download for a different platform, the enterprise buyer who needs sales, the user who wants to check pricing before signing up.

## When to use

- A secondary path exists but should not compete for attention with the primary
- The product strongly prefers self-serve signup but must acknowledge enterprise or non-standard paths
- The platform or technical context produces a small but real minority of users who need an alternate action
- The brand archetype favors restraint and a second equal-weight button would create unwanted noise

## When NOT to use

- The secondary audience is large enough that de-emphasizing their path measurably reduces conversion for that segment
- The secondary action is equally important to the business outcome (use equal-weight or labeled hierarchy instead)
- The secondary option is so obscure that it serves no real visitor; remove it rather than hiding it

## Variations

### Solid primary plus text link
A full solid-fill button for the primary action, with a small text link (often with an arrow) directly below or beside it. The text link uses a muted color (secondary text color, not the accent) to signal its subordinate status. Used by Linear ("Get started" + "View pricing"), Vercel ("Deploy" + "Read docs"), and Cursor ("Download" + "Other platforms").

### Solid primary plus parenthetical reference
The secondary option appears as a short parenthetical note inline with or below the primary button: "Get started (or view pricing)." Extreme de-emphasis; the secondary reads as an afterthought. Appropriate for very small secondary audiences.

### Solid primary plus micro link with icon
The primary button, then a small icon-plus-label combination at reduced size (12 to 14px, icon 12px). Used for platform switchers ("Download for Mac" with a small "Windows" and "Linux" link pair below). Communicates that alternate options exist without visually competing.

## Real-world examples

- **Linear**: "Get started" as the solid primary button on the homepage hero, with "View pricing" as a much smaller, lighter text link immediately below. The weight difference is pronounced; "View pricing" is clearly an escape hatch for the hesitant visitor, not a co-equal CTA.
- **Cursor**: Download page presents the primary platform download ("Download for Mac") as a large solid button and "Other platforms" as a compact text reference below. The asymmetry is appropriate: nearly all users want the default platform download.
- **Vercel**: "Deploy" as the primary solid-fill button with "Read documentation" or "Learn more" as a subordinate text reference, consistent across most marketing pages.
- **Stripe**: "Start now" solid-fill primary with "Contact sales" as a small text link, used throughout the marketing site. The size differential is significant; the commercial self-serve path dominates.
- **Resend**: "Get started for free" as the primary solid button with "Read docs" as a quiet text link below; the asymmetry signals that their primary audience self-serves and documentation is for after signup.

## Implementation notes

- **Mobile behavior**: The asymmetric hierarchy must be preserved on mobile. Resist the tendency to make both elements full-width on mobile, which equalizes their visual weight. The primary button goes full-width; the secondary text link remains centered or left-aligned at its natural text size below the button. The gap between the two (typically 8 to 12px) communicates they are related but not equal.
- **Accessibility**: Both elements must be separately navigable via keyboard and screen reader. The text link must have descriptive copy; "here" or "this" are not acceptable screen reader labels. The visual de-emphasis must not affect the tab order; both elements should be reachable in logical sequence.
- **Performance**: No considerations beyond standard button and anchor rendering.
- **Common pitfalls**: De-emphasizing the secondary to the point of invisibility (if the secondary exists, it must be discoverable; if it does not need to be discoverable, remove it entirely). Making the secondary too close in size or weight to the primary (this is the equal-hierarchy problem the pattern is designed to avoid). Using both a de-emphasized secondary and a sticky bar CTA simultaneously; the secondary text link and the persistent bar compete in unexpected ways on long pages.

## Archetype compatibility

This pattern fits naturally with:

- **Editorial Restrained**: The restraint of a muted text link beneath a single primary button is precisely the register this archetype prefers. Linear and Resend are canonical examples.
- **Technical Precise**: The minimal, precise hierarchy fits the archetype's single-accent, single-action approach to UI surfaces.
- **Minimal Essentialist**: The pattern acknowledges the secondary path at minimum visual cost; this is the closest to a single-CTA surface while still serving two audiences.
- **Luxe Considered**: This archetype frequently uses text links as the primary CTA and no secondary at all; when a secondary is present, extreme de-emphasis is the only appropriate treatment.

Less natural with:

- **Bold Confident**: The archetype's assertive visual language benefits from a primary button that is clearly assertive, but de-emphasizing the secondary too far can feel like hiding important options, which conflicts with the archetype's directness.
- **Vibrant Saturated**: Color-rich compositions need visual presence at multiple hierarchy levels; a very quiet text link can disappear against saturated backgrounds.
- **Playful Energetic**: The archetype wants both CTAs to feel alive and personality-driven; de-emphasizing one to near-invisibility dampens the energy the archetype depends on.

## Related patterns

- `02-secondary-text-cta.md` for the secondary-only text link pattern
- `06-hero-stack-primary-plus-secondary.md` for the standard equal-hierarchy pairing
- `01-primary-button-cta.md` for the primary button component in this pairing

## Sources

- Mantlr: "How Stripe, Linear, and Vercel Ship Premium UI" (mantlr.com)
- Spaced Digital: "CTA hierarchy: optimal website buttons for UX and CRO" (nerdcow.co.uk)
- Nielsen Norman Group: Visual hierarchy and Gestalt principles in UX (nngroup.com)
- Linear: linear.app hero and pricing pages (pattern observed)
- Cursor: cursor.com/download (platform-switcher asymmetric CTA observed)
