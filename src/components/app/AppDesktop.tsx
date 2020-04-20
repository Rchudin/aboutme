import * as React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import * as s from './App.module.css';
import routesList, {routeType} from "../../utils/routes";
import Navbar from "../navbar/Navbar";
import SocialLinks from "../sociallinks/SocialLinks";
import logo from "../../assets/img/RC.png"
import LanguageSwitchContainer from "../languageSwitch/LanguageSwitchContainer";

export interface AppDesktopProps {

}

export default (props: AppDesktopProps) => {
    return (
        <div className={s.content}>
            <div className={s.main}>
                <div>
                    <NavLink to="/">
                        <img src={logo} alt="logo" className={s.logo}/>
                    </NavLink>
                </div>
                <Switch>
                    {routesList.map((route: routeType, i: number) => (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={props =>
                                <route.component routes={route.routes}/>
                            }
                        />
                    ))}
                </Switch>
            </div>
            <div className={s.navbar}>
                <div className={s.lang}>
                    <LanguageSwitchContainer/>
                </div>
                <Navbar/>
                <div className={s.social}>
                    <SocialLinks/>
                </div>
            </div>
        </div>
    )
}
