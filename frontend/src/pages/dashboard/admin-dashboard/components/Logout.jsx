import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear token from localStorage
    localStorage.removeItem("accessToken");

    // Show logout toast
    toast.success("Logged out successfully!");

    // Redirect to home page after a short delay
    const timer = setTimeout(() => {
      navigate("/");
    }, 1500);

    // Clean up timer on unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center text-lg font-semibold text-gray-700">
      Logging out...
    </div>
  );
};

export default Logout;
