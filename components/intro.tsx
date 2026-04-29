"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 max-w-[54rem] scroll-mt-[100rem] text-center sm:mb-8"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.JPG"
              alt="Ayoub portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-8 mt-6 px-4 text-2xl font-medium !leading-[1.45] sm:text-5xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ayoub.</span> I'm a{" "}
        <span className="font-bold">Full-Stack developer</span> based in El Jadida.
        I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React, Next.js, and Node.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group cursor-pointer rounded-full borderBlack bg-white px-7 py-3 text-gray-800 outline-none transition hover:scale-105 focus:scale-105 dark:bg-white/10 dark:text-white/90"
          href="/ayoubelmeslohi.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="flex cursor-pointer items-center gap-2 rounded-full borderBlack bg-white p-4 text-gray-700 transition hover:scale-[1.1] hover:text-gray-950 focus:scale-[1.1] active:scale-105 dark:bg-white/10 dark:text-white/70"
          href="https://www.linkedin.com/in/ayoub-el-meslohi-648760238/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="flex cursor-pointer items-center gap-2 rounded-full borderBlack bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.1] hover:text-gray-950 focus:scale-[1.1] active:scale-105 dark:bg-white/10 dark:text-white/70"
          href="https://github.com/ayoubelm37"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
