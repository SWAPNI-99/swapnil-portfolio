import React from "react";

export type BadgeTone =
  | "neutral"
  | "success"
  | "warning"
  | "accent"
  | "cyan"
  | "outline";

export interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
  pulseDot?: boolean;
  className?: string;
  size?: "sm" | "md";
}

const toneStyles: Record<BadgeTone, string> = {
  neutral:
    "bg-surface-raised/80 text-muted border-border hover:border-muted-dark/60",
  success:
    "bg-emerald-500/10 text-emerald-300 border-emerald-500/25 hover:border-emerald-500/40",
  warning:
    "bg-amber-500/10 text-amber-300 border-amber-500/25 hover:border-amber-500/40",
  accent:
    "bg-accent/15 text-accent-light border-accent/30 hover:border-accent/50",
  cyan:
    "bg-cyan-500/10 text-cyan-300 border-cyan-500/25 hover:border-cyan-500/40",
  outline:
    "bg-transparent text-muted border-border hover:text-foreground hover:border-border-highlight"
};

const dotStyles: Record<BadgeTone, string> = {
  neutral: "bg-muted",
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  accent: "bg-accent-light",
  cyan: "bg-cyan-400",
  outline: "bg-muted"
};

export default function Badge({
  children,
  tone = "neutral",
  dot = false,
  pulseDot = false,
  size = "sm",
  className = ""
}: BadgeProps) {
  const sizeStyles =
    size === "sm"
      ? "px-2.5 py-0.5 text-xs"
      : "px-3 py-1 text-xs sm:text-sm";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-mono font-medium tracking-tight transition-colors duration-150 ${toneStyles[tone]} ${sizeStyles} ${className}`}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full shrink-0 ${dotStyles[tone]} ${
            pulseDot ? "animate-pulse" : ""
          }`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}