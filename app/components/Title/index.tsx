import { motion } from "framer-motion";
import { FC } from "react";

interface IProps {
  title: string;
  description?: string;
}

export const Title: FC<IProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col"
    >
      {description && (
        <p className="text-zinc-400 capitalize text-sm sm:text-base font-semibold tracking-widest">
          {description}
        </p>
      )}
      <h2 className="text-white text-5xl capitalize sm:text-6xl md:text-7xl font-black tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
};
