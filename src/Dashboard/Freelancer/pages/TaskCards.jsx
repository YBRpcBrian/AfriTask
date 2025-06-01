import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const TaskCards = ({ img, title, shortDescription, price }) => {
  const navigate = useNavigate();

  const handleTakeTask = () => {
    navigate("/freelance/singletask");
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full group">
      {/* Image Section */}
      <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-sm font-semibold text-gray-800 line-clamp-1">{title}</h1>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{shortDescription}</p>
        </div>
        <h2 className="text-sm font-bold text-primary mt-3">{price}</h2>
      </div>

      {/* Action Bar */}
      <div className="px-4 py-2 bg-gray-50 flex justify-between items-center border-t">
        <button
          onClick={handleTakeTask}
          className="text-xs px-3 py-1.5 bg-primary text-white rounded-full hover:bg-primary/80 transition-all duration-200"
        >
          Take
        </button>
        <Heart className="w-4 h-4 text-gray-500 hover:text-primary cursor-pointer transition-colors duration-200" />
      </div>
    </div>
  );
};

export default TaskCards;
