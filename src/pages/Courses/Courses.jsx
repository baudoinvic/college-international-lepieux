
import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Courses = () => {
  const { t } = useTranslation();
  const courses = t("courses", { returnObjects: true });

  return (
    <div className="courses-page mt-32">
      <p className="text-center w-full sm:w-2/3 mx-auto mb-5 mt-4 px-4">
        {t("start_courses_description")}
      </p>

      <div className="container py-5 mb-16 mt-8">
        <div className="row g-4">
          {courses.map((course) => (
            <div key={course.id} className="col-md-6 col-lg-4">
              <Link to={course.link} className="text-decoration-none">
                <Card className="text-white shadow rounded-4 overflow-hidden scale-hover-effect">
                  <div style={{ height: "250px", overflow: "hidden" }}>
                    <Card.Img
                      src={course.img}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-4 bg-dark bg-opacity-50">
                    <Card.Title className="text-white fw-bold text-center fs-5">
                      {course.title}
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
              <Card.Text className="text-left small mt-8">
                {course.description}
              </Card.Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
