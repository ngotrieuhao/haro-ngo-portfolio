"use client";

import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  "ReactJS • NextJS • VueJS",
  "TypeScript • NodeJS • NestJS",
  "Material UI • Ant Design",
  "Tailwind CSS • Framer Motion",
];

const StaggeredText = ({ text }: { text: string }) => {
  const letters = text.split("");

  return (
    <motion.div
      className="flex items-center text-white bg-amber-950 px-4 py-1.5 rounded-lg shadow-inner absolute"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: 40, opacity: 0, rotateX: -90 },
            visible: {
              y: 0,
              opacity: 1,
              rotateX: 0,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                delay: i * 0.04,
              },
            },
            exit: {
              y: -40,
              opacity: 0,
              rotateX: 90,
              transition: {
                duration: 0.2,
                delay: i * 0.02,
              },
            },
          }}
          className="inline-block origin-bottom"
          style={{ whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const AutoRunTextHero: FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bottom-[20%]">
      <div className="w-[120vw] -rotate-3 bg-brand-orange overflow-hidden flex z-30 py-5 sm:py-7 shadow-[0_0_30px_rgba(245,184,65,0.4)] justify-center">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[#452701] font-bold text-lg sm:text-2xl lg:text-3xl tracking-wide max-w-7xl px-4 text-center">
          <span>I am a Frontend Developer skilled in</span>

          <div className="relative inline-flex items-center justify-center h-[50px] sm:h-[60px] min-w-[580px] sm:min-w-[440px] overflow-hidden mx-1">
            <AnimatePresence mode="wait">
              <StaggeredText key={index} text={skills[index]} />
            </AnimatePresence>
          </div>

          <span>building modern web applications</span>
        </div>
      </div>
    </section>
  );
};
