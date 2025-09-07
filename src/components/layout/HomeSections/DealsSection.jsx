import { motion } from "framer-motion";
import { products } from "../../../data/productsData";
import ProductCard from "./ProductCard";

export default function DealsSection() {
  const deals = products.filter((p) => p.oldPrice);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Hot Deals & Discounts
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {deals.length > 0 ? (
            deals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No deals available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
