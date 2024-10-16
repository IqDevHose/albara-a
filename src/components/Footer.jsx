import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        {/* Left Section - Logo and Company Name */}
        <div className="flex items-center">
          <img
            src="/beruit-WHITEBACKGROUND.svg"
            alt="beirut Logo"
            className="hidden md:flex md:w-40 object-cover"
          />
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mr-2">
              Beirut Road Trading Company - Limited Liability
            </h3>
            <p className="text-sm text-gray-400 mr-2">
              © 2024 Beirut Road Trading Company - Limited Liability. All Rights
              Reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-stert">
          <div className="flex items-center gap-3 mt-3 ">
            <FaPhone />
            <a href="tel:7510851305 964+">+964 7510851305</a>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <MdEmail />
            <a href="mailto:info@beirut-road.iq">
              <p>info@beirut-road.iq</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
