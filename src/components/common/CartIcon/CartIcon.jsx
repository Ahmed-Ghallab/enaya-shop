import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CartIcon({ count = 0 }) {
  return (
    <div className="relative">
      <Link to="/cart">
        <FiShoppingCart
          className="text-gray-700 hover:text-pink-500 cursor-pointer"
          size={22}
        />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
}
