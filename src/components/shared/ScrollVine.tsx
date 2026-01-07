import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollVine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Right side container */}
      <div className="fixed top-0 right-0 bottom-0 w-3 z-40 pointer-events-none hidden md:block">
        <div className="h-full w-full relative">
          {/* Background track */}
          <div className="absolute top-0 right-0 w-px h-full bg-gray-200 dark:bg-gray-800 opacity-20 mx-auto left-0" />

          {/* Growing Vine */}
          <motion.div
            className="absolute top-0 left-0 right-0 w-0.5 bg-secondary mx-auto origin-top"
            style={{ scaleY, height: "100%" }}
          />

          {/* Leaves decoration */}
          <LeafNode top="10%" scaleY={scaleY} />
          <LeafNode top="30%" scaleY={scaleY} side="left" />
          <LeafNode top="50%" scaleY={scaleY} />
          <LeafNode top="70%" scaleY={scaleY} side="left" />
          <LeafNode top="90%" scaleY={scaleY} />
        </div>
      </div>
    </>
  );
}

const LeafNode = ({
  top,
  scaleY,
  side = "right",
}: {
  top: string;
  scaleY: any;
  side?: "left" | "right";
}) => {
  // We can't transform motion value directly in setup generally, but we can use checks in render.
  // However, for simplicity in "subtle" effect:
  return (
    <div
      className={`absolute left-1/2 ${
        side === "left" ? "-translate-x-full" : ""
      } -ml-px w-4 h-4`}
      style={{ top }}
    >
      <motion.svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        style={{
          scale: scaleY, // This will make it grow with scroll passed pass it roughly or we can't simple map.
          // Actually, exact trigger per leaf is complex without multiple useTransforms.
          // Let's just make them visible if scaleY > threshold, or simpler: just always there but "grow" with the line?
          // Simpler: Just make the line have leaves attached that "unfurl".
          // For now, let's keep it static opacity but attached to the growing line concept.
        }}
        className={`text-secondary ${side === "left" ? "-scale-x-100" : ""}`}
      >
        <path
          d="M2 12C2 12 5 2 12 2C19 2 22 12 22 12C22 12 19 22 12 22C5 22 2 12 2 12Z"
          fill="currentColor"
        />
      </motion.svg>
    </div>
  );
};
