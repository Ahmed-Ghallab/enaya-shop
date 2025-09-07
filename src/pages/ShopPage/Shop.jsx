import { useState } from "react";
import { products } from "../../data/productsData";
import BrandsSlider from "../../components/layout/BrandsSlider";
import ProductCard from "../../components/layout/HomeSections/ProductCard";

const filters = {
  Category: [
    "Skin Care",
    "Hair Care",
    "Body Care",
    "Lip Care",
    "Foot Care",
    "Sun Care",
    "Hand Care",
    "Natural Care",
    "Makeup Remover",
  ],
  Brand: [
    "CeraVe",
    "The Ordinary",
    "Nature Republic",
    "Beauty of Joseon",
    "Etude House",
    "Nivea",
    "L’Oreal",
    "Egyptian Oils",
    "Oriflame",
    "Olay",
    "Mediheal",
    "Innisfree",
    "Banila Co",
    "Vaseline",
    "Pantene",
    "COSRX",
    "Carmex",
    "Cleopatra Oils",
    "Pixi",
    "Neutrogena",
  ],
  CareType: ["Face", "Hair", "Body", "Hands", "Feet", "Lips"],
};

export default function Shop() {
  const [selectedFilter, setSelectedFilter] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });

  // فلترة المنتجات
  const filteredProducts = products.filter((p) => {
    const matchSearch = p.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchFilters = Object.entries(selectedFilter).every(
      ([group, values]) => {
        if (!values || values.length === 0) return true;
        const key = group.toLowerCase(); // category / brand / caretype
        return values.includes(p[key]);
      }
    );

    const matchPrice =
      (priceRange.min === "" || p.price >= Number(priceRange.min)) &&
      (priceRange.max === "" || p.price <= Number(priceRange.max));

    return matchSearch && matchFilters && matchPrice;
  });

  const toggleFilter = (group, value) => {
    setSelectedFilter((prev) => {
      const prevValues = prev[group] || [];
      return {
        ...prev,
        [group]: prevValues.includes(value)
          ? prevValues.filter((v) => v !== value)
          : [...prevValues, value],
      };
    });
  };

  
  return (
    <div className="ShopPage">
      <main className="container mx-auto px-4 py-10 flex gap-8">
        {/* Sidebar filter (Desktop) */}
        <aside className="hidden lg:block w-1/4 bg-white border rounded-lg shadow-sm p-6 h-fit sticky top-24 overflow-y-auto max-h-[110vh]">
          <h3 className="text-xl font-bold mb-4 text-pink-500">Filters</h3>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full mb-6 p-2 border rounded-md"
          />

          {/* Price Range Slider */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Price Range</h4>
            <input
              type="range"
              min="0"
              max="200"
              step="5"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange((prev) => ({ ...prev, max: e.target.value }))
              }
              className="w-full accent-pink-500"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>${priceRange.min}</span>
              <span>${priceRange.max}</span>
            </div>
          </div>

          {/* Other Filters */}
          {Object.entries(filters).map(([group, options]) => (
            <div key={group} className="mb-6">
              <h4 className="font-semibold mb-2">{group}</h4>
              <ul className="space-y-2 max-h-40 overflow-y-auto pr-2">
                {options.map((option) => (
                  <li key={option}>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={selectedFilter[group]?.includes(option) || false}
                        onChange={() => toggleFilter(group, option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Products */}
        <section className="flex-1">
          {/* Mobile Filters */}
          <div className="lg:hidden mb-6 space-y-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border rounded-md text-sm"
            />

            {/* Price Range Slider */}
            <div>
              <h4 className="font-semibold text-sm mb-1">Price Range</h4>
              <input
                type="range"
                min="0"
                max="200"
                step="5"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange((prev) => ({ ...prev, max: e.target.value }))
                }
                className="w-full accent-pink-500"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>${priceRange.min}</span>
                <span>${priceRange.max}</span>
              </div>
            </div>

            {/* Filters Dropdowns */}
            <div className="grid grid-cols-2 gap-2">
              <select
                onChange={(e) =>
                  toggleFilter("Category", e.target.value)
                }
                className="p-2 border rounded-md text-xs"
              >
                <option value="">Category</option>
                {filters.Category.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) =>
                  toggleFilter("Brand", e.target.value)
                }
                className="p-2 border rounded-md text-xs"
              >
                <option value="">Brand</option>
                {filters.Brand.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) =>
                  toggleFilter("CareType", e.target.value)
                }
                className="p-2 border rounded-md text-xs col-span-2"
              >
                <option value="">Care Type</option>
                {filters.CareType.map((care) => (
                  <option key={care} value={care}>
                    {care}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Shop</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found.
              </p>
            )}
          </div>
        </section>
      </main>
      <BrandsSlider />
    </div>
  );
}
