// i18n.js

// Import necessary dependencies
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationFR from "./fr.json";
import translationEN from "./eng.json";

import translationSW from "./sw.json";

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      fr: {
        translation: translationFR, // French translations
      },
      en: {
        translation: translationEN, // English translations
      },

      sw: {
        translation: translationSW, // French translations
      },
    },
    lng: "fr", // default language
    fallbackLng: "fr", // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
