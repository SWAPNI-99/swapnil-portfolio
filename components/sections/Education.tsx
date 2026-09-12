import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function Education() {
  const { current, prior } = profile.education;

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <GraduationCap className="text-accent" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {current.institution}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {current.degree}, {current.branch}
              </p>
              <p className="mt-1 text-sm text-muted">{current.status}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                CGPA
              </p>
              <p className="mt-1 text-xl font-semibold text-foreground">
                {current.cgpa}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Expected Graduation
              </p>
              <p className="mt-1 text-xl font-semibold text-foreground">
                {current.expectedGraduation}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {prior.map((record) => (
            <div
              key={record.level}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <p className="text-xs uppercase tracking-widest text-muted">
                {record.level}
              </p>
              <p className="mt-1 text-xl font-semibold text-foreground">
                {record.percentage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}