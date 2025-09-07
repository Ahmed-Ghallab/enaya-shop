// src/pages/Auth/LoginPage/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../../store/authStore";

export default function Login() {
  const navigate = useNavigate();
  const { login } = authStore(); // افترضنا فيه دالة login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/account"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login to <span className="text-pink-500">Enaya</span>
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span
            className="cursor-pointer hover:text-pink-500"
            onClick={() => navigate("/auth/register")}
          >
            Register
          </span>
          <span
            className="cursor-pointer hover:text-pink-500"
            onClick={() => navigate("/auth/forgot-password")}
          >
            Forgot Password?
          </span>
        </div>
      </div>
    </div>
  );
}
