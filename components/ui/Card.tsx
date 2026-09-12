import React, { type ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: "indigo" | "emerald" | "cyan" | "none";
  id?: string;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  glow = "none",
  id
}: CardProps) {
  const glowStyles = {
    none: "",
    indigo: "hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10",
    emerald: "hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10",
    cyan: "hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
  };

  const hoverClasses = hoverEffect
    ? "transition-all duration-300 hover:bg-surface-raised/90 hover:border-border-highlight"
    : "";

  return (
    <div
      id={id}
      className={`rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden ${hoverClasses} ${glowStyles[glow]} ${className}`}
    >
      {children}
    </div>
  );
}
