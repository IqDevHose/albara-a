import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Footer = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        {/* Left Section - Logo and Company Name */}
        {/* Right Section - Contact Information */}
        <div>
          <div className="text-left rtl:text-right mb-2">
            <h3 className="text-lg md:text-xl font-bold text-white">
              {t("footer.companyName")}
            </h3>
            <p className="text-sm text-gray-400">{t("footer.rights")}</p>
          </div>

          <div className="flex flex-col ">
            <div className="flex items-center gap-3">
              <FaPhone />
              <a href="tel:+9647510851305" className="hover:text-gray-200">
                {t("footer.phone")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail />
              <a
                href="mailto:info@albaraahcompany.iq"
                className="hover:text-gray-200"
              >
                info@albaraahcompany.iq
              </a>
            </div>
          </div>
        </div>

        <img
          src="/logo.png"
          alt="albaraa Logo"
          className="hidden md:block md:w-40 object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
