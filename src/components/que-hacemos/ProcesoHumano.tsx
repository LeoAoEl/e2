import Card from "../Card";
import Section from "../Section";
import { FiMapPin, FiUsers, FiTrendingUp, FiHeart } from "react-icons/fi";

const ProcesoHumano = () => {
  return (
    <Section title="Con un proceso totalmente humano" background="light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          title="Identifica tu punto de partida"
          description="¿Cuál es el primer paso para crear un negocio? No es tan difícil como crees."
          icon={<FiMapPin />}
          delay={0}
        />
        <Card
          title="Hacemos una junta personalizada"
          description="Haz realidad esas ideas geniales que tienes en la cabeza."
          icon={<FiUsers />}
          delay={0.1}
        />
        <Card
          title="Encontramos tu mejor estrategia"
          description="Aprende a presentarte y mostrar tus ideas con confianza."
          icon={<FiTrendingUp />}
          delay={0.2}
        />
        <Card
          title="Te ayudamos en tu vida"
          description="Derriba muros para hacer que tu pequeña empresa se convierta en un imperio."
          icon={<FiHeart />}
          delay={0.3}
        />
      </div>
    </Section>
  );
};

export default ProcesoHumano;
