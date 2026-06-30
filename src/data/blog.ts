export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "essential-branding-tips",
    title: "5 Essential Branding Tips for Businesses",
    date: "Aug 10, 2024",
    excerpt:
      "Discover key strategies to create a memorable and impactful brand for your small business.",
    content: [
      "Building a strong brand is more than just a logo — it's about creating a consistent experience that resonates with your audience at every touchpoint.",
      "Start with clarity: define your mission, values, and unique positioning. Then ensure every visual and verbal element reinforces that foundation.",
    ],
  },
  {
    slug: "user-friendly-website-design",
    title: "How to Design a User-Friendly Website",
    date: "Aug 8, 2024",
    excerpt:
      "Learn practical tips for designing websites that are both visually appealing and user-friendly.",
    content: [
      "Great web design balances aesthetics with usability. Prioritize clear navigation, fast load times, and accessible typography.",
      "Test early and often with real users to uncover friction points before they become costly problems.",
    ],
  },
  {
    slug: "importance-of-responsive-design",
    title: "The Importance of Responsive Design",
    date: "Aug 5, 2024",
    excerpt:
      "Why responsive design is crucial for enhancing experience and increasing conversions.",
    content: [
      "With mobile traffic dominating the web, responsive design isn't optional — it's essential for reaching and converting your audience.",
      "Design mobile-first, then scale up. This approach ensures core content and interactions work flawlessly on every screen size.",
    ],
  },
  {
    slug: "web-development-trends-2024",
    title: "Top 3 Web Development Trends in 2024",
    date: "Jun 10, 2024",
    excerpt:
      "Stay ahead with the latest web development trends shaping digital experiences and online platforms.",
    content: [
      "From AI-assisted development to performance-first frameworks, the web is evolving faster than ever.",
      "Brands that embrace these trends early gain a competitive edge in speed, accessibility, and user satisfaction.",
    ],
  },
  {
    slug: "effective-brand-identity",
    title: "How to Create an Effective Brand Identity",
    date: "May 16, 2024",
    excerpt:
      "Uncover the essential elements needed to develop a cohesive and recognizable brand identity.",
    content: [
      "A cohesive brand identity weaves together logo, color, typography, imagery, and voice into a unified system.",
      "Document everything in brand guidelines so your identity stays consistent as your team and channels grow.",
    ],
  },
  {
    slug: "thoughtful-ux-design",
    title: "Boost Engagement with Thoughtful UX Design",
    date: "Mar 12, 2024",
    excerpt:
      "Improve user engagement by focusing on UX design that prioritizes functionality and user satisfaction.",
    content: [
      "Engagement follows empathy. Understand your users' goals, frustrations, and context before designing solutions.",
      "Small UX improvements — clearer CTAs, reduced form fields, better feedback — often yield the biggest gains.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
