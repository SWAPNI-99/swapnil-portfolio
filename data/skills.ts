export type SkillLevel = "Beginner" | "Intermediate";

export type SkillCategory = {
  category: string;
  items: string[];
};

export type FinanceSkill = {
  area: string;
  level: SkillLevel;
};

import { createElement as h, type ReactNode } from "react";

const skillCategories: SkillCategory[] = [];
const financeSkills: FinanceSkill[] = [];

function Badge({
  children,
  tone = "neutral"
}: {
  children: ReactNode;
  tone?: "neutral" | "info";
}) {
  return h(
    "span",
    { className: `rounded-full px-3 py-1 text-xs ${tone === "info" ? "bg-info/10 text-info" : "bg-muted text-muted-foreground"}` },
    children
  );
}

function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return h(
    "div",
    { className: "mb-10" },
    h("p", { className: "mb-2 text-sm font-semibold uppercase tracking-widest text-accent" }, eyebrow),
    h("h2", { className: "text-3xl font-bold text-foreground" }, title),
    h("p", { className: "mt-3 text-muted-foreground" }, description)
  );
}

const financeLevelTone: Record<SkillLevel, "neutral" | "info"> = {
  Beginner: "neutral",
  Intermediate: "info"
};

export default function Skills() {
  return h("section", { id: "skills", className: "px-6 py-24" },
    h("div", { className: "mx-auto max-w-4xl" },
      h(SectionHeading, { eyebrow: "Skills", title: "What I work with", description: "Grouped by area — reflecting current, honest proficiency rather than exaggerated claims." }),
      h("div", { className: "grid gap-8 sm:grid-cols-2" }, skillCategories.map((category) =>
        h("div", { key: category.category, className: "rounded-xl border border-border bg-surface p-6" },
          h("h3", { className: "mb-4 text-sm font-semibold uppercase tracking-widest text-accent" }, category.category),
          h("div", { className: "flex flex-wrap gap-2" }, category.items.map((item) => h(Badge, { key: item }, item)))
        ))),
      h("div", { className: "mt-10" },
        h("h3", { className: "mb-4 text-sm font-semibold uppercase tracking-widest text-accent" }, "Finance"),
        h("div", { className: "rounded-xl border border-border bg-surface p-6" },
          h("div", { className: "grid gap-3 sm:grid-cols-2" }, financeSkills.map((skill) =>
            h("div", { key: skill.area, className: "flex items-center justify-between gap-3 border-b border-border/60 py-2 last:border-b-0 sm:border-b-0 sm:py-1" },
              h("span", { className: "text-sm text-foreground" }, skill.area),
              h(Badge, { tone: financeLevelTone[skill.level], children: skill.level })
            )))
        )
      )
    )
  );
}