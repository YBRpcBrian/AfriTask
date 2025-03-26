import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { Settings, Menu, X, UserCircle } from "lucide-react"; // Modern icons

const ClientNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Menu Links (Desktop) */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold text-lg">
        <li>
          <Link to="jobowner/posttask" className="hover:text-primary transition duration-300">Post Task</Link>
        </li>
        <li>
          <Link to="jobowner/makepayments" className="hover:text-primary transition duration-300">Make Payments</Link>
        </li>
        <li>
          <Link to="jobowner/wallet" className="hover:text-primary transition duration-300">Wallet</Link>
        </li>
      </ul>

      {/* Profile & Settings (Desktop) */}
      <div className="hidden md:flex items-center space-x-6 text-gray-700">
        <Settings className="text-2xl cursor-pointer hover:text-primary transition duration-300" />
        <UserCircle className="text-2xl cursor-pointer hover:text-primary transition duration-300" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 rounded-lg md:hidden transition-all duration-300">
          <Link to="/freelance/findtask" className="text-lg font-medium hover:text-primary transition duration-300">Find Task</Link>
          <Link to="/freelance/delivertask" className="text-lg font-medium hover:text-primary transition duration-300">Deliver Task</Link>
          <Link to="/freelance/wallet" className="text-lg font-medium hover:text-primary transition duration-300">Wallet</Link>

          {/* User Info */}
          <div className="flex items-center space-x-3 bg-gray-100 px-4 py-3 rounded-md shadow-md w-4/5">
            <UserCircle className="text-4xl text-gray-700" />
            <div>
              <h1 className="text-gray-800 font-semibold">Yabiun Brian</h1>
              <span className="text-gray-500 text-sm">Role: Freelancer</span>
            </div>
          </div>

          {/* Settings Icon */}
          <Settings className="text-3xl text-gray-700 cursor-pointer hover:text-primary transition duration-300" />
        </div>
      )}
    </nav>
  );
};

export default ClientNavbar;
