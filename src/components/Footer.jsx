import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Footer = () => {

     const { t, i18n } = useTranslation();
  return (
    <div>
      <footer
        className="text-white pt-12 pb-4"
        style={{ backgroundColor: "#0a1844" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-left mb-8">
            <div>
              <h3 className="text-lg font-bold ">
                College Internationale lepieux
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <h4 className="text-lg font-medium mb-4">
                {t("campus_locations.title")}
              </h4>
              <p>{t("footer.main_address")}</p>
              <div className="mb-4">
                <p className="font-medium">
                  {t("campus_locations.main_campus")}
                </p>
              </div>
              <div>
                <p className="font-medium">
                  {t("campus_locations.secondary_campus")}
                </p>
                <p>{t("campus_locations.secondary_address")}</p>
              </div>
            </div>

            <div>
              {/* <h4 className="text-lg font-medium mb-4">Head Office</h4> */}
              <h4 className="text-lg font-medium mb-4">{t("head.office")}</h4>
              <p className="font-medium">College Internationale I.T.I.L.</p>

              <p className="mt-3">{t("footer.email")}</p>
              <p>{t("footer.phone_number")}</p>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium mb-4">{t("nav.text")}</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="hover:text-red-400 text-white">
                      {t("navigation.home")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses"
                      className="hover:text-red-400 text-white"
                    >
                      {t("navigation.courses")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shortcourses"
                      className="hover:text-red-400 text-white"
                    >
                      {t("navigation.short_courses")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-red-400 text-white">
                      {t("navigation.about_us")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="hover:text-red-400 text-white"
                    >
                      {t("navigation.contact")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">
                  {t("information.title")}
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="" className="hover:text-red-400 text-white">
                      {t("information.privacy_policy")}
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-red-400 text-white">
                      {t("information.school_policies")}
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-red-400 text-white">
                      {t("information.sitemap")}
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-red-400 text-white">
                      {t("information.join_the_team")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Connect with us */}
          <div className="border-t border-gray-700 pt-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="font-medium mb-3 text-sm">
                  {t("connect.title")}
                </h4>

                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61561062195948"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-colors"
                  >
                    <CiFacebook className="text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/collegeinternationallepieux/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-colors"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-colors"
                  >
                    <FaXTwitter className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-colors"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                </div>
              </div>
              {/* 
              <div className="flex space-x-4">
                <Link
                  to="/about"
                  className="px-4 py-2 border border-gray-600 hover:border-red-400 hover:text-red-400 transition-colors rounded text-white"
                >
                  OUR MISSION AND VISION
                </Link>
                <Link
                  to=""
                  className="px-4 py-2 border border-gray-600 hover:border-red-400 hover:text-red-400 transition-colors rounded text-white"
                >
                  OUR CURRICULUM
                </Link>
                <Link
                  to="/description"
                  className="px-4 py-2 border border-gray-600 hover:border-red-400 hover:text-red-400 transition-colors rounded text-white"
                >
                  PROGRAMME SCHOLAIRE
                </Link>
              </div> */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/about"
                  className="px-4 py-2 border border-gray-600 hover:border-red-400 hover:text-red-400 transition-colors rounded text-white"
                >
                  OUR MISSION AND VISION
                </Link>
                <Link
                  to=""
                  className="px-4 py-2 border border-gray-600 hover:border-red-400 hover:text-red-400 transition-colors rounded text-white"
                >
                  OUR CURRICULUM
                </Link>
                <Link
                  to="/description"
                  className="px-4 py-2 border border-gray-600 hover:border-red-400 hover:text-red-400 transition-colors rounded text-white"
                >
                  PROGRAMME SCHOLAIRE
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>{new Date().getFullYear()} | All rights reserved</p>
            <p className="mt-2 text-xs">
              Registration codes: Primary - MITEX5000 | Secondary I - MITAP5007
              | Secondary II - MIPS2500P
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
