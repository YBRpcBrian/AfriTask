import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/actions/authActions"; // Import the registration action
import { Mail, Lock, User, Phone, Image } from "lucide-react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import img from "../assets/woman.jpg";
import Logo from "../components/Logo";

const SignUp = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "freelancer", // Default to Freelancer
  });

  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle profile image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);
      setProfilePreview(URL.createObjectURL(file)); // Preview the image
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("password", formData.password);
    data.append("userType", formData.userType);
    if (profileImage) {
      data.append("profileImage", profileImage);
    }

    // Dispatch action to create user
    dispatch(createUser(data));
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 text-sm">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <img
          src={img}
          alt="SignUp"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-primary h-screen lg:h-max">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <Logo />
          </div>

          <p className="text-gray-500 text-center mt-2">Create a new account</p>

          {/* User Type Selection */}
          <div className="flex justify-between mt-6 bg-gray-100 p-1 rounded-lg">
            <button
              className={`w-1/2 py-2 text-sm font-medium rounded-md transition ${
                formData.userType === "freelancer"
                  ? "bg-primary text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setFormData({ ...formData, userType: "freelancer" })}
            >
              Freelancer
            </button>
            <button
              className={`w-1/2 py-2 text-sm font-medium rounded-md transition ${
                formData.userType === "job-owner"
                  ? "bg-primary text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setFormData({ ...formData, userType: "job-owner" })}
            >
              Job Owner
            </button>
          </div>

          {/* Profile Photo Upload */}
          <div className="mt-6 flex flex-col items-center">
            <label className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden">
              {profilePreview ? (
                <img
                  src={profilePreview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image size={30} className="text-gray-500" />
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            <p className="text-sm text-gray-500 mt-2">Upload Profile Picture</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mt-6">
              <label className="text-gray-700 flex items-center gap-2">
                <User size={20} className="text-primary" /> Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="text-gray-700 flex items-center gap-2">
                <Mail size={20} className="text-primary" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div className="mt-4">
              <label className="text-gray-700 flex items-center gap-2">
                <Phone size={20} className="text-primary" /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
              />
            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-2 gap-2">
              <div className="mt-4 col-span-1">
                <label className="text-gray-700 flex items-center gap-2">
                  <Lock size={20} className="text-primary" /> Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
                />
              </div>

              <div className="mt-4 col-span-1">
                <label className="text-gray-700 flex items-center gap-2">
                  <Lock size={20} className="text-primary" /> Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-3 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
