import React from 'react';
import { motion } from 'framer-motion';

const OngoingCourseCard = ({
  thumbnail,
  title,
  description,
  author,
  progress,
  onContinue,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-primary/30 overflow-hidden w-full flex flex-col transition duration-300 ease-in-out h-[420px]"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{title}</h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <div className="mt-2 text-sm text-gray-500">By {author}</div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex-grow" />
        <button
          onClick={onContinue}
          className="mt-4 px-4 py-2 bg-primary text-white text-sm rounded-xl w-fit hover:bg-primary/90 transition duration-300"
        >
          Continue Course
        </button>
      </div>
    </motion.div>
  );
};

export default OngoingCourseCard;
