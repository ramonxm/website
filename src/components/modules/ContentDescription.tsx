"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "../ui/hero-highlight";
import { MotionSvgScroll } from "@/assets/svgs/MotionSvg";
import { Title } from "./Title";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function ContentDescription() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Title>Software Engineer</Title>
        <TextGenerateEffect words="Full Stack Developer, based on React, React Native, Typescript and Node. I'm passionate about the entire programming ecosystem." />
        <div className="p-4 flex justify-center">
          <MotionSvgScroll />
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
