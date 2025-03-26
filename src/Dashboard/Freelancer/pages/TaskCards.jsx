import React from "react";
import { Heart } from "lucide-react";

const TaskCards = ({ img, title, shortDescription, price }) => {
  return (
    <div className="max-w-xs w-full bg-white rounded-lg group shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      {/* Task Image */}
      <div className="relative ">
        <img
          src={img}
          alt={title}
          className="w-full h-56 object-cover sm:h-64 md:h-72 lg:h-80 xl:h-96 group-hover:scale-105 duration-300 transition-all"
        />
      </div>

      {/* Task Details */}
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors duration-200">
          {title}
        </h1>
        <p className="text-gray-600 text-sm mt-2">{shortDescription}</p>
        <h2 className="text-lg font-bold text-primary mt-4">{price}</h2>
      </div>

      {/* Action Section */}
      <div className="p-4 bg-gray-50 flex justify-between items-center">
        <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-2 transition-colors duration-200">
          Take
        </button>
        <Heart className="text-gray-600 hover:text-primary transition-colors duration-200 cursor-pointer" />
      </div>
    </div>
  );
};

export default TaskCards;
