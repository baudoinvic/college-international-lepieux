import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import logo from "../src/utils/images/logo.png";
import Shortcouses from "./pages/Short/Shortcouses";
import Description from "./pages/Description/Description";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function App() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Navbar expand="lg" className="position-absolute w-100">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img src={logo} alt="Logo" className="w-12" />
              <span className="mx-2 text-light lh-1 fw-semibold">
                Collège
                <br />
                International
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
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className="text-uppercase">
                {t("navigation.home")}
              </Nav.Link>
              <Nav.Link href="/courses" className="text-uppercase">
                {t("navigation.courses")}
              </Nav.Link>
              <Nav.Link href="/Shortcourses" className="text-uppercase">
                {t("navigation.short_courses")}
              </Nav.Link>
              <Nav.Link href="/about" className="text-uppercase">
                {t("navigation.about_us")}
              </Nav.Link>
              <Nav.Link href="/blog" className="text-uppercase">
                {t("navigation.blog")}
              </Nav.Link>
              <Nav.Link href="/contact" className="text-uppercase">
                {t("navigation.contact")}
              </Nav.Link>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => i18n.changeLanguage("fr")}
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
                  onClick={() => i18n.changeLanguage("en")}
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
                  onClick={() => i18n.changeLanguage("sw")}
                  className="flex text-white items-center space-x-1 bg-transparent border border-gray-300 px-2 py-1 rounded focus:outline-none"
                >
                  <span>Swahili</span>
                </button>
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* Route for the description page */}
        <Route path="/description" element={<Description />} />
      </Routes>

      <footer>
        <div className="container my-5">
          <div className="row d-flex justify-content-between align-items-center ">
            <div className="col-md-4">
              <Link className="" to="/contact" style={{ marginTop: "-4rem" }}>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-lg mb-5 mb-md-4"
                >
                  {t("navigation.contact")}
                </button>
              </Link>

              <ul className="footer-social-icons flex p-4">
                <CiFacebook className="cursor-pointer text-[24px]" />
                <FaLinkedin className="cursor-pointer ml-5 text-[24px]" />
                <FaXTwitter className="cursor-pointer ml-5 text-[24px]" />
                <FaInstagram className="cursor-pointer ml-5 text-[24px]" />
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="d-row d-md-flex justify-content-between align-items-center">
                <div className="col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0">
                  <ul
                    className="footer-navigation list-unstyled mb-0 "
                    style={{ marginRight: "10rem" }}
                  >
                    <Link to="/" className="text-decoration-none text-danger">
                      <li className="text-uppercase fw-semibold">
                        {t("navigation.home")}
                      </li>
                    </Link>
                    <Link
                      to="/courses"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">
                        {t("navigation.courses")}
                      </li>
                    </Link>
                    <Link
                      to="/shortcourses"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">
                        {t("navigation.short_courses")}
                      </li>
                    </Link>
                    <Link
                      to="/about"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">
                        {t("navigation.about_us")}
                      </li>
                    </Link>
                    <Link
                      to="/blog"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">
                        {t("navigation.blog")}
                      </li>
                    </Link>
                    <Link
                      to="/contact"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">
                        {t("navigation.contact")}
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <p>{t("footer.main_address")}</p>
                    </li>
                    <li>
                      <p>{t("footer.phone_number")}</p>
                    </li>
                    <li>
                      <p>{t("footer.email")}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-tertiary">
          <div className="container">
            <p className="p-3 m-0 text-center">
              {t("footer.copyright")} @ {t("footer.made_by")}2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
