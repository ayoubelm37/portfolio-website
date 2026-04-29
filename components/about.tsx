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
        I am a passionate junior full-stack developer interested in programming and
        web design. I am dynamic, curious, and I continuously invest in building
        both technical and personal skills.
      </p>
      <p className="mb-3">
        I completed a specialized diploma in software development, studied economics
        at Cadi Ayyad University, and completed full-stack training at Jobintech
        Academy. I also worked on VOVE ID as a front-end developer.
      </p>
      <p className="mb-3">
        I am currently looking for opportunities to contribute to innovative projects
        and keep improving every day.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy going to the gym, playing football, {" "}
        <span className="font-medium">learning new things.</span>
      </p>
    </motion.section>
  );
}
