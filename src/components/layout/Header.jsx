import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import logoImg from "../../assets/logo8removed.png";
import SocialIcons from "../common/SocialIcons/Social";
import LanguageSwitcher from "../common/LanguageSwitcher/LanguageSwitcher";
import CartIcon from "../common/CartIcon/CartIcon";
import UserMenu from "../common/UserMenu/UserMenu";
import LiveSearch from "../common/LiveSearch/LiveSearch";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.shop"), path: "/shop" },
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
          {/* burger menu for mobile */}
          <div className="md:hidden flex items-center space-x-2">
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
            {/* Search component in mobile */}
            <LiveSearch />
          </div>

          {/* mapping Nav Links for Desktop */}
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
          <CartIcon />
          <UserMenu />
          <div className="hidden md:block">
            <LiveSearch />
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
