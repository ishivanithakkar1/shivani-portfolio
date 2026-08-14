export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  summary: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  architectureHighlights: string[];
  link?: string;
};

export const projectsData: ProjectItem[] = [
  {
    id: "accurate-diamonds",
    title: "Accurate Diamonds System",
    category: "Full-Stack & Backend Architecture",
    summary:
      "High-traffic inventory management platform featuring Angular client modules, NestJS & Express microservices, and optimized MSSQL database pipelines.",
    metrics: [
      { label: "FRONTEND / BACKEND", value: "Angular + NestJS" },
      { label: "LATENCY", value: "-30% Optimized" },
      { label: "DB", value: "MSSQL Server" },
    ],
    tags: ["Angular", "NestJS", "Express", "MSSQL", "Node.js", "REST APIs"],
    architectureHighlights: [
      "Angular enterprise frontend modules integrated with NestJS microservices",
      "Modular dual-microservice domain separation (Client & Admin)",
      "Indexed database queries & optimized stored procedures",
    ],
  },
  {
    id: "karma-jewellery",
    title: "Karma Fine Jewellery",
    category: "Greenfield Build",
    summary:
      "End-to-end backend architecture built from scratch. Designed database schemas, data flow models, and automated CI/CD release pipelines.",
    metrics: [
      { label: "SYSTEM BUILD", value: "100% Greenfield" },
      { label: "STACK", value: "NestJS + SQL" },
      { label: "DEPLOYMENT", value: "CI/CD Pipeline" },
    ],
    tags: ["NestJS", "Node.js", "SQL", "System Architecture", "CI/CD"],
    architectureHighlights: [
      "End-to-end system design & ERD schema ownership",
      "Modular codebase for maintainable feature expansion",
      "Automated CI/CD release workflows",
    ],
  },
  {
    id: "gift-city-utilities",
    title: "GIFT City Enterprise Platform",
    category: "Enterprise Infrastructure",
    summary:
      "Enterprise utility backend services for Gujarat International Finance Tec-City featuring .NET Core APIs and Role-Based Access Control.",
    metrics: [
      { label: "ENTERPRISE", value: "GIFT Tec-City" },
      { label: "RESPONSE TIME", value: "30% Faster" },
      { label: "FRAMEWORK", value: ".NET Core" },
    ],
    tags: [".NET Core", "C#", "MySQL", "EF Core", "RBAC"],
    architectureHighlights: [
      "High-performance C# / .NET Core EF Core backend",
      "Query optimization reducing response latency by 30%",
      "Enterprise RBAC security & reporting workflows",
    ],
  },
];
