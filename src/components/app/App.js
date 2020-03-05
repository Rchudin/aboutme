import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import s from './App.module.css';
import Navbar from "../navbar/Navbar";
import logo from "../../assets/img/RC.png"
import routes from "../../utils/routes";


export default ({ token, isInit }) => {

    return (
        <>
            <div className={s.app}>
                <div className={s.content}>
                    <div className={s.header}>
                        <NavLink to="/" >
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <Switch>
                        {routes.map((route, i) => (
                            <Route
                                key={i}
                                path={route.path}
                                exact={route.exact}
                                render={props =>
                                    <route.component routes={route.routes} token={token} isInit={isInit} />
                                }
                            />
                        ))}
                    </Switch>
                </div>
                <div className={s.navigation}>
                    <Navbar />
                </div>
            </div>

        </>
    )
}
