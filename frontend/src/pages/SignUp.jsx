import React, { useState } from "react";
import { SiGoogle } from "react-icons/si";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SignUP from "../../public/login.png";
import { toast } from "sonner";

export default function SignupPage() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage(""); 

    const userData = { username, email, password };

    try {
      const response = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    

      const data = await response.json();

      if (data?.success) {
        console.log(data.message);
        toast.success(data.message, {
          className: "custom-toast"
        });
        localStorage.setItem("accessToken", data?.data?.accessToken);
        setUserName("");
        setEmail("");
        setPassword("");
      } else {
        setErrorMessage(data.message || "Signup failed");
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      setErrorMessage("Error connecting to server");
      toast.error("Error connecting to server");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-20">
        <h2 className="text-2xl font-bold text-yellow-500 mb-6">Readora</h2>

        <h1 className="text-4xl md:text-5xl font-bold">
          Create an <span className="text-yellow-500">account</span>
        </h1>
        <p className="text-gray-500 mt-2">Please enter your details</p>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="text-sm font-medium" htmlFor="fullname">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
                required
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </div>
            </div>
          </div>

          {/* Inline error message */}
          {errorMessage && (
            <div className="text-red-600 text-sm font-medium mt-2">{errorMessage}</div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Sign up
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            <SiGoogle className="text-lg" />
            <span>Sign up with Google</span>
          </button>

          <div className="text-center">
            <span className="text-sm">Already have an account?</span>
            <a
              href="/login"
              className="text-yellow-600 font-medium ml-1 hover:underline"
            >
              Sign in
            </a>
          </div>
        </form>
      </div>

      <div className="hidden md:block w-1/2">
        <div className="h-full flex items-center justify-center">
          <img
            src={SignUP}
            alt="Signup Illustration"
            className="max-h-[80%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
