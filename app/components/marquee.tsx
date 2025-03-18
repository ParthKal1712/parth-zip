import React, { useRef, useEffect, useState } from "react";

type MarqueeProps = {
  className?: string;
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  speed?: number;
};

const Marquee: React.FC<MarqueeProps> = ({
  className = "",
  children,
  direction = "left",
  pauseOnHover = false,
  speed = 50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateContentWidth = () => {
      const container = containerRef.current;
      if (container) {
        setContentWidth(container.scrollWidth);
      }
    };

    // Initial measurement
    updateContentWidth();

    // Re-measure on window resize
    window.addEventListener("resize", updateContentWidth);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateContentWidth);
    };
  }, [children]);

  const baseStyles = "flex whitespace-nowrap overflow-hidden";
  const animationDuration = `${contentWidth / speed}s`;
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={`${baseStyles} ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className={`inline-flex whitespace-nowrap ${isPaused ? "animate-none" : ""}`}
        style={{
          animationName: "marquee",
          animationTimingFunction: "linear",
          animationDuration,
          animationDirection,
          animationIterationCount: "infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {children}
        <div className="mx-8 inline-flex whitespace-nowrap">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
