export type ServiceItem = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

export const homeServices: ServiceItem[] = [
  {
    title: "Branding",
    subtitle: "Strategy",
    description:
      "Strong & cohesive brand identity to connect with your audience.",
    tags: [
      "Branding Services",
      "Brand Discovery",
      "Brand Positioning",
      "Visual Identity Design",
      "Brand Guidelines",
    ],
  },
  {
    title: "Website",
    subtitle: "Design",
    description:
      "Custom & responsive websites that engage users and drive conversions.",
    tags: [
      "Website Services",
      "Website Design",
      "Framer",
      "Website Support",
      "Webflow",
    ],
  },
  {
    title: "UI/UX",
    subtitle: "Design",
    description:
      "User experience through intuitive and user-centered design solutions.",
    tags: [
      "UI/UX Services",
      "User Research",
      "Wireframing",
      "Usability Testing",
      "UI/UX Audits",
    ],
  },
];

export type ServiceDetail = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: { title: string; description: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    id: "brand",
    title: "Brand",
    subtitle: "Strategy",
    description:
      "We create compelling brand identities that resonate with your audience, helping you establish a strong presence and foster meaningful connections.",
    items: [
      {
        title: "Brand Discovery & Research",
        description:
          "In-depth brand discovery and research help us understand your business, target audience, and market landscape.",
      },
      {
        title: "Logo & Visual Identity Design",
        description:
          "We craft unique logos complemented by a cohesive visual identity, including color palettes, typography, and graphics.",
      },
      {
        title: "Brand Messaging & Positioning",
        description:
          "We develop compelling brand messaging and positioning strategies that resonate with your target audience.",
      },
      {
        title: "Brand Guidelines Creation",
        description:
          "Detailed guidelines outline the proper use of your logo, typography, colors, imagery, and messaging.",
      },
    ],
  },
  {
    id: "website",
    title: "Website",
    subtitle: "Design",
    description:
      "Our website design services focus on crafting visually stunning, user-friendly sites that effectively communicate your brand.",
    items: [
      {
        title: "Custom Website Design",
        description:
          "Unique, visually appealing websites tailored to your brand identity with intuitive navigation.",
      },
      {
        title: "Framer Development",
        description:
          "Interactive and dynamic web experiences built with Framer's powerful tools.",
      },
      {
        title: "Webflow Development",
        description:
          "Custom, responsive sites using Webflow's intuitive platform for seamless content updates.",
      },
      {
        title: "Website Maintenance & Support",
        description:
          "Comprehensive maintenance to ensure your site remains secure, up-to-date, and fully functional.",
      },
    ],
  },
  {
    id: "uiux",
    title: "UI/UX",
    subtitle: "Design",
    description:
      "We enhance user experiences through intuitive UI/UX design, ensuring seamless interactions that delight users.",
    items: [
      {
        title: "User Research & Personas Development",
        description:
          "Understanding your target audience through interviews, surveys, and analysis.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Low-fidelity wireframes and interactive prototypes to map out user flows and layouts.",
      },
      {
        title: "Usability Testing & Analysis",
        description:
          "Evaluate how real users interact with your product to identify pain points.",
      },
      {
        title: "UI/UX Audits & Redesigns",
        description:
          "Comprehensive audits to assess your existing product's effectiveness and revitalize the experience.",
      },
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding Your Unique Needs.",
    description:
      "We immerse ourselves in your brand's vision, goals, and target audience through collaborative discussions and research.",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Crafting Innovative Solutions.",
    description:
      "We translate insights into visually captivating designs through wireframes, prototypes, and mockups.",
  },
  {
    number: "03",
    title: "Development",
    subtitle: "Bringing Ideas to Life.",
    description:
      "We transform approved designs into fully functional websites using the latest technologies.",
  },
  {
    number: "04",
    title: "Launch & Support",
    subtitle: "Seamless Deployment and Beyond.",
    description:
      "We launch your project with precision and provide ongoing support and maintenance.",
  },
];

export const awards = [
  {
    category: "Branding",
    subtitle: "Awards",
    items: [
      { name: "Brand Excellence Awards", year: "2024" },
      { name: "Iconic Identity Awards", year: "2024" },
      { name: "Visionary Brand Honors", year: "2023" },
      { name: "Golden Mark Awards", year: "2023" },
    ],
  },
  {
    category: "Website",
    subtitle: "Awards",
    items: [
      { name: "Digital Masterpiece Awards", year: "2024" },
      { name: "Web Excellence Awards", year: "2024" },
      { name: "Pixel Perfection Honors", year: "2022" },
    ],
  },
  {
    category: "UI/UX",
    subtitle: "Awards",
    items: [
      { name: "User Experience Excellence Awards", year: "2024" },
      { name: "Intuitive Interface Awards", year: "2024" },
      { name: "Seamless Design Honors", year: "2023" },
    ],
  },
];
