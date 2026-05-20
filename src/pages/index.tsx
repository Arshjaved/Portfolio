import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Courtney Wilson | Full Stack Developer | React, Next.js & Headless CMS"
        description="Explore the professional portfolio of Courtney Wilson, a Full Stack Developer specializing in React, Next.js, Node.js, NestJS and headless CMS (Contentful, Sanity, Strapi). Scalable web applications and cloud-native delivery on AWS, Azure and GCP."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title:
            "Courtney Wilson - Full Stack Developer | React, Next.js & Headless CMS",
          description:
            "Full Stack Developer building scalable applications with React, Next.js, Node.js, NestJS, headless CMS workflows, APIs, microservices and cloud deployment on AWS, Azure and GCP.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Courtney Wilson - Portfolio Image",
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
              "Full Stack Developer, React Developer, Next.js Developer, Headless CMS, Contentful, Sanity, Strapi, Node.js, NestJS, Vue.js, Svelte, Tailwind CSS, AWS, Azure, GCP, Microservices, GraphQL",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
