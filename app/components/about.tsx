import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { DashedBorder } from "./dashed-border";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Container from "./container";
import { H2, P } from "./typography";
import { useTabs } from "@/hooks/use-tabs";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { TabsGroupComponent } = useTabs({
    tabs: [
      {
        title: "Overview",
        content: (
          <>
            <P color="muted">
              I'm a unique professional with expertise in both Supply Chain
              Management and Software Development. With a strong foundation in
              logistics and inventory management, combined with technical skills
              in web development, I bridge the gap between operational
              excellence and technological innovation.
            </P>
            <P color="muted">
              My dual background allows me to understand business challenges
              from multiple perspectives and create technology solutions that
              address real-world supply chain problems.
            </P>
          </>
        ),
      },
      {
        title: "Supply Chain",
        content: (
          <>
            <P color="muted">
              In the supply chain domain, I've managed complex logistics
              operations, optimized inventory systems, and implemented lean
              methodologies to improve efficiency. My experience spans
              procurement, warehousing, distribution, and transportation
              management.
            </P>
            <P color="muted">
              I've successfully led projects that reduced operational costs by
              streamlining processes and leveraging data analytics to make
              informed decisions.
            </P>
          </>
        ),
      },
      {
        title: "Technology",
        content: (
          <>
            <P color="muted">
              As a developer, I specialize in building modern web applications
              using React, Next.js, and TypeScript. I'm passionate about
              creating intuitive user interfaces and robust backend systems that
              solve real business problems.
            </P>
            <P color="muted">
              My technical journey began when I identified opportunities to
              automate supply chain processes, which led me to develop custom
              solutions that significantly improved operational efficiency.
            </P>
          </>
        ),
      },
    ],
    defaultTabTitle: "Overview",
  });

  // const {} = useTabs({
  //   tabs: [
  //     {
  //       title: "Supply Chain",
  //       content: <p>Supply Chain</p>,
  //     },
  //   ],
  //   defaultTabTitle: "Supply Chain2",
  // });
  return (
    // <section id="about" className="bg-muted/30 py-20">
    //   <div
    //     ref={ref}
    //     className={cn(
    // "container mx-auto transform px-4 transition-all duration-700 md:px-6",
    // inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
    //     )}
    //   >
    // <div className="flex flex-col items-center gap-10 md:flex-row">
    //   <div className="md:w-1/2">
    // <DashedBorder className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl p-0 md:mx-0">
    //   <div className="bg-background absolute inset-0.5 overflow-hidden rounded-[calc(0.75rem-1px)]">
    //         <img
    //           src="/placeholder.svg?height=400&width=400"
    // alt="Profile"
    // width={400}
    // height={400}
    // className="h-full w-full object-cover"
    //         />
    //       </div>
    //     </DashedBorder>
    //   </div>
    //       <div className="w-full space-y-6 md:w-1/2">
    //         <h2 className="text-3xl font-bold tracking-tight">About Me</h2>

    //         <div className="w-full overflow-hidden">
    //           {/* <Marquee className="py-4" pauseOnHover speed={20}>
    //         {highlights.map((item, index) => (
    //           <Badge
    //             key={index}
    //             variant="secondary"
    //             className="text-sm py-1 px-3 mx-2 whitespace-nowrap"
    //           >
    //             {item}
    //           </Badge>
    //         ))}
    //       </Marquee> */}
    //         </div>

    //         <Tabs
    //           defaultValue="overview"
    //           className="w-full"
    //           value={activeTab}
    //           onValueChange={setActiveTab}
    //         >
    //           <TabsList className="grid w-full grid-cols-3">
    //             <TabsTrigger value="overview">Overview</TabsTrigger>
    //             <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
    //             <TabsTrigger value="tech">Tech</TabsTrigger>
    //           </TabsList>
    //           <div className="relative mt-4 overflow-hidden">
    //             <TabsContent
    //               value="overview"
    //               className={cn(
    //                 "absolute w-full space-y-4 transition-all duration-300",
    //                 activeTab === "overview"
    //                   ? "relative translate-x-0 opacity-100"
    //                   : activeTab === "supply-chain"
    //                     ? "-translate-x-full opacity-0"
    //                     : "translate-x-full opacity-0",
    //               )}
    //             >
    // <p className="text-muted-foreground">
    //   I'm a unique professional with expertise in both Supply
    //   Chain Management and Software Development. With a strong
    //   foundation in logistics and inventory management, combined
    //   with technical skills in web development, I bridge the gap
    //   between operational excellence and technological innovation.
    // </p>
    // <p className="text-muted-foreground">
    //   My dual background allows me to understand business
    //   challenges from multiple perspectives and create technology
    //   solutions that address real-world supply chain problems.
    // </p>
    //             </TabsContent>
    //             <TabsContent
    //               value="supply-chain"
    //               className={cn(
    //                 "absolute w-full space-y-4 transition-all duration-300",
    //                 activeTab === "supply-chain"
    //                   ? "relative translate-x-0 opacity-100"
    //                   : activeTab === "overview"
    //                     ? "translate-x-full opacity-0"
    //                     : "-translate-x-full opacity-0",
    //               )}
    //             >
    // <p className="text-muted-foreground">
    //   In the supply chain domain, I've managed complex logistics
    //   operations, optimized inventory systems, and implemented
    //   lean methodologies to improve efficiency. My experience
    //   spans procurement, warehousing, distribution, and
    //   transportation management.
    // </p>
    // <p className="text-muted-foreground">
    //   I've successfully led projects that reduced operational
    //   costs by streamlining processes and leveraging data
    //   analytics to make informed decisions.
    // </p>
    //             </TabsContent>
    //             <TabsContent
    //               value="tech"
    //               className={cn(
    //                 "absolute w-full space-y-4 transition-all duration-300",
    //                 activeTab === "tech"
    //                   ? "relative translate-x-0 opacity-100"
    //                   : activeTab === "overview"
    //                     ? "-translate-x-full opacity-0"
    //                     : "translate-x-full opacity-0",
    //               )}
    //             >
    // <p className="text-muted-foreground">
    //   As a developer, I specialize in building modern web
    //   applications using React, Next.js, and TypeScript. I'm
    //   passionate about creating intuitive user interfaces and
    //   robust backend systems that solve real business problems.
    // </p>
    // <p className="text-muted-foreground">
    //   My technical journey began when I identified opportunities
    //   to automate supply chain processes, which led me to develop
    //   custom solutions that significantly improved operational
    //   efficiency.
    // </p>
    //             </TabsContent>
    //           </div>
    //         </Tabs>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="about" className="bg-muted/30 relative">
      <Container
        ref={ref}
        className={cn(
          "flex transform flex-col justify-center gap-10 transition-all duration-700 md:flex-row",
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        <DashedBorder className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl p-0 md:mx-0 md:w-1/2">
          <div className="bg-background absolute inset-0.5 overflow-hidden rounded-[calc(0.75rem-1px)]">
            <img
              src="./profile-photo.png"
              alt="Profile"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </DashedBorder>
        <div className="p-4 md:w-1/2">
          <H2>About Me</H2>
          <TabsGroupComponent className="h-110 py-6" />
          {/* <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs> */}
        </div>
      </Container>

      {/* <Container
        className={cn(
          "text-muted-foreground bg-muted/30 flex transform flex-col items-center gap-10 bg-green-500 transition-all duration-700 md:flex-row",
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
        // className={cn(
        //   "relative z-10 flex transform flex-col items-center justify-center gap-4 transition-all duration-1000",
        //   isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        // )}
      >
        a
      </Container> */}
    </section>
  );
};

export default About;
