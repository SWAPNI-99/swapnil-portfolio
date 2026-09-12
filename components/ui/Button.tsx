import Link from "next/link";
import React, { type ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
}

interface ButtonAsLinkProps extends BaseButtonProps {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
  download?: boolean | string;
}

interface ButtonAsActionProps extends BaseButtonProps {
  href?: never;
  external?: never;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  download?: never;
}

export type ButtonProps = ButtonAsLinkProps | ButtonAsActionProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent hover:bg-accent-muted text-white shadow-lg shadow-accent/20 hover:shadow-accent/35 border border-accent/40 active:scale-[0.98]",
  secondary:
    "bg-surface-raised hover:bg-surface-elevated text-foreground border border-border hover:border-border-highlight shadow-sm active:scale-[0.98]",
  outline:
    "bg-transparent hover:bg-surface-raised text-foreground border border-border hover:border-accent/40 active:scale-[0.98]",
  ghost:
    "bg-transparent hover:bg-surface-raised text-muted hover:text-foreground active:scale-[0.98]"
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
  md: "text-sm px-4 py-2.5 rounded-lg gap-2",
  lg: "text-base px-5 py-3 rounded-xl gap-2.5 font-medium"
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    iconLeft,
    iconRight,
    disabled = false
  } = props;

  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

  const combinedStyles = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          download={props.download}
          className={combinedStyles}
        >
          {iconLeft && <span className="shrink-0">{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className="shrink-0">{iconRight}</span>}
        </a>
      );
    }

    return (
      <Link href={props.href} className={combinedStyles}>
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
}