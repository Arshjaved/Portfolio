import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Senior Full Stack Software Engineer",
    organisation: {
      name: "Elite Hires Solutions LLC",
      href: "https://elitehiressolutions.com/",
    },
    date: "January 2023 - Present",
    location: "Remote",
    description:
      "Custom web development with React, Next.js, Vue.js and Svelte for dynamic frontends and SSR/SSG where it matters. Backend work in Node.js and Python (Django/Flask). Strong focus on headless CMS architectures (Contentful, Sanity, Strapi) and Next.js integration for structured content, previews and fast page delivery. WordPress development including custom themes, plugins, WooCommerce and performance optimization. API integration via RESTful APIs, GraphQL and third-party services. Cloud deployments across AWS, Azure, Google Cloud and DigitalOcean. Built scalable, secure custom web applications with seamless API integrations, fast-loading pages and strong SEO best practices.",
  },
  {
    title: "Sr. Software Engineer",
    organisation: {
      name: "Intelli Workforce LLC",
      href: "https://intelliworkforce.com/",
    },
    date: "January 2020 - December 2022",
    location: "Remote",
    description:
      "Designed and developed microservices architecture using Spring Cloud Netflix. Integrated ActiveMQ as the message broker for efficient inter-service communication. Used Azure for deployment and management of the application and worked extensively with AWS for various cloud-based functionalities. Implemented MongoDB as the NoSQL database for efficient data storage and retrieval.",
  },
];
