import React from "react";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-12">
        {/* Logo */}
        <div className="mb-8 text-2xl font-semibold text-gray-800 flex items-center">
          <div className="w-6 h-6 bg-purple-600 mr-2 rotate-45"></div>
          <span>TheCubeFactory</span>
        </div>

        <h2 className="text-3xl font-bold mb-2">Create an account</h2>
        <p className="text-gray-500 mb-6">Please fill in your details</p>

        {/* Sign Up Form */}
        <form className="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            Sign Up
          </button>

          <button className="w-full border py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>

      {/* Right Side - Illustration */}
      <div className="w-1/2 bg-purple-100 flex items-center justify-center">
        <div className="text-center">
          <img
            src="https://undraw.co/api/illustrations/teamwork" // placeholder illustration
            alt="Illustration"
            className="w-3/4 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
