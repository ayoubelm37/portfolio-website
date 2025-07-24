import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 {
    title: "Lycée Qods",
    location: "Chemaia",
    description:
      " Baccalauréat, sciences de la vie et la terre",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Diplômer",
    location: "El Jadida",
    description:
      " Institut Spécialisé de Technologie Appliquée Cité de l'Air - El Jadida,Diplôme de Technicien Spécialisé en Développement Informatique",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
   {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "Working as a freelancer on Fiverr.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I worked as a Front-End developer on this startup project for 5 months.a digital identity verification service that focuses on secure and efficient user authentication, particularly for businesses in regulated industries.",
    icon: React.createElement(FaReact),
    date: "02/8/2024 - 14/5/2025",
  },
] as const;

export const projectsData = [
  {
    title: "VOVE ID",
    description:
      "I worked as a Front-End developer on this startup project for 5 months.a digital identity verification service that focuses on secure and efficient user authentication, particularly for businesses in regulated industries.",
    tags: ["React", "Next.js", "Tailwind","Shadcn"],
    imageUrl: corpcommentImg,
  },
  {
    title: "HELA",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Shadcn",
  "Framer Motion",
] as const;



