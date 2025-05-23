

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo2 from "../utils/images/logo2.jpg";
import eng from "../utils/images/eng.jpeg";
import fr from "../utils/images/fr.jpeg";
import { useTranslation } from "react-i18next";

function NavbarComponent() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const langDropdownRef = useRef(null);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setIsLangDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleDropdown(index) {
    setActiveDropdown(activeDropdown === index ? null : index);
  }

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false);
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleMobileMenuItemClick() {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  const currentLanguage = i18n.language || "en";

  return (
    <div>
      <header className='w-full bg-[#001A38] text-white font-serif'>
        <div className='mx-auto flex items-center justify-between px-6 py-4'>
          <Link to='/' className='flex items-center no-underline'>
            <img src={logo2} alt='Logo' className='w-24 h-24 rounded-lg' />
            <span
              className='text-white leading-tight text-lg font-semibold uppercase'
              style={{ fontSize: "20px" }}
            >
              LEPIEUX
              <br /> INTERNATIONAL
              <br /> COLLEGE
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className='md:hidden text-white focus:outline-none'
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8 text-xm ml-32'>
            <Link
              to='/'
              className='text-white no-underline hover:text-[#c9a85c]'
            >
              {t("navigation.home")}
            </Link>

            <Link
              to='/courses'
              className='text-white no-underline hover:text-[#c9a85c]'
            >
              {t("navigation.courses")}
            </Link>

            <Link
              to='/shortcourses'
              className='text-white no-underline hover:text-[#c9a85c]'
            >
              {t("navigation.short_courses")}
            </Link>

            <div
              className='relative'
              ref={activeDropdown === 0 ? dropdownRef : null}
            >
              <button
                onClick={() => toggleDropdown(0)}
                className='text-white no-underline hover:text-[#c9a85c] focus:outline-none flex items-center'
              >
                {t("navigation.about_us")}
              </button>
              {activeDropdown === 0 && (
                <div className='absolute mt-2 bg-white text-[#002855] rounded shadow-lg z-10 w-40'>
                  <Link
                    to='/about'
                    className='block px-4 py-2 hover:bg-gray-100 no-underline'
                    onClick={() => setActiveDropdown(null)}
                  >
                    {t("navigation.about_us")}
                  </Link>
                  <Link
                    to='/description'
                    className='block px-4 py-2 hover:bg-gray-100 no-underline'
                    onClick={() => setActiveDropdown(null)}
                  >
                    {t("programme scholaire")}
                  </Link>
                  <Link
                    to='/gallery'
                    className='block px-4 py-2 hover:bg-gray-100 no-underline'
                    onClick={() => setActiveDropdown(null)}
                  >
                    {t("galerie")}
                  </Link>
                </div>
              )}
            </div>

            <Link
              to='/contact'
              className='text-white no-underline hover:text-[#c9a85c]'
            >
              {t("navigation.contact")}
            </Link>

            {/* Language Selector */}
            <div className='relative' ref={langDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className='flex items-center bg-white rounded px-2 py-1 focus:outline-none'
              >
                <img
                  src={currentLanguage === "en" ? eng : fr}
                  alt={currentLanguage === "en" ? "English" : "French"}
                  className='w-6 h-4 mr-1'
                />
                <span className='text-black'>
                  {currentLanguage.toUpperCase()}
                </span>
                <svg
                  className='w-4 h-4 ml-1 text-black'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>

              {isLangDropdownOpen && (
                <div className='absolute mt-1 right-0 bg-white rounded shadow-lg z-10'>
                  <button
                    onClick={() => changeLanguage("en")}
                    className='flex items-center w-full px-3 py-2 hover:bg-gray-100 text-left'
                  >
                    <img src={eng} alt='English' className='w-6 h-4 mr-2' />
                    <span className='text-black'>EN</span>
                  </button>
                  <button
                    onClick={() => changeLanguage("fr")}
                    className='flex items-center w-full px-3 py-2 hover:bg-gray-100 text-left'
                  >
                    <img src={fr} alt='French' className='w-6 h-4 mr-2' />
                    <span className='text-black'>FR</span>
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden bg-[#001A38] border-t border-gray-700 py-2'>
            <nav className='flex flex-col px-6'>
              <Link
                to='/'
                className='text-white no-underline hover:text-[#c9a85c] py-3 border-b border-gray-700'
                onClick={handleMobileMenuItemClick}
              >
                {t("navigation.home")}
              </Link>

              <Link
                to='/courses'
                className='text-white no-underline hover:text-[#c9a85c] py-3 border-b border-gray-700'
                onClick={handleMobileMenuItemClick}
              >
                {t("navigation.courses")}
              </Link>

              <Link
                to='/shortcourses'
                className='text-white no-underline hover:text-[#c9a85c] py-3 border-b border-gray-700'
                onClick={handleMobileMenuItemClick}
              >
                {t("navigation.short_courses")}
              </Link>

              <div className='py-3 border-b border-gray-700'>
                <button
                  onClick={() => toggleDropdown(0)}
                  className='text-white no-underline hover:text-[#c9a85c] focus:outline-none flex items-center justify-between w-full'
                >
                  <span>{t("navigation.about_us")}</span>
                  <svg
                    className={`w-4 h-4 transform ${
                      activeDropdown === 0 ? "rotate-180" : ""
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </button>
                {activeDropdown === 0 && (
                  <div className='mt-2 ml-4 border-l-2 border-gray-600 pl-4'>
                    <Link
                      to='/about'
                      className='block py-2 text-white no-underline hover:text-[#c9a85c]'
                      onClick={handleMobileMenuItemClick}
                    >
                      {t("navigation.about_us")}
                    </Link>
                    <Link
                      to='/description'
                      className='block py-2 text-white no-underline hover:text-[#c9a85c]'
                      onClick={handleMobileMenuItemClick}
                    >
                      {t("programme scholaire")}
                    </Link>
                    <Link
                      to='/gallery'
                      className='block py-2 text-white no-underline hover:text-[#c9a85c]'
                      onClick={handleMobileMenuItemClick}
                    >
                      {t("galerie")}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to='/contact'
                className='text-white no-underline hover:text-[#c9a85c] py-3 border-b border-gray-700'
                onClick={handleMobileMenuItemClick}
              >
                {t("navigation.contact")}
              </Link>

              {/* Mobile Language Selector */}
              <div className='py-3'>
                <div className='flex items-center justify-between'>
                  <span className='text-white'>{t("Language")}</span>
                  <div className='flex space-x-2'>
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`flex items-center px-2 py-1 rounded ${
                        currentLanguage === "en"
                          ? "bg-white text-black"
                          : "bg-transparent text-white border border-white"
                      }`}
                    >
                      <img src={eng} alt='English' className='w-6 h-4 mr-1' />
                      <span>EN</span>
                    </button>
                    <button
                      onClick={() => changeLanguage("fr")}
                      className={`flex items-center px-2 py-1 rounded ${
                        currentLanguage === "fr"
                          ? "bg-white text-black"
                          : "bg-transparent text-white border border-white"
                      }`}
                    >
                      <img src={fr} alt='French' className='w-6 h-4 mr-1' />
                      <span>FR</span>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default NavbarComponent;