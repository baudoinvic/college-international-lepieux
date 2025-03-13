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
    message: "",
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
      toast.success("Merci de nous avoir contactés");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to send message. Please try again later.");
    }
  }
  return (
    <div className="contact-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h2 className="text-center text-1xl fw-semibold">{t("contact.title")}</h2>
          <p className="text-center w-75 mb-5 mt-4">{t("contact.description")}</p>
        </div>
      </header>

     

      <div className="container my-5 d-flex justify-content-center">
        <Form
          id="contact-form"
          onSubmit={handleSubmit}
          className="p-4 shadow-lg bg-white rounded-lg w-100"
          style={{ maxWidth: "600px" }}
        >
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label className="fw-bold">
                {t("contact.firstName")}
              </Form.Label>
              <Form.Control
                type="text"
                id="firstname"
                name="firstname"
                placeholder={t("contact.firstNamePlaceholder")}
                onChange={handleChange}
                required
                className="p-2 border rounded"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label className="fw-bold">
                {t("contact.lastName")}
              </Form.Label>
              <Form.Control
                type="text"
                id="lastname"
                name="lastname"
                placeholder={t("contact.lastNamePlaceholder")}
                onChange={handleChange}
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
              required
              className="p-2 border rounded"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">{t("contact.address")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("contact.addressPlaceholder")}
              className="p-2 border rounded"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">{t("contact.message")}</Form.Label>
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              placeholder={t("contact.messagePlaceholder")}
              onChange={handleChange}
              required
              className="p-2 border rounded"
              rows={4}
            />
          </Form.Group>

          <Button
            variant="danger"
            type="submit"
            className="w-100 py-2 fw-bold shadow-sm rounded-lg"
            style={{ transition: "0.3s" }}
          >
            {t("contact.submit")}
          </Button>
        </Form>
        <ToastContainer />
      </div>

      <div className=" py-10">
        <div className="container mx-auto">
          <h2 className="text-center text-lg font-semibold mb-6">
            {t("contact.moreInfo")}
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white shadow-lg text-black p-6 rounded-lg shadow-md w-80 text-center">
              <h1 className="text-lg font-bold">{t("contact.addressTitle")}</h1>
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
  );
}

export default Contact;