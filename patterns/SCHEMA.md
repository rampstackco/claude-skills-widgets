# Pattern documentation schema

Every pattern file in this catalog follows this structure. Variations are allowed for specific pattern types (e.g. urgency patterns include an anti-pattern section more prominently) but the core structure is consistent.

## Filename convention

`{NN}-{kebab-case-name}.md` within the appropriate category folder.

NN is a 2-digit sequence number for ordering. Doesn't imply ranking, just file ordering for browseability.

## Structure

```markdown
# {Pattern Name}

**Category**: CTA | Lead Capture | Social Proof | Urgency | Interactive Tooling
**Subcategory**: {specific sub-pattern type, e.g. "Sticky Bar CTA", "Modal Form", "Logo Strip"}
**Conversion intent**: {what user action this pattern is designed to drive}

## What it is

[1-3 sentences describing the pattern. Plain language.]

## Why it works

[2-4 sentences explaining the psychological or behavioral mechanism. Reference Cialdini principles when relevant: reciprocity, commitment, social proof, authority, liking, scarcity, unity. Reference NNG, Baymard, or CXL research when relevant.]

## When to use

- [Scenario 1, specific]
- [Scenario 2, specific]
- [Scenario 3, specific]

## When NOT to use

- [Anti-scenario 1, specific]
- [Anti-scenario 2, specific]

## Variations

### {Variation Name 1}
[Description, when to pick this variant, what differentiates it from sibling variants.]

### {Variation Name 2}
[Same structure.]

### {Variation Name 3}
[Same structure. Aim for 2-4 variations total.]

## Real-world examples

- **{Brand 1}**: {Specific page or surface where the pattern appears. URL or section reference.}
- **{Brand 2}**: {Same structure.}
- **{Brand 3}**: {Same structure. Minimum 3 examples; 5-7 ideal.}

## Implementation notes

- **Mobile behavior**: [How the pattern adapts on narrow screens, or why it doesn't]
- **Accessibility**: [Required ARIA roles, keyboard behavior, screen reader considerations]
- **Performance**: [Loading or interaction performance considerations if relevant]
- **Common pitfalls**: [What teams get wrong when implementing]

## Archetype compatibility

This pattern fits naturally with:

- **{Archetype Name}**: {Brief reason why}
- **{Archetype Name}**: {Brief reason why}

Less natural with:

- **{Archetype Name}**: {Brief reason why this archetype usually skips this pattern}

(Reference the 12 archetypes in claude-skills/skills/brand-archetype-system/references/core-archetypes/)

## Related patterns

- [Related pattern 1] (cross-reference to another file in this catalog)
- [Related pattern 2]

## Sources

- [Research source 1 if cited]
- [Research source 2 if cited]
```

## Voice and length

- Length: 500-1500 words per file. The catalog's ~1100 word average reflects the schema's 8+ structured sections (description, why, when-to, when-not-to, variations, examples, implementation, archetype-compatibility, related-patterns). Patterns with fewer variations or simpler implementation notes can land closer to 500; patterns with rich variation analysis can reach 1500. Files over 1500 should be reviewed for trim opportunities.
- Voice: direct, declarative, no marketing language
- Length-related decisions: 3-7 real examples is the right band. Less than 3 is insufficient grounding; more than 7 is over-attribution.
- Attribution language: "exemplified by", "common among", "characteristic of", "used by". Avoid implying endorsement.
