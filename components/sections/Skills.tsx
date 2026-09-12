"use client";

import React, { useState } from "react";
import {
  Code,
  Brain,
  Binary,
  Globe,
  Database,
  LineChart,
  Users,
  Sparkles,
  Check
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import {
  technicalSkills,
  financeSkills,
  personalSkills
} from "@/data/skills";

type SkillTab = "technical" | "finance" | "leadership";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillTab>("technical");

  return (
    <section id="skills" className="relative px-6 py-24 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skill Matrix"
          title="Technical & Domain Proficiency"
          description="A grounded overview of my technical stack, algorithmic learning roadmap, and secondary finance research interests — with zero exaggerated percentage bars."
          action={
            <div className="flex items-center rounded-xl border border-border bg-surface p-1 font-mono text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("technical")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === "technical"
                    ? "bg-accent text-white font-medium shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Technical Stack
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("finance")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === "finance"
                    ? "bg-accent text-white font-medium shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Finance & Research
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("leadership")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === "leadership"
                    ? "bg-accent text-white font-medium shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Leadership
              </button>
            </div>
          }
        />

        {/* Tab 1: Technical Stack */}
        {activeTab === "technical" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((group) => (
              <Card key={group.id} glow="indigo" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground text-base">
                      {group.category}
                    </h3>
                    <span className="font-mono text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                      {group.badge}
                    </span>
                  </div>
                  <p className="text-xs text-muted mb-4">{group.subtitle}</p>

                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-lg border border-border/60 bg-surface-raised/50 p-2.5 flex items-start justify-between gap-2"
                      >
                        <div>
                          <p className="font-mono text-xs font-semibold text-foreground">
                            {item.name}
                          </p>
                          {item.note && (
                            <p className="text-[11px] text-muted mt-0.5">
                              {item.note}
                            </p>
                          )}
                        </div>
                        {item.tag && (
                          <span
                            className={`font-mono text-[10px] px-2 py-0.5 rounded whitespace-nowrap ${
                              item.tag.includes("Learning")
                                ? "bg-amber-500/10 text-amber-300 border border-amber-500/30 animate-pulse"
                                : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                            }`}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Tab 2: Finance & Markets (Secondary Differentiator) */}
        {activeTab === "finance" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                  Strategic Secondary Differentiator
                </p>
                <p className="text-xs sm:text-sm text-foreground">
                  Grounded practical understanding developed through independent equity research and founding Equity Minds.
                </p>
              </div>
              <Badge tone="cyan" size="sm">
                Secondary Focus
              </Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {financeSkills.map((item) => (
                <div
                  key={item.area}
                  className="rounded-xl border border-border bg-surface p-4 flex items-center justify-between transition-colors hover:border-cyan-500/40"
                >
                  <span className="text-sm font-medium text-foreground">
                    {item.area}
                  </span>
                  <Badge
                    tone={item.level === "Intermediate" ? "cyan" : "neutral"}
                    size="sm"
                  >
                    {item.level}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Leadership & Interpersonal */}
        {activeTab === "leadership" && (
          <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-4 flex items-center gap-2">
              <Users size={16} className="text-accent" />
              <span>Demonstrated Interpersonal & Organizational Capabilities</span>
            </h3>
            <p className="text-sm text-muted mb-6 max-w-2xl">
              Developed through direct leadership of the 15-member Equity Minds cohort, executive roles in university fests with Finanza, and participation in the Ed Cell and Debate Club.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {personalSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-border bg-surface-raised/60 p-4 flex items-center gap-3 transition-colors hover:border-accent/40"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/25">
                    <Check size={14} className="text-accent" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}