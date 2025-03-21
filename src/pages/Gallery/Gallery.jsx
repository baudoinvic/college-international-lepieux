
import React from "react";
import "./Gallery.css";
import pic1 from "../../utils/images/pic1.png";
import { Camera, Clock, ImagePlus, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Gallery = () => {

    const { t } = useTranslation();

  return (
  
    <div className="gallery-page">
      <header
        className="height-100 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.85), rgba(5, 10, 35, 0.85)), url(${pic1})`,
        }}
      >
        <div className="text-center text-white p-8 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{t("gallery.title")}</h1>
          <p className="text-xl mb-2">{t("gallery.subtitle")}</p>
        </div>
      </header>

      <div className="container mx-auto py-16 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-6">
            <Camera size={48} className="text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            {t("gallery.coming_soon")}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t("gallery.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <Clock className="mx-auto mb-4 text-blue-500" size={32} />
              <h3 className="font-semibold mb-2">
                {t("gallery.check_back.title")}
              </h3>
              <p className="text-gray-600">{t("gallery.check_back.text")}</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <ImagePlus className="mx-auto mb-4 text-green-500" size={32} />
              <h3 className="font-semibold mb-2">
                {t("gallery.quality_first.title")}
              </h3>
              <p className="text-gray-600">{t("gallery.quality_first.text")}</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <AlertCircle className="mx-auto mb-4 text-purple-500" size={32} />
              <h3 className="font-semibold mb-2">
                {t("gallery.stay_updated.title")}
              </h3>
              <p className="text-gray-600">{t("gallery.stay_updated.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;