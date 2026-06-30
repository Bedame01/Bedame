import image1 from '@/public/images/Creative Graphic Design Workspace.png'
import image2 from '@/public/images/DIGRESSION - Alex Diaconu.jpeg'
import image3 from '@/public/images/Focused Workspace.png'
import image4 from '@/public/images/Gemini_Generated_Image_ge5loge5loge5log.png'
import { StaticImageData } from 'next/image';

export type Project = {
  slug: string;
  title: string;
  year: string;
  client: string;
  services: string[];
  excerpt: string;
  description: string[];
  color: string;
  image: StaticImageData;
  link: string;
  role: string;
  duration: string;
  tools: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "Fiz Cap",
    title: "Fiz Cap",
    year: "2024",
    client: "Fiz Cap",
    services: ["Branding", "Website"],
    excerpt: "Full rebranding for a tech startup aiming to disrupt.",
    description: [
      "The Fiz Cap project involved a full rebranding initiative for a tech startup aiming to disrupt the logistics industry.",
      "We began with an in-depth market analysis, identifying key differentiators and positioning Fiz Cap as an innovative leader in its space. Our team worked closely with the client to craft a unique brand identity that resonated with both investors and customers.",
      "From logo design to typography and messaging, every element was designed to reflect Fiz Cap's cutting-edge technology. Post-launch, Fiz Cap experienced a significant increase in brand visibility and engagement.",
    ],
    color: "#1a1a1a",
    image: image1,
    link: "/",
    role: "Lead Designer & Developer",
    duration: "8 weeks",
    tools: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Complete brand identity system",
      "40% increase in brand engagement",
      "Responsive web platform launch",
    ],
  },
  {
    slug: "kanba",
    title: "H100 Lounge & Bar",
    year: "2024",
    client: "Kanba",
    services: ["UI/UX", "Website"],
    excerpt: "Digital product design for a modern productivity platform.",
    description: [
      "Kanba needed a digital experience that matched the sophistication of their productivity tools. We designed an intuitive interface that simplifies complex workflows.",
      "Through user research and iterative prototyping, we created a seamless experience that increased user retention by 40% within the first quarter after launch.",
    ],
    color: "#1c1c1c",
    image: image2,
    link: "/",
    role: "UI/UX Designer",
    duration: "6 weeks",
    tools: ["Figma", "Adobe XD", "React", "CSS"],
    highlights: [
      "End-to-end product design",
      "40% boost in user retention",
      "Streamlined booking experience",
    ],
  },
  {
    slug: "utosia",
    title: "Utosia",
    year: "2023",
    client: "Utosia",
    services: ["Branding", "Strategy"],
    excerpt: "Brand identity for a sustainable lifestyle company.",
    description: [
      "Utosia approached us to develop a brand that communicates sustainability without sacrificing premium appeal. We crafted a visual language rooted in organic forms and earthy tones.",
      "The result was a cohesive brand system that elevated Utosia's market position and resonated deeply with environmentally conscious consumers.",
    ],
    color: "#2a2a2a",
    image: image3,
    link: "/",
    role: "Brand Strategist & Designer",
    duration: "10 weeks",
    tools: ["Illustrator", "Photoshop", "InDesign", "Figma"],
    highlights: [
      "Full brand guidelines delivered",
      "Premium sustainable positioning",
      "Packaging & collateral system",
    ],
  },
  {
    slug: "goldline",
    title: "Goldline",
    year: "2023",
    client: "Goldline",
    services: ["Website", "Branding"],
    excerpt: "Luxury real estate brand and digital presence.",
    description: [
      "Goldline required a digital presence that reflected the exclusivity of their properties. We designed a refined website with cinematic imagery and elegant typography.",
      "The new brand identity and website helped Goldline attract high-net-worth clients and close record sales in their target markets.",
    ],
    color: "#3d3522",
    image: image4,
    link: "/",
    role: "Creative Director",
    duration: "12 weeks",
    tools: ["Webflow", "Figma", "After Effects", "Photoshop"],
    highlights: [
      "Luxury digital experience",
      "Record property inquiries",
      "Cinematic visual storytelling",
    ],
  },

];

// export const projects2: Project[] = [
//   {
//     slug: "utosia",
//     title: "Utosia",
//     year: "2023",
//     client: "Utosia",
//     services: ["Branding", "Strategy"],
//     excerpt: "Brand identity for a sustainable lifestyle company.",
//     description: [
//       "Utosia approached us to develop a brand that communicates sustainability without sacrificing premium appeal. We crafted a visual language rooted in organic forms and earthy tones.",
//       "The result was a cohesive brand system that elevated Utosia's market position and resonated deeply with environmentally conscious consumers.",
//     ],
//     color: "#4a3728",
//      image: image3,
//      link: '/'
//   },
//   {
//     slug: "goldline",
//     title: "Goldline",
//     year: "2023",
//     client: "Goldline",
//     services: ["Website", "Branding"],
//     excerpt: "Luxury real estate brand and digital presence.",
//     description: [
//       "Goldline required a digital presence that reflected the exclusivity of their properties. We designed a refined website with cinematic imagery and elegant typography.",
//       "The new brand identity and website helped Goldline attract high-net-worth clients and close record sales in their target markets.",
//     ],
//     color: "#3d3522",
//     image: image4,
//     link: '/'
//   },
// ];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
