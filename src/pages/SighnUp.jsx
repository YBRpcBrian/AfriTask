import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing the eye icons
import pic from "../assets/woman.jpg";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password

  // Toggle password visibility
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <div className="flex w-screen h-screen text-white">
      {/* Left Side - Image */}
      <div className="w-full h-full bg-gray-100 sm:w-1/2">
        <img src={pic} className="object-cover w-full h-full" alt="Finance Cover" />
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="relative flex flex-col items-center justify-center w-full h-full p-6 bg-primary sm:w-1/2 sm:p-12">
        {/* Dim Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative z-10 flex flex-row items-center justify-center mb-8 text-3xl text-white sm:text-4xl">
          <h1>Fin</h1>
          <h1 className="text-5xl text-primary-2 sm:text-7xl">X</h1>
          <h1>tra</h1>
        </div>
        
        {/* Small description */}
        <div className="relative z-10 px-4 mb-6 text-xs text-center text-gray-300 sm:px-16 sm:text-lg">
          <span>
            Create a new account and join <strong>FinXtra</strong> to securely track your finances and manage your wealth.
          </span>
        </div>

        {/* Sign Up Form */}
        <div className="relative z-10 flex flex-col w-full space-y-6 sm:max-w-2xl">
          {/* Username Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-base font-semibold sm:text-lg">Username</label>
            <input type="text" className="p-4 text-xl transition-all bg-transparent border-2 outline-none border-primary-2 sm:text-2xl rounded-xl focus:ring-2 focus:ring-green-400" />
          </div>

          {/* Email Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-base font-semibold sm:text-lg">Email</label>
            <input type="email" className="p-4 text-xl transition-all bg-transparent border-2 outline-none border-primary-2 sm:text-2xl rounded-xl focus:ring-2 focus:ring-green-400" />
          </div>

          {/* Password Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-base font-semibold sm:text-lg">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="w-full p-4 text-xl transition-all bg-transparent border-2 outline-none border-primary-2 sm:text-2xl rounded-xl focus:ring-2 focus:ring-green-400"
              />
              <div
                className="absolute transform -translate-y-1/2 cursor-pointer right-4 top-1/2"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <AiOutlineEyeInvisible size={24} color="#4B5563" />
                ) : (
                  <AiOutlineEye size={24} color="#4B5563" />
                )}
              </div>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col space-y-2">
            <label className="text-base font-semibold sm:text-lg">Confirm Password</label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                className="w-full p-4 text-xl transition-all bg-transparent border-2 outline-none border-primary-2 sm:text-2xl rounded-xl focus:ring-2 focus:ring-green-400"
              />
              <div
                className="absolute transform -translate-y-1/2 cursor-pointer right-4 top-1/2"
                onClick={toggleConfirmPasswordVisibility}
              >
                {confirmPasswordVisible ? (
                  <AiOutlineEyeInvisible size={24} color="#4B5563" />
                ) : (
                  <AiOutlineEye size={24} color="#4B5563" />
                )}
              </div>
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="flex justify-center w-full mt-6">
            <button className="w-full p-4 text-xl text-white transition-all bg-primary-2 sm:text-2xl hover:bg-primary-3 rounded-xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
