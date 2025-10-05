import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "../../layouts/MainLayout";
import logo from "../../assets/newlogo.png";
import { authStore } from "../../store/authStore";
import { useTranslation } from "react-i18next";

export default function AccountPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, updateName } = authStore();

  const [name, setName] = useState(user?.name || "");
  const [email] = useState(user?.email || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updateName(name);
    setIsEditing(false);
  };

  // لو المستخدم مش عامل لوجين، رجّعه على طول للّوجين
  if (!user) {
    navigate("/auth/login");
    return null;
  }

  return (
      <div className="bg-gradient-to-r from-pink-100 via-white to-pink-100 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 max-w-4xl w-full flex flex-col items-center my-8 md:my-0">
          {/* Logo */}
          <img src={logo} alt="Enaya Logo" className="w-40 mb-4 object-contain" />

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {t("account.title", { defaultValue: "My Account" })}
          </h1>

          {/* Info Section */}
          <form
            onSubmit={handleSave}
            className="w-full max-w-md flex flex-col gap-4"
          >
            <div>
              <label className="block text-gray-600 mb-1 text-sm">
                {t("account.name", { defaultValue: "Full Name" })}
              </label>
              <input
                type="text"
                value={name}
                disabled={!isEditing}
                onChange={(e) => setName(e.target.value)}
                className={`border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                  !isEditing && "bg-gray-100 text-gray-500 cursor-not-allowed"
                }`}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1 text-sm">
                {t("account.email", { defaultValue: "Email" })}
              </label>
              <input
                type="email"
                value={email}
                disabled
                className="border border-gray-300 rounded-lg px-4 py-2 w-full bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
              {!isEditing ? (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition"
                >
                  {t("account.edit", { defaultValue: "Edit Profile" })}
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
                >
                  {t("account.save", { defaultValue: "Save Changes" })}
                </button>
              )}

              <button
                type="button"
                onClick={() => navigate("/auth/logout")}
                className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300 transition"
              >
                {t("account.logout", { defaultValue: "Logout" })}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
