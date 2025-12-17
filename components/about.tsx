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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       Hey there! I'm a front-end developer with a background in IT development. After getting my diploma in software development, I decided to dive deeper into my passion for coding by joining a bootcamp where I focused on front-end technologies.

What I love most about programming is the problem-solving side — that “aha!” moment when something finally clicks is unbeatable. My main stack includes React and Next.js, and I’m also comfortable working with TypeScript. I'm always exploring new tools and tech to stay sharp and grow as a developer.

I’m currently on the lookout for a full-time role as a front-end developer where I can keep building cool things and learning every day.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy going to the gym, playing football, {" "}
        <span className="font-medium">learning new things.</span>
      </p>
    </motion.section>
  );
}
