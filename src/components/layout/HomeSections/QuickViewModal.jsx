import { motion } from "framer-motion";

export default function QuickViewModal({ product, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-2 sm:px-4"
      onClick={onClose} // إغلاق عند الضغط على الخلفية
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl
          w-full max-w-xs sm:max-w-md md:max-w-3xl
          relative overflow-y-auto max-h-[85vh] sm:max-h-[90vh]
        "
        onClick={(e) => e.stopPropagation()} // منع إغلاق عند الضغط داخل المودال
      >
        {/* زر إغلاق */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-lg sm:text-xl md:text-2xl"
        >
          ✖
        </button>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* صورة المنتج */}
          <div className="md:w-1/2 flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 sm:h-56 md:h-full object-cover rounded-lg"
            />
          </div>

          {/* تفاصيل المنتج */}
          <div className="md:w-1/2 flex flex-col justify-start text-sm sm:text-base">
            {/* العنوان والعلامة التجارية */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-2">
              {product.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-2">Brand: {product.brand}</p>

            {/* السعر */}
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-pink-600">${product.price}</span>
              {product.oldPrice && (
                <span className="text-xs sm:text-sm md:text-sm text-gray-400 line-through">${product.oldPrice}</span>
              )}
            </div>

            {/* الوصف الكامل */}
            <p className="text-gray-700 mb-2 sm:mb-4">{product.fullDescription}</p>

            {/* طريقة الاستخدام */}
            <div className="mb-2 sm:mb-4">
              <h3 className="font-semibold text-gray-800 mb-1">Usage:</h3>
              <p className="text-gray-600">{product.usage}</p>
            </div>

            {/* أهم النقاط */}
            <div className="mb-2 sm:mb-4">
              <h3 className="font-semibold text-gray-800 mb-1">Highlights:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
