import React from "react";
import "./Short.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import HealthcareCourseImg from "../../utils/images/healthcare-course.jpg";
import LawCourseImg from "../../utils/images/law-course.jpg";

import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";

const courses = [
  {
    id: 1,
    img: "https://www.chartercollege.edu/sites/default/files/iStock-800305712.jpg",
    title: "Networking and telecomunication",
    description:
      "This is the electronics course. It covers topics such as circuit design, electronic components, and circuit analysis.",
  },

  {
    id: 3,
    img: "https://media.istockphoto.com/id/657489642/photo/happy-seamstress-at-work.jpg?s=612x612&w=0&k=20&c=yBKMm8cJ5l3TPvtafIzLUQlZ6ARJQC8vQH_EyYXp_xE=",
    title: "cut and seam ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/697520720/photo/better-than-any-man.jpg?s=612x612&w=0&k=20&c=gijyjuxgAvC1ZogRaD0Mg92H0pvzX0aXAi5CIgjs458=",
    title: "Adjustment and welding",
    description:
      "This course covers the principles and techniques of construction, including building materials, structural systems, construction methods, and project management",
  },

  {
    id: 6,
    img: "https://crrfstgobain.fr/wp-content/uploads/2021/04/crrf-image-333-1536x1024.jpg",
    title: "Adult rehabilitation school",
    description:
      "This course focuses on commercial and management skills, including marketing, sales, finance, human resources, and business operations.",
  },
  {
    id: 7,
    img: "https://media.istockphoto.com/id/1657566602/photo/two-construction-workers-working-together-on-an-apartment-renovation.jpg?s=612x612&w=0&k=20&c=9U8I8t_7rljrVhCCQHACecXooE0_iJ7bTvlXp7WDNXs=",
    title: "Domestic and industrial installation",
    description:
      "This course covers principles of mechanics, including statics, dynamics, kinematics, and mechanical systems, and their applications in engineering and technology.",
  },
  {
    id: 8,
    img: "https://media.istockphoto.com/id/1616202154/photo/construction-worker-using-modern-concrete-wall-grinding-machine-together-with-vacuum-pump-to.jpg?s=612x612&w=0&k=20&c=vI5Jx1sRyCzArBCuXH7ubvbIJ_g9OXVLfLnh0uECc5c=",
    title: "Masonry and plumbing",
    description:
      "This course explores veterinary science and agronomy, covering topics such as animal health, nutrition, breeding, crop production, and soil management.",
  },
];

function Shortcourses() {
  return (
    <div className="courses-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Our short Courses</h1>
          <p className="text-center w-75 mb-5">
            We offer a range of short courses in various fields, each spanning
            approximately six months and conducted through in-person instruction
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
