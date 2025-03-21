
import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaRegLightbulb } from "react-icons/fa6";
import { RiFocus2Line } from "react-icons/ri";

function ChooseSection() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container mt-16 mb-16">
        <h3 className="text-center mb-5">{t("choose_section.heading")}</h3>
        <div className="row g-4">
          <div className="col-lg-4 bg-white shadow-lg">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#0a1844"
                  className="bi bi-trophy-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  {t("choose_section.card1.title")}
                </Card.Title>
                <Card.Text className="text-center">
                  {t("choose_section.card1.description")}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 bg-white shadow-lg">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#0a1844"
                  className="bi bi-emoji-smile-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  {t("choose_section.card2.title")}
                </Card.Title>
                <Card.Text className="text-center">
                  {t("choose_section.card2.description")}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 bg-white shadow-lg">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3 bg-navy">
                <RiFocus2Line
                  className="text-5xl"
                  style={{ color: "#0a1844" }}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  {t("choose_section.card3.title")}
                </Card.Title>
                <Card.Text className="text-center">
                  {t("choose_section.card3.description")}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* <h2 className="text-center mb-5">Our core values</h2> */}
        <h2 className="text-center mb-5">{t("core.values")}</h2>

        <div className="d-flex flex-wrap justify-content-center">
          {/* Respect */}
          <div className="mx-3 mb-4">
            <div
              className="rounded-circle d-flex flex-column align-items-center justify-content-center bg-navy text-white"
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#0a1844",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="#e63946"
                viewBox="0 0 16 16"
              >
                <path d="M8 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m2.5-3a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M11.5 11c.17 0 .34-.03.5-.05V15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4.05c.16.02.33.05.5.05a6 6 0 0 0 7 0M7 13v-1h2v1h-2zm0-2v-1h2v1h-2z" />
                <path d="M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6.5 1A1.5 1.5 0 0 0 5 2.5A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5A1.5 1.5 0 0 0 9.5 1h-3Z" />
              </svg>
              <p
                className="mt-3 mb-0 font-weight-bold"
                style={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                {t("coreValues.respect")}
              </p>
            </div>
          </div>

          {/* Curiosity */}
          <div className="mx-3 mb-4">
            <div
              className="rounded-circle d-flex flex-column align-items-center justify-content-center bg-navy text-white"
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#0a1844",
              }}
            >
              <FaRegLightbulb className="w-8 h-8 text-red-500" />
              <p
                className="mt-3 mb-0 font-weight-bold"
                style={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                {t("coreValues.curiosity")}
              </p>
            </div>
          </div>

          {/* Courage */}
          <div className="mx-3 mb-4">
            <div
              className="rounded-circle d-flex flex-column align-items-center justify-content-center bg-navy text-white"
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#0a1844",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#e63946"
                viewBox="0 0 16 16"
              >
                <path d="M4.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zm6 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm-3 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                <path d="M6.25 3.25a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0v-2.5h3.5v2.5a.75.75 0 0 0 1.5 0v-9.5a.75.75 0 0 0-1.5 0v2.5h-3.5z" />
              </svg>
              <p
                className="mt-3 mb-0 font-weight-bold"
                style={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                {t("coreValues.courage")}
              </p>
            </div>
          </div>

          {/* Integrity */}
          <div className="mx-3 mb-4">
            <div
              className="rounded-circle d-flex flex-column align-items-center justify-content-center bg-navy text-white"
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#0a1844",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#e63946"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 1a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13" />
              </svg>
              <p
                className="mt-3 mb-0 font-weight-bold"
                style={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                {t("coreValues.integrity")}
              </p>
            </div>
          </div>

          {/* Kindness */}
          <div className="mx-3 mb-4">
            <div
              className="rounded-circle d-flex flex-column align-items-center justify-content-center bg-navy text-white"
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#0a1844",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#e63946"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664h10z" />
                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 1a6 6 0 1 1 0 12A6 6 0 0 1 8 2" />
              </svg>
              <p
                className="mt-3 mb-0 font-weight-bold"
                style={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                {t("coreValues.kindness")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSection;
