import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import img from "../assets/login.jpg";
import Logo from "../components/Logo";
import { loginUser } from "../redux/actions/authActions"; // Import login action

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Accessing the authentication state from Redux
  const { user, token, loading, error } = useSelector((state) => state.auth); // Access user and token
  console.log(user);
  
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if user is already authenticated and redirect to appropriate page
  useEffect(() => {
    if (user && token) {
      // Redirect based on userType
      if (user.userType === "freelancer") {
        navigate("/freelance/findtask");
      } else if (user.userType === "job-owner") {
        navigate("/jobowner/posttask");
      }
    }
  }, [user, token, navigate]); // Only re-run if user or token changes

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(loginUser({ email, password }));

    if (response.success) {
      // Handle successful login and redirect
      if (response.user.userType === "freelancer") {
        navigate("/freelance/findtask"); // Navigate to freelancer task page
      } else if (response.user.userType === "job-owner") {
        navigate("/jobowner/posttask"); // Navigate to job owner task page
      }
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 h-screen">
        <img src={img} alt="Login" className="w-full h-full object-cover" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-primary">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <Logo />
          </div>

          <p className="text-gray-500 text-center mt-2">Login to your account</p>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mt-6">
              <label className="text-gray-700 flex items-center gap-2">
                <Mail size={20} className="text-primary" /> Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mt-4">
              <label className="text-gray-700 flex items-center gap-2">
                <Lock size={20} className="text-primary" /> Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-primary-2 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2">
              <a href="#" className="text-primary text-sm hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-3 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Alternative Login */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="px-3 text-gray-500 text-sm">Or login with</p>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="flex gap-4">
            <button className="w-1/2 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-100 transition">
              <BsGoogle size={20} /> Google
            </button>
            <button className="w-1/2 flex items-center justify-center gap-2 py-3 border rounded-lg hover:bg-gray-100 transition">
              <FaFacebook size={20} className="text-blue-600" /> Facebook
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
