import { InlineSingleFieldForm } from "./InlineSingleFieldForm";

// Default: email capture for a newsletter
export default function EmailCaptureExample() {
  async function handleEmailSubmit(value: string) {
    // Replace with your real API call, e.g.:
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email: value }) });
    await new Promise<void>((resolve) => setTimeout(resolve, 800));
    console.log("Subscribed:", value);
  }

  return (
    <InlineSingleFieldForm
      fieldType="email"
      buttonLabel="Get the newsletter"
      onSubmit={handleEmailSubmit}
      label="Email address"
      successText="You're on the list!"
    />
  );
}

// Text field variant: collect a name or a short answer
export function TextFieldVariant() {
  async function handleTextSubmit(value: string) {
    await new Promise<void>((resolve) => setTimeout(resolve, 600));
    console.log("Submitted:", value);
  }

  return (
    <InlineSingleFieldForm
      fieldType="text"
      placeholder="Your company name"
      buttonLabel="Request access"
      onSubmit={handleTextSubmit}
      label="Company"
      successText="Got it! We'll be in touch."
    />
  );
}

// With disclaimer text: GDPR-adjacent fine print
export function WithDisclaimerExample() {
  async function handleDisclaimerSubmit(value: string) {
    await new Promise<void>((resolve) => setTimeout(resolve, 700));
    console.log("Subscribed:", value);
  }

  return (
    <InlineSingleFieldForm
      fieldType="email"
      buttonLabel="Subscribe"
      onSubmit={handleDisclaimerSubmit}
      label="Work email"
      successText="Welcome aboard!"
      disclaimerText="No spam, ever. Unsubscribe at any time. We never sell your data."
    />
  );
}
