

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
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">{t("our_courses")}</h1>{" "}
          {/* Using translated heading */}
          <p className="text-center w-75 mb-5">
            {t("start_courses_description")}
          </p>{" "}
          {/* Using translated description */}
        </div>
      </header>

      <div className="container py-5">
        <div className="row g-4">
          {courses.map((course) => (
            <div key={course.id} className="col-lg-6">
              <Link to="/Description">
                <Card className="text-white shadow scale-hover-effect">
                  <Card.Img src={course.img} />
                  <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-md-5">
                    <Card.Title className="fs-1 text-danger">
                      {course.title}
                    </Card.Title>
                    <Card.Text className="text-center">
                      {course.description}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <FaqAccordion />
      </div>
    </div>
  );
};

export default Courses;
