import React from "react";
import pic from "../assets/background.jpg";

const Home = () => {
  return (
    <div className="flex w-screen h-screen text-white">
      {/* Left Side - Image */}
      <div className="w-full h-full bg-gray-100 sm:w-1/2">
        <img src={pic} className="object-cover w-full h-full" alt="Finance Cover" />
      </div>

      {/* Right Side - Login Form */}
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
            Welcome back to <strong>FinXtra</strong>! Securely access your account, track your finances, and manage your wealth with ease.
          </span>
        </div>

        {/* Login Form */}
        <div className="relative z-10 flex flex-col w-full space-y-6 sm:max-w-2xl">
          <div className="flex flex-col space-y-2">
            <label className="text-base font-semibold sm:text-lg">Email</label>
            <input type="text" className="p-4 text-xl transition-all bg-transparent border-2 outline-none border-primary-2 sm:text-2xl rounded-xl focus:ring-2 focus:ring-green-400" />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-base font-semibold sm:text-lg">Password</label>
            <input type="password" className="p-4 text-xl transition-all bg-transparent border-2 outline-none border-primary-2 sm:text-2xl rounded-xl focus:ring-2 focus:ring-green-400" />
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center w-full mt-6">
            <button className="w-full p-4 text-xl text-white transition-all bg-primary-2 sm:text-2xl hover:bg-primary-3 rounded-xl">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
