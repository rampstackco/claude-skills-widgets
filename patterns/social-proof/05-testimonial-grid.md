# Testimonial Grid

**Category**: Social Proof
**Subcategory**: Testimonial
**Conversion intent**: Demonstrate consistent, broad customer satisfaction across personas or use cases by making multiple testimonials visible simultaneously

## What it is

Three to six customer testimonials arranged in a grid, all visible at once without interaction. Cards are the most common container, each holding a quote, name, title, and company. Unlike a carousel, the grid does not require the visitor to navigate or wait; all testimonials are immediately scannable.

## Why it works

The simultaneous visibility of multiple attributions amplifies Cialdini's social proof principle more directly than a carousel. The visitor sees not a single endorsement but a pattern of endorsements, which is harder to dismiss as an outlier. Baymard Institute research on review layouts finds that visibility-at-once significantly outperforms paginated or rotating formats for trust formation when the content is scannable. The grid also allows visitors to self-select: a developer scans for quotes from developers, a founder scans for founder quotes. No clicking required.

## When to use

- The page has a dedicated testimonial section with enough vertical space to accommodate 3-6 cards
- The testimonials span different customer types and the grid layout enables efficient self-selection
- The brand has enough strong, specific testimonials to fill the grid without padding with generic quotes
- The product or brand is at a stage where demonstrating breadth of positive sentiment is a priority

## When NOT to use

- Fewer than 3 high-quality testimonials exist (the grid will look sparse)
- All testimonials say nearly the same thing (redundancy reduces the signal-per-card)
- The page is already long and dense; adding a 6-card grid compounds scroll fatigue
- The single strongest testimonial is significantly better than the others (isolate it as a single-quote callout instead)

## Variations

### Equal-size card grid
All testimonial cards are the same dimensions. The most common and easiest to implement. Works well with 3 or 6 cards on desktop (clean 3-column), 4 or 6 with a 2-column mobile fallback.

### Masonry layout
Cards have varying heights to match varying quote lengths. Creates a more organic, editorial feel. Common when the brand archetype is Editorial Restrained or Documentary Honest. Requires more careful implementation to avoid alignment problems across breakpoints.

### Twitter/X embed style
Cards designed to mimic the visual language of a social media post: handle, avatar, timestamp, and body text. Signals that the testimonials are authentic, unprompted public statements. Closely related to `11-twitter-x-embed-wall.md` but implemented without live embeds.

### Featured-plus-supporting layout
One large card occupies 2-3 columns and holds the strongest quote; smaller supporting cards fill the remaining columns. A hierarchy that gives the best testimonial prominence while maintaining grid breadth.

## Real-world examples

- **Linear**: The "What people say" section on the Linear homepage presents a testimonial grid from engineers, founders, and product leads at recognizable companies. The grid uses a dark surface consistent with the Editorial Restrained brand aesthetic.
- **Notion**: Team and enterprise landing pages feature testimonial grids with attribution to operations and IT leaders at well-known organizations. 3-column grid on desktop.
- **Webflow**: The Webflow website showcases a grid of customer testimonials from agencies and in-house design teams. Cards include job title and company.
- **Loom**: Marketing pages include a testimonial grid from business and team-lead personas; the grid is designed to show a breadth of use cases.
- **Figma**: Community and professional landing pages use equal-size grids of testimonials from designers, developers, and product managers.
- **Framer**: The Framer marketing site uses a testimonial grid styled to match its design-forward aesthetic; cards include Twitter/X handles, blurring the line between the grid and social embed variants.

## Implementation notes

- **Mobile behavior**: A 3-column desktop grid should collapse to 1-column on mobile (or 2-column for shorter quotes). Avoid horizontal scrolling for a grid; unlike a carousel, the grid implies all content is worth reading, not just the currently visible content.
- **Accessibility**: Each card is a static content block. No special ARIA roles required beyond semantic HTML. If cards contain links to full case studies, the link text should be descriptive ("Read the Acme case study") rather than generic ("Read more"). Ensure 4.5:1 contrast for quote text against card background.
- **Performance**: If headshot images are included, optimize and serve at appropriate sizes (the thumbnail-scale photo does not require full-resolution delivery). Lazy-load images for cards below the initial viewport. Avoid JavaScript grid libraries for layout when CSS Grid achieves the same result natively.
- **Common pitfalls**: Including more than 6 cards (the grid becomes a wall; use a carousel or filter if there are more). Using the same quote from the same person across multiple pages. Mismatching card heights in non-masonry layouts (caused by variable quote length without minimum height enforcement). Padding thin content with weak quotes to fill a 6-card grid.

## Archetype compatibility

This pattern fits naturally with:

- **Editorial Restrained**: The grid's considered simultaneity fits the archetype's emphasis on giving the visitor information to evaluate rather than selling at them. Linear uses this pattern in precisely this register.
- **Technical Precise**: A grid of quotes from engineers and technical leads at recognizable companies reads as evidence rather than endorsement. The structured layout matches the archetype's grid discipline.
- **Warm Conversational**: A 3-card grid of relatable peer testimonials fits Webflow and Mailchimp-style brands. The density is low enough to feel approachable.
- **Bold Confident**: High-contrast card grids with large quote text read as assertion-through-evidence. The grid suits brands that lead with confidence.

Less natural with:

- **Luxe Considered**: Luxury brands avoid dense content grids. A single carefully chosen quote carries more premium signal than six cards competing for attention.
- **Minimal Essentialist**: The multiple-card layout conflicts with the archetype's principle of removal. A testimonial grid reads as abundance-as-defense rather than confidence-through-restraint.

## Related patterns

- `03-single-quote-testimonial.md` for when one testimonial should anchor a section
- `04-testimonial-carousel.md` for the rotating variant where space is a constraint
- `11-twitter-x-embed-wall.md` for the social-native variant of multi-testimonial display

## Component implementation

A v2 implementation of this pattern is available in [`components/testimonial-grid/`](../../components/testimonial-grid/). Both React (TypeScript) and HTML/CSS variants are provided. Customize via CSS custom properties.

## Sources

- Cialdini, Robert. "Influence: The Psychology of Persuasion." Social proof principle.
- Baymard Institute: Review layout and visibility research.
- Linear homepage: linear.app
- Webflow customers page: webflow.com/customers
