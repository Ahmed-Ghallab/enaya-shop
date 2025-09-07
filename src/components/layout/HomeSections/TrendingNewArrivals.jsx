import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../../../data/productsData";
import ProductCard from "./ProductCard";

export default function TrendingNewArrivals() {
  const [activeTab, setActiveTab] = useState("TREND");

  const filteredProducts = products.filter((p) => p.badge === activeTab);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["TREND", "NEW"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-lg font-semibold transition ${
                activeTab === tab
                  ? "bg-pink-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab === "TREND" ? "Trending Products" : "New Arrivals"}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found for {activeTab}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
