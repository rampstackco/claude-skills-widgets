import { MultiStepRecommendationWizard } from "./MultiStepRecommendationWizard";
import type { Recommendation, WizardQuestion } from "./MultiStepRecommendationWizard";

// ---------------------------------------------------------------------------
// Example 1: Linear three-question wizard that recommends a pricing plan.
// Every user follows the same sequence: goal -> team size -> budget.
// ---------------------------------------------------------------------------

const linearQuestions: WizardQuestion[] = [
  {
    id: "goal",
    text: "What is your main goal right now?",
    description: "Pick the one that fits best. You can adjust later.",
    options: [
      { value: "ship", label: "Ship a product or feature" },
      { value: "grow", label: "Grow an existing audience or user base" },
      { value: "ops", label: "Improve internal operations" },
    ],
  },
  {
    id: "team-size",
    text: "How many people are working on this?",
    options: [
      { value: "solo", label: "Just me" },
      { value: "small", label: "2-5 people" },
      { value: "medium", label: "6-20 people" },
      { value: "large", label: "More than 20 people" },
    ],
  },
  {
    id: "budget",
    text: "What monthly budget are you working with?",
    options: [
      { value: "free", label: "Starting with zero spend" },
      { value: "low", label: "Under $50 / month" },
      { value: "mid", label: "$50-$200 / month" },
      { value: "high", label: "Over $200 / month" },
    ],
  },
];

const linearRecommendations: Recommendation[] = [
  {
    id: "free-plan",
    title: "Free Plan",
    description:
      "Full access to core features at no cost. Perfect for solo builders who are validating an idea before committing budget.",
    ctaLabel: "Sign up for free",
    ctaHref: "/signup?plan=free",
    matchAnswers: { "team-size": "solo", budget: "free" },
  },
  {
    id: "starter-plan",
    title: "Starter Plan",
    description:
      "Everything in Free plus priority support and usage well beyond the free tier. Fits individuals and pairs who are ready to move past prototyping.",
    ctaLabel: "Start a 14-day trial",
    ctaHref: "/signup?plan=starter",
    matchAnswers: { "team-size": "solo", budget: "low" },
  },
  {
    id: "team-plan",
    title: "Team Plan",
    description:
      "Shared workspaces, per-seat billing, and team-level analytics. Built for small groups who need to coordinate without extra overhead.",
    ctaLabel: "Try Team free for 14 days",
    ctaHref: "/signup?plan=team",
    matchAnswers: { "team-size": "small" },
  },
  {
    id: "growth-plan",
    title: "Growth Plan",
    description:
      "Advanced usage limits, audit logs, and dedicated onboarding. Sized for mid-size teams who need reliability at higher throughput.",
    ctaLabel: "See Growth pricing",
    ctaHref: "/pricing#growth",
    matchAnswers: { "team-size": "medium" },
  },
  {
    id: "enterprise-plan",
    title: "Enterprise Plan",
    description:
      "Custom contracts, SLA guarantees, and a dedicated account team. For organizations where reliability and compliance are non-negotiable.",
    ctaLabel: "Talk to our team",
    ctaHref: "/contact/sales",
    matchAnswers: { "team-size": "large" },
  },
];

const linearDefault: Recommendation = {
  id: "talk-to-us",
  title: "Not sure which plan fits?",
  description:
    "Our team can walk through your situation and point you to the right option in under 15 minutes.",
  ctaLabel: "Schedule a short call",
  ctaHref: "/contact",
  matchAnswers: {},
};

export function LinearPlanWizardExample() {
  return (
    <MultiStepRecommendationWizard
      title="Find the right plan"
      description="Answer three quick questions and we will point you to the plan that fits your situation."
      questions={linearQuestions}
      recommendations={linearRecommendations}
      defaultRecommendation={linearDefault}
    />
  );
}

// ---------------------------------------------------------------------------
// Example 2: Branching wizard where the first answer routes to different
// follow-up tracks.
//
// Flow:
//   q1 (role) --"developer"--> q-developer-use-case --> result
//              --"marketer" --> q-marketer-goal       --> result
//              --"founder"  --> q-founder-stage       --> result
//
// The result screen matches on role + the track-specific answer.
// ---------------------------------------------------------------------------

