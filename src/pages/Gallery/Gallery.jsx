// import React from "react";
// import "./Gallery.css";


// const Gallery = () => {
//   return (
//     <div className="gallery-page">
//       <header className="height-100">
//         <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
//          <h1>gallery</h1>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Gallery;

import React from "react";
import "./Gallery.css";
import pic1 from "../../utils/images/pic1.png"; 
import pic2 from "../../utils/images/pic2.png"; 
import pic3 from "../../utils/images/pic3.png"; 

const Gallery = () => {
  return (
    <div className="gallery-page">
      <header
        className="height-100"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(${pic1})`,
        }}
      >
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h2>our many building</h2>
          
        </div>
      </header>
    
      <div className="flex flex-wrap justify-center gap-4 p-5">
        <img
          src={pic1}
          alt="Building 1"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto rounded-lg"
        />
        <img
          src={pic2}
          alt="Building 2"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto rounded-lg"
        />
        <img
          src={pic3}
          alt="Building 3"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Gallery;

