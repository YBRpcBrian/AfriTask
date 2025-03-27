import React, { useState } from "react";
import {
  Camera,
  MapPin,
  Briefcase,
  DollarSign,
  FileText,
  MessageCircle,
  UploadCloud,
} from "lucide-react";
import bg from "../../../assets/taskadd.jpg";

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
    <div className="w-full min-h-screen flex bg-gray-100">
      {/* Left Image Section */}
      <div className="w-1/2 hidden lg:block">
        <img className="w-full h-full object-cover" src={bg} alt="Background" />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 bg-white p-10 ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row md:gap-6">
            {/* Job Title */}
            <div className="flex-1">
              <label className="text-gray-700 font-medium flex items-center gap-2">
                <FileText size={20} className="text-primary" />
                Job Title
              </label>
              <input
                type="text"
                name="title"
                value={taskData.title}
                onChange={handleChange}
                className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none bg-gray-50"
                placeholder="Enter job title..."
                required
              />
            </div>

            {/* Cover Image */}
            <div className="flex-1">
              <label className="text-gray-700 font-medium flex items-center gap-2">
                <Camera size={20} className="text-primary" />
                Cover Image
              </label>

              <div className="w-full h-36 rounded-xl overflow-hidden border border-gray-300 mt-2 bg-gray-50 flex items-center justify-center relative">
                {taskData.coverImage ? (
                  <img className="h-full w-full object-cover" src={URL.createObjectURL(taskData.coverImage)} alt="Cover" />
                ) : (
                  <span className="text-gray-400">No image selected</span>
                )}
              </div>

              <div className="flex items-center gap-4 mt-3">
                <input type="file" onChange={handleFileChange} className="hidden" id="fileInput" />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-3 transition flex items-center gap-2"
                >
                  <UploadCloud size={18} />
                  {taskData.coverImage ? taskData.coverImage.name : "Upload Image"}
                </label>
              </div>
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              Short Description
            </label>
            <textarea
              name="shortDescription"
              value={taskData.shortDescription}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none bg-gray-50"
              rows="2"
              placeholder="Briefly describe the task..."
              required
            ></textarea>
          </div>

          {/* Long Description */}
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              Long Description
            </label>
            <textarea
              name="longDescription"
              value={taskData.longDescription}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none bg-gray-50"
              rows="4"
              placeholder="Provide more details about the task..."
              required
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Location */}
            <div className="flex-1">
              <label className="text-gray-700 font-medium flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                Location
              </label>
              <select
                name="location"
                value={taskData.location}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none bg-gray-50"
                required
              >
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
              </select>
            </div>

            {/* Amount */}
            <div className="flex-1">
              <label className="text-gray-700 font-medium flex items-center gap-2">
                <DollarSign size={20} className="text-primary" />
                Amount / Price (FCFA)
              </label>
              <input
                type="number"
                name="amount"
                value={taskData.amount}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none bg-gray-50"
                placeholder="Enter amount..."
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Contract Type */}
            <div className="flex-1">
              <label className="text-gray-700 font-medium flex items-center gap-2">
                <Briefcase size={20} className="text-primary" />
                Contract Type
              </label>
              <select
                name="contractType"
                value={taskData.contractType}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none bg-gray-50"
                required
              >
                <option value="Short Term">Short Term</option>
                <option value="Long Term">Long Term</option>
              </select>
            </div>

            {/* Additional Comments */}
            <div className="flex-1">
              <label className="text-gray-700 font-medium flex items-center gap-2">
                <MessageCircle size={20} className="text-primary" />
                Additional Comments
              </label>
              <textarea
                name="comments"
                value={taskData.comments}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none bg-gray-50"
                rows="3"
                placeholder="Any extra details..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button className="px-14 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-3 transition">
              Submit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostTask;
