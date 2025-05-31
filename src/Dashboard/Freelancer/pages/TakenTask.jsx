import React, { useState } from "react";
import { motion } from "framer-motion";
import TakenTaskCard from "./TakenTaskCard";
import findwork from "../../../assets/taketask.jpg";

const tasksData = [
  {
    img: "https://images.unsplash.com/photo-1616627984235-7fcbcd7c35c7",
    title: "Design a Mobile Banking UI",
    shortDescription: "Create a clean and modern banking app user interface.",
    price: "FCFA 25,000",
    status: "Pending",
  },
  {
    img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    title: "Write SEO Blog for FinTech",
    shortDescription: "Article on the future of crypto wallets in Africa.",
    price: "FCFA 10,000",
    status: "Completed",
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Landing Page for Fashion Store",
    shortDescription: "Build a responsive landing page using React & Tailwind.",
    price: "FCFA 35,000",
    status: "Pending",
  },
  {
    img: "https://images.unsplash.com/photo-1581091012184-7c62d30b6c8b",
    title: "E-commerce Payment Gateway",
    shortDescription: "Integrate Stripe and Flutterwave into a web app.",
    price: "FCFA 40,000",
    status: "Completed",
  },
  {
    img: "https://images.unsplash.com/photo-1607083209440-15a3c94cb61d",
    title: "Freelance Portfolio Website",
    shortDescription: "Portfolio with animation, projects and resume upload.",
    price: "FCFA 18,000",
    status: "Pending",
  },
];

const TakenTask = () => {
  const [filter, setFilter] = useState("All");

  const filteredTasks =
    filter === "All"
      ? tasksData
      : tasksData.filter((task) => task.status === filter);

  return (
    <div className="pb-16">
      {/* Banner Section */}
      <div className="mb-12 text-gray-800">
        <div className="relative w-full h-[28rem] overflow-hidden rounded-b-4xl shadow-xl">
          <img
            className="absolute w-full h-full object-cover z-0"
            src={findwork}
            alt="Find Work"
          />
          <div className="absolute w-full h-full bg-black/60 z-10" />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 inset-0 flex items-center justify-center h-full text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg text-center px-4"
          >
            Complete Your Tasks
          </motion.h1>
        </div>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Taken <span className="text-primary">Tasks</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
          Track the tasks you've taken and mark them as complete when done.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="mt-10 flex justify-center gap-4">
        {["All", "Pending", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 text-sm font-medium rounded-full border ${
              filter === status
                ? "bg-primary text-white border-primary"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            } transition-all`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Task Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        {filteredTasks.map((task, index) => (
          <TakenTaskCard key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TakenTask;
