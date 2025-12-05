import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  showButton?: boolean;
  onlyTwo?: boolean;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageSrc,
  showButton = false,
  onlyTwo = false,
}: HeroProps) {
  const firstTwo = title.slice(0, 2);
  const restOfTitle = title.slice(2);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: imageSrc
            ? `url(${imageSrc})`
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg text-center"
        >
          {onlyTwo ? (
            <span className="inline-block">
              <motion.span
                className="relative inline-block"
                initial="rest"
                animate="highlight"
              >
                <motion.span
                  variants={{
                    rest: { color: "#ffffff" },
                    highlight: { color: "#f4b620" },
                  }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {firstTwo}
                </motion.span>
                <motion.div
                  className="absolute left-0 bottom-0 h-[4px] bg-secondary hidden lg:block"
                  variants={{
                    rest: { width: 0, opacity: 0 },
                    highlight: { width: "100%", opacity: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
                />
              </motion.span>
              {restOfTitle}
            </span>
          ) : (
            <motion.div
              className="relative inline-block"
              initial="rest"
              animate="highlight"
            >
              <motion.span
                variants={{
                  rest: { color: "#ffffff" },
                  highlight: { color: "#f4b620" },
                }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {title}
              </motion.span>
              <motion.div
                className="absolute left-0 bottom-0 h-[4px] bg-secondary"
                variants={{
                  rest: { width: 0, opacity: 0 },
                  highlight: { width: "100%", opacity: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
              />
            </motion.div>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg"
        >
          {subtitle}
        </motion.p>

        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              {ctaText}
              <HiArrowRight size={20} />
            </a>

            {showButton && (
              <a
                href="/contacto#formulario-contacto"
                className="px-8 py-4 cursor-pointer text-lg bg-secondary text-white font-bold rounded-full hover:bg-secondary-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Agenda una Cita
              </a>
            )}
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
