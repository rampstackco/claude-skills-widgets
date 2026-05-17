import { SecondaryTextCTA } from "./SecondaryTextCTA";

/** Default: arrow-right icon at standard size. */
export function DefaultExample() {
  return <SecondaryTextCTA label="View pricing" href="/pricing" />;
}

/** Small size with chevron-right icon. */
export function SmallSizeExample() {
  return (
    <SecondaryTextCTA
      label="Read the docs"
      href="/docs"
      icon="chevron-right"
      size="small"
    />
  );
}

/** External link with the up-and-out arrow icon. */
export function ExternalLinkExample() {
  return (
    <SecondaryTextCTA
      label="Open on GitHub"
      href="https://github.com/example"
      icon="external"
    />
  );
}

/** No icon: plain underlined text link only. */
export function NoIconExample() {
  return (
    <SecondaryTextCTA
      label="Contact sales"
      href="/contact"
      icon="none"
    />
  );
}

/** All variants together for visual comparison. */
export function AllVariants() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <DefaultExample />
      <SmallSizeExample />
      <ExternalLinkExample />
      <NoIconExample />
    </div>
  );
}
