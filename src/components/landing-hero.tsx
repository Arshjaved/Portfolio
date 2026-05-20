import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none relative flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center overflow-hidden px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-right bg-no-repeat opacity-[0.22] saturate-[0.9] dark:opacity-[0.28] sm:bg-[length:auto_115%] sm:bg-[position:90%_35%] md:bg-cover md:bg-right"
        style={{ backgroundImage: "url('/images/heroProfile1.webp')" }}
      />
      <div
        aria-hidden
        className="to-background/35 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/[0.94] dark:via-background/[0.96] dark:to-background/40"
      />
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Courtney Wilson
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Full Stack Developer | React, Next.js, Node.js & Headless CMS
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I&apos;m a full-stack developer specializing in building
                scalable web applications using{" "}
                <span className="font-semibold text-accent">React</span>,{" "}
                <span className="font-semibold text-accent">Next.js</span>, and{" "}
                <span className="font-semibold text-accent">Node.js</span> with{" "}
                <span className="font-semibold text-accent">NestJS</span> for
                APIs, plus{" "}
                <span className="font-semibold text-accent">headless CMS</span>{" "}
                (<span className="font-semibold text-accent">Contentful</span>,{" "}
                <span className="font-semibold text-accent">Sanity</span>,{" "}
                <span className="font-semibold text-accent">Strapi</span>) and
                modern content workflows. Deployments on{" "}
                <span className="font-semibold text-accent">AWS</span>,{" "}
                <span className="font-semibold text-accent">Azure</span>, and{" "}
                <span className="font-semibold text-accent">GCP</span> —
                performance-optimized, production-ready systems with clean
                architecture and seamless frontend-backend integration.
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
