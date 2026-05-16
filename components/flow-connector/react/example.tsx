import { FlowConnector } from "./FlowConnector";

/** Default: horizontal connector between two sibling cards. */
export function HorizontalExample() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
      <div style={{ padding: "1rem 1.5rem", background: "#f3f4f6", borderRadius: "8px" }}>
        Step 1
      </div>
      <FlowConnector orientation="horizontal" />
      <div style={{ padding: "1rem 1.5rem", background: "#f3f4f6", borderRadius: "8px" }}>
        Step 2
      </div>
      <FlowConnector orientation="horizontal" />
      <div style={{ padding: "1rem 1.5rem", background: "#f3f4f6", borderRadius: "8px" }}>
        Step 3
      </div>
    </div>
  );
}

/** Vertical connector between stacked cards. */
export function VerticalExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0" }}>
      <div style={{ padding: "1rem 1.5rem", background: "#f3f4f6", borderRadius: "8px", width: "140px", textAlign: "center" }}>
        Stage A
      </div>
      <FlowConnector orientation="vertical" />
      <div style={{ padding: "1rem 1.5rem", background: "#f3f4f6", borderRadius: "8px", width: "140px", textAlign: "center" }}>
        Stage B
      </div>
      <FlowConnector orientation="vertical" />
      <div style={{ padding: "1rem 1.5rem", background: "#f3f4f6", borderRadius: "8px", width: "140px", textAlign: "center" }}>
        Stage C
      </div>
    </div>
  );
}

/** Custom accent color applied via a wrapping CSS variable override. */
export function CustomColorExample() {
  return (
    <div
      style={
        {
          display: "flex",
          alignItems: "center",
          "--fc-line-color": "#d1d5db",
          "--fc-accent-color": "#2563eb",
        } as React.CSSProperties
      }
    >
      <div style={{ padding: "1rem 1.5rem", background: "#eff6ff", borderRadius: "8px" }}>
        Source
      </div>
      <FlowConnector orientation="horizontal" />
      <div style={{ padding: "1rem 1.5rem", background: "#eff6ff", borderRadius: "8px" }}>
        Destination
      </div>
    </div>
  );
}
