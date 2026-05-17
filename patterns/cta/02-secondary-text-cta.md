# Secondary Text CTA

**Category**: CTA
**Subcategory**: Text Link CTA
**Conversion intent**: Offer an alternate conversion path without competing visually with the primary CTA

## What it is

A plain text link, sometimes accompanied by an arrow or chevron, used as a lower-priority CTA alongside a primary button. It carries significantly less visual weight than a solid-fill button and signals an alternate, lower-commitment path: reading documentation, viewing pricing, or contacting sales rather than signing up immediately.

## Why it works

Visual hierarchy governs attention. When a primary button and a secondary text link share a surface, users who are ready to act click the primary; users who need more information take the secondary path without being forced to abandon the page. NNG research on progressive disclosure supports this: giving hesitant users a way forward (without a full commitment) retains them longer than binary choice. The text link format is itself a trust signal in restrained brand contexts; the product is confident enough not to shout.

## When to use

- A primary button already anchors the surface and a second option is genuinely useful but subordinate
- The secondary action is genuinely different in audience or intent (self-serve vs sales-assisted, documentation vs demo)
- The brand archetype favors restraint, and a second solid button would create noise
- The page is a hero or section header with limited space for UI chrome

## When NOT to use

- The secondary action is nearly as important as the primary (use a paired button pattern instead)
- Both CTAs go to the same destination
- The product is consumer-facing and speed of action matters more than reflection

## Variations

### With trailing arrow
Adds a right-pointing arrow (`→`) after the link text. The arrow signals navigation and next-step action. Most common in B2B contexts. Use when the secondary action is also a conversion action, not just a browse path.

### With leading chevron
Chevron placed before text (`›`) or inline with it. Less common, often seen in documentation navigation contexts. Appropriate when the user is already mid-funnel and browsing through options.

### Simple underline only
No icon, just an underlined text link in the accent or body color. The most restrained variant. Used when the brand archetype is Editorial Restrained or Minimal Essentialist and even an arrow would read as too directional.

### Muted ghost link
No underline by default, underline on hover only, set in a muted text color. Common on dark backgrounds or photography-heavy heroes where standard link styling competes with the image.

## Real-world examples

- **Stripe**: Hero section on stripe.com uses "Start now" as the primary solid-fill button alongside "Contact sales" as a text link for enterprise-path users.
- **Linear**: Pricing page pairs a primary tier CTA with "View all features" as a subordinate text link to reduce commitment pressure.
- **Vercel**: Documentation entry points use "Read documentation" or "View docs" as text links beneath primary action buttons throughout the marketing site.
- **Cursor**: Download page presents the primary platform download as a solid button, with "Other platforms" as a compact text link below.
- **Resend**: Hero uses "Get started" (primary) and "Read the docs" as a plain text link, a pattern consistent across their Technical Precise archetype peers.

## Implementation notes

- **Mobile behavior**: Text links remain as inline links on mobile. Ensure the tap target is at least 44pt; adding vertical padding on mobile via CSS is the standard fix.
- **Accessibility**: Text links require descriptive copy, not "click here." The link text should make sense read aloud by a screen reader. If using an icon, add `aria-label` or pair the icon with visible text.
- **Performance**: No considerations beyond standard anchor rendering.
- **Common pitfalls**: Using the same link color as body text, making the CTA visually indistinguishable. Setting underline to display on hover only without any resting-state visual cue (fails WCAG 1.4.1 for non-color differentiation). Copy that is too vague ("Learn more") when specific copy ("View pricing") reduces friction.

## Archetype compatibility

This pattern fits naturally with:

- **Editorial Restrained**: The understated format matches the archetype's preference for restraint over assertion. Linear, Vercel, and Resend use it consistently.
- **Technical Precise**: Developer-audience brands favor text links over buttons for secondary actions; it reads as documentation-native.
- **Minimal Essentialist**: The format's low visual weight complements a low-chrome aesthetic.
- **Luxe Considered**: Luxury brands frequently replace buttons with text links entirely, using them as the primary CTA.

Less natural with:

- **Bold Confident**: The archetype relies on high contrast and visual assertiveness; a quiet text link often gets lost against the dominant primary.
- **Vibrant Saturated**: Color-block compositions need visible elements at every hierarchy level; text links disappear against saturated backgrounds.
- **Playful Energetic**: Character-driven brands usually want both CTAs to feel alive; text links read as inert in this register.

## Related patterns

- `01-primary-button-cta.md` for the primary button this pattern complements
- `06-hero-stack-primary-plus-secondary.md` for the composite pattern pairing these two
- `20-asymmetric-cta-primary-de-emphasized-secondary.md` for the explicit size/weight asymmetry variant

## Component implementation

A v2 implementation of this pattern is available in [`components/secondary-text-cta/`](../../components/secondary-text-cta/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Nielsen Norman Group: "Progressive Disclosure" (nngroup.com)
- Nielsen Norman Group: "Text Links: Practice and Theory" (nngroup.com)
- WCAG 2.1 Success Criterion 1.4.1: Use of Color
