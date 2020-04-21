import * as React from "react";
import {Route, Switch} from "react-router-dom";
import * as s from './Contacts.module.css';
import PageIndicatorDouble from "../other/page_indicator_double/PageIndicatorDouble";
import {routeType} from "../../utils/routes";

export interface ContactsProps {
    page: number
    token: string | undefined
    routes: routeType[]
}

export default (props: ContactsProps) => {

    return (
        <div className={s.content}>
            <div>
                {props.token && <PageIndicatorDouble page={props.page}/>}
            </div>
            <Switch>
                {props.routes.map((route: routeType, i: number) => (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={ () =>
                            <route.component routes={route.routes} />
                        }
                    />
                ))}
            </Switch>
        </div>
    )
}