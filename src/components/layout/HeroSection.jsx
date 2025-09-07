import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./HeroSection.css";

import slideImg1 from "../../assets/skin-1004-centella.png";
import slideImg2 from "../../assets/BEAUTY OF JOSEON/beauty-of-joseon.webp";
import slideImg3 from "../../assets/girlMask2.png";

export default function Hero() {
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
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-12 h-full">
            {/* Left Image Section */}
            <div className="md:col-span-8 flex items-center justify-center overflow-hidden group">
              <img
                src={slideImg1}
                alt="Beauty Model"
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
              />
            </div>

            {/* Right Text Section */}
            <div className="md:col-span-4 flex flex-col justify-evenly items-start p-6 md:p-10 bg-white/80 md:bg-white text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-bold tracking-wide text-gray-900 uppercase mb-4">
                SKIN1004
              </h2>
              <h4 className="text-xl md:text-2xl font-semibold text-pink-500 mb-3 uppercase">
                the untouched nature{" "}
                <span className="text-gray-800">CENTELLA</span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                The Korean tradition of facial skincare
              </p>

              <button className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-semibold uppercase tracking-wide rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-12 h-full">
            {/* left Text Section */}
            <div className="md:col-span-6 flex flex-col justify-around items-center p-6 md:p-10 bg-white/80 md:bg-white text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-bold tracking-wide text-gray-900 uppercase mb-4">
                Korean Beauty
              </h2>
              <h4 className="text-xl md:text-2xl font-semibold text-pink-500 mb-3 uppercase">
                BEAUTY OF JOSEON
                <span className="text-gray-800"> 조선미녀 </span>
              </h4>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Discover the finest Korean skincare & makeup, crafted with
                natural ingredients and innovative formulas for every skin type.
                Pamper your skin with premium beauty that blends tradition and
                modern science.
              </p>

              <button className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-semibold uppercase tracking-wide rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
                Explore Now
              </button>
            </div>

            {/* right Image Section */}
            <div className="md:col-span-6 flex items-center justify-center">
              <img
                src={slideImg2}
                alt="Beauty Model"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-95"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide3 relative flex flex-col-reverse md:flex-row h-full bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 py-10 w-full md:w-1/2 text-white text-center md:text-left">
              <p className="uppercase tracking-widest text-sm md:text-base mb-2 text-pink-300 font-bold">
                new arrivals
              </p>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Biodance Hydro Cera-nol Real Deep Mask
              </h2>
              <p className="text-sm md:text-lg mb-6">
                Deep hydration & soothing care with Hydro Cera-nol and
                mineral-rich glacial water — gentle even on sensitive skin
              </p>
              <button className="md:w-1/4 px-8 py-3 border-2 border-white text-white font-semibold uppercase tracking-wide rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
                Shop Now
              </button>
            </div>

            <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center md:justify-end">
              <img
                src={slideImg3}
                alt="Confident Woman"
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
