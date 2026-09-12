"use client";

import React from "react";
import { Hammer, BookOpen, Compass, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { profile } from "@/data/profile";

export default function Focus() {
  const { focusDashboard } = profile;

  return (
    <section id="focus" className="relative px-6 py-20 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Current Trajectory"
          title="What I'm Focused On"
          description="An evolving snapshot of the systems I am actively architecting, algorithms I am mastering, and domains I am researching."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {/* Column 1: Currently Building */}
          <Card glow="indigo" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                    <Hammer size={16} className="text-accent" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-accent-light font-semibold">
                    Building
                  </span>
                </div>
                <Badge tone="success" dot pulseDot size="sm">
                  Active
                </Badge>
              </div>

              <div className="space-y-5">
                {focusDashboard.currentlyBuilding.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border/80 bg-surface-raised/60 p-4 transition-colors hover:border-accent/30"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground text-base">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-muted mb-2">{item.subtitle}</p>
                    <p className="text-xs text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60">
              <a
                href="#jarvis"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent-light transition-colors"
              >
                <span>View project deep-dive</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Card>

          {/* Column 2: Currently Learning */}
          <Card glow="emerald" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
                    <BookOpen size={16} className="text-emerald-400" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                    Learning
                  </span>
                </div>
                <Badge tone="neutral" size="sm">
                  In Progress
                </Badge>
              </div>

              <div className="space-y-5">
                {focusDashboard.currentlyLearning.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border/80 bg-surface-raised/60 p-4 transition-colors hover:border-emerald-500/30"
                  >
                    <h3 className="font-semibold text-foreground text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.topics.map((topic) => (
                        <span
                          key={topic}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface border border-border text-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60">
              <a
                href="#coding"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>View LeetCode practice</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Card>

          {/* Column 3: Currently Exploring */}
          <Card glow="cyan" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10">
                    <Compass size={16} className="text-cyan-400" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                    Exploring
                  </span>
                </div>
                <Badge tone="cyan" size="sm">
                  Research
                </Badge>
              </div>

              <div className="space-y-5">
                {focusDashboard.currentlyExploring.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border/80 bg-surface-raised/60 p-4 transition-colors hover:border-cyan-500/30"
                  >
                    <h3 className="font-semibold text-foreground text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60">
              <a
                href="#equity-minds"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Explore Equity Minds</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
