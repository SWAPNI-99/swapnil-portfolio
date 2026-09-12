import Link from "next/link";
import type { ReactNode } from "react";

interface BaseButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  external?: boolean;
  onClick?: never;
}

interface ButtonAsAction extends BaseButtonProps {
  href?: never;
  external?: never;
  onClick: () => void;
}

type ButtonProps = ButtonAsLink | ButtonAsAction;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<"primary" | "secondary", string> = {
  primary: "bg-accent text-white hover:bg-accent-muted",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-raised"
};

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className={combinedStyles}>
      {children}
    </button>
  );
}