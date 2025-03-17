import React from 'react'

const Construction = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-green-600 text-white py-5 text-center">
        <h1 className="m-0 text-4xl">Construction</h1>
        <p>
          Master the essential skills of construction and project management for
          a successful career.
        </p>
      </div>

      {/* Container */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Course Overview Section */}
        <div className="mb-6">
          <h2 className="text-green-600 text-2xl font-semibold">
            Course Overview
          </h2>
          <p>
            This course introduces students to the principles and techniques of
            construction. Topics include structural systems, construction
            materials, safety protocols, and project management. Students will
            gain hands-on experience and learn the skills required for a career
            in the construction industry.
          </p>
        </div>

        {/* Curriculum Section */}
        <div className="mb-6">
          <h2 className="text-green-600 text-2xl font-semibold">Curriculum</h2>
          <ul className="list-disc pl-5">
            <li>Introduction to Construction Techniques</li>
            <li>Structural Systems and Materials</li>
            <li>Blueprint Reading and Interpretation</li>
            <li>Construction Safety and Regulations</li>
            <li>Project Management Basics</li>
            <li>Fieldwork and Practical Applications</li>
          </ul>
        </div>

        {/* Requirements Section */}
        <div className="mb-6">
          <h2 className="text-green-600 text-2xl font-semibold">
            Requirements
          </h2>
          <p>
            No prior experience is required. Students should have an interest in
            construction, problem-solving, and teamwork. Safety gear will be
            provided for hands-on projects.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-6">
          <h2 className="text-green-600 text-2xl font-semibold">
            Why Choose This Course?
          </h2>
          <p>
            This course provides practical experience in construction
            techniques, preparing students for careers in the construction
            industry. Graduates will have a strong foundation to pursue roles
            such as construction manager, site supervisor, or tradesperson.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="bg-green-600 text-white py-2 px-6 rounded-md text-lg hover:bg-green-700">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Construction
