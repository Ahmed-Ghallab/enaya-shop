import { motion as Motion } from "framer-motion";
import { FaShippingFast, FaExchangeAlt, FaLock, FaLeaf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function EnayaFeatures() {
  const { t } = useTranslation();

  const features = [
    { icon: <FaShippingFast />, title: t("enayaFeatures.fastShipping"), desc: t("enayaFeatures.fastShippingDesc") },
    { icon: <FaExchangeAlt />, title: t("enayaFeatures.easyReturns"), desc: t("enayaFeatures.easyReturnsDesc") },
    { icon: <FaLock />, title: t("enayaFeatures.securePayment"), desc: t("enayaFeatures.securePaymentDesc") },
    { icon: <FaLeaf />, title: t("enayaFeatures.allNatural"), desc: t("enayaFeatures.allNaturalDesc") },
  ];

  return (
    <section className="bg-pink-50 py-8 md:py-12 px-3">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
          {t("enayaFeatures.heading")}
        </h2>
        <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
          {t("enayaFeatures.subheading")}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <Motion.div
            key={i}
            className="flex flex-col items-center text-center cursor-pointer"
            whileHover={{
              y: -6,
              scale: 1.08,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <Motion.div
              className="text-2xl md:text-4xl text-pink-500 mb-2 md:mb-3"
              whileHover={{
                rotate: [-10, 10, -10, 0],
                transition: { duration: 0.6 },
              }}
            >
              {f.icon}
            </Motion.div>
            <h3 className="font-semibold text-gray-800 text-sm md:text-base">
              {f.title}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-0.5 md:mt-1">
              {f.desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
