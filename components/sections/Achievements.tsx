import { Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Achievement {
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon 2026",
    description:
      "Selected for the college internal round, addressing real-time public transport tracking for small cities as part of a 6-member team."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition so far"
          description="Early in my journey — this list will grow as I take on more competitions and projects."
        />

        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Award className="text-accent" size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {achievement.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}