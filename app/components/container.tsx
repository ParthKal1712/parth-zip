import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { TOPBAR_MARGIN } from "./top-bar";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  responsiveMargins?: boolean;
  disableVerticalPadding?: boolean;
  disableHorizontalPadding?: boolean;
  addTopbarMargin?: boolean;
  occupyScreenHeight?: boolean;
  ref?: (node?: Element | null) => void;
};

const Container = ({
  children,
  className,
  responsiveMargins = true,
  disableVerticalPadding = false,
  disableHorizontalPadding = false,
  addTopbarMargin = false,
  occupyScreenHeight = false,
  ...props
}: ContainerProps) => {
  return (
    <div
      ref={!!props.ref ? props.ref : undefined}
      className={cn(
        responsiveMargins ? "container" : "",
        "mx-auto",
        addTopbarMargin ? TOPBAR_MARGIN : "",
        occupyScreenHeight ? "h-[calc(100vh-64px)]" : "",
        // disableContentPadding ? "" : "p-4 md:p-6",
        disableVerticalPadding ? "" : "py-4 md:py-6",
        disableHorizontalPadding ? "" : "px-4 md:px-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
