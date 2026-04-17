import { FC } from "react";
import { motion } from "framer-motion";

interface IProps {}

export const Navbar: FC<IProps> = (props) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-center py-8 z-20 relative"
    >
      <ul className="flex gap-8 sm:gap-20 text-xs sm:text-sm font-bold tracking-widest text-zinc-100 uppercase">
        <li className="cursor-pointer hover:text-white transition-colors">
          ABOUT
        </li>
        <li className="cursor-pointer hover:text-white transition-colors">
          CUSTOMERS
        </li>
        <li className="cursor-pointer hover:text-white transition-colors">
          PROJECT
        </li>
        <li className="cursor-pointer hover:text-white transition-colors">
          CONTACT
        </li>
      </ul>
    </motion.nav>
  );
};
