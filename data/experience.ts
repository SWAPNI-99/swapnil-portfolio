import SectionHeading from "@/components/ui/SectionHeading";
import { createElement, type ReactElement } from "react";

const experienceData = [
  {
    id: "1",
    organization: "Student Organization",
    role: "Team Lead",
    duration: "2023 — Present",
    bullets: ["Contributed to the organization's mission and operations."],
  },
] as const;

export default function Experience(): ReactElement {
  return createElement(
    "section",
    { id: "experience", className: "px-6 py-24" },
    createElement(
      "div",
      { className: "mx-auto max-w-3xl" },
      createElement(SectionHeading, {
        eyebrow: "Experience",
        title: "Where I've contributed",
        description: "Roles across student organizations, in order.",
      }),
      createElement(
        "ol",
        { className: "relative border-l border-border pl-8" },
        experienceData.map((entry: (typeof experienceData)[number]) =>
          createElement(
            "li",
            { key: entry.id, className: "mb-10 last:mb-0" },
            createElement("span", {
              className:
                "absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent",
              "aria-hidden": "true",
            }),
            createElement(
              "div",
              {
                className:
                  "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
              },
              createElement(
                "h3",
                { className: "text-lg font-semibold text-foreground" },
                entry.organization,
              ),
              createElement(
                "span",
                {
                  className:
                    "font-mono text-xs uppercase tracking-widest text-muted",
                },
                entry.duration,
              ),
            ),
            createElement(
              "p",
              { className: "mt-1 text-sm font-medium text-accent" },
              entry.role,
            ),
            createElement(
              "ul",
              { className: "mt-3 space-y-1.5" },
              entry.bullets.map((bullet: string) =>
                createElement(
                  "li",
                  {
                    key: bullet,
                    className:
                      "text-sm leading-relaxed text-muted sm:text-base",
                  },
                  bullet,
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}