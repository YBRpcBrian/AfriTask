import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logowhite.png"

const Footer = () => {
  return (
    <footer className="bg-primary-3 text-white pt-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Branding & Logo */}
        <div>
          <img
            src={logo}
            alt="AfriTask Logo"
            className="mb-4 h-auto w-44"
          />
          <p className="text-sm text-gray-200">
            Empowering African talents through trust, innovation, and
            technology. Hire and get hired with ease.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-primary">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-primary">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-primary">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: support@afritask.com</li>
            <li>Phone: +237 674 938 097</li>
            <li>Location: Buea, Cameroon</li>
          </ul>
          <div className="flex space-x-4 mt-4 text-primary text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-600 pt-6">
        © {new Date().getFullYear()} AfriTask. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
