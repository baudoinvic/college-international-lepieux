// import React from "react";
// import Slider from "react-slick";

// const TestimonialData = [
//   {
//     id: 1,
//     name: "ishimwe sandra",
//     text: "i'm always happy to study at this school because the skills that i gain at school it's enough for me they have the best eduction never seen.",
//     img: "https://c.stocksy.com/a/ynq000/z9/202986.jpg",
//   },
//   {
//     id: 2,
//     name: "Divine josh",
//     text: "i'm always happy to study at this school because the skills that i gain at school it's enough for me they have the best eduction never seen.",
//     img: "https://tse1.mm.bing.net/th?id=OIP.CTsmIkEVMgmpguoOa7iR2gHaKq&pid=Api&P=0&h=180",
//   },
//   {
//     id: 3,
//     name: "Tousaint Francis",
//     text: "i'm always happy to study at this school because the skills that i gain at school it's enough for me they have the best eduction never seen",
//     img: "https://pngimg.com/uploads/student/student_PNG62539.png",
//   },
// ];

// const Testimonial = () => {
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 10000,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="">
//       <h1 className="mt-20 text-center">Testimonials</h1>

//       <p className="text-center mx-auto">What students says about us</p>

//       <Slider {...settings}>
//         {TestimonialData.map((data) => (
//           <div className="my-6">
//             <div
//               key={data.id}
//               className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white bg-primary/10 relative"
//             >
//               <div className="mb-4">
//                 <img src={data.img} alt="" className="rounded-full w-20 h-20" />
//               </div>
//               <div className="flex flex-col items-center gap-4">
//                 <div className="space-y-3">
//                   <p className="text-xs text-gray-500">{data.text}</p>
//                   <h1 className="text-xl font-bold text-black/80 dark:text-light">
//                     {data.name}
//                   </h1>
//                 </div>
//               </div>
//               <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
//                 ,,
//               </p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Testimonial;


import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();

  const TestimonialData = [
    {
      id: 1,
      name: "ishimwe sandra",
      text: t("testimonial_section.testimonials.0.text"),
      img: "https://c.stocksy.com/a/ynq000/z9/202986.jpg",
    },
    {
      id: 2,
      name: "Divine josh",
      text: t("testimonial_section.testimonials.1.text"),
      img: "https://tse1.mm.bing.net/th?id=OIP.CTsmIkEVMgmpguoOa7iR2gHaKq&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      name: "Tousaint Francis",
      text: t("testimonial_section.testimonials.2.text"),
      img: "https://pngimg.com/uploads/student/student_PNG62539.png",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <h1 className="mt-20 text-center">{t("testimonial_section.heading")}</h1>

      <p className="text-center mx-auto">
        {t("testimonial_section.subheading")}
      </p>

      <Slider {...settings}>
        {TestimonialData.map((data) => (
          <div className="my-6">
            <div
              key={data.id}
              className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white bg-primary/10 relative"
            >
              <div className="mb-4">
                <img src={data.img} alt="" className="rounded-full w-20 h-20" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="space-y-3">
                  <p className="text-xs text-gray-500">{data.text}</p>
                  <h1 className="text-xl font-bold text-black/80 dark:text-light">
                    {data.name}
                  </h1>
                </div>
              </div>
              <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                ,,
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;

