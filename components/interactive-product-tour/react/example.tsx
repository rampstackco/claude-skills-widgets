"use client";
import { useState } from "react";
import { InteractiveProductTour, TourStep } from "./InteractiveProductTour";

// ─── Example 1: basic 4-step tour targeting sample elements ─────────────────

const DASHBOARD_STEPS: TourStep[] = [
  {
    target: "#tour-header",
    title: "Your command center",
    content:
      "Everything you need is pinned here. The header shows your active project, global search, and notification bell.",
    position: "bottom",
    highlight: true,
  },
  {
    target: "#tour-sidebar",
    title: "Navigate by section",
    content:
      "Switch between Projects, Analytics, and Settings from the sidebar. Your last-visited section is remembered across sessions.",
    position: "right",
    highlight: true,
  },
  {
    target: "#tour-chart",
    title: "Live metrics at a glance",
    content:
      "This chart updates every 30 seconds. Hover any data point for a breakdown. Click the date range selector to zoom in or out.",
    position: "top",
    highlight: false,
  },
  {
    target: "#tour-cta",
    title: "Ready to go deeper?",
    content:
      "Hit this button to connect your first data source. It takes about two minutes and no code is required.",
    position: "top",
    highlight: true,
  },
];

export function DashboardTourExample() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  function handleComplete() {
    setIsOpen(false);
    setCompleted(true);
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      {/* Sample page UI with elements the tour targets */}
      <header
        id="tour-header"
        style={{
          background: "#f0f4ff",
          padding: "1rem 1.5rem",
          borderRadius: "0.5rem",
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <strong>Acme Dashboard</strong>
        <span style={{ fontSize: "0.875rem", color: "#666" }}>v2.6</span>
      </header>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        <nav
          id="tour-sidebar"
          style={{
            width: "160px",
            flexShrink: 0,
            background: "#f9fafb",
            borderRadius: "0.5rem",
            padding: "1rem",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li style={{ padding: "0.5rem", background: "#e0e7ff", borderRadius: "4px", fontSize: "0.875rem" }}>Projects</li>
            <li style={{ padding: "0.5rem", fontSize: "0.875rem", color: "#555" }}>Analytics</li>
            <li style={{ padding: "0.5rem", fontSize: "0.875rem", color: "#555" }}>Settings</li>
          </ul>
        </nav>

        <main style={{ flex: 1 }}>
          <div
            id="tour-chart"
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              height: "140px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9ca3af",
              fontSize: "0.875rem",
              marginBottom: "1.5rem",
            }}
          >
            [Chart placeholder]
          </div>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <button
              id="tour-cta"
              style={{
                padding: "0.625rem 1.25rem",
                background: "#1e5fcf",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: 600,
              }}
            >
              Connect data source
            </button>

            {completed && (
              <span style={{ fontSize: "0.875rem", color: "#16a34a", fontWeight: 500 }}>
                Tour finished. Ready to connect your data.
              </span>
            )}
          </div>
        </main>
      </div>

      {/* Tour trigger */}
      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => {
            setCompleted(false);
            setIsOpen(true);
          }}
          style={{
            padding: "0.625rem 1.25rem",
            border: "1.5px solid #1e5fcf",
            background: "white",
            color: "#1e5fcf",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontFamily: "inherit",
            fontWeight: 600,
          }}
        >
          Take the tour
        </button>
      </div>

      <InteractiveProductTour
        isOpen={isOpen}
        steps={DASHBOARD_STEPS}
        onClose={() => setIsOpen(false)}
        onComplete={handleComplete}
        showProgress
        showSkip
        nextLabel="Next"
        backLabel="Back"
        finishLabel="Done"
        skipLabel="Skip tour"
      />
    </div>
  );
}

// ─── Example 2: 3-step tour without spotlight, custom labels ────────────────

const ONBOARDING_STEPS: TourStep[] = [
  {
    target: "#ob-name-field",
    title: "Start with your name",
    content:
      "This is how teammates will see you in comments, assignments, and notifications.",
    position: "bottom",
    highlight: false,
  },
  {
    target: "#ob-role-select",
    title: "Pick your role",
    content:
      "Your role determines which default views and notification presets you start with. You can change this any time in Settings.",
    position: "right",
    highlight: false,
  },
  {
    target: "#ob-submit-btn",
    title: "You are ready",
    content:
      "Hit Continue to save your profile and open your first project. The whole setup takes about 90 seconds.",
    position: "top",
    highlight: false,
  },
];

export function OnboardingFormTourExample() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", maxWidth: "480px" }}>
      <h2 style={{ marginTop: 0 }}>Account setup</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label
            htmlFor="ob-name-field"
            style={{ display: "block", fontSize: "0.875rem", marginBottom: "0.375rem", fontWeight: 500 }}
          >
            Display name
          </label>
          <input
            id="ob-name-field"
            type="text"
            placeholder="Your name"
            style={{
              width: "100%",
              padding: "0.625rem 0.75rem",
              border: "1.5px solid #d1d5db",
              borderRadius: "0.5rem",
              fontFamily: "inherit",
              fontSize: "0.9375rem",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="ob-role-select"
            style={{ display: "block", fontSize: "0.875rem", marginBottom: "0.375rem", fontWeight: 500 }}
          >
            Role
          </label>
          <select
            id="ob-role-select"
            style={{
              width: "100%",
              padding: "0.625rem 0.75rem",
              border: "1.5px solid #d1d5db",
              borderRadius: "0.5rem",
              fontFamily: "inherit",
              fontSize: "0.9375rem",
              background: "white",
            }}
          >
            <option>Engineering</option>
            <option>Product</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
        </div>

        <button
          id="ob-submit-btn"
          type="button"
          style={{
            padding: "0.75rem 1.5rem",
            background: "#1e5fcf",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontFamily: "inherit",
            fontWeight: 600,
            alignSelf: "flex-start",
          }}
        >
          Continue
        </button>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "#1e5fcf",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: "0.875rem",
            padding: 0,
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}
        >
          What do these fields do?
        </button>
      </div>

      <InteractiveProductTour
        isOpen={isOpen}
        steps={ONBOARDING_STEPS}
        onClose={() => setIsOpen(false)}
        onComplete={() => setIsOpen(false)}
        showProgress
        showSkip={false}
        nextLabel="Got it"
        finishLabel="Close"
      />
    </div>
  );
}
