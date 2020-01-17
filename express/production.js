const express = require('express');
const path = require('path');
const i18nextMiddleware = require("i18next-express-middleware");
const i18next = require("i18next");
const app = express();

const ClientStatsPath = path.join(__dirname, './../dist/stats.json');
const ServerRendererPath = path.join(__dirname, './../dist/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);


const ENGLISH_LANGUAGE_PATH = path.join(__dirname, "./../src/languages/en");
const ENGLISH_LANGUAGE = require(ENGLISH_LANGUAGE_PATH);

const RUSSIAN_LANGUAGE_PATH = path.join(__dirname, "./../src/languages/ru");
const RUSSIAN_LANGUAGE = require(RUSSIAN_LANGUAGE_PATH);


i18next
    .use(i18nextMiddleware.LanguageDetector)
    .init({
        // lng: "en",
        whitelist: ['en', 'ru'],
        fallbackLng: "en",
        detection: {
            order: ['cookie'],
            lookupCookie: 'language',
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


app.use(express.static(path.join(__dirname, '../dist/static')));
app.use(
    i18nextMiddleware.handle(i18next, {})
);

app.use(ServerRenderer(Stats));

const PORT = process.env.PORT || 8080;


app.listen(PORT, error => {
    if (error) {

        return console.error(error);
    } else {

        console.log(`Production Express server running at http://127.0.0.1:${PORT}`);
    }
});