import { Link } from "react-router-dom";
import logo from "../../assets/newlogo.png";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-pink-50 via-white to-gray-100 text-gray-700 pt-12 pb-6 overflow-hidden">
      {/* Divider Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-orange-300 to-pink-400 animate-pulse"></div>

      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Enaya Links */}
        <div>
          <h3 className="font-bold text-lg text-gray-900">Enaya</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-500 transition">About</Link></li>
            <li><Link to="/shop" className="hover:text-pink-500 transition">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
          </ul>
        </div>
        {/* Support Links */}
        <div>
          <h3 className="font-bold text-lg text-gray-900">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/terms-of-service" className="hover:text-pink-500 transition">Terms of Service</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-pink-500 transition">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-pink-500 transition">Refund Policy</Link></li>
            <li><Link to="/faq" className="hover:text-pink-500 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Brand Column */}
        <div className="col-span-2 flex flex-col items-center md:col-span-1 md:items-start">
          <img
            src={logo}
            alt="Enaya Logo"
            className="h-30"
          />
          <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
            Enaya is more than beauty – it’s a lifestyle. Discover curated skincare & cosmetics that bring elegance, care, and confidence to your daily routine.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}  <span className="font-semibold text-pink-600">Enaya</span>. All rights reserved.
      </div>
    </footer>
  );
}
