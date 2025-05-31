import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/actions/authActions";
import { Mail, Lock, User, Phone, Image } from "lucide-react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/woman.jpg";
import logo from "../assets/logo.png";

const skillOptions = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "SEO",
  "Copywriting",
  "Digital Marketing",
  "Video Editing",
  "Cybersecurity",
  "Project Management",
  "DevOps",
];

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "freelancer",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [step, setStep] = useState(1); // Step 1 = Info, Step 2 = Skills

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const validateStepOne = () => {
    const { fullName, email, phone, password, confirmPassword } = formData;
    return (
      fullName &&
      email &&
      phone &&
      password &&
      confirmPassword &&
      password === confirmPassword
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!validateStepOne()) {
        alert("Please fill all fields correctly and make sure passwords match.");
        return;
      }
      setStep(2);
      return;
    }

    // Step 2: Submit
    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("password", formData.password);
    data.append("userType", formData.userType);
    if (formData.userType === "freelancer") {
      data.append("skills", JSON.stringify(selectedSkills));
    }
    if (profileImage) {
      data.append("profileImage", profileImage);
    }

    dispatch(createUser(data)).then((response) => {
      if (response.success) {
        navigate("/");
      } else {
        alert(response.message || "Signup failed.");
      }
    });
  };

  return (
    <div className="flex flex-col h-screen lg:flex-row  bg-gray-100 text-sm">
      {/* Left Image */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <img
          src={img}
          alt="SignUp"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-primary h-full">
        <div className="w-full max-w-md scale-90 lg:scale-[70%] bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <img src={logo} className="h-auto w-44" alt="Logo" />
          </div>
          <p className="text-gray-500 text-center mt-2">Create a new account</p>

          {/* User Type Toggle */}
          <div className="flex justify-between mt-6 bg-gray-100 p-1 rounded-lg">
            {["freelancer", "job-owner"].map((type) => (
              <button
                key={type}
                onClick={() => setFormData({ ...formData, userType: type })}
                className={`w-1/2 py-2 text-sm font-medium rounded-md transition ${
                  formData.userType === type
                    ? "bg-primary text-white"
                    : "text-gray-700"
                }`}
              >
                {type === "freelancer" ? "Freelancer" : "Job Owner"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Info */}
            <AnimatePresence>
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Profile Photo */}
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
                    <p className="text-sm text-gray-500 mt-2">
                      Upload Profile Picture
                    </p>
                  </div>

                  {/* Form Fields */}
                  <div className="mt-6">
                    <label className="text-gray-700 flex items-center gap-2">
                      <User size={20} className="text-primary" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 border rounded-lg"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="text-gray-700 flex items-center gap-2">
                      <Mail size={20} className="text-primary" /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 border rounded-lg"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="text-gray-700 flex items-center gap-2">
                      <Phone size={20} className="text-primary" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 border rounded-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="mt-4">
                      <label className="text-gray-700 flex items-center gap-2">
                        <Lock size={20} className="text-primary" /> Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 border rounded-lg"
                        placeholder="Enter your password"
                      />
                    </div>

                    <div className="mt-4">
                      <label className="text-gray-700 flex items-center gap-2">
                        <Lock size={20} className="text-primary" /> Confirm
                        Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 border rounded-lg"
                        placeholder="Re-enter your password"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 2: Skill Selection */}
            <AnimatePresence>
              {step === 2 && formData.userType === "freelancer" && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <h3 className="text-gray-700 font-medium mb-2">
                    Select Your Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {skillOptions.map((skill) => (
                      <div
                        key={skill}
                        className={`p-2 text-center border rounded-lg cursor-pointer text-sm transition ${
                          selectedSkills.includes(skill)
                            ? "bg-primary text-white border-primary"
                            : "bg-gray-100 hover:bg-primary-100"
                        }`}
                        onClick={() => toggleSkill(skill)}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-3 transition"
            >
              {step === 1 ? "Next Step" : "Sign Up"}
            </button>
          </form>

          {/* Other Signup Options */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300" />
            <p className="px-3 text-gray-500 text-sm">Or sign up with</p>
            <div className="flex-1 border-t border-gray-300" />
          </div>

          <div className="flex gap-4">
            <button className="w-1/2 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-100 transition">
              <BsGoogle size={20} className="text-red-500" /> Google
            </button>
            <button className="w-1/2 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-100 transition">
              <FaFacebook size={20} className="text-blue-600" /> Facebook
            </button>
          </div>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
 