import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";
import AppContainer from "./components/app/AppContainer"
import './assets/css/index.css';
import './assets/css/color.css';
import './assets/fonts/Montserrat/stylesheet.css'
import "./languages/i18n";
// import './assets/css/flex.css';
// import './assets/css/grid.css';

// import AppContainer from "./components/app/AppContainer";
// import '@babel/polyfill';


const Application = (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer  />
        </Provider>
    </ BrowserRouter>
);


if (process.env.SSR) {
    const root = document.getElementById('main');
    if (root.hasChildNodes()) {
        ReactDOM.hydrate(
            Application,
            document.getElementById('main'));
        console.log("hi");
    } else {
        ReactDOM.render(
            Application,
            document.getElementById('main'));
    }


} else {
    ReactDOM.render(
        Application,
        document.getElementById('main'));
}





