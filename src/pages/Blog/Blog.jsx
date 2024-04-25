import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: "Build your career in general electricity",
    description:
      "Explore the possibilities of building a career in general electricity. From electrical installation to maintenance, the field offers diverse opportunities for those with a passion for hands-on work and problem-solving. Join us as we illuminate the path to a rewarding career in this dynamic industry.",
  },
  {
    id: 2,
    img: [Blog2Img],
    title: "Build your  Career in civil aviation",
    description:
      "Interested in a career in flying? Civil aviation might be for you! Whether you want to be a pilot, air traffic controller, or work with aircraft technology, there are many opportunities to explore. Join us and start your journey in the skies!.",
  },
  {
    id: 3,
    img: [Blog3Img],
    title: "Build your Career in electronics",
    description:
      "Looking to build a career in electronics? Dive into a world of endless possibilities where you can innovate, create, and shape the future of technology. Whether you're interested in designing circuits, troubleshooting systems, or developing cutting-edge gadgets, ",
  },
  {
    id: 4,
    img: [Blog4Img],
    title: "Build your Career in Commercial and Gestion",
    description:
      " Explore the dynamic opportunities available in these sectors where you can lead, strategize, and drive success. Whether you're drawn to sales, marketing, finance, or operations, commercial and management roles offer diverse pathways for growth and impact.",
  },
  {
    id: 5,
    img: [Blog5Img],
    title: "Build your career  in Mechanic",
    description:
      "Interested in a hands-on career? Consider becoming a mechanic! Dive into the world of fixing, maintaining, and tinkering with vehicles and machinery. Whether you're drawn to cars, trucks, airplanes, or industrial equipment, a career in mechanics offers endless opportunities to work with your hands and solve problems",
  },
  {
    id: 6,
    img: [Blog6Img],
    title: "Build your career in construction",
    description:
      "Looking to build a solid career? Consider construction! Dive into a world of building, shaping, and creating structures that define our cities and communities. Whether you're interested in hands-on work like carpentry and masonry,.",
  },
  {
    id: 7,
    img: [Blog7Img],
    title: "build your career in computing",
    description:
      "Explore the endless possibilities in the world of technology, where you can innovate, problem-solve, and shape the digital landscape. Whether you're passionate about software development, cybersecurity, data analytics.",
  },
  
];

function Blog() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Blog</h1>
          <p className="text-center w-75 mb-5">
            Welcome to our blog on building a career in computing! Explore the
            diverse opportunities and pathways available in the ever-evolving
            world of technology,alongside other related fields.
          </p>
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