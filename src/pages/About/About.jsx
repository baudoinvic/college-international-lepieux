
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import campus from "../../utils/images/campus.png";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="mt-16 flex justify-center px-4">
        <p className="text-center w-full sm:w-4/5 md:w-2/3 lg:w-1/2 mb-5 mt-8 mx-auto italic">
          {t("about.description")}
        </p>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center text-center text-md-start">
            {/* Left Section */}
            <div className="col-12 col-md-6">
              <h2 className="text-capitalize fw-bold">{t("start_courses")}</h2>
              <p className="text-muted">{t("start_courses_description")}</p>
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-danger  px-4 shadow"
                  style={{ backgroundColor: "#c9a85c" }}
                >
                  {t("about.contactButton")}
                </button>
              </Link>
            </div>

            {/* Right Section (Image) */}
            <div className="col-12 col-md-6 mt-4 mt-md-0 text-center">
              <img
                src={campus}
                className="w-full h-full object-cover rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
