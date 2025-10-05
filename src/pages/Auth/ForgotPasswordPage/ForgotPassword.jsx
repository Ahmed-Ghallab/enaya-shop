import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layouts/MainLayout";
import logo from "../../../assets/newlogo.png";
import SocialIcons from "../../../components/common/SocialIcons/Social";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
    navigate("/auth/login");
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-pink-100 via-white to-pink-100 min-h-screen flex items-center justify-center px-4">
        
        {/* Main Card */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 max-w-5xl w-full grid md:grid-cols-2 gap-8 my-8 md:my-0">
          
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <img 
              src={logo} 
              alt="Enaya Logo" 
              className="w-32 sm:w-40 md:w-60 object-contain mb-4"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Forgot Your <span className="text-pink-500">Password?</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">
              Don’t worry! Enter your email below and we’ll send you a link  
              to reset your password securely.
            </p>
            <div className="bg-black p-2 rounded-xl flex justify-center md:justify-start">
              <SocialIcons />
            </div>
          </div>

          {/* Right Section: Forgot Password Form */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 text-center">
              Reset <span className="text-pink-500">Password</span>
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 rounded-lg text-sm sm:text-base hover:bg-pink-600 transition"
              >
                Send Reset Link
              </button>
            </form>

            <div className="mt-4 text-xs sm:text-sm text-gray-500 text-center">
              Remember your password?{" "}
              <span
                className="cursor-pointer text-pink-500 hover:underline"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
