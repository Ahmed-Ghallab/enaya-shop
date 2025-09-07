import { motion as Motion } from "framer-motion";
import { FaShippingFast, FaExchangeAlt, FaLock, FaLeaf } from "react-icons/fa";

export default function EnayaFeatures() {
  const features = [
    { icon: <FaShippingFast />, title: "Fast Shipping", desc: "To your doorstep" },
    { icon: <FaExchangeAlt />, title: "Easy Returns", desc: "Hassle-free exchange" },
    { icon: <FaLock />, title: "Secure Payment", desc: "100% safe checkout" },
    { icon: <FaLeaf />, title: "All Natural", desc: "trusted Original brands" },
  ];

  return (
    <section className="bg-pink-50 py-8 md:py-12 px-3 ">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
          The Enaya Touch
        </h2>
        <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
          Because you deserve care & trust
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <Motion.div
            key={i}
            className="flex flex-col items-center text-center cursor-pointer"
            whileHover={{
              y: -6,
              scale: 1.08,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <Motion.div
              className="text-2xl md:text-4xl text-pink-500 mb-2 md:mb-3"
              whileHover={{
                rotate: [-10, 10, -10, 0],
                transition: { duration: 0.6 },
              }}
            >
              {f.icon}
            </Motion.div>
            <h3 className="font-semibold text-gray-800 text-sm md:text-base">
              {f.title}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-0.5 md:mt-1">
              {f.desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
