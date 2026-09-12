import { Code2, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import leetCodeStats from "@/data/skills";

const stats = (typeof leetCodeStats === "function"
  ? undefined
  : (leetCodeStats as any)) ?? {
  totalSolved: 0,
  easy: 0,
  medium: 0,
  hard: 0,
  profileUrl: "#",
};

export default function Coding() {
  return (
    <section id="coding" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Coding Practice"
          title="LeetCode"
          description="Building consistency with data structures and algorithms."
        />

        <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <Code2 className="text-accent" size={22} />
            <p className="text-3xl font-semibold text-foreground">
              {stats.totalSolved}
              <span className="ml-2 text-base font-normal text-muted">
                problems solved
              </span>
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <p className="text-2xl font-semibold text-emerald-400">
                {stats.easy}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted">
                Easy
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-amber-400">
                {stats.medium}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted">
                Medium
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-rose-400">
                {stats.hard}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted">
                Hard
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Button href={stats.profileUrl} external variant="secondary">
              View Profile <ExternalLink size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}