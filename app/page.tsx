"use client";

import { AutoRunTextHero } from "./components/AutoRunTextHero";
import { HeroSection } from "./components/HeroSection";
import { WorkExperience } from "./components/WorkExperience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Intro } from "./components/Intro";
import { Contact } from "./components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 6000);
  // }, []);

  return (
    <Fragment>
      {loading ? (
        <Intro />
      ) : (
        <div className="bg-black relative">
          {/* Main Content */}
          <main className="relative flex flex-col font-sans overflow-hidden perspective-[1000px]">
            <section className="relative flex-1 flex max-w-[1600px] mx-auto z-10 items-center justify-center w-full">
              <HeroSection />
            </section>
            <AutoRunTextHero />
            <Skills />
            <WorkExperience />
            <Projects />
            <Contact />
          </main>
        </div>
      )}
    </Fragment>
  );
}
