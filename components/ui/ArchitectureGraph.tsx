"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type ArchitectureNode = {
  id: string;
  name: string;
  type: string;
  latency: string;
  throughput: string;
  tech: string;
  description: string;
  resilience: string;
};

const nodes: ArchitectureNode[] = [
  {
    id: "edge",
    name: "Next.js Edge Runtime",
    type: "EDGE LAYER",
    latency: "4ms",
    throughput: "100k req/sec",
    tech: "Next.js 16, V8 Isolate, Cloudflare",
    description: "Global CDN edge rendering and static asset distribution with sub-10ms TTFB worldwide.",
    resilience: "Global Anycast failover with automatic SSL termination",
  },
  {
    id: "gateway",
    name: "API Gateway",
    type: "ROUTING & AUTH",
    latency: "12ms",
    throughput: "65k req/sec",
    tech: "Go, Envoy Proxy, JWT, Redis",
    description: "Distributed rate-limiting, JWT authentication verification, and dynamic request proxying.",
    resilience: "Circuit breaker pattern with 500ms timeout fallbacks",
  },
  {
    id: "event-engine",
    name: "Kafka Event Stream",
    type: "MESSAGE BROKER",
    latency: "8ms",
    throughput: "50k msgs/sec",
    tech: "Apache Kafka, Docker, Python",
    description: "Asynchronous event ingestion queue with partitioning and dead-letter queue recovery.",
    resilience: "Triple-replicated topic partitions with automated leader election",
  },
  {
    id: "db-cluster",
    name: "PostgreSQL Primary DB",
    type: "PERSISTENCE",
    latency: "15ms P99",
    throughput: "25k transactions/sec",
    tech: "PostgreSQL 16, Connection Pooling, Redis Cache",
    description: "ACID-compliant relational storage with read-replica load balancing and write ahead logging.",
    resilience: "Automated point-in-time recovery & hot-standby failover",
  },
];

export function ArchitectureGraph() {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(nodes[0]);

  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl p-6 backdrop-blur-2xl border-white/10 shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono-code text-xs">
        <span className="text-accent-cyan uppercase tracking-widest flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
          // LIVE ARCHITECTURE TOPOLOGY MAP
        </span>
        <span className="text-text-muted text-[11px] hidden sm:inline">CLICK NODE TO INSPECT TELEMETRY</span>
      </div>

      {/* Node Graph Map */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4 font-mono-code text-xs">
        {nodes.map((node, i) => {
          const isSelected = selectedNode.id === node.id;

          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`relative flex flex-col justify-between rounded-xl p-4 text-left border transition-all duration-300 ${
                isSelected
                  ? "border-accent-cyan bg-accent-cyan/15 text-white shadow-lg shadow-accent-cyan/10"
                  : "border-white/10 bg-white/5 text-text-muted hover:border-white/20 hover:text-text-secondary"
              }`}
            >
              <div>
                <span className="text-[9px] uppercase tracking-wider text-accent-cyan block mb-1">
                  0{i + 1}. {node.type}
                </span>
                <h4 className="font-bold text-xs text-text-primary group-hover:text-white leading-tight">
                  {node.name}
                </h4>
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                <span className="text-emerald-400">⚡ {node.latency}</span>
                <span className="text-text-muted">Inspect →</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Node Telemetry Inspector */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-xl border border-white/10 bg-black/60 p-5 font-mono-code text-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] text-accent-cyan uppercase tracking-widest">// NODE TELEMETRY SPECIFICATION</span>
              <h3 className="text-base font-bold text-white mt-1">{selectedNode.name}</h3>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <span className="rounded-md bg-white/5 px-2.5 py-1 text-emerald-400 border border-emerald-500/20">
                P99: {selectedNode.latency}
              </span>
              <span className="rounded-md bg-white/5 px-2.5 py-1 text-accent-cyan border border-accent-cyan/20">
                {selectedNode.throughput}
              </span>
            </div>
          </div>

          <p className="mt-4 font-sans text-xs text-text-secondary leading-relaxed font-light">
            {selectedNode.description}
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/5 text-[11px]">
            <div>
              <span className="text-text-muted block text-[10px] uppercase">// TECH STACK:</span>
              <span className="text-white mt-0.5 block">{selectedNode.tech}</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px] uppercase">// RESILIENCE GUARANTEE:</span>
              <span className="text-accent-amber mt-0.5 block">{selectedNode.resilience}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
