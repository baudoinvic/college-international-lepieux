// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import enTranslations from "./en.json";
import frTranslations from "./fr.json";
import swTranslations from "./sw.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    fr: { translation: frTranslations },
    sw: { translation: swTranslations },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
