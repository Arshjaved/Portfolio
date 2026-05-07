import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

const favicon = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

const RENTBERRY_IMAGES = [
  "/images/Rentberry-1%20copy.PNG",
  "/images/Rentberry-2%20copy.PNG",
  "/images/Rentberry-3%20copy.PNG",
];

const ITRUCKED_IMAGES = [
  "/images/istrucked_1.png",
  "/images/istrucked_2.png",
  "/images/istrucked_3.png",
];

const MYLAMA_IMAGES = [
  "/images/Mylama_1.png",
  "/images/Mylama_2.png",
  "/images/Mylama_3.png",
];

const ROADMAP_IMAGES = [
  "/images/Roadmap_1.png",
  "/images/Roadmap_2.png",
  "/images/Roadmap_3.png",
];

const SPREADEX_IMAGES = [
  "/images/Spreadex_1.png",
  "/images/Spreadex_2.png",
  "/images/Spreadex_3.png",
];

const TIPPINGGUIDE_IMAGES = [
  "/images/tippingguide_1.png",
  "/images/tippingguide_2.png",
  "/images/tippingguide_3.png",
];

const FOODBERRY_IMAGES = [
  "/images/foodberry_1.png",
  "/images/foodberry_2.png",
  "/images/foodberry_3%20copy.png",
];

const ADVANTAGE_IMAGES = [
  "/images/Advantage_1%20copy.png",
  "/images/advantage_2%20copy.png",
  "/images/Advantage_3%20copy.png",
];

const WOUNDMEND_IMAGES = [
  "/images/Woundmend_1.png",
  "/images/Woundmend_2.png",
  "/images/Woundmend_3.png",
];

const NEVERMET_IMAGES = [
  "/images/Nevermet_1.png",
  "/images/Nevermet_2.png",
  "/images/Nevermet_3.png",
];

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Rentberry",
    href: "/projects",
    tags: ["Real Estate", "React", "Node.js", "Express", "REST API"],
    image: {
      LIGHT: RENTBERRY_IMAGES[0],
    },
  },
  {
    index: 1,
    title: "iTrucked",
    href: "/projects",
    tags: ["Transportation", "Next.js", "Node.js", "Azure", "REST API"],
    image: {
      LIGHT: ITRUCKED_IMAGES[0],
    },
  },
  {
    index: 2,
    title: "Foodberry",
    href: "/projects",
    tags: ["Food & Hospitality", "Next.js", "Sanity", "Tailwind CSS"],
    image: {
      LIGHT: FOODBERRY_IMAGES[0],
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Rentberry — Real Estate",
    favicon: favicon("rentberry.com"),
    imageUrl: RENTBERRY_IMAGES,
    description:
      "Long-term rental platform that streamlines the entire renting workflow with online applications, custom offers, transparent biddings and secure payments. Contributed to scalable React frontends and Node.js APIs powering the marketplace.",
    liveWebsiteHref: "https://rentberry.com/",
  },
  {
    name: "iTrucked — Transportation",
    favicon: favicon("itrucked.com"),
    imageUrl: ITRUCKED_IMAGES,
    description:
      "Trucking-made-easy platform connecting drivers, dispatchers and brokers with tools to manage loads, dispatch and logistics. Built responsive Next.js interfaces and Node.js APIs deployed on Azure.",
    liveWebsiteHref: "https://itrucked.com/",
  },
  {
    name: "myLama — Fintech",
    favicon: favicon("mylama.app"),
    imageUrl: MYLAMA_IMAGES,
    description:
      "Modern fintech application focused on a frictionless money experience. Implemented React-based onboarding flows, GraphQL integrations and Node.js services hosted on AWS.",
    liveWebsiteHref: "https://mylama.app/",
  },
  {
    name: "Roadmap Advisors — Fintech / M&A",
    favicon: favicon("roadmapadvisors.com"),
    imageUrl: ROADMAP_IMAGES,
    description:
      "Middle-market strategic M&A advisory firm site featuring sector expertise, capabilities and rich content marketing. Delivered as a performance-tuned WordPress / Headless CMS build with Tailwind CSS.",
    liveWebsiteHref: "https://roadmapadvisors.com/",
  },
  {
    name: "Woundmend — Healthcare",
    favicon: favicon("woundmend.com"),
    imageUrl: WOUNDMEND_IMAGES,
    description:
      "AI-powered SkinCare app that performs instant assessment of acute and chronic wounds. Built the marketing site and supporting REST APIs that connect to the mobile assessment pipeline.",
    liveWebsiteHref: "https://woundmend.com/",
  },
  {
    name: "Spreadex.com — Sport / Betting / Gaming",
    favicon: favicon("spreadex.com"),
    imageUrl: SPREADEX_IMAGES,
    description:
      "Sports spread betting and fixed-odds platform with in-play football, racing, and multi-market dashboards. Contributed to responsive Next.js surfaces, real-time odds UI, and Node.js-backed integrations.",
    liveWebsiteHref: "https://spreadex.com/",
  },
  {
    name: "Tipping Guide — Sport / Gaming",
    favicon: favicon("tippingguide.com"),
    imageUrl: TIPPINGGUIDE_IMAGES,
    description:
      "Modern tipping etiquette guide that helps users figure out how much to tip across services and countries. Implemented as a fast Next.js site with a Node.js backend.",
    liveWebsiteHref: "https://tippingguide.com/",
  },
  {
    name: "Foodberry — Food / Hospitality",
    favicon: favicon("foodberry.co"),
    imageUrl: FOODBERRY_IMAGES,
    description:
      "B2B food-tech innovation company creating bite-sized snack products with leading brands. Built a brand-forward Next.js website with Sanity-powered content and Tailwind CSS styling.",
    liveWebsiteHref: "https://foodberry.co/",
  },
  {
    name: "Advantage.Tech — IT / Tech Consulting",
    favicon: favicon("advantage.tech"),
    imageUrl: ADVANTAGE_IMAGES,
    description:
      "Cybersecurity and managed IT service provider site featuring services, products, white papers and case studies. Delivered with WordPress / Headless CMS and a custom theme tuned for SEO and Core Web Vitals.",
    liveWebsiteHref: "https://www.advantage.tech/",
  },
  {
    name: "Nevermet — Social / Dating / VR",
    favicon: favicon("nevermet.io"),
    imageUrl: NEVERMET_IMAGES,
    description:
      "VR dating app focused on personality-first relationships in the metaverse. Contributed to the React-based marketing site and Node.js backend services that power matching and onboarding.",
    liveWebsiteHref: "https://www.nevermet.io/",
  },
];
