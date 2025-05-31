import React from "react";
import { motion } from "framer-motion";
import { SearchCheck, Handshake, BadgeCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Post Your Job",
    description: "Describe your task and what kind of expert you're looking for. It only takes a few minutes.",
    icon: SearchCheck,
  },
  {
    id: 2,
    title: "Connect & Collaborate",
    description: "Receive proposals, chat with freelancers, and choose the best fit to start working instantly.",
    icon: Handshake,
  },
  {
    id: 3,
    title: "Pay Securely",
    description: "Use AfriTask’s escrow to pay only when the job is done. Fast, safe, and simple.",
    icon: BadgeCheck,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          How It Works
        </motion.h2>
        <p className="text-gray-500 text-sm md:text-base mb-12 max-w-2xl mx-auto">
          Get started in 3 simple steps. Hiring skilled freelancers has never been easier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 hover:bg-gray-100 transition rounded-2xl shadow-sm p-6 flex flex-col items-center text-center"
              >
                <div className="bg-green-100 text-green-600 rounded-full p-3 mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                <div className="mt-4 text-sm font-semibold text-green-400">Step {step.id}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
