import Cynthya from "../assets/images/testimonio/DrCynthia.jpeg";
import Alfredo from "../assets/images/testimonio/AlfredoJ.jpeg";

interface Testimonio {
  nombre: string;
  ocupacion: string;
  testimonio: string;
  imagen: ImageMetadata | string;
  isSocial?: boolean;
  social?: string;
}

export const testimoniosData: Testimonio[] = [
  {
    nombre: "Dra. Cynthia Mendoza Rodríguez",
    isSocial: true,
    social: "https://cutique.com.mx/",
    imagen: Cynthya,
    ocupacion: "Dermatóloga — Cutique The Derma Company",
    testimonio:
      "Estoy encantada con el servicio, la amabilidad y la calidez en todas mis transacciones de seguros. Me han ayudado a decidir correctamente dónde invertir en seguros médicos, de retiro y de inversión. Siempre están al pendiente y me apoyan en todo para hacerme la vida más fácil. Estoy profundamente agradecida por su acompañamiento y consejos. Sin duda, la mejor opción en seguros.",
  },
  {
    nombre: "Alfredo Jiménez",
    imagen: Alfredo,
    ocupacion: "Trabajador de la construcción (trabajos en alturas)",
    testimonio:
      "A los 19 contraté un seguro por prevención, pues trabajo en la construcción de bodegas, en altura. Tras una caída de 9 m, fui atendido de inmediato en uno de los mejores hospitales de Monterrey. El equipo de E2 me acompañó en todo, me operaron columna y pie, y el seguro cubrió todos los gastos. Hoy sigo recibiendo apoyo, haber contratado mi Seguro de Gastos Médicos fue la mejor decisión, y hacerlo con E2 un gran acierto.",
  },
];
