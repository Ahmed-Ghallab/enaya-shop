import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { authStore } from "../../store/authStore";
import { cartStore } from "../../store/cartStore";
import { wishlistStore } from "../../store/wishlistStore"; // افترض وجود wishlistStore

import logoImg from "../../assets/logo8removed.png";
import SocialIcons from "../common/SocialIcons/Social";
import LanguageSwitcher from "../common/LanguageSwitcher/LanguageSwitcher";
import LiveSearch from "../common/LiveSearch/LiveSearch";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { isLoggedIn } = authStore();
  const cartItems = cartStore((state) => state.cartItems);
  const cartCount = cartItems.length;
  const wishlistItems = wishlistStore((state) => state.wishlistItems); // عدد عناصر Wishlist
  const wishlistCount = wishlistItems.length;

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.shop"), path: "/shop" },
    { name: t("nav.categories"), path: "/categories" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* START top nav header */}
      <div className="flex justify-between items-center top-nav text-white p-0 bg-black">
        <LanguageSwitcher />
        <p className="hidden md:block text-xs font-medium tracking-wider capitalize">
          {t("nav.offer_text")}
          <span className="ml-2 text-pink-300 hover:text-pink-500 font-bold underline">
            <Link className="uppercase" to="/shop">
              {t("nav.shop_now")}
            </Link>
          </span>
        </p>
        <SocialIcons />
      </div>
      {/* END top nav header */}

      {/* Main nav header */}
      <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-18 relative">
        {/* Left side nav links */}
        <div className="flex items-center space-x-2 md:space-x-6">
          {/* Burger menu for mobile */}
          <div className="md:hidden flex items-center">
            {menuOpen ? (
              <FiX
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-pink-500 cursor-pointer"
                size={24}
              />
            ) : (
              <FiMenu
                onClick={() => setMenuOpen(true)}
                className="text-gray-700 hover:text-pink-500 cursor-pointer"
                size={24}
              />
            )}
          </div>

          {/* Mapping Nav Links for Desktop */}
          <nav className="hidden md:flex space-x-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-pink-500 border-b-2 border-pink-500"
                      : "text-gray-700 hover:text-pink-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={logoImg} alt="logo Enaya shop" className="h-15 md:h-20" />
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <LiveSearch />
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `relative flex flex-col items-center transition-all duration-300 hover:scale-110 ${
                  isActive ? "text-pink-500" : "text-gray-600 hover:text-pink-400"
                }`
              }
            >
              <AiOutlineHeart size={24} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </NavLink>
            <NavLink
              to={isLoggedIn ? "/account" : "/auth/login"}
              className={({ isActive }) =>
                `relative flex flex-col items-center transition-all duration-300 hover:scale-110 ${
                  isActive ? "text-pink-500" : "text-gray-600 hover:text-pink-400"
                }`
              }
            >
              <AiOutlineUser size={24} />
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex flex-col items-center transition-all duration-300 hover:scale-110 ${
                  isActive ? "text-pink-500" : "text-gray-600 hover:text-pink-400"
                }`
              }
            >
              <AiOutlineShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center space-x-4">
            <LiveSearch />
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `relative flex flex-col items-center transition-all duration-300 hover:scale-110 ${
                  isActive ? "text-pink-500" : "text-gray-600 hover:text-pink-400"
                }`
              }
            >
              <AiOutlineHeart size={24} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-pink-500 border-l-4 border-pink-500 pl-2"
                      : "text-gray-700 hover:text-pink-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}