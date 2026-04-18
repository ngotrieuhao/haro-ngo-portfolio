"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import Model from "../Model";
import Button from "../Button";

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export const HeroSection = () => {
  // Mouse tracking logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, smoothConfig);
  const smoothMouseY = useSpring(mouseY, smoothConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], [-40, 40]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);

  // Scroll velocity parallax logic
  const baseX = useMotionValue(0);
  useAnimationFrame((t, delta) => {
    // Base speed: left to right (positive)
    let moveBy = -1 * (delta / 1000); // 30 units per second
    baseX.set(baseX.get() + moveBy);
  });

  // We duplicate the text 8 times, and wrap around -50%.
  // -50% of 8 items means exactly 4 items shift. It's a perfect seamless match.
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const handleScroll = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full relative z-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-10 w-[200vw] sm:w-[150vw] left-[-50vw] flex items-center shadow-none pointer-events-none select-none z-0 overflow-hidden"
      >
        <motion.div
          style={{ x }}
          className="flex whitespace-nowrap flex-nowrap w-max gap-20 sm:gap-40"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <h1
              key={i}
              className="text-[17vw] xl:text-[15vw] shrink-0 font-black leading-none bg-linear-to-b from-zinc-200 via-zinc-400 to-zinc-700 bg-clip-text text-transparent tracking-tighter"
            >
              HI, I'M <span className="text-brand-orange">HARO</span>
            </h1>
          ))}
        </motion.div>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between z-10 relative mt-[50px] sm:mt-[100px]">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:w-1/3 mb-0 flex justify-center lg:justify-start text-center lg:text-left z-20 order-2 lg:order-1 pt-10 lg:pt-0"
        >
          <p className="text-zinc-200 text-sm sm:text-base font-semibold uppercase leading-loose tracking-wide md:max-w-[550px] lg:max-w-[320px]">
            A FRONTEND DEVELOPER PASSIONATE ABOUT BUILDING SCALABLE,
            HIGH-PERFORMANCE AND USER-FRIENDLY WEB APPLICATIONS
          </p>
        </motion.div>

        <div className="w-full lg:w-1/3 flex justify-center relative z-40 order-1 lg:order-2 perspective-[1000px]">
          <motion.div
            style={{
              rotateX,
              rotateY,
              x: translateX,
              y: translateY,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="relative w-[300px] h-[400px] sm:w-[500px] sm:h-[600px] lg:w-[700px] lg:h-[800px] flex items-center justify-center scale-110"
          >
            <Model />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-full lg:w-1/3 my-10 lg:my-0 flex justify-center lg:justify-end z-20 order-3"
        >
          <Button
            onClick={handleScroll}
            className="cursor-pointer capitalize bg-linear-to-r border border-brand-orange hover:border-white from-brand-orange via-brand-yellow to-brand-orange text-white font-bold py-3.5 px-8 sm:py-5 sm:px-12 rounded-full text-base sm:text-xl hover:scale-[1.05] transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(255,140,0)] tracking-wider backdrop-blur-sm"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
