import Card from "../Card";
import Section from "../Section";
import { FiMapPin, FiUsers, FiTrendingUp, FiHeart } from "react-icons/fi";

const ProcesoHumano = () => {
  return (
    <Section
      title="Con un proceso totalmente humano"
      subtitle="Ofrecemos un proceso cercano, humano y profesional"
      background="light"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          title="Analizamos tu situación actual"
          description="Conocemos tu contexto financiero, familiar y profesional para identificar riesgos, oportunidades y áreas de mejora."
          icon={<FiMapPin />}
          delay={0}
        />
        <Card
          title="Realizamos una asesoría personalizada"
          description="Te explicamos las opciones de forma clara y honesta, resolviendo dudas y construyendo confianza desde el primer encuentro."
          icon={<FiUsers />}
          delay={0.1}
        />
        <Card
          title="Diseñamos tu estrategia patrimonial"
          description="Creamos una solución a tu medida que puede incluir protección, ahorro, retiro, inversión y planes educativos, según tus objetivos."
          icon={<FiTrendingUp />}
          delay={0.2}
        />
        <Card
          title="Te acompañamos en cada etapa"
          description="Estamos contigo en el seguimiento, ajustes y toma de decisiones importantes a lo largo de tu vida financiera."
          icon={<FiHeart />}
          delay={0.3}
        />
      </div>
    </Section>
  );
};

export default ProcesoHumano;
