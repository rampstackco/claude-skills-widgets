# Single-Quote Testimonial

**Category**: Social Proof
**Subcategory**: Testimonial
**Conversion intent**: Build specific credibility around a product claim through a named, attributed customer voice

## What it is

One prominent customer quote, displayed with the speaker's name, title, and company. It typically occupies a section of its own or is visually set apart within a section. Unlike a carousel or grid, there is no competing testimony; the single quote receives full visual weight.

## Why it works

Cialdini's social proof principle is amplified when the source is specific and identified. An anonymous "satisfied customer" quote carries low signal; a quote from a named person with a job title and employer creates accountability that makes the claim credible. Research from the Nielsen Norman Group on testimonial credibility shows that specificity (a named source describing a particular outcome) outperforms generic superlatives ("great product!") significantly. The single-quote format also benefits from focused attention: readers absorb one thing, rather than scanning a wall and absorbing nothing.

## When to use

- The product has a specific differentiating claim that can be reinforced by a customer who experienced it
- The quote is from a recognizable name or a recognizable company
- The page is long enough to benefit from a mid-page trust reset before a secondary CTA
- A carousel or grid would dilute the specific message the quote supports

## When NOT to use

- The brand has many equally compelling quotes and the page can support multiple (use a grid or carousel instead)
- The quote is generic ("I love this product, it's great") and does not add specific value
- The quote is not verifiable or attributed (unattributed quotes read as fabricated regardless of truth)
- The product is in a category where personal endorsement creates regulatory issues (some healthcare contexts)

## Variations

### With headshot
The speaker's photograph sits beside or above the quote. Humanizes the attribution significantly. The face activates a different cognitive system than text alone, consistent with research on social presence. Use when the headshot is real, high quality, and the permission has been confirmed.

### With company logo
The speaker's employer logo appears alongside the name and title. Activates company-level authority in addition to individual-level authority. Common in B2B contexts where the company is as recognizable as (or more recognizable than) the individual.

### Callout-styled
The quote is displayed at large type size, isolated in whitespace, often with a large typographic quotation mark. Reads as editorial rather than testimonial. Used when the brand archetype is Editorial Restrained or the quote is strong enough to stand alone as a visual element.

### With outcome metric
The quote is paired with a specific result ("Deployment time dropped from 3 hours to 12 minutes") displayed as a pull stat. More persuasive than the quote alone because it provides a concrete evidence anchor.

## Real-world examples

- **Linear**: Homepage features a prominent single quote from a named founder or engineering leader at a recognizable company, rendered in a restrained single-quote format that fits the Editorial Restrained archetype. The attribution includes name, title, and company.
- **Vercel**: Multiple product and enterprise pages use single prominent quotes from engineering leaders at companies like OpenAI and Airbnb. The Vercel deployment page uses a single quote positioned directly before the primary CTA section.
- **Stripe**: The Stripe Atlas product page and several Stripe Connect sub-pages use a prominent single testimonial with founder attribution. The quote is specific to the product's value prop (e.g., company formation speed for Atlas).
- **Notion**: Enterprise landing page features a single quote from an IT or operations leader at a recognizable employer, paired with the company logo.
- **Figma**: Enterprise and team pages feature single quotes from design leads at recognizable technology companies, with headshot and employer logo.
- **HubSpot**: Various product landing pages use a prominent single testimonial in the callout format, with a business outcome metric alongside the quote.

## Implementation notes

- **Mobile behavior**: The quote should reflow to full width on mobile. If the headshot variant is used, the photo moves above the quote on narrow viewports rather than sitting beside it. Minimum type size for the quote body: 18px on mobile.
- **Accessibility**: Use a `<blockquote>` element with a `<cite>` child containing the attribution. Do not fake blockquotes with styled divs. Screen readers surface blockquote semantics.
- **Performance**: If a headshot image is used, optimize aggressively (WebP, 200-300px wide at 2x). The photo is not the hero; it does not need print resolution.
- **Common pitfalls**: Quotes that are too general to do work ("This product changed my workflow"). Attribution that is too vague ("Senior developer at a Fortune 500 company"). Using the same quote on every page regardless of which product claim it supports. Rotating this section seasonally and failing to obtain ongoing consent from the quoted person.

## Archetype compatibility

This pattern fits naturally with:

- **Editorial Restrained**: The callout variant, with generous whitespace and a large typographic quote mark, fits precisely. Linear, Vercel, and Resend use this variant in their Editorial Restrained register.
- **Technical Precise**: Single quotes from engineering leaders or CTOs at recognizable companies carry high signal for technical audiences. The attribution specificity matches the archetype's precision orientation.
- **Warm Conversational**: A headshot-plus-quote from a relatable customer profile (small business owner, team lead) matches the archetype's peer relationship. Webflow and Mailchimp use this variant.
- **Clinical Trustworthy**: A quote from a clinician, pharmacist, or medical director in this archetype carries authority-based proof in addition to social proof. Specificity is particularly important: vague clinical quotes harm credibility.

Less natural with:

- **Minimal Essentialist**: The archetype's discipline tends toward omission of testimonials, preferring data and product demonstration. A single quote, if present, is reduced to its most stripped form.
- **Playful Energetic**: The formal attribution structure (Name, Title, Company) reads as institutional in a register that favors UGC, social embeds, and informal voice.

## Related patterns

- `04-testimonial-carousel.md` for the rotating multi-quote version
- `05-testimonial-grid.md` for when multiple testimonials are shown simultaneously
- `11-twitter-x-embed-wall.md` for less formal, platform-native social proof

## Component implementation

A v2 implementation of this pattern is available in [`components/single-quote-testimonial/`](../../components/single-quote-testimonial/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Cialdini, Robert. "Influence: The Psychology of Persuasion." Social proof principle.
- Nielsen Norman Group: Testimonial credibility and specificity research.
- W3C HTML specification: `<blockquote>` and `<cite>` elements.
