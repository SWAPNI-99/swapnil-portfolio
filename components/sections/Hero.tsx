"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  FileDown,
  ArrowRight,
  Terminal,
  Cpu,
  MapPin,
  Sparkles,
  Layers
} from "lucide-react";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Hero() {
  const [telemetryTab, setTelemetryTab] = useState<"system" | "logs">("system");

  const socialIconMap: Record<string, React.ReactNode> = {
    GitHub: <Github size={18} />,
    LinkedIn: <Linkedin size={18} />,
    LeetCode: <Code2 size={18} />
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center px-6 pt-32 pb-20 sm:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-300 mb-6 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profile.availability}</span>
            </div>

            {/* Sub-label with College */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-2">
              <span>{profile.education.current.shortInstitution}</span>
              <span>•</span>
              <span>B.Tech CST (2029)</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-sans">
              SWAPNIL NITIN <br className="hidden sm:inline" />
              <span className="text-gradient">JOSHIRAO</span>
            </h1>

            {/* Positioning Statement */}
            <p className="mt-4 text-lg sm:text-xl font-medium text-foreground max-w-2xl">
              {profile.headline}
            </p>

            {/* Supporting Statement */}
            <p className="mt-4 text-base leading-relaxed text-muted max-w-xl font-normal">
              {profile.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="#jarvis"
                variant="primary"
                size="md"
                iconRight={<ArrowRight size={16} />}
              >
                Explore Jarvis
              </Button>
              <Button
                href={profile.resumePath}
                external
                variant="secondary"
                size="md"
                iconLeft={<FileDown size={16} className="text-accent" />}
              >
                Download Resume
              </Button>
            </div>

            {/* Quick Metadata and Social Links */}
            <div className="mt-10 pt-8 border-t border-border/80 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <MapPin size={14} className="text-accent" />
                <span>{profile.location}</span>
              </div>

              <div className="flex items-center gap-3">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Swapnil's ${social.label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-raised text-muted transition-all hover:border-accent/40 hover:text-foreground hover:bg-surface-elevated"
                  >
                    {socialIconMap[social.label]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive SYSTEM STATUS Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            <div className="rounded-2xl border border-border/90 bg-surface/90 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden relative">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-border/80 bg-surface-raised/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-dark flex items-center gap-1">
                    <Terminal size={12} className="text-accent" />
                    <span>snj-core // telemetry-v2</span>
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center rounded-md border border-border/80 bg-surface p-0.5 text-[11px] font-mono">
                  <button
                    type="button"
                    onClick={() => setTelemetryTab("system")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      telemetryTab === "system"
                        ? "bg-surface-elevated text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    STATUS
                  </button>
                  <button
                    type="button"
                    onClick={() => setTelemetryTab("logs")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      telemetryTab === "logs"
                        ? "bg-surface-elevated text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    LOGS
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              {telemetryTab === "system" ? (
                <div className="p-5 sm:p-6 space-y-4 font-mono text-xs">
                  {/* System State Row */}
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                      </span>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted">System State</p>
                        <p className="text-emerald-300 font-semibold text-sm">ONLINE • ALL SIGNALS NOMINAL</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      LIVE
                    </span>
                  </div>

                  {/* Core Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border bg-surface-raised/60 p-3.5">
                      <div className="flex items-center justify-between text-muted text-[10px] uppercase tracking-wider mb-1">
                        <span>Flagship Engine</span>
                        <Cpu size={12} className="text-accent" />
                      </div>
                      <p className="font-semibold text-foreground text-sm">JARVIS</p>
                      <p className="text-[11px] text-accent-light mt-0.5">Agentic AI Assistant</p>
                    </div>

                    <div className="rounded-xl border border-border bg-surface-raised/60 p-3.5">
                      <div className="flex items-center justify-between text-muted text-[10px] uppercase tracking-wider mb-1">
                        <span>Institution</span>
                        <Layers size={12} className="text-accent" />
                      </div>
                      <p className="font-semibold text-foreground text-sm">MNIT JAIPUR</p>
                      <p className="text-[11px] text-muted mt-0.5">Computer Science & Tech</p>
                    </div>
                  </div>

                  {/* Primary & Secondary Focus */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-start justify-between rounded-lg border border-border/60 bg-surface-raised/40 px-3 py-2">
                      <span className="text-muted text-[11px] uppercase tracking-wider">Primary Vector</span>
                      <span className="text-right text-foreground font-medium text-[11px]">
                        AI • Systems • Automation
                      </span>
                    </div>
                    <div className="flex items-start justify-between rounded-lg border border-border/60 bg-surface-raised/40 px-3 py-2">
                      <span className="text-muted text-[11px] uppercase tracking-wider">Venture Initiative</span>
                      <span className="text-right text-accent-light font-medium text-[11px]">
                        Equity Minds (15 Members)
                      </span>
                    </div>
                    <div className="flex items-start justify-between rounded-lg border border-border/60 bg-surface-raised/40 px-3 py-2">
                      <span className="text-muted text-[11px] uppercase tracking-wider">Location Node</span>
                      <span className="text-right text-muted font-medium text-[11px]">
                        Jaipur, IN (26.86° N, 75.81° E)
                      </span>
                    </div>
                  </div>

                  {/* Interactive Action into Jarvis */}
                  <div className="pt-2">
                    <a
                      href="#jarvis-architecture"
                      className="group flex items-center justify-between rounded-xl border border-accent/40 bg-accent/10 px-3.5 py-2.5 text-xs text-accent-light hover:bg-accent/15 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles size={14} className="text-accent" />
                        <span className="font-medium">Inspect Jarvis Architecture Graph</span>
                      </div>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ) : (
                /* Simulated Kernel Logs Tab */
                <div className="p-5 sm:p-6 font-mono text-xs space-y-2.5">
                  <div className="text-[11px] text-muted border-b border-border/60 pb-2">
                    [KERNEL DISPATCH TRACE // SUBSYSTEM HEARTBEAT]
                  </div>
                  <p className="text-emerald-400">
                    <span className="text-muted-dark">00:00:01</span> [Ollama] LLaMA-3 inference provider connected (localhost:11434)
                  </p>
                  <p className="text-cyan-400">
                    <span className="text-muted-dark">00:00:02</span> [Planner] Semantic intent classification pipeline online
                  </p>
                  <p className="text-muted">
                    <span className="text-muted-dark">00:00:03</span> [WebAgent] Real-time HTTP extraction ready
                  </p>
                  <p className="text-amber-400">
                    <span className="text-muted-dark">00:00:04</span> [OSAgent] Subprocess sandbox mounted (In Dev)
                  </p>
                  <p className="text-indigo-300">
                    <span className="text-muted-dark">00:00:05</span> [Memory] SQLite WAL session layer configured
                  </p>
                  <div className="pt-3">
                    <span className="inline-block animate-pulse text-accent">_ awaiting next system prompt</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}