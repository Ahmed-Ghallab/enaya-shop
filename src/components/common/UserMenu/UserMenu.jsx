import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const isLoggedIn = false; // TODO: اربطها بالـ auth store

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-700 hover:text-pink-500 cursor-pointer"
      >
        <FiUser size={22} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg border z-50">
          <ul className="text-sm text-gray-700">
            {!isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setOpen(false)}
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setOpen(false)}
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setOpen(false)}
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-500"
                    onClick={() => {
                      // TODO: logout logic
                      setOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
