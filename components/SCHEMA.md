# Component documentation schema

Every component's README follows this structure.

## Filename and folder convention

- Folder: kebab-case (matches pattern files): `hero-product-mockup/`
- React file: PascalCase (React convention): `HeroProductMockup.tsx`
- HTML/CSS files: kebab-case: `index.html`, `styles.css`
- Example file: `example.tsx` in the `react/` folder

## README structure

````markdown
# {ComponentName}

**Implements pattern**: [link to pattern file] OR "Utility component (no pattern mapping)"
**Category**: CTA | Lead Capture | Social Proof | Urgency | Interactive Tooling | Utility
**Stability**: v2.0 (initial)

## What it is

[1-3 sentences describing what the component renders and when to use it]

## React usage

```tsx
import { ComponentName } from "claude-skills-widgets/component-slug";

<ComponentName
  propA="..."
  propB="..."
/>
```

## HTML usage

```html
<link rel="stylesheet" href="path/to/component-slug/styles.css">

<section class="cmp">
  <div class="cmp__content">...</div>
</section>
```

## Props (React)

| Prop | Type | Default | Description |
|---|---|---|---|
| propA | string | required | ... |
| propB | string | ... | ... |

## Customization (HTML/CSS variables)

Every customizable visual property is exposed as a CSS custom property on the component root class:

```css
.cmp {
  --cmp-title-color: var(--brand-ink, #102542);
  --cmp-bg-color: var(--brand-surface, #ffffff);
  --cmp-accent: var(--brand-accent, #1e5fcf);
}
```

Override these in your own stylesheet to integrate the component into your brand:

```css
:root {
  --cmp-accent: #ff6b00;
}
```

## Accessibility

- [Specific a11y considerations for this component]
- Semantic HTML elements used
- Keyboard navigation behavior
- Screen reader considerations

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). No IE support.

## Migration history

- v2.0: initial migration from rampstackco-app's Threshold reference build
````
