import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
        {/* Checkmark Icon */}
        <div className="flex items-center justify-center w-20 h-20 mx-auto text-white bg-green-500 rounded-full">
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

        <h1 className="mt-4 text-2xl font-bold text-gray-800">Payment Successful!</h1>
        <p className="mt-2 text-gray-600">Your transaction has been completed successfully.</p>

        {/* Go Back Button */}
        <Link to="/" className="inline-block mt-6">
          <button className="px-6 py-2 font-medium text-white transition-all rounded-lg shadow-lg bg-primary hover:bg-primary-3">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
