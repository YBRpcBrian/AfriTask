import React from "react";
import DisplayTasks from "./DisplayTasks";
import bg from "../../../assets/logincover.jpg";

const MakePayments = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-[95%] h-96 mx-auto rounded-3xl overflow-hidden mt-16">
        {/* Background Image */}
        <img className="h-full w-full object-cover" src={bg} alt="Payment Cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center tracking-wide drop-shadow-lg px-4">
            Make Your Payments
          </h1>
        </div>
      </div>

      {/* Task Display Section */}
      <div className="mt-8 sm:mt-12 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-80">
        <div className="text-gray-700 text-center mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Submitted tasks</h1>
          <span className="text-sm sm:text-base text-gray-500">
            Your tasks awaiting payment
          </span>
        </div>
        <DisplayTasks />
      </div>
    </>
  );
};

export default MakePayments;
