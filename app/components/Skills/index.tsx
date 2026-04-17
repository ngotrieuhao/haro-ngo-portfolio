"use client";

import { motion } from "framer-motion";
import { ICONS } from "@/app/utils/constant";
import { Ball } from "../Ball";

export const Skills = () => {
  return (
    <section className="relative">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col mb-20"
        >
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
            Skills
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-10">
          {ICONS.map((icon) => (
            <div className="w-32 h-32" key={icon.name}>
              <Ball icon={icon.icon} />
            </div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
};
