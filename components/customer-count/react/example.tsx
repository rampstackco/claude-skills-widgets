import { CustomerCount } from "./CustomerCount";

/** String count with an upward growth indicator, center-aligned (default). */
export function StringCountWithGrowthExample() {
  return (
    <CustomerCount
      count="70 million"
      label="members worldwide"
      growth={{ value: "+2M this month", direction: "up" }}
    />
  );
}

/** Numeric count auto-formatted with thousands separators, plus a subtitle. */
export function NumericCountWithSubtitleExample() {
  return (
    <CustomerCount
      count={10247}
      label="teams using the platform"
      subtitle="across 80+ countries"
    />
  );
}

/** Left-aligned layout, pre-formatted string count, no extras. */
export function LeftAlignedExample() {
  return (
    <CustomerCount
      count="25,000+"
      label="businesses served"
      align="left"
    />
  );
}
