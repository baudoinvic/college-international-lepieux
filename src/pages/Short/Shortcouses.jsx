

import React from "react";
import "./Short.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { useTranslation } from "react-i18next";

function Shortcourses() {
  const { t } = useTranslation();

  const courses = t("courses", { returnObjects: true });

  return (
    <div className="courses-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Our Short Courses</h1>
          <p className="text-center w-75 mb-5">
            We offer a range of short courses in various fields, each spanning approximately six months and conducted through in-person instruction.
          </p>
        </div>
      </header>

      <div className="container py-5">
        <div className="row g-4">
          {courses.map((course) => (
            <div key={course.id} className="col-md-6 col-lg-4">
              <Link to="/blog" className="text-decoration-none">
                <Card className="h-100 shadow scale-hover-effect">
                  <Card.Img variant="top" src={course.img} />
                  <Card.Body className="p-md-5">
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                  </Card.Body>
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
}

export default Shortcourses;

