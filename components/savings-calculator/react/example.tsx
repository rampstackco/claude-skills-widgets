import { SavingsCalculator } from "./SavingsCalculator";

export function SaasMigrationExample() {
  return (
    <SavingsCalculator
      title="Calculate your annual savings"
      description="Migrating from monthly contracts to our annual plan typically reduces total cost by 30%."
      inputs={[
        {
          name: "currentMonthlySpend",
          label: "Current monthly spend",
          type: "number",
          prefix: "$",
          defaultValue: 5000,
        },
        {
          name: "teamSize",
          label: "Team size",
          type: "number",
          defaultValue: 10,
        },
      ]}
      compute={(values) => {
        const spend = Number(values.currentMonthlySpend) || 0;
        const monthlySavings = spend * 0.3;
        const annualSavings = monthlySavings * 12;
        return [
          { label: "Monthly savings", value: monthlySavings, format: "currency" },
          { label: "Annual savings", value: annualSavings, format: "currency", emphasized: true },
          { label: "Payback period", value: 2, format: "months" },
        ];
      }}
    />
  );
}

export function SideBySideExample() {
  return (
    <SavingsCalculator
      title="ROI calculator"
      layout="side-by-side"
      inputs={[
        { name: "revenue", label: "Annual revenue", type: "number", prefix: "$", defaultValue: 1000000 },
        { name: "growthRate", label: "Growth rate", type: "number", suffix: "%", defaultValue: 20 },
      ]}
      compute={(values) => {
        const revenue = Number(values.revenue) || 0;
        const growth = Number(values.growthRate) || 0;
        const projected = revenue * (1 + growth / 100);
        return [
          { label: "Year 1 projection", value: projected, format: "currency", emphasized: true },
        ];
      }}
    />
  );
}
