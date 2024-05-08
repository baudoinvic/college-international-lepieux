// import React from 'react';
// import './FaqAccordion.css';
// import Accordion from 'react-bootstrap/Accordion';
// import Testimonial from '../Testimonial/Testimonial';
// import { useTranslation } from "react-i18next";

// function FaqAccordion() {
//    const { t } = useTranslation();
//   return (
//     <div className="faq-section">
//       <div className="container d-flex flex-column align-items-center">
//         <h2 className="text-center text-capitalize mb-5">
//           {t("faq_section.heading")}
//         </h2>
//         <p className="text-center mb-5">
//             {t("faq_section.description")}
//         </p>
//         <Accordion defaultActiveKey="" flush>
//           <Accordion.Item eventKey="0">
//             <Accordion.Header>How do I enroll my child ?</Accordion.Header>
//             <Accordion.Body>
//               To enroll your child at Lepieux international school, please visit
//               our admissions page on our website or contact our admissions
//               office directly. Our team will guide you through the enrollment
//               process and answer any questions you may have.
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="1">
//             <Accordion.Header>What classes we offer?</Accordion.Header>
//             <Accordion.Body>
//               We offer different subjects like math, science, language arts,
//               social studies, arts, and physical education to give students a
//               well-rounded education.
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="2">
//             <Accordion.Header>
//               How does Lepieux international school keep students safe and
//               happy?
//             </Accordion.Header>
//             <Accordion.Body>
//               We have rules, security, counseling, and health programs in place
//               to make sure all students feel safe and supported.
//             </Accordion.Body>
//           </Accordion.Item>
//           <Accordion.Item eventKey="3">
//             <Accordion.Header>
//               How can I know about school events and news?
//             </Accordion.Header>
//             <Accordion.Body>
//               Check our website, follow us on social media, or sign up for
//               emails to stay updated. We might also send notices home or call
//               you with important updates.
//             </Accordion.Body>
//           </Accordion.Item>
//         </Accordion>
//       </div>
//       <Testimonial />
//     </div>
//   );
// }

// export default FaqAccordion;


import React from "react";
import "./FaqAccordion.css";
import Accordion from "react-bootstrap/Accordion";
import Testimonial from "../Testimonial/Testimonial";
import { useTranslation } from "react-i18next";

function FaqAccordion() {
  const { t } = useTranslation();

  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          {t("faq_section.heading")}
        </h2>
        <p className="text-center mb-5">{t("faq_section.description")}</p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{t("faq_enroll_question")}</Accordion.Header>
            <Accordion.Body>{t("faq_enroll_answer")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{t("faq_classes_question")}</Accordion.Header>
            <Accordion.Body>{t("faq_classes_answer")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{t("faq_safety_question")}</Accordion.Header>
            <Accordion.Body>{t("faq_safety_answer")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>{t("faq_events_question")}</Accordion.Header>
            <Accordion.Body>{t("faq_events_answer")}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Testimonial />
    </div>
  );
}

export default FaqAccordion;
