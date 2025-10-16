import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect & Use",
      content: `When you place an order, we collect details like your name, address, and email so we can process your purchase and deliver your items. 
      When you browse our website, we also receive information such as your device type and IP address to help us improve your browsing experience. 
      If you subscribe to our updates, we may occasionally email you about new products, promotions, or important store news.`,
    },
    {
      title: "2. Your Consent & Choices",
      content: `By providing your personal information during checkout or while creating an account, you agree to us using it for order processing and delivery purposes. 
      For any additional use, like marketing emails, we’ll ask for your explicit permission. 
      You can withdraw your consent at any time by contacting us at support@enaya.com.`,
    },
    {
      title: "3. Sharing & Disclosure",
      content: `We may share your data if required by law or in case of violation of our Terms of Service. 
      Otherwise, your information will not be disclosed without your consent.`,
    },
    {
      title: "4. Third-Party Services & Links",
      content: `We work with trusted service providers such as payment processors and delivery partners. 
      Each provider has its own privacy practices, so we encourage you to review their policies. 
      If you navigate to an external website through our links, their rules apply, not ours.`,
    },
    {
      title: "5. Data Protection & Security",
      content: `We take strong precautions to protect your data from misuse, loss, or unauthorized access. 
      Sensitive details like credit card information are encrypted using SSL technology. 
      While no system is 100% secure, we follow best practices to safeguard your information.`,
    },
    {
      title: "6. Cookies & Tracking",
      content: `We use cookies to improve your shopping experience by remembering your session, cart, and preferences. 
      You may disable cookies in your browser settings, but some features of the site may not work properly without them.`,
    },
    {
      title: "7. Age of Use",
      content: `By using our website, you confirm that you are at least the age of majority in your country or have permission from a parent or guardian to shop with us.`,
    },
    {
      title: "8. Updates to This Policy",
      content: `We may update this Privacy Policy from time to time. 
      Any changes will take effect once posted on this page. 
      If our store is merged or acquired, your information may be transferred so we can continue serving you.`,
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
          <span className="text-pink-600 font-semibold">Privacy Policy</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
                {section.title}
              </h2>
              <p className="text-xs sm:text-sm">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
