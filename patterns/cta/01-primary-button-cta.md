# Primary Button CTA

**Category**: CTA
**Subcategory**: Button-based
**Conversion intent**: Drive the single most important action on the surface (sign-up, purchase, demo request)

## What it is

A solid-fill button containing direct action copy, positioned as the visual focal point of a surface. Used when one action is meaningfully more important than any other on the page or section. Typically appears in the hero, after value props, and at section transitions.

## Why it works

Visual hierarchy reduces decision friction. When users see one clear primary action surrounded by secondary or de-emphasized options, attention converges. Hick's Law explains why fewer choices speed decisions; the primary button operationalizes that for conversion surfaces. Cialdini's commitment principle reinforces: a single clear action gets clicked more reliably than ambiguous multi-option surfaces.

## When to use

- The page has one clear primary conversion goal
- Other actions exist but are meaningfully less important (link to docs, talk to sales)
- The user has enough information to act, or the next page will provide it
- The brand has a strong primary accent color that visually anchors the button

## When NOT to use

- The page has multiple equal-priority actions (use a multi-option pattern instead)
- The audience needs more information before any commitment (use a no-CTA explanatory section first)
- The brand archetype favors restraint over assertion (Luxe Considered, Editorial Restrained sometimes use only text CTAs)

## Variations

### Solid-fill primary
Solid background in brand primary or accent color, contrasting text, no border. The default variant. Highest visual weight. Use when assertion is appropriate.

### Outlined primary
Border in brand color, transparent or surface background, brand-color text. Less weight than solid-fill. Used when paired with a more aggressive solid-fill secondary, or when the brand archetype favors restraint.

### Pill-shaped vs rounded-rectangle vs sharp-cornered
Pill shape (fully rounded ends) reads as approachable and consumer-friendly. Rounded-rectangle (small radius) reads as professional and B2B-default. Sharp corners (no radius) read as editorial or premium. Choice flows from brand archetype.

### With icon
Solid-fill or outlined with a leading or trailing icon. Arrow icon (`→`) is most common, signals "next step." Other icons should be meaningful, not decorative.

## Real-world examples

- **Linear**: Hero primary "Plan the present, build the future" with solid-fill ink button "Get started" and outlined secondary "View pricing." Editorial Restrained register with a single accent.
- **Stripe**: Hero primary "Start now" solid-fill in violet, with secondary text link "Contact sales." Technical Precise register with strong accent color.
- **Notion**: Hero primary "Get Notion free" solid-fill in black, with outlined secondary "Request a demo." Bold Confident with high-contrast.
- **Cash App**: Single primary "Get the app" solid-fill in lime, no secondary. Bold Confident archetype, signature single accent.
- **Webflow**: Hero primary "Start building - it's free" solid-fill in blue, secondary outlined "Talk to sales." Warm Conversational with confident commercial framing.
- **Cursor**: Primary "Download for Mac" solid-fill in black, secondary "Download for other platforms" text link. Technical Precise with platform-specific copy.

## Implementation notes

- **Mobile behavior**: Primary button typically grows to full container width on mobile to remain tappable. Minimum 44x44pt touch target (iOS guideline) or 48dp (Material guideline).
- **Accessibility**: Use `<button>` or `<a>` semantically; never a `<div>` with onClick. Ensure 4.5:1 contrast on solid-fill variants. Focus ring required and visible (not removed via `outline: none` without replacement).
- **Performance**: No special considerations for static buttons. Watch for hover/active state transitions that trigger layout shifts.
- **Common pitfalls**: Removing focus rings for visual cleanliness (a11y fail). Using two primary buttons on the same surface (defeats hierarchy). Action copy that's too vague ("Click here", "Submit") rather than specific ("Get started", "Book a demo").

## Archetype compatibility

This pattern fits naturally with:

- **Bold Confident**: The archetype's high-contrast register makes solid-fill primaries pop. Multiple Bold Confident exemplars (Loom, Cash App, Notion) use this pattern prominently.
- **Technical Precise**: The structural clarity of a single primary button matches the archetype's grid-and-precision aesthetic. Stripe, Vercel, Linear.
- **Warm Conversational**: Friendly action copy plus solid-fill button reads as approachable confidence. Webflow, Slack.

Less natural with:

- **Luxe Considered**: Luxe brands often use text CTAs or outlined buttons rather than solid-fill, preserving the considered restraint.
- **Documentary Honest**: Photography-led brands (Airbnb, Patagonia) often use lower-weight CTAs to keep imagery as the visual hero.

## Related patterns

- `06-hero-stack-primary-plus-secondary.md` for the composite pattern where primary + secondary appear together
- `19-microcopy-driven-button-cta.md` for the copy-decision side of primary buttons
- `20-asymmetric-cta-primary-de-emphasized-secondary.md` for the de-emphasized secondary case

## Component implementation

A v2 implementation of this pattern is available in [`components/primary-button-cta/`](../../components/primary-button-cta/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Nielsen Norman Group: "Calls to Action: How to Write Effective Buttons" (search nngroup.com for the article)
- Cialdini's "Influence": commitment-consistency principle
- Hick's Law (decision time as function of choice count)
