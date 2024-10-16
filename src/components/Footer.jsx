import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        {/* Left Section - Logo and Company Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/beruit-WHITEBACKGROUND.svg"
            alt="beirut Logo"
            className="hidden md:block md:w-40 object-cover"
          />
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              Beirut Road Trading Company - Limited Liability
            </h3>
            <p className="text-sm text-gray-400">
              © 2024 Beirut Road Trading Company - Limited Liability. All Rights
              Reserved.
            </p>
          </div>
        </div>

        {/* Right Section - Contact Information */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center gap-3">
            <FaPhone />
            <a href="tel:+9647510851305" className="hover:text-gray-200">
              +964 7510851305
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MdEmail />
            <a href="mailto:info@beirut-road.iq" className="hover:text-gray-200">
              info@beirut-road.iq
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
