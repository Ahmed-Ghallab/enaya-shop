import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";

import slideImg1 from "../../assets/skin-1004-centella.png";
import slideImg2 from "../../assets/BEAUTY OF JOSEON/beauty-of-joseon.webp";
import slideImg3 from "../../assets/girlMask2.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide key="slide1">
          <div className="grid grid-cols-1 md:grid-cols-12 h-full">
            <div className="md:col-span-8 flex items-center justify-center overflow-hidden group">
              <img
                src={slideImg1}
                alt="Skin1004 Product"
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
              />
            </div>

            <div className="md:col-span-4 flex flex-col justify-evenly items-start p-6 md:p-10 bg-white/80 md:bg-white text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-bold tracking-wide text-gray-900 uppercase mb-4">
                {t("hero.slide1.title")}
              </h2>
              <h4 className="text-xl md:text-2xl font-semibold text-pink-500 mb-3 uppercase">
                {t("hero.slide1.subtitle")}
              </h4>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                {t("hero.slide1.desc")}
              </p>

              <button className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-semibold uppercase tracking-wide rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
                {t("hero.slide1.button")}
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide key="slide2">
          <div className="grid grid-cols-1 md:grid-cols-12 h-full">
            <div className="md:col-span-6 flex flex-col justify-around items-center p-6 md:p-10 bg-white/80 md:bg-white text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-bold tracking-wide text-gray-900 uppercase mb-4">
                {t("hero.slide2.title")}
              </h2>
              <h4 className="text-xl md:text-2xl font-semibold text-pink-500 mb-3 uppercase">
                {t("hero.slide2.subtitle")}
              </h4>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                {t("hero.slide2.desc")}
              </p>

              <button className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-semibold uppercase tracking-wide rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
                {t("hero.slide2.button")}
              </button>
            </div>

            <div className="md:col-span-6 flex items-center justify-center">
              <img
                src={slideImg2}
                alt="Beauty of Joseon"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-95"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide key="slide3">
          <div className="slide3 relative flex flex-col-reverse md:flex-row h-full bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 py-10 w-full md:w-1/2 text-white text-center md:text-left">
              <p className="uppercase tracking-widest text-sm md:text-base mb-2 text-pink-300 font-bold">
                {t("hero.slide3.tag")}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {t("hero.slide3.title")}
              </h2>
              <p className="text-sm md:text-lg mb-6">{t("hero.slide3.desc")}</p>
              <button className="md:w-1/4 px-8 py-3 border-2 border-white text-white font-semibold uppercase tracking-wide rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
                {t("hero.slide3.button")}
              </button>
            </div>

            <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center md:justify-end">
              <img
                src={slideImg3}
                alt="Hydration Mask"
                loading="lazy"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev custom-nav">
          <FaChevronLeft />
        </div>
        <div className="swiper-button-next custom-nav">
          <FaChevronRight />
        </div>
      </Swiper>
    </section>
  );
}
