import React from "react";
import { TimelineSection } from "@/components/ui/sections/timeline-section";
import Container from "./container";
import { Card } from "./ui/card";
import { H2, H3, H4, P } from "./typography";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function ExperienceEducation() {
  // const data = [
  //   {
  //     title: "Feb 2023",
  //     content: (
  //       <Card className="p-4">
  //         <div className="flex flex-col-reverse justify-between gap-4 lg:flex-row">
  //           <H2>Automation Analyst</H2>
  //           <div className="flex flex-col justify-center">
  //             <img
  //               src="https://www.bcrf.org/wp-content/uploads/2023/04/ONE-Magenta-Logo-PNG-2-Brandon-Jordan-1024x477.png"
  //               className=""
  //               width={200}
  //               height={200}
  //             />
  //           </div>
  //         </div>
  //       </Card>
  //     ),
  //   },
  //   // {
  //   //   title: "May 2022",
  //   //   content: (
  //   //     <div>
  //   //       <p className="mb-8 text-xs text-neutral-800 md:text-sm dark:text-neutral-200">
  //   //         I usually run out of copy, but when I see content this big, I try to
  //   //         integrate lorem ipsum.
  //   //       </p>
  //   //       <p className="mb-8 text-xs text-neutral-800 md:text-sm dark:text-neutral-200">
  //   //         Lorem ipsum is for people who are too lazy to write copy. But we are
  //   //         not. Here are some more example of beautiful designs I built.
  //   //       </p>
  //   //       <div className="grid grid-cols-2 gap-4">
  //   //         <img
  //   //           src="https://assets.aceternity.com/pro/hero-sections.png"
  //   //           alt="hero template"
  //   //           width={500}
  //   //           height={500}
  //   //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //   //         />
  //   //         <img
  //   //           src="https://assets.aceternity.com/features-section.png"
  //   //           alt="feature template"
  //   //           width={500}
  //   //           height={500}
  //   //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //   //         />
  //   //         <img
  //   //           src="https://assets.aceternity.com/pro/bento-grids.png"
  //   //           alt="bento template"
  //   //           width={500}
  //   //           height={500}
  //   //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //   //         />
  //   //         <img
  //   //           src="https://assets.aceternity.com/cards.png"
  //   //           alt="cards template"
  //   //           width={500}
  //   //           height={500}
  //   //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //   //         />
  //   //       </div>
  //   //     </div>
  //   //   ),
  //   // },
  //   // {
  //   //   title: "Aug 2021",
  //   //   content: (
  //   //     <div>
  //   //       <p className="mb-4 text-xs text-neutral-800 md:text-sm dark:text-neutral-200">
  //   //         Deployed 5 new components on Aceternity today
  //   //       </p>
  //   //       <div className="mb-8">
  //   //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //   //           ✅ Card grid component
  //   //         </div>
  //   //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //   //           ✅ Startup template Aceternity
  //   //         </div>
  //   //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //   //           ✅ Random file upload lol
  //   //         </div>
  //   //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //   //           ✅ Himesh Reshammiya Music CD
  //   //         </div>
  //   //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //   //           ✅ Salman Bhai Fan Club registrations open
  //   //         </div>
  //   //       </div>
  //   //       <div className="grid grid-cols-2 gap-4">
  //   //         <img
  //   //           src="https://assets.aceternity.com/pro/hero-sections.png"
  //   //           alt="hero template"
  //   //           width={500}
  //   //           height={500}
  //   //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //   //         />
  //   //         <img
  //   //           src="https://assets.aceternity.com/features-section.png"
  //   //           alt="feature template"
  //   //           width={500}
  //   //           height={500}
  //   //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //   //         />
  //   //         <img
  //   //           src="https://assets.aceternity.com/pro/bento-grids.png"
  //   //           alt="bento template"
  //   //           width={500}
  //   //           height={500}
  //   //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //   //         />
  //   //         <img
  //   //           src="https://assets.aceternity.com/cards.png"
  //   //           alt="cards template"
  //   //           width={500}
  //   //           height={500}
  //   //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //   //         />
  //   //       </div>
  //   //     </div>
  //   //   ),
  //   // },
  // ];

  const data = [
    {
      title: "Feb 2023",
      content: (
        <Card>
          <div className="flex flex-col justify-between gap-4 px-4 md:flex-row-reverse">
            <div className="flex justify-center">
              <img
                src="./ocean-network-express.png"
                alt="ocean-network-express"
                className="h-fit rounded-md border-1 p-2"
                width={150}
              />
            </div>
            <div className="w-full">
              <H4>Ocean Network Express</H4>
              <Separator className="my-2" />
              <H3>Automation Analyst</H3>
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "May 2022 - Dec 2022",
      content: (
        <Card>
          <div className="flex flex-col justify-between gap-4 px-4 md:flex-row-reverse">
            <div className="flex justify-center">
              <img
                src="./lucid-motors.png"
                alt="lucid-motors"
                className="dark:bg-muted h-fit rounded-md border-1 p-2"
                width={150}
              />
            </div>
            <div className="w-full">
              <H4>Lucid Motors</H4>
              <Separator className="my-2" />
              <H3>Logistics Analyst Intern</H3>
              <H3>Supply Chain Intern</H3>
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "Aug 2021 - Dec 2022",
      content: (
        <Card>
          <div className="flex flex-col justify-between gap-4 px-4 md:flex-row-reverse">
            <div className="flex justify-center">
              <img
                src="./usc-marshall.png"
                alt="usc-marshall"
                className="h-fit rounded-md border-1 bg-white p-2"
                width={200}
              />
            </div>
            <div className="w-full">
              <H4>USC Marshall School of Business</H4>
              <Separator className="my-2" />
              <H3>Master of Science in Global Supply Chain Management</H3>
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "May 2017 - July 2021",
      content: (
        <Card>
          <div className="flex flex-col justify-between gap-4 px-4 md:flex-row-reverse">
            <div className="flex justify-center">
              <img
                src="./pragati-logistics.png"
                alt="pragati-logistics"
                className="h-fit rounded-md border-1 bg-white p-2"
                width={150}
              />
            </div>
            <div className="w-full">
              <H4>Pragati Logistics</H4>
              <Separator className="my-2" />
              <H3>Supply Manager, Operations</H3>
              <H3>Process Analyst, Supply Chain</H3>
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "Aug 2013 - Nov 2017",
      content: (
        <Card>
          <div className="flex flex-col justify-between gap-4 px-4 md:flex-row-reverse">
            <div className="flex justify-center">
              <img
                src="./amity-university.png"
                alt="amity-university"
                className="h-fit rounded-md border-1 bg-white p-2"
                width={150}
              />
            </div>
            <div className="w-full">
              <H4>Amity University, ASET</H4>
              <Separator className="my-2" />
              <H3>
                Bachelor of Technology in Computer Science and Engineering
              </H3>
            </div>
          </div>
        </Card>
      ),
    },
  ];

  return (
    <TimelineSection
      section={{
        sectionId: "experience-education",
        sectionTitle: "Experience & Education",
        sectionContent:
          "My professional journey spans across multiple industries and countries, with a focus on automation, supply chain optimization, and system development.",
      }}
      data={data}
    />
  );
}
