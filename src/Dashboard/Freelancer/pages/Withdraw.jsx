import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { disburse } from "../../../redux/actions/momoActions";
import {
  X, User, Phone, CreditCard, DollarSign, ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Withdraw = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, success, message, error } = useSelector((state) => state.momo);

  const [fullName, setFullName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  // Clear form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFullName("");
      setPaymentMethod("");
      setNumber("");
      setAmount("");
    }
  }, [isOpen]);

  // Navigate to success page after successful disbursement
  useEffect(() => {
    if (success) {
      onClose(); // Close the modal first
      setTimeout(() => {
        navigate("/withdraw-success");
      }, 500); // Short delay to allow modal to close smoothly
    }
  }, [success, navigate, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!number || !amount || !paymentMethod || !fullName) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(disburse(number, amount));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl relative border border-gray-300">
        
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

        {/* Feedback */}
        {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
        {success && <p className="text-green-600 text-sm mt-4">{message || "Withdrawal successful"}</p>}

        {/* Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 bg-gray-100 text-sm sm:text-base"
              required
            />
          </div>

          {/* Payment Method */}
          <div className="relative">
            <CreditCard className="absolute left-3 top-3 text-gray-400" size={20} />
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 bg-gray-100 text-sm sm:text-base appearance-none"
              required
            >
              <option value="" disabled>Select Payment Method</option>
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 bg-gray-100 text-sm sm:text-base"
              required
            />
          </div>

          {/* Amount */}
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="number"
              placeholder="Amount in FCFA"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 bg-gray-100 text-sm sm:text-base"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 rounded-lg font-semibold transition text-sm sm:text-base ${
              loading ? "bg-orange-300 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-400"
            }`}
          >
            {loading ? "Processing..." : "Withdraw Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
