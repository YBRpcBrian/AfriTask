import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { depositMoney } from "../../../redux/actions/paymentActions";
import { X, User, Mail, Phone, CreditCard, DollarSign, ChevronDown } from "lucide-react";

const Deposit = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);

  // Ensure formData updates when user data is available
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    paymentMethod: "",
    momoName: "",
    momoNumber: "",
    amount: "",
  });

  // Update formData if user changes
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.fullName,
        email: user.email,
      }));
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.paymentMethod || !formData.momoName || !formData.momoNumber || !formData.amount) {
      alert("Please fill in all fields.");
      return;
    }

    if (!user?.id) {
      alert("User not authenticated. Please log in.");
      return;
    }

    const depositData = {
      userId: user.id,
      fullName: formData.fullName,
      email: formData.email,
      type: "deposit",
      paymentMethod: formData.paymentMethod,
      momoName: formData.momoName,
      momoNumber: formData.momoNumber,
      amount: Number(formData.amount),
    };

    try {
      const paymentLink = await dispatch(depositMoney(depositData));

      if (paymentLink) {
        window.location.href = paymentLink; // Redirect to payment page
      } else {
        alert("Deposit initiated, but no payment link received.");
      }
    } catch (error) {
      console.error("Deposit error:", error);
      alert("An error occurred while processing your deposit.");
    }

    onClose(); // Close the modal after submitting
  };

  // Close the modal when clicking outside of it
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    isOpen && (
      <div
        id="modal-overlay"
        className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4 sm:p-6"
        onClick={handleOutsideClick}
      >
        <div className="bg-white/90 p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl border border-gray-300 relative">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>

          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Deposit Money</h2>
            <p className="text-gray-500 text-sm sm:text-base">Secure & Fast Mobile Money Deposit</p>
          </div>

          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary bg-gray-100 text-sm sm:text-base"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary bg-gray-100 text-sm sm:text-base"
              />
            </div>

            <div className="relative">
              <CreditCard className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-primary bg-gray-100 text-sm sm:text-base appearance-none"
              >
                <option value="" disabled>Select Payment Method</option>
                <option value="mtn">MTN MoMo</option>
                <option value="orange">Orange Money</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>

            <div className="relative">
              <CreditCard className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                name="momoName"
                value={formData.momoName}
                onChange={handleChange}
                placeholder="MoMo Name"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary bg-gray-100 text-sm sm:text-base"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="tel"
                name="momoNumber"
                value={formData.momoNumber}
                onChange={handleChange}
                placeholder="MoMo Number"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary bg-gray-100 text-sm sm:text-base"
              />
            </div>

            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount in FCFA"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary bg-gray-100 text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-400 transition text-sm sm:text-base"
            >
              Deposit Now
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Deposit;
