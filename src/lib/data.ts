export const siteMetadata = {
  name: "Arslan Ali",
  alias: "Aliؔ",
  title: "Arslan Ali | Full Stack Engineer & E-com Strategist",
  description:
    "Bridging the gap between scalable code and international commerce. DAE Electrical Engineer turned Full Stack Developer, scaling brands across PK, UAE, and USA.",
  location: "Islamabad, Pakistan",
  email: "arslanali@example.com",
  github: "https://github.com/arslanali",
  linkedin: "https://linkedin.com/in/arslanali",
};

export const roles = [
  "Full Stack MERN Developer",
  "WordPress Expert",
  "E-commerce Growth Architect",
];

export const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
  "E-commerce": ["Shopify", "WooCommerce", "Meta Ads", "Google Ads", "SEO"],
  "Tools": ["Git", "Vercel", "Docker", "Figma", "WordPress"],
};

export const projects = [
  {
    id: 1,
    name: "TheOneGroup Real Estate",
    description:
      "Full-stack real estate platform with advanced SEO architecture, lead generation funnels, and custom WordPress theme development for the Pakistani market.",
    url: "https://theonegroup.com.pk/",
    category: "Software Engineering",
    tags: ["SEO", "WordPress", "Lead Gen"],
    color: "#10b981",
    featured: true,
  },
  {
    id: 2,
    name: "PAEC Prep Hub",
    description:
      "Bilingual (EN/UR) educational platform for PAEC Technician-I exam preparation. Built with Next.js App Router, dynamic code-splitting, and mobile-first UI.",
    url: "https://paec-prep-hub.vercel.app/",
    category: "Software Engineering",
    tags: ["Next.js", "Vercel", "Education"],
    color: "#6366f1",
    featured: true,
  },
  {
    id: 3,
    name: "Brands Cove",
    description:
      "Shopify-powered US e-commerce store with automated fulfillment workflows, conversion-optimized product pages, and Meta Ads integration.",
    url: "https://brandscove.com/",
    category: "E-commerce Operations",
    tags: ["Shopify", "USA Market", "Automation"],
    color: "#f59e0b",
    featured: true,
  },
  {
    id: 4,
    name: "Biyode",
    description:
      "Community-driven development platform connecting contributors with open-source projects and social impact initiatives.",
    url: "https://biyode.org/",
    category: "Software Engineering",
    tags: ["Development", "Community"],
    color: "#ec4899",
    featured: false,
  },
];

export const campaignMetrics = {
  campaign: "Electric Razor Scaling",
  market: "UAE",
  channel: "Meta Ads",
  metrics: [
    { label: "ROAS", value: "3.84x", raw: 3.84, suffix: "x", description: "Return on Ad Spend" },
    { label: "CTR", value: "0.94%", raw: 0.94, suffix: "%", description: "Click-Through Rate" },
    { label: "Market", value: "UAE", raw: null, suffix: "", description: "Target Market" },
    { label: "Channel", value: "Meta", raw: null, suffix: "", description: "Ad Platform" },
  ],
  context:
    "Achieved profitable scaling in the UAE market via an optimized Meta Ads funnel — targeting high-intent audiences with creative A/B testing and retargeting sequences.",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#metrics", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export const experiences = [
  {
    id: 1,
    role: "E-commerce Growth Architect",
    company: "Brands Cove",
    period: "2023 - Present",
    description: "Architected automated fulfillment workflows and Meta Ads funnels tailored for the US market, scaling conversion rates and optimizing ROAS.",
    skills: ["Shopify", "Meta Ads", "Google Analytics", "Automation"],
  },
  {
    id: 2,
    role: "Full Stack Engineer",
    company: "TheOneGroup",
    period: "2021 - 2023",
    description: "Developed a custom real estate platform with advanced SEO architecture and lead generation funnels built for the local market.",
    skills: ["Next.js", "WordPress", "SEO", "Node.js"],
  },
  {
    id: 3,
    role: "Systems Engineer",
    company: "DAE / PAEC",
    period: "2018 - 2021",
    description: "Applied analytical problem-solving and systems thinking to manage complex electrical architectures before transitioning to software engineering.",
    skills: ["Systems Design", "Data Analysis", "Project Management"],
  }
];
