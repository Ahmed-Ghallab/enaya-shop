import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/newlogo.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gradient-to-b from-pink-50 via-white to-gray-100 text-gray-700 pt-12 pb-6 overflow-hidden">
      {/* Divider Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-orange-300 to-pink-400 animate-pulse"></div>

      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Enaya Links */}
        <div>
          <h3 className="font-bold text-lg text-gray-900">
            {t("footer.enaya.title")}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-pink-500 transition">
                {t("footer.enaya.links.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition">
                {t("footer.enaya.links.about")}
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-pink-500 transition">
                {t("footer.enaya.links.shop")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500 transition">
                {t("footer.enaya.links.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-bold text-lg text-gray-900">
            {t("footer.support.title")}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/terms-of-service"
                className="hover:text-pink-500 transition"
              >
                {t("footer.support.links.terms")}
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-pink-500 transition"
              >
                {t("footer.support.links.privacy")}
              </Link>
            </li>
            <li>
              <Link
                to="/refund-policy"
                className="hover:text-pink-500 transition"
              >
                {t("footer.support.links.refund")}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-pink-500 transition">
                {t("footer.support.links.faq")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Brand Column */}
        <div className="col-span-2 flex flex-col items-center md:col-span-1 md:items-start">
          <img src={logo} alt={t("footer.logoAlt")} className="h-30" />
          <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
            {t("footer.description")}
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-pink-600">Enaya</span>. by{" "}
        <a
          href="https://www.linkedin.com/in/ahmedghallab22/"
          target="_blank"
          rel="noopener noreferrer" // to prevent leaking the referrer information & improve privacy & security & prevent sending the HTTP Referer header
          className="font-medium text-pink-600 hover:text-pink-900 transition-colors duration-300 underline"
        >
          Ahmed Ghallab
        </a>{" "}
        {t("footer.rights")}
      </div>
    </footer>
  );
}
