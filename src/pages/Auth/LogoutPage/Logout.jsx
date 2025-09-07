// src/pages/Auth/LogoutPage/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../../store/authStore";

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = authStore();

  useEffect(() => {
    logout();
    navigate("/auth/login");
  }, [logout, navigate]);

  return null; 
}
