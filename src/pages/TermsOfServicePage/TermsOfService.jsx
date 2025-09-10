import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-pink-600 transition"
          >
            <FaHome className="text-pink-500" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-pink-600 font-semibold">Terms of Service</span>
        </nav>

        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm">
            Last updated: September 10, 2025
          </p>
        </header>

        {/* Content */}
        <article className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              1. Introduction
            </h2>
            <p>
              By placing an order on our website, you confirm that you have
              read, understood, and agreed to these Terms & Conditions. We may
              update them from time to time, so please review this page
              regularly.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              2. Eligibility
            </h2>
            <p>
              To make a purchase, you must be at least 18 years old and provide
              accurate personal information such as name, phone number, and
              email. You are responsible for keeping this information up to
              date.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              3. Orders & Pricing
            </h2>
            <p>
              We take care to ensure product descriptions and prices are
              correct. All prices include VAT but exclude delivery charges. Your
              total order cost will be displayed at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              4. Availability
            </h2>
            <p>
              All products are subject to stock availability. If an item is
              unavailable after you place an order, we will notify you as soon
              as possible.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              5. Ordering Process
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Add products to your cart.</li>
              <li>Provide delivery and billing details.</li>
              <li>Review your order and accept these Terms.</li>
              <li>Submit your order for confirmation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              6. Delivery
            </h2>
            <p>
              We deliver across Egypt. Estimated delivery is 2–7 working days
              depending on location. Delays outside our control will be
              communicated, and you may cancel your order in case of major
              delays.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              7. Payment
            </h2>
            <p>
              Payments can be made via Visa or Mastercard, or Cash on Delivery.
              All card payments are subject to validation by the card issuer. We
              retain ownership of all products until payment is received in
              full.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              8. Returns & Refunds
            </h2>
            <p>
              Products can be returned within 14 days if unused and in original
              packaging. Refunds or exchanges will be processed once the item is
              inspected. Delivery costs are non-refundable unless the item is
              faulty.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              9. Warranty
            </h2>
            <p>
              Warranties are provided by the brand or authorized service
              centers. Any issues related to repairs, spare parts, or service
              must be addressed directly with them.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              10. Liability
            </h2>
            <p>
              We are not liable for business losses, lost profits, or damages
              caused by misuse of products. Products are for personal use only.
              Our liability is limited to foreseeable damages under Egyptian
              law.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              11. Governing Law
            </h2>
            <p>
              These Terms are governed by Egyptian law. Any disputes will be
              settled by the courts of Egypt. Contracts are concluded in both
              English and Arabic.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
              12. Contact Us
            </h2>
            <p>
              For questions about these Terms, please visit{" "}
              <Link
                to="/contact"
                className="text-pink-600 font-semibold hover:underline"
              >
                our Contact Page
              </Link>{" "}
              or email us at{" "}
              <a
                href="mailto:support@enaya.com"
                className="text-pink-600 hover:underline"
              >
                support@enaya.com
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