const branchingQuestions: WizardQuestion[] = [
  {
    id: "role",
    text: "What best describes your role?",
    description:
      "This helps us skip questions that are not relevant to you.",
    options: [
      {
        value: "developer",
        label: "Developer or engineer",
        nextQuestion: "developer-use-case",
      },
      {
        value: "marketer",
        label: "Marketing or growth",
        nextQuestion: "marketer-goal",
      },
      {
        value: "founder",
        label: "Founder or operator",
        nextQuestion: "founder-stage",
      },
    ],
  },

  // Developer branch
  {
    id: "developer-use-case",
    text: "What are you primarily building?",
    options: [
      { value: "api", label: "A backend API or service" },
      { value: "frontend", label: "A consumer-facing web app" },
      { value: "data", label: "A data pipeline or internal tool" },
    ],
  },

  // Marketer branch
  {
    id: "marketer-goal",
    text: "What is your primary growth focus?",
    options: [
      { value: "acquisition", label: "Bringing in new users" },
      { value: "retention", label: "Keeping users engaged longer" },
      { value: "content", label: "Content and SEO" },
    ],
  },

  // Founder branch
  {
    id: "founder-stage",
    text: "Where are you in your journey?",
    options: [
      { value: "idea", label: "Validating an idea" },
      { value: "early", label: "Early traction, finding product fit" },
      { value: "scaling", label: "Scaling a working business" },
    ],
  },
];

const branchingRecommendations: Recommendation[] = [
  // Developer paths
  {
    id: "dev-api",
    title: "API Quickstart Kit",
    description:
      "Opinionated scaffolding for backend services: typed routes, auth middleware, and a deploy-ready Dockerfile. Skip the setup and focus on what makes your API unique.",
    ctaLabel: "View the API kit",
    ctaHref: "/kits/api-quickstart",
    matchAnswers: { role: "developer", "developer-use-case": "api" },
  },
  {
    id: "dev-frontend",
    title: "Frontend Starter Kit",
    description:
      "A production-ready web app scaffold with routing, auth, and a component library already wired together. Covers the decisions you would make anyway on day one.",
    ctaLabel: "View the frontend kit",
    ctaHref: "/kits/frontend-starter",
    matchAnswers: { role: "developer", "developer-use-case": "frontend" },
  },
  {
    id: "dev-data",
    title: "Data Pipeline Template",
    description:
      "ETL scaffolding, a local testing harness, and connectors for the most common sources. Designed to run in any environment without vendor lock-in.",
    ctaLabel: "View the data template",
    ctaHref: "/kits/data-pipeline",
    matchAnswers: { role: "developer", "developer-use-case": "data" },
  },

  // Marketer paths
  {
    id: "marketer-acquisition",
    title: "Acquisition Playbook",
    description:
      "Channel-by-channel breakdowns of what is working for early-stage SaaS right now, with templates for ads, landing pages, and outbound sequences.",
    ctaLabel: "Get the playbook",
    ctaHref: "/playbooks/acquisition",
    matchAnswers: { role: "marketer", "marketer-goal": "acquisition" },
  },
  {
    id: "marketer-retention",
    title: "Retention Playbook",
    description:
      "Onboarding flows, in-app nudges, and lifecycle email sequences mapped to the moments that predict churn before it shows up in your dashboard.",
    ctaLabel: "Get the playbook",
    ctaHref: "/playbooks/retention",
    matchAnswers: { role: "marketer", "marketer-goal": "retention" },
  },
  {
    id: "marketer-content",
    title: "Content and SEO Playbook",
    description:
      "A repeatable system for finding topics worth covering, producing content that earns links, and tracking which pieces actually move organic metrics.",
    ctaLabel: "Get the playbook",
    ctaHref: "/playbooks/content-seo",
    matchAnswers: { role: "marketer", "marketer-goal": "content" },
  },

  // Founder paths
  {
    id: "founder-idea",
    title: "Validation Checklist",
    description:
      "A structured approach to testing whether a problem is real and whether people will pay to solve it, before you write a line of product code.",
    ctaLabel: "Download the checklist",
    ctaHref: "/resources/validation-checklist",
    matchAnswers: { role: "founder", "founder-stage": "idea" },
  },
  {
    id: "founder-early",
    title: "Early Traction Guide",
    description:
      "How to find your first 100 customers, what to measure before you have enough data, and how to know when you have found something worth scaling.",
    ctaLabel: "Read the guide",
    ctaHref: "/resources/early-traction",
    matchAnswers: { role: "founder", "founder-stage": "early" },
  },
  {
    id: "founder-scaling",
    title: "Scaling Toolkit",
    description:
      "Hiring frameworks, process templates, and the operational decisions that determine whether a working business scales cleanly or accumulates drag.",
    ctaLabel: "Explore the toolkit",
    ctaHref: "/resources/scaling-toolkit",
    matchAnswers: { role: "founder", "founder-stage": "scaling" },
  },
];

const branchingDefault: Recommendation = {
  id: "general-resources",
  title: "General Resources",
  description:
    "Our full resource library covers a wide range of topics. Browse by category to find what fits your situation.",
  ctaLabel: "Browse resources",
  ctaHref: "/resources",
  matchAnswers: {},
};

export function BranchingRoleWizardExample() {
  return (
    <MultiStepRecommendationWizard
      title="Find what you need"
      description="Tell us about your role and focus and we will skip straight to the resources that are most relevant."
      questions={branchingQuestions}
      recommendations={branchingRecommendations}
      defaultRecommendation={branchingDefault}
    />
  );
}
