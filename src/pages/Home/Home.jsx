

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";



function Home() {
  const { t } = useTranslation();
  const blogs = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1519355186/photo/i-need-this-data.jpg?s=612x612&w=0&k=20&c=ivfi9uNZlwCQt842_4JyBK-9Y1egC1xQp3-qZ-gX1jU=",
      title: t("courses.0.title"),
      description: t("courses.0.description"),
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1569449982/photo/miniature-of-cement-blocks-used-for-practical-engineering-classes.jpg?s=612x612&w=0&k=20&c=iaHdGBK7NbYGDq02QL8zBovj2535I4ybnHOPhCFGV6Q=",
      title: t("courses.1.title"),
      description: t("courses.1.description"),
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1484047390/photo/female-mechanic-fixing-car.jpg?s=612x612&w=0&k=20&c=cxyfex5_QlQqRTxLJRhhfzfwuuQqn6DBzioH6rWvzDA=",
      title: t("courses.2.title"),
      description: t("courses.2.description"),
    },
  ];

  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>{t("welcome")}</h2>
          <h1 className="text-center fw-semibold">{t("college_name")}</h1>
          <p className="w-2/4">{t("education_excellence")}</p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                style={{ backgroundColor: "#0a1844" }}
              >
                {t("our_courses")}
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                {t("contact_us")}
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center text-center text-lg-start">
            {/* Left Section */}
            <div className="col-lg-5">
              <h2 className="text-capitalize fw-bold">{t("start_courses")}</h2>
              <p className="text-muted">{t("start_courses_description")}</p>
              <Link to="/about">
                <button
                  type="button"
                  className="btn btn-danger btn-lg px-4 shadow"
                  style={{ backgroundColor: "#0a1844" }}
                >
                  {t("learn.title")}
                </button>
              </Link>
            </div>

            {/* Right Section (Image) */}
            <div className="col-lg-5 mt-4 mt-lg-0 text-center">
              <img
                src="https://static.wixstatic.com/media/113bea_1d79835618f44b18a93c5677a36fe566~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_888,h_592,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/113bea_1d79835618f44b18a93c5677a36fe566~mv2_d_6000_4000_s_4_2.jpg"
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

      <div className="py-5">
        <FaqAccordion />
      </div>

      <div className="container mx-auto p-4 mb-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("event.title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">
              {t("events.scienceFair.title")}
            </h2>
            <p className="text-gray-600 mb-2">{t("events.scienceFair.date")}</p>
            <p className="text-gray-600 mb-2">
              {t("events.scienceFair.location")}
            </p>
            <p className="text-gray-800">
              {t("events.scienceFair.description")}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">
              {t("events.sportsDay.title")}
            </h2>
            <p className="text-gray-600 mb-2">{t("events.sportsDay.date")}</p>
            <p className="text-gray-600 mb-2">
              {t("events.sportsDay.location")}
            </p>
            <p className="text-gray-800">{t("events.sportsDay.description")}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-2">
              {t("events.mathCompetition.title")}
            </h2>
            <p className="text-gray-600 mb-2">
              {t("events.mathCompetition.date")}
            </p>
            <p className="text-gray-600 mb-2">
              {t("events.mathCompetition.location")}
            </p>
            <p className="text-gray-800">
              {t("events.mathCompetition.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
