import { AutoRunTextHero } from "./components/AutoRunTextHero";
import { HeroSection } from "./components/HeroSection";
import { WorkExperience } from "./components/WorkExperience";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-black relative">
      {/* Main Content */}
      <main className="relative flex flex-col font-sans overflow-hidden perspective-[1000px]">
        <div className="min-h-screen relative flex-1 flex w-full max-w-[1600px] mx-auto z-10 items-center justify-center w-full">
          <HeroSection />
          <AutoRunTextHero />
        </div>
        <Skills />
        <WorkExperience />
      </main>
    </div>
  );
}
