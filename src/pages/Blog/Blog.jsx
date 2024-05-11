import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

const blogs = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1401178933/photo/african-american-technician-repairing-a-3d-printer-in-laboratory.jpg?s=612x612&w=0&k=20&c=ZtwkDIUYj7Exvfdd-DEFwFHTm6svlMHojXopQTnHGc0=",
    title: "Build your career in general electricity",
    description:
      "Explore the possibilities of building a career in general electricity. From electrical installation to maintenance, the field offers diverse opportunities for those with a passion for hands-on work and problem-solving. Join us as we illuminate the path to a rewarding career in this dynamic industry.",
  },

  {
    id: 3,
    img: "https://media.istockphoto.com/id/1455946567/photo/college-instructor-assisting-electrical-engineering-students.jpg?s=612x612&w=0&k=20&c=NZk9l0sivK3QijpQ9Efc0833A9My4sp2frwIoUejZ98=",
    title: "Build your Career in electronics",
    description:
      "Looking to build a career in electronics? Dive into a world of endless possibilities where you can innovate, create, and shape the future of technology. Whether you're interested in designing circuits, troubleshooting systems, or developing cutting-edge gadgets, ",
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/1126063017/photo/doctor-sharing-bad-news-to-young-patient-worrying.jpg?s=612x612&w=0&k=20&c=5D9UvMo4nZW5LHAJ33rLXlV7-XEs6xOB1iZiTDSLmzE=",
    title: "Build your Career in sales management",
    description:
      " Explore the dynamic opportunities available in these sectors where you can lead, strategize, and drive success. Whether you're drawn to sales, marketing, finance, or operations, commercial and management roles offer diverse pathways for growth and impact.",
  },
  {
    id: 5,
    img: "https://media.istockphoto.com/id/1484047390/photo/female-mechanic-fixing-car.jpg?s=612x612&w=0&k=20&c=cxyfex5_QlQqRTxLJRhhfzfwuuQqn6DBzioH6rWvzDA=",
    title: "Build your career  in Mechanical",
    description:
      "Interested in a hands-on career? Consider becoming a mechanic! Dive into the world of fixing, maintaining, and tinkering with vehicles and machinery. Whether you're drawn to cars, trucks, airplanes, or industrial equipment, a career in mechanics offers endless opportunities to work with your hands and solve problems",
  },
  {
    id: 6,
    img: "https://media.istockphoto.com/id/1569449982/photo/miniature-of-cement-blocks-used-for-practical-engineering-classes.jpg?s=612x612&w=0&k=20&c=iaHdGBK7NbYGDq02QL8zBovj2535I4ybnHOPhCFGV6Q=",
    title: "Build your career in construction",
    description:
      "Looking to build a solid career? Consider construction! Dive into a world of building, shaping, and creating structures that define our cities and communities. Whether you're interested in hands-on work like carpentry and masonry,.",
  },
  {
    id: 7,
    img: "https://media.istockphoto.com/id/1519355186/photo/i-need-this-data.jpg?s=612x612&w=0&k=20&c=ivfi9uNZlwCQt842_4JyBK-9Y1egC1xQp3-qZ-gX1jU=",
    title: "build your career in veterinary and agronomy",
    description:
      "Explore the endless possibilities in the world of technology, where you can innovate, problem-solve, and shape the digital landscape. Whether you're passionate about software development, cybersecurity, data analytics.",
  },
];

function Blog() {
  const { t } = useTranslation();
  return (
    <div className="blog-page">
      <header className="height-75">
       
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">{t("blog.title")}</h1>
          <p className="text-center w-75 mb-5">{t("blog.description")}</p>
        </div>
      </header>

      <div className="bg-body-tertiary py-5">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect bg-dark text-light border-0">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5 d-flex flex-column align-items-center">
                      <Card.Title className="fs-2 mb-4">
                        {blog.title}
                      </Card.Title>
                      <Card.Text className="text-center">
                        {blog.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;