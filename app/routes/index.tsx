// app/routes/index.tsx
import * as fs from "node:fs";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import Hero from "@/components/hero";
import { useDialog } from "@/hooks/use-dialog";
import About from "@/components/about";
import Marquee from "@/components/marquee";
import SupplyChainExpertise from "@/components/supply-chain-expertise";
import TechExpertise from "@/components/tech-expertise";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ExperienceEducation } from "@/components/experience-education";
import SkillsSection from "@/components/skills-section";

// const filePath = "count.txt";

// async function readCount() {
//   return parseInt(
//     await fs.promises.readFile(filePath, "utf-8").catch(() => "0"),
//   );
// }

// const getCount = createServerFn({
//   method: "GET",
// }).handler(() => {
//   return readCount();
// });

// const updateCount = createServerFn({ method: "POST" })
//   .validator((d: number) => d)
//   .handler(async ({ data }) => {
//     const count = await readCount();
//     await fs.promises.writeFile(filePath, `${count + data}`);
//   });

export const Route = createFileRoute("/")({
  component: Home,
  // loader: async () => await getCount(),
});

function Home() {
  // const router = useRouter();
  // const state = Route.useLoaderData();

  return (
    <div className="mt-16 h-fit">
      <Hero />
      <About />
      <SkillsSection />
      <ExperienceEducation />
      <TechExpertise />
      <SupplyChainExpertise />
    </div>
  );
}
