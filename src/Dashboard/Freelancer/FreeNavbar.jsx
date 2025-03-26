import React, { useState } from "react";
import Logo from "../../components/Logo";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi"; // Icons for mobile menu

const FreeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Menu Links (Desktop) */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Find Task</li>
        <li className="hover:text-blue-600 cursor-pointer">Deliver Task</li>
        <li className="hover:text-blue-600 cursor-pointer">Wallet</li>
      </ul>

      {/* Profile & Settings (Desktop) */}
      <div className="hidden md:flex items-center space-x-4 text-gray-700">
        <CiSettings className="text-2xl cursor-pointer hover:text-blue-600" />
        <CgProfile className="text-2xl cursor-pointer hover:text-blue-600" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <li className="hover:text-primary cursor-pointer">Find Task</li>
          <li className="hover:text-primary cursor-pointer">Deliver Task</li>
          <li className="hover:text-primary cursor-pointer">Wallet</li>
          <div className="flex space-x-4 text-gray-700">
            <CiSettings className="text-2xl cursor-pointer hover:text-primary" />
            <CgProfile className="text-2xl cursor-pointer hover:text-primary" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default FreeNavbar;
