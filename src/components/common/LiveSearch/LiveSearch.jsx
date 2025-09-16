import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../../../data/productsData";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Debounce البحث
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      const filtered = products.filter(
        (p) => p.title && p.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  // يقفل البحث عند تغيير الصفحة
  useEffect(() => {
    setQuery("");
    setResults([]);
    setIsMobileOpen(false);
  }, [location]);

  // يقفل البحث لو ضغط برا
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setResults([]);
        setIsMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (id) => {
    navigate(`/product/${id}`);
    setQuery("");
    setResults([]);
    setIsMobileOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Desktop Search Bar */}
      <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1 w-52 lg:w-64">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent outline-none w-full text-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="p-1 rounded-full hover:bg-gray-200"
          >
            <IoClose className="text-gray-700" />
          </button>
        )}
      </div>

      {/* Mobile Search Icon */}
      <button
        className="md:hidden p-2 rounded-full hover:bg-pink-100 transition-colors"
        onClick={() => setIsMobileOpen(true)}
      >
        <FaSearch className="text-gray-700 hover:text-pink-500 text-lg" />
      </button>

      {/* Off-Canvas Drawer للموبايل */}
      {isMobileOpen && (
        <>
          {/* Overlay خلف الـ Drawer */}
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsMobileOpen(false)} />

          {/* Drawer نفسه */}
          <div className="fixed top-0 right-0 h-full w-3/5 max-w-xs bg-white shadow-lg z-50 flex flex-col p-4">
            <div className="flex items-center gap-2 mb-3">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 outline-none text-lg placeholder-pink-500 px-1"
              />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <IoClose className="text-gray-700 text-lg" />
              </button>
            </div>

            {/* نتائج البحث */}
            <div className="flex-1 overflow-y-auto">
              {results.length > 0 ? (
                results.map((product) => (
                  <div
                    key={product.id}
                    className="px-2 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => handleResultClick(product.id)}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                    />
                    <span className="text-sm truncate">{product.title}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm mt-2">No results found</p>
              )}
            </div>
          </div>
        </>
      )}

      {/* Results Dropdown Desktop */}
      {results.length > 0 && !isMobileOpen && (
        <div className="absolute top-full left-0 w-full md:w-64 lg:w-80 bg-white shadow-lg rounded-lg mt-2 max-h-72 overflow-y-auto z-40">
          {results.map((product) => (
            <div
              key={product.id}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-3"
              onClick={() => handleResultClick(product.id)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-12 h-12 object-cover rounded-md flex-shrink-0"
              />
              <span className="text-sm truncate">{product.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
