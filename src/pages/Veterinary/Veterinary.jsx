import React from 'react'

const Veterinary = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <heder></heder>

      <div className="bg-blue-600 text-white py-5 text-center">
        <h1 className="m-0 text-4xl">Vétérinaire et Agronomie</h1>
        <p>
          Explorez la science vétérinaire et l'agronomie pour construire une
          carrière enrichissante.
        </p>
      </div>
      {/* Container */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Course Overview Section */}
        <div className="mb-6">
          <h2 className="text-blue-600 text-2xl font-semibold">
            Course Overview
          </h2>
          <p>
            In this course, students will explore veterinary science and
            agronomy. Topics include animal health, nutrition, crop production,
            and soil management. This course is ideal for students interested in
            pursuing careers in agriculture, animal care, or environmental
            sciences.
          </p>
        </div>

        {/* Curriculum Section */}
        <div className="mb-6">
          <h2 className="text-blue-600 text-2xl font-semibold">Curriculum</h2>
          <ul className="list-disc pl-5">
            <li>Introduction to Veterinary Science</li>
            <li>Animal Care and Nutrition</li>
            <li>Crop Production and Soil Science</li>
            <li>Sustainable Farming Practices</li>
            <li>Fieldwork and Practical Applications</li>
          </ul>
        </div>

        {/* Requirements Section */}
        <div className="mb-6">
          <h2 className="text-blue-600 text-2xl font-semibold">Requirements</h2>
          <p>
            No prior experience is required. Students should have an interest in
            science and agriculture. Access to a computer for research and
            assignments is recommended.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-6">
          <h2 className="text-blue-600 text-2xl font-semibold">
            Why Choose This Course?
          </h2>
          <p>
            This course provides hands-on experience in veterinary science and
            agronomy, preparing students for careers in agriculture, animal
            care, or environmental management. Graduates may also pursue higher
            education in these fields.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Veterinary
