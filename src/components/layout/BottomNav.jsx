import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser, AiOutlineTag } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { authStore } from "../../store/authStore";

export default function BottomNav() {
  const { isLoggedIn, cartCount, notificationsCount } = authStore(); 
  // افترضنا أن authStore فيه عدد المنتجات في الكارت وعدد الإشعارات للحساب

  const navItems = [
    { id: "home", label: "Home", icon: <AiOutlineHome size={24} />, path: "/" },
    { 
      id: "cart", 
      label: "Cart", 
      icon: <AiOutlineShoppingCart size={24} />, 
      path: "/cart",
      badge: cartCount // عدد المنتجات في الكارت
    },
    { id: "deals", label: "Deals", icon: <AiOutlineTag size={24} />, path: "/shop" },
    { 
      id: "account", 
      label: "Account", 
      icon: <AiOutlineUser size={24} />, 
      path: isLoggedIn ? "/account" : "/auth/login",
      badge: notificationsCount // عدد الإشعارات للحساب
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

          {/* Badge */}
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
