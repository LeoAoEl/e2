import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly background?: "light" | "dark" | "gradient";
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  background = "light",
}: SectionProps) {
  const bgClasses = {
    light: "bg-white dark:bg-primary-900",
    dark: "bg-gray-100 dark:bg-gray-800",
    gradient:
      "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-primary-700",
  };

  return (
    <section className={`py-20 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4 text-secondary"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
