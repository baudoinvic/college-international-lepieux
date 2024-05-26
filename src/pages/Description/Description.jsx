
import React, { useState } from "react";
import "./Description.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Description = () => {
   const { t } = useTranslation();

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="description-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1>{t("school.title")}</h1>
          <p className="text-center w-75 mb-5">{t("school.description")}</p>
        </div>
      </header>
      <div className="container py-10 mt-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">{t("school1.title")}</h2>
          <p className="text-lg text-gray-800 mb-6">
            {t("school1.description")}
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-10">
            {t("school2.title")}
          </h2>

          <p>{t("school2.description")}</p>
          <Link to="/contact">
            <button
              type="button"
              className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0 "
            >
              {t("conta.title")}
            </button>
          </Link>
        </div>

        <div className="responsive">
          <div className="container my-5">
            <p className="w-3/4">
              {t("school3.description")}
              <br />
              <Link to="/Shortcourses">
                <a className="text-decoration-none" href="">
                  {t("school3.title")}
                </a>
              </Link>
            </p>

            <p className="w-3/4">{t("school4.description")}</p>

            <section className="subject-section">
              <h2 className="text-2xl font-bold mb-4">
                {t("vet_agronomy.title")}
              </h2>

              <p className="w-3/4">{t("vet_agronomy.description")} </p>
            </section>

            <section className="subject-section">
              <h2 className="text-2xl font-bold mb-4">
                {t("construction.title")}
              </h2>

              <p className="w-3/4">{t("construction.description")} </p>
            </section>

            <section className="subject-section">
              <h2 className="text-2xl font-bold mb-4">
                {t("mechanical.title")}
              </h2>

              <p className="w-3/4">{t("mechanical.description")} </p>
            </section>

            <section className="subject-section">
              <h2 className="text-2xl font-bold mb-4">
                {t("electricity.title")}
              </h2>

              <p className="w-3/4">{t("electricity.description")} </p>
            </section>

            <section className="subject-section">
              <h2 className="text-2xl font-bold mb-4">
                {t("commercial_management.title")}
              </h2>

              <p className="w-3/4">{t("commercial_management.description")} </p>
            </section>

            <section className="subject-section">
              <h2 className="text-2xl font-bold mb-4">{t("cut_seam.title")}</h2>

              <p className="w-3/4">{t("cut_seam.description")}</p>
            </section>
          </div>
        </div>
        {/* <h2 className="text-3xl font-bold mb-6 mt-10">Our Libraries</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 rounded ${
              filter === "all"
                ? "bg-red-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("lab1")}
            className={`px-4 py-2 rounded ${
              filter === "lab1"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            Library 1
          </button>
          <button
            onClick={() => handleFilterChange("lab2")}
            className={`px-4 py-2 rounded ${
              filter === "lab2"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            Library 2
          </button>
          <button
            onClick={() => handleFilterChange("lab3")}
            className={`px-4 py-2 rounded ${
              filter === "lab3"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            Library 3
          </button>
          <button
            onClick={() => handleFilterChange("computer4")}
            className={`px-4 py-2 rounded ${
              filter === "computer4"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            Computer Lab
          </button>
        </div> */}

        <>
          <h2 className="text-3xl font-bold mb-6 mt-10">
            {t("library_filters.title")}
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => handleFilterChange("all")}
              className={`px-4 py-2 rounded ${
                filter === "all"
                  ? "bg-red-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {t("library_filters.all")}
            </button>
            <button
              onClick={() => handleFilterChange("lab1")}
              className={`px-4 py-2 rounded ${
                filter === "lab1"
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {t("library_filters.lab1")}
            </button>
            <button
              onClick={() => handleFilterChange("lab2")}
              className={`px-4 py-2 rounded ${
                filter === "lab2"
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {t("library_filters.lab2")}
            </button>
            <button
              onClick={() => handleFilterChange("lab3")}
              className={`px-4 py-2 rounded ${
                filter === "lab3"
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {t("library_filters.lab3")}
            </button>
            <button
              onClick={() => handleFilterChange("computer4")}
              className={`px-4 py-2 rounded ${
                filter === "computer4"
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {t("library_filters.computer_lab")}
            </button>
          </div>
        </>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="https://auca.kg/uploads/00012021/177948667_10159035366570629_4164718236750303000_n.jpg"
            alt="Library 1"
            className={`shadow scale-hover-effect cursor-pointer w-full ${
              filter !== "all" && filter !== "lab1" ? "hidden" : ""
            }`}
          />
          <img
            src="https://media.istockphoto.com/id/824750478/photo/girl-reading-book-by-shelf-in-library.jpg?s=612x612&w=0&k=20&c=LvT9UoHUVvgbHxLDDW4V8Vy_duOGPLH5jjxn_XcQDt0="
            alt="Library 2"
            className={`shadow scale-hover-effect cursor-pointer w-full ${
              filter !== "all" && filter !== "lab2" ? "hidden" : ""
            }`}
          />
          <img
            src="https://media.istockphoto.com/id/1633844594/photo/young-boy-searching-through-bookshelves-in-library.jpg?s=612x612&w=0&k=20&c=YaGdWrpyvcdG14PMakyLj1-SX4CyeJEY6ohlXbcvQyQ="
            alt="Library 3"
            className={`shadow scale-hover-effect cursor-pointer w-full ${
              filter !== "all" && filter !== "lab3" ? "hidden" : ""
            }`}
          />
          <img
            src="https://media.istockphoto.com/id/1415740420/photo/computers-in-empty-classroom-on-high-school.jpg?s=612x612&w=0&k=20&c=8u7IcOi8c775BD4w1Ri6_7Vpm4TRRWVkN_D3aqFYzTU="
            alt="Computer Lab"
            className={`shadow scale-hover-effect cursor-pointer w-full ${
              filter !== "all" && filter !== "computer4" ? "hidden" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
