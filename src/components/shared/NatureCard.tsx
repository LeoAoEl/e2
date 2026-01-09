import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { LeafPattern, SmallSprout, Grass } from "./NatureDecoration";

import leaf from "../../assets/images/leaf.svg";

interface NatureCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function NatureCard({
  children,
  className = "",
  delay = 0,
}: NatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group border border-transparent hover:border-primary/20 p-6 flex flex-col items-center text-center h-full ${className}`}
    >
      {/* Woodsy/Nature decorative corner */}
      <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <img
          src={leaf.src}
          alt=""
          className="w-20 h-20 text-secondary/40 transform rotate-180"
        />
      </div>

      <LeafPattern className="text-primary-900 dark:text-white" />

      <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <SmallSprout className="w-8 h-8 text-secondary/60" delay={0.1} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <Grass className="w-full h-full text-secondary/30" />
      </div>

      <div className="relative z-10 w-full">{children}</div>

      {/* Bottom organic line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
}
