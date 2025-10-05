import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../../store/authStore";
import Layout from "../../../layouts/MainLayout";
import logo from "../../../assets/newlogo.png";
import SocialIcons from "../../../components/common/SocialIcons/Social";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = authStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/account");
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-pink-100 via-white to-pink-100 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-5xl w-full grid md:grid-cols-2 gap-10 my-8 md:my-0">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <img src={logo} alt="Enaya Logo" className="object-contain" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {t("login.welcome")}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{t("login.description")}</p>

            <div className="bg-black rounded-4xl custom-social flex justify-center md:justify-start">
              <SocialIcons />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {t("login.signinTitle")}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder={t("login.email")}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder={t("login.password")}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
              >
                {t("login.button")}
              </button>
            </form>

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span
                className="cursor-pointer hover:text-pink-500"
                onClick={() => navigate("/auth/register")}
              >
                {t("login.createAccount")}
              </span>
              <span
                className="cursor-pointer hover:text-pink-500"
                onClick={() => navigate("/auth/forgot-password")}
              >
                {t("login.forgotPassword")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
