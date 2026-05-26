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
      transition={{ duration: 0.8 }}
      className="flex flex-col"
    >
      {description && (
        <p className="text-sm font-semibold tracking-widest capitalize text-zinc-400 sm:text-base">
          {description}
        </p>
      )}
      <h2 className="text-4xl font-black tracking-tight text-white capitalize sm:text-6xl md:text-7xl">
        {title}
      </h2>
    </motion.div>
  );
};
