import { Users, TrendingUp, Target } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { equityMinds } from "@/experience";

export default function EquityMinds() {
  return (
    <section id="equity-minds" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Founder"
          title={equityMinds.organization}
          description={equityMinds.purpose}
        />

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-5">
            <Users className="text-accent" size={20} />
            <p className="mt-3 text-2xl font-semibold text-foreground">
              {equityMinds.teamSize}
            </p>
            <p className="text-sm text-muted">Team members</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <TrendingUp className="text-accent" size={20} />
            <p className="mt-3 text-sm font-semibold text-foreground">
              {equityMinds.founded}
            </p>
            <p className="text-sm text-muted">Founded</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <Target className="text-accent" size={20} />
            <p className="mt-3 text-sm font-semibold text-foreground">
              {equityMinds.position}
            </p>
            <p className="text-sm text-muted">Role</p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
              Activities
            </h3>
            <div className="flex flex-wrap gap-2">
              {equityMinds.activities.map((activity) => (
                <Badge key={activity}>{activity}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
              My Contributions
            </h3>
            <ul className="space-y-2">
              {equityMinds.contributions.map((contribution) => (
                <li
                  key={contribution}
                  className="text-sm text-foreground sm:text-base"
                >
                  {contribution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Long-Term Vision
          </h3>
          <p className="text-sm leading-relaxed text-foreground sm:text-base">
            {equityMinds.longTermVision}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {equityMinds.nearTermGoal}
          </p>
        </div>
      </div>
    </section>
  );
}