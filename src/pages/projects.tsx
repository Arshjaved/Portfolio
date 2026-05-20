import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Courtney Wilson - Full Stack Developer Portfolio"
        description="Explore a collection of projects by Courtney Wilson across Real Estate, Transportation, Fintech, Healthcare, Sport/Betting/Gaming, Food/Hospitality, IT/Tech Consulting and Social/Dating/VR consumer apps."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Courtney Wilson - Full Stack Developer",
          description:
            "Explore a showcase of projects crafted by Courtney Wilson, a Full Stack Developer focused on React, Next.js and headless CMS. Production-grade applications across multiple industries.",
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
              "Projects, Courtney Wilson Portfolio, Full Stack Developer, React, Next.js, Headless CMS, Node.js, NestJS, Contentful, Sanity, Strapi, AWS, Azure, GCP, Real Estate, Fintech, Healthcare, Betting, Gaming, Food, IT Consulting, VR",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              A selection of production projects I&apos;ve contributed to,
              grouped by industry.
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              Always shipping new things — building scalable, cloud-native
              full-stack systems with clean architecture.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Want to collaborate or have a project in mind?{" "}
              <a
                href={`mailto:${siteMetadata.email}`}
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
