import { PrimaryButtonCTA } from "./PrimaryButtonCTA";

export function DefaultExample() {
  return <PrimaryButtonCTA label="Get started" href="/signup" />;
}

export function VariantExamples() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <PrimaryButtonCTA label="Solid" href="#" variant="solid" />
      <PrimaryButtonCTA label="Outlined" href="#" variant="outlined" />
      <PrimaryButtonCTA label="Pill solid" href="#" shape="pill" />
      <PrimaryButtonCTA label="Sharp outlined" href="#" variant="outlined" shape="sharp" />
    </div>
  );
}

export function WithIconExample() {
  return (
    <PrimaryButtonCTA
      label="Get started"
      href="/signup"
      icon="arrow-right"
    />
  );
}

export function ButtonModeExample() {
  return (
    <PrimaryButtonCTA
      label="Start trial"
      type="button"
      onClick={() => alert("Trial started!")}
    />
  );
}
