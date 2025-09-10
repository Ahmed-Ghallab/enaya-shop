import { FaHome, FaRegComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Do you have a physical store?",
      a: "No, we are an online-based store. This allows us to offer better deals and convenient doorstep delivery."
    },
    {
      q: "What payment methods can I use?",
      a: "We accept online payments via Visa and MasterCard, as well as Cash on Delivery for your convenience."
    },
    {
      q: "Can I get same-day delivery?",
      a: "Same-day delivery is available in select areas. Delivery times may vary depending on your location."
    },
    {
      q: "How much does shipping cost?",
      a: "Our delivery fees depend on your location. The exact fee will appear at checkout before confirming your order."
    },
    {
      q: "Can I check my order when it arrives?",
      a: "Yes, you may inspect your parcel at the doorstep to ensure everything is correct before accepting it."
    },
    {
      q: "How often do you restock items?",
      a: "We restock popular products regularly, but availability can change quickly. We recommend ordering early to secure your items."
    },
    {
      q: "Why is VAT added to my order?",
      a: "VAT is a government-applied tax and is included to comply with legal requirements."
    },
    {
      q: "Are all your products authentic?",
      a: "Yes, all products are 100% original. We work directly with trusted distributors and official brand partners worldwide."
    },
    {
      q: "What if my skin reacts to a product?",
      a: "If you experience a reaction, please discontinue use immediately. For safety, consult your dermatologist before using new skincare products."
    },
    {
      q: "Do perfumes, body splashes, and hair mists have an expiry date?",
      a: "Yes, every product has a shelf life. Please check the packaging for the exact expiration date."
    },
    {
      q: "Is there a minimum or maximum order amount?",
      a: "No, there is no order limit. You can shop freely, whether for a single item or multiple products."
    },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-2 justify-center sm:justify-start">
          <Link to="/" className="flex items-center gap-1 hover:text-pink-600 transition">
            <FaHome className="text-pink-500" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-pink-600 font-semibold">FAQ</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-10">
          Frequently Asked Questions
        </h1>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md border border-pink-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-4 sm:px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-800">
                  {item.q}
                </span>
                <span className="text-pink-500 text-xl sm:text-2xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-4 sm:px-6 pb-4 text-gray-600 text-sm sm:text-base">
                  {item.a}
                </div>
              )}
            </div>
          ))}

          {/* Special Last Question */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition p-6 sm:p-8 flex flex-col items-center text-center space-y-3">
            <FaRegComments className="text-pink-500 text-4xl sm:text-5xl" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Still have questions?
            </h2>
            <p className="text-gray-600 max-w-md">
              Our team is here to help you with any inquiries you may have.
            </p>
            <Link
              to="/contact"
              className="mt-2 inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
