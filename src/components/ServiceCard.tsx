import { motion } from "framer-motion";
import { HiLightBulb, HiUsers, HiChartBar } from "react-icons/hi";

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
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
    >
      <div className="p-6">
        <div className="text-4xl mb-4 text-primary dark:text-primary-500">
          {icons[iconType]}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
