import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { principios } from "../../data/historia";
import {
  HiLightBulb,
  HiClock,
  HiUserGroup,
  HiArrowRight,
  HiArrowLeft,
} from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function PrincipiosSlider() {
  const slides = [
    {
      id: "pasado",
      title: "El Principio",
      icon: HiLightBulb,
      content: principios.elPrincipio.text,
      image: principios.elPrincipio.image,
      subtitle: "Sembrando las bases",
    },
    {
      id: "presente",
      title: "El Presente",
      icon: HiClock,
      content: principios.elPresente.text,
      image: principios.elPresente.image,
      subtitle: "Creciendo contigo",
    },
    {
      id: "futuro",
      title: "Tu Futuro",
      icon: HiUserGroup,
      content: principios.tuFuturo.text,
      image: principios.tuFuturo.image,
      subtitle: "Cosechando tranquilidad",
      button: principios.tuFuturo.button,
      link: principios.tuFuturo.link,
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Custom Styles for Swiper Navigation */}
      <style>
        {`
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #cbd5e1;
            opacity: 1;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            width: 30px;
            border-radius: 6px;
            background: var(--color-secondary);
          }
        `}
      </style>

      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={700}
        observer={true}
        observeParents={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        className="w-full rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:h-[600px] items-center">
              {/* Content Side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1 relative overflow-hidden h-full">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center bg-primary gap-3 mb-6 dark:bg-secondary-900/30 px-4 py-2 rounded-full w-fit">
                    <slide.icon className="text-secondary w-5 h-5" />
                    <span className="text-secondary font-semibold text-sm tracking-wide uppercase">
                      {slide.subtitle}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900 dark:text-white leading-tight">
                    {slide.title}
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    {slide.content}
                  </p>

                  {slide.button && slide.link && (
                    <a
                      href={slide.link}
                      className="px-8 py-4 cursor-pointer dark:bg-secondary-900/30 text-lg bg-primary text-secondary font-bold rounded-3xl transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-block"
                    >
                      {slide.button}
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Image Side */}
              <div className="relative h-64 lg:h-full order-1 lg:order-2 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent z-20 lg:hidden">
                  <p className="text-white/90 text-sm font-medium">
                    Estrategias Patrimoniales
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Controls */}
      <div className="flex items-center justify-between mt-8">
        <div className="custom-pagination flex gap-2" />

        <div className="flex gap-4">
          <button className="custom-prev w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all text-gray-500 dark:text-gray-400 cursor-pointer">
            <HiArrowLeft size={20} />
          </button>
          <button className="cursor-pointer custom-next w-12 h-12 rounded-full bg-primary-900 text-white flex items-center justify-center hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            <HiArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
