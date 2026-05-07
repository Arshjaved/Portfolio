import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Arshiyan Javed | Full Stack Developer"
        description="Learn more about Arshiyan Javed, a Full Stack Developer building scalable web applications with React, Next.js, Node.js, NestJS and headless CMS (Contentful, Sanity, Strapi). Microservices and cloud-native delivery on AWS, Azure and GCP."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Arshiyan Javed - Full Stack Developer",
          description:
            "Dive into the story of Arshiyan Javed, a Full Stack Developer crafting performance-optimized, production-ready web systems with clean architecture and seamless frontend-backend integration.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Arshiyan Javed - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Full Stack Developer portfolio, React Developer, Next.js Developer, Headless CMS, Contentful, Sanity, Strapi, Node.js, NestJS, Vue.js, AWS, Azure, GCP",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
