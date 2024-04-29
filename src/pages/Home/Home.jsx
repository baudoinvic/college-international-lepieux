import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import { useTranslation } from "react-i18next";


const blogs = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1519355186/photo/i-need-this-data.jpg?s=612x612&w=0&k=20&c=ivfi9uNZlwCQt842_4JyBK-9Y1egC1xQp3-qZ-gX1jU=",
    title: "Veterinary and Agronomy",
    description:
      "would like to build your career in Veterinary and Agronomy!This course explores veterinary science and agronomy, covering topics such as animal health, nutrition, breeding, crop production, and soil management.",
  },
  {
    id: 6,
    img: "https://media.istockphoto.com/id/1204089501/photo/industrial-design-student-building-furniture-with-the-help-of-his-teacher.jpg?s=612x612&w=0&k=20&c=7n3hBHNxMd0dOELxSvxTuOINe5qQd1-1XJheTNQzfaE=",
    title: "Construction",
    description:
      "would like to build your career in construction. This course covers the principles and techniques of construction, including building materials, structural systems, construction methods, and project management",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/827810840/photo/group-of-student-mechanics-working-on-car-engine-with-hood-up.jpg?s=612x612&w=0&k=20&c=WrklsPki6PkwqQ_i7dMXz5SKgzLtdbET-S6JZV_TGeY=",
    title: "Mechanical",
    description:
      "Build your future career in Mechanical. This course covers principles of mechanics, including statics, dynamics, kinematics, and mechanical systems, and their applications in engineering and technology.",
  },
];

function Home() {
   const { t } = useTranslation();
  return (
    <div className="home-page">
      {/* <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold">
            Collège international le pieux
          </h1>
          <p>
            High school education excellence we are happy to connect with you in
            whatever way you are most comfortable
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Our Courses
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </header> */}

      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>{t("welcome_to")}</h2>
          <h1 className="text-center fw-semibold">{t("college_name")}</h1>
          <p>{t("education_excellence")}</p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
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
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">2024 start courses</h2>
              <p>
                Welcome to the beginning of the 2024 academic year at Collège
                international le pieux We're excited to start our courses and
                begin a journey of learning, growth, and success together.
              </p>
              <Link to="/courses">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                src="https://pbs.twimg.com/media/F-ZOGvhWgAEm9J2?format=jpg&name=4096x4096"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <FaqAccordion />
      </div>

      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">
            Latest on the blog
          </h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type="button" className="btn btn-danger btn-lg mt-5">
              Read More Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;