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
import ProfilePage from "./pages/Auth/ProfilePage";
import Cart from "./pages/CartPage/Cart";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* الصفحات العادية اللي فيها Layout */}
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
                <ProfilePage />
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
