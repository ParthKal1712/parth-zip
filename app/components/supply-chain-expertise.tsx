import {
  BarChart,
  BarChart3,
  ClipboardList,
  PackageCheck,
  TrendingUp,
  Truck,
} from "lucide-react";
import SmallCardShowcase from "@/components/ui/sections/small-card-showcase-section";

const SupplyChainExpertise = () => {
  const cardsList = [
    {
      title: "Inventory Management",
      content:
        "Optimized inventory levels across multiple warehouses, reducing carrying costs by 15% while maintaining service levels.",
      icon: PackageCheck,
    },
    {
      title: "Logistics Optimization",
      content:
        "Redesigned distribution network and carrier selection process, resulting in a 12% reduction in transportation costs.",
      icon: Truck,
    },
    {
      title: "Demand Forecasting",
      content:
        "Implemented statistical forecasting models that improved forecast accuracy by 20%, reducing stockouts and excess inventory.",
      icon: TrendingUp,
    },
    {
      title: "Supply Chain Analytics",
      content:
        "Developed KPI dashboards and reporting systems that provided real-time visibility into supply chain performance.",
      icon: BarChart,
    },
    {
      title: "Process Improvement",
      content:
        "Led lean initiatives that streamlined warehouse operations, increasing throughput by 25% without additional resources.",
      icon: BarChart3,
    },
    {
      title: "Vendor Management",
      content:
        "Established supplier performance metrics and review processes that improved on-time delivery from 82% to 95%.",
      icon: ClipboardList,
    },
  ];

  return (
    <SmallCardShowcase
      starsBackground
      section={{
        sectionId: "supply-chain-expertise",
        sectionTitle: "Supply Chain Expertise",
        sectionContent:
          "With years of experience in supply chain management, I've developed expertise in optimizing operations, reducing costs, and improving service levels across various industries.",
        variant: "inverted",
      }}
      cards={{
        cardsList,
      }}
    />
  );
};

export default SupplyChainExpertise;
