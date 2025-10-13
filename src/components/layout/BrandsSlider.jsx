import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";

import logo1 from "../../assets/BrandLogos/Anua.png";
import logo2 from "../../assets/BrandLogos/beauty of joseon-Photoroom2.png";
import logo3 from "../../assets/BrandLogos/COSRX.png";
import logo4 from "../../assets/BrandLogos/skin1004-Photoroom.png";
import logo5 from "../../assets/BrandLogos/ksecret -Photoroom.png";
import logo6 from "../../assets/BrandLogos/lauraMercier-Photoroom.png";
import logo7 from "../../assets/BrandLogos/medicube-Photoroom.png";
import logo8 from "../../assets/BrandLogos/dr-Photoroom.png";
import logo9 from "../../assets/BrandLogos/mary&may-Photoroom.png";
import logo10 from "../../assets/BrandLogos/biodance-Photoroom.png";

export default function BrandsSlider() {
  const { t } = useTranslation();

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

  return (
    <section className="bg-white py-5">
      {/* Title */}
      <div className="flex items-center justify-center mb-8 overflow-hidden">
        <div className="flex-1 h-px bg-gradient-to-r from-pink-400 via-orange-300 to-pink-400 animate-pulse min-w-0"></div>
        <h2 className="mx-8 text-xl md:text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-orange-300 to-pink-400 bg-clip-text text-transparent uppercase">
          {t("brandsSlider.title")}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-pink-400 via-orange-300 to-pink-400 animate-pulse min-w-0"></div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 3 },
          480: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`${t("brandsSlider.brandAlt")} ${index + 1}`}
              className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
