import { motion as Motion } from "framer-motion";
import { products } from "../../../data/productsData";
import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";

export default function ShopCollection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          {t("shopCollection.title")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, index) => (
            <Motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}