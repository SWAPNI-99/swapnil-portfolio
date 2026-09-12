"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Brain,
  Eye,
  Hand,
  Network,
  LayoutDashboard,
  CheckCircle2,
  Clock,
  Calendar,
  Layers,
  Sparkles,
  Info
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import {
  jarvisPipelineStages,
  jarvisArchitecture,
  type ArchitectureItem,
  type BuildStatus
} from "@/data/projects";

const layerIcons: Record<string, React.ReactNode> = {
  brain: <Brain size={16} className="text-accent" />,
  senses: <Eye size={16} className="text-cyan-400" />,
  hands: <Hand size={16} className="text-emerald-400" />,
  ipc: <Network size={16} className="text-amber-400" />,
  ui: <LayoutDashboard size={16} className="text-rose-400" />
};

const statusBadgeTone: Record<BuildStatus, "success" | "warning" | "neutral"> = {
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
  const [selectedStageId, setSelectedStageId] = useState<string>("planner");
  const [activeLayerId, setActiveLayerId] = useState<string>("brain");
  const [selectedTech, setSelectedTech] = useState<ArchitectureItem | null>(null);
  const [statusFilter, setStatusFilter] = useState<"all" | BuildStatus>("all");

  const currentLayer =
    jarvisArchitecture.find((l) => l.id === activeLayerId) ??
    jarvisArchitecture[0]!;

  const selectedStage =
    jarvisPipelineStages.find((s) => s.id === selectedStageId) ??
    jarvisPipelineStages[1]!;

  const filteredItems = currentLayer.items.filter((item) => {
    if (statusFilter === "all") return true;
    return item.status === statusFilter;
  });

  return (
    <section
      id="jarvis-architecture"
      className="relative px-6 py-24 sm:px-8 border-t border-border/40 bg-surface/20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Interactive System Graph"
          title="Jarvis Architecture & Subsystems"
          description="A multi-tiered architectural roadmap. Click on pipeline stages or subsystem nodes to inspect their real implementation state and design rationale."
        />

        {/* 1. Interactive End-to-End Pipeline Visualization */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-2">
              <Sparkles size={14} className="text-accent" />
              <span>Execution Pipeline Flow</span>
            </h3>
            <span className="font-mono text-[11px] text-muted hidden sm:inline">
              Click any stage to inspect execution details
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {jarvisPipelineStages.map((stage, idx) => {
              const isSelected = selectedStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`relative flex flex-col items-start p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-surface-elevated border-accent shadow-lg shadow-accent/15 scale-[1.02]"
                      : "bg-surface-raised/70 border-border hover:border-border-highlight hover:bg-surface-raised"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="font-mono text-[11px] text-accent font-semibold">
                      {stage.step}
                    </span>
                    {idx < jarvisPipelineStages.length - 1 && (
                      <ArrowRight
                        size={12}
                        className="text-muted-dark hidden lg:block"
                      />
                    )}
                  </div>
                  <p className="font-semibold text-foreground text-xs sm:text-sm">
                    {stage.title}
                  </p>
                  <p className="font-mono text-[10px] text-muted mt-1 truncate w-full">
                    {stage.subtext}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Callout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStage.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-4 rounded-xl border border-accent/30 bg-accent/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-accent font-semibold">
                    STAGE {selectedStage.step}: {selectedStage.title}
                  </span>
                  <span className="text-muted-dark">•</span>
                  <span className="font-mono text-xs text-muted">
                    {selectedStage.subtext}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  {selectedStage.description}
                </p>
              </div>
              <div className="shrink-0 font-mono text-[11px] text-accent-light px-3 py-1 rounded bg-accent/10 border border-accent/20">
                Active Selection
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. Subsystem Layers Deep Dive */}
        <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-md">
          {/* Layer Selector Tabs & Filter Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/80">
            {/* Layer Selection Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {jarvisArchitecture.map((layer) => {
                const isActive = activeLayerId === layer.id;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => {
                      setActiveLayerId(layer.id);
                      setSelectedTech(null);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
                      isActive
                        ? "bg-surface-elevated text-white border border-accent/50 shadow-sm"
                        : "bg-surface-raised/60 text-muted border border-border hover:text-foreground hover:border-border-highlight"
                    }`}
                  >
                    {layerIcons[layer.id]}
                    <span className="font-medium">{layer.layer}</span>
                  </button>
                );
              })}
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="text-muted mr-1">Filter:</span>
              {(["all", "implemented", "in-development", "planned"] as const).map(
                (status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setStatusFilter(status)}
                    className={`px-2 py-1 rounded capitalize transition-colors ${
                      statusFilter === status
                        ? "bg-accent/20 text-accent-light border border-accent/40"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {status}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Active Layer Description */}
          <div className="mt-6 mb-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              {layerIcons[currentLayer.id]}
              <span>{currentLayer.layer}</span>
            </h4>
            <p className="mt-1 text-sm text-muted">
              {currentLayer.fullDescription}
            </p>
          </div>

          {/* Interactive Technology Grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => {
              const isSelected = selectedTech?.name === item.name;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSelectedTech(item)}
                  className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-surface-elevated border-accent shadow-md shadow-accent/10"
                      : "bg-surface-raised/50 border-border/80 hover:border-border-highlight hover:bg-surface-raised"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {item.name}
                    </span>
                    <Badge tone={statusBadgeTone[item.status]} size="sm" dot>
                      {statusLabel[item.status]}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2">
                    {item.detail}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Tech Detail Modal/Banner */}
          {selectedTech && (
            <div className="mt-6 p-4 rounded-xl border border-accent/40 bg-accent/10 flex items-start justify-between gap-4 font-mono text-xs">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Info size={14} className="text-accent" />
                  <span className="font-semibold text-foreground">
                    {selectedTech.name}
                  </span>
                  <Badge tone={statusBadgeTone[selectedTech.status]} size="sm">
                    {statusLabel[selectedTech.status]}
                  </Badge>
                </div>
                <p className="text-muted leading-relaxed">
                  {selectedTech.detail}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTech(null)}
                className="text-muted hover:text-foreground text-sm font-bold px-2 py-1"
                aria-label="Close technology detail"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}