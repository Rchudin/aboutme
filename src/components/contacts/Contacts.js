import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
import s from "./Contacts.module.css"


export default ({token, routes, isInit}) => {
    const [page, setPage] = useState(1);

    return (
        <div className={s.content}>
            <div className={s.left}>
                {token &&
                <div className={s.slider}>
                    <div className={`${s.numbering} ${(page === 1) ? "" : s.numbering_deactivated}`}>
                        <label>1</label>
                    </div>
                    <span/>
                    <div className={`${s.numbering} ${(page === 2) ? "" : s.numbering_deactivated}`}>
                        <label>2</label>
                    </div>
                </div>
                }

            </div>

            <Switch>
                {routes.map((route, i) => (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={props =>
                            <route.component setPage={setPage} routes={route.routes} token={token} isInit={isInit}/>
                        }
                    />
                ))}
            </Switch>
        </div>
    )

}


