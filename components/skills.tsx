"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-base text-gray-800 sm:text-lg">
        {skillsData.map((skill, index) => (
          <li
            className="rounded-xl border border-black/10 bg-white/80 px-5 py-2.5 text-white shadow-sm shadow-black/[0.03] transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-white/85"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
