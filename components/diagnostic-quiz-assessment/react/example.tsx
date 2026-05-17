import { DiagnosticQuizAssessment } from "./DiagnosticQuizAssessment";

export function AiReadinessQuizExample() {
  return (
    <DiagnosticQuizAssessment
      title="How ready is your team for AI tooling?"
      description="A short assessment of your current tooling, team structure, and pain points."
      questions={[
        {
          id: "team-size",
          text: "How large is your team?",
          type: "single-select",
          options: [
            { value: "solo", label: "Just me", score: 1 },
            { value: "small", label: "2-10 people", score: 3 },
            { value: "medium", label: "11-50 people", score: 5 },
            { value: "large", label: "50+ people", score: 4 },
          ],
        },
        {
          id: "current-tooling",
          text: "Which tools are you already using?",
          type: "multi-select",
          options: [
            { value: "github", label: "GitHub", score: 1 },
            { value: "linear", label: "Linear", score: 1 },
            { value: "slack", label: "Slack", score: 1 },
            { value: "notion", label: "Notion", score: 1 },
          ],
        },
        {
          id: "blocker-severity",
          text: "How much time does setup currently waste per week?",
          type: "scale",
          scaleMin: 0,
          scaleMax: 10,
          scaleLowLabel: "None",
          scaleHighLabel: "10+ hours",
        },
      ]}
      resultTiers={[
        {
          minScore: 0,
          maxScore: 5,
          title: "Early stage",
          description: "Build foundational practices first before adding AI tooling.",
          recommendation: "Start with structured documentation and clear team conventions.",
        },
        {
          minScore: 6,
          maxScore: 12,
          title: "Ready to scale",
          description: "Solid foundation in place. AI tooling could resolve real pain.",
          recommendation: "Adopt agent workflows for repetitive setup tasks.",
        },
        {
          minScore: 13,
          maxScore: 100,
          title: "Ready for advanced",
          description: "Mature tooling foundation. Time to optimize and automate.",
          recommendation: "Custom integrations and team-specific skill catalogs.",
        },
      ]}
    />
  );
}
