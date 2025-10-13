import { FaHome, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import imgAbout1 from "../../assets/home/kSecretImg.jpg";
import imgAbout2 from "../../assets/home/skin-carebanner-design.webp";
import BrandsSlider from "../../components/layout/BrandsSlider";
import EnayaFeatures from "../../components/layout/EnayaFeatures";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
      <div className="container mx-auto my-5">
        {/* breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-pink-600 transition"
          >
            <FaHome className="text-pink-500" />
            <span>{t("about.breadcrumbs.home")}</span>
          </Link>
          <span>/</span>
          <span className="text-pink-600 font-semibold">{t("about.breadcrumbs.about")}</span>
        </nav>

        {/* العنوان */}
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-12">
          {t("about.title")}
        </h1>

        {/* سكشن 1 */}
        <section className="mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t("about.intro.text1")}{" "}
            <span className="font-semibold text-pink-600">{t("about.brandName")}</span>{" "}
            {t("about.intro.text2")}
          </p>
        </section>

        {/* سكشن 2 */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {t("about.mission.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("about.mission.text")}
            </p>
          </div>
          <div>
            <img
              src={imgAbout1}
              alt={t("about.mission.alt")}
              className="rounded-2xl shadow-xl border border-pink-100"
            />
          </div>
        </section>

        {/* سكشن 3 */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img
              src={imgAbout2}
              alt={t("about.community.alt")}
              className="rounded-2xl shadow-xl border border-pink-100"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {t("about.community.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t("about.community.text")}
            </p>
          </div>
        </section>

        {/* سكشن 4 */}
        <section className="text-center bg-white rounded-2xl shadow-lg border border-pink-400 p-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {t("about.whyChoose.title")}
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t("about.whyChoose.text1")}{" "}
            <span className="font-semibold text-pink-600">{t("about.brandName")}</span>
            {t("about.whyChoose.text2")}
          </p>
        </section>

        {/* واتساب */}
        <a
          href="https://wa.me/201279547848"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-15 right-6 bg-green-500 text-white rounded-full p-2 shadow-lg animate-bounce hover:scale-110 transition z-50"
        >
          <FaWhatsapp size={32} />
        </a>
      </div>

      <EnayaFeatures />
      <BrandsSlider />
    </div>
  );
}
