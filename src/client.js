import React from 'react';
import AppContainer from "./components/app/AppContainer";
import ReactDOM from 'react-dom';
import "./languages/i18n";
import './assets/color.css';
import './assets/index.css';
import './assets/fonts/Montserrat/stylesheet.css'
import '@babel/polyfill';

const Application = (
    <AppContainer/>
);

if (process.env.SSR) {
    const root = document.getElementById('root');
    if (root.hasChildNodes()) {
        ReactDOM.hydrate(
            Application,
            document.getElementById('root'));
    } else {
        ReactDOM.render(
            Application,
            document.getElementById('root'));
    }


} else {
    ReactDOM.render(
        Application,
        document.getElementById('root'));
}