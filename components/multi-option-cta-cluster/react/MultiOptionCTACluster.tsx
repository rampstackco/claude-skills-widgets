import "../styles.css";
import { PrimaryButtonCTA } from "../../primary-button-cta/react/PrimaryButtonCTA";

export type OptionItem = {
  /** Button label text */
  label: string;
  /** Destination URL */
  href: string;
  /** Short sentence below the button clarifying the path */
  description?: string;
  /**
   * Visual treatment passed to PrimaryButtonCTA.
   * Keeping all options at the same variant preserves equal visual weight,
   * which is the defining purpose of this pattern.
   * Mixing variants (one solid, one outlined) introduces hierarchy deliberately.
   */
  variant?: "solid" | "outlined";
  /** Trailing icon passed to PrimaryButtonCTA */
  icon?: "arrow-right" | "chevron-right";
};

export type MultiOptionCTAClusterProps = {
  /** 2 to 4 options. More than 4 becomes a navigation problem rather than a CTA pattern. */
  options: OptionItem[];
  /**
   * "horizontal" arranges options in a row on wide screens and stacks on narrow screens.
   * "stacked" arranges options in a column at all viewports.
   */
  layout?: "horizontal" | "stacked";
  /** Short label above the headline, useful for segment framing */
  eyebrow?: string;
  /** Section heading above the option row */
  headline?: string;
  /** Extra class appended to the root section */
  className?: string;
};

export function MultiOptionCTACluster({
  options,
  layout = "horizontal",
  eyebrow,
  headline,
  className,
}: MultiOptionCTAClusterProps) {
  const rootClass = [
    "moc",
    `moc--${layout}`,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={rootClass}>
      {eyebrow && <p className="moc__eyebrow">{eyebrow}</p>}
      {headline && <h2 className="moc__headline">{headline}</h2>}
      <div className="moc__options">
        {options.map((option, index) => (
          <div className="moc__option" key={index}>
            <PrimaryButtonCTA
              label={option.label}
              href={option.href}
              variant={option.variant ?? "solid"}
              icon={option.icon}
            />
            {option.description && (
              <p className="moc__option-description">{option.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
