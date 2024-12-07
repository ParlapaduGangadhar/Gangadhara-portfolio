import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import devopsgptImg from "@/public/devops-gpt.png"
import fastvdiImg from "@/public/fastVdi.png"
import kongImg from "@/public/kong.png"
import gamingImg from "@/public/gaming.png"

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
    title: "B.Tech",
    location: "Guntur",
    description:
      "I studied Mechanical Engineering at NEC to get my degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Front-End Developer",
    location: "Hyderabad",
    description:
      "I worked as a front-end developer for 2.3 years, creating various static and dynamic web pages using Next.js, React.js, Tailwind CSS, and ShadCN UI.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  }
 
] as const;

export const projectsData = [
  {
    title: "DevOps-Gpt",
    description:
      "I spend six months, as a front-end developer on this project, where DevOpsGPT automates tasks such as setting up CI/CD pipelines, managing deployments, and configuring development environments, streamlining the process and improving efficiency.",
    tags: [ "Next.js","TypeScript", "Tailwind", "Shadcn UI"],
    imageUrl: devopsgptImg,
  },
  {
    title: "Fast VDI",
    description:
      "I spent six months, as a front-end developer, improving app performance with React Query, reducing loading times by 30%, and implementing an RBAC system to manage user permissions securely.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn UI"],
    imageUrl: fastvdiImg,
  },
  {
    title: "Aura E-Gaming",
    description:
      "I spent a year as a Frontend Developer on a project where I developed reusable components for multiple games, implemented real-time data retrieval using REST API calls, and enhanced gaming experiences using Canvas, Matter.js, and Lottie animations.",
    tags: ["React", "Next.js", "Tailwind", "MQTT","Node js","Canvas"],
    imageUrl: gamingImg,
  },
  {
    title: "Kong Konnect Dev Portal Customization",
    description:
      "Over four months, as a front-end developer, I customized the Kong Swagger UI theme, published it to NPM, and built full-screen components and catalog modules to enhance the portal's design and functionality.",
    tags: ["React", "VueJs", "Tailwind","Swagger UI"],
    imageUrl: kongImg,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "Redux",
  "Git",
  "PostgreSQL",
  "MongoDB",
  "Supabase"
] as const;
