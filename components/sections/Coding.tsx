import React from "react";
import { Code2, ExternalLink, Flame, CheckCircle2, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { leetCodeStats } from "@/data/skills";

export default function Coding() {
  const easyRatio = Math.round((leetCodeStats.easy / leetCodeStats.totalSolved) * 100);
  const mediumRatio = Math.round((leetCodeStats.medium / leetCodeStats.totalSolved) * 100);

  return (
    <section id="coding" className="relative px-6 py-20 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Data Structures & Algorithms"
          title="Coding Consistency & Practice"
          description="Evidence of daily problem-solving discipline and incremental mastery of core algorithmic patterns."
        />

        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          {/* Left Column: Problem Solved Breakdown Card */}
          <Card glow="indigo" className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border/80">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                    <Code2 size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">
                      LeetCode Practice
                    </h3>
                    <p className="font-mono text-xs text-muted">
                      Username: Swapnil_00
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-3xl font-bold text-white">
                    {leetCodeStats.totalSolved}
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    Total Solved
                  </p>
                </div>
              </div>

              {/* Solved Ratio Progress Bar */}
              <div className="my-6">
                <div className="flex items-center justify-between text-xs font-mono text-muted mb-2">
                  <span>Solved Ratio Distribution</span>
                  <span>{leetCodeStats.totalSolved} Problems</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-raised flex">
                  <div
                    style={{ width: `${easyRatio}%` }}
                    className="bg-emerald-400 h-full transition-all"
                    title={`Easy: ${leetCodeStats.easy}`}
                  />
                  <div
                    style={{ width: `${mediumRatio}%` }}
                    className="bg-amber-400 h-full transition-all"
                    title={`Medium: ${leetCodeStats.medium}`}
                  />
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-surface-raised/60 p-4 text-center">
                  <p className="font-mono text-2xl font-bold text-emerald-400">
                    {leetCodeStats.easy}
                  </p>
                  <p className="font-mono text-xs text-muted mt-1 uppercase tracking-wider">
                    Easy
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-surface-raised/60 p-4 text-center">
                  <p className="font-mono text-2xl font-bold text-amber-400">
                    {leetCodeStats.medium}
                  </p>
                  <p className="font-mono text-xs text-muted mt-1 uppercase tracking-wider">
                    Medium
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-surface-raised/60 p-4 text-center">
                  <p className="font-mono text-2xl font-bold text-muted">
                    {leetCodeStats.hard}
                  </p>
                  <p className="font-mono text-xs text-muted mt-1 uppercase tracking-wider">
                    Hard
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted font-mono">
                {leetCodeStats.note}
              </p>
              <Button
                href={leetCodeStats.profileUrl}
                external
                variant="secondary"
                size="sm"
                iconRight={<ExternalLink size={14} />}
              >
                View LeetCode Profile
              </Button>
            </div>
          </Card>

          {/* Right Column: Algorithmic Learning Progression */}
          <Card glow="emerald" className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame size={16} className="text-emerald-400" />
                <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  Curriculum Focus
                </h4>
              </div>

              {/* Current Learning Horizon */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 mb-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
                    Active Study Horizon
                  </span>
                  <Badge tone="warning" size="sm" dot pulseDot>
                    In Progress
                  </Badge>
                </div>
                <p className="text-base font-bold text-foreground">
                  {leetCodeStats.currentTopic}
                </p>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Deepening recursion, binary search tree operations, BFS/DFS tree traversals, and subtree validation.
                </p>
              </div>

              {/* Familiar Fundamentals */}
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3 font-semibold">
                  Familiar Core Concepts
                </p>
                <div className="space-y-2">
                  {leetCodeStats.familiarTopics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2.5 rounded-lg border border-border bg-surface-raised/40 px-3.5 py-2 text-xs text-foreground font-mono"
                    >
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60">
              <span className="font-mono text-[11px] text-muted-dark">
                Trajectory: Beginner → Intermediate System Engineering
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}