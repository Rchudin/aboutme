import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import ENGLISH_LANGUAGE from "./en";
import RUSSIAN_LANGUAGE from "./ru";

export default i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        whitelist: ['en', 'ru'],
        // lng: "en",
        fallbackLng: "en",
        resources: {
            en: ENGLISH_LANGUAGE,
            ru: RUSSIAN_LANGUAGE
        },
        detection: {
            order: ['localStorage'],
            lookupLocalStorage: 'language',
            checkWhitelist: true,
        }
    });