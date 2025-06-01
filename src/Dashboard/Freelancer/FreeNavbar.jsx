import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import profileFallback from "../../assets/profile.jpg";
import { Menu, X, Search, Home, CreditCard } from "lucide-react";

const menuLinks = [
  
  {
    name: "Find Task",
    path: "/freelance/findtask",
    icon: <Search size={22} className="text-gray-700" />,
  },
  {
    name: "Deliver Task",
    path: "/freelance/takentask",
    icon: <Home size={22} className="text-gray-700" />,
  },
  {
    name: "Wallet",
    path: "/freelance/wallet",
    icon: <CreditCard size={22} className="text-gray-700" />,
  },
  {
    name: "Learn",
    path: "/freelance/learn",
    icon: <Search size={22} className="text-gray-700" />,
  },
];

const FreeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const userName = user?.fullName || "Guest";
  const userType = user?.userType || "Freelancer";
  const userProfilePic = user?.profileImage
    ? `https://afritask-backend.onrender.com${user.profileImage}`
    : profileFallback;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-screen-xl z-50 rounded-2xl px-6 sm:px-10 py-2 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-white/10 backdrop-blur-md shadow-md"
            : "bg-white shadow-md"
        }`}
      >
        {/* Logo */}
        <img src={logo} className="w-36 h-auto" alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 text-xs">
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

        {/* User Profile - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">{userName}</p>
            <span className="text-xs text-primary">{userType}</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
            <img
              src={userProfilePic}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Hamburger Icon - Mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-700"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-6 px-6 flex justify-between items-center">
          <img src={logo} alt="Logo" className="w-32" />
          <button onClick={() => setIsOpen(false)} className="text-gray-700">
            <X size={32} />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-4 px-6">
          {menuLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-4 w-full rounded-lg text-lg font-medium ${
                  isActive
                    ? "bg-gray-100 text-primary font-bold"
                    : "hover:bg-gray-50 text-gray-700"
                }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}

          {/* User Info */}
          <div className="flex items-center space-x-4 bg-gray-100 px-4 py-3 rounded-md w-full mt-6">
            <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
              <img
                src={userProfilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-800">{userName}</p>
              <span className="text-sm text-primary">{userType}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeNavbar;
