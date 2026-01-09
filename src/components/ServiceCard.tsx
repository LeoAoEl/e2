import { motion } from "framer-motion";
import { HiLightBulb, HiUsers, HiChartBar } from "react-icons/hi";
import { LeafPattern, SmallSprout, Grass } from "./shared/NatureDecoration";

import leaf from "../assets/images/leaf.svg";

interface ServiceCardProps {
  title: string;
  description: string;
  iconType: "lightbulb" | "users" | "chart";
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  iconType,
  delay = 0,
}: ServiceCardProps) {
  const icons = {
    lightbulb: <HiLightBulb />,
    users: <HiUsers />,
    chart: <HiChartBar />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group border border-transparent hover:border-primary/20"
    >
      {/* Woodsy/Nature decorative corner */}
      <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <img
          src={leaf.src}
          alt=""
          className="w-24 h-24 text-secondary/40 transform rotate-180"
        />
      </div>

      <LeafPattern className="text-primary-900 dark:text-white" />

      <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <SmallSprout className="w-8 h-8 text-secondary/60" delay={0.1} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <Grass className="w-full h-full text-secondary/30" />
      </div>

      <div className="p-6 relative z-10">
        <div className="text-4xl mb-4 text-primary group-hover:text-secondary group-hover:scale-110 ease-out transition-all duration-300 dark:text-primary-500 inline-block">
          {icons[iconType]}
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary ease-in transition-colors text-primary-700 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 relative">
          {description}
        </p>
      </div>

      {/* Bottom organic line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
}
