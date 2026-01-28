import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import { achievements } from "../../data/reconocimientos";
import leafImage from "../../assets/images/leaf.svg";

import "swiper/css";

import "swiper/css/effect-coverflow";

const Reconocimientos = () => {
  return (
    <Section
      title="Nuestros Reconocimientos"
      subtitle="Cada reconocimiento refleja la confianza que nuestros clientes y asegurados han depositado en nosotros. Y nos impulsa a seguir brindando un servicio de excelencia."
      background="dark"
      className="overflow-visible! py-40"
    >
      <div className="container mx-auto md:mt-20 px-4 relative z-10">
        <div className="absolute top-10 left-0 opacity-10 pointer-events-none hidden lg:block rotate-45">
          <img
            src={leafImage.src}
            alt=""
            className="w-32 h-32 text-secondary"
          />
        </div>
        <div className="absolute bottom-10 right-0 opacity-10 pointer-events-none hidden lg:block -rotate-12 scale-x-[-1]">
          <img
            src={leafImage.src}
            alt=""
            className="w-40 h-40 text-secondary"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, EffectCoverflow, Mousewheel]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            mousewheel={{
              forceToAxis: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            className="w-full py-12 px-4 !overflow-visible recognition-swiper"
          >
            {achievements.map((achievement) => (
              <SwiperSlide
                key={achievement.id}
                className="h-auto transition-all duration-300"
              >
                {({ isActive }) => (
                  <div
                    className={`group relative bg-white/90 dark:bg-gray-800 backdrop-blur-xl rounded-2xl p-8 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border transition-all duration-500 flex flex-col items-center text-center 
                    ${
                      isActive
                        ? "scale-110 border-secondary-400 z-10 shadow-xl ring-1 ring-secondary-200 bg-white"
                        : "scale-90 opacity-70 grayscale-[0.5] border-white/20 hover:opacity-100 hover:grayscale-0"
                    }`}
                  >
                    {achievement.badge && (
                      <div
                        className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full border transition-colors duration-300
                          ${
                            isActive
                              ? "bg-secondary-50 text-secondary-900 border-secondary-200"
                              : "bg-gray-100 text-gray-500 border-gray-200"
                          }`}
                      >
                        {achievement.badge}
                      </div>
                    )}

                    <div className="relative mb-6 p-4">
                      <div
                        className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-500 ${
                          isActive
                            ? "bg-secondary-200/50 opacity-100"
                            : "opacity-0"
                        }`}
                      ></div>

                      <img
                        src={achievement.image.src}
                        alt={achievement.title}
                        className="w-32 h-32 object-contain relative z-10 drop-shadow-md transform transition-transform duration-500 group-hover:scale-105"
                        width={achievement.image.width}
                        height={achievement.image.height}
                        loading="lazy"
                      />
                    </div>

                    <h3
                      className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        isActive
                          ? "text-secondary-600"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {achievement.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {achievement.description}
                    </p>

                    <div
                      className={`mt-6 w-16 h-1 rounded-full bg-linear-to-r transition-all duration-500
                      ${
                        isActive
                          ? "w-24 from-secondary-400 to-primary-500"
                          : "from-transparent via-gray-300 to-transparent"
                      }`}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </Section>
  );
};

export default Reconocimientos;
