import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../../store/authStore";

export default function Logout() {
  const { logout } = authStore();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    const timer = setTimeout(() => {
      navigate("/auth/login");
    }, 2000); // انتظار ثانيتين قبل التحويل

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-100 via-white to-pink-100">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Logging out...</h1>
        <p className="text-gray-600">Please wait while we sign you out safely.</p>
      </div>
    </div>
  );
}
