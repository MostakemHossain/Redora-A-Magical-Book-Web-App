import React, { useState } from "react";
import { SiGoogle } from "react-icons/si";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import loginImg from "../../public/login.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
  
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-20">
        <h2 className="text-2xl font-bold text-yellow-500 mb-6">Readora</h2>

        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome <span className="text-yellow-500">back</span>
        </h1>
        <p className="text-gray-500 mt-2">Please enter your details</p>

        <form className="mt-10 space-y-6">
          <div>
            <label className="text-sm font-medium">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Remember for 30 days</label>
            </div>
            <a href="#" className="text-yellow-500 hover:underline font-medium">
              Forgot password
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Sign in
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            <SiGoogle className="text-lg" />
            <span>Sign in with Google</span>
          </button>

          <div className="text-center">
            <span className="text-sm">Don’t have an account?</span>
            <a href="#" className="text-yellow-600 font-medium ml-1 hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
      <div className="hidden md:block w-1/2">
        <div className="h-full flex items-center justify-center">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="max-h-[80%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}