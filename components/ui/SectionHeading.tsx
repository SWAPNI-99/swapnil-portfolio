import React, { type ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  badge?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  badge,
  align = "left",
  action,
  className = ""
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6 ${
        isCenter ? "text-center items-center" : ""
      } ${className}`}
    >
      <div className={`max-w-2xl ${isCenter ? "mx-auto" : ""}`}>
        {eyebrow && (
          <div
            className={`flex items-center gap-2 mb-3 ${
              isCenter ? "justify-center" : ""
            }`}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
              aria-hidden="true"
            />
            <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              {eyebrow}
            </p>
            {badge}
          </div>
        )}

        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-4xl text-gradient">
          {title}
        </h2>

        {description && (
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted font-normal">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}