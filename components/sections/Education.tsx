import React from "react";
import { GraduationCap, BookMarked, Award, Calendar, Landmark } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { profile } from "@/data/profile";

export default function Education() {
  const { current, schooling } = profile.education;

  return (
    <section id="education" className="relative px-6 py-20 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Academic Foundation"
          title="Education"
          description="Formal Computer Science training at an Institute of National Importance, complemented by self-directed systems engineering."
        />

        <div className="grid gap-6 lg:grid-cols-12 items-start">
          {/* Main Institution Card: MNIT Jaipur */}
          <Card glow="indigo" className="lg:col-span-8 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-border/80">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                  <GraduationCap size={24} className="text-accent" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                      Institute of National Importance
                    </span>
                    <Badge tone="success" size="sm">
                      Current
                    </Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    {current.institution}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {current.degree} in {current.branch}
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Credentials Row */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface-raised/60 p-3.5">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted mb-1">
                  Current Year
                </p>
                <p className="text-base font-semibold text-foreground font-mono">
                  {current.year}
                </p>
                <p className="text-[10px] text-muted">{current.semester}</p>
              </div>

              <div className="rounded-xl border border-border bg-surface-raised/60 p-3.5">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted mb-1">
                  Cumulative GPA
                </p>
                <p className="text-base font-semibold text-foreground font-mono">
                  {current.cgpa} <span className="text-xs text-muted">/ {current.cgpaScale}</span>
                </p>
                <p className="text-[10px] text-muted">Undergraduate</p>
              </div>

              <div className="rounded-xl border border-border bg-surface-raised/60 p-3.5">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted mb-1">
                  Graduation
                </p>
                <p className="text-base font-semibold text-foreground font-mono">
                  {current.expectedGraduation}
                </p>
                <p className="text-[10px] text-muted">Expected Year</p>
              </div>

              <div className="rounded-xl border border-border bg-surface-raised/60 p-3.5">
                <p className="text-[10px] font-mono uppercase tracking-wider text-muted mb-1">
                  Campus Node
                </p>
                <p className="text-base font-semibold text-foreground font-mono">
                  Jaipur
                </p>
                <p className="text-[10px] text-muted">Rajasthan, India</p>
              </div>
            </div>
          </Card>

          {/* Prior Academic Schooling Records */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted font-semibold px-1">
              Prior Academic Milestones
            </h4>

            {schooling.map((record) => (
              <Card key={record.level} hoverEffect className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-raised">
                      <BookMarked size={16} className="text-muted" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {record.level}
                      </p>
                      <p className="text-xs text-muted">Senior Secondary</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xl font-bold text-accent-light">
                      {record.percentage}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}