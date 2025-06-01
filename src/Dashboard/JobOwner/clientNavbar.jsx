import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Send, Wallet, ClipboardList } from "lucide-react";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import profileFallback from "../../assets/profile.jpg";

const ClientNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const userName = user?.fullName || "Guest";
  const userType = user?.userType || "Freelancer";
  const userProfilePic = user?.profileImage
    ? `https://afritask-backend.onrender.com${user.profileImage}`
    : profileFallback;

  const menuLinks = [
    {
      name: "Hunt Talents",
      path: "/jobowner/talent",
      icon: <ClipboardList size={18} className="text-gray-700" />,
    },
    {
      name: "Post Task",
      path: "/jobowner/posttask",
      icon: <ClipboardList size={18} className="text-gray-700" />,
    },
    {
      name: "Make Payments",
      path: "/jobowner/makepayments",
      icon: <Send size={18} className="text-gray-700" />,
    },
    {
      name: "Wallet",
      path: "/jobowner/wallet",
      icon: <Wallet size={18} className="text-gray-700" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl rounded-3xl py-2 px-6 sm:px-10 flex justify-between items-center transition-all duration-500 z-[9999]
        ${
          scrolled
            ? "bg-white/30 backdrop-blur-md shadow-none"
            : "bg-white shadow-md"
        }
      `}
      style={{ boxShadow: scrolled ? "none" : undefined }}
    >
      {/* Logo */}
      <img src={logo} className="h-auto w-32 sm:w-36" alt="Logo" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-xs">
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
          <p className="text-xs font-semibold text-gray-800">{userName}</p>
          <span className="text-[9px] text-primary">{userType}</span>
        </div>
        <div className="w-9 h-9 rounded-full border-2 border-primary overflow-hidden">
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
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-[9998] transition-transform duration-300 flex flex-col pt-28 px-6 space-y-6 md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-6 text-gray-700"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {/* Centered Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} className="h-auto w-32" alt="Logo" />
        </div>

        {/* Links */}
        {menuLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center w-full py-3 px-4 rounded-lg space-x-2 font-medium text-sm
                ${
                  isActive
                    ? "bg-gray-100 text-primary font-semibold"
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
        <div className="flex items-center space-x-3 bg-gray-100 px-4 py-3 rounded-md w-full mt-auto">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
            <img
              src={userProfilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-sm">{userName}</p>
            <span className="text-gray-500 text-xs">{userType}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ClientNavbar;
