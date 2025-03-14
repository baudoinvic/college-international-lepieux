import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

function Blog() {
  const { t } = useTranslation();
  const blogs = t("blogs",{returnObjects:true})
  return (
    <div className="blog-page">
      <header className="height-75">
       
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h2 className="text-center fw-semibold">{t("blog.title")}</h2>
          <p className="text-center w-75 mb-5">{t("blog.description")}</p>
        </div>
      </header>

      <div className=" py-5 mb-16 mt-8">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect  border-0">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5 d-flex flex-column align-items-center">
                      <Card.Title className="text-lg mb-4">
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