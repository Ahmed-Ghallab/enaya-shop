import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr"; // لتغيير اتجاه الصفحة تلقائيًا
  };

  return (
    <button
      onClick={toggleLang}
      className="
        flex items-center justify-center gap-1 cursor-pointer ms-3
        w-[65px] h-[22px]
        text-xs text-white bg-[#111] 
        rounded-md shadow-sm
        transition-all duration-300 ease-in-out
        hover:bg-gradient-to-r hover:from-[#ff416c] hover:to-[#0a3b1b] hover:scale-105 hover:shadow-md
      "
    >
      <FaGlobe className="text-[12px] animate-pulse" />
      <span>{i18n.language === "ar" ? "عربي" : "EN"}</span>
    </button>
  );
}
