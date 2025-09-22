import React from "react";
import { cn } from "../../utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  children,
  ...props
}) => {
  const base = "inline-block px-3 py-1 text-xs font-semibold";
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-background-alt text-primary border border-primary",
  };
  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};

export default Badge;
