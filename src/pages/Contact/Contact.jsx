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
import { useTranslation } from "react-i18next";

function Contact() {
   const { t } = useTranslation();
   

    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      message: "",
    });

    // Handle input changes
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (
        !formData.firstname ||
        !formData.lastname ||
        !formData.email ||
        !formData.address ||
        !formData.message
      ) {
        toast.error("All fields are required!");
        return;
      }

      try {
        const response = await fetch(
          "https://challenge-assement.onrender.com/api/contact",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        toast.success("Thank you for contact us!");
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      }
    };
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h2 className="text-center text-1xl fw-semibold">
            {t("contact.title")}
          </h2>
          <p className="text-center w-75 mb-5 mt-4">
            {t("contact.description")}
          </p>
        </div>
      </header>

      <div className="flex flex-column-reverse flex-md-row">
        {" "}
        {/* Added class to reverse order on mobile */}
        <div className="container my-5 d-flex justify-content-center">
          <Form
            id="contact-form"
            onSubmit={handleSubmit}
            className="p-4 shadow-lg bg-white rounded-lg w-100"
            style={{ maxWidth: "600px" }}
          >
            <Row className="mb-3">
              <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                <Form.Label className="fw-bold">
                  {t("contact.firstName")}
                </Form.Label>
                <Form.Control
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder={t("contact.firstNamePlaceholder")}
                  onChange={handleChange}
                  value={formData.firstname}
                  required
                  className="p-2 border rounded"
                />
              </Col>
              <Col xs={12} sm={6}>
                <Form.Label className="fw-bold">
                  {t("contact.lastName")}
                </Form.Label>
                <Form.Control
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder={t("contact.lastNamePlaceholder")}
                  onChange={handleChange}
                  value={formData.lastname}
                  className="p-2 border rounded"
                />
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">{t("contact.email")}</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
                onChange={handleChange}
                value={formData.email}
                required
                className="p-2 border rounded"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                {t("contact.address")}
              </Form.Label>
              <Form.Control
                type="text"
                id="address"
                name="address"
                onChange={handleChange}
                placeholder={t("contact.addressPlaceholder")}
                className="p-2 border rounded"
                required
                value={formData.address}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                {t("contact.message")}
              </Form.Label>
              <Form.Control
                as="textarea"
                id="message"
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                onChange={handleChange}
                required
                value={formData.message}
                className="p-2 border rounded"
                rows={4}
              />
            </Form.Group>

            <Button
              variant=""
              type="submit"
              className="w-100 py-2 fw-bold shadow-sm rounded-lg text-white"
              style={{ transition: "0.3s", backgroundColor: "#0a1844" }}
            >
              {t("contact.submit")}
            </Button>
          </Form>
          <ToastContainer />
        </div>
        <div className="py-10">
          <div className="container mx-auto">
            <h2 className="text-center text-lg font-semibold mb-6">
              {t("contact.moreInfo")}
            </h2>

            <div className="d-flex flex-wrap justify-content-center gap-6">
              <div className="bg-white shadow-lg text-black p-6 rounded-lg shadow-md w-80 text-center">
                <h1 className="text-lg font-bold">
                  {t("contact.addressTitle")}
                </h1>
                <span>{t("contact.addressDetails")}</span>
              </div>

              <div className="bg-white shadow-lg text-black p-6 rounded-lg shadow-md w-80 text-center">
                <h1 className="text-lg font-bold">{t("contact.emailTitle")}</h1>
                <span>{t("contact.emailDetails")}</span>
              </div>

              <div className="bg-white shadow-lg text-black p-6 rounded-lg shadow-md w-80 text-center">
                <h1 className="text-lg font-bold">{t("contact.callTitle")}</h1>
                <span>{t("contact.callDetails")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;