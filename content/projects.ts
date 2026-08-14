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
    id: "distributed-event-engine",
    title: "Real-Time Event Processing Engine",
    category: "Backend Architecture",
    summary:
      "High-throughput event streaming platform engineered for microsecond latency and fault-tolerant event ordering across distributed clusters.",
    metrics: [
      { label: "THROUGHPUT", value: "50k req/sec" },
      { label: "P99 LATENCY", value: "<12ms" },
      { label: "AVAILABILITY", value: "99.99%" },
    ],
    tags: ["Python", "PostgreSQL", "Redis", "Kafka", "Docker"],
    architectureHighlights: [
      "Event-driven architecture with optimistic concurrency control",
      "Custom dead-letter queue recovery with zero data loss guarantee",
      "Automated partition rebalancing for dynamic load spikes",
    ],
  },
  {
    id: "luminous-design-system",
    title: "Enterprise Component Architecture",
    category: "Full-Stack & Frontend",
    summary:
      "High-performance design system and component library built with accessibility-first standards, WCAG AAA compliance, and zero-runtime CSS.",
    metrics: [
      { label: "COMPONENTS", value: "45+ Production" },
      { label: "ACCESSIBILITY", value: "100% WCAG AAA" },
      { label: "BUNDLE SIZE", value: "<4.2kB gzipped" },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Radix UI"],
    architectureHighlights: [
      "Strict polymorphic component composition API",
      "Built-in keyboard navigation & ARIA screen-reader primitives",
      "Automated visual regression testing via Playwright CI/CD",
    ],
  },
  {
    id: "telemetry-hud-platform",
    title: "System Reliability & Observability HUD",
    category: "System Engineering",
    summary:
      "Real-time observability dashboard for monitoring microservice health, memory pressure, and distributed trace telemetry in mission-critical environments.",
    metrics: [
      { label: "DATA REFRESH", value: "100ms WebSocket" },
      { label: "TRACE ACCURACY", value: "99.9%" },
      { label: "MEMORY FOOTPRINT", value: "<15MB" },
    ],
    tags: ["TypeScript", "Angular", "WebSockets", "Go", "RxJS"],
    architectureHighlights: [
      "Low-overhead WebSocket binary frame serialization",
      "Canvas-rendered real-time sparklines handling 10k data points/sec",
      "Predictive anomaly detection alerting pipeline",
    ],
  },
];
