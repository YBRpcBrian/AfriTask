import React, { useState } from "react";
import { CheckCircle, ClipboardList, FileText, XCircle } from "lucide-react";
import bg from "../../../assets/task/4.jpg"; // Import the background image

const DeliverTask = () => {
  const [checked, setChecked] = useState(false);
  const [notes, setNotes] = useState("");

  const handleComplete = () => {
    alert("Task marked as completed!");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute  w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute  w-full h-full bg-black/50 "></div>

      {/* Content */}
      <div className="w-full max-w-2xl mx-auto p-6 bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg relative">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <ClipboardList size={28} className="text-primary" />
          Deliver Task
        </h2>

        {/* Task Card */}
        <div className="border rounded-lg p-6 shadow-md bg-gray-50">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FileText size={22} className="text-gray-700" />
            Task Title: <span className="text-primary">Develop Checkout Page</span>
          </h3>
          <p className="text-gray-600 mt-2">
            Ensure the checkout page is fully responsive and integrates with the payment gateway.
          </p>

          {/* Task Checklist */}
          <div className="mt-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-gray-700 text-sm">I have reviewed and completed this task</span>
            </label>
          </div>

          {/* Notes Input */}
          <div className="mt-4">
            <label className="text-gray-700 font-medium">Additional Notes (Optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              rows="3"
              placeholder="Add any comments or details..."
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleComplete}
              disabled={!checked}
              className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white font-semibold transition ${
                checked ? "bg-primary hover:bg-primary-3" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              <CheckCircle size={20} />
              Mark as Done
            </button>
            <button
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-primary border border-primary font-semibold bg-white hover:bg-primary hover:text-white transition"
            >
              <XCircle size={20} />
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverTask;
