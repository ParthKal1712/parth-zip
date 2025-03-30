import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { H1, H2, P } from "../../typography";
import { cn } from "@/lib/utils";
import { ShootingStars } from "../shooting-stars";
import { StarsBackground } from "../stars-background";

type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

type TimelineSectionProps = {
  starsBackground?: boolean;
  section: {
    sectionId: string;
    sectionTitle: string;
    sectionContent: string;
  };
  data: TimelineEntry[];
  className?: string;
};

export const TimelineSection = ({
  data,
  section: { sectionId, sectionTitle, sectionContent },
  className,
}: TimelineSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id={sectionId} className={cn("relative py-20", className)}>
      <div
        className="w-full bg-white md:px-10 dark:bg-neutral-950"
        key={sectionId}
        ref={containerRef}
      >
        <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
          <div className="m-2 text-center">
            <H1>{sectionTitle}</H1>
            <P>{sectionContent}</P>
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:gap-10 md:pt-40"
            >
              <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black">
                  <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
                </div>
                <h3 className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl dark:text-neutral-500">
                  {item.title}
                </h3>
              </div>

              <div className="relative w-full pr-4 pl-20 md:pl-4">
                <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
            />
          </div>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground starDensity={0.0003} />
    </section>
  );
};
