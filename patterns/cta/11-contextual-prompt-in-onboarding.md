# Contextual Prompt in Onboarding

**Category**: CTA
**Subcategory**: In-Product CTA
**Conversion intent**: Guide users to the next meaningful action at the exact moment they have completed a prior action or reached a relevant milestone

## What it is

A CTA presented within an in-product onboarding flow, triggered by a specific user action or milestone rather than elapsed time or page position. The prompt appears because the user has just done something: created their first project, completed a setup step, invited a teammate, or reached the end of a configuration sequence. It is contextual in the strictest sense: the content of the prompt is determined by what the user just did and what the logical next action is.

## Why it works

Behavioral research on onboarding drop-off consistently shows that users abandon flows at moments of ambiguity, not moments of difficulty. When a user completes an action and the product has no response, they are left to construct the next step themselves. The contextual prompt removes that ambiguity: it reads the user's completed state and names the next action explicitly. Notion's onboarding, documented by Good UX, achieves 55% onboarding completion versus the 20 to 30% industry average, in part by providing template-based next steps immediately after account creation. Figma's guided first experience (draw a shape, invite a collaborator) achieves 65% activation by chaining contextual next-action prompts through real output steps.

## When to use

- An onboarding flow has defined milestones that naturally lead to successor actions
- A specific step (first project created, first integration connected) is correlated with retention; the prompt should accelerate reaching that step
- The product has sufficient analytics to identify the specific moments where users stall
- The user's completed state meaningfully changes what the right next action is

## When NOT to use

- The prompt fires on a time trigger rather than an action trigger; time-based prompts are less contextually accurate
- The next-action prompt fires before the user has completed the prior step
- The flow is mature enough that users already know the path; prompts in a well-understood flow are noise
- The product does not have defined activation milestones (in which case, the prior work is defining those milestones, not building this pattern)

## Variations

### Progress-tied prompt
Appears after the user completes a step in a defined sequence and indicates both what was completed and what comes next. Often paired with a progress indicator ("Step 2 of 5 complete. Next: invite a teammate."). Appropriate for structured onboarding with a clear path.

### Action-completion celebration with next-action prompt
After a user completes a meaningful action (first publish, first payment, first automation run), a brief success moment (animation, confetti, or positive micro-copy) is immediately followed by a "Now do X" prompt. The celebration creates positive affect; the prompt channels that affect into the next action.

### Milestone-based upgrade prompt
At a specific usage threshold (approaching a plan limit, completing N actions in a free tier), the prompt appears: "You have done X. Upgrade to continue." Appropriate for freemium-to-paid conversion. The milestone is the trigger; the prompt is the CTA.

## Real-world examples

- **Notion**: After account creation, Notion presents a pre-filled workspace based on the user's stated purpose, with inline prompts to explore template sections. The prompt system is documented by Good UX's onboarding analysis and Appcues' case study library.
- **Linear**: Setup flow includes step-by-step workspace configuration with contextual next-action prompts after each step (create a project, add members, create first issue). The prompts are minimal but present throughout first-run.
- **Figma**: The "Learn Figma" first-experience flow chains contextual prompts through real actions. After each action (frame created, component applied), the next step prompt appears in context, not in a sidebar tutorial.
- **Slack**: New workspace onboarding presents contextual channel-setup prompts after account creation, specifically after the user completes their profile, and then immediately prompts the next useful action (invite teammates).
- **Supademo analysis (2026)**: Documents SaaS onboarding flow examples across Notion, Figma, Linear, and Airtable with specific attention to contextual prompting as the differentiating factor in high-activation products.

## Implementation notes

- **Mobile behavior**: Onboarding prompts on mobile must be sized to avoid obscuring the action they are prompting. Bottom sheet pattern (sliding up from the bottom of the screen) is ergonomically appropriate on mobile for milestone prompts. Avoid center-screen modals that are difficult to dismiss on small screens.
- **Accessibility**: Contextual prompts should not interrupt focus unexpectedly. If the prompt appears in response to a user action (completing a form step), it is acceptable for focus to move to the prompt. If it appears as a time-delayed notification, focus must not auto-move. Use `role="status"` for informational prompts or `role="dialog"` if the prompt requires input.
- **Performance**: Prompts triggered by user actions should appear within 200ms of the triggering event to feel immediate and connected to the action. Delayed prompts break the contextual link.
- **Common pitfalls**: Triggering prompts based on time elapsed rather than actions completed. Showing the same prompt multiple times after the user has dismissed it (implement state persistence). Prompts that suggest the wrong next action because the product's understanding of user state is incomplete. Overloading the first session with too many prompts; Supademo research indicates that flows with over 20 steps see completion drop 30 to 50%.

## Archetype compatibility

This pattern fits naturally with:

- **Warm Conversational**: The archetype's relationship-first posture extends naturally into onboarding; prompts read as helpful guidance from a knowledgeable guide.
- **Playful Energetic**: Action-completion celebrations with next-action prompts match the archetype's enthusiasm and momentum.
- **Technical Precise**: Developer tools use contextual prompts throughout setup flows; the pattern reads as good product engineering rather than marketing intervention.
- **Bold Confident**: Milestone-based upgrade prompts in this archetype are direct and unapologetic: "You have reached your limit. Here's how to continue."

Less natural with:

- **Luxe Considered**: Premium products expect users to explore at their own pace; prompts read as instructional and paternalistic in this archetype.
- **Editorial Restrained**: The archetype prefers whitespace and user agency over guided intervention; contextual prompts can conflict with this sensibility unless they are extremely understated.

## Related patterns

- `15-reverse-trial-cta.md` for the upgrade-timing variant of this pattern
- `18-disabled-then-enabled-cta.md` for the precondition-based CTA variant
- `12-section-end-cta-repetition.md` for section-boundary CTAs on marketing pages (not in-product)

## Sources

- Good UX / Appcues: "Notion's clever onboarding and inspirational templates" (goodux.appcues.com)
- Supademo Blog: "10 SaaS Onboarding Flow Examples That Actually Work" (supademo.com, 2026)
- UserOnboarding.Academy: "Figma's product walkthrough is thorough" (useronboarding.academy)
- Userpilot Blog: "Mobile Onboarding Examples" (userpilot.com)
