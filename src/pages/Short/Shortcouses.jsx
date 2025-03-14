

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";

const Shortcourses = () => {
  const { t } = useTranslation();

  // Fetching the shortcourses data
  const shortcourses = t("shortcourses", { returnObjects: true });

  return (
    <div className="courses-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h2 className="text-center fw-semibold">{t("short.title")}</h2>
          <p className="text-center w-75 mb-5 description">
            {t("short.description")}
          </p>
        </div>
      </header>

      <div className="container py-5 mb-16 mt-8">
        <div className="row g-4">
          {shortcourses.map((shortcourse) => (
            <div key={shortcourse.id} className="col-md-6 col-lg-4">
              <div className="text-decoration-none">
                <Card className="h-100 shadow scale-hover-effect">
                  <Card.Img variant="top" src={shortcourse.img} />
                  <Card.Body className="p-md-5">
                    <Card.Title>{shortcourse.title}</Card.Title>
                    <Card.Text>{shortcourse.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </div>
  );
};

export default Shortcourses;


