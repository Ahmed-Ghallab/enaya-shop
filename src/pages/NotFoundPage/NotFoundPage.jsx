import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import notFoundImg from "../../assets/icons/404NotFound.png";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-pink-100 to-white flex flex-col items-center justify-center text-center pb-16">
      {/* img 404 and motion */}
      <motion.img
        src={notFoundImg}
        alt="404 Illustration"
        className="w-[200px] sm:w-[300px] md:w-[320px] lg:w-[380px] mb-2 object-contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: [0, 30, 0, -30, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl sm:text-7xl font-extrabold text-pink-500 mb-4"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800"
      >
        {t("notFound.title", { defaultValue: "Page Not Found" })}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-600 max-w-md mb-8 text-sm sm:text-base"
      >
        {t("notFound.message", {
          defaultValue:
            "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
        })}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-pink-500 text-white font-medium rounded-full shadow-md hover:bg-pink-600 transition-all text-sm sm:text-base"
        >
          {t("notFound.backHome", { defaultValue: "Back to Home" })}
        </Link>
      </motion.div>
    </div>
  );
}
