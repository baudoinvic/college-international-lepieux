

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";



function Home() {
  const { t } = useTranslation();


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
            <div className="col-lg-5 mt-4 mt-lg-0 text-center ml-16">
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

      <div className="container mx-auto p-4 py-12 mb-16">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h6 className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full mb-3">
            College Internationale lepieux Events
          </h6>
          <h1 className="text-4xl font-bold mb-4">{t("event.title")}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for these upcoming events and become part of our vibrant
            school community. More exciting events are being planned and will be
            announced soon!
          </p>
        </div>

        {/* Event Cards with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Science Fair Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="h-3 bg-blue-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-14a2 2 0 10-4 0v1H5a1 1 0 000 2h1v3H5a1 1 0 000 2h1v1a2 2 0 104 0v-1h1a1 1 0 100-2h-1V6h1a1 1 0 100-2h-1V3a2 2 0 00-2-2h-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold">
                  {t("events.scienceFair.title")}
                </h2>
              </div>
              <div className="mb-4 flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>{t("events.scienceFair.date")}</span>
              </div>
              <div className="mb-4 flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>{t("events.scienceFair.location")}</span>
              </div>
              <p className="text-gray-800 mb-4">
                {t("events.scienceFair.description")}
              </p>
            </div>
          </div>

          {/* Sports Day Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="h-3 " style={{ backgroundColor: "#0a1844" }}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold">
                  {t("events.sportsDay.title")}
                </h2>
              </div>
              <div className="mb-4 flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>{t("events.sportsDay.date")}</span>
              </div>
              <div className="mb-4 flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>{t("events.sportsDay.location")}</span>
              </div>
              <p className="text-gray-800 mb-4">
                {t("events.sportsDay.description")}
              </p>
            </div>
          </div>

          {/* Math Competition Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="h-3 bg-gray-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold">
                  {t("events.mathCompetition.title")}
                </h2>
              </div>
              <div className="mb-4 flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>{t("events.mathCompetition.date")}</span>
              </div>
              <div className="mb-4 flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>{t("events.mathCompetition.location")}</span>
              </div>
              <p className="text-gray-800 mb-4">
                {t("events.mathCompetition.description")}
              </p>
            </div>
          </div>
        </div>

        {/* "More Coming Soon" Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-2">More Events Coming Soon</h3>
          <p className="text-gray-600 max-w-lg mx-auto mb-6">
            We're planning additional events for the upcoming months. Subscribe
            to our newsletter to be the first to know!
          </p>
          <button
            className="inline-flex items-center justify-center px-6 py-3  text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            style={{ backgroundColor: "#0a1844" }}
          >
            Stay with us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
