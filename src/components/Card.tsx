import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { LeafPattern, SmallSprout, Grass } from "./shared/NatureDecoration";

import leaf from "../assets/images/leaf.svg";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  link?: string;
  delay?: number;
  transitionNameImage?: string;
  transitionNameTitle?: string;
  isSecondary?: boolean;
  // Nueva propiedad para controlar la alineación de la imagen
  imagePosition?:
    | "object-center"
    | "object-top"
    | "object-bottom"
    | "object-left"
    | "object-right"
    | string;
}

const NatureDecorations = () => (
  <>
    <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
      <img
        src={leaf.src}
        alt=""
        className="w-20 h-20 text-secondary/40 transform rotate-180"
      />
    </div>

    <LeafPattern className="text-primary-900 dark:text-white" />

    <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
      <SmallSprout className="w-8 h-8 text-secondary/60" delay={0.1} />
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
      <Grass className="w-full h-full text-secondary/30" />
    </div>

    <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-700 ease-out z-20" />
  </>
);

const CardContent = ({
  image,
  title,
  imagePosition,
  transitionNameImage,
  icon,
  transitionNameTitle,
  description,
}: CardProps) => (
  <>
    {image && (
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          // Se agrega ${imagePosition} a las clases
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${imagePosition}`}
          style={
            transitionNameImage
              ? { viewTransitionName: transitionNameImage }
              : {}
          }
        />
      </div>
    )}
    <div className="p-6">
      {icon && (
        <div className="text-4xl mb-4 text-primary group-hover:text-secondary ease-in transition-all dark:text-primary-500">
          {icon}
        </div>
      )}
      <h3
        className="text-2xl font-bold mb-3 text-primary-700 dark:text-white group-hover:text-secondary transition-colors duration-300"
        style={
          transitionNameTitle ? { viewTransitionName: transitionNameTitle } : {}
        }
      >
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </>
);

export default function Card(props: CardProps) {
  const { link, delay = 0 } = props;

  // Estilos base de NatureCard
  const cardClasses =
    "relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group border border-transparent hover:border-primary/20 block h-full";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className="h-full"
    >
      {link ? (
        <a href={link} className={cardClasses}>
          <NatureDecorations />
          <CardContent {...props} />
        </a>
      ) : (
        <div className={cardClasses}>
          <NatureDecorations />
          <CardContent {...props} />
        </div>
      )}
    </motion.div>
  );
}
