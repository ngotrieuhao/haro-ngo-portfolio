"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AutoRunTextHero } from "./components/AutoRunTextHero";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative flex flex-col font-sans overflow-hidden perspective-[1000px]">
      <Navbar />

      {/* Main Content */}
      <main className="relative flex-1 flex w-full max-w-[1600px] mx-auto z-10 items-center">
        <HeroSection />
        <AutoRunTextHero />
      </main>
    </div>
  );
}
