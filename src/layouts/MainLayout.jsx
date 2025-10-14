import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BottomNav from "../components/layout/BottomNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout({ children }) {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <BottomNav />

      <ToastContainer
        position={isMobile ? "top-center" : "top-right"}
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="colored"
        toastStyle={{
          background: "linear-gradient(to right, #ec4899, #f472b6)",
          color: "#fff",
          fontSize: isMobile ? "0.7rem" : "0.9rem",
          borderRadius: "10px",
          padding: isMobile ? "4px 10px" : "8px 14px",
          width: isMobile ? "fit-content" : "auto",
          maxWidth: isMobile ? "80%" : "400px",
          margin: isMobile ? "10px auto 0" : "0",
          boxShadow: "0 2px 6px rgba(236, 72, 153, 0.3)",
          textAlign: "center",
        }}
        bodyStyle={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "500",
        }}
      />
    </div>
  );
}
