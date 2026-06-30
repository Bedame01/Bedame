export type ToolCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
};

export type Skill = {
  name: string;
  level: number;
  category: string;
};

export const toolCategories: ToolCategory[] = [
  {
    id: "design",
    title: "Design",
    subtitle: "Tools",
    description:
      "Crafting visual identities, layouts, and brand assets with industry-standard creative software.",
    tools: [
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "Canva",
      "InDesign",
      "CorelDRAW",
    ],
  },
  {
    id: "development",
    title: "Development",
    subtitle: "Stack",
    description:
      "Building fast, responsive, and scalable websites with modern frameworks and platforms.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Webflow",
      "Framer",
      "WordPress",
    ],
  },
  {
    id: "creative",
    title: "Creative",
    subtitle: "Services",
    description:
      "End-to-end production for print, documents, and e-commerce experiences.",
    tools: [
      "Logo Design",
      "Brand Guidelines",
      "E-commerce",
      "Document Editing",
      "Print Design",
      "UI/UX Prototyping",
    ],
  },
];

export const coreSkills: Skill[] = [
  { name: "Web Development", level: 95, category: "Development" },
  { name: "UI/UX Design", level: 90, category: "Design" },
  { name: "Brand Identity", level: 92, category: "Design" },
  { name: "Graphic Design", level: 88, category: "Creative" },
  { name: "E-commerce Solutions", level: 85, category: "Development" },
  { name: "Responsive Design", level: 94, category: "Development" },
];
