

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

    const handleChange = (e) => {
      setEmail(e.target.value);
    };

     const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      const response = await fetch(
        "https://challenge-assement.onrender.com/api/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Subscription failed.");
      }

      toast.success("Thank you for Subscribing ");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container px-4">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8">
              {/* Welcome heading with responsive font size */}
              <h2 className="mb-2 fs-4 fs-md-3">{t("welcome")}</h2>

              {/* College name with responsive font size */}
              <h1 className="fw-semibold mb-3 mb-md-4 fs-1 fs-md-1">
                {t("college_name")}
              </h1>

              {/* Description with proper width constraints for all devices */}
              <p
                className="mx-auto mb-4 mb-md-5"
                style={{ maxWidth: "90%", width: "100%" }}
              >
                {t("education_excellence")}
              </p>

              {/* Button container with improved spacing */}
              <div className="d-flex flex-column flex-sm-row justify-content-center">
                <Link to="/courses" className="mb-3 mb-sm-0 mx-sm-2">
                  <button
                    type="button"
                    className="btn btn-danger btn-lg w-100"
                    style={{ backgroundColor: "#0a1844", minWidth: "160px" }}
                  >
                    {t("our_courses")}
                  </button>
                </Link>

                <Link to="/contact" className="mx-sm-2">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg w-100"
                    style={{ minWidth: "160px" }}
                  >
                    {t("contact_us")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center text-center text-md-start">
            {/* Left Section */}
            <div className="col-12 col-md-6 col-lg-5">
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
            <div className="col-12 col-md-6 col-lg-5 mt-4 mt-md-0 text-center">
              <img
                src="https://static.wixstatic.com/media/113bea_1d79835618f44b18a93c5677a36fe566~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_888,h_592,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/113bea_1d79835618f44b18a93c5677a36fe566~mv2_d_6000_4000_s_4_2.jpg"
                className="img-fluid rounded shadow-lg"
                alt="Course Image"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
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
            {t("day.description")}
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
          <h3 className="text-2xl font-bold mb-2">{t("soon.title")}</h3>
          <p className="text-gray-600 max-w-lg mx-auto mb-6">
            {t("soon.description")}
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 items-center">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("subscription.placeholder")}
              aria-label={t("subscription.aria_label")}
            />
            <button
              className="inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              style={{ backgroundColor: "#0a1844" }}
            >
              {t("subscription.button")}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default Home;
