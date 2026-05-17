"use client";
import "../styles.css";
import { useEffect, useId, useRef, useState } from "react";
import { PrimaryButtonCTA } from "../../primary-button-cta/react/PrimaryButtonCTA";

// ─── Types ─────────────────────────────────────────────────────────────────

export type TourStep = {
  /** CSS selector for the element this step anchors to */
  target: string;
  /** Heading shown in the tooltip card */
  title: string;
  /** Body copy for the step */
  content: string;
  /**
   * Which side of the target to place the tooltip.
   * The component does basic placement; it does NOT auto-flip when clipped.
   * For intelligent flip behavior, layer react-joyride or driver.js on top.
   */
  position?: "top" | "bottom" | "left" | "right";
  /**
   * When true, renders a spotlight cutout over the target element.
   * Implemented via a large box-shadow on a transparent fixed div.
   */
  highlight?: boolean;
};

export type InteractiveProductTourProps = {
  /** Whether the tour is visible */
  isOpen: boolean;
  /** Ordered list of tour steps */
  steps: TourStep[];
  /** Called when the user closes or skips the tour */
  onClose: () => void;
  /** Called when the user finishes the last step */
  onComplete?: () => void;
  /** Step index to begin on (default 0) */
  startStep?: number;
  /** Show a skip link in the tooltip footer (default true) */
  showSkip?: boolean;
  /** Show "Step N of N" progress text (default true) */
  showProgress?: boolean;
  /** Label for the forward action button */
  nextLabel?: string;
  /** Label for the back button */
  backLabel?: string;
  /** Label for the action button on the last step */
  finishLabel?: string;
  /** Label for the skip link */
  skipLabel?: string;
  /** Extra class applied to the overlay root */
  className?: string;
};

// ─── Position computation ───────────────────────────────────────────────────

type TooltipCoords = {
  top: number;
  left: number;
};

type SpotlightCoords = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const TOOLTIP_OFFSET = 12; // px gap between target and tooltip card
const SPOTLIGHT_PADDING = 6; // px expansion around target rect

/**
 * Computes fixed-position coordinates for the tooltip card.
 * Falls back to a centered position when the target element is not found
 * or the resulting coordinates would place the card fully off-screen.
 */
function computeTooltipCoords(
  rect: DOMRect,
  position: TourStep["position"] = "bottom",
  tooltipWidth: number,
  tooltipHeight: number
): TooltipCoords {
  switch (position) {
    case "top":
      return {
        top: rect.top - tooltipHeight - TOOLTIP_OFFSET,
        left: rect.left + rect.width / 2 - tooltipWidth / 2,
      };
    case "left":
      return {
        top: rect.top + rect.height / 2 - tooltipHeight / 2,
        left: rect.left - tooltipWidth - TOOLTIP_OFFSET,
      };
    case "right":
      return {
        top: rect.top + rect.height / 2 - tooltipHeight / 2,
        left: rect.right + TOOLTIP_OFFSET,
      };
    case "bottom":
    default:
      return {
        top: rect.bottom + TOOLTIP_OFFSET,
        left: rect.left + rect.width / 2 - tooltipWidth / 2,
      };
  }
}

/** Fallback: center of the viewport */
function centeredCoords(): TooltipCoords {
  return {
    top: window.innerHeight * 0.35,
    left: window.innerWidth / 2 - 160,
  };
}

// ─── Component ──────────────────────────────────────────────────────────────

