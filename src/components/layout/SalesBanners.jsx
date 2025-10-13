import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import kSecretImg from "../../assets/home/8-Set.jpg";
import medicubeImg from "../../assets/home/medicube.png";

export default function SalesBanners() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center">
      <div className="SalesBanners container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-4">

        {/* Left - K-Secret */}
        <div className="col-span-12 md:col-span-6 relative group cursor-pointer shadow-md overflow-hidden">
          <img
            src={kSecretImg}
            alt={t("salesBanners.kSecretAlt")}
            className="w-full h-80 md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white z-10">
            <span className="text-sm md:text-base uppercase tracking-widest font-semibold bg-black/60 px-3 py-1 rounded mb-2 text-red-500">
              {t("salesBanners.kSecretBadge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              {t("salesBanners.kSecretTitle")}
            </h2>
            <p className="text-base md:text-lg text-gray-200 max-w-sm mb-6 leading-relaxed">
              {t("salesBanners.kSecretDesc")}
            </p>
            <Link
              to="/shop"
              className="bg-white text-black font-semibold px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-all duration-300"
            >
              {t("salesBanners.shopNow")}
            </Link>
          </div>
        </div>

        {/* Right - Medicube */}
        <div className="col-span-12 md:col-span-6 relative group cursor-pointer shadow-md overflow-hidden">
          <img
            src={medicubeImg}
            alt={t("salesBanners.medicubeAlt")}
            className="w-full h-80 md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white z-10">
            <span className="text-sm md:text-base uppercase tracking-widest font-semibold bg-black/60 px-3 py-1 rounded mb-2">
              {t("salesBanners.medicubeBadge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              {t("salesBanners.medicubeTitle")}
            </h2>
            <p className="text-base md:text-lg text-gray-200 max-w-sm mb-6 leading-relaxed">
              {t("salesBanners.medicubeDesc")}
            </p>
            <Link
              to="/shop"
              className="bg-white text-black font-semibold px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-all duration-300"
            >
              {t("salesBanners.shopBestsellers")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
