import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';

import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';

import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/691703568/photo/engineering-students-with-their-teacher-writing-on-the-board.jpg?s=612x612&w=0&k=20&c=hDlN563oKwpDNyRSQXqWidPlFNBTbK6_jGtJYOts1Yk=",
    title: "Electronics",
    description:
      "This is the electronics course. It covers topics such as circuit design, electronic components, and circuit analysis.",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/942164000/photo/group-of-young-people-in-technical-vocational-training-with-teacher.jpg?s=612x612&w=0&k=20&c=Pi2UgPyqiijHDRt9m2th9Bqm5SCCwwOF6zg2NpAZnHI=",
    title: "General electricity",
    description:
      "This course covers fundamental principles and applications of general electricity, including circuits, voltage, current, resistance, and power.",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1048994466/photo/indian-young-girl-sewing-stock-image.jpg?s=612x612&w=0&k=20&c=8YRmaNa8okGasnkmN8rrqDLgM-uExpSR1P3XKJkvDvk=",
    title: "cut and seam ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/1204089501/photo/industrial-design-student-building-furniture-with-the-help-of-his-teacher.jpg?s=612x612&w=0&k=20&c=7n3hBHNxMd0dOELxSvxTuOINe5qQd1-1XJheTNQzfaE=",
    title: "Construction",
    description:
      "This course covers the principles and techniques of construction, including building materials, structural systems, construction methods, and project management",
  },

  {
    id: 6,
    img: "https://media.istockphoto.com/id/600697264/photo/medical-business-meeting.jpg?s=612x612&w=0&k=20&c=5WQMnOkFXFq8EPu19h879iQBc448JnB9Tf6DSAw5fS4=",
    title: "Sales and Management",
    description:
      "This course focuses on commercial and management skills, including marketing, sales, finance, human resources, and business operations.",
  },
  {
    id: 7,
    img: "https://media.istockphoto.com/id/827810840/photo/group-of-student-mechanics-working-on-car-engine-with-hood-up.jpg?s=612x612&w=0&k=20&c=WrklsPki6PkwqQ_i7dMXz5SKgzLtdbET-S6JZV_TGeY=",
    title: "Mechanical",
    description:
      "This course covers principles of mechanics, including statics, dynamics, kinematics, and mechanical systems, and their applications in engineering and technology.",
  },
  {
    id: 8,
    img: "https://media.istockphoto.com/id/1519355186/photo/i-need-this-data.jpg?s=612x612&w=0&k=20&c=ivfi9uNZlwCQt842_4JyBK-9Y1egC1xQp3-qZ-gX1jU=",
    title: "Veterinary and Agronomy",
    description:
      "This course explores veterinary science and agronomy, covering topics such as animal health, nutrition, breeding, crop production, and soil management.",
  },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>this is the courses which our institution provide to the student and if you would like to know more about our courses you can visit our office for more information and clarification</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;