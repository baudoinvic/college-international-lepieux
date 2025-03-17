import React from 'react'

const Electriciy = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-yellow-500 text-white py-5 text-center">
        <h1 className="m-0 text-4xl">Électricité Générale</h1>
        <p>
          Master the fundamentals of electricity and gain hands-on experience in
          electrical systems.
        </p>
      </div>

      {/* Container */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Course Overview Section */}
        <div className="mb-6">
          <h2 className="text-yellow-500 text-2xl font-semibold">
            Course Overview
          </h2>
          <p>
            This course introduces students to the basic principles of
            electricity, including circuits, voltage, current, and resistance.
            Students will also learn about electrical systems, safety protocols,
            and real-world applications in residential, commercial, and
            industrial settings.
          </p>
        </div>

        {/* Curriculum Section */}
        <div className="mb-6">
          <h2 className="text-yellow-500 text-2xl font-semibold">Curriculum</h2>
          <ul className="list-disc pl-5">
            <li>Introduction to Electrical Systems</li>
            <li>Basic Circuits: Voltage, Current, and Resistance</li>
            <li>Understanding Electrical Components</li>
            <li>Electrical Safety and Regulations</li>
            <li>Hands-On Experience: Wiring and Installation</li>
            <li>Projects: Real-Life Applications</li>
          </ul>
        </div>

        {/* Requirements Section */}
        <div className="mb-6">
          <h2 className="text-yellow-500 text-2xl font-semibold">
            Requirements
          </h2>
          <p>
            No prior experience is required. Students should have an interest in
            problem-solving and technology. Safety gear and necessary tools will
            be provided during hands-on activities.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-6">
          <h2 className="text-yellow-500 text-2xl font-semibold">
            Why Choose This Course?
          </h2>
          <p>
            This course provides practical knowledge and experience in
            electrical systems, preparing students for careers as electricians,
            electrical engineers, or technicians. Graduates will also have a
            strong foundation for further studies in electrical engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Electriciy
