import "../styles.css";
import { PrimaryButtonCTA } from "../../primary-button-cta/react/PrimaryButtonCTA";

export type HeroStackCTAPrimary = {
  /** Button text */
  label: string;
  /** If set, renders an anchor; otherwise renders a button */
  href?: string;
  /** Visual treatment passed through to PrimaryButtonCTA */
  variant?: "solid" | "outlined";
  /** Optional trailing icon passed through to PrimaryButtonCTA */
  icon?: "arrow-right" | "chevron-right";
};

export type HeroStackCTASecondary = {
  /** Link or button text */
  label: string;
  /** Destination URL */
  href?: string;
  /**
   * "outlined" renders a PrimaryButtonCTA with variant="outlined".
   * "text-link" (default) renders a plain styled anchor.
   */
  type?: "outlined" | "text-link";
};

export type HeroStackCTAProps = {
  /** Primary action (required). Passed through to PrimaryButtonCTA. */
  primary: HeroStackCTAPrimary;
  /** Optional secondary action. */
  secondary?: HeroStackCTASecondary;
  /**
   * Desktop layout direction.
   * Both variants collapse to a column below 480px via CSS media query.
   */
  alignment?: "horizontal" | "stacked";
  /** Extra class applied to the root element */
  className?: string;
};

export function HeroStackCTA({
  primary,
  secondary,
  alignment = "horizontal",
  className,
}: HeroStackCTAProps) {
  const rootClass = [
    "hsc",
    `hsc--${alignment}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const secondaryType = secondary?.type ?? "text-link";

  return (
    <div className={rootClass}>
      <PrimaryButtonCTA
        label={primary.label}
        href={primary.href}
        variant={primary.variant ?? "solid"}
        icon={primary.icon}
      />

      {secondary && secondaryType === "outlined" && (
        <PrimaryButtonCTA
          label={secondary.label}
          href={secondary.href}
          variant="outlined"
        />
      )}

      {secondary && secondaryType === "text-link" && (
        <a className="hsc__text-link" href={secondary.href}>
          {secondary.label}
        </a>
      )}
    </div>
  );
}
