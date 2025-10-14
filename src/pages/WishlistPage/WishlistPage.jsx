import { FaTrash, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { wishlistStore } from "../../store/wishlistStore";
import { cartStore } from "../../store/cartStore";
import { toast } from "react-toastify";

export default function WishlistPage() {
  const wishlistItems = wishlistStore((state) => state.wishlistItems);
  const removeFromWishlist = wishlistStore((state) => state.removeFromWishlist);
  const clearWishlist = wishlistStore((state) => state.clearWishlist);
  const addToCart = cartStore((state) => state.addToCart);

  const handleRemove = (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المنتج من المفضلة؟")) {
      removeFromWishlist(id);
      toast.info("تم حذف المنتج من المفضلة ");
    }
  };

  const handleClearAll = () => {
    if (window.confirm("هل تريد حذف جميع المنتجات من المفضلة؟")) {
      clearWishlist();
      toast.error("تم حذف جميع المنتجات من المفضلة ");
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success("تمت إضافة المنتج إلى السلة ");
  };

  if (wishlistItems.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white px-4">
        <h2 className="text-2xl font-bold text-gray-700">
          Your <span className="text-pink-500">Wishlist</span> is empty ❤️
        </h2>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-pink-600 transition"
          >
            <FaHome className="text-pink-500" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-pink-600 font-semibold">Wishlist</span>
        </nav>

        {/* Title */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-bold text-center text-pink-600">
            Your Wishlist
          </h1>
          <button
            onClick={handleClearAll}
            className="text-red-500 text-sm font-semibold hover:text-red-600 transition"
          >
            Clear All
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white shadow-md rounded-xl overflow-hidden">
          <table className="w-full text-left table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <span className="font-medium text-gray-700">
                      {item.title}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700">${item.price}</td>
                  <td className="p-4 flex items-center gap-3">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-600 transition"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-4"
            >
              <div className="flex justify-between items-start gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-700 font-bold">${item.price}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  <FaTrash />
                </button>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
