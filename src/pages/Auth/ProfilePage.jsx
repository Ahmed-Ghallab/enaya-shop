// src/pages/Auth/ProfilePage.jsx
import { useState } from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/productsData";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "Ahmed Mohamed",
    email: "ahghallab1@gmail.com",
  });

  const handleLogout = () => {

    alert("Logged out successfully");
    navigate("/auth/login"); 
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
          My <span className="text-pink-500">Account</span>
        </h2>

        {/* بطاقة البروفايل */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4">
          <FaUserCircle className="w-24 h-24 text-gray-400" />
          <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
          <p className="text-gray-500">{user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-3 w-full bg-pink-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-600 transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* كروت المنتجات / الطلبات */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold text-sm md:text-base line-clamp-1">
                  {product.title}
                </h4>
                <span className="text-pink-600 font-bold">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
