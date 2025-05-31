import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Send, Wallet, ClipboardList } from "lucide-react";
import { useSelector } from "react-redux";
import Logo from "../../components/Logo"; // Your custom logo component
import profileFallback from "../../assets/profile.jpg"; // Fallback profile image

const ClientNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const userName = user?.fullName || "Guest";
  const userType = user?.userType || "Freelancer";
  const userProfilePic = user?.profileImage
    ? `https://afritask-backend.onrender.com${user.profileImage}`
    : profileFallback;

  const menuLinks = [
    {
      name: "Post Task",
      path: "/jobowner/posttask",
      icon: <ClipboardList size={22} className="text-gray-700" />,
    },
    {
      name: "Make Payments",
      path: "/jobowner/makepayments",
      icon: <Send size={22} className="text-gray-700" />,
    },
    {
      name: "Wallet",
      path: "/jobowner/wallet",
      icon: <Wallet size={22} className="text-gray-700" />,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 sm:px-10 py-4 flex justify-between items-center">
      {/* Logo */}
      <Logo />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-base">
        {menuLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold"
                  : "hover:text-primary transition"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Profile (Desktop) */}
      <div className="hidden md:flex items-center space-x-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">{userName}</p>
          <span className="text-xs text-primary">{userType}</span>
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
          <img
            src={userProfilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col pt-24 px-6 space-y-6 md:hidden`}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-6 text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Logo */}
        <Logo />

        {/* Links */}
        {menuLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center w-full py-3 px-4 rounded-lg space-x-2 font-medium ${
                isActive
                  ? "bg-gray-100 text-primary font-bold"
                  : "hover:bg-gray-100 text-gray-700"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}

        {/* User Info */}
        <div className="flex items-center space-x-3 bg-gray-100 px-4 py-3 rounded-md w-full">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
            <img
              src={userProfilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-800 font-semibold">{userName}</p>
            <span className="text-gray-500 text-sm">{userType}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ClientNavbar;
