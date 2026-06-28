import { BatteryCharging, Building2, Cog, Cpu, Factory, Network, Wind, type LucideIcon } from "lucide-react";

export interface Topic {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const topics: Topic[] = [
  {
    title: "Renewable Energy",
    description: "Wind, solar, and the systems generating clean power.",
    icon: Wind,
  },
  {
    title: "Infrastructure",
    description: "The physical networks connecting energy to the world.",
    icon: Building2,
  },
  {
    title: "Megaprojects",
    description: "Engineering at a scale that reshapes landscapes and economies.",
    icon: Factory,
  },
  {
    title: "Engineering",
    description: "The technical disciplines behind every major build.",
    icon: Cog,
  },
  {
    title: "Electric Grid",
    description: "How power moves from generation to your home.",
    icon: Network,
  },
  {
    title: "Energy Storage",
    description: "Batteries and systems built to store tomorrow's power.",
    icon: BatteryCharging,
  },
  {
    title: "Future Technology",
    description: "Emerging innovations shaping the next era of energy.",
    icon: Cpu,
  },
];
