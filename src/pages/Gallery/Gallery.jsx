
// import React from "react";
// import "./Gallery.css";
// import pic1 from "../../utils/images/pic1.png"; 
// import pic2 from "../../utils/images/pic2.png"; 
// import pic3 from "../../utils/images/pic3.png"; 

// const Gallery = () => {
//   return (
//     <div className="gallery-page">
//       <header
//         className="height-100"
//         style={{
//           backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(${pic1})`,
//         }}
//       >
//       </header>
    
//        <h1 className="mt-16 mb-16 w-2/4 ">Currently we don't have pictures yet to put in this page but pictures will be uploaded soon </h1>
//     </div>
   
//   );
// };

// export default Gallery;



import React from "react";
import "./Gallery.css";
import pic1 from "../../utils/images/pic1.png";
import { Camera, Clock, ImagePlus, AlertCircle } from "lucide-react";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <header
        className="height-100 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.85), rgba(5, 10, 35, 0.85)), url(${pic1})`,
        }}
      >
        <div className="text-center text-white p-8 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl mb-2">A visual journey coming soon</p>
        </div>
      </header>

      <div className="container mx-auto py-16 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-6">
            <Camera size={48} className="text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're currently curating a collection of exceptional images for this
            gallery. Our team is working to bring you stunning visuals that
            truly capture our essence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <Clock className="mx-auto mb-4 text-blue-500" size={32} />
              <h3 className="font-semibold mb-2">Check Back Soon</h3>
              <p className="text-gray-600">
                We're updating our gallery regularly with new content.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <ImagePlus className="mx-auto mb-4 text-green-500" size={32} />
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We're taking our time to ensure every image meets our standards.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <AlertCircle className="mx-auto mb-4 text-purple-500" size={32} />
              <h3 className="font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-600">
                Follow our social media for announcements when new images are
                added.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;