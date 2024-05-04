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
    img: "https://media.istockphoto.com/id/1333469661/photo/scientist-african-american-woman-working-in-laboratory-with-electronic-instruments.jpg?s=612x612&w=0&k=20&c=LeO10fn7KfyfW1ruY8SpDiHCLg_jqxPb08diXaeEpZY=",
    title: "Networking and telecomunication",
    description:
      "Discover networking essentials in this 6-month course covering architecture, protocols, and communication systems.",
  },

  {
    id: 3,
    img: "https://media.istockphoto.com/id/1129416291/photo/young-afro-woman-in-sewing-workshop-from-above.jpg?s=612x612&w=0&k=20&c=iv0cuJ-cP01AjfbvjxcJ4PEv4CQuBwyX26FbRU0uYSo=",
    title: "cut and seam ",
    description:
      "For a hands-on experience, enroll in our 6-month 'Cut and Seam' course. Learn the art of precision cutting and expert seam techniques.",
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/697520720/photo/better-than-any-man.jpg?s=612x612&w=0&k=20&c=gijyjuxgAvC1ZogRaD0Mg92H0pvzX0aXAi5CIgjs458=",
    title: "Adjustment and welding",
    description:
      "Join our 6-month 'Adjustment and Welding' course to master construction principles and techniques. Explore building materials, structural systems, construction methods, and project management essentials.",
  },

  {
    id: 6,
    img: "https://crrfstgobain.fr/wp-content/uploads/2021/04/crrf-image-333-1536x1024.jpg",
    title: "Adult rehabilitation school",
    description:
      "Embark on a 6-month journey at our Adult Rehabilitation School. Gain expertise in commercial and management skills, covering marketing, sales, finance, human resources, and business operations",
  },
  {
    id: 7,
    img: "https://media.istockphoto.com/id/1351799533/photo/portrait-of-african-american-little-child-wearing-shirt-standing-with-a-drill-in-hands-and.jpg?s=612x612&w=0&k=20&c=KsijlPkM5SuEubjSkngt8Xkv4SyLi0QQc8Av47job_8=",
    title: "Domestic and industrial installation",
    description:
      "Explore mechanics in our 6-month 'Domestic and Industrial Installation' course. Learn statics, dynamics, kinematics, and mechanical systems, applied in engineering and technology",
  },
  {
    id: 8,
    img: "https://media.istockphoto.com/id/1858053631/photo/back-photo-of-the-helmeted-electrician-using-the-drill-to-make-a-hole-in-the-wall.jpg?s=612x612&w=0&k=20&c=qjqWpIxdRQrdtU3y0JieQSDFI8OH8YmbeR3m79jGHAM=",
    title: "Masonary and plumbing",
    description:
      "Enroll in our 6-month 'Masonry and Plumbing' course, diving into the essentials of construction and water systems. Learn masonry techniques alongside plumbing principles, preparing you for diverse projects in the field.",
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
