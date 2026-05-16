# Social Login Buttons

**Category**: Lead Capture
**Subcategory**: Auth-based
**Conversion intent**: Reduce signup friction by allowing users to authenticate with an existing identity provider rather than creating a new password

## What it is

A set of buttons that allow users to create an account or sign in using an existing identity from Google, GitHub, Apple, Microsoft, or another provider. The user clicks a provider button, is redirected or prompted to authorize the connection, and returns to the product authenticated with their identity data (email, name, profile picture) pre-populated. No password creation is required.

## Why it works

The primary mechanism is friction reduction. Passwords are the leading cause of signup abandonment: users either do not want to create a new credential, cannot remember which email they used previously, or distrust the site enough to avoid sharing their email directly. Social login removes all of these friction points. A 2025 industry study cited by InfluenceFlow found that social login increases signup conversion rates by 20 to 35% on average. A documented SaaS case showed a 28% jump in signups within two months of adding Google Sign-In. The liking principle (Cialdini) is also at work: users already trust the identity provider (Google, Apple, GitHub) and transfer a portion of that trust to the product when the familiar provider button appears.

## When to use

- The target audience regularly uses one of the available providers (Google for general consumer and business users; GitHub for developers; Apple for iOS and Mac users; Microsoft for enterprise)
- Speed to first interaction is a conversion priority: social login gets users into the product faster than any other signup method
- Password management is a friction point in your existing funnel, evidenced by high rates of "Forgot password" requests or incomplete signups
- The product can operate with the identity data returned by the provider (email, name, provider ID); if additional fields are required at signup, a post-auth onboarding step can collect them

## When NOT to use

- The product handles sensitive data (healthcare, financial) where regulations require explicit identity verification that social OAuth does not provide
- The audience is in an enterprise context where SSO (SAML/OIDC with their own identity provider) is expected; social login is consumer-grade; enterprise expects federated SSO through their own directory
- The audience is privacy-sensitive and would perceive Google or Apple sign-in as surveillance; some developer communities and privacy-focused audiences prefer email or magic link
- Only one provider is offered, and a significant portion of the audience does not use it; a single social login option with no fallback creates an exclusion problem

## Variations

### Button row
Two to four provider buttons displayed horizontally or vertically, each with the provider's brand icon and "Continue with [Provider]" copy. The standard implementation. Google's button guidelines require specific button styling (the "Sign in with Google" button must use approved typography and layout); Apple's guidelines require a black or white button with the Apple logo.

### Dropdown menu
A single "Sign up with..." button that expands to reveal provider options. Used when three or more providers would create visual clutter as a button row. Less common; most implementations favor explicit button rows because the provider choice is a meaningful user decision.

### "Continue with X" framing
Button copy framed as "Continue with Google" rather than "Sign in with Google" or "Sign up with Google." The neutral framing works for both new and returning users, eliminating the need to know whether the user has an account. This is the framing used by most modern consumer products (Linear, Vercel, Notion).

## Real-world examples

- **GitHub**: GitHub (github.com) offers "Sign in with Google" as a social login option as of July 2025, announced in the GitHub Changelog. GitHub itself is also a social login provider for developer tools via OAuth.
- **Vercel**: Vercel's signup page (vercel.com/signup) offers "Continue with GitHub," "Continue with Google," and "Continue with GitLab" as the primary signup path. For a developer tool, GitHub OAuth is the primary provider; Google is the secondary.
- **Linear**: Linear (linear.app/signup) offers "Continue with Google" and "Continue with GitHub" as the two signup options, consistent with its developer-and-team-lead audience. No password option is presented at the initial signup step.
- **Clerk**: Clerk (clerk.com) as an authentication platform documents and provides social login for Google, GitHub, Apple, Microsoft, Discord, and others. Their own signup uses the same multi-provider button row they sell as a product.
- **Notion**: Notion (notion.com) uses "Continue with Google" and "Continue with Apple" as primary signup options, with email as a fallback. The "Continue with" framing works for both new and returning users.
- **Supabase**: Supabase (supabase.com) offers social login via GitHub and Google for its developer audience, with GitHub as the visually prominent primary option given the developer context.

## Implementation notes

- **Mobile behavior**: Social login buttons on mobile should be full-width or appropriately sized for touch (48dp minimum height per Material guidelines). Provider buttons must display correctly with the official brand assets; Google and Apple enforce strict button guidelines. On iOS, Apple Sign-In must be offered if any other social login option is present (Apple App Store requirement for native apps; does not apply to web-only apps).
- **Accessibility**: Each provider button must have an accessible name that includes the provider name ("Sign in with Google", not just the Google logo). Provider logos alone without text fail WCAG SC 1.1.1. Focus styles must be visible. The button row should have a logical tab order.
- **Performance**: Each social login provider's button or SDK script adds third-party payload. Google's FedCM API (mandatory for Google Identity Services since August 2025) replaces the previous iframe-based implementation; load it as a modern script rather than the deprecated legacy library. GitHub OAuth requires a server-side redirect flow; it does not return an OIDC ID token directly.
- **Common pitfalls**: Offering a social login button without a fallback email/password option, which excludes users without the offered identity providers. Not handling the case where a user tries to log in with a different provider than they used to sign up, causing duplicate account creation. Missing account linking: if the user's email from the provider already exists in the database from a previous signup, the system should link rather than create a duplicate account.

## Archetype compatibility

This pattern fits naturally with:

- **Technical Precise**: Developer tools default to GitHub and Google social login; it is the expected pattern for the audience. Linear, Vercel, and Supabase exemplify this combination.
- **Warm Conversational**: "Continue with Google" is frictionless and approachable. Consumer and SMB-focused tools use social login to get users into the product quickly and on friendly terms.
- **Playful Energetic**: Fast, frictionless, immediate. Social login supports the energetic brand's preference for removing obstacles between the user and the product experience.

Less natural with:

- **Clinical Trustworthy**: Healthcare and financial services products often cannot use social login because of regulatory identity requirements (HIPAA, KYC) that social OAuth does not satisfy.
- **Luxe Considered**: Luxury brands prefer curated registration experiences. Social login buttons are utilitarian and do not fit a premium brand that should feel like an exclusive entry point rather than a convenience shortcut.

## Related patterns

- `12-magic-link-signup.md` for the passwordless email alternative
- `15-free-trial-signup-no-credit-card.md` for the trial signup flow that often uses social login as the entry point
- `01-inline-single-field-form.md` for the email-based alternative when social login is not appropriate

## Sources

- InfluenceFlow: "Social Login Integration Guide 2026" (influenceflow.io/resources/social-login-integration-a-complete-2026-guide-for-businesses-and-developers/)
- GitHub Changelog: "Social login with Google is now generally available" (github.blog/changelog/2025-07-15-social-login-with-google-is-now-generally-available/)
- Google Identity Services: FedCM API requirement effective August 2025 (developers.google.com/identity)
- Clerk: "How do I implement social login for my web app?" (clerk.com/articles/how-do-i-implement-social-login-for-my-web-app)
