import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import skincareIMG from "../../assets/careCategories/BodyCare.png";
import makeupIMG from "../../assets/careCategories/Makeup.jpg";
import bodyCareIMG from "../../assets/careCategories/FootCare.webp";
import hairCareIMG from "../../assets/careCategories/HairCare.png";
import accessoriesIMG from "../../assets/careCategories/Accessories&Tools.jpg";
import supplementsIMG from "../../assets/careCategories/SupplementsN.jpg";

import logo1 from "../../assets/BrandLogos/Anua.png";
import logo2 from "../../assets/BrandLogos/beauty of joseon-Photoroom2.png";
import logo3 from "../../assets/BrandLogos/COSRX.png";
import logo4 from "../../assets/BrandLogos/skin1004-Photoroom.png";
import logo5 from "../../assets/BrandLogos/ksecret -Photoroom.png";
import logo6 from "../../assets/BrandLogos/lauraMercier-Photoroom.png";
import logo7 from "../../assets/BrandLogos/medicube-Photoroom.png";
import logo8 from "../../assets/BrandLogos/dr-Photoroom.png";
// import logo9 from "../../assets/BrandLogos/mary&may-Photoroom.png";
// import logo10 from "../../assets/BrandLogos/biodance-Photoroom.png";

export default function CategoriesPage() {
  const { t } = useTranslation();
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const categories = [
    {
      id: 1,
      name: t("categories.skincare"),
      image: skincareIMG,
      subcategories: [
        {
          name: t("subcategories.masks"),
          path: "/categories/skincare?sub=masks",
        },
        {
          name: t("subcategories.moisturizer"),
          path: "/categories/skincare?sub=moisturizer",
        },
        {
          name: t("subcategories.cleanser"),
          path: "/categories/skincare?sub=cleanser",
        },
        {
          name: t("subcategories.suncare"),
          path: "/categories/skincare?sub=suncare",
        },
      ],
    },
    {
      id: 2,
      name: t("categories.makeup"),
      image: makeupIMG,
      subcategories: [
        {
          name: t("subcategories.face_makeup"),
          path: "/categories/makeup?sub=face_makeup",
        },
        {
          name: t("subcategories.eye_makeup"),
          path: "/categories/makeup?sub=eye_makeup",
        },
        {
          name: t("subcategories.lip_makeup"),
          path: "/categories/makeup?sub=lip_makeup",
        },
        {
          name: t("subcategories.nails"),
          path: "/categories/makeup?sub=nails",
        },
      ],
    },
    {
      id: 3,
      name: t("categories.body_care"),
      image: bodyCareIMG,
      subcategories: [
        {
          name: t("subcategories.body_lotion_oils"),
          path: "/categories/body_care?sub=body_lotion_oils",
        },
        {
          name: t("subcategories.body_wash"),
          path: "/categories/body_care?sub=body_wash",
        },
        {
          name: t("subcategories.body_scrub"),
          path: "/categories/body_care?sub=body_scrub",
        },
        {
          name: t("subcategories.hand_foot_oral_care"),
          path: "/categories/body_care?sub=hand_foot_oral_care",
        },
        {
          name: t("subcategories.body_mist_fragrance"),
          path: "/categories/body_care?sub=body_mist_fragrance",
        },
      ],
    },
    {
      id: 4,
      name: t("categories.hair_care"),
      image: hairCareIMG,
      subcategories: [
        {
          name: t("subcategories.shampoo_conditioner"),
          path: "/categories/hair_care?sub=shampoo_conditioner",
        },
        {
          name: t("subcategories.hair_treatment"),
          path: "/categories/hair_care?sub=hair_treatment",
        },
        {
          name: t("subcategories.hair_essence_serum"),
          path: "/categories/hair_care?sub=hair_essence_serum",
        },
        {
          name: t("subcategories.hair_color_styling"),
          path: "/categories/hair_care?sub=hair_color_styling",
        },
      ],
    },
    {
      id: 5,
      name: t("categories.accessories_tools"),
      image: accessoriesIMG,
      subcategories: [
        {
          name: t("subcategories.cotton_pad"),
          path: "/categories/Accessories & Tools?sub=cotton_pad",
        },
        {
          name: t("subcategories.beauty_device"),
          path: "/categories/Accessories & Tools?sub=beauty_device",
        },
        {
          name: t("subcategories.brush"),
          path: "/categories/Accessories & Tools?sub=brush",
        },
        {
          name: t("subcategories.others"),
          path: "/categories/Accessories & Tools?sub=others",
        },
      ],
    },
    {
      id: 6,
      name: t("categories.supplements"),
      image: supplementsIMG,
      subcategories: [
        {
          name: t("subcategories.vitamins"),
          path: "/categories/supplements?sub=vitamins",
        },
        {
          name: t("subcategories.probiotics"),
          path: "/categories/supplements?sub=probiotics",
        },
        {
          name: t("subcategories.collagen"),
          path: "/categories/supplements?sub=collagen",
        },
        {
          name: t("subcategories.diet_supplements"),
          path: "/categories/supplements?sub=diet_supplements",
        },
      ],
    },
  ];

  const brands = [
    { name: "Anua", logo: logo1, path: "/brand/Anua" },
    { name: "Beauty of Joseon", logo: logo2, path: "/brand/Beauty_of_Joseon" },
    { name: "COSRX", logo: logo3, path: "/brand/COSRX" },
    { name: "Skin1004", logo: logo4, path: "/brand/Skin1004" },
    { name: "K-secret", logo: logo5, path: "/brand/K-secret" },
    { name: "Laura Mercier", logo: logo6, path: "/brand/Laura_Mercier" },
    { name: "Medicube", logo: logo7, path: "/brand/Medicube" },
    { name: "Dr.Althea", logo: logo8, path: "/brand/Dr.Althea" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-r from-pink-100 to-white h-48 md:h-64 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
            {t("categories.title")}
          </h1>
          <p className="text-lg text-gray-600">{t("categories.subtitle")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-pink-500 transition"
          >
            <FaHome className="text-pink-500" size={16} />
            <span>{t("nav.home")}</span>
          </Link>
          <span>/</span>
          <span className="text-pink-500 font-medium">
            {t("categories.title")}
          </span>
        </nav>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
            {t("categories.shop_by_category")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <NavLink
                  to={`/categories/${cat.name
                    .toLowerCase()
                    .replace(/\s+/g, "_")}`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                </NavLink>
                <div className="p-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleCategory(cat.id)}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 hover:text-pink-500 transition">
                      {cat.name}
                    </h3>
                    {expandedCategory === cat.id ? (
                      <FaChevronUp className="text-gray-500" size={16} />
                    ) : (
                      <FaChevronDown className="text-gray-500" size={16} />
                    )}
                  </div>
                  {expandedCategory === cat.id && (
                    <ul className="mt-4 space-y-2 animate-fadeIn">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.path}>
                          <NavLink
                            to={sub.path}
                            className="text-gray-600 hover:text-pink-500 transition block text-sm md:text-base"
                          >
                            {sub.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brands Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
            {t("categories.shop_by_brand")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <NavLink
                key={brand.path}
                to={brand.path}
                className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 md:h-16 object-contain mb-2"
                />
                <span className="text-gray-700 font-medium text-sm text-center hover:text-pink-500">
                  {brand.name}
                </span>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
