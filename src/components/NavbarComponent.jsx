
import React from 'react'
import { Link } from "react-router-dom";
import logo2 from "../utils/images/logo2.jpg";
import { useTranslation } from "react-i18next";
import { useState } from 'react';

const NavbarComponent = () => {

  const [activeDropdown, setActiveDropdown] = useState(null);
  const { t, i18n } = useTranslation();

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
       <header className="w-full bg-[#001A38]  text-white font-serif">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center space-x-3 no-underline">
          <img src={logo2} alt="Logo" className="w-24 h-24 rounded-lg" />
          <span className="text-white leading-tight text-lg font-semibold uppercase">
            LEPIEUX<br /> INTERNATIONAL<br /> COLLEGE
          </span>
        </Link>

        <nav className="flex space-x-8 text-xm">
          <Link to="/" onClick={() => setActiveDropdown(null)} className="text-white no-underline hover:text-[#c9a85c]">
            {t("navigation.home")}
          </Link>
          <Link to="/courses" onClick={() => setActiveDropdown(null)} className="text-white no-underline hover:text-[#c9a85c]">
            {t("navigation.courses")}
          </Link>
          <Link to="/shortcourses" onClick={() => setActiveDropdown(null)} className="text-white no-underline hover:text-[#c9a85c]">
            {t("navigation.short_courses")}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown(0)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-white no-underline hover:text-[#c9a85c]">
              {t("navigation.about_us")}
            </button>
            {activeDropdown === 0 && (
              <div className="absolute mt-2 bg-white text-[#002855] rounded shadow-lg">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 no-underline">
                  {t("navigation.about_us")}
                </Link>
                <Link to="/description" className="block px-4 py-2 hover:bg-gray-100 no-underline">
                  {t("programme scholaire")}
                </Link>
                <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100 no-underline">
                  {t("galerie")}
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={() => setActiveDropdown(null)} className="text-white no-underline hover:text-[#c9a85c]">
            {t("navigation.contact")}
          </Link>
        </nav>

        <div>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="text-black px-2 py-1 rounded"
          >
            <option value="fr">French</option>
            <option value="en">English</option>
            <option value="sw">Swahili</option>
          </select>
        </div>
      </div>
    </header>
    </div>
  )
}

export default NavbarComponent
