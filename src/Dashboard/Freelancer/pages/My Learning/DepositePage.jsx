import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../../../../redux/actions/momoActions";

import pay from "../../../../assets/pay.jpg";
import momoIcon from "../../../../assets/mtn.png";
import orangeIcon from "../../../../assets/orange-money.jpg";
import bitcoinIcon from "../../../../assets/bitcoin.png";

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
  const [btcInvoice, setBtcInvoice] = useState(null);

  const momoState = useSelector((state) => state.momo);
  const { loading: momoLoading, success: momoSuccess, error: momoError } = momoState;

  useEffect(() => {
    if (momoSuccess && (method === "momo-mtn" || method === "momo-orange")) {
      setStep(3);
    }
  }, [momoSuccess, method]);

  useEffect(() => {
    if (btcInvoice) {
      const timer = setTimeout(() => {
        setStep(4);
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, [btcInvoice]);

  const handleSelectMethod = (selected) => {
    setMethod(selected);
    setStep(2);
  };

  const handleSubmit = () => {
    if (!formData.amount || (method !== "btc-lightning" && !formData.number)) {
      alert("Please fill in the required fields.");
      return;
    }

    if (method === "btc-lightning") {
      // Simulate invoice generation
      const fakeInvoice = `lnbc1234-${Date.now()}`;
      setBtcInvoice(fakeInvoice);
      setStep(3);
    } else {
      dispatch(
        deposit(
          formData.number,
          formData.amount,
          method,
          formData.name,
          formData.description
        )
      );
    }
  };

  const handleBack = () => {
    setStep(1);
    setMethod(null);
    setFormData({
      name: "",
      number: "",
      amount: "",
      description: "",
    });
    setBtcInvoice(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl overflow-hidden">
        {/* LEFT IMAGE */}
        <div className="hidden md:flex items-center justify-center">
          <motion.img
            src={pay}
            alt="payment"
            className="object-cover"
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
                  <PaymentMethodCard
                    title="Bitcoin Lightning"
                    icon={bitcoinIcon}
                    onClick={() => handleSelectMethod("btc-lightning")}
                    borderColor="border-yellow-600"
                    hoverBg="hover:bg-yellow-100"
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
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  {method !== "btc-lightning" && (
                    <FormField
                      label="Your Name"
                      icon={<FaUser className="text-gray-400" />}
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(val) => setFormData({ ...formData, name: val })}
                    />
                  )}

                  {method !== "btc-lightning" && (
                    <FormField
                      label="Phone Number"
                      icon={<FaPhoneAlt className="text-gray-400" />}
                      placeholder="Enter your phone number"
                      type="tel"
                      value={formData.number}
                      onChange={(val) => setFormData({ ...formData, number: val })}
                      required
                    />
                  )}

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
                      className={`flex-1 text-white font-semibold py-3 rounded-md transition ${
                        momoLoading
                          ? "bg-green-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {method === "btc-lightning"
                        ? "Generate QR Code"
                        : momoLoading
                        ? "Processing..."
                        : "Submit"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && method === "btc-lightning" && (
              <motion.div
                key="step3-btc"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-700">Scan to Pay</h3>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?data=${btcInvoice}&size=200x200`}
                  alt="Bitcoin QR"
                  className="mx-auto"
                />
                <p className="text-sm text-gray-600">Waiting for payment confirmation...</p>
              </motion.div>
            )}

            {step === 3 && method !== "btc-lightning" && (
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
                    {method === "momo-mtn"
                      ? "MTN MoMo"
                      : method === "momo-orange"
                      ? "Orange Money"
                      : "Bitcoin Lightning"}
                  </span>
                  . Your transaction has been processed.
                </p>
                <button
                  onClick={handleBack}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md font-semibold transition"
                >
                  Make Another Deposit
                </button>
              </motion.div>
            )}

            {step === 4 && method === "btc-lightning" && (
              <motion.div
                key="step4-btc-success"
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
                  Thank you for your payment via <span className="font-semibold">Bitcoin Lightning</span>. Your transaction has been processed.
                </p>
                <button
                  onClick={handleBack}
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

const PaymentMethodCard = ({ title, icon, onClick, borderColor, hoverBg }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer border ${borderColor} ${hoverBg} rounded-xl p-6 flex items-center space-x-4 transition duration-200 shadow hover:shadow-md`}
  >
    <img src={icon} alt={title} className="w-10 h-10 object-contain" />
    <h4 className="text-lg font-semibold">{title}</h4>
  </div>
);

const FormField = ({
  label,
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="flex items-center border rounded-md px-3 py-2">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="flex-1 ml-3 outline-none text-sm"
      />
    </div>
  </div>
);

export default DepositePage;
