# Magic Link Signup

**Category**: Lead Capture
**Subcategory**: Auth-based
**Conversion intent**: Capture an email address and authenticate the user without requiring password creation, by sending a one-time login link

## What it is

Magic link authentication presents the user with an email field, no password field, and a submit button. On submission, the system sends an email containing a time-limited, single-use URL. Clicking that URL authenticates the user and creates or resumes their session. No password is created, stored, or required. The mechanism functions as both a lead capture (the email address is captured on form submit) and an authentication flow (the click creates an authenticated session).

## Why it works

Magic links eliminate the two primary failure modes of password-based signup: password creation friction (the user must invent, remember, and type a new credential) and credential stuffing attacks (there is no password to steal or spray). Slack's own analysis found that teams using magic link invitations onboard 2.3 days faster than those requiring password setup, and Notion's security team reported a 89% reduction in account takeover attempts after eliminating passwords entirely. The commitment is low: the user provides only an email and then checks a familiar channel (their inbox) to complete the flow. Cialdini's commitment and consistency principle operates here too: checking email for the link is a small action that commits the user to completing the signup.

## When to use

- The product's audience is comfortable checking email as part of a workflow (knowledge workers, SaaS users, professional tooling users)
- Password management is a documented friction point in your existing funnel, evidenced by high "Forgot password" rates
- Security is a priority and the trade-off of shifting authentication risk from password attacks to email account security is acceptable
- The product is invitation-based or team-oriented: sending a magic link simultaneously invites and authenticates the new member without requiring them to create credentials

## When NOT to use

- Users are likely to sign up from a device that does not have access to the email client they provide (e.g., signing up on a desktop while email is on a phone not in reach)
- The email delivery infrastructure cannot guarantee fast, reliable delivery; a magic link that arrives in 10 minutes or lands in spam kills the flow
- The product requires offline authentication or frequent re-authentication in environments without email access (field tools, manufacturing, low-connectivity environments)
- The audience includes users who do not understand why a link arrived in their email and will delete it as suspected spam; this can be a trust issue with less digitally-fluent audiences

## Variations

### Email only
A single email field with a "Send me a link" button. The simplest implementation. The user provides their email; the link lands in their inbox. No other data is collected at this step. Post-authentication onboarding collects additional profile data.

### Email plus name
Adds a name field before the email. The name field personalizes the welcome email and the in-app experience without adding meaningful friction. The link is still the authentication mechanism; the name is collected alongside the email.

### Named product access (invitation-based)
The magic link is sent as an invitation to an existing space, document, or team. The link both authenticates and grants access to a specific resource. Slack's workspace invitations and Notion's shared document invites are the canonical examples of this variant.

## Real-world examples

- **Notion**: Notion (notion.com) eliminated passwords entirely in 2019, making magic links the default authentication mechanism for new signups. Every login sends a time-limited link to the registered email address; no password option exists by default.
- **Slack**: Slack (slack.com) uses magic link authentication for workspace invitations. New members receive an invite email with a single-click join link that creates their account and grants access simultaneously, without requiring password creation. Slack processes over 12 million magic link authentications daily.
- **Supertokens**: Supertokens (supertokens.com) provides magic link authentication as a product feature and documents the implementation pattern, including token expiration, email delivery considerations, and security trade-offs.
- **FusionAuth**: FusionAuth (fusionauth.io) documents the magic link pattern alongside one-time password (OTP) patterns, providing implementation guidance for token generation, email delivery, and session management.
- **Anvil**: Anvil (anvil.works) uses magic link authentication for its document workflow platform. Their blog documents the reasoning: passwords add complexity, magic links align with the workflow-from-email pattern their audience already follows.
- **Descope**: Descope (descope.com) provides magic link as a core authentication primitive alongside social login. Their documentation explains the token lifecycle, resend flows, and mobile deeplink considerations for mobile-app implementations.

## Implementation notes

- **Mobile behavior**: The magic link email must work correctly when opened on a different device than the one where the form was submitted. The link should initiate the session on the device where the link is clicked, not necessarily the device where the form was submitted. On mobile, deeplinks (universal links on iOS, app links on Android) can send the user directly to the native app rather than the browser after clicking the email link.
- **Accessibility**: The email input must have an associated label, `type="email"` for mobile keyboard and autofill, and `autocomplete="email"`. The confirmation screen (shown after form submit, before the user checks email) must clearly communicate what action is expected next ("Check your inbox for a link from [Brand]. It expires in 15 minutes."). Success and error states must be accessible to screen readers.
- **Performance**: Magic link performance is almost entirely determined by email delivery speed. Use a transactional email provider (Postmark, SendGrid, Resend) rather than a marketing email platform; transactional providers are optimized for delivery speed and inbox placement. Target sub-30-second delivery. Implement a "resend link" option on the confirmation screen for users who do not receive the email within 60 seconds.
- **Common pitfalls**: Setting link expiration too short (under 10 minutes) causes failures when users are slow to check email. Not implementing a "resend" flow leaves users stranded when the first link does not arrive. Not communicating clearly on the post-submit screen what the user should do next; users unfamiliar with magic links may not understand why no password was requested. Links that work only once but have a long expiry can be clicked in email preview panes (Outlook SafeLinks, Google's link scanner) and consumed before the user clicks them; implement a usage flag that distinguishes the link scanner request from the user's actual click.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: Developer tools and infrastructure products use magic links as a clean, secure, password-free authentication pattern. The mechanism signals technical sophistication without requiring explanation to a developer audience.
- **Minimal Essentialist**: One field. One action. No password. The magic link pattern's radical reduction of signup steps is philosophically aligned with the archetype's doctrine of removal.
- **Warm Conversational**: The conversational framing ("We sent you a link") treats authentication as a friendly exchange rather than a security checkpoint. SaaS products with a Warm Conversational register use magic links to maintain that tone through the signup moment.

Less natural with:

- **Rugged Utilitarian**: The pattern depends on email access, which may not be available in field or industrial environments. The Rugged Utilitarian archetype's context often requires local-first or offline-capable authentication.
- **Clinical Trustworthy**: Healthcare and financial products subject to strict identity verification requirements cannot use magic links as the sole authentication factor; they require additional verification that a single email link does not provide.

## Related patterns

- `11-social-login-buttons.md` for the OAuth-based passwordless alternative
- `15-free-trial-signup-no-credit-card.md` for the trial activation flow that may use magic link as its auth mechanism
- `01-inline-single-field-form.md` for the email capture that initiates the magic link flow

## Sources

- Supertokens: "Learn how magic links work, their benefits, and how to implement them" (supertokens.com/blog/magiclinks)
- Descope: "What Are Magic Links and How Do They Work?" (descope.com/learn/post/magic-links)
- FusionAuth: "Authentication With Magic Links and One-Time Passwords" (fusionauth.io/docs/lifecycle/authenticate-users/passwordless/magic-links)
- Anvil Works: "Magic Link Sign In" (anvil.works/blog/magic-link-sign-in)
- Slack: magic link onboarding analysis: 2.3-day faster onboarding, 12 million daily authentications (waveguide.io/examples/entry/passwordless-login/)
- Notion: passwordless-only authentication since 2019; 89% reduction in account takeover attempts (mojoauth.com/blog/ree-trial-to-paid-passwordless-activation)
