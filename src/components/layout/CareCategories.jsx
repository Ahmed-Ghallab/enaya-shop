import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HairCareImg from "../../assets/careCategories/HairCare.png";
import FaceCareImg from "../../assets/careCategories/FaceCare.png";
import BodyCareImg from "../../assets/careCategories/BodyCare.png";
import FootCareImg from "../../assets/careCategories/FootCare.webp";
import SupplementsImg from "../../assets/careCategories/SupplementsN.jpg";
import AccessoriesImg from "../../assets/careCategories/Accessories&Tools.jpg";
import MakeupImg from "../../assets/careCategories/makeup2.png";
import "./CareCategories.css";

export default function CareCategories() {
  const { t } = useTranslation();

  const categories = [
    { id: 1, title: t("care.hair"), img: HairCareImg, slug: "hair_care" },
    { id: 2, title: t("care.face"), img: FaceCareImg, slug: "skincare" },
    { id: 3, title: t("care.body"), img: BodyCareImg, slug: "body_care" },
    { id: 4, title: t("care.foot"), img: FootCareImg, slug: "foot_care" },
    { id: 5, title: t("care.supplements"), img: SupplementsImg, slug: "supplements" },
    { id: 6, title: t("care.accessories"), img: AccessoriesImg, slug: "accessories & tools" },
    { id: 7, title: t("care.makeup"), img: MakeupImg, slug: "makeup" },
  ];

  return (
    <section className="care-categories-section py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            {t("care.section_title")}
          </h2>
          <p className="text-gray-500 text-sm md:text-lg">
            {t("care.section_subtitle")}
          </p>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          speed={800}
          spaceBetween={14}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 4, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 14 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="flex items-center justify-center"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={cat.id}>
              <Link to={`/categories/${cat.slug}`}>
                <Motion.div
                  className="flex flex-col items-center cursor-pointer group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.06 }}
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-xl backdrop-blur-sm bg-white/30 group-hover:shadow-2xl transition-all duration-300">
                      <img
                        src={cat.img}
                        alt={cat.title}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-full group-hover:rotate-3 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <h3 className="mt-2 text-xs sm:text-sm md:text-lg font-semibold text-gray-700 group-hover:text-orange-500 transition-colors duration-300 text-center">
                    {cat.title}
                  </h3>
                </Motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
