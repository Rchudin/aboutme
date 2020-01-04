import React from 'react';
import App from "./App";

class AppContainer extends React.Component {
    componentDidMount = () => {
        const languageUsed = document.documentElement.lang;
        const lng = localStorage.getItem('language');
        if (languageUsed !== lng) {
            document.querySelector('html').setAttribute('lang', lng);
        }
    };

    render() {
        return <App />
    }
}

export default AppContainer