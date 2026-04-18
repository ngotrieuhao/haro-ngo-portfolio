"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/app/utils/constant";
import Image from "next/image";
import { Title } from "../Title";

interface IProps {}

export const WorkExperience: FC<IProps> = () => {
  return (
    <section className="relative">
      <div className="w-full lg:max-w-7xl mx-auto px-6 lg:px-12 lg:py-14 pt-10 relative z-20">
        <Title description="What I Have Done So Far" title="Work Experience" />
        {/* Timeline Section */}
        <div className="relative mt-10">
          {/* The central vertical line */}
          <div className="absolute left-[38px] md:left-1/2 transform -translate-x-1/2 w-1 h-full bg-white rounded-full" />

          {EXPERIENCES.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  type: "spring",
                  bounce: 0.3,
                }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-10 lg:mb-24 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Center Timeline Node */}
                <div
                  className="absolute left-[38px] md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#0a0a0a] flex items-center justify-center z-10 shadow-xl overflow-hidden"
                  style={{ backgroundColor: exp.iconBg }}
                >
                  {/* Img Icon */}
                  <Image
                    src={exp.icon}
                    alt={exp.company_name}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-[60%] h-[60%] object-contain scale-[1.1] select-none"
                  />
                </div>

                {/* Card Container */}
                <div className="w-full pl-[90px] md:pl-0 md:w-[45%] flex flex-col relative">
                  {/* Arrow Pointer (Desktop) */}
                  <div
                    className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-12 border-y-transparent ${
                      isLeft
                        ? "-right-3 md:-right-2 lg:-right-3 border-l-16 border-l-brand-orangeDark"
                        : "-left-3 md:-left-2 lg:-left-3 border-r-16 border-r-brand-orangeDark"
                    }`}
                  />

                  {/* Arrow Pointer (Mobile) */}
                  <div className="md:hidden absolute top-7 left-[75px] transform -translate-y-1/2 w-0 h-0 border-y-10 border-y-transparent border-r-16 border-r-brand-orangeDark" />

                  {/* Actual Card */}
                  <div className="bg-brand-orangeDark p-6 sm:p-8 rounded-2xl border-b-4 border-brand-yellow shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-shadow duration-300">
                    <h3 className="text-white text-2xl font-bold tracking-wide">
                      {exp.title}
                    </h3>
                    <p className="text-white text-base font-semibold mt-1 mb-6">
                      {exp.company_name}
                    </p>

                    <ul className="list-disc ml-5 space-y-3">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-white text-sm tracking-widest pl-1 leading-relaxed"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Date on Mobile (Rendered inside card at bottom for mobile only) */}
                    <div className="block md:hidden text-white font-semibold tracking-wider text-sm mt-6 pt-4 border-t border-white/10">
                      {exp.date}
                    </div>
                  </div>
                </div>

                {/* Date Box (Desktop) */}
                <div
                  className={`hidden md:flex w-[45%] ${
                    isLeft ? "justify-start" : "justify-end"
                  } items-center`}
                >
                  <div
                    className={`text-zinc-300 font-semibold tracking-wider text-lg ${!isLeft ? "text-right" : "text-left"}`}
                  >
                    {exp.date}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
