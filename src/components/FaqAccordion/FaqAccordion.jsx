import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';
import Testimonial from '../Testimonial/Testimonial';
import { useTranslation } from "react-i18next";

function FaqAccordion() {
   const { t } = useTranslation();
  return (
    <div className="faq-section mt-16 mb-8">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          {t("faq_section.heading")}
        </h2>
        <p className="text-center mb-5">{t("faq_section.description")}</p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{t("faq.title")} ?</Accordion.Header>
            <Accordion.Body>{t("faq.description")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{t("faq.question")} ?</Accordion.Header>
            <Accordion.Body>{t("faq.answer")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{t("faq.2title")} ?</Accordion.Header>
            <Accordion.Body>{t("faq.2answer")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>{t("faq.3title")} ?</Accordion.Header>
            <Accordion.Body>
              <Accordion.Body>{t("faq.3answer")}</Accordion.Body>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Testimonial />
    </div>
  );
}

export default FaqAccordion;



