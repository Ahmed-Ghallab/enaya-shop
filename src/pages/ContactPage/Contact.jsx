import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import BrandsSlider from "../../components/layout/BrandsSlider";
import EnayaFeatures from "../../components/layout/EnayaFeatures";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-b from-pink-50 to-white min-h-screen py-16 px-4">
      <div className="container mx-auto my-5">
        {/* breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center justify-center md:justify-start space-x-2">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-pink-600 transition"
          >
            <FaHome className="text-pink-500" />
            <span>{t("contact.breadcrumbHome")}</span>
          </Link>
          <span>/</span>
          <span className="text-pink-600 font-semibold">
            {t("contact.breadcrumbContact")}
          </span>
        </nav>

        {/* العنوان */}
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-12">
          {t("contact.title")}
        </h1>

        <div className="flex flex-col-reverse md:flex-row md:items-start gap-12 max-w-5xl mx-auto">
          {/* الفورم */}
          <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-pink-100 flex-1">
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                {t("contact.form.nameLabel")}
              </label>
              <input
                type="text"
                placeholder={t("contact.form.namePlaceholder")}
                className="w-full border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                {t("contact.form.emailLabel")}
              </label>
              <input
                type="email"
                placeholder={t("contact.form.emailPlaceholder")}
                className="w-full border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                {t("contact.form.messageLabel")}
              </label>
              <textarea
                rows="5"
                placeholder={t("contact.form.messagePlaceholder")}
                className="w-full border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold py-3 rounded-xl shadow-md hover:opacity-90 transition"
            >
              {t("contact.form.button")}
            </button>
          </form>

          {/* بيانات التواصل */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {t("contact.info.heading")}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
              {t("contact.info.paragraph")}
            </p>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">{t("contact.info.email")}</span>{" "}
                support@anaya.com
              </p>
              <p>
                <span className="font-semibold">{t("contact.info.phone")}</span>{" "}
                {t("contact.info.phoneValue")}
              </p>
              <p>
                <span className="font-semibold">{t("contact.info.address")}</span>{" "}
                {t("contact.info.addressValue")}
              </p>
            </div>

            {/* سوشيال ميديا */}
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>

      <EnayaFeatures />
      <BrandsSlider />

      {/* واتساب */}
      <a
        href="https://wa.me/201279547848"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-15 right-6 bg-green-500 text-white rounded-full p-2 shadow-lg animate-bounce hover:scale-110 transition z-50"
      >
        <FaWhatsapp size={32} title={t("contact.whatsapp")} />
      </a>
    </div>
  );
}
