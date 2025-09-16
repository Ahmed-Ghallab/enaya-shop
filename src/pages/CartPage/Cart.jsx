import { FaTrash } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { cartStore } from "../../data/cartStore";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = cartStore();
  const navigate = useNavigate();

  const calculateSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white px-4">
        <h2 className="text-2xl font-bold text-gray-700">
          Your <span className="text-pink-500">Cart</span> is empty
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
          <span className="text-pink-600 font-semibold">Cart</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
          Your Cart
        </h1>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white shadow-md rounded-xl overflow-hidden">
          <table className="w-full text-left table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
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
                  <td className="p-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 text-center border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </td>
                  <td className="p-4 font-bold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 transition"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Subtotal & Checkout */}
          <div className="flex justify-between items-center p-6 border-t border-gray-200">
            <div className="text-lg font-semibold text-gray-700">
              Subtotal:{" "}
              <span className="text-pink-500">
                ${calculateSubtotal().toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {cartItems.map((item) => (
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
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 text-center border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 transition ml-auto"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right font-semibold text-gray-800">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-4 mt-4">
            <div className="text-lg font-semibold text-gray-700 text-right">
              Subtotal:{" "}
              <span className="text-pink-500">
                ${calculateSubtotal().toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition w-full"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
