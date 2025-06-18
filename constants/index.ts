import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import portfolio from "@/public/portfolio.png";
import resume from "@/public/resume.png";

// Navigation links
export const LINKS = [
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

// External links
export const EXTRA_LINKS = {
  linkedin:"https://www.linkedin.com/in/kishan-n-r-475892341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/kishannr93",
  resume: "https://resume.kishannr.in",
  source_code: "https://github.com/kishannr93",
  email: "kishannr93@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Marketing Head @VC AI Creator",
    description:
      "Promotion and Communication: This is the most visible aspect, involving all activities to communicate the value of a product or service to potential customers.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Portfolio Website",
    description:
      "I a Modern UI/UX Portfolio using Next.JS",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Email JS", "Framer Motion"],
    imageUrl: portfolio,
    projectUrl: "https://carhb.vercel.app/",
  },
  {
    title: "Resume Website",
    description:
      "A web app that is built using NextJS and enables users to quickly search and obtain information about cars.",
    tags: ["React", "HTML", "CSS"],
    imageUrl: resume,
    projectUrl: "https://carhb.vercel.app/",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "React",
  "AI Automation",
] as const;

// Owner name
export const OWNER_NAME = "Kishan N R";
