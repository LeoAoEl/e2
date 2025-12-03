import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import LogoW from "../assets/images/LogoW.svg";
import LogoB from "../assets/images/LOGO-E2-SIN-TEXTO.svg";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Qué Hacemos", href: "/que-hacemos" },
  { name: "Quiénes Somos", href: "/quienes-somos" },
  { name: "Eventos", href: "/eventos" },
  { name: "Agenda una Cita", href: "/agenda" },
  { name: "Blog", href: "/blog" },
  { name: "Contáctanos", href: "/contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Set current path on mount
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

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
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full cursor-pointer transition-all hover:scale-110 ${
                isScrolled
                  ? "bg-gray-100 dark:bg-gray-800 text-secondary dark:text-secondary-400 shadow-sm"
                  : "bg-white/10 text-secondary-600 backdrop-blur-sm hover:bg-white/20"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${
                isScrolled
                  ? "bg-gray-100 dark:bg-gray-800 text-yellow-500 dark:text-yellow-400"
                  : "bg-white/10 text-yellow-300 backdrop-blur-sm"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors cursor-pointer ${
                isScrolled
                  ? "text-gray-900 dark:text-white"
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
              className="lg:hidden mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800"
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
