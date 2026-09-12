import React from "react";
import { Award, Users, Globe, CheckCircle2, Navigation } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { sihProject } from "@/data/projects";

export default function Hackathon() {
  return (
    <section id="hackathon" className="relative px-6 py-20 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical Competition"
          title="Smart India Hackathon 2026"
          description="A multi-member engineering sprint tackling public transit challenges in developing urban municipalities."
        />

        <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left: Problem & Scope */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="cyan" size="sm">
                  Smart India Hackathon 2026
                </Badge>
                <Badge tone="success" dot size="sm">
                  {sihProject.status}
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                {sihProject.type}
              </h3>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {sihProject.description}
              </p>

              <div className="pt-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                  Key Focus Areas
                </h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {sihProject.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2 text-xs text-foreground bg-surface-raised/50 p-2.5 rounded-lg border border-border/60"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-emerald-400 shrink-0 mt-0.5"
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Team, Role, and Outcome Metadata */}
            <div className="lg:col-span-5 rounded-xl border border-border/80 bg-surface-raised/60 p-5 sm:p-6 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-muted uppercase tracking-wider text-[11px]">
                  Project Specifications
                </span>
                <Navigation size={14} className="text-accent" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted flex items-center gap-1.5">
                  <Award size={14} className="text-emerald-400" />
                  <span>Competition:</span>
                </span>
                <span className="text-foreground font-semibold">
                  Smart India Hackathon 2026
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted flex items-center gap-1.5">
                  <Users size={14} className="text-cyan-400" />
                  <span>Team Size:</span>
                </span>
                <span className="text-foreground">6 Members</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted flex items-center gap-1.5">
                  <Globe size={14} className="text-accent" />
                  <span>Assigned Role:</span>
                </span>
                <span className="text-accent-light font-semibold">
                  Full Stack Developer
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted">Primary Deliverable:</span>
                <span className="text-foreground">Web Application</span>
              </div>

              <div className="pt-3 border-t border-border/60">
                <p className="text-[11px] text-muted mb-1 uppercase tracking-wider">
                  Verified Outcome:
                </p>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-emerald-300 font-medium text-xs flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Selected for College Internal Round (MNIT Jaipur)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
