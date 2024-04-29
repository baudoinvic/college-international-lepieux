import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';

import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';

import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1336651609/photo/young-teenage-multiethnic-schoolgirl-is-studying-electronics-and-soldering-wires-and-circuit.jpg?s=612x612&w=0&k=20&c=zQOe5jb-MgSPvoomkBYZpvEZcPQybeapPdvUcngTEbw=",
    title: "Electronics",
    description:
      "This is the electronics course. It covers topics such as circuit design, electronic components, and circuit analysis.",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1401178933/photo/african-american-technician-repairing-a-3d-printer-in-laboratory.jpg?s=612x612&w=0&k=20&c=ZtwkDIUYj7Exvfdd-DEFwFHTm6svlMHojXopQTnHGc0=",
    title: "General electricity",
    description:
      "This course covers fundamental principles and applications of general electricity, including circuits, voltage, current, resistance, and power.",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1129416291/photo/young-afro-woman-in-sewing-workshop-from-above.jpg?s=612x612&w=0&k=20&c=iv0cuJ-cP01AjfbvjxcJ4PEv4CQuBwyX26FbRU0uYSo=",
    title: "cut and seam ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/1569449982/photo/miniature-of-cement-blocks-used-for-practical-engineering-classes.jpg?s=612x612&w=0&k=20&c=iaHdGBK7NbYGDq02QL8zBovj2535I4ybnHOPhCFGV6Q=",
    title: "Construction",
    description:
      "This course covers the principles and techniques of construction, including building materials, structural systems, construction methods, and project management",
  },

  {
    id: 6,
    img: "https://media.istockphoto.com/id/1126063017/photo/doctor-sharing-bad-news-to-young-patient-worrying.jpg?s=612x612&w=0&k=20&c=5D9UvMo4nZW5LHAJ33rLXlV7-XEs6xOB1iZiTDSLmzE=",
    title: "Sales and Management",
    description:
      "This course focuses on commercial and management skills, including marketing, sales, finance, human resources, and business operations.",
  },
  {
    id: 7,
    img: "https://media.istockphoto.com/id/1484047390/photo/female-mechanic-fixing-car.jpg?s=612x612&w=0&k=20&c=cxyfex5_QlQqRTxLJRhhfzfwuuQqn6DBzioH6rWvzDA=",
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