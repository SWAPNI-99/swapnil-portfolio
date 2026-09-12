import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="About"
          title="Who I am"
          description="A brief look at my background, focus areas, and what draws me toward technology and finance."
        />

        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.about.summary}
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
              Primary Focus
            </h3>
            <ul className="space-y-2">
              {profile.about.focusAreas.map((area) => (
                <li
                  key={area}
                  className="text-sm text-foreground sm:text-base"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
              Secondary Interests
            </h3>
            <ul className="space-y-2">
              {profile.about.secondaryInterests.map((interest) => (
                <li
                  key={interest}
                  className="text-sm text-foreground sm:text-base"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-surface p-6">
          <p className="text-sm text-muted">
            Currently studying{" "}
            <span className="text-foreground">
              {profile.education.current.degree}
            </span>{" "}
            in{" "}
            <span className="text-foreground">
              {profile.education.current.branch}
            </span>{" "}
            at{" "}
            <span className="text-foreground">
              {profile.education.current.institution}
            </span>{" "}
            — {profile.education.current.status}.
          </p>
        </div>
      </div>
    </section>
  );
}