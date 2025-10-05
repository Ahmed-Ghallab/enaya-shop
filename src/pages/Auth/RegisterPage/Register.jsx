import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../../store/authStore";
import Layout from "../../../layouts/MainLayout";
import logo from "../../../assets/newlogo.png";
import SocialIcons from "../../../components/common/SocialIcons/Social";

export default function Register() {
  const navigate = useNavigate();
  const { register } = authStore(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
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
              Join <span className="text-pink-500">Enaya</span> Today!
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">
              Create your account to explore our world of beauty and care.  
              Start your journey with us now!
            </p>
            <div className="bg-black p-2 rounded-xl flex justify-center md:justify-start">
              <SocialIcons />
            </div>
          </div>

          {/* Right Section: Register Form */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 text-center">
              Create your <span className="text-pink-500">Account</span>
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 rounded-lg text-sm sm:text-base hover:bg-pink-600 transition"
              >
                Register
              </button>
            </form>

            <div className="mt-4 text-xs sm:text-sm text-gray-500 text-center">
              Already have an account?{" "}
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
