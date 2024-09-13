import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "./logo.jpg";
import toast from "react-hot-toast";
import axios from "axios";
import "./Login.css";

function Resetpassword() {
  const { token } = useParams(); // Extract token from URL
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!newPassword) {
      toast.error("New password is required");
      return;
    }

    // Create FormData object and append token and newPassword
    const formData = new FormData();
    formData.append("token", token);
    formData.append("newPassword", newPassword);

    try {
      const response = await axios.post(
        'https://api.resumeintellect.com/api/user/reset-password',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        toast.success("Password reset successfully");
        navigate("/login"); // Redirect to login page after successful reset
      } else {
        toast.error("Failed to reset password");
      }
    } catch (error) {
      console.error(error.response?.data || error.message || "An error occurred");
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg bg-white">
        <div className="flex justify-center mb-6">
          <img src={logo} className="w-40 h-10" alt="Logo" />
        </div>
        <div className="text-2xl text-black text-center font-bold mb-4">
          Reset Password
        </div>
        <p className="text-black text-base text-center mb-6">
          People across the globe are joining us to upgrade their career with our Robust AI.
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-black mb-2">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your new password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Resetpassword;
