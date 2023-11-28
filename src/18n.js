import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import am from "./locales/am/translation.json";
import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";

const resources = {
  am: { translation: am },
  en: { translation: en },
  ru: { translation: ru }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "am",
    detection: {
      lookupFromPathIndex: 0,
      lookupLocalStorage: "i18nextLng",
      order: ["path", "localStorage"],
      cache: ["path", "localStorage"]
    },
    supportedLngs: ["am", "ru", "en"],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
