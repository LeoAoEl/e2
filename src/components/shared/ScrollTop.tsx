import React, { useState, useEffect } from "react";

const ArrowUp = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke={color}
    className="w-6 h-6 dark:text-black"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full cursor-pointer bg-primary-200 dark:bg-secondary hover:scale-110 transition-all ease-in  hover:bg-accent shadow-lg focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp color="black" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
