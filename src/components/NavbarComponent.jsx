
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo2 from "../utils/images/logo2.jpg";
import { useTranslation } from "react-i18next";

function NavbarComponent() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
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
  }

  return (
    <div>
      <header className='w-full bg-[#001A38] text-white font-serif'>
        <div className='mx-auto flex items-center justify-between px-6 py-4'>
          <Link to='/' className='flex items-center no-underline'>
            <img src={logo2} alt='Logo' className='w-24 h-24 rounded-lg' />
            <span
              className='text-white leading-tight text-lg font-semibold uppercase'
              style={{ fontSize: "25px" }}
            >
              LEPIEUX
              <br /> INTERNATIONAL
              <br /> COLLEGE
            </span>
          </Link>

          <nav className='flex space-x-8 text-xm ml-32'>
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

            <div className='relative'>
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                className='text-black px-2 py-1 rounded'
              >
                <option value='fr'>French</option>
                <option value='en'>English</option>
              </select>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavbarComponent;