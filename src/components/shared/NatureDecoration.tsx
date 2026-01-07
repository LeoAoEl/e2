import { motion } from "framer-motion";

interface NatureProps {
  className?: string;
  delay?: number;
  color?: string;
}

export const Leaf = ({
  className = "",
  delay = 0,
  color = "currentColor",
}: NatureProps) => {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ scale: 0, opacity: 0, rotate: -45 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      <path
        d="M12 21C12 21 13.5 16.5 18 15C22.5 13.5 22.5 9 19.5 6C16.5 3 12 3 12 3C12 3 7.5 3 4.5 6C1.5 9 1.5 13.5 6 15C10.5 16.5 12 21 12 21Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21C12 21 9 12 12 3"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export const Vine = ({
  className = "",
  delay = 0,
  color = "currentColor",
}: NatureProps) => {
  return (
    <motion.svg
      width="40"
      height="12"
      viewBox="0 0 40 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1, delay, ease: "easeInOut" }}
    >
      <motion.path
        d="M2 6C8 6 10 2 16 2C22 2 24 10 30 10C36 10 38 6 38 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      />
      <motion.path
        d="M10 2C10 2 11 0 13 0"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.5 }}
      />
      <motion.path
        d="M24 10C24 10 23 12 21 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.8 }}
      />
    </motion.svg>
  );
};

export const BranchCorner = ({
  className = "",
  delay = 0,
  color = "currentColor",
}: NatureProps) => {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.path
        d="M40 2C30 2 15 2 8 10C2 18 2 30 2 40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
      />
      {/* Leaves */}
      <motion.path
        d="M10 8C10 8 14 6 16 9C18 12 10 8 10 8Z"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.4 }}
      />
      <motion.path
        d="M5 16C5 16 1 14 3 11C5 8 5 16 5 16Z"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.7 }}
      />
    </motion.svg>
  );
};

export const VineUnderline = ({
  className = "",
  delay = 0,
  color = "currentColor",
}: NatureProps) => {
  return (
    <motion.svg
      width="100%"
      height="10"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <motion.path
        d="M0 5 Q 25 2, 50 5 Q 75 8, 100 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay, ease: "easeInOut" }}
      />
      {/* Small leaves along the vine */}
      <motion.path
        d="M25 4 C 25 4, 28 0, 30 2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
      />
      <motion.path
        d="M75 6 C 75 6, 72 10, 70 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.4 }}
      />
    </motion.svg>
  );
};

export const LeafPattern = ({ className = "", delay = 0 }: NatureProps) => {
  return (
    <div
      className={`absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden ${className}`}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="leaf-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(30)"
          >
            <path
              d="M30 0C30 0 35 15 45 20C55 25 55 10 45 5C35 0 30 0 30 0Z"
              fill="currentColor"
            />
            <path
              d="M0 30C0 30 5 45 15 50C25 55 25 40 15 35C5 30 0 30 0 30Z"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
      </svg>
    </div>
  );
};

export const SmallSprout = ({
  className = "",
  delay = 0,
  color = "currentColor",
}: NatureProps) => {
  return (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
    >
      <path
        d="M5 25 Q 10 20, 15 10 Q 20 20, 25 25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 10 C 15 10, 12 5, 10 7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 10 C 15 10, 18 5, 20 7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  );
};
