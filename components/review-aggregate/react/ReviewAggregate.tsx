import "../styles.css";

export interface ReviewAggregateProps {
  /** Rating value from 0 to maxRating. Fractional values (e.g. 4.5) render a half star. */
  rating: number;
  /** Scale ceiling. Controls the total number of stars drawn. Default: 5. */
  maxRating?: number;
  /**
   * Number of reviews. Numeric values are auto-formatted with thousands separators.
   * String values are used verbatim.
   */
  reviewCount: number | string;
  /** Short attribution label (e.g. "on G2"). Rendered after the review count. */
  source?: string;
  /** Optional image src for a third-party platform logo. */
  sourceLogo?: string;
  /** Layout variant. Default: "compact". */
  style?: "compact" | "expanded";
  /** Extra class name appended to the root element. */
  className?: string;
}

/* ------------------------------------------------------------------ */
/* Star SVG helpers                                                     */
/* ------------------------------------------------------------------ */

const STAR_PATH =
  "M12 2.25l2.828 5.73 6.32.918-4.574 4.458 1.08 6.295L12 16.755l-5.654 2.896 1.08-6.295L2.852 8.898l6.32-.918L12 2.25z";

function StarFull(): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
    >
      <path
        d={STAR_PATH}
        fill="var(--rav-star-color-filled, #f59e0b)"
        stroke="none"
      />
    </svg>
  );
}

function StarEmpty(): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
    >
      <path
        d={STAR_PATH}
        fill="var(--rav-star-color-empty, #d1d5db)"
        stroke="none"
      />
    </svg>
  );
}

/**
 * Half star: uses a linearGradient with a unique id to fill the left 50%
 * with the filled color and the right 50% with the empty color.
 * Each instance gets a unique gradient id to avoid conflicts when multiple
 * components render on the same page.
 */
let halfStarCounter = 0;

function StarHalf(): JSX.Element {
  const id = `rav-half-${++halfStarCounter}`;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="50%"
            stopColor="var(--rav-star-color-filled, #f59e0b)"
          />
          <stop
            offset="50%"
            stopColor="var(--rav-star-color-empty, #d1d5db)"
          />
        </linearGradient>
      </defs>
      <path d={STAR_PATH} fill={`url(#${id})`} stroke="none" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Star array computation                                               */
/* ------------------------------------------------------------------ */

type StarKind = "full" | "half" | "empty";

function computeStars(rating: number, maxRating: number): StarKind[] {
  const clamped = Math.max(0, Math.min(rating, maxRating));
  const fullCount = Math.floor(clamped);
  const hasHalf = clamped - fullCount >= 0.25 && clamped - fullCount < 0.75;
  // If the fractional part is >= 0.75, we round up to a full star
  const roundedFullCount =
    clamped - fullCount >= 0.75 ? fullCount + 1 : fullCount;
  const halfCount =
    clamped - fullCount >= 0.75 ? 0 : hasHalf ? 1 : 0;
  const emptyCount = maxRating - roundedFullCount - halfCount;

  const stars: StarKind[] = [];
  for (let i = 0; i < roundedFullCount; i++) stars.push("full");
  for (let i = 0; i < halfCount; i++) stars.push("half");
  for (let i = 0; i < emptyCount; i++) stars.push("empty");
  return stars;
}

/* ------------------------------------------------------------------ */
/* Number formatter                                                     */
/* ------------------------------------------------------------------ */

function formatCount(reviewCount: number | string): string {
  if (typeof reviewCount === "string") return reviewCount;
  return reviewCount.toLocaleString("en-US");
}

/* ------------------------------------------------------------------ */
/* Aria label builder                                                   */
/* ------------------------------------------------------------------ */

function buildAriaLabel(
  rating: number,
  maxRating: number,
  reviewCount: number | string,
  source?: string
): string {
  const countText = formatCount(reviewCount);
  const sourceText = source ? ` ${source}` : "";
  return `Rated ${rating} out of ${maxRating} stars based on ${countText} reviews${sourceText}`;
}

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export function ReviewAggregate({
  rating,
  maxRating = 5,
  reviewCount,
  source,
  sourceLogo,
  style = "compact",
  className,
}: ReviewAggregateProps): JSX.Element {
  const stars = computeStars(rating, maxRating);
  const formattedCount = formatCount(reviewCount);
  const ariaLabel = buildAriaLabel(rating, maxRating, reviewCount, source);

  const rootClass = [
    "rav",
    style === "expanded" ? "rav--expanded" : "rav--compact",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const countDisplay =
    style === "expanded"
      ? `${formattedCount} reviews`
      : `(${formattedCount})`;

  return (
    <div className={rootClass} aria-label={ariaLabel}>
      {/* Stars */}
      <div className="rav__stars" aria-hidden="true">
        {stars.map((kind, index) => {
          let starEl: JSX.Element;
          if (kind === "full") {
            starEl = <StarFull />;
          } else if (kind === "half") {
            starEl = <StarHalf />;
          } else {
            starEl = <StarEmpty />;
          }
          return (
            <span
              key={index}
              className={`rav__star rav__star--${kind}`}
            >
              {starEl}
            </span>
          );
        })}
      </div>

      {/* Numeric rating value */}
      <span className="rav__rating-value">{rating}</span>

      {/* Review count */}
      <span className="rav__count">{countDisplay}</span>

      {/* Source label and optional logo */}
      {(source || sourceLogo) && (
        <span className="rav__source">
          {sourceLogo && (
            <img
              className="rav__source-logo"
              src={sourceLogo}
              alt=""
            />
          )}
          {source}
        </span>
      )}
    </div>
  );
}
