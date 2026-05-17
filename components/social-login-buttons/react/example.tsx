import { SocialLoginButtons } from "./SocialLoginButtons";

// ---------------------------------------------------------------------------
// Default stacked layout: Google, GitHub, Apple
// Most common configuration for a developer-facing or consumer product.
// ---------------------------------------------------------------------------
export function StackedExample() {
  function handleProviderClick(providerId: string) {
    // Wire your OAuth redirect or popup here.
    // Example: window.location.href = `/auth/${providerId}`;
    console.log("Provider selected:", providerId);
  }

  return (
    <SocialLoginButtons
      providers={[
        { id: "google" },
        { id: "github" },
        { id: "apple" },
      ]}
      onProviderClick={handleProviderClick}
    />
  );
}

// ---------------------------------------------------------------------------
// Row layout: Google and GitHub side by side.
// Works well when vertical space is limited or buttons sit in a wider form.
// ---------------------------------------------------------------------------
export function RowLayoutExample() {
  function handleProviderClick(providerId: string) {
    console.log("Provider selected:", providerId);
  }

  return (
    <SocialLoginButtons
      providers={[
        { id: "google" },
        { id: "github" },
      ]}
      onProviderClick={handleProviderClick}
      layout="row"
    />
  );
}

// ---------------------------------------------------------------------------
// Minimal style with dividerText.
// Sits above an email/password form; the divider visually separates them.
// ---------------------------------------------------------------------------
export function MinimalWithDividerExample() {
  function handleProviderClick(providerId: string) {
    console.log("Provider selected:", providerId);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "360px" }}>
      <SocialLoginButtons
        providers={[
          { id: "google" },
          { id: "github" },
          { id: "microsoft" },
        ]}
        onProviderClick={handleProviderClick}
        style="minimal"
        dividerText="or continue with email"
      />
      {/* Sibling email form would follow here */}
      <input
        type="email"
        placeholder="you@example.com"
        style={{
          padding: "0.75rem 1rem",
          border: "1px solid #d1d5db",
          borderRadius: "0.5rem",
          fontSize: "0.9375rem",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}
