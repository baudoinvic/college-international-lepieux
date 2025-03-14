

import React from "react";
import "./Courses.css";
import { Card } from "react-bootstrap";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { useTranslation } from "react-i18next";
import { Link, Routes, Route } from "react-router-dom";

const Courses = () => {
 const { t } = useTranslation();

  const courses = t("courses", { returnObjects: true }); 

  return (
    <div className="courses-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-white">
          <h1 className="text-center fw-semibold text-lg text-light">
            {t("our_courses")}
          </h1>{" "}
          {/* Using translated heading */}
          <p className="text-center w-75 mb-5">
            {t("start_courses_description")}
          </p>{" "}
          {/* Using translated description */}
        </div>
      </header>

   

      <div className="container py-5 mb-16 mt-8">
        <div className="row g-4">
          {courses.map((course) => (
            <div key={course.id} className="col-md-6 col-lg-4">
              {" "}
              {/* Adjusted column size */}
              <Link to="/Description" className="text-decoration-none">
                <Card className="text-white shadow rounded-4 overflow-hidden scale-hover-effect">
                  <div style={{ height: "250px", overflow: "hidden" }}>
                    {" "}
                    {/* Fixed height */}
                    <Card.Img
                      src={course.img}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }} // Ensures images fit nicely
                    />
                  </div>
                  <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-4 bg-dark bg-opacity-50">
                    <Card.Title className="text-white fw-bold text-center fs-5">
                      {course.title}
                    </Card.Title>
                    <Card.Text className="text-center small">
                      {course.description}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="bg-dark text-light py-5">
        <FaqAccordion />
      </div> */}
    </div>
  );
};

export default Courses;
