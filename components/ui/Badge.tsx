export type BadgeTone = "neutral" | "success" | "warning" | "info";

interface BadgeProps {
  children: string;
  tone?: BadgeTone;
}

const toneStyles: Record<BadgeTone, string> = {
  neutral: "bg-surface-raised text-muted border-border",
  success: "bg-accent/10 text-accent border-accent/30",
  warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  info: "bg-sky-500/10 text-sky-400 border-sky-500/30"
};

export default function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}