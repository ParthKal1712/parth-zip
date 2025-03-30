import {
  Code,
  Database,
  Globe,
  Layers,
  Server,
  Smartphone,
} from "lucide-react";
import SmallCardShowcase from "@/components/ui/sections/small-card-showcase-section";

const TechExpertise = () => {
  const cardsList = [
    {
      title: "Frontend Development",
      content:
        "Building responsive and intuitive user interfaces using React, Next.js, and modern CSS frameworks like Tailwind.",
      icon: Globe,
      badges: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Redux",
      ],
    },
    {
      title: "Backend Development",
      content:
        "Creating robust APIs and server-side applications with Node.js, Express, and various database technologies.",
      icon: Server,
      badges: [
        "Node.js",
        "Express",
        "NestJS",
        "REST APIs",
        "GraphQL",
        "Microservices",
      ],
    },
    {
      title: "Database Management",
      content:
        "Designing and optimizing database schemas, queries, and data models for performance and scalability.",
      icon: Database,
      badges: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Supabase", "Redis"],
    },
    {
      title: "Mobile Development",
      content:
        "Developing cross-platform mobile applications that provide native-like experiences on both iOS and Android.",
      icon: Smartphone,
      badges: [
        "React Native",
        "Expo",
        "Progressive Web Apps",
        "Mobile-First Design",
      ],
    },
    {
      title: "DevOps & Deployment",
      content:
        "Setting up CI/CD pipelines, containerization, and cloud infrastructure for reliable application deployment.",
      icon: Layers,
      badges: ["Docker", "GitHub Actions", "Vercel", "AWS", "Netlify", "CI/CD"],
    },
    {
      title: "Supply Chain Software",
      content:
        "Developing specialized applications for inventory management, logistics tracking, and supply chain visibility.",
      icon: Code,
      badges: [
        "ERP Integration",
        "Inventory Systems",
        "Logistics Software",
        "Data Visualization",
      ],
    },
  ];
  return (
    <SmallCardShowcase
      section={{
        sectionId: "tech-expertise",
        sectionTitle: "Tech Expertise",
        sectionContent:
          "My technical skills span frontend and backend development, with a focus on creating efficient, scalable, and user-friendly applications.",
      }}
      cards={{
        cardsList,
      }}
      className="bg-muted/30"
    />
  );
};

export default TechExpertise;
