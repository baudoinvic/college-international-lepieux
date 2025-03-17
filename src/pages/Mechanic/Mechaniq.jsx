import React from 'react'

const Mechaniq = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-orange-600 text-white py-5 text-center">
        <h1 className="m-0 text-4xl">Mécanique</h1>
        <p>
          Build your future in mechanics by mastering fundamental principles and
          practical applications.
        </p>
      </div>

      {/* Container */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Course Overview Section */}
        <div className="mb-6">
          <h2 className="text-orange-600 text-2xl font-semibold">
            Course Overview
          </h2>
          <p>
            This course covers the principles of mechanics, including statics,
            dynamics, and kinematics. Students will gain hands-on experience
            with mechanical systems, tools, and technologies used in
            engineering, automotive, and industrial applications.
          </p>
        </div>

        {/* Curriculum Section */}
        <div className="mb-6">
          <h2 className="text-orange-600 text-2xl font-semibold">Curriculum</h2>
          <ul className="list-disc pl-5">
            <li>Introduction to Mechanics</li>
            <li>Statics and Dynamics</li>
            <li>Kinematics and Mechanical Systems</li>
            <li>Tools and Equipment Usage</li>
            <li>Automotive and Industrial Applications</li>
            <li>Fieldwork and Practical Projects</li>
          </ul>
        </div>

        {/* Requirements Section */}
        <div className="mb-6">
          <h2 className="text-orange-600 text-2xl font-semibold">
            Requirements
          </h2>
          <p>
            No prior experience is required. Students should have an interest in
            problem-solving, physics, and engineering. Safety gear will be
            provided for hands-on activities.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-6">
          <h2 className="text-orange-600 text-2xl font-semibold">
            Why Choose This Course?
          </h2>
          <p>
            This course provides foundational knowledge and practical experience
            in mechanics. Graduates will be equipped for careers in engineering,
            automotive repair, industrial maintenance, or further education in
            mechanical engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mechaniq
