import React from 'react';
import App from "./App";
import  axios from "axios";


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        const languageUsed = document.documentElement.lang;
        const lng = localStorage.getItem('language');
        if (languageUsed !== lng) {
            document.querySelector('html').setAttribute('lang', lng);
        }

        axios.get(`/api/ts/account/`)
            .then(res => {
                const {token} = res.data;
                this.setState({token});
            })
            .catch(error => {
                //console.log(error);
            })
    };

    render() {
        return <App token={this.state.token}/>
    }
}

export default AppContainer