import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "white";
type ButtonSize = "sm" | "md" | "lg";


const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-strong text-primary-foreground hover:bg-primary-ink active:bg-primary-ink",
  outline:
    "border border-primary-ink text-primary-ink hover:bg-primarylight active:bg-orange-20",
  white: "bg-white text-coolgrey-90 hover:bg-coolgrey-10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 py-2 text-xs xl:text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition disabled:pointer-events-none disabled:opacity-60";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
};

type LinkProps = SharedProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children"> & {
    href: string;
    external?: boolean;
  };

type ActionProps = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
    external?: never;
  };

export type ButtonProps = LinkProps | ActionProps;


export function Button(props: ButtonProps) {
  const { variant = "primary", size = "lg", className, children } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (props.href !== undefined) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { type = "button", variant: _v, size: _s, className: _c, children: _ch, external: _e, href: _h, ...rest } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
