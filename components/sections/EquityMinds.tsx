import React from "react";
import {
  Users,
  Calendar,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Target,
  Presentation,
  BookOpen,
  LineChart,
  Award
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { equityMinds } from "@/data/experience";

export default function EquityMinds() {
  return (
    <section id="equity-minds" className="relative px-6 py-24 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Founder Initiative & Venture Vision"
          title="Equity Minds"
          description="A student-led financial research and education initiative at MNIT Jaipur designed to develop practical market literacy and company valuation capabilities."
        />

        {/* Startup Profile Header Card */}
        <div className="rounded-2xl border border-accent/30 bg-surface/90 p-6 sm:p-8 backdrop-blur-md mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border/80">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                  {equityMinds.statusType}
                </span>
                <span className="text-muted-dark">•</span>
                <span className="font-mono text-xs text-muted">MNIT Jaipur</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                {equityMinds.organization}
              </h3>
              <p className="mt-1 text-base text-accent-light font-medium">
                {equityMinds.tagline}
              </p>
              <p className="mt-3 text-sm text-muted max-w-2xl leading-relaxed">
                {equityMinds.purpose}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap md:flex-nowrap gap-3">
              <div className="rounded-xl border border-border bg-surface-raised/70 px-4 py-3 min-w-[120px]">
                <div className="flex items-center gap-1.5 text-muted text-[10px] font-mono uppercase tracking-wider mb-1">
                  <Users size={12} className="text-cyan-400" />
                  <span>Team Size</span>
                </div>
                <p className="text-2xl font-bold text-foreground font-mono">
                  {equityMinds.teamSize}
                </p>
                <p className="text-[10px] text-muted">Active members</p>
              </div>

              <div className="rounded-xl border border-border bg-surface-raised/70 px-4 py-3 min-w-[120px]">
                <div className="flex items-center gap-1.5 text-muted text-[10px] font-mono uppercase tracking-wider mb-1">
                  <Calendar size={12} className="text-accent" />
                  <span>Founded</span>
                </div>
                <p className="text-base font-bold text-foreground font-mono mt-1">
                  Aug 15, 2026
                </p>
                <p className="text-[10px] text-muted">Student initiative</p>
              </div>

              <div className="rounded-xl border border-border bg-surface-raised/70 px-4 py-3 min-w-[120px]">
                <div className="flex items-center gap-1.5 text-muted text-[10px] font-mono uppercase tracking-wider mb-1">
                  <Target size={12} className="text-emerald-400" />
                  <span>Role</span>
                </div>
                <p className="text-base font-bold text-emerald-300 font-mono mt-1">
                  Founder
                </p>
                <p className="text-[10px] text-muted">Team & Curriculum</p>
              </div>
            </div>
          </div>

          {/* Activities & Founder Contributions Grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Core Activities */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                <BookOpen size={14} className="text-cyan-400" />
                <span>Initiative Activities</span>
              </h4>
              <ul className="space-y-2.5">
                {equityMinds.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground bg-surface-raised/40 p-3 rounded-xl border border-border/60"
                  >
                    <LineChart
                      size={15}
                      className="text-cyan-400 shrink-0 mt-0.5"
                    />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Founder Responsibilities */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-4 flex items-center gap-2">
                <Presentation size={14} className="text-accent" />
                <span>Founder Contributions</span>
              </h4>
              <ul className="space-y-2.5">
                {equityMinds.founderContributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground bg-surface-raised/40 p-3 rounded-xl border border-border/60"
                  >
                    <Award
                      size={15}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5-Stage Evolution Pipeline */}
          <div className="mt-10 pt-8 border-t border-border/80">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-2">
                <TrendingUp size={14} className="text-accent" />
                <span>Long-Term Strategic Progression</span>
              </h4>
              <span className="font-mono text-[10px] text-muted">
                Vision Roadmap
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {equityMinds.progression.map((prog) => (
                <div
                  key={prog.stage}
                  className={`p-3.5 rounded-xl border flex flex-col justify-between ${
                    prog.active
                      ? "bg-surface-elevated border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                      : "bg-surface-raised/40 border-border/70 text-muted"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] text-muted-dark font-semibold">
                        STAGE {prog.stage}
                      </span>
                      {prog.active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                    </div>
                    <p className={`font-semibold text-xs mb-1 ${prog.active ? "text-foreground" : "text-muted"}`}>
                      {prog.label}
                    </p>
                    <p className="text-[11px] text-muted leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ambition Statement & Required Regulatory Disclaimer */}
          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7 rounded-xl border border-accent/25 bg-accent/5 p-4 sm:p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                Long-Term Ambition
              </p>
              <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                {equityMinds.longTermVision}
              </p>
              <p className="mt-2 text-xs text-muted">
                Near-term goal: {equityMinds.nearTermGoal}
              </p>
            </div>

            <div className="lg:col-span-5 rounded-xl border border-border/80 bg-surface-raised/40 p-4 sm:p-5 flex items-start gap-3 text-xs text-muted">
              <ShieldAlert size={18} className="text-muted-dark shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted font-semibold mb-1">
                  Status Clarification
                </p>
                <p className="text-[11px] leading-relaxed text-muted">
                  {equityMinds.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}