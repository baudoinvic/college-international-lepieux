// i18n.js

// Import necessary dependencies
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationFR from "./fr.json";
import translationEN from "./eng.json";
import translationSW from "./sw.json";

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: translationFR,
      },
      en: {
        translation: translationEN, 
      },

      sw: {
        translation: translationSW, 
      },
    },
    lng: "fr", // default language
    fallbackLng: "fr", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
