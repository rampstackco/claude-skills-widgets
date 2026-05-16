import { HeroProductMockup } from "./HeroProductMockup";

/**
 * DefaultExample renders the component with no props.
 * All content uses built-in generic defaults so the component
 * is immediately usable as filler dashboard imagery.
 */
export function DefaultExample() {
  return <HeroProductMockup />;
}

/**
 * CustomizedExample passes a different brand, URL, KPIs, funnel,
 * and cohorts to show how all prop surfaces compose together.
 */
export function CustomizedExample() {
  return (
    <HeroProductMockup
      url="app.meridian.io/retention"
      brandName="meridian"
      navItems={[
        { label: "Retention", active: true },
        { label: "Funnels" },
        { label: "Cohorts" },
        { label: "Segments" },
        { label: "Settings" },
      ]}
      eyebrow="Analytics"
      title="Retention"
      badge="H1 2026"
      kpis={[
        { label: "D30 Retention", value: "38.7%", delta: "+2.4" },
        { label: "Median session", value: "6.1m", delta: "+0.9" },
        { label: "Expansion MRR", value: "21%", delta: "+0.6" },
      ]}
      funnelLabel="Retention funnel"
      funnelSteps={[
        { stage: "Day 1", value: 100, count: "2,310" },
        { stage: "Day 3", value: 74, count: "1,709" },
        { stage: "Day 7", value: 58, count: "1,340" },
        { stage: "Day 14", value: 46, count: "1,063" },
        { stage: "Day 30", value: 39, count: "901" },
      ]}
      cohortsLabel="Recent cohorts"
      cohorts={[
        { label: "May 2026", value: 38.7, trend: "up" },
        { label: "Apr 2026", value: 36.2, trend: "up" },
        { label: "Mar 2026", value: 35.8, trend: "flat" },
      ]}
      maxCohortValue={45}
      ariaLabel="Decorative product dashboard mockup for Meridian showing retention metrics and funnel"
    />
  );
}
