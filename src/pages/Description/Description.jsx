import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description-page">
      <header>{/* Header content goes here if any */}</header>
      <div className="container mx-auto py-10 mt-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Course of Study</h2>
          <p className="text-lg text-gray-800 mb-6">
            Our school offers a diverse range of courses designed to meet the
            educational needs of students. Whether you're interested in STEM
            fields, humanities, arts, or social sciences, we have a program
            tailored for you. Our experienced faculty members ensure a
            high-quality education that prepares students for their future
            careers.
          </p>
          <h2 className="text-3xl font-bold mb-6">School Fees</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="text-lg text-gray-800">
              <strong>Program 1:</strong> $XXXXX per semester
            </li>
            <li className="text-lg text-gray-800">
              <strong>Program 2:</strong> $XXXXX per semester
            </li>
            <li className="text-lg text-gray-800">
              <strong>Program 3:</strong> $XXXXX per semester
            </li>
            <li className="text-lg text-gray-800">
              <strong>Program 4:</strong> $XXXXX per semester
            </li>
            <li className="text-lg text-gray-800">
              <strong>Program 5:</strong> $XXXXX per semester
            </li>
            <li className="text-lg text-gray-800">
              <strong>Program 6:</strong> $XXXXX per semester
            </li>
          </ul>
          <h2 className="text-3xl font-bold mb-6">Pictures of Laboratory</h2>
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
