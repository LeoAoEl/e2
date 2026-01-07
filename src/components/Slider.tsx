import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import NatureButton from "./shared/NatureButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideData {
  title: string;
  buttonText?: string;
  buttonRef?: string;
}

interface SliderProps {
  videoSrc: string;
  slides: SlideData[];
}

export default function Slider({ videoSrc, slides }: SliderProps) {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Swiper Content */}
      <div className="relative z-20 w-full h-full">
        <style>
          {`
            .swiper-button-next, .swiper-button-prev {
              color: var(--color-secondary) !important;
            }
            .swiper-pagination-bullet-active {
              background: var(--color-secondary) !important;
            }
            .swiper-pagination-bullet {
              background: white;
              opacity: 0.7;
            }
          `}
        </style>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center w-full h-full text-center px-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl drop-shadow-lg"
                >
                  {slide.title}
                </motion.h2>

                {slide.buttonText && slide.buttonRef && (
                  <NatureButton
                    href={slide.buttonRef}
                    className="font-semibold"
                  >
                    {slide.buttonText}
                  </NatureButton>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
