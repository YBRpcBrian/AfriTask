import React, { useState } from "react";
import { Search } from "lucide-react"; // Assuming you are using lucide-react for the search icon
import TaskCards from "./TaskCards";
import cardData from "./cardData"; // Import the cardData

const Taskcomp = () => {
  const [priceRange, setPriceRange] = useState([0, 100]); // State for price range

  // Handle price range slider change
  const handlePriceChange = (e) => {
    const value = e.target.value.split(",");
    setPriceRange([parseInt(value[0]), parseInt(value[1])]);
  };

  return (
    <div className="flex flex-wrap mt-8 ">
      {/* Sidebar */}
      <div className="w-full sm:w-1/4 lg:w-1/6 bg-gray-100 p-6 rounded-xl shadow-lg mb-6 sm:mb-0">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Task Categories</h1>
        <ul className="space-y-3 text-gray-600">
          <li className="hover:text-primary cursor-pointer transition-colors duration-200">Category 01</li>
          <li className="hover:text-primary cursor-pointer transition-colors duration-200">Category 02</li>
          <li className="hover:text-primary cursor-pointer transition-colors duration-200">Category 03</li>
          <li className="hover:text-primary cursor-pointer transition-colors duration-200">Category 04</li>
          <li className="hover:text-primary cursor-pointer transition-colors duration-200">Category 05</li>
        </ul>

        {/* Filters Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>
          
          {/* Price Range Filter */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700">Price Range</h3>
            <input
              type="range"
              min="0"
              max="500"
              step="1"
              value={`${priceRange[0]},${priceRange[1]}`}
              onChange={handlePriceChange}
              className="w-full h-2 bg-primary rounded-full cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>FCFA {priceRange[0]}</span>
              <span>FCFA {priceRange[1]}</span>
            </div>
          </div>

          {/* Task Type Filter */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700">Task Type</h3>
            <div className="space-y-2 text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" name="taskType" value="copywriting" className="mr-2" />
                Copywriting
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="taskType" value="seo" className="mr-2" />
                SEO
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="taskType" value="development" className="mr-2" />
                Development
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="taskType" value="translation" className="mr-2" />
                Translation
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Task Cards Section */}
      <div className="w-full sm:w-3/4 lg:w-5/6 px-8">
        <div className="mb-6">
          {/* Search Bar with Icon */}
          <div className="relative">
            <input
              className="w-full border border-gray-300 text-xl p-4 pl-12 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              placeholder="Search task..."
              type="text"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Task Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((task) => (
            <TaskCards
              key={task.id}
              img={task.img}
              title={task.title}
              shortDescription={task.shortDescription}
              price={task.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Taskcomp;
