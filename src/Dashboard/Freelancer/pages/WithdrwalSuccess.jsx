import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WithdrawalSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  px-4">
      <div className="bg-white  p-6  w-full text-center">
        {/* Animated Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center justify-center mb-4"
        >
          <CheckCircle className="text-primary" size={52} />
        </motion.div>

        {/* Success Message */}
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Withdrawal Successful!
        </h2>
        <p className="text-gray-500 text-sm">
          Your mobile money withdrawal has been processed.
        </p>

        {/* Back Button */}
        <div className="mt-5">
          <button
            onClick={() => window.location.href = "/dashboard"}
            className="bg-primary-3 hover:bg-primary text-white font-medium py-2 px-4 rounded-md text-sm transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalSuccess;
