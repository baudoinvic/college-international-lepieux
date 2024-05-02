import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;

    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let token = localStorage.getItem("token");
      console.log("Request Data:", formData);

      const response = await axios({
        url: "https://beathaecommerceback-end.onrender.com/api/v1/contactus",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(formData),
      });

      console.log("Response Data:", response.data);
      toast.success("Thank you for your feedback");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to send message. Please try again later.");
    }
  }
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Get In Touch</h1>
          <p className="text-center w-75 mb-5">
            if you would like to get update with our events and stay in contact
            with us please don't hisitate just reach out to us we are here to
            help you
          </p>
        </div>
      </header>

      <div className="container my-5 d-flex justify-content-center">
        <Form id="contact-form" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
                onChange={handleChange}
                required
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last name"
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              id="email"
              name="email"
              value={formData.email}
              required
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Your address" />
          </Form.Group>

          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Location</Form.Label>
              <Form.Select>
                <option>London</option>
                <option>Manchester</option>
                <option>Liverpool</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Postcode</Form.Label>
              <Form.Control placeholder="Postcode" />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="danger btn-lg" type="submit">
            Submit
          </Button>
        </Form>
        <ToastContainer />
      </div>

      <div className="bg-dark text-light p-5 mx-auto ">
        <div className="container">
          <h2 className="text-center mb-5">For more information</h2>

          <div class="card-container justify-center items-center">
            <div class="first-card">
              <h1>Address</h1>
              <span className="text-white">Kalemie: 560 street</span>
            </div>
            <div class="first-card">
              <h1>Email Us</h1>
              <span className="text-white">Collègelepieuxinfo@gmail.com</span>
            </div>
            <div class="first-card">
              <h1>Call us</h1>
              <span className="text-white">+250783012138</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;