import { FC } from "react";
import { motion } from "framer-motion";

export const Navbar: FC = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 flex justify-center w-full py-8"
    >
      <ul className="flex gap-8 text-xs font-bold tracking-widest uppercase sm:gap-20 sm:text-sm text-zinc-100">
        <li className="transition-colors cursor-pointer hover:text-white">
          ABOUT
        </li>
        <li className="transition-colors cursor-pointer hover:text-white">
          CUSTOMERS
        </li>
        <li className="transition-colors cursor-pointer hover:text-white">
          PROJECT
        </li>
        <li className="transition-colors cursor-pointer hover:text-white">
          CONTACT
        </li>
      </ul>
    </motion.nav>
  );
};
