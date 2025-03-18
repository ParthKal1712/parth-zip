import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "muted" | "accent";
};

const COLOR_TW_MAP = {
  primary: "text-primary",
  secondary: "text-secondary",
  muted: "text-muted-foreground",
  accent: "text-accent",
};

export const H1 = ({
  children,
  className,
  color = "primary",
}: TypographyProps) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        COLOR_TW_MAP[color],
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  className,
  color = "primary",
  underline = false,
}: TypographyProps & {
  underline?: boolean;
}) => {
  return (
    <h2
      className={cn(
        "scroll-m-20pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        underline ? "border-b" : "",
        COLOR_TW_MAP[color],
        className,
      )}
    >
      {children}
    </h2>
  );
};

export const P = ({
  children,
  className,
  color = "primary",
}: TypographyProps) => {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6",
        COLOR_TW_MAP[color],
        className,
      )}
    >
      {children}
    </p>
  );
};
