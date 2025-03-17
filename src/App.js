
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
// import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import logo from "../src/utils/images/logo.png";
import Shortcouses from "./pages/Short/Shortcouses";
import Description from "./pages/Description/Description";
import { useTranslation } from "react-i18next";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


import { useState } from "react";
import Gallery from "./pages/Gallery/Gallery";
import Construction from "./pages/Construction/Construction";
import Gestion from "./pages/Gestion/Gestion";
import Coup from "./pages/Coup/Coup";
import Mechaniq from "./pages/Mechanic/Mechaniq";
import Veterinary from "./pages/Veterinary/Veterinary";

function App() {
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
      <Navbar expand="lg" className="position-absolute w-100 ">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center ">
              <img src={logo} alt="Logo" className="w-12 rounded-full" />
              <span className="mx-2 text-sm lh-1 fw-semibold text-light">
                Collège
                <br />
                Internationale
                <br />
                lepieux
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100  ">
              <Nav.Link href="/" className="text-uppercase">
                {t("navigation.home")}
              </Nav.Link>
              <Nav.Link href="/courses" className="text-uppercase">
                {t("navigation.courses")}
              </Nav.Link>
              <Nav.Link href="/Shortcourses" className="text-uppercase">
                {t("navigation.short_courses")}
              </Nav.Link>
              <NavDropdown
                title={t("navigation.about_us")}
                id="about-us-dropdown "
                className="text-uppercase"
                show={activeDropdown === 0}
                onMouseEnter={() => setActiveDropdown(0)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavDropdown.Item as={Link} to="/about">
                  {t("navigation.about_us")}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/description">
                  {t("programme scholaire")}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gallery">
                  {t("galerie")}
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/contact" className="text-uppercase">
                {t("navigation.contact")}
              </Nav.Link>

              {/* <div className="flex items-center space-x-2 ml-8">
                <button
                  onClick={() => changeLanguage("fr")}
                  className="flex items-center space-x-1 bg-transparent border border-gray-300 px-2 py-1 rounded focus:outline-none"
                >
                  <img
                    src="https://www.countryflags.com/wp-content/uploads/france-flag-png-xl.png"
                    alt="French Flag"
                    className="w-4"
                  />
                  <span className="text-white">Fr</span>
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className="flex items-center space-x-1 bg-transparent border border-gray-300 px-2 py-1 rounded focus:outline-none"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIEEb2cSAlgP4ZLCUL8r6Jgw0cvjAhXwiCtc1eXYGTA&s"
                    alt="English Flag"
                    className="w-4"
                  />
                  <span className="text-white">Eng</span>
                </button>
                <button
                  onClick={() => changeLanguage("sw")}
                  className="flex text-white items-center space-x-1 bg-transparent border border-gray-300 px-2 py-1 rounded focus:outline-none"
                >
                  <span>Swahili</span>
                </button>
              </div> */}
              <div className="ml-8">
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="border border-white px-2 py-1 rounded text-gray-900 cursor-pointer"
                >
                  <option value="fr">French</option>
                  <option value="en">English</option>
                  <option value="sw">Swahili</option>
                </select>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Shortcourses" element={<Shortcouses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/description" element={<Description />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/coup" element={<Coup />} />
        <Route path="/mecanic" element={<Mechaniq />} />
        <Route path="/veterinary" element={<Veterinary />} />
      </Routes>

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
            {/* Campus Locations */}
            <div>
              <h4 className="text-lg font-medium mb-4">Campus Locations</h4>
              <div className="mb-4">
                <p className="font-medium">Main Campus</p>
                <p>{t("footer.main_address")}</p>
              </div>
              <div>
                <p className="font-medium">Secondary Campus</p>
                <p>123 Education Street, City</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-medium mb-4">Head Office</h4>
              <p className="font-medium">College Internationale I.T.I.L.</p>

              <p className="mt-3">{t("footer.email")}</p>
              <p>{t("footer.phone_number")}</p>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium mb-4">Navigation</h4>
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
                <h4 className="text-lg font-medium mb-4">Information</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="" className="hover:text-red-400 text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-red-400 text-white">
                      School Policies
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-red-400 text-white">
                      Sitemap
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-red-400 text-white">
                      Join the Team
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
                <h4 className="font-medium mb-3">CONNECT WITH US</h4>
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

export default App;