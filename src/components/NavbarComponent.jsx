

import React from 'react'

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../utils/images/logo.png";
import { useTranslation } from "react-i18next";

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
      <Nav expand="lg" className="position-absolute w-100">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center">
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
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link as={Link} to="/" className="text-uppercase">
                {t("navigation.home")}
              </Nav.Link>
              <Nav.Link as={Link} to="/courses" className="text-uppercase">
                {t("navigation.courses")}
              </Nav.Link>
              <Nav.Link as={Link} to="/shortcourses" className="text-uppercase">
                {t("navigation.short_courses")}
              </Nav.Link>
              <NavDropdown
                title={t("navigation.about_us")}
                id="about-us-dropdown"
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

              <Nav.Link as={Link} to="/contact" className="text-uppercase">
                {t("navigation.contact")}
              </Nav.Link>

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
      </Nav>
    </div>
  );
};

export default NavbarComponent;


