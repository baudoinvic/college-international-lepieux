import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';


const blogs = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1326356989/photo/scientist-african-american-woman-working-in-laboratory-with-electronic-instruments.jpg?s=612x612&w=0&k=20&c=iWRoOgPoESyWNLRNAhaez7A8X7L8_UC56I2F9fNaOtg=",
    title: "Build your career in general electricity",
    description:
      "Explore the possibilities of building a career in general electricity. From electrical installation to maintenance, the field offers diverse opportunities for those with a passion for hands-on work and problem-solving. Join us as we illuminate the path to a rewarding career in this dynamic industry.",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/503893294/photo/excited-elementary-students-learning-to-use-drone-in-class.jpg?s=612x612&w=0&k=20&c=sVquCywhgixTrfCYlLP8FY-68L8x_8HAfSeBB6QKSDA=",
    title: "Build your  Career in civil aviation",
    description:
      "Interested in a career in flying? Civil aviation might be for you! Whether you want to be a pilot, air traffic controller, or work with aircraft technology, there are many opportunities to explore. Join us and start your journey in the skies!.",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/999096644/photo/working-on-an-engineering-group-project.jpg?s=612x612&w=0&k=20&c=JEPhruE2TnBWmaxHZ3gBigZQOyLLruOeNNW8Phicdfk=",
    title: "Build your Career in electronics",
    description:
      "Looking to build a career in electronics? Dive into a world of endless possibilities where you can innovate, create, and shape the future of technology. Whether you're interested in designing circuits, troubleshooting systems, or developing cutting-edge gadgets.",
  },
];

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
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