import SectionHeading from "@/components/ui/SectionHeading";
import experience from "@/data/experience";

type ExperienceEntry = {
  id: string;
  organization: string;
  duration: string;
  role: string;
  bullets: string[];
};

export default function Experience() {
  const experienceEntries: ExperienceEntry[] = Array.isArray(experience)
    ? (experience as ExperienceEntry[])
    : [];

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've contributed"
          description="Roles across student organizations, in order."
        />

        <ol className="relative border-l border-border pl-8">
          {experienceEntries.map((entry: ExperienceEntry) => {
            return (
              <li key={entry.id} className="mb-10 last:mb-0">
                <span
                  className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent"
                  aria-hidden="true" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {entry.organization}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {entry.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {entry.role}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {entry.bullets.map((bullet: string) => (
                    <li
                      key={bullet}
                      className="text-sm leading-relaxed text-muted sm:text-base"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}