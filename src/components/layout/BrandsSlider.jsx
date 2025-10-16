import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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

  const brands = [
    { name: "Anua", logo: logo1, path: "/brand/anua" },
    { name: "Beauty of Joseon", logo: logo2, path: "/brand/beauty-of-joseon" },
    { name: "COSRX", logo: logo3, path: "/brand/cosrx" },
    { name: "SKIN1004", logo: logo4, path: "/brand/skin1004" },
    { name: "K-Secret", logo: logo5, path: "/brand/k-secret" },
    { name: "Laura Mercier", logo: logo6, path: "/brand/laura-mercier" },
    { name: "Medicube", logo: logo7, path: "/brand/medicube" },
    { name: "Dr.Althea", logo: logo8, path: "/brand/dr.althea" },
    { name: "Mary & May", logo: logo9, path: "/brand/mary-and-may" },
    { name: "Biodance", logo: logo10, path: "/brand/biodance" },
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
        {brands.map((brand, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
          >
            <Link to={brand.path}>
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition hover:scale-105"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
