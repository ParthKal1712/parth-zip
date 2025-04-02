import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2Icon,
  ServerIcon,
  TruckIcon,
  BarChartIcon,
  BadgeIcon as CertificateIcon,
} from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Container from "./container";

const supplyChainSkills = [
  "Supply Chain Management",
  "Logistics Operations",
  "Inventory Management",
  "3PL Management",
  "ERP Systems",
  "Process Optimization",
  "Supplier Management",
  "Demand Planning",
  "Lean Six Sigma",
  "Project Management",
];

const technologies = [
  "PostgreSQL",
  "MySQL",
  "Redis",
  "UiPath",
  "NestJS",
  "Django",
  "React",
  "Next.js",
  "TypeScript",
  "MongoDB",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "SendGrid",
  "Tailwind CSS",
  "Git",
  "Coolify",
  "EDI",
  "SAP S/4HANA",
  "Power BI",
  "Tableau",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/30 py-20">
      <Container>
        <div className="bg-accent rounded-md border-1 border-dashed px-2 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Skills & Expertise
            </h2>
            <div className="bg-primary mx-auto mb-6 h-1 w-20"></div>
            <p className="text-foreground/80 mx-auto max-w-2xl">
              My diverse skill set spans technical development, automation, and
              supply chain management, allowing me to bridge the gap between
              business needs and technical solutions.
            </p>
          </motion.div>
          <div>
            <InfiniteMovingCards
              items={technologies}
              direction="right"
              speed="slow"
            />
          </div>
          <div>
            <InfiniteMovingCards
              items={supplyChainSkills}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
