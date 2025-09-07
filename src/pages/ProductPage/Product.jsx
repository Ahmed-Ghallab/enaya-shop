import { useParams } from "react-router-dom";
import { products } from "../../data/productsData";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaShareAlt } from "react-icons/fa";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-pink-50 min-h-screen py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center justify-center md:justify-start space-x-2">
        <a href="/" className="hover:text-pink-600 transition">Home</a>
        <span>/</span>
        <a href="/shop" className="hover:text-pink-600 transition">Shop</a>
        <span>/</span>
        <span className="text-pink-600 font-semibold">{product.title}</span>
      </nav>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:max-w-lg rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>

            {/* Price */}
            <div className="flex items-center gap-4">
              {product.oldPrice && (
                <span className="text-lg line-through text-gray-400">
                  {product.oldPrice} EGP
                </span>
              )}
              <span className="text-3xl font-bold text-pink-600">{product.price} EGP</span>
            </div>

            {/* Short Description */}
            {product.shortDescription && (
              <p className="text-gray-600 leading-relaxed">{product.shortDescription}</p>
            )}

            {/* Highlights */}
            {product.highlights?.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">Product Highlights</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  {product.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description & Usage */}
            <div className="mt-6 border-t border-pink-100 pt-6 space-y-3">
              {product.fullDescription && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800">Description</h3>
                  <p className="text-gray-700">{product.fullDescription}</p>
                </>
              )}
              {product.usage && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800">How to Use</h3>
                  <p className="text-gray-700">{product.usage}</p>
                </>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mt-6">
              <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">-</button>
              <span className="text-lg font-semibold">1</span>
              <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">+</button>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="flex flex-col gap-2">
              <button className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-3 rounded-xl shadow-md hover:opacity-90 transition">
                Add to Cart
              </button>
              <button className="w-full bg-white border border-pink-600 text-pink-600 py-3 rounded-xl shadow-md hover:bg-pink-50 transition">
                Add to Wishlist
              </button>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-3 mt-6">
              <span className="font-semibold text-gray-800">Share:</span>
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaShareAlt].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
