import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        {/* Checkmark Icon */}
        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-500 text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mt-4">Payment Successful!</h1>
        <p className="text-gray-600 mt-2">Your transaction has been completed successfully.</p>

        {/* Go Back Button */}
        <Link to="/" className="inline-block mt-6">
          <button className="bg-primary hover:bg-primary-3 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition-all">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
