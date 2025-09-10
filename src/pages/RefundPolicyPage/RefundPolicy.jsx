import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RefundPolicy() {
  const sections = [
    {
      title: "1. Easy Returns & Exchanges",
      content: `We understand that sometimes products may not meet your expectations. 
      That's why we’ve made the return and exchange process simple and hassle-free. 
      If you’re not completely satisfied with your order, just contact our customer support team through email, live chat, or social media to initiate a return or exchange.`,
    },
    {
      title: "2. Return Period",
      content: `Our return policy is valid for 14 days starting from the delivery date. 
      Unfortunately, if more than 14 days have passed, we won’t be able to offer a refund or exchange.`,
    },
    {
      title: "3. Conditions for Returns",
      content: `Returned items must be unused, in the same condition as received, and in their original packaging. 
      Please ensure that all tags, seals, or protective packaging remain intact.`,
    },
    {
      title: "4. Damaged or Defective Products",
      content: `If an item is received damaged or defective due to our error, please report it immediately. 
      We’ll replace the item with the same product at no additional cost. 
      To request an exchange for a defective product, kindly contact us at support@example.com.`,
    },
    {
      title: "5. Gifts & Special Orders",
      content: `If the item was marked as a gift and shipped directly to you, you’ll receive store credit equal to the value of your return. 
      Once your return is received, we’ll issue a gift card or coupon code. 
      If the gift wasn’t sent directly to you, the refund will be sent to the original purchaser.`,
    },
    {
      title: "6. Refund Process",
      content: `If your return is approved, the refund will be processed using the original payment method. 
      - Online payments: refunds may take 10–14 working days depending on your bank.  
      - Cash on delivery: refunds will be processed via Vodafone Cash, bank transfer, or store credit. 
      Please note: in promotional offers like “Buy 1 Get 1 Free” or discounted bundles, all items (including free or discounted ones) must be returned together to qualify for a refund.`,
    },
    {
      title: "7. Important Notes",
      content: `- All returned items must be in their original, unused condition.  
      - Refunds or exchanges are provided only for complete sets in case of promotions.  
      - If any item from a bundle or offer is missing, refunds will be adjusted accordingly.`,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-pink-600 transition"
          >
            <FaHome className="text-pink-500" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-pink-600 font-semibold">Refund Policy</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Refund Policy
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
                {section.title}
              </h2>
              <p className="text-xs sm:text-sm whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
