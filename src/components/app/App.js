import React from "react";
import {renderRoutes} from "react-router-config";
import  './App.css';
import Navbar from "../navbar/Navbar";
import background from '../../assets/img/mads.png'
import logo from "../../assets/img/RC.png"
import Home from "../home/Home";
import routes from "../../routes";
import {NavLink, Route} from "react-router-dom";


export default () => {
    return (
        <>
            <div className="app">
                <div className="app_wrapper">
                    <NavLink to="/" className="app_header">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    {renderRoutes(routes)}
                </div>
                <Navbar/>
            </div>
            <Route path='/' exact={true} >
                <img src={background} alt="" className="app_img_background" />
            </Route>
        </>
    )
}

