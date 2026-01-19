import mdrtImage from "../assets/images/logros/mdrt.png";
import legionImage from "../assets/images/logros/legion.png";
import atlantisImage from "../assets/images/logros/atlantis.png";
import diamanteImage from "../assets/images/logros/diamante.png";
import campeonatoImage from "../assets/images/logros/segurosM.png";

export interface Achievement {
  id: number;
  title: string;
  description: string;
  image: ImageMetadata;
  badge?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Miembros MDRT Elite",
    description:
      "8 años consecutivos en la Million Dollar Round Table, la élite global en servicios financieros.",
    image: mdrtImage,
    badge: "Excelencia Global",
  },
  {
    id: 2,
    title: "Legión Centurión SMNYL",
    description:
      "Reconocimiento de alto prestigio por compromiso y excelencia en protección patrimonial.",
    image: legionImage,
    badge: "Asesores de Élite",
  },
  {
    id: 3,
    title: "Miembros Atlantis",
    description:
      "Distinción para el grupo selecto de asesores con mayor rendimiento y capacitación continua.",
    image: atlantisImage,
    badge: "Alto Rendimiento",
  },
  {
    id: 4,
    title: "Convención Diamante",
    description: "Reconocimiento para los mejores asesores a nivel nacional.",
    image: diamanteImage,
    badge: "Top Nacional",
  },
  {
    id: 5,
    title: "Campeonato Nacional",
    description:
      "Mención honorífica y primer lugar nacional en su generación de graduación profesional.",
    image: campeonatoImage,
    badge: "Mención Honorífica",
  },
];
