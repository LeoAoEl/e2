import { testimoniosData } from "../../data/testimonios";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonios = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-primary-700">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Historias reales de personas que han confiado en nosotros para
            proteger su futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimoniosData.map((testimonio, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col relative h-full hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-6 right-8 text-primary-200 dark:text-gray-400 opacity-50">
                <FaQuoteLeft size={40} />
              </div>

              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary">
                  <img
                    src={
                      typeof testimonio.imagen === "string"
                        ? testimonio.imagen
                        : testimonio.imagen.src
                    }
                    alt={testimonio.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-700 dark:text-white">
                    {testimonio.nombre}
                  </h3>
                  {testimonio.isSocial ? (
                    <a
                      href={testimonio.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-200 hover:text-primary-400 transition-colors"
                    >
                      {testimonio.ocupacion}
                    </a>
                  ) : (
                    <p className="text-sm text-primary dark:text-primary-200 font-medium">
                      {testimonio.ocupacion}
                    </p>
                  )}
                </div>
              </div>

              <div className="grow">
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{testimonio.testimonio}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
