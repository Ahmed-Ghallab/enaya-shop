import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import imgAbout1 from "../../assets/home/kSecretImg.jpg";
import imgAbout2 from "../../assets/home/skin-carebanner-design.webp";
import BrandsSlider from "../../components/layout/BrandsSlider";
import EnayaFeatures from "../../components/layout/EnayaFeatures";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
      <div className="container mx-auto my-5">
        {/* breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center justify-center md:justify-start space-x-2">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-pink-600 transition"
          >
            <FaHome className="text-pink-500" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-pink-600 font-semibold">About</span>
        </nav>

        {/* العنوان */}
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-12">
          About Us
        </h1>

        {/* سكشن 1 */}
        <section className="mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Welcome to{" "}
            <span className="font-semibold text-pink-600">عناية</span> – your
            trusted destination for premium skincare and body care products. We
            provide high-quality, natural, and effective products that nourish
            your skin and body, while promoting overall well-being.
          </p>
        </section>

        {/* سكشن 2 */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to deliver skincare and body care solutions backed
              by science, clinically tested for safety and effectiveness. We
              tailor products to individual needs, using natural ingredients and
              innovative technology for the best results.
            </p>
          </div>
          <div>
            <img
              src={imgAbout1}
              alt="Our Mission"
              className="rounded-2xl shadow-xl border border-pink-100"
            />
          </div>
        </section>

        {/* سكشن 3 */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img
              src={imgAbout2}
              alt="Our Community"
              className="rounded-2xl shadow-xl border border-pink-100"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Community
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Since our launch, we’ve built a growing community of skincare and
              beauty lovers. We stay connected through tutorials, product
              launches, giveaways, and events – creating a space where beauty
              meets care and confidence.
            </p>
          </div>
        </section>

        {/* سكشن 4 */}
        <section className="text-center bg-white rounded-2xl shadow-lg border border-pink-400 p-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold text-pink-600">عناية</span>, we
            pay attention to every detail – from product selection to packaging
            – ensuring you get the best possible beauty experience. You’re not
            just buying products, you’re joining a family that truly cares about
            you.
          </p>
        </section>

        {/* واتساب  */}
        <a
          href="https://wa.me/201279547848"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-15 right-6 bg-green-500 text-white rounded-full p-2 shadow-lg animate-bounce hover:scale-110 transition z-50"
        >
          <FaWhatsapp size={32} />
        </a>
      </div>
      <EnayaFeatures />
      <BrandsSlider />
    </div>
  );
}
