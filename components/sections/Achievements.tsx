import React from "react";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-20 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Milestones"
          title="Recognition & Progress"
          description="Early milestones in my engineering journey — grounded strictly in verified outcomes."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          <Card glow="indigo" className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                  <Award size={24} className="text-accent" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                      College Internal Round Selection
                    </span>
                    <Badge tone="success" size="sm">
                      Verified
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-sans">
                    Smart India Hackathon 2026
                  </h3>
                  <p className="mt-1 text-sm text-accent-light font-medium">
                    Problem Statement: Real-Time Public Transport Tracking for Small Cities
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
                    Selected for the internal college evaluation round at MNIT Jaipur as the Full Stack Developer in a 6-member engineering student team. Designed and built the user-facing web solution.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Academic / Integrity Note */}
          <div className="rounded-xl border border-border/80 bg-surface-raised/40 p-4 sm:p-5 flex items-start gap-3 font-mono text-xs text-muted">
            <ShieldCheck size={16} className="text-muted-dark shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="text-foreground font-semibold">Portfolio Standard:</span> This section intentionally displays only verified competition milestones. I do not list unearned certifications or inflated awards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}