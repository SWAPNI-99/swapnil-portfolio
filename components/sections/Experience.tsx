import React from "react";
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-20 sm:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Leadership & Extracurriculars"
          title="Leadership & Experience"
          description="A track record of initiative, campus event organization, team mentorship, and cross-functional collaboration."
        />

        <div className="relative border-l border-border/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10">
          {experiences.map((exp) => {
            const isCurrent = exp.status === "current";
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <span
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background transition-all ${
                    isCurrent
                      ? "bg-emerald-400 ring-4 ring-emerald-500/20"
                      : "bg-muted-dark group-hover:bg-accent ring-2 ring-border"
                  }`}
                  aria-hidden="true"
                />

                <Card
                  hoverEffect
                  className={isCurrent ? "border-accent/30 bg-surface/90" : ""}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-border/60">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-foreground font-sans">
                          {exp.organization}
                        </h3>
                        <Badge
                          tone={isCurrent ? "success" : "neutral"}
                          size="sm"
                          dot={isCurrent}
                          pulseDot={isCurrent}
                        >
                          {isCurrent ? "Active Role" : "Past Tenure"}
                        </Badge>
                      </div>
                      <p className="font-mono text-sm font-semibold text-accent-light">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-muted shrink-0">
                      <Calendar size={13} className="text-muted-dark" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-muted leading-relaxed"
                      >
                        <ChevronRight
                          size={14}
                          className="text-accent shrink-0 mt-1"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[11px] text-muted-dark mr-1 uppercase">
                      Capabilities Gained:
                    </span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-surface-raised border border-border text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}