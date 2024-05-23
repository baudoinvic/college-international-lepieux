import React from "react";
import "./Description.css";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="description-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1>Our school programm</h1>
          <p className="text-center w-75 mb-5">
            Our school offers a diverse range of courses designed to meet the
            educational needs of students Whether you're interested with our
            Courses just read the instructions
          </p>
        </div>
      </header>
      <div className="container  py-10 mt-10">
        <div className="max-w-3xl ">
          <h2 className="text-3xl font-bold mb-6">Course of Study</h2>
          <p className="text-lg text-gray-800 mb-6">
            Our school offers a diverse range of courses designed to meet the
            educational needs of students. Whether you're interested in STEM
            fields, humanities, arts, or social sciences, we have a program
            tailored for you. Our experienced faculty members ensure a
            high-quality education that prepares students for their future
            careers.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-10">
            School Fees structure
          </h2>

          <p>
            Thank you for reaching out to us. We appreciate your interest in Le
            Pieux International University's undergraduate programs. We
            understand the importance of transparency and clarity in financial
            matters. Rest assured, we have prepared a comprehensive fees
            structure and payment information document that outlines all the
            necessary details for our undergraduate programs. Please find
            attached the fees structure and payment information for your
            reference. Should you have any questions or require further
            clarification, feel free to contact our admissions
            <p>just reach out to us for for more informations.</p>
          </p>
          <Link to="/contact">
            <button
              type="button"
              className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0 "
            >
              Contact us
            </button>
          </Link>

          <h2 className="text-3xl font-bold mb-6 mt-10">our Libraries </h2>
          <div className="grid grid-cols-3 gap-4">
            <img src="lab1.jpg" alt="Laboratory 1" className="w-full" />
            <img src="lab2.jpg" alt="Laboratory 2" className="w-full" />
            <img src="lab3.jpg" alt="Laboratory 3" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
