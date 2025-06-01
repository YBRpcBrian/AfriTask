import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hire A talent', path: '/jobowner/talent' },
    { name: 'Browse Jobs', path: '/freelance/findtask' },
    { name: 'Post a Job', path: '/jobowner/posttask' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 md:w-10/12 lg:w-9/12">
      <header
        className={`w-full transition-all duration-300 rounded-2xl backdrop-blur-md ${
          isScrolled
            ? 'bg-white/10 border border-white/20 shadow-md'
            : 'bg-white shadow-md'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="AfriTask Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center text-xs">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-primary transition duration-300 ${
                    isActive ? 'font-semibold text-primary' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/login"
              className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-3 transition duration-300 text-sm"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md text-xs rounded-b-2xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-gray-700 hover:text-primary transition duration-300 ${
                    isActive ? 'font-semibold text-primary' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block bg-primary text-white text-center px-4 py-2 rounded-xl hover:bg-primary-3 transition duration-300 text-sm"
            >
              Get Started
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
