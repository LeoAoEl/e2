import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import LogoW from "../assets/images/LogoW.svg";
import ThemeToggle from "./shared/ThemeToggle";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Qué Hacemos", href: "/que-hacemos" },
  { name: "Quiénes Somos", href: "/quienes-somos" },
  { name: "Eventos", href: "/eventos" },
  { name: "Blog", href: "/blog" },
  { name: "Contáctanos", href: "/contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  // Theme state is now handled by ThemeToggle, but we need it for header background?
  // Actually, the header background logic relied on 'theme' state.
  // We need to know the theme here too if we want to change the header background based on theme.
  // However, usually we can use CSS classes (dark:bg-...) instead of inline styles for theme.
  // Let's check the original code.
  // Original: backgroundColor: isScrolled ? theme === "dark" ? "rgba(17, 24, 39, 0.95)" : "rgba(255, 255, 255, 0.95)"
  // We can use CSS variables or classes. But since it's Framer Motion 'animate', it expects values.
  // We can listen to the theme change or just use a class-based approach for the background and let CSS handle it,
  // but Framer Motion might fight with it.
  // Alternatively, we can keep the theme state here just for the background, but sync it?
  // Or better, use a custom hook for theme.

  // For now, to keep it simple and robust, I'll re-implement the theme listener here or just use CSS classes for the header background
  // and remove the inline style for background color related to theme, relying on Tailwind's dark mode classes.
  // But wait, it uses 'animate' prop.

  // Let's try to use a hook to share state if needed, or just read from localStorage/DOM.
  // Actually, I'll create a useTheme hook? No, I'll just duplicate the listener for now to minimalize changes,
  // OR I can just use className for the background color and animate opacity/backdrop filter?

  // Let's stick to the simplest refactor: Use ThemeToggle for the button, but keep the theme state here for the background logic
  // to ensure visual consistency without breaking the animation.

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Observer for class changes on html element to sync theme state
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set current path on mount
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: isScrolled
          ? theme === "dark"
            ? "rgba(17, 24, 39, 0.95)"
            : "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <nav className="container mx-auto px-4 py-0">
        <div className="relative flex items-center justify-end lg:justify-between min-h-[80px]">
          <a
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 block w-48 md:w-64 transition-transform hover:scale-110"
          >
            <img
              src={LogoW.src}
              alt="Logo"
              className="w-full h-auto drop-shadow-lg"
            />
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive =
                currentPath === item.href ||
                (item.href !== "/" && currentPath.startsWith(item.href));
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-colors hover:opacity-100 px-1 py-1 ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-200"
                      : "text-white drop-shadow-lg"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              );
            })}
            <ThemeToggle
              className={
                isScrolled
                  ? "bg-gray-100 dark:bg-gray-800 text-secondary dark:text-secondary-400 shadow-sm"
                  : "bg-white/10 text-secondary-600 backdrop-blur-sm hover:bg-white/20"
              }
            />
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle
              className={
                isScrolled
                  ? "bg-gray-100 dark:bg-gray-800 text-yellow-500 dark:text-yellow-400"
                  : "bg-white/10 text-yellow-300 backdrop-blur-sm"
              }
            />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors cursor-pointer ${
                isScrolled
                  ? "text-primary-700 dark:text-white"
                  : "text-white drop-shadow-lg"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white dark:bg-primary-700 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col space-y-1 p-4">
                {navItems.map((item) => {
                  const isActive =
                    currentPath === item.href ||
                    (item.href !== "/" && currentPath.startsWith(item.href));
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`relative py-3 px-4 rounded-lg transition-colors ${
                        isActive
                          ? "bg-secondary-50 dark:bg-primary-900 text-primary-700 dark:text-secondary font-semibold"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-secondary rounded-r-full" />
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
