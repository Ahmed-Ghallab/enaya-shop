import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./AnimatedCategoriesSection.css";
import { useTranslation } from "react-i18next";

import DEAL from "../../../assets/icons/50OFF.png";
import GiBeautyBag from "../../../assets/icons/BeautyBag.png";
import BestSeller from "../../../assets/icons/BestSeller.png";
import timeDeals from "../../../assets/icons/TimeDeal2.png";
import newArrival from "../../../assets/icons/NewArrival.png";
import Trending from "../../../assets/icons/brands.png";
import Skincare from "../../../assets/icons/Skincare.png";
import Makeup from "../../../assets/icons/Makeup.png";

const categories = [
  { id: 1, nameKey: "categoriesIconName.deal", icon: DEAL },
  { id: 2, nameKey: "categoriesIconName.beautyBag", icon: GiBeautyBag },
  { id: 3, nameKey: "categoriesIconName.bestSeller", icon: BestSeller },
  { id: 4, nameKey: "categoriesIconName.timeDeal", icon: timeDeals },
  { id: 5, nameKey: "categoriesIconName.newArrival", icon: newArrival },
  { id: 6, nameKey: "categoriesIconName.trending", icon: Trending },
  { id: 7, nameKey: "categoriesIconName.skincare", icon: Skincare },
  { id: 8, nameKey: "categoriesIconName.makeup", icon: Makeup },
];

export default function AnimatedCategoriesSection() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const animations = {
    rotate: {
      rotate: [0, 10, -10, 0],
      transition: { repeat: Infinity, duration: 3 },
    },
    shake: { x: [0, 5, -5, 0], transition: { repeat: Infinity, duration: 2 } },
    bounce: { y: [0, -8, 0], transition: { repeat: Infinity, duration: 1.8 } },
  };

  return (
    <section className="py-10 bg-gradient-to-r from-pink-200 via-white to-pink-200">
      <h2 className="text-center text-2xl font-bold mb-8 text-pink-700">
        {t("animatedCategories.title")}
      </h2>

      <div className="py-1">
        <Swiper
          spaceBetween={12}
          slidesPerView={5}
          breakpoints={{
            480: { slidesPerView: 5 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
          className="px-6 py-4"
        >
          {categories.map((cat, index) => (
            <SwiperSlide
              key={cat.id}
              className="flex justify-center items-center"
            >
              <Motion.div
                className="flex flex-col items-center cursor-pointer my-3"
                whileHover={{ scale: 1.1 }}
                animate={
                  index % 3 === 0
                    ? animations.rotate
                    : index % 3 === 1
                    ? animations.shake
                    : animations.bounce
                }
                onClick={() => navigate("/categories")}
              >
                <div
                  className="rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden
                              w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-transform duration-300"
                >
                  <img
                    src={cat.icon}
                    alt={t(cat.nameKey)}
                    className="object-contain w-12 h-12 sm:w-15 sm:h-15 md:w-22 md:h-22"
                  />
                </div>
                <p className="text-xs sm:text-sm mt-2 font-semibold text-gray-700 text-center">
                  {t(cat.nameKey)}
                </p>
              </Motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
