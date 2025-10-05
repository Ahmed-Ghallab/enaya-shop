// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import Product from "./pages/ProductPage/Product";
import Shop from "./pages/ShopPage/Shop";
import Login from "./pages/Auth/LoginPage/Login";
import Register from "./pages/Auth/RegisterPage/Register";
import ForgotPassword from "./pages/Auth/ForgotPasswordPage/ForgotPassword";
import Logout from "./pages/Auth/LogoutPage/Logout";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import AccountPage from "./pages/AccountPage/Account";
import Cart from "./pages/CartPage/Cart";
// new
import TermsOfService from "./pages/TermsOfServicePage/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicyPage/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicyPage/RefundPolicy";
import FAQ from "./pages/FAQPage/FAQ";
import Checkout from "./pages/CheckoutPage/Checkout";
import OrderSuccessPage from "./pages/OrderSuccessPage/OrderSuccessPage";
//language i18n
import "./i18n";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* الصفحات    Layout */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
          <Route
            path="/product/:id"
            element={
              <MainLayout>
                <Product />
              </MainLayout>
            }
          />
          <Route
            path="/shop"
            element={
              <MainLayout>
                <Shop />
              </MainLayout>
            }
          />
          <Route
            path="/account"
            element={
              <MainLayout>
                <AccountPage />
              </MainLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <MainLayout>
                <Cart />
              </MainLayout>
            }
          />
          {/* new */}
          <Route
            path="/terms-of-service"
            element={
              <MainLayout>
                <TermsOfService />
              </MainLayout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <MainLayout>
                <PrivacyPolicy />
              </MainLayout>
            }
          />
          <Route
            path="/refund-policy"
            element={
              <MainLayout>
                <RefundPolicy />
              </MainLayout>
            }
          />
          <Route
            path="/faq"
            element={
              <MainLayout>
                <FAQ />
              </MainLayout>
            }
          />
          <Route path="/checkout" element={ <MainLayout> <Checkout /> </MainLayout>} />
          <Route path="/order-success/:id" element={ <MainLayout> <OrderSuccessPage /> </MainLayout>} />

          {/* صفحات الـ Auth من غير Layout */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/logout" element={<Logout />} />

          {/* صفحة 404 */}
          <Route
            path="*"
            element={
              <h1 className="text-center text-8xl font-bold text-red-400">
                404 PAGE NOT FOUND
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
