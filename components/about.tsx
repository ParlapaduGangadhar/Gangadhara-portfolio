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
      After finishing my bachelor's in Electrical Engineering,{" "}
      I completed java full-stack certification. I started with frontend development and later learned <span className="font-medium">full-stack java</span>. I love solving problems and finding solutions. My core stack is {" "}
      <span className="font-medium">
          HTML5, CSS3, java script, Java, React.js, and My SQL
        </span>, {" "} I’m always open to learning new technologies and I am currently looking for a    <span className="font-medium">full-time position</span>  as a software developer.{" "}
      </p>

    </motion.section>
  );
}
