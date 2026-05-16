import { CountdownTimer } from "./CountdownTimer";

// A real, fixed deadline a few days in the future.
// In production, this value comes from server-side or business logic,
// not from a per-visit calculation.
const SALE_DEADLINE = "2026-06-01T00:00:00Z";

/** Full format (default): "2 days 3 hours 45 minutes 12 seconds" */
export function FullFormatExample() {
  return (
    <CountdownTimer
      deadline={SALE_DEADLINE}
      label="Sale ends in"
      expiredLabel="Sale has closed"
    />
  );
}

/** Compact format: "02d 03h 45m 12s" */
export function CompactFormatExample() {
  return (
    <CountdownTimer
      deadline={SALE_DEADLINE}
      label="Offer closes"
      expiredLabel="Offer closed"
      format="compact"
      onExpire={() => {
        // Example: redirect to a post-sale page or refresh pricing UI.
        console.log("Deadline passed. Updating UI.");
      }}
    />
  );
}
