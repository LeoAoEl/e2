import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  link?: string;
  delay?: number;
}

export default function Card({
  title,
  description,
  icon,
  image,
  link,
  delay = 0,
}: CardProps) {
  const CardContent = () => (
    <>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </>
  );

  const cardClasses =
    "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {link ? (
        <a href={link} className={`block ${cardClasses}`}>
          <CardContent />
        </a>
      ) : (
        <div className={cardClasses}>
          <CardContent />
        </div>
      )}
    </motion.div>
  );
}
