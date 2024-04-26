import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "ishimwe sandra",
    text: "I'm so proud to work with Beatha Business. I bought the products many times and got the original ones delivered to my home.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Divine josh",
    text: "I'm so proud to work with Beatha Business. I bought the products many times and got the original ones delivered to my home.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Tousaint Francis",
    text: "I'm so proud to work with Beatha Business. I bought the products many times and got the original ones delivered to my home.",
    img: "https://picsum.photos/104/104",
  },
 
];

const Testimonial = () => {
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
      <h1 className="mt-20 text-center">Testimonials</h1>

      <p className="text-center mx-auto">What students say about us</p>

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
