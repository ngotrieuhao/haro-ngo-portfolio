"use client";

import { PROJECTS_DATA } from "@/app/utils/constant";
import { motion } from "framer-motion";
import Image from "next/image";
import { Title } from "../Title";

export const Projects = () => {
  return (
    <section className="relative w-full py-20 z-20">
      <div className="w-full max-w-7xl mx-auto mb-10">
        <Title description="Hand-Coded Work" title="Projects" />
      </div>

      {/* Map Container */}
      <div className="relative w-full md:h-[430px] lg:h-[863px] mx-auto overflow-visible flex items-center justify-center">
        {/* Background Image Map */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/map.png"
            alt="World Map Projects"
            fill
            className="object-contain pointer-events-none"
          />
        </div>

        {/* Project Markers overlay */}
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="absolute z-10 group"
            style={{ top: project.top, left: project.left }}
          >
            {/* Map Pin / Logo Marker */}
            <div className="relative w-12 h-12 sm:w-20 sm:h-20 bg-black rounded-2xl border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:border-[#f0ba4f]">
              <Image
                src={project.logo}
                alt={project.title}
                fill
                loading="lazy"
                className="p-2"
              />
            </div>

            {/* Hover Popup Card */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-[320px] sm:w-[480px] bg-brand-orangeDark border-4 border-brand-yellow p-4 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-bottom shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 rounded-2xl">
              {/* Pointer Triangle */}
              <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-15 border-r-15 border-t-18 border-l-transparent border-r-transparent border-t-[#5C270F]" />
              {/* Inner yellow triangle to hide the border chunk inside */}
              <div className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-10 border-r-10 border-t-13 border-l-transparent border-r-transparent border-t-[#e4a84d] z-10" />

              {/* Card Header */}
              <div className="flex gap-4 items-center mb-4">
                {/* Logo Circle */}
                <div className="relative w-16 h-16 bg-black rounded-full flex shrink-0 items-center justify-center overflow-hidden border border-zinc-200">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    fill
                    loading="lazy"
                    className="p-2"
                  />
                </div>

                {/* Title & Tags */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-black font-bold text-xl sm:text-2xl">
                    {project.title}
                    {/* External Link SVG */}
                    <a
                      href={project.link}
                      className="cursor-pointer hover:opacity-70 transition-opacity"
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
                        className="bg-[#6b2c12] text-[#f2cb92] text-xs font-semibold px-2 py-0.5 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description Body */}
              <p className="text-black font-bold text-sm leading-snug">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
