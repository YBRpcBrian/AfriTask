import React from "react";
import { motion } from "framer-motion";
import findwork from "../../../assets/findtask.jpg";
import Taskcomp from "./Taskcomp";

const FindTask = () => {
  return (
    <div className="mb-12 text-gray-800">
      {/* Banner Section */}
      <div className="relative w-full h-[28rem] overflow-hidden rounded-b-4xl shadow-xl">
        {/* Background Image */}
        <img
          className="absolute w-full h-full object-cover z-0"
          src={findwork}
          alt="Find Work"
        />

        {/* Black Overlay */}
        <div className="absolute w-full h-full bg-black/60 z-10" />

        {/* Banner Text */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 inset-0 flex items-center justify-center h-full text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg text-center px-4"
        >
          Find Your Next Task
        </motion.h1>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-14 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Available <span className="text-primary">Tasks</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Pick a task that best suits you. Explore tasks across various categories.
        </p>
      </motion.div>

      {/* Task List */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-10 px-4 sm:px-8 lg:px-56"
      >
        <Taskcomp />
      </motion.div>
    </div>
  );
};

export default FindTask;
