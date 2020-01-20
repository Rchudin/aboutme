import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import s from './App.module.css';
import Navbar from "../navbar/Navbar";
import background from '../../assets/img/mads.png'
import logo from "../../assets/img/RC.png"
import routes from "../../utils/routes";


export default ({token, isInit}) => {

    return (
        <>
            <div className={s.app}>
                <div className={s.content}>
                    <NavLink to="/" className="app_header">
                        <img src={logo} alt="logo"/>
                    </NavLink>
                    <Switch>
                        {routes.map((route, i) => (
                            <Route
                                key={i}
                                path={route.path}
                                exact={route.exact}
                                render={props =>
                                    <route.component routes={route.routes} token={token} isInit={isInit}/>
                                }
                            />
                        ))}
                    </Switch>
                </div>
                <div className={s.navigation}>
                    <Navbar/>
                </div>
            </div>
            <Route path='/' exact={true}>
                <img src={background} alt="" className={s.app_img_background}/>
            </Route>
        </>
    )
}

