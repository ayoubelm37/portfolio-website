"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[52rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="rounded-2xl border border-black/10 bg-white/70 px-6 py-7 text-left leading-8 shadow-sm backdrop-blur-[2px] dark:border-white/10 dark:bg-white/5 sm:px-8">
        <p className="mb-4 text-gray-700 dark:text-white/80">
          I am a passionate junior full-stack developer interested in programming
          and web design. I am dynamic, curious, and I continuously invest in
          building both technical and personal skills.
        </p>
        <p className="mb-4 text-gray-700 dark:text-white/80">
          I completed a specialized diploma in software development, studied
          economics at Cadi Ayyad University, and completed full-stack training at
          Jobintech Academy. I also worked on VOVE ID as a front-end developer.
        </p>
        <p className="mb-4 text-gray-700 dark:text-white/80">
          I am currently looking for opportunities to contribute to innovative
          projects and keep improving every day.
        </p>
        <p className="text-gray-700 dark:text-white/80">
          <span className="italic">When I'm not coding</span>, I enjoy going to the
          gym, playing football, and{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            learning new things.
          </span>
        </p>
      </div>
    </motion.section>
  );
}
