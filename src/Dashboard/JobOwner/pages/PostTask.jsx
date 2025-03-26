import React, { useState } from "react";
import { Camera, MapPin, Briefcase, DollarSign, FileText, MessageCircle, UploadCloud } from "lucide-react";
import bg from "../../../assets/task/7.jpg"

const PostTask = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    location: "Remote",
    amount: "",
    contractType: "Short Term",
    comments: "",
    coverImage: null,
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setTaskData({ ...taskData, coverImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Task Submitted Successfully!");
  };

  return (
    <div className="w-full min-h-screen flex h-full">
        <div className="w-1/2 h-full">
        <img className="w-full h-full object-cover" src={bg} alt="" />

        </div>
      <div className="w-1/2 bg-white p-8 rounded-xl shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Briefcase size={28} className="text-blue-600" />
          Post a Task
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Job Title */}
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <FileText size={20} className="text-blue-600" />
              Job Title
            </label>
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter job title..."
              required
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <Camera size={20} className="text-blue-600" />
              Cover Image
            </label>
            <div className="border border-gray-300 p-4 rounded-lg flex items-center gap-4">
              <input type="file" onChange={handleFileChange} className="hidden" id="fileInput" />
              <label
                htmlFor="fileInput"
                className="flex items-center gap-2 cursor-pointer text-blue-600 font-medium"
              >
                <UploadCloud size={22} />
                {taskData.coverImage ? taskData.coverImage.name : "Upload Image"}
              </label>
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <FileText size={20} className="text-blue-600" />
              Short Description
            </label>
            <textarea
              name="shortDescription"
              value={taskData.shortDescription}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="2"
              placeholder="Briefly describe the task..."
              required
            ></textarea>
          </div>

          {/* Long Description */}
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <FileText size={20} className="text-blue-600" />
              Long Description
            </label>
            <textarea
              name="longDescription"
              value={taskData.longDescription}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              placeholder="Provide more details about the task..."
              required
            ></textarea>
          </div>

          {/* Location (Remote or Onsite) */}
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <MapPin size={20} className="text-blue-600" />
              Location
            </label>
            <select
              name="location"
              value={taskData.location}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>

          {/* Amount or Price */}
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <DollarSign size={20} className="text-blue-600" />
              Amount / Price (FCFA)
            </label>
            <input
              type="number"
              name="amount"
              value={taskData.amount}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter amount..."
              required
            />
          </div>

          {/* Contract Type */}
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <Briefcase size={20} className="text-blue-600" />
              Contract Type
            </label>
            <select
              name="contractType"
              value={taskData.contractType}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="Short Term">Short Term</option>
              <option value="Long Term">Long Term</option>
            </select>
          </div>

          {/* Comments */}
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <MessageCircle size={20} className="text-blue-600" />
              Additional Comments
            </label>
            <textarea
              name="comments"
              value={taskData.comments}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="3"
              placeholder="Any extra details..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Submit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostTask;
