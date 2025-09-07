// src/layouts/MainLayout.jsx
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BottomNav from "../components/layout/BottomNav";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header ثابت فوق */}
      <Header />

      {/* المحتوى الرئيسي بياخد padding-top بيساوي ارتفاع الهيدر */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Footer ثابت تحت */}
      <Footer />

      {/* Bottom Navigation (للموبايل غالبًا) */}
      <BottomNav />
    </div>
  );
}
