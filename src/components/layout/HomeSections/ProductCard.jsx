import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaShoppingCart, FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import QuickViewModal from "./QuickViewModal";
import { cartStore } from "../../../store/cartStore";
import { wishlistStore } from "../../../store/wishlistStore";

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = cartStore();
  const { addToWishlist } = wishlistStore(); // to add l wishlist

  // to add l cart
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(` "${product.title}" added to cart successfully!`);
  };

  // to add l wishlist
  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    addToWishlist(product);
    toast.info(` "${product.title}" added to wishlist!`);
  };

  return (
    <div className="relative group bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl">
      {product.badge && (
        <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          {product.badge}
        </span>
      )}

      {/*  img pro */}
      <div
        className="relative cursor-pointer overflow-hidden"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-105"
        />

        {/* icon Quick View */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          className="absolute top-2 right-2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition z-10 cursor-pointer"
        >
          <FaEye className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* icon Wishlist */}
        <button
          onClick={handleAddToWishlist}
          className="absolute top-12 right-2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-pink-500 hover:text-white transition z-10 cursor-pointer"
        >
          <FaHeart className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/*  details  */}
      <div className="p-4">
        <h3
          className="text-base font-semibold text-gray-800 cursor-pointer hover:text-pink-500 transition line-clamp-1"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.title}
        </h3>

        {/* for old price */}
        <div className="flex items-center gap-2 mt-2">
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-400">
              ${product.oldPrice}
            </span>
          )}
          <span className="text-pink-600 font-bold text-lg">
            ${product.price}
          </span>
        </div>

        {/* button Add to Cart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
          className="
            mt-3 w-full flex items-center justify-center gap-2 
            bg-pink-500 text-white py-2 px-4 rounded-lg transition 
            hover:bg-pink-600 text-sm md:text-base cursor-pointer
          "
        >
          <FaShoppingCart className="w-4 h-4 md:w-5 md:h-5" /> Add to Cart
        </button>
      </div>

      {/* model l Quick View */}
      {isModalOpen && (
        <QuickViewModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
