"use client";

import React, { useState, memo } from "react";
import { PROJECTS_DATA } from "@/app/utils/constant";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Title } from "../Title";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const markerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45 } },
};

const desktopVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

export const Projects = memo(() => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  return (
    <section className="relative z-20 w-full px-6 pt-10 lg:py-20 lg:px-0">
      <div className="w-full mx-auto mb-10 max-w-7xl">
        <Title description="Hand-Coded Work" title="Projects" />
      </div>

      {/* Mobile Grid View (Hidden on Desktop) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="grid grid-cols-3 gap-4 md:hidden"
      >
        {PROJECTS_DATA.map((project) => (
          <motion.a
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square bg-black border-[1px] border-brand-yellow/30 hover:border-brand-yellow transition-colors duration-300 flex items-center justify-center p-4 group rounded-xl"
          >
            <div className="relative w-full h-full transition-opacity duration-300 opacity-80 group-hover:opacity-100">
              <Image
                src={project.logo}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 33vw, 100px"
                loading="lazy"
                className="object-contain select-none"
              />
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Desktop Map Container (Hidden on Mobile) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={desktopVariants}
        className="hidden w-full pb-10 md:block"
      >
        <div className="relative min-w-[800px] md:w-full h-[450px] md:h-[430px] lg:h-[863px] mx-auto overflow-hidden lg:overflow-visible flex items-center justify-center">
          {/* Background Image Map */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 80 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="absolute inset-0 z-0 select-none "
          >
            {/* Use Next/Image with explicit width/height to satisfy Next lint while keeping lazy loading */}
            <Image
              src="/images/map.png"
              alt="World Map Projects"
              width={1280}
              height={720}
              loading="lazy"
              className="object-contain w-full h-full pointer-events-none"
            />
          </motion.div>

          {/* Project Markers overlay */}
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              variants={markerVariants}
              className="absolute z-10"
              style={{
                top: project.top,
                left: project.left,
                willChange: "transform, opacity",
              }}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              {/* Map Pin / Logo Marker */}
              <div className="relative w-12 h-12 lg:w-20 lg:h-20 bg-black rounded-2xl border-1 lg:border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:border-[#f0ba4f] z-10">
                <Image
                  src={project.logo}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 48px, 80px"
                  loading="lazy"
                  className="p-2 select-none"
                />
              </div>

              {/* Hover Popup Card */}
              <AnimatePresence>
                {hoveredProjectId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-[320px] sm:w-[480px] bg-brand-orangeDark border-4 border-brand-yellow p-4 origin-bottom shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 rounded-2xl pointer-events-auto"
                  >
                    {/* Pointer Triangle */}
                    <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-15 border-r-15 border-t-18 border-l-transparent border-r-transparent border-t-brand-yellow" />
                    {/* Inner yellow triangle to hide the border chunk inside */}
                    <div className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-10 border-r-10 border-t-13 border-l-transparent border-r-transparent border-t-brand-yellow z-10" />

                    {/* Card Header */}
                    <div className="flex items-center gap-4 mb-4">
                      {/* Logo Circle */}
                      <div className="relative flex items-center justify-center w-16 h-16 overflow-hidden bg-black border rounded-full shrink-0 border-zinc-200">
                        <Image
                          src={project.logo}
                          alt={project.title}
                          fill
                          sizes="64px"
                          loading="lazy"
                          className="p-2 select-none"
                        />
                      </div>

                      {/* Title & Tags */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-xl font-bold text-black sm:text-2xl">
                          {project.title}
                          {/* External Link SVG */}
                          <a
                            href={project.link}
                            className="transition-opacity cursor-pointer hover:opacity-70"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </a>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t, index) => (
                            <span
                              key={index}
                              className="bg-brand-brown text-brand-yellowLight select-none text-xs font-semibold px-2 py-0.5 rounded-sm"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Description Body */}
                    <p className="text-sm font-bold leading-snug text-black">
                      {project.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});

// For React DevTools and linting
Projects.displayName = "Projects";
