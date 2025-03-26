import React from "react";
import findwork from "../../../assets/findwork.jpg";
import Taskcomp from "./Taskcomp";

const FindTask = () => {
  return (
    <div className="my-8 text-gray-800">
      {/* Banner Section */}
      <div className="relative w-[95%] h-96 mx-auto rounded-2xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src={findwork}
          alt="Find Work"
        />

        {/* Overlay Effect */}
        <div className="absolute w-full h-full bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl md:text-7xl font-bold drop-shadow-lg px-4">
          Find Task
        </h1>
      </div>

      {/* Available Tasks Section */}
      <div>
        <div className="mt-8 text-4xl font-semibold flex justify-center">
        <h1 className="">
          Available
        </h1>
        <h1 className="text-primary">
        Tasks
        </h1>

        </div>
        
        <span className="block mt-2 text-sm text-center text-gray-600">
          Pick a task that best suits you. Explore tasks across various
          categories.
        </span>
      </div>

      <div className="mx-4 sm:mx-8 lg:mx-56">
        <Taskcomp />
      </div>
    </div>
  );
};

export default FindTask;
