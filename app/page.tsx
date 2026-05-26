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
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mountOthers, setMountOthers] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => {
      setMounted(true);
    }, 0);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 6000);
    const timer2 = setTimeout(() => {
      setMountOthers(true);
    }, 7500);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Fragment>
      {loading ? (
        <Intro />
      ) : (
        <div className="relative bg-black">
          {/* Main Content */}
          <main className="relative flex flex-col overflow-hidden perspective-[1000px]">
            <section className="relative z-10 flex items-center justify-center flex-1 w-full min-h-screen mx-auto max-w-400">
              <HeroSection />
            </section>

            {/* Deferred Heavy Components */}
            {mountOthers && (
              <>
                <AutoRunTextHero />
                <Skills />
                <WorkExperience />
                <Projects />
                <Contact />
              </>
            )}
          </main>
          {mountOthers && <Footer />}
        </div>
      )}
    </Fragment>
  );
}
