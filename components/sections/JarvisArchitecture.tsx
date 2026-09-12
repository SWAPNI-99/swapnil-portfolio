"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { jarvisArchitecture } from "@/data/projects";
import type { BuildStatus } from "@/data/projects";

const pipelineStages = [
  "User",
  "Agent / Planner",
  "LLM / Reasoning",
  "Memory + Tools",
  "Web / OS / Files / Voice",
  "Automation"
];

const statusTone: Record<BuildStatus, "success" | "warning" | "neutral"> = {
  implemented: "success",
  "in-development": "warning",
  planned: "neutral"
};

const statusLabel: Record<BuildStatus, string> = {
  implemented: "Implemented",
  "in-development": "In Development",
  planned: "Planned"
};

export default function JarvisArchitecture() {
  return (
    <section id="jarvis-architecture" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Jarvis — Architecture"
          title="How it's designed to work"
          description="A planned system architecture. Stages and technologies are labeled by their real build status, not treated as already complete."
        />

        <div className="mb-16 flex flex-col items-center">
          {pipelineStages.map((stage, index) => (
            <div key={stage} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="w-full max-w-xs rounded-lg border border-border bg-surface px-5 py-3 text-center sm:max-w-sm"
              >
                <span className="font-mono text-sm text-foreground">
                  {stage}
                </span>
              </motion.div>
              {index < pipelineStages.length - 1 && (
                <ArrowDown className="my-2 text-muted" size={18} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {jarvisArchitecture.map((layer) => (
            <div
              key={layer.layer}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                {layer.layer}
              </h3>
              <p className="mt-1 text-sm text-muted">{layer.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <Badge key={item.name} tone={statusTone[item.status]}>
                    {`${item.name} · ${statusLabel[item.status]}`}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}