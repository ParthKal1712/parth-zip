import type React from "react";
import { cn } from "@/lib/utils";

interface DashedBorderProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "muted";
  animate?: boolean;
}

export function DashedBorder({
  className,
  children,
  variant = "primary",
  animate = false,
}: DashedBorderProps) {
  const variantStyles = {
    primary: "border-primary/50",
    secondary: "border-secondary/50",
    muted: "border-muted-foreground/30",
  };

  return (
    <div
      className={cn(
        "relative rounded-lg border border-dashed p-0.5",
        variantStyles[variant],
        animate && "animate-pulse",
        className,
      )}
    >
      {children}
    </div>
  );
}
