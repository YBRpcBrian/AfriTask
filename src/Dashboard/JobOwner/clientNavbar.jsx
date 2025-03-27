import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import { Settings, Menu, X, UserCircle } from "lucide-react"; // Modern icons
import { useSelector } from "react-redux"; // Assuming you're using Redux for state management

const ClientNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Get the user data from Redux (or any state management)
  const user = useSelector((state) => state.auth.user); // Assuming user data is in state.user

  // Fallbacks in case user data is not available
  const userName = user ? user.fullName : "Guest";
  const userType = user ? user.userType : "Freelancer"; // Default type as "Freelancer"
  const userProfilePic = user && user.profileImage ? `http://localhost:5000/${user.profileImage}` : "/assets/profile.jpg"; // Fallback to default image

  return (
    <nav className="bg-white shadow-md px-6 sm:px-8 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Menu Links (Desktop) */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold text-lg">
        <li>
          <NavLink
            to="/jobowner/posttask"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold"
                : "hover:text-primary transition duration-300"
            }
          >
            Post Task
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobowner/makepayments"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold"
                : "hover:text-primary transition duration-300"
            }
          >
            Make Payments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobowner/wallet"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold"
                : "hover:text-primary transition duration-300"
            }
          >
            Wallet
          </NavLink>
        </li>
      </ul>

      {/* Profile & Settings (Desktop) */}
      <div className="hidden md:flex items-center space-x-3">
        <div className="text-right">
          <h1 className="text-sm font-semibold text-gray-800">{userName}</h1>
          <span className="text-xs text-primary">{userType}</span>
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
          <img
            src={userProfilePic}
            className="h-full w-full object-cover"
            alt="Profile"
          />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white shadow-xl transform ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-all duration-300 md:hidden z-50 flex flex-col items-center pt-20 space-y-6`}
      >
        <button
          className="absolute top-4 right-6 text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        <Logo />

        {/* Mobile Menu Links with Icons */}
        <NavLink
          to="/jobowner/posttask"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-lg font-medium hover:text-primary space-x-2 bg-gray-100 py-4 px-30 rounded-md text-primary font-bold"
              : "flex items-center text-lg font-medium hover:text-primary space-x-2 bg-gray-100 py-4 px-30 rounded-md"
          }
          onClick={() => setIsOpen(false)}
        >
          <UserCircle size={24} className="text-gray-700" />
          <span>Post Task</span>
        </NavLink>

        <NavLink
          to="/jobowner/makepayments"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-lg font-medium hover:text-primary space-x-2 bg-gray-100 py-4 px-26 rounded-md text-primary font-bold"
              : "flex items-center text-lg font-medium hover:text-primary space-x-2 bg-gray-100 py-4 px-26 rounded-md"
          }
          onClick={() => setIsOpen(false)}
        >
          <UserCircle size={24} className="text-gray-700" />
          <span>Make Payments</span>
        </NavLink>

        <NavLink
          to="/jobowner/wallet"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-lg font-medium hover:text-primary space-x-2 bg-gray-100 py-4 px-34 rounded-md text-primary font-bold"
              : "flex items-center text-lg font-medium hover:text-primary space-x-2 bg-gray-100 py-4 px-34 rounded-md"
          }
          onClick={() => setIsOpen(false)}
        >
          <UserCircle size={24} className="text-gray-700" />
          <span>Wallet</span>
        </NavLink>

        {/* User Info */}
        <div className="flex items-center space-x-3 bg-gray-100 px-4 py-3 rounded-md w-4/5">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
            <img
              src={userProfilePic}
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
          <div>
            <h1 className="text-gray-800 font-semibold">{userName}</h1>
            <span className="text-gray-500 text-sm">Role: {userType}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ClientNavbar;
