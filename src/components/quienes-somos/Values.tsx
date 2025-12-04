import Card from "../Card";
import {
  HiBadgeCheck,
  HiShieldCheck,
  HiLightBulb,
  HiUserGroup,
  HiThumbUp,
} from "react-icons/hi";

export default function Values() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="w-full md:w-[calc(33.333%-2rem)]">
        <Card
          title="Excelencia"
          description="Nos esforzamos por entregar productos de la más alta calidad en cada proyecto."
          delay={0}
          icon={<HiBadgeCheck size={40} />}
          isSecondary={true}
        />
      </div>
      <div className="w-full md:w-[calc(33.333%-2rem)]">
        <Card
          title="Integridad"
          description="Actuamos con honestidad y transparencia en todas nuestras relaciones."
          delay={0.1}
          icon={<HiShieldCheck size={40} />}
          isSecondary={true}
        />
      </div>
      <div className="w-full md:w-[calc(33.333%-2rem)]">
        <Card
          title="Innovación"
          description="Buscamos constantemente nuevas formas de resolver problemas y crear valor."
          delay={0.2}
          icon={<HiLightBulb size={40} />}
          isSecondary={true}
        />
      </div>
      <div className="w-full md:w-[calc(33.333%-2rem)]">
        <Card
          title="Cercanía"
          description="Estamos disponibles 24/7 para acompañarte y brindarte la atención que mereces."
          delay={0.3}
          icon={<HiUserGroup size={40} />}
          isSecondary={true}
        />
      </div>
      <div className="w-full md:w-[calc(33.333%-2rem)]">
        <Card
          title="Compromiso"
          description="Tu tranquilidad financiera es nuestra prioridad y trabajamos para construirla contigo."
          delay={0.4}
          icon={<HiThumbUp size={40} />}
          isSecondary={true}
        />
      </div>
    </div>
  );
}
