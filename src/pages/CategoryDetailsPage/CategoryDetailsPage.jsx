import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { products } from "../../data/productsData";
import ProductCard from "../../components/layout/HomeSections/ProductCard";
import "./CategoryDetailsPage.css"

export default function CategoryDetailsPage() {
  const { t } = useTranslation();
  const { category } = useParams();

  // as per url definition
  const categoryTitle = category
    ?.replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // filter as per category
  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryTitle?.toLowerCase()
  );



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="categories-details-section relative h-56 md:h-72 flex flex-col items-center justify-center text-center">
        <div className="overlay-for-category-details"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
            {categoryTitle || t("categories.title")}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2 justify-center md:justify-start">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-pink-500 transition"
          >
            <FaHome className="text-pink-500" size={16} />
            <span>{t("nav.home")}</span>
          </Link>
          <span>/</span>
          <Link to="/categories" className="hover:text-pink-500 transition">
            {t("categories.title")}
          </Link>
          <span>/</span>
          <span className="text-pink-500 font-medium">{categoryTitle}</span>
        </nav>

        {/* Products Section */}
        <div className="text-center text-gray-600">
          <h2 className="text-xl font-semibold mb-6">
            Because you deserve the best <span className="text-pink-500">  عناية </span>  {categoryTitle}
          </h2>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-base mt-6">
              {t("categories.no_products") ||
                "No products available for this category yet."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
