// src/pages/Auth/ForgotPasswordPage/ForgotPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Forgot <span className="text-pink-500">Password</span>
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-500 text-center">
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
  );
}
