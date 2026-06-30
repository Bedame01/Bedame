export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const siteConfig = {
  name: "Bedame",
  brand: "Bedame Visuals",
  tagline: "Studio",
  location: "Based in Lagos, Nigeria",
  description:
    "I'm dedicated to crafting websites that bring your ideas to life, combining design and development to deliver fast, impactful results.",
  email: "bedame02@gmail.com",
  phone: "+234 916 484 3400",
  socials: [
    { label: "Instagram", href: "https://instagram.com/bedamevisuals", handle: "@bedamevisuals" },
    { label: "Behance", href: "https://behance.net/bedamevisuals", handle: "@bedamevisuals" },
    { label: "Dribbble", href: "https://dribbble.com/bedamevisuals", handle: "@bedamevisuals" },
    { label: "LinkedIn", href: "https://linkedin.com/in/bedamevisuals", handle: "Bedame Visuals" },
    { label: "Twitter", href: "https://x.com/bedamevisuals", handle: "@bedamevisuals" },
  ] satisfies SocialLink[],
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/work" },
    { label: "Services", href: "/service" },
    { label: "About", href: "/about" },
    // { label: "Blog", href: "/blog" },
  ],
};
