// i18n.js

// Import necessary dependencies
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./eng.json";
import translationFR from "./fr.json";

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN, // English translations
      },
      fr: {
        translation: translationFR, // French translations
      },
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
