import * as React from "react";
import { Request, Response } from 'express'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { HelmetProvider, HelmetData } from 'react-helmet-async';
import Template from './utils/template';
import AppContainer from "./components/app/AppContainer"
import store from "./store/store";
import { Provider } from "react-redux";


export default ({ assetsByChunkName }: any) => {
    return (req: any, res: Response, next: any) => {
        const context = {};

        const helmetContext: { helmet?: HelmetData } = {}

        const app = (
            <I18nextProvider i18n={req.i18n}>
                <HelmetProvider context={helmetContext}>
                    <Provider store={store}>
                        <StaticRouter location={req.url} context={context}>
                            <AppContainer />
                        </StaticRouter>
                    </Provider>
                </HelmetProvider>
            </I18nextProvider>
        );

        const markup = renderToString(app);

        res.status(200).send(Template({
            helmet: helmetContext.helmet,
            markup,
            assetsByChunkName,
            lng: req.i18n.language,
            store
        }));
    };
}
