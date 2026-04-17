import { FC, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface IProps {}

export const HeroSection: FC<IProps> = (props) => {
  // Mouse position values (Normalized between -0.5 and 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the movement to make it feel natural
  const smoothConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, smoothConfig);
  const smoothMouseY = useSpring(mouseY, smoothConfig);

  // Map mouse positions to rotations and translations (parallax effect)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], [-40, 40]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <h1 className="text-[5vw] pr-2.5 xl:text-[12vw] font-black leading-none bg-linear-to-b from-zinc-200 via-zinc-400 to-zinc-700 bg-clip-text text-transparent whitespace-nowrap tracking-tighter">
          HI, I'M HARO
        </h1>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between z-10 relative mt-[-5%]">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:w-1/3 mb-10 lg:mb-0 flex justify-center lg:justify-start text-center lg:text-left z-20 order-2 lg:order-1 pt-10 lg:pt-0"
        >
          <p className="text-zinc-200 text-sm sm:text-base font-semibold font-sans uppercase leading-loose tracking-wide max-w-[320px]">
            A FRONTEND DEVELOPER PASSIONATE ABOUT BUILDING SCALABLE,
            HIGH-PERFORMANCE AND USER-FRIENDLY WEB APPLICATIONS 😍
          </p>
        </motion.div>

        <div className="w-full lg:w-1/3 flex justify-center relative z-10 order-1 lg:order-2 perspective-[1000px]">
          <motion.div
            style={{
              rotateX,
              rotateY,
              x: translateX,
              y: translateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="relative w-[300px] sm:w-[450px] lg:w-[600px] scale-[1.25] aspect-square flex items-center justify-center"
          >
            <Image
              src="/images/me.png"
              alt="3D Character"
              fill
              className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] z-20 pointer-events-none"
              priority
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 450px, 1000px"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-full lg:w-1/3 mt-10 lg:mt-0 flex justify-center lg:justify-end z-20 order-3"
        >
          <button className="bg-linear-to-r border-2 border-[#950DB7] hover:border-white from-brand-purple via-brand-pink to-brand-orange text-white font-bold py-3.5 px-8 sm:py-5 sm:px-12 rounded-full text-base sm:text-xl hover:scale-[1.05] transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(255,0,255,0.7)] uppercase tracking-wider backdrop-blur-sm">
            CONTACT ME
          </button>
        </motion.div>
      </div>
    </>
  );
};
