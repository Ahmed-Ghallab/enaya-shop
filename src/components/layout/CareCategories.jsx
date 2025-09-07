import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import HairCareImg from "../../assets/careCategories/HairCare.webp";
import faceCareImg from "../../assets/careCategories/FaceCare.webp";
import footCareImg from "../../assets/careCategories/FootCare.webp";
import bodyCareImg from "../../assets/careCategories/BodyCare.webp";
import "./CareCategories.css"; // 👈 ملف CSS خارجي للـ spin

export default function CareCategories() {
  const categories = [
    { id: 1, title: "Hair Care", img: HairCareImg, link: "/hair-care" },
    { id: 2, title: "Face Care", img: faceCareImg, link: "/face-care" },
    { id: 3, title: "Body Care", img: bodyCareImg, link: "/body-care" },
    { id: 4, title: "Foot Care", img: footCareImg, link: "/foot-care" },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            Care Categories
          </h2>
          <p className="text-gray-500 text-sm md:text-lg">
            Choose your favorite category from our care collections ✨
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {categories.map((cat, index) => (
            <Link key={cat.id} to={cat.link}>
              <Motion.div
                className="flex flex-col items-center cursor-pointer group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // ✅ يشتغل مرة واحدة فقط
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.08 }}
              >
                <div className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
                  {/* Spinning Border (CSS بدل Framer Motion) */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-pink-500 spin-border"></div>

                  {/* Main Circle */}
                  <div className="w-24 h-24 md:w-36 md:h-36 rounded-full shadow-lg overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover rounded-full group-hover:rotate-3 transition-transform duration-300"
                      loading="lazy" // ✅ يحمّل الصور Lazy لتحسين الأداء
                    />
                  </div>
                </div>

                <h3 className="mt-3 text-sm md:text-lg font-semibold text-gray-700 group-hover:text-orange-500 transition-colors duration-300">
                  {cat.title}
                </h3>
              </Motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
