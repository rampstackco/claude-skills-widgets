import { NewsletterSignupInline } from "./NewsletterSignupInline";

// Simulates a successful async API call after a short delay.
async function mockSubscribe(email: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  // In production, replace with a real fetch:
  // await fetch("/api/subscribe", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ email }),
  // });
  console.log("Subscribed:", email);
}

// Simulates a failed API call for testing error state.
async function mockSubscribeError(_email: string): Promise<void> {
  await new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Network failure")), 900)
  );
}

// -------------------------------------------------------------------------
// DefaultExample
// The most common usage: headline, short description, standard style.
// Positioned at the end of an article or below a content block.
// -------------------------------------------------------------------------
export function DefaultExample() {
  return (
    <NewsletterSignupInline
      headline="Get the weekly essay"
      description="One piece on B2B pricing, every Thursday. No filler, no pitches."
      placeholder="you@company.com"
      buttonLabel="Subscribe"
      disclaimerText="Unsubscribe anytime. No spam."
      successText="You're on the list. See you Thursday."
      style="default"
      onSubmit={mockSubscribe}
    />
  );
}

// -------------------------------------------------------------------------
// MinimalExample
// Minimal style: no background or border. Sits quietly inside running text
// or below an article body without breaking the visual rhythm of the page.
// -------------------------------------------------------------------------
export function MinimalExample() {
  return (
    <NewsletterSignupInline
      headline="Enjoyed this article?"
      description="Get the next one in your inbox."
      buttonLabel="Subscribe"
      disclaimerText="Unsubscribe anytime."
      successText="Thanks for subscribing."
      style="minimal"
      onSubmit={mockSubscribe}
    />
  );
}

// -------------------------------------------------------------------------
// CardExample
// Card style: elevated surface with padding and border. Use when the form
// needs to stand apart from surrounding content, such as in a sidebar
// or between two distinct content sections.
// -------------------------------------------------------------------------
export function CardExample() {
  return (
    <NewsletterSignupInline
      headline="Stay in the loop"
      description="Weekly notes on product, growth, and distribution. Read by 4,200 founders."
      placeholder="you@company.com"
      buttonLabel="Join the list"
      disclaimerText="No spam. Unsubscribe at any time."
      successText="Welcome. Check your inbox for a confirmation."
      style="card"
      onSubmit={mockSubscribe}
    />
  );
}

// -------------------------------------------------------------------------
// NoHeadlineExample
// Form only, no headline or description. Useful when the surrounding page
// content already provides enough context for the subscription offer.
// -------------------------------------------------------------------------
export function NoHeadlineExample() {
  return (
    <NewsletterSignupInline
      placeholder="Enter your email"
      buttonLabel="Subscribe"
      disclaimerText="Unsubscribe anytime. No spam."
      successText="Thanks for subscribing."
      onSubmit={mockSubscribe}
    />
  );
}

// -------------------------------------------------------------------------
// ErrorStateExample
// Triggers the error state so UI reviewers can inspect the error message
// and confirm that re-enabling the form works as expected.
// -------------------------------------------------------------------------
export function ErrorStateExample() {
  return (
    <NewsletterSignupInline
      headline="Error state (for testing)"
      description="This variant always rejects the submission so you can inspect the error UI."
      buttonLabel="Subscribe"
      disclaimerText="Unsubscribe anytime. No spam."
      successText="Thanks for subscribing."
      style="card"
      onSubmit={mockSubscribeError}
    />
  );
}
