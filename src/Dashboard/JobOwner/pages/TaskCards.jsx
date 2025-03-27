import React, { useState } from "react";
import { Clock, CheckCircle } from "lucide-react";

const TaskCards = ({ image, title, description, price, paymentStatus, onPayClick }) => {
  return (
    <div className="w-full max-w-xs md:max-w-sm lg:max-w-md bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105">
      {/* Image */}
      <div className="h-44 w-full">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h2 className="text-base md:text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm md:text-base text-gray-500">{description}</p>
        <h3 className="text-lg md:text-xl font-bold text-primary">{price} FCFA</h3>

        {/* Payment Status with Icon */}
        <div
          className={`flex items-center gap-2 text-sm md:text-base font-semibold px-3 py-1 w-fit rounded-lg ${
            paymentStatus === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {paymentStatus === "Pending" ? (
            <>
              <Clock size={18} className="text-yellow-600" />
              Pending
            </>
          ) : (
            <>
              <CheckCircle size={18} className="text-green-600" />
              Completed
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className={`px-4 py-2 md:px-5 md:py-2.5 text-white font-medium rounded-lg ${
              paymentStatus === "Pending"
                ? "bg-primary hover:bg-primary-3"
                : "bg-gray-400 cursor-not-allowed"
            } transition`}
            disabled={paymentStatus === "Completed"}
            onClick={() => onPayClick({ title, price })}
          >
            {paymentStatus === "Pending" ? "Pay" : "Done"}
          </button>
          <button className="px-4 py-2 md:px-5 md:py-2.5 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCards;
