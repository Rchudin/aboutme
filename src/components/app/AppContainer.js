import React from 'react';
import App from "./App";
import  axios from "axios";


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {


        axios.get(`/api/ts/account/`)
            .then(res => {
                const {token} = res.data;
                this.setState({
                    token,
                    isInit: true,
                });
            })
            .catch(error => {
                //console.log(error);
            })
    };

    render() {
        return <App token={this.state.token} isInit={this.state.isInit}/>
    }
}

export default AppContainer