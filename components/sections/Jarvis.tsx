"use client";

import React from "react";
import {
  Cpu,
  Github,
  CheckCircle2,
  Clock,
  Calendar,
  Layers,
  Sparkles,
  Terminal,
  ShieldCheck,
  Zap,
  Bot
} from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { jarvisProject, jarvisCapabilities } from "@/data/projects";

export default function Jarvis() {
  return (
    <section id="jarvis" className="relative px-6 py-24 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        {/* Flagship Header Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Flagship Engineering Project
              </span>
              <Badge tone="success" size="sm">
                Active Development
              </Badge>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans flex items-center gap-3">
              <span>{jarvisProject.name}</span>
              <span className="text-sm sm:text-base font-mono text-accent font-normal px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
                v0.2-alpha
              </span>
            </h2>
            <p className="mt-2 text-xl font-medium text-foreground">
              {jarvisProject.type}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {jarvisProject.githubUrl && (
              <Button
                href={jarvisProject.githubUrl}
                external
                variant="secondary"
                size="md"
                iconLeft={<Github size={16} />}
              >
                View Repository
              </Button>
            )}
            <Button
              href="#jarvis-architecture"
              variant="primary"
              size="md"
              iconRight={<Layers size={16} />}
            >
              Interactive Architecture
            </Button>
          </div>
        </div>

        {/* Highlight Banner / Architectural Philosophy */}
        <div className="rounded-2xl border border-accent/40 bg-gradient-to-r from-accent/10 via-surface to-surface-raised p-6 sm:p-8 mb-10 shadow-xl shadow-accent/5">
          <div className="grid gap-6 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-2">
                <ShieldCheck size={16} className="text-accent" />
                <span>Architecture & Engineering Ownership</span>
              </div>
              <p className="text-base sm:text-lg text-foreground leading-relaxed font-normal">
                {jarvisProject.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {jarvisProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl border border-border/80 bg-surface/80 p-5 font-mono text-xs space-y-2.5 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-border/60 pb-2 text-muted uppercase tracking-wider text-[11px]">
                <span>Role Specification</span>
                <Bot size={14} className="text-accent" />
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Architect:</span>
                <span className="text-foreground font-semibold">Swapnil Nitin Joshirao</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Target Host:</span>
                <span className="text-foreground">Cross-platform Laptop OS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Primary LLM:</span>
                <span className="text-emerald-400">Local LLaMA-3 (Ollama)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Cloud Dependency:</span>
                <span className="text-emerald-400 font-semibold">0% (Completely Private)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Transparent Capability Roadmap */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* IMPLEMENTED */}
          <Card glow="emerald" className="border-emerald-500/30">
            <div className="flex items-center justify-between mb-4 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  Implemented
                </h3>
              </div>
              <Badge tone="success" size="sm">
                Live in Repo
              </Badge>
            </div>

            <div className="space-y-4">
              {jarvisCapabilities.implemented.map((item) => (
                <div key={item.title} className="rounded-xl border border-border/60 bg-surface-raised/40 p-3.5">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground text-sm mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* IN DEVELOPMENT */}
          <Card glow="indigo" className="border-amber-500/30">
            <div className="flex items-center justify-between mb-4 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-amber-400" />
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-amber-400">
                  In Development
                </h3>
              </div>
              <Badge tone="warning" size="sm">
                Active Sprints
              </Badge>
            </div>

            <div className="space-y-4">
              {jarvisCapabilities.inDevelopment.map((item) => (
                <div key={item.title} className="rounded-xl border border-border/60 bg-surface-raised/40 p-3.5">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground text-sm mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* PLANNED ROADMAP */}
          <Card glow="cyan" className="border-cyan-500/30">
            <div className="flex items-center justify-between mb-4 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-cyan-400" />
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Planned Roadmap
                </h3>
              </div>
              <Badge tone="cyan" size="sm">
                Design Phase
              </Badge>
            </div>

            <div className="space-y-4">
              {jarvisCapabilities.planned.map((item) => (
                <div key={item.title} className="rounded-xl border border-border/60 bg-surface-raised/40 p-3.5">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground text-sm mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
