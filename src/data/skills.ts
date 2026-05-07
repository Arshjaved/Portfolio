import {
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiWordpress,
  SiContentful,
  SiSanity,
  SiStrapi,
  SiGatsby,
  SiGraphql,
  SiAmazonaws,
  SiGooglecloud,
  SiDigitalocean,
  SiVuedotjs,
} from "react-icons/si";
import { TbApi, TbBrandAzure, TbApps } from "react-icons/tb";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Frontend Expertise",
    skills: [
      {
        name: "React",
        icon: ReactjsSvg,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Headless CMS",
        icon: TbApps,
      },
      {
        name: "Vue.js",
        icon: SiVuedotjs,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindcssSvg,
      },
      {
        name: "Svelte",
        icon: SiSvelte,
      },
    ],
  },
  {
    sectionName: "Backend Expertise",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Nest.js",
        icon: SiNestjs,
      },
    ],
  },
  {
    sectionName: "CMS-driven Development",
    skills: [
      {
        name: "WordPress",
        icon: SiWordpress,
      },
      {
        name: "Contentful",
        icon: SiContentful,
      },
      {
        name: "Sanity",
        icon: SiSanity,
      },
      {
        name: "Strapi",
        icon: SiStrapi,
      },
      {
        name: "Gatsby",
        icon: SiGatsby,
      },
    ],
  },
  {
    sectionName: "API Integration",
    skills: [
      {
        name: "RESTful APIs",
        icon: TbApi,
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
      },
      {
        name: "Third-party Services",
        icon: TbApps,
      },
    ],
  },
  {
    sectionName: "Cloud & Hosting",
    skills: [
      {
        name: "AWS",
        icon: SiAmazonaws,
      },
      {
        name: "Azure",
        icon: TbBrandAzure,
      },
      {
        name: "Google Cloud",
        icon: SiGooglecloud,
      },
      {
        name: "DigitalOcean",
        icon: SiDigitalocean,
      },
    ],
  },
];
