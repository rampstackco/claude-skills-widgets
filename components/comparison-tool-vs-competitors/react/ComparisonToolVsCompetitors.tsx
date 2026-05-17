"use client";
import "../styles.css";
import { useState } from "react";
import { PrimaryButtonCTA } from "../../primary-button-cta/react/PrimaryButtonCTA";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Competitor = {
  name: string;
  logoSrc?: string;
  highlighted?: boolean;
};

export type FeatureValue =
  | { type: "boolean"; value: boolean }
  | { type: "text"; value: string }
  | { type: "rating"; value: number; max?: number };

export type FeatureRow = {
  label: string;
  description?: string;
  category?: string;
  values: Record<string, FeatureValue>;
};

export type ComparisonToolProps = {
  title?: string;
  description?: string;
  competitors: Competitor[];
  features: FeatureRow[];
  showCategoryToggles?: boolean;
  defaultExpandedCategories?: string[];
  finalCta?: { label: string; href: string };
  className?: string;
};

// ---------------------------------------------------------------------------
// Inline SVG helpers (no Unicode glyphs, no icon libraries)
// ---------------------------------------------------------------------------

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      className="cmp__icon"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill={color} opacity="0.12" />
      <path
        d="M6 10.5l3 3 5-5"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon({ color }: { color: string }) {
  return (
    <svg
      className="cmp__icon"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill={color} opacity="0.08" />
      <path
        d="M7 7l6 6M13 7l-6 6"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={`cmp__chevron${expanded ? " cmp__chevron--expanded" : ""}`}
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RatingPip({ filled }: { filled: boolean }) {
  return (
    <svg
      className="cmp__rating-pip"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="6"
        cy="6"
        r="5"
        fill={
          filled
            ? "var(--cmp-rating-filled, #1e5fcf)"
            : "var(--cmp-rating-empty, rgba(16,37,66,0.15))"
        }
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Feature value cell content
// ---------------------------------------------------------------------------

function FeatureValueCell({
  value,
  highlighted,
}: {
  value: FeatureValue | undefined;
  highlighted: boolean;
}) {
  const cellClass = `cmp__cell${highlighted ? " cmp__cell--highlighted" : ""}`;

  if (!value) {
    return <td className={cellClass}><span className="cmp__visually-hidden">Not available</span></td>;
  }

  if (value.type === "boolean") {
    return (
      <td className={cellClass}>
        {value.value ? (
          <span aria-label="Yes">
            <CheckIcon color="var(--cmp-icon-check, #1e5fcf)" />
          </span>
        ) : (
          <span aria-label="No">
            <XIcon color="var(--cmp-icon-x, rgba(16,37,66,0.3))" />
          </span>
        )}
      </td>
    );
  }

  if (value.type === "rating") {
    const max = value.max ?? 5;
    const filled = Math.round(Math.max(0, Math.min(value.value, max)));
    return (
      <td className={cellClass}>
        <span
          className="cmp__rating"
          aria-label={`${value.value} out of ${max}`}
        >
          {Array.from({ length: max }, (_, i) => (
            <RatingPip key={i} filled={i < filled} />
          ))}
        </span>
      </td>
    );
  }

  // type === "text"
  return <td className={cellClass}>{value.value}</td>;
}

// ---------------------------------------------------------------------------
// Render helpers (extracted to keep JSX in the component clean)
// ---------------------------------------------------------------------------

function renderFlat(
  features: FeatureRow[],
  competitors: Competitor[]
): React.ReactNode[] {
  return features.map((row, rowIdx) => (
    <tr key={rowIdx}>
      <th scope="row" className="cmp__row-head">
        {row.label}
        {row.description && (
          <span className="cmp__row-description">{row.description}</span>
        )}
      </th>
      {competitors.map((comp) => (
        <FeatureValueCell
          key={comp.name}
          value={row.values[comp.name]}
          highlighted={!!comp.highlighted}
        />
      ))}
    </tr>
  ));
}

function renderGrouped(
  features: FeatureRow[],
  categories: string[],
  competitors: Competitor[],
  isExpandedFn: (cat: string) => boolean,
  toggleCategory: (cat: string) => void,
  colCount: number
): React.ReactNode[] {
  const rows: React.ReactNode[] = [];

  const uncategorized = features.filter((f) => !f.category);

  const byCategory: Record<string, FeatureRow[]> = {};
  for (const cat of categories) {
    byCategory[cat] = features.filter((f) => f.category === cat);
  }

  // Uncategorized rows always visible.
  uncategorized.forEach((row, rowIdx) => {
    rows.push(
      <tr key={`uncat-${rowIdx}`}>
        <th scope="row" className="cmp__row-head">
          {row.label}
          {row.description && (
            <span className="cmp__row-description">{row.description}</span>
          )}
        </th>
        {competitors.map((comp) => (
          <FeatureValueCell
            key={comp.name}
            value={row.values[comp.name]}
            highlighted={!!comp.highlighted}
          />
        ))}
      </tr>
    );
  });

  // Categorized groups.
  categories.forEach((cat) => {
    const expanded = isExpandedFn(cat);
    rows.push(
      <tr key={`cat-${cat}`} className="cmp__category-row">
        <td colSpan={colCount} className="cmp__category-cell">
          <button
            type="button"
            className="cmp__category-toggle"
            aria-expanded={expanded}
            onClick={() => toggleCategory(cat)}
          >
            <ChevronDownIcon expanded={expanded} />
            {cat}
          </button>
        </td>
      </tr>
    );

    if (expanded) {
      byCategory[cat].forEach((row, rowIdx) => {
        rows.push(
          <tr key={`cat-${cat}-row-${rowIdx}`}>
            <th scope="row" className="cmp__row-head">
              {row.label}
              {row.description && (
                <span className="cmp__row-description">{row.description}</span>
              )}
            </th>
            {competitors.map((comp) => (
              <FeatureValueCell
                key={comp.name}
                value={row.values[comp.name]}
                highlighted={!!comp.highlighted}
              />
            ))}
          </tr>
        );
      });
    }
  });

  return rows;
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function ComparisonToolVsCompetitors({
  title,
  description,
  competitors,
  features,
  showCategoryToggles = false,
  defaultExpandedCategories = [],
  finalCta,
  className,
}: ComparisonToolProps) {
  // Derive ordered unique category names from the features array.
  const categories: string[] = [];
  for (const row of features) {
    if (row.category && !categories.includes(row.category)) {
      categories.push(row.category);
    }
  }

  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    defaultExpandedCategories
  );

  function toggleCategory(cat: string) {
    setExpandedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function isExpandedFn(cat: string) {
    return expandedCategories.includes(cat);
  }

  // colCount = 1 row-header column + N competitor columns
  const colCount = competitors.length + 1;

  const rootClassName = ["cmp", className || ""].filter(Boolean).join(" ");

  return (
    <section className={rootClassName}>
      {(title || description) && (
        <header className="cmp__header">
          {title && <h2 className="cmp__title">{title}</h2>}
          {description && <p className="cmp__description">{description}</p>}
        </header>
      )}

      <div className="cmp__table-wrap">
        <table className="cmp__table">
          <thead>
            <tr>
              <th scope="col" className="cmp__col-head" />
              {competitors.map((comp) => (
                <th
                  key={comp.name}
                  scope="col"
                  className={
                    comp.highlighted
                      ? "cmp__col-head cmp__col-head--highlighted"
                      : "cmp__col-head"
                  }
                >
                  {comp.logoSrc && (
                    <img
                      className="cmp__col-logo"
                      src={comp.logoSrc}
                      alt={comp.name}
                    />
                  )}
                  {comp.name}
                  {comp.highlighted && (
                    <span className="cmp__visually-hidden"> (Our pick)</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {showCategoryToggles && categories.length > 0
              ? renderGrouped(
                  features,
                  categories,
                  competitors,
                  isExpandedFn,
                  toggleCategory,
                  colCount
                )
              : renderFlat(features, competitors)}
          </tbody>
        </table>
      </div>

      {finalCta && (
        <div className="cmp__footer">
          <PrimaryButtonCTA
            label={finalCta.label}
            href={finalCta.href}
            variant="solid"
            shape="rounded"
            icon="arrow-right"
          />
        </div>
      )}
    </section>
  );
}
