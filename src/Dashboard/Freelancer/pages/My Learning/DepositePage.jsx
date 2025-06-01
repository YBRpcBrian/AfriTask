import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../../../../redux/actions/momoActions";

import pay from "../../../../assets/pay.jpg";
import momoIcon from "../../../../assets/mtn.png";
import orangeIcon from "../../../../assets/orange-money.jpg";

import { FaUser, FaPhoneAlt, FaMoneyBillWave, FaInfoCircle } from "react-icons/fa";

const DepositePage = () => {
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [method, setMethod] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    amount: "",
    description: "",
  });

  const momoState = useSelector((state) => state.momo);
  const { loading: momoLoading, success: momoSuccess, error: momoError } = momoState;

  useEffect(() => {
    if (momoSuccess && method) {
      setStep(3);
    }
  }, [momoSuccess, method]);

  const handleSelectMethod = (selected) => {
    setMethod(selected);
    setStep(2);
  };

  const handleSubmit = () => {
    if (!formData.number || !formData.amount) {
      alert("Please enter valid phone number and amount");
      return;
    }
    dispatch(deposit(formData.number, formData.amount, method, formData.name, formData.description));
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setFormData({ name: "", number: "", amount: "", description: "" });
      setMethod(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  p-6">
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl overflow-hidden">
        {/* LEFT IMAGE */}
        <div className="hidden md:flex items-center justify-center ">
          <motion.img
            src={pay}
            alt="payment"
            className=" object-cover"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-8 text-green-700">Deposit Funds</h2>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-2 gap-8">
                  <PaymentMethodCard
                    title="MTN Mobile Money"
                    icon={momoIcon}
                    onClick={() => handleSelectMethod("momo-mtn")}
                    borderColor="border-yellow-400"
                    hoverBg="hover:bg-yellow-100"
                  />
                  <PaymentMethodCard
                    title="Orange Money"
                    icon={orangeIcon}
                    onClick={() => handleSelectMethod("momo-orange")}
                    borderColor="border-orange-400"
                    hoverBg="hover:bg-orange-100"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                  <FormField
                    label="Your Name"
                    icon={<FaUser className="text-gray-400" />}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(val) => setFormData({ ...formData, name: val })}
                    required={false}
                  />
                  <FormField
                    label="Phone Number"
                    icon={<FaPhoneAlt className="text-gray-400" />}
                    placeholder="Enter your phone number"
                    type="tel"
                    value={formData.number}
                    onChange={(val) => setFormData({ ...formData, number: val })}
                    required
                  />
                  <FormField
                    label="Amount (XAF)"
                    icon={<FaMoneyBillWave className="text-gray-400" />}
                    placeholder="Enter amount to deposit"
                    type="number"
                    value={formData.amount}
                    onChange={(val) => setFormData({ ...formData, amount: val })}
                    required
                  />
                  <FormField
                    label="Description (Optional)"
                    icon={<FaInfoCircle className="text-gray-400" />}
                    placeholder="Enter description"
                    value={formData.description}
                    onChange={(val) => setFormData({ ...formData, description: val })}
                    required={false}
                  />

                  {momoError && (
                    <p className="text-red-600 text-center text-sm font-medium">{momoError}</p>
                  )}

                  <div className="flex gap-5">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-md transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={momoLoading}
                      className={`flex-1 text-white font-semibold py-3 rounded-md transition ${
                        momoLoading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {momoLoading ? "Processing..." : "Submit"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                  alt="success"
                  className="w-24 mx-auto"
                />
                <h3 className="text-2xl font-bold text-green-600">Payment Successful!</h3>
                <p className="text-gray-600 text-base max-w-md mx-auto">
                  Thank you for your payment via{" "}
                  <span className="font-semibold">
                    {method === "momo-mtn" ? "MTN MoMo" : "Orange Money"}
                  </span>.
                  Your transaction has been processed.
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setMethod(null);
                    setFormData({ name: "", number: "", amount: "", description: "" });
                  }}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md font-semibold transition"
                >
                  Make Another Deposit
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Payment Method Card with circular icon container
const PaymentMethodCard = ({ title, icon, onClick, borderColor, hoverBg }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer border ${borderColor} ${hoverBg} transition rounded-xl p-6 text-center shadow-md flex flex-col items-center justify-center gap-4`}
  >
    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-inner">
      <img src={icon} alt={title} className=" object-cover h-auto rounded-full" />
    </div>
    <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
  </div>
);

// FormField component: label + input with icon
const FormField = ({ label, icon, type = "text", placeholder, value, onChange, required = true }) => (
  <div className="flex flex-col">
    <label className="mb-2 font-medium text-gray-700">{label}{required && <span className="text-red-500">*</span>}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition shadow-sm"
      />
    </div>
  </div>
);

export default DepositePage;
