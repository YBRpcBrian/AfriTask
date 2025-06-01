import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock } from "lucide-react";
import findwork from "../../../assets/taketask.jpg";

const tasksData = [
  {
    img: "https://images.unsplash.com/photo-1650636353551-1275516077b6",
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
    img: "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319",
    title: "E-commerce Payment Gateway",
    shortDescription: "Integrate Stripe and Flutterwave into a web app.",
    price: "FCFA 40,000",
    status: "Completed",
  },
  {
    img: "https://images.unsplash.com/photo-1656264142377-22ae3fefdbc3",
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

  const statusIcon = (status) =>
    status === "Completed" ? (
      <CheckCircle className="w-5 h-5 text-green-600" />
    ) : (
      <Clock className="w-5 h-5 text-yellow-500" />
    );

  return (
    <div className="pb-16">
      {/* Hero Banner */}
      <div className="mb-12 text-gray-800">
        <div className="relative w-full h-[28rem] overflow-hidden rounded-b-4xl shadow-xl">
          <img
            src={findwork}
            alt="Find Work"
            className="absolute w-full h-full object-cover z-0"
          />
          <div className="absolute w-full h-full bg-black/60 z-10" />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 flex items-center justify-center h-full text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg text-center px-4"
          >
            Complete Your Tasks
          </motion.h1>
        </div>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Taken <span className="text-primary">Tasks</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
          Track the tasks you've taken and mark them as complete when done.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="mt-10 flex justify-center gap-4">
        {["All", "Pending", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-5 py-2 text-sm font-medium rounded-full border ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-10 md:px-24 max-w-7xl mx-auto">
        {filteredTasks.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-300 h-full overflow-hidden"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={task.img}
                alt={task.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {task.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {task.shortDescription}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-primary font-bold text-sm">
                  {task.price}
                </span>
                <div className="flex items-center gap-1 text-sm font-medium">
                  {statusIcon(task.status)}
                  <span
                    className={`${
                      task.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TakenTask;
