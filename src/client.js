import React from 'react';
import AppContainer from "./components/app/AppContainer";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import "./languages/i18n";
import './assets/css/color.css';
import './assets/css/index.css';
import './assets/fonts/Montserrat/stylesheet.css'
// import '@babel/polyfill';

const Application = (
    <BrowserRouter>
        <AppContainer/>
    </ BrowserRouter>
);

if (process.env.SSR) {
    const root = document.getElementById('root');
    if (root.hasChildNodes()) {
        ReactDOM.hydrate(
            Application,
            document.getElementById('root'));
        console.log("hi");
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