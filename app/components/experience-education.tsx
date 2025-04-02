import React from "react";
import { TimelineSection } from "@/components/ui/sections/timeline-section";
import Container from "./container";
import { Card } from "./ui/card";
import { H2, H3, H4, P } from "./typography";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { BriefcaseBusiness } from "lucide-react";
import { Badge } from "./ui/badge";

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
      title: "Aug 2024",
      content: (
        <Card>
          <div className="flex flex-col justify-between gap-4 px-4 md:flex-row-reverse">
            <div className="flex justify-center">
              <img
                src="./pmi-logo.png"
                alt="pmi-logo"
                className="h-fit rounded-md border-1 bg-white p-2"
                width={150}
              />
            </div>
            <div className="w-full">
              <H4>🎓 Project Management Institute</H4>
              <Separator className="my-2" />
              <H3>Project Management Professional (PMP)</H3>
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "Feb 2024",
      content: (
        <Card>
          <div className="flex flex-col justify-between gap-4 px-4 md:flex-row-reverse">
            <div className="flex justify-center">
              <img
                src="./ascm-logo.png"
                alt="ascm-logo"
                className="h-fit rounded-md border-1 bg-white p-1"
                width={150}
              />
            </div>
            <div className="w-full">
              <H4>🎓 Association for Supply Chain Management</H4>
              <Separator className="my-2" />
              <H3>Certified Supply Chain Professional (CSCP)</H3>
            </div>
          </div>
          <div>
            <div className="w-full px-4">
              <div className="flex flex-wrap gap-4">
                {[
                  "Supply Chains, Demand Management and Forecasting",
                  "Global Supply Chain Networks",
                  "Sourcing Products and Services",
                  "Internal Operations and Inventory",
                  "Forward and Reverse Logistics",
                  "Supply Chain Relationships",
                  "Supply Chain Risk",
                  "Optimization, Sustainability and Technology",
                ].map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="text-sm text-wrap"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ),
    },
    {
      title: "Feb 2023 - Present",
      content: (
        <Card>
          <div className="flex flex-col justify-between gap-4 px-4 md:flex-row-reverse">
            <div className="flex justify-center">
              <img
                src="./ocean-network-express.png"
                alt="ocean-network-express"
                className="h-fit rounded-md border-1 bg-white p-2"
                width={150}
              />
            </div>
            <div className="w-full">
              <H4>💼 Ocean Network Express</H4>
              <Separator className="my-2" />
              <H3>Automation Analyst</H3>
            </div>
          </div>
          <div className="w-full px-4">
            <ul className="flex flex-col gap-3">
              <li>
                - Implemented centralized documentation for Automations across
                the NA org., thus monitoring savings and inefficiencies in real
                time.
              </li>
              <li>
                - Re-engineered business processes across various verticals such
                as Legal, Sales, Finance, Ops, and more.
              </li>
              <li>
                - Integrated various supply chain solutions using tools like
                UiPath (RPA), Sendgrid (Mass Emails), EDI, REST APIs, Google
                Scripts etc.
              </li>
            </ul>
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
                className="h-fit rounded-md border-1 bg-white p-2"
                width={150}
              />
            </div>
            <div className="w-full">
              <H4>💼 Lucid Motors</H4>
              <Separator className="my-2" />
              <H3>Supply Chain Intern</H3>
            </div>
          </div>
          <div className="w-full px-4">
            <ul className="flex flex-col gap-3">
              <li>
                - Managed RFx and Reverse bidding process for the procurement of
                a VAN Service Provider.
              </li>
              <li>
                - Implemented EDI communication and material labelling following
                the AIAG standards.
              </li>
              <li>
                - Collaborated with the 4PL service provider and suppliers to
                increase ASN compliance from 29% to 65% over 6 months.
              </li>
            </ul>
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
              <H4>🎓 USC Marshall School of Business</H4>
              <Separator className="my-2" />
              <H3>Master of Science in Global Supply Chain Management</H3>
            </div>
          </div>
          <div className="w-full px-4">
            <ul className="flex flex-col gap-3">
              <li>
                - Vice President (Student Affairs), Global Supply Chain Club
              </li>
              <li>- Earned Certification: Lean Six Sigma - Green Belt</li>
              <li>
                - Relevant Coursework:{" "}
                <div className="mt-2 ml-6 flex flex-wrap gap-4">
                  {[
                    "Operations Management",
                    "Supplier Management",
                    "Negotiation & Deal Making",
                    "Enterprise Systems (ERP)",
                  ].map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="text-sm text-wrap"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </li>
            </ul>
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
              <H4>💼 Pragati Logistics</H4>
              <Separator className="my-2" />
              <H3>Supply Manager, Operations</H3>
            </div>
          </div>
          <div className="w-full px-4">
            <ul className="flex flex-col gap-3">
              <li>
                - Managed 3PL supply chains for automotive manufacturers,
                including logistics, warehousing and production line
                fulfillment.
              </li>
              <li>
                - Collaborated cross-functionally to develop collapsible frames
                to safely carry axle housings, gears, and engine blocks across
                India.
              </li>
            </ul>
            <H3 className="mt-10">Process Analyst, Supply Chain</H3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                - Used Google Sheets and Scripts to develop easy-to-use tools to
                manage maintenance, expense and location reporting of ~250
                trucks pan-India.
              </li>
              <li>
                - Created a system to record and analyse fuel consumption using
                fuel receipts and odometer data to monitor driver performance,
                maximize fuel efficiency and minimize service times.
              </li>
            </ul>
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
              <H4>🎓 Amity University, ASET</H4>
              <Separator className="my-2" />
              <H3>
                Bachelor of Technology in Computer Science and Engineering
              </H3>
            </div>
          </div>
          <div className="w-full px-4">
            <ul className="flex flex-col gap-3">
              <li>
                - Relevant Coursework:{" "}
                <div className="mt-2 ml-6 flex flex-wrap gap-4">
                  {[
                    "Object Oriented Programming",
                    "System Designs and Distributed Systems",
                    "Cyber and Information Security",
                    "Data Structures and Algorithms",
                    "Database Management Systems",
                  ].map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="text-sm text-wrap"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                {/* <ul className="ml-10">
                  <li>Object Oriented Programming</li>
                  <li>System Designs and Distributed Systems</li>
                  <li>Cyber and Information Security</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Database Management Systems</li>
                </ul> */}
              </li>
            </ul>
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
