

import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h2 className="text-center fw-semibold">{t("about.title")}</h2>
        </div>
      </header>
      <div className="mt-16 flex justify-center">
        <p className="text-center w-2/3 md:w-1/2 mb-5 mt-8 mx-auto italic">
          {t("about.description")}
        </p>
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center text-center text-lg-start">
            {/* Left Section */}
            <div className="col-lg-5">
              <h2 className="text-capitalize fw-bold">{t("start_courses")}</h2>
              <p className="text-muted">{t("start_courses_description")}</p>
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-danger btn-lg px-4 shadow"
                  style={{ backgroundColor: "#0a1844" }}
                >
                  {t("about.contactButton")}
                </button>
              </Link>
            </div>

            {/* Right Section (Image) */}
            <div className="col-lg-5 mt-4 mt-lg-0 text-center ml-16">
              <img
                src="https://pbs.twimg.com/media/F-ZOGvhWgAEm9J2?format=jpg&name=4096x4096"
                className="img-fluid rounded shadow-lg"
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "480px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
