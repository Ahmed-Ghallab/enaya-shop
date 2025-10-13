import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { cartStore } from "../../store/cartStore";

export default function BottomNav() {
  const { isLoggedIn } = authStore();
  const cartItems = cartStore((state) => state.cartItems);
  const cartCount = cartItems.length; // عدد المنتجات في السلة

  const navItems = [
    { id: "home", label: "Home", icon: <AiOutlineHome size={24} />, path: "/" },
    { id: "categories", label: "Categories", icon: <AiOutlineAppstore size={24} />, path: "/categories" },
    { 
      id: "cart", 
      label: "Cart", 
      icon: <AiOutlineShoppingCart size={24} />, 
      path: "/cart",
      badge: cartCount
    },
    { 
      id: "account", 
      label: "Account", 
      icon: <AiOutlineUser size={24} />, 
      path: isLoggedIn ? "/account" : "/auth/login"
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around py-2 md:hidden z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          end
          className={({ isActive }) =>
            `relative flex flex-col items-center transition-all duration-300 hover:scale-110 ${
              isActive ? "text-pink-500" : "text-gray-600 hover:text-pink-400"
            }`
          }
        >
          {item.icon}

          {/* 🔴 Badge فوق الكارت */}
          {item.badge > 0 && (
            <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {item.badge}
            </span>
          )}

          <span className="text-xs">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
