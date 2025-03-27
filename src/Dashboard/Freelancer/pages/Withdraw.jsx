import React from "react";
import { X, User, Phone, CreditCard, DollarSign, ChevronDown } from "lucide-react";

const Withdraw = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4 sm:p-6">
      <div className="bg-white/90 p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl border border-gray-300 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Withdraw Money</h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Fast & Secure Mobile Money Withdrawal
          </p>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 bg-gray-100 text-sm sm:text-base"
            />
          </div>

          {/* Payment Method */}
          <div className="relative">
            <CreditCard className="absolute left-3 top-3 text-gray-400" size={20} />
            <select className="w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 bg-gray-100 text-sm sm:text-base appearance-none">
              <option value="" disabled selected>
                Select Payment Method
              </option>
              <option value="mtn">MTN MoMo</option>
              <option value="orange">Orange Money</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>

          {/* MoMo Number */}
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="tel"
              placeholder="MoMo Number"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 bg-gray-100 text-sm sm:text-base"
            />
          </div>

          {/* Amount */}
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="number"
              placeholder="Amount in FCFA"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 bg-gray-100 text-sm sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-400 transition text-sm sm:text-base"
          >
            Withdraw Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
