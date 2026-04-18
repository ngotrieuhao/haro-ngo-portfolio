"use client";

import { motion } from "framer-motion";
import { ICONS } from "@/app/utils/constant";
import { Ball } from "../Ball";
import { Title } from "../Title";

export const Skills = () => {
  return (
    <section className="relative">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-20 relative z-20">
        <Title description="What I Can Do" title="Skills" />
        <div className="flex flex-wrap justify-center gap-10 mt-10">
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
