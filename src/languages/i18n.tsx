import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import RUSSIAN_LANGUAGE from "./ru.json";
import ENGLISH_LANGUAGE from "./en.json";


export default i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // lng: "en",
        whitelist: ['en', 'ru'],
        fallbackLng: "en",
        detection: {
            order: ['cookie'],
            lookupCookie: 'language',
            cookieMinutes: 43200,
            caches: ['cookie'],
            checkWhitelist: true,
        },
        resources: {
            en: {
                translation: ENGLISH_LANGUAGE
            },
            ru: {
                translation: RUSSIAN_LANGUAGE
            }
        },
    });

