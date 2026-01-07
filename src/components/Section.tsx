import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Vine } from "./shared/NatureDecoration";

interface SectionProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly background?: "light" | "dark" | "gradient";
  readonly ifBg?: boolean;
  readonly bgImage?: string;
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  background = "light",
  ifBg = false,
  bgImage,
}: SectionProps) {
  const bgClasses = {
    light: "bg-white dark:bg-primary-900",
    dark: "bg-gray-100 dark:bg-gray-800",
    gradient:
      "bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-primary-700",
  };

  const sectionStyle =
    ifBg && bgImage
      ? {
          backgroundImage: `url('${bgImage}')`,
        }
      : {};

  return (
    <section
      className={`py-20 relative overflow-hidden ${
        ifBg ? "bg-cover bg-center bg-fixed text-white" : bgClasses[background]
      } ${className}`}
      style={sectionStyle}
    >
      {/* Background organic shape - subtle (Only show if NO bg image) */}
      {!ifBg && (
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-transparent via-primary/5 to-transparent opacity-50" />
      )}

      {/* Overlay for Background Image */}
      {ifBg && <div className="absolute inset-0 bg-black/40 z-0" />}

      <div className="container mx-auto px-4 relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-16 relative">
            {/* Decorative Vine for Title */}
            {title && (
              <div className="inline-block relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`absolute -top-6 -left-8 rotate-180 z-0 ${
                    ifBg ? "text-secondary" : "text-secondary"
                  }`}
                >
                  <Vine className="w-16 h-8" delay={0.5} />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative z-10 text-4xl md:text-5xl font-bold mb-4 inline-block ${
                    ifBg ? "text-secondary" : "text-secondary"
                  }`}
                >
                  {title}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`absolute -bottom-2 -right-10 z-0 ${
                    ifBg ? "text-secondary" : "text-secondary"
                  }`}
                >
                  <Vine className="w-20 h-8" delay={0.7} />
                </motion.div>
              </div>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className={`text-xl max-w-3xl mx-auto mt-4 ${
                  ifBg ? "text-gray-200" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
