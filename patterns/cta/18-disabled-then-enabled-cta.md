# Disabled-Then-Enabled CTA

**Category**: CTA
**Subcategory**: Conditional CTA
**Conversion intent**: Prevent premature form submission and communicate required preconditions clearly, enabling the CTA only when the user is genuinely ready to proceed

## What it is

A CTA button that starts in a visually disabled state and becomes enabled when a precondition is met: a required field is filled, a plan is selected, a checkbox is checked, or a multi-step form step is completed. The visual transition (from disabled to enabled) is itself a micro-interaction that confirms to the user that they have met the requirement and can proceed. This pattern is most common in multi-step checkouts, plan selection interfaces, and forms where an action should not be possible without complete input.

## Why it works

Feedback immediacy is a core principle of good interaction design (NNG). When a user fills in a required field and the submit button activates in response, the system confirms: "you did the right thing." This reduces the cognitive burden of managing completion state independently. The disabled state also prevents premature submission errors: instead of reaching a server-side validation error after clicking, the user receives form-level feedback before clicking. Stripe's documentation on payment forms explicitly recommends disabling the payment button until card input validation succeeds, because the alternative (allowing clicks with invalid input and showing post-click errors) produces higher abandonment.

## When to use

- A form has required fields or a required selection that must be complete before submission is meaningful
- A multi-step flow should prevent forward navigation until the current step is complete
- A plan or option must be selected before a purchase action becomes valid (pricing tier selection, seat count, billing period)
- Premature submission would produce a confusing or harmful error state

## When NOT to use

- The precondition is unclear and the disabled state will confuse users ("why is the button gray?") without a clear explanation of what is missing
- The CTA is for a low-stakes action where the cost of premature submission is low (search, filtering)
- The disabled state persists too long; if users cannot identify the precondition, they abandon instead of completing it
- Accessibility constraints make a reliably accessible disabled-then-enabled implementation difficult within the project's technical context

## Variations

### Opacity reduction
The button is rendered at reduced opacity (typically 40 to 60%) and does not respond to hover or click states. The visual dimming communicates "not available yet." Simple to implement; requires accompanying affordance (tooltip or inline error) to explain what the user needs to do.

### Color desaturation
The button's fill color shifts from the brand accent to a muted gray, removing the color signal that typically signals interactability. More visually explicit than opacity reduction; less likely to be missed by users with color perception variations when combined with opacity reduction.

### With explanatory hover tooltip
On desktop, hovering over the disabled button surfaces a tooltip: "Select a plan to continue" or "Enter your email address first." Addresses the primary usability failure of disabled-only implementations (users do not know what to do). Requires JavaScript; pure CSS solutions are limited.

## Real-world examples

- **Stripe Checkout**: Payment submit buttons are disabled until the Stripe.js card element validates input. Stripe's own documentation explicitly recommends this approach: "Disable the payment button while processing to prevent duplicate charges." Their payment element fires `change` events that enable or disable the button based on field completion state.
- **Stripe pricing interfaces**: Plan selection surfaces where the "Get started" button is unavailable until a billing period (monthly or annual) is selected.
- **Multi-step checkout flows broadly**: Baymard Institute research documents the disabled-then-enabled CTA as a recommended pattern for checkout UX, noting that allowing premature submission produces higher abandonment than preventing it.
- **Linear workspace setup**: Steps in the workspace configuration flow where the "Continue" button activates only after the required step input is provided.
- **HubSpot form builder**: Form submission buttons that disable during submission processing to prevent double-submission, and in some templates, disable until required fields are completed.

## Implementation notes

- **Mobile behavior**: The disabled state must be visually clear on mobile, where hover states are not available. Rely on opacity and color change (not tooltip) to communicate the disabled state. Ensure the tap target area is maintained even in the disabled state (do not collapse the button dimensions) so users can feel where the button is even when inactive.
- **Accessibility**: This is the most critical implementation concern for this pattern. A `<button disabled>` element is valid and accessible: it is removed from the tab order, announces as "dimmed" or "unavailable" to screen readers, and does not fire click events. However, removed-from-tab-order means keyboard users cannot discover the button until it is enabled; ensure the form communicates completion requirements via `aria-required` on fields and that field error states are announced via `aria-live`. Never use a `<div>` or `<a>` element styled as a disabled button; only `<button disabled>` is semantically correct. WCAG 1.4.3 contrast requirements do not apply to disabled elements, but making the disabled state visible to users with low vision is still good practice.
- **Performance**: The enable/disable state change is typically driven by form input event listeners. Keep these synchronous and lightweight. Avoid debouncing with delays longer than 50ms; the connection between completing a field and the button enabling should feel immediate.
- **Common pitfalls**: Leaving the button disabled without any affordance explaining what to do (a disabled button with no tooltip or error message is a dead end for users who do not know the rules). Using `pointer-events: none` without `disabled` attribute (blocks mouse clicks but does not communicate disabled state to keyboard or screen reader users). Enabling the button before server-side validation has completed (a user can click the newly-enabled button before validation finishes if the timing is off). Not testing the disabled state visually against the site's background colors (low-contrast disabled buttons are invisible to some users).

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: The pattern is standard in developer-audience products that expect users to complete forms correctly before proceeding. Stripe, Linear, and similar products use it as a product design baseline.
- **Clinical Trustworthy**: The pattern's precision and form discipline fit the archetype's rigorous, no-ambiguity approach to user interaction.
- **Minimal Essentialist**: The implicit communication ("complete the form, then act") fits a design system that avoids redundant instructional text.

Less natural with:

- **Playful Energetic**: This archetype favors low-friction, immediate-action experiences; a disabled button introduces friction that can conflict with the archetype's momentum.
- **Warm Conversational**: The archetype often uses inline validation and progressive guidance rather than a disabled CTA; the disabled state can read as cold or unhelpful without warm microcopy around it.
- **Bold Confident**: Disabled buttons reduce the sense of readiness and action that this archetype projects; the archetype prefers forms that allow submission and handle errors gracefully.

## Related patterns

- `19-microcopy-driven-button-cta.md` for copy approaches that reduce the need for disabled states
- `14-single-cta-pricing-card.md` for the plan-selection context where this pattern appears
- `13-multi-option-cta-cluster.md` for the choice surface that precedes this pattern in some flows

## Sources

- Stripe Documentation: "Build two-step confirmation" and "Card Element Input Validation" (stripe.com/docs)
- Baymard Institute: Checkout UX research and disabled button recommendations (baymard.com)
- Nielsen Norman Group: "Microcopy: Tiny Words With a Huge UX Impact" (nngroup.com)
- WCAG 2.1: Success Criterion 1.4.3 (Contrast Minimum), Success Criterion 4.1.2 (Name, Role, Value)