export function InteractiveProductTour({
  isOpen,
  steps,
  onClose,
  onComplete,
  startStep = 0,
  showSkip = true,
  showProgress = true,
  nextLabel = "Next",
  backLabel = "Back",
  finishLabel = "Done",
  skipLabel = "Skip tour",
  className,
}: InteractiveProductTourProps) {
  const [currentStep, setCurrentStep] = useState<number>(startStep);
  const [tooltipCoords, setTooltipCoords] = useState<TooltipCoords>(centeredCoords);
  const [spotlightCoords, setSpotlightCoords] = useState<SpotlightCoords | null>(null);
  const [completionMessage, setCompletionMessage] = useState<string>("");

  const tooltipRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const statusId = useId();

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  // ─── Position recomputation ───────────────────────────────────────────────

  function recompute() {
    if (!step) return;

    const target = document.querySelector(step.target);

    if (!target) {
      // Graceful degradation: no matching element, center the tooltip
      setTooltipCoords(centeredCoords());
      setSpotlightCoords(null);
      return;
    }

    const rect = target.getBoundingClientRect();
    const tooltipEl = tooltipRef.current;
    const tooltipWidth = tooltipEl ? tooltipEl.offsetWidth : 320;
    const tooltipHeight = tooltipEl ? tooltipEl.offsetHeight : 160;

    const coords = computeTooltipCoords(rect, step.position, tooltipWidth, tooltipHeight);

    // Clamp to viewport so the card does not escape off-screen edges
    const clampedLeft = Math.max(
      8,
      Math.min(coords.left, window.innerWidth - tooltipWidth - 8)
    );
    const clampedTop = Math.max(8, Math.min(coords.top, window.innerHeight - tooltipHeight - 8));

    setTooltipCoords({ top: clampedTop, left: clampedLeft });

    if (step.highlight) {
      setSpotlightCoords({
        top: rect.top - SPOTLIGHT_PADDING,
        left: rect.left - SPOTLIGHT_PADDING,
        width: rect.width + SPOTLIGHT_PADDING * 2,
        height: rect.height + SPOTLIGHT_PADDING * 2,
      });
    } else {
      setSpotlightCoords(null);
    }
  }

  // Recompute on step change and on window resize
  useEffect(() => {
    if (!isOpen) return;

    recompute();

    // Move focus to the tooltip card so keyboard users land on the dialog
    const frame = requestAnimationFrame(() => {
      tooltipRef.current?.focus();
    });

    const handleResize = () => recompute();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentStep]);

  // Reset to startStep when the tour opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(startStep);
      setCompletionMessage("");
    }
  }, [isOpen, startStep]);

  // ESC key closes the tour
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // ─── Handlers ─────────────────────────────────────────────────────────────

  function handleNext() {
    if (isLastStep) {
      setCompletionMessage("Tour complete.");
      onComplete?.();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }

  function handleBack() {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  }

  function handleSkip() {
    onClose();
  }

  function handleClose() {
    onClose();
  }

  // ─── Render guard ─────────────────────────────────────────────────────────

  if (!isOpen || !step) return null;

  // ─── Class names ──────────────────────────────────────────────────────────

  const overlayClass = [
    "ipt__overlay",
    spotlightCoords ? "ipt__overlay--spotlit" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  // ─── JSX ──────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Dimming overlay. aria-hidden so screen readers focus only on the dialog. */}
      <div className={overlayClass} aria-hidden="true" />

      {/* Spotlight cutout over the target element (only when highlight: true).
          A large box-shadow creates the darkened ring; the div itself is transparent,
          making the target element show through clearly. */}
      {spotlightCoords && (
        <div
          className="ipt__spotlight"
          aria-hidden="true"
          style={{
            top: spotlightCoords.top,
            left: spotlightCoords.left,
            width: spotlightCoords.width,
            height: spotlightCoords.height,
          }}
        />
      )}

      {/* Tooltip card */}
      <div
        ref={tooltipRef}
        className="ipt__tooltip"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        style={{
          top: tooltipCoords.top,
          left: tooltipCoords.left,
        }}
      >
        {/* Close (X) button */}
        <button
          className="ipt__close"
          type="button"
          onClick={handleClose}
          aria-label="Close tour"
        >
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Progress */}
        {showProgress && (
          <p className="ipt__progress">
            Step {currentStep + 1} of {steps.length}
          </p>
        )}

        {/* Title */}
        <h2 id={titleId} className="ipt__tooltip-title">
          {step.title}
        </h2>

        {/* Body */}
        <p className="ipt__tooltip-content">{step.content}</p>

        {/* Actions row */}
        <div className="ipt__actions">
          {/* Back button (hidden on first step) */}
          {!isFirstStep && (
            <PrimaryButtonCTA
              label={backLabel}
              variant="outlined"
              onClick={handleBack}
              type="button"
            />
          )}

          {/* Next or Finish */}
          <PrimaryButtonCTA
            label={isLastStep ? finishLabel : nextLabel}
            variant="solid"
            onClick={handleNext}
            type="button"
          />

          {/* Skip link */}
          {showSkip && (
            <button className="ipt__skip" type="button" onClick={handleSkip}>
              {skipLabel}
            </button>
          )}
        </div>
      </div>

      {/* Visually hidden live region announces tour completion to screen readers */}
      <div
        id={statusId}
        className="ipt__status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {completionMessage}
      </div>
    </>
  );
}
