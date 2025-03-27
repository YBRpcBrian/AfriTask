import React from "react";
import { Mail, Lock } from "lucide-react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import img from "../assets/login.jpg";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 h-screen">
        <img src={img} alt="Login" className="w-full h-full object-cover" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-primary">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <Logo />
          </div>

          <p className="text-gray-500 text-center mt-2">
            Login to your account
          </p>

          {/* Email Input */}
          <div className="mt-6">
            <label className="text-gray-700 flex items-center gap-2">
              <Mail size={20} className="text-primary" /> Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="text-gray-700 flex items-center gap-2">
              <Lock size={20} className="text-primary" /> Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <a href="#" className="text-primary text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-3 transition">
            Login
          </button>

          {/* Alternative Login */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="px-3 text-gray-500 text-sm">Or login with</p>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="flex gap-4">
            <button className="w-1/2 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-100 transition">
              <BsGoogle size={20} className="" /> Google
            </button>
            <button className="w-1/2 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-100 transition">
              <FaFacebook size={20} className="text-blue-600" /> Facebook
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
